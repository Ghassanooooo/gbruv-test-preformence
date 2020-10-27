!function(e){function t(t){for(var r,a,o=t[0],s=t[1],l=t[2],c=0,i=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(I,a)&&I[a]&&i.push(I[a][0]),I[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(C&&C(t);i.length;)i.shift()();return M.push.apply(M,l||[]),n()}function n(){for(var e,t=0;t<M.length;t++){for(var n=M[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==I[o]&&(r=!1)}r&&(M.splice(t--,1),e=U(U.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0===--y&&0===b&&N()}(e,t),r&&r(e,t)};var a,o=!0,s="0fe74d6e5174f59be52a",l={},c=[],i=[];function d(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(h={})[t]=e[t],f("ready");break;case"ready":D(t);break;case"prepare":case"check":case"dispose":case"apply":(E=E||[]).push(t)}},check:j,apply:S,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:l[t]};return a=void 0,n}var u=[],p="idle";function f(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var m,h,v,E,y=0,b=0,g={},_={},w={};function O(e){return+e+""===e?+e:e}function j(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=U.p+""+s+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(o){return n(o)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(o){return void n(o)}e(t)}}}))).then((function(e){if(!e)return f(k()?"ready":"idle"),null;_={},g={},w=e.c,v=e.h,f("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in h={},I)x(n);return"prepare"===p&&0===b&&0===y&&N(),t}));var t}function x(e){w[e]?(_[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=U.p+""+e+"."+s+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function N(){f("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then((function(){return S(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(O(n));e.resolve(t)}}function S(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(n){var r,o,i,d,u;function p(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),o=a.id,s=a.chain;if((d=P[o])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:o};if(d.hot._main)return{type:"unaccepted",chain:s,moduleId:o};for(var l=0;l<d.parents.length;l++){var c=d.parents[l],i=P[c];if(i){if(i.hot._declinedDependencies[o])return{type:"declined",chain:s.concat([c]),moduleId:o,parentId:c};-1===t.indexOf(c)&&(i.hot._acceptedDependencies[o]?(n[c]||(n[c]=[]),m(n[c],[o])):(delete n[c],t.push(c),r.push({chain:s.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}k();var y={},b=[],g={},_=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var j in h)if(Object.prototype.hasOwnProperty.call(h,j)){var x;u=O(j),x=h[j]?p(u):{type:"disposed",moduleId:j};var N=!1,S=!1,D=!1,M="";switch(x.chain&&(M="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(N=new Error("Aborted because of self decline: "+x.moduleId+M));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(N=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+M));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(N=new Error("Aborted because "+u+" is not accepted"+M));break;case"accepted":n.onAccepted&&n.onAccepted(x),S=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),D=!0;break;default:throw new Error("Unexception type "+x.type)}if(N)return f("abort"),Promise.reject(N);if(S)for(u in g[u]=h[u],m(b,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,u)&&(y[u]||(y[u]=[]),m(y[u],x.outdatedDependencies[u]));D&&(m(b,[x.moduleId]),g[u]=_)}var A,H=[];for(o=0;o<b.length;o++)u=b[o],P[u]&&P[u].hot._selfAccepted&&g[u]!==_&&!P[u].hot._selfInvalidated&&H.push({module:u,parents:P[u].parents.slice(),errorHandler:P[u].hot._selfAccepted});f("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete I[e]}(e)}));var R,C,T=b.slice();for(;T.length>0;)if(u=T.pop(),d=P[u]){var L={},q=d.hot._disposeHandlers;for(i=0;i<q.length;i++)(r=q[i])(L);for(l[u]=L,d.hot.active=!1,delete P[u],delete y[u],i=0;i<d.children.length;i++){var B=P[d.children[i]];B&&((A=B.parents.indexOf(u))>=0&&B.parents.splice(A,1))}}for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(d=P[u]))for(C=y[u],i=0;i<C.length;i++)R=C[i],(A=d.children.indexOf(R))>=0&&d.children.splice(A,1);f("apply"),void 0!==v&&(s=v,v=void 0);for(u in h=void 0,g)Object.prototype.hasOwnProperty.call(g,u)&&(e[u]=g[u]);var X=null;for(u in y)if(Object.prototype.hasOwnProperty.call(y,u)&&(d=P[u])){C=y[u];var J=[];for(o=0;o<C.length;o++)if(R=C[o],r=d.hot._acceptedDependencies[R]){if(-1!==J.indexOf(r))continue;J.push(r)}for(o=0;o<J.length;o++){r=J[o];try{r(C)}catch(F){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:C[o],error:F}),n.ignoreErrored||X||(X=F)}}}for(o=0;o<H.length;o++){var z=H[o];u=z.module,c=z.parents,a=u;try{U(u)}catch(F){if("function"===typeof z.errorHandler)try{z.errorHandler(F)}catch(Q){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:Q,originalError:F}),n.ignoreErrored||X||(X=Q),X||(X=F)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:F}),n.ignoreErrored||X||(X=F)}}if(X)return f("fail"),Promise.reject(X);if(E)return t(n).then((function(e){return b.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(b)}))}(t=t||{})}function k(){if(E)return h||(h={}),E.forEach(D),E=void 0,!0}function D(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var P={},I={0:0},M=[];function U(t){if(P[t])return P[t].exports;var n=P[t]={i:t,l:!1,exports:{},hot:d(t),parents:(i=c,c=[],i),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=P[e];if(!t)return U;var n=function(n){return t.hot.active?(P[n]?-1===P[n].parents.indexOf(e)&&P[n].parents.push(e):(c=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),c=[]),U(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return U[e]},set:function(t){U[e]=t}}};for(var o in U)Object.prototype.hasOwnProperty.call(U,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&f("prepare"),b++,U.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===p&&(g[e]||x(e),0===b&&0===y&&N())}},n.t=function(e,t){return 1&t&&(e=n(e)),U.t(e,-2&t)},n}(t)),n.l=!0,n.exports}U.m=e,U.c=P,U.d=function(e,t,n){U.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},U.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},U.t=function(e,t){if(1&t&&(e=U(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(U.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)U.d(n,r,function(t){return e[t]}.bind(null,r));return n},U.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return U.d(t,"a",t),t},U.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},U.p="/static/",U.h=function(){return s};var A=window.webpackJsonp=window.webpackJsonp||[],H=A.push.bind(A);A.push=t,A=A.slice();for(var R=0;R<A.length;R++)t(A[R]);var C=H;M.push([0,1]),n()}({"./src/client/index.tsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./node_modules/react-dom/index.js"),s=n("./node_modules/react-redux/es/index.js"),l=n("./node_modules/react-router/esm/react-router.js"),c=n("./node_modules/react-helmet-async/lib/index.module.js"),i=n("./node_modules/redux-thunk/es/index.js"),d=n("./node_modules/redux/es/redux.js"),u=n("./node_modules/immer/dist/immer.esm.js"),p="app/set-locale",f=Object.freeze({locale:"en_US"}),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;return Object(u.a)(e,(function(e){switch(t.type){case p:return void(e.locale=t.payload)}}))},h=function(){return Object(d.c)({app:m})};function v(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t,n=e.initialState,r=e.middleware,a=void 0===r?[]:r,o="undefined"!==typeof window&&"function"===typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({actionsBlacklist:[]})||d.d;return Object(d.e)(h(),n,o(d.a.apply(void 0,v((t=[i.a]).concat.apply(t,v(a))))))},b=(n("./src/shared/assets/styles/bootstrap.min.css"),n("./src/shared/assets/styles/fontawesome.min.css"),n("./src/shared/assets/styles/animate.min.css"),n("./node_modules/react-toastify/dist/ReactToastify.css"),n("./node_modules/react-accessible-accordion/dist/fancy-example.css"),n("./node_modules/react-image-lightbox/style.css"),n.p,n("./src/shared/assets/styles/responsive.css"),n("./node_modules/slick-carousel/slick/slick.css"),n("./node_modules/slick-carousel/slick/slick-theme.css"),n("./node_modules/react-router-dom/esm/react-router-dom.js"));var g=function(){return a.a.createElement("footer",{className:"footer-area"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-3 col-md-6"},a.a.createElement("div",{className:"single-footer-widget"},a.a.createElement("div",{className:"logo"},"Classic Body"),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."))),a.a.createElement("div",{className:"col-lg-3 col-md-6"},a.a.createElement("div",{className:"single-footer-widget"},a.a.createElement("h3",null,"Quick Links"),a.a.createElement("ul",{className:"quick-links"},a.a.createElement("li",null,a.a.createElement(b.a,{to:"/about"},a.a.createElement("a",null,"About Us"))),a.a.createElement("li",null,a.a.createElement(b.a,{to:"/faq"},a.a.createElement("a",null,"Faq's"))),a.a.createElement("li",null,a.a.createElement(b.a,{to:"/website-map"},a.a.createElement("a",null,"Website Map"))),a.a.createElement("li",null,a.a.createElement(b.a,{to:"/contact-us"},a.a.createElement("a",null,"Contact Us")))))),a.a.createElement("div",{className:"col-lg-3 col-md-6"},a.a.createElement("div",{className:"single-footer-widget"},a.a.createElement("h3",null,"Information"),a.a.createElement("ul",{className:"information-links"},a.a.createElement("li",null,a.a.createElement(b.a,{to:"/about"},a.a.createElement("a",null,"About Us"))),a.a.createElement("li",null,a.a.createElement(b.a,{to:"/contact-us"},a.a.createElement("a",null,"Contact Us"))),a.a.createElement("li",null,a.a.createElement(b.a,{to:"/sizing-guide"},a.a.createElement("a",null,"Sizing Guide"))),a.a.createElement("li",null,a.a.createElement(b.a,{to:"/website-map"},a.a.createElement("a",null,"Website Map")))))),a.a.createElement("div",{className:"col-lg-3 col-md-6"},a.a.createElement("div",{className:"single-footer-widget"},a.a.createElement("h3",null,"Contact Us"),a.a.createElement("ul",{className:"footer-contact-info"},a.a.createElement("li",null,a.a.createElement("i",{className:"fas fa-map-marker-alt"}),"Location: 2750 Quadra Street ",a.a.createElement("br",null)," Victoria, Canada"),a.a.createElement("li",null,a.a.createElement("i",{className:"fas fa-phone"}),"Call Us: ",a.a.createElement("a",{to:"tel:(+123) 456-7898"},"(+123) 456-7898")),a.a.createElement("li",null,a.a.createElement("i",{className:"far fa-envelope"}),"Email Us:"," ",a.a.createElement("a",{to:"mailto:support@novine.com"},"support@novine.com")),a.a.createElement("li",null,a.a.createElement("i",{className:"fas fa-fax"}),"Fax: ",a.a.createElement("a",{to:"tel:+123456"},"+123456"))))))),a.a.createElement("div",{className:"copyright-area"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row align-items-center"},a.a.createElement("div",{className:"col-lg-6 col-md-6"},a.a.createElement("p",null,"Copyright @ 2020 Classic Body."))))))},_=(n.p,n.p+"assets/App.module.6c7a7110.scss"),w=function(){return r.createElement("div",{className:_.wrapper},r.createElement(g,null),r.createElement(l.c,null,r.createElement(l.a,{render:function(){return"404!!!"}})))},O=n("./node_modules/i18next/dist/esm/i18next.js"),j=n("./node_modules/i18next-xhr-backend/dist/esm/i18nextXHRBackend.js"),x=n("./node_modules/react-i18next/dist/es/I18nextProvider.js"),N=n("./node_modules/reselect/es/index.js"),S=Object(N.a)([function(e){return e.app}],(function(e){return e.locale})),k=n("./src/shared/i18n/locales/de_DE/translation.json"),D=n("./src/shared/i18n/locales/en_US/translation.json");O.a.use(j.a),O.a.init({backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},react:{useSuspense:!1,wait:!0},debug:!1,fallbackLng:"en_US",fallbackNS:["translation"],partialBundledLanguages:!0,resources:{de_DE:{translation:k},en_US:{translation:D}},parseMissingKeyHandler:function(e){return e}}),O.a.languages=["de_DE","en_US"];var P=function(e){var t=e.children,n=Object(s.b)(S);return Object(r.useEffect)((function(){O.a.changeLanguage(n)}),[n]),a.a.createElement(x.a,{i18n:O.a},t)},I=a.a.memo(P),M=n("./node_modules/history/esm/history.js"),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.initialEntries,window.browserHistory||Object(M.a)());return t}(),A=window.store||y({initialState:window.__PRELOADED_STATE__});Object(o.hydrate)(a.a.createElement(s.a,{store:A},a.a.createElement(l.b,{history:U},a.a.createElement(I,null,a.a.createElement(c.a,null,a.a.createElement(w,null))))),document.getElementById("app"))},"./src/shared/assets/styles/animate.min.css":function(e,t,n){var r=n("./node_modules/css-hot-loader/hotModuleReplacement.js")(e.i,{fileMap:"{fileName}"});e.hot.dispose(r),e.hot.accept(void 0,r)},"./src/shared/assets/styles/bootstrap.min.css":function(e,t,n){var r=n("./node_modules/css-hot-loader/hotModuleReplacement.js")(e.i,{fileMap:"{fileName}"});e.hot.dispose(r),e.hot.accept(void 0,r)},"./src/shared/assets/styles/fontawesome.min.css":function(e,t,n){var r=n("./node_modules/css-hot-loader/hotModuleReplacement.js")(e.i,{fileMap:"{fileName}"});e.hot.dispose(r),e.hot.accept(void 0,r)},"./src/shared/assets/styles/responsive.css":function(e,t,n){var r=n("./node_modules/css-hot-loader/hotModuleReplacement.js")(e.i,{fileMap:"{fileName}"});e.hot.dispose(r),e.hot.accept(void 0,r)},"./src/shared/i18n/locales/de_DE/translation.json":function(e){e.exports=JSON.parse('{"features":"Funktionen","i18n-example":"i18n Beispiel","i18n-support":"i18n Unterst\xfctzung (durch React i18Next)","router-headline":"Router Beispiel","nav":{"home":"Startseite","page-1":"Beispiel Seite 1","page-2":"Beispiel Seite 2"}}')},"./src/shared/i18n/locales/en_US/translation.json":function(e){e.exports=JSON.parse('{"features":"Features","i18n-example":"i18n Example","i18n-support":"i18n support (via React i18Next)","router-headline":"Router Example","nav":{"home":"Homepage","page-1":"Example Page 1","page-2":"Example Page 2"}}')},0:function(e,t,n){e.exports=n("./src/client/index.tsx")}});
//# sourceMappingURL=bundle.0fe74d6e.js.map