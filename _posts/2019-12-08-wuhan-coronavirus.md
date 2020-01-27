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
            Col: TotalSuspect
        确诊人数:
            borderColor: '#19A0AA'
            Col: Sum
        死亡人数:
            borderColor: '#F15F36'
            Col: TotalDeath
        治愈人数:
            borderColor: '#64f30e'
            Col: TotalCure
---

武汉新型肺炎的时间线。确诊和死亡人数请在[这里](https://ethercalc.org/w2gfa2jtho6c){:target="_blank"}编辑，欢迎本页底补充各种小道大道消息（无需注册）。

<!--
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/csv_to_chart.js"></script>
-->

<canvas id="chart"></canvas>

说明：传染病初期应该是按照指数增长，对应到对数坐标应该是直线，如果不是说明数据有控制/篡改。


![全球爆发情况](https://upload.wikimedia.org/wikipedia/commons/a/a4/2019-nCoV_Outbreak_World_Map.svg)
(Wikipedia: )

1. 中文维基百科[新型冠状病毒肺炎全球疫情病例](https://zh.wikipedia.org/zh-hans/%E6%96%B0%E5%9E%8B%E5%86%A0%E7%8B%80%E7%97%85%E6%AF%92%E8%82%BA%E7%82%8E%E5%85%A8%E7%90%83%E7%96%AB%E6%83%85%E7%97%85%E4%BE%8B)
4. Wikipedia [Timeline of Wuhan Coronavirus Outbreak](https://en.wikipedia.org/wiki/Timeline_of_the_2019%E2%80%9320_Wuhan_coronavirus_outbreak)
5. 编程随想 [每周转载：“武汉疫情”爆发的时间线——【政府失职】堪比“非典/SARS”时期](https://program-think.blogspot.com/2020/01/weekly-share-141.html)
6. 财新网 [武汉新型冠状病毒肺炎大事记（2019年12月—2020年1月20日）](http://www.caixin.com/2020-01-20/101506242.html)
10. 第一财经 [新型冠状病毒感染肺炎疫情地图](https://m.yicai.com/news/100476965.html)
7. 163 [肺炎疫情时事动态播报](https://news.163.com/special/epidemic/?spssid=7283291fcdba1d8c2d13ee3da2cfb760&spsw=7&spss=other)
8. 人民日报客户端 [新型肺炎疫情实时](https://activity.peopleapp.com/broadcast/)
3. [CNN](https://www.cnn.com/asia/live-news/coronavirus-outbreak-hnk-intl-01-25-20/index.html)
9. 美国疾病控制与预防中心(CDC) [2019 Novel Coronavirus, Wuhan, China](https://www.cdc.gov/coronavirus/2019-ncov/index.html)
1. 世界卫生组织 [https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports)

信息来源 https://ethercalc.org/4vc3qloe4sm2

https://ethercalc.org/jxugaeys3z86
