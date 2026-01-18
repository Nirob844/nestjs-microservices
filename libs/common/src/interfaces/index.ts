export interface IUser {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrder {
  id: string;
  userId: string;
  status: OrderStatus;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
  orderItems?: IOrderItem[];
}

export interface IOrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  createdAt: Date;
}

export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}
