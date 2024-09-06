export interface FaqModel {
  id: string;
  name: string;
  img: string;
  createAt: string;
  imgKey: string;
  faqs: FaqQuestionModel[];
}

export interface FaqQuestionModel {
  id: string;
  question: string;
  answer: any;
  createAt?: string;
}
