import Vue from 'vue'
import Main from './src/main.vue'

const Msgbox = function (options) {
    const MsgboxConstructor = Vue.extend(Main)
    const instance = new MsgboxConstructor({
        data: options
    })

    instance.$mount()
    document.body.appendChild(instance.$el)
}

export default Msgbox
