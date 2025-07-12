export type EntityBlogList = {
  id: number
  category: {
    id: number
    name: string
    description: string
    created_at: string
  }
  tags: Array<{
    id: number
    name: string
    created_at: string
  }>
  title: string
  slug: string
  excerpt: string
  content: string
  created_at: string
  author: {
    id: number
    username: string
    email: string
    first_name: string
    last_name: string
    phone: string
    is_active: boolean
    is_staff: boolean
    date_joined: string
  }
  cover_image: string
}

export interface EntityRequestEntityBlogList {
  category?: number;
  tags?: number[]
}