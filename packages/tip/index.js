import Vue from 'vue'
import Main from './src/main.vue'

let instance = null

export const showTip = function (option) {
    option = typeof option === 'object' ? option : { message: option }
    option = {
        type: option.type || 'tip',
        message: option.message || '提示信息',
        duration: option.duration || 1500
    }
    const { type, duration } = option

    const MsgboxConstructor = Vue.extend(Main)
    instance = new MsgboxConstructor({
        data: option
    })

    instance.$mount()
    document.body.appendChild(instance.$el)

    if (type !== 'loading') {
        setTimeout(hideTip, duration)
    }
}

export const hideTip = function () {
    document.body.removeChild(instance.$el)
}
