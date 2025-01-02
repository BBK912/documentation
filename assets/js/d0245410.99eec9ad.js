"use strict";(self.webpackChunkopen_libra_core_docs=self.webpackChunkopen_libra_core_docs||[]).push([[1445],{8217:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"cli-tools/move/index","title":"Move","description":"Develop with the Move Tool","source":"@site/docs/cli-tools/move/index.md","sourceDirName":"cli-tools/move","slug":"/cli-tools/move/","permalink":"/cli-tools/move/","draft":false,"unlisted":false,"editUrl":"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/cli-tools/move/index.md","tags":[],"version":"current","frontMatter":{"title":"Move","id":"index","hidden":true,"description":"Develop with the Move Tool"},"sidebar":"tutorialSidebar","previous":{"title":"Wallet","permalink":"/cli-tools/wallet"},"next":{"title":"Node","permalink":"/cli-tools/node/"}}');var i=o(4848),s=o(8453);const a={title:"Move",id:"index",hidden:!0,description:"Develop with the Move Tool"},r="Move",l={},c=[{value:"Description",id:"description",level:2},{value:"Compliling",id:"compliling",level:3},{value:"Compiling and unit testing Move",id:"compiling-and-unit-testing-move",level:3},{value:"Generating test coverage details for Move",id:"generating-test-coverage-details-for-move",level:3},{value:"Proving Move",id:"proving-move",level:3},{value:"Profiling gas usage",id:"profiling-gas-usage",level:3},{value:"Debugging and printing stack trace",id:"debugging-and-printing-stack-trace",level:3},{value:"Publishing a Move package with a named address",id:"publishing-a-move-package-with-a-named-address",level:3},{value:"Running a Move function",id:"running-a-move-function",level:3},{value:"View functions",id:"view-functions",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"WIP",type:"danger",children:(0,i.jsx)(n.p,{children:"The Move tool is a Diem wrapper that needs some TLC.... Bounties are available through the Tool Scrubbers Guild if you would like to contribute!"})}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"move",children:"Move"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["The Move CLI is a vendor package and original documentation can be found ",(0,i.jsx)(n.a,{href:"https://github.com/0LNetworkCommunity/diem/tree/release/third_party/move/tools/move-cli",children:"here"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"The Move command-line interface (Move CLI) is a tool that provides an easy way to interact with Move, to experiment\nwith writing and running Move code, and to experiment with developing new tools useful\nfor Move development. To reflect this, the Move CLI commands are grouped into\nthree main subcommands:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"package commands"}),": are commands to create, compile, and test Move packages, as well as perform other operations related to packages. These do not rely on a Move Adapter implementation nor an implementation of storage."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"sandbox commands"}),": are commands that allow you to write Move modules and scripts, write and run scripts and tests, and view the resulting state of execution in a local sandboxed environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"experimental commands"}),": are experimental commands that are currently in development."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Every Move CLI command, with the exception of ",(0,i.jsx)(n.code,{children:"package create"}),", is expected to be run within the context of a ",(0,i.jsx)(n.a,{href:"https://move-language.github.io/move/packages.html",children:"Move package"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"compliling",children:"Compliling"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"libra"})," CLI can be used to compile a Move package locally.\nThe below example uses the ",(0,i.jsx)(n.code,{children:"HelloBlockchain"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/0LNetworkCommunity/libra-framework/tree/main/tools/txs/tests/fixtures/test_publish",children:"fixtures"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You will first need to uncomment ",(0,i.jsx)(n.code,{children:"[addresses]"})," in ",(0,i.jsx)(n.code,{children:"Move.toml"})," and add your address you will be using"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[package]\nname = 'test_publish'\nversion = '1.0.0'\n\n#[addresses]\n#this_address='0xd1281de242839fc939745996882c5fc2'\n\n[dependencies.DiemFramework]\ngit = 'https://github.com/0LNetworkCommunity/diem.git'\nrev = 'release'\nsubdir = 'diem-move/framework/diem-framework'\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ libra move compile --package-dir /libra-framework/tools/txs/tests/fixtures/test_publish\n"})}),"\n",(0,i.jsx)(n.p,{children:"The above command will generate the below terminal output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Compiling, may take a little while to download git dependencies...\nUPDATING GIT DEPENDENCY https://github.com/0LNetworkCommunity/diem.git\nINCLUDING DEPENDENCY DiemFramework\nINCLUDING DEPENDENCY DiemStdlib\nINCLUDING DEPENDENCY MoveStdlib\nBUILDING test_publish\n"})}),"\n",(0,i.jsx)(n.h3,{id:"compiling-and-unit-testing-move",children:"Compiling and unit testing Move"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"libra"})," CLI can also be used to compile and run unit tests locally.\nIn this example, we'll use the ",(0,i.jsx)(n.code,{children:"HelloBlockchain"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/0LNetworkCommunity/libra-framework/tree/main/tools/txs/tests/fixtures/test_publish",children:"fixtures"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ libra move test --package-dir /libra-framework/tools/txs/tests/fixtures/test_publish\n"})}),"\n",(0,i.jsx)(n.p,{children:"The above command will generate the following terminal output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"INCLUDING DEPENDENCY DiemFramework\nINCLUDING DEPENDENCY DiemStdlib\nINCLUDING DEPENDENCY MoveStdlib\nBUILDING test_publish\nRunning Move unit tests\nTest result: OK. Total tests: 0; passed: 0; failed: 0\n"})}),"\n",(0,i.jsx)(n.h3,{id:"generating-test-coverage-details-for-move",children:"Generating test coverage details for Move"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"libra"})," CLI can be used to analyze and improve the testing of your Move modules. To use this feature:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["In your ",(0,i.jsx)(n.code,{children:"libra"})," source checkout, navigate to the ",(0,i.jsx)(n.code,{children:"libra-framework/framework/move-stdlib"})," directory."]}),"\n",(0,i.jsxs)(n.li,{children:["Execute the command:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ libra move test --coverage\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Receive results in standard output containing the result for each test case followed by a basic coverage summary resembling:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"BUILDING MoveStdlib\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Running Move unit tests\n[ PASS    ] 0x1::vector_tests::append_empties_is_empty\n[ PASS    ] 0x1::option_tests::borrow_mut_none\n[ PASS    ] 0x1::fixed_point32_tests::ceil_can_round_up_correctly\n[ PASS    ] 0x1::features::test_change_feature_txn\n[ PASS    ] 0x1::bcs_tests::bcs_bool\n[ PASS    ] 0x1::bit_vector_tests::empty_bitvector\n[ PASS    ] 0x1::option_tests::borrow_mut_some\nTest result: OK. Total tests: 149; passed: 149; failed: 0\n+-------------------------+\n| Move Coverage Summary   |\n+-------------------------+\nModule 0000000000000000000000000000000000000000000000000000000000000001::bcs"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["% Module coverage: NaN\nModule 0000000000000000000000000000000000000000000000000000000000000001::fixed_point32\n% Module coverage: 100.00\nModule 0000000000000000000000000000000000000000000000000000000000000001::hash\n% Module coverage: NaN\nModule 0000000000000000000000000000000000000000000000000000000000000001::vector\n% Module coverage: 92.19\nModule 0000000000000000000000000000000000000000000000000000000000000001::error\n% Module coverage: 0.00\nModule 0000000000000000000000000000000000000000000000000000000000000001::acl\n% Module coverage: 0.00\nModule 0000000000000000000000000000000000000000000000000000000000000001::bit_vector\n% Module coverage: 97.32\nModule 0000000000000000000000000000000000000000000000000000000000000001::signer\n% Module coverage: 100.00\nModule 0000000000000000000000000000000000000000000000000000000000000001::features\n% Module coverage: 69.41\nModule 0000000000000000000000000000000000000000000000000000000000000001::option\n% Module coverage: 100.00\nModule 0000000000000000000000000000000000000000000000000000000000000001::string\n% Module coverage: 81.82\n+-------------------------+\n| % Move Coverage: 83.50  |\n+-------------------------+\nPlease use ",(0,i.jsx)(n.code,{children:"libra move coverage -h"})," for more detailed test coverage of this package"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\n4. Optionally, narrow down your test runs and results to a specific package name with the `--filter` option, like so:\n```bash\n$ libra move test --coverage --filter vector\n"})}),"\n",(0,i.jsx)(n.p,{children:"With results like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"BUILDING MoveStdlib\nRunning Move unit tests\n[ PASS    ] 0x1::bit_vector_tests::empty_bitvector\n[ PASS    ] 0x1::vector_tests::append_empties_is_empty\n[ PASS    ] 0x1::bit_vector_tests::index_bit_out_of_bounds\n[ PASS    ] 0x1::vector_tests::append_respects_order_empty_lhs\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Find failures and iteratively improve your testing and running these commands to eliminate gaps in your testing coverage."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"proving-move",children:"Proving Move"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This functionality is currently unavailable... Check back soon"})}),"\n",(0,i.jsx)(n.h3,{id:"profiling-gas-usage",children:"Profiling gas usage"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This functionality is currently unavailable... Check back soon"})}),"\n",(0,i.jsx)(n.h3,{id:"debugging-and-printing-stack-trace",children:"Debugging and printing stack trace"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we will use ",(0,i.jsx)(n.code,{children:"DebugDemo"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/aptos-labs/aptos-core/tree/main/crates/aptos/debug-move-example",children:"debug-move-example"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Now, you can use ",(0,i.jsx)(n.code,{children:"debug::print"})," and ",(0,i.jsx)(n.code,{children:"debug::print_stack_trace"})," in your ",(0,i.jsx)(n.a,{href:"https://github.com/aptos-labs/aptos-core/tree/main/crates/aptos/debug-move-example/sources/DebugDemo.move",children:"DebugDemo Move file"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"NOTE: This command does not work but gives an example for coding best practices"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ libra move test --package-dir https://github.com/aptos-labs/aptos-core/tree/main/crates/aptos/debug-move-example\n"})}),"\n",(0,i.jsx)(n.p,{children:"The command will generate the following output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Running Move unit tests\n[debug] 0000000000000000000000000000000000000000000000000000000000000001\nCall Stack:\n    [0] 0000000000000000000000000000000000000000000000000000000000000001::Message::sender_can_set_message\n\n        Code:\n            [4] CallGeneric(0)\n            [5] MoveLoc(0)\n            [6] LdConst(0)\n          > [7] Call(1)\n            [8] Ret\n\n        Locals:\n            [0] -\n            [1] 0000000000000000000000000000000000000000000000000000000000000001\n\n\nOperand Stack:\n"})}),"\n",(0,i.jsx)(n.h3,{id:"publishing-a-move-package-with-a-named-address",children:"Publishing a Move package with a named address"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Named Addresses is currently unavailable... Check back soon"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["As an open source project, the source code as well as compiled code published to the 0L Network is inherently open by default. This means code you upload may be downloaded from on-chain data. Even without source access, it is possible to regenerate Move source from Move bytecode. To disable source access, publish with the ",(0,i.jsx)(n.code,{children:"--included-artifacts none"})," argument, like so:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"libra move publish --included-artifacts none\n"})})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"When publishing Move modules, if multiple modules are in one package, then all the modules in this package must have the same account. If they have different accounts, then the publishing will fail at the transaction level."})}),"\n",(0,i.jsx)(n.h3,{id:"running-a-move-function",children:"Running a Move function"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"move run"})," feature is currently not available but we have a work around for interacting with move functions. View a full description ",(0,i.jsx)(n.a,{href:"/cli-tools/txs/generate-transaction",children:"here"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ libra txs generate-transaction --function-id 0xd1281de242839fc939745996882c5fc2::message::set_message --args '42'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"view-functions",children:"View functions"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"libra move view"})," feature is currently not available but we have a couple of workarounds for viewing move functions and values."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ libra query move-value --account 0xd1281de242839fc939745996882c5fc2 --module-name message --struct-name MessageHolder --key-name message\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ libra query view --function-id 0x1::reconfiguration::get_current_epoch\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);