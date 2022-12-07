const navbarLinks = [
  {
    id: 1,
    url: "/",
    label: "Home",
  },
  {
    id: 2,
    url: "/resume",
    label: "Resume",
  },
  {
    id: 3,
    url: "/contact-me",
    label: "Contact me",
  },
];

const subLinks = [
  {
    page: "Work",
    links: [
      { label: "UX projects", url: "/ux-projects", category: "ux" },
      { label: "Dev projects", url: "/dev-projects", category: "dev" },
    ],
  },
];

const mobileLinks = [
  {
    id: 1,
    url: "/",
    label: "Home",
  },
  {
    id: 2,
    url: "/ux-projects",
    label: "UX projects",
    category: "ux",
  },
  {
    id: 3,
    url: "/dev-projects",
    label: "Dev projects",
    category: "dev",
  },
  {
    id: 4,
    url: "/resume",
    label: "Resume",
  },
  {
    id: 5,
    url: "/contact-me",
    label: "Contact me",
  },
];

export { navbarLinks, subLinks, mobileLinks };
