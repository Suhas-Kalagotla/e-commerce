export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  image?: any;
  category: string;
}

export interface Cart {
  cartId: string;
  userId: string;
  user: User;
  items: CartItem[];
}

export interface CartItem {
  id:string;
  cartId:string;
  cart:Cart;
  productId:string;
  product:Product;
  quantity:number;
}
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  orders: Order[];
  cart: Cart?;
  role: Role;
}
