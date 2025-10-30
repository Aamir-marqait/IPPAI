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
    avatar: string;
  };
  publishedAt?: string;
  featured?: boolean;
  date?: string;
}
