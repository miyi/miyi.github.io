export const declareState1 = `
<div +loading="{active: true}">

  <span>The +loading directive creates state variables.</span>
  <span>access state variables via the $scope object</span>

  <div>\${$scope.active}</div> 

</div>
`;

export const declareState2 = `
<div +loading="{active: true}">

  <span>Access scope variables directly:</span> 

  <div>\${active}</div> 

<div>
`;

export const declareState3 = `
<div +loading="{active: true}">

  <span>Declaring multiple scopes:</span>
  <span>Child scopes will inherit from parent scopes.</span>

  <div +loading="{collapse: false}">
    active: \${active}, collapse: \${collapse}
  </div>
</div>
`;

export const declareState4 = `
<div +loading="{active: true, collapse: false}">

  <span>Child scopes with the same variable name will overide parent</span> 
  
  \${active} \${collapse}
  <div +loading="{active: !active}">
    \${active} \${collapse}
  </div>
</div>
`;

export const updateState1 = `
<div 
  +loading="{number: 10}" 
  +loaded="number++"
>

  manipulate scope variables directly as javascript
  variables inside any dagger directives.

  \${number}
</div>
`;

export const updateState2 = `
<div +loading="{selected: null}">
  <div +loaded="selected=$node">
    Take advantage of +loaded to do dom selections.
    $node justrepresents the node its tagged on.
  </div>
</div>
`;

export const clickEvent1 = `
<div +loading="{selected: null}">
  selected id: \${selected}
  <div +loading="{id: 1}" +click="selected=id">
    select 1
  </div>
  <div +loading="{id: 2}" +click="selected=id">
    select 2
  </div>
</div>
`;

export const clickEvent2 = `
<div +loading="{price: 23}">

  Changes in scope variables will 
  directly updates the DOM.

  <div>\${price}<div>
  <button +click="price++">increase price</button>
</div>
`;

export const mouseenter = `
<div +loading="{selected}">
  selected id: \${selected}
  <div +loading="{id: 1}" +mouseenter="selected=id">
    select 1
  </div>
  <div +loading="{id: 2}" +mouseenter="selected=id">
    select 2
  </div>
</div>
`;

export const mouseup = `
<div +loading="{text: ''}">
  <div>\${text}</div>
  <div 
    +mouseup="text=window.getSelection().toString()"
  >
    Highlight me!
  </div> 
</div>
`;

export const mouseover = `
<div +loading="{x: null, y: null}">
  <span>Use $event as the event callback object</span>
  <div
    style="height: 150; width: 150;" 
    +mouseover="x=$event.x, y=$event.y">
  </div>
  <div>x: \${x}, y: \${y}<div>
</div>
`;

export const keydown = `
<div +loading="{number: 0}">
  <span>dagger has a event directive for all event types</span>
  <div>number: \${number}</div>
  press enter on input to increment number
  <input 
    +keydown="$event.key=='Enter'? number++:null"
  >
</div>
`;

export const dollarValue = `
<div +loading="{text: ''}">
  <span>
    $value syncs input value with assigned 
    scope variable on submit.
  </span>
  <div>press enter to submit</div>
  <input $value="text"/>
  <div>\${text}</div>
</div>
`;

export const dollarValueInput = `
<div +loading="{text: ''}">
  <div>
    use #input decorator to trigger onchange
  </div>
  <input $value#input="text"/>
  <span>\${text}</span>
</div>
`;

export const dollarCheckedRadio = `
<div +loading="{gender: 'male'}">
  <span>$checked stores results as booleans</span>
  <div>size: \${size}</div>
  <label>
    <input type="radio" name="1" $selected="gender" value="male">
    male
  </label>
  <label>
    <input type="radio" name="1" $selected="gender" value="female">
    female
  </label>
  <label>
    <input type="radio" name="1" $selected="gender" value="other">
    other
  </label>
</div>
`;

export const dollarCheckedCheckbox = `
<div +loading="{toppings: [false, false]}">
  <span>$checked stores results as booleans</span>
  <div>toppings: \${toppings}</div>
  <label>
    <input type="checkbox" name="2" $checked="toppings[0]">
    bacon
  </label>
  <label>
    <input type="checkbox" name="2" $checked="toppings[1]">
    ham
  </label>
</div>
`;

export const dollarSelected = `
<div +loading="{size: 'small'}">
  <span>$selected stores results with values</span>
  <div>selected value: \${size}</div>
  <select>
    <option value="small">small</option>
    <option value="medium">medium</option>
    <option value="large">large</option>
  </select>
</div>
`;

