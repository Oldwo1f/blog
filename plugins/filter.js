import Vue from 'vue'

Vue.filter('formatDate', (value) => {
  const date = new Date(value)
  return date.toLocaleString(['fr-FR'], {
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
})
