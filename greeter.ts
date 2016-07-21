///<reference path='jQuery.d.ts'/>

export interface IGreeter {
    greet();
    greetWithMessage(message: string);
}

class Greeter implements IGreeter {
    constructor(public greeting: string) { }
    greet() {
        return this.greetCore(this.greeting);
    }

    greetWithMessage(message: string) {
        return this.greetCore(message);
    }

    private greetCore(message: string) {
        return "<h1>" + message + "</h1>";
    }
};

interface IProductService {

    getProduct(country: string, language: string, skip: number, take: number) : any;
}

class ProductService implements IProductService {

    private apiUri: string = "https://sifu-dev.project-sunfish.com:443/products/pnir/";

	public getProduct(country: string, language: string, skip: number, take: number): any {
		let uri = this.apiUri + country + "/" + language + "/" + skip + "/" + take;
        let data = jQuery.get(uri, this.getProductSuccessCallback);
        return data.responseJSON;
	}

    private getProductSuccessCallback(data: any) {
        return data;
    }
}

let greeter = new Greeter("Hello, world!");
let productService = new ProductService();
let productJson = productService.getProduct("de", "de", 0, 1);
let products: Array<IProduct> = JSON.parse(productJson);
let product: IProduct = products[0];
document.body.innerHTML = product.productName;








































export interface OriginalPicture {
	height: string;
	imageFormat: string;
	name: string;
	uri: string;
	width: string;
	id?: any;
	type?: any;
}

export interface Picture {
	description: string;
	id: string;
	imagetype: string;
	name: string;
	originalPicture: OriginalPicture;
	pictures: any[];
	subline: string;
	thumbnailIndex: string;
}

export interface Claim {
	description: string;
	group: string;
	note: string;
	property: string;
}

export interface DachClaim {
	name: string;
	value: boolean;
	offPackKey: string;
	onPackKey: string;
}

export interface NutritionalData {
	attribute: string;
	attributeProperty: string;
	bLSCode: string;
	comment?: any;
	displayName: string;
	gDAAmount: string;
	gDADisplayValue: string;
	gDAPercent: string;
	gDAPercentAccuracy: string;
	gDAUnitOfMeasurement: string;
	nutrition: string;
	per100gAsPrep: string;
	per100gAsPrepDisplayValue: string;
	per100gAsPrepOffPack: string;
	per100gAsPrepOffPackUnitOfMeasurement: string;
	per100gAsPrepOnPack: string;
	per100gAsPrepOnPackAccuracy: string;
	per100gAsPrepOnPackUnitOfMeasurement: string;
	per100gAsPrepRDAPercent?: any;
	per100gAsPrepText?: any;
	per100gAsPrepUnitOfMeasurement: string;
	per100gAsSold: string;
	per100gAsSoldDisplayValue: string;
	per100gAsSoldOffPack: string;
	per100gAsSoldOffPackUnitOfMeasurement: string;
	per100gAsSoldOnPack: string;
	per100gAsSoldOnPackAccuracy: string;
	per100gAsSoldOnPackUnitOfMeasurement: string;
	per100gAsSoldRDAPercent?: any;
	per100gAsSoldText?: any;
	per100gAsSoldUnitOfMeasurement: string;
	per100mlAsPrep: string;
	per100mlAsPrepDisplayValue: string;
	per100mlAsPrepOffPack: string;
	per100mlAsPrepOffPackUnitOfMeasurement: string;
	per100mlAsPrepOnPack: string;
	per100mlAsPrepOnPackAccuracy: string;
	per100mlAsPrepOnPackUnitOfMeasurement: string;
	per100mlAsPrepRDAPercent?: any;
	per100mlAsPrepText?: any;
	per100mlAsPrepUnitOfMeasurement: string;
	per100mlAsSold: string;
	per100mlAsSoldDisplayValue: string;
	per100mlAsSoldOffPack: string;
	per100mlAsSoldOffPackUnitOfMeasurement: string;
	per100mlAsSoldOnPack?: any;
	per100mlAsSoldOnPackAccuracy?: any;
	per100mlAsSoldOnPackUnitOfMeasurement?: any;
	per100mlAsSoldRDAPercent?: any;
	per100mlAsSoldText?: any;
	per100mlAsSoldUnitOfMeasurement?: any;
	perServing: string;
	perServingDisplayValue: string;
	perServingOffPack: string;
	perServingOffPackUnitOfMeasurement: string;
	perServingOnPack: string;
	perServingOnPackAccuracy: string;
	perServingOnPackUnitOfMeasurement: string;
	perServingRDAPercent?: any;
	perServingText?: any;
	perServingUnitOfMeasurement: string;
	rDAAmount?: any;
	rDAUnitOfMeasurement?: any;
}

