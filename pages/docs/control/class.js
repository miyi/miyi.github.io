export const rulesTable = {
  headers: [
    { label: "value", name: "accepted values", style: ["width: 25%"] },
    { label: "example", style: ["width: 35%"] },
    { label: "description", style: ["width: 40%"] },
  ],
  rows: [
    {
      value: "string scope variable",
      example: [`+loading="{myClass: 'tall wide'}"`, `$class="myClass"`],
      description:
        "all the words inside the myClass string will be converted to classnames for the host element",
    },
    {
      value: "array scope variable",
      example: [`+loading="{myClass: ['tall', 'wide']}"`, `$class="myClass"`],
      description:
        "all string items of the array will be converted to classnames for the host element",
    },
    {
      value: "object containing scope variables",
      example: [
        `+loading="{tall: true, wide: false}"`,
        `$class="{tall, wide}"`,
      ],
      description:
        "all the scope variable names that are evaluated to be true will be converted to classnames for the host element",
    },
    {
      value: "object with expressions",
      example: [
        `+loading="{gender: 'male'}"`,
        `$class="{blue: gender=='male'}"`,
      ],
      description:
        "all truthy field names will be converted to classnames for the host element",
    },
  ],
};

const stringDemoCss = `
.highlight {
  background-color: yellow;
  font-size: large;
}

.border {
  border: 2px solid purple;
  padding: 0.25rem;
}

.classy {
  font-family: "Brush Script MT", cursive;
}
`;

const stringDemoHtml = `
<div +loading="{myClass: ''}">
  <input $value#input="myClass">
  <div>
    There are three custom classnames
    in the css file: highlight, border,
    classy.
  </div>
  <div $class="myClass">
    Type one or multiple classnames
    in the input to see the difference.
  </div>
</div>
`;
const stringDemoBrowser = `
<div class="basic-demo-card" +loading="{myClass: ''}">
  <input $value#input="myClass">
  <div class="narration">
    There are three custom classnames
    in the css file: highlight, border,
    classy.
  </div>
  <div $class="myClass">
    Type one or multiple classnames
    in the input to see the difference.
  </div>
</div>
`;

const arrayDemoHtml = `
<div +loading="{myClass: [], input: ''}">
  <div>myClass: <div $text="myClass"></div></div>
  <input $value#input="input">
  <button +click="myClass.push(input), input=null">
    push to myClass[]
  </button>
  <button +click="myClass.pop()">
    pop myClass[]
  </button>
  <div>
    There are three custom classnames
    in the css file: highlight, border,
    classy. 
  </div>
  <div $class="myClass"> 
    Type one classname at a time
    and click push.
  </div>
</div>
`;

const arrayDemoBrowser = `
<div class="basic-demo-card" +loading="{myClass: [], input: ''}">
  <div>myClass: <div $text="myClass"></div></div>
  <input $value#input="input">
    <button +click="myClass.push(input), input=null">
      push to myClass[]
    </button>
    <button +click="myClass.pop()">
      pop myClass[]
    </button>
    <div class="narration">
      There are three custom classnames
      in the css file: highlight, border,
      classy. 
    </div>
    <div $class="myClass"> 
      Type one classname at a time
      and click push.
    </div>
</div>
`;

const scopeDemoHtml = `
<div +loading="{
    highlight: false,
    border: false,
    classy: false,
  }"
>
  <button +click="highlight=!highlight">toggle highlight</button>
  <button +click="border=!border">toggle border</button>
  <button +click="classy=!classy">toggle classy</button>

  <div $class="{highlight, border, classy}">
    All field names evaluated to true will be added to
    the classnames of it's host element. 
  </div>
</div>
`;

const scopeDemoBrowser = `
<div class="basic-demo-card" +loading="{
  highlight: false,
  border: false,
  classy: false,
}"
>
  <button +click="highlight=!highlight">toggle highlight</button>
  <button +click="border=!border">toggle border</button>
  <button +click="classy=!classy">toggle classy</button>

  <div $class="{highlight, border, classy}">
    All field names evaluated to true will be added to
    the classnames of it's host element. 
  </div>
</div>
`;

const expressionDemoHtml = `
<div +loading="{score: 0}">
  <span>score: \${score}</span>
  <button +click="score++">add 1</button>
  <div $class="{border: score > 5}">
    All field names evaluated to true will be added to
    the classnames of it's host element. 
  </div>
</div>
`;

const expressionDemoBrowser = `
<div class="basic-demo-card" +loading="{score: 0}">
  <span>score: \${score}</span>
  <button +click="score++">add 1</button>
  <div $class="{border: score > 5}">
    All field names evaluated to true will be added to
    the classnames of it's host element. 
  </div>
</div>
`;

export const stringDemo = {
  files: [
    { label: "string scope variable", type: "html", code: stringDemoHtml },
    { label: "css", type: "css", code: stringDemoCss },
  ],
  html: stringDemoBrowser,
};

export const arrayDemo = {
  files: [
    { label: "array scope variable", type: "html", code: arrayDemoHtml },
    { label: "css", type: "css", code: stringDemoCss },
  ],
  html: arrayDemoBrowser,
};

export const scopeDemo = {
  files: [
    {
      label: "object with fields as scope variables",
      type: "html",
      code: scopeDemoHtml,
    },
    { label: "css", type: "css", code: stringDemoCss },
  ],
  html: scopeDemoBrowser,
};

export const expressionDemo = {
  files: [
    {
      label: "object with expressions",
      type: "html",
      code: expressionDemoHtml,
    },
    { label: "css", type: "css", code: stringDemoCss },
  ],
  html: expressionDemoBrowser,
};
