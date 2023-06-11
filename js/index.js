export const loadConcepts = () => {
  const directives = {
    id: 0,
    title: "directives",
    text: "Manipulate the DOM directly from html with dagger defined attributes.",
    content: directiveTabContent,
  };
  const dataBinding = {
    id: 1,
    title: "data binding",
    text: "Manipulate state data directly as plain javascript objects.",
    content: "I am databinding content",
  };
  const modules = {
    id: 2,
    title: "native modules",
    text: "No more webpack! Achieve performant module abstractions you can understand.",
    content: "I am native module content",
  };
  const routing = {
    id: 3,
    title: "native routing",
    text: "Dagger ships with its own routing! Flexible and concise.",
    content: "I am native routing content",
  };

  return {
    concepts: [directives, dataBinding, modules, routing],
  };
};

const directiveTabContent = `
<div +loading="{open: true}">
  <div +click="open=!open">...</div>
</div>



<div +loading="{x: 0, y: 0}}">
  <div +mouseover="x = $event.x, y = $event.y">...</div>
</div>



<ul +loading="{fruits: ['apple', 'pear', 'orange']}">
  <li $each="fruits">...</li>
</ul>



<div +loading="{visible: true}">
  <div $class="{visibility: visible}">...</div>
</div>



<div +loading="{
  loginForm: {username: '', password: ''}
}">
  ...
  <button type="submit" +submit="verify(loginForm)">
    Submit
  </button>
</div>
`;
export const highlightHTML = (raw) => {
  const hlCode = hljs.highlight(raw, { language: "xml" }).value;
  return hlCode;
};
