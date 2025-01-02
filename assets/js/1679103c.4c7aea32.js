"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[9389],{5341:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=r(5893),i=r(1151);const o={sidebar_position:3,description:"Upgrade VM Libraries"},t="Txs - Upgrade",a={id:"cli-tools/txs/upgrade",title:"Txs - Upgrade",description:"Upgrade VM Libraries",source:"@site/docs/cli-tools/txs/upgrade.md",sourceDirName:"cli-tools/txs",slug:"/cli-tools/txs/upgrade",permalink:"/cli-tools/txs/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/cli-tools/txs/upgrade.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Upgrade VM Libraries"},sidebar:"tutorialSidebar",previous:{title:"Txs - Transfer",permalink:"/cli-tools/txs/transfer"},next:{title:"Txs - Validator",permalink:"/cli-tools/txs/validator"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Upgrading the Network",id:"upgrading-the-network",level:3},{value:"Upgrade Transactions",id:"upgrade-transactions",level:2},{value:"Propose an Upgrade",id:"propose-an-upgrade",level:3},{value:"Vote on an Upgrade",id:"vote-on-an-upgrade",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"txs---upgrade",children:"Txs - Upgrade"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"libra txs upgrade"}),"  subcommand includes a set of subcommands tailored for validator operations. These commands facilitate actions like proposing and voting on network upgrades,."]}),"\n",(0,s.jsx)(n.h3,{id:"upgrading-the-network",children:"Upgrading the Network"}),"\n",(0,s.jsx)(n.p,{children:'This tool is specifically for Hot upgrades. Hot upgrades to 0L Move framework (AKA "stdlib") require no halting of the network and are achieved with the Upgrade Oracle. This can be done when there are non-breaking changes to the vm (in Rust), and the stdlib (Move) has migrations in place in case of schema changes.'}),"\n",(0,s.jsxs)(n.p,{children:["A detailed explanation can be found ",(0,s.jsx)(n.a,{href:"/validators/hot-upgrades",children:"here"})]}),"\n",(0,s.jsx)(n.h2,{id:"upgrade-transactions",children:"Upgrade Transactions"}),"\n",(0,s.jsx)(n.h3,{id:"propose-an-upgrade",children:"Propose an Upgrade"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Syntax"}),": ",(0,s.jsx)(n.code,{children:"libra txs upgrade propose --proposal-script-dir <PATH_TO_SCRIPT> --metadata-url <URL>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Function"}),": Initiates a proposal for a network upgrade."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"proposal-script-dir"}),": Directory containing the compiled proposal script."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"metadata-url"}),": URL describing the proposal."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'libra txs upgrade propose --proposal-script-dir /path/to/script --metadata-url "http://example.com/proposal"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"vote-on-an-upgrade",children:"Vote on an Upgrade"}),"\n",(0,s.jsx)(n.p,{children:"With txs anyone with governance authority (the epoch's validators as of V7), can submit a vote in favor (or against it with --should-fail)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Syntax"}),": ",(0,s.jsx)(n.code,{children:"libra txs upgrade vote --proposal-id <ID> [--should-fail]"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Function"}),": Casts a vote on an existing upgrade proposal."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"proposal-id"}),": On-chain ID of the proposal."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vote YES on an Upgrade"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"libra txs upgrade vote --proposal-id 12345\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vote NO on an Upgrade"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"libra txs upgrade vote --proposal-id 12345 --should-fail\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>t});var s=r(7294);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);