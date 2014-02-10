/*
 *	jQuery carouFredSel 6.1.0
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
(function(k){function ja(a,c){return{anims:[],duration:a,orgDuration:a,easing:c,startTime:J()}}function $(a){u(a.pre)&&$(a.pre);for(var c=0,d=a.anims.length;c<d;c++){var j=a.anims[c];j&&(j[3]&&j[0].stop(),j[0].animate(j[1],{complete:j[2],duration:a.duration,easing:a.easing}))}u(a.post)&&$(a.post)}function ka(a,c){t(c)||(c=!0);u(a.pre)&&ka(a.pre,c);for(var d=0,j=a.anims.length;d<j;d++){var e=a.anims[d];e[0].stop(!0);if(c&&(e[0].css(e[1]),s(e[2])))e[2]()}u(a.post)&&ka(a.post,c)}function Ca(a,c,d){c&& c.remove();switch(d.fx){case "fade":case "crossfade":case "cover-fade":case "uncover-fade":a.css("filter","")}}function la(a,c,d,j,e){c[d]&&c[d].call(a,j);if(e[d].length)for(var c=0,l=e[d].length;c<l;c++)e[d][c].call(a,j);return[]}function Da(a,c,d){c.length&&(a.trigger(e(c[0][0],d),c[0][1]),c.shift());return c}function Ea(a){a.each(function(){var a=k(this);a.data("_cfs_isHidden",a.is(":hidden")).hide()})}function Fa(a){a&&a.each(function(){var a=k(this);a.data("_cfs_isHidden")||a.show()})}function da(a){a.auto&& clearTimeout(a.auto);a.progress&&clearInterval(a.progress);return a}function Ga(a,c,d,j,e,l,g){return{width:g.width,height:g.height,items:{old:a,skipped:c,visible:d,"new":d},scroll:{items:j,direction:e,duration:l}}}function Ha(a,c,d,j){var e=a.duration;if("none"==a.fx)return 0;"auto"==e?e=c.scroll.duration/c.scroll.items*d:10>e&&(e=j/e);if(1>e)return 0;"fade"==a.fx&&(e/=2);return Math.round(e)}function ra(a,c,d){var j=p(a.items.minimum)?a.items.minimum:a.items.visible+1;"show"==c||"hide"==c||(j>c? (v(d,"Not enough items ("+c+" total, "+j+" needed): Hiding navigation."),c="hide"):c="show");j="show"==c?"removeClass":"addClass";d=E("hidden",d);if(a.auto.button)a.auto.button[c]()[j](d);if(a.prev.button)a.prev.button[c]()[j](d);if(a.next.button)a.next.button[c]()[j](d);if(a.pagination.container)a.pagination.container[c]()[j](d)}function ea(a,c,d){if(!a.circular&&!a.infinite){var j="removeClass"==c||"addClass"==c?c:!1,d=E("disabled",d);if(a.auto.button&&j)a.auto.button[j](d);if(a.prev.button)a.prev.button[j|| 0==c?"addClass":"removeClass"](d);a.next.button&&(c=j||c==a.items.visible?"addClass":"removeClass",a.next.button[c](d))}}function ma(a,c){s(c)?c=c.call(a):x(c)&&(c={});return c}function sa(a,c){c=ma(a,c);if(r(c))var d=na(c),c=-1==d?k(c):d;return c}function Ia(a,c){c=sa(a,c);A(c)?c={button:c}:p(c)&&(c={key:c});return c}function Ja(a,c){s(c.button)&&(c.button=c.button.call(a));r(c.button)&&(c.button=k(c.button));r(c.key)&&(c.key=na(c.key));return c}function O(a,c,d,j,e){r(a)&&(a=k(a,e));u(a)&&(a=k(a, e));A(a)?(a=e.children().index(a),t(d)||(d=!1)):t(d)||(d=!0);p(a)||(a=0);p(c)||(c=0);d&&(a+=j.first);a+=c;if(0<j.total){for(;a>=j.total;)a-=j.total;for(;0>a;)a+=j.total}return a}function ta(a,c,d){for(var j=0,e=0;0<=d;d--){var l=a.eq(d),j=j+(l.is(":visible")?l[c.d.outerWidth](!0):0);if(j>c.maxDimension)return e;0==d&&(d=a.length);e++}}function Ka(a,c,d,j){for(var e=0,l=0,g=a.length;0<=j;j--){l++;if(l==g||a.eq(j).is(c)&&(e++,e==d))return l;0==j&&(j=g)}}function La(a,c){return c.items.visibleConf.org|| a.children().slice(0,c.items.visible).filter(c.items.filter).length}function ba(a,c,d){for(var j=0,e=0,l=a.length-1;d<=l;d++){var g=a.eq(d),j=j+(g.is(":visible")?g[c.d.outerWidth](!0):0);if(j>c.maxDimension)return e;e++;if(e==l+1)return e;d==l&&(d=-1)}}function Ma(a,c,d,j){a=ba(a,c,d);c.circular||d+a>j&&(a=j-d);return a}function oa(a,c,d){return Na(a,c.items.filter,c.items.visibleConf.org,d,c.circular)}function Na(a,c,d,j){for(var e=0,l=0,g=a.length-1;j<=g;j++){l++;if(l>=g||a.eq(j).is(c)&&(e++,e== d))return l;j==g&&(j=-1)}}function fa(a,c){return a.slice(0,c.items.visible)}function ua(a,c,d){c.usePadding&&(r(d)||(d="_cfs_origCssMargin"),a.each(function(){var a=k(this),e=parseInt(a.css(c.d.marginRight),10);p(e)||(e=0);a.data(d,e)}))}function K(a,c,d){if(c.usePadding){var j=t(d)?d:!1;p(d)||(d=0);ua(a,c,"_cfs_tempCssMargin");a.each(function(){var a=k(this);a.css(c.d.marginRight,j?a.data("_cfs_tempCssMargin"):d+a.data("_cfs_origCssMargin"))})}}function Oa(a,c){c.responsive&&a.each(function(){var a= k(this),c=Pa(a,["width","height"]);a.data("_cfs_origCssSizes",c)})}function Qa(a,c){var d=a.items[a.d.width],j=a[a.d.height],e=pa(j);c.each(function(){var c=k(this),g=d-(c[a.d.outerWidth](!0)-c[a.d.width]());c[a.d.width](g);if(e)c[a.d.height](va(g,j))})}function wa(a,c){var d=a.parent(),j=a.children(),e=fa(j,c),l=xa(ya(e,c,!0),c,!1);d.css(l);if(c.usePadding){var d=c.padding,g=d[c.d[1]];c.align&&0>g&&(g=0);e=e.last();e.css(c.d.marginRight,e.data("_cfs_origCssMargin")+g);a.css(c.d.top,d[c.d[0]]);a.css(c.d.left, d[c.d[3]])}a.css(c.d.width,l[c.d.width]+2*aa(j,c,"width"));a.css(c.d.height,Ra(j,c,"height"));return l}function ya(a,c,d){return[aa(a,c,"width",d),Ra(a,c,"height",d)]}function Ra(a,c,d,e){t(e)||(e=!1);if(p(c[c.d[d]])&&e)return c[c.d[d]];if(p(c.items[c.d[d]]))return c.items[c.d[d]];d=-1<d.toLowerCase().indexOf("width")?"outerWidth":"outerHeight";return qa(a,c,d)}function qa(a,c,d){for(var e=0,k=0,l=a.length;k<l;k++){var g=a.eq(k),g=g.is(":visible")?g[c.d[d]](!0):0;e<g&&(e=g)}return e}function aa(a, c,d,e){t(e)||(e=!1);if(p(c[c.d[d]])&&e)return c[c.d[d]];if(p(c.items[c.d[d]]))return c.items[c.d[d]]*a.length;for(var d=-1<d.toLowerCase().indexOf("width")?"outerWidth":"outerHeight",k=e=0,l=a.length;k<l;k++)var g=a.eq(k),e=e+(g.is(":visible")?g[c.d[d]](!0):0);return e}function Sa(a,c,d){var e=a.is(":visible");e&&a.hide();c=a.parent()[c.d[d]]();e&&a.show();return c}function Ta(a,c,d){for(var e=!1,k=!1,l=0,g=a.length;l<g;l++){var p=a.eq(l),p=p.is(":visible")?p[c.d[d]](!0):0;!1===e?e=p:e!=p&&(k=!0); 0==e&&(k=!0)}return k}function va(a,c){if(pa(c)){c=parseInt(c.slice(0,-1),10);if(!p(c))return a;a*=c/100}return a}function e(a,c,d,e,k){t(d)||(d=!0);t(e)||(e=!0);t(k)||(k=!1);d&&(a=c.events.prefix+a);e&&(a=a+"."+c.events.namespace);e&&k&&(a+=c.serialNumber);return a}function E(a,c){return r(c.classnames[a])?c.classnames[a]:a}function xa(a,c,d){t(d)||(d=!0);var d=c.usePadding&&d?c.padding:[0,0,0,0],e={};e[c.d.width]=a[0]+d[1]+d[3];e[c.d.height]=a[1]+d[0]+d[2];return e}function L(a,c){for(var d=[], e=0,k=a.length;e<k;e++)for(var l=0,g=c.length;l<g;l++)if(-1<c[l].indexOf(typeof a[e])&&x(d[l])){d[l]=a[e];break}return d}function Za(a){if(x(a))return[0,0,0,0];if(p(a))return[a,a,a,a];r(a)&&(a=a.split("px").join("").split("em").join("").split(" "));if(!G(a))return[0,0,0,0];for(var c=0;4>c;c++)a[c]=parseInt(a[c],10);switch(a.length){case 0:return[0,0,0,0];case 1:return[a[0],a[0],a[0],a[0]];case 2:return[a[0],a[1],a[0],a[1]];case 3:return[a[0],a[1],a[2],a[1]];default:return[a[0],a[1],a[2],a[3]]}}function za(a, c){var d=p(c[c.d.width])?Math.ceil(c[c.d.width]-aa(a,c,"width")):0;switch(c.align){case "left":return[0,d];case "right":return[d,0];default:return[Math.ceil(d/2),Math.floor(d/2)]}}function Aa(a,c,d,e){c=a;if(s(d))c=d.call(e,c);else if(r(d)){var c=d.split("+"),k=d.split("-");k.length>c.length?(d=!0,e=k[0],k=k[1]):(d=!1,e=c[0],k=c[1]);switch(e){case "even":c=1==a%2?a-1:a;break;case "odd":c=0==a%2?a-1:a;break;default:c=a}k=parseInt(k,10);p(k)&&(d&&(k=-k),c+=k)}if(!p(c)||1>c)c=1;return c}function Y(a, c,d,e){return Ua(Aa(a,c,d,e),c.items.visibleConf)}function Ua(a,c){p(c.min)&&a<c.min&&(a=c.min);p(c.max)&&a>c.max&&(a=c.max);1>a&&(a=1);return a}function Va(a){G(a)||(a=[[a]]);G(a[0])||(a=[a]);for(var c=0,d=a.length;c<d;c++)r(a[c][0])&&(a[c][0]=k(a[c][0])),t(a[c][1])||(a[c][1]=!0),t(a[c][2])||(a[c][2]=!0),p(a[c][3])||(a[c][3]=0);return a}function na(a){return"right"==a?39:"left"==a?37:"up"==a?38:"down"==a?40:-1}function Wa(a,c,d){a&&(c=c.triggerHandler(e("currentPosition",d)),k.fn.carouFredSel.cookie.set(a, c))}function $a(a){a=k.fn.carouFredSel.cookie.get(a);return""==a?0:a}function Pa(a,c){for(var d={},e,k=0,l=c.length;k<l;k++)e=c[k],d[e]=a.css(e);return d}function Xa(a,c){var d=za(fa(c,a),a);a.padding[a.d[1]]=d[1];a.padding[a.d[3]]=d[0];return a}function Ya(a,c){var d=Ua(Math.ceil(a[a.d.width]/a.items[a.d.width]),a.items.visibleConf);d>c.length&&(d=c.length);var e=Math.floor(a[a.d.width]/d);a.items.visible=d;a.items[a.d.width]=e;a[a.d.width]=d*e;return a}function X(a){if(r(a))var c=-1<a.indexOf("immediate")? !0:!1,a=-1<a.indexOf("resume")?!0:!1;else c=a=!1;return[c,a]}function x(a){return null===a||"undefined"==typeof a||""===a||"undefined"===a}function G(a){return a instanceof Array}function A(a){return a instanceof jQuery}function u(a){return(a instanceof Object||"object"==typeof a)&&null!==a&&!A(a)&&!G(a)}function p(a){return(a instanceof Number||"number"==typeof a)&&!isNaN(a)}function r(a){return(a instanceof String||"string"==typeof a)&&!x(a)&&!Z(a)&&!(!1===a||"false"===a)}function s(a){return a instanceof Function||"function"==typeof a}function t(a){return a instanceof Boolean||"boolean"==typeof a||Z(a)||!1===a||"false"===a}function Z(a){return!0===a||"true"===a}function pa(a){return r(a)&&"%"==a.slice(-1)}function J(){return(new Date).getTime()}function H(a,c){v(!0,a+" is DEPRECATED, support for it will be removed. Use "+c+" instead.")}function v(a,c){if(u(a))var d=" ("+a.selector+")",a=a.debug;else d="";if(!a)return!1;c=r(c)?"carouFredSel"+d+": "+c:["carouFredSel"+d+":",c];window.console&&window.console.log&& window.console.log(c);return!1}k.fn.carouFredSel||(k.fn.caroufredsel=k.fn.carouFredSel=function(a,c){if(0==this.length)return v(!0,'No element found for "'+this.selector+'".'),this;if(1<this.length)return this.each(function(){k(this).carouFredSel(a,c)});var d=this,j=this[0],y=!1;d.data("_cfs_isCarousel")&&(y=d.triggerHandler("_cfs_triggerEvent","currentPosition"),d.trigger("_cfs_triggerEvent",["destroy",!0]));d._cfs_init=function(a,c,i){var e=a=ma(j,a),f=a.items,f=ma(j,f);p(f)?f={visible:f}:"variable"== f?f={visible:f,width:f,height:f}:u(f)||(f={});e.items=f;e=a;f=a.scroll;f=ma(j,f);p(f)?f=50>=f?{items:f}:{duration:f}:r(f)?f={easing:f}:u(f)||(f={});e.scroll=f;e=a;f=a.auto;f=sa(j,f);A(f)?f={button:f}:t(f)?f={play:f}:p(f)&&(f={timeoutDuration:f});if(f.progress&&(r(f.progress)||A(f.progress)))f.progress={bar:f.progress};e.auto=f;a.prev=Ia(j,a.prev);a.next=Ia(j,a.next);e=a;f=a.pagination;f=sa(j,f);A(f)?f={container:f}:t(f)&&(f={keys:f});e.pagination=f;e=a;f=a.swipe;s(f)&&(f=f.call(j));x(f)&&(f={onTouch:!1}); Z(f)?f={onTouch:f}:p(f)&&(f={items:f});e.swipe=f;e=a;f=a.mousewheel;s(f)&&(f=f.call(j));Z(f)?f={}:p(f)?f={items:f}:x(f)&&(f=!1);e.mousewheel=f;c&&(ga=k.extend(!0,{},k.fn.carouFredSel.defaults,a));for(var a=b=k.extend(!0,{},k.fn.carouFredSel.defaults,a),c=[["width","innerWidth","outerWidth","height","innerHeight","outerHeight","left","top","marginRight",0,1,2,3],["height","innerHeight","outerHeight","width","innerWidth","outerWidth","top","left","marginBottom",3,2,1,0]],e=c[0].length,f="right"==b.direction|| "left"==b.direction?0:1,g={},q=0;q<e;q++)g[c[0][q]]=c[f][q];a.d=g;l.direction="up"==b.direction||"left"==b.direction?"next":"prev";a=d.children();c=Sa(B,b,"width");Z(b.cookie)&&(b.cookie="caroufredsel_cookie_"+h.serialNumber);b.maxDimension=p(b[b.d.width])?b[b.d.width]:c;e=b;f=b.items;g=b;u(f.visibleConf)||(f.visibleConf={});u(f.sizesConf)||(f.sizesConf={});0==f.start&&p(i)&&(f.start=i);u(f.visible)?(f.visibleConf.min=f.visible.min,f.visibleConf.max=f.visible.max,f.visible=!1):r(f.visible)?("variable"== f.visible?f.visibleConf.variable=!0:f.visibleConf.adjust=f.visible,f.visible=!1):s(f.visible)&&(f.visibleConf.adjust=f.visible,f.visible=!1);r(f.filter)||(f.filter=0<a.filter(":hidden").length?":visible":"*");f[g.d.width]||(g.responsive?(v(!0,"Set a "+g.d.width+" for the items!"),f[g.d.width]=qa(a,g,"outerWidth")):f[g.d.width]=Ta(a,g,"outerWidth")?"variable":a[g.d.outerWidth](!0));f[g.d.height]||(f[g.d.height]=Ta(a,g,"outerHeight")?"variable":a[g.d.outerHeight](!0));f.sizesConf.width=f.width;f.sizesConf.height= f.height;e.items=f;i=b;e=b.d.width;f=b[b.d.width];"auto"==f&&(f=qa(a,b,"outerWidth"));i[e]=f;i=b;e=b.d.height;f=b[b.d.height];g=b;"auto"==f&&(f=qa(a,g,"outerHeight"));f||(f=g.items[g.d.height]);i[e]=f;b.responsive&&(pa(b[b.d.width])||(b[b.d.width]="100%"));pa(b[b.d.width])&&(l.upDateOnWindowResize=!0,l.primarySizePercentage=b[b.d.width],b[b.d.width]=va(c,l.primarySizePercentage),b.items.visible||(b.items.visibleConf.variable=!0));if(b.responsive)b.usePadding=!1,b.padding=[0,0,0,0],b.align=!1,b.items.visibleConf.variable= !1;else{if(!b.items.visible){i=b;"variable"==i.items[i.d.width]&&(i.items.visibleConf.variable=!0);if(!i.items.visibleConf.variable&&(p(i[i.d.width])?i.items.visible=Math.floor(i[i.d.width]/i.items[i.d.width]):(i.items.visible=Math.floor(c/i.items[i.d.width]),i[i.d.width]=i.items.visible*i.items[i.d.width],i.items.visibleConf.adjust||(i.align=!1)),"Infinity"==i.items.visible||1>i.items.visible))v(!0,'Not a valid number of visible items: Set to "variable".'),i.items.visibleConf.variable=!0;b=i}b[b.d.width]|| (!b.items.visibleConf.variable&&p(b.items[b.d.width])&&"*"==b.items.filter?(b[b.d.width]=b.items.visible*b.items[b.d.width],b.align=!1):b[b.d.width]="variable");x(b.align)&&(b.align=p(b[b.d.width])?"center":!1);b.items.visibleConf.variable&&(b.items.visible=ba(a,b,0))}"*"!=b.items.filter&&!b.items.visibleConf.variable&&(b.items.visibleConf.org=b.items.visible,b.items.visible=oa(a,b,0));b.items.visible=Y(b.items.visible,b,b.items.visibleConf.adjust,j);b.items.visibleConf.old=b.items.visible;if(b.responsive)b.items.visibleConf.min|| (b.items.visibleConf.min=b.items.visible),b.items.visibleConf.max||(b.items.visibleConf.max=b.items.visible),b=Ya(b,a,c);else switch(b.padding=Za(b.padding),"top"==b.align?b.align="left":"bottom"==b.align&&(b.align="right"),b.align){case "center":case "left":case "right":"variable"!=b[b.d.width]&&(b=Xa(b,a),b.usePadding=!0);break;default:b.align=!1,b.usePadding=0==b.padding[0]&&0==b.padding[1]&&0==b.padding[2]&&0==b.padding[3]?!1:!0}p(b.scroll.duration)||(b.scroll.duration=500);x(b.scroll.items)&& (b.scroll.items=b.responsive||b.items.visibleConf.variable||"*"!=b.items.filter?"visible":b.items.visible);b.auto=k.extend(!0,{},b.scroll,b.auto);b.prev=k.extend(!0,{},b.scroll,b.prev);b.next=k.extend(!0,{},b.scroll,b.next);b.pagination=k.extend(!0,{},b.scroll,b.pagination);i=b;a=b.auto;s(a.button)&&(a.button=a.button.call(j));r(a.button)&&(a.button=k(a.button));t(a.play)||(a.play=!0);p(a.delay)||(a.delay=0);x(a.pauseOnEvent)&&(a.pauseOnEvent=!0);t(a.pauseOnResize)||(a.pauseOnResize=!0);p(a.timeoutDuration)|| (a.timeoutDuration=10>a.duration?2500:5*a.duration);a.progress&&(s(a.progress.bar)&&(a.progress.bar=a.progress.bar.call(j)),r(a.progress.bar)&&(a.progress.bar=k(a.progress.bar)),a.progress.bar?(s(a.progress.updater)||(a.progress.updater=k.fn.carouFredSel.progressbarUpdater),p(a.progress.interval)||(a.progress.interval=50)):a.progress=!1);i.auto=a;b.prev=Ja(j,b.prev);b.next=Ja(j,b.next);i=b;a=b.pagination;s(a.container)&&(a.container=a.container.call(j));r(a.container)&&(a.container=k(a.container)); p(a.items)||(a.items=!1);t(a.keys)||(a.keys=!1);if(!s(a.anchorBuilder)&&!(!1===a.anchorBuilder||"false"===a.anchorBuilder))a.anchorBuilder=k.fn.carouFredSel.pageAnchorBuilder;p(a.deviation)||(a.deviation=0);i.pagination=a;i=b;a=b.swipe;t(a.onTouch)||(a.onTouch=!0);t(a.onMouse)||(a.onMouse=!1);u(a.options)||(a.options={});t(a.options.triggerOnTouchEnd)||(a.options.triggerOnTouchEnd=!1);i.swipe=a;b.mousewheel=b.mousewheel;b.synchronise&&(b.synchronise=Va(b.synchronise));b.auto.onPauseStart&&(b.auto.onTimeoutStart= b.auto.onPauseStart,H("auto.onPauseStart","auto.onTimeoutStart"));b.auto.onPausePause&&(b.auto.onTimeoutPause=b.auto.onPausePause,H("auto.onPausePause","auto.onTimeoutPause"));b.auto.onPauseEnd&&(b.auto.onTimeoutEnd=b.auto.onPauseEnd,H("auto.onPauseEnd","auto.onTimeoutEnd"));b.auto.pauseDuration&&(b.auto.timeoutDuration=b.auto.pauseDuration,H("auto.pauseDuration","auto.timeoutDuration"))};d._cfs_build=function(){d.data("_cfs_isCarousel",!0);var a=d.children(),c=Pa(d,"textAlign float position top right bottom left zIndex width height marginTop marginRight marginBottom marginLeft".split(" ")), e="relative";switch(c.position){case "absolute":case "fixed":e=c.position}B.css(c).css({overflow:"hidden",position:e});d.data("_cfs_origCss",c).css({textAlign:"left","float":"none",position:"absolute",top:0,right:"auto",bottom:"auto",left:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0});ua(a,b);Oa(a,b);b.responsive&&Qa(b,a)};d._cfs_bind_events=function(){d._cfs_unbind_events();d.bind(e("stop",h),function(a,c){a.stopPropagation();l.isStopped||b.auto.button&&b.auto.button.addClass(E("stopped", h));l.isStopped=!0;b.auto.play&&(b.auto.play=!1,d.trigger(e("pause",h),c));return!0});d.bind(e("finish",h),function(b){b.stopPropagation();l.isScrolling&&ka(n);return!0});d.bind(e("pause",h),function(a,d,c){a.stopPropagation();z=da(z);d&&l.isScrolling&&(n.isStopped=!0,a=J()-n.startTime,n.duration-=a,n.pre&&(n.pre.duration-=a),n.post&&(n.post.duration-=a),ka(n,!1));!l.isPaused&&!l.isScrolling&&c&&(z.timePassed+=J()-z.startTime);l.isPaused||b.auto.button&&b.auto.button.addClass(E("paused",h));l.isPaused= !0;b.auto.onTimeoutPause&&(c=b.auto.timeoutDuration-z.timePassed,a=100-Math.ceil(100*c/b.auto.timeoutDuration),b.auto.onTimeoutPause.call(j,a,c));return!0});d.bind(e("play",h),function(a,c,i,g){a.stopPropagation();z=da(z);g=L([c,i,g],["string","number","boolean"]);c=g[0];i=g[1];g=g[2];"prev"!=c&&"next"!=c&&(c=l.direction);p(i)||(i=0);t(g)||(g=!1);g&&(l.isStopped=!1,b.auto.play=!0);if(!b.auto.play)return a.stopImmediatePropagation(),v(h,"Carousel stopped: Not scrolling.");l.isPaused&&b.auto.button&& (b.auto.button.removeClass(E("stopped",h)),b.auto.button.removeClass(E("paused",h)));l.isPaused=!1;z.startTime=J();var f=b.auto.timeoutDuration+i;dur2=f-z.timePassed;perc=100-Math.ceil(100*dur2/f);b.auto.progress&&(z.progress=setInterval(function(){var a=J()-z.startTime+z.timePassed,a=Math.ceil(100*a/f);b.auto.progress.updater.call(b.auto.progress.bar[0],a)},b.auto.progress.interval));z.auto=setTimeout(function(){b.auto.progress&&b.auto.progress.updater.call(b.auto.progress.bar[0],100);b.auto.onTimeoutEnd&& b.auto.onTimeoutEnd.call(j,perc,dur2);l.isScrolling?d.trigger(e("play",h),c):d.trigger(e(c,h),b.auto)},dur2);b.auto.onTimeoutStart&&b.auto.onTimeoutStart.call(j,perc,dur2);return!0});d.bind(e("resume",h),function(b){b.stopPropagation();n.isStopped?(n.isStopped=!1,l.isPaused=!1,l.isScrolling=!0,n.startTime=J(),$(n)):d.trigger(e("play",h));return!0});d.bind(e("prev",h)+" "+e("next",h),function(a,c,i,m,f){a.stopPropagation();if(l.isStopped||d.is(":hidden"))return a.stopImmediatePropagation(),v(h,"Carousel stopped or hidden: Not scrolling."); var w=p(b.items.minimum)?b.items.minimum:b.items.visible+1;if(w>g.total)return a.stopImmediatePropagation(),v(h,"Not enough items ("+g.total+" total, "+w+" needed): Not scrolling.");var q=L([c,i,m,f],["object","number/string","function","boolean"]),c=q[0],i=q[1],m=q[2],f=q[3],w=a.type.slice(h.events.prefix.length);u(c)||(c={});s(m)&&(c.onAfter=m);t(f)&&(c.queue=f);c=k.extend(!0,{},b[w],c);if(c.conditions&&!c.conditions.call(j,w))return a.stopImmediatePropagation(),v(h,'Callback "conditions" returned false.'); if(!p(i)){if("*"!=b.items.filter)i="visible";else for(var r=[i,c.items,b[w].items],q=0,f=r.length;q<f;q++)if(p(r[q])||"page"==r[q]||"visible"==r[q]){i=r[q];break}switch(i){case "page":return a.stopImmediatePropagation(),d.triggerHandler(e(w+"Page",h),[c,m]);case "visible":!b.items.visibleConf.variable&&"*"==b.items.filter&&(i=b.items.visible)}}if(n.isStopped)return d.trigger(e("resume",h)),d.trigger(e("queue",h),[w,[c,i,m]]),a.stopImmediatePropagation(),v(h,"Carousel resumed scrolling.");if(0<c.duration&& l.isScrolling)return c.queue&&("last"==c.queue&&(W=[]),("first"!=c.queue||0==W.length)&&d.trigger(e("queue",h),[w,[c,i,m]])),a.stopImmediatePropagation(),v(h,"Carousel currently scrolling.");z.timePassed=0;d.trigger(e("slide_"+w,h),[c,i]);if(b.synchronise){a=b.synchronise;c=[c,i];m=0;for(f=a.length;m<f;m++)q=w,a[m][2]||(q="prev"==q?"next":"prev"),a[m][1]||(c[0]=a[m][0].triggerHandler("_cfs_triggerEvent",["configuration",q])),c[1]=i+a[m][3],a[m][0].trigger("_cfs_triggerEvent",["slide_"+q,c])}return!0}); d.bind(e("slide_prev",h),function(a,c,i){a.stopPropagation();var m=d.children();if(!b.circular&&0==g.first)return b.infinite&&d.trigger(e("next",h),g.total-1),a.stopImmediatePropagation();K(m,b);if(!p(i)){if(b.items.visibleConf.variable)i=ta(m,b,g.total-1);else if("*"!=b.items.filter)var f=p(c.items)?c.items:La(d,b),i=Ka(m,b.items.filter,f,g.total-1);else i=b.items.visible;i=Aa(i,b,c.items,j)}b.circular||g.total-i<g.first&&(i=g.total-g.first);b.items.visibleConf.old=b.items.visible;b.items.visibleConf.variable? (f=Y(ba(m,b,g.total-i),b,b.items.visibleConf.adjust,j),b.items.visible+i<=f&&i<g.total&&(i++,f=Y(ba(m,b,g.total-i),b,b.items.visibleConf.adjust,j)),b.items.visible=f):"*"!=b.items.filter&&(f=oa(m,b,g.total-i),b.items.visible=Y(f,b,b.items.visibleConf.adjust,j));K(m,b,!0);if(0==i)return a.stopImmediatePropagation(),v(h,"0 items to scroll: Not scrolling.");v(h,"Scrolling "+i+" items backward.");for(g.first+=i;g.first>=g.total;)g.first-=g.total;b.circular||(0==g.first&&c.onEnd&&c.onEnd.call(j,"prev"), b.infinite||ea(b,g.first,h));d.children().slice(g.total-i,g.total).prependTo(d);g.total<b.items.visible+i&&d.children().slice(0,b.items.visible+i-g.total).clone(!0).appendTo(d);var m=d.children(),w=m.slice(i,b.items.visibleConf.old+i),a=m.slice(0,b.items.visible),q=m.eq(i-1),r=w.last(),t=a.last();K(m,b);var s=f=0;b.align&&(s=za(a,b),f=s[0],s=s[1]);var y=0>f?b.padding[b.d[3]]:0,u=!1,M=k();if(b.items.visible<i&&(M=m.slice(b.items.visibleConf.old,i),"directscroll"==c.fx)){var N=b.items[b.d.width],u= M,q=t;Ea(u);b.items[b.d.width]="variable"}var P=!1,x=aa(m.slice(0,i),b,"width"),A=xa(ya(a,b,!0),b,!b.usePadding),E=0,ca={},J={},ha={},Ba={},G={},H={},S={},I=Ha(c,b,i,x);switch(c.fx){case "cover":case "cover-fade":E=aa(m.slice(0,b.items.visible),b,"width")}u&&(b.items[b.d.width]=N);K(m,b,!0);0<=s&&K(r,b,b.padding[b.d[1]]);0<=f&&K(q,b,b.padding[b.d[3]]);b.align&&(b.padding[b.d[1]]=s,b.padding[b.d[3]]=f);H[b.d.left]=-(x-y);S[b.d.left]=-(E-y);J[b.d.left]=A[b.d.width];var Q=function(){},m=function(){}, T=function(){},N=function(){},C=function(){},y=function(){},D=function(){},x=function(){},F=function(){},R=function(){},U=function(){};switch(c.fx){case "crossfade":case "cover":case "cover-fade":case "uncover":case "uncover-fade":P=d.clone(!0).appendTo(B)}switch(c.fx){case "crossfade":case "uncover":case "uncover-fade":P.children().slice(0,i).remove();P.children().slice(b.items.visibleConf.old).remove();break;case "cover":case "cover-fade":P.children().slice(b.items.visible).remove(),P.css(S)}d.css(H); n=ja(I,c.easing);ca[b.d.left]=b.usePadding?b.padding[b.d[3]]:0;if("variable"==b[b.d.width]||"variable"==b[b.d.height])Q=function(){B.css(A)},m=function(){n.anims.push([B,A])};if(b.usePadding){t.not(q).length&&(ha[b.d.marginRight]=q.data("_cfs_origCssMargin"),0>f?q.css(ha):(D=function(){q.css(ha)},x=function(){n.anims.push([q,ha])}));switch(c.fx){case "cover":case "cover-fade":P.children().eq(i-1).css(ha)}t.not(r).length&&(Ba[b.d.marginRight]=r.data("_cfs_origCssMargin"),T=function(){r.css(Ba)},N= function(){n.anims.push([r,Ba])});0<=s&&(G[b.d.marginRight]=t.data("_cfs_origCssMargin")+b.padding[b.d[1]],C=function(){t.css(G)},y=function(){n.anims.push([t,G])})}var U=function(){d.css(ca)},L=b.items.visible+i-g.total,R=function(){0<L&&(d.children().slice(g.total).remove(),w=k(d.children().slice(g.total-(b.items.visible-L)).get().concat(d.children().slice(0,L).get())));Fa(u);if(b.usePadding){var a=d.children().eq(b.items.visible+i-1);a.css(b.d.marginRight,a.data("_cfs_origCssMargin"))}},O=Ga(w, M,a,i,"prev",I,A),F=function(){Ca(d,P,c);l.isScrolling=!1;V.onAfter=la(j,c,"onAfter",O,V);W=Da(d,W,h);l.isPaused||d.trigger(e("play",h))};l.isScrolling=!0;z=da(z);V.onBefore=la(j,c,"onBefore",O,V);switch(c.fx){case "none":d.css(ca);Q();T();C();D();U();R();F();break;case "fade":n.anims.push([d,{opacity:0},function(){Q();T();C();D();U();R();n=ja(I,c.easing);n.anims.push([d,{opacity:1},F]);$(n)}]);break;case "crossfade":d.css({opacity:0});n.anims.push([P,{opacity:0}]);n.anims.push([d,{opacity:1},F]); m();T();C();D();U();R();break;case "cover":n.anims.push([P,ca,function(){T();C();D();U();R();F()}]);m();break;case "cover-fade":n.anims.push([d,{opacity:0}]);n.anims.push([P,ca,function(){d.css({opacity:1});T();C();D();U();R();F()}]);m();break;case "uncover":n.anims.push([P,J,F]);m();T();C();D();U();R();break;case "uncover-fade":d.css({opacity:0});n.anims.push([d,{opacity:1}]);n.anims.push([P,J,F]);m();T();C();D();U();R();break;default:n.anims.push([d,ca,function(){R();F()}]),m(),N(),y(),x()}$(n); Wa(b.cookie,d,h);d.trigger(e("updatePageStatus",h),[!1,A]);return!0});d.bind(e("slide_next",h),function(a,c,i){a.stopPropagation();var m=d.children();if(!b.circular&&g.first==b.items.visible)return b.infinite&&d.trigger(e("prev",h),g.total-1),a.stopImmediatePropagation();K(m,b);if(!p(i)){if("*"!=b.items.filter)var f=p(c.items)?c.items:La(d,b),i=Na(m,b.items.filter,f+1,0,b.circular)-1;else i=b.items.visible;i=Aa(i,b,c.items,j)}var w=0==g.first?g.total:g.first;if(!b.circular){if(b.items.visibleConf.variable)var q= ba(m,b,i),f=ta(m,b,w-1);else f=q=b.items.visible;i+q>w&&(i=w-f)}b.items.visibleConf.old=b.items.visible;if(b.items.visibleConf.variable){for(q=Y(Ma(m,b,i,w),b,b.items.visibleConf.adjust,j);b.items.visible-i>=q&&i<g.total;)i++,q=Y(Ma(m,b,i,w),b,b.items.visibleConf.adjust,j);b.items.visible=q}else"*"!=b.items.filter&&(q=oa(m,b,i),b.items.visible=Y(q,b,b.items.visibleConf.adjust,j));K(m,b,!0);if(0==i)return a.stopImmediatePropagation(),v(h,"0 items to scroll: Not scrolling.");v(h,"Scrolling "+i+" items forward."); for(g.first-=i;0>g.first;)g.first+=g.total;b.circular||(g.first==b.items.visible&&c.onEnd&&c.onEnd.call(j,"next"),b.infinite||ea(b,g.first,h));g.total<b.items.visible+i&&d.children().slice(0,b.items.visible+i-g.total).clone(!0).appendTo(d);var m=d.children(),a=m.slice(0,b.items.visibleConf.old),r=m.slice(i,b.items.visible+i),t=m.eq(i-1),s=a.last(),w=r.last();K(m,b);var y=f=0;b.align&&(q=za(r,b),f=q[0],y=q[1]);var x=!1,q=k();if(b.items.visibleConf.old<i&&(q=m.slice(b.items.visibleConf.old,i),"directscroll"== c.fx)){var M=b.items[b.d.width],x=q,t=s;Ea(x);b.items[b.d.width]="variable"}var N=!1,u=aa(m.slice(0,i),b,"width"),A=xa(ya(r,b,!0),b,!b.usePadding),J=0,E={},G={},I={},L={},H={},O=Ha(c,b,i,u);switch(c.fx){case "uncover":case "uncover-fade":J=aa(m.slice(0,b.items.visibleConf.old),b,"width")}x&&(b.items[b.d.width]=M);b.align&&0>b.padding[b.d[1]]&&(b.padding[b.d[1]]=0);K(m,b,!0);K(s,b,b.padding[b.d[1]]);b.align&&(b.padding[b.d[1]]=y,b.padding[b.d[3]]=f);H[b.d.left]=b.usePadding?b.padding[b.d[3]]:0;var X= function(){},M=function(){},S=function(){},Z=function(){},Q=function(){},T=function(){},C=function(){},D=function(){},F=function(){};switch(c.fx){case "crossfade":case "cover":case "cover-fade":case "uncover":case "uncover-fade":N=d.clone(!0).appendTo(B),N.children().slice(b.items.visibleConf.old).remove()}switch(c.fx){case "crossfade":case "cover":case "cover-fade":d.css("zIndex",1),N.css("zIndex",0)}n=ja(O,c.easing);E[b.d.left]=-u;G[b.d.left]=-J;0>f&&(E[b.d.left]+=f);if("variable"==b[b.d.width]|| "variable"==b[b.d.height])X=function(){B.css(A)},M=function(){n.anims.push([B,A])};b.usePadding&&(u=w.data("_cfs_origCssMargin"),0<=y&&(u+=b.padding[b.d[1]]),w.css(b.d.marginRight,u),t.not(s).length&&(L[b.d.marginRight]=s.data("_cfs_origCssMargin")),S=function(){s.css(L)},Z=function(){n.anims.push([s,L])},w=t.data("_cfs_origCssMargin"),0<f&&(w+=b.padding[b.d[3]]),I[b.d.marginRight]=w,Q=function(){t.css(I)},T=function(){n.anims.push([t,I])});var F=function(){d.css(H)},R=b.items.visible+i-g.total,D= function(){0<R&&d.children().slice(g.total).remove();var a=d.children().slice(0,i).appendTo(d).last();0<R&&(r=fa(m,b));Fa(x);if(b.usePadding){if(g.total<b.items.visible+i){var c=d.children().eq(b.items.visible-1);c.css(b.d.marginRight,c.data("_cfs_origCssMargin")+b.padding[b.d[3]])}a.css(b.d.marginRight,a.data("_cfs_origCssMargin"))}},U=Ga(a,q,r,i,"next",O,A),C=function(){d.css("zIndex",d.data("_cfs_origCss").zIndex);Ca(d,N,c);l.isScrolling=!1;V.onAfter=la(j,c,"onAfter",U,V);W=Da(d,W,h);l.isPaused|| d.trigger(e("play",h))};l.isScrolling=!0;z=da(z);V.onBefore=la(j,c,"onBefore",U,V);switch(c.fx){case "none":d.css(E);X();S();Q();F();D();C();break;case "fade":n.anims.push([d,{opacity:0},function(){X();S();Q();F();D();n=ja(O,c.easing);n.anims.push([d,{opacity:1},C]);$(n)}]);break;case "crossfade":d.css({opacity:0});n.anims.push([N,{opacity:0}]);n.anims.push([d,{opacity:1},C]);M();S();Q();F();D();break;case "cover":d.css(b.d.left,B[b.d.width]());n.anims.push([d,H,C]);M();S();Q();D();break;case "cover-fade":d.css(b.d.left, B[b.d.width]());n.anims.push([N,{opacity:0}]);n.anims.push([d,H,C]);M();S();Q();D();break;case "uncover":n.anims.push([N,G,C]);M();S();Q();F();D();break;case "uncover-fade":d.css({opacity:0});n.anims.push([d,{opacity:1}]);n.anims.push([N,G,C]);M();S();Q();F();D();break;default:n.anims.push([d,E,function(){F();D();C()}]),M(),Z(),T()}$(n);Wa(b.cookie,d,h);d.trigger(e("updatePageStatus",h),[!1,A]);return!0});d.bind(e("slideTo",h),function(a,c,i,j,f,k,l){a.stopPropagation();a=L([c,i,j,f,k,l],"string/number/object number boolean object string function".split(" ")); f=a[3];k=a[4];l=a[5];c=O(a[0],a[1],a[2],g,d);if(0==c)return!1;u(f)||(f=!1);"prev"!=k&&"next"!=k&&(k=b.circular?c<=g.total/2?"next":"prev":0==g.first||g.first>c?"next":"prev");"prev"==k&&(c=g.total-c);d.trigger(e(k,h),[f,c,l]);return!0});d.bind(e("prevPage",h),function(b,a,c){b.stopPropagation();b=d.triggerHandler(e("currentPage",h));return d.triggerHandler(e("slideToPage",h),[b-1,a,"prev",c])});d.bind(e("nextPage",h),function(b,a,c){b.stopPropagation();b=d.triggerHandler(e("currentPage",h));return d.triggerHandler(e("slideToPage", h),[b+1,a,"next",c])});d.bind(e("slideToPage",h),function(a,c,i,k,f){a.stopPropagation();p(c)||(c=d.triggerHandler(e("currentPage",h)));var a=b.pagination.items||b.items.visible,j=Math.ceil(g.total/a)-1;0>c&&(c=j);c>j&&(c=0);return d.triggerHandler(e("slideTo",h),[c*a,0,!0,i,k,f])});d.bind(e("jumpToStart",h),function(b,a){b.stopPropagation();a=a?O(a,0,!0,g,d):0;a+=g.first;if(0!=a){if(0<g.total)for(;a>g.total;)a-=g.total;d.prepend(d.children().slice(a,g.total))}return!0});d.bind(e("synchronise",h), function(a,c){a.stopPropagation();if(c)c=Va(c);else if(b.synchronise)c=b.synchronise;else return v(h,"No carousel to synchronise.");for(var i=d.triggerHandler(e("currentPosition",h)),g=!0,f=0,k=c.length;f<k;f++)c[f][0].triggerHandler(e("slideTo",h),[i,c[f][3],!0])||(g=!1);return g});d.bind(e("queue",h),function(b,a,c){b.stopPropagation();s(a)?a.call(j,W):G(a)?W=a:x(a)||W.push([a,c]);return W});d.bind(e("insertItem",h),function(a,c,i,j,f){a.stopPropagation();f=L([c,i,j,f],["string/object","string/number/object", "boolean","number"]);c=f[0];i=f[1];j=f[2];f=f[3];u(c)&&!A(c)?c=k(c):r(c)&&(c=k(c));if(!A(c)||0==c.length)return v(h,"Not a valid object.");x(i)&&(i="end");ua(c,b);Oa(c,b);var a=i,l="before";"end"==i?j?(0==g.first?(i=g.total-1,l="after"):(i=g.first,g.first+=c.length),0>i&&(i=0)):(i=g.total-1,l="after"):i=O(i,f,j,g,d);f=d.children().eq(i);if(f.length)f[l](c);else v(h,"Correct insert-position not found! Appending item to the end."),d.append(c);"end"!=a&&!j&&i<g.first&&(g.first+=c.length);g.total=d.children().length; g.first>=g.total&&(g.first-=g.total);d.trigger(e("updateSizes",h));d.trigger(e("linkAnchors",h));return!0});d.bind(e("removeItem",h),function(a,b,c,j){a.stopPropagation();a=L([b,c,j],["string/number/object","boolean","number"]);b=a[0];c=a[1];j=a[2];if(b instanceof k&&1<b.length)return f=k(),b.each(function(){var a=d.trigger(e("removeItem",h),[k(this),c,j]);a&&(f=f.add(a))}),f;if(x(b)||"end"==b)f=d.children().last();else{var b=O(b,j,c,g,d),f=d.children().eq(b);f.length&&b<g.first&&(g.first-=f.length)}f&& f.length&&(f.detach(),g.total=d.children().length,d.trigger(e("updateSizes",h)));return f});d.bind(e("onBefore",h)+" "+e("onAfter",h),function(a,b){a.stopPropagation();var c=a.type.slice(h.events.prefix.length);G(b)&&(V[c]=b);s(b)&&V[c].push(b);return V[c]});d.bind(e("currentPosition",h),function(a,b){a.stopPropagation();var c=0==g.first?0:g.total-g.first;s(b)&&b.call(j,c);return c});d.bind(e("currentPage",h),function(a,c){a.stopPropagation();var d=b.pagination.items||b.items.visible,e=Math.ceil(g.total/ d-1),d=0==g.first?0:g.first<g.total%d?0:g.first==d&&!b.circular?e:Math.round((g.total-g.first)/d);0>d&&(d=0);d>e&&(d=e);s(c)&&c.call(j,d);return d});d.bind(e("currentVisible",h),function(a,c){a.stopPropagation();var e=fa(d.children(),b);s(c)&&c.call(j,e);return e});d.bind(e("slice",h),function(a,b,c,e){a.stopPropagation();if(0==g.total)return!1;e=L([b,c,e],["number","number","function"]);b=p(e[0])?e[0]:0;c=p(e[1])?e[1]:g.total;e=e[2];b+=g.first;c+=g.first;if(0<items.total){for(;b>g.total;)b-=g.total; for(;c>g.total;)c-=g.total;for(;0>b;)b+=g.total;for(;0>c;)c+=g.total}a=d.children();b=c>b?a.slice(b,c):k(a.slice(b,g.total).get().concat(a.slice(0,c).get()));s(e)&&e.call(j,b);return b});d.bind(e("isPaused",h)+" "+e("isStopped",h)+" "+e("isScrolling",h),function(b,a){b.stopPropagation();var c=b.type.slice(h.events.prefix.length),c=l[c];s(a)&&a.call(j,c);return c});d.bind(e("configuration",h),function(a,c,g,l){a.stopPropagation();a=!1;if(s(c))c.call(j,b);else if(u(c))ga=k.extend(!0,{},ga,c),!1!==g? a=!0:b=k.extend(!0,{},b,c);else if(!x(c))if(s(g))c=eval("opts."+c),x(c)&&(c=""),g.call(j,c);else{if(x(g))return eval("opts."+c);"boolean"!==typeof l&&(l=!0);eval("opts_orig."+c+" = b");!1!==l?a=!0:eval("opts."+c+" = b")}a&&(K(d.children(),b),d._cfs_init(ga),d._cfs_bind_buttons(),g=wa(d,b),d.trigger(e("updatePageStatus",h),[!0,g]));return b});d.bind(e("linkAnchors",h),function(a,b,c){a.stopPropagation();x(b)?b=k("body"):r(b)&&(b=k(b));if(!A(b)||0==b.length)return v(h,"Not a valid object.");r(c)||(c= "a.caroufredsel");b.find(c).each(function(){var b=this.hash||"";0<b.length&&-1!=d.children().index(k(b))&&k(this).unbind("click").click(function(a){a.preventDefault();d.trigger(e("slideTo",h),b)})});return!0});d.bind(e("updatePageStatus",h),function(a,c){a.stopPropagation();if(b.pagination.container){var i=b.pagination.items||b.items.visible,j=Math.ceil(g.total/i);c&&(b.pagination.anchorBuilder&&(b.pagination.container.children().remove(),b.pagination.container.each(function(){for(var a=0;a<j;a++){var c= d.children().eq(O(a*i,0,!0,g,d));k(this).append(b.pagination.anchorBuilder.call(c[0],a+1))}})),b.pagination.container.each(function(){k(this).children().unbind(b.pagination.event).each(function(a){k(this).bind(b.pagination.event,function(c){c.preventDefault();d.trigger(e("slideTo",h),[a*i,-b.pagination.deviation,!0,b.pagination])})})}));var f=d.triggerHandler(e("currentPage",h))+b.pagination.deviation;f>=j&&(f=0);0>f&&(f=j-1);b.pagination.container.each(function(){k(this).children().removeClass(E("selected", h)).eq(f).addClass(E("selected",h))});return!0}});d.bind(e("updateSizes",h),function(){var a=b.items.visible,c=d.children(),i=Sa(B,b,"width");g.total=c.length;l.primarySizePercentage?(b.maxDimension=i,b[b.d.width]=va(i,l.primarySizePercentage)):b.maxDimension=p(b[b.d.width])?b[b.d.width]:i;b.responsive?(b.items.width=b.items.sizesConf.width,b.items.height=b.items.sizesConf.height,b=Ya(b,c,i),a=b.items.visible,Qa(b,c)):b.items.visibleConf.variable?a=ba(c,b,0):"*"!=b.items.filter&&(a=oa(c,b,0));!b.circular&& (0!=g.first&&a>g.first)&&(i=b.items.visibleConf.variable?ta(c,b,g.first)-g.first:"*"!=b.items.filter?Ka(c,b.items.filter,b.items.visibleConf.org,g.first)-g.first:b.items.visible-g.first,v(h,"Preventing non-circular: sliding "+i+" items backward."),d.trigger(e("prev",h),i));b.items.visible=Y(a,b,b.items.visibleConf.adjust,j);b.items.visibleConf.old=b.items.visible;b=Xa(b,c);a=wa(d,b);d.trigger(e("updatePageStatus",h),[!0,a]);ra(b,g.total,h);ea(b,g.first,h);return a});d.bind(e("destroy",h),function(a, c){a.stopPropagation();z=da(z);d.data("_cfs_isCarousel",!1);d.trigger(e("finish",h));c&&d.trigger(e("jumpToStart",h));K(d.children(),b);b.responsive&&d.children().each(function(){k(this).css(k(this).data("_cfs_origCssSizes"))});d.css(d.data("_cfs_origCss"));d._cfs_unbind_events();d._cfs_unbind_buttons();B.replaceWith(d);return!0});d.bind(e("debug",h),function(){v(h,"Carousel width: "+b.width);v(h,"Carousel height: "+b.height);v(h,"Item widths: "+b.items.width);v(h,"Item heights: "+b.items.height); v(h,"Number of items visible: "+b.items.visible);b.auto.play&&v(h,"Number of items scrolled automatically: "+b.auto.items);b.prev.button&&v(h,"Number of items scrolled backward: "+b.prev.items);b.next.button&&v(h,"Number of items scrolled forward: "+b.next.items);return h.debug});d.bind("_cfs_triggerEvent",function(a,b,c){a.stopPropagation();return d.triggerHandler(e(b,h),c)})};d._cfs_unbind_events=function(){d.unbind(e("",h));d.unbind(e("",h,!1));d.unbind("_cfs_triggerEvent")};d._cfs_bind_buttons= function(){d._cfs_unbind_buttons();ra(b,g.total,h);ea(b,g.first,h);if(b.auto.pauseOnHover){var a=X(b.auto.pauseOnHover);B.bind(e("mouseenter",h,!1),function(){d.trigger(e("pause",h),a)}).bind(e("mouseleave",h,!1),function(){d.trigger(e("resume",h))})}b.auto.button&&b.auto.button.bind(e(b.auto.event,h,!1),function(a){a.preventDefault();var a=!1,c=null;l.isPaused?a="play":b.auto.pauseOnEvent&&(a="pause",c=X(b.auto.pauseOnEvent));a&&d.trigger(e(a,h),c)});b.prev.button&&(b.prev.button.bind(e(b.prev.event, h,!1),function(a){a.preventDefault();d.trigger(e("prev",h))}),b.prev.pauseOnHover&&(a=X(b.prev.pauseOnHover),b.prev.button.bind(e("mouseenter",h,!1),function(){d.trigger(e("pause",h),a)}).bind(e("mouseleave",h,!1),function(){d.trigger(e("resume",h))})));b.next.button&&(b.next.button.bind(e(b.next.event,h,!1),function(a){a.preventDefault();d.trigger(e("next",h))}),b.next.pauseOnHover&&(a=X(b.next.pauseOnHover),b.next.button.bind(e("mouseenter",h,!1),function(){d.trigger(e("pause",h),a)}).bind(e("mouseleave", h,!1),function(){d.trigger(e("resume",h))})));b.pagination.container&&b.pagination.pauseOnHover&&(a=X(b.pagination.pauseOnHover),b.pagination.container.bind(e("mouseenter",h,!1),function(){d.trigger(e("pause",h),a)}).bind(e("mouseleave",h,!1),function(){d.trigger(e("resume",h))}));(b.prev.key||b.next.key)&&k(document).bind(e("keyup",h,!1,!0,!0),function(a){var c=a.keyCode;c==b.next.key&&(a.preventDefault(),d.trigger(e("next",h)));c==b.prev.key&&(a.preventDefault(),d.trigger(e("prev",h)))});b.pagination.keys&& k(document).bind(e("keyup",h,!1,!0,!0),function(a){var c=a.keyCode;49<=c&&58>c&&(c=(c-49)*b.items.visible,c<=g.total&&(a.preventDefault(),d.trigger(e("slideTo",h),[c,0,!0,b.pagination])))});if(b.prev.wipe||b.next.wipe)if(H("the touchwipe-plugin","the touchSwipe-plugin"),k.fn.touchwipe){var c=b.prev.wipe?function(){d.trigger(e("prev",h))}:null,i=b.next.wipe?function(){d.trigger(e("next",h))}:null;if((i||i)&&!l.touchwipe){l.touchwipe=!0;var j={min_move_x:30,min_move_y:30,preventDefaultEvents:!0};switch(b.direction){case "up":case "down":j.wipeUp= c;j.wipeDown=i;break;default:j.wipeLeft=i,j.wipeRight=c}B.touchwipe(j)}}if(k.fn.swipe&&((c="ontouchstart"in window)&&b.swipe.onTouch||!c&&b.swipe.onMouse)){var f=k.extend(!0,{},b.prev,b.swipe),n=k.extend(!0,{},b.next,b.swipe),c=function(){d.trigger(e("prev",h),[f])},i=function(){d.trigger(e("next",h),[n])};switch(b.direction){case "up":case "down":b.swipe.options.swipeUp=i;b.swipe.options.swipeDown=c;break;default:b.swipe.options.swipeLeft=i,b.swipe.options.swipeRight=c}l.swipe&&d.swipe("destroy"); B.swipe(b.swipe.options);B.css("cursor","move");l.swipe=!0}if(k.fn.mousewheel&&(b.prev.mousewheel&&(H("The prev.mousewheel option","the mousewheel configuration object"),b.prev.mousewheel=null,b.mousewheel={items:p(b.prev.mousewheel)?b.prev.mousewheel:null}),b.next.mousewheel&&(H("The next.mousewheel option","the mousewheel configuration object"),b.next.mousewheel=null,b.mousewheel={items:p(b.next.mousewheel)?b.next.mousewheel:null}),b.mousewheel)){var q=k.extend(!0,{},b.prev,b.mousewheel),r=k.extend(!0, {},b.next,b.mousewheel);l.mousewheel&&B.unbind(e("mousewheel",h,!1));B.bind(e("mousewheel",h,!1),function(a,b){a.preventDefault();0<b?d.trigger(e("prev",h),[q]):d.trigger(e("next",h),[r])});l.mousewheel=!0}b.auto.play&&d.trigger(e("play",h),b.auto.delay);if(l.upDateOnWindowResize){var s=function(){d.trigger(e("finish",h));b.auto.pauseOnResize&&!l.isPaused&&d.trigger(e("play",h));K(d.children(),b);d.trigger(e("updateSizes",h))},t=k(window),c=null;if(k.debounce&&"debounce"==h.onWindowResize)c=k.debounce(200, s);else if(k.throttle&&"throttle"==h.onWindowResize)c=k.throttle(300,s);else var y=0,u=0,c=function(){var a=t.width(),b=t.height();if(a!=y||b!=u)s(),y=a,u=b};t.bind(e("resize",h,!1,!0,!0),c)}};d._cfs_unbind_buttons=function(){e("",h);var a=e("",h,!1);ns3=e("",h,!1,!0,!0);k(document).unbind(ns3);k(window).unbind(ns3);B.unbind(a);b.auto.button&&b.auto.button.unbind(a);b.prev.button&&b.prev.button.unbind(a);b.next.button&&b.next.button.unbind(a);b.pagination.container&&(b.pagination.container.unbind(a), b.pagination.anchorBuilder&&b.pagination.container.children().remove());l.swipe&&(d.swipe("destroy"),B.css("cursor","default"),l.swipe=!1);l.mousewheel&&(l.mousewheel=!1);ra(b,"hide",h);ea(b,"removeClass",h)};t(c)&&(c={debug:c});var l={direction:"next",isPaused:!0,isScrolling:!1,isStopped:!1,mousewheel:!1,swipe:!1},g={total:d.children().length,first:0},z={auto:null,progress:null,startTime:J(),timePassed:0},n={isStopped:!1,duration:0,startTime:0,easing:"",anims:[]},V={onBefore:[],onAfter:[]},W=[], h=k.extend(!0,{},k.fn.carouFredSel.configs,c),b={},ga=k.extend(!0,{},a),B=d.wrap("<"+h.wrapper.element+' class="'+h.wrapper.classname+'" />').parent();h.selector=d.selector;h.serialNumber=k.fn.carouFredSel.serialNumber++;d._cfs_init(ga,!0,y);d._cfs_build();d._cfs_bind_events();d._cfs_bind_buttons();G(b.items.start)?y=b.items.start:(y=[],0!=b.items.start&&y.push(b.items.start));b.cookie&&y.unshift(parseInt($a(b.cookie),10));if(0<y.length)for(var ia=0,na=y.length;ia<na;ia++){var I=y[ia];if(0!=I){if(!0=== I){if(I=window.location.hash,1>I.length)continue}else"random"===I&&(I=Math.floor(Math.random()*g.total));if(d.triggerHandler(e("slideTo",h),[I,0,!0,{fx:"none"}]))break}}y=wa(d,b);ia=fa(d.children(),b);b.onCreate&&b.onCreate.call(j,{width:y.width,height:y.height,items:ia});d.trigger(e("updatePageStatus",h),[!0,y]);d.trigger(e("linkAnchors",h));h.debug&&d.trigger(e("debug",h));return d},k.fn.carouFredSel.serialNumber=1,k.fn.carouFredSel.defaults={synchronise:!1,infinite:!0,circular:!0,responsive:!1, direction:"left",items:{start:0},scroll:{easing:"swing",duration:500,pauseOnHover:!1,event:"click",queue:!1}},k.fn.carouFredSel.configs={debug:!1,onWindowResize:"throttle",events:{prefix:"",namespace:"cfs"},wrapper:{element:"div",classname:"caroufredsel_wrapper"},classnames:{}},k.fn.carouFredSel.pageAnchorBuilder=function(a){return'<a href="#"><span>'+a+"</span></a>"},k.fn.carouFredSel.progressbarUpdater=function(a){k(this).css("width",a+"%")},k.fn.carouFredSel.cookie={get:function(a){for(var a=a+ "=",c=document.cookie.split(";"),d=0,e=c.length;d<e;d++){for(var k=c[d];" "==k.charAt(0);)k=k.slice(1);if(0==k.indexOf(a))return k.slice(a.length)}return 0},set:function(a,c,d){var e="";d&&(e=new Date,e.setTime(e.getTime()+864E5*d),e="; expires="+e.toGMTString());document.cookie=a+"="+c+e+"; path=/"},remove:function(a){k.fn.carouFredSel.cookie.set(a,"",-1)}},k.extend(k.easing,{quadratic:function(a){var c=a*a;return a*(-c*a+4*c-6*a+4)},cubic:function(a){return a*(4*a*a-9*a+6)},elastic:function(a){var c= a*a;return a*(33*c*c-106*c*a+126*c-67*a+15)}}))})(jQuery);


/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);


/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);


/*
* touchSwipe - jQuery Plugin
* https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* http://labs.skinkers.com/touchSwipe/
* http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson (www.skinkers.com)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* $version: 1.3.3
*/

