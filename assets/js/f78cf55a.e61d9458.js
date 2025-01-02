"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[2486],{1609:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(5893),i=t(1151);const o={sidebar_position:6,sidebar_label:"Post-Genesis Ceremony Registration",description:"Register a Validator on the 0L Network"},r="Register a Validator on the 0L Network",l={id:"validators/register",title:"Register a Validator on the 0L Network",description:"Register a Validator on the 0L Network",source:"@site/docs/validators/register.md",sourceDirName:"validators",slug:"/validators/register",permalink:"/validators/register",draft:!1,unlisted:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/register.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Post-Genesis Ceremony Registration",description:"Register a Validator on the 0L Network"},sidebar:"tutorialSidebar",previous:{title:"Running a Validator",permalink:"/validators/detailed-instructions"},next:{title:"VFN",permalink:"/validators/vfn-setup"}},s={},d=[{value:"Quick outline of all the steps",id:"quick-outline-of-all-the-steps",level:2},{value:"Detailed instructions",id:"detailed-instructions",level:2},{value:"Generate a new account - Get Keys",id:"generate-a-new-account---get-keys",level:3},{value:"Initialize validator files",id:"initialize-validator-files",level:3},{value:"Get the account on chain",id:"get-the-account-on-chain",level:3},{value:"Update upstream node",id:"update-upstream-node",level:3},{value:"Submit configs to chain",id:"submit-configs-to-chain",level:3},{value:"Get Vouches",id:"get-vouches",level:3},{value:"Bid to be in the validator set",id:"bid-to-be-in-the-validator-set",level:3},{value:"Run the node as fullnode and then validator mode",id:"run-the-node-as-fullnode-and-then-validator-mode",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"register-a-validator-on-the-0l-network",children:"Register a Validator on the 0L Network"})}),"\n",(0,a.jsx)(n.p,{children:"Welcome!"}),"\n",(0,a.jsx)(n.h2,{id:"quick-outline-of-all-the-steps",children:"Quick outline of all the steps"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Checkout the source\ngit clone https://github.com/0LNetworkCommunity/libra-framework\n\n# Install dependencies and Rust lang\ncd ~/libra-framework\nbash ./util/dev_setup.sh -t\n\n# restart your bash instance to pickup the cargo paths\nsource ~/.bashrc\n\n# build and install the binary\ncd ~/libra-framework\ncargo build --release -p libra\n\n# Make the release path global and persistent\nsudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/\n\n# Check libra execution and version\nlibra --version\n\n# -----------------------\n# Using libra CLI to generate a new account and register\n\n# create account keys\nlibra wallet keygen\n\n# create the validator config files on your node\n# you will need to update vfn values to match validator values. see script below\n# you will also need to set the libra.yaml to point to testnet\nlibra config validator-init\n\n# Set your client `libra.yaml` with the rpc-load-balancer upstream node\nlibra config fix --force-url https://rpc.openlibra.space:8080\n\n# a friend will onboard the account if it doesn't yet exist on chain. It is done by sending coins to an account\nlibra txs transfer --to-account <YOUR ADDRESS> --amount 1\n\n# send validator info\nlibra txs validator register\n\n# get vouches from existing validators (just ask)\nlibra txs validator vouch --vouch-for <YOUR ADDRESS>\n\n# submit a bid to be in the validator set\nlibra txs validator pof --bid-pct <PERCENT YOU PAY> --expiry <WHEN EXPIRES>\n\n# run as a fullnode and switch to the validator mode once entered the set, check the detailed instructions below the page.\n"})}),"\n",(0,a.jsx)(n.h2,{id:"detailed-instructions",children:"Detailed instructions"}),"\n",(0,a.jsx)(n.h3,{id:"generate-a-new-account---get-keys",children:"Generate a new account - Get Keys"}),"\n",(0,a.jsx)(n.p,{children:"If you don't already have an account, you will need a mnemonic (seed), to generate all keys."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"libra wallet keygen\n"})}),"\n",(0,a.jsx)(n.h3,{id:"initialize-validator-files",children:"Initialize validator files"}),"\n",(0,a.jsx)(n.p,{children:"Follow the prompts here. Your node needs to have keys generated using a mnemonic from step #1."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"libra config validator-init\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You will need to use this script to make the VFN match your validator node values."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'cat << \'EOF\' > fix_vfn_values.sh\n#!/bin/bash\n\n# Extract the value from validator_network_public_key\nvalidator_key=$(sed -n \'s/^validator_network_public_key: "\\(.*\\)"/\\1/p\' ~/.libra/operator.yaml)\n\n# Use the extracted value to replace full_node_network_public_key\nsed -i "s/^full_node_network_public_key: .*/full_node_network_public_key: \\"$validator_key\\"/" ~/.libra/operator.yaml\n\n# File path\nfile="$HOME/.libra/operator.yaml"\n\n# Extract the host and port from validator_host\nhost=$(awk \'/^  host:/{print $0}\' "$file")\nport=$(awk \'/^  port:/{print $0}\' "$file")\n\n# Replace full_node_host: ~ with full_node_host: and add host and port\nsed -i "/^full_node_host: ~/c\\\\\nfull_node_host:\\\\n$host\\\\n$port" "$file"\nEOF\n\nchmod +x fix_vfn_values.sh\n./fix_vfn_values.sh\n'})}),"\n",(0,a.jsx)(n.h3,{id:"get-the-account-on-chain",children:"Get the account on chain"}),"\n",(0,a.jsx)(n.p,{children:"Someone needs to create that account onchain first.\nAsk someone to deposit a coin to your account from step #1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# friend sends one coin to your account which creates it\nlibra txs transfer -t <YOUR ACCOUNT> -a 1\n"})}),"\n",(0,a.jsx)(n.h3,{id:"update-upstream-node",children:"Update upstream node"}),"\n",(0,a.jsxs)(n.p,{children:["Set your client ",(0,a.jsx)(n.code,{children:"libra.yaml"})," with the rpc-load-balancer upstream node"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"libra config fix --force-url https://rpc.openlibra.space:8080\n"})}),"\n",(0,a.jsx)(n.h3,{id:"submit-configs-to-chain",children:"Submit configs to chain"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Submit your account on chain, which takes the default location to your ~/.libra/operator.yaml\nlibra txs validator register\n\n# Or you can use the -f option to provide the exact path to your operator.yaml file\nlibra txs validator register -f ~/.libra/operator.yaml\n"})}),"\n",(0,a.jsx)(n.h3,{id:"get-vouches",children:"Get Vouches"}),"\n",(0,a.jsx)(n.p,{children:"0L Network uses very light reputation games to keep the validator set trusted.\nJust ask an existing validator for a vouch. It helps a lot if you share your node specs and a little bit of your experience with them."}),"\n",(0,a.jsx)(n.p,{children:"Your friend will:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"libra txs validator vouch --vouch-for <YOUR ADDRESS>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"bid-to-be-in-the-validator-set",children:"Bid to be in the validator set"}),"\n",(0,a.jsx)(n.p,{children:"0L Network uses Proof-of-Fee for sybil resistance, instead of Proof-of-Stake. You don't need any stake to join, but you just need to be able to bid on how much you are willing to pay to be in the validator set. The cheapest bid proposed by validators will be actually what all validators pay (uniform price auction)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"libra txs validator pof --bid-pct <PERCENT YOU PAY> --expiry <WHEN EXPIRES>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"run-the-node-as-fullnode-and-then-validator-mode",children:"Run the node as fullnode and then validator mode"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Once your validator enters the set you will need to stop running as a fullnode and run as a validator. Until then, you can:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"use the following instructions to: sync database to the current state (TODO: link) and run as a fullnode."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["When your node is in the active set, it is time to change your node config path to point to the ",(0,a.jsx)(n.code,{children:"validator.yaml"}),"."]}),"\n",(0,a.jsx)(n.li,{children:"Stop your node and run in the validator mode:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"libra node --config-path ~/.libra/validator.yaml\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var a=t(7294);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);