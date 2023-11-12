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

export const nestedDemos = {
  demo1: {
    demo: `
<div +loading="{active: true}">

  <div>Declaring multiple scopes:</div>
  <div>Child scopes will inherit from parent scopes.</div>

  <div +loading="{collapse: false}">
    active: \${active}, collapse: \${collapse}
  </div>
</div>`,
    html: `
<div class="basic-demo-card" +loading="{active: true}">

  <div class="narration">Declaring multiple scopes:</div>
  <div class="narration">Child scopes will inherit from parent scopes.</div>

  <div +loading="{collapse: false}">
    active: \${active}, collapse: \${collapse}
  </div>
</div>`,
  },
  demo2: {
    demo: `
<div +loading="{active: true, collapse: false}">

  <div>
    When child scope field and parents scope field 
    names collide, the child field will overide the 
    parent.
  </div> 
  
  <div>
    active: \${active}, collapse: \${collapse}
  </div>
  
  <div +loading="{active: !active}">
    active: \${active}, collapse: \${collapse}
  </div>
</div>
    `,
    html: `
<div class="basic-demo-card" +loading="{active: true, collapse: false}">

  <div class="narration">
  When child scope field and parents scope field 
  names collide, the child field will overide the 
  parent.
  </div> 
  
  <div>
    active: \${active}, collapse: \${collapse}
  </div>
  
  <div +loading="{active: !active}">
    active: \${active}, collapse: \${collapse}
  </div>
</div>
    
    `,
  },
};

export const hashRoot = {
  demo: `
  
  `
}
