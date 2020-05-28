import { showTip, hideTip } from './utils/tip'
import { msgbox } from './utils/msgbox'

export default function install(Vue) {
    Vue.prototype.$showTip = showTip
    Vue.prototype.$hideTip = hideTip
    Vue.prototype.$msgbox = msgbox
}
