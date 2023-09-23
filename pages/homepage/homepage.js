export const loadConcepts = () => {
  const directives = {
    id: "#directive-content",
    title: "directives",
    text: "Manipulate the DOM directly from html with dagger defined attributes.",
  };
  const dataBinding = {
    id: "#databinding-content",
    title: "data binding",
    text: "Manipulate state data directly as plain javascript objects.",
  };
  const modules = {
    id: "#modules-content",
    title: "module management",
    text: "No more webpack! Achieve performant module abstractions you can understand.",
  };
  const routing = {
    id: "#routing-content",
    title: "routing management",
    text: "Dagger ships with its own routing! Flexible and concise.",
  };

  return {
    concepts: [directives, dataBinding, modules, routing],
  };
};

export const declareStateDemo = () => `
<div +loading="{name: "John Smith", age: 23, email: 'johny69smith@aol.com'}">
  Hi! my name is \${name}, I am \${23} years old, you can contact me at \${email}.
</div>
`;
export const updateStateDemo = `
<div +loading="{name: 'John'}">
  \${name}
  <button +click="name='Jane">
    change name
  </button>
</div>
`;

export const computeStateDemo = `
<div +loading="{euros: 1000}">
  <div +loading="{dollars: euros*1.06}">
    
  </div>
</div>
`;

export const createLine = (
  { start, startSocket, end, endSocket },
  LeaderLine
) => {
  if (start && end) {
    new LeaderLine(start, end, {
      startPlug: "square",
      startSocket,
      endSocket,
      color: "#ff618c85",
    });
  }
};

export const load_directive_content = ($module) => ({
  content_title: "directives",
  codeFunction: highlightContent(
    $module,
    labeledDirectiveContent,
    replaceDirectiveContentLabels
  ),
  sliceIndex: 3,
  elArray: [
    {
      start: null,
      text: "+loading creates the state variables that developers can save and manipulate depending on business logic.",
      startSocket: "right",
      end: null,
      endSocket: "top",
    },
    {
      start: null,
      text: "+mouseover directive triggers when you mousever the element. All directives with the + prefix are considered event directives.",
      startSocket: "right",
      end: null,
      endSocket: "left",
    },
    {
      start: null,
      text: "$exist will unmount the host element when evaluated as false. This is an example of control directives, which watches for state changes to update the render.",
      startSocket: "right",
      end: null,
      endSocket: "left",
    },
    {
      start: null,
      text: "+click directive toggles the open variable from true to false with a click event of the host element.",
      startSocket: "left",
      end: null,
      endSocket: "right",
    },
    {
      start: null,
      text: "+keydown directive toggles the open variable from true to false with a click event of the host element. There is a dagger directive for every html event type.",
      startSocket: "left",
      end: null,
      endSocket: "right",
    },
    {
      start: null,
      text: "$each reduces repetive HTML entries by iterating over an array. Dagger has plenty of abstraction tool to make web development hassel free.",
      startSocket: "left",
      end: null,
      endSocket: "bottom",
    },
  ],
});

export const load_databinding_content = ($module) => ({
  content_title: "data binding",
  codeFunction: highlightContent(
    $module,
    labeledDataBindingContent,
    replaceDataBindingContentLabels
  ),
  sliceIndex: 2,
  elArray: [
    {
      start: null,
      text: "3 number variables are declared in this example.",
      startSocket: "right",
      end: null,
      endSocket: "top",
    },
    {
      start: null,
      text: "clicking the vote buttons will execute their respective +click expressions, which will in turn rerender the upvotes and downvotes values.",
      startSocket: "right",
      end: null,
      endSocket: "left",
    },
    {
      start: null,
      text: "in dagger, we call state variables scope variables because the declared values are accessible as regular JS objects anywhere inside the closing html tags, just like a scope.",
      startSocket: "left",
      end: null,
      endSocket: "right",
    },
    {
      start: null,
      text: "the $watch directive re-executes the expression whenever a scope variable in the expression updates, so total updates whenever upvotes or downvotes updates.",
      startSocket: "left",
      end: null,
      endSocket: "right",
    },
  ],
});

