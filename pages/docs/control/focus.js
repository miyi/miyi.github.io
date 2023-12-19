export const rulesTableRows = [
  { value: "boolean scope variable", example: '$focus="myBoolean"' },
  {
    value: "javascript expression",
    example: ['$focus="myFunction()"', '$focus="myfunction(scopeVar)"'],
  },
];

export const basicExample = {
  demo: `
<div +loading="{input:false}">
  <div>input : \${input}</div>
  <button +click="input=true">
    focus on the input element
  </button>
  <input $focus="input">
</div>
  `,
  html: `
<div class="basic-demo-card" +loading="{input:false}">
  <div>input : \${input}</div>
  <button +click="input=true">
    focus on the input element
  </button>
  <input $focus="input">
</div>
  `,
};
