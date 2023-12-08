export const rulesTable = {
  headers: [
    { label: "value", name: "accepted values", style: ["width: 33%"] },
    { label: "example", style: ["width: 67%"] },
  ],
  rows: [
    {
      value: "single scope variable",
      example: [`$exist="myBoolean"`],
    },
    {
      value: "single javascript statement",
      example: [
        `$exist="true"`,
        `$exist="myFunction(myScopeVariable)"`,
        `$exist="myfucntion(scope1, scope2)"`,
      ],
    },
  ],
};

export const basicExample_static = {
  demo: `
<div>
  <div>
    There are two text bubbles but the 
    browser will only render one.
  </div>
  <div $exist="false">
    This element isn't render in the DOM 
    because $exist is evaluated to be false.
  </div>
  <div $exist="true">
    Elements renders on the DOM because $exist
    is evaluated to be true.
  </div>
</div>
  `,
  html: `
<div class="basic-demo-card">
  <div>
    There are two text elements but the 
    browser will only render one.
  </div>
  <div class="purple" $exist="false">
    You don't see me in the DOM 
    because $exist is evaluated to be false.
  </div>
  <div class="purple" $exist="true">
    You see me because $exist
    is evaluated to be true.
  </div>
</div>
  `,
};

export const basicExample_scope = {
  demo: `
<div +loading="{visible: true}">
  <div>
    Try clicking the button!
  </div>
  <span>visible: \${visible}</span>
  <div $exist="visible">
    You see me because $exist 
    evaluates as true.
  </div>
  <button +click="visible=!visible">
    toggle visibility
  </button>
</div>
  `,
  html: `
<div class="basic-demo-card" +loading="{visible: true}">
  <div class="narration">
    Try clicking the button!
  </div>
  <span>visible: \${visible}</span>
  <div class="purple" $exist="visible">
  You see me because $exist 
    evaluates as true.
  </div>
  <button +click="visible=!visible">
    toggle visibility
  </button>
</div>
  `,
};

export const basicExample_function_html = {
  type: "html",
  label: "html",
  code: `
<div +loading>
  <div $exist="false">
    This element isn't render in the DOM 
    because $exist is evaluated to be false.
  </div>
  <div $exist="true">
    Elements renders on the DOM because $exist
    is evaluated to be true.
  </div>
</div>
  `,
};

export const basicExample_function_browser = {
  html: `
<div class="basic-demo-card" +loading="{
  color: 'blue',
  cards: ['red', 'blue', 'olive']
}">
  <div class="purple" $each="cards" $style="css" +loading="{css: 'background-color:' + item}" $exist="color==item">
    The background color of this element is painted \${item} via the $style directive.
  </div>
  <button +loading="{num: 0}" +click="color=cards[num%3], num++">change to \${cards[(num)%3]}</button>
</div>
  `,
};
