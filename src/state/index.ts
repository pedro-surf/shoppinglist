import { atom, selector } from "recoil";
import { v4 } from "uuid";
import { defaultUsers, defaultItems } from "./mock";

export const currentPath = atom({
  key: "currentPath",
  default: "",
});

export const users = atom({
  key: "users",
  default: defaultUsers,
});

export const items = atom({
  key: "items",
  default: defaultItems,
});

export const trackers = selector({
  key: "trackers",
  get: ({ get }) => {
    const usersCount = get(users).length;
    const productsCount = get(items).length;
    const customersCount = get(customers).length; // mock data
    return {
      usersCount,
      customersCount,
      productsCount,
    };
  },
});

export const cartItems = atom({
  key: "cartItems",
  default: [{}],
});

export const customers = atom({
  key: "customers",
  default: [
    {
      name: "Steph Gilmore",
      id: v4(),

      joinedAt: new Date(),
    },
    {
      name: "Ben Howard",
      id: v4(),

      joinedAt: new Date(),
    },
  ],
});
