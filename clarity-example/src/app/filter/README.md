# Filtering
## Defining filter (UI)
Filter defining is process when via GUI is gradually defined set of input boxes (+ button behind dropdown with column names) with their value and also it is possible to define several filtering rows (+ button behind last filter dropdown).

Once filter is defined then JSON [1] is generated. This is model of filter and is used to:
* hold specified filtering values,
* render GUI elements (input boxes) on page.

Mentioned JSON is array of filtering rows. Each filtering row consists of filtering values (concrete values of concrete column).

Filtering value is defined via **value** key. **Template** part indicate which filtering template should be used for this value (to be able to pair value with column and in future also with data type). 

Addtionally there is **templateIdx** which is index to array of filtering templates (defined in source code). Last value is **id** which represents programatically generated unique id to be able to refer to concrete filtering value.


[1]
```
[
   {
      "filteringValues":[
         {
            "template":{
               "columnName":"subgroup",
               "type":"string",
               "showLabel":"Subgroup"
            },
            "id":0,
            "templateIdx":0,
            "value":"aaaa"
         },
         {
            "template":{
               "columnName":"subgroup",
               "type":"string",
               "showLabel":"Subgroup"
            },
            "id":1,
            "templateIdx":0,
            "value":"bbbb"
         },
         {
            "template":{
               "columnName":"trackingCode",
               "type":"string",
               "showLabel":"Tracking code"
            },
            "id":2,
            "templateIdx":1,
            "value":"cccc"
         }
      ],
      "filterInputTemplateToAdd":1
   },
   {
      "filteringValues":[
         {
            "template":{
               "columnName":"subgroup",
               "type":"string",
               "showLabel":"Subgroup"
            },
            "id":3,
            "templateIdx":0,
            "value":"dddd"
         },
         {
            "template":{
               "columnName":"name",
               "type":"string",
               "showLabel":"Name"
            },
            "id":4,
            "templateIdx":3,
            "value":"eeee"
         }
      ],
      "filterInputTemplateToAdd":3
   }
]
```

## Optimized filter
At the same time as UI filter is defined there is also generated other JSON [2]. This one is used for direct data filtering and this data structure is better structured for faster filtering.

At top level it is again array of filtering rows. Every filtering rows consists of map: template index -> object with filtering values (1..n).
Template index is index of template from source code. Each filtering value is specified also as map id -> filtering value [3]. **This filtering value is the same object as defined in previous UI filter**. ID inside filtering value is the same as key. (In [3] you can see key 0 and ID 0).

So if user decide to remove filtering value (in GUI filter), then it is easy to also remove corresponding value from optimized filter (filtering row is the same (searched by index), filtering value is easy found by template index - outter map key, in case of several column then filtering value ID is used to match inner map)

[2]
```
[
   {  //filtering row
      "0":{ //key - template ID
         "0":{ //key - filtering value ID == inner id
               //value is the same as filtering value in GUI filter
            "template":{
               "columnName":"subgroup",
               "type":"string",
               "showLabel":"Subgroup"
            },
            "id":0,
            "templateIdx":0,
            "value":"aaaa"
         },
         "1":{
            "template":{
               "columnName":"subgroup",
               "type":"string",
               "showLabel":"Subgroup"
            },
            "id":1,
            "templateIdx":0,
            "value":"bbbb"
         },
         "count":2
      },
      "1":{
         "2":{
            "template":{
               "columnName":"trackingCode",
               "type":"string",
               "showLabel":"Tracking code"
            },
            "id":2,
            "templateIdx":1,
            "value":"cccc"
         },
         "count":1
      }
   },
   {
      "0":{
         "3":{
            "template":{
               "columnName":"subgroup",
               "type":"string",
               "showLabel":"Subgroup"
            },
            "id":3,
            "templateIdx":0,
            "value":"dddd"
         },
         "count":1
      },
      "3":{
         "4":{
            "template":{
               "columnName":"name",
               "type":"string",
               "showLabel":"Name"
            },
            "id":4,
            "templateIdx":3,
            "value":"eeee"
         },
         "count":1
      }
   }
```

[3]
```
"0": {
    "template":{
        "columnName":"subgroup",
        "type":"string",
        "showLabel":"Subgroup"
    },
    "id":0,
    "templateIdx":0,
    "value":"aaaa"
}
```
## Why 2 filtering structures
First one holds data in order as they were defined. It ensures that GUI elements are renddered in order as they were defined

Second stores data to minimalize necesity of data searching (finding equal column in one filtering row - to apply logical OR among them), because data are coupled together (filtering values are grouped under template index == column index).