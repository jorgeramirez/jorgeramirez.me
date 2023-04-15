"use strict";(self.webpackChunkjramirez_me=self.webpackChunkjramirez_me||[]).push([[678],{7814:function(e,t,r){r.d(t,{G:function(){return w}});var n=r(3636),a=r(5697),o=r.n(a),l=r(7294);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function u(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];var d=!1;try{d=!0}catch(E){}function h(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var w=l.forwardRef((function(e,t){var r=e.icon,a=e.mask,o=e.symbol,l=e.className,i=e.title,c=e.titleId,m=e.maskId,p=h(r),b=g("classes",[].concat(u(function(e){var t,r=e.beat,n=e.fade,a=e.beatFade,o=e.bounce,l=e.shake,i=e.flash,s=e.spin,c=e.spinPulse,m=e.spinReverse,u=e.pulse,p=e.fixedWidth,b=e.inverse,y=e.border,d=e.listItem,h=e.flip,g=e.size,w=e.rotation,v=e.pull,E=(f(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":l,"fa-flash":i,"fa-spin":s,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":p,"fa-inverse":b,"fa-border":y,"fa-li":d,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(g),null!=g),f(t,"fa-rotate-".concat(w),null!=w&&0!==w),f(t,"fa-pull-".concat(v),null!=v),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map((function(e){return E[e]?e:null})).filter((function(e){return e}))}(e)),u(l.split(" ")))),y=g("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),E=g("mask",h(a)),O=(0,n.qv)(p,s(s(s(s({},b),y),E),{},{symbol:o,title:i,titleId:c,maskId:m}));if(!O)return function(){var e;!d&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var k=O.abstract,j={ref:t};return Object.keys(e).forEach((function(t){w.defaultProps.hasOwnProperty(t)||(j[t]=e[t])})),v(k[0],j)}));w.displayName="FontAwesomeIcon",w.propTypes={beat:o().bool,border:o().bool,beatFade:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf([!0,!1,"horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},w.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var v=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=b(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,c=m(n,y);return o.attrs.style=s(s({},o.attrs.style),i),t.apply(void 0,[r.tag,s(s({},o.attrs),c)].concat(u(a)))}.bind(null,l.createElement)},6558:function(e,t,r){r.r(t);var n=r(7294),a=r(8606),o=r(5700),l=r(3787),i=r(682),s=r(1330),c=r(7814);t.default=e=>{let{data:t}=e;const{unemployed:r,firstName:f,lastName:m,occupation:u}=t.site.siteMetadata,{dark:p}=(0,n.useContext)(a.Z),b="undefined"!=typeof window&&window;return n.createElement(o.Xg,null,n.createElement(l.HJ,{title:"Home"}),n.createElement(i.Z,{className:"text-center pt-5 mt-5",fluid:!0},n.createElement(s.Z,{width:"150",height:"150",fluid:!0,src:"../../icons/me.jpeg",style:{borderRadius:"50%"}}),n.createElement(i.Z,{className:"py-0 my-0"},n.createElement("h1",{style:{fontSize:b&&window.innerWidth<800?"3rem":"5rem",color:"black"}},n.createElement("span",{className:"first-name"},f)," ",n.createElement("span",{className:"last-name"},m)),n.createElement("p",null,n.createElement("i",null,"Researcher and software engineer keen to learn new things. "),n.createElement("i",null,"Interested in distributed systems, machine/deep learning, ",n.createElement("br",null),"human-in-the-loop data curation pipelines for AI-powered systems, MLOps, and everything in between."," ")),n.createElement("div",{className:"profile-info"},n.createElement("div",{style:{lineHeight:1.2},className:"info"},n.createElement("p",{style:{marginBottom:0}},n.createElement("span",{style:{fontSize:"1.15rem"}},"Software Engineer, ML Platform")," ",n.createElement("a",{href:"https://glovoapp.com/",target:"_blank",rel:"noopener noreferrer"},"@ Glovo"),"."),n.createElement("p",{style:{marginBottom:0}},n.createElement("span",{style:{fontSize:"1.15rem"}},"Ph.D.")," ",n.createElement("a",{href:"https://ict.unitn.it/",target:"_blank",rel:"noopener noreferrer"},"@ UNITN"),"."),n.createElement("p",{style:{marginBottom:0}},n.createElement("span",{style:{fontSize:"1.15rem"}},"Informatics Engineer")," ",n.createElement("a",{href:"https://www.pol.una.py/",target:"_blank",rel:"noopener noreferrer"},"@ FPUNA"),"."),n.createElement("p",{style:{marginBottom:10}},n.createElement("span",{style:{fontSize:"1.15rem"}},"Co-founder")," ",n.createElement("a",{href:"https://www.codium.com.py/en/",target:"_blank",rel:"noopener noreferrer"},"@ Codium"),"."),n.createElement("p",{style:{marginBottom:0},className:"location-info"},n.createElement("b",null,"Asunción")," ",n.createElement("span",{role:"img","aria-label":"From"},"🇵🇾")," ","⟹ ",n.createElement("b",null,"Barcelona")," ",n.createElement("span",{role:"img","aria-label":"Home"},"🇪🇸"))))),n.createElement("hr",{className:"my-3 w-25",style:{margin:"auto"}}),n.createElement("div",{className:"d-md-inline-flex icons-container",style:{fontSize:"2rem"}},n.createElement("a",{href:"https://scholar.google.com/citations?user=RntrsC8AAAAJ&hl=en",target:"_blank",rel:"noopener noreferrer"},n.createElement(c.G,{icon:["fas","graduation-cap"],className:"icons fa-graduation-cap",title:"Google Scholar",style:{fontSize:"3rem"}})),n.createElement("a",{href:"https://www.github.com/jorgeramirez",target:"_blank",rel:"noopener noreferrer"},n.createElement(c.G,{icon:["fab","github"],className:"icons github",title:"Github",style:{fontSize:"3rem"}})),n.createElement("a",{href:"https://www.linkedin.com/in/jorgeramirez1990",target:"_blank",rel:"noopener noreferrer"},n.createElement(c.G,{icon:["fab","linkedin"],className:"icons linkedin",title:"LinkedIn",style:{fontSize:"3rem"}})),n.createElement("a",{href:"https://stackoverflow.com/users/1726085/jramirez",target:"_blank",rel:"noopener noreferrer"},n.createElement(c.G,{icon:["fab","stack-overflow"],className:"icons stack-overflow",title:"StackOverflow",style:{fontSize:"3rem"}})),n.createElement("a",{href:"https://www.twitter.com/ingheniero",target:"_blank",rel:"noopener noreferrer"},n.createElement(c.G,{icon:["fab","twitter"],className:"icons twitter",title:"Twitter",style:{fontSize:"3rem"}})),n.createElement("a",{href:"mailto:jorge.ramirezmedina@unitn.it",target:"_blank",rel:"noopener noreferrer"},n.createElement(c.G,{icon:["fas","envelope"],className:"icons mail",title:"e-mail",style:{fontSize:"3rem"}})))))}},3787:function(e,t,r){r.d(t,{HJ:function(){return n.Z},Ni:function(){return a.Z}});var n=r(7780),a=r(8606)},1330:function(e,t,r){var n=r(4184),a=r.n(n),o=r(7294),l=r(5697),i=r.n(l),s=r(6792),c=r(5893);i().string,i().bool,i().bool,i().bool,i().bool;const f=o.forwardRef((({bsPrefix:e,className:t,fluid:r=!1,rounded:n=!1,roundedCircle:o=!1,thumbnail:l=!1,...i},f)=>(e=(0,s.vE)(e,"img"),(0,c.jsx)("img",{ref:f,...i,className:a()(t,r&&`${e}-fluid`,n&&"rounded",o&&"rounded-circle",l&&`${e}-thumbnail`)}))));f.displayName="Image",t.Z=f}}]);
//# sourceMappingURL=component---src-pages-index-js-ceeb1af16fb1a1aaf563.js.map