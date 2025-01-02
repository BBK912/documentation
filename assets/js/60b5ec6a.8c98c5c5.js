"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[541],{4944:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"validators/yaml-templates/vfn-yaml","title":"VFN yaml example","description":"~/.libra/vfn.yaml","source":"@site/docs/validators/yaml-templates/vfn-yaml.md","sourceDirName":"validators/yaml-templates","slug":"/validators/yaml-templates/vfn-yaml","permalink":"/validators/yaml-templates/vfn-yaml","draft":false,"unlisted":false,"editUrl":"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/yaml-templates/vfn-yaml.md","tags":[],"version":"current","frontMatter":{"title":"VFN yaml example","id":"vfn-yaml"},"sidebar":"tutorialSidebar","previous":{"title":"Validator yaml example","permalink":"/validators/yaml-templates/validator-yaml"},"next":{"title":"Rescue Missions","permalink":"/validators/rescue"}}');var l=a(4848),i=a(8453);const r={title:"VFN yaml example",id:"vfn-yaml"},o="VFN Example YAML",s={},d=[{value:"~/.libra/vfn.yaml",id:"libravfnyaml",level:3}];function m(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"vfn-example-yaml",children:"VFN Example YAML"})}),"\n",(0,l.jsx)(n.h3,{id:"libravfnyaml",children:"~/.libra/vfn.yaml"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"base:\n  role: 'full_node'\n  data_dir: '/home/vfnuser/.libra/data'\n  waypoint:\n    from_file: '/home/vfnuser/.libra/genesis/waypoint.txt'\n\nexecution:\n  genesis_file_location: '/home/vfnuser/.libra/genesis/genesis.blob'\n\nfull_node_networks:\n- network_id:\n    private: 'vfn'\n  listen_address: '/ip4/0.0.0.0/tcp/6181'\n  discovery_method: 'onchain'\n  seeds:\n    1234yourvalidatorpublickey:\n      addresses:\n      - '/ip4/<validator_ip>/tcp/6181/noise-ik/0x1234yourvalidatorpublickey/handshake/0'\n      role: 'Validator'\n- network_id: 'public'\n  listen_address: '/ip4/0.0.0.0/tcp/6182'\n  discovery_method: 'onchain'\n  identity:\n    type: 'from_file'\n    path: '/home/vfnuser/.libra/validator-full-node-identity.yaml'\n\napi:\n  enabled: true\n  address: '0.0.0.0:8080'\n\nmempool:\n  default_failovers: 3\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>o});var t=a(6540);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);