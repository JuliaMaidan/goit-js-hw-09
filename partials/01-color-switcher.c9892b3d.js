const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");let o;e.addEventListener("click",(e=>{o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,e.target.disabled=!0}),1e3)})),t.addEventListener("click",(t=>{clearInterval(o),r.style.backgroundColor="white",e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.c9892b3d.js.map