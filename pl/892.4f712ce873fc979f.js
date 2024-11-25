"use strict";(self.webpackChunkmempool=self.webpackChunkmempool||[]).push([[892],{5892:(Ce,b,r)=>{r.r(b),r.d(b,{LightningPreviewsModule:()=>Ie});var p=r(177),A=r(9267),E=r(8185),w=r(682),x=r(5647),h=r(8357),u=r(5558),T=r(6354),P=r(9437),m=r(9862),e=r(4438),I=r(2251),C=r(1954),S=r(4799),R=r(9977),$=r(2589),v=r(6631);const X=(t,_)=>[t,_];function H(t,_){if(1&t&&(e.j41(0,"span",25),e.EFF(1),e.k0s()),2&t){const n=_.$implicit;e.R7$(),e.JRh(n)}}function k(t,_){if(1&t&&(e.j41(0,"tr")(1,"td"),e.pXf(2,4),e.k0s(),e.j41(3,"td")(4,"span"),e.EFF(5),e.k0s()()()),2&t){const n=e.XpG().ngIf;e.R7$(5),e.JRh(n.city.en)}}function j(t,_){if(1&t&&(e.j41(0,"tr")(1,"td"),e.pXf(2,5),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s()()),2&t){const n=e.XpG().ngIf;e.R7$(4),e.Lme(" ",n.country.en," ",n.flag," ")}}function D(t,_){1&t&&(e.j41(0,"tr")(1,"td"),e.pXf(2,6),e.k0s(),e.j41(3,"td")(4,"span"),e.pXf(5,7),e.k0s()()())}function F(t,_){if(1&t){const n=e.RV6();e.j41(0,"app-nodes-channels-map",26),e.bIt("readyEvent",function(){e.eBV(n);const o=e.XpG(2);return e.Njj(o.onMapReady())}),e.k0s()}if(2&t){const n=e.XpG().ngIf;e.Aen("nodepage"),e.Y8G("publicKey",n.public_key)("fitContainer",!0)("placeholder",!0)("hasLocation",!!n.as_number)("disableSpinner",!0)}}function V(t,_){if(1&t&&(e.j41(0,"div",11)(1,"app-preview-title")(2,"span"),e.pXf(3,0),e.k0s()(),e.j41(4,"div",12),e.nrm(5,"h1",13),e.j41(6,"div",14)(7,"h1",13),e.EFF(8),e.k0s()(),e.j41(9,"div",15),e.DNE(10,H,2,1,"span",16),e.k0s()(),e.j41(11,"div",17)(12,"div",18)(13,"a",19),e.nI1(14,"relativeUrl"),e.EFF(15),e.k0s(),e.j41(16,"table",20)(17,"tbody")(18,"tr")(19,"td"),e.pXf(20,1),e.k0s(),e.j41(21,"td"),e.nrm(22,"app-amount",21),e.k0s()(),e.j41(23,"tr")(24,"td"),e.pXf(25,2),e.k0s(),e.j41(26,"td"),e.EFF(27),e.k0s()(),e.j41(28,"tr")(29,"td"),e.pXf(30,3),e.k0s(),e.j41(31,"td"),e.nrm(32,"app-amount",21),e.k0s()(),e.DNE(33,k,6,1,"tr",22)(34,j,5,2,"tr",22)(35,D,6,0,"tr",22),e.k0s()()(),e.j41(36,"div",23),e.DNE(37,F,1,7,"app-nodes-channels-map",24),e.k0s()()()),2&t){const n=_.ngIf,i=e.XpG();e.R7$(8),e.JRh(n.alias),e.R7$(2),e.Y8G("ngForOf",i.socketTypes),e.R7$(3),e.Y8G("routerLink",e.l_i(15,X,e.bMT(14,13,"/lightning/node"),n.public_key)),e.R7$(2),e.JRh(n.public_key),e.R7$(7),e.Y8G("satoshis",n.capacity)("noFiat",!0),e.R7$(5),e.SpI(" ",n.active_channel_count," "),e.R7$(5),e.Y8G("satoshis",n.avgCapacity)("noFiat",!0),e.R7$(),e.Y8G("ngIf",n.city),e.R7$(),e.Y8G("ngIf",n.country),e.R7$(),e.Y8G("ngIf",!n.city&&!n.country),e.R7$(2),e.Y8G("ngIf",!i.error)}}function W(t,_){1&t&&(e.j41(0,"div",27)(1,"span"),e.pXf(2,8),e.k0s()())}let z=(()=>{class t{constructor(n,i,o,s){this.lightningApiService=n,this.activatedRoute=i,this.seoService=o,this.openGraphService=s,this.selectedSocketIndex=0,this.qrCodeVisible=!1,this.publicKeySize=99,(0,m.Fr)()&&(this.publicKeySize=12)}ngOnInit(){this.node$=this.activatedRoute.paramMap.pipe((0,u.n)(n=>(this.publicKey=n.get("public_key"),this.openGraphService.waitFor("node-map-"+this.publicKey),this.openGraphService.waitFor("node-data-"+this.publicKey),this.lightningApiService.getNode$(n.get("public_key")))),(0,T.T)(n=>{this.seoService.setTitle(`Node: ${n.alias}`),this.seoService.setDescription("Przegl\u0105d w\u0119z\u0142a sieci Lightning o nazwie " + n.alias + ". Zobacz kana\u0142y, pojemno\u015B\u0107, lokalizacj\u0119, statystyki op\u0142at i nie tylko.");const i=[],o={};for(const s of n.sockets.split(",")){if(""===s)continue;let l="";s.match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/)?l="IPv4":s.indexOf("[")>-1?l="IPv6":s.indexOf("onion")>-1&&(l="Tor"),n.flag=(0,m.tO)(n.iso_code),i.push({label:l,socket:n.public_key+"@"+s}),o[l]=!0}return n.socketsObject=i,this.socketTypes=Object.keys(o),n.avgCapacity=n.capacity/Math.max(1,n.active_channel_count),this.openGraphService.waitOver("node-data-"+this.publicKey),n}),(0,P.W)(n=>(this.error=n,this.seoService.logSoft404(),this.openGraphService.fail("node-map-"+this.publicKey),this.openGraphService.fail("node-data-"+this.publicKey),[{alias:this.publicKey,public_key:this.publicKey}])))}changeSocket(n){this.selectedSocketIndex=n}onChannelsListStatusChanged(n){this.channelsListStatus=n}onMapReady(){this.openGraphService.waitOver("node-map-"+this.publicKey)}static#e=this.\u0275fac=function(i){return new(i||t)(e.rXU(h.C),e.rXU(E.nX),e.rXU(I.B),e.rXU(C.m))};static#n=this.\u0275cmp=e.VBU({type:t,selectors:[["app-node-preview"]],decls:3,vars:4,consts:()=>{let n,i,o,s,l,a,d,c,f;return n="W\u0119ze\u0142 lightning",i="Aktywna pojemno\u015B\u0107",o="Aktywne kana\u0142y",s="\u015Aredni rozmiar",l="Lokalizacja",a="Pa\u0144stwo",d="Lokalizacja",c="Nieznany",f="B\u0142\u0105d \u0142adowania danych.",[n,i,o,s,l,a,d,c,f,["class","box preview-box",4,"ngIf"],[3,"ngIf"],[1,"box","preview-box"],[1,"row","d-flex","justify-content-between","full-width-row"],[1,"title"],[1,"title-wrapper"],[1,"badges","mb-2"],["class","badge rounded-pill badge-success",4,"ngFor","ngForOf"],[1,"row"],[1,"col-md","table-col"],[1,"subtitle",3,"routerLink"],[1,"table","table-borderless","table-striped"],[3,"satoshis","noFiat"],[4,"ngIf"],[1,"col-md","map-col"],[3,"style","publicKey","fitContainer","placeholder","hasLocation","disableSpinner","readyEvent",4,"ngIf"],[1,"badge","rounded-pill","badge-success"],[3,"readyEvent","publicKey","fitContainer","placeholder","hasLocation","disableSpinner"],[1,"text-center"]]},template:function(i,o){1&i&&(e.DNE(0,V,38,18,"div",9),e.nI1(1,"async"),e.DNE(2,W,3,0,"ng-template",10)),2&i&&(e.Y8G("ngIf",e.bMT(1,2,o.node$)),e.R7$(2),e.Y8G("ngIf",o.error))},dependencies:[p.Sq,p.bT,E.Wk,S.Y,R.u,$.E,p.Jj,v.U],styles:[".table-col[_ngcontent-%COMP%]{max-width:calc(100% - 470px);overflow:hidden}.table[_ngcontent-%COMP%]{margin-top:6px;font-size:32px}.badges[_ngcontent-%COMP%]{font-size:28px;flex-shrink:0;flex-grow:0;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:baseline;justify-content:flex-end}.badges[_ngcontent-%COMP%]     .badge{margin-left:.5em}.map-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;width:470px;height:408px;min-width:470px;min-height:408px;max-height:408px;padding:0;background:var(--stat-box-bg);overflow:hidden;margin-top:6px}.row[_ngcontent-%COMP%]{margin-right:0}.full-width-row[_ngcontent-%COMP%]{padding-left:15px;flex-wrap:nowrap}  .symbol{font-size:24px}"],changeDetection:0})}return t})();var G=r(7673),U=r(8141),Y=r(60),M=r(3089),J=r(9973),B=r(7436);const K=(t,_)=>[t,_],O=()=>["fas","arrow-right-arrow-left"];function Q(t,_){1&t&&(e.j41(0,"span",37),e.pXf(1,7),e.k0s())}function Z(t,_){1&t&&(e.j41(0,"span",38),e.pXf(1,8),e.k0s())}function q(t,_){1&t&&(e.j41(0,"span",39),e.pXf(1,9),e.k0s())}function ee(t,_){if(1&t&&e.nrm(0,"app-closing-type",40),2&t){const n=e.XpG().ngIf;e.Y8G("type",n.closing_reason)}}function ne(t,_){if(1&t){const n=e.RV6();e.j41(0,"app-nodes-channels-map",41),e.bIt("readyEvent",function(){e.eBV(n);const o=e.XpG(2);return e.Njj(o.onMapReady())}),e.k0s()}if(2&t){const n=e.XpG(2);e.Aen("channelpage"),e.Y8G("channel",n.channelGeo)("fitContainer",!0)("placeholder",!0)("disableSpinner",!0)}}function te(t,_){if(1&t&&(e.j41(0,"div",13)(1,"app-preview-title")(2,"span"),e.pXf(3,0),e.k0s()(),e.j41(4,"div",14)(5,"div",15)(6,"h1",16),e.EFF(7),e.k0s()(),e.j41(8,"div",17),e.DNE(9,Q,2,0,"span",18)(10,Z,2,0,"span",19)(11,q,2,0,"span",20)(12,ee,1,1,"app-closing-type",21),e.k0s()(),e.j41(13,"div",22)(14,"div",23)(15,"a",24),e.nI1(16,"relativeUrl"),e.EFF(17),e.k0s(),e.j41(18,"table",25)(19,"tbody")(20,"tr")(21,"td"),e.pXf(22,1),e.k0s(),e.j41(23,"td"),e.EFF(24),e.nI1(25,"date"),e.k0s()(),e.j41(26,"tr")(27,"td"),e.pXf(28,2),e.k0s(),e.j41(29,"td"),e.nrm(30,"app-amount",26),e.k0s()(),e.j41(31,"tr")(32,"td"),e.pXf(33,3),e.k0s(),e.j41(34,"td")(35,"div",27)(36,"span"),e.EFF(37),e.j41(38,"span",28),e.pXf(39,4),e.k0s()(),e.nrm(40,"fa-icon",29),e.j41(41,"span"),e.EFF(42),e.j41(43,"span",28),e.pXf(44,5),e.k0s()()()()(),e.j41(45,"tr")(46,"td"),e.pXf(47,6),e.k0s(),e.j41(48,"td")(49,"div",27),e.nrm(50,"app-sats",30)(51,"fa-icon",29)(52,"app-sats",30),e.k0s()()()()()(),e.j41(53,"div",31),e.DNE(54,ne,1,6,"app-nodes-channels-map",32),e.k0s()(),e.j41(55,"div",33)(56,"span",34),e.EFF(57),e.k0s(),e.nrm(58,"fa-icon",35),e.j41(59,"span",36),e.EFF(60),e.k0s()()()),2&t){const n=_.ngIf,i=e.XpG();e.R7$(7),e.JRh(n.short_id),e.R7$(2),e.Y8G("ngIf",0===n.status),e.R7$(),e.Y8G("ngIf",1===n.status),e.R7$(),e.Y8G("ngIf",2===n.status),e.R7$(),e.Y8G("ngIf",2===n.status),e.R7$(3),e.Y8G("routerLink",e.l_i(28,K,e.bMT(16,23,"/lightning/channel"),n.id)),e.R7$(2),e.JRh(n.id),e.R7$(7),e.JRh(e.i5U(25,25,n.created,"yyyy-MM-dd HH:mm")),e.R7$(6),e.Y8G("satoshis",n.capacity)("noFiat",!0),e.R7$(7),e.SpI("",n.node_left.fee_rate," "),e.R7$(3),e.Y8G("icon",e.lJ4(31,O))("fixedWidth",!0),e.R7$(2),e.SpI("",n.node_right.fee_rate," "),e.R7$(8),e.Y8G("satoshis",n.node_left.base_fee_mtokens/1e3),e.R7$(),e.Y8G("icon",e.lJ4(32,O))("fixedWidth",!0),e.R7$(),e.Y8G("satoshis",n.node_right.base_fee_mtokens/1e3),e.R7$(2),e.Y8G("ngIf",!i.error),e.R7$(3),e.SpI(" ",n.node_left.alias||"?"," "),e.R7$(),e.Y8G("icon",e.lJ4(33,O))("fixedWidth",!0),e.R7$(2),e.SpI(" ",n.node_right.alias||"?"," ")}}function ie(t,_){if(1&t&&(e.j41(0,"app-http-error",42)(1,"span"),e.pXf(2,10),e.k0s()()),2&t){const n=e.XpG();e.Y8G("error",n.error)}}let oe=(()=>{class t{constructor(n,i,o,s){this.lightningApiService=n,this.activatedRoute=i,this.seoService=o,this.openGraphService=s,this.error=null,this.channelGeo=[]}ngOnInit(){this.channel$=this.activatedRoute.paramMap.pipe((0,u.n)(n=>(this.shortId=n.get("short_id")||"",this.openGraphService.waitFor("channel-map-"+this.shortId),this.openGraphService.waitFor("channel-data-"+this.shortId),this.error=null,this.seoService.setTitle(`Channel: ${n.get("short_id")}`),this.seoService.setDescription("Przegl\u0105d kana\u0142u Lightning " + n.get("short_id") + ". Zobacz przepustowo\u015B\u0107 kana\u0142u, zaanga\u017Cowane w\u0119z\u0142y Lightning, powi\u0105zane transakcje w \u0142a\u0144cuchu i nie tylko."),this.lightningApiService.getChannel$(n.get("short_id")).pipe((0,U.M)(i=>{this.channelGeo=i.node_left.longitude&&i.node_left.latitude&&i.node_right.longitude&&i.node_right.latitude?[i.node_left.public_key,i.node_left.alias,i.node_left.longitude,i.node_left.latitude,i.node_right.public_key,i.node_right.alias,i.node_right.longitude,i.node_right.latitude]:[],this.openGraphService.waitOver("channel-data-"+this.shortId)}),(0,P.W)(i=>(this.error=i,this.seoService.logSoft404(),this.openGraphService.fail("channel-map-"+this.shortId),this.openGraphService.fail("channel-data-"+this.shortId),(0,G.of)(null)))))))}onMapReady(){this.openGraphService.waitOver("channel-map-"+this.shortId)}static#e=this.\u0275fac=function(i){return new(i||t)(e.rXU(h.C),e.rXU(E.nX),e.rXU(I.B),e.rXU(C.m))};static#n=this.\u0275cmp=e.VBU({type:t,selectors:[["app-channel-preview"]],decls:3,vars:4,consts:()=>{let n,i,o,s,l,a,d,c,f,g,y;return n="kana\u0142 lightning",i="Stworzony",o="Pojemno\u015B\u0107",s="Poziom op\u0142at",l="ppm",a="ppm",d="Op\u0142ata bazowa",c="Nieaktywny",f="Aktywny",g="Zamkni\u0119ty",y="B\u0142\u0105d \u0142adowania danych.",[n,i,o,s,l,a,d,c,f,g,y,["class","box preview-box",4,"ngIf"],[3,"ngIf"],[1,"box","preview-box"],[1,"row","d-flex","justify-content-between","full-width-row"],[1,"title-wrapper"],[1,"title"],[1,"badges","mb-2"],["class","badge rounded-pill badge-secondary",4,"ngIf"],["class","badge rounded-pill badge-success",4,"ngIf"],["class","badge rounded-pill badge-danger",4,"ngIf"],[3,"type",4,"ngIf"],[1,"row"],[1,"col-md","table-col"],[1,"subtitle",3,"routerLink"],[1,"table","table-borderless","table-striped"],[3,"satoshis","noFiat"],[1,"dual-cell"],[1,"symbol"],[1,"between-arrow",3,"icon","fixedWidth"],["digitsInfo","1.0-2",3,"satoshis"],[1,"col-md","map-col"],[3,"style","channel","fitContainer","placeholder","disableSpinner","readyEvent",4,"ngIf"],[1,"row","d-flex","justify-content-between","full-width-row","nodes"],[1,"node","left"],["title","channel between",1,"between-arrow",3,"icon","fixedWidth"],[1,"node","right"],[1,"badge","rounded-pill","badge-secondary"],[1,"badge","rounded-pill","badge-success"],[1,"badge","rounded-pill","badge-danger"],[3,"type"],[3,"readyEvent","channel","fitContainer","placeholder","disableSpinner"],[3,"error"]]},template:function(i,o){1&i&&(e.DNE(0,te,61,34,"div",11),e.nI1(1,"async"),e.DNE(2,ie,3,1,"ng-template",12)),2&i&&(e.Y8G("ngIf",e.bMT(1,2,o.channel$)),e.R7$(2),e.Y8G("ngIf",o.error))},dependencies:[p.bT,E.Wk,Y.aY,S.Y,M.z,R.u,J.A,B.r,$.E,p.Jj,p.vh,v.U],styles:[".table-col[_ngcontent-%COMP%]{max-width:calc(100% - 470px);overflow:hidden}.table[_ngcontent-%COMP%]{font-size:32px;margin-top:10px}.badges[_ngcontent-%COMP%]{font-size:28px;flex-shrink:0;flex-grow:0;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:baseline;justify-content:flex-end}.badges[_ngcontent-%COMP%]     .badge{margin-left:.5em}.row[_ngcontent-%COMP%]{margin-right:0}.full-width-row[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;flex-wrap:nowrap}.row.nodes[_ngcontent-%COMP%]{background:var(--stat-box-bg);margin:15px 0 0}.nodes[_ngcontent-%COMP%]{font-size:36px;align-items:center}.between-arrow[_ngcontent-%COMP%]{font-size:24px}.map-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;width:470px;min-width:470px;padding:0;background:var(--stat-box-bg);max-height:350px;overflow:hidden}  .symbol{font-size:24px}.dual-cell[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:baseline}.dual-cell[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:0;flex-grow:1}.dual-cell[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-child(2){text-align:center;max-width:1.5em}.dual-cell[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:nth-child(3){text-align:right}"],changeDetection:0})}return t})();var se=r(3366),L=r(9589);const ae=(t,_)=>[t,_];function _e(t,_){if(1&t&&e.nrm(0,"app-amount",25),2&t){const n=e.XpG().ngIf;e.Y8G("satoshis",n.sumLiquidity)("digitsInfo","1.2-2")("noFiat",!1)}}function le(t,_){if(1&t&&e.nrm(0,"app-sats",26),2&t){const n=e.XpG().ngIf;e.Y8G("satoshis",n.sumLiquidity)}}function re(t,_){if(1&t){const n=e.RV6();e.j41(0,"div",10)(1,"app-preview-title")(2,"span"),e.pXf(3,1),e.k0s()(),e.j41(4,"div",11)(5,"div",12)(6,"h1",13),e.EFF(7),e.k0s(),e.j41(8,"a",14),e.nI1(9,"relativeUrl"),e.EFF(10),e.k0s()(),e.nrm(11,"div",15),e.k0s(),e.j41(12,"div",16)(13,"div",17)(14,"table",18),e.nrm(15,"col",19),e.j41(16,"tbody")(17,"tr")(18,"td"),e.pXf(19,2),e.k0s(),e.j41(20,"td"),e.EFF(21),e.k0s()(),e.j41(22,"tr")(23,"td"),e.pXf(24,3),e.k0s(),e.j41(25,"td"),e.DNE(26,_e,1,3,"app-amount",20)(27,le,1,1,"ng-template",null,0,e.C5r),e.k0s()(),e.j41(29,"tr")(30,"td"),e.pXf(31,4),e.k0s(),e.j41(32,"td"),e.EFF(33),e.k0s()(),e.j41(34,"tr")(35,"td"),e.pXf(36,5),e.k0s(),e.j41(37,"td",21)(38,"span",22),e.EFF(39),e.k0s()()(),e.j41(40,"tr")(41,"td"),e.pXf(42,6),e.k0s(),e.j41(43,"td",21),e.EFF(44),e.k0s()()()()(),e.j41(45,"div",23)(46,"app-nodes-map",24),e.bIt("readyEvent",function(){e.eBV(n);const o=e.XpG();return e.Njj(o.onMapReady())}),e.k0s()()()()}if(2&t){const n=_.ngIf,i=e.sdS(28),o=e.XpG();e.R7$(7),e.JRh(null==o.isp?null:o.isp.name),e.R7$(),e.Y8G("routerLink",e.l_i(15,ae,e.bMT(9,13,"/lightning/nodes/isp/"),null==o.isp?null:o.isp.id)),e.R7$(2),e.SpI(" ASN ",null==o.isp?null:o.isp.id," "),e.R7$(11),e.JRh(n.nodes.length),e.R7$(5),e.Y8G("ngIf",n.sumLiquidity>1e8)("ngIfElse",i),e.R7$(7),e.JRh(n.sumChannels),e.R7$(6),e.Lme("",n.topCountry.country," ",n.topCountry.flag,""),e.R7$(5),e.SpI(" ",n.nodes[0].alias," "),e.R7$(2),e.Y8G("widget",!0)("nodes",n.nodes)("fitContainer",!0)}}function de(t,_){1&t&&(e.j41(0,"div",27)(1,"span"),e.pXf(2,7),e.k0s()())}let ce=(()=>{class t{constructor(n,i,o,s){this.apiService=n,this.seoService=i,this.openGraphService=o,this.route=s}ngOnInit(){this.nodes$=this.route.paramMap.pipe((0,u.n)(n=>(this.id=n.get("isp"),this.isp=null,this.openGraphService.waitFor("isp-map-"+this.id),this.openGraphService.waitFor("isp-data-"+this.id),this.apiService.getNodeForISP$(n.get("isp")))),(0,T.T)(n=>{this.isp={name:n.isp,id:this.route.snapshot.params.isp.split(",").join(", ")},this.seoService.setTitle("W\u0119z\u0142y lightning na ISP: " + n.isp + " [AS" + this.route.snapshot.params.isp + "]"),this.seoService.setDescription("Przegl\u0105daj wszystkie w\u0119z\u0142y Bitcoin Lightning korzystaj\u0105ce z ISP " + n.isp + " [AS" + this.route.snapshot.params.isp + "] i zobacz zbiorcze statystyki, takie jak \u0142\u0105czna liczba w\u0119z\u0142\xF3w, \u0142\u0105czna pojemno\u015B\u0107 i wi\u0119cej dla tego dostawcy.");for(const a in n.nodes)n.nodes[a].geolocation={country:n.nodes[a].country?.en,city:n.nodes[a].city?.en,subdivision:n.nodes[a].subdivision?.en,iso:n.nodes[a].iso_code};const i=n.nodes.reduce((a,d)=>a+d.capacity,0),o=n.nodes.reduce((a,d)=>a+d.channels,0),s={},l={count:0,country:"",iso:"",flag:""};for(const a of n.nodes)a.geolocation.iso&&(s[a.geolocation.iso]=s[a.geolocation.iso]??1,s[a.geolocation.iso]>l.count&&(l.count=s[a.geolocation.iso],l.country=a.geolocation.country,l.iso=a.geolocation.iso));return l.flag=(0,m.tO)(l.iso),this.openGraphService.waitOver("isp-data-"+this.id),{nodes:n.nodes,sumLiquidity:i,sumChannels:o,topCountry:l}}),(0,P.W)(n=>(this.error=n,this.seoService.logSoft404(),this.openGraphService.fail("isp-map-"+this.id),this.openGraphService.fail("isp-data-"+this.id),(0,G.of)({nodes:[],sumLiquidity:0,sumChannels:0,topCountry:{}}))))}onMapReady(){this.openGraphService.waitOver("isp-map-"+this.id)}static#e=this.\u0275fac=function(i){return new(i||t)(e.rXU(se.G),e.rXU(I.B),e.rXU(C.m),e.rXU(E.nX))};static#n=this.\u0275cmp=e.VBU({type:t,selectors:[["app-nodes-per-isp-preview"]],decls:3,vars:4,consts:()=>{let n,i,o,s,l,a,d;return n="ISP Lightning",i="W\u0119zly",o="P\u0142ynno\u015B\u0107",s="Kana\u0142y",l="Wiod\u0105ce pa\u0144stwo",a="Wiod\u0105cy w\u0119ze\u0142",d="B\u0142\u0105d \u0142adowania danych.",[["smallnode",""],n,i,o,s,l,a,d,["class","box preview-box",4,"ngIf"],[3,"ngIf"],[1,"box","preview-box"],[1,"row","d-flex","justify-content-between","full-width-row"],[1,"title-wrapper"],[1,"title"],[1,"subtitle",3,"routerLink"],[1,"logo-wrapper"],[1,"row"],[1,"col-md"],[1,"table","table-borderless","table-striped","table-fixed"],["span","1","width","250px"],[3,"satoshis","digitsInfo","noFiat",4,"ngIf","ngIfElse"],[1,"text-truncate"],[1,""],[1,"col-md","map-col"],["type","isp",3,"readyEvent","widget","nodes","fitContainer"],[3,"satoshis","digitsInfo","noFiat"],["digitsInfo","1.0-2",3,"satoshis"],[1,"text-center"]]},template:function(i,o){1&i&&(e.DNE(0,re,47,18,"div",8),e.nI1(1,"async"),e.DNE(2,de,3,0,"ng-template",9)),2&i&&(e.Y8G("ngIf",e.bMT(1,2,o.nodes$)),e.R7$(2),e.Y8G("ngIf",o.error))},dependencies:[p.bT,E.Wk,S.Y,M.z,R.u,L.E,p.Jj,v.U],styles:[".table[_ngcontent-%COMP%]{font-size:32px;margin-top:0}.map-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;width:470px;height:360px;min-width:470px;min-height:360px;max-height:360px;padding:0;background:var(--stat-box-bg);overflow:hidden;margin-top:0}.row[_ngcontent-%COMP%]{margin-right:0}.full-width-row[_ngcontent-%COMP%]{padding-left:15px;flex-wrap:nowrap}  .symbol{font-size:24px}"],changeDetection:0})}return t})();var pe=r(7913),ge=r(5131);function Ee(t,_){if(1&t&&e.nrm(0,"app-amount",26),2&t){const n=e.XpG().ngIf;e.Y8G("satoshis",n.sumLiquidity)("digitsInfo","1.2-2")("noFiat",!1)}}function Ne(t,_){if(1&t&&(e.EFF(0),e.nI1(1,"amountShortener"),e.j41(2,"span",27),e.pXf(3,5),e.k0s()),2&t){const n=e.XpG().ngIf;e.SpI(" ",e.i5U(1,1,n.sumLiquidity,1)," ")}}function fe(t,_){if(1&t&&(e.j41(0,"tr")(1,"td"),e.pXf(2,6),e.k0s(),e.j41(3,"td"),e.nrm(4,"app-sats",28),e.k0s()()),2&t){const n=e.XpG().ngIf;e.R7$(4),e.Y8G("satoshis",n.sumLiquidity/n.sumChannels)}}function he(t,_){if(1&t){const n=e.RV6();e.j41(0,"div",8)(1,"app-preview-title")(2,"span"),e.pXf(3,1),e.k0s()(),e.j41(4,"div",9)(5,"div",10),e.nrm(6,"app-svg-images",11),e.k0s(),e.j41(7,"div",12)(8,"h1",13),e.EFF(9),e.k0s()()(),e.j41(10,"div",14)(11,"div",15)(12,"div",16),e.EFF(13),e.k0s()()(),e.j41(14,"div",17)(15,"div",18)(16,"table",19),e.nrm(17,"col",20),e.j41(18,"tbody"),e.nrm(19,"tr"),e.j41(20,"tr")(21,"td"),e.pXf(22,2),e.k0s(),e.j41(23,"td"),e.EFF(24),e.k0s()(),e.j41(25,"tr")(26,"td"),e.pXf(27,3),e.k0s(),e.j41(28,"td"),e.DNE(29,Ee,1,3,"app-amount",21)(30,Ne,4,4,"ng-template",null,0,e.C5r),e.j41(32,"span",22),e.EFF(33,"\xa0"),e.k0s()()(),e.j41(34,"tr")(35,"td"),e.pXf(36,4),e.k0s(),e.j41(37,"td"),e.EFF(38),e.k0s()(),e.DNE(39,fe,5,1,"tr",23),e.k0s()()(),e.j41(40,"div",24)(41,"app-nodes-map",25),e.bIt("readyEvent",function(){e.eBV(n);const o=e.XpG();return e.Njj(o.onMapReady())}),e.k0s()()()()}if(2&t){const n=_.ngIf,i=e.sdS(31),o=e.XpG();e.R7$(9),e.JRh(o.group.name),e.R7$(4),e.JRh(o.group.description),e.R7$(11),e.JRh(n.nodes.length),e.R7$(5),e.Y8G("ngIf",n.sumLiquidity>1e8)("ngIfElse",i),e.R7$(9),e.JRh(n.sumChannels),e.R7$(),e.Y8G("ngIf",n.sumChannels>0),e.R7$(2),e.Y8G("widget",!0)("nodes",n.nodes)("fitContainer",!0)}}const ue=[{path:"node/:public_key",component:z},{path:"channel/:short_id",component:oe},{path:"nodes/isp/:isp",component:ce},{path:"group/:slug",component:(()=>{class t{constructor(n,i,o,s){this.lightningApiService=n,this.activatedRoute=i,this.seoService=o,this.openGraphService=s,this.group={name:"",description:""}}ngOnInit(){this.seoService.setTitle("Mempool.Space Lightning Nodes"),this.seoService.setDescription("See all Lightning nodes run by mempool.space -- these are the nodes that provide the data on the mempool.space Lightning dashboard."),this.nodes$=this.activatedRoute.paramMap.pipe((0,u.n)(n=>(this.slug=n.get("slug"),this.openGraphService.waitFor("ln-group-map-"+this.slug),this.openGraphService.waitFor("ln-group-data-"+this.slug),"the-mempool-open-source-project"!==this.slug?(this.group={name:this.slug.replace(/-/gi," "),description:""},this.seoService.logSoft404(),this.openGraphService.fail("ln-group-map-"+this.slug),this.openGraphService.fail("ln-group-data-"+this.slug),(0,G.of)(null)):(this.groupId="mempool.space",this.group={name:"The Mempool Open Source Project",description:"These are the Lightning nodes operated by The Mempool Open Source Project that provide data for the mempool.space website. Connect to us!"},this.lightningApiService.getNodeGroup$(this.groupId)))),(0,T.T)(n=>{for(const s of n){const l=[];for(const a of s.sockets.split(",")){if(""===a)continue;let d="";a.match(/(?:[0-9]{1,3}\.){3}[0-9]{1,3}/)?d="IPv4":a.indexOf("[")>-1?d="IPv6":a.indexOf("onion")>-1&&(d="Tor"),l.push({label:d,socket:s.public_key+"@"+a})}s.socketsObject=l,s.geolocation=s?.country||s?.city||s?.subdivision?{country:s.country?.en,city:s.city?.en,subdivision:s.subdivision?.en,iso:s.iso_code}:null}const i=n.reduce((s,l)=>s+parseInt(l.capacity,10),0),o=n.reduce((s,l)=>s+l.opened_channel_count,0);return this.openGraphService.waitOver("ln-group-data-"+this.slug),{nodes:n,sumLiquidity:i,sumChannels:o}}),(0,P.W)(()=>(this.seoService.logSoft404(),this.openGraphService.fail("ln-group-map-"+this.slug),this.openGraphService.fail("ln-group-data-"+this.slug),(0,G.of)({nodes:[],sumLiquidity:0,sumChannels:0}))))}onMapReady(){this.openGraphService.waitOver("ln-group-map-"+this.slug)}static#e=this.\u0275fac=function(i){return new(i||t)(e.rXU(h.C),e.rXU(E.nX),e.rXU(I.B),e.rXU(C.m))};static#n=this.\u0275cmp=e.VBU({type:t,selectors:[["app-group-preview"]],decls:2,vars:3,consts:()=>{let n,i,o,s,l,a;return n="Grupa w\u0119z\u0142\xF3w Lightning",i="W\u0119zly",o="P\u0142ynno\u015B\u0107",s="Kana\u0142y",l="sats",a="\u015Aredni rozmiar",[["smallnode",""],n,i,o,s,l,a,["class","box preview-box",4,"ngIf"],[1,"box","preview-box"],[1,"row","d-flex","justify-content-between","full-width-row"],[1,"logo-wrapper"],["name","officialMempoolSpace","viewBox","0 0 125 126"],[1,"title-wrapper"],[1,"title"],[1,"row","full-width-row"],[1,"description-wrapper"],[1,"description-text"],[1,"row"],[1,"col-md"],[1,"table","table-borderless","table-striped","table-fixed"],["span","1","width","250px"],[3,"satoshis","digitsInfo","noFiat",4,"ngIf","ngIfElse"],[1,"d-none","d-md-inline-block"],[4,"ngIf"],[1,"col-md","map-col"],["type","isp",3,"readyEvent","widget","nodes","fitContainer"],[3,"satoshis","digitsInfo","noFiat"],[1,"sats"],[3,"satoshis"]]},template:function(i,o){1&i&&(e.DNE(0,he,42,10,"div",7),e.nI1(1,"async")),2&i&&e.Y8G("ngIf",e.bMT(1,1,o.nodes$))},dependencies:[p.bT,S.Y,pe.m,M.z,R.u,L.E,p.Jj,ge.x],styles:[".table[_ngcontent-%COMP%]{font-size:32px;margin-top:0}.logo-wrapper[_ngcontent-%COMP%]{position:relative;width:62px;height:62px;margin-right:1em}.logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;right:0;top:0}.description-wrapper[_ngcontent-%COMP%]{width:100%;margin:16px 0 0;padding:20px 12px;background:var(--stat-box-bg);font-size:32px}.description-text[_ngcontent-%COMP%]{width:100%;line-height:36px;height:72px;max-height:72px;min-height:72px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-overflow:ellipsis}.map-col[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:0;width:470px;height:272px;min-width:470px;min-height:272px;max-height:272px;padding:0;background:var(--stat-box-bg);overflow:hidden;margin-top:16px}.row[_ngcontent-%COMP%]{margin-right:0}.full-width-row[_ngcontent-%COMP%]{padding-left:15px;flex-wrap:nowrap}  .symbol{font-size:24px}"]})}return t})()},{path:"**",redirectTo:""}];let Pe=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275mod=e.$C({type:t});static#t=this.\u0275inj=e.G2t({imports:[E.iI.forChild(ue),E.iI]})}return t})(),Ie=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#n=this.\u0275mod=e.$C({type:t});static#t=this.\u0275inj=e.G2t({providers:[h.C],imports:[p.MD,A.G,E.iI,w.GraphsModule,Pe,x.LightningModule]})}return t})()}}]);