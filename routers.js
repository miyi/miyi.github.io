

return {
  mode: "history",
  default: "",
  aliases: { "": "home", "tutorial": "tutorial/welcome" },
  modules: [
    "home",
    "tutorial",
    "welcome",
    "part1",
    "part2",
    "part3",
    "part4",
    "documentation",
  ],
  routing: {
    constants: {
      title: "dagger.js",
    },
    children: [
      {
        path: "home",
        modules: "home",
        constants: { layer1: "home", title: "home" },
      },
      {
        path: "tutorial",
        modules: "tutorial",
        constants: { layer1: "tutorial", title: "tutorial" },
        children: [
          {
            path: "welcome",
            modules: "welcome",
            constants: { layer2: "welcome", title: "welcome" },
          },
          {
            path: "part1",
            modules: "part1",
            constants: { layer2: "part1", title: "part 1" },
          },
          {
            path: "part2",
            modules: "part2",
            constants: { layer2: "part2", title: "part 2" },
          },
          {
            path: "part3",
            modules: "part3",
            constants: { layer2: "part3", title: "part 3" },
          },
          {
            path: "part4",
            modules: "part4",
            constants: { layer2: "part4", title: "part 4" },
          },
        ],
      },
      {
        path: "documentation",
        modules: "constants",
        constants: { layer1: "documentation" },
      },
    ],
  },
};
