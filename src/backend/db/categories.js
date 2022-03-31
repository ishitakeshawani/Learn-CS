import { v4 as uuid } from "uuid";
import categoryimage from "../../assets/Images/background.webp"
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Operating System",
    image: categoryimage
  },
  {
    _id: uuid(),
    categoryName: "Data Structures and Algorithms",
    image: categoryimage
  },
  {
    _id: uuid(),
    categoryName: "Computer Network",
    image: categoryimage
  },
  {
    _id: uuid(),
    categoryName: "DBMS",
    image: categoryimage
  }
];
