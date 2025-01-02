"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[2380],{9556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>s});const a=JSON.parse('{"id":"cli-tools/query/balance","title":"Balance","description":"Query for account balance","source":"@site/docs/cli-tools/query/balance.md","sourceDirName":"cli-tools/query","slug":"/cli-tools/query/balance","permalink":"/cli-tools/query/balance","draft":false,"unlisted":false,"editUrl":"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/cli-tools/query/balance.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"Balance","sidebar_position":2,"description":"Query for account balance"},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/cli-tools/query/getting-started"},"next":{"title":"Validator config","permalink":"/cli-tools/query/val-config"}}');var o=n(4848),c=n(8453);const l={sidebar_label:"Balance",sidebar_position:2,description:"Query for account balance"},r="Balance",i={},s=[{value:"Usage",id:"usage",level:2},{value:"Unlocked",id:"unlocked",level:3},{value:"Total",id:"total",level:3}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"balance",children:"Balance"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"$> libra query balance --account ADDRESS\n"})}),"\n",(0,o.jsx)(t.p,{children:"Print out will be of the format:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'{\n  "unlocked": 7151600.786542,\n  "total": 7151600.786542\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"unlocked",children:"Unlocked"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"The unlocked balance is the amount of funds that are available for the account to use. This is the amount that can be used to send transactions, or to delegate to a validator."}),"\n",(0,o.jsx)(t.h3,{id:"total",children:"Total"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"The total balance is the amount of funds that are available for the account to use, plus the amount of funds that are locked up in the account. The total balance is the sum of the unlocked balance and the locked balance."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Unlocked != total indicates that the account recieved funds that are related to a specific contribution to the network, such as a validator, or a worker, and that these funds are locked and are being released by the daily unlock rate (",(0,o.jsx)(t.code,{children:"SLOW_WALLET_EPOCH_DRIP"}),")"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var a=n(6540);const o={},c=a.createContext(o);function l(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);