export interface Column {
	displayName: string;
	oneColumnValidity: boolean;
	property: string;
}

export interface NutritionTable {
	columns: Column[];
	footerTexts: string[];
	nutritionalTableId: string;
	nutritionalTableName: string;
}

export interface CommonAllergen {
	comment?: any;
	compositionOfRaw: boolean;
	concentration?: any;
	contaminated: boolean;
	name: string;
	property: string;
	unit: string;
	yesNo: boolean;
}

export interface Gda {
	amount: string;
	amountText?: any;
	attribute: string;
	bLSCode: string;
	displayName: string;
	nutrition: string;
	synonym: string;
	unitOfMeasurement: string;
	valueInPercent: string;
}

export interface Yield {
	component1: string;
	component2: string;
	component3?: any;
	component4?: any;
	productYieldInLiters?: any;
	productYieldInPortions: string;
}

export interface Logistic {
	cu: Cu;
	du: Du;
	materialDescription: string;
	minimumDurabilityInDays: string;
	mrdrdu: string;
	remainingLifeInDays: string;
	salesOrgData: SalesOrgData[];
	tu: Tu;
}

export interface Cu {
	aunPerZun: string;
	ean: string;
	heightInMM: string;
	lengthInMM: string;
	onlineProductDescription: string;
	volumeInM3: string;
	weightGrossInKG: string;
	weightNetInKG: string;
	widthInMM: string;
	zunPerAun: string;
}

export interface Du {
	aunPerZun: string;
	ean: string;
	heightInMM: string;
	lengthInMM: string;
	onlineProductDescription?: any;
	volumeInM3: string;
	weightGrossInKG: string;
	weightNetInKG: string;
	widthInMM: string;
	zunPerAun: string;
}

export interface SalesOrgData {
	communicationCode: string;
	distributionStatusValidity: boolean;
	gDSNRelevant: boolean;
	onlineRelevant: boolean;
	salesOrgCountry: string;
	webshopUrl?: any;
}

export interface Tu {
	aunPerZun: string;
	ean: string;
	heightInMM: string;
	lengthInMM: string;
	onlineProductDescription: string;
	volumeInM3: string;
	weightGrossInKG: string;
	weightNetInKG: string;
	widthInMM: string;
	zunPerAun: string;
}

export interface OnlineRelevantLogistic {
	cu: Cu;
	du: Du;
	materialDescription: string;
	minimumDurabilityInDays: string;
	mrdrdu: string;
	remainingLifeInDays: string;
	salesOrgData: SalesOrgData[];
	tu: Tu;
}

export interface IProduct {
	orderScore: string;
	country: string;
	language: string;
	lastModifiedDate?: any;
	productName: string;
	brandCode: string;
	brandName: string;
	subBrandCode: string;
	subBrandName: string;
	categoryCodes: string[];
	categoryNames: string[];
	subCategoryCodes: string[];
	subCategoryNames: string[];
	properties: string;
	preparation: string;
	storageInstructions: string;
	remainingLifeInDays: string;
	tips?: any;
	tags?: any;
	benefits?: any;
	portionSize: string;
	eanCode: string;
	cuEanCodes: string[];
	duEanCodes: string[];
	tuEanCodes: string[];
	ingredients: string;
	slugifiedBrandName: string;
	slugifiedCategoryNames: string[];
	slugifiedSubCategoryNames: string[];
	slugifiedSubBrandName: string;
	pictures: Picture[];
	nutritionInformation: string;
	description: string;
	volumePerServingPortion?: any;
	weightPerServingPortion?: any;
	volumePerServingPortionUnit?: any;
	weightPerServingPortionUnit?: any;
	volume: string;
	volumeUOM: string;
	weight: string;
	weightUOM: string;
	sellingStory?: any;
	claims: Claim[];
	dachClaims: DachClaim[];
	nutritionalData: NutritionalData[];
	nutritionTable: NutritionTable;
	commonAllergens: CommonAllergen[];
	additionalAllergens: any[];
	gdas: Gda[];
	links: any[];
	dachClaimFooterTexts: string[];
	productCodes: string[];
	productNumbers: string[];
	yields: Yield[];
	yieldCaptionComponents: string[];
	logistics: Logistic[];
	onlineRelevantLogistic: OnlineRelevantLogistic;
	webshopURLs?: any;
	relatedProducts: string[];
}