export const headings = {
  headings: [
    { level: 1, hash: "basic", label: "Basic usage" },
    { level: 2, hash: "rules", label: "Rules" },
    { level: 1, hash: "examples", label: "Examples" },
    { level: 2, hash: "scope", label: "scope operation" },
    { level: 2, hash: "dom", label: "dom selection" },
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
        `+loaded="alert('I am created.')"`,
        `+loaded="myFunction($scope)"`,
      ],
    },
    {
      value: "multiple statements",
      example: [
        `+loaded="alert('first message'),alert('second message')"`,
        `+loaded="myFunction1($scope),myfunction2($node)"`,
      ],
    },
  ],
};

export const currentScopeDemo = {
  demo: `
<div 
  +loading="{fahrenheit: 67, celsius: null}"
  +loaded="celsius=Math.round((fahrenheit-32)*5/9)"
>
  <div>
    The initial value for celsius was null, 
    but the +loaded directive assigned the 
    processed value to it so we see a number.
  </div>
  <div>fahrenheit: \${fahrenheit}</div>
  <div>celsius: \${celsius}</div>
</div>
  `,
  html: `
<div
  class="basic-demo-card"
  +loading="{fahrenheit: 67, celsius: null}"
  +loaded="$scope.celsius=Math.round((fahrenheit-32)*5/9)"
>
  <div class=narration>
    The initial value for celsius was null, 
    but the +loaded directive assigned the 
    processed value to it so we see a number.
  </div>
  <div>fahrenheit: \${fahrenheit}</div>
  <div>celsius: \${celsius}</div>
</div>
  `,
};

export const leaderlineHtml = {
  type: "html",
  label: "index.html",
  code: `
<div +loading="{start: null, end: null}"> 
  <div +loaded="start=$node">
    start
  </div>
  <br>
  <div +loaded="end=$node">
    end
  </div>
  <button +click="createLine(start, end)">
    draw arrow
  </button>
</div>
  `,
};

export const domSelectionDemo = {
  demo: `
<div +loading="{e: null}">
  <div +loaded="e=$node">
    Change me!
  </div>
  <button +click="e.innerHTML='Changed!'">
    Change text
  </button>
<div>
  `,
  html: `
<div class="basic-demo-card" +loading="{e: null}">
  <div class="start" +loaded="e=$node">
    Change me!
  </div>
  <button +click="e.innerHTML='Changed!'">
    Change text
  </button>
</div>
  `,
};

export const leaderlineJs = {
  type: "js",
  label: "createLine.js",
  code: `
export const createLine = (start, end) => {
  new LeaderLine(
    start,
    end
  )
}
  `,
};

export const leaderlineBrowser = {
  html: `
<div class='basic-demo-card' +loading="{start: null, end: null}">

  <div class="el-container flex-row gap">
    <div class="start" +loaded="start=$node">start</div>
    <div class="end" +loaded="end=$node">end</div>
  </div>

  <button +click="createLine(start, end, LeaderLine)">
    draw arrow
  </button>
</div>
  `,
};

export const createLine = (start, end, LeaderLine) => {
  new LeaderLine(start, end);
};
