;
(self.AMP=self.AMP||[]).push({m:0,v:"2203281422000",n:"amp-position-observer",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t,n){return(i=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,n)}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,i){if(i&&("object"===r(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function e(t,i){for(var n=[],r=0,s=0;s<t.length;s++){var e=t[s];i(e,s,t)?n.push(e):(r<s&&(t[r]=e),r++)}return r<t.length&&(t.length=r),n}Array.isArray;var o=Object.prototype;function u(t){return 1==(null==(i=t)?void 0:i.nodeType)?(t=t).tagName.toLowerCase()+(t.id?"#".concat(t.id):""):t;var i}function h(t,i,n,r,s,o,h,f,c,l,a){return function(t,i){var n,r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Assertion failed";if(i)return i;t&&-1==s.indexOf(t)&&(s+=t);for(var o=3,h=s.split("%s"),f=h.shift(),c=[f];h.length;){var l=arguments[o++],a=h.shift();f+=u(l)+a,c.push(l,a.trim())}var v=new Error(f);throw v.messageArray=e(c,(function(t){return""!==t})),null===(n=(r=self).__AMP_REPORT_ERROR)||void 0===n||n.call(r,v),v}("​​​",t,i,n,r,s,o,h,f,c,l,a)}function f(t){return h(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(null!=t?t:""),"Invalid length value: %s",t),t}o.hasOwnProperty,o.toString;var c="inside",l="bottom";function a(t,i,n,r){return{left:t,top:i,width:n,height:r,bottom:i+r,right:t+n,x:t,y:i}}function v(t,i){return t.top<i.top?"top":t.bottom>i.bottom?l:c}function p(t,i){return!(!t||!i)&&t.left==i.left&&t.top==i.top&&t.width==i.width&&t.height==i.height}var m=self.AMP_CONFIG||{},d=("string"==typeof m.thirdPartyFrameRegex?new RegExp(m.thirdPartyFrameRegex):m.thirdPartyFrameRegex,("string"==typeof m.cdnProxyRegex?new RegExp(m.cdnProxyRegex):m.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/);function b(t){if(!self.document||!self.document.head)return null;if(self.location&&d.test(self.location.origin))return null;var i=self.document.head.querySelector('meta[name="'.concat(t,'"]'));return i&&i.getAttribute("content")||null}m.thirdPartyUrl,m.thirdPartyFrameHost,m.cdnUrl||b("runtime-host"),m.errorReportingUrl,m.betaErrorReportingUrl,m.localDev,m.geoApiUrl||b("amp-geo-api"),self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var y=self.__AMP_LOG;function w(t,i){throw new Error("failed to call initLogConstructor")}function x(t){return y.user||(y.user=g()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(y.user.win,t)?y.userForEmbed||(y.userForEmbed=g()):y.user}function g(t){return w()}function R(t,i,n,r,s,e,o,u,h,f,c){return t}function j(t,i,n,r,s,e,o,u,h,f,c){return x().assert(t,i,n,r,s,e,o,u,h,f,c)}function O(t,i){return A(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function E(t,i){return A(F(S(t)),i)}function S(t){return t.nodeType?(n=t,i=(n.ownerDocument||n).defaultView,O(i,"ampdoc")).getAmpDoc(t):t;var i,n}function F(t){var i=S(t);return i.isSingleDoc()?i.win:i}function A(t,i){R(M(t,i));var n=I(t)[i];return n.obj||(R(n.ctor),R(n.context),n.obj=new n.ctor(n.context),R(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function I(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function M(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var $=function(t){return E(t,"viewport")},B=function(){function t(t,i,n,r){this.element=i,this.Ds=r,this.fidelity=n,this.turn=0==n?Math.floor(4*Math.random()):0,this.tA=null,this.Tu=$(t)}var i=t.prototype;return i.Ns=function(t){var i=this.tA;if(!(i&&p(i.positionRect,t.positionRect)&&p(i.viewportRect,t.viewportRect))){R(t.positionRect);var n,r,s=t.positionRect;t.relativePos=v(s,t.viewportRect),n=s,r=t.viewportRect,n.top<=r.bottom&&r.top<=n.bottom&&n.left<=r.right&&r.left<=n.right?(this.tA=t,this.Ds(t)):this.tA&&(this.tA=null,t.positionRect=null,this.Ds(t))}},i.update=function(t){var i=this;if(!t){if(0!=this.turn)return void this.turn--;0==this.fidelity&&(this.turn=4)}var n=this.Tu.getSize(),r=a(0,0,n.width,n.height);this.Tu.getClientRectAsync(this.element).then((function(t){i.Ns({positionRect:t,viewportRect:r,relativePos:null})}))},t}(),P=function(){function t(t){var i=this;this.qi=t,this.t=t.win,this.nA=[],this.Iu=O(this.t,"vsync"),this.Tu=$(t),this.Xg=[],this.rA=!1,this.iA=!1,this.eA=!1,this.aA=function(t,i,n){var r=0,s=0,e=null;function o(){r=0;var n,u=500-(t.Date.now()-s);u>0?r=t.setTimeout(o,u):(n=e,e=null,i.apply(null,n))}return function(){s=t.Date.now();for(var i=arguments.length,n=new Array(i),u=0;u<i;u++)n[u]=arguments[u];e=n,r||(r=t.setTimeout(o,500))}}(this.t,(function(){i.rA=!1}))}var i=t.prototype;return i.observe=function(t,i,n){var r=this,s=new B(this.qi,t,i,n);return this.nA.push(s),this.eA||this.sA(),s.update(),function(){for(var t=0;t<r.nA.length;t++)if(r.nA[t]==s)return void r.uA(t)}},i.unobserve=function(t){for(var i=0;i<this.nA.length;i++)if(this.nA[i].element==t)return void this.uA(i);(y.dev||(y.dev=w())).error("POSITION_OBSERVER","cannot unobserve unobserved element")},i.uA=function(t){this.nA.splice(t,1),0==this.nA.length&&this.oA()},i.sA=function(){var t=this;this.eA=!0,this.Xg.push(this.Tu.onScroll((function(){t.fA()}))),this.Xg.push(this.Tu.onResize((function(){t.cA()})))},i.oA=function(){for(this.eA=!1;this.Xg.length;)this.Xg.pop()()},i.updateAllEntries=function(t){for(var i=0;i<this.nA.length;i++)this.nA[i].update(t)},i.fA=function(){this.aA(),this.rA=!0,this.iA||this.lA()},i.cA=function(){this.updateAllEntries(!0)},i.lA=function(){var t=this;this.updateAllEntries(),this.iA=!0,this.rA?this.Iu.measure((function(){t.lA()})):this.iA=!1},t}();function T(t,i,n,r){var s={detail:n};if(Object.assign(s,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var e=t.document.createEvent("CustomEvent");return e.initCustomEvent(i,!!s.bubbles,!!s.cancelable,n),e}var q="amp-position-observer",z=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&i(t,n)}(u,t);var r,e,o=(r=u,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=n(r);if(e){var o=n(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return s(this,t)});function u(t){var i;return(i=o.call(this,t)).Ks=null,i.hr=null,i.Tu=null,i.xe=!1,i.sR=0,i.oR=0,i.hR="0",i.fR="0",i.cR=0,i.lR=0,i.ur=null,i.aR=null,i.vR=null,i.pR=0,i.mR=0,i.dR=!1,i.bR=!1,i}var p=u.prototype;return p.buildCallback=function(){this.getAmpDoc().whenFirstVisible().then(this.zo.bind(this)),this.dR=this.element.hasAttribute("once")},p.zo=function(){var t,i,n,r=this;this.pk(),this.Ks=(t=this.element,i="action",M(n=F(S(t)),i)?A(n,i):null),this.Tu=$(this.element),this.yR(),this.getAmpDoc().whenReady().then((function(){var t=r.wR();r.hr.observe(t,1,r.xR.bind(r))}))},p.gR=function(){var t="enter",i=T(this.win,"".concat(q,".").concat(t),{});this.Ks.trigger(this.element,t,i,1)},p.RR=function(){var t="exit",i=T(this.win,"".concat(q,".").concat(t),{});this.Ks.trigger(this.element,t,i,1)},p.jR=function(){var t=this.Tu.getScrollTop(),i={"start-scroll-offset":t,"end-scroll-offset":t+this.mR,"initial-inview-percent":this.pR},n="scroll",r=T(this.win,"".concat(q,".").concat(n),{"percent":this.pR,"positionObserverData":i});this.Ks.trigger(this.element,n,r,1)},p.xR=function(t){if(!this.dR||!this.bR){var i=this.xe,n=this.ur&&this.ur.height;this.OR(t),this.ur=t.viewportRect,n!=t.viewportRect.height&&this.ER();var r,s=this.SR(t.viewportRect),e=t.positionRect;e?(r=v(e,s),this.tl(e,s,r)):(this.xe=!1,r=t.relativePos),i&&!this.xe&&(this.pR=r==l?0:1,this.jR(),this.RR(),this.bR=!0),!i&&this.xe&&this.gR(),this.xe&&(this.FR(e,s),this.jR())}},p.tl=function(t,i,n){if(n!=c){var r="top"==n?this.sR:this.oR,s=t.height*r;this.xe=n==l?t.top<=i.bottom-s:t.bottom>=i.top+s}else this.xe=!0},p.FR=function(t,i){if(t){var n=t.height*this.oR+t.height*this.sR,r=i.height+t.height-n,s=Math.abs(t.top-this.cR-(i.height-t.height*this.oR));this.pR=s/r,this.mR=r-s}},p.pk=function(){var t=this.element.getAttribute("intersection-ratios");if(t){var i=t.trim().split(" ");this.sR=this.AR(i[0]),this.oR=this.sR,i[1]&&(this.oR=this.AR(i[1]))}var n=this.element.getAttribute("viewport-margins");if(n){var r=n.trim().split(" ");this.hR=r[0],this.fR=this.hR,r[1]&&(this.fR=r[1])}this.aR=this.element.getAttribute("target")},p.wR=function(){var t;return t=this.aR?x().assertElement(this.win.document.getElementById(this.aR),"No element found with id:"+this.aR):this.element.parentNode,this.win.document.body===t&&(t=this.win.document.documentElement),t},p.IR=function(t){var i,n,r,s=function(t){f(t);var i=/[a-z]+/i.exec(null!=t?t:"");return h(i,"Failed to read units from %s",t),i[0]}(t=f("number"==typeof(i=t)?i+"px":i&&/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(i)?/^\d+(\.\d+)?$/.test(i)?i+"px":i:void 0)),e="number"==typeof(n=r=parseFloat(t))&&isFinite(n)?r:void 0;return e?(j("px"==s||"vh"==s,"Only pixel or vh are valid as units for exclusion margins: "+t),"vh"==s&&(e=e/100*this.ur.height),e):0},p.AR=function(t){var i=parseFloat(t);return j(i>=0&&i<=1,"Ratios must be a decimal between 0 and 1: "+t),i},p.ER=function(){R(this.ur),R(this.fR),R(this.hR),this.cR=this.IR(this.hR),this.lR=this.IR(this.fR)},p.SR=function(t){return R(t),a(t.left,t.top+this.cR,t.width,t.height-this.lR-this.cR)},p.OR=function(t){this.vR||(this.vR=t.viewportRect.height);var i=this.vR-t.viewportRect.height,n=0;Math.abs(i)<150?n=i:this.vR=null,t.viewportRect=a(t.viewportRect.left,t.viewportRect.top,t.viewportRect.width,t.viewportRect.height+n)},p.yR=function(){var t,i,n,r;this.hr||(t=this.getAmpDoc(),i="position-observer",n=P,function(t,i,n,r,s,e){var o=I(t),u=o[n];u||(u=o[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),u.ctor||(u.ctor=r,u.context=i,u.sharedInstance=!1,u.resolve&&A(t,n))}(F(r=S(t)),r,i,n),this.hr=E(this.element,"position-observer"))},p.MR=function(){if(this.hr){var t=this.wR();this.hr.unobserve(t),this.hr=null}},u}(t.BaseElement);t.registerElement(q,z)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-position-observer-0.1.js.map