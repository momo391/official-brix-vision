export interface Service {
  serviceId: number;
  serviceName: string;
  serviceDescription: string;
  cover_url: string;
  price: number;
}

export interface Media {
  mediaId: number;
  title: string;
  media_Type: string;
  mediaUrl: string;
  uploadDate: string;
  width: number;
  height: number;
  categoryid: number | null;
  category: Category | null;
}

export interface Category {
  categoryId: number;
  cName: string;
  cDescription: string;
  cover_url: string | null;
  media: Media | null;
}
