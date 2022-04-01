import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Operating system",
    image:
      "https://media.istockphoto.com/photos/abstract-circular-particles-background-picture-id1079645426?b=1&k=20&m=1079645426&s=170667a&w=0&h=AxkETcLGWMDlcU-FayHcJKAFm3DZdYOaOsYsVAe06Cs=",
  },
  {
    _id: uuid(),
    categoryName: "Computer Networks",
    image:
      "https://media.istockphoto.com/photos/abstract-circular-particles-background-picture-id1079645426?b=1&k=20&m=1079645426&s=170667a&w=0&h=AxkETcLGWMDlcU-FayHcJKAFm3DZdYOaOsYsVAe06Cs=",
  },
  {
    _id: uuid(),
    categoryName: "Data structures and algorithms",
    image:
      "https://media.istockphoto.com/photos/abstract-circular-particles-background-picture-id1079645426?b=1&k=20&m=1079645426&s=170667a&w=0&h=AxkETcLGWMDlcU-FayHcJKAFm3DZdYOaOsYsVAe06Cs=",
  },
];
