(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"+QRC":function(e,t,n){"use strict";var r=n("E9nw"),o="Copy to clipboard: #{key}, Enter";function a(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function i(e,t){var n,i,c,l,s,u,d=!1;t||(t={}),n=t.debug||!1;try{c=r(),l=document.createRange(),s=document.getSelection(),u=document.createElement("span"),u.textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(n){n.stopPropagation(),t.format&&(n.preventDefault(),n.clipboardData.clearData(),n.clipboardData.setData(t.format,e))}),document.body.appendChild(u),l.selectNodeContents(u),s.addRange(l);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");d=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),d=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),i=a("message"in t?t.message:o),window.prompt(i,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(l):s.removeAllRanges()),u&&document.body.removeChild(u),c()}return d}e.exports=i},"4Ofr":function(e,t,n){e.exports={themeColor:"antd-pro-components-setting-drawer-theme-color-themeColor",title:"antd-pro-components-setting-drawer-theme-color-title",colorBlock:"antd-pro-components-setting-drawer-theme-color-colorBlock"}},BFsb:function(e,t,n){e.exports={content:"antd-pro-components-setting-drawer-index-content",blockChecbox:"antd-pro-components-setting-drawer-index-blockChecbox",item:"antd-pro-components-setting-drawer-index-item",selectIcon:"antd-pro-components-setting-drawer-index-selectIcon",color_block:"antd-pro-components-setting-drawer-index-color_block",title:"antd-pro-components-setting-drawer-index-title",handle:"antd-pro-components-setting-drawer-index-handle",productionHint:"antd-pro-components-setting-drawer-index-productionHint"}},Ctgt:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("17x9"),i=n.n(a),c=n("VCL8");function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=u(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function h(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?b(e):t}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=n("TSYQ"),w=function(e){function t(e){var n;d(this,t),n=h(this,m(t).call(this,e)),v(b(b(n)),"handleClick",function(e){var t=n.state.checked,r=n.props.onClick,o=!t;n.setChecked(o,e),r&&r(o,e)}),v(b(b(n)),"handleKeyDown",function(e){37===e.keyCode?n.setChecked(!1,e):39===e.keyCode&&n.setChecked(!0,e)}),v(b(b(n)),"handleMouseUp",function(e){var t=n.props.onMouseUp;n.node&&n.node.blur(),t&&t(e)}),v(b(b(n)),"saveNode",function(e){n.node=e});var r=!1;return r="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:r},n}return g(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"setChecked",value:function(e,t){var n=this.props,r=n.disabled,o=n.onChange;r||("checked"in this.props||this.setState({checked:e}),o&&o(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.prefixCls,a=t.disabled,i=t.loadingIcon,c=t.checkedChildren,u=t.unCheckedChildren,d=s(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),p=this.state.checked,f=C((e={},v(e,n,!!n),v(e,r,!0),v(e,"".concat(r,"-checked"),p),v(e,"".concat(r,"-disabled"),a),e));return o.a.createElement("button",l({},d,{type:"button",role:"switch","aria-checked":p,disabled:a,className:f,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),i,o.a.createElement("span",{className:"".concat(r,"-inner")},p?c:u))}}],[{key:"getDerivedStateFromProps",value:function(e){var t={},n=e.checked;return"checked"in e&&(t.checked=!!n),t}}]),t}(r["Component"]);w.propTypes={className:i.a.string,prefixCls:i.a.string,disabled:i.a.bool,checkedChildren:i.a.any,unCheckedChildren:i.a.any,onChange:i.a.func,onMouseUp:i.a.func,onClick:i.a.func,tabIndex:i.a.number,checked:i.a.bool,defaultChecked:i.a.bool,autoFocus:i.a.bool,loadingIcon:i.a.node},w.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(c["polyfill"])(w),t["default"]=w},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},P5Jw:function(e,t,n){"use strict";var r=n("rHrb"),o=r.CopyToClipboard;o.CopyToClipboard=o,e.exports=o},PceP:function(e,t,n){"use strict";n.r(t);n("bbsP");var r=n("/wGt"),o=(n("fOrg"),n("+KLJ")),a=(n("+L6B"),n("2/Rp")),i=(n("miYZ"),n("tsqr")),c=(n("cIOH"),n("bE4E"),n("q1tI")),l=n.n(c),s=n("TSYQ"),u=n.n(s),d=n("wEI+");function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},m=function(e){return c["createElement"](d["a"],null,function(t){var n,r=t.getPrefixCls,o=e.prefixCls,a=e.type,i=void 0===a?"horizontal":a,l=e.orientation,s=void 0===l?"center":l,d=e.className,m=e.children,g=e.dashed,y=h(e,["prefixCls","type","orientation","className","children","dashed"]),b=r("divider",o),v=s.length>0?"-".concat(s):s,C=u()(d,b,"".concat(b,"-").concat(i),(n={},f(n,"".concat(b,"-with-text").concat(v),m),f(n,"".concat(b,"-dashed"),!!g),n));return c["createElement"]("div",p({className:C},y,{role:"separator"}),m&&c["createElement"]("span",{className:"".concat(b,"-inner-text")},m))})},g=m,y=(n("Pwec"),n("CtXQ")),b=(n("5Dmo"),n("3S7+")),v=(n("Mwp2"),n("VXEj")),C=(n("czTT"),n("17x9")),w=n("XIdC"),k=n.n(w),O=n("BGR+"),E=n("g0mS"),x=n("6CfX");function j(e){return j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t&&M(e.prototype,t),n&&M(e,n),e}function I(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function R(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}function z(e,t){return z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},z(e,t)}var A=function(e){function t(e){var n;return N(this,t),n=I(this,D(t).call(this,e)),n.saveSwitch=function(e){n.rcSwitch=e},n.renderSwitch=function(e){var t,r=e.getPrefixCls,o=n.props,a=o.prefixCls,i=o.size,l=o.loading,s=o.className,d=void 0===s?"":s,p=o.disabled,f=r("switch",a),h=u()(d,(t={},P(t,"".concat(f,"-small"),"small"===i),P(t,"".concat(f,"-loading"),l),t)),m=l?c["createElement"](y["a"],{type:"loading",className:"".concat(f,"-loading-icon")}):null;return c["createElement"](E["a"],{insertExtraNode:!0},c["createElement"](k.a,S({},Object(O["a"])(n.props,["loading"]),{prefixCls:f,className:h,disabled:p||l,ref:n.saveSwitch,loadingIcon:m})))},Object(x["a"])("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),n}return R(t,e),_(t,[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return c["createElement"](d["a"],null,this.renderSwitch)}}]),t}(c["Component"]);A.__ANT_SWITCH=!0,A.propTypes={prefixCls:C["string"],size:C["oneOf"](["small","default","large"]),className:C["string"]};var H,F,L,B=n("2Taf"),U=n.n(B),q=n("vZ4D"),J=n.n(q),Q=n("l4Ni"),W=n.n(Q),X=n("ujKo"),Y=n.n(X),K=n("MhPg"),Z=n.n(K),G=n("p0pE"),V=n.n(G),$=(n("OaEy"),n("2fM7")),ee=n("Y2fQ"),te=n("P5Jw"),ne=n("MuoO"),re=n("BFsb"),oe=n.n(re),ae=n("jehZ"),ie=n.n(ae),ce=n("Y/ft"),le=n.n(ce),se=n("4Ofr"),ue=n.n(se),de=function(e){var t=e.color,n=e.check,r=le()(e,["color","check"]);return l.a.createElement("div",ie()({},r,{style:{backgroundColor:t}}),n?l.a.createElement(y["a"],{type:"check"}):"")},pe=function(e){var t=e.colors,n=e.title,r=e.value,o=e.onChange,a=t;return t||(a=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),l.a.createElement("div",{className:ue.a.themeColor},l.a.createElement("h3",{className:ue.a.title},n),l.a.createElement("div",{className:ue.a.content},a.map(function(e){var t=e.key,n=e.color;return l.a.createElement(b["a"],{key:n,title:Object(ee["formatMessage"])({id:"app.setting.themecolor.".concat(t)})},l.a.createElement(de,{className:ue.a.colorBlock,color:n,check:r===n,onClick:function(){return o&&o(n)}}))})))},fe=pe,he=function(e){var t=e.value,n=e.onChange,r=e.list;return l.a.createElement("div",{className:oe.a.blockChecbox,key:t},r.map(function(e){return l.a.createElement(b["a"],{title:e.title,key:e.key},l.a.createElement("div",{className:oe.a.item,onClick:function(){return n(e.key)}},l.a.createElement("img",{src:e.url,alt:e.key}),l.a.createElement("div",{className:oe.a.selectIcon,style:{display:t===e.key?"block":"none"}},l.a.createElement(y["a"],{type:"check"}))))}))},me=he,ge=$["a"].Option,ye=function(e){var t=e.children,n=e.title,r=e.style;return l.a.createElement("div",{style:V()({},r,{marginBottom:24})},l.a.createElement("h3",{className:oe.a.title},n),t)},be=(H=Object(ne["connect"])(function(e){var t=e.setting;return{setting:t}}),H((L=function(e){function t(){var e,n;U()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=W()(this,(e=Y()(t)).call.apply(e,[this].concat(o))),n.state={collapse:!1},n.getLayoutSetting=function(){var e=n.props.setting,t=e.contentWidth,r=e.fixedHeader,o=e.layout,a=e.autoHideHeader,i=e.fixSiderbar;return[{title:Object(ee["formatMessage"])({id:"app.setting.content-width"}),action:l.a.createElement($["a"],{value:t,size:"small",onSelect:function(e){return n.changeSetting("contentWidth",e)},style:{width:80}},"sidemenu"===o?null:l.a.createElement(ge,{value:"Fixed"},Object(ee["formatMessage"])({id:"app.setting.content-width.fixed"})),l.a.createElement(ge,{value:"Fluid"},Object(ee["formatMessage"])({id:"app.setting.content-width.fluid"})))},{title:Object(ee["formatMessage"])({id:"app.setting.fixedheader"}),action:l.a.createElement(A,{size:"small",checked:!!r,onChange:function(e){return n.changeSetting("fixedHeader",e)}})},{title:Object(ee["formatMessage"])({id:"app.setting.hideheader"}),disabled:!r,disabledReason:Object(ee["formatMessage"])({id:"app.setting.hideheader.hint"}),action:l.a.createElement(A,{size:"small",checked:!!a,onChange:function(e){return n.changeSetting("autoHideHeader",e)}})},{title:Object(ee["formatMessage"])({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===o,disabledReason:Object(ee["formatMessage"])({id:"app.setting.fixedsidebar.hint"}),action:l.a.createElement(A,{size:"small",checked:!!i,onChange:function(e){return n.changeSetting("fixSiderbar",e)}})}]},n.changeSetting=function(e,t){var r=n.props.setting,o=V()({},r);o[e]=t,"layout"===e?o.contentWidth="topmenu"===t?"Fixed":"Fluid":"fixedHeader"!==e||t||(o.autoHideHeader=!1),n.setState(o,function(){var e=n.props.dispatch;e({type:"setting/changeSetting",payload:n.state})})},n.togglerContent=function(){var e=n.state.collapse;n.setState({collapse:!e})},n.renderLayoutSettingItem=function(e){var t=l.a.cloneElement(e.action,{disabled:e.disabled});return l.a.createElement(b["a"],{title:e.disabled?e.disabledReason:"",placement:"left"},l.a.createElement(v["a"].Item,{actions:[t]},l.a.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},n}return Z()(t,e),J()(t,[{key:"render",value:function(){var e=this,t=this.props.setting,n=t.navTheme,c=t.primaryColor,s=t.layout,u=t.colorWeak,d=this.state.collapse;return l.a.createElement(r["a"],{visible:d,width:300,onClose:this.togglerContent,placement:"right",handler:l.a.createElement("div",{className:oe.a.handle,onClick:this.togglerContent},l.a.createElement(y["a"],{type:d?"close":"setting",style:{color:"#fff",fontSize:20}})),style:{zIndex:999}},l.a.createElement("div",{className:oe.a.content},l.a.createElement(ye,{title:Object(ee["formatMessage"])({id:"app.setting.pagestyle"})},l.a.createElement(me,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:Object(ee["formatMessage"])({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:Object(ee["formatMessage"])({id:"app.setting.pagestyle.light"})}],value:n,onChange:function(t){return e.changeSetting("navTheme",t)}})),l.a.createElement(fe,{title:Object(ee["formatMessage"])({id:"app.setting.themecolor"}),value:c,onChange:function(t){return e.changeSetting("primaryColor",t)}}),l.a.createElement(g,null),l.a.createElement(ye,{title:Object(ee["formatMessage"])({id:"app.setting.navigationmode"})},l.a.createElement(me,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:Object(ee["formatMessage"])({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:Object(ee["formatMessage"])({id:"app.setting.topmenu"})}],value:s,onChange:function(t){return e.changeSetting("layout",t)}})),l.a.createElement(v["a"],{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),l.a.createElement(g,null),l.a.createElement(ye,{title:Object(ee["formatMessage"])({id:"app.setting.othersettings"})},l.a.createElement(v["a"],{split:!1,renderItem:this.renderLayoutSettingItem,dataSource:[{title:Object(ee["formatMessage"])({id:"app.setting.weakmode"}),action:l.a.createElement(A,{size:"small",checked:!!u,onChange:function(t){return e.changeSetting("colorWeak",t)}})}]})),l.a.createElement(g,null),l.a.createElement(te["CopyToClipboard"],{text:JSON.stringify(Object(O["a"])(t,["colorWeak"]),null,2),onCopy:function(){return i["a"].success(Object(ee["formatMessage"])({id:"app.setting.copyinfo"}))}},l.a.createElement(a["a"],{block:!0,icon:"copy"},Object(ee["formatMessage"])({id:"app.setting.copy"}))),l.a.createElement(o["a"],{type:"warning",className:oe.a.productionHint,message:l.a.createElement("div",null,Object(ee["formatMessage"])({id:"app.setting.production.hint"})," ",l.a.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),t}(c["Component"]),F=L))||F);t["default"]=be},XIdC:function(e,t,n){e.exports=n("Ctgt")},bE4E:function(e,t,n){e.exports={"ant-divider":"ant-divider","ant-divider-vertical":"ant-divider-vertical","ant-divider-horizontal":"ant-divider-horizontal","ant-divider-with-text-center":"ant-divider-with-text-center","ant-divider-with-text-left":"ant-divider-with-text-left","ant-divider-with-text-right":"ant-divider-with-text-right","ant-divider-inner-text":"ant-divider-inner-text","ant-divider-dashed":"ant-divider-dashed"}},czTT:function(e,t,n){e.exports={"ant-switch":"ant-switch","ant-switch-inner":"ant-switch-inner","ant-switch-loading-icon":"ant-switch-loading-icon","ant-switch-disabled":"ant-switch-disabled","ant-switch-loading":"ant-switch-loading","ant-switch-checked":"ant-switch-checked","ant-switch-small":"ant-switch-small",AntSwitchSmallLoadingCircle:"AntSwitchSmallLoadingCircle"}},rHrb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n("q1tI"),i=s(a),c=n("+QRC"),l=s(c);function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=t.CopyToClipboard=function(e){function t(){var e,n,r,o;d(this,t);for(var a=arguments.length,c=Array(a),s=0;s<a;s++)c[s]=arguments[s];return r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n=r,r.onClick=function(e){var t=r.props,n=t.text,o=t.onCopy,a=t.children,c=t.options,s=i.default.Children.only(a),u=(0,l.default)(n,c);o&&o(n,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)},o=n,p(r,o)}return f(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,["text","onCopy","options","children"]),o=i.default.Children.only(t);return i.default.cloneElement(o,r({},n,{onClick:this.onClick}))}}]),t}(i.default.PureComponent);h.defaultProps={onCopy:void 0,options:void 0}}}]);