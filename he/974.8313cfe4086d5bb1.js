"use strict";(self.webpackChunkmempool=self.webpackChunkmempool||[]).push([[974],{7582:(tt,U,i)=>{i.d(U,{Z:()=>q});var t=i(1413),P=i(1584),v=i(4572),A=i(7673),b=i(6977),y=i(3386),f=i(2901),S=i(8141),I=i(5558),w=i(4668),R=i(5964),M=i(7647),k=i(6354),e=i(4438),G=i(3366),m=i(2083),u=i(6491),a=i(177),_=i(1760),h=i(4799),T=i(715);const F=(c,C)=>({widget:c,"extra-margin-right":C}),j=c=>({widget:c});function X(c,C){if(1&c&&(e.j41(0,"tr")(1,"td",17)(2,"a",18),e.nrm(3,"app-truncate",19),e.k0s()(),e.j41(4,"td",20),e.nrm(5,"app-amount",21),e.k0s()()),2&c){const r=C.$implicit,d=e.XpG(3);e.R7$(2),e.FS9("href",d.env.MEMPOOL_WEBSITE_URL+"/address/"+r.bitcoinaddress,e.B4B),e.R7$(),e.Y8G("text",r.bitcoinaddress)("lastChars",6),e.R7$(2),e.Y8G("satoshis",+r.balance)("noFiat",!0)("forceBtc",!0)}}function W(c,C){if(1&c&&(e.qex(0),e.DNE(1,X,6,6,"tr",16),e.nI1(2,"slice"),e.bVm()),2&c){const r=e.XpG().ngIf;e.R7$(),e.Y8G("ngForOf",e.brH(2,1,r,0,5))}}function Y(c,C){if(1&c&&(e.j41(0,"tr")(1,"td",22)(2,"a",18),e.nrm(3,"app-truncate",19),e.k0s()(),e.j41(4,"td",23),e.nrm(5,"app-amount",21),e.k0s()()),2&c){const r=C.$implicit,d=e.XpG(3);e.R7$(2),e.FS9("href",d.env.MEMPOOL_WEBSITE_URL+"/address/"+r.bitcoinaddress,e.B4B),e.R7$(),e.Y8G("text",r.bitcoinaddress)("lastChars",6),e.R7$(2),e.Y8G("satoshis",+r.balance)("noFiat",!0)("forceBtc",!0)}}function K(c,C){if(1&c&&(e.DNE(0,Y,6,6,"tr",16),e.nI1(1,"slice")),2&c){const r=e.XpG().ngIf,d=e.XpG();e.Y8G("ngForOf",e.brH(1,1,r,(d.page-1)*d.pageSize,d.page*d.pageSize))}}function B(c,C){if(1&c&&(e.j41(0,"tbody"),e.DNE(1,W,3,5,"ng-container",15)(2,K,2,5,"ng-template",null,1,e.C5r),e.k0s()),2&c){const r=e.sdS(3),d=e.XpG();e.Aen(d.isLoading?"opacity: 0.75":""),e.R7$(),e.Y8G("ngIf",d.widget)("ngIfElse",r)}}function z(c,C){1&c&&(e.j41(0,"tr")(1,"td",17),e.nrm(2,"span",24),e.k0s(),e.j41(3,"td",20),e.nrm(4,"span",25),e.k0s()())}function N(c,C){if(1&c&&(e.j41(0,"tbody"),e.DNE(1,z,5,0,"tr",16),e.k0s()),2&c){const r=e.XpG(2);e.R7$(),e.Y8G("ngForOf",r.skeletonLines)}}function V(c,C){1&c&&(e.j41(0,"tr")(1,"td",22),e.nrm(2,"span",26),e.k0s(),e.j41(3,"td",23),e.nrm(4,"span",24),e.k0s()())}function Q(c,C){if(1&c&&e.DNE(0,V,5,0,"tr",16),2&c){const r=e.XpG(2);e.Y8G("ngForOf",r.skeletonLines)}}function H(c,C){if(1&c&&e.DNE(0,N,2,1,"tbody",15)(1,Q,1,1,"ng-template",null,2,e.C5r),2&c){const r=e.sdS(2),d=e.XpG();e.Y8G("ngIf",d.widget)("ngIfElse",r)}}function Z(c,C){if(1&c){const r=e.RV6();e.j41(0,"ngb-pagination",27),e.mxI("pageChange",function(p){e.eBV(r);const x=e.XpG();return e.DH7(x.page,p)||(x.page=p),e.Njj(p)}),e.bIt("pageChange",function(){e.eBV(r);const p=e.XpG();return e.Njj(p.pageChange(p.page))}),e.k0s()}if(2&c){const r=C.ngIf,d=e.XpG();e.HbH(d.isLoading?"disabled":""),e.Y8G("collectionSize",r.length)("rotate",!0)("maxSize",d.maxSize)("pageSize",15),e.R50("page",d.page),e.Y8G("boundaryLinks",!0)("ellipses",!1)}}function J(c,C){1&c&&e.nrm(0,"div",6)(1,"br")}let q=(()=>{class c{constructor(r,d,p){this.apiService=r,this.stateService=d,this.websocketService=p,this.widget=!1,this.isLoading=!0,this.page=1,this.pageSize=15,this.maxSize=window.innerWidth<=767.98?3:5,this.skeletonLines=[],this.lastReservesBlockUpdate=0,this.lastPegBlockUpdate=0,this.lastPegAmount="",this.isLoad=!0,this.destroy$=new t.B}ngOnInit(){this.isLoading=!this.widget,this.env=this.stateService.env,this.skeletonLines=!0===this.widget?[...Array(5).keys()]:[...Array(15).keys()],this.widget||(this.websocketService.want(["blocks"]),this.auditStatus$=this.stateService.blocks$.pipe((0,b.Q)(this.destroy$),(0,y.c)(4e4),(0,f.o)(r=>(0,P.O)(this.isLoad?0:2e3)),(0,S.M)(()=>this.isLoad=!1),(0,I.n)(()=>this.apiService.federationAuditSynced$()),(0,w.t)(1)),this.currentPeg$=this.auditStatus$.pipe((0,R.p)(r=>!0===r.isAuditSynced),(0,I.n)(r=>this.apiService.liquidPegs$().pipe((0,R.p)(d=>d.lastBlockUpdate>=this.lastPegBlockUpdate),(0,S.M)(d=>{this.lastPegBlockUpdate=d.lastBlockUpdate}))),(0,M.u)()),this.auditUpdated$=(0,v.z)([this.auditStatus$,this.currentPeg$]).pipe((0,R.p)(([r,d])=>!0===r.isAuditSynced),(0,k.T)(([r,d])=>({lastBlockAudit:r.lastBlockAudit,currentPegAmount:d.amount})),(0,I.n)(({lastBlockAudit:r,currentPegAmount:d})=>{const p=r>this.lastReservesBlockUpdate,x=d!==this.lastPegAmount;return this.lastReservesBlockUpdate=r,this.lastPegAmount=d,(0,A.of)(p||x)}),(0,M.u)()),this.federationAddresses$=this.auditUpdated$.pipe((0,R.p)(r=>!0===r),(0,y.c)(4e4),(0,I.n)(r=>this.apiService.federationAddresses$()),(0,S.M)(r=>this.isLoading=!1),(0,M.u)()))}ngOnDestroy(){this.destroy$.next(1),this.destroy$.complete()}pageChange(r){this.page=r}static#t=this.\u0275fac=function(d){return new(d||c)(e.rXU(G.G),e.rXU(m.d),e.rXU(u.H))};static#e=this.\u0275cmp=e.VBU({type:c,selectors:[["app-federation-addresses-list"]],inputs:{widget:"widget",federationAddresses$:"federationAddresses$"},decls:16,vars:18,consts:()=>{let r,d;return r="\u05DB\u05EA\u05D5\u05D1\u05EA",d="\u05DE\u05D0\u05D6\u05DF",[["skeleton",""],["regularRows",""],["regularRowsSkeleton",""],r,d,[3,"ngClass"],[1,"clearfix"],[2,"min-height","295px"],[1,"table","table-borderless"],[2,"vertical-align","middle"],[1,"address","text-left",3,"ngClass"],[1,"amount","text-right",3,"ngClass"],[3,"style",4,"ngIf","ngIfElse"],["class","pagination-container float-right mt-2",3,"class","collectionSize","rotate","maxSize","pageSize","page","boundaryLinks","ellipses","pageChange",4,"ngIf"],[3,"ngIf"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[1,"address","text-left","widget"],["target","_blank",2,"color","var(--orange)",3,"href"],[3,"text","lastChars"],[1,"amount","text-right","widget"],[3,"satoshis","noFiat","forceBtc"],[1,"address","text-left"],[1,"amount","text-right"],[1,"skeleton-loader",2,"max-width","400px"],[1,"skeleton-loader",2,"max-width","350px"],[1,"skeleton-loader",2,"max-width","600px"],[1,"pagination-container","float-right","mt-2",3,"pageChange","collectionSize","rotate","maxSize","pageSize","page","boundaryLinks","ellipses"]]},template:function(d,p){if(1&d&&(e.j41(0,"div",5),e.nrm(1,"div",6),e.j41(2,"div",7)(3,"table",8)(4,"thead",9)(5,"th",10),e.pXf(6,3),e.k0s(),e.j41(7,"th",11),e.pXf(8,4),e.k0s()(),e.DNE(9,B,4,4,"tbody",12),e.nI1(10,"async"),e.DNE(11,H,3,2,"ng-template",null,0,e.C5r),e.k0s(),e.DNE(13,Z,1,9,"ngb-pagination",13),e.nI1(14,"async"),e.DNE(15,J,2,0,"ng-template",14),e.k0s()()),2&d){const x=e.sdS(12);e.Y8G("ngClass",e.l_i(11,F,p.widget,p.widget)),e.R7$(5),e.Y8G("ngClass",e.eq3(14,j,p.widget)),e.R7$(2),e.Y8G("ngClass",e.eq3(16,j,p.widget)),e.R7$(2),e.Y8G("ngIf",e.bMT(10,7,p.federationAddresses$))("ngIfElse",x),e.R7$(4),e.Y8G("ngIf",e.bMT(14,9,!p.widget&&p.federationAddresses$)),e.R7$(2),e.Y8G("ngIf",!p.widget)}},dependencies:[a.YU,a.Sq,a.bT,_.s5,h.Y,T.o,a.Jj,a.P9],styles:[".spinner-border[_ngcontent-%COMP%]{height:25px;width:25px;margin-top:13px}@media (max-width: 380px){.extra-margin-right[_ngcontent-%COMP%]{margin-left:-10px}}tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:0px;padding-top:.65rem;padding-bottom:.6rem;padding-right:2rem}.widget[_ngcontent-%COMP%]   tr.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   td.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   th.widget[_ngcontent-%COMP%]{padding-right:1rem}@media (max-width: 510px){.widget[_ngcontent-%COMP%]   tr.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   td.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   th.widget[_ngcontent-%COMP%]{padding-right:.5rem}}.clear-link[_ngcontent-%COMP%]{color:#fff}.disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:.5}.progress[_ngcontent-%COMP%]{background-color:var(--secondary)}.address[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:160px}.address.widget[_ngcontent-%COMP%]{width:60%}.amount[_ngcontent-%COMP%]{width:25%}.amount.widget[_ngcontent-%COMP%]{width:40%}"],changeDetection:0})}return c})()},5504:(tt,U,i)=>{i.d(U,{W:()=>ht});var t=i(4438),P=i(4412),v=i(1413),A=i(1584),b=i(4572),y=i(7673),f=i(8141),S=i(5964),I=i(3386),w=i(6977),R=i(2901),M=i(5558),k=i(4668),e=i(7647),G=i(6354),m=i(3366),u=i(2083),a=i(6491),_=i(2251),h=i(8185),T=i(177),F=i(1760),j=i(413),X=i(4799),W=i(715),Y=i(6631);const K=(s,g)=>({"container-xl":s,widget:g}),B=s=>({widget:s}),z=(s,g,n)=>({credit:s,debit:g,"glow-effect":n}),N=(s,g)=>[s,g];function V(s,g){1&s&&(t.j41(0,"div")(1,"h1"),t.pXf(2,8),t.k0s()())}function Q(s,g){1&s&&(t.j41(0,"th",26),t.pXf(1,9),t.k0s())}function H(s,g){1&s&&(t.j41(0,"th",27),t.pXf(1,10),t.k0s())}function Z(s,g){if(1&s&&(t.qex(0),t.j41(1,"a",35),t.nI1(2,"relativeUrl"),t.nrm(3,"app-truncate",36),t.k0s(),t.bVm()),2&s){const n=t.XpG().$implicit;t.R7$(),t.Y8G("routerLink",t.l_i(5,N,t.bMT(2,3,"/tx"),n.txid))("fragment","vin="+n.txindex),t.R7$(2),t.Y8G("text",n.txid)}}function J(s,g){if(1&s&&(t.qex(0),t.j41(1,"a",35),t.nI1(2,"relativeUrl"),t.nrm(3,"app-truncate",36),t.k0s(),t.bVm()),2&s){const n=t.XpG().$implicit;t.R7$(),t.Y8G("routerLink",t.l_i(5,N,t.bMT(2,3,"/tx"),n.txid))("fragment","vout="+n.txindex),t.R7$(2),t.Y8G("text",n.txid)}}function q(s,g){if(1&s&&(t.j41(0,"tr")(1,"td",30),t.DNE(2,Z,4,8,"ng-container",13)(3,J,4,8,"ng-container",13),t.k0s(),t.j41(4,"td",31),t.nrm(5,"app-time",32),t.k0s(),t.j41(6,"td",33),t.nrm(7,"app-amount",34),t.k0s()()),2&s){const n=g.$implicit;t.R7$(2),t.Y8G("ngIf",n.amount>0),t.R7$(),t.Y8G("ngIf",n.amount<0),t.R7$(2),t.Y8G("time",n.blocktime)("showTooltip",!0),t.R7$(),t.Y8G("ngClass",t.sMw(9,z,n.amount>0,n.amount<0,n.amount<0&&n.bitcoinaddress&&!n.bitcointxid)),t.R7$(),t.Y8G("satoshis",n.amount)("noFiat",!0)("forceBtc",!0)("addPlus",!0)}}function c(s,g){if(1&s&&(t.qex(0),t.DNE(1,q,8,13,"tr",29),t.nI1(2,"slice"),t.bVm()),2&s){const n=t.XpG().ngIf;t.R7$(),t.Y8G("ngForOf",t.brH(2,1,n,0,5))}}function C(s,g){if(1&s&&(t.qex(0),t.j41(1,"a",35),t.nI1(2,"relativeUrl"),t.nrm(3,"app-truncate",41),t.k0s(),t.bVm()),2&s){const n=t.XpG().$implicit;t.R7$(),t.Y8G("routerLink",t.l_i(6,N,t.bMT(2,4,"/tx"),n.txid))("fragment","vin="+n.txindex),t.R7$(2),t.Y8G("text",n.txid)("lastChars",6)}}function r(s,g){if(1&s&&(t.qex(0),t.j41(1,"a",35),t.nI1(2,"relativeUrl"),t.nrm(3,"app-truncate",41),t.k0s(),t.bVm()),2&s){const n=t.XpG().$implicit;t.R7$(),t.Y8G("routerLink",t.l_i(6,N,t.bMT(2,4,"/tx"),n.txid))("fragment","vout="+n.txindex),t.R7$(2),t.Y8G("text",n.txid)("lastChars",6)}}function d(s,g){if(1&s&&(t.qex(0),t.j41(1,"a",42),t.nrm(2,"app-truncate",41),t.k0s(),t.bVm()),2&s){const n=t.XpG().$implicit,l=t.XpG(3);t.R7$(),t.FS9("href",l.env.MEMPOOL_WEBSITE_URL+"/tx/"+n.bitcointxid+":"+n.bitcoinindex,t.B4B),t.R7$(),t.Y8G("text",n.bitcointxid+":"+n.bitcoinindex)("lastChars",6)}}function p(s,g){1&s&&(t.qex(0),t.j41(1,"i")(2,"span",43),t.pXf(3,11),t.k0s()(),t.bVm())}function x(s,g){if(1&s&&t.DNE(0,p,4,0,"ng-container",28),2&s){const n=t.XpG().$implicit;t.XpG(3);const l=t.sdS(23);t.Y8G("ngIf",n.bitcoinaddress)("ngIfElse",l)}}function et(s,g){if(1&s&&(t.qex(0),t.j41(1,"a",42),t.nrm(2,"app-truncate",41),t.k0s(),t.bVm()),2&s){const n=t.XpG().$implicit,l=t.XpG(3);t.R7$(),t.FS9("href",l.env.MEMPOOL_WEBSITE_URL+"/address/"+n.bitcoinaddress,t.B4B),t.R7$(),t.Y8G("text",n.bitcoinaddress)("lastChars",6)}}function nt(s,g){if(1&s&&(t.j41(0,"tr")(1,"td",37),t.DNE(2,C,4,9,"ng-container",13)(3,r,4,9,"ng-container",13),t.k0s(),t.j41(4,"td",38),t.EFF(5),t.nI1(6,"date"),t.j41(7,"div",39)(8,"i"),t.EFF(9,"("),t.nrm(10,"app-time",40),t.EFF(11,")"),t.k0s()()(),t.j41(12,"td",20),t.nrm(13,"app-amount",34),t.k0s(),t.j41(14,"td",26),t.DNE(15,d,3,3,"ng-container",28)(16,x,1,2,"ng-template",null,3,t.C5r),t.k0s(),t.j41(18,"td",27),t.DNE(19,et,3,3,"ng-container",28),t.k0s()()),2&s){const n=g.$implicit,l=t.sdS(17);t.XpG(3);const o=t.sdS(23);t.R7$(2),t.Y8G("ngIf",n.amount>0),t.R7$(),t.Y8G("ngIf",n.amount<0),t.R7$(2),t.SpI(" \u200e",t.i5U(6,13,1e3*n.blocktime,"yyyy-MM-dd HH:mm")," "),t.R7$(5),t.Y8G("time",n.blocktime),t.R7$(2),t.Y8G("ngClass",t.sMw(16,z,n.amount>0,n.amount<0,n.amount<0&&n.bitcoinaddress&&!n.bitcointxid)),t.R7$(),t.Y8G("satoshis",n.amount)("noFiat",!0)("forceBtc",!0)("addPlus",!0),t.R7$(2),t.Y8G("ngIf",n.bitcointxid)("ngIfElse",l),t.R7$(4),t.Y8G("ngIf",n.bitcoinaddress)("ngIfElse",o)}}function st(s,g){if(1&s&&t.DNE(0,nt,20,20,"tr",29),2&s){const n=t.XpG().ngIf;t.Y8G("ngForOf",n)}}function it(s,g){if(1&s&&(t.j41(0,"tbody"),t.DNE(1,c,3,5,"ng-container",28)(2,st,1,1,"ng-template",null,2,t.C5r),t.k0s()),2&s){const n=t.sdS(3),l=t.XpG();t.Aen(l.isLoading?"opacity: 0.75":""),t.R7$(),t.Y8G("ngIf",l.widget)("ngIfElse",n)}}function at(s,g){1&s&&(t.j41(0,"tr")(1,"td",30),t.nrm(2,"span",44),t.k0s(),t.j41(3,"td",31),t.nrm(4,"span",45),t.k0s(),t.j41(5,"td",46),t.nrm(6,"span",45),t.k0s()())}function ot(s,g){if(1&s&&(t.j41(0,"tbody"),t.DNE(1,at,7,0,"tr",29),t.k0s()),2&s){const n=t.XpG(2);t.R7$(),t.Y8G("ngForOf",n.skeletonLines)}}function rt(s,g){1&s&&(t.j41(0,"tr")(1,"td",37),t.nrm(2,"span",45),t.k0s(),t.j41(3,"td",38),t.nrm(4,"span",47),t.k0s(),t.j41(5,"td",48),t.nrm(6,"span",49),t.k0s(),t.j41(7,"td",26),t.nrm(8,"span",45),t.k0s(),t.j41(9,"td",27),t.nrm(10,"span",47),t.k0s()())}function _t(s,g){if(1&s&&t.DNE(0,rt,11,0,"tr",29),2&s){const n=t.XpG(2);t.Y8G("ngForOf",n.skeletonLines)}}function ct(s,g){if(1&s&&t.DNE(0,ot,2,1,"tbody",28)(1,_t,1,1,"ng-template",null,4,t.C5r),2&s){const n=t.sdS(2),l=t.XpG();t.Y8G("ngIf",l.widget)("ngIfElse",n)}}function dt(s,g){if(1&s){const n=t.RV6();t.j41(0,"ngb-pagination",50),t.mxI("pageChange",function(o){t.eBV(n);const E=t.XpG();return t.DH7(E.page,o)||(E.page=o),t.Njj(o)}),t.bIt("pageChange",function(){t.eBV(n);const o=t.XpG();return t.Njj(o.pageChange(o.page))}),t.k0s()}if(2&s){const n=g.ngIf,l=t.XpG();t.HbH(l.isLoading||l.isPegCountLoading?"disabled":""),t.Y8G("collectionSize",n)("rotate",!0)("maxSize",l.maxSize)("pageSize",15),t.R50("page",l.page),t.Y8G("boundaryLinks",!0)("ellipses",!1)}}function gt(s,g){1&s&&t.nrm(0,"div",14)(1,"br")}function lt(s,g){1&s&&(t.j41(0,"span",43),t.EFF(1,"-"),t.k0s())}let ht=(()=>{class s{constructor(n,l,o,E,O,D,$,L){this.apiService=n,this.cd=l,this.stateService=o,this.websocketService=E,this.seoService=O,this.route=D,this.router=$,this.locale=L,this.widget=!1,this.isLoading=!0,this.isPegCountLoading=!0,this.page=1,this.pageSize=15,this.maxSize=window.innerWidth<=767.98?3:5,this.skeletonLines=[],this.lastReservesBlockUpdate=0,this.startingIndexSubject=new P.t(0),this.currentIndex=0,this.lastPegBlockUpdate=0,this.lastPegAmount="",this.isLoad=!0,this.dir="ltr",this.destroy$=new v.B,(this.locale.startsWith("ar")||this.locale.startsWith("fa")||this.locale.startsWith("he"))&&(this.dir="rtl")}ngOnInit(){if(this.isLoading=!this.widget,this.env=this.stateService.env,this.skeletonLines=!0===this.widget?[...Array(5).keys()]:[...Array(15).keys()],!this.widget){this.seoService.setTitle("Recent Peg-In / Out's"),this.websocketService.want(["blocks"]),this.paramSubscription=this.route.params.pipe((0,f.M)(o=>{this.page=+o.page||1,this.startingIndexSubject.next(15*(this.page-1))})).subscribe();const n="ltr"===this.dir?"ArrowLeft":"ArrowRight",l="ltr"===this.dir?"ArrowRight":"ArrowLeft";this.keyNavigationSubscription=this.stateService.keyNavigation$.pipe((0,S.p)(o=>o.key===n||o.key===l),(0,f.M)(o=>{o.key===n&&this.page>1&&(this.page--,this.isLoading=!0,this.cd.markForCheck()),o.key===l&&this.page<this.pegsCount/this.pageSize&&(this.page++,this.isLoading=!0,this.cd.markForCheck())}),(0,I.c)(1e3,void 0,{leading:!0,trailing:!0})).subscribe(()=>{this.pageChange(this.page)}),this.auditStatus$=this.stateService.blocks$.pipe((0,w.Q)(this.destroy$),(0,I.c)(4e4),(0,R.o)(o=>(0,A.O)(this.isLoad?0:2e3)),(0,f.M)(()=>this.isLoad=!1),(0,M.n)(()=>this.apiService.federationAuditSynced$()),(0,k.t)(1)),this.currentPeg$=this.auditStatus$.pipe((0,S.p)(o=>!0===o.isAuditSynced),(0,M.n)(o=>this.apiService.liquidPegs$().pipe((0,S.p)(E=>E.lastBlockUpdate>=this.lastPegBlockUpdate),(0,f.M)(E=>{this.lastPegBlockUpdate=E.lastBlockUpdate}))),(0,e.u)()),this.auditUpdated$=(0,b.z)([this.auditStatus$,this.currentPeg$]).pipe((0,S.p)(([o,E])=>!0===o.isAuditSynced),(0,G.T)(([o,E])=>({lastBlockAudit:o.lastBlockAudit,currentPegAmount:E.amount})),(0,M.n)(({lastBlockAudit:o,currentPegAmount:E})=>{const O=o>this.lastReservesBlockUpdate,D=E!==this.lastPegAmount;return this.lastReservesBlockUpdate=o,this.lastPegAmount=E,(0,y.of)(O||D)}),(0,e.u)()),this.pegsCount$=this.auditUpdated$.pipe((0,S.p)(o=>!0===o),(0,f.M)(()=>this.isPegCountLoading=!0),(0,M.n)(o=>this.apiService.pegsCount$()),(0,G.T)(o=>o.pegs_count),(0,f.M)(o=>{this.isPegCountLoading=!1,this.pegsCount=o}),(0,e.u)()),this.recentPegsList$=(0,b.z)([this.auditStatus$,this.auditUpdated$,this.startingIndexSubject]).pipe((0,S.p)(([o,E,O])=>!0===o.isAuditSynced&&(!0===E||O!==this.currentIndex)),(0,f.M)(([o,E,O])=>{this.currentIndex=O,this.isLoading=!0}),(0,M.n)(([o,E,O])=>this.apiService.recentPegsList$(O)),(0,f.M)(()=>this.isLoading=!1),(0,e.u)())}}ngOnDestroy(){this.destroy$.next(1),this.destroy$.complete(),this.paramSubscription?.unsubscribe(),this.keyNavigationSubscription?.unsubscribe()}pageChange(n){this.router.navigate(["audit","pegs",n])}static#t=this.\u0275fac=function(l){return new(l||s)(t.rXU(m.G),t.rXU(t.gRc),t.rXU(u.d),t.rXU(a.H),t.rXU(_.B),t.rXU(h.nX),t.rXU(h.Ix),t.rXU(t.xe9))};static#e=this.\u0275cmp=t.VBU({type:s,selectors:[["app-recent-pegs-list"]],inputs:{widget:"widget",recentPegsList$:"recentPegsList$"},decls:24,vars:24,consts:()=>{let n,l,o,E,O,D,$;return n="\u05E4\u05E2\u05D5\u05DC\u05D4",l="\u05EA\u05D0\u05E8\u05D9\u05DA",o="\u05DB\u05DE\u05D5\u05EA",E="Recent Peg-In / Out's",O="Fund / Redemption Tx",D="EAC Address",$="Peg out in progress...",[["skeleton",""],["noRedeem",""],["regularRows",""],["redeemInProgress",""],["regularRowsSkeleton",""],n,l,o,E,O,D,$,[3,"ngClass"],[4,"ngIf"],[1,"clearfix"],[2,"min-height","295px"],[1,"table","table-borderless"],[2,"vertical-align","middle"],[1,"transaction","text-left",3,"ngClass"],[1,"timestamp","text-left",3,"ngClass"],[1,"amount","text-right",3,"ngClass"],["class","output text-left",4,"ngIf"],["class","address text-left",4,"ngIf"],[3,"style",4,"ngIf","ngIfElse"],["class","pagination-container float-right mt-2",3,"class","collectionSize","rotate","maxSize","pageSize","page","boundaryLinks","ellipses","pageChange",4,"ngIf"],[3,"ngIf"],[1,"output","text-left"],[1,"address","text-left"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[1,"transaction","text-left","widget"],[1,"timestamp","text-left","widget"],["kind","since",3,"time","showTooltip"],[1,"amount","text-right","widget",3,"ngClass"],[3,"satoshis","noFiat","forceBtc","addPlus"],[3,"routerLink","fragment"],[3,"text"],[1,"transaction","text-left"],[1,"timestamp","text-left"],[1,"symbol","lg-inline","relative-time"],["kind","since",3,"time"],[3,"text","lastChars"],["target","_blank",2,"color","var(--orange)",3,"href"],[1,"text-muted"],[1,"skeleton-loader",2,"max-width","400px"],[1,"skeleton-loader",2,"max-width","300px"],[1,"amount","text-right","widget"],[1,"skeleton-loader",2,"max-width","240px"],[1,"amount","text-right"],[1,"skeleton-loader",2,"max-width","140px"],[1,"pagination-container","float-right","mt-2",3,"pageChange","collectionSize","rotate","maxSize","pageSize","page","boundaryLinks","ellipses"]]},template:function(l,o){if(1&l&&(t.j41(0,"div",12),t.DNE(1,V,3,0,"div",13),t.nrm(2,"div",14),t.j41(3,"div",15)(4,"table",16)(5,"thead",17)(6,"th",18),t.pXf(7,5),t.k0s(),t.j41(8,"th",19),t.pXf(9,6),t.k0s(),t.j41(10,"th",20),t.pXf(11,7),t.k0s(),t.DNE(12,Q,2,0,"th",21)(13,H,2,0,"th",22),t.k0s(),t.DNE(14,it,4,4,"tbody",23),t.nI1(15,"async"),t.DNE(16,ct,3,2,"ng-template",null,0,t.C5r),t.k0s(),t.DNE(18,dt,1,9,"ngb-pagination",24),t.nI1(19,"async"),t.DNE(20,gt,2,0,"ng-template",25),t.k0s()(),t.nrm(21,"br"),t.DNE(22,lt,2,0,"ng-template",null,1,t.C5r)),2&l){const E=t.sdS(17);t.Y8G("ngClass",t.l_i(15,K,!o.widget,o.widget)),t.R7$(),t.Y8G("ngIf",!o.widget),t.R7$(5),t.Y8G("ngClass",t.eq3(18,B,o.widget)),t.R7$(2),t.Y8G("ngClass",t.eq3(20,B,o.widget)),t.R7$(2),t.Y8G("ngClass",t.eq3(22,B,o.widget)),t.R7$(2),t.Y8G("ngIf",!o.widget),t.R7$(),t.Y8G("ngIf",!o.widget),t.R7$(),t.Y8G("ngIf",t.bMT(15,11,o.recentPegsList$))("ngIfElse",E),t.R7$(4),t.Y8G("ngIf",t.bMT(19,13,!o.widget&&o.pegsCount$)),t.R7$(2),t.Y8G("ngIf",!o.widget)}},dependencies:[T.YU,T.Sq,T.bT,h.Wk,F.s5,j.$,X.Y,W.o,T.Jj,T.P9,T.vh,Y.U],styles:[".spinner-border[_ngcontent-%COMP%]{height:25px;width:25px;margin-top:13px}tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:0px;padding-top:.65rem;padding-bottom:.6rem;padding-right:2rem}.widget[_ngcontent-%COMP%]   tr.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   td.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   th.widget[_ngcontent-%COMP%]{padding-right:1rem}@media (max-width: 510px){.widget[_ngcontent-%COMP%]   tr.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   td.widget[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   th.widget[_ngcontent-%COMP%]{padding-right:.5rem}}.clear-link[_ngcontent-%COMP%]{color:#fff}.disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:.5}.progress[_ngcontent-%COMP%]{background-color:var(--secondary)}.transaction[_ngcontent-%COMP%]{width:65%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:120px}.transaction.widget[_ngcontent-%COMP%]{width:100%}@media (max-width: 527px){.address[_ngcontent-%COMP%]{display:none}}.amount[_ngcontent-%COMP%]{width:0%}.output[_ngcontent-%COMP%]{width:50%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:160px}@media (max-width: 800px){.output[_ngcontent-%COMP%]{display:none}}.address[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:160px}@media (max-width: 960px){.address[_ngcontent-%COMP%]{display:none}}.timestamp[_ngcontent-%COMP%]{width:0%}@media (max-width: 650px){.timestamp[_ngcontent-%COMP%]{display:none}}@media (max-width: 1000px){.timestamp[_ngcontent-%COMP%]   .relative-time[_ngcontent-%COMP%]{display:none}}@media (min-width: 768px) and (max-width: 1050px){.timestamp.widget[_ngcontent-%COMP%]{display:none}}@media (max-width: 767px){.timestamp.widget[_ngcontent-%COMP%]{display:block}}@media (max-width: 510px){.timestamp.widget[_ngcontent-%COMP%]{display:none}}.credit[_ngcontent-%COMP%]{color:var(--green)}.debit[_ngcontent-%COMP%]{color:var(--red)}.glow-effect[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_color-oscillation 1s ease-in-out infinite alternate}@keyframes _ngcontent-%COMP%_color-oscillation{0%{color:#777983}to{color:var(--red)}}"],changeDetection:0})}return s})()},4972:(tt,U,i)=>{i.d(U,{$P:()=>M,sN:()=>G});var t=i(467),P=i(4438),v=i(2771),A=i(8359),b=i(1413),y=i(8839),f=i(1985),S=i(3386),I=i(5558);class w{constructor(){this.subject=new v.m(1),this.subscriptions=new A.yU}doFilter(u){this.subject.next(u)}dispose(){this.subscriptions.unsubscribe()}notEmpty(u,a){this.subscriptions.add(this.subject.subscribe(_=>{if(_[u]){const h=_[u].currentValue;null!=h&&a(h)}}))}has(u,a){this.subscriptions.add(this.subject.subscribe(_=>{_[u]&&a(_[u].currentValue)}))}notFirst(u,a){this.subscriptions.add(this.subject.subscribe(_=>{_[u]&&!_[u].isFirstChange()&&a(_[u].currentValue)}))}notFirstAndEmpty(u,a){this.subscriptions.add(this.subject.subscribe(_=>{if(_[u]&&!_[u].isFirstChange()){const h=_[u].currentValue;null!=h&&a(h)}}))}}const R=new P.nKC("NGX_ECHARTS_CONFIG");let M=(()=>{class m{constructor(a,_,h){this.el=_,this.ngZone=h,this.options=null,this.theme=null,this.initOpts=null,this.merge=null,this.autoResize=!0,this.loading=!1,this.loadingType="default",this.loadingOpts=null,this.chartInit=new P.bkB,this.optionsError=new P.bkB,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartHighlight=this.createLazyEvent("highlight"),this.chartDownplay=this.createLazyEvent("downplay"),this.chartSelectChanged=this.createLazyEvent("selectchanged"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendLegendSelectAll=this.createLazyEvent("legendselectall"),this.chartLegendLegendInverseSelect=this.createLazyEvent("legendinverseselect"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartGraphRoam=this.createLazyEvent("graphroam"),this.chartGeoRoam=this.createLazyEvent("georoam"),this.chartTreeRoam=this.createLazyEvent("treeroam"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartGeoSelectChanged=this.createLazyEvent("geoselectchanged"),this.chartGeoSelected=this.createLazyEvent("geoselected"),this.chartGeoUnselected=this.createLazyEvent("geounselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartGlobalCursorTaken=this.createLazyEvent("globalcursortaken"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.chart$=new v.m(1),this.resize$=new b.B,this.changeFilter=new w,this.resizeObFired=!1,this.echarts=a.echarts,this.theme=a.theme||null}ngOnChanges(a){this.changeFilter.doFilter(a)}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe((0,S.c)(100,y.E,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(a=>{for(const _ of a)_.target===this.el.nativeElement&&(this.resizeObFired?this.animationFrameID=window.requestAnimationFrame(()=>{this.resize$.next()}):this.resizeObFired=!0)})),this.resizeOb.observe(this.el.nativeElement)),this.changeFilter.notFirstAndEmpty("options",a=>this.onOptionsChange(a)),this.changeFilter.notFirstAndEmpty("merge",a=>this.setOption(a)),this.changeFilter.has("loading",a=>this.toggleLoading(!!a)),this.changeFilter.notFirst("theme",()=>this.refreshChart())}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.loadingSub&&this.loadingSub.unsubscribe(),this.changeFilter.dispose(),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(a){this.chart?a?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading():this.loadingSub=this.chart$.subscribe(_=>a?_.showLoading(this.loadingType,this.loadingOpts):_.hideLoading())}setOption(a,_){if(this.chart)try{this.chart.setOption(a,_)}catch(h){console.error(h),this.optionsError.emit(h)}}refreshChart(){var a=this;return(0,t.A)(function*(){a.dispose(),yield a.initChart()})()}createChart(){const a=this.el.nativeElement;if(window&&window.getComputedStyle){const _=window.getComputedStyle(a,null).getPropertyValue("height");(!_||"0px"===_)&&(!a.style.height||"0px"===a.style.height)&&(a.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:h})=>h(a,this.theme,this.initOpts)))}initChart(){var a=this;return(0,t.A)(function*(){yield a.onOptionsChange(a.options),a.merge&&a.chart&&a.setOption(a.merge)})()}onOptionsChange(a){var _=this;return(0,t.A)(function*(){a&&(_.chart||(_.chart=yield _.createChart(),_.chart$.next(_.chart),_.chartInit.emit(_.chart)),_.setOption(_.options,!0))})()}createLazyEvent(a){return this.chartInit.pipe((0,I.n)(_=>new f.c(h=>(_.on(a,T=>this.ngZone.run(()=>h.next(T))),()=>{this.chart&&(this.chart.isDisposed()||_.off(a))}))))}static#t=this.\u0275fac=function(_){return new(_||m)(P.rXU(R),P.rXU(P.aKT),P.rXU(P.SKi))};static#e=this.\u0275dir=P.FsC({type:m,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loading:"loading",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartHighlight:"chartHighlight",chartDownplay:"chartDownplay",chartSelectChanged:"chartSelectChanged",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendLegendSelectAll:"chartLegendLegendSelectAll",chartLegendLegendInverseSelect:"chartLegendLegendInverseSelect",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartGraphRoam:"chartGraphRoam",chartGeoRoam:"chartGeoRoam",chartTreeRoam:"chartTreeRoam",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartGeoSelectChanged:"chartGeoSelectChanged",chartGeoSelected:"chartGeoSelected",chartGeoUnselected:"chartGeoUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartGlobalCursorTaken:"chartGlobalCursorTaken",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],standalone:!0,features:[P.OA$]})}return m})();const e=m=>({provide:R,useValue:m});let G=(()=>{class m{static forRoot(a){return{ngModule:m,providers:[e(a)]}}static forChild(){return{ngModule:m}}static#t=this.\u0275fac=function(_){return new(_||m)};static#e=this.\u0275mod=P.$C({type:m});static#n=this.\u0275inj=P.G2t({})}return m})()}}]);