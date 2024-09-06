export interface BlogModel {
  author: AuthorModel;
  content: string;
  description: string;
  id: string;
  img: string;
  title: string;
  createAt: string;
  slug: string;
  categories: CategoryModel[];
  publishedAt: string | null;
  audio: string | null;
  snapshot: string;
  summaries: SummaryModel[];
}

export interface BlogListResponse {
  count: number;
  result: BlogModel[];
}

export interface BlogFilterModel {
  searchText: string;
  pageNumber: number;
  limit: number;
  categoryIds: string[];
  categorySlug?: string;
  authorSlug?: string;
}
export interface CategoryModel {
  id: string;
  name: string;
  slug: string | null;
}

export interface AuthorModel {
  id: string;
  name: string;
  slug: string;
  profileImage: string;
  description: string;
  bio: string;
  profileImagePreviewUrl: string;
}

export interface SummaryModel {
  content: string;
  id: string;
  title: string;
}
