export const headings = [
  { level: 1, hash: "basic", label: "Basic Usage" },
  { level: 1, hash: "setting", label: "Module Settings" },
  { level: 1, hash: "example", label: "Examples" },
  { level: 2, hash: "use", label: "using view modules" },
  { level: 2, hash: "directive", label: "with directives" },
  { level: 2, hash: "init", label: "with init" },
  { level: 3, hash: "slot", label: "with @slot" },
];

export const settings_table = {
  headers: [
    { label: "setting", style: ["width: 15%"] },
    { label: "description", style: ["width: 45%"] },
    { label: "example", style: ["width: 40%"] },
  ],
  rows: [
    {
      setting: "default",
      description:
        "By default the view module accepts a uri string and automatically identifies the appropriate module type.",
      example: ['module_name: "uri_string"'],
    },
    {
      setting: "init",
      description:
        "Creates preset scope variables when used together with +loading#init decorator in the view module instance.",
      example: [`module_name: {init: { ...scope_obj }}`],
    },
  ],
};

export const byTemplate = `
<html>
  <script type="dagger/modules">
    {
      hello: "#hello"
    }
  <script>
  <template id="hello">
    <div class="basic-demo-card">
      <div>Hello $/{name}!</div>
    </div>
  </template>
</html>
`;
const hello_browser = `
  <div class="basic-demo-card">
    <div>Hello Tom!</div>
  </div>
`;

// export const byTemplate_demo = {
//   demo: byTemplate_code,
//   html: byTemplate_browser,
// };

const byFile_index = `
<html>
  <script type="dagger/modules">
    {
      hello: "./hello.html"
    }
  <script>
</html>
`;

const hello_file = `
<div class="basic-demo-card">
  <div>Hello $/{name}!</div>
</div>
`;

export const byFile = {
  files: [
    {
      code: byFile_index,
      type: "html",
      label: "index.html",
    },
    {
      code: hello_file,
      type: "html",
      label: "hello.html",
    },
  ],
};

export const byLink = `
 <html>
  <script type="dagger/modules">
    {
      hello: "https://cdn.jsdelivr.net/daggerjs/docs/link/hello.html"
    }
  </script>
 <html>
  `;

const viewModule_withNamespace_index = `
<html>
  <script type="dagger/modules">
    {
      greetings: "./greetings.html"
    }
  </script>
  <body +loading="{name: 'Tom'}">
    <greetings></greetings>
    <greetings.goodbye></greetings.goodbye>
  </body>
</html>
`;

const viewModule_withNamespace_greetings = `
<html>
  <script type="dagger/modules">
    {
      view: "#hello",
      goodbye: "#goodbye"
    }
  <script>
  <template id="hello">
    <div class="basic-demo-card">
      <div>Hello $/{name}!</div>
    </div>
  </template>
  <template id="goodbye">
    <div class="basic-demo-card">
      <div>Goodbye $/{name}!</div>
    </div>
  </template>
</html>
`;

const viewModule_direct_index = `
<html>
  <script type="dagger/modules">
    {
      hello: "./hello.html"
    }
  <script>
  <body>
    <hello +loading="{name: 'Tom'}"></hello>
  </body>
</html>
`;

const viewModule_direct_hello = `
<div class="basic-demo-card">
  <div>Hello $/{name}!</div>
</div>
`;

export const usingViewModule_directictly = {
  files: [
    {
      code: viewModule_direct_index,
      type: "html",
      label: "index.html",
    },
    {
      code: viewModule_direct_hello,
      type: "html",
      label: "hello.html",
    },
  ],
  html: hello_browser,
};

const hello_goodbye_browser = `
  <div class="basic-demo-card">
    <div>Hello Tom!</div>
  </div>
  <div class="basic-demo-card">
    <div>Goodbye Tom!</div>
  </div>
`;

export const usingViewModule_withNamespace = {
  files: [
    {
      code: viewModule_withNamespace_index,
      type: "html",
      label: "index.html",
    },
    {
      code: viewModule_withNamespace_greetings,
      type: "html",
      label: "greetings.html",
    },
  ],
  html: hello_goodbye_browser,
};

const viewModule_withDirectives_index = `
<html>
  <script>
    {
      hello: "./hello.html"
    }
  <script>
  <body +loading="{
    names: ['John', 'Jack', 'James']
  }">
    <hello 
      $each="names" 
      +loading="{name: item}">
    </hello>
  </body>
<html>
`;

const viewModule_withDirectives_browser = `
<div +loading="{
  names: ['John', 'Jack', 'James']
}">
  <div $each="names" +loading="{name: item}" class="basic-demo-card">
    <div>Hello $\{name}!</div>
  </div>
<div>
`;

export const viewModule_withDirectives = {
  files: [
    {
      code: viewModule_withDirectives_index,
      type: "html",
      label: "index.html",
    },
    { code: viewModule_direct_hello, type: "html", label: "hello.html" },
  ],
  html: viewModule_withDirectives_browser,
};

const slot_example_index = `
<html>
  <script>
    {
      hello: "./hello.html",
      goodbye: "./goodbye.html"
    }
  <script>

  <body +loading="{name: 'Tom'}">
    <hello>You can't see this content.</hello>
    <goodbye>
      <div>
        I can display anything here.
        Even a view module.
      </div>
    </goodbye>

  </body>
<html>
`;
const slot_example_hello = `
<div class="basic-demo-card">
  <div>Hello $\{name}!</div>
</div>
`;

const slot_example_goodbye = `
<div class="basic-demo-card">
  <div>Goodbye $\{name}!</div>
  <template @slot></template>
</div>
`;

const slot_example_browser = `
<div class="basic-demo-card">
  <div>Hello Tom!</div>
</div>

<div class="basic-demo-card">
  <div>Goodbye Tom!</div>
  <div>
    I can display anything here.
  </div>
</div>
`;

export const slot_example_demo = {
  files: [
    { code: slot_example_index, type: "html", label: "index.html" },
    { code: slot_example_hello, type: "html", label: "hello.html" },
    { code: slot_example_goodbye, type: "html", label: "goodbye.html" },
  ],
  html: slot_example_browser,
};

export const init_example_index_single = `
<html>
  <script type="dagger/modules">
    {
      namecard: "./namecard.html"
    }
  </>
  <body>
    <namecard +loading#init></namecard>
  </body>
</html>
`;

export const init_example_index_many = `
<html>
  <script type="dagger/modules">
    {
      namecard: "./namecard.html"
    }
  </script>
  <body +loading="{name:'John', age: 33}">
    <namecard></namecard>
    <namecard +loading#init></namecard>
    <namecard 
      +loading#init="{name: 'Terrance'}">
    </namecard>
  </body>
</html>
`;

export const init_example_namecard = `
<html>
  <script type="dagger/modules">
    {
      view: {
        uri: "#view",
        init: {
          name: "Tom",
          age: 18,
        }
      }
    }
  </script>
  <template id="view">
    <div class="basic-demo-card">
      <div>Hi! My name is $\{name}!</div>
      <div>I'm $\{age} years old.</div>
    </div>
  </template>
<html>
`;

export const init_example_browser_many = `
<div>

<div class="basic-demo-card">
<div>Hi! My name is John!</div>
<div>I'm 33 years old.</div>
</div>

<div class="basic-demo-card">
<div>Hi! My name is Tom!</div>
<div>I'm 18 years old.</div>
</div>

<div class="basic-demo-card">
<div>Hi! My name is Terrance!</div>
<div>I'm 18 years old.</div>
</div>

<div>

`;
