export const produceDemoJs = (hljs, hljs_js_syntax, raw) => {
  hljs.registerLanguage("javascript", hljs_js_syntax);
  return hljs.highlight(raw, { language: "javascript" }).value;
};
