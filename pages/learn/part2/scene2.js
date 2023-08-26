export const fetchCard = () => ({
  id: 1,
  title: "create card",
  assignee: "me",
  details: "keep it simple",
  complete: true,
});

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
    id: 3,
    title: "use modules",
    assignee: "me",
    details: "style/js/view modules",
    complete: true,
  },
  {
    id: 4,
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

export const fetchList2 = () => ([
  {id: 3, title: "use modules", ...},
  {id: 4, title: "use component", ...}
])
  `,
});

export const loadingRoot = () => ({
  label: "root.html",
  demo: `
<html>
  <script type="dagger/modules">
    {
      card_list: "./components/cardList.html",
      js: "./listFetcher.js",
      css: "./root.css",
    }
  </script>
  <body>
    <div class="flex-grid"
      +loading="{active: 1}"
    >
      <card_list 
        +loading="{cards: fetchList1()}"
      ></card_list>
      <card_list 
        +loading="{cards: fetchList2()}"
      ></card_list>
    </div>
  </body>
</html>
  `,
});

export const loadingBrowser = () => `
<div class="flex-grid" +loading="{active: 1}">
  <components.card_list +loading="{cards: scene2.fetchList1()}"></components.card_list>
  <components.card_list +loading="{cards: scene2.fetchList2()}"></components.card_list>
</div>
`;
