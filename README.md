# **从一次有趣的对话开始**

某天和朋友聚餐，途中谈到在`git`提交信息使用`emoji`的话题，引起了大家浓厚兴趣。

在我接触的项目中，git提交规则大多按约定执行，这些约定往往写在了开发手册中（大多数和版本升级规则一并约定），但几乎没有对`emoji`的使用进行约定。

于是，回家后开始研究，原来`github`上还真有一个项目，提倡在`git`提交中使用`emoji`。

[carloscuesta/gitmoji: An emoji guide for your commit messages. 😜 (github.com)](https://github.com/carloscuesta/gitmoji)

这样带来的好处是:

```text
1. 非常清晰明表达本次提交的主要内容；
2. 在众多的提交列表中，特征比较明显，容易查找历史某次提交信息；
3. 较为美观
```



## 什么效果？

截图来自([carloscuesta/gitmoji: An emoji guide for your commit messages. 😜 (github.com)](https://github.com/carloscuesta/gitmoji))

![github-emoji](/Volumes/WorkSpace/Projects/git-emoji-user-guide/images/github-emoji.png)



## 如何使用？

目前比较主流的使用方式为:

```shell
git commit -m ':emoji_code: any commit messages(iusse)'
# :emoji_code: 格式为:开始和结尾，中间是emoji代码
```

例如：对一个仓库初始化并完成第一次提交:

```shell
git commit -m ':tada: first commit'
```



# git emoji索引表

这里提供了一份git emoji索引对照表

中文翻译来自[hooj0/git-emoji-guide: :pencil2: git commit emoji guide Git提交注释使用表情指北 ](https://github.com/hooj0/git-emoji-guide)[License:Apache License 2.0]

--**PS:善用搜索。**--

|                emoji 表情                |          emoji 代码           |          commit 说明          |
| :--------------------------------------: | :---------------------------: | :---------------------------: |
|              :art: (调色板)              |            `:art:`            |     改进代码结构/代码格式     |
|   :zap: (闪电) <br/>:racehorse: (赛马)   |   `:zap:`<br/>`:racehorse:`   |           提升性能            |
|              :fire: (火焰)               |           `:fire:`            |        移除代码或文件         |
|               :bug: (bug)                |            `:bug:`            |           修复 bug            |
|           :ambulance: (急救车)           |         `:ambulance:`         |           重要补丁            |
|            :sparkles: (火花)             |         `:sparkles:`          |          引入新功能           |
|             :memo: (备忘录)              |           `:memo:`            |           撰写文档            |
|             :rocket: (火箭)              |          `:rocket:`           |           部署功能            |
|            :lipstick: (口红)             |         `:lipstick:`          |      更新 UI 和样式文件       |
|              :tada: (庆祝)               |           `:tada:`            |           初次提交            |
|     :white_check_mark: (白色复选框)      |     `:white_check_mark:`      |           增加测试            |
|               :lock: (锁)                |           `:lock:`            |         修复安全问题          |
|              :apple: (苹果)              |           `:apple:`           |      修复 macOS 下的内容      |
|             :penguin: (企鹅)             |          `:penguin:`          |      修复 Linux 下的内容      |
|         :checkered_flag: (旗帜)          |       `:checked_flag:`        |     修复 Windows 下的内容     |
|         :robot: (Android 机器人)         |           `:robot:`           |  修复 Android 上的某些内容。  |
|          :green_apple: (绿苹果)          |        `:green_apple:`        |    解决 iOS 上的某些问题。    |
|            :bookmark: (书签)             |         `:bookmark:`          |         发行/版本标签         |
|        :rotating_light: (警车灯)         |      `:rotating_light:`       |       移除 linter 警告        |
|          :construction: (施工)           |       `:construction:`        |          工作进行中           |
|           :green_heart: (绿心)           |        `:green_heart:`        |       修复 CI 构建问题        |
|         :arrow_down: (下降箭头)          |        `:arrow_down:`         |           降级依赖            |
|          :arrow_up: (上升箭头)           |         `:arrow_up:`          |           升级依赖            |
|             :pushpin: (图钉)             |          `:pushpin:`          |  将依赖关系固定到特定版本。   |
|       :construction_worker: (工人)       |    `:construction_worker:`    |       添加 CI 构建系统        |
| :chart_with_upwards_trend: (上升趋势图)  | `:chart_with_upwards_trend:`  |      添加分析或跟踪代码       |
|           :recycle: (循环箭头)           |          `:recycle:`          |          重构代码。           |
|             :hammer: (锤子)              |          `:hammer:`           |           重大重构            |
|        :heavy_minus_sign: (减号)         |     `:heavy_minus_sign:`      |         减少一个依赖          |
|              :whale: (鲸鱼)              |           `:whale:`           |        Docker 相关工作        |
|         :heavy_plus_sign: (加号)         |      `:heavy_plus_sign:`      |         增加一个依赖          |
|             :wrench: (扳手)              |          `:wrench:`           |         修改配置文件          |
|      :globe_with_meridians: (地球)       |   `:globe_with_meridians:`    |        国际化与本地化         |
|             :pencil2: (铅笔)             |          `:pencil2:`          |           修复 typo           |
|             :hankey: (瞪眼)              |          `:hankey:`           |   编写需要改进的错误代码。    |
|           :rewind: (双左箭头)            |          `:rewind:`           |          恢复更改。           |
| :twisted_rightwards_arrows: (双合并箭头) | `:twisted_rightwards_arrows:` |          合并分支。           |
|             :package: (箱子)             |          `:package:`          |     更新编译的文件或包。      |
|              :alien: (面具)              |           `:alien:`           | 由于外部 API 更改而更新代码。 |
|             :truck: (面包车)             |           `:truck:`           |      移动或重命名文件。       |
|         :page_facing_up: (文档)          |      `:page_facing_up:`       |      添加或更新许可证。       |
|              :boom: (爆炸)               |           `:boom:`            |       介绍突破性变化。        |
|            :bento: (装满餐盘)            |           `:bento:`           |       添加或更新资产。        |
|           :ok_hand: (OK 手势)            |          `:ok_hand:`          | 由于代码审查更改而更新代码。  |
|           :wheelchair: (坐姿)            |        `:wheelchair:`         |        提高可访问性。         |
|              :bulb: (灯泡)               |           `:bulb:`            |         记录源代码。          |
|              :beers: (干杯)              |           `:beers:`           |      醉生梦死的写代码。       |
|        :speech_balloon: (提示栏)         |      `:speech_balloon:`       |       更新文字和文字。        |
|        :card_file_box: (卡片盒子)        |       `:card_file_box:`       |   执行与数据库相关的更改。    |
|         :loud_sound: (有声喇叭)          |        `:loud_sound:`         |          添加日志。           |
|            :mute: (静音喇叭)             |           `:mute:`            |          删除日志。           |
|     :busts_in_silhouette: (两个人头)     |    `:busts_in_silhouette:`    |         添加贡献者。          |
|       :children_crossing: (小盆友)       |     `:children_crossing:`     |     改善用户体验/可用性。     |
|      :building_construction: (吊车)      |   `:building_construction:`   |        进行架构更改。         |
|             :iphone: (手机)              |          `:iphone:`           |      致力于响应式设计。       |
|           :clown_face: (小丑)            |        `:clown_face:`         |          嘲笑事物。           |
|               :egg: (彩蛋)               |            `:egg:`            |     添加一个复活节彩蛋。      |
|         :see_no_evil: (蒙眼猴子)         |        `:see_no_evil:`        |  添加或更新.gitignore 文件。  |
|         :camera_flash: (照相机)          |       `:camera_flash:`        |       添加或更新快照。        |
