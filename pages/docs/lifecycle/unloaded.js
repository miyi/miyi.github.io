export const headings = {
  headings: [
    { level: 1, hash: "basic", label: "Basic usage" },
    { level: 2, hash: "rules", label: "Rules" },
    { level: 1, hash: "examples", label: "examples"},
  ]
}

export const rulesTable = {
  headers: [
    { label: "value", name: "accepted values", style: ["width: 33%"] },
    { label: "example", style: ["width: 67%"] },
  ],
  rows: [
    {
      value: "javascript statement",
      example: [
        `+unloaded="alert('already removed')"`,
        `+unloaded="myFunction()"`,
      ],
    },
    {
      value: "multiple javascript statements",
      example: [
        `+unloaded="alert('Bye!'),console.log('Bye!')"`,
        `+unloaded="myFunction1(),myfunction2()"`,
      ],
    },
  ],
};