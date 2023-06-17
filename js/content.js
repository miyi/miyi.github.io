export const directiveContentLeft = [
  {
    id: "loadingText",
    text: `The +loading creates the state variables. It's an example of a dagger lifecycle directives.`,
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

export const labeledDirectiveContent = `
<div loading1>

  <div click>Click me!</div>

  <div mouseover>hover over me!</div>

  <div keydown>press o</div>

  <div exist>

    <div each>${"${item}"}</div>

  </div>

</div>
`;

export const replaceDirectiveContentLabels = (str) => {
  const loading1Regex = `<span class="hljs-attr">loading1</span>`;
  const loading1El = `<span id="loading" +loaded="loading=$node" class="directiveCode"><span class="hljs-attr">+loading</span>=<span class="hljs-string">"{open: true, drawer: ['socks', 'hat', 'shirt']}"</span></span>`;
  const clickRegex = `<span class="hljs-attr">click</span>`;
  const clickEl = `<span id="click" +loaded="click=$node" class=directiveCode><span class="hljs-attr">+click</span>=<span class="hljs-string">"open=!open"</span></span>`;
  const mouseoverRegex = `<span class="hljs-attr">mouseover</span>`;
  const mouseoverEl = `<span id="mouseover" +loaded="mouseover=$node" class=directiveCode><span class="hljs-attr">+mouseover</span>=<span class="hljs-string">"open=!open"</span></span>`;
  const keydownRegex = `<span class="hljs-attr">keydown</span>`;
  const keydownEl = `<span id="keydown" +loaded="keydown=$node" class=directiveCode><span class="hljs-attr">+keydown</span>=<span class="hljs-string">"$event.keyCode==79?open=!open"</span></span>`;
  const existRegex = `<span class="hljs-attr">exist</span>`;
  const existEl = `<span id="exist" +loaded="exist=$node" class=directiveCode><span class="hljs-attr">$exist</span>=<span class="hljs-string">"open"</span></span>`;
  const eachRegex = `<span class="hljs-attr">each</span>`;
  const eachEl = `<span id="each" +loaded="each=$node" class="directiveCode"><span class="hljs-attr">$each</span>=<span class="hljs-string">"drawer"</span></span>`;
  return str
    .replace(loading1Regex, loading1El)
    .replace(clickRegex, clickEl)
    .replace(mouseoverRegex, mouseoverEl)
    .replace(keydownRegex, keydownEl)
    .replace(existRegex, existEl)
    .replace(eachRegex, eachEl)
    .replace("${item}", "<span @raw>${item}</span>");
};

export const highlightDirectiveContent = (raw) => {
  const hlCode = hljs.highlight(raw, { language: "xml" }).value;
  return replaceDirectiveContentLabels(hlCode);
};

export const loadTextId = (state, node, id) => {
  
}