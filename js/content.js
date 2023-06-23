export const highlightContent = (raw, replacementFn) => {
  const hlCode = hljs.highlight(raw, { language: "xml" }).value;
  return replacementFn(hlCode);
};

const produceCodeNode = (id, replacement) =>
  `<span +loaded="codeNodes['` +
  id +
  `']=$node" class="directiveCode"><span class="hljs-attr">` +
  replacement +
  `</span></span>`;

export const produceRawSpan = (str) => "<span @raw>${" + str + "}</span>";

export const produceDollarIdSpan = (id) =>
  `<span +loaded="codeNodes['` +
  id +
  `']=$node" class='directiveCode'>` +
  "<span @raw>${" +
  id +
  "}</span></span>";

export const labeledDirectiveContent = `
<div loading>

  <div click>click me!</div>

  <div mouseover>hover over me!</div>

  <div keydown>press o</div>

  <div exist>

    <div each>dollarItem</div>

  </div>

</div>
`;

export const replaceDirectiveContentLabels = (str) => {
  const loadingRegex = `<span class="hljs-attr">loading</span>`;
  const loadingEl = `<span id="loading" +loaded="loading=$node" class="directiveCode"><span class="hljs-attr">+loading</span>=<span class="hljs-string">"{open: true, drawer: ['socks', 'hat', 'shirt']}"</span></span>`;
  // const loadingEl = produceCodeNode('loading',
  //   `+loading="{open: true, drawer: ['socks', 'hat', 'shirt']}"`
  // );
  const clickRegex = `<span class="hljs-attr">click</span>`;
  const clickEl = `<span id="click" +loaded="click=$node" class=directiveCode><span class="hljs-attr">+click</span>=<span class="hljs-string">"open=!open"</span></span>`;
  const mouseoverRegex = `<span class="hljs-attr">mouseover</span>`;
  const mouseoverEl = `<span id="mouseover" +loaded="mouseover=$node" class=directiveCode><span class="hljs-attr">+mouseover</span>=<span class="hljs-string">"open=!open"</span></span>`;
  const keydownRegex = `<span class="hljs-attr">keydown</span>`;
  const keydownEl = `<span id="keydown" +loaded="keydown=$node" class=directiveCode><span class="hljs-attr">+keydown</span>=<span class="hljs-string">"$event.key==79?open=!open"</span></span>`;
  const existRegex = `<span class="hljs-attr">exist</span>`;
  const existEl = `<span id="exist" +loaded="exist=$node" class=directiveCode><span class="hljs-attr">$exist</span>=<span class="hljs-string">"open"</span></span>`;
  const eachRegex = `<span class="hljs-attr">each</span>`;
  const eachEl = `<span id="each" +loaded="each=$node" class="directiveCode"><span class="hljs-attr">$each</span>=<span class="hljs-string">"drawer"</span></span>`;
  return str
    .replace(loadingRegex, loadingEl)
    .replace(clickRegex, clickEl)
    .replace(mouseoverRegex, mouseoverEl)
    .replace(keydownRegex, keydownEl)
    .replace(existRegex, existEl)
    .replace(eachRegex, eachEl)
    .replace("dollarItem", produceRawSpan("item"));
};

export const directiveContentLeft = [
  {
    id: "loadingText",
    text: `The +loading creates the scope variables that developers can save and manipulate depending on business logic.`,
  },
  {
    id: "mouseoverText",
    text: `The +mouseover directive triggers when you mousever the element. All directives with the + prefix are considered event directives.`,
  },
  {
    id: "existText",
    text: `$exist will unmount the host element when evaluated as false. This is an example of control directives, which watches for state changes to update the render.`,
  },
];

export const directiveContentRight = [
  {
    id: "clickText",
    text: `The +click directive toggles the open variable from true to false with a click event of the host element. `,
  },
  {
    id: "keydownText",
    text: `+keydown directive toggles the open variable from true to false with a click event of the host element. There is a dagger directive for every html event type.`,
  },
  {
    id: "eachText",
    text: `$each reduces repetive HTML entries by iterating over an array. Dagger has plenty of abstraction tool to make web development hassel free.`,
  },
];

