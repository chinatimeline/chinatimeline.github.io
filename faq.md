---
layout: page
title: 常见问题
permalink: /faq/
comments: true
---

1. FAQ list
{:toc}

## 如何保证这个网站是安全的？<a name="privacy"></a>
数据从本站的服务器传递到你的浏览器需要经过很多环节，这些在你我控制之外的环节都可能被监听，具体见[这篇针对非专业人士的简介](https://diymysite.github.io/analytics/#!pages/analytics.md)。因此，<ins>强烈推荐用[Tor Browser](https://www.torproject.org/download/)/[Whonix](https://www.whonix.org/)/[Tails OS](https://tails.boum.org)浏览一切政治相关网站</ins>，因为只有在你自己电脑端确保安全上才是真正的安全。

本站采用的所有组件一律以是否被默认配置下的[uBlockOrigin](https://github.com/gorhill/uBlock)(简称uBO)阻拦为准， uBO是[PrivacyTools.io](https://www.privacytools.io)推荐的用于保护隐私的浏览器插件，安装方法见页脚链接。本站无任何用户跟踪脚本。但本站网页元素中包含用于绘图和渲染时间线的第三方 javascripts 、第三方图床(如[imgur](https://imgur.com)和一些新闻网站)，同时本站托管于[github](https://www.github.com) pages。因此，当你访问本站时，第三方图床和Github都知道你的IP地址。另外，本站不使用Cookies，因而没有相应的隐私风险。 <ins>如果你只浏览本站网页，本站无法获得你的IP地址等任何隐私。</ins>


<ins>如果你在本站留言或提交事件，本站采用的表单提交应用 [staticman](https://staticman.net) 会记录你的IP地址</ins>。本站已于2020年2月4日起从staticman官方提供的公用接口切换到本站部署的私有接口。切换的原因是staticman的官方公用接口被数以万计的博客使用，每次提交都要折腾多次才能成功，体验极差。在使用公用接口期间，用户每次提交内容时的IP都被staticman官方记录，而切换到私有接口后则会被本站部署的应用记录（应用部署的主机服务商[Heroku](https://www.heroku.com/)会自动保留1500行系统日志，其中包含每个请求的IP地址，并非staticman或本站设计该功能)。 <ins>本站承诺不会将这些记录泄露给任何人。</ins>

即便如此，上述所有服务器（图床、Github、Staticman主机）的日志仍然存在被黑客获取的风险。因此，本站强烈建议您使用Tor或安全的VPN来从源头隐藏自己的真实IP地址。这个建议也适用于一切论坛等互动式的应用，因为论坛服务器知道每个访问者的IP地址。 <ins>政府和ISP能根据你的真实IP地址查找到你的真实身份或方位等敏感信息。</ins>

如果您继续使用本站服务，代表您已阅读和接受上述风险。

## 谁在搜集数据？数据靠谱吗？
本项目本身的目的是由广大观众通过众筹的模式搜集数据，不过截止2020-01-28日为止绝大部分数据都由站方搜集，不超过2%的数据来自网友提交，未来目标是提高网友提交比例。

## 中国时间线项目某一天凭空消失了怎么办，我的努力岂不是都白费了？
很简单，去gitlab/github/bitbucket等代码托管平台建立本项目的镜像仓库，方法请见[gitlab的教程](https://docs.gitlab.com/ee/user/project/repository/repository_mirroring.html)，本项目任何改动都会实时同步到你的镜像仓库。即便某一天本项目消失了，你也拥有完整的备份。

## 提交新闻事件是否需要注册或登录？
在本站提交新闻无需注册任何账户，无需登录任何账户。有直接页面提交和批量提交两种方式，具体见[参与方法](/how_to_contribute)。

## 如何参与？
需要Github帐号，可以向[网站](https://github.com/chinatimeline/chinatimeline.github.io)或[数据](https://github.com/chinatimeline/data)两个仓库提交Pull Requests.

本项目旨在帮助公众更好的认识大中华地区的现在和历史。我们欢迎和鼓励公众参与提交新闻事件。

### 1 前提条件
请首先确保您在安全的环境里工作，即物理安全（不被偷窥、监控）和电脑与网络环境安全。
- **硬件平台** 请勿在手机或平板操作。
- **操作系统** 非Windows系统，推荐 [Tails OS](https://tails.boum.org/)或Linux双虚拟机环境，比如 Whonix， (参见[Prism Break](https://prism-break.org/zh-CN/subcategories/macos-operating-systems-live/)和[编程随想的博文](https://program-think.blogspot.com/2012/10/system-vm-0.html))。
- **最低要求** 安全网络环境 + 非Windows、Android系统 + [Tor Browser](https://www.torproject.org/download/)
- **电子邮箱** 非必须品，请勿使用任何国产Email，推荐使用 [Protonmail](https://www.protonmail.com) 等匿名邮箱。
- **网络链接** 必须全程在Tor环境下操作。
- **更多工具** 参考[PrivacyTools](https://www.privacytools.io/)

### 2 提交新闻事件
#### 2.1 单个新闻事件
可在时间线页面表格提交，如果是媒体报道的新闻，可以直接向[Telegram机器人](https://t.me/chinatimeline_bot)发送链接。端点星的网页存档工具 [http://206.189.252.32:12345/](http://206.189.252.32:12345/).

#### 2.2 批量提交（推荐）
如果一次提交5个以上事件推荐用批量提交。下载[批量事件模板](./batch_submit_example.csv)，用电子表格软件编辑csv文件（推荐在线表格应用[EtherCalc](https://ethercalc.org/)，在线[批量事件模板](https://ethercalc.org/t7dhm5f9a1ty)），添加新闻事件及相应来源链接等信息。

将编辑好的文件，利用[离线软件](https://www.privacytools.io/software/productivity/#metadata-removal-tools)或[在线工具](https://www.metawiper.com/)去掉文件的metadata，用[工具](https://www.metadata2go.com/)检查确保无隐私泄漏后，上传至下列文件分享网站中的一个
- [https://uploadfiles.io/](https://uploadfiles.io/)
- [https://send.firefox.com](https://send.firefox.com)
- [https://drop.me](https://drop.me)
- [https://anonfiles.com](https://anonfiles.com)


然后将文件链接贴到[留言板](https://chinatimeline.github.io/submit/)或用匿名邮箱发送至 chinatimeline@protonmail.com, 请在留言中注明： 提交到哪个时间线项目，文件链接，如果希望列于在贡献者列表中请注明您的网络ID、主页等信息。如不需要列入贡献者列表请注明“匿名贡献”。

### 3 反馈和提交Issue
欢迎到[这里](https://github.com/chinatimeline/chinatimeline.github.io/issues)提交Issue或参与讨论

### 4 注意
<script src="https://gist.github.com/chinatimeline/5386a4f9d82483aa5346b17d8d324877.js"></script>
