export class Grocery {
    trackingCode: string;
    pairingCode: string;
    name: string;
    supplement:string;
    producer:string;
    state:string;
    maxPrice:number;
    healthInsuranceCompanySurcharge:number;
    paymentWay:string;
    insuredSurcharge:number;
    lsSurcharge:number;
    rdInPackage:number;
    prescriptionLimit:string[];
    quantityLimit:string;

    constructor(data:any) {
        this.trackingCode = data.trackingCode;
        this.pairingCode = data.pairingCode;
        this.name = data.name;
        this.supplement = data.supplement;
        this.producer = data.producer;
        this.state = data.state;
        this.maxPrice = data.maxPrice;
        this.healthInsuranceCompanySurcharge = data.healthInsuranceCompanySurcharge;
        this.paymentWay = data.paymentWay;
        this.insuredSurcharge = data.insuredSurcharge
        this.lsSurcharge = data.lsSurcharge
        this.rdInPackage = data.rdInPackage
        this.prescriptionLimit = data.prescriptionLimit
        this.quantityLimit = data.quantityLimit;
    }
}