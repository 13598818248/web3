$.saleNumUpdate=function(t,e){return new $.saleNumUpdate.prototype.init(t,e)},$.saleNumUpdate.prototype={constructor:$.saleNumUpdate,defaultSetting:{type:"sale_num",param:"id",selector:".JS_sale_num_ajax",key:"num"},init:function(t,e){!t instanceof Array&&(t=[t]);var i=this;this.type=[],this.formatDomList={},this.goodsIdString={},this.setting={},this.callback=e,$.each(t,function(){var t=[],e={};$(this.selector).each(function(i,s){var a=$(this),n=a.data("goods_id");$.isNumeric(n)&&(e[n]?$.merge(e[n],a):(e[n]=$.merge($(),a),t.push(n)))}),i.type.push(this.type),i.formatDomList[this.type]=e,t.length>0&&(i.goodsIdString[this.type]="_"+t.join("_")+"_",i.flag=!0),i.setting[this.type]=this,this.isInt&&(i.setting.isInt=1)}),this.flag&&this.start()},start:function(){var t=this,e={type:this.type.join("*")};if($.each(this.type,function(i,s){e[t.setting[s].param]=t.goodsIdString[s]}),e.price_id&&delete e.price_id,e.id)for(var i=e.id.split("_"),s=[],a=0;a<i.length;a++)parseInt(i[a])>0&&s.push(parseInt(i[a]).toString(36));s&&s.length&&(e.id="_"+s.join("_"),e.ids=e.id,delete e.id,this.setting.isInt&&(e.isInt=this.setting.isInt),$.ajax({url:"/dubbo_api/realtimeSite/get?n=1",type:"get",data:e,dataType:"json",cache:!0,success:function(e){e&&0==e.error&&e.result&&($.each(t.type,function(i,s){var a=t.setting[s].key,n=t.formatDomList[s];e.result[s]&&$.each(e.result[s],function(){var t=this.goods_id,e=this[a],i=n[t];i&&i.length&&e&&i.html(e)})}),t.callback&&"function"==typeof t.callback&&t.callback())}}))}},$.saleNumUpdate.prototype.init.prototype=$.saleNumUpdate.prototype;
/*leihao:2017-08-07 17:14:50*/function stairs_show(){document.body.clientWidth-(_GLOBAL_.variable.IS_WIDE_SCREEN?1460:1190)<110?jQuery("#JS_default_stairs").addClass("none"):jQuery("#JS_default_stairs").removeClass("none")}function stairs_move(){var e=$("#JS_default_stairs"),t=e.find("a");$(window).on("scroll",function(){var s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;e.removeClass("out"),s>=600?(-[1]?e.css({transform:"scale(1)",opacity:1}):e.show(),e.find(".stairs-cover").addClass("none"),stairs_show()):(-[1]?e.css({transform:"scale(1.2)",opacity:0}):e.hide(),e.find(".stairs-cover").removeClass("none"));var a=(s-570)/(_GLOBAL_.variable.IS_WIDE_SCREEN?828:688);if(t.each(function(){jQuery(this).removeClass("current")}),a>0&&a<7)if(a<1)t.eq(0).addClass("current");else{var n=parseInt((s-570)/(_GLOBAL_.variable.IS_WIDE_SCREEN?828:688));t.eq(n).addClass("current")}}),e.on("mouseover","a",function(){jQuery(this).addClass("hover")}).on("mouseout","a",function(){jQuery(this).removeClass("hover")}).on("click","a",function(){var e=$(".default_floor_show").eq(0).offset().top-59,t=$(this).index();window.scroll(0,e+t*(_GLOBAL_.variable.IS_WIDE_SCREEN?828:688)+(8==t?262:0))})}function search_move(){jQuery(window).on("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)>=658?jQuery("#jsSearchComponent").addClass("search-fixed"):jQuery("#jsSearchComponent").removeClass("search-fixed")})}function initFloors(){for(var e=0;e<7;e++){new floor_slide({content:$(".JS_floor_banner").eq(e).find(".content"),li:$(".JS_ul_banner").eq(e).find("li"),nav:$(".JS_list_banner").eq(e).find("a"),divbox:$(".JS_floor_banner").eq(e),img:$(".JS_ul_banner").eq(e).find("li").find("img")}).init(0),function(e){jQuery("#JS_floor_nav_"+e+" li").length<2||jQuery("#JS_floor_nav_"+e+" li").hover(function(){var t=$(this).data("index"),s=$("#JS_floor_table_"+e+' .floor-right[data-index="'+t+'"]');$(this).parent().find(".hover").removeClass("hover"),$(this).addClass("hover"),$("#JS_floor_table_"+e+" .floor-right").css("display","none"),s.css("display","block"),s.data("imgLoaded")||(s.find("img").each(function(){jQuery(this).prop("src",$(this).attr("data-tab-src")).removeAttr("data-tab-src")}),s.data("imgLoaded",1))})}(e+1)}}function floor_slide(e){this.main=e.main,this.content=e.content,this.Li=e.li,this.num=this.Li.length,this.nav=e.nav,this.banCont=e.divbox,this.timer=null,this.imgs=e.img,this.init=function(e){this.column(e),this.addEve()},this.column=function(e){var t=this;t.focusImg(e),t.navE(e),t.timer=setInterval(function(){++e>t.num-1&&(e=0),t.focusImg(e),t.navE(e),t.lazyImg(e)},4e3)},this.focusImg=function(e){for(var t=!-[1],s=this,a=0,n=s.num;a<n;a++)t?(s.Li.eq(a).css("opacity",0),jQuery(this).css("zIndex",0).addClass("none")):s.Li.eq(a).animate({opacity:0},200,function(){jQuery(this).css("zIndex",0).addClass("none")}),s.content&&(t?(s.content.eq(a).css("opacity",0),jQuery(this).addClass("none")):s.content.eq(a).animate({opacity:0},200,function(){jQuery(this).addClass("none")}));s.main&&jQuery("#JS_mll_scroll_bar").css("background","#"+s.Li.eq(e).data("bgcolor")),s.Li.eq(e).removeClass("none"),s.Li.eq(e).css("zIndex",2),t?s.Li.eq(e).css("opacity",1):s.Li.eq(e).stop(!0).animate({opacity:1},200),s.content&&(s.content.eq(e).removeClass("none"),t?s.content.eq(e).css("opacity",1):s.content.eq(e).stop(!0).animate({opacity:1},200))},this.navE=function(e){this.nav.each(function(){jQuery(this).removeClass("hover")}),this.nav.eq(e).addClass("hover")},this.delay=function(e,t){var s=0,e=1e3*e/10,a=this,n=setInterval(function(){10==++s&&(clearInterval(n),t.apply(a))},e);a.onmouseout=function(){clearInterval(n)}},this.lazyImg=function(e){var t=this.imgs.eq(e).attr("lazy-src");if(this.main){var s=this.imgs.eq(e).next().attr("lazy-src");this.imgs.next().eq(e).attr("src",s).removeAttr("lazy-src")}t&&this.imgs.eq(e).attr("src",t).removeAttr("lazy-src")},this.stop=function(){clearInterval(this.timer)},this.addEve=function(){var e=this;e.nav.each(function(t){jQuery(this).on("mouseover",function(){window.VBArray?(e.navE(),$(this).addClass("hover"),$(this).hasClass("hover")&&(e.focusImg(t),e.lazyImg(t))):e.delay.apply(this,[.18,function(){e.navE(),$(this).addClass("hover"),$(this).hasClass("hover")&&(e.focusImg(t),e.lazyImg(t))}])})}),e.banCont.on({mouseover:function(){e.stop()},mouseout:function(){e.nav.each(function(t){jQuery(this).hasClass("hover")&&e.column(t)})}})}}function exprInfoListMarquee(){var e=$("#JS_scroll_out_box");if(!e.length)return!1;if(window._JS_ZZ_LOCK_=!1,!(e.length<=0)){var t=e.find("li").length;if(t>=5){e.hover(function(){window._JS_ZZ_LOCK_=!0},function(){window._JS_ZZ_LOCK_=!1});var s=e.html();s+=s,e.html(s),setInterval(function(){if(!window._JS_ZZ_LOCK_){var s=parseInt(e.css("margin-top"))||0;s<=-18*t&&(e.css({"margin-top":"0px"}),s=0),s-=18,e.animate({"margin-top":s+"px"},200)}},2e3)}}}function initInput(e,t){return e.placeholder?e.placeholder(t):null}function ShowCountDown(e,t){var s=Math.floor(e/86400),a=Math.floor((e-3600*s*24)/3600),n=Math.floor((e-3600*s*24-3600*a)/60),o=Math.floor(e-3600*s*24-3600*a-60*n);s=s<10?"0"+s:s,a=a<10?"0"+a:a,n=n<10?"0"+n:n,o=o<10?"0"+o:o,t.find(".day").text(s),t.find(".hour").text(a),t.find(".minute").text(n),t.find(".second").text(o)}function sellNum(e){$.ajax({url:"/mll_api/api/banjiatuan_num",type:"get",dataType:"json",data:{goods_id:e.join(",")},success:function(e){if(0===e.error)for(var t=0;t<e.result.length;t++){var s=e.result[t].h_buy_rate.replace(/%/,""),a=$("#J-half-price-group li.product_"+e.result[t].goods_id);100==s&&(a.hasClass("residueTime")||a.addClass("residueNum"))}}})}function halfPriceGroup(){$.ajax({url:"/mll_api/api/banjiatuan_index",type:"get",dataType:"json",success:function(e){if(0===e.error){for(var t,s=[],a=e.result.list,n=[],o=0;o<a.length;o++){n.push(a[o].goods_id);var i="";a[o].end_time-e.result.time<=0&&(i="residueTime");var r='<li class="'+i+" product_"+a[o].goods_id+'"><a href="'+a[o].url_index+"?from=index_halfprice\" onclick=\"window._gaq.push(['_trackEvent','2016版首页','click','半价团商品']);_ana.push(['trackEvent', '2016版首页', 'click', '半价团商品']);\" class=\"pic\" target=\"_blank\"><img src=\""+$.__IMG+"/"+a[o].src+'" alt="" width="100%" height="100%"></a><div class="info"><a href="'+a[o].url_index+"?from=index_halfprice\" class=\"pro-name\" onclick=\"window._gaq.push(['_trackEvent','2016版首页','click','半价团商品']);_ana.push(['trackEvent', '2016版首页', 'click', '半价团商品']);\" title=\""+a[o].goods_name_index+'" target="_blank">'+a[o].goods_name_index+'</a><div class="price clearfix"><p class="new-price Left"><span class="code">&yen;</span><span class="num">'+a[o].group_price+'</span></p><p class="old-price Left"><span class="code">&yen;</span><span class="num">'+a[o].shop_price+'</span></p></div></div><a href="'+a[o].goods_url+'?from=index_halfprice" target="_blank" class="pic-icon"><span class="pic"></span></a>';r+="</li>",s.push(r)}var c='<li class="last"><a href="'+e.result.set_url+"?from=index_halfprice\" onclick=\"window._gaq.push(['_trackEvent','2016版首页','click','团购首页']);_ana.push(['trackEvent', '2016版首页', 'click', '团购首页']);\" target=\"_blank\"><img src=\""+$.__IMG+"/"+e.result.set_pic+'" alt="" width="100%" height="100%"></a></li>';s.push(c),$("#J-half-price-group .half-price-list ul").append(s.join("")),sellNum(n),e.result.start_time>=e.result.time?(t=e.result.start_time-e.result.time,$("#J-half-price-group .half-price-title .time .text").text("距开始还有")):(t=e.result.end_time-e.result.time,$("#J-half-price-group .half-price-title .time .text").text("距结束还有"));var l;t>0?l=setInterval(function(){ShowCountDown(t--,$("#J-half-price-group .half-price-title"))},1e3):clearInterval(l)}}})}var AutoPlay=function(){this.initialize()};AutoPlay.prototype={initialize:function(){var e=this;this.oBox=$("#JS_mll_scroll_bar"),this.oUl=$("ul.scroll-content"),this.oLi=$("#JS_mll_scroll_bar .scroll-item"),this.obImg=$(".sc-big"),this.osImg=$(".sc-small"),this.timer=null,this.autoTimer=null,this.iNow=0,this.aBtn=$(".scroll-btn span"),this.toggle(),this.lock=!1,this.autoTimer=setInterval(function(){e.lock||e.next()},4e3),this.oBox.mouseenter(function(){e.lock=!0,clearInterval(e.autoTimer)}),this.oBox.mouseleave(function(){e.autoTimer=setInterval(function(){e.next()},4e3)});for(var t=0;t<this.aBtn.length;t++)this.aBtn[t].index=t,this.aBtn[t].onmouseover=function(){this.index!=e.iNow&&(e.iNow=this.index,e.toggle())}},toggle:function(){for(var e=0;e<this.aBtn.length;e++)this.aBtn[e].className="";this.aBtn[this.iNow].className="current",this.lazy(this.iNow),this.doShow(this.iNow)},next:function(){++this.iNow==this.aBtn.length&&(this.iNow=0),this.toggle()},lazy:function(e){var t=this.oLi.eq(e);t.data("imgLoaded")||(t.find("img").each(function(){jQuery(this).prop("src",$(this).attr("lazy-src")).removeAttr("lazy-src")}),t.data("imgLoaded",1))},doShow:function(e){var t=this;t.oLi.addClass("none"),t.oLi.fadeOut(500),t.oLi.eq(e).fadeIn(500)}},function(e){e&&(e.fn.placeholder=function(t){function s(e,t){e.val()==o.txt&&e.val("").addClass(o.focusClsName&&o.focusClsName.join?o.focusClsName.join(" "):""),t&&t()}function a(e,t){""==e.val()?e.val(o.txt).removeClass(o.focusClsName&&o.focusClsName.join?o.focusClsName.join(" "):""):t&&t()}var n={txt:"",cssStr:"",focusClsName:undefined,focusFun:undefined,blurFun:undefined,clsName:undefined},o=e.extend({},n,t||{}),i=e(this),r=i.prop("type");if("text"==(r=r?"password"!=r&&"text"!=r?"text":r:"text"))i.val(o.txt),i.focus(function(e){s(i,o.focusFun)}).blur(function(){a(i,o.blurFun)});else{var c,l={show:{display:""},hide:{display:"none"}};(c=i.next("input").length?i.next("input").eq(0):e("<input />").addClass(o.clsName&&o.clsName.join?o.clsName.join(" "):"")).focus(function(e){c.css(l.hide),i.css(l.show).focus(),o.focusFun&&o.focusFun()}).val(o.txt),i.css(l.hide).after(c).blur(function(){i.val()||c.css(l.show)&&i.css(l.hide),o.blurFun&&o.blurFun()})}return i.setTxt=function(e){return i.next("input").length?i.next("input").eq(0).val(e):i.val()==o.txt&&i.val(e),o.txt=e,i},i.getText=function(){return o.txt},i.setParam=function(e,t){return o[e]=t,i},i.getParam=function(e){return o[e]},i})}($),function(e){function t(){jQuery.getCaptcha(r.captchaPic.prop("src","{$IMG}/images/blank.gif")),r.captcha[0].focus(),r.captcha.val("")}function s(e){var t=100;return void 0!==a&&clearInterval(a),a=setInterval(function(){t>=0?e.addClass("sms-disabled").text(t--+"秒"):(e.removeClass("sms-disabled").text("重新获取"),t=0,void 0!==a&&clearInterval(a))},1e3),function(){return t}}var a,n=!1,o=!1,i=e.cookie("sendSmsPhone")||"",r={};r.captcha=initInput(e("#JS_captcha"),{txt:"验证码",clsName:["gray"],focusClsName:["black"]}),r.queryInput=initInput(e("#JS_tel"),{txt:"手机号",clsName:["gray"],focusClsName:["black"]}),r.codeInput=initInput(e("#JS_code"),{txt:"手机校验码",clsName:["gray"],focusClsName:["black"]}),r.captchaPic=e("#JS_pic_captcha"),r.queryIcon=e("#JS_query_icon"),r.captchaIcon=e("#JS_captcha_icon"),r.sendCodeBtn=e("#sendCode"),r.sendCodeAgain=e("#JS_send_again"),r.queryModify=e("#JS_query_modify"),r.sendSubmit=e("#sendSubmit"),i&&(r.queryInput.val(i),o=!0),r.queryInput.setParam("blurFun",function(e){var t=/^1\d{10}$/gi,s=r.queryInput.val(),a=s.match(t);return s==r.queryInput.getText()?(o=!1,!1):null==a?(r.queryIcon.removeClass("query-success").addClass("query-error"),o=!1,!1):(o=!0,void r.queryIcon.removeClass("query-error").addClass("query-success"))}),e.checkCaptcha(r.captcha,{success:function(e){r.captchaIcon.removeClass("query-error").addClass("query-success"),n=!0},error:function(e){r.captchaIcon.removeClass("query-success").addClass("query-error"),n=!1}}),e.getCaptcha(r.captchaPic),r.captchaPic.click(function(){t()}),r.sendCodeBtn.on("click",function(){var a=this;return o?n?void(this.lock||(this.lock=!0,e.ajax({url:"/solr_api/captcha/mobileCaptcha/create_send_check_captcha.do?&phoneNumber="+r.queryInput.val()+"&durationTime=100&captchaType=quick_search&captcha="+r.captcha.val(),cache:!1,dataType:"json",success:function(i){a.lock=!1,i&&0==i.error?(e("#JS_tel_txt").text(r.queryInput.val()),e("#queryForm1").addClass("none").find("input").val(""),e("#queryForm2").removeClass("none"),e(".query-success").removeClass("query-success"),e(".query-error").removeClass("query-error"),c=s(r.sendCodeAgain),o=!1,n=!1):(jQuery.alert(i.msg),t())},error:function(){jQuery.alert("网络错误请稍候再试"),t(),a.lock=!1}}))):(r.captchaIcon.removeClass("query-success").addClass("query-error"),!1):(r.queryIcon.removeClass("query-success").addClass("query-error"),!1)});var c=function(){return 0};r.sendCodeAgain.click(function(){0==c()&&(e("#JS_tel").val(e("#JS_tel_txt").text()),o=!0,e("#queryForm2").addClass("none").find("input").val(""),e("#queryForm1").removeClass("none"),e(".query-success").removeClass("query-success"),e(".query-error").removeClass("query-error"),t())}),r.queryModify.on("click",function(){clearInterval(a),r.sendCodeAgain.removeClass("sms-disabled").text("重新获取"),e("#queryForm2").addClass("none").find("input").val(""),e("#queryForm1").removeClass("none"),e(".query-success").removeClass("query-success"),e(".query-error").removeClass("query-error"),t()}),r.sendSubmit.click(function(){var t=e.trim(e("#JS_tel_txt").text()),s=e("#JS_code").val(),a=this;s&&"手机校验码"!=s?this.lock||(this.lock=!0,e.ajax({url:"/qsearch/"+t+"/"+s+"/?&phoneNumber="+t+"&mobileCaptcha="+s+"&captchaType=quick_search",cache:!1,dataType:"json",success:function(e){jQuery.cookie("sendSmsPhone",t),a.lock=!1,e&&0==e.error?window.location.href="/quicksearch/"+t+"/order_list/":(jQuery.alert(e.msg),a.lock=!1)},error:function(){jQuery.alert("网络错误请稍候再试"),a.lock=!1}})):jQuery.alert("请输入手机验证码")})}(jQuery),$.lazyImg.start("both"),$("img").load(function(){$(this).animate({opacity:"1"},200)}),$(document).ready(function(){$("#jsHeaderCatModel").unbind(),new AutoPlay,stairs_move(),search_move(),initFloors(),exprInfoListMarquee(),$.saleNumUpdate&&$.saleNumUpdate([{selector:".JS_async_price",type:"price",param:"id",key:"show_price",isInt:!0}])}),$(window).on("resize",function(){var e=document.body.clientWidth,t=document.body,s=t.className?t.className.split(" "):[],a="",n="";s=t.className?t.className.split(" "):[],a=_GLOBAL_.fn.removeRepeatClassName(s),_GLOBAL_.variable.IS_WIDE_SCREEN=!0,e<1460?(n="_s1190_",_GLOBAL_.variable.NUM_SCREEN_WIDTH=1190):(n="_s1460_",_GLOBAL_.variable.NUM_SCREEN_WIDTH=1460),t.className=a.join(" ")+" "+n}),$("#J-half-price-group").length>0&&(halfPriceGroup(),$("#jsWebFestivalDressUp .dress").css("top","61px"));
/*jinzeze*261595:2017-10-27 19:25:21*/