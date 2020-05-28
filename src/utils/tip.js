import '../css/tip.css'

export function showTip(option) {
    option = typeof option === 'object' ? option : { message: option }
    var type = option.type || 'tip'
    var msg = option.message || '提示信息'
    msg = typeof msg === 'object' ? JSON.stringify(msg) : msg
    var duration = option.duration || 1500

    var iconhtml = ''
    switch (type) {
        case 'success':
            iconhtml = '<i class="tip-icon success"></i>'
            break
        case 'warn':
            iconhtml = '<i class="tip-icon warn"></i>'
            break
        case 'error':
            iconhtml = '<i class="tip-icon error"></i>'
            break
        case 'loading':
            iconhtml = `
            <span class="tip-icon loading" id="loading">
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
            </span>
        `
            break
    }
    var bghtml = type === 'tip' ? '' : '<div class="tip-bg"></div>'

    var html = `
        <div class="tip ${type}">
            ${bghtml}
            <div class="tip-box">
                <div class="tip-content">
                    ${iconhtml}
                    <p>${msg}</p>
                </div>
            </div>
        </div>
    `

    $('.tip').remove()
    $('body').append(html)
    if (type !== 'loading') {
        setTimeout(function () {
            $('.tip').addClass('hide')
        }, duration)
    }
}

export function hideTip() {
    $('.tip').addClass('hide')
}
