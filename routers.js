return {
  mode: "history",
  default: "home",
  aliases: { "": "home", learn: "learn/welcome" },
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
        path: "demos",
        modules: "demospage",
        constants: { layer1: "demospage", title: "demos" },
      },
      {
        path: "learn",
        modules: "learnlayout",
        constants: { layer1: "learnlayout", title: "learn" },
        children: [
          {
            path: "welcome",
            modules: "tutorial_welcome",
            constants: { layer2: "tutorial_welcome", title: "welcome" },
          },
          {
            path: "part1",
            modules: "tutorial1",
            constants: { layer2: "tutorial1", title: "part 1" },
          },
          {
            path: "part2",
            modules: "tutorial2",
            constants: { layer2: "tutorial2", title: "part 2" },
          },
          {
            path: "part3",
            modules: "tutorial3",
            constants: { layer2: "tutorial3", title: "part 3" },
          },
          {
            path: "part4",
            modules: "tutorial4",
            constants: { layer2: "tutorial4", title: "part 4" },
          },
          {
            path: "routing",
            modules: "routing",
            constants: { layer2: "routing", title: "routing fundamentals" },
          },
        ],
      },
      {
        path: "docs",
        modules: "docslayout",
        constants: { layer1: "docslayout", title: 'docs' },
        children: [
          {path},
          {},
          {},
        ]
      },
    ],
  },
};
