"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[771],{1160:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"Blackbird/Quick start guide/7-reset","title":"Blackbird Reset","description":"There are three ways to reset the Blackbird LoRaWAN gateway: a simple reboot, a WiFi password reset, and a full factory reset. These can be performed using the hardware reset button or through the gateway Web UI.","source":"@site/docs/Blackbird/2 - Quick start guide/8-reset.md","sourceDirName":"Blackbird/2 - Quick start guide","slug":"/Blackbird/Quick start guide/7-reset","permalink":"/Blackbird/Quick start guide/7-reset","draft":false,"unlisted":false,"editUrl":"https://github.com/chirpwireless/docs.chirptoken.io/tree/main/docs/Blackbird/2 - Quick start guide/8-reset.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"id":"7-reset","title":"Blackbird Reset"},"sidebar":"tutorialSidebar","previous":{"title":"Verification requirements","permalink":"/Blackbird/Quick start guide/verification"},"next":{"title":"Recommendations for Improving Gateway Availability","permalink":"/Blackbird/Quick start guide/9-availability"}}');var i=s(4848),a=s(8453);const n={sidebar_position:8,id:"7-reset",title:"Blackbird Reset"},o="Blackbird Reset",l={},c=[{value:"Hardware Reset Button",id:"hardware-reset-button",level:2},{value:"Gateway Wisgate UI",id:"gateway-wisgate-ui",level:2}];function d(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"blackbird-reset",children:"Blackbird Reset"})}),"\n",(0,i.jsx)(t.p,{children:"There are three ways to reset the Blackbird LoRaWAN gateway: a simple reboot, a WiFi password reset, and a full factory reset. These can be performed using the hardware reset button or through the gateway Web UI."}),"\n",(0,i.jsx)(t.h2,{id:"hardware-reset-button",children:"Hardware Reset Button"}),"\n",(0,i.jsx)(t.p,{children:"The Blackbird LoRaWAN gateway has a hardware reset button, which can be used to perform the following reset actions:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Reset button",src:s(1365).A+"",width:"623",height:"485"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Reboot"}),": To reboot the device, press the reset button momentarily. The device will restart automatically."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"WiFi Password Reset"}),": To reset the WiFi password to its default value, press and hold the reset button for 5 to 15 seconds. The LED will blink three times as a confirmation that the WiFi password has been reset."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Please keep in mind that the WiFi password reset will took a significant amount of time to complete. Do not interrupt the process by pressing the reset button again, as this may cause the device to malfunction. After the process is completed you will see WiFi named Chirp-xxxxxx (where xxxxxx is the unique number of your gateway, that you may use as a default password for WiFi connection)."})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full Factory Reset"}),": To perform a full factory reset, press and hold the reset button for more than 15 seconds. The LED will blink seven times as a confirmation when the button is released, indicating that the factory reset has been performed."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"gateway-wisgate-ui",children:"Gateway Wisgate UI"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Web UI Reset",src:s(881).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(t.p,{children:"You can also perform a Reboot, a WiFi password reset and a full factory reset through the gateway's Wisgate UI. Follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Access the Blackbird Wisgate UI by entering its IP address in your web browser."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Log in using your password."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Navigate to the "Settings" tab.'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'To reset the WiFi password, click on the "Reconfigure" button. A confirmation message will appear, and the WiFi password will be reset to its default value.'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'To perform a full factory reset, click on the "Reset" button. A confirmation message will appear, and the gateway will be reset to its factory settings.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Please note that performing a full factory reset will erase all your configurations. After performing a full factory reset, you will need to reconfigure the gateway ommiting the step with gateway registration (since it already registered in CHIRP network)."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1365:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/gw_reset_button-6c8290bad213badd19ec63d6786a1dde.png"},881:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/gw_reset_webui-43a6e4d293a5a4aa6f79be2f4bce36ff.png"},8453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>o});var r=s(6540);const i={},a=r.createContext(i);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);