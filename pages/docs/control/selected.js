export const rulesTableRows = [
  {
    value: "scope variable",
    example: [
      `$selected="$scope.myValue"`,
      `$selected="myValue"`,
      `$selected="myValue[0]"`,
      `$selected="myObject.key"`,
    ],
  },
];

export const inputTable = {
  headers: [
    { label: "element", name: "element type", style: ["width: 50%"] },
    { label: "data", name: "data type", style: ["width: 50%"] },
  ],
  rows: [
    {
      element: `<select $selected="myScope">`,
      data: [`myScope will receive the value of the selected option as string`],
    },
    {
      element: `<input type="radio" $selected="myScope">`,
      data: [`myScope will receive the radio value as string`],
    },
    {
      element: `<input type="checkbox" $selected="myScope">`,
      data: [
        `myScope will receive an array with values of all checked input elements that's binded to myScope by $selected`,
      ],
    },
  ],
};

export const selectExample = {
  demo: `
<div +loading="{fruit: null}">
  <div>fuit: \${fruit}</div>
  <select $selected="fruit">
    <option selected disabled hidden>Choose</option>
    <option value="apple">apple</option>
    <option value="mango">mango</option>
    <option value="tomato">tomato</option>
  </select>
</div>
  `,
  html: `
<div class="basic-demo-card" +loading="{fruit: null}">
  <div>fruit: \${fruit}</div>
  <select $selected="$scope">
    <option selected disabled hidden>Choose</option>
    <option value="apple">apple</option>
    <option value="mango">mango</option>
    <option value="tomato">tomato</option>
  </select>
</div> 
  `,
};

export const radioExample = {
  demo: `
<div +loading="{fruit: null}">
  <div>fuit: \${fruit}</div>
  <label>
    <input type="radio" name="radio1" $selected="fruit" value="apple">
    apple
  </label>
  <label>
    <input type="radio" name="radio1" $selected="fruit" value="mango">
    mango
  </label>
  <label>
    <input type="radio" name="radio1" $selected="fruit" value="tomato">
    tomato
  </label>
</div>
  `,
  html: `
<div class="basic-demo-card" +loading="{fruit: null}">
  <div>fuit: \${fruit}</div>
  <label>
    <input type="radio" name="radio1" $selected="fruit" value="apple">
    apple
  </label>
  <label>
    <input type="radio" name="radio1" $selected="fruit" value="mango">
    mango
  </label>
  <label>
    <input type="radio" name="radio1" $selected="fruit" value="tomato">
    tomato
  </label>
</div>  
  `,
};

export const checkboxExample = {
  demo: `
<div +loading="{fruit: null}">
  <div>fuit: \${fruit}</div>
  <label>
    <input type="checkbox" name="checkbox1" $selected="fruit" value="apple">
    apple
  </label>
  <label>
    <input type="checkbox" name="checkbox1" $selected="fruit" value="mango">
    mango
  </label>
  <label>
    <input type="checkbox" name="checkbox1" $selected="fruit" value="tomato">
    tomato
  </label>
</div> 
  `,
  html: `
<div class="basic-demo-card" +loading="{fruit: null}">
  <div>fuit:</div>
  <div $text="fruit"></div>
  <label>
    <input type="checkbox" name="checkbox1" $selected="fruit" value="apple">
    apple
  </label>
  <label>
    <input type="checkbox" name="checkbox1" $selected="fruit" value="mango">
    mango
  </label>
  <label>
    <input type="checkbox" name="checkbox1" $selected="fruit" value="tomato">
    tomato
  </label>
</div>   
  `,
};
