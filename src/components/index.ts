import Button from '@/components/button/index.vue'
import Menu from '@/components/menu/index.vue'

interface IComponents{
  [key:string]: any
}
const components = {
  Button,
  Menu
}
const install = function(Vue:any, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, (<IComponents>components)[key])
  })
}

export default install
