export class Grocery {
    static currentId: number = 0;

    id: number;
    subgroup: string;
    trackingCode: string;
    pairingCode: string;
    name: string;
    supplement: string;
    producer: string;
    state: string;
    maxPrice: number;
    healthInsuranceCompanySurcharge: number;
    paymentWay: string;
    insuredSurcharge: number; //doplatok poistenca
    percentageInsuredSurcharge: number //% doplatku poistenca
    lsSurcharge: number;
    rdInPackage: number;
    prescriptionLimit: string[];
    indicationLimit: string;
    quantityLimitA: string;
    quantityLimitB: string;
    quantityLimitC: string;
    energeticValue: number;
    proteins: number;
    fats: number;
    sacharids: number
    gluten: string;
    priceForRD: number;

    constructor(data: any) {
        this.id = Grocery.currentId++;
        this.subgroup = data.subgroup ? data.subgroup : data["Podskupina"];
        this.trackingCode = data.trackingCode ? data.trackingCode : data["Kód vykazujúci"];
        this.pairingCode = data.pairingCode ? data.pairingCode : data["Kód párujúci"]
        this.name = data.name ? data.name : data["Názov"];
        this.supplement = data.supplement ? data.supplement : data["Doplnok"];
        this.producer = data.producer ? data.producer : data["Výrobca"];
        this.state = data.state ? data.state : data["Štát"];
        this.maxPrice = data.maxPrice ? data.maxPrice : data["Maximálna cena v lekárni"];
        this.healthInsuranceCompanySurcharge = data.healthInsuranceCompanySurcharge ? data.healthInsuranceCompanySurcharge : data["Úhrada zdravotnou poisťovňou"];
        this.paymentWay = data.paymentWay ? data.paymentWay : data["Spôsob úhrady"];
        this.insuredSurcharge = data.insuredSurcharge ? data.insuredSurcharge : data["Doplatok poistenca"];
        this.percentageInsuredSurcharge = data.percentageInsuredSurcharge
            ? data.percentageInsuredSurcharge : data["% doplatku poistenca"];
        this.lsSurcharge = data.lsSurcharge ? data.lsSurcharge : data["LS- výška prepočítaného doplatku"];
        this.rdInPackage = data.rdInPackage ? data.rdInPackage : data["RD v balení"];
        this.prescriptionLimit = data.prescriptionLimit ? data.prescriptionLimit : data["Preskripčné obmedzenie"];
        this.indicationLimit = data.indicationLimit ? data.indicationLimit : data["Indikačné obmedzenie"];
        this.quantityLimitA = data.quantityLimitA ? data.quantityLimitA : data["Množstvové limity a"];
        this.quantityLimitB = data.quantityLimitB ? data.quantityLimitB : data["Množstvové limity b"];
        this.quantityLimitC = data.quantityLimitC ? data.quantityLimitC : data["Množstvové limity c"];
        this.energeticValue = data.energeticValue ? data.energeticValue : data["Energetická hodnota    (kcal/100 ml/g)"];
        this.proteins = data.proteins ? data.proteins : data["Proteíny (g/100ml/g)"];
        this.fats = data.fats ? data.fats : data["Tuky (g/100ml/g)"];
        this.sacharids = data.sacharids ? data.sacharids : data["Sacharidy (g/100ml/g)"];
        this.gluten = data.gluten ? data.gluten : data["Obsah gluténu"];
        this.priceForRD = data.priceForRD ? data.priceForRD : data["Cena za RD"];
    }
}