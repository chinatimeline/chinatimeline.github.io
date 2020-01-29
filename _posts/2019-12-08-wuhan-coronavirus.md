---
layout: story
title: 武汉肺炎疫情
tags: [武汉肺炎, 新型冠状病毒, 2019-nCoV]
permalink: /wuhan-coronavirus/
teaser: https://raw.githubusercontent.com/chinatimeline/chinatimeline.github.io/master/images/wuhan-coronavirus.jpg
slug: 武汉肺炎
order: false
submit: true
comments: true
hitcounterid: ppct4m98e8r2lkpue69e1cmu15gz8wwd
chart:
    csv: https://ethercalc.org/w2gfa2jtho6c.csv
    title: 中国2019-nCoV肺炎病毒感染统计 (对数坐标)
    lineTension: 0
    type: line
    yAxes:
        type: logarithmic
        stacked: false
    xAxes:
        stacked: false
        xCol: Date
    datasets:
        疑似病例:
            borderColor: '#f9bc0a'
            Col: TotalSuspected
            borderWidth: 2
            hidden: true
        确诊人数:
            borderColor: '#19A0AA'
            Col: TotalConfirmed
            borderWidth: 2
        湖北确诊:
            borderColor: '#808000'
            Col: HubeiTotalConfirmed
            borderWidth: 1
            fill: false
        死亡人数:
            borderColor: '#F15F36'
            Col: TotalDeaths
            borderWidth: 2
        治愈人数:
            borderColor: '#64f30e'
            Col: TotalRecovered
            borderWidth: 2
            fill: false
        投射确诊:
            borderColor: '#19A0AA'
            Col: ForecastConfirmed
            borderWidth: 1
            fill: false
            borderDash: '[2,2]'
        投射死亡:
            borderColor: '#F15F36'
            Col: ForecastDeaths
            borderWidth: 1
            fill: false
            borderDash: '[2,2]'
---

武汉新型肺炎的时间线。确诊和死亡人数请在[这里](https://ethercalc.org/w2gfa2jtho6c){:target="_blank"}编辑，欢迎本页底补充各种小道大道消息（无需注册）。

<!--
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/csv_to_chart.js"></script>
-->

<canvas id="chart"></canvas>

**说明**
1. 2019-nCov病毒是在2020年1月7日首次从实验室分离出来，此日期之前的病例都被归类为疑似病例。[来源](http://www.caixin.com/2020-01-20/101506242.html)
2. 自1月16日起到目前为止，官方公布的确诊和死亡人数都呈指数增长（病毒式传播、指数传播、爆炸式传播），在对数坐标下呈直线。本对数坐标下斜率约0.1765/日（每10日涨约58倍）。因新型冠状病毒潜伏期具有传染性且平均潜伏期为7-10日（[國家衛健委](https://www.hk01.com/%E5%8D%B3%E6%99%82%E4%B8%AD%E5%9C%8B/426631/%E6%AD%A6%E6%BC%A2%E8%82%BA%E7%82%8E-%E5%9C%8B%E5%AE%B6%E8%A1%9B%E5%81%A5%E5%A7%94-%E7%97%85%E6%AF%92%E6%BD%9B%E4%BC%8F%E6%9C%9F%E6%9C%80%E7%9F%AD1%E5%A4%A9-%E5%82%B3%E6%9F%93%E6%80%A7%E6%9C%89%E5%A2%9E%E5%BC%B7%E8%B6%A8%E5%8B%A2)），实际感染人数约为官方公布确诊人数的17~58倍（\\(10^{0.1765\times7}\\)~\\(10^{0.1765\times10}\\)）。
3. 确诊和死亡人数在对数y坐标下基本平行，说明目前并未有效控制传播的手段，也无有效的治疗手段。未来如果这两条线中任意一条斜率减小说明预防或治疗条件得到改善，疫情控制有所改善，也有可能是医疗资源紧缺导致大量感染者无法确诊或数字发布受到人为限制。反之若斜率增大说明传播力度增强或致死率提高（比如更强的变异病毒出现）。
4. 疑似病例数量不是每日新增疑似病例数量的累加，因为有被确诊或确诊不是新型冠状病毒，以官方公布数据为准。
5. 数据来自多处整合，见以下。
6. 确诊和死亡人数的未来投射是基于1月16日至1月27日的数据的在对数坐标下的线性回归，仅为衡量疫情发展速度是否变化的参考，不含任何医学专业知识。
7. 点击图例可以开关对应曲线。

<iframe src="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html?fbclid=IwAR28KKIC3qBUIuUItThw1MqJW96mAY6qvNc0FJaY_XETI4T_M9FbTkqdcRw#/bda7594740fd40299423467b48e9ecf6" width="100%" height="780px"></iframe>

**参考资料**
1. 中文维基百科[新型冠状病毒肺炎全球疫情病例](https://zh.wikipedia.org/zh-hans/%E6%96%B0%E5%9E%8B%E5%86%A0%E7%8B%80%E7%97%85%E6%AF%92%E8%82%BA%E7%82%8E%E5%85%A8%E7%90%83%E7%96%AB%E6%83%85%E7%97%85%E4%BE%8B)
4. Wikipedia [Timeline of Wuhan Coronavirus Outbreak](https://en.wikipedia.org/wiki/Timeline_of_the_2019%E2%80%9320_Wuhan_coronavirus_outbreak)
11. [Wuhan Coronavirus (2019-nCoV) Global Cases (by JHU CSSE)](https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html?fbclid=IwAR28KKIC3qBUIuUItThw1MqJW96mAY6qvNc0FJaY_XETI4T_M9FbTkqdcRw#/bda7594740fd40299423467b48e9ecf6)
5. 编程随想 [每周转载：“武汉疫情”爆发的时间线——【政府失职】堪比“非典/SARS”时期](https://program-think.blogspot.com/2020/01/weekly-share-141.html)
6. 财新网 [武汉新型冠状病毒肺炎大事记（2019年12月—2020年1月20日）](http://www.caixin.com/2020-01-20/101506242.html)
12. 腾讯网 [实时更新：新型肺炎疫情最新动态](https://news.qq.com/zt2020/page/feiyan.htm)
10. 第一财经 [新型冠状病毒感染肺炎疫情地图](https://m.yicai.com/news/100476965.html)
7. 163 [肺炎疫情时事动态播报](https://news.163.com/special/epidemic/?spssid=7283291fcdba1d8c2d13ee3da2cfb760&spsw=7&spss=other)
8. 人民日报客户端 [新型肺炎疫情实时](https://activity.peopleapp.com/broadcast/)
3. [CNN](https://www.cnn.com/asia/live-news/coronavirus-outbreak-hnk-intl-01-25-20/index.html)
9. 美国疾病控制与预防中心(CDC) [2019 Novel Coronavirus, Wuhan, China](https://www.cdc.gov/coronavirus/2019-ncov/index.html)
1. 世界卫生组织 [https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports)

![本页URL二维码](https://i.imgur.com/wLwh0gQ.png)
