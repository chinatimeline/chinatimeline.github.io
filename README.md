# README
本网站是中国大事件时间线项目的展示和数据提交平台，欢迎大家在对应的互动图展示页面下方提交相关新闻事件。

## 具体流程

在某个时间线互动图的展示页面下方提交新闻事件后，系统自动生成一个 Pull Request(PR) 向本仓库提交一个新文件。当该PR获得批准后，会生成一个新的事件文件 `_data/comments/entryXXXXX.yml`。本仓库维护者会定期用程序将这些新提交的事件添加到本项目的[数据仓库](https://github.com/chinatimeline/data/)和对应的互动图中。

## 感谢
1. 网站代码改自: [达摩俱乐部](https://github.com/DamoresClub/DamoresClub.github.io)
2. Logo来源: https://www.flaticon.com/free-icon/timeline_1853230
3. 新闻提交模块来自 Staticman V3: https://github.com/VincentTam/TestStaticmanLab
