"use strict";(self.webpackChunkmempool=self.webpackChunkmempool||[]).push([[250],{869:(V,p,i)=>{i.r(p),i.d(p,{LightningGraphsModule:()=>J,LightningGraphsRoutingModule:()=>T});var O=i(9267),_=i(177),g=i(8185),f=i(9303),m=i(562),u=i(8184),E=i(6354),P=i(8141),S=i(7647),M=i(9838),I=i(6078),N=i(6631),v=i(9862),t=i(4438),$=i(3366),b=i(2251),R=i(5131),x=i(2083),y=i(60),G=i(7435),A=i(4799),L=i(4972);const H=()=>["fas","download"],D=(o,d)=>[o,d];function U(o,d){if(1&o){const n=t.RV6();t.j41(0,"div",26),t.bIt("chartInit",function(a){t.eBV(n);const r=t.XpG();return t.Njj(r.onChartInit(a))}),t.k0s()}if(2&o){const n=t.XpG();t.Y8G("initOpts",n.chartInitOptions)("options",n.chartOptions)}}function Y(o,d){1&o&&(t.j41(0,"div",27),t.nrm(1,"div",28),t.k0s())}function w(o,d){if(1&o&&t.nrm(0,"app-amount",35),2&o){const n=t.XpG().$implicit;t.Y8G("satoshis",n.capacity)("digitsInfo","1.2-2")("noFiat",!0)}}function X(o,d){if(1&o&&(t.EFF(0),t.nI1(1,"amountShortener"),t.j41(2,"span",36),t.pXf(3,8),t.k0s()),2&o){let n;const e=t.XpG().$implicit;t.SpI(" ",t.i5U(1,1,null!==(n=e.capacity)&&void 0!==n?n:0,1)," ")}}function k(o,d){if(1&o&&(t.j41(0,"tr")(1,"td",20),t.EFF(2),t.k0s(),t.j41(3,"td",30)(4,"a",31),t.nI1(5,"relativeUrl"),t.j41(6,"span",32),t.EFF(7),t.k0s(),t.EFF(8," \xa0 "),t.j41(9,"span",33),t.EFF(10),t.k0s()()(),t.j41(11,"td",22),t.EFF(12),t.k0s(),t.j41(13,"td",23),t.EFF(14),t.k0s(),t.j41(15,"td",24),t.DNE(16,w,1,3,"app-amount",34)(17,X,4,4,"ng-template",null,0,t.C5r),t.k0s()()),2&o){const n=d.$implicit,e=t.sdS(18);t.R7$(2),t.JRh(n.rank),t.R7$(2),t.Y8G("routerLink",t.l_i(10,D,t.bMT(5,8,"/lightning/nodes/country"),n.iso)),t.R7$(3),t.JRh(n.flag),t.R7$(3),t.JRh(n.name.en),t.R7$(2),t.SpI("",n.share,"%"),t.R7$(2),t.JRh(n.count),t.R7$(2),t.Y8G("ngIf",n.capacity>1e8)("ngIfElse",e)}}function j(o,d){if(1&o&&(t.j41(0,"tbody"),t.DNE(1,k,19,13,"tr",29),t.k0s()),2&o){const n=d.ngIf;t.BMQ("data-cy","pools-table"),t.R7$(),t.Y8G("ngForOf",n)}}let F=(()=>{class o{constructor(n,e,a,r,l,c){this.apiService=n,this.seoService=e,this.amountShortenerPipe=a,this.zone=r,this.stateService=l,this.router=c,this.isLoading=!0,this.chartOptions={},this.chartInitOptions={renderer:"svg"},this.timespan="",this.chartInstance=void 0,this.dir="ltr"}ngOnInit(){this.seoService.setTitle("\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0628\u0631\u0642 \u062D\u0633\u0628 \u0627\u0644\u062F\u0648\u0644\u0629"),this.seoService.setDescription("\u0627\u0637\u0644\u0639 \u0639\u0644\u0649 \u0627\u0644\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u062C\u063A\u0631\u0627\u0641\u064A \u0644\u0634\u0628\u0643\u0629 Lightning: \u0639\u062F\u062F \u0639\u0642\u062F Lightning \u0627\u0644\u0645\u0633\u062A\u0636\u0627\u0641\u0629 \u0641\u064A \u0627\u0644\u0628\u0644\u062F\u0627\u0646 \u062D\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645\u060C \u0648\u0625\u062C\u0645\u0627\u0644\u064A \u0633\u0639\u0629 BTC \u0644\u0643\u0644 \u0628\u0644\u062F\u060C \u0648\u0627\u0644\u0645\u0632\u064A\u062F."),this.nodesPerCountryObservable$=this.apiService.getNodesPerCountry$().pipe((0,E.T)(n=>{for(let e=0;e<n.length;++e)n[e].rank=e+1,n[e].iso=n[e].iso.toLowerCase(),n[e].flag=(0,v.tO)(n[e].iso);return n.slice(0,100)}),(0,P.M)(n=>{this.isLoading=!1,this.prepareChartOptions(n)}),(0,S.u)())}generateChartSerieData(n){const e=this.isMobile()?2:1,a=[];let r=0,l=0,c="10%";return this.isMobile()&&(c=0),n.forEach(s=>{if(s.share<e)return r+=s.share,void(l+=s.count);a.push({value:s.share,name:s.name.en+(this.isMobile()?"":` (${s.share}%)`),label:{overflow:"truncate",color:"var(--tooltip-grey)",alignTo:"edge",edgeDistance:c},tooltip:{show:!this.isMobile(),backgroundColor:"rgba(17, 19, 31, 1)",borderRadius:4,shadowColor:"rgba(0, 0, 0, 0.5)",textStyle:{color:"var(--tooltip-grey)"},borderColor:"#000",formatter:()=>{const C=s.count.toString();return`<b style="color: white">${s.name.en} (${s.share}%)</b><br>`+"" + C + "\u0627\u0644\u0639\u0642\u062F"+"<br>"+"" + this.amountShortenerPipe.transform(s.capacity / 1e8, 2) + " EAC capacity"}},data:s.iso})}),a.push({itemStyle:{color:"grey"},value:r,name:"\u0623\u062E\u0631\u0649 (" + (r.toFixed(2) + "%") + ")",label:{overflow:"truncate",color:"var(--tooltip-grey)",alignTo:"edge",edgeDistance:c},tooltip:{backgroundColor:"rgba(17, 19, 31, 1)",borderRadius:4,shadowColor:"rgba(0, 0, 0, 0.5)",textStyle:{color:"var(--tooltip-grey)"},borderColor:"#000",formatter:()=>{const s=l.toString();return'<b style="color: white">'+"\u0623\u062E\u0631\u0649 (" + (r.toFixed(2) + "%") + ")"+"</b><br>"+"" + s + "\u0627\u0644\u0639\u0642\u062F"}},data:9999}),a}prepareChartOptions(n){let e=["20%","80%"];this.isMobile()&&(e=["15%","60%"]),this.chartOptions={animation:!1,color:M.b4,tooltip:{trigger:"item",textStyle:{align:"left"}},series:[{zlevel:0,minShowLabelAngle:3.6,name:"Mining pool",type:"pie",radius:e,data:this.generateChartSerieData(n),labelLine:{lineStyle:{width:2},length:this.isMobile()?1:20,length2:this.isMobile()?1:void 0},label:{fontSize:14},itemStyle:{borderRadius:1,borderWidth:1,borderColor:"#000"},emphasis:{itemStyle:{shadowBlur:40,shadowColor:"rgba(0, 0, 0, 0.75)"},labelLine:{lineStyle:{width:4}}}}]}}isMobile(){return window.innerWidth<=767.98}onChartInit(n){void 0===this.chartInstance&&(this.chartInstance=n,this.chartInstance.on("click",e=>{9999!==e.data.data&&this.zone.run(()=>{const a=new N.U(this.stateService).transform(`/lightning/nodes/country/${e.data.data}`);this.router.navigate([a])})}))}onSaveChart(){const n=new Date;this.chartOptions.backgroundColor="var(--active-bg)",this.chartInstance.setOption(this.chartOptions),(0,I.RG)(this.chartInstance.getDataURL({pixelRatio:2,excludeComponents:["dataZoom"]}),`lightning-nodes-per-country-${Math.round(n.getTime()/1e3)}.svg`),this.chartOptions.backgroundColor="none",this.chartInstance.setOption(this.chartOptions)}isEllipsisActive(n){return n.offsetWidth<n.scrollWidth}static#t=this.\u0275fac=function(e){return new(e||o)(t.rXU($.G),t.rXU(b.B),t.rXU(R.x),t.rXU(t.SKi),t.rXU(x.d),t.rXU(g.Ix))};static#n=this.\u0275cmp=t.VBU({type:o,selectors:[["app-nodes-per-country-chart"]],hostVars:1,hostBindings:function(e,a){2&e&&t.BMQ("dir",a.dir)},decls:28,vars:7,consts:()=>{let n,e,a,r,l,c,s,C;return n="\u0634\u0628\u0643\u0627\u062A \u0627\u0644\u0628\u0631\u0642 \u062D\u0633\u0628 \u0627\u0644\u062F\u0648\u0644\u0629",e="( \u0623\u0646\u0648\u0627\u062F \u062A\u0648\u0631 \u0645\u0633\u062A\u062B\u0646\u0627\u0629)",a="\u0627\u0644\u062A\u0631\u062A\u064A\u0628",r=" \u0627\u0644\u0623\u0633\u0645",l="\u0645\u0634\u0627\u0631\u0643\u0629",c="\u0623\u0646\u0648\u0627\u062F",s="\u0627\u0644\u0633\u0639\u0629",C="\u0633\u0627\u062A\u0648\u0634\u064A",[["smallchannel",""],n,e,a,r,l,c,s,C,[1,"full-container","h-100"],[1,"card-header"],[1,"d-flex","d-md-block","align-items-baseline",2,"margin-bottom","-5px"],[1,"btn","p-0","pl-2",2,"margin","0 0 4px 0px",3,"click"],[3,"icon","fixedWidth"],[2,"color","var(--transparent-fg)"],[1,"container","pb-lg-0"],[1,"pb-lg-5"],["class","chart w-100","echarts","",3,"initOpts","options","chartInit",4,"browserOnly"],["class","text-center loadingGraphs",4,"ngIf"],[1,"table","table-borderless","table-fixed","text-center","m-auto",2,"max-width","900px"],[1,"text-left","rank"],[1,"text-left","name"],[1,"text-right","share"],[1,"text-right","nodes"],[1,"text-right","capacity"],[4,"ngIf"],["echarts","",1,"chart","w-100",3,"chartInit","initOpts","options"],[1,"text-center","loadingGraphs"],[1,"spinner-border","text-light"],[4,"ngFor","ngForOf"],[1,"text-left","text-truncate","name"],[1,"d-flex","align-items-center",3,"routerLink"],[1,"flag"],[1,"link"],[3,"satoshis","digitsInfo","noFiat",4,"ngIf","ngIfElse"],[3,"satoshis","digitsInfo","noFiat"],[1,"sats"]]},template:function(e,a){1&e&&(t.j41(0,"div",9)(1,"div",10)(2,"div",11)(3,"span"),t.pXf(4,1),t.k0s(),t.j41(5,"button",12),t.bIt("click",function(){return a.onSaveChart()}),t.nrm(6,"fa-icon",13),t.k0s()(),t.j41(7,"small",14),t.pXf(8,2),t.k0s()(),t.j41(9,"div",15)(10,"div",16),t.DNE(11,U,1,2,"div",17),t.k0s(),t.DNE(12,Y,2,0,"div",18),t.j41(13,"table",19)(14,"thead")(15,"tr")(16,"th",20),t.pXf(17,3),t.k0s(),t.j41(18,"th",21),t.pXf(19,4),t.k0s(),t.j41(20,"th",22),t.pXf(21,5),t.k0s(),t.j41(22,"th",23),t.pXf(23,6),t.k0s(),t.j41(24,"th",24),t.pXf(25,7),t.k0s()()(),t.DNE(26,j,2,2,"tbody",25),t.nI1(27,"async"),t.k0s()()()),2&e&&(t.R7$(6),t.Y8G("icon",t.lJ4(6,H))("fixedWidth",!0),t.R7$(6),t.Y8G("ngIf",!a.stateService.isBrowser||a.isLoading),t.R7$(14),t.Y8G("ngIf",t.bMT(27,4,a.nodesPerCountryObservable$)))},dependencies:[_.Sq,_.bT,g.Wk,y.aY,G.e,A.Y,L.$P,_.Jj,N.U,R.x],styles:[".sats[_ngcontent-%COMP%]{color:var(--transparent-fg);font-size:12px;top:0}.card-header[_ngcontent-%COMP%]{border-bottom:0;font-size:18px}@media (min-width: 465px){.card-header[_ngcontent-%COMP%]{font-size:20px}}.full-container[_ngcontent-%COMP%]{padding:0 15px;width:100%;height:calc(100% - 140px)}@media (max-width: 992px){.full-container[_ngcontent-%COMP%]{height:calc(100% - 190px)}}@media (max-width: 575px){.full-container[_ngcontent-%COMP%]{height:calc(100% - 230px)}}.chart[_ngcontent-%COMP%]{max-height:400px}@media (max-width: 767.98px){.chart[_ngcontent-%COMP%]{max-height:230px;margin-top:-35px}}.rank[_ngcontent-%COMP%]{width:8%}@media (max-width: 576px){.rank[_ngcontent-%COMP%]{display:none}}.name[_ngcontent-%COMP%]{width:36%}@media (max-width: 576px){.name[_ngcontent-%COMP%]{width:80%;max-width:150px;padding-left:0;padding-right:0}}.share[_ngcontent-%COMP%]{width:15%}@media (max-width: 576px){.share[_ngcontent-%COMP%]{display:none}}.nodes[_ngcontent-%COMP%]{width:15%}@media (max-width: 576px){.nodes[_ngcontent-%COMP%]{width:10%}}.capacity[_ngcontent-%COMP%]{width:26%}@media (max-width: 576px){.capacity[_ngcontent-%COMP%]{width:10%;max-width:100px}}a[_ngcontent-%COMP%]{text-decoration:none}a[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%]{text-decoration:underline}.flag[_ngcontent-%COMP%]{font-size:20px}.text-truncate[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}"],changeDetection:0})}return o})();var z=i(9589),B=i(2589);const W=[{path:"nodes-networks",data:{networks:["bitcoin"]},component:f.c},{path:"capacity",data:{networks:["bitcoin"]},component:m.D},{path:"nodes-per-isp",data:{networks:["bitcoin"]},component:u.G},{path:"nodes-per-country",data:{networks:["bitcoin"]},component:F},{path:"nodes-map",data:{networks:["bitcoin"]},component:z.E},{path:"nodes-channels-map",data:{networks:["bitcoin"]},component:B.E}];let T=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.$C({type:o});static#e=this.\u0275inj=t.G2t({imports:[g.iI.forChild(W),g.iI]})}return o})(),J=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#n=this.\u0275mod=t.$C({type:o});static#e=this.\u0275inj=t.G2t({imports:[_.MD,O.G,T]})}return o})()}}]);