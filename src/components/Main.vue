<template>
    <div class="mainContainer">
        <div class="searchBox">
            <el-input v-model="searchData" class="searchBar" clearable size="large"
                suffix-icon="Search" placeholder="输入查找emoji"></el-input>
        </div>

        <div class="mainBox" v-if="!searchEmoji">
            <el-card v-clipboard:copy="item.emoji" v-clipboard:success="onCopy" shadow="always"
                v-for="(item, index) in emojiList" :key="index">
                <div class="cardleft" :style="getColor()">
                    <div class="emoji">{{ item.emoji }}</div>
                </div>
                <div class="cardright">
                    <div class="desc">
                        <p style="margin: 12px" class="desc_title">
                            {{ item.code }}
                        </p>
                        <p style="margin: 12px" class="desc_desc">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </el-card>
        </div>

        <div class="mainBox" v-else>
            <el-card v-clipboard:copy="item.emoji" v-clipboard:success="onCopy" shadow="always"
                v-for="(item, index) in searchEmoji" :key="index">
                <div class="cardleft" :style="getColor()">
                    <div class="emoji">{{ item.emoji }}</div>
                </div>
                <div class="cardright">
                    <div class="desc">
                        <p style="margin: 12px" class="desc_title">
                            {{ item.code }}
                        </p>
                        <p style="margin: 12px" class="desc_desc">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import emoji from '@/data/emoji.js'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const emojiList = ref(emoji)

const generateMixed = (n) => {
    var chars = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
    ]
    var res = '#'
    var id
    for (var i = 0; i < n; i++) {
        id = Math.floor(Math.random() * 16)
        res += chars[id]
    }
    return res
}
const getColor = function () {
    return 'background-color:' + generateMixed(6)
}

// 点击复制模块
const onCopy = () => {
    ElMessage({
        showClose: true,
        message: '已成功复制该表情，快去使用吧～',
        type: 'success',
        center: true,
    })
}

// 搜索功能模块
const searchData = ref('')
const searchEmoji = computed(() => {
    return emoji.filter(
        (item) =>
            item.emoji.includes(searchData.value) ||
            item.description.includes(searchData.value) ||
            item.name.includes(searchData.value)
    )
})
</script>

<style>
:root {
    --el-color-primary: #ddeef7;
}

.mainContainer {
    background-color: #ddeef7;
}

.searchBox {
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.searchBar {
    max-width: 800px;
}

.el-input__wrapper {
    height: 55px !important;
    color: #090909;
    border-radius: 0.5em;
    font-size: 16px;
    text-align: center;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}

.el-input__inner {
    font-size: 16px;
    text-align: center;
}

.el-card {
    width: 300px;
    height: 125px;
    margin: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
}

.el-card__body {
    width: 100%;
    height: 100%;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row;
    flex-flow: row;
}

.mainBox {
    background-color: #ddeef7;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.cardleft {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.emoji {
    font-size: 70px;
}

.cardright {
    width: 60%;
    height: 100%;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row;
}

.boxLine {
    width: 6px;
    height: 95%;
    margin: 20px;
    background-color: #ededed;
}

.desc {
    width: 100%;
    height: 100%;
}

.desc_title {
    font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
    font-weight: 700;
    font-size: 1.25em;
    word-break: break-all;
}

.desc_desc {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>