export const load_modules_content = ($module) => ({
  content_title: "module management",
  codeFunction: highlightContent(
    $module,
    labeledModulesContent,
    replaceModuleContentLabels
  ),
  sliceIndex: 3,
  elArray: [
    {
      start: null,
      text: "Do away with webpack! Dagger comes with a native module management system that allows you to maximize code reusability.",
      startSocket: "right",
      end: null,
      endSocket: "top",
    },
    {
      start: null,
      text: "Think of modules like components. scripts and styles within the module are accessible only inside the module.",
      startSocket: "right",
      end: null,
      endSocket: "left",
    },
    {
      start: null,
      text: "Pass data into the module via scope variables like any other html element.",
      startSocket: "right",
      end: null,
      endSocket: "left",
    },
    {
      start: null,
      text: "Call your module via the relative path from the parent html file.",
      startSocket: "left",
      end: null,
      endSocket: "right",
    },
    {
      start: null,
      text: "There are many types of modules to import, but dagger auto-detects the module type to make abstractions quick and easy.",
      startSocket: "left",
      end: null,
      endSocket: "right",
    },
    {
      start: null,
      text: "Sub-modules of the contactList module can be manipulated directly from the top level.",
      startSocket: "left",
      end: null,
      endSocket: "right",
    },
  ],
});

const produceCodeNode = (textIndex, replacement) =>
  `<span +loaded="elArray[` +
  textIndex +
  `].end=$node" class="directiveCode"><span class="hljs-attr">` +
  replacement +
  `</span></span>`;

const highlightContent = (module, raw, replacementFn) => {
  const hlCode = module.hljs.highlight(raw, { language: "xml" }).value;
  return replacementFn(hlCode);
};

const produceRawSpan = (str) => "<span @raw>${" + str + "}</span>";

const produceDollarIdSpan = (textIndex, replacement) =>
  `<span +loaded="setTimeout(()=>elArray[` +
  textIndex +
  `].end=$node,0)" class='directiveCode'>` +
  "<span @raw>${" +
  replacement +
  "}</span></span>";

const labeledDirectiveContent = `
<div loading>

  <div click>click me!</div>

  <div mouseover>hover over me!</div>

  <div keydown>press o</div>

  <div exist>

    <div each>dollarItem</div>

  </div>

</div>
`;

const replaceDirectiveContentLabels = (str) => {
  const loadingRegex = `<span class="hljs-attr">loading</span>`;
  const loadingEl = `<span id="loading" +loaded="elArray[0].end=$node" class="directiveCode"><span class="hljs-attr">+loading</span>=<span class="hljs-string">"{open: true, drawer: ['socks', 'hat', 'shirt']}"</span></span>`;
  const clickRegex = `<span class="hljs-attr">click</span>`;
  const clickEl = `<span id="click" +loaded="elArray[3].end=$node" class=directiveCode><span class="hljs-attr">+click</span>=<span class="hljs-string">"open=!open"</span></span>`;
  const mouseoverRegex = `<span class="hljs-attr">mouseover</span>`;
  const mouseoverEl = `<span id="mouseover" +loaded="elArray[1].end=$node" class=directiveCode><span class="hljs-attr">+mouseover</span>=<span class="hljs-string">"open=!open"</span></span>`;
  const keydownRegex = `<span class="hljs-attr">keydown</span>`;
  const keydownEl = `<span id="keydown" +loaded="elArray[4].end=$node" class=directiveCode><span class="hljs-attr">+keydown</span>=<span class="hljs-string">"$event.key==79?open=!open"</span></span>`;
  const existRegex = `<span class="hljs-attr">exist</span>`;
  const existEl = `<span id="exist" +loaded="elArray[2].end=$node" class=directiveCode><span class="hljs-attr">$exist</span>=<span class="hljs-string">"open"</span></span>`;
  const eachRegex = `<span class="hljs-attr">each</span>`;
  const eachEl = `<span id="each" +loaded="elArray[5].end=$node" class="directiveCode"><span class="hljs-attr">$each</span>=<span class="hljs-string">"drawer"</span></span>`;
  return str
    .replace(loadingRegex, loadingEl)
    .replace(clickRegex, clickEl)
    .replace(mouseoverRegex, mouseoverEl)
    .replace(keydownRegex, keydownEl)
    .replace(existRegex, existEl)
    .replace(eachRegex, eachEl)
    .replace("dollarItem", produceRawSpan("item"));
};

