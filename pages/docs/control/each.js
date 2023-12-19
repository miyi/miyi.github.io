
export const rulesTableRows = [
  {
    value: "array scope variable",
    example: [`$each="myArray"`],
  },
  {
    value: "expression that resolves into an array",
    example: [`$each="fetchArray()"`, `$each="fetchArray(scopeVariable)"`],
  },
];

export const basicExample = {
  demo: `
<div +loading="{
  array: ['apple','strawberry', 'banana']
}">
  <ul>
    <li $each="array">\${index} : \${item}</li>
  </ul>
</div>
  `,
  html: `
  <div class="basic-demo-card" +loading="{
    array: ['apple','strawberry', 'banana']
  }">
    <ul>
      <li $each="array">\${index} : \${item}</li>
    </ul>
  </div>
  
  `,
};

export const basicExample_menu = {
  demo: `
<div +loading="{
  menu: [
    {name: 'fries', veg: true, price: '$2'},
    {name: 'salad', veg: true, price: '$5'},
    {name: 'burger', veg: false, price: '$8'},
  ]
}">
<div
  $class="{veg: item.veg}"
  $each="menu"
>
  <div>\${item.name}</div>
  <div>\${item.price}</div>
<div>
</div>
  `,
  html: `
  <div
  class="basic-demo-card"  
  +loading="{
    menu: [
      {name: 'fries', veg: true, price: '$2'},
      {name: 'salad', veg: true, price: '$5'},
      {name: 'burger', veg: false, price: '$8'},
    ]
  }">
    <div
    class="demo-menu-item"
      $class="{veg: item.veg}"
      $each="menu"
    >
      <div>\${item.name}</div>
      <div class="price">\${item.price}</div>
    <div>
  </div>
  
  `,
};

export const basicExample_todo_browser = {
  html: `
  <div class="basic-demo-card" +loading="{
    string: '',
    todos: [
      {title: 'laundry', completed: false},
    ]
  }">
    <input $value="string" +keyup="addTodo($event, $scope)">
    <div
      class="todo"
      $each="todos"
      +loading="{...item}"
      $class="{completed}"
    >
      <input type="checkbox" $checked="completed">
      <div>\${title}</div>
    <div>
  </div>
  `,
};
export const addTodo = ($event, $scope) => {
  if ($event.key === "Enter" && $scope.string.trim()) {
    const todo = {
      title: $scope.string,
      completed: false,
    };
    $scope.todos.push(todo);
    $scope.string = "";
  }
  return null;
};

export const basicExample_todo_html = {
  type: "html",
  label: "html",
  code: `
<div +loading="{
  string: '',
  todos: [
    {title: 'laundry', completed: false},
  ]
}">
  <input $value="string" +keyup="addTodo($event, $scope)">
  <div
    $each="menu"
    +loading="{...item}"
    $class="{completed}"
  >
    <input type="checkbox" $checked="completed">
    <div>\${title}</div>
  <div>
</div>
  `,
};

export const basicExample_todo_js = {
  type: "js",
  label: "javascript",
  code: `
export const addTodo = ($event, $scope) => {
  if ($event.key === "Enter" && $scope.string.trim()) {
    const todo = {
      title: $scope.string,
      completed: false,
    };
    $scope.todos.push(todo);
    $scope.string = "";
  }
  return null;
};
  `,
};

export const uniqueDecorator_item = {
  demo: `
<div +loading="{
  array: ['apple','strawberry', 'banana']
}">
  <ul>
    <li $each#item:el="array">
      \${index} : \${el}
    </li>
  </ul>
</div>
  `,
  html: `
  <div class="basic-demo-card" +loading="{
    array: ['apple','strawberry', 'banana']
  }">
    <ul>
    <li 
      $each#item:el="array"
    >\${index} : \${el}</li>
    </ul>
  </div>
  `,
};

export const uniqueDecorator_index = {
  demo: `
<div +loading="{
  array: ['apple','strawberry', 'banana']
}">
  <ul>
    <li $each#index:dex="array">
      \${dex} : \${item}
    </li>
  </ul>
</div>
  `,
  html: `
  <div class="basic-demo-card" +loading="{
    array: ['apple','strawberry', 'banana']
  }">
    <ul>
      <li $each#index:dex="array">
        \${dex} : \${item}
      </li>
    </ul>
  </div>
  `,
};

export const uniqueDecorator_key = {
  demo: `
<div +loading="{
  array: ['apple','strawberry', 'banana']
}">
  <ul>
    <li $each#key:num="array">
      \${num} : \${item}
    </li>
  </ul>
</div>
  `,
  html: `
  <div class="basic-demo-card" +loading="{
    array: ['apple','strawberry', 'banana']
  }">
    <ul>
    <li 
      $each#key:num="array"
    >\${num} : \${item}</li>
    </ul>
  </div>
  `,
};
