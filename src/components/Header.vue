<template>
    <div class="headerBox">
        <div style="text-align: center;">
            <h1 style="font-size: 4em;">Git提交使用指南</h1>
        </div>
        <div style="text-align: center;padding: 10px 0;">
            <el-button size="large" type="danger" @click="gotogitee">Gitee</el-button>
            <el-button size="large" type="danger" @click="gotoiusse">Iusse</el-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        gotogitee() {
            window.location.href = 'https://gitee.com/wejectchan/git-emoji-user-guide'
        },
        gotoiusse() {
            window.location.href = 'https://gitee.com/wejectchan/git-emoji-user-guide/issues'
        }
    },
}
</script>

<style>
.headerBox {
    padding: 0;
    margin: 0;
    height: 300px;
    background-color: #ffdd68;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.headerTitle {
    font-size: 16.5px;
    font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
}
</style>