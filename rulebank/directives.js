export const lifecycle_data= {
  loading: {decorators: ['root','plain','init']},
  loaded: {},
  unloading: {},
  unloaded: {}
}

export const control_data = {
  common: ['input', 'lazy', 'name', 'once', 'oneway', 'remove', 'router'],
  checked: {decorators: ['indeterminate']},
  each: {decorators: ['item', 'inded', 'key']},
  exist: {decorators: []},
  focus: {decorators: ['prevent']},
  html: {decorators: ['root', 'strict']},
  value: {decorators: ['trim', 'number']},
  result: {decorators: ['buffer', 'data','encoding']},
}
