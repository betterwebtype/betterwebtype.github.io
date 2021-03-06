/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
 if ($('.content-slider').length > 0) { 
    // it exists 

!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
}
//# sourceMappingURL=hammer.min.js.map
/*eslint-env jquery*/
// If page is homepage
$(function () {
  if ($('body').is('.home')) {
    // Animate tutorial image on scroll + mobile fixed button behavior
    var el;
    var bottom;
    var h = window.innerHeight;

    $(window).on('load', function(){
      el = $('.bottom-cta-tag');
      bottom = el.position().top + el.outerHeight(true);
    });

    animateOnScroll('.lesson-img', 'slide-in-fwd-bottom', 1);

    $(window).on('scroll', function() {
      var y_scroll_pos = window.pageYOffset;
      var scrollBottom = y_scroll_pos + h - 60;

      if (scrollBottom >= bottom){
        $('#mobile-signup').removeClass('mobile-signup').addClass('animated infinite pulse');
      }

      if (scrollBottom < bottom){
        $('#mobile-signup').removeClass('animated infinite pulse').addClass('mobile-signup');
      }
    });

    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });

    slider('#slider1', 300);
  } // End of if statement
}); // End of homepage stuff

// If page is book page
$(function(){
  if($('body').is('.book-page')){

    // Animate example website image
    animateOnScroll('.lesson-img', 'slide-in-fwd-bottom', 1);
    
    // Animate author support
    animateOnScroll('.author-support', 'fadeIn', 0.5);

    // Animate author support
    animateOnScroll('.small-print', 'fadeIn', 2);

    // Animate book features
    animateChildrenOnScroll('.animate-features', 'fadeInUp', 0.3, 0.5);

    // Create sliders
    slider('#slider1', 300);
    slider('#slider2', 800);

    // Get avg. rating from Goodreads
    $.getJSON("https://www.goodreads.com/book/review_counts.json?key=3PvAjWBnUr2cpmwNLPf5jg&isbns=9781999809553", function( data ) {
      console.log(data);
    });
    // $(document).ready(function() {
    //   var $this = $(this);
    //   $.ajax({
    //     dataType: "json",
    //     // contentType: 'application/json',
    //     type: "GET",
    //     url: "https://www.goodreads.com/book/review_counts.json?key=3PvAjWBnUr2cpmwNLPf5jg&isbns=9781999809553",
    //     data: $this.serialize(),
    //     error: function (data) {
    //       var rating_html = '<picture class="floatLeft rating r-m-10px"><source srcset="assets/images/rating-4-5@2x.png 2x, assets/images/rating-4-5.png" media="(max-width: 450px)"><source srcset="assets/images/rating-4-5@2x.png 2x, assets/images/rating-4-5.png"><img src="assets/images/rating-4-5.png" alt="4.5 stars"></picture>'
    //       $('.rating-wrap').html(rating_html);
    //       $('.avg-rating').html(4.5);
    //       $('.ratings-count').html(55);
    //       console.log('error');
    //     },
    //     success: function (data) {
    //       var avg_rating = Math.round(data[0].average_rating * 10) / 10;
    //       var ratings_count = data[0].ratings_count;
    //       var output_rating;
    //       if (avg_rating >= 4.6) {
    //         output_rating = '5';
    //       } else if (avg_rating < 4.6 && avg_rating > 4.2 ) {
    //         output_rating = '4-5';
    //       } else if (avg_rating <= 4.2) {
    //         output_rating = '4';
    //       }
    //       var rating_html = '<picture class="floatLeft rating r-m-10px"><source srcset="assets/images/rating-' + output_rating + '@2x.png 2x, assets/images/rating-' + output_rating + '.png" media="(max-width: 450px)"><source srcset="assets/images/rating-' + output_rating + '@2x.png 2x, assets/images/rating-' + output_rating + '.png"><img src="assets/images/rating-' + output_rating + '.png" alt="' + avg_rating + ' stars"></picture>'
    //       $('.rating-wrap').html(rating_html);
    //       $('.avg-rating').html(avg_rating);
    //       $('.ratings-count').html(ratings_count);
    //       console.log('success');
    //     }
    //   });
    // });

    // Slider zoom functionality
    var wh = $(window).height();
    var ww = $(window).width();

    $('.slider-image').on('click', function () {
      if (ww >= 768) {
        $('#close').fadeIn();
        $('#slider1').addClass('fullscreen');
        // $('#slider.fullscreen ul').css('height', wh + 'px');
      }
    });

    $('#close').on('click', function () {
      $('#close').fadeOut();
      $('#slider1').removeClass('fullscreen');
      // $('#slider ul').css('height', 'auto');
    });
  }
}); // End of book page stuff

