import msgbox from './packages/msgbox/index'
import { showTip, hideTip } from './packages/tip/index'

export default {
    install(Vue) {
        Vue.prototype.$showTip = showTip
        Vue.prototype.$hideTip = hideTip
        Vue.prototype.$msgbox = msgbox
    }
}
