export const rulesTable = {
  headers: [
    { label: "value", name: "accepted values", style: ["width: 33%"] },
    { label: "example", style: ["width: 67%"] },
  ],
  rows: [
    {
      value: "style string",
      example: [`+loading="{css: 'color: blue'}"`, '$style="css"'],
    },
    {
      value: "style array",
      example: [
        `+loading="{css: ['color: blue', 'width:100%']}"`,
        '$style="css"',
      ],
    },
    {
      value: "style object",
      example: [
        `+loading="{css: {width: '100%', 'border-color': 'red'}}"`,
        '$style="css"',
      ],
    },
  ],
};

export const stringExample = {
  demo: `
<div +loading="{string: ''}">
  <input $value#input="string">
  <div $style="string">
    Type any style rule into the input box 
    and it will apply to this element. 
    Try <code>color: green</code>.
  </div>
</div>
  `,
  html: `
<div class="basic-demo-card" +loading="{string: ''}">
  <input $value#input="string">
  <div $style="string">
    Type any style rule into the input box 
    and it will apply to this element. 
    Try <code>color: green</code>.
  </div>
</div> 
  `,
};

export const arrayExample = {
  demo: `
<div +loading="{array: [], rule: ''}">
  <input $value#input="rule">
  <button +click="array.push(rule), rule=''">
    push to array
  </button>
  <div $style="array">
    Any style rule you push into the array 
    will apply to this element. 
    Try <code>color: green</code>.
  </div>
</div>
  `,
  html: `
<div class="basic-demo-card" +loading="{array: [], rule: ''}">
  <input $value#input="rule">
  <button +click="array.push(rule), rule=''">
    push to array
  </button>
  <div $style="array">
    Any style rule you push into the array 
    will apply to this element. 
    Try <code>color: green</code>.
  </div>
  <button +click="array=[]">clear rules</button>
</div> 
  `,
};

export const objectExample = {
  demo: `
<div +loading="{
  obj: {
    border: '1px solid purple',
    'border-radius': '4px',
    padding: '8px'
  }
}">
  <div $style="obj">
    When $style resolves into an object, 
    the field name will be interpreted 
    as the style property, and the 
    field value as the style value.
  </div>
</div>
  `,
  html: `
  <div class="basic-demo-card" +loading="{
    obj: {
      border: '1px solid purple',
      'border-radius': '4px',
      padding: '8px'
    }
  }">
    <div $style="obj">
      When $style resolves into an object, 
      the field name will be interpreted 
      as the style property, and the 
      field value as the style value.
    </div>
  </div>
  `,
};
