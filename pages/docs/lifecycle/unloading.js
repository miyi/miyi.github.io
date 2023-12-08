export const headings = {
  headings: [
    { level: 1, hash: "basic", label: "Basic usage" },
    { level: 2, hash: "rules", label: "Rules" },
    { level: 1, hash: "examples", label: "examples" },
    { level: 2, hash: "exist", label: "$exist" },
    { level: 2, hash: "each", label: "$each" },
  ],
};

export const rulesTable = {
  headers: [
    { label: "value", name: "accepted values", style: ["width: 33%"] },
    { label: "example", style: ["width: 67%"] },
  ],
  rows: [
    {
      value: "single expression",
      example: [
        `+unloading="alert('Soon to be removed')"`,
        `+unloading="myFunction($scope)"`,
      ],
    },
    {
      value: "multiple expressions",
      example: [
        `+unloading="alert('Bye!'),console.log('Bye!')"`,
        `+unloading="myFunction1($scope),myfunction2($node)"`,
      ],
    },
  ],
};

export const dollarExistDemo = {
  demo: `
<div 
  +loading="{exist: true}"
>
  <div
    +unloading="alert('removing from the dom')"
    $exist="exist"
  >
    $exist removes the host element from the 
    dom when it's value evaluates to false.
  </div> 
  <button +click="exist=!exist">
    toggle exist value
  </button>
</div>
  `,
  html: `
<div class="basic-demo-card"
  +loading="{exist: true}"
>
  <div class="narration" $exist="exist" +unloading="alert('removing from the DOM')">
    $exist removes the host element from the 
    dom when it's value evaluates to false.
  </div> 
  <button +click="exist=!exist">
    toggle exist value
  </button>
</div>
  `,
};

export const dollarEachDemo = {
  demo: `
<div +loading="{
  fruits: [
    'apple',
    'orange',
    'peach',
  ]
}">
  <div $each="array"
    +unloading="alert('removing '+item)"
  >
    \${item}
  </div>
  <button +click="fruits?fruits.pop():null">
    pop it
  </button>
<div>
  `,
  html: `
<div class="basic-demo-card" +loading="{
  fruits: [
    'apple',
    'orange',
    'peach',
  ]
}">
  <div class="purple center" $each="fruits"
    +unloading="alert('removing '+item)"
  >
    \${item}
  </div>
  <button class="center" +click="fruits?fruits.pop():null">
    pop it
  </button>
<div>
  
  `,
};
