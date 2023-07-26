export const loadingData = () => ({
  title: "create card",
  assignee: "me",
  details: "experiment with the +loading directive",
});

export const loadingHtml = () => ({
  demo: `
<div class="card" +loading="{
      title: '%%title%%', 
   assignee: '%%assignee%%',
    details: '%%details%%',
}">
  <div>{{title}}</div>
  <div>assigned to: {{assignee}}</div>
  <div>{{details}}</div>
</div>
    `,
  label: "card.html",
});

export const loadingBrowser = (title, assignee, details) => `
<div class="card">
<div class="title">${title}</div>
<div class="assignee">assigned to: ${assignee}</div>
<div class="details">${details}</div>
</div>
`;