return {
  mode: "history",
  default: "home",
  aliases: { "": "home", learn: "learn/welcome" },
  routing: {
    constants: {
      title: "dagger.js",
    },
    modules: "home",
    children: [
      {
        path: "home",
        modules: "home",
        constants: { layer1: "home", title: "home" },
      },
      {
        path: "learn",
        modules: "learnlayout",
        constants: { layer1: "learnlayout", title: "learn" },
        children: [
          {
            path: "welcome",
            modules: "welcome",
            constants: { layer2: "welcome", title: "welcome" },
          },
          {
            path: "part1",
            modules: "welcome",
            constants: { layer2: "welcome", title: "part 1" },
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
