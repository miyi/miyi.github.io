export const rulesTableRows = [
  { value: "scope variable", example: ['$value="myScopeVariable"'] },
  { value: "transformed scope", example: ['$value="myString.trim()"'] },
];

export const basicExample = {
  demo: `
<div +loading="{text: ''}">
  <div>text: \${text}</div>
  <div>
    Type something into the input 
    box then press enter.
  </div>
  <input $value="text">
</div> 
  `,
  html: `
<div class="basic-demo-card" +loading="{text: ''}">
  <div>text: \${text}</div>
  <div class="narration">
    Type something into the input 
    box then press enter.
  </div>
  <input $value="text">
</div> 
  `,
};

export const basicExample_2way = {
  demo: `
<div +loading="{text: ''}">
  <div>text: \${text}</div>
  <div>
    Entering the value of one input
    will change the value of the other.
  </div>
  <input $value="text">
  <input $value="text">
</div>
  `,
  html: `
<div class="basic-demo-card" +loading="{text: ''}">
  <div>text: \${text}</div>
  <div class="narration">
    Entering the value of one input
    will change the value of the other.
  </div>
  <input $value="text">
  <input $value="text">
</div> 
  `,
};

export const basicExample_multi = {
  demo: `
<div +loading="{
  my_color: null,
  my_date: null,
  my_number: null,
}">
  <div>
    Entering the value of one input
    will change the value of the other.
  </div>

  <div>my_color: \${my_color}</div>
  <input type="color" $value="my_color">

  <div>my_date: \${my_date}<div>
  <input type="date" $value="my_date">

  <div>my_number: \${my_number}</div>
  <input type="range" min="-10" max="10" $value="my_number">
</div> 
  `,
  html: `
  <div class="basic-demo-card" +loading="{
    my_color: null,
    my_date: null,
    my_number: null,
  }">
    <div class="narration">
      Entering the value of one input
      will change the value of the other.
    </div>
    <div>my_color: \${my_color}</div>
    <input type="color" $value="my_color">
    <div>my_date: \${my_date}<div>
    <input type="date" $value="my_date">
    <br/>
    <div>my_number: \${my_number}</div>
    <input type="range" min="-10" max="10" $value="my_number">
  </div>
  `,
};
