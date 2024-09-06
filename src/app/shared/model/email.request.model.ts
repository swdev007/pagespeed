export interface FreeQuoteEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  year: string;
  make: string;
  model: string;
  trim?: string;
  mileage: string;
  message?: string;
  driveMiles?: string;
  planTime?: string;
  source?: Source;
}

export interface FreeQuoteEmailResponse {
  code: string;
  details: {
    Modified_time: string;
    Modified_by: UserDetail;
    Created_Time: string;
    id: string;
    Create_by: UserDetail;
  };
  message: string;
  status: string;
  source?: Source
}

interface UserDetail {
  name: string;
  id: string;
}
export enum Source {
  WEBSITE_QUOTE = 'Website Quote',
  CONSUMER_VOICE = 'Consumer Voice',
  MONEY = 'Money',
}
