var n=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var o=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var u=(e,t)=>{for(var i in t)n(e,i,{get:t[i],enumerable:!0})},l=(e,t,i,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of o(t))!p.call(e,r)&&r!==i&&n(e,r,{get:()=>t[r],enumerable:!(a=s(t,r))||a.enumerable});return e};var d=e=>l(n({},"__esModule",{value:!0}),e);var g={};u(g,{default:()=>m});module.exports=d(g);function f(e){return{printWidth:140,tabWidth:4,useTabs:!1,semi:!0,singleQuote:!0,quoteProps:"as-needed",jsxSingleQuote:!0,trailingComma:"none",bracketSpacing:!0,bracketSameLine:!1,arrowParens:"avoid",insertPragma:!1,proseWrap:"never",htmlWhitespaceSensitivity:"strict",vueIndentScriptAndStyle:!1,endOfLine:"lf",embeddedLanguageFormatting:"auto",singleAttributePerLine:!1,...e||{}}}var m=f;
