export interface ArticleCard {
  image: string;
  title: string;
  desc: string;
}

export interface AccordionData {
  id: number;
  title: string;
  desc: string;
}

export interface PopularTopics {
  id: number;
  title: string;
  image: string;
  accordionList: AccordionData[];
}

export interface CompetitorsList {
  id: number;
  title?: string;
  image?: string;
  coveragePlans: string;
  highMileageCoverage: string;
  maintenanceCoverage: string;
  everydayDriverBenefits: string;
  customerSatisfaction: string;
  directClaimsAdministrator: string;
}

export interface NavTaqCustomers {
  img: string;
  tabName: string;
  customers: CustomersListData[];
}

export interface CustomersListData {
  customerImage: string;
  review: string;
  name: string;
  position: string;
}

export interface JobData {
  id: string;
  name: string;
  positions: PositionList[];
}

export interface PositionList {
  name: string;
  position: string;
  type: string;
}

export interface PlanType {
  id: number;
  title: string;
  desc: string;
  img?: string;
  list?: PlanTypeList[];
  link?: string;
}

export interface DifferenceTogether {
  text: string;
  image: string;
  src: string;
}

export interface PlanTypeList {
  text: string;
}

export interface AwardsList {
  img: string;
  title: string;
  mobImg?: string;
}

export interface CoveragePlansData {
  planName: string;
  powertrain: boolean;
  premier: boolean;
  elite: boolean;
  diamond: boolean;
}

export interface CarouselItem {
  text: string;
  image: string;
}

export interface ProtectionTabs {
  id: number;
  title: string;
  tabName?: string;
  content?: ProtectionTabsContent[];
}

export interface ProtectionTabsContent {
  title: string;
  desc: string;
  subTitle: string;
  subDesc: string;
}

export interface CarDots {
  id: number;
  left: number;
  top: number;
  active: boolean;
  title: string;
  price: string;
}

export interface CarSlides {
  id: number;
  img: string;
  imgMob: string;
  dots: CarDots[];
}

// interfaces for Glossary page

export interface GlossaryAlphabet {
  key: string;
  title: string;
  text: string;
  subText?: string;
}

// your claims
export interface YourClaimsTableData {
  firsName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  claimNo: number;
  date: string;
  status: number;
}

// user data form
export interface UserFormData {
  email: string;
  firstName: string;
  lastName: string;
  // fullName: string;
  phoneNumber: string;
  message?: string;
}

// payment method vehicle type list
export interface ITypeList {
  title: string;
  value: string;
  subTitle?: string;
  img?: string;
}

export interface ICoverageList {
  title: string;
  plan: string;
  paymentMonth: string;
  price: string;
  priceCent: string;
  deductibleList: IDeductibleList[];
  mostListedComponentTitle: string;
  mostListedComponents: string[];
  value: string;
  totalPrice: number;
}

interface IDeductibleList {
  active: boolean;
  value: string;
}
