export const menuItem = () => [
  { name: "home", link: "/" },
  { name: "welcome", link: "/tutorial/welcome" },
  {
    name: "quick start",
    link: "/tutorial/part1",
    children: [
      { name: "install", link: "/tutorial/welcome" },
      { name: "example projects", link: "/tutorial/welcome" },
      { name: "libraries", link: "/tutorial/welcome" },
    ],
  },
  { name: "part one", link: "/tutorial/part1" },
  { name: "part two", link: "/tutorial/part2" },
  { name: "part three", link: "/tutorial/part3" },
  { name: "part four", link: "/tutorial/part4" },
];
