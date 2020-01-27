---
layout: story
title: 武汉肺炎疫情
tags: [武汉肺炎, 新型冠状病毒, 2019-nCoV]
permalink: /wuhan-coronavirus/
teaser: https://upload.wikimedia.org/wikipedia/commons/a/a4/2019-nCoV_Outbreak_World_Map.svg
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
        确诊人数:
            borderColor: '#19A0AA'
            Col: TotalConfirmed
        死亡人数:
            borderColor: '#F15F36'
            Col: TotalDeaths
        治愈人数:
            borderColor: '#64f30e'
            Col: TotalRecovered
---

武汉新型肺炎的时间线。确诊和死亡人数请在[这里](https://ethercalc.org/w2gfa2jtho6c){:target="_blank"}编辑，欢迎本页底补充各种小道大道消息（无需注册）。

<!--
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/csv_to_chart.js"></script>
-->

<canvas id="chart"></canvas>

**说明**
1. 2019-nCov病毒是在2020年1月9日从实验室分离出来，此日期之前的病例都被归类为疑似病例。
2. 自1月16日起到目前为止，官方公布的确诊和死亡人数都呈指数增长（病毒式传播、指数传播、爆炸式传播），在对数坐标下呈直线。对数坐标下斜率约0.1814/日（每10日涨约65倍）。
3. 确诊和死亡人数在对数y坐标下基本平行，说明目前并未有效控制传播的手段，也无有效的治疗手段。未来如果这两条线中任意一条斜率减小，说明预防或治疗条件得到改善，疫情控制有所改善。
4. 疑似病例数量不是每日新增疑似病例数量的累加，因为有被确诊或确诊不是新型冠状病毒，以官方公布数据为准。
5. 数据来自多处整合，见以下。

<iframe src="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html?fbclid=IwAR28KKIC3qBUIuUItThw1MqJW96mAY6qvNc0FJaY_XETI4T_M9FbTkqdcRw#/bda7594740fd40299423467b48e9ecf6" width="100%" height="780px"></iframe>

**参考资料**
1. 中文维基百科[新型冠状病毒肺炎全球疫情病例](https://zh.wikipedia.org/zh-hans/%E6%96%B0%E5%9E%8B%E5%86%A0%E7%8B%80%E7%97%85%E6%AF%92%E8%82%BA%E7%82%8E%E5%85%A8%E7%90%83%E7%96%AB%E6%83%85%E7%97%85%E4%BE%8B)
4. Wikipedia [Timeline of Wuhan Coronavirus Outbreak](https://en.wikipedia.org/wiki/Timeline_of_the_2019%E2%80%9320_Wuhan_coronavirus_outbreak)
11. [Wuhan Coronavirus (2019-nCoV) Global Cases (by JHU CSSE)](https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html?fbclid=IwAR28KKIC3qBUIuUItThw1MqJW96mAY6qvNc0FJaY_XETI4T_M9FbTkqdcRw#/bda7594740fd40299423467b48e9ecf6)
5. 编程随想 [每周转载：“武汉疫情”爆发的时间线——【政府失职】堪比“非典/SARS”时期](https://program-think.blogspot.com/2020/01/weekly-share-141.html)
6. 财新网 [武汉新型冠状病毒肺炎大事记（2019年12月—2020年1月20日）](http://www.caixin.com/2020-01-20/101506242.html)
10. 第一财经 [新型冠状病毒感染肺炎疫情地图](https://m.yicai.com/news/100476965.html)
7. 163 [肺炎疫情时事动态播报](https://news.163.com/special/epidemic/?spssid=7283291fcdba1d8c2d13ee3da2cfb760&spsw=7&spss=other)
8. 人民日报客户端 [新型肺炎疫情实时](https://activity.peopleapp.com/broadcast/)
3. [CNN](https://www.cnn.com/asia/live-news/coronavirus-outbreak-hnk-intl-01-25-20/index.html)
9. 美国疾病控制与预防中心(CDC) [2019 Novel Coronavirus, Wuhan, China](https://www.cdc.gov/coronavirus/2019-ncov/index.html)
1. 世界卫生组织 [https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports)
