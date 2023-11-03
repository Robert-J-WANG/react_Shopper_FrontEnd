/// <reference types="vite/client" />

type TNavMenu = {
  id: number;
  title: string;
  link: string;
};

type TItem = {
  id: number;
  name: string;
  image: string;
  new_price: number;
  old_price: number;
};
type TShopItem = {
  id: number;
  name: string;
  category: string;
  image: string;
  new_price: number;
  old_price: number;
};
