import tour1 from "../images/tour_1.jpeg";
import tour2 from "../images/tour_2.jpeg";
import tour3 from "../images/tour_3.jpeg";
import tour4 from "../images/tour_4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#About", text: "About" },
  { id: 3, href: "#Services", text: "Services" },
  { id: 4, href: "#Tours", text: "Tours" },
];



export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    texts:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },

  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    texts:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },

  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    texts:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

// export default services;

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    duration: "6 Days",
    cost: "$2100",
  },

  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonissia",
    duration: "11 Days",
    cost: "$1400",
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "Explore Hong Kong ",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    duration: "8 Days",
    cost: "$5000",
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: "20 days",
    cost: "from $3300",
  },
];
