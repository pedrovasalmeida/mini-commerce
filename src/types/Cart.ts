export interface CartItems {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Cart {
  items: CartItems[],
  uniqueItemsCount: number,
  totalItemsCount: number,
  info: {
    shipping: number,
    subTotal: number,
    discounts: number,
    total: number,
  }
}