# README
本网站是中国大事件时间线项目的展示和数据提交平台，欢迎大家在对应的互动图展示页面下方提交相关新闻事件。

网址 [https://chinatimeline.github.io](https://chinatimeline.github.io)

项目 | 最近更新 | Star
--|--|--
网站 | [![Latest GitHub commit](https://img.shields.io/github/last-commit/chinatimeline/chinatimeline.github.io)](https://github.com/chinatimeline/chinatimeline.github.io) | [![GitHub stars](https://img.shields.io/github/stars/chinatimeline/chinatimeline.github.io)](https://github.com/chinatimeline/chinatimeline.github.io/stargazers)
数据 |[![Latest GitHub commit](https://img.shields.io/github/last-commit/chinatimeline/data)](https://github.com/chinatimeline/data) | [![GitHub stars](https://img.shields.io/github/stars/chinatimeline/data)](https://github.com/chinatimeline/data/stargazers)

自动备份/镜像仓库

1. 网站 https://gitlab.com/chinatimeline/chinatimeline.gitlab.io
2. 数据 https://gitlab.com/chinatimeline/data

如何创建本站的自动备份仓库：请见[这里](https://docs.gitlab.com/ee/user/project/repository/repository_mirroring.html)

## 具体流程

在某个时间线互动图的展示页面下方提交新闻事件后，系统自动生成一个 Pull Request(PR) 向本仓库提交一个新文件。当该PR获得批准后，会生成一个新的事件文件 `_data/comments/entryXXXXX.yml`。本仓库维护者会定期用程序将这些新提交的事件添加到本项目的[数据仓库](https://github.com/chinatimeline/data/)和对应的互动图中。

## 感谢
1. Jekyll代码改编自: [达摩俱乐部](https://github.com/DamoresClub/DamoresClub.github.io)
2. Logo[来源](https://www.flaticon.com/free-icon/timeline_1853230) Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com)
3. 新闻提交模块来自 Staticman V3: https://github.com/VincentTam/TestStaticmanLab
5. CSS样式设计: https://www.w3schools.com/css/css_rwd_intro.asp
4. 网页插件
   - 分享按钮: https://sharingbuttons.io/
   - 回到顶部: https://github.com/vfeskov/vanilla-back-to-top

## 贡献者
- [chinatimeline](https://github.com/chinatimeline) 项目所有者
- [TerminusBot](https://github.com/terminusbot) 技术咨询、推广
- [ChengXin](https://github.com/ChengXin) 内容提交、内容复核
- [Vinsep](https://www.reddit.com/u/Vinsep) 内容提交、推广
- [aforwardboot](https://www.reddit.com/user/aforwardboot/) 内容提交
- [zhangrunxu](https://github.com/zhangrunxu) 文档

## 参考时间线模板
- http://timeline.knightlab.com/ Demo https://timeline.knightlab.com/examples/user-interface/index.html
- https://github.com/molly/wikimedia-timeline 展示 https://www.mollywhite.net/wikimedia-timeline/
- https://github.com/technotarek/timeliner
- https://github.com/cheeaun/life Demo https://cheeaun.life/
