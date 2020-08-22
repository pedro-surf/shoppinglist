import { v4 } from "uuid";
import * as img from "../assets/icon.png";
import * as img2 from "../assets/img1.jpg";
import img3 from "../assets/logo.svg";

export const defaultUsers = [
  {
    id: v4(),
    name: "John Doe",
    role: "admin",

    createdAt: new Date(),
  },
  {
    id: v4(),
    name: "Pedro",
    role: "user",
    createdAt: new Date(),
  },
];

export const defaultItems = [
  {
    id: v4(),
    src: img2,
    caption: "A bag of mangoes",
  },
  {
    id: v4(),
    src: img3,
    caption: "A JSX Component",
  },
  ...Array(10).fill({
    id: v4(),
    src: img || "",
    caption: "An awesome project",
  }),
];
