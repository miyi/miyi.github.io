export const rulesTable = {
  headers: [
    { label: "value", name: "accepted values", style: ["width: 33%"] },
    { label: "example", style: ["width: 67%"] },
  ],
  rows: [
    {
      value: "single scope object",
      example: [
        `$checked="$scope.myVariable"`,
        `$checked="myVariable"`,
        `$checked="myArray[0]"`,
        `$checked="myObject.key"`
      ],
    },
  ],
};