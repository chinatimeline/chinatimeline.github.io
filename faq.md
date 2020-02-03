---
layout: page
title: 常见问题
permalink: /faq/
comments: true
---

1. FAQ list
{:toc}

#### 如何保证你的网站是安全的？
数据从本站的服务器传递到你的浏览器需要经过很多环节，这些在你我控制之外的环节都可能被监听，具体见[这篇针对非专业人士的简介](https://diymysite.github.io/analytics/#!pages/analytics.md)。因此，强烈推荐用[Tor Browser](https://www.torproject.org/download/)/[Whonix](https://www.whonix.org/)/[Tails OS](https://tails.boum.org)浏览一切政治相关网站，因为只有在你自己电脑端确保安全上才是真正的安全。

本站采用的所有组件一律以是否被默认配置下的[uBlockOrigin](https://github.com/gorhill/uBlock)(简称uBO)阻拦为准， uBO是[PrivacyTools.io](https://www.privacytools.io)推荐的用于保护隐私的浏览器插件，安装方法见页脚链接。本站无任何用户跟踪脚本。但本站网页元素中包含用于绘图和渲染时间线的第三方 javascripts 、第三方图床(如[imgur](https://imgur.com)和一些新闻网站)，同时本站托管于[github](https://www.github.com) pages。因此，当你访问本站时，第三方图床和Github都知道你的IP地址。

如果你是一个只读用户，即只浏览网页，本站无法获得你的IP地址等任何隐私。

但是如果你在本站留言或提交事件，本站采用的表单提交应用 [staticman](https://staticman.net) 会记录你的IP地址。本站已于2020年2月4日起从staticman官方提供的公用接口切换到本站部署的私有接口。切换的原因是staticman的官方公用接口被数以万计的博客使用，每次提交都要折腾多次才能成功，体验极差。在使用公用接口期间，用户每次提交的IP都被staticman官方记录，而切换到私有接口后则会被本站部署的应用记录。本站承诺不会将这些记录泄露给任何人。值得注意的是，任何互动式的应用包括论坛的所有者都知道用户的IP地址。这也是为什么本站一再推荐您使用Tor或安全的VPN来隐藏自己的IP地址。



#### 谁在搜集数据？数据靠谱吗？
本项目本身的目的是由广大观众通过众筹的模式搜集数据，不过截止2020-01-28日为止绝大部分数据都由站方搜集，不超过2%的数据来自网友提交，未来目标是提高网友提交比例。

#### 中国时间线项目某一天凭空消失了怎么办，我的努力岂不是都白费了？
很简单，去gitlab/github/bitbucket等代码托管平台建立本项目的镜像仓库，方法请见[gitlab的教程](https://docs.gitlab.com/ee/user/project/repository/repository_mirroring.html)，本项目任何改动都会实时同步到你的镜像仓库。即便某一天本项目消失了，你也拥有完整的备份。

#### 提交新闻事件是否需要注册或登录？
在本站提交新闻无需注册任何账户，无需登录任何账户。有直接页面提交和批量提交两种方式，具体见[参与方法](/how_to_contribute)。

#### 如何参与本站建设？
需要Github帐号，可以向[网站](https://github.com/chinatimeline/chinatimeline.github.io)或[数据](https://github.com/chinatimeline/data)两个仓库提交Pull Requests.
