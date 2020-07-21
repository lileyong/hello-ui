import Vue from 'vue'
import Main from './src/main.vue'

const msgbox = function (option) {
    const MsgboxConstructor = Vue.extend(Main)
    const instance = new MsgboxConstructor({
        data: option
    })

    instance.$mount()
    document.body.appendChild(instance.$el)
}

export default msgbox
