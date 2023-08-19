export const loadingBrowser = () => `
<div class="tutorial-card-container"
  +loading="{
    active: 1,
    cards: [
      {
        id: 1,
        title: 'create card', 
        assignee: 'me', 
        details: 'keep it simple'
      },
      {
        id: 2,
        title: 'create container',
        assignee: 'tony',
        details: 'use nested scopes'
      }
    ]
  }"
> 
  <div
    class="tutorial-contact-card"
    $each="cards"
    +loading="{complete: false, ...item}"
    $class="{complete, collapse: active!=id}"
  >
    <div class="card-title" +click="active=id">
      <span>\${title}</span>
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
      <div class="assignee">assigned to: \${assignee}</div>
      <div class="details">\${details}</div>
      <button class="complete-button" +click="complete=!complete">
        \${complete ? "completed" : "not complete"}
      </button>
    </div>
  </div>  
</div>
`;

export const loadingHtml = () => ({
  label: "cardList.html",
  demo: `
<div class="card-container"
  +loading="{
    active: 1,
    cards: [
      {
        id: 1,
        title: 'create card', 
        assignee: 'me', 
        details: 'keep it simple',
        complete: false
      },
      {
        id: 2,
        title: 'create container',
        assignee: 'tony',
        details: 'use nested scopes',
        complete: false
      }
    ]
  }"
> 
  <div class="card"
    $class="{complete: item.complete, collapse: active!=item.id}"
    $each="cards"
  >
    <div +click="active=1">
      <span>{{item.title}}</span>
      <svg></svg>
    </div>
    <div>
      <div>assigned to: {{item.assignee}}</div>
      <div>{{item.details}}</div>
      <button +click="item.complete!=item.complete">
        {{item.complete?'completed':'not complete'}}
      </button>
    </div>
  </div>
</div>
  `,
});
