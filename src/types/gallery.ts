export interface IGalleryCard {
  id: string;
  title: string;
  description: string;
  img: string;
  price: number;
  altImg: string;
  className?: string;
  isForSell?: boolean;
}
