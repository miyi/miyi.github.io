const doc_lifecycle_uris ={
  loading: "/pages/docs/lifecycle/loading.html",
  loaded: "/pages/docs/lifecycle/loaded.html",
  unloading: "/pages/docs/lifecycle/unloading.html",
  unloaded: "/pages/docs/lifecycle/unloaded.html",
}

const doc_control_uris = {
  checked: '/pages/docs/control/checked.html',
  exist: '/pages/docs/control/exist.html',
  each: '/pages/docs/control/each.html',
}

const quick_demo_page = {
  demospage: "/pages/demos/index.html",
}

const page_layouts = {
  learnlayout: "/pages/learn/layout.html",
  docslayout: "/pages/docs/docslayout.html",
}

const tutorials = {
  tutorial_welcome: "/pages/learn/welcome/welcome.html",
  tutorial1: "/pages/learn/part1/part1.html",
  tutorial2: "/pages/learn/part2/part2.html",
  tutorial3: "/pages/learn/part3/part3.html",
  tutorial4: "/pages/learn/part4/part4.html",
  routing: "/pages/learn/routing/fundamentals.html",
}

return {
  home: "/pages/homepage/homepage.html",
  ...page_layouts,
  ...doc_lifecycle_uris,
  ...doc_control_uris,
  ...tutorials,
  ...quick_demo_page,
};