export const loadConcepts = () => {
  const directives = {
    id: "#directive-content",
    title: "directives",
    text: "Manipulate the DOM directly from html with dagger defined attributes.",
  };
  const dataBinding = {
    id: "#databinding-content",
    title: "data binding",
    text: "Manipulate state data directly as plain javascript objects.",
  };
  const modules = {
    id: "#modules-content",
    title: "module management",
    text: "No more webpack! Achieve performant module abstractions you can understand.",
  };
  const routing = {
    id: "#routing-content",
    title: "routing management",
    text: "Dagger ships with its own routing! Flexible and concise.",
  };

  return {
    concepts: [directives, dataBinding, modules, routing],
  };
};

export const declareStateDemo = () => `
<div 
  +loading="{
    name: "John Smith",
    age: 18, 
  }"
>
  Hi! my name is \${name}. I'm \${age} this year.
</div>
`;
export const updateStateDemo = () => `
<div 
  +loading="{name: 'John', age: 21}"
  +loaded="name='Jane', age++"
>
  Hi! my name is \${name}. I'm \${age} this year.
</div>
`;

export const clickDemo = () => `
<div +loading="{complete: false}">
  <div>\${complete}</div>
  <div +click="complete=!complete">
    click me!
  </div>
</div>
`;

export const mouseupDemo = () => `
<div +loading="{text: ''}">
  <div>\${text}</div>
  <div +mouseup="text=window.getSelection().toString()">
    Highlight me!
  </div> 
</div>
`;

export const valueDemo = () => `
<div +loading="{string: ''}">
  <input $value="string">
  <span>input value: \${string}</span>
</div>
`;

export const watchDemo = () => `
<div +loading="{number: 0}">
  <input $value="number">
  <span 
    +loading="{sqr: number^2}"
    $watch="sqr=number^2"
  >
    \${sqr}
  </span>
</div>
`;

const viewModuleIndexCode = () => `
<script type="dagger/modules">
  {
    hello: "./hello.html"
  }
</script>

<body>
  <hello +loading="{name: 'John'}"></hello>
</body>
`;
const viewModuleHelloCode = () => `
<div>
  Hello, \${name}. Welcome to dagger.js!
</div>
`;

export const viewModuleDemoLoading = () => ({
  files: [
    {
      label: "index.html",
      type: "html",
      code: viewModuleIndexCode(),
    },
    {
      label: "hello.html",
      type: "html",
      code: viewModuleHelloCode(),
    },
  ],
});

const todoList = () => `
<script type="dagger/modules">
  {
    view: "#view",
    todo_item: "./todo.html"
    js: "./todoList.js"
  }
</script>

<template id="view">
  <div +loading="loadTodoTasks()">
    <todo_item $each="task"></todo_item>
  </div>
</template>
`;

const todoItem = () => `
<script type="dagger/modules">
  {
    view: "#view",
    css: "#css"
  }
</script>

<template id="view">
  <li>\${index}: \${item}</li>
</template>

<style id="css" type="dagger/style">
  li {
    color: red;
  }
</style>
`;

const todoListJs = () => `
export const loadtodoTasks = () => [
  'clean room',
  'buy cereal',
  'feed cat'
]
`;

export const namespaceDemoLoading = () => ({
  // css: "height: 360px",
  files: [
    { label: "todoList.html", type: "html", code: todoList() },
    { label: "todoItem.html", type: "html", code: todoItem() },
    { label: "todoList.js", type: "js", code: todoListJs() },
  ],
});

export const createLine = (
  { start, startSocket, end, endSocket },
  LeaderLine
) => {
  if (start && end) {
    new LeaderLine(start, end, {
      startPlug: "square",
      startSocket,
      endSocket,
      color: "#ff618c85",
    });
  }
};

