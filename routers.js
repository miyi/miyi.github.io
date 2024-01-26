return {
  mode: "history",
  default: "home",
  aliases: { "": "home", learn: "learn/welcome", docs: "docs/loading" },
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
        constants: { layer1: "docslayout", title: "docs" },
        children: [
          {
            path: "loading",
            modules: "loading",
            constants: { content: "loading", title: "+loading" },
          },
          {
            path: "loaded",
            modules: "loaded",
            constants: { content: "loaded", title: "+loaded" },
          },
          {
            path: "unloading",
            modules: "unloading",
            constants: { content: "unloading", title: "+unloading" },
          },
          {
            path: "unloaded",
            modules: "unloaded",
            constants: { content: "unloaded", title: "+unloaded" },
          },
          {
            path: "checked",
            modules: "checked",
            constants: { content: "checked", title: "$checked" },
          },
          {
            path: "class",
            modules: "d_class",
            constants: { content: "d_class", title: "$class" },
          },
          {
            path: "exist",
            modules: "exist",
            constants: { content: "exist", title: "$exist" },
          },
          {
            path: "each",
            modules: "each",
            constants: { content: "each", title: "$each" },
          },
          {
            path: "focus",
            modules: "focus",
            constants: { content: "focus", title: "$focus" },
          },
          {
            path: "html",
            modules: "d_html",
            constants: { content: "d_html", title: "$html" },
          },
          {
            path: "selected",
            modules: "selected",
            constants: { content: "selected", title: "$selected" },
          },
          {
            path: "style",
            modules: "d_style",
            constants: { content: "d_style", title: "$style" },
          },
          {
            path: "value",
            modules: "value",
            constants: { content: "value", title: "$value" },
          },
          {
            path: "watch",
            modules: "watch",
            constants: { content: "watch", title: "$watch" },
          },
        ],
      },
    ],
  },
};
