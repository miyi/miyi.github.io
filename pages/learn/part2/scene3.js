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

export const loadingRoot = () => ({
  label: "root.html",
  demo: `
<html>
  <script type="dagger/modules">
    {
      js: "listFetcher.js",
      css: "./root.css",
      card_list: "./card_list/cardList.html",
      submit_form: "./submit_form/submitForm.html"
    }
  </script>
  <body>
    <div +loading="{
      active: 1, 
      list1: scene3.fetchList1(), 
      list2: scene3.fetchList2(),
    }">
      <submit_form></submit_form>
      <div class="flex-grid">
        <card_list 
          +loading="{cards: list1}" 
          $watch="cards=list1"
        ></card_list>
        <card_list 
          +loading="{cards: list2}" 
          $watch="cards=list2"
        ></card_list>
      </div>
    </div>
  </body>
</html>
  `,
});

export const loadingSubmitForm = () => ({
  label: "submitForm.html",
  demo: `
<html>
  <script type="dagger/modules">
    {
      view: "#view",
      bs_style: "https://cdn.../bootstrap.min.css",
      js: "./task_form.js",
      modal: "#modal",
    }
  </script>
  <template id="view">
    <div +loading="{exist: false}">
      <modal></modal>
      <div 
        class="btn btn-primary container-fluid" 
        +click="exist=true"
      >
        + create
      </div>
    </div>
  </template>
  <template id="modal">
    <dialog $exist="exist" +loaded="$node.showModal()">
      <div class="card" +click#outside="exist=false"  +loading="{...}">
        ...
        <button +click#prevent="pushToList($scope), exist=false">
          publish
        </button>
      </div>
    </dialog>
  </template>
</html>
  `,
});

export const loadingModalView = {
  label: "modalView.html",
  demo: `
  <dialog $exist="exist" +loaded="$node.showModal()">
  <div
    class="card"
    +click#outside="exist=false"
    style="width: 20rem"
    +loading="{title: '',assignee: '',details: '', complete: false, list_number: 1}"
  >
    <div class="card-header h4">create a new task:</div>
    <div class="card-body">
      <div>
        <label class="form-label">title:</label>
        <input $value="title"/>
      </div>
      <div>
        <label class="form-label">assigned to:</label>
        <select $selected="assignee">
          <option selected value="me">me</option>
          ...
        </select>
      </div>
      <div>
        <label class="form-label">publish to:</label>
        <select $selected="list_number">
          ...
        </select>
      </div>
      <div>
        <label class="form-label">details:</label>
        <textarea $value="details"></textarea>
      </div>
    </div>
    <button +click#prevent="pushToList($scope), exist=false">
      publish
    </button>
  </div>
</dialog>
  `,
};

export const loadingBrowser = () => `
<div +loading="{
    active: 1, 
    list1: scene3.fetchList1(), 
    list2: scene3.fetchList2(),
  }">
  <submit_form></submit_form>
  <div class="flex-grid">
    <components.card_list +loading="{cards: list1}" $watch="cards=list1"></components.card_list>
    <components.card_list +loading="{cards: list2}" $watch="cards=list2"></components.card_list>
  </div>
</div>
`;