(function(g){function P(c){if(c&&void 0===c.allowPageScroll&&(void 0!==c.swipe||void 0!==c.swipeStatus))c.allowPageScroll=G;c||(c={});c=g.extend({},g.fn.swipe.defaults,c);return this.each(function(){var b=g(this),f=b.data(w);f||(f=new W(this,c),b.data(w,f))})}function W(c,b){var f,p,r,s;function H(a){var a=a.originalEvent,c,Q=n?a.touches[0]:a;d=R;n?h=a.touches.length:a.preventDefault();i=0;j=null;k=0;!n||h===b.fingers||b.fingers===x?(r=f=Q.pageX,s=p=Q.pageY,y=(new Date).getTime(),b.swipeStatus&&(c= l(a,d))):t(a);if(!1===c)return d=m,l(a,d),c;e.bind(I,J);e.bind(K,L)}function J(a){a=a.originalEvent;if(!(d===q||d===m)){var c,e=n?a.touches[0]:a;f=e.pageX;p=e.pageY;u=(new Date).getTime();j=S();n&&(h=a.touches.length);d=z;var e=a,g=j;if(b.allowPageScroll===G)e.preventDefault();else{var o=b.allowPageScroll===T;switch(g){case v:(b.swipeLeft&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case A:(b.swipeRight&&o||!o&&b.allowPageScroll!=M)&&e.preventDefault();break;case B:(b.swipeUp&&o||!o&&b.allowPageScroll!= N)&&e.preventDefault();break;case C:(b.swipeDown&&o||!o&&b.allowPageScroll!=N)&&e.preventDefault()}}h===b.fingers||b.fingers===x||!n?(i=U(),k=u-y,b.swipeStatus&&(c=l(a,d,j,i,k)),b.triggerOnTouchEnd||(e=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1),!0===D()?(d=q,c=l(a,d)):e&&(d=m,l(a,d)))):(d=m,l(a,d));!1===c&&(d=m,l(a,d))}}function L(a){a=a.originalEvent;a.preventDefault();u=(new Date).getTime();i=U();j=S();k=u-y;if(b.triggerOnTouchEnd||!1===b.triggerOnTouchEnd&&d===z)if(d=q,(h===b.fingers||b.fingers=== x||!n)&&0!==f){var c=!(b.maxTimeThreshold?!(k>=b.maxTimeThreshold):1);if((!0===D()||null===D())&&!c)l(a,d);else if(c||!1===D())d=m,l(a,d)}else d=m,l(a,d);else d===z&&(d=m,l(a,d));e.unbind(I,J,!1);e.unbind(K,L,!1)}function t(){y=u=p=f=s=r=h=0}function l(a,c){var d=void 0;b.swipeStatus&&(d=b.swipeStatus.call(e,a,c,j||null,i||0,k||0,h));if(c===m&&b.click&&(1===h||!n)&&(isNaN(i)||0===i))d=b.click.call(e,a,a.target);if(c==q)switch(b.swipe&&(d=b.swipe.call(e,a,j,i,k,h)),j){case v:b.swipeLeft&&(d=b.swipeLeft.call(e, a,j,i,k,h));break;case A:b.swipeRight&&(d=b.swipeRight.call(e,a,j,i,k,h));break;case B:b.swipeUp&&(d=b.swipeUp.call(e,a,j,i,k,h));break;case C:b.swipeDown&&(d=b.swipeDown.call(e,a,j,i,k,h))}(c===m||c===q)&&t(a);return d}function D(){return null!==b.threshold?i>=b.threshold:null}function U(){return Math.round(Math.sqrt(Math.pow(f-r,2)+Math.pow(p-s,2)))}function S(){var a;a=Math.atan2(p-s,r-f);a=Math.round(180*a/Math.PI);0>a&&(a=360-Math.abs(a));return 45>=a&&0<=a?v:360>=a&&315<=a?v:135<=a&&225>=a? A:45<a&&135>a?C:B}function V(){e.unbind(E,H);e.unbind(F,t);e.unbind(I,J);e.unbind(K,L)}var O=n||!b.fallbackToMouseEvents,E=O?"touchstart":"mousedown",I=O?"touchmove":"mousemove",K=O?"touchend":"mouseup",F="touchcancel",i=0,j=null,k=0,e=g(c),d="start",h=0,y=p=f=s=r=0,u=0;try{e.bind(E,H),e.bind(F,t)}catch(P){g.error("events not supported "+E+","+F+" on jQuery.swipe")}this.enable=function(){e.bind(E,H);e.bind(F,t);return e};this.disable=function(){V();return e};this.destroy=function(){V();e.data(w,null); return e}}var v="left",A="right",B="up",C="down",G="none",T="auto",M="horizontal",N="vertical",x="all",R="start",z="move",q="end",m="cancel",n="ontouchstart"in window,w="TouchSwipe";g.fn.swipe=function(c){var b=g(this),f=b.data(w);if(f&&"string"===typeof c){if(f[c])return f[c].apply(this,Array.prototype.slice.call(arguments,1));g.error("Method "+c+" does not exist on jQuery.swipe")}else if(!f&&("object"===typeof c||!c))return P.apply(this,arguments);return b};g.fn.swipe.defaults={fingers:1,threshold:75, maxTimeThreshold:null,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:!0,allowPageScroll:"auto",fallbackToMouseEvents:!0};g.fn.swipe.phases={PHASE_START:R,PHASE_MOVE:z,PHASE_END:q,PHASE_CANCEL:m};g.fn.swipe.directions={LEFT:v,RIGHT:A,UP:B,DOWN:C};g.fn.swipe.pageScroll={NONE:G,HORIZONTAL:M,VERTICAL:N,AUTO:T};g.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:x}})(jQuery);


