export interface FooterItem {
  route: string;
  name: string;
  type?: boolean;
}

export interface FooterSection {
  title: string;
  items: FooterItem[];
}
