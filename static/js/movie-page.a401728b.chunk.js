(self.webpackChunkgoit_react_hw_05_movies_2=self.webpackChunkgoit_react_hw_05_movies_2||[]).push([[687],{757:function(t,e,r){t.exports=r(727)},307:function(t,e,r){"use strict";r.d(e,{e:function(){return _}});var n,o,i,a,c,u,s,l=r(871),f=r(168),h=r(444),p=r(504),d=h.ZP.li(n||(n=(0,f.Z)(["\n\tmax-width: 300px;\n\tmargin: 5px;\n\n\tbackground-color: rgba(0, 0, 0, 0.07);\n\tborder: 1px solid #eeeeee;\n\tborder-top: none;\n\tborder-radius: 10px;\n\toverflow: hidden;\n\t:hover{\n\t\tbox-shadow:\n\t\t0px 1px 1px rgba(255, 0, 0, 0.12),\n\t\t0px 4px 4px rgba(255, 0, 0, 0.16),\n\t\t1px 4px 6px rgba(255, 0, 0, 0.26);\n\t}\n"]))),v=(0,h.ZP)(p.rU)(o||(o=(0,f.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: #000;\n\ttext-decoration: none;\n"]))),y=h.ZP.img(i||(i=(0,f.Z)(["\n\tdisplay: block;\n\twidth: 100%;\n\theight: 450px;\n"]))),g=h.ZP.div(a||(a=(0,f.Z)(["\n\tpadding-top: 5px;\n\tpadding-bottom: 5px;\n\tpadding-left: 5px;\n\tpadding-right: 5px;\n"]))),x=h.ZP.h3(c||(c=(0,f.Z)(["\n\twidth: 250px;\n\tfont-weight: 700;\n\tfont-size: 18px;\n"]))),m=h.ZP.div(u||(u=(0,f.Z)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\n"]))),b=r(184),w=function(t){var e=t.id,r=t.movieTitle,n=t.poster,o=t.vote_average,i=t.vote_count,a=(0,l.TH)();return(0,b.jsx)(d,{children:(0,b.jsxs)(v,{to:"/movies/".concat(e),state:{from:a},children:[(0,b.jsx)("div",{children:(0,b.jsx)(y,{src:"https://image.tmdb.org/t/p/w500/".concat(n),alt:"".concat(r," poster")})}),(0,b.jsxs)(g,{children:[(0,b.jsx)(x,{children:r}),(0,b.jsxs)(m,{children:[(0,b.jsxs)("p",{children:["Voted:",i]}),(0,b.jsxs)("p",{children:["Average:",o]})]})]})]})})},j=h.ZP.ul(s||(s=(0,f.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\tlist-style: none;\n"]))),_=function(t){var e=t.movies;return(0,b.jsx)(j,{children:e.map((function(t){var e=t.id,r=t.title,n=t.poster_path,o=t.name,i=t.vote_average,a=t.vote_count;return(0,b.jsx)(w,{id:e,movieTitle:r||o,poster:n,vote_average:i,vote_count:a},e)}))})}},126:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return P}});var n=r(152),o=r(791);function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}var c=r(757),u=r.n(c);function s(){return s=a(u().mark((function t(e){var r,n,o,i,a,c=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,n="https://api.themoviedb.org/3/search/movie",o="?api_key=".concat("d783920aea034ba2adae6031a0bf96c0","&query=").concat(e,"&language=en-US&page=").concat(r,"&include_adult=false"),t.next=6,fetch("".concat(n).concat(o));case 6:return i=t.sent,t.next=9,i.json();case 9:return a=t.sent,t.abrupt("return",a);case 11:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}var l=function(t){return s.apply(this,arguments)},f=r(307);function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v,y,g,x=r(168),m=r(444),b=m.ZP.form(v||(v=(0,x.Z)(["\n\tdisplay:flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\tcolor: inherit;\n\tborder-radius: 4px;\n"]))),w=m.ZP.input(y||(y=(0,x.Z)(["\n\tcolor: white;\n\tletter-spacing: 1px;\n\tfont-size: 17px;\n\twidth: 50%;\n\tpadding:5px;\n  border-radius:10px;\n\tborder: 2px solid #eee;\n\tbackground: inherit;\n\t\n\t:focus{\n\t\toutline: none;\n\t\tborder-color: darkred;\n\t}\n"]))),j=m.ZP.button(g||(g=(0,x.Z)(["\n\tmargin-left: 15px;\n\tcursor: pointer;\n\tpadding:10px;\n  border:none;\n  background-color:rgb(139,0,0);\n  color:#000;\n  font-weight:600;\n  border-radius:15px;\n\t:hover{\n\t\tbackground-color: rgb(255,0,0);\n\t\tbox-shadow:\n\t\t\t0px 1px 1px rgba(255, 0, 0, 0.2),\n\t\t\t0px 4px 4px rgba(255, 0, 0, 0.25),\n\t\t\t1px 4px 6px rgba(255, 0, 0, 0.33);\n\t}\n"]))),_=r(871),O=r(184),L=function(){var t=(0,_.TH)(),e=(0,_.s0)();return(0,O.jsxs)(b,{onSubmit:function(r){r.preventDefault();var n=r.target.elements.query.value;e(d(d({},t),{},{search:"query=".concat(n)}))},children:[(0,O.jsx)(w,{type:"text",name:"query"}),(0,O.jsx)(j,{type:"submit",children:"Search"})]})};function P(){var t,e=(0,_.TH)().search,r=null!==(t=new URLSearchParams(e).get("query"))&&void 0!==t?t:"",i=(0,o.useState)([]),a=(0,n.Z)(i,2),c=a[0],u=a[1];return(0,o.useEffect)((function(){""!==r&&l(r).then((function(t){var e=t.results;u(e)}))}),[r]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(L,{}),c.length>0&&(0,O.jsx)(f.e,{movies:c})]})}},727:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(T){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function x(){}var m={};u(m,i,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(Z([])));w&&w!==r&&n.call(w,i)&&(m=w);var j=x.prototype=y.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function Z(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=x,u(j,"constructor",x),u(x,"constructor",g),g.displayName=u(x,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},_(O.prototype),u(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(j),u(j,c,"Generator"),u(j,i,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=Z,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:Z(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=movie-page.a401728b.chunk.js.map