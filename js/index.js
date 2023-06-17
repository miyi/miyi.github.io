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

export const labeledDataBindingContent = `
<div id="cart" loading >

  <div each></div>

  <input value/>

  <div watch></div>

</div>
`;

export const replaceDataBindingLabels = (str) => {
  const loading = `<span class="hljs-attr">loading</span>`;
};

export const highlightDataBindingContent = (raw) => {
  const hlCode = hljs.highlight(raw, { language: "xml" }).value;
  return hlCode;
};

export const createLine = (start, start_pos, end, end_pos) => {
  if (start && end) {
    new LeaderLine(start, end, {
      startPlug: "square",
      startSocket: start_pos,
      endSocket: end_pos,
      color: "#ff618c85",
    });
  }
};
