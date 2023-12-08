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

export const rulesTable = {
  headers: [
    { label: "value", name: "accepted values", style: ["width: 33%"] },
    { label: "example", style: ["width: 67%"] },
  ],
  rows: [
    {
      value: "plain javascript object",
      example: `+loading="{id: 79, name: 'hat', in_stock: true}"`,
    },
    {
      value: "expression that resolves to a plain object",
      example: [
        '+loading="fetchItem()"',
        'export const fetchItems = () => ({id: 15, name: "frame clamp" })',
      ],
    },
  ],
};

export const decoratorsTable = {
  headers: [
    { label: "name", style: ["width: 33%"] },
    { label: "purpose", style: ["width: 67%"] },
  ],
  rows: [
    {
      name: "+loading#root",
      purpose:
        "The scope initiated with #root inherits directly from the root scope.",
    },
    {
      name: "+loading#plain",
      purpose:
        "When the state variables initiated in +loading are all non-dynamic, #plain will help improve performance.",
    },
    {
      name: "+loading#init",
      purpose:
        "Specifically designed to work with modules, #init will initiate all preset state values of that module.",
    },
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
<ul +loading="resolveAfter2Seconds()">
  <li>\${id}<li>
  <li>\${name}</li>
  <li>\${stocked}</li>
<ul>

<script>
  function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 79,
          name: 'coffee grinder',
          stocked: true
        });
      }, 2000);
    });
  }
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
<div +loading="{user: {
  name: 'Tim',
  age: 19,
  role: 'webdev'
}}">
  <div +loading="{isRegistered: user?true:false}">
    <div>
      Normally scopes inherit from its parents
    </div>
    <div>isRegistered: \${isRegistered}<span>
  </div>
  <br>
  <div +loading#root="{isRegistered: user?true:false}">
    <div>
      #root will only inherit from the root scope
    </div>
    <div>isRegistered: \${isRegistered}<span>
  </div>
</div>
  `,
  html: `
  <div class="basic-demo-card" +loading="{user: {
    name: 'Tim',
    age: 19,
    role: 'webdev'
  }}">
    <div +loading="{isRegistered: user?true:false}">
      <div class="narration">
        Normally scopes inherit from its parents
      </div>
      <div>isRegistered: \${isRegistered}<span>
    </div>
    <br>
    <div +loading#root="{isRegistered: user?true:false}">
      <div class="narration">
        #root will only inherit from the root scope.
      </div>
      <div>isRegistered: \${isRegistered}</div>
    </div>
  </div>
  `,
};

export const hashPlain = {
  demo: `
<div +loading#plain="{year: 1991}">
  <div>
    Some types of data are not meant
    to be changed.
  </div>
  <div>I was born in \${year}</div>
  <br>
  <div>
    Using #plain makes the current $scope immutable.
    It also improves performance.
  <div>
  <button +click="year++">add another year</button>
</div>
  `,
  html: `
  <div class="basic-demo-card" +loading#plain="{year: 1991}">
  <div class="narration">
    Some types of data are not meant
    to be changed.
  </div>
  <div>I was born in \${year}</div>
  <div class="narration">
    Using #plain makes the current $scope immutable.
    It also improves performance.
  <div>
  <br>
  <button +click="year++">increment year value</button>
</div>
  `,
};

export const usingHashInit = {
  type: "html",
  label: "index.html",
  code: `
<script type="dagger/modules">
  {
    name_tag: "./nameTag.html"
  }
</script>
<body>
  <name_tag +loading#init={}></name_tag>
</body>
  `,
};

export const settingHashInit = {
  type: "html",
  label: "nameTag.html",
  code: `
<script type="dagger/modules">
  {
    view: {uri: "#view", init: {
      name: 'Jason',
      age: 19,
      role: 'student'
    }}
  }
</script>
<template id="view">
  <div class="basic-demo-card">
    <div>Hi, my name is \${name}!</div>
    <div> I am \${age} years old.</div>
    <div> I am currently a \${role}</div>
  <div>
<template>
  `,
};

export const hashInitBrowser = {
  html: `
<div class="basic-demo-card" +loading="{
  name: 'Jason',
  age: 19,
  role: 'student'
}">
  <div class="narration">Hi, my name is <span>\${name}.</span></div>
  <div class="narration">I am <span>\${age}</span> years old.</div>
  <div class="narration">I am currently a <span>\${role}</span>.</div>
<div> 
  `,
};
