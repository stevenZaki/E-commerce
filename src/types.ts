import { string, z } from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quntity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.email().min(1, "Email is required!"),
  phone: z
    .string()
    .min(7, "Phone neumber must be between 7 and 10 digits")
    .max(10, "Phone neumber must be between 7 and 10 digits"),
  address: z.string().min(1, "Address is required! "),
  city: z.string().min(1, "City is required "),
});

export type shippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder name is required!"),
  cardNumber: z
    .string()
    .min(16, "Card number is required!")
    .max(16, "Card number is required"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Invalid expiration date format (DD/MM/YYYY)"
    ),

  CVV: z.string().min(3, "CVV is required ").max(3, "CVV is required"),
});

export type paymentFormInputs = z.infer<typeof paymentFormSchema>;
