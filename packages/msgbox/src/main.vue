<template>
    <div v-if="show" class="msgbox-wrap">
        <div class="msgbox-bg"></div>
        <div class="msgbox">
            <div class="msgbox-header">
                {{ title }}
                <span class="close" @click="handleClose"></span>
            </div>
            <div class="msgbox-content">{{ content }}</div>
            <div class="msgbox-footer">
                <div
                    v-for="btn in btns"
                    :key="btn"
                    :class="['btn', btn.type]"
                    @click="btn.callback"
                >{{ btn.text }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Msgbox',
    data () {
        return {
            show: true,
            title: '',
            content: '',
            btns: []
        }
    },
    methods: {
        handleClose () {
            this.show = false
        }
    }
}
</script>

<style lang="scss" scoped>
.msgbox-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9998;
    display: flex;
    justify-content: center;
    align-items: center;
}

.msgbox-wrap .msgbox-bg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(4, 4, 15, 0.4);
    transition: all 0.2s linear;
}

.msgbox-wrap .msgbox {
    position: relative;
    margin: 0 36px;
    min-width: 440px;
    background: #ffffff;
    border-radius: 8px;
    transform-origin: center center;
    transform: scale(1, 1);
    transition: all 0.2s linear;
    opacity: 1;
}

.msgbox-wrap .msgbox-header {
    padding: 30px 58px 28px 58px;
    text-align: center;
    line-height: 44px;
    font-family: PingFangSC-Regular;
    font-size: 32px;
    color: #222222;
}

.msgbox-wrap .msgbox-header .close {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    padding: 35px 30px;
    width: 30px;
    height: 30px;
    background: url(./images/close.png) 30px 34px / 30px 30px no-repeat;
}

.msgbox-wrap .msgbox-content {
    padding: 0 58px;
    line-height: 34px;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #acacac;
    text-align: center;
}

.msgbox-wrap .msgbox-footer {
    margin-left: 16px;
    display: flex;
    padding: 44px 58px 46px 58px;
    justify-content: center;
}

.msgbox-wrap .msgbox-footer .btn {
    margin-right: 16px;
    padding: 14px 54px 16px 54px;
    text-align: center;
    line-height: 42px;
    background: #fff;
    border: 1px solid #bfcbd9;
    border-radius: 8px;
    font-family: PingFangSC-Regular;
    font-size: 30px;
    color: #1f2d3d;
}

.msgbox-wrap .msgbox-footer .primary {
    border: none;
    background: #24c77e;
    color: #ffffff;
}
</style>