export const labeledDataBindingContent = `
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

export const replaceDataBindingContentLabels = (str) => {
  const loadingRegex = `<span class="hljs-attr">loading</span>`;
  const loadingEl = produceCodeNode(
    "dbloading",
    `+loading="{upvotes: 0, downvotes: 0, total: 0}"`
  );
  const upclickRegex = `<span class="hljs-attr">upclick</span>`;
  const upclickEl = produceCodeNode("upclick", `+click="upvotes++"`);
  const downclickRegex = `<span class="hljs-attr">downclick</span>`;
  const downclickEl = produceCodeNode("downclick", `+click="downvotes++"`);
  const totalwatchRegex = `<span class="hljs-attr">totalwatch</span>`;
  const totalwatchEl = produceCodeNode(
    "totalwatch",
    `$watch="total=upvotes+downvotes"`
  );
  return str
    .replace(loadingRegex, loadingEl)
    .replace("dollarupvotes", produceDollarIdSpan("upvotes"))
    .replace(upclickRegex, upclickEl)
    .replace("dollardownvotes", produceDollarIdSpan("downvotes"))
    .replace(downclickRegex, downclickEl)
    .replace(totalwatchRegex, totalwatchEl)
    .replace("dollartotal", produceDollarIdSpan("total"));
};

export const dataBindingContentLeft = [
  {
    id: "dbloading",
    text: "3 number variables are declared in this example.",
  },
  {
    id: "voteclick",
    text: "clicking the vote buttons will execute their respective +click expressions, which will in turn rerender the upvotes and downvotes values.",
  },
  {
    id: "totalwatch",
    text: "the $watch directive re-executes the expression whenever a scope variable in the expression updates, so total updates whenever upvotes or downvotes updates.",
  },
];

export const dataBindingContentRight = [
  {
    id: "dollarvalues",
    text: "in dagger, we call state variables scope variables because the declared values are accessible as regular JS objects anywhere inside the closing html tags, just like a scope.",
  },
];

export const labeledModulesContent = `
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

export const replaceModuleContentLabels = (str) => {
  const typeRegex = `<span class="hljs-attr">type</span>`;
  const typeEl = produceCodeNode("type", 'type="dagger/modules"');
  const contactlistRegex = `contactlist`;
  const contactlistEl = produceCodeNode("contactlist",'contactlist');
  const contactpathRegex = 'contactpath'
  const contactpathEl = produceCodeNode('contactpath', './custom_namespace.html')
  const loadingRegex = `<span class="hljs-attr">loading</span>`;
  const loadingEl = produceCodeNode(
    "loading",
    '+loading="{userData, latest_pics}"'
  );
  const contactcardRegex = `contactcard`;
  const contactcardEl = produceCodeNode(
    "contactcard",
    `<span class="hljs-tag">&lt;<span class="hljs-name">contactcard</span> <span class="hljs-attr">$each="userData"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">contactcard</span>&gt;</span>`
  );
  const photosRegex = `photos`;
  const photosEl = produceCodeNode(
    "photos",
    `<span class="hljs-tag">&lt;<span class="hljs-name">photos <span class="hljs-attr">$each="latest_pics"</span></span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">photos</span>&gt;</span>`
  );
  return str
    .replace(typeRegex, typeEl)
    .replace(contactlistRegex, contactlistEl)
    .replace(contactpathRegex, contactpathEl)
    .replace(loadingRegex, loadingEl)
    .replace(contactcardRegex, contactcardEl)
    .replace(photosRegex, photosEl);
};

export const modulesContentLeft = [
  {
    id: "type",
    text: "Do away with webpack! Dagger comes with a native module management system that allows you to maximize code reusability.",
  },
  {id: "contactlist", text: "Think of modules like components. scripts and styles within the module are accessible only inside the module."},
  {
    id: "loading",
    text: "Pass data into the module via scope variables like any other html element.",
  },
];

export const modulesContentRight = [
  {
    id: "contactpath",
    text: "Call your module via the relative path from the parent html file.",
  },
  {id: "contactpath2", text: "There are many types of modules to import, but dagger auto-detects the module type to make abstractions quick and easy."},
  {
    id: "submodules",
    text: "Sub-modules of the contactList module can be manipulated directly from the top level.",
  },
];

const labeledRoutingContent = `
{

  routing: {
    modules: ['home', 'page1', 'page2'],
    children: [
      {
        path: 'index',
        modules: 'home',
        constants: [
          layer1: 'home',
        ],
        children: [
          {
            path: 'page1',
            modules: 'page1',
            constants: [
              layer2: 'page1',
            ]
          },
          {
            path: 'page2',
            modules: 'page2',
            constants: [
              layer2: 'page2'
            ]
          }
        ]
      }
    ]
  } 
  


}
`

