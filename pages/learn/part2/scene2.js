export const fetchCard = () => ({
  id: 1,
    title: "create card",
    assignee: "me",
    details: "keep it simple",
    complete: true,
})

export const fetchList1 = () => [
  {
    id: 1,
    title: "create card",
    assignee: "me",
    details: "keep it simple",
    complete: true,
  },
  {
    id: 2,
    title: "create card list",
    assignee: "tony",
    details: "use nested scopes",
    complete: true,
  },
];

export const fetchList2 = () => [
  {
    id: 1,
    title: "use modules",
    assignee: "me",
    details: "style/js/view modules",
    complete: true,
  },
  {
    id: 2,
    title: "use namespace",
    assignee: "tony",
    details: "nest card inside cardList",
    complete: false,
  },
];

export const loadingCardList = () => ({
  label: "cardList.html",
  demo: `
<html>
  <script type="dagger/modules">
    {
      view: "#view"
      card: "./cardView.html",
      js: "./cardList.js",
      css: "./cardList.css"
    }
  </script>
  <template id="view">
    <div class="card-container">
      <card 
        $each="cards"
      ></card>
    </div>
  </template>
</html>
  `,
});

export const loadingFetch = () => ({
  label: "listFetcher.js",
  demo: `
export const fetchList1 = () => ([
  {id: 1, title: "create card", ...},
  {id: 2, title: "create card list", ...},
])

export const fetchList2 = () => ({
  {id: 3, title: "use modules", ...},
  {id: 4, title: "use component", ...}
})
  `,
});

export const loadingRoot = () => ({
  label: "root.html",
  demo: `
<html>
  <script type="dagger/modules">
    {
      cardList: "./components/cardList.html",
      js: "listFetcher.js",
      css: "root.css",
    }
  </script>
  <body>
    <div class="flex-grid">
      <cardList 
        +loading="fetchList1()"
      ></cardList>
      <cardList 
        +loading="fetchList2()"
      ></cardList>
    </div>
  </body>
</html>
  `,
});

export const loadingBrowser = () => `
<div class="flex-grid">
<cardList +loading="{cards: fetchList1()}"></cardList>
</div>
`;

export const loadingBrowser1 = () => `
<div class="flex-grid">
  <cardList +loading="{cards: fetchList1()}"></cardList>
  <cardList +loading="{cards: fetchList2()}"></cardList>
</div>
`;
