/*! For license information please see main.18c8d019.js.LICENSE.txt */
  display: ${e=>e.$visible?"flex":"none"};
`,Yc=242.776657104492,Xc=Vc`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${Yc}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${Yc}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${Yc}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`,Jc=(Hc.path`
  stroke-dasharray: ${2.42776657104492}px, ${Yc};
  stroke-dashoffset: 0;
  animation: ${Xc} ${1.6}s linear infinite;
`,(e,a,n)=>{const r=Math.max(e,a),i=-n-r/2+1,t=2*n+r;return[i,i,t,t].join(" ")}),Zc=e=>{let{height:a=80,width:n=80,color:r=Kc,secondaryColor:i=Kc,ariaLabel:t="oval-loading",wrapperStyle:s,wrapperClass:o,visible:l=!0,strokeWidth:c=2,strokeWidthSecondary:d}=e;return(0,cs.jsx)(Gc,{style:s,$visible:l,className:o,"data-testid":"oval-loading","aria-label":t,...Qc,children:(0,cs.jsx)("svg",{width:n,height:a,viewBox:Jc(Number(c),Number(d||c),20),xmlns:"http://www.w3.org/2000/svg",stroke:r,"data-testid":"oval-svg",children:(0,cs.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,cs.jsxs)("g",{transform:"translate(1 1)",strokeWidth:Number(d||c),"data-testid":"oval-secondary-group",children:[(0,cs.jsx)("circle",{strokeOpacity:".5",cx:"0",cy:"0",r:20,stroke:i,strokeWidth:c}),(0,cs.jsx)("path",{d:(u=20,["M"+u+" 0c0-9.94-8.06",u,u,u].join("-")),children:(0,cs.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"1s",repeatCount:"indefinite"})})]})})})});var u},ed=Vc`
to {
   transform: rotate(360deg);
 }
