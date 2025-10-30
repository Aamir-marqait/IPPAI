export interface Article {
  _id?: string;                    // optional for flexibility
  title: string;
  slug?: { current: string };
  summary: string;
  image: string;
  pdfFile: string;
  categories?: string[];
  customCategories?: string[];
  author: {
    name: string;
    avatar: string | null;        // ✅ Fixed: avatar can be null from Sanity
  };
  publishedAt?: string;
  featured?: boolean;
  date?: string;
}