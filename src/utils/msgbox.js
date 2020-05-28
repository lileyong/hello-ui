import '../css/msgbox.css'

export function msgbox({ title, content, btns, animation = 'fade-in' }) {
    var btnHtml = []
    window.msgbox_btn_close = () => {
        $('.msgbox-wrap').removeClass(animation)
        setTimeout(() => {
            $('.msgbox-wrap').remove()
        }, 200)
    }
    btns.forEach((btn, index) => {
        window['msgbox_btn_callback_' + (index + 1)] = () => {
            if (typeof btn.callback === 'function') {
                btn.callback().then(window.msgbox_btn_close)
            }
        }
        btnHtml.push(
            `<div class="btn ${btn.type || ''}" onclick="msgbox_btn_callback_${
                index + 1
            }()">${btn.text}</div>`
        )
    })
    var html = `
        <div class="msgbox-wrap">
            <div class="msgbox-bg"></div>
            <div class="msgbox">
                <div class="msgbox-header">
                    ${title}
                    <span class="close" onclick="msgbox_btn_close()"></span>
                </div>
                <div class="msgbox-content">${content}</div>
                <div class="msgbox-footer">${btnHtml.join('')}</div>
            </div>
        </div>
    `
    $('body').append(html)
    window.requestAnimationFrame(() => {
        $('.msgbox-wrap').addClass(animation)
    })
}
