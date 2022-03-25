export default route => {
  return route.meta && route.meta.title ? route.meta.title : 'NOTHING'
}
