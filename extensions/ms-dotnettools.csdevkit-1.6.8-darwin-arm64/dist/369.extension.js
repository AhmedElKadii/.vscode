"use strict";exports.id=369,exports.ids=[369],exports.modules={26369:(e,n,t)=>{t.r(n),t.d(n,{BE_PROFILE:()=>y,NRT_PROFILE:()=>p,PostChannel:()=>pe,RT_PROFILE:()=>h});var i=t(27421),r=t(19252),a=t(89504),o=t(55028),u=t(85490),s=t(663),c=t(94266),l=t(34062),f=t(93541),d=t(49119),v=t(81399),h="REAL_TIME",p="NEAR_REAL_TIME",y="BEST_EFFORT",g="",m="POST",b="drop",S="requeue",T="application/x-json-stream",_="cache-control",x="content-type",w="kill-duration",R="time-delta-millis",k="client-version",E="client-id",K="time-delta-to-apply-millis",O="upload-time",P="apikey",C="AuthMsaDeviceTicket",M="AuthXToken",B="msfpc",A="trace",H="user";function L(e){var n=(e.ext||{}).intweb;return n&&(0,s.Sn)(n[B])?n[B]:null}function F(e){for(var n=null,t=0;null===n&&t<e.length;t++)n=L(e[t]);return n}var U=function(){function e(n,t){var i=t?[].concat(t):[],r=this,a=F(i);r.iKey=function(){return n},r.Msfpc=function(){return a||g},r.count=function(){return i.length},r.events=function(){return i},r.addEvent=function(e){return!!e&&(i.push(e),a||(a=L(e)),!0)},r.split=function(t,r){var o;if(t<i.length){var u=i.length-t;(0,c.le)(r)||(u=r<u?r:u),o=i.splice(t,u),a=F(i)}return new e(n,o)}}return e.create=function(n,t){return new e(n,t)},e}();const q=function(){function e(){var n=!0,t=!0,i=!0,a="use-collector-delta",o=!1;(0,r.Z)(e,this,(function(e){e.allowRequestSending=function(){return n},e.firstRequestSent=function(){i&&(i=!1,o||(n=!1))},e.shouldAddClockSkewHeaders=function(){return t},e.getClockSkewHeaderValue=function(){return a},e.setClockSkew=function(e){o||(e?(a=e,t=!0,o=!0):t=!1,n=!0)}}))}return e.__ieDyn=1,e}(),z=function(){function e(){var n={};(0,r.Z)(e,this,(function(e){e.setKillSwitchTenants=function(e,t){if(e&&t)try{var i=(o=e.split(","),u=[],o&&(0,c.tO)(o,(function(e){u.push((0,c.nd)(e))})),u);if("this-request-only"===t)return i;for(var r=1e3*parseInt(t,10),a=0;a<i.length;++a)n[i[a]]=(0,c.m6)()+r}catch(e){return[]}var o,u;return[]},e.isTenantKilled=function(e){var t=n,i=(0,c.nd)(e);return void 0!==t[i]&&t[i]>(0,c.m6)()||(delete t[i],!1)}}))}return e.__ieDyn=1,e}();var j=t(1550);function D(e){var n,t=Math.floor(1200*Math.random())+2400;return n=Math.pow(2,e)*t,Math.min(n,6e5)}var I,N=2e6,J=Math.min(N,65e3),X="metadata",Q="f",W=/\./,V=function(){function e(n,t,i,o){var u="data",l="baseData",f=!!o,d=t,v={};(0,r.Z)(e,this,(function(e){function t(e,n,r,a,o,u,l){(0,c.rW)(e,(function(e,h){var p=null;if(h||(0,s.Sn)(h)){var y=r,g=e,m=o,b=n;if(f&&!a&&W.test(e)){var S=e.split("."),T=S.length;if(T>1){m&&(m=m.slice());for(var _=0;_<T-1;_++){var x=S[_];b=b[x]=b[x]||{},y+="."+x,m&&m.push(x)}g=S[T-1]}}var w=a&&function(e,n){var t=v[e];return void 0===t&&(e.length>=7&&(t=(0,c.xe)(e,"ext.metadata")||(0,c.xe)(e,"ext.web")),v[e]=t),t}(y);if(p=!w&&d&&d.handleField(y,g)?d.value(y,g,h,i):(0,s.yj)(g,h,i)){var R=p.value;if(b[g]=R,u&&u(m,g,p),l&&"object"==typeof R&&!(0,c.kJ)(R)){var k=m;k&&(k=k.slice()).push(g),t(h,R,y+"."+g,a,k,u,l)}}}}))}e.createPayload=function(e,n,t,i,r,a){return{apiKeys:[],payloadBlob:g,overflow:null,sizeExceed:[],failedEvts:[],batches:[],numEvents:0,retryCnt:e,isTeardown:n,isSync:t,isBeacon:i,sendType:a,sendReason:r}},e.appendPayload=function(t,i,r){var o=t&&i&&!t.overflow;return o&&(0,a.Lm)(n,(function(){return"Serializer:appendPayload"}),(function(){for(var n=i.events(),a=t.payloadBlob,o=t.numEvents,u=!1,s=[],l=[],f=t.isBeacon,d=f?65e3:3984588,v=f?J:N,h=0,p=0;h<n.length;){var y=n[h];if(y){if(o>=r){t.overflow=i.split(h);break}var g=e.getEventBlob(y);if(g&&g.length<=v){var m=g.length;if(a.length+m>d){t.overflow=i.split(h);break}a&&(a+="\n"),a+=g,++p>20&&(a.substr(0,1),p=0),u=!0,o++}else g?s.push(y):l.push(y),n.splice(h,1),h--}h++}if(s&&s.length>0&&t.sizeExceed.push(U.create(i.iKey(),s)),l&&l.length>0&&t.failedEvts.push(U.create(i.iKey(),l)),u){t.batches.push(i),t.payloadBlob=a,t.numEvents=o;var b=i.iKey();-1===(0,c.UA)(t.apiKeys,b)&&t.apiKeys.push(b)}}),(function(){return{payload:t,theBatch:{iKey:i.iKey(),evts:i.events()},max:r}})),o},e.getEventBlob=function(e){try{return(0,a.Lm)(n,(function(){return"Serializer.getEventBlob"}),(function(){var n={};n.name=e.name,n.time=e.time,n.ver=e.ver,n.iKey="o:"+(0,s.jM)(e.iKey);var i={},r=e.ext;r&&(n.ext=i,(0,c.rW)(r,(function(e,n){t(n,i[e]={},"ext."+e,!0,null,null,!0)})));var a=n[u]={};a.baseType=e.baseType;var o=a[l]={};return t(e.baseData,o,l,!1,[l],(function(e,n,t){Z(i,e,n,t)}),!0),t(e.data,a,u,!1,[],(function(e,n,t){Z(i,e,n,t)}),!0),JSON.stringify(n)}),(function(){return{item:e}}))}catch(e){return null}}}))}return e.__ieDyn=1,e}();function Z(e,n,t,i){if(i&&e){var r=(0,s.Vv)(i.value,i.kind,i.propertyType);if(r>-1){var a=e[X];a||(a=e[X]={f:{}});var o=a[Q];if(o||(o=a[Q]={}),n)for(var u=0;u<n.length;u++){var l=n[u];o[l]||(o[l]={f:{}});var f=o[l][Q];f||(f=o[l][Q]={}),o=f}o=o[t]={},(0,c.kJ)(i.value)?o.a={t:r}:o.t=r}}}var Y="sendAttempt",$="&NoResponseBody=true",G=((I={})[1]=S,I[100]=S,I[200]="sent",I[8004]=b,I[8003]=b,I),ee={},ne={};function te(e,n,t){ee[e]=n,!1!==t&&(ne[n]=e)}function ie(e){try{return e.responseText}catch(e){}return g}function re(e,n){var t=!1;if(e&&n){var i=(0,c.FY)(e);if(i&&i.length>0)for(var r=n.toLowerCase(),a=0;a<i.length;a++){var o=i[a];if(o&&(0,c.nr)(n,o)&&o.toLowerCase()===r){t=!0;break}}}return t}function ae(e,n,t,i){n&&t&&t.length>0&&(i&&ee[n]?(e.hdrs[ee[n]]=t,e.useHdrs=!0):e.url+="&"+n+"="+t)}function oe(e,n){return n&&((0,c.hj)(n)?e=[n].concat(e):(0,c.kJ)(n)&&(e=n.concat(e))),e}te(C,C,!1),te(k,k),te(E,"Client-Id"),te(P,P),te(K,K),te(O,O),te(M,M);var ue=function(){function e(n,t,i,o,u){this._responseHandlers=[];var f,v,h,p,y,S,C,M,A,H,L="?cors=true&"+x.toLowerCase()+"="+T,F=new z,U=!1,I=new q,N=!1,J=0,X=!0,Q=[],W={},Z=[],ee=null,te=!1,ue=!1,se=!1;(0,r.Z)(e,this,(function(e){var r=!0;function q(e,n){for(var t=0,i=null,r=0;null==i&&r<e.length;)1===(t=e[r])?(0,l.cp)()?i=z:(0,l.Z3)()&&(i=le):2===t&&(0,l.JO)(n)&&(!n||n&&!M)?i=ce:N&&3===t&&(0,l.MF)()&&(i=de),r++;return i?{_transport:t,_isSync:n,sendPOST:i}:null}function z(e,n,t){var i=new XDomainRequest;i.open(m,e.urlString),e.timeout&&(i.timeout=e.timeout),i.onload=function(){var e=ie(i);fe(n,200,{},e),xe(e)},i.onerror=function(){fe(n,400,{})},i.ontimeout=function(){fe(n,500,{})},i.onprogress=function(){},t?i.send(e.data):u.set((function(){i.send(e.data)}),0)}function ce(e,n,t){var i,a=e.urlString,o=!1,s=!1,l=((i={body:e.data,method:m}).Microsoft_ApplicationInsights_BypassAjaxInstrumentation=!0,i);t&&(l.keepalive=!0,2===e._sendReason&&(o=!0,H&&(a+=$))),r&&(l.credentials="include"),e.headers&&(0,c.FY)(e.headers).length>0&&(l.headers=e.headers),fetch(a,l).then((function(e){var t={},i=g,r=e.headers;r&&r.forEach((function(e,n){t[n]=e})),e.body&&e.text().then((function(e){i=e})),s||(s=!0,fe(n,e.status,t,i),xe(i))})).catch((function(e){s||(s=!0,fe(n,0,{}))})),o&&!s&&(s=!0,fe(n,200,{})),!s&&e.timeout>0&&u.set((function(){s||(s=!0,fe(n,500,{}))}),e.timeout)}function le(e,n,t){var i=e.urlString;function a(e,n,t){if(!e[t]&&n&&n.getResponseHeader){var i=n.getResponseHeader(t);i&&(e[t]=(0,c.nd)(i))}return e}function o(e,t){fe(n,e.status,function(e){var n={};return e.getAllResponseHeaders?n=function(e){var n={};if((0,c.HD)(e)){var t=(0,c.nd)(e).split(/[\r\n]+/);(0,c.tO)(t,(function(e){if(e){var t=e.indexOf(": ");if(-1!==t){var i=(0,c.nd)(e.substring(0,t)).toLowerCase(),r=(0,c.nd)(e.substring(t+1));n[i]=r}else n[(0,c.nd)(e)]=1}}))}return n}(e.getAllResponseHeaders()):(n=a(n,e,R),n=a(n,e,w),n=a(n,e,"kill-duration-seconds")),n}(e),t)}t&&e.disableXhrSync&&(t=!1);var u=(0,s.ot)(m,i,r,!0,t,e.timeout);(0,c.rW)(e.headers,(function(e,n){u.setRequestHeader(e,n)})),u.onload=function(){var e=ie(u);o(u,e),xe(e)},u.onerror=function(){o(u)},u.ontimeout=function(){o(u)},u.send(e.data)}function fe(e,n,t,i){try{e(n,t,i)}catch(e){(0,d.kP)(v,2,518,(0,l.eU)(e))}}function de(e,n,t){var i=200,r=e._thePayload,a=e.urlString+(H?$:g);try{var o=(0,l.jW)();if(!o.sendBeacon(a,e.data))if(r){var u=[];(0,c.tO)(r.batches,(function(e){if(u&&e&&e.count()>0){for(var n=e.events(),t=0;t<n.length;t++)if(!o.sendBeacon(a,ee.getEventBlob(n[t]))){u.push(e.split(t));break}}else u.push(e.split(0))})),we(u,8003,r.sendType,!0)}else i=0}catch(e){(0,d.jV)(v,"Failed to send telemetry using sendBeacon API. Ex:"+(0,l.eU)(e)),i=0}finally{fe(n,i,{},g)}}function ve(e){return 2===e||3===e}function he(e){return ue&&ve(e)&&(e=2),e}function pe(){return!U&&J<t}function ye(){var e=Z;return Z=[],e}function ge(e,n,t){var i=!1;return e&&e.length>0&&!U&&h[n]&&ee&&(i=0!==n||pe()&&(t>0||I.allowRequestSending())),i}function me(e){var n={};return e&&(0,c.tO)(e,(function(e,t){n[t]={iKey:e.iKey(),evts:e.events()}})),n}function be(e,t,i,r,o){if(e&&0!==e.length)if(U)we(e,1,r);else{r=he(r);try{var u=e,c=0!==r;(0,a.Lm)(p,(function(){return"HttpManager:_sendBatches"}),(function(a){a&&(e=e.slice(0));for(var u=[],l=null,f=(0,s.hK)(),d=h[r]||(c?h[1]:h[0]),v=d&&d._transport,p=A&&(ue||ve(r)||3===v||d._isSync&&2===v);ge(e,r,t);){var y=e.shift();y&&y.count()>0&&(F.isTenantKilled(y.iKey())?u.push(y):(l=l||ee.createPayload(t,i,c,p,o,r),ee.appendPayload(l,y,n)?null!==l.overflow&&(e=[l.overflow].concat(e),l.overflow=null,Te(l,f,(0,s.hK)(),o),f=(0,s.hK)(),l=null):(Te(l,f,(0,s.hK)(),o),f=(0,s.hK)(),e=[y].concat(e),l=null)))}l&&Te(l,f,(0,s.hK)(),o),e.length>0&&(Z=e.concat(Z)),we(u,8004,r)}),(function(){return{batches:me(u),retryCount:t,isTeardown:i,isSynchronous:c,sendReason:o,useSendBeacon:ve(r),sendType:r}}),!c)}catch(e){(0,d.kP)(v,2,48,"Unexpected Exception sending batch: "+(0,l.eU)(e))}}}function Se(e,n,t){e[n]=e[n]||{},e[n][f.identifier]=t}function Te(n,t,r,o){if(n&&n.payloadBlob&&n.payloadBlob.length>0){var u=!!e.sendHook,y=h[n.sendType];!ve(n.sendType)&&n.isBeacon&&2===n.sendReason&&(y=h[2]||h[3]||y);var m=se;(n.isBeacon||3===y._transport)&&(m=!1);var b=function(e,n){var t={url:L,hdrs:{},useHdrs:!1};n?(t.hdrs=(0,s.l7)(t.hdrs,W),t.useHdrs=(0,c.FY)(t.hdrs).length>0):(0,c.rW)(W,(function(e,n){ne[e]?ae(t,ne[e],n,!1):(t.hdrs[e]=n,t.useHdrs=!0)})),ae(t,E,"NO_AUTH",n),ae(t,k,s.vs,n);var i=g;(0,c.tO)(e.apiKeys,(function(e){i.length>0&&(i+=","),i+=e})),ae(t,P,i,n),ae(t,O,(0,c.m6)().toString(),n);var r=function(e){for(var n=0;n<e.batches.length;n++){var t=e.batches[n].Msfpc();if(t)return encodeURIComponent(t)}return g}(e);if((0,s.Sn)(r)&&(t.url+="&ext.intweb.msfpc="+r),I.shouldAddClockSkewHeaders()&&ae(t,K,I.getClockSkewHeaderValue(),n),p.getWParam){var a=p.getWParam();a>=0&&(t.url+="&w="+a)}for(var o=0;o<Q.length;o++)t.url+="&"+Q[o].name+"="+Q[o].value;return t}(n,m);m=m||b.useHdrs;var B=(0,s.hK)();(0,a.Lm)(p,(function(){return"HttpManager:_doPayloadSend"}),(function(){for(var h=0;h<n.batches.length;h++)for(var g=n.batches[h].events(),k=0;k<g.length;k++){var E=g[k];if(te){var K=E.timings=E.timings||{};Se(K,"sendEventStart",B),Se(K,"serializationStart",t),Se(K,"serializationCompleted",r)}E[Y]>0?E[Y]++:E[Y]=1}we(n.batches,1e3+(o||0),n.sendType,!0);var O={data:n.payloadBlob,urlString:b.url,headers:b.hdrs,_thePayload:n,_sendReason:o,timeout:S,disableXhrSync:C,disableFetchKeepAlive:M};m&&(re(O.headers,_)||(O.headers[_]="no-cache, no-store"),re(O.headers,x)||(O.headers[x]=T));var P=null;y&&(P=function(t){I.firstRequestSent();var r=function(t,r){!function(n,t,r,a){var o,u=9e3,l=null,d=!1,v=!1;try{var h=!0;if(typeof n!==j.jA){if(t){I.setClockSkew(t[R]);var p=t[w]||t["kill-duration-seconds"];(0,c.tO)(F.setKillSwitchTenants(t["kill-tokens"],p),(function(e){(0,c.tO)(r.batches,(function(n){if(n.iKey()===e){l=l||[];var t=n.split(0);r.numEvents-=t.count(),l.push(t)}}))}))}if(200==n||204==n)return void(u=200);((o=n)>=300&&o<500&&408!=o&&429!=o||501==o||505==o||r.numEvents<=0)&&(h=!1),u=9e3+n%1e3}if(h){u=100;var y=r.retryCnt;0===r.sendType&&(y<i?(d=!0,_e((function(){0===r.sendType&&J--,be(r.batches,y+1,r.isTeardown,ue?2:r.sendType,5)}),ue,D(y))):(v=!0,ue&&(u=8001)))}}finally{d||(I.setClockSkew(),function(n,t,i,r){try{r&&f._backOffTransmission(),200===t&&(r||n.isSync||f._clearBackOff(),function(e){if(te){var n=(0,s.hK)();(0,c.tO)(e,(function(e){e&&e.count()>0&&function(e,n){te&&(0,c.tO)(e,(function(e){Se(e.timings=e.timings||{},"sendEventCompleted",n)}))}(e.events(),n)}))}}(n.batches)),we(n.batches,t,n.sendType,!0)}finally{0===n.sendType&&(J--,5!==i&&e.sendQueuedRequests(n.sendType,i))}}(r,u,a,v)),we(l,8004,r.sendType)}}(t,r,n,o)},a=n.isTeardown||n.isSync;try{y.sendPOST(t,r,a),e.sendListener&&e.sendListener(O,t,a,n.isBeacon)}catch(e){(0,d.jV)(v,"Unexpected exception sending payload. Ex:"+(0,l.eU)(e)),fe(r,0,{})}}),(0,a.Lm)(p,(function(){return"HttpManager:_doPayloadSend.sender"}),(function(){if(P)if(0===n.sendType&&J++,u&&!n.isBeacon&&3!==y._transport){var t={data:O.data,urlString:O.urlString,headers:(0,s.l7)({},O.headers),timeout:O.timeout,disableXhrSync:O.disableXhrSync,disableFetchKeepAlive:O.disableFetchKeepAlive},i=!1;(0,a.Lm)(p,(function(){return"HttpManager:_doPayloadSend.sendHook"}),(function(){try{e.sendHook(t,(function(e){i=!0,X||e._thePayload||(e._thePayload=e._thePayload||O._thePayload,e._sendReason=e._sendReason||O._sendReason),P(e)}),n.isSync||n.isTeardown)}catch(e){i||P(O)}}))}else P(O)}))}),(function(){return{thePayload:n,serializationStart:t,serializationCompleted:r,sendReason:o}}),n.isSync)}n.sizeExceed&&n.sizeExceed.length>0&&we(n.sizeExceed,8003,n.sendType),n.failedEvts&&n.failedEvts.length>0&&we(n.failedEvts,8002,n.sendType)}function _e(e,n,t){n?e():u.set(e,t)}function xe(n){var t=e._responseHandlers;try{for(var i=0;i<t.length;i++)try{t[i](n)}catch(e){(0,d.kP)(v,1,519,"Response handler failed: "+e)}if(n){var r=JSON.parse(n);(0,s.Sn)(r.webResult)&&(0,s.Sn)(r.webResult[B])&&y.set("MSFPC",r.webResult[B],31536e3)}}catch(e){}}function we(e,n,t,i){if(e&&e.length>0&&o){var r=o[(c=n,l=G[c],(0,s.Sn)(l)||(l="oth",c>=9e3&&c<=9999?l="rspFail":c>=8e3&&c<=8999?l=b:c>=1e3&&c<=1999&&(l="send")),l)];if(r){var u=0!==t;(0,a.Lm)(p,(function(){return"HttpManager:_sendBatchesNotification"}),(function(){_e((function(){try{r.call(o,e,n,u,t)}catch(e){(0,d.kP)(v,1,74,"send request notification failed: "+e)}}),i||u,0)}),(function(){return{batches:me(e),reason:n,isSync:u,sendSync:i,sendType:t}}),!u)}}var c,l}e.initialize=function(e,n,t,i,a){var o;a||(a={}),L=e+L,se=!!(0,c.o8)(a.avoidOptions)||!a.avoidOptions,p=n,y=n.getCookieMgr(),te=!p.config.disableEventTimings;var u=!!p.config.enableCompoundKey;v=(f=t).diagLog();var s=a.valueSanitizer,g=a.stringifyObjects;(0,c.o8)(a.enableCompoundKey)||(u=!!a.enableCompoundKey),S=a.xhrTimeout,C=!!a.disableXhrSync,M=!!a.disableFetchKeepAlive,H=!1!==a.addNoResponse,N=!(0,l.b$)(),ee=new V(p,s,g,u),(0,c.le)(a.useSendBeacon)||(N=!!a.useSendBeacon);var m=i,b=a.alwaysUseXhrOverride?i:null,T=a.alwaysUseXhrOverride?i:null,_=[3,2];if(!i){X=!1;var x=(0,l.k$)();x&&x.protocol&&"file:"===x.protocol.toLowerCase()&&(r=!1);var w=[];(0,l.b$)()?(w=[2,1],_=[2,1,3]):w=[1,2,3],(i=q(w=oe(w,a.transports),!1))||(0,d.jV)(v,"No available transport to send events"),m=q(w,!0)}b||(b=q(_=oe(_,a.unloadTransports),!0)),A=!X&&(N&&(0,l.MF)()||!M&&(0,l.JO)(!0)),(o={})[0]=i,o[1]=m||q([1,2,3],!0),o[2]=b||m||q([1],!0),o[3]=T||q([2,3],!0)||m||q([1],!0),h=o},e._getDbgPlgTargets=function(){return[h[0],F,ee,h]},e.addQueryStringParameter=function(e,n){for(var t=0;t<Q.length;t++)if(Q[t].name===e)return void(Q[t].value=n);Q.push({name:e,value:n})},e.addHeader=function(e,n){W[e]=n},e.canSendRequest=function(){return pe()&&I.allowRequestSending()},e.sendQueuedRequests=function(e,n){(0,c.o8)(e)&&(e=0),ue&&(e=he(e),n=2),ge(Z,e,0)&&be(ye(),0,!1,e,n||0)},e.isCompletelyIdle=function(){return!U&&0===J&&0===Z.length},e.setUnloading=function(e){ue=e},e.addBatch=function(e){if(e&&e.count()>0){if(F.isTenantKilled(e.iKey()))return!1;Z.push(e)}return!0},e.teardown=function(){Z.length>0&&be(ye(),0,!0,2,2)},e.pause=function(){U=!0},e.resume=function(){U=!1,e.sendQueuedRequests(0,4)},e.sendSynchronousBatch=function(e,n,t){e&&e.count()>0&&((0,c.le)(n)&&(n=1),ue&&(n=he(n),t=2),be([e],0,!1,n,t||0))}}))}return e.__ieDyn=1,e}();function se(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout(e,n,t)}function ce(e){clearTimeout(e)}function le(e,n){return{set:e||se,clear:n||ce}}var fe="eventsDiscarded",de="overrideInstrumentationKey",ve="maxEventRetryAttempts",he="maxUnloadEventRetryAttempts";const pe=function(e){function n(){var t,i=e.call(this)||this;i.identifier="PostChannel",i.priority=1011,i.version="3.2.16";var v,g,m,b,S,T,_,x=!1,w=[],R=null,k=!1,E=0,K=500,O=0,P=1e4,M={},B=h,L=null,F=null,q=0,z=0,j={},I=-1,N=!0,J=!1,X=6,Q=2;return(0,r.Z)(n,i,(function(e,n){function i(e){"beforeunload"!==(e||(0,l.Jj)().event).type&&(J=!0,g.setUnloading(J)),ne(2,2)}function r(e){J=!1,g.setUnloading(J)}function W(e,n){if(e.sendAttempt||(e.sendAttempt=0),e.latency||(e.latency=1),e.ext&&e.ext[A]&&delete e.ext[A],e.ext&&e.ext[H]&&e.ext[H].id&&delete e.ext[H].id,N&&(s.if,e.ext=(0,c.Ax)(e.ext),e.baseData&&(e.baseData=(0,c.Ax)(e.baseData)),e.data&&(e.data=(0,c.Ax)(e.data))),e.sync)if(q||k)e.latency=3,e.sync=!1;else if(g)return N&&(e=(0,c.Ax)(e)),void g.sendSynchronousBatch(U.create(e.iKey,[e]),!0===e.sync?1:e.sync,3);var t=e.latency,i=O,r=P;4===t&&(i=E,r=K);var a=!1;if(i<r)a=!re(e,n);else{var o=1,u=20;4===t&&(o=4,u=1),a=!0,function(e,n,t,i){for(;t<=n;){var r=te(e,n,!0);if(r&&r.count()>0){var a=r.split(0,i),o=a.count();if(o>0)return 4===t?E-=o:O-=o,be(fe,[a],f.h.QueueFull),!0}t++}return ae(),!1}(e.iKey,e.latency,o,u)&&(a=!re(e,n))}a&&me(fe,[e],f.h.QueueFull)}function V(e,n,t){var i=oe(e,n,t);return g.sendQueuedRequests(n,t),i}function Z(){return O>0}function Y(){if(I>=0&&oe(I,0,S)&&g.sendQueuedRequests(0,S),E>0&&!F&&!k){var e=M[B][2];e>=0&&(F=G((function(){F=null,V(4,0,1),Y()}),e))}var n=M[B][1];!L&&!R&&n>=0&&!k&&(Z()?L=G((function(){L=null,V(0===z?3:1,0,1),z++,z%=2,Y()}),n):z=0)}function $(){t=null,x=!1,w=[],R=null,k=!1,E=0,K=500,O=0,P=1e4,M={},B=h,L=null,F=null,q=0,z=0,v=null,j={},m=void 0,b=0,I=-1,S=null,N=!0,J=!1,X=6,Q=2,T=null,_=le(),g=new ue(500,2,1,{requeue:ye,send:Se,sent:Te,drop:_e,rspFail:xe,oth:we},_),pe(),j[4]={batches:[],iKeyMap:{}},j[3]={batches:[],iKeyMap:{}},j[2]={batches:[],iKeyMap:{}},j[1]={batches:[],iKeyMap:{}},Re()}function G(e,n){0===n&&q&&(n=1);var t=1e3;return q&&(t=D(q-1)),_.set(e,n*t)}function ee(){return null!==L&&(_.clear(L),L=null,z=0,!0)}function ne(e,n){ee(),R&&(_.clear(R),R=null),k||V(1,e,n)}function te(e,n,t){var i=j[n];i||(i=j[n=1]);var r=i.iKeyMap[e];return!r&&t&&(r=U.create(e),i.batches.push(r),i.iKeyMap[e]=r),r}function ie(n,t){g.canSendRequest()&&!q&&(m>0&&O>m&&(t=!0),t&&null==R&&e.flush(n,null,20))}function re(e,n){N&&(e=(0,c.Ax)(e));var t=e.latency,i=te(e.iKey,t,!0);return!!i.addEvent(e)&&(4!==t?(O++,n&&0===e.sendAttempt&&ie(!e.sync,b>0&&i.count()>=b)):E++,!0)}function ae(){for(var e=0,n=0,t=function(t){var i=j[t];i&&i.batches&&(0,c.tO)(i.batches,(function(i){4===t?e+=i.count():n+=i.count()}))},i=1;i<=4;i++)t(i);O=n,E=e}function oe(n,t,i){var r=!1,o=0===t;return!o||g.canSendRequest()?(0,a.Lm)(e.core,(function(){return"PostChannel._queueBatches"}),(function(){for(var e=[],t=4;t>=n;){var i=j[t];i&&i.batches&&i.batches.length>0&&((0,c.tO)(i.batches,(function(n){g.addBatch(n)?r=r||n&&n.count()>0:e=e.concat(n.events()),4===t?E-=n.count():O-=n.count()})),i.batches=[],i.iKeyMap={}),t--}e.length>0&&me(fe,e,f.h.KillSwitch),r&&I>=n&&(I=-1,S=0)}),(function(){return{latency:n,sendType:t,sendReason:i}}),!o):(I=I>=0?Math.min(I,n):n,S=Math.max(S,i)),r}function se(e,n){V(1,0,n),ae(),ce((function(){e&&e(),w.length>0?R=G((function(){R=null,se(w.shift(),n)}),0):(R=null,Y())}))}function ce(e){g.isCompletelyIdle()?e():R=G((function(){R=null,ce(e)}),.25)}function pe(){(M={})[h]=[2,1,0],M[p]=[6,3,0],M[y]=[18,9,0]}function ye(n,t){var i=[],r=X;J&&(r=Q),(0,c.tO)(n,(function(n){n&&n.count()>0&&(0,c.tO)(n.events(),(function(n){n&&(n.sync&&(n.latency=4,n.sync=!1),n.sendAttempt<r?((0,s.if)(n,e.identifier),W(n,!1)):i.push(n))}))})),i.length>0&&me(fe,i,f.h.NonRetryableStatus),J&&ne(2,2)}function ge(n,t){var i=e._notificationManager||{},r=i[n];if(r)try{r.apply(i,t)}catch(t){(0,d.kP)(e.diagLog(),1,74,n+" notification failed: "+t)}}function me(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];n&&n.length>0&&ge(e,[n].concat(t))}function be(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];n&&n.length>0&&(0,c.tO)(n,(function(n){n&&n.count()>0&&ge(e,[n.events()].concat(t))}))}function Se(e,n,t){e&&e.length>0&&ge("eventsSendRequest",[n>=1e3&&n<=1999?n-1e3:0,!0!==t])}function Te(e,n){be("eventsSent",e,n),Y()}function _e(e,n){be(fe,e,n>=8e3&&n<=8999?n-8e3:f.h.Unknown)}function xe(e){be(fe,e,f.h.NonRetryableStatus),Y()}function we(e,n){be(fe,e,f.h.Unknown),Y()}function Re(){b=t&&t.disableAutoBatchFlushLimit?0:Math.max(1500,P/6)}$(),e._getDbgPlgTargets=function(){return[g]},e.initialize=function(l,f,d){(0,a.Lm)(f,(function(){return"PostChannel:initialize"}),(function(){var a=f;n.initialize(l,f,d);try{f.addUnloadCb,T=(0,o.jU)((0,u.J)(e.identifier),f.evtNamespace&&f.evtNamespace());var h=e._getTelCtx();l.extensionConfig[e.identifier]=l.extensionConfig[e.identifier]||{},t=h.getExtCfg(e.identifier),_=le(t.setTimeoutOverride,t.clearTimeoutOverride),N=!t.disableOptimizeObj&&(0,s.mJ)(),function(e){var n=e.getWParam;e.getWParam=function(){var e=0;return t.ignoreMc1Ms0CookieProcessing&&(e|=2),e|n()}}(a),t.eventsLimitInMem>0&&(P=t.eventsLimitInMem),t.immediateEventLimit>0&&(K=t.immediateEventLimit),t.autoFlushEventsLimit>0&&(m=t.autoFlushEventsLimit),(0,c.hj)(t[ve])&&(X=t[ve]),(0,c.hj)(t[he])&&(Q=t[he]),Re(),t.httpXHROverride&&t.httpXHROverride.sendPOST&&(v=t.httpXHROverride),(0,s.Sn)(l.anonCookieName)&&g.addQueryStringParameter("anoncknm",l.anonCookieName),g.sendHook=t.payloadPreprocessor,g.sendListener=t.payloadListener;var p=t.overrideEndpointUrl?t.overrideEndpointUrl:l.endpointUrl;e._notificationManager=f.getNotifyMgr(),g.initialize(p,e.core,e,v,t);var y=l.disablePageUnloadEvents||[];(0,o.c9)(i,y,T),(0,o.TJ)(i,y,T),(0,o.nD)(r,l.disablePageShowEvents,T)}catch(n){throw e.setInitialized(!1),n}}),(function(){return{coreConfig:l,core:f,extensions:d}}))},e.processTelemetry=function(n,i){(0,s.if)(n,e.identifier);var r=(i=e._getTelCtx(i)).getExtCfg(e.identifier),a=!!t.disableTelemetry;r&&(a=a||!!r.disableTelemetry);var o=n;a||x||(t[de]&&(o.iKey=t[de]),r&&r[de]&&(o.iKey=r[de]),W(o,!0),J?ne(2,2):Y()),e.processNext(o,i)},e._doTeardown=function(e,n){ne(2,2),x=!0,g.teardown(),(0,o.JA)(null,T),(0,o.C9)(null,T),(0,o.Yl)(null,T),$()},e.setEventQueueLimits=function(e,n){P=e>0?e:1e4,m=n>0?n:0,Re();var t=O>e;if(!t&&b>0)for(var i=1;!t&&i<=3;i++){var r=j[i];r&&r.batches&&(0,c.tO)(r.batches,(function(e){e&&e.count()>=b&&(t=!0)}))}ie(!0,t)},e.pause=function(){ee(),k=!0,g.pause()},e.resume=function(){k=!1,g.resume(),Y()},e.addResponseHandler=function(e){g._responseHandlers.push(e)},e._loadTransmitProfiles=function(e){ee(),pe(),B=h,Y(),(0,c.rW)(e,(function(e,n){var t=n.length;if(t>=2){var i=t>2?n[2]:0;if(n.splice(0,t-2),n[1]<0&&(n[0]=-1),n[1]>0&&n[0]>0){var r=n[0]/n[1];n[0]=Math.ceil(r)*n[1]}i>=0&&n[1]>=0&&i>n[1]&&(i=n[1]),n.push(i),M[e]=n}}))},e.flush=function(e,n,t){if(void 0===e&&(e=!0),!k)if(t=t||1,e)null==R?(ee(),oe(1,0,t),R=G((function(){R=null,se(n,t)}),0)):w.push(n);else{var i=ee();V(1,1,t),null!=n&&n(),i&&Y()}},e.setMsaAuthTicket=function(e){g.addHeader(C,e)},e.hasEvents=Z,e._setTransmitProfile=function(e){B!==e&&void 0!==M[e]&&(ee(),B=e,Y())},e._backOffTransmission=function(){q<4&&(q++,ee(),Y())},e._clearBackOff=function(){q&&(q=0,ee(),Y())},(0,c.l_)(e,"_setTimeoutOverride",(function(){return _.set}),(function(e){_=le(e,_.clear)})),(0,c.l_)(e,"_clearTimeoutOverride",(function(){return _.clear}),(function(e){_=le(_.set,e)}))})),i}return(0,i.ne)(n,e),n.__ieDyn=1,n}(v.i)}};
// SIG // Begin signature block
// SIG // MIImKwYJKoZIhvcNAQcCoIImHDCCJhgCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // 5nPLyP7geogejqZQhXtRMiKwgNc+duAdCl4ZJfpqBk2g
// SIG // ggt2MIIE/jCCA+agAwIBAgITMwAABVbJICsfdDJdLQAA
// SIG // AAAFVjANBgkqhkiG9w0BAQsFADB+MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBT
// SIG // aWduaW5nIFBDQSAyMDEwMB4XDTIzMTAxOTE5NTExMVoX
// SIG // DTI0MTAxNjE5NTExMVowdDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEeMBwGA1UEAxMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // ltpIPPc1p7LIgxvQBav7MapD0+N1eDGer8LuwuPrJcuO
// SIG // kCQOFDcUkZxg8/bvH9fDkdfwK/YLkA6kbYazjpLS2qJe
// SIG // PR2X7/JdQxHgf7oLlktKhSCXvnCum+4K1X5dEme1PMjl
// SIG // 7uu5+ds/kCTfolMXCJNClnLv7CWfCn3sCsZzQzAyBx4V
// SIG // B7yI0FobysTiwv08C9IuME8pF7kMG8CGbrhou02APNkN
// SIG // i5GDi5cDkzzm9HqMIXFCOwml5VN9CIKBuH62PprWTGZ0
// SIG // 8dIGv2t+hlTXaujXgSs5RmywdNv1iD/nOQAwwl7IXlqZ
// SIG // IsybfWj4c2LqJ7fjcdDoSB9OJSRbwqo5YwIDAQABo4IB
// SIG // fTCCAXkwHwYDVR0lBBgwFgYKKwYBBAGCNz0GAQYIKwYB
// SIG // BQUHAwMwHQYDVR0OBBYEFCbfBYUBcF+4OQP9HpQ8ZI8M
// SIG // PNnaMFQGA1UdEQRNMEukSTBHMS0wKwYDVQQLEyRNaWNy
// SIG // b3NvZnQgSXJlbGFuZCBPcGVyYXRpb25zIExpbWl0ZWQx
// SIG // FjAUBgNVBAUTDTIzMDg2NSs1MDE2NTUwHwYDVR0jBBgw
// SIG // FoAU5vxfe7siAFjkck619CF0IzLm76wwVgYDVR0fBE8w
// SIG // TTBLoEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraS9jcmwvcHJvZHVjdHMvTWljQ29kU2lnUENBXzIw
// SIG // MTAtMDctMDYuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggr
// SIG // BgEFBQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L3BraS9jZXJ0cy9NaWNDb2RTaWdQQ0FfMjAxMC0wNy0w
// SIG // Ni5jcnQwDAYDVR0TAQH/BAIwADANBgkqhkiG9w0BAQsF
// SIG // AAOCAQEAQp2ZaDMYxwVRyRD+nftLexAyXzQdIe4/Yjl+
// SIG // i0IjzHUAFdcagOiYG/1RD0hFbNO+ggCZ9yj+Saa+Azrq
// SIG // NdgRNgqArrGQx5/u2j9ssZ4DBhkHCSs+FHzswzEvWK9r
// SIG // Jd0enzD9fE+AnubeyGBSt+jyPx37xzvAMwd09CoVSIn6
// SIG // rEsGfJhLpMP8IuHbiWLpWMVdpWNpDB8L/zirygLK03d9
// SIG // /B5Z7kfs/TWb0rTVItWvLE8HBDKxD/JYLaMWmXtGKbvz
// SIG // oZ+D6k3nxFVikCS1Nihciw5KGpg3XtMnQM8x2BKnQUDF
// SIG // tIMVsryfX44BfwtjykFbv9EjAYXMKNOHhc3/8O6WfzCC
// SIG // BnAwggRYoAMCAQICCmEMUkwAAAAAAAMwDQYJKoZIhvcN
// SIG // AQELBQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xMjAwBgNV
// SIG // BAMTKU1pY3Jvc29mdCBSb290IENlcnRpZmljYXRlIEF1
// SIG // dGhvcml0eSAyMDEwMB4XDTEwMDcwNjIwNDAxN1oXDTI1
// SIG // MDcwNjIwNTAxN1owfjELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEo
// SIG // MCYGA1UEAxMfTWljcm9zb2Z0IENvZGUgU2lnbmluZyBQ
// SIG // Q0EgMjAxMDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC
// SIG // AQoCggEBAOkOZFB5Z7XE4/0JAEyelKz3VmjqRNjPxVhP
// SIG // qaV2fG1FutM5krSkHvn5ZYLkF9KP/UScCOhlk84sVYS/
// SIG // fQjjLiuoQSsYt6JLbklMaxUH3tHSwokecZTNtX9LtK8I
// SIG // 2MyI1msXlDqTziY/7Ob+NJhX1R1dSfayKi7VhbtZP/iQ
// SIG // tCuDdMorsztG4/BGScEXZlTJHL0dxFViV3L4Z7klIDTe
// SIG // XaallV6rKIDN1bKe5QO1Y9OyFMjByIomCll/B+z/Du2A
// SIG // EjVMEqa+Ulv1ptrgiwtId9aFR9UQucboqu6Lai0FXGDG
// SIG // tCpbnCMcX0XjGhQebzfLGTOAaolNo2pmY3iT1TDPlR8C
// SIG // AwEAAaOCAeMwggHfMBAGCSsGAQQBgjcVAQQDAgEAMB0G
// SIG // A1UdDgQWBBTm/F97uyIAWORyTrX0IXQjMubvrDAZBgkr
// SIG // BgEEAYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8EBAMC
// SIG // AYYwDwYDVR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBTV
// SIG // 9lbLj+iiXGJo0T2UkFvXzpoYxDBWBgNVHR8ETzBNMEug
// SIG // SaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtp
// SIG // L2NybC9wcm9kdWN0cy9NaWNSb29DZXJBdXRfMjAxMC0w
// SIG // Ni0yMy5jcmwwWgYIKwYBBQUHAQEETjBMMEoGCCsGAQUF
// SIG // BzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
// SIG // L2NlcnRzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIzLmNy
// SIG // dDCBnQYDVR0gBIGVMIGSMIGPBgkrBgEEAYI3LgMwgYEw
// SIG // PQYIKwYBBQUHAgEWMWh0dHA6Ly93d3cubWljcm9zb2Z0
// SIG // LmNvbS9QS0kvZG9jcy9DUFMvZGVmYXVsdC5odG0wQAYI
// SIG // KwYBBQUHAgIwNB4yIB0ATABlAGcAYQBsAF8AUABvAGwA
// SIG // aQBjAHkAXwBTAHQAYQB0AGUAbQBlAG4AdAAuIB0wDQYJ
// SIG // KoZIhvcNAQELBQADggIBABp071dPKXvEFoV4uFDTIvwJ
// SIG // nayCl/g0/yosl5US5eS/z7+TyOM0qduBuNweAL7SNW+v
// SIG // 5X95lXflAtTx69jNTh4bYaLCWiMa8IyoYlFFZwjjPzwe
// SIG // k/gwhRfIOUCm1w6zISnlpaFpjCKTzHSY56FHQ/JTrMAP
// SIG // MGl//tIlIG1vYdPfB9XZcgAsaYZ2PVHbpjlIyTdhbQfd
// SIG // UxnLp9Zhwr/ig6sP4GubldZ9KFGwiUpRpJpsyLcfShoO
// SIG // aanX3MF+0Ulwqratu3JHYxf6ptaipobsqBBEm2O2smmJ
// SIG // BsdGhnoYP+jFHSHVe/kCIy3FQcu/HUzIFu+xnH/8IktJ
// SIG // im4V46Z/dlvRU3mRhZ3V0ts9czXzPK5UslJHasCqE5XS
// SIG // jhHamWdeMoz7N4XR3HWFnIfGWleFwr/dDY+Mmy3rtO7P
// SIG // J9O1Xmn6pBYEAackZ3PPTU+23gVWl3r36VJN9HcFT4XG
// SIG // 2Avxju1CCdENduMjVngiJja+yrGMbqod5IXaRzNij6TJ
// SIG // kTNfcR5Ar5hlySLoQiElihwtYNk3iUGJKhYP12E8lGhg
// SIG // Uu/WR5mggEDuFYF3PpzgUxgaUB04lZseZjMTJzkXeIc2
// SIG // zk7DX7L1PUdTtuDl2wthPSrXkizON1o+QEIxpB8QCMJW
// SIG // nL8kXVECnWp50hfT2sGUjgd7JXFEqwZq5tTG3yOalnXF
// SIG // MYIaDTCCGgkCAQEwgZUwfjELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEoMCYGA1UEAxMfTWljcm9zb2Z0IENvZGUgU2lnbmlu
// SIG // ZyBQQ0EgMjAxMAITMwAABVbJICsfdDJdLQAAAAAFVjAN
// SIG // BglghkgBZQMEAgEFAKCBrjAZBgkqhkiG9w0BCQMxDAYK
// SIG // KwYBBAGCNwIBBDAcBgorBgEEAYI3AgELMQ4wDAYKKwYB
// SIG // BAGCNwIBFTAvBgkqhkiG9w0BCQQxIgQg/l9wEuNed2wN
// SIG // zD8eCViShukapuc4XoJwoYBb3Ypr0jQwQgYKKwYBBAGC
// SIG // NwIBDDE0MDKgFIASAE0AaQBjAHIAbwBzAG8AZgB0oRqA
// SIG // GGh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbTANBgkqhkiG
// SIG // 9w0BAQEFAASCAQAff9p4Fw1CuEN0EYLsT/8JCR3Beycd
// SIG // B7BPfPUDHaPCqJr+p9pvScRVmm98Yvjd5lOQRjXIeu6P
// SIG // tYuj/Tyrst/JOOcltWL3BsqxO2KUxDFiJNekNyr2wDhD
// SIG // RjEXYQKEKtLsE1J8IcIiBLajeOeE4VSjqUHkbe8BIWOa
// SIG // fsDwKN9g9k7sH4sUmQowlmP6ZaYKYaqUdCox4+LfZBQE
// SIG // QsZeHve7sMLwadZQbyTn51/MFg4UmyR9ZmE78xby0Xw3
// SIG // JfAu4cY7PHy7bgxT8hYDNJa5Jna44ep+9z081NspG0ah
// SIG // IkTvqgrgeOcQF0ZREnWcuyIBFk3bz38Zg31iNHfA5tTN
// SIG // UHQHoYIXlzCCF5MGCisGAQQBgjcDAwExgheDMIIXfwYJ
// SIG // KoZIhvcNAQcCoIIXcDCCF2wCAQMxDzANBglghkgBZQME
// SIG // AgEFADCCAVIGCyqGSIb3DQEJEAEEoIIBQQSCAT0wggE5
// SIG // AgEBBgorBgEEAYRZCgMBMDEwDQYJYIZIAWUDBAIBBQAE
// SIG // IPDqjJw/3EYIJp2XN2MMcap7Sg+aozJYcdteryYiwbEs
// SIG // AgZmRjrBi68YEzIwMjQwNTIwMTk1MTIwLjEzOVowBIAC
// SIG // AfSggdGkgc4wgcsxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJTAj
// SIG // BgNVBAsTHE1pY3Jvc29mdCBBbWVyaWNhIE9wZXJhdGlv
// SIG // bnMxJzAlBgNVBAsTHm5TaGllbGQgVFNTIEVTTjo5NjAw
// SIG // LTA1RTAtRDk0NzElMCMGA1UEAxMcTWljcm9zb2Z0IFRp
// SIG // bWUtU3RhbXAgU2VydmljZaCCEe0wggcgMIIFCKADAgEC
// SIG // AhMzAAAB74k/VqFYzKjaAAEAAAHvMA0GCSqGSIb3DQEB
// SIG // CwUAMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMT
// SIG // HU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMB4X
// SIG // DTIzMTIwNjE4NDU0OFoXDTI1MDMwNTE4NDU0OFowgcsx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJTAjBgNVBAsTHE1pY3Jv
// SIG // c29mdCBBbWVyaWNhIE9wZXJhdGlvbnMxJzAlBgNVBAsT
// SIG // Hm5TaGllbGQgVFNTIEVTTjo5NjAwLTA1RTAtRDk0NzEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoC
// SIG // ggIBAKMLWOKfDOAfCE5qRmrLXugTgEgEqybmRfgNSYIF
// SIG // YjSUVWkSIrmZnYqHn2ygvieznamEUxBgYbmTKkKKm6eD
// SIG // A/02hvhUZUTpqgyjmFn03K1dHllGBv1nw1HoSYsogJGE
// SIG // PiyiM8yD9GcZFNx1/v9Ni/IzXSMuOYvIoR6Awd+8jA+Y
// SIG // z4A/uHNAt8TEN2oIna7rgZ3leWesU6S7lT2Ms4qTXLvR
// SIG // z5PC3Tj9Euqu6/V8Y/wuZia0e+sHhNwGwANdKZwWOHRW
// SIG // BCRfjNcXCqcgbyuBj7MOolhA1k/w7VijiRJyQdPjdcLS
// SIG // gzjTJ7b72X+tNiIMUzeeVl7aOG06QYI7oaqJOnnTEj0h
// SIG // OkleLS8R6TwB6NPg8owQ7Zs/FTrenre5luN03kv6WAhw
// SIG // I0wI0jRIiilLiBpVHhLL8igO/W8Nal74jbz8rLyNZN55
// SIG // 3Q7cfE8kxmpfhAHcjoOfBmseIqfqgTfy2AFMIIAq8Shg
// SIG // 5ODuvaUXQi5u3/f5U+8q1MJRtk8U4byNm32roAWh2W9C
// SIG // e2KiVghi2pKsvJcBAiVcaFniA1y/h2/VgCKWdtYD0Kyd
// SIG // iH44oQWv/jDgzr2Uj7Jqhncv+39R9elP/7JzuFL8WiVy
// SIG // asYUlMFiVLicTVy4puXBn9Q4bbpIuEM41ZcZkMowko3n
// SIG // eg4tJKTiV1HQeWxtPiF4uVaU4SUlAgMBAAGjggFJMIIB
// SIG // RTAdBgNVHQ4EFgQU7UxaooXCsJu2vD0/wDrdsBVInMsw
// SIG // HwYDVR0jBBgwFoAUn6cVXQBeYl2D9OXSZacbUzUZ6XIw
// SIG // XwYDVR0fBFgwVjBUoFKgUIZOaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraW9wcy9jcmwvTWljcm9zb2Z0JTIw
// SIG // VGltZS1TdGFtcCUyMFBDQSUyMDIwMTAoMSkuY3JsMGwG
// SIG // CCsGAQUFBwEBBGAwXjBcBggrBgEFBQcwAoZQaHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraW9wcy9jZXJ0cy9N
// SIG // aWNyb3NvZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIwMjAx
// SIG // MCgxKS5jcnQwDAYDVR0TAQH/BAIwADAWBgNVHSUBAf8E
// SIG // DDAKBggrBgEFBQcDCDAOBgNVHQ8BAf8EBAMCB4AwDQYJ
// SIG // KoZIhvcNAQELBQADggIBABgZlrdoIO51uT0RV2Q/zFxA
// SIG // Zm4gAg9HH0rUIDu5HMG3zR8LRpaS5hiFAy8cclEdShtI
// SIG // zhTDfM3t8cQ3yGFoENv01FoacVZ20fGYn14zPommfoqI
// SIG // jKL1Tk6DtAJNkyXXufbDh512rm+2TitFY5W+mIMEYkBE
// SIG // qJdYH27aLHRYfYQwUYeqMiGNZReE+BHgLo0oU1ce9a9d
// SIG // 5wnZZesme+9AZcB80kYRMlkalHjWdQ3eKN+IJKMUPFqY
// SIG // Y+zLmJi73Tge/265Jdh3mbQnF/ZY0lJeQ8aU2Gs7buk/
// SIG // GBPXXWbIBHrVLdLaFznvbM33KgkQ5sT3xXLkoQzdlfnd
// SIG // wt583zUXUL2n9wAqQTq71XqvLKX+pKDG7VSp45kK0b+J
// SIG // odIoyjEzsyrhIwWw9P/yJ453AKVilzDQKNl7koHHbEtr
// SIG // gHWd4WJvwnz+BKiyMx0XeceLIfHVh51kO3FJKB6B4myL
// SIG // R9tSB3OxUwli+pXDnZapA27QZELv1m5Wt5RUp0ImZQwE
// SIG // cGlOnpUWikvQl/hKuCD7NEP2LBtz25muf7z2h2kidvOd
// SIG // iuc8oeI7bqp7V6Q3CX93uujYi0/+WCHPQOgPuQQZ6KQo
// SIG // lYd22jt5UmgmGStRxqdO5QfTyD41jAbpL4+MFIH83I0X
// SIG // psdr/FH5x4BiFyPHSIGK/3QyfQmIZ+cDb+EuPl6+FNwC
// SIG // MIIHcTCCBVmgAwIBAgITMwAAABXF52ueAptJmQAAAAAA
// SIG // FTANBgkqhkiG9w0BAQsFADCBiDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEyMDAGA1UEAxMpTWljcm9zb2Z0IFJvb3QgQ2Vy
// SIG // dGlmaWNhdGUgQXV0aG9yaXR5IDIwMTAwHhcNMjEwOTMw
// SIG // MTgyMjI1WhcNMzAwOTMwMTgzMjI1WjB8MQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBQQ0EgMjAxMDCCAiIwDQYJKoZIhvcNAQEB
// SIG // BQADggIPADCCAgoCggIBAOThpkzntHIhC3miy9ckeb0O
// SIG // 1YLT/e6cBwfSqWxOdcjKNVf2AX9sSuDivbk+F2Az/1xP
// SIG // x2b3lVNxWuJ+Slr+uDZnhUYjDLWNE893MsAQGOhgfWpS
// SIG // g0S3po5GawcU88V29YZQ3MFEyHFcUTE3oAo4bo3t1w/Y
// SIG // JlN8OWECesSq/XJprx2rrPY2vjUmZNqYO7oaezOtgFt+
// SIG // jBAcnVL+tuhiJdxqD89d9P6OU8/W7IVWTe/dvI2k45GP
// SIG // sjksUZzpcGkNyjYtcI4xyDUoveO0hyTD4MmPfrVUj9z6
// SIG // BVWYbWg7mka97aSueik3rMvrg0XnRm7KMtXAhjBcTyzi
// SIG // YrLNueKNiOSWrAFKu75xqRdbZ2De+JKRHh09/SDPc31B
// SIG // mkZ1zcRfNN0Sidb9pSB9fvzZnkXftnIv231fgLrbqn42
// SIG // 7DZM9ituqBJR6L8FA6PRc6ZNN3SUHDSCD/AQ8rdHGO2n
// SIG // 6Jl8P0zbr17C89XYcz1DTsEzOUyOArxCaC4Q6oRRRuLR
// SIG // vWoYWmEBc8pnol7XKHYC4jMYctenIPDC+hIK12NvDMk2
// SIG // ZItboKaDIV1fMHSRlJTYuVD5C4lh8zYGNRiER9vcG9H9
// SIG // stQcxWv2XFJRXRLbJbqvUAV6bMURHXLvjflSxIUXk8A8
// SIG // FdsaN8cIFRg/eKtFtvUeh17aj54WcmnGrnu3tz5q4i6t
// SIG // AgMBAAGjggHdMIIB2TASBgkrBgEEAYI3FQEEBQIDAQAB
// SIG // MCMGCSsGAQQBgjcVAgQWBBQqp1L+ZMSavoKRPEY1Kc8Q
// SIG // /y8E7jAdBgNVHQ4EFgQUn6cVXQBeYl2D9OXSZacbUzUZ
// SIG // 6XIwXAYDVR0gBFUwUzBRBgwrBgEEAYI3TIN9AQEwQTA/
// SIG // BggrBgEFBQcCARYzaHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraW9wcy9Eb2NzL1JlcG9zaXRvcnkuaHRtMBMG
// SIG // A1UdJQQMMAoGCCsGAQUFBwMIMBkGCSsGAQQBgjcUAgQM
// SIG // HgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAPBgNVHRMB
// SIG // Af8EBTADAQH/MB8GA1UdIwQYMBaAFNX2VsuP6KJcYmjR
// SIG // PZSQW9fOmhjEMFYGA1UdHwRPME0wS6BJoEeGRWh0dHA6
// SIG // Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1
// SIG // Y3RzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIzLmNybDBa
// SIG // BggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKGPmh0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWlj
// SIG // Um9vQ2VyQXV0XzIwMTAtMDYtMjMuY3J0MA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQCdVX38Kq3hLB9nATEkW+Geckv8qW/q
// SIG // XBS2Pk5HZHixBpOXPTEztTnXwnE2P9pkbHzQdTltuw8x
// SIG // 5MKP+2zRoZQYIu7pZmc6U03dmLq2HnjYNi6cqYJWAAOw
// SIG // Bb6J6Gngugnue99qb74py27YP0h1AdkY3m2CDPVtI1Tk
// SIG // eFN1JFe53Z/zjj3G82jfZfakVqr3lbYoVSfQJL1AoL8Z
// SIG // thISEV09J+BAljis9/kpicO8F7BUhUKz/AyeixmJ5/AL
// SIG // aoHCgRlCGVJ1ijbCHcNhcy4sa3tuPywJeBTpkbKpW99J
// SIG // o3QMvOyRgNI95ko+ZjtPu4b6MhrZlvSP9pEB9s7GdP32
// SIG // THJvEKt1MMU0sHrYUP4KWN1APMdUbZ1jdEgssU5HLcEU
// SIG // BHG/ZPkkvnNtyo4JvbMBV0lUZNlz138eW0QBjloZkWsN
// SIG // n6Qo3GcZKCS6OEuabvshVGtqRRFHqfG3rsjoiV5PndLQ
// SIG // THa1V1QJsWkBRH58oWFsc/4Ku+xBZj1p/cvBQUl+fpO+
// SIG // y/g75LcVv7TOPqUxUYS8vwLBgqJ7Fx0ViY1w/ue10Cga
// SIG // iQuPNtq6TPmb/wrpNPgkNWcr4A245oyZ1uEi6vAnQj0l
// SIG // lOZ0dFtq0Z4+7X6gMTN9vMvpe784cETRkPHIqzqKOghi
// SIG // f9lwY1NNje6CbaUFEMFxBmoQtB1VM1izoXBm8qGCA1Aw
// SIG // ggI4AgEBMIH5oYHRpIHOMIHLMQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSUwIwYDVQQLExxNaWNyb3NvZnQgQW1lcmljYSBP
// SIG // cGVyYXRpb25zMScwJQYDVQQLEx5uU2hpZWxkIFRTUyBF
// SIG // U046OTYwMC0wNUUwLUQ5NDcxJTAjBgNVBAMTHE1pY3Jv
// SIG // c29mdCBUaW1lLVN0YW1wIFNlcnZpY2WiIwoBATAHBgUr
// SIG // DgMCGgMVAEtwjzWDFt5rUTHaYVtfHtyT7SD/oIGDMIGA
// SIG // pH4wfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
// SIG // bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoT
// SIG // FU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMd
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwDQYJ
// SIG // KoZIhvcNAQELBQACBQDp9f8FMCIYDzIwMjQwNTIwMTY1
// SIG // NTMzWhgPMjAyNDA1MjExNjU1MzNaMHcwPQYKKwYBBAGE
// SIG // WQoEATEvMC0wCgIFAOn1/wUCAQAwCgIBAAICCMsCAf8w
// SIG // BwIBAAICE6owCgIFAOn3UIUCAQAwNgYKKwYBBAGEWQoE
// SIG // AjEoMCYwDAYKKwYBBAGEWQoDAqAKMAgCAQACAwehIKEK
// SIG // MAgCAQACAwGGoDANBgkqhkiG9w0BAQsFAAOCAQEAw2S8
// SIG // MX22mn2pWNnOlkxiAVDIZezD7J7cdju9yHu8a/G1HCTJ
// SIG // X39sOpEfJ41KHBYIoDREQKabl1K4NmqHMd0FETyjzJzN
// SIG // Y7TXbbh3XbcPstDu+0p6LnduQb+vNHX17v9CvUtri3/B
// SIG // PLo8+zizB5Y/u8iXSkwxMptPOFtF/SIc/4uk+aNqB70W
// SIG // AeU57HV3BJOmKCHsSH4lbesQm6s+hJFVGfhNunP7toNP
// SIG // evCi+fXaGNf67HAWk69OGz9oVUcvrZlXGLKK2Ls7M1tM
// SIG // nLlnpn2JbaxUs2la/nRTinIW1YbGA/k1en97UhPoRVF3
// SIG // VZ+27xFXTGmY2d0NDB0xcz6JpywmCDGCBA0wggQJAgEB
// SIG // MIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMT
// SIG // HU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwAhMz
// SIG // AAAB74k/VqFYzKjaAAEAAAHvMA0GCWCGSAFlAwQCAQUA
// SIG // oIIBSjAaBgkqhkiG9w0BCQMxDQYLKoZIhvcNAQkQAQQw
// SIG // LwYJKoZIhvcNAQkEMSIEIGtFacGptBAZgBmWYfkXs/e5
// SIG // ecPBVJHJ7OLjyuean2uLMIH6BgsqhkiG9w0BCRACLzGB
// SIG // 6jCB5zCB5DCBvQQg8GEoRbgWjfBTPT01DHZrQNtx2xfy
// SIG // Oi8zkuLMeafJf6MwgZgwgYCkfjB8MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1T
// SIG // dGFtcCBQQ0EgMjAxMAITMwAAAe+JP1ahWMyo2gABAAAB
// SIG // 7zAiBCACDXnK13Oit/5+Fcj0Vd8WsqBHE5ewe53wUN3S
// SIG // 2oCQrDANBgkqhkiG9w0BAQsFAASCAgCTNfqjVfqQYh6h
// SIG // 0dHG/HwKz7HRZUjjFxKEcV2HyvYciIrRpM4rw0SoEUlc
// SIG // yCKvZsBmkd3FvL0M8PP7wTdvsU6/POg6pWtb+eOsuzjd
// SIG // V9uvUvCIZk8O9aZqHjmgUsi6gRyXtbJjGmYVR8hzM7NH
// SIG // fRAwFn+uYIEAXLSDD+Fq74t6sMUe/2yyQbgil4SPLR88
// SIG // BMqP88Vb9RPP0qqv6BK/of6c4eiSaXq/UdxsaV+XHdsK
// SIG // 1/UhMSpbT87LJUKqltB6JJ/xx+QzRhjcW1ZAhmta9Lhz
// SIG // qERx6GTRYQ04cUJmE8ZFR6iN8CkV2SY2ukniTTnSrHxT
// SIG // fGJG4l64/u/f1H61+5Bm3SXbrVGDUaua62QFHwG014pJ
// SIG // lEp7bQyyetBSRQa35XDLl+00i/FbowTXThchanZsDQ82
// SIG // e0pmqy7s5q5VPBsHE+xkOhsuOTS9Z2wyJKqZJzlbvD5H
// SIG // KhU04+QGVn8jz6pKpB/TuAvclp19pI1SqbrFahkcHVF+
// SIG // +NAtrtKCSa+Jpz1dc5OXLzoqHpsUmHTmo7QKmlQgS2GC
// SIG // reymsg5tpv/PT1mHAnJss7xPQWNAUQFvc+QRCMJd38dF
// SIG // m5UDUg952Xn/7gSjOUoS7fx6KvFdcBG0YUdlTWo/gvgg
// SIG // FAAX7aeAslU23gOotAi4wqniJgnzqF8uOFkxDy8QsHr4
// SIG // +ZKLRNMSng==
// SIG // End signature block