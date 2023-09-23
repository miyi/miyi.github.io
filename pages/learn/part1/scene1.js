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
  <div>{{scope.title}}</div>
  <div>assigned to: {{scope.assignee}}</div>
  <div>{{scope.details}}</div>
</div>
    `,
  label: "card.html",
});

export const loadingBrowser = (title, assignee, details) => `
<div class="tutorial-contact-card">
<div class="card-title">${title}</div>
<div class="assignee">assigned to: ${assignee}</div>
<div class="details">${details}</div>
</div>
`;

export const loadingBrowserHtml = () => `
<div class="tutorial-contact-card">
<div class="card-title">\${title}</div>
<div class="assignee">assigned to: \${assignee}</div>
<div class="details">\${details}</div>
</div>
`;
