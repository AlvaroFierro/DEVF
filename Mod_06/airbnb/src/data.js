import CardImage1 from "./img/card-img.png";
import CardImage2 from "./img/card-img-2.png";
import CardImage3 from "./img/card-img-3.png";
export default [
  {
    id: 1,
    title: "Lorem Ipsum",
    description:
      "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever",

    price: 136,
    coverImg: CardImage1,
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    openSpots: 0,
    country: "USA",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    description:
      "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever",
    price: 125,
    coverImg: CardImage2,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 27,
    country: "Canada",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    description:
      "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever",
    price: 50,
    coverImg: CardImage3,
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Offline",
    openSpots: 3,
    country: "U.K",
  },
];
