export interface IServiceBlogRequest {
  id?: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  cover_image?: File | null;
  category?: number | null;
  tags: number[];
  prediction?: number | null;
  published?: boolean;
  published_at?: string;
  is_featured?: boolean;
}

export interface IServiceBlogResponse {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  author: number;
  category: number | null;
  tags: number[];
  prediction: number | null;
  created_at: string;
  updated_at: string;
  published: boolean;
  published_at: string | null;
  views_count: number;
  is_featured: boolean;
}
