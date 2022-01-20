<template>
    <Header></Header>
    <el-main>
        <Main></Main>
    </el-main>

    <div class="footer">
        <p style="padding: 6px;">Made With ❤️ By wejectchan</p>
        <p style="padding: 6px;">
            <el-link
                href="https://github.com/carloscuesta/gitmoji"
                :underline="false"
                target="_blank"
                type="info"
            >Fork from gitmoji@github under the MIT license</el-link>
        </p>
        <p style="padding: 6px;">
            <el-link
                href="https://github.com/hooj0/git-emoji-guide"
                :underline="false"
                target="_blank"
                type="info"
            >Translate by hooj0/git-emoji-guide@github under the Apache License 2.0</el-link>
        </p>
    </div>
</template>

<script setup>
import Main from '../components/Main.vue'
import Header from '../components/Header.vue'

</script>

<style>
.el-main {
    background-color: #ddeef7;
    z-index: 2;
    padding: 0;
    width: 100%;
    min-height: 700px;
}

.footer {
    background-color: #464646;
    text-align: center;
    color: aliceblue;
}

p {
    margin: 0;
}
</style>