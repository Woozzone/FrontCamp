export interface Article {
  _id?: string;
  source: {
    id?: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url?: string;
  urlToImage?: string;
  publishedAt: string;
  updatedAt?: string;
  content?: string;
}