export const dollarSelected2 = `
<div +loading="{toppings: null}">
  <span>$selected stores results with values</span>
  <div>selected value: \${toppings}</div>
  <label>
    <input type="checkbox" name="2" value="bacon" $selected="toppings"/>
    bacon
  </label>
  <label>
    <input type="checkebox" name="2" value="ham" $selected="toppings"/>
    ham
  </label>
</div>
`;

export const dollarFocus = `
<div +loading="{focus: false}">
  <button +click="focus=!focus">
    click to focus
  </button>
  <input $focus="focus" />
  <span>focus: \${focus}</span>
</div>
`;

export const dollarFile = `
<div +loading={file: null}>
  <div>single file selector</div>
  <input type="file" $file="file"/>
  <span>\${file? file.name: null}</span>
  <span>\${file? file.type: null}</span>
</div>
`;

export const dollarResult = `
<div +loading={file: null}>
  <div>select single .txt file</div>
  <input type="file" accept=".txt" $result="file"/>
  <div>The state is: "\${ file.state }".</div>
  <div>The loaded bytes are: "\${ file.loaded }"</div>
  <div>The progress is: "\${ file.progress }%".</div>
  <div>The content is: "\${ file.content }"</div>
</div>
`;

export const dollarResultData = `
<div +loading={file: null}>
  <span>the #data decorator allows loading data as URL.</span>
  <div>select single .png file</div>
  <input type="file" accept=".png" $result="file"/>
  <div>The state is: "\${ file.state }".</div>
  <div>The loaded bytes are: "\${ file.loaded }"</div>
  <div>The progress is: "\${ file.progress }%".</div>
  <div>The content is:</div>
  <img $src="result.content">
</div>
`;

export const dollarWatch1 = `
<div +loading="{a: 1, b: 1}" $watch="b=a*2">
  <span>$watch triggers on change in its statement parameters</span>
  <div>a: \${a}</div>
  <div>b: \${b}</div>
  <button +click="a++">a++</button>
</div>
`;

export const dollarWatch2 = `
<div +loading="{a: 1, b:0}" $watch="b=a*2">
  <span>create many $watch directives or in nested scopes</span>
  <div>a: \${a}</div>
  <div>b: \${b}</div>
  <div +loading="{c: 0}" $watch="c=a+b">
    <div>c: \${c}</div>
  </div>
  <button +click="a++">a++</button>
</div>
`;

export const dollarBrackets = `
<div 
  +loading="{time: new Date()}"
  +loaded="setInterval(() => (time = new Date()), 1000)"
>
  <span>the \$\{ \} is a special method that responds to scope updates</span>
  <div>\${time.toLocaleTimeString}<div>
</div>
`;

export const dollarText = `
<div 
  +loading="{naturals: [1]}"
  +loaded="setInterval(() => (naturals.push(naturals.length+1)), 1000)"
>
  <span>$text is very similar to \$\{ }.</span>
  <span>When the scope content is an object,</span>
  <span>$text converts the scope content to string</span>
  <div>\${naturals}</div>
  <div $text="naturals"></div>
</div>
`;

export const dollarStyle = `
<div +loading="{css: null}" $style="scope.css">
  <span>$style dynamically updates the element style</span>
  <span>it accepts string or an array of strings</span>
  <button +click="css='background-color: red'">
    paint me red
  </button>
</div>
`;

export const dollarClass = `
<div 
  +loading="{border: false, color: false}" 
  $class="{border, color}"
>
  <span>$class dynamically adds classnames to the element.</span>
  <span>if a key inside object is true, then that key name is added to the classname.</span>
  <button +click="border=!border"></button>
  <button +click="color=!color"></button>
</div>
`;

export const dollarEach = `
<div +loading="{users: ['apple', 'pear', 'banana']}">

  <span>$each loops through an array.</span>
  <span>The array index and item content are stored in a new scope.</span>

  <div $each="users">
    <div>\${scope.index}</div>
    <div>\${scope.item.name}</div>
  </div>

</div>
`;

export const dollarEach2 = `
<div
  +loading="{numbers: [0, 1, 2]}"
>
  <span>$each watches for data update.</span>
  <button +click="numbers.push(numbers.length)">push to numbers</button>
  <div $each="numbers">
    <div>\${scope.index}</div>
    <div>\${scope.item.name}</div>
  </div>
</div>
`;

