"use strict";(self.webpackChunkmempool=self.webpackChunkmempool||[]).push([[881],{7945:($,A,r)=>{r.d(A,{a:()=>W});var e=r(467),P=r(9417),b=r(9862),t=r(4438),k=r(3366),v=r(2083),f=r(2251),x=r(1954),p=r(8185),N=r(6631),R=r(177),I=r(9137),m=r(715);const C=(o,T)=>[o,T],u=o=>({invalid:o});function a(o,T){if(1&o&&(t.j41(0,"a",18),t.nI1(1,"relativeUrl"),t.EFF(2),t.k0s()),2&o){const n=t.XpG();t.Y8G("routerLink",t.l_i(4,C,t.bMT(1,2,"/tx/"),n.txId)),t.R7$(2),t.JRh(n.txId)}}function c(o,T){if(1&o&&(t.j41(0,"p",16),t.EFF(1),t.k0s()),2&o){const n=t.XpG(2);t.R7$(),t.JRh(n.errorPackage)}}function l(o,T){if(1&o&&(t.j41(0,"p",26),t.EFF(1),t.k0s()),2&o){const n=t.XpG(2);t.R7$(),t.JRh(n.packageMessage)}}function d(o,T){1&o&&(t.j41(0,"span"),t.EFF(1,"\u2705"),t.k0s())}function g(o,T){1&o&&(t.j41(0,"span"),t.EFF(1,"\u274c"),t.k0s())}function U(o,T){if(1&o&&(t.j41(0,"a",18),t.nI1(1,"relativeUrl"),t.nrm(2,"app-truncate",36),t.k0s()),2&o){const n=t.XpG().$implicit;t.Y8G("routerLink",t.l_i(4,C,t.bMT(1,2,"/tx/"),n.txid)),t.R7$(2),t.Y8G("text",n.txid)}}function y(o,T){if(1&o&&t.nrm(0,"app-truncate",36),2&o){const n=t.XpG().$implicit;t.Y8G("text",n.txid)}}function H(o,T){if(1&o&&t.nrm(0,"app-fee-rate",37),2&o){const n=t.XpG().$implicit;t.Y8G("fee",1e5*(null==n.fees?null:n.fees["effective-feerate"]))}}function G(o,T){1&o&&(t.j41(0,"span"),t.EFF(1,"-"),t.k0s())}function X(o,T){if(1&o&&(t.qex(0),t.j41(1,"tr")(2,"td",29),t.DNE(3,d,2,0,"span")(4,g,2,0),t.k0s(),t.j41(5,"td",30),t.DNE(6,U,3,7,"a",18)(7,y,1,1),t.k0s(),t.j41(8,"td",31),t.DNE(9,H,1,1,"app-fee-rate",34)(10,G,2,0,"span",35),t.k0s(),t.j41(11,"td",32),t.EFF(12),t.k0s()(),t.bVm()),2&o){const n=T.$implicit;t.R7$(3),t.vxM(3,null==n.error?3:4),t.R7$(3),t.vxM(6,n.error?7:6),t.R7$(3),t.Y8G("ngIf",null!=(null==n.fees?null:n.fees["effective-feerate"])),t.R7$(),t.Y8G("ngIf",null==(null==n.fees?null:n.fees["effective-feerate"])),t.R7$(2),t.SpI(" ",n.error||"-"," ")}}function B(o,T){if(1&o&&(t.j41(0,"div",27)(1,"table",28)(2,"tbody")(3,"tr")(4,"th",29),t.pXf(5,6),t.k0s(),t.j41(6,"th",30),t.pXf(7,7),t.k0s(),t.j41(8,"th",31),t.pXf(9,8),t.k0s(),t.j41(10,"th",32),t.pXf(11,9),t.k0s()(),t.DNE(12,X,13,5,"ng-container",33),t.k0s()()()),2&o){const n=t.XpG(2);t.R7$(12),t.Y8G("ngForOf",n.results)}}function j(o,T){if(1&o){const n=t.RV6();t.nrm(0,"br"),t.j41(1,"h1",19),t.pXf(2,2),t.k0s(),t.j41(3,"form",12),t.bIt("submit",function(){t.eBV(n);const _=t.XpG();return t.Njj(_.submitTxsForm.valid&&_.submitTxs())}),t.j41(4,"div",13),t.nrm(5,"textarea",20),t.k0s(),t.j41(6,"label"),t.pXf(7,3),t.k0s(),t.nrm(8,"input",21),t.j41(9,"label"),t.pXf(10,4),t.k0s(),t.nrm(11,"input",22)(12,"br"),t.j41(13,"button",15),t.pXf(14,5),t.k0s(),t.DNE(15,c,2,1,"p",23)(16,l,2,1,"p",24),t.k0s(),t.nrm(17,"br"),t.DNE(18,B,13,1,"div",25)}if(2&o){const n=t.XpG();t.R7$(3),t.Y8G("formGroup",n.submitTxsForm),t.R7$(5),t.HbH(t.eq3(11,u,n.invalidMaxfeerate)),t.Y8G("value",1e4),t.R7$(3),t.HbH(t.eq3(13,u,n.invalidMaxburnamount)),t.Y8G("value",0),t.R7$(2),t.Y8G("disabled",n.isLoadingPackage),t.R7$(2),t.Y8G("ngIf",n.errorPackage),t.R7$(),t.Y8G("ngIf",n.packageMessage),t.R7$(2),t.Y8G("ngIf",null==n.results?null:n.results.length)}}let W=(()=>{class o{constructor(n,s,_,i,h,M,S,E){this.formBuilder=n,this.apiService=s,this.stateService=_,this.seoService=i,this.ogService=h,this.route=M,this.router=S,this.relativeUrlPipe=E,this.error="",this.txId="",this.isLoading=!1,this.errorPackage="",this.packageMessage="",this.results=[],this.invalidMaxfeerate=!1,this.invalidMaxburnamount=!1,this.isLoadingPackage=!1,this.network=this.stateService.network}ngOnInit(){var n=this;this.pushTxForm=this.formBuilder.group({txHash:["",P.k0.required]}),this.submitTxsForm=this.formBuilder.group({txs:["",P.k0.required],maxfeerate:["",P.k0.min(0)],maxburnamount:["",P.k0.min(0)]}),this.stateService.networkChanged$.subscribe(s=>this.network=s),this.seoService.setTitle("Broadcast Transaction"),this.seoService.setDescription("Broadcast a transaction to the " + ("liquid" === this.stateService.network || "liquidtestnet" === this.stateService.network ? "Liquid" : "Earthcoin") + "" + (0, b.Sr)(this.stateService.network) + " network using the transaction's hash."),this.ogService.setManualOgImage("tx-push.jpg"),this.route.fragment.subscribe(function(){var s=(0,e.A)(function*(_){const i=new URLSearchParams(_||"");return n.handleColdcardPushTx(i)});return function(_){return s.apply(this,arguments)}}())}postTx(n){var s=this;return(0,e.A)(function*(){return s.isLoading=!0,s.error="",s.txId="",new Promise((_,i)=>{s.apiService.postTransaction$(n||s.pushTxForm.get("txHash").value).subscribe(h=>{s.isLoading=!1,s.txId=h,s.pushTxForm.reset(),_(s.txId)},h=>{if("string"==typeof h.error){const M=h.error.replace(/\\/g,"").match('"message":"(.*?)"');s.error="Failed to broadcast transaction, reason: "+(M&&M[1]||h.error)}else h.message&&(s.error="Failed to broadcast transaction, reason: "+h.message);s.isLoading=!1,i(s.error)})})})()}submitTxs(){let s,_,n=[];try{if(n=(this.submitTxsForm.get("txs")?.value).split(",").map(i=>i.trim()),1===n?.length)return this.pushTxForm.get("txHash").setValue(n[0]),this.submitTxsForm.get("txs").setValue(""),void this.postTx()}catch(i){return void(this.errorPackage=i?.message)}this.invalidMaxfeerate=!1,this.invalidMaxburnamount=!1;try{const i=this.submitTxsForm.get("maxfeerate")?.value;null!=i&&""!==i&&(s=parseFloat(i)/1e5)}catch{this.invalidMaxfeerate=!0}try{const i=this.submitTxsForm.get("maxburnamount")?.value;null!=i&&""!==i&&(_=parseInt(i)/1e8)}catch{this.invalidMaxburnamount=!0}this.isLoadingPackage=!0,this.errorPackage="",this.results=[],this.apiService.submitPackage$(n,.1===s?null:s,0===_?null:_).subscribe(i=>{this.isLoadingPackage=!1,this.packageMessage=i.package_msg;for(let h in i["tx-results"])this.results.push(i["tx-results"][h]);this.submitTxsForm.reset()},i=>{if("string"==typeof i.error?.error){const h=i.error.error.replace(/\\/g,"").match('"message":"(.*?)"');this.errorPackage=h&&h[1]||i.error.error}else i.message&&(this.errorPackage=i.message);this.isLoadingPackage=!1})}handleColdcardPushTx(n){var s=this;return(0,e.A)(function*(){if(n&&n.get("t"))try{const _=n.get("n");if(""!==s.stateService.network&&!_)return s.router.navigateByUrl(`/pushtx#${n.toString()}`),!1;if("testnet"!==s.stateService.network&&"XTN"===_)return s.router.navigateByUrl(`/testnet/pushtx#${n.toString()}`),!1;if("XRT"===_)return s.error="Regtest is not supported",!1;if(_&&!["XTN","XRT"].includes(_))return s.error="Invalid network",!1;const i=s.base64UrlToU8Array(n.get("t"));if(!n.get("c"))return s.error="Missing checksum, URL is probably truncated",!1;const h=s.base64UrlToU8Array(n.get("c")),M=yield crypto.subtle.digest("SHA-256",i);if(s.u8ArrayToHex(new Uint8Array(M.slice(24)))!==s.u8ArrayToHex(h))return s.error="Bad checksum, URL is probably truncated",!1;const S=s.u8ArrayToHex(i);s.pushTxForm.get("txHash").setValue(S);try{const E=yield s.postTx(S);s.router.navigate([s.relativeUrlPipe.transform("/tx"),E])}catch{return!1}return!0}catch{return s.error="Failed to decode transaction",!1}})()}base64UrlToU8Array(n){const s=n.replace(/-/g,"+").replace(/_/g,"/").padEnd(n.length+(4-n.length%4)%4,"="),_=atob(s);return new Uint8Array([..._].map(i=>i.charCodeAt(0)))}u8ArrayToHex(n){return Array.from(n).map(s=>s.toString(16).padStart(2,"0")).join("")}static#t=this.\u0275fac=function(s){return new(s||o)(t.rXU(P.ze),t.rXU(k.G),t.rXU(v.d),t.rXU(f.B),t.rXU(x.m),t.rXU(p.nX),t.rXU(p.Ix),t.rXU(N.U))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-push-transaction"]],decls:12,vars:5,consts:()=>{let n,s,_,i,h,M,S,E,D,F,w,L;return n="Sandorio hex",s="Transliuoti Sandor\u012F",_="Transliuoti Sandor\u012F",i="Comma-separated list of raw transactions",h="Submit Package",M="Maximum fee rate (sat/vB)",S="Maximum burn amount (sats)",E="Submit Package",D="Allowed?",F="TXID",w="Efektyvus mokes\u010Di\u0173 tarifas",L="Rejection reason",[s,_,h,M,S,E,D,F,w,L,[1,"container-xl"],[1,"text-left"],["novalidate","",3,"submit","formGroup"],[1,"mb-3"],["formControlName","txHash","rows","5","placeholder",n,1,"form-control"],["type","submit",1,"btn","btn-primary","mr-2",3,"disabled"],[1,"red-color","d-inline"],[3,"routerLink",4,"ngIf"],[3,"routerLink"],[1,"text-left",2,"margin-top","1rem"],["formControlName","txs","rows","5","placeholder",i,1,"form-control"],["type","number","formControlName","maxfeerate","id","maxfeerate","placeholder","10,000 s/vb",1,"form-control","input-dark",3,"value"],["type","number","formControlName","maxburnamount","id","maxburnamount","placeholder","0 sat",1,"form-control","input-dark",3,"value"],["class","red-color d-inline",4,"ngIf"],["class","d-inline",4,"ngIf"],["class","box",4,"ngIf"],[1,"d-inline"],[1,"box"],[1,"accept-results","table","table-fixed","table-borderless","table-striped"],[1,"allowed"],[1,"txid"],[1,"rate"],[1,"reason"],[4,"ngFor","ngForOf"],[3,"fee",4,"ngIf"],[4,"ngIf"],[3,"text"],[3,"fee"]]},template:function(s,_){1&s&&(t.j41(0,"div",10)(1,"h1",11),t.pXf(2,0),t.k0s(),t.j41(3,"form",12),t.bIt("submit",function(){return _.pushTxForm.valid&&_.postTx()}),t.j41(4,"div",13),t.nrm(5,"textarea",14),t.k0s(),t.j41(6,"button",15),t.pXf(7,1),t.k0s(),t.j41(8,"p",16),t.EFF(9),t.k0s(),t.DNE(10,a,3,7,"a",17),t.k0s(),t.DNE(11,j,19,15),t.k0s()),2&s&&(t.R7$(3),t.Y8G("formGroup",_.pushTxForm),t.R7$(3),t.Y8G("disabled",_.isLoading),t.R7$(3),t.JRh(_.error),t.R7$(),t.Y8G("ngIf",_.txId),t.R7$(),t.vxM(11,""===_.network||"testnet"===_.network||"testnet4"===_.network||"signet"===_.network?11:-1))},dependencies:[R.Sq,R.bT,p.Wk,P.qT,P.me,P.Q0,P.BC,P.cb,P.j4,P.JD,I.Q,m.o,N.U]})}return o})()},5513:($,A,r)=>{r.d(A,{v:()=>m});var e=r(4438),P=r(6354),b=r(8141),t=r(6491),k=r(2083),v=r(345),f=r(177),x=r(8185),p=r(7407),N=r(5473);function R(C,u){if(1&C&&(e.j41(0,"tr")(1,"td",8),e.EFF(2),e.k0s(),e.j41(3,"td",9),e.EFF(4),e.k0s(),e.j41(5,"td",10),e.EFF(6),e.k0s(),e.j41(7,"td",11),e.EFF(8),e.k0s(),e.j41(9,"td",12),e.EFF(10),e.nI1(11,"number"),e.k0s(),e.j41(12,"td",13),e.EFF(13),e.nI1(14,"number"),e.k0s(),e.j41(15,"td",14),e.EFF(16),e.k0s()()),2&C){const a=u.$implicit,c=u.index,l=e.XpG(2);e.R7$(2),e.JRh(c+1),e.R7$(2),e.JRh(a.active?"\u2b50\ufe0f":a.flag),e.R7$(2),e.JRh(a.link),e.R7$(2),e.JRh(l.getLastUpdateSeconds(a)),e.R7$(2),e.E5c("",e.i5U(11,12,a.rtt/1e3,"1.1-1")," ",null==a.rtt?"":"s"," ",a.checked?a.unreachable?"\u{1f525}":"\u2705":"\u23f3",""),e.R7$(3),e.E5c("",e.i5U(14,15,a.rtt,"1.0-0")," ",null==a.rtt?"":"ms"," ",a.checked?a.unreachable?"\u{1f525}":"\u2705":"\u23f3",""),e.R7$(3),e.Lme("",a.latestHeight," ",a.checked?a.outOfSync?"\u{1f6ab}":a.latestHeight&&a.latestHeight<l.maxHeight?"\u{1f7e7}":"\u2705":"\u23f3","")}}function I(C,u){if(1&C&&(e.qex(0),e.j41(1,"div",6)(2,"table",7)(3,"tbody")(4,"tr"),e.nrm(5,"th",8)(6,"th",9),e.j41(7,"th",10),e.EFF(8,"Host"),e.k0s(),e.j41(9,"th",11),e.EFF(10,"Updated"),e.k0s(),e.j41(11,"th",12),e.EFF(12,"RTT"),e.k0s(),e.j41(13,"th",13),e.EFF(14,"RTT"),e.k0s(),e.j41(15,"th",14),e.EFF(16,"Height"),e.k0s()(),e.DNE(17,R,17,18,"tr",15),e.k0s()()(),e.bVm()),2&C){const a=u.ngIf,c=e.XpG();e.R7$(17),e.Y8G("ngForOf",a)("ngForTrackBy",c.trackByFn)}}let m=(()=>{class C{constructor(a,c,l,d){this.websocketService=a,this.stateService=c,this.cd=l,this.sanitizer=d,this.now=Date.now()}ngOnInit(){this.hosts$=this.stateService.serverHealth$.pipe((0,P.T)(a=>{const c=window.location.pathname.slice(0,-11);for(const l of a){let d="",g="";if(l.socket)d="https://"+window.location.hostname+c+"/status",g=window.location.hostname+c;else{const U=new URL(l.host);d="https://"+U.hostname+c+"/status",g=U.hostname+c}l.statusPage=this.sanitizer.bypassSecurityTrustResourceUrl(this.sanitizer.sanitize(e.WPN.URL,d)),l.link=g,l.flag=this.parseFlag(l.host)}return a}),(0,b.M)(a=>{let c=0;for(const l of a)c=Math.max(c,l.latestHeight)})),this.websocketService.want(["mempool-blocks","stats","blocks","tomahawk"]),this.interval=window.setInterval(()=>{this.now=Date.now(),this.cd.markForCheck()},1e3)}trackByFn(a,c){return c.host}getLastUpdateSeconds(a){return a.lastChecked?`${Math.ceil((this.now-a.lastChecked)/1e3)} s`:"~"}parseFlag(a){return a.includes(".fra.")?"\u{1f1e9}\u{1f1ea}":a.includes(".tk7.")?"\u{1f1ef}\u{1f1f5}":a.includes(".fmt.")||a.includes(".va1.")?"\u{1f1fa}\u{1f1f8}":""}static#t=this.\u0275fac=function(c){return new(c||C)(e.rXU(t.H),e.rXU(k.d),e.rXU(e.gRc),e.rXU(v.up))};static#e=this.\u0275cmp=e.VBU({type:C,selectors:[["app-server-health"]],decls:10,vars:6,consts:[[1,"tomahawk"],[1,"links"],[3,"routerLink"],[3,"showLoadingIndicator"],[3,"inline"],[4,"ngIf"],[1,"status-panel"],[1,"status-table","table","table-borderless","table-striped"],[1,"rank"],[1,"flag"],[1,"host"],[1,"updated"],[1,"rtt","only-small"],[1,"rtt","only-large"],[1,"height"],[4,"ngFor","ngForOf","ngForTrackBy"]],template:function(c,l){1&c&&(e.j41(0,"div",0)(1,"div",1)(2,"span"),e.EFF(3,"Monitoring"),e.k0s(),e.j41(4,"a",2),e.EFF(5,"Nodes"),e.k0s()(),e.nrm(6,"app-start",3)(7,"app-footer",4),e.DNE(8,I,18,2,"ng-container",5),e.nI1(9,"async"),e.k0s()),2&c&&(e.R7$(4),e.Y8G("routerLink","/nodes"),e.R7$(2),e.Y8G("showLoadingIndicator",!0),e.R7$(),e.Y8G("inline",!0),e.R7$(),e.Y8G("ngIf",e.bMT(9,4,l.hosts$)))},dependencies:[f.Sq,f.bT,x.Wk,p.K,N.n,f.Jj,f.QX],styles:[".tomahawk[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{text-align:right;margin-inline-end:1em}.tomahawk[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1em}.tomahawk[_ngcontent-%COMP%]   .status-panel[_ngcontent-%COMP%]{max-width:720px;margin:auto;padding:1em;background:var(--box-bg)}.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]{width:100%}.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.25em;width:0%}.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.rank[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.flag[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.rank[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.flag[_ngcontent-%COMP%]{text-align:right}.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.updated[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.updated[_ngcontent-%COMP%]{display:none;text-align:right;white-space:nowrap}.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.rtt[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.height[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.rtt[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.height[_ngcontent-%COMP%]{text-align:right}.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.only-small[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.only-small[_ngcontent-%COMP%]{display:table-cell}.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.only-large[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.only-large[_ngcontent-%COMP%]{display:none}.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.height[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.height[_ngcontent-%COMP%]{padding-right:.5em}.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.host[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.host[_ngcontent-%COMP%]{width:100%;max-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 576px){.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.updated[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.updated[_ngcontent-%COMP%]{display:table-cell}.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.only-small[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.only-small[_ngcontent-%COMP%]{display:none}.tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   td.only-large[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .status-table[_ngcontent-%COMP%]   th.only-large[_ngcontent-%COMP%]{display:table-cell}}"],changeDetection:0})}return C})()},8153:($,A,r)=>{r.d(A,{t:()=>I});var e=r(4438),P=r(6354),b=r(8141),t=r(6491),k=r(2083),v=r(345),f=r(177),x=r(8185),p=r(7407),N=r(5473);function R(m,C){if(1&m&&(e.qex(0),e.j41(1,"h5",6)(2,"a",7),e.EFF(3),e.k0s()(),e.nrm(4,"iframe",8),e.bVm()),2&m){const u=C.$implicit;e.R7$(),e.Y8G("id",u.host),e.R7$(),e.Y8G("href","https://"+u.link,e.B4B),e.R7$(),e.JRh(u.link),e.R7$(),e.Y8G("src",u.statusPage,e.f$h)}}let I=(()=>{class m{constructor(u,a,c,l){this.websocketService=u,this.stateService=a,this.cd=c,this.sanitizer=l,this.hosts=[]}ngOnInit(){this.hostSubscription=this.stateService.serverHealth$.pipe((0,P.T)(u=>{const a=window.location.pathname.slice(0,-6);for(const c of u){let l="",d="";if(c.socket)l="https://"+window.location.hostname+a+"/status",d=window.location.hostname+a;else{const g=new URL(c.host);l="https://"+g.hostname+a+"/status",d=g.hostname+a}c.statusPage=this.sanitizer.bypassSecurityTrustResourceUrl(this.sanitizer.sanitize(e.WPN.URL,l)),c.link=d}return u}),(0,b.M)(u=>{this.hosts.length!==u.length&&(this.hosts=u.sort((a,c)=>{const l=(a.host?.split(".")||[]).reverse(),d=(c.host?.split(".")||[]).reverse();let g=0;for(;g<Math.max(l.length,d.length);){if(l[g]&&!d[g])return 1;if(d[g]&&!l[g])return-1;if(l[g]!==d[g])return l[g].localeCompare(d[g]);g++}return 0})),this.cd.markForCheck()})).subscribe(),this.tip$=this.stateService.chainTip$,this.websocketService.want(["mempool-blocks","stats","blocks","tomahawk"])}trackByFn(u,a){return a.host}ngOnDestroy(){this.hosts=[],this.hostSubscription.unsubscribe()}static#t=this.\u0275fac=function(a){return new(a||m)(e.rXU(t.H),e.rXU(k.d),e.rXU(e.gRc),e.rXU(v.up))};static#e=this.\u0275cmp=e.VBU({type:m,selectors:[["app-server-status"]],decls:9,vars:5,consts:[[1,"tomahawk"],[1,"links"],[3,"routerLink"],[3,"showLoadingIndicator"],[3,"inline"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"hostLink",3,"id"],[3,"href"],[1,"mempoolStatus",3,"src"]],template:function(a,c){1&a&&(e.j41(0,"div",0)(1,"div",1)(2,"a",2),e.EFF(3,"Monitoring"),e.k0s(),e.j41(4,"span"),e.EFF(5,"Nodes"),e.k0s()(),e.nrm(6,"app-start",3)(7,"app-footer",4),e.DNE(8,R,5,4,"ng-container",5),e.k0s()),2&a&&(e.R7$(2),e.Y8G("routerLink","/monitoring"),e.R7$(4),e.Y8G("showLoadingIndicator",!0),e.R7$(),e.Y8G("inline",!0),e.R7$(),e.Y8G("ngForOf",c.hosts)("ngForTrackBy",c.trackByFn))},dependencies:[f.Sq,x.Wk,p.K,N.n],styles:[".tomahawk[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{text-align:right;margin-inline-end:1em}.tomahawk[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .tomahawk[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1em}.tomahawk[_ngcontent-%COMP%]   .mempoolStatus[_ngcontent-%COMP%]{width:100%;height:270px;border:none}.tomahawk[_ngcontent-%COMP%]   .hostLink[_ngcontent-%COMP%]{text-align:center;margin:1em auto auto}"],changeDetection:0})}return m})()}}]);