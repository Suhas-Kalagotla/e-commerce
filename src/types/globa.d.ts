export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  image?: any;
  category: string;
}

export enum Category{
    male ="male",
    female = "female",
}
