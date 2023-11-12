export const headings = {
  headings: [
    { level: 1, hash: "basic", label: "Basic usage" },
    { level: 2, hash: "rules", label: "Rules" },
    { level: 2, hash: "examples", label: "Examples" },
    { level: 2, hash: "nested", label: "Nested scopes" },
    { level: 1, hash: "decorators", label: "Decorators" },
    { level: 2, hash: "root", label: "#root" },
    { level: 2, hash: "plain", label: "#plain" },
    { level: 2, hash: "init", label: "#init" },
  ],
};

export const plainDemo = {
  demo: `
<div +loading="{name: 'Jason'}">
  <span>Hi! my name is \${$scope.name}.<span>
<div>
  `,
  html: `
<div class='basic-demo-card' +loading="{name: 'Jason'}">
  <span>Hi! my name is \${$scope.name}.<span>
</div>
  `,
};

export const statementDemo = {
  demo: `
<ul +loading="fetchItem()">
  <li>\${id}<li>
  <li>\${name}</li>
  <li>\${stocked}</li>
<ul>

<script>
  export const fetchItem = () => ({
    id: 79,
    name: "coffee grinder",
    stocked: true
  })
</script>
  `,
  html: `
<ul class='basic-demo-card' +loading="{id: 79, name: 'coffee grinder', stocked: true}">
  <li>id: \${id}</li>
  <li>name: \${name}</li>
  <li>stocked: \${stocked}</li>
</ul>
  `,
};
