export const rulesTableRows = [
  {
    value: "any javascript expression",
    example: [
      '$watch="sum = scopeVariable1 + scopeVariable2"',
      '$watch="myFunction(scopeVariable1, scopeVariable1)"',
    ],
  },
];

export const example_scopesync = {
  demo: `
<div 
  +loading="{cats: 5, dogs: 3, pets: null}" 
  $watch="pets = cats + dogs"
>
  <div>
    cats and dogs are both scope variable parameters
    in the $watch expression. Changing either values 
    will activate $watch.
  </div>
  <label>
    <div>number of cats: </div>
    <input type="number" $value="cats">
  </label>
  <label>
    <div>number of dogs: </div>
    <input type="number" $value="dogs">
  </label>
  <div>number of pets: \${pets}</div>
</div>
`,
  html: `
<div
  class="basic-demo-card"
  +loading="{cats: 5, dogs: 3, pets: null}" 
  $watch="pets = cats + dogs"
>
  <div class="narration">
    cats and dogs are both scope variable parameters
    in the $watch expression. Changing either values 
    will activate $watch.
  </div>
  <label>
    <div>number of cats: </div>
    <input type="number" $value="cats">
  </label>
  <label>
    <div>number of dogs: </div>
    <input type="number" $value="dogs">
  </label>
  <div>number of pets: \${pets}</div>
</div>
`,
};

const example_func_html = `
<div
 +loading="{input: null, text: null}"
 $watch="isTyping(input, $scope)"
>
  <div>
    Sometimes you just want to trigger a function 
    when a data change occurs. Input is the scope 
    variable being watch.
  </div>
  <input $value#input="input">
  <div $text="text"></div>
</div>
`;

const example_func_js = `
export const isTyping = (input, $scope) => {
  if (input) {
    $scope.text = "typing...";
    setTimeout(() => ($scope.text = null), 1000);
  }
};
`;

const example_func_browser = `
<div
  class="basic-demo-card"
 +loading="{input: null, text: null}"
 $watch="isTyping(input, $scope)"
>
  <div class="narration">
    Sometimes you just want to trigger a function 
    when a data change occurs. Input is the scope 
    variable being watch.
  </div>
  <br>
  <input $value#input="input">
  <div $text="text"></div>
</div>
`;

export const example_func = {
  files: [
    { label: "index.html", type: "html", code: example_func_html },
    { label: "isTyping.js", type: "js", code: example_func_js },
  ],
  html: example_func_browser,
};

export const isTyping = (input, $scope) => {
  if (input) {
    $scope.text = "typing...";
    setTimeout(() => ($scope.text = null), 1000);
  }
};
