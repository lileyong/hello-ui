<template>
    <div class="tip">Tip</div>
</template>

<script>
export default {
    name: 'Tip'
}
</script>

<style lang="scss" scoped>
.tip {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.tip .tip-bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.46;
    background: #000000;
}

.tip.hide,
.tip.hide .tip-bg {
    width: 0;
    height: 0;
    overflow: hidden;
}

.tip .tip-box {
    position: absolute;
    max-width: 600px;
    border-radius: 12px;
    background-color: #333;
    opacity: 0.7;
    overflow: hidden;
    transition: all 0.3s ease-in;
}

.tip.success .tip-box,
.tip.warn .tip-box,
.tip.error .tip-box,
.tip.loading .tip-box {
    min-width: 240px;
    min-height: 234px;
}

.tip .tip-box.hide {
    width: 0;
    height: 0;
    opacity: 0;
}

.tip .tip-content {
    max-width: 600px;
    border-radius: 17px;
    overflow: hidden;
}

.tip .tip-icon {
    margin: 52px auto 0 auto;
    display: block;
    width: 75px;
    height: 75px;
}

.tip .tip-icon.success {
    background: url(./images/tip-success.png) center center / 100% 100%
        no-repeat;
}

.tip .tip-icon.warn {
    background: url(./images/tip-warn.png) center center / 100% 100% no-repeat;
}

.tip .tip-icon.error {
    background: url(./images/tip-error.png) center center / 100% 100% no-repeat;
}

.tip .loading {
    position: relative;
    margin: 52px auto 0 auto;
    display: block;
    width: 75px;
    height: 75px;
    transform-origin: 35px 35px;
    -webkit-transform-origin: 35px 35px;
    -webkit-animation: loading 1.5s steps(12) both infinite;
    animation: loading 1.5s steps(12) both infinite;
}

.tip .loading em {
    position: absolute;
    left: 32px;
    top: 0;
    display: inline-block;
    width: 6px;
    height: 18px;
    border-radius: 3px;
    background-color: #858585;
    transform-origin: 3px 35px;
    -webkit-transform-origin: 3px 35px;
}

.tip .loading em:nth-child(1) {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    background-color: #c6c6c6;
}

.tip .loading em:nth-child(2) {
    transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
    background-color: #d6d6d6;
}

.tip .loading em:nth-child(3) {
    transform: rotate(60deg);
    -webkit-transform: rotate(60deg);
    background-color: #e6e6e6;
}

.tip .loading em:nth-child(4) {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    background-color: #858585;
}

.tip .loading em:nth-child(5) {
    transform: rotate(120deg);
    -webkit-transform: rotate(120deg);
    background-color: #858585;
}

.tip .loading em:nth-child(6) {
    transform: rotate(150deg);
    -webkit-transform: rotate(150deg);
    background-color: #858585;
}

.tip .loading em:nth-child(7) {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    background-color: #858585;
}

.tip .loading em:nth-child(8) {
    transform: rotate(210deg);
    -webkit-transform: rotate(210deg);
    background-color: #858585;
}

.tip .loading em:nth-child(9) {
    transform: rotate(240deg);
    -webkit-transform: rotate(240deg);
    background-color: #858585;
}

.tip .loading em:nth-child(10) {
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    background-color: #969696;
}

.tip .loading em:nth-child(11) {
    transform: rotate(300deg);
    -webkit-transform: rotate(300deg);
    background-color: #a5a5a5;
}

.tip .loading em:nth-child(12) {
    transform: rotate(330deg);
    -webkit-transform: rotate(330deg);
    background-color: #b6b6b6;
}

@-webkit-keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(720deg);
    }
}

.tip .tip-content p {
    margin: auto;
    padding: 19px 40px;
    text-align: center;
    line-height: 48px;
    font-family: SourceHanSansCN-Normal;
    font-size: 30px;
    color: #ffffff;
    letter-spacing: -0.57px;
    word-break: break-all;
}

.tip .tip-content button {
    margin: 25px auto 0 auto;
    display: block;
    width: 150px;
    height: 50px;
    background-color: #fff;
    border: 1px solid #fcb828;
    border-radius: 25px;
    font-family: SourceHanSansCN-Bold;
    font-size: 16px;
    color: #fcb828;
    letter-spacing: -0.46px;
    text-align: center;
}
</style>