// If page has a form
$(function(){
  if($('body').is('.hasForm')){

// Get data from URL
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  var varEmail = getParameterByName('email');
  var varName = getParameterByName('name');
  var varSurname = getParameterByName('surname');
  var varReferral = getParameterByName('r');

  // Prefill form
  $('#FNAME').val(varName);
  $('#LNAME').val(varSurname);
  $('#EMAIL').val(varEmail);
  $('#REFERRAL').val(varReferral);

  // If referral URL, change source to 'REFERRAL'
  var refInput = $('#REFERRAL').val().length;

  if (refInput > 0){
    $('#JOINED').val('Referral');
    var refURL = '/sign-up?r=' + varReferral;
    $('#mobile-signup').attr('href', refURL);
  }

  // Determine the signup endpoint
  var signupURL;

  if (refInput > 0){
    signupURL = 'https://endpoint.betterwebtype.com/mc-end-point-referral.php';
  } else {
    signupURL = 'https://endpoint.betterwebtype.com/mc-end-point.php';
  }


  // Button spinner behavior
  var myButton = document.getElementById('myButton');

  myButton.addEventListener('click', function() {
    if ($('#FNAME').val().length === 0 || $('#LNAME').val().length === 0 || $('#EMAIL').val().length === 0) {
      $('#myButton').addClass('loading');
      setTimeout( function(){ $('#myButton').removeClass('loading'); }, 500);
    } else {
      $('#myButton').addClass('loading');
    }
  }, false);



  (function(window, document) {
    'use strict';

    // On form submit
    $(document).on('submit', 'form', function(e) {
      var $this = $(this);
      $.ajax({
        type: 'GET',
        url: signupURL,
        data: $this.serialize(),
        dataType: 'jsonp',
        contentType: 'application/json; charset=utf-8',
        error: function(err) {
          console.log(err);
          console.log('error');
          $('#msgContent').html('<h3>Oops!</h3><p>Something went wrong, please try again later. If the problem persists, try <a href="http://eepurl.com/ba-WxL">signing up here</a>.</p>');
          setTimeout( function(){ $('#myButton').removeClass('loading'); }, 500);
          $('#msg').fadeIn(300);
          if ( $('body').hasClass('triangle')){
            setTimeout(function(){$('.score').animate({
              scrollTop: $('#msgContent').offset().top
            }, 500); }, 400);
          } else {
            setTimeout(function(){$('html, body').animate({
              scrollTop: $('#msgContent').offset().top
            }, 500); }, 400);
          }
        },
        success: function(data) {
          if (data.status == 'pending' && data.merge_fields.JOINED == 'Sample'){
            if (varEmail == null) {
              window.location.href = 'almost-finished-sample';
            } else {
              return;
            }
          } else if (data.status == 'pending') {
            console.log(data);
            if (varEmail == null) {
              window.location.href = 'almost-finished';
            } else {
              return;
            }
          } else if (data.status == 'subscribed') {
            if (varEmail == null) {
              console.dir(data);
              window.location.href = 'thanks-subscribed';
            } else {
              return;
            }
          } else {
            console.log(data);
                  // console.log(data);
                  // var msg = data.msg;
                  // var msgReadable = msg.replace('0 -', '');
                  // $('#msgContent').html('<h3>Oops!</h3><p>' + msgReadable + '</p>');
                  $('#msgContent').html('<h3>Oops!</h3><p>Something went wrong.</p>');
                  $('#msg').fadeIn(300);
                  $('#myButton').removeClass('loading');
                }
              }
            });
      return false;
    });

  }(window, document));
  } // End of if statement
}); // End of form stuff

// Scroll to anchor
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

// Animate children on scroll
function animateChildrenOnScroll(parent, animation, delay, triggerDelay, trigger) {
  if (triggerDelay == null) {
    triggerDelay = 0
  }
  if (trigger == null) {
    trigger = parent;
  }
  if (delay == null) {
    delay = 0;
  }
  var triggerPoint;
  var scrollPosition;
  var children = $(parent).children();

  $(window).on('load', function () {
    triggerPoint = $(trigger).offset().top;
  });

  $(window).on('scroll', function () {
    scrollPosition = window.pageYOffset + window.innerHeight;

    if (scrollPosition > triggerPoint) {
      for (i = 0; i < children.length; i++) {
        var calculateDelay = triggerDelay + (i * delay) + 's';

        $(children[i]).css("animation-delay", calculateDelay).removeClass('o-0').addClass(animation);
      }
    }
  });
}

