"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[9996],{9799:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"validators/yaml-templates/validator-yaml","title":"Validator yaml example","description":"~/.libra/validator.yaml","source":"@site/docs/validators/yaml-templates/validator-yaml.md","sourceDirName":"validators/yaml-templates","slug":"/validators/yaml-templates/validator-yaml","permalink":"/validators/yaml-templates/validator-yaml","draft":false,"unlisted":false,"editUrl":"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/yaml-templates/validator-yaml.md","tags":[],"version":"current","frontMatter":{"title":"Validator yaml example","id":"validator-yaml"},"sidebar":"tutorialSidebar","previous":{"title":"Fullnode yaml example","permalink":"/validators/yaml-templates/fullnode-yaml"},"next":{"title":"VFN yaml example","permalink":"/validators/yaml-templates/vfn-yaml"}}');var l=t(4848),i=t(8453);const r={title:"Validator yaml example",id:"validator-yaml"},o="Validator YAML File Example",s={},d=[{value:"~/.libra/validator.yaml",id:"libravalidatoryaml",level:3}];function m(e){const a={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.header,{children:(0,l.jsx)(a.h1,{id:"validator-yaml-file-example",children:"Validator YAML File Example"})}),"\n",(0,l.jsx)(a.h3,{id:"libravalidatoryaml",children:"~/.libra/validator.yaml"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{children:"base:\n  role: 'validator'\n  data_dir: '/home/vnuser/.libra/data'\n  waypoint:\n    from_file: '/home/vnuser/.libra/genesis/waypoint.txt'\n\nconsensus:\n  safety_rules:\n    service:\n      type: 'local'\n    backend:\n      type: 'on_disk_storage'\n      path: secure-data.json\n      namespace: ~\n    initial_safety_rules_config:\n      from_file:\n        waypoint:\n          from_file: '/home/vnuser/.libra/genesis/waypoint.txt'\n        identity_blob_path: '/home/vnuser/.libra/validator-identity.yaml'\n\nexecution:\n  genesis_file_location: '/home/vnuser/.libra/genesis/genesis.blob'\n\nvalidator_network:\n  discovery_method: 'onchain'\n  mutual_authentication: true\n  identity:\n    type: 'from_file'\n    path: '/home/vnuser/.libra/validator-identity.yaml'\n\nfull_node_networks:\n- network_id:\n    private: 'vfn'\n  listen_address: '/ip4/0.0.0.0/tcp/6181'\n  identity:\n    type: 'from_file'\n    path: '/home/vnuser/.libra/validator-identity.yaml'\n\napi:\n  enabled: true\n  address: '127.0.0.1:8080'\n"})})]})}function c(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var n=t(6540);const l={},i=n.createContext(l);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);