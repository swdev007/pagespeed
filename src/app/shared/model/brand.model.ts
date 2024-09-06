import { FaqQuestionModel } from './faq.model';

/* eslint-disable @typescript-eslint/no-inferrable-types */
export class BrandModel {
  label: string = '';
  slug: string = '';
  title: string = '';
  headerText: string = '';
  headerContent: string = '';
  headerImage: string = '';
  headerMobileImage: string = '';
  videoLink: string = '';
  resourceSectionImage: string = '';
  warrantySectionImage: string = '';
  brnadInfoVideoSection?: { title: string; content: string };
  extendedWarrantyProtectSection?: {
    title: string;
    subTitle: string;
    content: string;
    safeguardTitle: string;
    safeguardItems: SafeguardSectionModel[];
  };
  whyChooseNobleQuoteSection?: { title: string; sectionItems: SafeguardSectionModel[]; content: string };
  warrantyInfoSection?: WarrantyInfoModel;
  resources?: ResourcesModel;
  carInfoList?: BrandInfoModel[];
  faqQuestions?: FaqQuestionModel[];
}

export interface BrandsModel {
  [ke: string]: BrandModel;
}

export interface BrandInfoModel {
  title: string;
  backGroundColor: string;
  icon: string;
  sections: BrandInfoSectionModel[];
}
export interface BrandInfoSectionModel {
  sectionHeader: string;
  sectionContent: string;
}
export interface SafeguardSectionModel extends BrandInfoSectionModel {
  icon: string;
}

export interface WarrantyInfoModel {
  title: string;
  content: string;
  warrantyInformation: {
    title: string;
    sectionItems: BrandInfoSectionModel[];
  };
  servicingRequirements: {
    title: string;
    sectionItems: BrandInfoSectionModel[];
  };
}
export interface ResourcesModel {
  title: string;
  resources: string[];
  section?: BrandInfoSectionModel;
}
