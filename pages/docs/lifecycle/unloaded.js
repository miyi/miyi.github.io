export const headings = {
  headings: [
    { level: 1, hash: "basic", label: "Basic usage" },
    { level: 2, hash: "rules", label: "Rules" },
    { level: 1, hash: "examples", label: "examples" },
  ],
};

export const rulesTable = {
  headers: [
    { label: "value", name: "accepted values", style: ["width: 33%"] },
    { label: "example", style: ["width: 67%"] },
  ],
  rows: [
    {
      value: "javascript statement",
      example: [
        `+unloaded="alert('already removed')"`,
        `+unloaded="myFunction()"`,
      ],
    },
    {
      value: "multiple javascript statements",
      example: [
        `+unloaded="alert('Bye!'),console.log('Bye!')"`,
        `+unloaded="myFunction1(),myfunction2()"`,
      ],
    },
  ],
};

export const existDemo = {
  demo: `
<div 
  +loading="{exist: true}"
>
  <div
    +unloaded="alert('already removed')"
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
  <div class="narration" $exist="exist" +unloaded="alert('already removed')">
    $exist removes the host element from the 
    dom when it's value evaluates to false.
  </div> 
  <button +click="exist=!exist">
    toggle exist value
  </button>
</div>
  `,
};

export const domSelectionDemo = {
  demo: `
<div 
  +loading="{exist: true}"
>
  <div
    +unloaded="alert($node)"
    $exist="exist"
  >
    Trying to perform dom selection on me
    after removal is a bad idea.
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
  <div class="narration" $exist="exist" +unloaded="alert($node)">
    Trying to perform dom selection on me after removal is a bad idea.
  </div> 
  <button +click="exist=!exist">
    toggle exist value
  </button>
</div>
  `,
};
