try{
var l=void 0,m=!0,n=null,p=!1;
function q(b){var a=typeof b;if("object"==a)if(b){if(b instanceof Array)return"array";if(b instanceof Object)return a;var c=Object.prototype.toString.call(b);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof b.length&&"undefined"!=typeof b.splice&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof b.call&&"undefined"!=typeof b.propertyIsEnumerable&&!b.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
a&&"undefined"==typeof b.call)return"object";return a}function aa(b,a){function c(){}c.prototype=a.prototype;b.q=a.prototype;b.prototype=new c}function ba(){return r.navigator?r.navigator.userAgent:n}
function s(b){var a;if(!(a=ca[b])){a=0;for(var c=(""+da).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=(""+b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=Math.max(c.length,e.length),d=0;0==a&&d<g;d++){var f=c[d]||"",h=e[d]||"",i=RegExp("(\\d*)(\\D*)","g"),j=RegExp("(\\d*)(\\D*)","g");do{var o=i.exec(f)||["","",""],k=j.exec(h)||["","",""];if(0==o[0].length&&0==k[0].length)break;a=((0==o[1].length?0:parseInt(o[1],10))<(0==k[1].length?0:parseInt(k[1],10))?-1:(0==o[1].length?0:parseInt(o[1],
10))>(0==k[1].length?0:parseInt(k[1],10))?1:0)||((0==o[2].length)<(0==k[2].length)?-1:(0==o[2].length)>(0==k[2].length)?1:0)||(o[2]<k[2]?-1:o[2]>k[2]?1:0)}while(0==a)}a=ca[b]=0<=a}return a}function t(b){return ea[b]||(ea[b]=v&&!!document.documentMode&&document.documentMode>=b)}function w(b){w[" "](b);return b}function x(){}
function fa(b){for(var a=0,c=arguments.length;a<c;++a){var e=arguments[a],g=q(e);"array"==g||"object"==g&&"number"==typeof e.length?fa.apply(n,e):e&&"function"==typeof e.g&&e.g()}}function y(b,a){this.type=b;this.a=this.c=a}function z(b,a){b&&this.init(b,a)}function A(){}
function ga(b,a,c,e,g){if(a){if("array"==q(a)){for(var d=0;d<a.length;d++)ga(b,a[d],c,e,g);return n}var e=!!e,f=B;a in f||(f[a]={b:0,e:0});f=f[a];e in f||(f[e]={b:0,e:0},f.b++);var f=f[e],h=b[C]||(b[C]=++D),i;f.e++;if(f[h]){i=f[h];for(d=0;d<i.length;d++)if(f=i[d],f.h==c&&f.l==g){if(f.f)break;return i[d].key}}else i=f[h]=[],f.b++;d=ha();d.src=b;f=new A;f.init(c,d,b,a,e,g);c=f.key;d.key=c;i.push(f);E[c]=f;F[h]||(F[h]=[]);F[h].push(f);b.addEventListener?(b==r||!b.n)&&b.addEventListener(a,d,e):b.attachEvent(a in
G?G[a]:G[a]="on"+a,d);return c}throw Error("k");}function ha(){var b=ia,a=ja?function(c){return b.call(a.src,a.key,c)}:function(c){c=b.call(a.src,a.key,c);if(!c)return c};return a}function ka(b,a,c,e){if(!e.i&&e.m){for(var g=0,d=0;g<e.length;g++)e[g].f?e[g].d.src=n:(g!=d&&(e[d]=e[g]),d++);e.length=d;e.m=p;0==d&&(delete B[b][a][c],B[b][a].b--,0==B[b][a].b&&(delete B[b][a],B[b].b--),0==B[b].b&&delete B[b])}}
function la(b,a,c,e,g){var d=1,a=a[C]||(a[C]=++D);if(b[a]){b.e--;b=b[a];b.i?b.i++:b.i=1;try{for(var f=b.length,h=0;h<f;h++){var i=b[h];i&&!i.f&&(d&=H(i,g)!==p)}}finally{b.i--,ka(c,e,a,b)}}return Boolean(d)}
function H(b,a){var c=b.handleEvent(a);if(b.a){var e=b.key;if(E[e]){var g=E[e];if(!g.f){var d=g.src,f=g.type,h=g.d,i=g.capture;d.removeEventListener?(d==r||!d.n)&&d.removeEventListener(f,h,i):d.detachEvent&&d.detachEvent(f in G?G[f]:G[f]="on"+f,h);d=d[C]||(d[C]=++D);h=B[f][i][d];if(F[d]){var j=F[d],o=ma(j,g);0<=o&&I.splice.call(j,o,1);0==j.length&&delete F[d]}g.f=m;h.m=m;ka(f,i,d,h);delete E[e]}}}return c}
function ia(b,a){if(!E[b])return m;var c=E[b],e=c.type,g=B;if(!(e in g))return m;var g=g[e],d,f;if(!ja){var h;if(!(h=a))a:{h=["window","event"];for(var i=r;d=h.shift();)if(i[d]!=n)i=i[d];else{h=n;break a}h=i}d=h;h=m in g;i=p in g;if(h){if(0>d.keyCode||d.returnValue!=l)return m;a:{var j=p;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(o){j=m}if(j||d.returnValue==l)d.returnValue=m}}j=new z;j.init(d,this);d=m;try{if(h){for(var k=[],L=j.a;L;L=L.parentNode)k.push(L);f=g[m];f.e=f.b;for(var u=k.length-1;!j.j&&
0<=u&&f.e;u--)j.a=k[u],d&=la(f,k[u],e,m,j);if(i){f=g[p];f.e=f.b;for(u=0;!j.j&&u<k.length&&f.e;u++)j.a=k[u],d&=la(f,k[u],e,p,j)}}else d=H(c,j)}finally{k&&(k.length=0),j.g()}return d}e=new z(a,this);try{d=H(c,e)}finally{e.g()}return d}function J(b,a){this.width=b;this.height=a}
function na(b){var a;a:{a=9==b.nodeType?b:b.ownerDocument||b.document;if(a.defaultView&&a.defaultView.getComputedStyle&&(a=a.defaultView.getComputedStyle(b,n))){a=a.display||a.getPropertyValue("display");break a}a=""}if("none"!=(a||(b.currentStyle?b.currentStyle.display:n)||b.style&&b.style.display))return oa(b);a=b.style;var c=a.display,e=a.visibility,g=a.position;a.visibility="hidden";a.position="absolute";a.display="inline";b=oa(b);a.display=c;a.position=g;a.visibility=e;return b}
function oa(b){var a=b.offsetWidth,c=b.offsetHeight,e=K&&!a&&!c;return(a===l||e)&&b.getBoundingClientRect?(a=b.getBoundingClientRect(),v&&(b=b.ownerDocument,a.left-=b.documentElement.clientLeft+b.body.clientLeft,a.top-=b.documentElement.clientTop+b.body.clientTop),new J(a.right-a.left,a.bottom-a.top)):new J(a,c)}
function pa(b){var a;if(!(a="mouseout"!=b.type)){var c=b;c||(c=window.event);a=window.document.body;if("mouseout"!=c.type)a=p;else{for(c=c.relatedTarget?c.relatedTarget:c.toElement;c&&c!=a&&!c.nodeName.match(/^html/i);)c=c.parentNode;a=!c||c.nodeName.match(/^html/i)}}a&&iframer&&(a=iframer.mouseEvent)&&a({type:b.type,timestamp:qa()})}var r=this,C="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36),D=0,qa=Date.now||function(){return+new Date};var I=Array.prototype,ma=I.indexOf?function(b,a,c){return I.indexOf.call(b,a,c)}:function(b,a,c){c=c==n?0:0>c?Math.max(0,b.length+c):c;if("string"==typeof b)return"string"!=typeof a||1!=a.length?-1:b.indexOf(a,c);for(;c<b.length;c++)if(c in b&&b[c]===a)return c;return-1};var M,N,O,P;P=O=N=M=p;var Q;if(Q=ba()){var ra=r.navigator;M=0==Q.indexOf("Opera");N=!M&&-1!=Q.indexOf("MSIE");O=!M&&-1!=Q.indexOf("WebKit");P=!M&&!O&&"Gecko"==ra.product}var sa=M,v=N,R=P,K=O,S;a:{var T="",U;if(sa&&r.opera)var V=r.opera.version,T="function"==typeof V?V():V;else if(R?U=/rv\:([^\);]+)(\)|;)/:v?U=/MSIE\s+([^\);]+)(\)|;)/:K&&(U=/WebKit\/(\S+)/),U)var ta=U.exec(ba()),T=ta?ta[1]:"";if(v){var W,ua=r.document;W=ua?ua.documentMode:l;if(W>parseFloat(T)){S=""+W;break a}}S=T}
var da=S,ca={},ea={};w[" "]=function $(){};!v||t(9);var ja=!v||t(9);v&&s("8");!K||s("528");R&&s("1.9b")||v&&s("8")||sa&&s("9.5")||K&&s("528");!R||s("8");x.prototype.k=p;x.prototype.g=function $a(){this.k||(this.k=m,this.d())};x.prototype.d=function $b(){this.o&&fa.apply(n,this.o)};aa(y,x);y.prototype.d=function $c(){delete this.type;delete this.c;delete this.a};y.prototype.j=p;y.prototype.p=m;aa(z,y);z.prototype.c=n;z.prototype.relatedTarget=n;z.prototype.clientX=0;z.prototype.clientY=0;z.prototype.init=function $d(a,c){var e=this.type=a.type;y.call(this,e);this.c=a.target||a.srcElement;this.a=c;var g=a.relatedTarget;if(g){if(R){var d;a:{try{w(g.nodeName);d=m;break a}catch(f){}d=p}d||(g=n)}}else"mouseover"==e?g=a.fromElement:"mouseout"==e&&(g=a.toElement);this.relatedTarget=g;this.clientX=a.clientX!==l?a.clientX:a.pageX;this.clientY=a.clientY!==l?a.clientY:a.pageY;delete this.p;delete this.j};
z.prototype.d=function $e(){z.q.d.call(this);this.relatedTarget=this.a=this.c=n};var va=0;A.prototype.key=0;A.prototype.f=p;A.prototype.a=p;A.prototype.init=function $f(a,c,e,g,d,f){if("function"==q(a))this.c=m;else if(a&&a.handleEvent&&"function"==q(a.handleEvent))this.c=p;else throw Error("j");this.h=a;this.d=c;this.src=e;this.type=g;this.capture=!!d;this.l=f;this.a=p;this.key=++va;this.f=p};A.prototype.handleEvent=function $g(a){return this.c?this.h.call(this.l||this.src,a):this.h.handleEvent.call(this.h,a)};var E={},B={},F={},G={};J.prototype.floor=function $h(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};!v||t(9);!R&&!v||v&&t(9)||R&&s("1.9.1");v&&s("9");var wa=function(b,a){var c=Array.prototype.slice.call(arguments,1);return function(){var a=Array.prototype.slice.call(arguments);a.unshift.apply(a,c);return b.apply(this,a)}}(function(b){ga(b,["mouseout","mouseover"],pa);window.__SSR&&window.__SSR.trackEventData&&iframer&&iframer.trackingEvent&&iframer.trackingEvent(window.__SSR.trackEventData);(b=b.getElementById("ozIdPlusoneBubbleContent"))&&iframes.resize({width:na(b).width})},window.document),X=["__initBubble"],Y=r;
!(X[0]in Y)&&Y.execScript&&Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)!X.length&&wa!==l?Y[Z]=wa:Y=Y[Z]?Y[Z]:Y[Z]={};
}catch(e){_DumpException(e)}

// Copyright 2002-2012 Google Inc.