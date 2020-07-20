import Msgbox from '../packages/msgbox/index'

export default {
    install(Vue) {
        Vue.prototype.$msgbox = Msgbox
    }
}
