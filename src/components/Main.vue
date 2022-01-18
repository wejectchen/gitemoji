<template>
    <div class="mainContainer">
        <div class="searchBox">
            <el-input
                v-model="searchData"
                clearable
                maxlength="50"
                style="width: 800px"
                size="large"
                class="w-50 m-2"
                suffix-icon="Search"
                placeholder="输入查找emoji"
                :suffix-icon="Search"
            ></el-input>
        </div>

        <div class="mainBox">
            <el-card
                v-clipboard:copy="item.emoji"
                v-clipboard:success="onCopy"
                shadow="always"
                v-for="(item, index) in emojiList"
                :key="index"
            >
                <div class="cardleft" :style="getColor()">
                    <div class="emoji">{{ item.emoji }}</div>
                </div>
                <div class="cardright">
                    <div class="desc">
                        <p style="margin:12px;" class="desc_title">{{ item.code }}</p>
                        <p style="margin:12px ;" class="desc_desc">{{ item.description }}</p>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue'
import emoji from '../assets/emoji'


export default {
    setup() {
        const emojiList = ref(emoji)
        const generateMixed = (n) => {
            var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            var res = "#";
            var id;
            for (var i = 0; i < n; i++) {
                id = Math.floor(Math.random() * 16);
                res += chars[id];
            }
            return res;
        }
        const getColor = function () {
            return 'background-color:' + generateMixed(6)
        }

        const onCopy = () => {
            ElMessage({
                showClose: true,
                message: '已成功复制该表情，快去使用吧～～',
                type: 'success',
                center: true,
            })

        }

        return {
            emojiList,
            getColor,
            onCopy
        }
    },

    data() {
        return {
            searchData: ''
        }
    },
    computed: {
        emoji() {
            const input = this.searchData
            if (input) {
                return this.emoji.filter(data => {
                    // return Object.keys(data)
                    return Object.keys(data).some(key => {
                        return String(data[key]).toLowerCase().indexOf(input) > -1
                    })
                })
            }
            return this.emoji
        }
    },
}



// export default {
//     data() {
//         return {
//             emoji,
//             searchData: ""
//         }
//     },

//     methods: {


//         getColor() {
//             return 'background-color:' + this.generateMixed(6)
//         },

//         generateMixed(n) {
//             var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
//             var res = "#";
//             var id;
//             for (var i = 0; i < n; i++) {
//                 id = Math.floor(Math.random() * 16);
//                 res += chars[id];
//             }
//             return res;
//         },

//         onCopy() {
//             ElMessage({
//                 showClose: true,
//                 message: '已成功复制该表情，快去使用吧～～',
//                 type: 'success',
//                 center: true,
//             })

//         }
//     },
//     computed: {
//         emoji() {
//             const input = this.searchData
//             if (input) {
//                 return this.emoji.filter(data => {
//                     // return Object.keys(data)
//                     return Object.keys(data).some(key => {
//                         return String(data[key]).toLowerCase().indexOf(input) > -1
//                     })
//                 })
//             }
//             return this.emoji
//         }
//     },
// }
</script>

<style>
:root {
    --el-color-primary: #464646;
}

.searchBox {
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.el-input {
    height: 20px;
}

.el-input__inner {
    height: 20px;
    color: #000;
}

.el-card {
    width: 300px;
    height: 125px;
    margin: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
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