export interface IPost extends IPostMatter {
  slug: string;
  content: string;
  readingMinutes: number;
  wordCount: number;
}

export interface IPostMatter {
  title: string;
  description: string;
  tags: string[];
  draft?: boolean;
  date: string;
}
