import { PaymentOption, CardTypeEnum } from '../enum/card-type.enum';

export interface IPaymentModel {
  make: string;
  model: string;
  plan: string;
  milage: number;
  timePeriod: number;
  modelYear: string;
  deductAmount?: number;
}

export interface IContract {
  contractNumber: string;
  customerName: string;
  customerStreetAddress: string;
  customerCity: string;
  customerZip: string;
  customerPhoneNumber: string;
  customerEmail: string;
  dealerName: string;
  dealerStreetAddress: string;
  dealerCity: string;
  dealerZip: string;
  dealerPhoneNumber: string;
  dealerEmail: string;
  dealerAC: string;
  dealerAccNo: string;
  itemizationOfAmountFinancedOf: number;
  cashPrice: number;
  taxOnSale: number;
  downPayment: number;
  amountPaidToOthersOnYourBehalfOf: number;
  amountFinancedOf: number;
  totalOfPayments: number;
  totalSalePrice: number;
  noOfPayments: number;
  amountOfPayments: number;
  whenPaymentsAreDue: string;
  cardType: string;
  cardNumber: string;
  cardExpiration: string;
  nameOnCard: string;
  paymentsOption: string;
}

export interface Contract {
  contractNumber: string;
  customer: Customer;
  dealer: Dealer;
  vehicle: VehicleInformation;
  lienHolder: LienHolderInformation;
  serviceContract: ServiceContractInformation;
  itemizationOfAmountFinancedOf: number;
  cashPrice: number;
  taxOnSale: number;
  downPayment: number;
  amountPaidToOthersOnYourBehalfOf: number;
  amountFinancedOf: number;
  totalOfPayments: number;
  totalSalePrice: number;
  noOfPayments: number;
  amountOfPayments: number;
  whenPaymentsAreDue: string;
  cardType: CardTypeEnum;
  cardNumber: string;
  cardExpiration: string;
  nameOnCard: string;
  paymentsOption: PaymentOption;
}

export interface Customer {
  name: string;
  streetAddress: string;
  city: string;
  zip: string;
  phoneNumber: string;
  email: string;
  state: string;
}

export interface Dealer {
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
  email: string;
  ac: string;
  accNo: string;
}

export interface VehicleInformation {
  year: string;
  make: string;
  model: string;
  vin: string;
  price: string;
  odometer: string;
  saleDate: string;
}

export interface LienHolderInformation {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface ServiceContractInformation {
  isDiamond: boolean;
  isElite: boolean;
  isPremier: boolean;
  isPowerTrain: boolean;
  isElectric: boolean;
  termMonths: number;
  expirationDate: string;
  termMiles: string;
  expirationMiles: string;
  surcharges: boolean;
  commercial: boolean;
  lift: boolean;
  plus: boolean;
  rideShare: boolean;
  evBatteryCoverage: boolean;
  evWallChargerCoverage: boolean;
  maintenanceA: boolean;
  maintenanceB: boolean;
  turboOrSupercharge: boolean;
  fourByFourOrAWD: boolean;
  hybrid: boolean;
  diesel: boolean;
  deductible: string;
}

export interface IDataVIN {
  surcharges: number;
  [key: string]: number;
}
