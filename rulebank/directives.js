export const lifecycle_data = {
  loading: { decorators: ["root", "plain", "init"] },
  loaded: {},
  unloading: {},
  unloaded: {},
};

export const control_data = {
  common: ["input", "lazy", "name", "once", "oneway", "remove", "router"],
  checked: { decorators: ["indeterminate"] },
  class: { decorators: [] },
  each: { decorators: ["item", "index", "key"] },
  exist: { decorators: [] },
  focus: { decorators: ["prevent"] },
  html: { decorators: ["root", "router", "strict"] },
  selected: { decorators: [] },
  style: { decorators: [] },
  value: { decorators: ["trim", "number"] },
  watch: { decorators: ["router"] },
  result: { decorators: ["buffer", "data", "encoding"] },
};
