/* v1.6.2
Updated : 2019-11-21 */
!function(r){var n={};function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=r,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.triggerPixel=function(t,e){var r=new Image;e&&"function"==typeof e&&(r.addEventListener("load",e),r.addEventListener("error",e));r.src=t},n.createTrackPixelHtml=function(t){if(!t)return"";var e=encodeURI(t);return'<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="'.concat(e,'"></div>')},n.writeAdUrl=function(t,e,r){var n=i.getEmptyIframe(r,e);n.src=t,document.body.appendChild(n)},n.writeAdHtml=function(t){r(document.body,t)},n.sendRequest=function(t,e){var r=new XMLHttpRequest;r.addEventListener("load",function(){e(r.responseText)}),r.open("GET",t),r.send()},n.getUUID=function(){var r=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=(r+16*Math.random())%16|0;return r=Math.floor(r/16),("x"===t?e:3&e|8).toString(16)})},n.loadScript=function(t,e,r){var n=t.document,i=n.createElement("script");i.type="text/javascript",r&&"function"==typeof r&&(i.readyState?i.onreadystatechange=function(){"loaded"!==i.readyState&&"complete"!==i.readyState||(i.onreadystatechange=null,r())}:i.onload=function(){r()});i.src=e;var o=n.getElementsByTagName("head");(o=o.length?o:n.getElementsByTagName("body")).length&&(o=o[0]).insertBefore(i,o.firstChild);return i},n.getCreativeComment=function(t){return document.createComment("Creative ".concat(t.crid," served by Prebid.js Header Bidding"))},n.getCreativeCommentMarkup=function(t){var e=n.getCreativeComment(t),r=document.createElement("div");return r.appendChild(e),r.innerHTML},n.transformAuctionTargetingData=function(e){var r={hb_adid:"adId",hb_bidid:"winbidid",hb_cache_host:"cacheHost",hb_cache_path:"cachePath",hb_cache_id:"uuid",hb_format:"mediaType",hb_env:"env",hb_size:"size",hb_winurl:"winurl",hb_pb:"hbPb"};function t(t){return!(!e[t]||!(function(t){return o(t,"Object")}(e[t])&&0<Object.keys(e[t]).length||s(e[t])&&""!==e[t]))}var n={},i={};t("targetingMap")?i=function(e){var r={};return Object.keys(e).forEach(function(t){Array.isArray(e[t])&&0<e[t].length&&(r[t]=e[t][0])}),r}(e.targetingMap):t("targetingKeywords")&&(i=function(t){var i={},e=t.split(",");return 0<e.length&&e.forEach(function(t){var e=t.split(":");if(2===e.length){var r=e[0],n=e[1];i[r]=n}}),i}(e.targetingKeywords));return function(e){Object.keys(e).forEach(function(t){n[r[t]||t]=e[t]})}(i),Object.keys(e).forEach(function(t){"targetingMap"!==t&&"targetingKeywords"!==t&&s(e[t])&&""!==e[t]&&(n[t]=e[t])}),n},n.parseUrl=function(t){var e=document.createElement("a");return e.href=decodeURIComponent(t),{href:e.href,protocol:(e.protocol||"").replace(/:$/,""),hostname:e.hostname,port:+e.port,pathname:e.pathname.replace(/^(?!\/)/,"/"),hash:(e.hash||"").replace(/^#/,""),host:e.host||window.location.host}};var i=function(t){if(t&&t.__esModule)return t;var e=a();if(e&&e.has(t))return e.get(t);var r={};if(null!=t){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var o=n?Object.getOwnPropertyDescriptor(t,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=t[i]}}r.default=t,e&&e.set(t,r);return r}(e(3));function a(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return a=function(){return t},t}var r=e(4);function o(t,e){return Object.prototype.toString.call(t)==="[object "+e+"]"}function s(t){return o(t,"String")}},function(t,e,r){"use strict";var n=r(2);window.pbNativeTag=window.pbNativeTag||{};var i=(0,n.newNativeTrackerManager)(window);window.pbNativeTag.startTrackers=i.startTrackers},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.newNativeTrackerManager=function(n){var o;function a(t){return n.document.getElementsByClassName(t)||[]}function s(t){u(function(t){return t&&t.target&&t.target.attributes&&t.target.attributes[h]&&t.target.attributes[h].value||""}(t),"click")}function c(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:s;t=t||a(f);for(var r=0;r<t.length;r++)t[r].addEventListener("click",e,!0)}function u(t,e){if(""===t)console.warn("Prebid tracking event was missing 'adId'.  Was adId macro set in the HTML attribute "+h+"on the ad's anchor element");else{var r={message:"Prebid Native",adId:t};"click"===e&&(r.action="click"),n.parent.postMessage(JSON.stringify(r),o)}}return{startTrackers:function(t){var e=(0,l.transformAuctionTargetingData)(t),r=(0,p.newNativeAssetManager)(window);if(e&&"mobile-app"===e.env){r.loadMobileAssets(e,function(t){var e=0<arguments.length&&void 0!==t?t:{},r=e.clickTrackers,n=e.impTrackers;c(!1,function(t){(t||[]).forEach(l.triggerPixel)}.bind(null,r)),(n||[]).forEach(l.triggerPixel)})}else{var n=(0,l.parseUrl)(e&&e.pubUrl);o=n.protocol+"://"+n.host;var i=a(f);r.loadAssets(function(t){return 0<t.length&&t[0].attributes&&t[0].attributes[h]&&t[0].attributes[h].value||""}(i),c),c(i,s),0<i.length&&function(t){for(var e=0;e<t.length;e++){u((r=t[e]).attributes&&r.attributes[h]&&r.attributes[h].value||"","impression")}var r}(i)}}}};var l=r(0),p=r(5),f="pb-click",h="pbAdId"},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getEmptyIframe=function(t,e){var r=document.createElement("iframe");return r.setAttribute("frameborder",0),r.setAttribute("scrolling","no"),r.setAttribute("marginheight",0),r.setAttribute("marginwidth",0),r.setAttribute("TOPMARGIN",0),r.setAttribute("LEFTMARGIN",0),r.setAttribute("allowtransparency","true"),r.setAttribute("width",e),r.setAttribute("height",t),r},e.insertElement=function(t,e,r){var n;e=e||document,n=r?e.getElementsByTagName(r):e.getElementsByTagName("head");try{(n=n.length?n:e.getElementsByTagName("body")).length&&(n=n[0]).insertBefore(t,n.firstChild)}catch(t){}}},function(t,e,r){var n;n=function(){return i={},r.m=n=[function(t,e,r){"use strict";var n,i=r(1),o=(n=i)&&n.__esModule?n:{default:n};t.exports=o.default},function(t,e,r){"use strict";e.__esModule=!0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.default=d;var n,i=r(2),c=(n=i)&&n.__esModule?n:{default:n},o=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}}(r(4));function u(){}var a={afterAsync:u,afterDequeue:u,afterStreamStart:u,afterWrite:u,autoFix:!0,beforeEnqueue:u,beforeWriteToken:function(t){return t},beforeWrite:function(t){return t},done:u,error:function(t){throw new Error(t.msg)},releaseAsync:!1},l=0,p=[],f=null;function h(){var t=p.shift();if(t){var e=o.last(t);e.afterDequeue(),t.stream=function(t,e,n){(f=new c.default(t,n)).id=l++,f.name=n.name||f.id,d.streams[f.name]=f;var r=t.ownerDocument,i={close:r.close,open:r.open,write:r.write,writeln:r.writeln};function o(t){t=n.beforeWrite(t),f.write(t),n.afterWrite(t)}s(r,{close:u,open:u,write:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return o(e.join(""))},writeln:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return o(e.join("")+"\n")}});var a=f.win.onerror||u;return f.win.onerror=function(t,e,r){n.error({msg:t+" - "+e+": "+r}),a.apply(f.win,[t,e,r])},f.write(e,function(){s(r,i),f.win.onerror=a,n.done(),f=null,h()}),f}.apply(void 0,t),e.afterStreamStart()}}function d(t,e,r){if(o.isFunction(r))r={done:r};else if("clear"===r)return p=[],f=null,void(l=0);r=o.defaults(r,a);var n=[t=/^#/.test(t)?window.document.getElementById(t.substr(1)):t.jquery?t[0]:t,e,r];return t.postscribe={cancel:function(){n.stream?n.stream.abort():n[1]=u}},r.beforeEnqueue(n),p.push(n),f||h(),t.postscribe}s(d,{streams:{},queue:p,WriteStream:c.default})},function(t,e,r){"use strict";e.__esModule=!0;var n,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=r(3),o=(n=i)&&n.__esModule?n:{default:n},a=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}}(r(4));var l="data-ps-",p="ps-style",f="ps-script";function c(t,e){var r=l+e,n=t.getAttribute(r);return a.existy(n)?String(n):n}function u(t,e,r){var n=2<arguments.length&&void 0!==r?r:null,i=l+e;a.existy(n)&&""!==n?t.setAttribute(i,n):t.removeAttribute(i)}var h=(d.prototype.write=function(){var t;for((t=this.writeQueue).push.apply(t,arguments);!this.deferredRemote&&this.writeQueue.length;){var e=this.writeQueue.shift();a.isFunction(e)?this._callFunction(e):this._writeImpl(e)}},d.prototype._callFunction=function(t){var e={type:"function",value:t.name||t.toString()};this._onScriptStart(e),t.call(this.win,this.doc),this._onScriptDone(e)},d.prototype._writeImpl=function(t){this.parser.append(t);for(var e=void 0,r=void 0,n=void 0,i=[];(e=this.parser.readToken())&&!(r=a.isScript(e))&&!(n=a.isStyle(e));)(e=this.options.beforeWriteToken(e))&&i.push(e);0<i.length&&this._writeStaticTokens(i),r&&this._handleScriptToken(e),n&&this._handleStyleToken(e)},d.prototype._writeStaticTokens=function(t){var e=this._buildChunk(t);return e.actual?(e.html=this.proxyHistory+e.actual,this.proxyHistory+=e.proxy,this.proxyRoot.innerHTML=e.html,this._walkChunk(),e):null},d.prototype._buildChunk=function(t){for(var e=this.actuals.length,r=[],n=[],i=[],o=t.length,a=0;a<o;a++){var s=t[a],c=s.toString();if(r.push(c),s.attrs){if(!/^noscript$/i.test(s.tagName)){var u=e++;n.push(c.replace(/(\/?>)/," "+l+"id="+u+" $1")),s.attrs.id!==f&&s.attrs.id!==p&&i.push("atomicTag"===s.type?"":"<"+s.tagName+" "+l+"proxyof="+u+(s.unary?" />":">"))}}else n.push(c),i.push("endTag"===s.type?c:"")}return{tokens:t,raw:r.join(""),actual:n.join(""),proxy:i.join("")}},d.prototype._walkChunk=function(){for(var t=void 0,e=[this.proxyRoot];a.existy(t=e.shift());){var r=1===t.nodeType;if(!r||!c(t,"proxyof")){r&&u(this.actuals[c(t,"id")]=t,"id");var n=t.parentNode&&c(t.parentNode,"proxyof");n&&this.actuals[n].appendChild(t)}e.unshift.apply(e,a.toArray(t.childNodes))}},d.prototype._handleScriptToken=function(t){var e=this,r=this.parser.clear();r&&this.writeQueue.unshift(r),t.src=t.attrs.src||t.attrs.SRC,(t=this.options.beforeWriteToken(t))&&(t.src&&this.scriptStack.length?this.deferredRemote=t:this._onScriptStart(t),this._writeScriptToken(t,function(){e._onScriptDone(t)}))},d.prototype._handleStyleToken=function(t){var e=this.parser.clear();e&&this.writeQueue.unshift(e),t.type=t.attrs.type||t.attrs.TYPE||"text/css",(t=this.options.beforeWriteToken(t))&&this._writeStyleToken(t),e&&this.write()},d.prototype._writeStyleToken=function(t){var e=this._buildStyle(t);this._insertCursor(e,p),t.content&&(e.styleSheet&&!e.sheet?e.styleSheet.cssText=t.content:e.appendChild(this.doc.createTextNode(t.content)))},d.prototype._buildStyle=function(t){var r=this.doc.createElement(t.tagName);return r.setAttribute("type",t.type),a.eachKey(t.attrs,function(t,e){r.setAttribute(t,e)}),r},d.prototype._insertCursor=function(t,e){this._writeImpl('<span id="'+e+'"/>');var r=this.doc.getElementById(e);r&&r.parentNode.replaceChild(t,r)},d.prototype._onScriptStart=function(t){t.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(t)},d.prototype._onScriptDone=function(t){t===this.scriptStack[0]?(this.scriptStack.shift(),this.write.apply(this,t.outerWrites),!this.scriptStack.length&&this.deferredRemote&&(this._onScriptStart(this.deferredRemote),this.deferredRemote=null)):this.options.error({msg:"Bad script nesting or script finished twice"})},d.prototype._writeScriptToken=function(t,e){var r=this._buildScript(t),n=this._shouldRelease(r),i=this.options.afterAsync;t.src&&(r.src=t.src,this._scriptLoadHandler(r,n?i:function(){e(),i()}));try{this._insertCursor(r,f),r.src&&!n||e()}catch(t){this.options.error(t),e()}},d.prototype._buildScript=function(t){var r=this.doc.createElement(t.tagName);return a.eachKey(t.attrs,function(t,e){r.setAttribute(t,e)}),t.content&&(r.text=t.content),r},d.prototype._scriptLoadHandler=function(e,r){function n(){e=e.onload=e.onreadystatechange=e.onerror=null}var i=this.options.error;function t(){n(),null!=r&&r(),r=null}function o(t){n(),i(t),null!=r&&r(),r=null}function a(t,e){var r=t["on"+e];null!=r&&(t["_on"+e]=r)}a(e,"load"),a(e,"error"),s(e,{onload:function(){if(e._onload)try{e._onload.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){o({msg:"onload handler failed "+t+" @ "+e.src})}t()},onerror:function(){if(e._onerror)try{e._onerror.apply(this,Array.prototype.slice.call(arguments,0))}catch(t){return void o({msg:"onerror handler failed "+t+" @ "+e.src})}o({msg:"remote script failed "+e.src})},onreadystatechange:function(){/^(loaded|complete)$/.test(e.readyState)&&t()}})},d.prototype._shouldRelease=function(t){return!/^script$/i.test(t.nodeName)||!!(this.options.releaseAsync&&t.src&&t.hasAttribute("async"))},d);function d(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),this.root=t,this.options=e,this.doc=t.ownerDocument,this.win=this.doc.defaultView||this.doc.parentWindow,this.parser=new o.default("",{autoFix:e.autoFix}),this.actuals=[t],this.proxyHistory="",this.proxyRoot=this.doc.createElement(t.nodeName),this.scriptStack=[],this.writeQueue=[],u(this.proxyRoot,"proxyof",0)}e.default=h},function(t,e,r){var n;n=function(){return i={},r.m=n=[function(t,e,r){"use strict";var n,i=r(1),o=(n=i)&&n.__esModule?n:{default:n};t.exports=o.default},function(t,e,r){"use strict";e.__esModule=!0;var n,a=u(r(2)),i=u(r(3)),o=r(6),s=(n=o)&&n.__esModule?n:{default:n},c=r(5);function u(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}var l={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p=(f.prototype.append=function(t){this.stream+=t},f.prototype.prepend=function(t){this.stream=t+this.stream},f.prototype._readTokenImpl=function(){var t=this._peekTokenImpl();if(t)return this.stream=this.stream.slice(t.length),t},f.prototype._peekTokenImpl=function(){for(var t in l)if(l.hasOwnProperty(t)&&l[t].test(this.stream)){var e=i[t](this.stream);if(e)return"startTag"===e.type&&/script|style/i.test(e.tagName)?null:(e.text=this.stream.substr(0,e.length),e)}},f.prototype.peekToken=function(){return this._peekToken()},f.prototype.readToken=function(){return this._readToken()},f.prototype.readTokens=function(t){for(var e=void 0;e=this.readToken();)if(t[e.type]&&!1===t[e.type](e))return},f.prototype.clear=function(){var t=this.stream;return this.stream="",t},f.prototype.rest=function(){return this.stream},f);function f(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),this.stream=e;var n=!1,i={};for(var o in a)a.hasOwnProperty(o)&&(r.autoFix&&(i[o+"Fix"]=!0),n=n||i[o+"Fix"]);n?(this._readToken=(0,s.default)(this,i,function(){return t._readTokenImpl()}),this._peekToken=(0,s.default)(this,i,function(){return t._peekTokenImpl()})):(this._readToken=this._readTokenImpl,this._peekToken=this._peekTokenImpl)}for(var h in(e.default=p).tokenToString=function(t){return t.toString()},p.escapeAttributes=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=(0,c.escapeQuotes)(t[r],null));return e},p.supports=a)a.hasOwnProperty(h)&&(p.browserHasFlaw=p.browserHasFlaw||!a[h]&&h)},function(t,e){"use strict";var r=!(e.__esModule=!0),n=!1,i=window.document.createElement("div");try{var o="<P><I></P></I>";i.innerHTML=o,e.tagSoup=r=i.innerHTML!==o}catch(t){e.tagSoup=r=!1}try{i.innerHTML="<P><i><P></P></i></P>",e.selfClose=n=2===i.childNodes.length}catch(t){e.selfClose=n=!1}i=null,e.tagSoup=r,e.selfClose=n},function(t,e,r){"use strict";e.__esModule=!0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.comment=function(t){var e=t.indexOf("--\x3e");if(0<=e)return new s.CommentToken(t.substr(4,e-1),e+3)},e.chars=function(t){var e=t.indexOf("<");return new s.CharsToken(0<=e?e:t.length)},e.startTag=i,e.atomicTag=function(t){var e=i(t);if(e){var r=t.slice(e.length);if(r.match(new RegExp("</\\s*"+e.tagName+"\\s*>","i"))){var n=r.match(new RegExp("([\\s\\S]*?)</\\s*"+e.tagName+"\\s*>","i"));if(n)return new s.AtomicTagToken(e.tagName,n[0].length+e.length,e.attrs,e.booleanAttrs,n[1])}}},e.endTag=function(t){var e=t.match(c.endTag);if(e)return new s.EndTagToken(e[1],e[0].length)};var s=r(4),c={startTag:/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/([\-A-Za-z0-9_]+)[^>]*>/,attr:/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,fillAttr:/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i};function i(t){var r,n,i;if(-1!==t.indexOf(">")){var e=t.match(c.startTag);if(e){var o=(r={},n={},i=e[2],e[2].replace(c.attr,function(t,e){arguments[2]||arguments[3]||arguments[4]||arguments[5]?arguments[5]?(r[arguments[5]]="",n[arguments[5]]=!0):r[e]=arguments[2]||arguments[3]||arguments[4]||c.fillAttr.test(e)&&e||"":r[e]="",i=i.replace(t,"")}),{v:new s.StartTagToken(e[1],e[0].length,r,n,!!e[3],i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))});if("object"===(void 0===o?"undefined":a(o)))return o.v}}}},function(t,e,r){"use strict";e.__esModule=!0,e.EndTagToken=e.AtomicTagToken=e.StartTagToken=e.TagToken=e.CharsToken=e.CommentToken=e.Token=void 0;var a=r(5);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}e.Token=function t(e,r){s(this,t),this.type=e,this.length=r,this.text=""},e.CommentToken=(n.prototype.toString=function(){return"\x3c!--"+this.content},n);function n(t,e){s(this,n),this.type="comment",this.length=e||(t?t.length:0),this.text="",this.content=t}e.CharsToken=(i.prototype.toString=function(){return this.text},i);function i(t){s(this,i),this.type="chars",this.length=t,this.text=""}var o=e.TagToken=(c.formatTag=function(t,e){var r=1<arguments.length&&void 0!==e?e:null,n="<"+t.tagName;for(var i in t.attrs)if(t.attrs.hasOwnProperty(i)){n+=" "+i;var o=t.attrs[i];void 0!==t.booleanAttrs&&void 0!==t.booleanAttrs[i]||(n+='="'+(0,a.escapeQuotes)(o)+'"')}return t.rest&&(n+=" "+t.rest),t.unary&&!t.html5Unary?n+="/>":n+=">",null!=r&&(n+=r+"</"+t.tagName+">"),n},c);function c(t,e,r,n,i){s(this,c),this.type=t,this.length=r,this.text="",this.tagName=e,this.attrs=n,this.booleanAttrs=i,this.unary=!1,this.html5Unary=!1}e.StartTagToken=(u.prototype.toString=function(){return o.formatTag(this)},u);function u(t,e,r,n,i,o){s(this,u),this.type="startTag",this.length=e,this.text="",this.tagName=t,this.attrs=r,this.booleanAttrs=n,this.html5Unary=!1,this.unary=i,this.rest=o}e.AtomicTagToken=(l.prototype.toString=function(){return o.formatTag(this,this.content)},l);function l(t,e,r,n,i){s(this,l),this.type="atomicTag",this.length=e,this.text="",this.tagName=t,this.attrs=r,this.booleanAttrs=n,this.unary=!1,this.html5Unary=!1,this.content=i}e.EndTagToken=(p.prototype.toString=function(){return"</"+this.tagName+">"},p);function p(t,e){s(this,p),this.type="endTag",this.length=e,this.text="",this.tagName=t}},function(t,e){"use strict";e.__esModule=!0,e.escapeQuotes=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return t?t.replace(/([^"]*)"/g,function(t,e){return/\\/.test(e)?e+'"':e+'\\"'}):e}},function(t,e){"use strict";e.__esModule=!0,e.default=function(r,n,e){var i=function(){var t=[];return t.last=function(){return this[this.length-1]},t.lastTagNameEq=function(t){var e=this.last();return e&&e.tagName&&e.tagName.toUpperCase()===t.toUpperCase()},t.containsTagName=function(t){for(var e,r=0;e=this[r];r++)if(e.tagName===t)return!0;return!1},t}(),o={startTag:function(t){var e=t.tagName;"TR"===e.toUpperCase()&&i.lastTagNameEq("TABLE")?(r.prepend("<TBODY>"),a()):n.selfCloseFix&&s.test(e)&&i.containsTagName(e)?i.lastTagNameEq(e)?u(r,i):(r.prepend("</"+t.tagName+">"),a()):t.unary||i.push(t)},endTag:function(t){i.last()?n.tagSoupFix&&!i.lastTagNameEq(t.tagName)?u(r,i):i.pop():n.tagSoupFix&&(e(),a())}};function a(){var t=function(t,e){var r=t.stream,n=c(e());return t.stream=r,n}(r,e);t&&o[t.type]&&o[t.type](t)}return function(){return a(),c(e())}};var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,s=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;function c(t){return t&&"startTag"===t.type&&(t.unary=r.test(t.tagName)||t.unary,t.html5Unary=!/\/>$/.test(t.text)),t}function u(t,e){var r=e.pop();t.prepend("</"+r.tagName+">")}}],r.c=i,r.p="",r(0);function r(t){if(i[t])return i[t].exports;var e=i[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,r),e.loaded=!0,e.exports}var n,i},t.exports=n()},function(t,e){"use strict";e.__esModule=!0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t){return null!=t}function o(t,e,r){var n=void 0,i=t&&t.length||0;for(n=0;n<i;n++)e.call(r,t[n],n)}function a(t,e,r){for(var n in t)t.hasOwnProperty(n)&&e.call(r,n,t[n])}function r(t,e){return!(!t||"startTag"!==t.type&&"atomicTag"!==t.type||!("tagName"in t))&&!!~t.tagName.toLowerCase().indexOf(e)}e.existy=i,e.isFunction=function(t){return"function"==typeof t},e.each=o,e.eachKey=a,e.defaults=function(r,t){return r=r||{},a(t,function(t,e){i(r[t])||(r[t]=e)}),r},e.toArray=function(r){try{return Array.prototype.slice.call(r)}catch(t){var e=function(){var e=[];return o(r,function(t){e.push(t)}),{v:e}}();if("object"===(void 0===e?"undefined":n(e)))return e.v}},e.last=function(t){return t[t.length-1]},e.isTag=r,e.isScript=function(t){return r(t,"script")},e.isStyle=function(t){return r(t,"style")}}],r.c=i,r.p="",r(0);function r(t){if(i[t])return i[t].exports;var e=i[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,r),e.loaded=!0,e.exports}var n,i},t.exports=n()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.newNativeAssetManager=function(o){var a,n=0;function s(t){var e;try{e=JSON.parse(t)}catch(t){console.log("Error parsing response from cache host: ".concat(t))}return e}function r(t){var e=t.uuid,r="".concat(function(t,e){var r=void 0===e||""===e?d:e;return"https://".concat(void 0===t||""===t?h:t).concat(r)}(t.cacheHost,t.cachePath),"?uuid=").concat(e);(0,l.sendRequest)(r,function(t){var e=s(t);if(e&&e.adm){var r=s(e.adm);if(r&&r.assets){var n=function(t){var e,r=[];return t.assets.forEach(function(t){t.img?f.image[t.img.type]?r.push({key:f.image[t.img.type],value:t.img.url}):console.log("ERROR: Invalid image type for image asset"):t.data?f.data[t.data.type]?r.push({key:f.data[t.data.type],value:t.data.value}):console.log("ERROR: Invalid data type for data asset"):t.title&&r.push({key:"title",value:t.title.text})}),t.link&&(t.link.clicktrackers&&(e=t.link.clicktrackers),r.push({key:"clickUrl",value:t.link.url})),{assets:r,clicktrackers:e,imptrackers:t.imptrackers}}(r),i=u(o.document.body.innerHTML,n);o.document.body.innerHTML=i,a&&a({clickTrackers:n.clicktrackers,impTrackers:n.imptrackers})}}})}function i(n){var i=[];return Object.keys(p).forEach(function(t){var e=p[t],r=n?"".concat(e,":").concat(n):"".concat(e);~o.document.body.innerHTML.indexOf(r)&&i.push(e)}),i}function c(t){var e={};try{e=JSON.parse(t.data)}catch(t){return void(10<n++&&o.removeEventListener("message",c))}if("assetResponse"===e.message){var r=u(o.document.body.innerHTML,e);o.document.body.innerHTML=r,a&&a(),o.removeEventListener("message",c)}}function u(t,e){var r=e.assets,n=e.adId,i=t;return(r||[]).forEach(function(t){var e=n?"".concat(p[t.key],":").concat(n):"".concat(p[t.key]);i=i.replace(e,t.value)}),i}return{loadAssets:function(t,e){var r=i(t);0<r.length&&(a=e,function(t,e){o.addEventListener("message",c,!1);var r={message:"Prebid Native",action:"assetRequest",adId:t,assets:e};o.parent.postMessage(JSON.stringify(r),"*")}(t,r))},loadMobileAssets:function(t,e){0<i().length&&(a=e,r(t))}}};var l=r(0),p={title:"hb_native_title",body:"hb_native_body",body2:"hb_native_body2",privacyLink:"hb_native_privacy",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",displayUrl:"hb_native_displayurl",cta:"hb_native_cta",rating:"hb_native_rating",address:"hb_native_address",downloads:"hb_native_downloads",likes:"hb_native_likes",phone:"hb_native_phone",price:"hb_native_price",salePrice:"hb_native_saleprice"},f={image:{1:"icon",3:"image"},data:{1:"sponsoredBy",2:"body",3:"rating",4:"likes",5:"downloads",6:"price",7:"salePrice",8:"phone",9:"address",10:"body2",11:"displayUrl",12:"cta"}},h="prebid.adnxs.com",d="/pbc/v1/cache"}]);