export const produceDemoJs = (hljs, hljsGrammar, raw) => {
  hljs.registerLanguage("javascript", hljsGrammar);
  return hljs.highlight(raw, { language: "javascript" }).value;
};
