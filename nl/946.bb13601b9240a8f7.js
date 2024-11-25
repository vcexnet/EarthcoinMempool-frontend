"use strict";(self.webpackChunkmempool=self.webpackChunkmempool||[]).push([[946],{1946:(Qt,S,o)=>{o.r(S),o.d(S,{MasterPageModule:()=>Wt,MasterPageRoutingModule:()=>$});var d=o(177),p=o(8185),y=o(463),L=o(9267),g=o(7407),N=o(7945),c=o(9417),t=o(4438),M=o(3366),m=o(2083),b=o(2251),O=o(1954),k=o(7913),j=o(9137),X=o(715);const B=n=>({invalid:n});function w(n,a){1&n&&(t.j41(0,"span"),t.EFF(1,"\u2705"),t.k0s())}function U(n,a){1&n&&(t.j41(0,"span"),t.EFF(1,"\u274c"),t.k0s())}function Y(n,a){1&n&&(t.j41(0,"span"),t.EFF(1,"-"),t.k0s())}function V(n,a){if(1&n&&t.nrm(0,"app-fee-rate",33),2&n){const e=t.XpG().$implicit;t.Y8G("fee",1e5*(null==e.fees?null:e.fees["effective-feerate"]))}}function D(n,a){1&n&&(t.j41(0,"span"),t.EFF(1,"-"),t.k0s())}function z(n,a){if(1&n&&(t.qex(0),t.j41(1,"tr")(2,"td",22),t.qex(3,27),t.DNE(4,w,2,0,"span",28)(5,U,2,0,"span",28)(6,Y,2,0,"span",29),t.bVm(),t.k0s(),t.j41(7,"td",23),t.nrm(8,"app-truncate",30),t.k0s(),t.j41(9,"td",24),t.DNE(10,V,1,1,"app-fee-rate",31)(11,D,2,0,"span",32),t.k0s(),t.j41(12,"td",25),t.EFF(13),t.k0s()(),t.bVm()),2&n){const e=a.$implicit;t.R7$(3),t.Y8G("ngSwitch",e.allowed),t.R7$(),t.Y8G("ngSwitchCase",!0),t.R7$(),t.Y8G("ngSwitchCase",!1),t.R7$(3),t.Y8G("text",e.txid||"-"),t.R7$(2),t.Y8G("ngIf",null!=(null==e.fees?null:e.fees["effective-feerate"])),t.R7$(),t.Y8G("ngIf",null==(null==e.fees?null:e.fees["effective-feerate"])),t.R7$(2),t.SpI(" ",e["reject-reason"]||"-"," ")}}function H(n,a){if(1&n&&(t.j41(0,"div",20)(1,"table",21)(2,"tbody")(3,"tr")(4,"th",22),t.pXf(5,4),t.k0s(),t.j41(6,"th",23),t.pXf(7,5),t.k0s(),t.j41(8,"th",24),t.pXf(9,6),t.k0s(),t.j41(10,"th",25),t.pXf(11,7),t.k0s()(),t.DNE(12,z,14,7,"ng-container",26),t.k0s()()()),2&n){const e=t.XpG();t.R7$(12),t.Y8G("ngForOf",e.results)}}let J=(()=>{class n{constructor(e,i,s,r,l){this.formBuilder=e,this.apiService=i,this.stateService=s,this.seoService=r,this.ogService=l,this.error="",this.results=[],this.isLoading=!1,this.invalidMaxfeerate=!1}ngOnInit(){this.testTxsForm=this.formBuilder.group({txs:["",c.k0.required],maxfeerate:["",c.k0.min(0)]}),this.seoService.setTitle("Test-transacties"),this.ogService.setManualOgImage("tx-push.jpg")}testTxs(){let i,e=[];try{if(e=(this.testTxsForm.get("txs")?.value).split(",").map(s=>s.trim()),!e?.length)return void(this.error="At least one transaction is required");if(e.length>25)return void(this.error="Exceeded maximum of 25 transactions")}catch(s){return void(this.error=s?.message)}this.invalidMaxfeerate=!1;try{const s=this.testTxsForm.get("maxfeerate")?.value;null!=s&&""!==s&&(i=parseFloat(s)/1e5)}catch{this.invalidMaxfeerate=!0}this.isLoading=!0,this.error="",this.results=[],this.apiService.testTransactions$(e,.1===i?null:i).subscribe(s=>{this.isLoading=!1,this.results=s||[],this.testTxsForm.reset()},s=>{if("string"==typeof s.error){const r=s.error.replace(/\\/g,"").match('"message":"(.*?)"');this.error=r&&r[1]||s.error}else s.message&&(this.error=s.message);this.isLoading=!1})}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(c.ze),t.rXU(M.G),t.rXU(m.d),t.rXU(b.B),t.rXU(O.m))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-test-transactions"]],decls:20,vars:9,consts:()=>{let e,i,s,r,l,u,T,I,G;return e="Komma-gescheiden lijst met ruwe transacties",i="Test-transacties",s="Ruwe hexcode",r="Maximale kosten (sat/vB)",l="Test-transacties",u="Toegestaan?",T="TXID",I="Effectief vergoedingstarief",G="Reden van afwijzing",[i,s,r,l,u,T,I,G,[1,"container-xl"],[2,"display","flex","width","100%","align-items","center","flex-wrap","wrap"],[1,"text-left"],["name","blocks-3-2",2,"width","275px","max-width","90%","margin-top","-9px"],["novalidate","",3,"submit","formGroup"],["for","maxfeerate"],[1,"mb-3"],["formControlName","txs","rows","5","placeholder",e,1,"form-control"],["type","number","formControlName","maxfeerate","id","maxfeerate","placeholder","10,000 s/vb",1,"form-control","input-dark",3,"value"],["type","submit",1,"btn","btn-primary","mr-2",3,"disabled"],[1,"red-color","d-inline"],["class","box",4,"ngIf"],[1,"box"],[1,"accept-results","table","table-fixed","table-borderless","table-striped"],[1,"allowed"],[1,"txid"],[1,"rate"],[1,"reason"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"text"],[3,"fee",4,"ngIf"],[4,"ngIf"],[3,"fee"]]},template:function(i,s){1&i&&(t.j41(0,"div",8)(1,"div",9)(2,"h1",10),t.pXf(3,0),t.k0s(),t.nrm(4,"app-svg-images",11),t.k0s(),t.j41(5,"form",12),t.bIt("submit",function(){return s.testTxsForm.valid&&s.testTxs()}),t.j41(6,"label",13),t.pXf(7,1),t.k0s(),t.j41(8,"div",14),t.nrm(9,"textarea",15),t.k0s(),t.j41(10,"label",13),t.pXf(11,2),t.k0s(),t.nrm(12,"input",16)(13,"br"),t.j41(14,"button",17),t.pXf(15,3),t.k0s(),t.j41(16,"p",18),t.EFF(17),t.k0s()(),t.nrm(18,"br"),t.DNE(19,H,13,1,"div",19),t.k0s()),2&i&&(t.R7$(5),t.Y8G("formGroup",s.testTxsForm),t.R7$(7),t.HbH(t.eq3(7,B,s.invalidMaxfeerate)),t.Y8G("value",1e4),t.R7$(2),t.Y8G("disabled",s.isLoading),t.R7$(3),t.JRh(s.error),t.R7$(2),t.Y8G("ngIf",null==s.results?null:s.results.length))},dependencies:[d.Sq,d.bT,d.ux,d.e1,d.fG,c.qT,c.me,c.Q0,c.BC,c.cb,c.j4,c.JD,k.m,j.Q,X.o],styles:[".accept-results[_ngcontent-%COMP%]   td.allowed[_ngcontent-%COMP%], .accept-results[_ngcontent-%COMP%]   th.allowed[_ngcontent-%COMP%]{width:10%;text-align:center}.accept-results[_ngcontent-%COMP%]   td.txid[_ngcontent-%COMP%], .accept-results[_ngcontent-%COMP%]   th.txid[_ngcontent-%COMP%]{width:50%}.accept-results[_ngcontent-%COMP%]   td.rate[_ngcontent-%COMP%], .accept-results[_ngcontent-%COMP%]   th.rate[_ngcontent-%COMP%], .accept-results[_ngcontent-%COMP%]   td.reason[_ngcontent-%COMP%], .accept-results[_ngcontent-%COMP%]   th.reason[_ngcontent-%COMP%]{width:20%;text-align:right;white-space:wrap}@media (max-width: 950px){.accept-results[_ngcontent-%COMP%]{table-layout:auto}.accept-results[_ngcontent-%COMP%]   td.allowed[_ngcontent-%COMP%], .accept-results[_ngcontent-%COMP%]   th.allowed[_ngcontent-%COMP%]{width:100px}.accept-results[_ngcontent-%COMP%]   td.txid[_ngcontent-%COMP%], .accept-results[_ngcontent-%COMP%]   th.txid[_ngcontent-%COMP%]{max-width:200px}}"]})}return n})();var h=o(4572),v=o(6354),E=o(5558),C=o(6491),W=o(9181),R=o(413),Q=o(5326),K=o(345);let Z=(()=>{class n{constructor(e){this.sanitizer=e}transform(e,i){const s=this.insertSpaces(parseFloat(e||"0").toFixed(8)),r=(s||"0").search(/[1-9]/),l=s.slice(0,r),u=s.slice(r);return this.sanitizer.bypassSecurityTrustHtml(`<span class="${i||"text-secondary"}">${l}</span>${u}`)}insertSpaces(e){const i=e.length;return e.slice(0,i-6)+" "+e.slice(i-6,i-3)+" "+e.slice(i-3)}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(K.up,16))};static#e=this.\u0275pipe=t.EJ8({name:"bitcoinsatoshis",type:n,pure:!0})}return n})();function q(n,a){if(1&n){const e=t.RV6();t.qex(0),t.j41(1,"div",7)(2,"form",8)(3,"div",9)(4,"div",10)(5,"span",11),t.EFF(6),t.nI1(7,"async"),t.k0s()(),t.j41(8,"input",12),t.bIt("input",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.transformInput("fiat"))})("click",function(s){t.eBV(e);const r=t.XpG();return t.Njj(r.selectAll(s))}),t.k0s(),t.nrm(9,"app-clipboard",13),t.k0s(),t.j41(10,"div",9)(11,"div",10)(12,"span",11),t.EFF(13,"EAC"),t.k0s()(),t.j41(14,"input",14),t.bIt("input",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.transformInput("bitcoin"))})("click",function(s){t.eBV(e);const r=t.XpG();return t.Njj(r.selectAll(s))}),t.k0s(),t.nrm(15,"app-clipboard",13),t.k0s(),t.j41(16,"div",9)(17,"div",10)(18,"span",11),t.pXf(19,2),t.k0s()(),t.j41(20,"input",15),t.bIt("input",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.transformInput("satoshis"))})("click",function(s){t.eBV(e);const r=t.XpG();return t.Njj(r.selectAll(s))}),t.k0s(),t.nrm(21,"app-clipboard",13),t.k0s()()(),t.nrm(22,"br"),t.j41(23,"div",7)(24,"div",16),t.EFF(25," \u20bf "),t.nrm(26,"span",17),t.nI1(27,"bitcoinsatoshis"),t.j41(28,"span",18),t.pXf(29,3),t.k0s()()(),t.j41(30,"div",7)(31,"div",19),t.nrm(32,"app-fiat",20),t.k0s()(),t.j41(33,"div",21)(34,"div",22),t.EFF(35," Fiat price last updated "),t.nrm(36,"app-time",23),t.nI1(37,"async"),t.k0s()(),t.bVm()}if(2&n){const e=t.XpG();t.R7$(2),t.Y8G("formGroup",e.form),t.R7$(4),t.JRh(t.bMT(7,18,e.currency$)),t.R7$(3),t.HbH("btn btn-lg btn-secondary ml-1"),t.Y8G("button",!0)("text",e.form.get("fiat").value),t.R7$(6),t.HbH("btn btn-lg btn-secondary ml-1"),t.Y8G("button",!0)("text",e.form.get("bitcoin").value),t.R7$(6),t.HbH("btn btn-lg btn-secondary ml-1"),t.Y8G("button",!0)("text",e.form.get("satoshis").value),t.R7$(5),t.Y8G("innerHTML",t.bMT(27,20,e.form.get("bitcoin").value),t.npT),t.R7$(6),t.Y8G("value",e.form.get("satoshis").value),t.R7$(4),t.Y8G("time",t.bMT(37,22,e.lastFiatPrice$))("fastRender",!0)}}function tt(n,a){1&n&&(t.j41(0,"div",5),t.EFF(1," Waiting for price feed... "),t.k0s())}let et=(()=>{class n{constructor(e,i,s){this.stateService=e,this.formBuilder=i,this.websocketService=s,this.satoshis=1e4,this.currency$=this.stateService.fiatCurrency$}ngOnInit(){let e;this.form=this.formBuilder.group({fiat:[0],bitcoin:[0],satoshis:[0]}),this.lastFiatPrice$=this.stateService.conversions$.asObservable().pipe((0,v.T)(i=>i.time)),this.price$=this.currency$.pipe((0,E.n)(i=>(e=i,this.stateService.conversions$.asObservable())),(0,v.T)(i=>i[e])),(0,h.z)([this.price$,this.form.get("fiat").valueChanges]).subscribe(([i,s])=>{const r=(s/i).toFixed(8),l=Math.round(s/i*1e8);isNaN(s)||(this.form.get("bitcoin").setValue(r,{emitEvent:!1}),this.form.get("satoshis").setValue(l,{emitEvent:!1}))}),(0,h.z)([this.price$,this.form.get("bitcoin").valueChanges]).subscribe(([i,s])=>{const r=parseFloat((s*i).toFixed(8));isNaN(s)||(this.form.get("fiat").setValue(r,{emitEvent:!1}),this.form.get("satoshis").setValue(Math.round(1e8*s),{emitEvent:!1}))}),(0,h.z)([this.price$,this.form.get("satoshis").valueChanges]).subscribe(([i,s])=>{const r=parseFloat((s/1e8*i).toFixed(8)),l=(s/1e8).toFixed(8);isNaN(s)||(this.form.get("fiat").setValue(r,{emitEvent:!1}),this.form.get("bitcoin").setValue(l,{emitEvent:!1}))})}transformInput(e){const i=this.form.get(e);if(!i.value)return i.setValue("",{emitEvent:!1});let s=i.value.replace(",",".").replace(/[^0-9.]/g,"");"."===s&&(s="0");let r=this.removeExtraDots(s);"bitcoin"===e&&this.countDecimals(r)>8&&(r=this.toFixedWithoutRounding(r,8)),""===r&&(r="0"),"satoshis"===e&&(r=parseFloat(r).toFixed(0)),i.setValue(r,{emitEvent:!0})}removeExtraDots(e){const[i,s]=e.split(".",2);return void 0===s?e:`${i}.${s.replace(/\./g,"")}`}countDecimals(e){const i=e.indexOf(".");return-1===i?0:e.length-i-1}toFixedWithoutRounding(e,i){const s=new RegExp(`^-?\\d+(?:.\\d{0,${i||-1}})?`),r=e.match(s);return r?r[0]:e}selectAll(e){e.target.select()}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(m.d),t.rXU(c.ok),t.rXU(C.H))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-calculator"]],decls:8,vars:4,consts:()=>{let e,i,s;return e="Calculator",i="sats",s="sats",[["loading",""],e,i,s,[1,"container-xl"],[1,"text-center"],[4,"ngIf","ngIfElse"],[1,"row","justify-content-center"],[3,"formGroup"],[1,"input-group","input-group-lg","mb-1"],[1,"input-group-prepend"],[1,"input-group-text"],["type","text","inputmode","numeric","formControlName","fiat",1,"form-control",3,"input","click"],[3,"button","text"],["type","text","inputmode","numeric","formControlName","bitcoin",1,"form-control",3,"input","click"],["type","text","inputmode","numeric","formControlName","satoshis",1,"form-control",3,"input","click"],[1,"bitcoin-satoshis-text"],[3,"innerHTML"],[1,"sats"],[1,"fiat-text"],["digitsInfo","1.0-0",3,"value"],[1,"row","justify-content-center","mt-3"],[1,"symbol"],["kind","since",3,"time","fastRender"]]},template:function(i,s){if(1&i&&(t.j41(0,"div",4)(1,"div",5)(2,"h2"),t.pXf(3,1),t.k0s()(),t.DNE(4,q,38,24,"ng-container",6),t.nI1(5,"async"),t.DNE(6,tt,2,0,"ng-template",null,0,t.C5r),t.k0s()),2&i){const r=t.sdS(7);t.R7$(4),t.Y8G("ngIf",t.bMT(5,2,s.price$))("ngIfElse",r)}},dependencies:[d.bT,c.qT,c.me,c.BC,c.cb,c.j4,c.JD,W.w,R.$,Q.k,d.Jj,Z],styles:[".input-group-text[_ngcontent-%COMP%]{width:75px}.bitcoin-satoshis-text[_ngcontent-%COMP%]{font-size:40px}.fiat-text[_ngcontent-%COMP%]{font-size:24px}.symbol[_ngcontent-%COMP%]{font-style:italic}@media (max-width: 767.98px){.bitcoin-satoshis-text[_ngcontent-%COMP%]{font-size:30px}}.sats[_ngcontent-%COMP%]{font-size:20px;margin-left:5px}.row[_ngcontent-%COMP%]{margin:auto}"],changeDetection:0})}return n})();var nt=o(1073),st=o(4412),it=o(7786),ot=o(983),rt=o(9437),at=o(8141),ct=o(9862),lt=o(9636);const P=()=>[],dt=n=>({"min-height":"295px",opacity:n});function ut(n,a){1&n&&t.nrm(0,"div",17)}function ft(n,a){1&n&&(t.j41(0,"span",28),t.pXf(1,2),t.k0s())}function pt(n,a){1&n&&(t.j41(0,"span",29),t.pXf(1,3),t.k0s())}function mt(n,a){if(1&n&&(t.j41(0,"div",20)(1,"p",21)(2,"span",22),t.DNE(3,ft,2,0,"span",23)(4,pt,2,0,"span",24),t.k0s(),t.nrm(5,"app-time",25),t.k0s(),t.j41(6,"div",26),t.nrm(7,"app-rbf-timeline",27),t.k0s()()),2&n){const e=a.$implicit;t.R7$(3),t.Y8G("ngIf",e.mined),t.R7$(),t.Y8G("ngIf",e.fullRbf),t.R7$(),t.Y8G("time",e.time)("showTooltip",!0),t.R7$(),t.AVh("mined",e.mined),t.R7$(),t.Y8G("replacements",e)}}function _t(n,a){1&n&&(t.j41(0,"div",30)(1,"p"),t.pXf(2,4),t.k0s()())}function Tt(n,a){if(1&n&&(t.qex(0),t.DNE(1,mt,8,7,"div",18)(2,_t,3,0,"div",19),t.bVm()),2&n){const e=a.ngIf;t.R7$(),t.Y8G("ngForOf",e),t.R7$(),t.Y8G("ngIf",!(null!=e&&e.length))}}let gt=(()=>{class n{constructor(e,i,s,r,l,u,T){this.route=e,this.router=i,this.apiService=s,this.stateService=r,this.websocketService=l,this.seoService=u,this.ogService=T,this.nextRbfSubject=new st.t(null),this.isLoading=!0}ngOnInit(){this.urlFragmentSubscription=this.route.fragment.subscribe(e=>{this.fullRbf="fullrbf"===e,this.websocketService.startTrackRbf(this.fullRbf?"fullRbf":"all"),this.nextRbfSubject.next(null),this.isLoading=!0}),this.rbfTrees$=(0,it.h)(this.nextRbfSubject.pipe((0,E.n)(()=>this.apiService.getRbfList$(this.fullRbf)),(0,rt.W)(e=>ot.w)),this.stateService.rbfLatest$).pipe((0,at.M)(()=>{this.isLoading=!1})),this.seoService.setTitle("RBF-vervangingen"),this.seoService.setDescription("Bekijk de meest recente RBF-vervangingen op het Bitcoin" + (0, ct.Sr)(this.stateService.network) + "-netwerk, in realtime bijgewerkt."),this.ogService.setManualOgImage("rbf.jpg")}ngOnDestroy(){this.websocketService.stopTrackRbf()}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(p.nX),t.rXU(p.Ix),t.rXU(M.G),t.rXU(m.d),t.rXU(C.H),t.rXU(b.B),t.rXU(O.m))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-rbf-list"]],decls:18,vars:17,consts:()=>{let e,i,s,r,l;return e="RBF-vervangingen",i="Alle",s="Gedolven",r="Volledige RBF",l="Er zijn nog geen vervangers in de mempool!",[e,i,s,r,l,[1,"container-xl",2,"min-height","335px"],[1,"float-left"],["class","spinner-border ml-3","role","status",4,"ngIf"],[1,"mode-toggle","float-right"],[1,"formRadioGroup"],["name","radioBasic",1,"btn-group","btn-group-toggle"],[1,"btn","btn-primary","btn-sm"],["type","radio","fragment","",3,"value","routerLink"],["type","radio","fragment","fullrbf",3,"value","routerLink"],[1,"clearfix"],[1,"rbf-trees",3,"ngStyle"],[4,"ngIf"],["role","status",1,"spinner-border","ml-3"],["class","tree",4,"ngFor","ngForOf"],["class","no-replacements",4,"ngIf"],[1,"tree"],[1,"info"],[1,"type"],["class","badge badge-success",4,"ngIf"],["class","badge badge-info",4,"ngIf"],["kind","since",3,"time","showTooltip"],[1,"timeline-wrapper"],[3,"replacements"],[1,"badge","badge-success"],[1,"badge","badge-info"],[1,"no-replacements"]]},template:function(i,s){1&i&&(t.j41(0,"div",5)(1,"h1",6),t.pXf(2,0),t.k0s(),t.DNE(3,ut,1,0,"div",7),t.j41(4,"div",8)(5,"form",9)(6,"div",10)(7,"label",11),t.nrm(8,"input",12),t.j41(9,"span"),t.pXf(10,1),t.k0s()(),t.j41(11,"label",11),t.nrm(12,"input",13),t.EFF(13,"Full RBF"),t.k0s()()()(),t.nrm(14,"div",14),t.j41(15,"div",15),t.DNE(16,Tt,3,2,"ng-container",16),t.nI1(17,"async"),t.k0s()()),2&i&&(t.R7$(3),t.Y8G("ngIf",s.isLoading),t.R7$(4),t.AVh("active",!s.fullRbf),t.R7$(),t.Y8G("value","All")("routerLink",t.lJ4(13,P)),t.R7$(3),t.AVh("active",s.fullRbf),t.R7$(),t.Y8G("value","Full RBF")("routerLink",t.lJ4(14,P)),t.R7$(3),t.Y8G("ngStyle",t.eq3(15,dt,s.isLoading?"0.75":"1")),t.R7$(),t.Y8G("ngIf",t.bMT(17,11,s.rbfTrees$)))},dependencies:[d.Sq,d.bT,d.B3,p.Wk,c.qT,c.cb,R.$,lt.t,d.Jj],styles:[".spinner-border[_ngcontent-%COMP%]{height:25px;width:25px;margin-top:13px}.rbf-trees[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:baseline;margin:0 0 .5em}.rbf-trees[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{margin-left:.5em}.rbf-trees[_ngcontent-%COMP%]   .tree[_ngcontent-%COMP%]{margin-bottom:1em}.rbf-trees[_ngcontent-%COMP%]   .timeline-wrapper.mined[_ngcontent-%COMP%]{border:solid 4px var(--success)}.rbf-trees[_ngcontent-%COMP%]   .no-replacements[_ngcontent-%COMP%]{margin:1em;text-align:center}"],changeDetection:0})}return n})();var ht=o(5513),Ct=o(8153),A=o(866),St=o(8031),Nt=o(3824),Mt=o(60),bt=o(3753);let Ot=(()=>{class n{constructor(){this.width=null,this.customClass=null,this.buttonString="unset",this.redirectTo=null,this.clicked=new t.bkB,this.disabled=!1}twitterLogin(){return this.clicked.emit(!0),this.redirectTo?location.replace(`/api/v1/services/auth/login/twitter?redirectTo=${encodeURIComponent(this.redirectTo)}`):location.replace(`/api/v1/services/auth/login/twitter?redirectTo=${location.href}`),!1}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-twitter-login"]],inputs:{width:"width",customClass:"customClass",buttonString:"buttonString",redirectTo:"redirectTo",disabled:"disabled"},outputs:{clicked:"clicked"},decls:4,vars:6,consts:[["href","#",2,"background-color","#1DA1F2",3,"click"],["src","./resources/twitter.svg","height","25",2,"padding","2px",3,"alt"],[1,"ml-2","text-light","align-middle"]],template:function(i,s){1&i&&(t.j41(0,"a",0),t.bIt("click",function(){return s.twitterLogin()}),t.nrm(1,"img",1),t.j41(2,"span",2),t.EFF(3),t.k0s()()),2&i&&(t.Aen(s.width?"width: "+s.width:""),t.HbH((s.disabled?"disabled":"")+(s.customClass?s.customClass:"w-100 btn mt-1 d-flex justify-content-center align-items-center")),t.R7$(),t.Y8G("alt",s.buttonString+" with Twitter"),t.R7$(2),t.JRh(s.buttonString))},encapsulation:2})}return n})();var vt=o(6631);const Et=()=>["fas","circle-check"],Rt=()=>({redirectTo:"/testnet4/faucet"}),Pt=()=>["fas","exclamation-triangle"],At=()=>["/services/account/settings"],F=n=>({invalid:n}),Ft=(n,a)=>[n,a];function xt(n,a){if(1&n&&(t.j41(0,"div",7),t.nrm(1,"fa-icon",10),t.EFF(2," Sent! "),t.j41(3,"a",11),t.EFF(4),t.k0s()()),2&n){const e=t.XpG();t.R7$(),t.Y8G("icon",t.lJ4(3,Et)),t.R7$(2),t.Y8G("href","/testnet4/tx/"+e.txid,t.B4B),t.R7$(),t.JRh(e.txid)}}function $t(n,a){1&n&&(t.j41(0,"p"),t.EFF(1,"Loading faucet..."),t.k0s(),t.nrm(2,"div",12))}function It(n,a){1&n&&(t.j41(0,"div",13)(1,"div",14)(2,"span"),t.EFF(3,"To use the faucet, please\xa0"),t.k0s(),t.j41(4,"a",15),t.EFF(5,"login"),t.k0s(),t.j41(6,"span",16),t.EFF(7,"\xa0or"),t.k0s()(),t.nrm(8,"app-twitter-login",17),t.k0s()),2&n&&(t.R7$(4),t.Y8G("queryParams",t.lJ4(1,Rt)))}function Gt(n,a){1&n&&(t.j41(0,"div",18)(1,"span",19),t.nrm(2,"fa-icon",20),t.j41(3,"span"),t.EFF(4,"Please "),t.j41(5,"a",21),t.EFF(6,"verify your account"),t.k0s(),t.EFF(7," by providing a valid email address. To mitigate spam, we delete unverified accounts at regular intervals."),t.k0s()()()),2&n&&(t.R7$(2),t.Y8G("icon",t.lJ4(3,Pt))("fixedWidth",!0),t.R7$(3),t.Y8G("routerLink",t.lJ4(4,At)))}function yt(n,a){1&n&&(t.j41(0,"div",13)(1,"div",14)(2,"span",22),t.EFF(3,"To use the faucet, please"),t.k0s()(),t.nrm(4,"app-twitter-login",23),t.k0s())}function Lt(n,a){1&n&&(t.j41(0,"div",13)(1,"div",14)(2,"span",22),t.EFF(3,"Your Twitter account does not allow you to access the faucet"),t.k0s()()())}function kt(n,a){if(1&n&&t.nrm(0,"app-mempool-error",24),2&n){const e=t.XpG();t.Y8G("error",e.error)}}function jt(n,a){1&n&&(t.j41(0,"div"),t.EFF(1,"Amount is required"),t.k0s())}function Xt(n,a){if(1&n&&(t.j41(0,"div"),t.EFF(1),t.nI1(2,"number"),t.k0s()),2&n){const e=t.XpG(3);t.R7$(),t.SpI("Minimum is ",t.bMT(2,1,null==e.amount||null==e.amount.errors?null:e.amount.errors.min.min)," tSats")}}function Bt(n,a){if(1&n&&(t.j41(0,"div"),t.EFF(1),t.nI1(2,"number"),t.k0s()),2&n){const e=t.XpG(3);t.R7$(),t.SpI("Maximum is ",t.bMT(2,1,null==e.amount||null==e.amount.errors?null:e.amount.errors.max.max)," tSats")}}function wt(n,a){if(1&n&&(t.j41(0,"div",40),t.DNE(1,jt,2,0,"div",41)(2,Xt,3,3,"div",41)(3,Bt,3,3,"div",41),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.Y8G("ngIf",null==e.amount||null==e.amount.errors?null:e.amount.errors.required),t.R7$(),t.Y8G("ngIf",null==e.amount||null==e.amount.errors?null:e.amount.errors.min),t.R7$(),t.Y8G("ngIf",null==e.amount||null==e.amount.errors?null:e.amount.errors.max)}}function Ut(n,a){1&n&&(t.j41(0,"div"),t.EFF(1,"Address is required"),t.k0s())}function Yt(n,a){1&n&&(t.j41(0,"div"),t.EFF(1,"Must be a valid testnet4 address"),t.k0s())}function Vt(n,a){1&n&&(t.j41(0,"div"),t.EFF(1,"You cannot use this address"),t.k0s())}function Dt(n,a){if(1&n&&(t.j41(0,"div",40),t.DNE(1,Ut,2,0,"div",41)(2,Yt,2,0,"div",41)(3,Vt,2,0,"div",41),t.k0s()),2&n){const e=t.XpG(2);t.R7$(),t.Y8G("ngIf",null==e.address||null==e.address.errors?null:e.address.errors.required),t.R7$(),t.Y8G("ngIf",null==e.address||null==e.address.errors?null:e.address.errors.pattern),t.R7$(),t.Y8G("ngIf",null==e.address||null==e.address.errors?null:e.address.errors.forbiddenAddress)}}function zt(n,a){if(1&n){const e=t.RV6();t.j41(0,"form",25),t.bIt("submit",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.requestCoins())}),t.j41(1,"div",26)(2,"div",27)(3,"div",28)(4,"div",29)(5,"div",30)(6,"span",31),t.pXf(7,1),t.k0s()(),t.nrm(8,"input",32),t.j41(9,"div",33)(10,"button",34),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.setAmount(5e3))}),t.EFF(11,"5k"),t.k0s(),t.j41(12,"button",35),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.setAmount(5e4))}),t.EFF(13,"50k"),t.k0s(),t.j41(14,"button",35),t.bIt("click",function(){t.eBV(e);const s=t.XpG();return t.Njj(s.setAmount(5e5))}),t.EFF(15,"500k"),t.k0s()()(),t.DNE(16,wt,4,3,"div",36),t.j41(17,"div",37)(18,"div",30)(19,"span",31),t.pXf(20,2),t.k0s()(),t.nrm(21,"input",38),t.j41(22,"button",39),t.pXf(23,3),t.k0s()(),t.DNE(24,Dt,4,3,"div",36),t.k0s()()()()}if(2&n){let e;const i=t.XpG();t.Y8G("formGroup",i.faucetForm),t.R7$(8),t.HbH(t.eq3(8,F,i.invalidAmount)),t.R7$(8),t.Y8G("ngIf",i.invalidAmount),t.R7$(5),t.HbH(t.eq3(10,F,i.invalidAddress)),t.R7$(),t.Y8G("disabled",!i.faucetForm.valid||!(null!=(e=i.faucetForm.get("address"))&&e.dirty)||i.isDisabled()),t.R7$(2),t.Y8G("ngIf",i.invalidAddress)}}function Ht(n,a){if(1&n&&(t.j41(0,"div",9),t.EFF(1,"If you no longer need your testnet4 coins, please consider "),t.j41(2,"a",21),t.nI1(3,"relativeUrl"),t.j41(4,"u"),t.EFF(5,"sending them back"),t.k0s()(),t.EFF(6," to replenish the faucet."),t.k0s()),2&n){const e=t.XpG();t.R7$(2),t.Y8G("routerLink",t.l_i(3,Ft,t.bMT(3,1,"/address/"),e.status.address))}}let Jt=(()=>{class n{constructor(e,i,s,r,l,u){this.cd=e,this.servicesApiService=i,this.formBuilder=s,this.stateService=r,this.websocketService=l,this.audioService=u,this.loading=!0,this.error="",this.user=void 0,this.txid="",this.status=null,this.initForm(5e3,5e5,null)}ngOnDestroy(){this.stateService.markBlock$.next({}),this.websocketService.stopTrackingTransaction(),this.mempoolPositionSubscription&&this.mempoolPositionSubscription.unsubscribe(),this.confirmationSubscription&&this.confirmationSubscription.unsubscribe()}ngOnInit(){this.servicesApiService.userSubject$.subscribe(e=>{if(this.user=e,!e)return this.loading=!1,void this.cd.markForCheck();this.updateFaucetStatus(),this.cd.markForCheck()}),this.websocketService.want(["blocks","mempool-blocks"]),this.mempoolPositionSubscription=this.stateService.mempoolTxPosition$.subscribe(e=>{e&&e.txid===this.txid&&this.stateService.markBlock$.next({txid:e.txid,mempoolPosition:e.position})}),this.confirmationSubscription=this.stateService.txConfirmed$.subscribe(([e,i])=>{e&&e===this.txid&&this.stateService.markBlock$.next({blockHeight:i.height})})}updateFaucetStatus(){this.servicesApiService.getFaucetStatus$().subscribe({next:e=>{if(e)return this.status=e,"ok"!==this.status.code?(this.error=this.status.code,void this.updateForm(this.status.min??5e3,this.status.max??5e5,this.status.address)):void this.updateForm(this.status.min,this.status.max,this.status.address);this.error="internal_server_error"},error:e=>{this.loading=!1,this.error=e.error,this.cd.markForCheck()}})}requestCoins(){this.isDisabled()||(this.error=null,this.txid="",this.stateService.markBlock$.next({}),this.servicesApiService.requestTestnet4Coins$(this.faucetForm.get("address")?.value,parseInt(this.faucetForm.get("satoshis")?.value)).subscribe({next:e=>{this.txid=e.txid,this.websocketService.startTrackTransaction(this.txid),this.audioService.playSound("cha-ching"),this.updateFaucetStatus(),this.cd.markForCheck()},error:e=>{this.error=e.error}}))}isDisabled(){return!(this.user&&"ok"===this.status?.code&&!this.error)}getNotFaucetAddressValidator(e){return e?i=>i.value===e?{forbiddenAddress:{value:i.value}}:null:()=>null}initForm(e,i,s){this.faucetForm=this.formBuilder.group({address:["",[c.k0.required,c.k0.pattern((0,A.sG)("address","testnet4")),this.getNotFaucetAddressValidator(s)]],satoshis:[e,[c.k0.required,c.k0.min(e),c.k0.max(i)]]})}updateForm(e,i,s){this.faucetForm?(this.faucetForm.get("address").setValidators([c.k0.required,c.k0.pattern((0,A.sG)("address","testnet4")),this.getNotFaucetAddressValidator(s)]),this.faucetForm.get("satoshis").setValidators([c.k0.required,c.k0.min(e),c.k0.max(i)]),this.faucetForm.get("satoshis").setValue(Math.max(e,this.faucetForm.get("satoshis").value)),this.faucetForm.get("satoshis").updateValueAndValidity(),this.faucetForm.get("satoshis").markAsDirty()):this.initForm(e,i,s),this.loading=!1,this.cd.markForCheck()}setAmount(e){this.faucetForm&&(this.faucetForm.get("satoshis").setValue(e),this.faucetForm.get("satoshis").updateValueAndValidity(),this.faucetForm.get("satoshis").markAsDirty())}get amount(){return this.faucetForm.get("satoshis")}get invalidAmount(){const e=this.faucetForm.get("satoshis");return e?.invalid&&(e.dirty||e.touched)}get address(){return this.faucetForm.get("address")}get invalidAddress(){const e=this.faucetForm.get("address");return e?.invalid&&(e.dirty||e.touched)}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(t.gRc),t.rXU(St.z),t.rXU(c.ok),t.rXU(m.d),t.rXU(C.H),t.rXU(Nt.U))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-faucet"]],decls:14,vars:4,consts:()=>{let e,i,s,r;return e="Testnet4 kraan",i="Bedrag (sat)",s="Adres",r="Testnet4-munten aanvragen",[e,i,s,r,[1,"container-xl"],[1,"title-block","justify-content-center"],[1,"faucet-container","text-center"],[1,"alert","alert-success","w-100","text-truncate"],[1,"formGroup",3,"formGroup"],[1,"mt-4","alert","alert-info","w-100"],[3,"icon"],[1,"text-primary",3,"href"],[1,"spinner-border","text-light"],[1,"alert","alert-mempool","d-block","text-center","w-100"],[1,"d-inline","align-middle"],["routerLink","/login",3,"queryParams"],[1,"mr-2"],["customClass","btn btn-sm","width","220px","redirectTo","/testnet4/faucet","buttonString","Sign up with Twitter"],[1,"alert","alert-danger","w-100","col","d-flex","justify-content-center","text-left"],[1,"d-flex"],[1,"mr-1",3,"icon","fixedWidth"],[1,"text-primary",3,"routerLink"],[1,"mb-2","mr-2"],["customClass","btn btn-sm","width","180px","redirectTo","/testnet4/faucet","buttonString","Link your Twitter"],[1,"w-100",3,"error"],[1,"formGroup",3,"submit","formGroup"],[1,"row"],[1,"col"],[1,"form-group","mb-0"],[1,"input-group","input-group-lg"],[1,"input-group-prepend"],[1,"input-group-text"],["type","number","formControlName","satoshis","id","satoshis",1,"form-control"],[1,"button-group"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-secondary","ml-2",3,"click"],["class","text-danger text-left",4,"ngIf"],[1,"input-group","input-group-lg","mt-2"],["type","text","formControlName","address","id","address","placeholder","tb1q...",1,"form-control"],["type","submit",1,"btn","btn-primary","submit-button",3,"disabled"],[1,"text-danger","text-left"],[4,"ngIf"]]},template:function(i,s){1&i&&(t.j41(0,"div",4)(1,"div",5)(2,"h1"),t.pXf(3,0),t.k0s()(),t.j41(4,"div",6),t.DNE(5,xt,5,4,"div",7)(6,$t,3,0)(7,It,9,2)(8,Gt,8,5)(9,yt,5,0)(10,Lt,4,0)(11,kt,1,1)(12,zt,25,12,"form",8)(13,Ht,7,6,"div",9),t.k0s()()),2&i&&(t.R7$(5),t.vxM(5,s.txid?5:-1),t.R7$(),t.vxM(6,s.loading?6:s.user?s.user&&"pending"===s.user.status&&!s.user.email&&s.user.snsId?8:"not_available"===s.error?9:"account_limited"===s.error?10:s.error?11:-1:7),t.R7$(6),t.vxM(12,s.loading?-1:12),t.R7$(),t.vxM(13,null!=s.status&&s.status.address?13:-1))},dependencies:[d.bT,p.Wk,c.qT,c.me,c.Q0,c.BC,c.cb,c.j4,c.JD,Mt.aY,bt.Re,Ot,d.QX,vt.U],styles:['.formGroup[_ngcontent-%COMP%]{width:100%}.input-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:stretch;justify-content:flex-end;row-gap:.5rem;gap:.5rem}.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{min-width:160px;flex-grow:100}.input-group[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]{display:flex;align-items:stretch}.input-group[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex-grow:1}.input-group[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.input-group[_ngcontent-%COMP%]   #satoshis[_ngcontent-%COMP%]:after{content:"sats";position:absolute;right:.5em;top:0;bottom:0}.faucet-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;width:100%;max-width:800px;margin:auto}.invalid[_ngcontent-%COMP%]{border-width:1px;border-color:var(--red)}']})}return n})();const x=(window||{}).__env||{},_=[{path:"",component:y.x,children:[{path:"mining/blocks",redirectTo:"blocks",pathMatch:"full"},{path:"tx/push",component:N.a},{path:"pushtx",component:N.a},{path:"tx/test",component:J},{path:"about",loadChildren:()=>o.e(807).then(o.bind(o,6807)).then(n=>n.AboutModule)},{path:"blocks/:page",component:nt.n},{path:"blocks",redirectTo:"blocks/1"},{path:"rbf",component:gt},{path:"terms-of-service",loadChildren:()=>o.e(182).then(o.bind(o,5182)).then(n=>n.TermsOfServiceModule)},{path:"privacy-policy",loadChildren:()=>o.e(26).then(o.bind(o,2026)).then(n=>n.PrivacyPolicyModule)},{path:"trademark-policy",loadChildren:()=>o.e(924).then(o.bind(o,7924)).then(n=>n.TrademarkModule)},{path:"tx",component:g.K,data:{preload:!0,networkSpecific:!0},loadChildren:()=>Promise.all([o.e(735),o.e(205),o.e(682),o.e(974),o.e(635),o.e(654)]).then(o.bind(o,5654)).then(n=>n.TransactionModule)},{path:"block",component:g.K,data:{preload:!0,networkSpecific:!0},loadChildren:()=>Promise.all([o.e(205),o.e(208)]).then(o.bind(o,3208)).then(n=>n.BlockModule)},{path:"docs",loadChildren:()=>o.e(973).then(o.bind(o,7973)).then(n=>n.DocsModule),data:{preload:!0}},{path:"api",loadChildren:()=>o.e(973).then(o.bind(o,7973)).then(n=>n.DocsModule)},{path:"lightning",loadChildren:()=>Promise.all([o.e(735),o.e(205),o.e(682),o.e(974),o.e(371),o.e(647)]).then(o.bind(o,5647)).then(n=>n.LightningModule),data:{preload:x&&!0===x.LIGHTNING,networks:["bitcoin"]}},{path:"tools/calculator",component:et}]}];window.__env?.OFFICIAL_MEMPOOL_SPACE&&(_[0].children.push({path:"monitoring",data:{networks:["bitcoin","liquid"]},component:ht.v}),_[0].children.push({path:"nodes",data:{networks:["bitcoin","liquid"]},component:Ct.t}),window.isMempoolSpaceBuild&&_[0].children.push({path:"faucet",canActivate:[(n,a)=>a.url.startsWith("/testnet4/")],component:g.K,data:{preload:!0,networkSpecific:!0},children:[{path:"",data:{networks:["bitcoin"]},component:Jt}]}));let $=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[p.iI.forChild(_),p.iI]})}return n})(),Wt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[d.MD,$,L.G]})}return n})()}}]);