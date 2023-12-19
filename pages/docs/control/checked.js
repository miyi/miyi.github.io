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
        `$checked="myObject.key"`,
      ],
    },
  ],
};

export const basicCheckBoxDemo = {
  demo: `
<div +loading="{status: [true, false, false]}">
  <div>Using $checked with checkbox.</div>
  <label>
    <input type="checkbox" $checked="status[0]">
    status[0]
  </label>
  <label>
    <input type="checkbox" $checked="status[1]">
    status[1]
  </label>
  <label>
    <input type="checkbox" $checked="status[2]">
    status[2]
  </label>
  <div>status: <span $text="status"></span></div>
</div>
  `,
  html: `
<div class="basic-demo-card" +loading="{status: [true, false, false]}">
  <div class="narration">Using $checked with checkbox.</div>
  <label>
    <input type="checkbox" $checked="status[0]">
    status[0]
  </label>
  <label>
    <input type="checkbox" $checked="status[1]">
    status[1]
  </label>
  <label>
    <input type="checkbox" $checked="status[2]">
    status[2]
  </label>
  <div>status: <span $text="status"></span></div>
</div>
  `,
};

export const basicRadioDemo = {
  demo: `
<div +loading="{status: [true, false]}">
  <div>Using $checked with checkbox.</div>
  <label>
    <input type="radio" name="one" $checked="status">
    status[0]
  </label>
  <label>
    <input type="radio" name="one" $checked="status">
    status[1]
  </label>
  <div>status: <span $text="status"></span></div>
</div>
  `,
  html: `
<div class="basic-demo-card" +loading="{status: [true, false]}">
  <div class="narration">Using $checked with radios.</div>
  <label>
    <input type="radio" name="1" $checked="status[0]">
    status[0]
  </label>
  <label>
    <input type="radio" name="1" $checked="status[1]">
    status[1]
  </label>
  <div>status: <span $text="status"></span></div>
</div>
  `,
};

export const basicSelectDemo = {
  demo: `
<div +loading="{status: [false, false]}">
  <div>Using $checked with select.</div>
  <select>
    <option selected disabled hidden>Choose</option>
    <option $checked="status[0]" value="1">option1</option>
    <option $checked="status[1]" value="2">option2</option>
  </select>
  <div>status: <span $text="status"></span></div>
</div>
  `,
  html: `
<div class="basic-demo-card" +loading="{ status: [false, false]}">
  <div class="narration">Using $checked with select.</div>
  <select>
    <option selected disabled hidden>Choose</option>
    <option $checked="status[0]">option1</option>
    <option $checked="status[1]">option2</option>
  </select>
  <div>status: <span>\${JSON.stringify(status)}</span></div>
</div>
  `,
};