const labeledDataBindingContent = `
<div loading>

  <div>upvotes : dollarupvotes</div>

  <button upclick>click to upvote</button>

  <div>downvotes : dollardownvotes</div>

  <button downclick>click to downvote</button>

  <div totalwatch>
    
    <div>total vote count: dollartotal</total>

  </div>

</div>
`;

const replaceDataBindingContentLabels = (str) => {
  const loadingRegex = `<span class="hljs-attr">loading</span>`;
  const loadingEl = produceCodeNode(
    "0",
    `+loading="{upvotes: 0, downvotes: 0, total: 0}"`
  );
  const upclickRegex = `<span class="hljs-attr">upclick</span>`;
  const upclickEl = produceCodeNode("1", `+click="upvotes++"`);
  const downclickRegex = `<span class="hljs-attr">downclick</span>`;
  const downclickEl = produceCodeNode("1", `+click="downvotes++"`);
  const totalwatchRegex = `<span class="hljs-attr">totalwatch</span>`;
  const totalwatchEl = produceCodeNode("3", `$watch="total=upvotes+downvotes"`);
  return str
    .replace(loadingRegex, loadingEl)
    .replace("dollarupvotes", produceDollarIdSpan("2", "upvotes"))
    .replace(upclickRegex, upclickEl)
    .replace("dollardownvotes", produceDollarIdSpan("2", "downvotes"))
    .replace(downclickRegex, downclickEl)
    .replace(totalwatchRegex, totalwatchEl)
    .replace("dollartotal", produceDollarIdSpan("2", "total"));
};

const labeledModulesContent = `
<html>
    <script type>
      {
        contactlist : contactpath
      }
    </script>
    <body>

      <div>use your module anywhere!</div>

      <contactlist loading>

        contactcard

      </contactlist>

    </body>
</html>
`;

const replaceModuleContentLabels = (str) => {
  const typeRegex = `<span class="hljs-attr">type</span>`;
  const typeEl = produceCodeNode("0", 'type="dagger/modules"');
  const contactlistRegex = `contactlist`;
  const contactlistEl = produceCodeNode("1", "contactlist");
  const contactpathRegex = "contactpath";
  const contactpathEl = produceCodeNode(
    "3",
    `<span +loaded="elArray[4].end=$node" class="hljs-attr">./custom_namespace.html</span>`
  );
  const loadingRegex = `<span class="hljs-attr">loading</span>`;
  const loadingEl = produceCodeNode("2", '+loading="{userData, latest_pics}"');
  const contactcardRegex = `contactcard`;
  const contactcardEl = produceCodeNode(
    "5",
    `<span class="hljs-tag">&lt;<span class="hljs-name">contactcard</span> <span class="hljs-attr">$each="userData"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">contactcard</span>&gt;</span>`
  );
  return str
    .replace(typeRegex, typeEl)
    .replace(contactlistRegex, contactlistEl)
    .replace(contactpathRegex, contactpathEl)
    .replace(loadingRegex, loadingEl)
    .replace(contactcardRegex, contactcardEl);
};

const labeledRoutingContent = `
{

  routing: {
    modules: ['home', 'page1', 'page2'],
    children: [
      {
        path: 'index',
        modules: {layer1: 'home'},
        children: [
          {
            path: 'page1',
            modules: {layer2: 'page1'},
          },
          {
            path: 'page2',
            modules: {layer2: 'page2'},
          }
        ]
      }
    ]
  } 
  


}
`;
