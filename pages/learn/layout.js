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

export const loadPartCardScopes = () => [
  {
    title: "part 1",
    description: "Create a basic component with $scope and event directives.",
    bottom: "5 min",
    link: "learn/part1",
  },
  {
    title: "part 2",
    description:
      "Use abstractions to create more complex components with modules.",
    bottom: "10 min",
    link: "learn/part2",
  },
  {
    title: "part 3",
    description:
      "create a hash router with the $router variable and the $html directive",
    bottom: "15 min",
    link: "learn/part3",
  },
  {
    title: "part 4",
    description: "Finish a complete SPA with some bonus content",
    bottom: "20 min",
    link: "learn/part4",
  },
];

export const produce4 = () => 4