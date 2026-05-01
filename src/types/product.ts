export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;

  description: string;   // short text (1 line)
  category: string;      // e.g. "Soft Skills"
  duration: string;      // e.g. "4 Weeks"
}