`,ad=(Hc.svg`
  animation: ${ed} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,Hc.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,Vc`
to {
   stroke-dashoffset: 136;
 }
`),nd=(Hc.polygon`
  stroke-dasharray: 17;
  animation: ${ad} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,Hc.svg`
  transform-origin: 50% 65%;
`,"Loader_loaderOverlay__UJo-J"),rd=()=>Qe((e=>e.global.isLoading))&&(0,cs.jsx)("div",{className:nd,children:(0,cs.jsx)(Zc,{height:80,width:80,color:"#4fa94d",ariaLabel:"loading",secondaryColor:"#4fa94d"})}),id=()=>{const e=Ks({query:"(min-width: 768px)"});return(0,cs.jsxs)(cs.Fragment,{children:[(0,cs.jsx)(zs,{}),(0,cs.jsx)("section",{className:no.section,children:(0,cs.jsxs)("div",{className:no.container,children:[(0,cs.jsxs)("div",{className:no.sharedSectionElements,children:[(0,cs.jsxs)("div",{className:no.navAndBalanceContainer,children:[(0,cs.jsx)(Zs,{}),e&&(0,cs.jsx)(ws,{})]}),e&&(0,cs.jsx)(ao,{})]}),(0,cs.jsx)(r.Suspense,{fallback:(0,cs.jsx)(rd,{}),children:(0,cs.jsx)(fe,{})})]})})]})};const td=n.p+"static/media/sprite.fcc7df84ef748aeb2a3de0d754515911.svg",sd=e=>{let{id:a,className:n}=e;return(0,cs.jsx)("svg",{className:n,children:(0,cs.jsx)("use",{href:td+a})})},od={},ld={transaction:{transactionDate:"",type:"",categoryId:"",comment:"",amount:0},isEditModalOpen:!1,isAddModalOpen:!1,isEditId:""},cd=Rt({name:"modals",initialState:ld,selectors:{selectTransaction:e=>e.transaction,selectIsEditModalOpen:e=>e.isEditModalOpen,selectIsAddModalOpen:e=>e.isAddModalOpen,selectIsEditID:e=>e.isEditId},reducers:{takeTransactionData:(e,a)=>{let{payload:n}=a;e.transaction=n},openEditModal:e=>{e.isEditModalOpen=!0},closeEditModal:e=>{e.isEditModalOpen=!1,e=ld},openAddModal:e=>{e.isAddModalOpen=!0},closeAddModal:e=>{e.isAddModalOpen=!1,e=ld},addEditId:(e,a)=>{let{payload:n}=a;e.isEditId=n}}}),dd=cd.reducer,{takeTransactionData:ud,openEditModal:md,closeEditModal:hd,openAddModal:gd,closeAddModal:pd,addEditId:bd}=cd.actions,{selectTransaction:fd,selectIsEditModalOpen:yd,selectIsAddModalOpen:kd,selectIsEditID:vd}=cd.selectors,wd=()=>{const e=sa();return(0,cs.jsx)("div",{className:od.wrap,children:(0,cs.jsx)("button",{className:od.btn,type:"button",onClick:()=>{e(gd())},children:(0,cs.jsx)(sd,{id:"#icon-plus",className:od.icon})})})},jd=Et("transactions/fetchTransactions",(async(e,a)=>{let{rejectWithValue:n}=a;const r=localStorage.getItem("token");try{return(await ci.get("https://wallet.b.goit.study/api/transactions",{headers:{Authorization:`Bearer ${r}`}})).data}catch(i){return n(i.response?i.response.data:i.message)}})),zd=Et("transactions/addTransaction",(async(e,a)=>{let{rejectWithValue:n}=a;const r=localStorage.getItem("token");try{return(await ci.post("/transactions",e,{headers:{Authorization:`Bearer ${r}`}})).data}catch(t){var i;return n((null===(i=t.response)||void 0===i?void 0:i.data)||t.message)}})),xd=Et("transactions/editTransaction",(async(e,a)=>{let{id:n,transactionData:r}=e,{rejectWithValue:i}=a;const t=localStorage.getItem("token");try{return(await ci.put(`/transactions/${n}`,r,{headers:{Authorization:`Bearer ${t}`}})).data}catch(o){var s;return i((null===(s=o.response)||void 0===s?void 0:s.data)||o.message)}})),qd=Et("transactions/deleteTransaction",(async(e,a)=>{let{rejectWithValue:n}=a;const r=localStorage.getItem("token");try{return await ci.delete(`/transactions/${e}`,{headers:{Authorization:`Bearer ${r}`}}),e}catch(t){var i;return n((null===(i=t.response)||void 0===i?void 0:i.data)||t.message)}})),_d=Et("categories/fetch",(async()=>(await ci.get("/api/categories")).data)),Sd="TransactionsList_transactions-list__7PEth",Ed=e=>{let{transaction:a,onDelete:n}=e;const{date:r,type:i,category:t,comment:s,amount:o}=a;return(0,cs.jsxs)("div",{className:"transaction-item "+("income"===i?"income":"expense"),children:[(0,cs.jsxs)("p",{children:["Date: ",new Date(r).toLocaleDateString()]}),(0,cs.jsxs)("p",{children:["Type: ",i]}),(0,cs.jsxs)("p",{children:["Category: ",t]}),(0,cs.jsxs)("p",{children:["Comment: ",s]}),(0,cs.jsxs)("p",{children:["Amount: ","income"===i?`+${o}`:`-${o}`]}),(0,cs.jsx)("button",{onClick:n,children:"Delete"})]})},Cd=()=>{const e=sa(),a=Qe(fs)||[],n=Qe(ks),i=Qe(vs);(0,r.useEffect)((()=>{e(jd())}),[e]);if(n)return(0,cs.jsx)("p",{children:"Loading..."});if(i){const e="object"===typeof i&&i.message?i.message:JSON.stringify(i);return(0,cs.jsxs)("p",{children:["Error: ",e]})}return Array.isArray(a)&&0===a.length?(0,cs.jsx)("p",{children:"No transactions found."}):(0,cs.jsx)("div",{className:Sd,children:a.map((a=>(0,cs.jsx)(Ed,{transaction:a,onDelete:()=>((a,n,r)=>{e(qd({id:a,type:n,amount:r}))})(a.id,a.type,a.amount)},a.id)))})},Ad="Home_homeTabContainer__j-QMy",Od=()=>{const e=sa();return(0,cs.jsxs)("div",{className:Ad,children:[(0,cs.jsx)(Cd,{}),(0,cs.jsx)(wd,{}),(0,cs.jsx)("button",{onClick:()=>{const a={id:(new Date).getTime(),description:"Test Transaction",amount:100,date:(new Date).toISOString()};e({type:"ADD_TRANSACTION",payload:a})},children:"Add Test Transaction"})]})},Td="Statistics_statisticsSection__5YeX3",Nd={chartContainer:"StatisticsDashboard_chartContainer__wQXNM",chartTitle:"StatisticsDashboard_chartTitle__UUywA",chartError:"StatisticsDashboard_chartError__dYgeT"},Rd=()=>{},Pd=()=>{const[e,a]=(0,r.useState)((new Date).getMonth()+1),[n,i]=(0,r.useState)((new Date).getFullYear());return(0,cs.jsx)(cs.Fragment,{children:(0,cs.jsxs)("div",{className:Nd.statisticsDashboard,children:[(0,cs.jsx)("h2",{children:"Graficul Cheltuielilor"}),(0,cs.jsxs)("div",{children:[(0,cs.jsx)("label",{htmlFor:"month",children:"Luna:"}),(0,cs.jsx)("select",{id:"month",value:e,onChange:e=>a(Number(e.target.value)),children:["January","February","March","April","May","June","July","August","September","October","November","December"].map(((e,a)=>(0,cs.jsx)("option",{value:a+1,children:e},a)))}),(0,cs.jsx)("label",{htmlFor:"year",children:"Year:"}),(0,cs.jsx)("select",{id:"year",value:n,onChange:e=>i(Number(e.target.value)),children:[2020,2021,2022,2023,2024].map((e=>(0,cs.jsx)("option",{value:e,children:e},e)))})]}),(0,cs.jsx)(Rd,{selectedMonth:e,selectedYear:n})]})})},Ld=()=>(0,cs.jsxs)("div",{className:Td,children:[(0,cs.jsx)("h2",{children:"test pt sectiunea Statistics Page"}),(0,cs.jsx)(Pd,{})]}),Id=()=>{const e=Ks({query:"(min-width: 768px)"});return(0,cs.jsx)(cs.Fragment,{children:!e&&(0,cs.jsx)(ao,{})})},Dd=e=>{let{isAuthenticated:a}=e;return a?(0,cs.jsx)(fe,{}):(0,cs.jsx)(be,{to:"/login",replace:!0})},Fd=e=>{let{isAuthenticated:a}=e;return a?(0,cs.jsx)(be,{to:"/dashboard/home",replace:!0}):(0,cs.jsx)(fe,{})},Md=()=>{const{isAuthenticated:e,isLoading:a}=Qe((e=>({isAuthenticated:Boolean(e.auth.user),isLoading:e.auth.loading})));return a?(0,cs.jsx)(rd,{}):(0,cs.jsxs)(cs.Fragment,{children:[(0,cs.jsx)(r.Suspense,{fallback:(0,cs.jsx)(rd,{}),children:(0,cs.jsxs)(ve,{children:[(0,cs.jsxs)(ye,{element:(0,cs.jsx)(Fd,{isAuthenticated:e}),children:[(0,cs.jsx)(ye,{path:"/login",element:(0,cs.jsx)(us,{})}),(0,cs.jsx)(ye,{path:"/register",element:(0,cs.jsx)(bs,{})}),(0,cs.jsx)(ye,{path:"/",element:(0,cs.jsx)(be,{to:"/login"})})]}),(0,cs.jsx)(ye,{element:(0,cs.jsx)(Dd,{isAuthenticated:e}),children:(0,cs.jsxs)(ye,{path:"/dashboard",element:(0,cs.jsx)(id,{}),children:[(0,cs.jsx)(ye,{index:!0,element:(0,cs.jsx)(Od,{})}),(0,cs.jsx)(ye,{path:"home",element:(0,cs.jsx)(Od,{})}),(0,cs.jsx)(ye,{path:"statistics",element:(0,cs.jsx)(Ld,{})}),(0,cs.jsx)(ye,{path:"currency",element:(0,cs.jsx)(Id,{})})]})}),(0,cs.jsx)(ye,{path:"*",element:(0,cs.jsx)(be,{to:e?"/dashboard":"/login",replace:!0})})]})}),(0,cs.jsx)(Ba,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})},Bd=Rt({name:"transactions",initialState:{items:[],categories:[],totalBalance:0,loading:!1,error:null},reducers:{},extraReducers:e=>{e.addCase(jd.pending,(e=>{e.loading=!0,e.error=null})).addCase(jd.fulfilled,((e,a)=>{e.items=a.payload.transactions,e.totalBalance=a.payload.balance,e.loading=!1})).addCase(jd.rejected,((e,a)=>{e.loading=!1,e.error=a.payload})).addCase(zd.fulfilled,((e,a)=>{const n=a.payload,{type:r,amount:i}=n;e.items.push(n),e.totalBalance+="income"===r?i:-i})).addCase(xd.fulfilled,((e,a)=>{const n=e.items.findIndex((e=>e.id===a.payload.id));if(-1!==n){const r=e.items[n],i=a.payload,{amount:t,type:s}=r,{amount:o,type:l}=i;"income"===s?e.totalBalance-=t:e.totalBalance+=t,"income"===l?e.totalBalance+=o:e.totalBalance-=o,e.items[n]=i}})).addCase(qd.fulfilled,((e,a)=>{const{id:n,type:r,amount:i}=a.payload,t=e.items.findIndex((e=>e.id===n));-1!==t&&(e.totalBalance+="income"===r?-i:i,e.items.splice(t,1))})).addCase(_d.pending,(e=>{e.loading=!0,e.error=null})).addCase(_d.fulfilled,((e,a)=>{e.categories=a.payload.categories,e.loading=!1})).addCase(_d.rejected,((e,a)=>{e.loading=!1,e.error=a.payload}))}}),Ud=Bd.reducer,Wd=Rt({name:"global",initialState:{isLoading:!1},reducers:{setLoading(e,a){e.isLoading=a.payload}}}),{setLoading:$d}=Wd.actions,Hd=Wd.reducer,Vd=Rt({name:"expenses",initialState:[],reducers:{addExpense:(e,a)=>{e.push(a.payload)},removeExpense:(e,a)=>e.filter((e=>e.id!==a.payload)),setExpenses:(e,a)=>a.payload}}),{addExpense:Kd,removeExpense:Qd,setExpenses:Gd}=Vd.actions,Yd=Vd.reducer,Xd=oi.create({baseURL:"https://wallet.b.goit.study"}),Jd=Et("transactions/summary",(async(e,a)=>{let{month:n,year:r}=e;const i=a.getState().auth.token;if(!i)return a.rejectWithValue("Unable to fetch");(e=>{Xd.defaults.headers.common.Authorization=`Bearer ${e}`})(i);try{const{data:e}=await Xd.get(`/api/transactions-summary?month=${n}&year=${r}`);return e}catch(t){return a.rejectWithValue(t.message)}})),Zd=Et("/api/transaction-categories",(async(e,a)=>{try{const{data:e}=await Xd.get("");return e}catch(n){return a.rejectWithValue(n.message)}})),eu=function(e){const a=function(e){const{thunk:a=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:i=!0}=e??{};let t=new ht;return a&&(function(e){return"boolean"===typeof e}(a)?t.push(ki):t.push(vi(a.extraArgument))),t},{reducer:n,middleware:r,devTools:i=!0,preloadedState:t,enhancers:s}=e||{};let o,l;if("function"===typeof n)o=n;else{if(!gi(n))throw new Error(It(1));o=bi(n)}l="function"===typeof r?r(a):a();let c=fi;i&&(c=dt({trace:!1,..."object"===typeof i&&i}));const d=function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return e=>(n,r)=>{const i=e(n,r);let t=()=>{throw new Error(di(15))};const s={getState:i.getState,dispatch:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return t(e,...n)}},o=a.map((e=>e(s)));return t=fi(...o)(i.dispatch),{...i,dispatch:t}}}(...l),u=kt(d);return pi(o,t,c(..."function"===typeof s?s(u):u()))}({reducer:{auth:$t,transactions:Ud,global:Hd,expenses:Yd,statistics:Rt({name:"statistics",initialState:{summary:[],categories:[],isStatisticsLoading:!1,isStatisticsError:null},extraReducers:e=>{e.addCase(Zd.fulfilled,((e,a)=>{let{payload:n}=a;e.isStatisticsLoading=!1,e.categories=n})).addCase(Jd.fulfilled,((e,a)=>{let{payload:n}=a;e.isStatisticsLoading=!1,e.summary=n})).addMatcher(jt(Zd.rejected,Jd.rejected),((e,a)=>{let{payload:n}=a;e.isStatisticsLoading=!1,e.isStatisticsError=n})).addMatcher(jt(Zd.pending,Jd.pending),(e=>{e.isStatisticsLoading=!0,e.isStatisticsError=null}))}}).reducer,modals:dd}}),au=eu,nu=document.getElementById("root");(0,t.H)(nu).render((0,cs.jsx)(aa,{store:au,children:(0,cs.jsx)(Ee,{children:(0,cs.jsx)(Md,{})})}))})()})();
//# sourceMappingURL=main.18c8d019.js.map