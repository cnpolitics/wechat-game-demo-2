function equidisBtn(){var t=$(".foot-wrap").width(),e=(t-240)/4;$(".opt-btn.opt-2, .opt-btn.opt-3, .opt-btn.opt-4, .opt-btn.opt-5").css("margin-left",e)}!function(){var t=function(){this.id="0",this.option=new Uint8Array(8),this.result=0};return t.prototype.select=function(t,e){this.option[t-1]=e-1},t.prototype.getScore=function(t){for(var e=0,a=0;a<this.option.length;a++)e+=t[a][this.option[a]];return e},window.Shojo=t,window.Shojo}(),$(function(){FastClick.attach(document.body)}),$("button, a").on("touchstart",function(){$(this).addClass("pressing"),$("button, a").on("touchend",function(){$(this).removeClass("pressing")})}),$(document).ready(function(){equidisBtn(),$(".copy").addClass("active")}),$(window).on("resize",function(){equidisBtn()});var shojo=new Shojo;!function(t){"use strict";function e(t,e){var a=t.match(new RegExp(e+"=([^&]*)"));return a?a[1]:null}function a(e){return 16>=e?t.result=1:24>=e?t.result=2:31>=e?t.result=3:t.result=4,t.result}var i=[[2,3,4,0,5],[2,4,5,0,3],[5,4,0,3,2],[2,4,3,0,5],[5,4,0,2,3],[4,0,5,3,2],[5,2,3,0,4],[3,4,2,0,5]];t.id=$.cookie("mzNeZha.id")||uuid.v4(),$.cookie("mzNeZha.id",t.id,{expires:30}),$(document).ready(function(){var a=window.location.hash,i=e(a,"result"),s=e(a,"id"),o=e(a,"flag");if(i=i?i.substring(0,1):null,s=s?s.substring(0,36):null,o=o?o.substring(0,1):null,null===i)_hmt.push(["_trackEvent","nezha","nezha_click","nezha_view_cover"]),$(".hero-wrap .cover").addClass("active"),$(".main-wrap .copy").addClass("cover"),$(".foot-wrap .start-btn").show().addClass("active");else if(s===t.id)switch(_hmt.push(["_trackEvent","nezha","nezha_click","nezha_view_myurl"]),$(".hero-wrap .result-"+i).addClass("active"),$(".main-wrap .copy").addClass("result-"+i),$(".main-wrap .gift-widget").show().addClass("active"),$(".foot-wrap").addClass("result"),$(".foot-wrap footer.result").show().addClass("active"),$(".gift-btn").attr("href","http://m.gewara.com/wz/special/quan/index.xhtml?id=150626142523&result="+i+"&user="+s+"&flag=1"),i){case"1":document.title="我的少女指数鉴定结果是：没救了，满脸褶子在装嫩！你也快来测试拿红包吧！";break;case"2":document.title="我的少女指数鉴定结果是：离少女越来越远了！你也快来测试拿红包吧！";break;case"3":document.title="我的少女指数鉴定结果是：有少女的一面！你也快来测试拿红包吧！";break;case"4":document.title="我的少女指数鉴定结果是：少女指数爆棚！你也快来测试拿红包吧！"}else _hmt.push(["_trackEvent","nezha","nezha_click","nezha_view_cover"]),$(".hero-wrap .result-"+i).addClass("active"),$(".main-wrap .copy").addClass("cover-"+i),$(".foot-wrap .start-btn").show().addClass("active")});var s=1;$(".opt-btn").click(function(){if(!(s>8)){if(t.select(s,parseInt($(this).data("opt"),10)),8===s)switch(_hmt.push(["_trackEvent","nezha","nezha_click","nezha_view_score"]),$.cookie("mzNeZha.result",a(t.getScore(i)),{expires:30}),window.location.hash="result="+t.result+"&id="+t.id,$(".gift-btn").attr("href","http://m.gewara.com/wz/special/quan/index.xhtml?id=150626142523&result="+t.result+"&user="+t.id+"&flag=1"),t.result){case 1:document.title="我的少女指数鉴定结果是：没救了，满脸褶子在装嫩！你也快来测试拿红包吧！";break;case 2:document.title="我的少女指数鉴定结果是：离少女越来越远了！你也快来测试拿红包吧！";break;case 3:document.title="我的少女指数鉴定结果是：有少女的一面！你也快来测试拿红包吧！";break;case 4:document.title="我的少女指数鉴定结果是：少女指数爆棚！你也快来测试拿红包吧！"}s++}}),$(".start-btn").click(function(){_hmt.push(["_trackEvent","nezha","nezha_click","nezha_button_start2play"])}),$(".share-btn").click(function(){_hmt.push(["_trackEvent","nezha","nezha_click","nezha_button_shareguide"])}),$("footer .logo-nezha").click(function(){_hmt.push(["_trackEvent","nezha","nezha_click","nezha_link_shaonv"])}),$("footer .logo-mzread").click(function(){_hmt.push(["_trackEvent","nezha","nezha_click","nezha_link_mzread"])})}(shojo),function(t){"use strict";var e=1,a=2;$(".start-btn").click(function(){$(".hero-image .active").removeClass("active"),$(".hero-image .quest-1").addClass("active"),$(this).removeClass("active"),setTimeout(function(){$(".start-btn").hide(),$(".opt-btn").show().addClass("active delay")},500),setTimeout(function(){$(".opt-btn").removeClass("delay")},1100),$(".copy").attr("class","copy quest-1"),setTimeout(function(){$(".copy").addClass("active")},750)}),$(".opt-btn").click(function(){return 8===e?($(".hero-image .quest-"+e).removeClass("active"),$(".hero-image .result-"+t.result).addClass("active"),$(".foot-wrap").addClass("result"),$(".opt-btn").addClass("delay").removeClass("active"),setTimeout(function(){$(".opt-btn").hide()},1100),$(".copy").removeClass("active quest-"+e).addClass("result-"+t.result),void setTimeout(function(){$(".copy").addClass("active"),setTimeout(function(){$(".gift-widget").show().addClass("active")},500)},750)):($(".hero-image .quest-"+e).removeClass("active"),$(".hero-image .quest-"+a).addClass("active"),$(".copy").removeClass("active quest-"+e).addClass("quest-"+a),setTimeout(function(){$(".copy").addClass("active")},750),e=a,void a++)}),$(".share-btn").click(function(){$(".modal-wrap, .modal-wrap .share-guide").addClass("active"),$(".hero-wrap .active, .hero-wrap .tearpaper-lower img, .main-wrap .active, .foot-wrap .active").css({"-webkit-filter":"blur(5px)",filter:"blur(5px)","-webkit-transition":"filter .3s ease-in-out, -webkit-filter .3s ease-in-out",transition:"filter .3s ease-in-out, -webkit-filter .3s ease-in-out"}),$(".modal-wrap").click(function(){$(".modal-wrap, .modal-wrap .share-guide").removeClass("active"),$(".hero-wrap .active, .hero-wrap .tearpaper-lower img, .main-wrap .active, .foot-wrap .active").css({"-webkit-filter":"blur(0px)",filter:"blur(0px)"}),setTimeout(function(){$(".hero-wrap .active, .hero-wrap .tearpaper-lower img, .main-wrap .active, .foot-wrap .active").css({"-webkit-filter":"",filter:"","-webkit-transition":"",transition:""})},500)})})}(shojo);