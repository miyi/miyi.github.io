import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

const helloDemoIndex = `
<script type="dagger/modules">
  {
    hello: "./hello.html"
  }
<script>
<body>
  <div>
    <div>
      $html takes in a string and renders
      the module of the same name.
    </div>
    <template $html="'hello'"></template>
  </div>
</body>
`;

const helloDemoViewModule = `
<div>Hello world</div>
`;
const helloDemoBrowser = `
<div class="basic-demo-card">
<div class="narration">
    $html takes in a string and renders
    the module of the same name.
</div>
<div>Hello world</div>
</div>
`;

export const helloDemo = {
  files: [
    { label: "index.html", type: "html", code: helloDemoIndex },
    { label: "hello.html", type: "html", code: helloDemoViewModule },
  ],
  html: helloDemoBrowser,
};

const confettiDemoIndex = `
<script type="dagger/modules">
  {
    fun_btn: "./fun.html"
  }
<script>
<body>
  <div>
    <div>
      $html takes in a string and renders
      the module of the same name.
    </div>
    <template $html="'fun_btn'"></template>
  </div>
</body>
`;

const confettiDemoBtn = `
<script type="dagger/modules">
  {
    view: "#view"
    js: "./fun.js",
    cssL "./fun.css"
  }
<script>
<template id="view">
  <div>
    $html can also render the 
    matching namespace.
  </div>
  <button +click="popConfetti()">
    party 🎉 time
  </button>
</template>
`;

const confettiDemoJs = `
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";

export const popConfetti = () => confetti();
`;

const confettiDemoCss = `
button {
  background-color: #404663;
  color: #fff;
  border: 0;
  padding: 0.5em;
  border-radius: 0.5em;
}

button:active {
  transform: scale(1.01);
}
`;

const confettiDemoBrowser = `
<div class="basic-demo-card">
  <div class="narration">
    $html can also render the 
    matching namespace.
  </div>
  <fun_btn></fun_btn>
</div>
`;

export const confettiDemo = {
  files: [
    { label: "index.html", type: "html", code: confettiDemoIndex },
    { label: "fun.html", type: "html", code: confettiDemoBtn },
    { label: "fun.js", type: "js", code: confettiDemoJs },
    { label: "fun.css", type: "css", code: confettiDemoCss },
  ],
  html: confettiDemoBrowser,
};

export const popConfetti = ($event) => {
  confetti({
    origin: {
      x: $event.x / window.innerWidth,
      y: $event.y / (window.innerHeight * 2),
    },
  });
};

const scopeDemoIndex = `
<script type="dagger/modules">
  {
    login: "./logIn.html"
    logout: "./logOut.html"
  }
</script>
<body>
  <div +loading={user: false}>
    <div>
      You can control which module to render
      based on the output of your expression.
    </div>
    <label>
      <input type="checkbox" $checked="user">
      logged in?
    </label>

    <template $html="user?'logOut':'logIn'"></template>

  </div>
</body>
`;

const scopeDemoLogIn = `
<div>
  <label>username: <input></label>
  <label>password: <input></label>
  <button +click="user=true">sign in</button>
</div>
`;

const scopeDemoLogOut = `
<div>
  <label>you are signed in</label>
  <button +click="user=false">sign out</button>
</div>
`;

const scopeDemoBrowser = `
<div class="basic-demo-card" +loading="{user: false}">
  <label>
  <div class="narration">
  You can control which module to render
  based on the output of your expression.
</div>
  <input 
    type="checkbox" 
    $checked="user"
  >
  logged in?
  </label>
  <template $html="user?'logOut':'logIn'"></template>
</div>
`;

export const scopeDemo = {
  files: [
    { label: "index.html", type: "html", code: scopeDemoIndex },
    { label: "logIn.html", type: "html", code: scopeDemoLogIn },
    { label: "logOut.html", type: "html", code: scopeDemoLogOut },
  ],
  html: scopeDemoBrowser,
};
