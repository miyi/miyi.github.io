function isDagger(str) {
  return str.startsWith("+") || str.startsWith("$") || str.startsWith("dg");
}

function replaceWithInput(str) {
  // identifies ||tag|| patterns for user input
  const shortRegex = /%%(.+?)%%/g;
  const shortInput =
    '<input class="demo-input scope" type="text" maxlength="100" $value#input="$1">';
  // identifies eval(tag) patterns for user input
  const longRegex = /@@(.+?)@@/g;
  const longInput =
    '<input class="demo-input eval" type="text" maxlength="160" $value#input="$1">';
  // identifies {{}} patterns for displaying ${}
  const doubleBracketsRegex = /\{\{(.+?)\}\}/g;
  const doubleBracketsReplacement = "<span @raw>${$1}</span>";
  // identifies \${} patterns for displaying ${}
  const nativeBracketRegex = /\$\{(.+?)\}/g;
  const nativeBracketReplacement = "<span @raw>${$1}</span>";
  const demoCode = str
    .replace(shortRegex, shortInput)
    .replace(longRegex, longInput)
    .replace(doubleBracketsRegex, doubleBracketsReplacement)
    .replace(nativeBracketRegex, nativeBracketReplacement);
  return demoCode;
}

export const produceDemoHtml = (hljs, raw) => {
  const hlCode = hljs.highlight(raw, { language: "xml" }).value;
  const codeWithInputs = replaceWithInput(hlCode);
  return codeWithInputs;
};
