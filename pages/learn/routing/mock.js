export const router = {
 mode: 'history',
 routing: {
  modules: 'home',
  constants: {base: 'home'},
  children: [
    {
      path: 'about',
      modules: 'about',
      constants: {
        base: 'about',
        title: 'who we are'
      }
    },
    { path: 'browse', modules: browselayout}
  ]
 }
}

export const modules = {
  'home': './home/home.html',
  'about': './home/about/about.html',
  'browser'
}