(function(t){function e(e){for(var n,a,o=e[0],h=e[1],c=e[2],u=0,m=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,a=1;a<s.length;a++){var o=s[a];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=h(h.s=s[0]))}return t}var n={},a={app:0},r={app:0},i=[];function o(t){return h.p+"js/"+({about:"about"}[t]||t)+"."+{about:"01e6cca8"}[t]+".js"}function h(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,h),s.l=!0,s.exports}h.e=function(t){var e=[],s={about:1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=new Promise((function(e,s){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"ab6ef0ff"}[t]+".css",r=h.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){c=m[o],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],d.parentNode.removeChild(d),s(i)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,s){n=r[t]=[e,s]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,h.nc&&u.setAttribute("nonce",h.nc),u.src=o(t);var m=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var s=r[t];if(0!==s){if(s){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",m.name="ChunkLoadError",m.type=n,m.request=a,s[1](m)}r[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},h.m=t,h.c=n,h.d=function(t,e,s){h.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},h.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},h.t=function(t,e){if(1&e&&(t=h(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(h.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)h.d(s,n,function(e){return t[e]}.bind(null,n));return s},h.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return h.d(e,"a",e),e},h.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},h.p="/",h.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var m=0;m<c.length;m++)e(c[m]);var d=u;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0334":function(t,e,s){},"1a43":function(t){t.exports=JSON.parse('{"home":"Startseite","month":"Monatlich","settings":"Einstellungen","fajr":"Fajr","sunrise":"Sonnen-aufgang","dhuhr":"Dhuhr","currentTime":"Aktuelle Zeit","asr":"Asr","maghrib":"Maghrib","isha":"Isha","city":"Stadt","method":"Methode","Prayer times for today":"Gebetszeiten für heute","Prayer times for the month of":"Gebetszeiten für den Monat ","MWL":"Muslimische Weltliga (MWL)","ISNA":"Islamische Gesellschaft Nordamerikas (ISNA)","Egypt":"Ägyptische Allgemeine Vermessungsbehörde (Ägypten)","Makkah":"Umm Al-Qura Universität, Makkah (Mekka)","Karachi":"Universität für islamische Wissenschaften, Karachi (Karachi)","nextMonth":"Nächster Monat","lastMonth":"Letzter Monat","thisMonth":"Dieser Monat","changeLocation":"Ort ändern","changeMethod":"Methode ändern","selectAndSave":"Sie müssen den Standort und die Berechnungsmethode auswählen und speichern.","savedMessage":"Der Standort, die Berechnung und die Methode wurden gespeichert.","location":"Ort","chooseLocation":"Wählen Sie Ihren Ort oder Ihre Stadt hier aus","calculationMethod":"Berechnungsmethode","prayerTimes":"Gebetszeiten","print":"Drucken"}')},"2e9e":function(t,e,s){"use strict";s("0334")},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=r(t);return s(e)}function r(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),a=function(){var t=this,e=t._self._c;return t.reload?t._e():e("div",{class:"ar"===t.$i18n.locale?"rtl":"",attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("div",[e("router-link",{attrs:{to:"/"}},[t._v(t._s(t.$t("home")))]),t._v(" | "),e("router-link",{attrs:{to:"/month"}},[t._v(t._s(t.$t("month")))]),t._v(" | "),e("router-link",{attrs:{to:"/settings"}},[t._v(t._s(t.$t("settings")))])],1),e("div",[e("button",{on:{click:function(e){return t.changeLocale("ar")}}},[t._v("العربية")]),e("button",{on:{click:function(e){return t.changeLocale("en")}}},[t._v("English")]),e("button",{on:{click:function(e){return t.changeLocale("de")}}},[t._v("Deutsch")])])]),e("router-view")],1)},r=[],i={name:"App",data(){return{locale:"en",reload:!1}},mounted(){this.$i18n.locale=this.locale,this.moment.locale(this.locale)},methods:{changeLocale(t){this.locale=t}},watch:{locale(t,e){t!=e&&(this.reload=!0,setTimeout(()=>{this.reload=!1},500),this.$i18n.locale=t,this.moment.locale(t))}}},o=i,h=(s("bf2a"),s("2877")),c=Object(h["a"])(o,a,r,!1,null,null,null),u=c.exports,m=s("8c4f"),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[t.savedSetting?t._e():e("p",[t._v(" You must choose the settings to show prayer times ")]),e("h1",[t._v(t._s(t.$t("prayerTimes")))]),t.savedSetting&&t.savedSetting.location?e("table",[e("thead",[e("tr",[e("th",{attrs:{colspan:"2"}},[t._v(" "+t._s(t.$t("city"))+": "+t._s(t.savedSetting.location.formatted_address)+" ")])]),e("tr",[e("th",{attrs:{colspan:"2"}},[t._v(" "+t._s(t.$t("method"))+": "+t._s(t.$t(t.savedSetting.method.key))+" ")])]),e("tr",[e("th",{attrs:{colspan:"2"}},[t._v(" "+t._s(t.$t("Prayer times for today"))+" "+t._s(t.moment().format("dddd DD MMMM YYYY"))+" ")])])]),e("tbody",t._l(t.userTimes,(function(s,n){return e("tr",{key:n,class:s.currentTime?"isActive":"",attrs:{"key-data":n}},[s.currentTime?t._e():e("td",{attrs:{width:"250px"}},[t._v(" "+t._s(t.$t(s.timeName))+" ")]),s.currentTime?t._e():e("td",{attrs:{width:"250px"}},[t._v(" "+t._s(s.timeObject.format("HH:mm"))+" ")]),s.currentTime?e("td",{attrs:{width:"250px"}},[t._v(" "+t._s(t.$t("currentTime"))+" ")]):t._e(),s.currentTime?e("td",{attrs:{width:"250px"}},[t._v(" "+t._s(t.moment().format("HH:mm"))+" ")]):t._e()])})),0)]):t._e()])},f=[],l=(s("14d9"),s("c1df")),g=s.n(l),j={name:"Home",data(){return{savedSetting:null,userTimes:null,prayerTimesForMonth:null}},mounted(){this.savedSetting=JSON.parse(localStorage.getItem("prayer-times-user-settings")),this.getUserTimes(),setInterval(()=>{this.getUserTimes()},1e4)},methods:{getUserTimes(){const{location:t}=this.savedSetting.location.geometry,{method:e}=this.savedSetting;this.prayTimes.setMethod(e);const s=this.prayTimes.getTimes(new Date,[t.lat,t.lng],this.userTimeZone.value);delete s.imsak,delete s.sunset,delete s.midnight;const n=Object.entries(s).map(([t,e])=>({timeName:t,timeValue:e,timeObject:g()(e,"HH:mm")}));n.push({timeName:"",timeValue:g()().format("HH:mm"),timeObject:g()(),currentTime:!0}),n.sort((t,e)=>t.timeObject.diff(e.timeObject)),this.userTimes=n}}},b=j,v=(s("5b89"),Object(h["a"])(b,d,f,!1,null,null,null)),p=v.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[t.savedSetting?t._e():e("p",[t._v(" "+t._s(t.$t("selectAndSave"))+" ")]),e("h1",[t._v(t._s(t.$t("prayerTimes")))]),e("div",{staticClass:"btns-control"},[e("button",{on:{click:t.nextMonth}},[t._v(t._s(t.$t("nextMonth")))]),e("button",{on:{click:t.thisMonth}},[t._v(t._s(t.$t("thisMonth")))]),e("button",{on:{click:t.lastMonth}},[t._v(t._s(t.$t("lastMonth")))]),e("button",{on:{click:t.printPage}},[t._v(t._s(t.$t("print")))])]),t.savedSetting&&t.savedSetting.location?e("table",[e("thead",[e("tr",[e("th",{attrs:{colspan:"7"}},[t._v(" "+t._s(t.$t("city"))+": "+t._s(t.savedSetting.location.formatted_address)+" ")])]),e("tr",[e("th",{attrs:{colspan:"7"}},[t._v(" "+t._s(t.$t("method")+" "+t.$t(t.savedSetting.method.key))+" ")])]),e("tr",[e("th",{attrs:{colspan:"7"}},[t._v(" "+t._s(t.$t("Prayer times for the month of")+t.moment().set({month:t.month-1,year:t.year}).format("MMMM YYYY"))+" ")])])]),e("tbody",[e("tr",[e("td"),t._l(t.prayerTimesForMonth[0].prayerTimes,(function(s,n){return e("td",{key:n,staticClass:"td-head",class:"td-head-"+n},[t._v(" "+t._s(t.$t(n))+" ")])}))],2),t._l(t.prayerTimesForMonth,(function(s,n){return e("tr",{key:n,staticClass:"tr-day",class:{"tr-day-is-friday":s.isFriday}},[e("td",{staticClass:"td-date"},[t._v(" "+t._s(t.moment(s.date).format("dddd DD MMMM"))+" ")]),t._l(t.prayerTimesForMonth[n].prayerTimes,(function(s,n){return e("td",{key:n,class:"td-value td-value-"+n},[t._v(" "+t._s(s)+" ")])}))],2)})),e("tr")],2)]):t._e()])},M=[],k={name:"Month",data(){return{savedSetting:null,prayerTimesForMonth:null,year:g()().locale("en").format("YYYY"),month:g()().locale("en").format("M")}},mounted(){this.savedSetting=JSON.parse(localStorage.getItem("prayer-times-user-settings")),this.getPrayerTimesForMonth()},methods:{getPrayerTimesForMonth(){const t=[],{location:e}=this.savedSetting.location.geometry,{method:s}=this.savedSetting;this.prayTimes.setMethod(s);for(let n=1;n<=g()(`${this.year}-${this.month}`,"YYYY-MM").daysInMonth();n++){const s=g()(`${this.year}-${this.month}-${n}`,"YYYY-MM-DD")._d,a=this.prayTimes.getTimes(s,[e.lat,e.lng],this.userTimeZone.value);delete a.imsak,delete a.sunset,delete a.midnight,t.push({date:s,isFriday:5===g()(s).day(),prayerTimes:a})}this.prayerTimesForMonth=t},nextMonth(){1*this.month>=12?(this.month=1,this.year=1*this.year+1):this.month=1*this.month+1,this.getPrayerTimesForMonth()},lastMonth(){1*this.month<=1?(this.month=12,this.year=1*this.year-1):this.month=1*this.month-1,this.getPrayerTimesForMonth()},thisMonth(){this.year=g()().locale("en").format("YYYY"),this.month=g()().locale("en").format("M"),this.getPrayerTimesForMonth()},printPage(){window.print()}}},T=k,_=(s("2e9e"),Object(h["a"])(T,y,M,!1,null,null,null)),S=_.exports;n["a"].use(m["a"]);const w=[{path:"/",name:"Home",component:p},{path:"/month",name:"Month",component:S},{path:"/settings",name:"Settings",component:()=>s.e("about").then(s.bind(null,"26d3"))}],A=new m["a"]({routes:w});var O=A;function x(t){var e,s,n,a,r,i,o={imsak:"Imsak",fajr:"Fajr",sunrise:"Sunrise",dhuhr:"Dhuhr",asr:"Asr",sunset:"Sunset",maghrib:"Maghrib",isha:"Isha",midnight:"Midnight"},h={MWL:{name:"Muslim World League",params:{fajr:18,isha:17}},ISNA:{name:"Islamic Society of North America (ISNA)",params:{fajr:15,isha:15}},Egypt:{name:"Egyptian General Authority of Survey",params:{fajr:19.5,isha:17.5}},Makkah:{name:"Umm Al-Qura University, Makkah",params:{fajr:18.5,isha:"90 min"}},Karachi:{name:"University of Islamic Sciences, Karachi",params:{fajr:18,isha:18}}},c={maghrib:"0 min",midnight:"Standard"},u="MWL",m={imsak:"10 min",dhuhr:"0 min",asr:"Standard",highLats:"NightMiddle"},d="24h",f=["am","pm"],l="-----",g=1,j={},b=c;for(var v in h)for(var p in i=h[v].params,b)"undefined"==typeof i[p]&&(i[p]=b[p]);for(var y in u=h[t]?t:u,i=h[u].params,i)m[y]=i[y];for(var M in o)j[M]=0;return{setMethod:function(t){h[t]&&(this.adjust(h[t].params),u=t)},adjust:function(t){for(var e in t)m[e]=t[e]},tune:function(t){for(var e in t)j[e]=t[e]},getMethod:function(){return u},getAllMethods:function(){return Object.keys(h).map(t=>({key:t,...h[t]}))},getSetting:function(){return m},getOffsets:function(){return j},getDefaults:function(){return h},getTimes:function(t,i,o,h,c){return e=1*i[0],s=1*i[1],n=i[2]?1*i[2]:0,d=c||d,t.constructor===Date&&(t=[t.getFullYear(),t.getMonth()+1,t.getDate()]),"undefined"!=typeof o&&"auto"!=o||(o=this.getTimeZone(t)),"undefined"!=typeof h&&"auto"!=h||(h=this.getDst(t)),a=1*o+(1*h?1:0),r=this.julian(t[0],t[1],t[2])-s/360,this.computeTimes()},getFormattedTime:function(t,e,s){if(isNaN(t))return l;if("Float"==e)return t;s=s||f,t=P.fixHour(t+.5/60);var n=Math.floor(t),a=Math.floor(60*(t-n)),r="12h"==e?s[n<12?0:1]:"",i="24h"==e?this.twoDigitsFormat(n):(n+12-1)%12+1;return i+":"+this.twoDigitsFormat(a)+(r?" "+r:"")},midDay:function(t){var e=this.sunPosition(r+t).equation,s=P.fixHour(12-e);return s},sunAngleTime:function(t,s,n){var a=this.sunPosition(r+s).declination,i=this.midDay(s),o=1/15*P.arccos((-P.sin(t)-P.sin(a)*P.sin(e))/(P.cos(a)*P.cos(e)));return i+("ccw"==n?-o:o)},asrTime:function(t,s){var n=this.sunPosition(r+s).declination,a=-P.arccot(t+P.tan(Math.abs(e-n)));return this.sunAngleTime(a,s)},sunPosition:function(t){var e=t-2451545,s=P.fixAngle(357.529+.98560028*e),n=P.fixAngle(280.459+.98564736*e),a=P.fixAngle(n+1.915*P.sin(s)+.02*P.sin(2*s)),r=23.439-36e-8*e,i=P.arctan2(P.cos(r)*P.sin(a),P.cos(a))/15,o=n/15-P.fixHour(i),h=P.arcsin(P.sin(r)*P.sin(a));return{declination:h,equation:o}},julian:function(t,e,s){e<=2&&(t-=1,e+=12);var n=Math.floor(t/100),a=2-n+Math.floor(n/4),r=Math.floor(365.25*(t+4716))+Math.floor(30.6001*(e+1))+s+a-1524.5;return r},computePrayerTimes:function(t){t=this.dayPortion(t);var e=m,s=this.sunAngleTime(this.eval(e.imsak),t.imsak,"ccw"),n=this.sunAngleTime(this.eval(e.fajr),t.fajr,"ccw"),a=this.sunAngleTime(this.riseSetAngle(),t.sunrise,"ccw"),r=this.midDay(t.dhuhr),i=this.asrTime(this.asrFactor(e.asr),t.asr),o=this.sunAngleTime(this.riseSetAngle(),t.sunset),h=this.sunAngleTime(this.eval(e.maghrib),t.maghrib),c=this.sunAngleTime(this.eval(e.isha),t.isha);return{imsak:s,fajr:n,sunrise:a,dhuhr:r,asr:i,sunset:o,maghrib:h,isha:c}},computeTimes:function(){for(var t={imsak:5,fajr:5,sunrise:6,dhuhr:12,asr:13,sunset:18,maghrib:18,isha:18},e=1;e<=g;e++)t=this.computePrayerTimes(t);return t=this.adjustTimes(t),t.midnight="Jafari"==m.midnight?t.sunset+this.timeDiff(t.sunset,t.fajr)/2:t.sunset+this.timeDiff(t.sunset,t.sunrise)/2,t=this.tuneTimes(t),this.modifyFormats(t)},adjustTimes:function(t){var e=m;for(var n in t)t[n]+=a-s/15;return"None"!=e.highLats&&(t=this.adjustHighLats(t)),this.isMin(e.imsak)&&(t.imsak=t.fajr-this.eval(e.imsak)/60),this.isMin(e.maghrib)&&(t.maghrib=t.sunset+this.eval(e.maghrib)/60),this.isMin(e.isha)&&(t.isha=t.maghrib+this.eval(e.isha)/60),t.dhuhr+=this.eval(e.dhuhr)/60,t},asrFactor:function(t){var e={Standard:1,Hanafi:2}[t];return e||this.eval(t)},riseSetAngle:function(){var t=.0347*Math.sqrt(n);return.833+t},tuneTimes:function(t){for(var e in t)t[e]+=j[e]/60;return t},modifyFormats:function(t){for(var e in t)t[e]=this.getFormattedTime(t[e],d);return t},adjustHighLats:function(t){var e=m,s=this.timeDiff(t.sunset,t.sunrise);return t.imsak=this.adjustHLTime(t.imsak,t.sunrise,this.eval(e.imsak),s,"ccw"),t.fajr=this.adjustHLTime(t.fajr,t.sunrise,this.eval(e.fajr),s,"ccw"),t.isha=this.adjustHLTime(t.isha,t.sunset,this.eval(e.isha),s),t.maghrib=this.adjustHLTime(t.maghrib,t.sunset,this.eval(e.maghrib),s),t},adjustHLTime:function(t,e,s,n,a){var r=this.nightPortion(s,n),i="ccw"==a?this.timeDiff(t,e):this.timeDiff(e,t);return(isNaN(t)||i>r)&&(t=e+("ccw"==a?-r:r)),t},nightPortion:function(t,e){var s=m.highLats,n=.5;return"AngleBased"==s&&(n=1/60*t),"OneSeventh"==s&&(n=1/7),n*e},dayPortion:function(t){for(var e in t)t[e]/=24;return t},getTimeZone:function(t){var e=t[0],s=this.gmtOffset([e,0,1]),n=this.gmtOffset([e,6,1]);return Math.min(s,n)},getDst:function(t){return 1*(this.gmtOffset(t)!=this.getTimeZone(t))},gmtOffset:function(t){var e=new Date(t[0],t[1]-1,t[2],12,0,0,0),s=e.toGMTString(),n=new Date(s.substring(0,s.lastIndexOf(" ")-1)),a=(e-n)/36e5;return a},eval:function(t){return 1*(t+"").split(/[^0-9.+-]/)[0]},isMin:function(t){return-1!=(t+"").indexOf("min")},timeDiff:function(t,e){return P.fixHour(e-t)},twoDigitsFormat:function(t){return t<10?"0"+t:t}}}var P={dtr:function(t){return t*Math.PI/180},rtd:function(t){return 180*t/Math.PI},sin:function(t){return Math.sin(this.dtr(t))},cos:function(t){return Math.cos(this.dtr(t))},tan:function(t){return Math.tan(this.dtr(t))},arcsin:function(t){return this.rtd(Math.asin(t))},arccos:function(t){return this.rtd(Math.acos(t))},arctan:function(t){return this.rtd(Math.atan(t))},arccot:function(t){return this.rtd(Math.atan(1/t))},arctan2:function(t,e){return this.rtd(Math.atan2(t,e))},fixAngle:function(t){return this.fix(t,360)},fixHour:function(t){return this.fix(t,24)},fix:function(t,e){return t-=e*Math.floor(t/e),t<0?t+e:t}},L=new x,D=L,N=s("7f45"),$=s.n(N),z=(s("8e73"),s("a925")),F=s("7029"),Y=s("ac2f"),I=s("1a43");const H=$.a.tz.guess(),C=$()().utcOffset(),E=$()().isDST(),U={label:H,utcOffset:C+"(min)",value:E?C/60-1:C/60};n["a"].config.productionTip=!1,n["a"].prototype.prayTimes=D,n["a"].prototype.userTimeZone=U,n["a"].prototype.moment=$.a,n["a"].use(z["a"]);const W=new z["a"]({locale:"en",messages:{en:F,ar:Y,de:I}});new n["a"]({router:O,i18n:W,render:t=>t(u)}).$mount("#app")},"5b89":function(t,e,s){"use strict";s("722f")},7029:function(t){t.exports=JSON.parse('{"home":"Home","month":"Monthly","settings":"Settings","fajr":"Fajr","sunrise":"Sunrise","dhuhr":"Dhuhr","currentTime":"Current Time","asr":"Asr","maghrib":"Maghrib","isha":"Isha","city":"City","method":"Method","Prayer times for today":"Prayer times for today","Prayer times for the month of":"Prayer times for the month of ","MWL":"Muslim World League (MWL)","ISNA":"Islamic Society of North America (ISNA)","Egypt":"Egyptian General Authority of Survey (Egypt)","Makkah":"Umm Al-Qura University, Makkah (Makkah)","Karachi":"University of Islamic Sciences, Karachi (Karachi)","nextMonth":"Next Month","lastMonth":"Last Month","thisMonth":"This Month","changeLocation":"Change Location","changeMethod":"Change Method","selectAndSave":"You must select and save the location and calculation method.","savedMessage":"The location, calculation, and method are saved.","location":"Location","chooseLocation":"Choose your city or location from here","calculationMethod":"Calculation Method","prayerTimes":"Prayer Times","print":"Print"}')},"722f":function(t,e,s){},"9cb7":function(t,e,s){},ac2f:function(t){t.exports=JSON.parse('{"home":"الرئيسية","month":"بحسب الشهر","settings":"الاعدادات","fajr":"الفجر","sunrise":"الشروق","dhuhr":"الظهر","currentTime":"الوقت الحالي","asr":"العصر","maghrib":"المغرب","isha":"العشاء","city":"المدينة","method":"طريقة الحساب","Prayer times for today":"أوقات الصلاة اليوم ","Prayer times for the month of":"جدول أوقات الصلاة لشهر ","MWL":"رابطة العالم الإسلامي","ISNA":"الجمعية الإسلامية في أمريكا الشمالية وأوروبا","Egypt":"الهيئة العامة للمساحة المصرية (مصر)","Makkah":"جامعة أم القرى، مكة المكرمة (مكة)","Karachi":"جامعة العلوم الإسلامية، كراتشي (كراتشي)","nextMonth":"الشهر القادم","lastMonth":"الشهر الماضي","thisMonth":"هذا الشهر","changeLocation":"تغيير الموقع","changeMethod":"تغيير الطريقة","selectAndSave":"يجب عليك تحديد وحفظ الموقع وطريقة الحساب.","savedMessage":"تم حفظ الموقع والحساب والطريقة.","location":"الموقع","chooseLocation":"اختر مدينتك أو موقعك من هنا","calculationMethod":"طريقة الحساب","prayerTimes":"أوقات الصلاة","print":"طباعة"}')},bf2a:function(t,e,s){"use strict";s("9cb7")}});
//# sourceMappingURL=app.3c1a5fdd.js.map