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
      value: "single javascript expression",
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

export const basicExample_expression_html = {
  type: "html",
  label: "html",
  code: `
<div +loading="{
  filter: null,
  item1: { size: 'small', thingy: 'duck'},
  item2: { size: 'big', thingy: 'truck'}
}">

  <div +loading="{...item1}" 
    $exist="checkSize(item1, filter)">
    I'm a \${size} \${thingy}.
  </div>
  <div +loading="{...item2}" 
    $exist="checkSize(item2, filter)">
    I'm a \${size} \${thingy}.
  </div>

  <button +click="filter='big'">
    big size only</button>
  <button +click="filter=null">
    clear size filter
  </button>
</div>
  `,
};

export const basicExample_expression_js = {
  type: "js",
  label: "checkSize.js",
  code: `
export const checkSize = (item, filter) => {
  if (filter) {
    return item.size == filter;
  }
  return true;
};
  `,
};

export const basicExample_expression_browser = {
  html: `
<div class="basic-demo-card" +loading="{
  filter: null,
  card1: {
    size: 'small',
    thingy: 'duck'
  },
  card2: {
    size: 'big',
    thingy: 'truck'
  }
}">
  <div class="purple" +loading="{...card1}" $exist="checkSize(card1, filter)">
    I'm a \${size} \${thingy}.
  </div>
  <div class="purple" +loading="{...card2}" $exist="checkSize(card2, filter)">
    I'm a \${size} \${thingy}.
  </div>
  <button +click="filter='big'">big size only</button>
  <button +click="filter=null">clear size filter</button>
</div>
  `,
};

export const checkSize = (item, filter) => {
  if (filter) {
    return item.size == filter;
  }
  return true;
};
