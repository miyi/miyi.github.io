export const headings = [
  { level: 1, hash: "basic", label: "Basic Usage" },
  { level: 1, hash: "setting", label: "Module Settings" },
  { level: 2, hash: "uri", label: "import with uri" },
  { level: 1, hash: "example", label: "Examples" },
  { level: 2, hash: "use", label: "using script modules" },
  { level: 2, hash: "namespace", label: "inside namespace" },
  { level: 2, hash: "anonymous", label: "anonymouse: false" },
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
        "By default the view module accepts a uri string and automatically identifies the appropriate module type",
      example: ['module_name: "uri_string"'],
    },
    {
      setting: "anonymous",
      description:
        "Script modules are anonymous by default, meaning that module functions calls doesn't require typing the module name first. This shortcut can be turned off.",
      example: [`module_name: {anonymous: boolean}`],
    },
  ],
};

export const tag_import_demo = `
<html>
  <script type="dagger/modules">
    {
      js: "script"
    }
  </script>
  <script id="script" type="dagger/script">
    export const addOne = ($scope) => $scope.number + 1
  </script>
</html>
`;

const file_import_index = `
<html>
  <script type="dagger/modules">
    {
      js: "./script.js"
    }
  </script>
</html>
`;

const file_import_script = `
export const addOne = ($scope) => $scope.number++
`;

export const byFile = {
  files: [
    {
      code: file_import_index,
      type: "html",
      label: "by file",
    },
    {
      code: file_import_script,
      type: "js",
      label: "script.js",
    },
  ],
};

export const link_import_demo = `
<html>
  <script type="dagger/modules">
    {
      videojs: "https://cdn.jsdelivr.net/npm/video.js@8.10.0/+esm"
    }
  </script>
</html>
`;

const usage_basic_demo_body = `
<html>
  <script type="dagger/modules">
    {
      js: "./script.js"
    }
  </script>
  <body>
    <div class="basic-demo-card">
      <button 
      +loading="{number: 0}"
      +click="addOne($scope)"
      >
        clicked $\{number} times!
      </button>
    </div>
  </body>
</html>
`;

const usage_basic_demo_browser = `
<div class="basic-demo-card">
  <button 
  +loading="{number: 0}"
  +click="number++"
  >
    clicked $\{number} times!
  </button>
</div>
`;

export const usage_basic_demo = {
  files: [
    { code: usage_basic_demo_body, type: "html", label: "index.html" },
    { code: file_import_script, type: "js", label: "script.js" },
  ],
  html: usage_basic_demo_browser,
};

const usage_namespace_demo_buttons = `
<html>
  <script type="dagger/modules">
    {
      js: "./script.js",
      button1: "#button1",
      button2: "#button2"
    }
  </script>
  <template id="button1">
    <button 
    +loading="loadButton"
    +click="addOne($scope)"
    >
      button1 clicked $\{number} times
    </button>
  </template>
  <template id="button2">
    <button 
    +loading="loadButton"
    +click="addOne($scope)"
    >
      button2 clicked $\{number} times
    </button>
  </template>
</html>
`;

const usage_namespace_demo_script = `
export const loadButton = {number: 0}

export const addOne = ($scope) => $scope.number++
`;

const usage_namespace_demo_body = `
<html>
  <script type="dagger/modules">
    {
      buttons: "./buttons.html"
    }
  </script>
  <body>
    <div class="basic-demo-card">
      <buttons.button1></buttons.button1>
      <buttons.button2></buttons.button2>
    </div>
  </body>
</html>
`;

const usage_namespace_demo_browser = `
<div class="basic-demo-card">
<button 
+loading="{number: 0}"
+click="number++"
>
  button1 clicked $\{number} times
</button>
<button 
+loading="{number: 0}"
+click="number++"
>
  button2 clicked $\{number} times
</button>
</div>
`;

export const usage_namespace_demo = {
  files: [
    { code: usage_namespace_demo_buttons, type: "html", label: "buttons.html" },
    { code: usage_namespace_demo_script, type: "js", label: "script.js" },
    { code: usage_namespace_demo_script, type: "html", label: "index" },
  ],
  html: usage_namespace_demo_browser,
};

const usage_anonymouse_demo_button = `
<html>
  <script type="dagger/modules">
    {
      js: {
        uri:"./script.js",
        anonymouse: false
      },
      view: "#button"
    }
  </script>
  <template id="button">
    <button 
    +loading="js.loadButton"
    +click="js.addOne($scope)"
    >
      button1 clicked $\{number} times
    </button>
  </template>
</html>
`;

const usage_anonymouse_demo_body = `
<html>
  <script type="dagger/modules">
    {
      counter: "./button.html"
    }
  </script>
  <body>
    <div class="basic-demo-card">
      <counter></counter>
    </div>
  </body>
</html>
`;

const usage_anonymouse_demo_browser = `
<div class="basic-demo-card">
<button 
+loading="{number: 0}"
+click="number++"
>
  button1 clicked $\{number} times
</button>
</div>
`;

export const usage_anonymouse_demo = {
  files: [
    { code: usage_anonymouse_demo_button, type: "html", label: "button.html" },
    { code: usage_namespace_demo_script, type: "js", label: "script.js" },
    { code: usage_anonymouse_demo_body, type: "html", label: "index.html" },
  ],
  html: usage_anonymouse_demo_browser,
};
