# 离线版使用教程
## 前提
安装git，ruby， ruby-dev，jekyll

## 新建时间线
假设我们要新建一条时间线“本地事件”，其中有3类事件： 类别1, 类别2, 类别3, 其它.

1 下载本仓库 `git clone https://github.com/chinatimeline/chinatimeline.github.io.git`

2 切换到项目的offline分支 `git checkout offline`

3 修改 `_data/types.yml` 文件，添加以下内容
```YAML
本地事件:
    name: 本地事件
    slug: localevent
    types:
        - 类别1
        - 类别2
        - 类别3
        - 其它
```

4 如果你想修改目前的1-5的事件评分为1-10，可以在 `_data/ratings.yml` 添加6-10的行。

5 创建可视化主页，您可以创建两个类别的主页：story和list。story类型的时间线侧重每个时间的内容，如 八九学运、文革、台湾民主化、武汉肺炎等，您可以将 `_posts/`中与这些事件对应的.md文件另存为新的文件，并且在文件头部的配置区修改对应的配置
```YAML
---
layout: story
title: 本地事件标题
tags: [关键词1, 关键词2]
permalink: /localevent/
teaser: /images/localevent.jpg
slug: 本地事件
order: true # 顺序true 倒序false
submit: true
comments: true
hitcounterid:
---

```

6 配置本地记录提交服务器，项目根目录下运行 `bundle install`

7 运行本地记录提交服务器 `bundle exec ruby local_server.rb`， 浏览器打开 `http://localhost:4567`

8 运行本地时间线网站 `bundle exec jekyll serve`， 浏览器打开 `http://localhost:4000`

9 在具体的时间线主题页面或[提交页面](http://localhost:4000/form)添加事件。

## 感谢
离线版提交服务器由[duty-machine](https://github.com/duty-machine)开发。