function animateChildren(parent, animation, delay) {
  var children = $(parent).children();

  for (i = 0; i < children.length; i++) {
    var calculateDelay = (i * delay) + 's';

    $(children[i]).css("animation-delay", calculateDelay).addClass(animation);
  }
}

function animateOnScroll(element, animation, triggerDelay, trigger) {
  if (trigger == null) {
    trigger = element;
  }

  // var triggerPoint = 0;
  var triggerPoint;
  var scrollPosition;

  $(window).on('load', function () {
    triggerPoint = $(trigger).offset().top;
  });

  $(window).on('scroll', function () {
    scrollPosition = window.pageYOffset + window.innerHeight;
    // console.log(scrollPosition);
    var calculateDelay = triggerDelay + 's';

    if (scrollPosition > triggerPoint) {
      $(element).css("animation-delay", calculateDelay).removeClass('o-0').addClass(animation);
    }
  });
}

// GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-36131831-5', 'auto');
ga('send', 'pageview');

// HOTJAR
// (function(h,o,t,j,a,r){
//       h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//       h._hjSettings={hjid:92378,hjsv:5};
//       a=o.getElementsByTagName('head')[0];
//       r=o.createElement('script');r.async=1;
//       r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//       a.appendChild(r);
//     })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
//   document.onkeydown = checkKey;

//   function checkKey(e) {
//     e = e || window.event;
//     if (e.keyCode == '37') {
//       moveRight();
//     }
//     else if (e.keyCode == '39') {
//       moveLeft();
//     }
//   };


function nextSlide(element, direction, sliderLength, animationSpeed) {
  var nextSlide;
  resetCurrentSlide(element);

  if (direction == 'next') {
    if (currentSlide + 1 == sliderLength) {
      nextSlide = 0;
      goToSlide(element, animationSpeed, nextSlide);
    } else {
      nextSlide = currentSlide + 1;
      goToSlide(element, animationSpeed, nextSlide);
    }
  } else if (direction == 'previous') {
    if (currentSlide == 0) {
      nextSlide = sliderLength - 1;
      goToSlide(element, animationSpeed, nextSlide);
    } else {
      nextSlide = currentSlide - 1;
      goToSlide(element, animationSpeed, nextSlide);
    }
  }
};

function goToSlide(element, animationSpeed, id) {
  if (id == null) {
    var id = event.srcElement.id;
  }
  var targetSlide = $(element + ' .slides').children();

  // Fade out children of current slide first
  animateChildren(element + ' .slides .active .slide-content', 'fadeOut', 0.3);

  // Update pager immediately
  $(element + ' .pager .active').removeClass();
  $(element + ' #' + id).addClass('active');

  // Wait [animation time] to remove the fadeOut classes
  setTimeout(function(){
    $(element + ' .slides .active .slide-content div').removeClass('fadeOut');
  }, animationSpeed)

  // Wait [animation time + 1ms] to add fadeIn classes
  setTimeout(function(){
    $(element + ' .slides .active').removeClass();
    // $(element + ' .slides .active .slide-content div').removeClass('fadeOut');
    
    $(targetSlide[id]).addClass('active');
    animateChildren(element + ' .slides .active .slide-content', 'fadeIn', 0.3);
  }, animationSpeed + 1);

  resetCurrentSlide(element);
};

function resetCurrentSlide(element) {
  currentSlide = parseInt($(element + ' .pager li.active').attr("id"));
};

function constructSliderNav(element, sliderLength) {

  $(element).append('<ul class="pager"></ul>');
  for (i = 0; i < sliderLength; i++) {
    if (i == 0) {
      $(element + ' ul.pager').append('<li id="' + i + '" class="active">' + i + '</li>');
      resetCurrentSlide(element);
    } else {
      $(element + ' ul.pager').append('<li id="' + i + '">' + i + '</li>');
    }
  }
};

function slider(element, animationSpeed) {
  var sliderLength = $(element + ' ul li').length;
  var currentSlide;

  constructSliderNav(element, sliderLength);

  $(element + ' ul.pager li').on('click', function (event) {
    goToSlide(element, animationSpeed);
  });

  $(element + ' .prev').on('click', function () {
    nextSlide(element, 'previous', sliderLength, animationSpeed);
  });

  $(element + ' .next').on('click', function () {
    nextSlide(element, 'next', sliderLength, animationSpeed);
  });

  // Swipe interactions for mobile
  var myElement = $(element)[0];
  
  var mc = new Hammer(myElement);

  mc.on("swipeleft", function() {
    nextSlide(element, 'next', sliderLength, animationSpeed);
  });

  mc.on("swiperight", function() {
    nextSlide(element, 'previous', sliderLength, animationSpeed);
  });
};