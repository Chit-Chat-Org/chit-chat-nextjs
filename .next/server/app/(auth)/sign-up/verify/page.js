(()=>{var e={};e.id=929,e.ids=[929],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},6005:e=>{"use strict";e.exports=require("node:crypto")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},46244:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>l,pages:()=>c,routeModule:()=>m,tree:()=>u}),r(15159),r(95795),r(35866),r(58258);var s=r(23191),a=r(88716),i=r(37922),n=r.n(i),o=r(95231),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let u=["",{children:["(auth)",{children:["sign-up",{children:["verify",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,15159)),"C:\\Users\\Apurv Krishn Jha\\Desktop\\chit-chat-next-v2\\src\\app\\(auth)\\sign-up\\verify\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,95795)),"C:\\Users\\Apurv Krishn Jha\\Desktop\\chit-chat-next-v2\\src\\app\\(auth)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,58258)),"C:\\Users\\Apurv Krishn Jha\\Desktop\\chit-chat-next-v2\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\Apurv Krishn Jha\\Desktop\\chit-chat-next-v2\\src\\app\\(auth)\\sign-up\\verify\\page.tsx"],l="/(auth)/sign-up/verify/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(auth)/sign-up/verify/page",pathname:"/sign-up/verify",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},41016:(e,t,r)=>{let s={"17900d20883305292e410adacd598f5c88266282":()=>Promise.resolve().then(r.bind(r,3479)).then(e=>e.invalidateCacheAction)};async function a(e,...t){return(await s[e]()).apply(null,t)}e.exports={"17900d20883305292e410adacd598f5c88266282":a.bind(null,"17900d20883305292e410adacd598f5c88266282")}},21073:(e,t,r)=>{Promise.resolve().then(r.bind(r,20117)),Promise.resolve().then(r.bind(r,16566)),Promise.resolve().then(r.bind(r,91721)),Promise.resolve().then(r.bind(r,72248)),Promise.resolve().then(r.bind(r,40422))},51086:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},29054:(e,t,r)=>{Promise.resolve().then(r.bind(r,56308))},35303:()=>{},56308:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(10326);r(17577);var a=r(41840),i=r(66775),n=r(35047);let o=()=>{let e=(0,n.useRouter)(),{isSignedIn:t,user:r,isLoaded:o}=(0,i.aF)();if(t||e.push("/sign-up"),!o)return s.jsx("div",{children:"Loading....."});console.log(r);let d=async()=>{console.log(await (0,a.Mo)({ExternalId:r?.id,username:r?.username,email:r?.emailAddresses[0].emailAddress,fullname:r?.fullName}))};return s.jsx("div",{className:"flex justify-center h-screen items-center",children:s.jsx("button",{type:"submit",className:"border border-border bg-gray-900 px-4 py3 rounded-md",onClick:d,children:"Verify"})})}},41840:(e,t,r)=>{"use strict";r.d(t,{$9:()=>i,BX:()=>d,Fi:()=>l,Lc:()=>n,Mo:()=>p,Pd:()=>c,Wi:()=>o,XU:()=>u});var s=r(44099);let a=(0,r(67990).K)({Production:!0}),i=async e=>(await s.Z.get(a+"/api/v1/newOrganization",{params:{UserId:e}})).data,n=async e=>(await s.Z.post(a+"/api/v1/addAiTrainingModel",e)).data,o=async e=>await s.Z.post(a+"/api/v1/upload",e),d=async e=>await s.Z.post(a+"/api/v1/upload/url",{resource_url:e}),u=async e=>(await s.Z.get(a+"/api/v1/addAiTrainingModel",{params:{UserId:e}})).data,c=async e=>(await s.Z.get(a+"/api/v1/addAiTrainingModel/key",{params:{originalAPIKey:e}})).data,l=async e=>await s.Z.post(a+"/api/v1/newOrganization",e),p=async e=>await s.Z.post(a+"/signup",e)},67990:(e,t,r)=>{"use strict";r.d(t,{K:()=>s});let s=e=>(e.Production,"https://api.chit-chat.fun")},40422:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>v});var s=r(10326),a=r(84097),i=r(17577),n=r(54659),o=r(28671),d=r(94019),u=r(51223);let c=n.zt,l=i.forwardRef(({className:e,...t},r)=>s.jsx(n.l_,{ref:r,className:(0,u.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));l.displayName=n.l_.displayName;let p=(0,o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),m=i.forwardRef(({className:e,variant:t,...r},a)=>s.jsx(n.fC,{ref:a,className:(0,u.cn)(p({variant:t}),e),...r}));m.displayName=n.fC.displayName,i.forwardRef(({className:e,...t},r)=>s.jsx(n.aU,{ref:r,className:(0,u.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=n.aU.displayName;let f=i.forwardRef(({className:e,...t},r)=>s.jsx(n.x8,{ref:r,className:(0,u.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:s.jsx(d.Z,{className:"h-4 w-4"})}));f.displayName=n.x8.displayName;let h=i.forwardRef(({className:e,...t},r)=>s.jsx(n.Dx,{ref:r,className:(0,u.cn)("text-sm font-semibold",e),...t}));h.displayName=n.Dx.displayName;let x=i.forwardRef(({className:e,...t},r)=>s.jsx(n.dk,{ref:r,className:(0,u.cn)("text-sm opacity-90",e),...t}));function v(){let{toasts:e}=(0,a.pm)();return(0,s.jsxs)(c,{children:[e.map(function({id:e,title:t,description:r,action:a,...i}){return(0,s.jsxs)(m,{...i,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[t&&s.jsx(h,{children:t}),r&&s.jsx(x,{children:r})]}),a,s.jsx(f,{})]},e)}),s.jsx(l,{})]})}x.displayName=n.dk.displayName},84097:(e,t,r)=>{"use strict";r.d(t,{pm:()=>p});var s=r(17577);let a=0,i=new Map,n=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?n(r):e.toasts.forEach(e=>{n(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],u={toasts:[]};function c(e){u=o(u,e),d.forEach(e=>{e(u)})}function l({...e}){let t=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function p(){let[e,t]=s.useState(u);return s.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:l,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},51223:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var s=r(41135),a=r(31009);function i(...e){return(0,a.m6)((0,s.W)(e))}},95795:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(19510);r(71159);let a=({children:e})=>s.jsx("div",{className:"flex items-center justify-center h-screen",children:e})},15159:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});var s=r(68570);let a=(0,s.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\chit-chat-next-v2\src\app\(auth)\sign-up\verify\page.tsx`),{__esModule:i,$$typeof:n}=a;a.default;let o=(0,s.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\chit-chat-next-v2\src\app\(auth)\sign-up\verify\page.tsx#default`)},58258:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x,metadata:()=>h});var s=r(19510),a=r(67077),i=r.n(a);let n={title:{default:"Astra - AI Powered Website Builder",template:"%s | Astra"},description:"Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",icons:{icon:[{url:"/icons/favicon.ico",href:"/icons/favicon.ico"}]},openGraph:{title:"Astra - AI Powered Website Builder",description:"Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",images:[{url:"/assets/og-image.png"}]},twitter:{card:"summary_large_image",creator:"@shreyassihasane",title:"Astra - AI Powered Website Builder",description:"Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",images:[{url:"/assets/og-image.png"}]},metadataBase:new URL("https://astra-app.vercel.app")};var o=r(40644);r(54315);var d=r(7311),u=r(8349),c=r(68570);let l=(0,c.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\chit-chat-next-v2\src\components\ui\toaster.tsx`),{__esModule:p,$$typeof:m}=l;l.default;let f=(0,c.createProxy)(String.raw`C:\Users\Apurv Krishn Jha\Desktop\chit-chat-next-v2\src\components\ui\toaster.tsx#Toaster`),h=n;function x({children:e}){return s.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:s.jsx("body",{className:(0,o.cn)("min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",i().className),children:(0,s.jsxs)(d.El,{appearance:{baseTheme:u.dark},children:[e,s.jsx(f,{})]})})})}},40644:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var s=r(55761),a=r(62386);function i(...e){return(0,a.m6)((0,s.W)(e))}},54315:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[601,99],()=>r(46244));module.exports=s})();