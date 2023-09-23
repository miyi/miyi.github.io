export const routerConfig = () => ({
  label: "router.js",
  demo: `
return {

  //place setting options here
  //if empty dagger will use default

  routing: {
    modules: "home_page",
    constants: {
      layer1: "home_page", title: "home"
    },
    children: [
      {
        path: "taskboard",
        modules: "task_board",
        constants: {layer1: "task_board", title: "tasks"}
      },
      {
        path: "taskboard",
        modules: "task_board",
        constants: {layer1: "task_board", title: "tasks"}
      }
    ]

  }
}
  `
})