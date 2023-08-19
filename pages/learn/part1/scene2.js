export const loadingData = () => ({
  title: "task card",
  assignee: "me",
  details: `Try making your own +click and $class directives! 
    Remember that +click accepts any statements, 
    but $class accepts only 3 types; string, string array, 
    and objects.`,
  collapse_btn_click: "collapse=!collapse",
  complete_btn_click: "complete=!complete",
  dollar_class: "{complete, collapse}",
  complete: false,
  collapse: false,
  input_processors: {},
});

export const loadingHtml = () => ({
  label: "card.html",
  demo: `
<div class="card"
  $class="@@dollar_class@@"
  +loading="{
        title: 'task card', 
     assignee: 'me',
      details: 'Try coding your own +click 
                directives and $class directives!',
     complete: %%complete%%,
     collapse: %%collapse%%,
  }"
>
  <div +click="@@collapse_btn_click@@">
    <span>{{scope.title}}</span>
    <svg></svg>
  </div>
  <div>
    <div>assigned to: {{scope.assignee}}</div>
    <div>{{scope.details}}</div>
    <button +click="@@complete_btn_click@@">
      {{complete?'completed':'not complete'}}
    </button>
  </div>
</div>
  `,
});

export const loadingBrowser = (
  dollar_class,
  complete,
  complete_btn_click,
  collapse_btn_click,
  title,
  assignee,
  details,
  _
) => `
<div
  class="tutorial-contact-card"
  $class="${dollar_class}"
>
  <div class="card-title" +click="${collapse_btn_click}">
    <span>${title}</span>
    <svg
      class="collapse-btn"
      viewBox="0 0 24 24"
      fill="#0078f1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.16108 14.9083C4.45387 15.7165 5.02785 16.9814 6.1018 16.9814H17.898C18.972 16.9814 19.5459 15.7165 18.8388 14.9083L13.3169 8.59762C12.6197 7.80079 11.3801 7.80079 10.6829 8.59762L5.16108 14.9083ZM6.65274 15.4814L11.8118 9.58537C11.9114 9.47154 12.0885 9.47154 12.1881 9.58537L17.3471 15.4814H6.65274Z"
      />
    </svg>
  </div>
  <div class="content">
    <div class="assignee">assigned to: ${assignee}</div>
    <div class="details">${details}</div>
    <button class="complete-button" +click="${complete_btn_click}">
      ${complete ? "completed" : "not complete"}
    </button>
  </div>
</div>
`;
