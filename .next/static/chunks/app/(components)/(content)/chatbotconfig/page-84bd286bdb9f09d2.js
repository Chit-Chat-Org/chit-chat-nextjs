(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{7110:function(e,t,n){Promise.resolve().then(n.bind(n,9128))},9128:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(7437),s=n(2265),r=n(4697);let i=(0,n(4443).K)({Production:!0});var o=e=>{let{initialMessage:t="Hello! How Can I Assist You?",chatbotTitle:n="Chat Bot",brandImage:o="https://www.kindpng.com/picc/m/179-1798038_chatbots-builder-pricing-crozdesk-free-chatbot-hd-png.png",apiKey:l,switchAPI:c=!1,suggestions:d=[],rateLimitDuration:u=5e3}=e,[p,f]=(0,s.useState)(!1),[m,h]=(0,s.useState)([]),[x,g]=(0,s.useState)(""),[b,y]=(0,s.useState)(!1),v=(0,s.useRef)(null),j=(0,s.useRef)(null),[w,N]=(0,s.useState)(!1),[S,T]=(0,s.useState)(d),k=e=>{g(e),C(),T([])};async function _(e){try{let t=i+"/api/v1/QnARetrieval?key=".concat(l);c&&(t="https://your-hosted-domain/api/v1/organization/generateCompletion?key=".concat(l));let n=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})}),a=await n.json();h(e=>[...e,{type:"bot",text:a.message}]),y(!1)}catch(e){console.error(e),h(e=>[...e,{type:"bot",text:"Oops! Something went wrong."}]),y(!1)}}(0,s.useEffect)(()=>{t&&h([{type:"bot",text:t}])},[t]),(0,s.useEffect)(()=>{if(p){var e;null===(e=v.current)||void 0===e||e.focus()}},[p]),(0,s.useEffect)(()=>{var e;null===(e=j.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},[m]),(0,s.useEffect)(()=>{T(d)},[d]);let C=()=>{if(x.trim()&&!w){let e={type:"user",text:x};h(t=>[...t,e]),g(""),y(!0),T([]),_(x),N(!0),setTimeout(()=>N(!1),u)}};return(0,a.jsx)("div",{className:"fixed bottom-10 right-10",children:p?(0,a.jsxs)("div",{className:"w-80 h-96 border border-border p-4 bg-gray-850 rounded-lg flex flex-col shadow-lg",children:[(0,a.jsxs)("div",{className:"mb-4 font-bold flex justify-between items-center text-white p-2 rounded-t-lg",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("img",{src:o,alt:"brand",className:"w-6 h-6 rounded-full object-cover mr-2"}),(0,a.jsx)("span",{children:n})]}),(0,a.jsx)("button",{onClick:()=>f(!1),children:(0,a.jsx)(r.Z,{})})]}),(0,a.jsxs)("div",{className:"flex-1 overflow-y-auto mb-4 text-gray-300",children:[m.map((e,t)=>(0,a.jsxs)("div",{className:"p-2 my-2 ".concat("user"===e.type?"ml-auto text-right":""),children:["bot"===e.type&&(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("img",{src:o,alt:"Bot",className:"w-6 h-6 rounded-full mr-2"}),(0,a.jsx)("span",{className:"bg-gray-700 text-white rounded-md pr-4 p-2",children:e.text})]}),"user"===e.type&&(0,a.jsxs)("div",{className:"flex flex-col items-end",children:[(0,a.jsx)("span",{className:"text-gray-500 text-sm mb-1",children:"You"}),(0,a.jsx)("span",{className:"bg-blue-600 pr-4 p-2 rounded-md text-white",children:e.text})]})]},t)),b&&(0,a.jsx)("div",{className:"text-gray-500",children:"Bot is typing..."}),(0,a.jsx)("div",{ref:j}),S.length>0&&(0,a.jsx)("div",{className:"flex overflow-y-auto",children:(0,a.jsxs)("div",{className:"bg-gray-800 p-2 rounded-lg",children:[(0,a.jsx)("div",{className:"mt-2",children:"Here are some suggestions:"}),S.map((e,t)=>(0,a.jsx)("button",{className:"bg-gray-700 hover:bg-gray-600 text-white rounded-md px-2 py-1 m-1",onClick:()=>k(e),children:e},t))]})})]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("input",{ref:v,type:"text",value:x,onChange:e=>g(e.target.value),onKeyPress:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),C())},className:"flex-1 p-2 border border-border rounded-md bg-gray-800 text-white"}),(0,a.jsx)("button",{onClick:C,disabled:b||w,className:"px-2 py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-md",children:"Send"})]})]}):(0,a.jsx)("div",{onClick:()=>f(!0),className:"w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer shadow-lg",children:(0,a.jsx)("img",{src:o,alt:"Chat Icon",className:"w-full h-full rounded-full object-cover"})})})},l=n(2853);n(9558);var c=n(2618),d=n.n(c),u=e=>{let{apiKey:t,initialMessage:n,chatbotTitle:r,LLM:i,brandImage:o,suggestions:c,rateLimitDuration:u,onClick:p}=e,f='async function generateAnswer(userQuestion) {\n    const chatAPIUrl = "https://chit-chat.fun/api/v1/QnARetrieval?key='.concat(t,'";\n    const payloadBody = { prompt: userQuestion, llm: "').concat(i,'" };\n\n    try {\n      const response = await fetch(chatAPIUrl, {\n        method: "POST",\n        headers: { "Content-Type": "application/json" },\n        body: JSON.stringify(payloadBody),\n      });\n\n      if (!response.ok) {\n        throw new Error("HTTP error! Status:", response.status);\n      }\n\n      const jsonData = await response.json();\n      return jsonData;\n    } catch (error) {\n      console.error("Error fetching data:", error);\n      throw error; \n    }\n  };\n\n  // Usage Example:\n  // generateAnswer("ask your question")\n  //   .then((answer) => console.log(answer))\n  //   .catch((error) => console.log(error));\n  '),[m,h]=(0,s.useState)(f),x=(0,s.useRef)(null);(0,s.useEffect)(()=>{x.current&&d().highlightAllUnder(x.current)},[m]);let g=e=>{switch(e){case"API":h(f);break;case"JS":h('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <link rel="stylesheet" href="https://chit-chat.fun/style.css" />\n  <title>Chat Bot</title>\n</head>\n<body>\n  <div id="chatbot"></div>\n</body>\n<script src="https://chit-chat.fun/script.js"></script>\n<script>\n  chatbot.setChatBotConfiguration({\n    apiKey: "'.concat(t,'",\n    chatbotTitle: "').concat(r,'",\n    LLM: "').concat(i,'",\n    initialMessage: "').concat(n,'",\n    brandImage: "').concat(o,'",\n    suggestions: [').concat(c.map(e=>'"'.concat(e,'"')).join(", "),"],\n    rateLimitDuration: ").concat(u,",\n  });\n</script>\n</html>"));break;case"REACTJS":h('"install the npm dependecies:"\nnpm i chit-chat-react\n\n"Paste This Code"\n\nimport ChatBot from "chit-chat-react";\n\nexport default function YourComponent() {\n  return (\n    <ChatBot\n      apiKey="'.concat(t,'"\n      chatbotTitle="').concat(r,'"\n      LLM="').concat(i,'"\n      initialMessage="').concat(n,'"\n      brandImage="').concat(o,'"\n      suggestions={[').concat(c.map(e=>'"'.concat(e,'"')).join(", "),"]}\n      rateLimitDuration={").concat(u,"}\n    />\n  );\n}"));break;case"PYTHON":h('import requests\n\ndef generate_answer(user_question):\n  chat_api_url = "http://chit-chat.fun/api/v1/QnARetrieval?key='.concat(t,'"\n  payload_body = {"prompt": user_question, "llm": "').concat(i,'"}\n\n  try:\n    response = requests.post(chat_api_url, json=payload_body, headers={"Content-Type": "application/json"})\n\n    if response.status_code != 200:\n      raise Exception(f"HTTP error! Status: {response.status_code}")\n\n    return response.json()\n  except Exception as e:\n    print("Error fetching data:", e)\n    raise e'));break;default:h("")}};return(0,a.jsx)("div",{onClick:p,className:"absolute inset-0 flex items-center justify-center p-4 sm:p-28 md:p-32 lg:p-16 xl:p-12",children:(0,a.jsxs)("div",{onClick:e=>e.stopPropagation(),className:"relative bg-gray-900 border-border backdrop-blur-md p-4 sm:p-6 rounded-lg w-full max-w-2xl h-full max-h-screen overflow-y-auto",children:[(0,a.jsx)("div",{className:"flex space-x-4 mb-4",children:["API","JS","REACTJS","PYTHON"].map(e=>(0,a.jsx)("button",{onClick:()=>g(e),className:"px-3 py-2 bg-gray-700 text-white rounded",children:e},e))}),(0,a.jsx)("button",{onClick:()=>{x.current&&navigator.clipboard.writeText(x.current.innerText)},className:"absolute top-2 right-2 bg-white p-2 rounded-full active:bg-gray-700 hover:bg-gray-200 transition duration-300 ease-in-out z-10",children:(0,a.jsx)(l.Z,{className:"text-gray-700 active:text-black"})}),(0,a.jsx)("div",{className:"relative z-0",children:(0,a.jsx)("pre",{ref:x,className:"language-javascript overflow-x-auto rounded-lg shadow-xl hljs p-2 sm:text-base text-sm w-full",children:(0,a.jsx)("code",{children:m})})})]})})},p=n(6763),f=n(6463),m=n(402),h=n(9730),x=n(9354);let g=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,a.jsx)("textarea",{className:(0,x.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...s})});g.displayName="Textarea";var b=n(9888),y=n(3073),v=n(8344),j=n(7138),w=()=>{let e=(0,f.useSearchParams)().get("key"),{toast:t}=(0,p.pm)(),[n,r]=(0,s.useState)([]),[i,l]=(0,s.useState)(!0),[c,d]=(0,s.useState)(!1),[x,w]=(0,s.useState)("Gemini"),N=(0,f.useRouter)(),{isSignedIn:S,user:T,isLoaded:k}=(0,y.aF)(),[_,C]=(0,s.useState)({apiKey:"",initialMessage:"Hello! How Can I Assist You?",chatbotTitle:"Chat bot",brandImage:"https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle-thumbnail.png",suggestions:[],rateLimitDuration:5e3}),[I,A]=(0,s.useState)(_);return((0,s.useEffect)(()=>{e&&C(t=>({...t,apiKey:e}))},[e]),(0,s.useEffect)(()=>{k&&(S?(async()=>{try{var e;let t=await (0,v.XU)(null==T?void 0:T.id);r((null==t?void 0:null===(e=t.response)||void 0===e?void 0:e.data)||[])}catch(e){t({title:"Oops! Something went wrong.",description:"Unable to fetch AI models.",variant:"destructive"})}finally{l(!1)}})():N.push("/sign-in"))},[S,k,null==T?void 0:T.id,N,t]),!k||i)?(0,a.jsx)("div",{className:"flex justify-center items-center h-full",children:"Loading..."}):(0,a.jsx)(a.Fragment,{children:null===e?(0,a.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,a.jsxs)(b.Ph,{onValueChange:e=>N.push("/chatbotconfig?key=".concat(e)),children:[(0,a.jsx)(b.i4,{className:"w-[280px]",children:(0,a.jsx)(b.ki,{placeholder:"Select AI Model"})}),(0,a.jsx)(b.Bw,{children:(0,a.jsxs)(b.DI,{children:[(0,a.jsx)(b.n5,{children:"AI Models"}),n.length>0?n.map(e=>(0,a.jsx)(b.Ql,{value:e.apiKey,children:e.organizationName},e.apiKey)):(0,a.jsx)(b.Ph,{onValueChange:()=>N.push("/dashboard"),children:(0,a.jsx)(b.Ql,{value:"dashboard",children:"Create AI Model."})})]})})]})}):(0,a.jsxs)("div",{className:"sm:pt-10 pt-44 overflow-y-auto flex items-center justify-center",children:[c&&(0,a.jsx)(u,{LLM:x,onClick:()=>{d(!1)},...I}),(0,a.jsx)("div",{className:"bg-background border border-border rounded p-8 w-96",children:(0,a.jsxs)("form",{className:"space-y-4",onSubmit:e=>{if(e.preventDefault(),!x){t({title:"Validation Error",description:"Please select an LLM before proceeding.",variant:"destructive"});return}d(!0),A(_)},children:[(0,a.jsxs)(m._,{children:[(0,a.jsx)("div",{className:"font-sans font-semibold text-md p-2",children:"Chatbot Title:"}),(0,a.jsx)(h.I,{className:"block bg-gray-900 rounded p-2 w-full",placeholder:"Chatbot Title",value:_.chatbotTitle,onChange:e=>C(t=>({...t,chatbotTitle:e.target.value}))})]}),(0,a.jsxs)(m._,{children:[(0,a.jsx)("div",{className:"font-sans font-semibold text-md p-2",children:"Brand Image URL:"}),(0,a.jsx)(h.I,{className:"block bg-gray-900 rounded p-2 w-full",placeholder:"Brand Image URL",value:_.brandImage,onChange:e=>C(t=>({...t,brandImage:e.target.value}))})]}),(0,a.jsxs)(m._,{children:[(0,a.jsx)("div",{className:"font-sans font-semibold text-md p-2",children:"Suggestions:"}),(0,a.jsx)(g,{className:"block bg-gray-900 rounded p-2 w-full",placeholder:"Enter suggestions (one per line)",value:_.suggestions.join("\n"),onChange:e=>C(t=>({...t,suggestions:e.target.value.split("\n")}))})]}),(0,a.jsxs)(m._,{children:[(0,a.jsx)("div",{className:"font-sans font-semibold text-md p-2",children:"Rate Limit Duration (in MS):"}),(0,a.jsx)(h.I,{className:"block bg-gray-900 rounded p-2 w-full",placeholder:"Rate Limit Duration",type:"number",value:_.rateLimitDuration,onChange:e=>C(t=>({...t,rateLimitDuration:Number(e.target.value)}))})]}),(0,a.jsxs)(m._,{children:[(0,a.jsx)("div",{className:"font-sans font-semibold text-md p-2",children:"Select LLM:"}),(0,a.jsxs)(b.Ph,{onValueChange:w,value:x,children:[(0,a.jsx)(b.i4,{className:"w-full",children:(0,a.jsx)(b.ki,{placeholder:"Select LLM"})}),(0,a.jsx)(b.Bw,{children:(0,a.jsxs)(b.DI,{children:[(0,a.jsx)(b.n5,{children:"AI Models"}),(0,a.jsx)(b.Ql,{value:"Gemini",children:"Gemini"}),(0,a.jsx)(b.Ql,{value:"OpenAI",children:"OpenAI"})]})})]})]}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)(j.default,{href:"/docs",className:"text-end mt-4 bg-gray-800 text-white rounded p-2",children:"Docs"}),(0,a.jsx)("button",{type:"submit",className:"text-end mt-4 bg-gray-800 text-white rounded p-2",children:"Quick Integrate"})]})]})}),(0,a.jsx)(o,{..._})]})})}},8344:function(e,t,n){"use strict";n.d(t,{$9:function(){return r},BX:function(){return l},Fi:function(){return u},Lc:function(){return i},Mo:function(){return p},Pd:function(){return d},Wi:function(){return o},XU:function(){return c}});var a=n(8472);let s=(0,n(4443).K)({Production:!0}),r=async e=>(await a.Z.get(s+"/api/v1/newOrganization",{params:{UserId:e}})).data,i=async e=>(await a.Z.post(s+"/api/v1/addAiTrainingModel",e)).data,o=async e=>await a.Z.post(s+"/api/v1/upload",e),l=async e=>await a.Z.post(s+"/api/v1/upload/url",{resource_url:e}),c=async e=>(await a.Z.get(s+"/api/v1/addAiTrainingModel",{params:{UserId:e}})).data,d=async e=>(await a.Z.get(s+"/api/v1/addAiTrainingModel/key",{params:{originalAPIKey:e}})).data,u=async e=>await a.Z.post(s+"/api/v1/newOrganization",e),p=async e=>await a.Z.post(s+"/signup",e)},4443:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});let a=e=>(e.Production,"https://api.chit-chat.fun")},9730:function(e,t,n){"use strict";n.d(t,{I:function(){return u}});var a=n(8646),s=n(7437),r=n(2265),i=n(9354),o=n(5282),l=n(4096),c=n(4924);function d(){let e=(0,a._)(["\n        radial-gradient(\n          "," circle at ","px ","px,\n          var(--blue-500),\n          transparent 80%\n        )\n      "]);return d=function(){return e},e}let u=r.forwardRef((e,t)=>{let{className:n,type:a,...u}=e,[p,f]=r.useState(!1),m=(0,o.c)(0),h=(0,o.c)(0);return(0,s.jsx)(l.E.div,{style:{background:(0,c.Y)(d(),p?"100px":"0px",m,h)},onMouseMove:function(e){let{currentTarget:t,clientX:n,clientY:a}=e,{left:s,top:r}=t.getBoundingClientRect();m.set(n-s),h.set(a-r)},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),className:"p-[2px] rounded-lg transition duration-300 group/input",children:(0,s.jsx)("input",{type:a,className:(0,i.cn)("flex h-10 w-full border-none bg-gray-900 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent \n          file:text-sm file:font-medium placeholder-text-neutral-600 \n          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600\n           disabled:cursor-not-allowed disabled:opacity-50\n           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]\n           group-hover/input:shadow-none transition duration-400\n           ",n),ref:t,...u})})});u.displayName="Input"},402:function(e,t,n){"use strict";n.d(t,{_:function(){return c}});var a=n(7437),s=n(2265),r=n(8364),i=n(2218),o=n(9354);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,a.jsx)(r.f,{ref:t,className:(0,o.cn)(l(),n),...s})});c.displayName=r.f.displayName},9888:function(e,t,n){"use strict";n.d(t,{Bw:function(){return x},DI:function(){return u},Ph:function(){return d},Ql:function(){return b},i4:function(){return f},ki:function(){return p},n5:function(){return g}});var a=n(7437),s=n(2265),r=n(6020),i=n(2421),o=n(4392),l=n(2468),c=n(9354);let d=r.fC,u=r.ZA,p=r.B4,f=s.forwardRef((e,t)=>{let{className:n,children:s,...o}=e;return(0,a.jsxs)(r.xz,{ref:t,className:(0,c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",n),...o,children:[s,(0,a.jsx)(r.JO,{asChild:!0,children:(0,a.jsx)(i.Z,{className:"h-4 w-4 opacity-50"})})]})});f.displayName=r.xz.displayName;let m=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,a.jsx)(r.u_,{ref:t,className:(0,c.cn)("flex cursor-pointer items-center justify-center py-1",n),...s,children:(0,a.jsx)(o.Z,{className:"h-4 w-4"})})});m.displayName=r.u_.displayName;let h=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,a.jsx)(r.$G,{ref:t,className:(0,c.cn)("flex cursor-pointer items-center justify-center py-1",n),...s,children:(0,a.jsx)(i.Z,{className:"h-4 w-4"})})});h.displayName=r.$G.displayName;let x=s.forwardRef((e,t)=>{let{className:n,children:s,position:i="popper",...o}=e;return(0,a.jsx)(r.h_,{children:(0,a.jsxs)(r.VY,{ref:t,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===i&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:i,...o,children:[(0,a.jsx)(m,{}),(0,a.jsx)(r.l_,{className:(0,c.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),(0,a.jsx)(h,{})]})})});x.displayName=r.VY.displayName;let g=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,a.jsx)(r.__,{ref:t,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",n),...s})});g.displayName=r.__.displayName;let b=s.forwardRef((e,t)=>{let{className:n,children:s,...i}=e;return(0,a.jsxs)(r.ck,{ref:t,className:(0,c.cn)("relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...i,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(r.wU,{children:(0,a.jsx)(l.Z,{className:"h-4 w-4"})})}),(0,a.jsx)(r.eT,{children:s})]})});b.displayName=r.ck.displayName,s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,a.jsx)(r.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",n),...s})}).displayName=r.Z0.displayName},6763:function(e,t,n){"use strict";n.d(t,{pm:function(){return p}});var a=n(2265);let s=0,r=new Map,i=e=>{if(r.has(e))return;let t=setTimeout(()=>{r.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);r.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:n}=t;return n?i(n):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],c={toasts:[]};function d(e){c=o(c,e),l.forEach(e=>{e(c)})}function u(e){let{...t}=e,n=(s=(s+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>d({type:"DISMISS_TOAST",toastId:n});return d({type:"ADD_TOAST",toast:{...t,id:n,open:!0,onOpenChange:e=>{e||a()}}}),{id:n,dismiss:a,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:n}})}}function p(){let[e,t]=a.useState(c);return a.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},9354:function(e,t,n){"use strict";n.d(t,{cn:function(){return r}});var a=n(4839),s=n(6164);function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m6)((0,a.W)(t))}},9558:function(){}},function(e){e.O(0,[762,73,868,482,472,367,244,395,971,23,744],function(){return e(e.s=7110)}),_N_E=e.O()}]);