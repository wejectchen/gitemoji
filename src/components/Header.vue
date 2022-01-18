<template>
    <div class="headerBox">
        <div style="text-align: center;">
            <h1 style="font-size: 4em;">Git提交使用指南</h1>
        </div>
        <div class="BtnBox">
            <el-button id="gotogitee" type="danger" size="large" @click="gotogitee">Gitee</el-button>
            <el-button id="button" type="danger" size="large" @click="gotoiusse">Iusse</el-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        gotogitee() {
            document.getElementById("gotogitee").target = "_blank"
            // document.getElementById('gotogitee').href = 'https://gitee.com/wejectchan/git-emoji-user-guide'
            window.location.href = 'https://gitee.com/wejectchan/git-emoji-user-guide'
            // window.location.target = '_blank'
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
    height: 400px;
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

.BtnBox {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>