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

export const createLine = (
  { start, startSocket, end, endSocket }, LeaderLine
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