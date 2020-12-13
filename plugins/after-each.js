export default ({ app }) => {
  app.router.afterEach((to, from) => {
    console.log('aftereach')
    setTimeout(function () {
      const event = new Event('router-loaded')
      document.dispatchEvent(event)
    }, 5000)
  })
}