/*
 * backgroundSize: A jQuery cssHook adding support for "cover" and "contain" to IE6,7,8
 *
 * Requirements:
 * - jQuery 1.7.0+
 *
 * Limitations:
 * - doesn't work with multiple backgrounds (use the :after trick)
 * - doesn't work with the "4 values syntax" of background-position
 * - doesn't work with lengths in background-position (only percentages and keywords)
 * - doesn't work with "background-repeat: repeat;"
 * - doesn't work with non-default values of background-clip/origin/attachment/scroll
 * - you should still test your website in IE!
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery.backgroundSize.js
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 *
 */

(function(e,t,n,r,i){var s=e("<div>")[0],o=/url\(["']?(.*?)["']?\)/,u=[],a={top:0,left:0,bottom:1,right:1,center:.5};if("backgroundSize"in s.style&&!e.debugBGS){return}e.cssHooks.backgroundSize={set:function(t,n){var r=!e.data(t,"bgsImg"),i,s,o;e.data(t,"bgsValue",n);if(r){u.push(t);e.refreshBackgroundDimensions(t,true);s=e("<div>").css({position:"absolute",zIndex:-1,top:0,right:0,left:0,bottom:0,overflow:"hidden"});o=e("<img>").css({position:"absolute"}).appendTo(s),s.prependTo(t);e.data(t,"bgsImg",o[0]);i=(e.css(t,"backgroundPosition")||e.css(t,"backgroundPositionX")+" "+e.css(t,"backgroundPositionY")).split(" ");e.data(t,"bgsPos",[a[i[0]]||parseFloat(i[0])/100,a[i[1]]||parseFloat(i[1])/100]);e.css(t,"zIndex")=="auto"&&(t.style.zIndex=0);e.css(t,"position")=="static"&&(t.style.position="relative");e.refreshBackgroundImage(t)}else{e.refreshBackground(t)}},get:function(t){return e.data(t,"bgsValue")||""}};e.cssHooks.backgroundImage={set:function(t,n){return e.data(t,"bgsImg")?e.refreshBackgroundImage(t,n):n}};e.refreshBackgroundDimensions=function(t,n){var r=e(t),i={width:r.innerWidth(),height:r.innerHeight()},s=e.data(t,"bgsDim"),o=!s||i.width!=s.width||i.height!=s.height;e.data(t,"bgsDim",i);if(o&&!n){e.refreshBackground(t)}};e.refreshBackgroundImage=function(t,n){var r=e.data(t,"bgsImg"),i=(o.exec(n||e.css(t,"backgroundImage"))||[])[1],s=r&&r.src,u=i!=s,a,f;if(u){r.style.height=r.style.width="auto";r.onload=function(){var n={width:r.width,height:r.height};if(n.width==1&&n.height==1){return}e.data(t,"bgsImgDim",n);e.data(t,"bgsConstrain",false);e.refreshBackground(t);r.style.visibility="visible";r.onload=null};r.style.visibility="hidden";r.src=i;if(r.readyState||r.complete){r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";r.src=i}t.style.backgroundImage="none"}};e.refreshBackground=function(t){var n=e.data(t,"bgsValue"),i=e.data(t,"bgsDim"),s=e.data(t,"bgsImgDim"),o=e(e.data(t,"bgsImg")),u=e.data(t,"bgsPos"),a=e.data(t,"bgsConstrain"),f,l=i.width/i.height,c=s.width/s.height,h;if(n=="contain"){if(c>l){e.data(t,"bgsConstrain",f="width");h=r.floor((i.height-i.width/c)*u[1]);o.css({top:h});if(f!=a){o.css({width:"100%",height:"auto",left:0})}}else{e.data(t,"bgsConstrain",f="height");h=r.floor((i.width-i.height*c)*u[0]);o.css({left:h});if(f!=a){o.css({height:"100%",width:"auto",top:0})}}}else if(n=="cover"){if(c>l){e.data(t,"bgsConstrain",f="height");h=r.floor((i.height*c-i.width)*u[0]);o.css({left:-h});if(f!=a){o.css({height:"100%",width:"auto",top:0})}}else{e.data(t,"bgsConstrain",f="width");h=r.floor((i.width/c-i.height)*u[1]);o.css({top:-h});if(f!=a){o.css({width:"100%",height:"auto",left:0})}}}};var f=e.event,l,c={_:0},h=0,p,d;l=f.special.throttledresize={setup:function(){e(this).on("resize",l.handler)},teardown:function(){e(this).off("resize",l.handler)},handler:function(t,n){var r=this,i=arguments;p=true;if(!d){e(c).animate(c,{duration:Infinity,step:function(){h++;if(h>l.threshold&&p||n){t.type="throttledresize";f.dispatch.apply(r,i);p=false;h=0}if(h>9){e(c).stop();d=false;h=0}}});d=true}},threshold:1};e(t).on("throttledresize",function(){e(u).each(function(){e.refreshBackgroundDimensions(this)})})})(jQuery,window,document,Math);



/*
 * Arcavias related Javascript code
 * 
 * @copyright Copyright (c) Metaways Infosystems GmbH, 2012
 * @license LGPLv3, http://www.arcavias.com/en/license
 */


/*
 * CSS3 support for IE8
 */
document.createElement("nav");
document.createElement("section");
document.createElement("article");


/* Lazy product image loading in list view */
var arcaviasLazyLoader = (function() {
	var elements = $(".catalog-list-items .lazy-image, .catalog-list-promo .lazy-image");
	for( var i = 0; i < elements.length; i++ ) {
		var element = $(elements[i]);
        if( $(window).scrollTop() + $(window).height() + 2 * element.height() >= element.offset().top ) {
        	element.css( "background-image", "url('" + element.data( "src" ) + "')" );
        	element.removeClass( "lazy-image" );
        }
	}
});

arcaviasLazyLoader();


jQuery(document).ready( function($) {

	/*
	 * Catalog clients
	 */

	/* CSS3 "background-size: contain" support for IE8 */
	$(".catalog-list-items .media-item").css("backgroundSize", "contain");
	$(".catalog-detail-image .thumbs a").css("backgroundSize", "contain");

	
	/* Catalog filter */
	$(".catalog-filter form").on("submit", function( event ) {
		var input = $("input.value", this);

		if( input.val() != '' && input.val().length < 3 ) {

			if( $(this).has(".search-hint").length === 0 ) {

				var node = $('<div/>', {html: input.data("hint"), class: "search-hint"});
				$(".catalog-filter-search", this).after(node);

				var pos = node.position();
				node.css("left", pos.left).css("top", pos.top);
				node.delay(3000).fadeOut(1000, function() {
					node.remove();
				});
			}

			return false;
		}

		return true;
	});

	$(".catalog-filter-tree li.cat-item").on("click", function() {
		$(".catalog-list").fadeTo( 1000, 0.5 );
	});

	$(".catalog-filter-attribute input.attr-item").on("click", function() {
		$(this).parents(".catalog-filter form").submit();
		$(".catalog-list").fadeTo( 1000, 0.5 );
	});

	/* Autocompleter for quick search */
	var arcaviasInputComplete = $( ".catalog-filter-search .value" );
	arcaviasInputComplete.autocomplete( {
		minLength: 3,
		delay: 200,
		source: function( req, add ) {
			var nameTerm = {};
			nameTerm[arcaviasInputComplete.attr( "name" )] = req.term;

			$.getJSON(
				arcaviasInputComplete.data( "url" ),
				nameTerm,
				function( data ) {
					var suggestions = [];

					$.each( data, function( i, val ) {
						suggestions.push( val.name );
					} );
			
					add( suggestions );
				}
			);
		},
		select: function( event, ui ) {
			arcaviasInputComplete.val( ui.item.value );
			$(ui).parents(".catalog-filter form").submit();
		}
	} );


	/* Lazy product image loading in list view */
	arcaviasLazyLoader();
	$(window).bind("resize", arcaviasLazyLoader);
	$(window).bind("scroll", arcaviasLazyLoader);
	

	/* Slider for main product images (big ones) */
	$(".catalog-detail-image .carousel").carouFredSel({
		responsive: false,
		circular: false,
		infinite: false,
		auto: false,
		prev: "#prev-image",
		next: "#next-image",
		items: {
			visible: 1
		},
		scroll: {
			fx: "none"
		},
		swipe: true,
		mousewheel: true
	});

	/* Slider for thumbnail gallery (small ones) */
	$(".catalog-detail-image .thumbs").carouFredSel({
		responsive: false,
		circular: false,
		infinite: false,
		auto: false,
		prev: "#prev-thumbs",
		next: "#next-thumbs",
		items: {
			visible: {
				min: 2,
				max: 3
			}
		},
		swipe: true,
		mousewheel: true
	});

	/* Update big image if small one in thumbnail gallery was selected */
	$(".catalog-detail-image .thumbs a").mouseenter(function() {
		$(".catalog-detail-image .carousel").trigger("slideTo", "#" + this.href.split("#").pop() );
		$(".catalog-detail-image .thumbs a").removeClass("selected");
		$(this).addClass("selected");
		return false;
	});

	/* Add to basket without page reload */
	$(".catalog-detail-basket form").on("submit", function(event) {

		var overlay = $(document.createElement("div"));
		overlay.addClass("arcavias-overlay");
		overlay.fadeTo(1000, 0.5);
		$("body").append(overlay);

		$.post($(this).attr("action"), $(this).serialize(), function(data) {
			var doc = document.createElement("html");
			doc.innerHTML = data;
			
			var basket = $(document.createElement("div"));
			basket.addClass("arcavias-container");
			basket.append( $(".basket-standard", doc) );
			basket.fadeTo(400, 1.0);
			$("body").append(basket);
			
			var resize = function() {
				var jqwin = $(window);
				var left = (jqwin.width() - basket.outerWidth()) / 2;
				var top = (jqwin.height() - basket.outerHeight()) / 2;

				basket.css("left", (left>0 ? left : 0 ));
				basket.css("top", (top>0 ? top : 0 ));
			};
			
			$(window).on("resize", resize);
			resize();
		});

		return false;
	});

	
	/*
	 * Basket clients
	 */
	
	/* Update without page reload */
	$("body").on("submit", ".basket-standard form", function(event) {
		var form = $(this);

		$.post(form.attr("action"), form.serialize(), function(data) {
			var doc = document.createElement("html");
			doc.innerHTML = data;
			$(".basket-standard").html( $(".basket-standard", doc).html() );
		});

		return false;
	});

	/* Update quantity and delete without page reload */
	$("body").on("click", ".basket-standard a.change", function(event) {

		$.post($(this).attr("href"), function(data) {
			var doc = document.createElement("html");
			doc.innerHTML = data;
			$(".basket-standard").html( $(".basket-standard", doc).html() );
		});

		return false;
	});

	/* Go back to underlying page */
	$("body").on("click", ".basket-standard a.btn-back", function(event) {
		var container = $(".arcavias-container");
		var overlay = $(".arcavias-overlay");
		
		if( container.size() + overlay.size() > 0 ) {
			container.remove();
			overlay.remove();
			return false;
		}
	});
	
	
	/*
	 * Checkout clients
	 */

	/* Initial state: Hide form for new address if not selected */
	$(".checkout-standard-address .item-new[data-option!='null'] .form-list").hide();

	/* Initial state: Hide form fields if not delivery/payment option is not selected */
	$( ".checkout-standard-delivery,.checkout-standard-payment" ).find( ".form-list" ).hide();
	$( ".checkout-standard-delivery,.checkout-standard-payment" ).find( ".item-service" ).has( "input:checked" ).find( ".form-list" ).show();

	/* Address form slide up/down when selected */
	$( ".checkout-standard-address-billing .header input" ).bind( "click",
		function( event ) {
			$( ".checkout-standard-address-billing .form-list" ).slideUp( 400 );
			$( ".checkout-standard-address-billing .item-address" ).has( this ).find( ".form-list" ).slideDown( 400 );
		}
	);

	/* Address form slide up/down when selected */
	$( ".checkout-standard-address-delivery .header input" ).bind( "click",
		function( event ) {
			$( ".checkout-standard-address-delivery .form-list" ).slideUp( 400 );
			$( ".checkout-standard-address-delivery .item-address" ).has( this ).find( ".form-list" ).slideDown( 400 );
		}
	);

	/* Delivery/payment form slide up/down when selected */
	$( ".checkout-standard-delivery, .checkout-standard-payment .option" ).bind( "click",
		function( event ) {
			$( ".checkout-standard .form-list" ).slideUp( 400 );
			$( ".checkout-standard .item-service" ).has( this ).find( ".form-list" ).slideDown( 400 );
		}
	);
	
	/* Check for mandatory fields in all forms */
	$( ".checkout-standard form" ).on( "submit", function( event ) {
			var retval = true;
			$( ".checkout-standard .item-new, .item-service" )
				.has( ".header,label" ).has( "input:checked" ) // combining in one has() doesn't work
				.find( ".form-list .mandatory" )
				.each( function() {
					var value = $(this).find( "input,select" ).val();
					if( value == null || value.trim() === "" ) {
						$(this).addClass( "error" );
						retval = false;
					} else {
						$(this).removeClass( "error" );
					}
				} );
			return retval;
		}
	);
	
	/* Redirect to payment provider / confirm page when order has been created successfully */
	$( ".checkout-standard-order-payment > form" ).first().submit();
	$( ".checkout-standard-order-payment" ).first().each( function( index, element ) {
		var url = $(element).data( "url" );
		if( url ) { window.location = url; }
	});

});
