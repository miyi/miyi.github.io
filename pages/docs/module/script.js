export const headings = [
  { level: 1, hash: "basic", label: "Basic" },
  { level: 1, hash: "setting", label: "Settings" },
  { level: 1, hash: "example", label: "Examples" },
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
export const addOne = ($scope) => $scope.number + 1
`;

export const byFile = {
  files: [
    {
      code: file_import_index,
      type: "html",
      label: "tag import tag",
    },
    {
      code: file_import_script,
      type: "js",
      label: "script.html",
    },
  ],
};

// export const file_import_demo = {
//   files: [
//     { code: file_import_index, type: "html", label: "file import" },
//     { code: file_import_script, type: "js", label: "script.js" },
//   ],
// };

// export const link_import_demo = `
// <html>
//   <script type="dagger/modules">
//     {
//       videojs: "https://cdn.jsdelivr.net/npm/video.js@8.10.0/+esm"
//     }
//   </script>
// </html>
// `;
