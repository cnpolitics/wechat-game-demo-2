# CHANGELOG

* * *

## Ver. 0.0.1 (alpha)
<http://realfish.bitbucket.org/MZRead-NeZha-V-0-0-1-9d2d18d/>

暂时没有封面和结果页面，8 道题循环。

### 安卓还有 bug：
- 低版本安卓系统，页面布局有错误（顶部的照片，底部按钮间距）；
- 低配置机器上，动态模糊的性能不太行，后面考虑一下退化方案。

* * *

## Ver. 0.2 (beta)
<http://realfish.bitbucket.org/MZRead-NeZha-V0.2/>

### 新增特性：
1. 首次访问游戏页面，生成用户 ID，并保留在浏览器 cookie 中（30 天）；
2. 完成游戏时，生成个性化标题（供分享使用）；
3. 访问某人分享的链接时，展示他的测试结果，并开始新的测试；
4. 访问我自己分享的链接时，展示自己的测试结果、分享按钮，以及主办方信息和购票链接等。

### 待定逻辑：
如果我自己去访问自己先前分享的旧链接，有两种展示逻辑：

1. 展示那个链接对应的测试结果；
2. 总是向我展示我自己最新测试的结果（识别我的 ID，并自动更新结果）。

目前测试版是第 1 种：优先保证用户点开朋友圈自己的旧帖时，看到的结果和帖子的标题相互匹配。

* * *

## Ver. 0.3 (beta)

<http://realfish.bitbucket.org/MZRead-NeZha-V0.3/>

### 新增特性：
1. 微信分享引导；
2. 微信分享链接附带自定义缩略图。

### 修复：
1. 兼容Android 4.4 及其以上；
2. 兼容全平台微信 6.2 版（安卓 6.2 没有动态模糊效果）；
3. 超大屏幕以及手机横屏时的部分 bug。

### 下一步：
1. 校对图文；
2. 调整字体；
3. 有时间的话，进行预加载优化（因为图片数量比较多）。

* * *

## Ver. 0.4 (beta)
<http://realfish.bitbucket.org/MZRead-NeZha-V0.4/>

模拟领取红包（供测试），支持领取红包后的分享引导。

### 新增特性及逻辑：
1. 领取红包链接；
2. 领红包后，返回展示页脚信息及分享引导；
3. 拆分封面与封底的文案，以便分别定制封面和封底的引导语。

### 更新及修正：
1. 封面、封底及各题题图；
2. 选项编码改为拉丁字母（A–E）；
3. 新的标题字体（减少字体授权风险）；
4. 优化封面排版，部分文案校正。

### 未修正部分：
- 第一题的内容暂时还没换。新题的文案比现有的这题更长，没法直接填入目前的设计模板……晚些再看怎么调整。

* * *

## Ver. 0.5/0.5.1 (beta)

A try-error for preloading (loading screen).

* * *

## Ver. 1.0
<http://realfish.bitbucket.org/MZRead-NeZha-V1.0/>

### 更新：
1. 更新领取红包链接（指向格瓦拉测试页面）；
2. 修正微信分享的文案生成逻辑；
3. 植入百度统计。

## Ver. 1.0.1
<http://realfish.bitbucket.org/MZRead-NeZha-V1.0.1/>

### 修复：
- 更新第一题文案。

* * *

## Ver. 1.1
<http://realfish.bitbucket.org/MZRead-NeZha-V1.1/>

### 更新：
1. 第一题配图；
2. 个性化封面的引导文案（我也来测测）；
3. 微信分享文案；
4. 微信分享缩略图；
5. 结果页「少女哪吒」logo 对应链接；
6. 领取红包 URL 参数传递；
7. 部分微小的性能优化。

格瓦拉 URL 参数：`?id=150626142523&result=x&user=xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx&flag=1`

## Ver. 1.1.1
<http://realfish.bitbucket.org/MZRead-NeZha-V1.1.1/>

Fix the score chart.

## Ver. 1.1.2
<http://realfish.bitbucket.org/MZRead-NeZha-V1.1.2/>

Fix a Baidu Analytics bug: Declare the `_hmt` object at the `<head>` of HTML.

* * *

## Ver. 1.2
<http://realfish.bitbucket.org/MZRead-NeZha-V1.2/>

### 更新：
- 封底「拇指阅读」链接。

### 修正：
- 向下兼容至 Android 4.0；
- 提升页面渲染的可靠性。

## Ver. 1.2.1

Fix the copy of `.gift-label`.

## Ver. 1.2.2

Manually update the copy to prevent some potential wrong glyphs.
