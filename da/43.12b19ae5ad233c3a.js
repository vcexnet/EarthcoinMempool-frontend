"use strict";(self.webpackChunkmempool=self.webpackChunkmempool||[]).push([[43],{9636:(B,I,_)=>{_.d(I,{t:()=>gn});var n=_(4438),v=_(8185),N=_(2083),x=_(3366),M=_(177),R=_(413),u=_(7844),S=_(6631),L=_(6934),c=_(7302);const P=["tooltip"],s=(t,r)=>[t,r];function a(t,r){if(1&t&&(n.j41(0,"tr")(1,"td",15),n.pXf(2,7),n.k0s(),n.nrm(3,"td",24),n.nI1(4,"vbytes"),n.k0s()),2&t){const e=n.XpG(2);n.R7$(3),n.Y8G("innerHTML","\u200e"+n.i5U(4,1,e.rbfInfo.tx.vsize,2),n.npT)}}function d(t,r){if(1&t&&(n.j41(0,"tr")(1,"td",15),n.pXf(2,8),n.k0s(),n.nrm(3,"td",24),n.nI1(4,"vbytes"),n.k0s()),2&t){const e=n.XpG(2);n.R7$(3),n.Y8G("innerHTML","\u200e"+n.i5U(4,1,4*e.rbfInfo.tx.vsize,2),n.npT)}}function h(t,r){1&t&&(n.j41(0,"span",25),n.pXf(1,9),n.k0s())}function w(t,r){1&t&&(n.j41(0,"span",26),n.pXf(1,10),n.k0s())}function A(t,r){1&t&&(n.j41(0,"span",27)(1,"del"),n.pXf(2,11),n.k0s()())}function G(t,r){1&t&&(n.j41(0,"span",26),n.pXf(1,12),n.k0s())}function X(t,r){if(1&t&&(n.j41(0,"div",14,0)(2,"table")(3,"tbody")(4,"tr")(5,"td",15),n.pXf(6,2),n.k0s(),n.j41(7,"td")(8,"a",16),n.nI1(9,"relativeUrl"),n.EFF(10),n.nI1(11,"shortenString"),n.k0s()()(),n.j41(12,"tr")(13,"td",15),n.pXf(14,3),n.k0s(),n.j41(15,"td")(16,"i"),n.nrm(17,"app-time",17),n.k0s()()(),n.j41(18,"tr")(19,"td",15),n.pXf(20,4),n.k0s(),n.j41(21,"td"),n.EFF(22),n.nI1(23,"number"),n.j41(24,"span",18),n.pXf(25,5),n.k0s()()(),n.DNE(26,a,5,4,"tr",19)(27,d,5,4,"tr",20),n.j41(28,"tr")(29,"td",15),n.pXf(30,6),n.k0s(),n.j41(31,"td"),n.DNE(32,h,2,0,"span",21)(33,w,2,0,"span",22)(34,A,3,0,"ng-template",null,1,n.C5r)(36,G,2,0,"span",23),n.k0s()()()()()),2&t){const e=n.sdS(35),o=n.XpG();n.xc7("left",o.tooltipPosition.x+"px")("top",o.tooltipPosition.y+"px"),n.R7$(8),n.Y8G("routerLink",n.l_i(20,s,n.bMT(9,13,"/tx/"),o.rbfInfo.tx.txid)),n.R7$(2),n.JRh(n.i5U(11,15,o.rbfInfo.tx.txid,16)),n.R7$(7),n.Y8G("time",o.rbfInfo.time)("fastRender",!0),n.R7$(5),n.SpI("",n.bMT(23,18,o.rbfInfo.tx.fee)," "),n.R7$(10),n.Y8G("ngIf",o.rbfInfo.tx.fullRbf),n.R7$(),n.Y8G("ngIf",o.rbfInfo.tx.rbf)("ngIfElse",e),n.R7$(3),n.Y8G("ngIf",o.rbfInfo.tx.mined)}}let k=(()=>{class t{constructor(){this.tooltipPosition=null}ngOnChanges(e){if(e.cursorPosition&&e.cursorPosition.currentValue){let o=Math.max(10,e.cursorPosition.currentValue.x-50),i=e.cursorPosition.currentValue.y+20;if(this.tooltipElement){const l=this.tooltipElement.nativeElement.getBoundingClientRect();o+l.width>window.innerWidth-10&&(o=Math.max(0,window.innerWidth-l.width-10)),i+l.height>window.innerHeight-20&&(i=i-l.height-20)}this.tooltipPosition={x:o,y:i}}}static#n=this.\u0275fac=function(o){return new(o||t)};static#e=this.\u0275cmp=n.VBU({type:t,selectors:[["app-rbf-timeline-tooltip"]],viewQuery:function(o,i){if(1&o&&n.GBs(P,5),2&o){let l;n.mGM(l=n.lsd())&&(i.tooltipElement=l.first)}},inputs:{rbfInfo:"rbfInfo",cursorPosition:"cursorPosition"},features:[n.OA$],decls:1,vars:1,consts:()=>{let e,o,i,l,p,O,g,C,b,T,m;return e="Transaktion",o="F\xF8rst set",i="Gebyr",l="sats",p="Status",O="Virtuel st\xF8rrelse",g="V\xE6gt",C="Fuld RBF",b="RBF",T="RBF",m="Minet",[["tooltip",""],["rbfDisabled",""],e,o,i,l,p,O,g,C,b,T,m,["class","rbf-tooltip",3,"left","top",4,"ngIf"],[1,"rbf-tooltip"],[1,"td-width"],[3,"routerLink"],["kind","since",3,"time","fastRender"],[1,"symbol"],[4,"only-vsize"],[4,"only-weight"],["class","badge badge-info",4,"ngIf"],["class","badge badge-success",4,"ngIf","ngIfElse"],["class","badge badge-success",4,"ngIf"],[3,"innerHTML"],[1,"badge","badge-info"],[1,"badge","badge-success"],[1,"badge","badge-danger","mr-1"]]},template:function(o,i){1&o&&n.DNE(0,X,37,23,"div",13),2&o&&n.Y8G("ngIf",i.rbfInfo&&null!==i.tooltipPosition)},dependencies:[M.bT,v.Wk,R.$,u.R,u.e,M.QX,S.U,L.K,c.l],styles:[".rbf-tooltip[_ngcontent-%COMP%]{position:fixed;z-index:3;background:color-mix(in srgb,var(--active-bg) 95%,transparent);border-radius:4px;box-shadow:1px 1px 10px #00000080;color:var(--tooltip-grey);display:flex;flex-direction:column;justify-content:space-between;padding:10px 15px;text-align:left;pointer-events:none}.rbf-tooltip[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{margin-right:1em}.rbf-tooltip[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]:last-child{margin-right:0}.td-width[_ngcontent-%COMP%]{padding-right:10px}"]})}return t})();var D=_(9137);const j=(t,r)=>[t,r],Y=()=>({display:"block",marginTop:"-0.5em"}),V=t=>({$implicit:t});function z(t,r){if(1&t&&(n.j41(0,"div",21)(1,"div",22),n.nrm(2,"app-time",23),n.k0s()()),2&t){const e=n.XpG(2).$implicit;n.R7$(2),n.Y8G("time",e.replacement.interval)("relative",!1)}}function U(t,r){if(1&t&&(n.qex(0),n.DNE(1,z,3,2,"div",20),n.bVm()),2&t){const e=n.XpG().$implicit;n.XpG(3);const o=n.sdS(8);n.R7$(),n.Y8G("ngIf",null!=(null==e.replacement?null:e.replacement.interval))("ngIfElse",o)}}function H(t,r){if(1&t&&(n.qex(0),n.nrm(1,"div",18),n.DNE(2,U,2,2,"ng-container",19),n.bVm()),2&t){const e=r.index,o=n.XpG(2).$implicit;n.R7$(2),n.Y8G("ngIf",e<o.length-1)}}function W(t,r){if(1&t&&(n.j41(0,"div",16),n.DNE(1,H,3,1,"ng-container",17),n.k0s()),2&t){const e=n.XpG().$implicit;n.R7$(),n.Y8G("ngForOf",e)}}function K(t,r){if(1&t){const e=n.RV6();n.qex(0),n.j41(1,"div",26),n.nrm(2,"div",27)(3,"div",28),n.j41(4,"a",29),n.nI1(5,"relativeUrl"),n.bIt("pointerover",function(i){n.eBV(e);const l=n.XpG().$implicit,p=n.XpG(3);return n.Njj(p.onHover(i,l.replacement))})("pointerout",function(i){n.eBV(e);const l=n.XpG(4);return n.Njj(l.onBlur(i))}),n.nrm(6,"div",30),n.k0s(),n.j41(7,"span",31),n.nrm(8,"app-fee-rate",32),n.k0s()(),n.bVm()}if(2&t){const e=n.XpG().$implicit,o=n.XpG(3);n.R7$(),n.AVh("selected",o.txid===e.replacement.tx.txid)("mined",e.replacement.tx.mined)("first-node",e.first),n.Y8G("id","node-"+e.replacement.tx.txid),n.R7$(),n.AVh("fullrbf",null==e.replacement||null==e.replacement.tx?null:e.replacement.tx.fullRbf),n.R7$(),n.AVh("fullrbf",e.fullRbf),n.R7$(),n.AVh("rbf",e.replacement.tx.rbf),n.Y8G("routerLink",n.l_i(19,j,n.bMT(5,17,"/tx/"),e.replacement.tx.txid)),n.R7$(4),n.Y8G("fee",e.replacement.tx.fee)("weight",4*e.replacement.tx.vsize)("unitStyle",n.lJ4(22,Y))}}function Q(t,r){if(1&t&&(n.j41(0,"div",37),n.nrm(1,"div",38),n.k0s()),2&t){const e=n.XpG(2).$implicit,o=n.XpG(2).index,i=n.XpG();n.AVh("fullrbf",e.fullRbf),n.R7$(),n.AVh("fullrbf",e.fullRbf)("last-pipe",!i.timelineExpanded&&o===i.rowLimit-1)}}function J(t,r){if(1&t&&(n.j41(0,"div",37),n.nrm(1,"div",39),n.k0s()),2&t){const e=n.XpG(2).$implicit;n.R7$(),n.AVh("fullrbf",e.fullRbf)}}function Z(t,r){1&t&&n.nrm(0,"div",18)}function q(t,r){if(1&t&&(n.qex(0,33),n.DNE(1,Q,2,6,"div",34)(2,J,2,2,"div",35)(3,Z,1,0,"div",36),n.bVm()),2&t){const e=n.XpG().$implicit;n.Y8G("ngSwitch",e.connector),n.R7$(),n.Y8G("ngSwitchCase","pipe"),n.R7$(),n.Y8G("ngSwitchCase","corner")}}function nn(t,r){if(1&t&&(n.j41(0,"div",41),n.nrm(1,"div",42),n.k0s()),2&t){const e=n.XpG(2).$implicit;n.R7$(),n.AVh("fullrbf",e.fullRbf)}}function en(t,r){if(1&t&&(n.qex(0),n.DNE(1,nn,2,2,"div",40),n.bVm()),2&t){const e=n.XpG().$implicit;n.XpG(3);const o=n.sdS(8);n.R7$(),n.Y8G("ngIf",null!=(null==e.replacement?null:e.replacement.interval))("ngIfElse",o)}}function tn(t,r){if(1&t&&(n.qex(0),n.DNE(1,K,9,23,"ng-container",25)(2,q,4,3,"ng-template",null,3,n.C5r)(4,en,2,2,"ng-container",19),n.bVm()),2&t){const e=r.$implicit,o=r.index,i=n.sdS(3),l=n.XpG(2).$implicit;n.R7$(),n.Y8G("ngIf",null==e.replacement?null:e.replacement.tx)("ngIfElse",i),n.R7$(3),n.Y8G("ngIf",o<l.length-1)}}function on(t,r){if(1&t&&(n.j41(0,"div",24),n.DNE(1,tn,5,3,"ng-container",17),n.k0s()),2&t){const e=n.XpG().$implicit;n.R7$(),n.Y8G("ngForOf",e)}}function rn(t,r){if(1&t&&(n.j41(0,"div",13),n.DNE(1,W,2,1,"div",14)(2,on,2,1,"div",15),n.k0s()),2&t){const e=r.index,o=n.XpG();n.R7$(),n.Y8G("ngIf",e<o.rowLimit||o.timelineExpanded),n.R7$(),n.Y8G("ngIf",e<o.rowLimit||o.timelineExpanded)}}function ln(t,r){1&t&&n.eu8(0)}function _n(t,r){if(1&t){const e=n.RV6();n.j41(0,"button",45),n.bIt("click",function(){n.eBV(e);const i=n.XpG(2);return n.Njj(i.toggleTimeline(!0))}),n.j41(1,"span"),n.pXf(2,5),n.k0s(),n.EFF(3," ("),n.DNE(4,ln,1,0,"ng-container",46),n.EFF(5,") "),n.k0s()}if(2&t){const e=n.XpG(2),o=n.sdS(11);n.R7$(4),n.Y8G("ngTemplateOutlet",o)("ngTemplateOutletContext",n.eq3(2,V,e.rows.length-e.rowLimit))}}function an(t,r){if(1&t){const e=n.RV6();n.j41(0,"button",45),n.bIt("click",function(){n.eBV(e);const i=n.XpG(2);return n.Njj(i.toggleTimeline(!1))}),n.j41(1,"span"),n.pXf(2,6),n.k0s()()}}function cn(t,r){if(1&t&&(n.j41(0,"div",43),n.DNE(1,_n,6,4,"button",44)(2,an,3,0,"ng-template",null,4,n.C5r),n.k0s()),2&t){const e=n.sdS(3),o=n.XpG();n.R7$(),n.Y8G("ngIf",!o.timelineExpanded)("ngIfElse",e)}}function sn(t,r){1&t&&n.nrm(0,"div",18)}function fn(t,r){1&t&&n.nrm(0,"div",41)}function dn(t,r){1&t&&n.pXf(0,7),2&t&&(n.uP7(r.$implicit),n.nnv(0))}function y(t){return!t||!("tx"in t)}let gn=(()=>{class t{constructor(e,o,i,l){this.router=e,this.stateService=o,this.apiService=i,this.locale=l,this.rowLimit=5,this.rows=[],this.timelineExpanded=0===this.rowLimit,this.hoverInfo=null,this.tooltipPosition=null,this.dir="ltr",(this.locale.startsWith("ar")||this.locale.startsWith("fa")||this.locale.startsWith("he"))&&(this.dir="rtl")}ngOnInit(){this.rows=this.buildTimelines(this.replacements)}ngOnChanges(e){this.rows=this.buildTimelines(this.replacements),e.txid&&!e.txid.firstChange&&e.txid.previousValue!==e.txid.currentValue&&setTimeout(()=>{this.scrollToSelected()})}buildTimelines(e){if(!e)return[];this.flagFullRbf(e);const o=this.splitTimelines(e),i=this.prepareTimelines(o);return this.connectTimelines(i)}flagFullRbf(e){let o=!1;for(const i of e.replaces)i.tx.rbf||(o=!0),i.replacedBy=e.tx,this.flagFullRbf(i);e.tx.fullRbf=o}splitTimelines(e,o=[]){const i=[...o,e];return e.replaces.length?[].concat(...e.replaces.map(l=>this.splitTimelines(l,i))):[[...i]]}prepareTimelines(e){e.sort((O,g)=>g.length-O.length);const o=e.map(()=>[]);let i=[e],l=!1,p=0;for(;!l&&p<100;){let O=0,g=0;const C=[];for(const b of i){const T={};let m=0,f=!0;for(const E of b){const $=E.shift()||null;if(f?(o[O].unshift($),f=!1):o[O].unshift({connector:!0,replacement:$}),E.length){const F=E[0].tx.txid;T[F]||(T[F]=[]),T[F].push(E)}else m++;O++}for(const E of Object.values(T).sort(($,F)=>F.length-$.length))C.push(E);for(let E=0;E<m;E++)C.push([[]]);g+=m,i=C,l=g>=o.length}p++}return o}connectTimelines(e){const o=[];return e.forEach((i,l)=>{o.push([]);let p=!1,O=!1;i.forEach((g,C)=>{const b={};if(y(g)||(b.replacement=g,b.fullRbf=g.replacedBy?.fullRbf),o[l].push(b),y(g)){if(p&&!O){if(C<e[l].length){let T=!1;for(let m=l;m>=0&&!T;m--){const f=o[m][C];f.replacement?T=!0:m===l?o[m][C]={connector:"corner",fullRbf:g.replacement.tx.fullRbf}:"corner"!==f.connector&&(o[m][C]={connector:"pipe",fullRbf:g.replacement.tx.fullRbf})}}O=!0}}else p||(b.first=!0,p=!0)})}),o}toggleTimeline(e){this.timelineExpanded=e}scrollToSelected(){const e=document.getElementById("node-"+this.txid);e&&e.scrollIntoView({block:"nearest",inline:"center"})}onPointerMove(e){this.tooltipPosition={x:e.clientX,y:e.clientY}}onHover(e,o){this.hoverInfo=o}onBlur(e){this.hoverInfo=null}static#n=this.\u0275fac=function(o){return new(o||t)(n.rXU(v.Ix),n.rXU(N.d),n.rXU(x.G),n.rXU(n.xe9))};static#e=this.\u0275cmp=n.VBU({type:t,selectors:[["app-rbf-timeline"]],hostBindings:function(o,i){1&o&&n.bIt("pointermove",function(p){return i.onPointerMove(p)})},inputs:{replacements:"replacements",txid:"txid",rowLimit:"rowLimit"},features:[n.OA$],decls:12,vars:8,consts:()=>{let e,o,i;return e="Vis alt",o="Vis mindre",i="" + "\ufffd0\ufffd" + " tilbage",[["nodeSpacer",""],["intervalSpacer",""],["xRemaining",""],["nonNode",""],["collapseBtn",""],e,o,i,[1,"rbf-timeline","box"],[1,"timeline-wrapper"],["class","timeline",4,"ngFor","ngForOf"],["class","toggle-wrapper",4,"ngIf"],[3,"rbfInfo","cursorPosition"],[1,"timeline"],["class","intervals",4,"ngIf"],["class","nodes",4,"ngIf"],[1,"intervals"],[4,"ngFor","ngForOf"],[1,"node-spacer"],[4,"ngIf"],["class","interval",4,"ngIf","ngIfElse"],[1,"interval"],[1,"interval-time"],[3,"time","relative"],[1,"nodes"],[4,"ngIf","ngIfElse"],[1,"node",3,"id"],[1,"track","left"],[1,"track","right"],[1,"shape-border",3,"pointerover","pointerout","routerLink"],[1,"shape"],[1,"fee-rate"],[3,"fee","weight","unitStyle"],[3,"ngSwitch"],["class","connector",3,"fullrbf",4,"ngSwitchCase"],["class","connector",4,"ngSwitchCase"],["class","node-spacer",4,"ngSwitchDefault"],[1,"connector"],[1,"pipe"],[1,"corner"],["class","interval-spacer",4,"ngIf","ngIfElse"],[1,"interval-spacer"],[1,"track"],[1,"toggle-wrapper"],["class","btn btn-sm btn-primary graph-toggle",3,"click",4,"ngIf","ngIfElse"],[1,"btn","btn-sm","btn-primary","graph-toggle",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]]},template:function(o,i){1&o&&(n.j41(0,"div",8)(1,"div",9),n.DNE(2,rn,3,2,"div",10),n.k0s(),n.nrm(3,"div"),n.DNE(4,cn,4,2,"div",11)(5,sn,1,0,"ng-template",null,0,n.C5r)(7,fn,1,0,"ng-template",null,1,n.C5r),n.nrm(9,"app-rbf-timeline-tooltip",12),n.k0s(),n.DNE(10,dn,1,1,"ng-template",null,2,n.C5r)),2&o&&(n.AVh("mined",i.replacements.mined),n.R7$(2),n.Y8G("ngForOf",i.rows),n.R7$(),n.AVh("fade-out",!i.timelineExpanded&&i.rows.length>i.rowLimit),n.R7$(),n.Y8G("ngIf",i.rows.length>i.rowLimit&&0!==i.rowLimit),n.R7$(5),n.Y8G("rbfInfo",i.hoverInfo)("cursorPosition",i.tooltipPosition))},dependencies:[M.Sq,M.bT,M.T3,M.ux,M.e1,M.fG,v.Wk,R.$,k,D.Q,S.U],styles:['.rbf-timeline[_ngcontent-%COMP%]{position:relative;width:100%;padding:1em 0}.rbf-timeline[_ngcontent-%COMP%]:after, .rbf-timeline[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;top:0;bottom:0;width:2em;z-index:2}.rbf-timeline[_ngcontent-%COMP%]:before{left:0;background:linear-gradient(to right,var(--box-bg),var(--box-bg),transparent)}.rbf-timeline[_ngcontent-%COMP%]:after{right:0;background:linear-gradient(to left,var(--box-bg),var(--box-bg),transparent)}.rbf-timeline[_ngcontent-%COMP%]   .timeline-wrapper[_ngcontent-%COMP%]{position:relative;width:calc(100% - 2em);margin:auto;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}.rbf-timeline[_ngcontent-%COMP%]   .timeline-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.rbf-timeline[_ngcontent-%COMP%]   .fade-out[_ngcontent-%COMP%]{position:relative}.rbf-timeline[_ngcontent-%COMP%]   .fade-out[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:70px;top:-70px;background:linear-gradient(to bottom,var(--fade-out-box-bg-start),var(--fade-out-box-bg-end));z-index:1}.rbf-timeline[_ngcontent-%COMP%]   .toggle-wrapper[_ngcontent-%COMP%]{width:100%;text-align:center;margin:1.25em 0 0}.rbf-timeline[_ngcontent-%COMP%]   .intervals[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]{min-width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;text-align:center}.rbf-timeline[_ngcontent-%COMP%]   .intervals[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .intervals[_ngcontent-%COMP%]   .node-spacer[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .intervals[_ngcontent-%COMP%]   .connector[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node-spacer[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .connector[_ngcontent-%COMP%]{width:6em;min-width:6em;flex-grow:1}.rbf-timeline[_ngcontent-%COMP%]   .intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .intervals[_ngcontent-%COMP%]   .interval-spacer[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .interval-spacer[_ngcontent-%COMP%]{width:8em;min-width:5em;max-width:8em;height:32px;display:flex;flex-direction:row;justify-content:center;align-items:flex-end}.rbf-timeline[_ngcontent-%COMP%]   .intervals[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .interval[_ngcontent-%COMP%]{overflow:visible}.rbf-timeline[_ngcontent-%COMP%]   .intervals[_ngcontent-%COMP%]   .interval-time[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .interval-time[_ngcontent-%COMP%]{font-size:12px;line-height:16px;white-space:nowrap}.rbf-timeline[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .interval-spacer[_ngcontent-%COMP%]{position:relative}.rbf-timeline[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .interval-spacer[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%]{position:absolute;height:10px;left:-5px;right:-5px;top:0;transform:translateY(-50%);background:var(--primary);border-radius:5px}.rbf-timeline[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .track.left[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .interval-spacer[_ngcontent-%COMP%]   .track.left[_ngcontent-%COMP%]{right:50%}.rbf-timeline[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .track.right[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .interval-spacer[_ngcontent-%COMP%]   .track.right[_ngcontent-%COMP%]{left:50%}.rbf-timeline[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .track.fullrbf[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .interval-spacer[_ngcontent-%COMP%]   .track.fullrbf[_ngcontent-%COMP%]{background:var(--info)}.rbf-timeline[_ngcontent-%COMP%]   .node.first-node[_ngcontent-%COMP%]   .track.left[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .interval-spacer.first-node[_ngcontent-%COMP%]   .track.left[_ngcontent-%COMP%]{display:none}.rbf-timeline[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]:last-child   .track.right[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .interval-spacer[_ngcontent-%COMP%]:last-child   .track.right[_ngcontent-%COMP%]{display:none}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]{position:relative;margin-top:1em}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .shape-border[_ngcontent-%COMP%]{display:block;margin:auto auto -8px;height:calc(1em + 8px);width:calc(1em + 8px);transform:translateY(-50%);border-radius:10%;cursor:pointer;padding:4px;background:transparent;transition:background-color .3s,padding .3s}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .shape-border[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:10%;background:#fff;transition:background-color .3s,border .3s}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .shape-border.rbf[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .shape-border.rbf[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]{border-radius:50%}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node.selected[_ngcontent-%COMP%]   .shape-border[_ngcontent-%COMP%]{background:var(--mainnet-alt)}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node.mined[_ngcontent-%COMP%]   .shape-border[_ngcontent-%COMP%]{background:var(--success)}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .shape-border[_ngcontent-%COMP%]:hover{padding:0}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node[_ngcontent-%COMP%]   .shape-border[_ngcontent-%COMP%]:hover   .shape[_ngcontent-%COMP%]{background:var(--info)}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node.selected.mined[_ngcontent-%COMP%]   .shape-border[_ngcontent-%COMP%]{background:var(--success);height:calc(1em + 16px);width:calc(1em + 16px)}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node.selected.mined[_ngcontent-%COMP%]   .shape-border[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]{border:solid 4px var(--mainnet-alt)}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node.selected.mined[_ngcontent-%COMP%]   .shape-border[_ngcontent-%COMP%]:hover{padding:4px}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .node.selected.mined[_ngcontent-%COMP%]   .shape-border[_ngcontent-%COMP%]:hover   .shape[_ngcontent-%COMP%]{border-width:1px;border-color:var(--info)}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .connector[_ngcontent-%COMP%]{position:relative;height:10px}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .connector[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .connector[_ngcontent-%COMP%]   .pipe[_ngcontent-%COMP%]{position:absolute;left:-10px;width:20px;height:108px;bottom:50%;border-right:solid 10px var(--primary)}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .connector[_ngcontent-%COMP%]   .corner.fullrbf[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .connector[_ngcontent-%COMP%]   .pipe.fullrbf[_ngcontent-%COMP%]{border-right:solid 10px var(--info)}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .connector[_ngcontent-%COMP%]   .corner.last-pipe[_ngcontent-%COMP%], .rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .connector[_ngcontent-%COMP%]   .pipe.last-pipe[_ngcontent-%COMP%]{height:150px;bottom:-42px}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .connector[_ngcontent-%COMP%]   .corner[_ngcontent-%COMP%]{border-bottom:solid 10px var(--primary);border-bottom-right-radius:10px}.rbf-timeline[_ngcontent-%COMP%]   .nodes[_ngcontent-%COMP%]   .connector[_ngcontent-%COMP%]   .corner.fullrbf[_ngcontent-%COMP%]{border-bottom:solid 10px var(--info)}']})}return t})()},4796:(B,I,_)=>{_.d(I,{B:()=>c});var n=_(2771),v=_(8141),N=_(6354),x=_(9437),M=_(7673),R=_(5558),u=_(4438),S=_(8031),L=_(8185);let c=(()=>{class P{constructor(a,d){this.servicesApiService=a,this.router=d,this.auth$=new n.m(1);const h=localStorage.getItem("auth");if(h&&0!==h.length)try{this.setAuth(JSON.parse(h))}catch(w){console.error("Unable to parse 'auth' from localStorage",w),localStorage.removeItem("auth"),this.setAuth(null)}else this.setAuth(null)}refreshAuth$(){return this.servicesApiService.getJWT$().pipe((0,v.M)(a=>{this.setAuth(a)}),(0,N.T)(a=>a),(0,x.W)(()=>(this.setAuth(null),(0,M.of)(null))))}logout(){this.setAuth(null)}setAuth(a){a?localStorage.setItem("auth",JSON.stringify(a)):localStorage.removeItem("auth"),this.auth$.next(a)}getAuth$(){return localStorage.getItem("auth")?this.auth$.asObservable():this.refreshAuth$().pipe((0,R.n)(()=>this.auth$.asObservable()))}static#n=this.\u0275fac=function(d){return new(d||P)(u.KVO(S.z),u.KVO(L.Ix))};static#e=this.\u0275prov=u.jDH({token:P,factory:P.\u0275fac,providedIn:"root"})}return P})()},3753:(B,I,_)=>{_.d(I,{Re:()=>L});var n=_(4438),v=_(345);const N=["lowBalance"];function x(c,P){if(1&c&&n.nrm(0,"div",3),2&c){const s=n.XpG();n.HbH(s.alertClass),n.Y8G("innerHTML",s.errorContent,n.npT)}}function M(c,P){if(1&c&&n.nrm(0,"span",4),2&c){const s=n.XpG();n.HbH(s.alertClass),n.Y8G("innerHTML",s.errorContent,n.npT)}}function R(c,P){1&c&&(n.PLo(0,1),n.nrm(1,"br")(2,"a",5),n.YFu())}const u={bad_request:"Your request was not valid. Please try again.",internal_server_error:"Something went wrong, please try again later",temporarily_unavailable:"Acceleration temporarily unavailable",acceleration_duplicated:"This transaction has already been accelerated.",acceleration_outbid:"Your fee delta is too low.",cannot_accelerate_tx:"Cannot accelerate this transaction.",cannot_decode_raw_tx:"Cannot decode this raw transaction.",cannot_fetch_raw_tx:"Cannot find this transaction.",high_sigop_tx:"This transaction cannot be accelerated.",invalid_acceleration_request:"This acceleration request is not valid.",invalid_tx_dependencies:"This transaction dependencies are not valid.",mempool_rejected_raw_tx:"Our mempool rejected this transaction",no_mining_pool_available:"No mining pool available at the moment",not_available:"You current subscription does not allow you to access this feature.",not_enough_balance:"",not_verified:"You must verify your account to use this feature.",recommended_fees_not_available:"Recommended fees are not available right now.",too_many_relatives:"This transaction has too many relatives.",txid_not_in_mempool:"This transaction is not in the mempool.",waitlisted:"You are currently on the wait list. You will get notified once you are granted access.",not_whitelisted_by_any_pool:"You are not whitelisted by any mining pool",unauthorized:"You are not authorized to do this",faucet_too_soon:"You cannot request any more coins right now. Try again later.",faucet_not_available:"The faucet is not available right now. Try again later.",faucet_maximum_reached:"You are not allowed to request more coins",faucet_address_not_allowed:"You cannot use this address",faucet_below_minimum:"Requested amount is too small",faucet_above_maximum:"Requested amount is too high",payment_method_not_allowed:"You are not allowed to use this payment method",payment_method_not_allowed_out_of_bound:"You are not allowed to use this payment method with this amount"};let L=(()=>{class c{constructor(s){this.sanitizer=s,this.alertClass="alert-danger",this.textOnly=!1}ngOnInit(){const s=this.lowBalance.createEmbeddedView({});s.detectChanges();const a=s.rootNodes.map(d=>d.nodeType===Node.TEXT_NODE?d.textContent:d.nodeType===Node.ELEMENT_NODE?d.outerHTML:"").join("");u.not_enough_balance=a,this.errorContent=Object.keys(u).includes(this.error)?this.sanitizer.bypassSecurityTrustHtml(u[this.error]):this.error}static#n=this.\u0275fac=function(a){return new(a||c)(n.rXU(v.up))};static#e=this.\u0275cmp=n.VBU({type:c,selectors:[["app-mempool-error"]],viewQuery:function(a,d){if(1&a&&n.GBs(N,7),2&a){let h;n.mGM(h=n.lsd())&&(d.lowBalance=h.first)}},inputs:{error:"error",alertClass:"alertClass",textOnly:"textOnly"},decls:4,vars:1,consts:()=>{let s;return s="Din saldo er for lav." + "\ufffd#1\ufffd\ufffd/#1\ufffd" + "Venligst " + "\ufffd#2\ufffd" + "inds\xE6t flere penge p\xE5 din konto" + "\ufffd/#2\ufffd" + ".",[["lowBalance",""],s,[1,"alert",3,"class","innerHTML"],[1,"alert",3,"innerHTML"],[3,"innerHTML"],["href","/services/accelerator/overview",1,"top-up-link"]]},template:function(a,d){1&a&&n.DNE(0,x,1,3,"div",2)(1,M,1,3)(2,R,3,0,"ng-template",null,0,n.C5r),2&a&&n.vxM(0,d.textOnly?1:0)},encapsulation:2})}return c})()}}]);