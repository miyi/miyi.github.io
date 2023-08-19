export const menuItem = () => [
  { name: "home", link: "/" },
  { name: "welcome", link: "/learn/welcome" },
  {
    name: "quick start",
    link: "/learn/part1",
    children: [
      { name: "install", link: "/learn/welcome" },
      { name: "example projects", link: "/learn/welcome" },
      { name: "libraries", link: "/learn/welcome" },
    ],
  },
  { name: "part one", link: "/learn/part1" },
  { name: "part two", link: "/learn/part2" },
  { name: "part three", link: "/learn/part3" },
  { name: "part four", link: "/learn/part4" },
  { name: "routing", link: "/learn/routing" },
];
