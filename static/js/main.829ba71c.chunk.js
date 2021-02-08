(this["webpackJsonpyour-app"]=this["webpackJsonpyour-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),i=(a(13),a(14),a(15),a(5)),l=a(6),o=a(2),d=a(8),h=a(7),j=(a(16),a(0)),b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).checkboxChanged=function(){c.setState({includeSpecialCharacters:!c.state.includeSpecialCharacters})},c.state={password:"",length:16,includeSpecialCharacters:!0},c.Generate=c.Generate.bind(Object(o.a)(c)),c.getRandomInt=c.getRandomInt.bind(Object(o.a)(c)),c}return Object(l.a)(a,[{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"Generate",value:function(e,t){for(var a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",c="123456789",n="!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",s="",r=0;r<e;r++){var i=!0===t?this.getRandomInt(3):this.getRandomInt(2);s+=0===i?a[this.getRandomInt(a.length)]:1===i?c[this.getRandomInt(c.length)]:2===i?n[this.getRandomInt(n.length)]:""}return s}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("load",(function(){return e.setState({password:e.Generate(e.state.length,e.state.includeSpecialCharacters)})}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("load",(function(){return e.setState({password:e.Generate(e.state.length,e.state.includeSpecialCharacters)})}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"generator",children:[Object(j.jsx)("h4",{className:"text-white",style:{paddingBottom:"8px"},children:"Generate your password now!"}),Object(j.jsxs)("p",{className:"text-white",children:["Password Length: ",Object(j.jsx)("select",{onChange:function(t){return e.setState({length:t.target.value})},value:this.state.length,className:"password-length-generator",children:Array.from({length:21},(function(e,t){return 0!==t?Object(j.jsx)("option",{children:t},t):""}))})]}),Object(j.jsxs)("p",{className:"text-white",children:["Include special characters",Object(j.jsx)("input",{type:"checkbox",defaultChecked:this.state.includeSpecialCharacters,onChange:this.checkboxChanged,className:"checkbox-special-characters-generator"})]}),Object(j.jsx)("button",{className:"button-generator",onClick:function(){return e.setState({password:e.Generate(e.state.length,e.state.includeSpecialCharacters)})},children:"Generate"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("pre",{className:"password-generator text-white",children:[Object(j.jsx)("span",{className:"unselectable",children:"Password: "}),Object(j.jsx)("span",{className:"password-span-generator",children:this.state.password})," ",Object(j.jsx)("i",{onClick:function(){navigator.clipboard.writeText(e.state.password)},className:"fa fa-clipboard clipboard-generator","aria-hidden":"true"})]})]})}}]),a}(n.a.Component);var u=function(){var e="https://github.com/TommieOlislagers/RandomPasswordGenerator";return Object(j.jsxs)("div",{className:"App text-white",children:[Object(j.jsx)("nav",{className:"container-fluid py-3 w-100 bg-black text-white",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"text-center",children:Object(j.jsxs)("a",{className:"navbar-brand text-white",href:e,children:["Github ",Object(j.jsx)("i",{className:"fa fa-github","aria-hidden":"true"})]})})})}),Object(j.jsx)("header",{className:"mobile-padding",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",style:{paddingTop:"100px"},children:[Object(j.jsx)("div",{className:"col-md-5 pt-4 pb-5",children:Object(j.jsx)(b,{})}),Object(j.jsxs)("div",{className:"offset-md-1 col-md-3 py-4",children:[Object(j.jsxs)("h3",{children:[Object(j.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"})," Secure"]}),Object(j.jsx)("p",{children:"The password generator is in accordance with this password policy."}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"At least 8 characters long"}),Object(j.jsx)("li",{children:"Uppercase letters"}),Object(j.jsx)("li",{children:"Lowercase letters"}),Object(j.jsx)("li",{children:"Numbers"}),Object(j.jsx)("li",{children:"Special characters"})]})]}),Object(j.jsx)("div",{className:"col-md-3 py-4 pb-5",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-md-12",children:[Object(j.jsxs)("h3",{children:[Object(j.jsx)("i",{className:"fa fa-github","aria-hidden":"true"})," Open-source"]}),Object(j.jsxs)("p",{children:["Made public and drivin by the open-source community. Because of this the project can be improved by people and checked for malicious content. ",Object(j.jsx)("a",{href:e,children:"I want to help!"})]})]})})})]})})}),Object(j.jsx)("footer",{className:"container-fluid py-4 w-100 bg-black text-white",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"text-center",children:Object(j.jsxs)("div",{className:"px-1",children:["\xa9 ",(new Date).getFullYear()," Tommie Olislagers - All rights reserved."]})})})})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.829ba71c.chunk.js.map