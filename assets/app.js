$(function(){FastClick.attach(document.body)}),$("button").on("touchstart",function(){$(this).addClass("pressing"),$("button").on("touchend",function(){$(this).removeClass("pressing")})}),function(){var t=function(){this.id="0",this.option=new Uint8Array(8),this.result=0};return t.prototype.select=function(t,e){this.option[t-1]=e-1},t.prototype.getScore=function(t){for(var e=0,o=0;o<this.option.length;o++)e+=t[o][this.option[o]];return e},window.Shojo=t,window.Shojo}(),function(){"use strict";function t(t){return 16>=t?o.result=1:24>=t?o.result=2:31>=t?o.result=3:o.result=4,o.result}var e=[[2,3,4,0,5],[2,4,5,0,3],[5,4,0,3,2],[2,4,3,0,5],[5,4,0,2,3],[4,0,5,3,2],[5,2,3,0,4],[3,4,2,0,5]],o=new Shojo,s=1;return o.id=$.cookie("mzNeZha.id")||uuid.v4(),$.cookie("mzNeZha.id",o.id),$(".opt-btn").click(function(){return s>8?void alert("Result: "+t(o.getScore(e))):(o.select(s,parseInt($(this).data("opt"),10)),8===s&&$.cookie("mzNeZha.result",t(o.getScore(e))),void s++)}),window.shojo=o,window.shojo}(),function(t){"use strict";var e=1,o=2;$(".start-btn").click(function(){$(".hero-image .cover").removeClass("active"),$(".hero-image .quest-1").addClass("active"),$(this).removeClass("active"),setTimeout(function(){$(".start-btn").hide(),$(".opt-btn").show().addClass("active delay")},500),setTimeout(function(){$(".opt-btn").removeClass("delay")},1100),$(".copy").removeClass("active cover").addClass("quest-1"),setTimeout(function(){$(".copy").addClass("active")},750)}),$(".opt-btn").click(function(){return 8===e?($(".hero-image .quest-"+e).removeClass("active"),$(".hero-image .result-"+t.result).addClass("active"),$(".copy").removeClass("active quest-"+e).addClass("result-"+t.result),void setTimeout(function(){$(".copy").addClass("active")},750)):($(".hero-image .quest-"+e).removeClass("active"),$(".hero-image .quest-"+o).addClass("active"),$(".copy").removeClass("active quest-"+e).addClass("quest-"+o),setTimeout(function(){$(".copy").addClass("active")},750),e=o,void o++)})}(window.shojo);