export const dollarExist = `
<div +loading="{show: false}">

  <span>$exist dynamically removes the node from DOM tree if assessed to be false</span>
  <span>It also watches for data updates</span>

  <div>show: \${show}</div>
  <button +click="show=!show">toggle to \${!show}</button>
  <div $exist="show">
    You can only see when when show is toggled to be true.
  </div>

</div>
`;

export const dollarNode = `
<div +loading="{node: null}">

  <span>reference a DOM node via the $node keyword.</span>

  <div $class="{border: node==$node}" +click="node=$node">
    element 1
  </div>
  <div $class="{border: node==$node}" +click="node=$node">
    element 2
  </div>

</div>
`;

export const plusLoading = `
<div +loading="{name: 'John', age: 25}">

  <span>+loading runs before the element is added to the DOM</span>
  <span>It's most commonly used for creating new state.</span>

  <div>name: \${name}</div>
  <div>age: \${age}</div>
  <div>role: \${role}</div>

</div>
`;

export const plusLoaded = `
<div 
  +loading="{population: 10}" 
  +loaded="population++" 
>

  <span>+loaded runs after the element is added to the DOM.</span>

  <div>population: \${population}</div>

</div>
`;

export const plusUnloading = `
<div +loading="{exist: true}">

  <button +click="exist=!exist">\${exist?"remove":"insert"}</button>

  <div $exist="exist" +unloading="alert('I\'m about to be removed from the DOM tree!')">
    An alert message will pop up before I'm removed from the DOM.
  </div>

</div>
`;

export const plusUnloaded = `
<div +loading="{exist: true}">

  <button +click="exist=!exist">\${exist?"remove":"insert"}</button>

  <div $exist="exist" +unloaded="alert('I was just removed from the DOM tree!')">
    An alert message will pop up after I'm removed from the DOM.
  </div>

</div>
`;

export const minimumComponent = {
  index: `
<script type="dagger/modules">
  {
    hello: "./hello.html"
  }
<script>
<body>
  <hello></hello>
</body>
  `,
  hello: `
<div>hello</div>
  `,
};

export const scriptModule = {
  index: `
<script type="dagger/modules">
  {
    myScript: "./myScript.js"
  }
<script>
<body>
  <div +loading="loading()">
    <div>My score: \${myScore}</div>
    <button +click="addOne($scope)">
      I scored!
    </button>
  </div>
</body>
  `,
  myScript: `
export const loading = () => ({
  myScore: 0,
})

export const addOne = ($scope) => 
  $scope.myScore++
  `,
};

export const nestedModule = {
  index: `
<script type="dagger/modules">
  {
    card: "./cardModule.html"
  }
</script>
<body>
  <card +loading="{
    name: 'John',
    age: '25',
    role: 'webdev'
  }"><card>
</body>
  `,
  cardModule: `
<html>
  <script type="dagger/modules">
    {
      view: "#card",
      arrow: "./svg.html",
      css: "./card.css"
    }
  </script>

  <template id="card">
    <div class="card" +loading="{collapse: false}">
      <div class="name">\${name}</div>
      <div class="details" $class="{collapse}">
        <div>age: \${age}</div>
        <div>role: \${role}</div>
      </div>
      <div class="collapse_btn" +click="toggleCollapse($scope)">
        <arrow></arrow>
      </div>
    </div>
  </template>
</html>
  `,
  svg: `
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
  class="arrow"
  $class="{collapse}"
>
  <polygon points="5,30.9 8.1,34 24,18.1 39.9,34 43,30.9 24,12" />
</svg>
  `,
  script: `
export const toggleCollpase = ($scope) => $scope.collapse =! $scope.collapse
  `,
  css: `
.card {
  padding: 0.5rem;
  width: 250px;
  border-radius: 0.5rem;
  background-color: rgb(167, 182, 192);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: rgb(4, 123, 250);
}
.name {
  font-size: 1.5rem;
}
.details {
  max-height: 5rem;
  height: auto;
  transition: max-height 0.4s ease-in-out;
}

.details.collapse {
  max-height: 0;
  overflow: hidden;
}

.collapse_btn {
  padding: 2px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  background-color: rgb(139, 152, 161);
  fill: rgb(4, 123, 250);
}

.collapse_btn:hover {
  fill: rgb(203, 207, 205);
  background-color: rgb(4, 123, 250);
  transition: 0.4s ease-in-out;
}

.arrow {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.4s ease-in-out;
}

.arrow.collapse {
  transform: rotate(180deg);
}
  `,
};
