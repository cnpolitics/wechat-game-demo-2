$(function(){FastClick.attach(document.body)}),$("button").on("touchstart",function(){$(this).addClass("pressing"),$("button").on("touchend",function(){$(this).removeClass("pressing")})}),function(){var t=function(){this.id="0",this.option=new Uint8Array(8),this.result=0};return t.prototype.select=function(t,o){this.option[t-1]=o-1},t.prototype.getScore=function(t){for(var o=0,e=0;e<this.option.length;e++)o+=t[e][this.option[e]];return o},window.Shojo=t,window.Shojo}(),function(){"use strict";var t=1,o=2;$(".start-btn").click(function(){$(".hero-image .cover").removeClass("active"),$(".hero-image .quest-1").addClass("active"),$(this).removeClass("active"),setTimeout(function(){$(".start-btn").hide(),$(".opt-btn").show().addClass("active delay")},500),setTimeout(function(){$(".opt-btn").removeClass("delay")},1100)}),$(".opt-btn").click(function(){o>8||($(".hero-image .quest-"+t).removeClass("active"),$(".hero-image .quest-"+o).addClass("active"),$(".copy").removeClass("active quest-"+t).addClass("quest-"+o),setTimeout(function(){$(".copy").addClass("active")},750),t=o,o++)})}(),function(){"use strict";function t(t){return 16>=t?e.result=1:24>=t?e.result=2:31>=t?e.result=3:e.result=4,e.result}var o=[[2,3,4,0,5],[2,4,5,0,3],[5,4,0,3,2],[2,4,3,0,5],[5,4,0,2,3],[4,0,5,3,2],[5,2,3,0,4],[3,4,2,0,5]],e=new Shojo,s=1;$(".opt-btn").click(function(){return s>8?void console.log("Result: "+t(e.getScore(o))):(console.log($(this).data("opt")),e.select(s,parseInt($(this).data("opt"),10)),console.log(e.getScore(o)),void s++)})}();