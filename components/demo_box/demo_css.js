export const produceDemoCss = (hljs, hlcssGrammar, raw) => {
  hljs.registerLanguage("css", hlcssGrammar);
  return hljs.highlight(raw, { language: "css" }).value;
};