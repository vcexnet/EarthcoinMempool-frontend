"use strict";(self.webpackChunkmempool=self.webpackChunkmempool||[]).push([[463],{463:(gn,I,_)=>{_.d(I,{x:()=>ln});var A=_(7786),N=_(7673),e=_(4438),g=_(8185),R=_(8031),v=_(7291),h=_(2083),$=_(4796),p=_(177),M=_(60);const w=()=>["fas","user-circle"],L=n=>["fas",n],X=n=>[n],j=()=>["fas","external-link-alt"];function Y(n,o){if(1&n&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&n){const t=e.XpG().ngIf;e.R7$(),e.JRh(t.username)}}function y(n,o){if(1&n&&e.EFF(0),2&n){const t=e.XpG().ngIf;e.SpI("@",t.username,"")}}function D(n,o){if(1&n&&(e.j41(0,"span",13),e.EFF(1),e.k0s()),2&n){const t=e.XpG().ngIf;e.R7$(),e.SpI(" OG #",t.ogRank," ")}}function B(n,o){if(1&n&&(e.j41(0,"span",14),e.EFF(1),e.k0s()),2&n){const t=e.XpG().ngIf;e.HbH("badge-"+t.subscription_tag),e.R7$(),e.SpI(" ",t.subscription_tag.toUpperCase()," ")}}function V(n,o){1&n&&(e.j41(0,"span",14),e.EFF(1," MINING POOL "),e.k0s()),2&n&&e.HbH("badge-mining-pool")}function U(n,o){if(1&n&&(e.j41(0,"span",8)(1,"span",9)(2,"strong"),e.DNE(3,Y,2,1,"span",10)(4,y,1,1,"ng-template",null,0,e.C5r),e.k0s()(),e.DNE(6,D,2,1,"span",11)(7,B,2,3,"span",12)(8,V,2,2),e.k0s()),2&n){const t=o.ngIf,i=e.sdS(5);e.R7$(3),e.Y8G("ngIf",t.username.includes("@"))("ngIfElse",i),e.R7$(3),e.Y8G("ngIf",t.ogRank),e.R7$(),e.vxM(7,"free"!==t.subscription_tag?7:"mining_pool"===t.type?8:-1)}}function z(n,o){if(1&n){const t=e.RV6();e.j41(0,"a",15),e.bIt("click",function(){e.eBV(t);const a=e.XpG();return e.Njj(a.onLinkClick("/login"))}),e.nrm(1,"fa-icon",16),e.j41(2,"span",17),e.pXf(3,1),e.k0s()()}2&n&&(e.R7$(),e.Y8G("icon",e.lJ4(2,w))("fixedWidth",!0))}function F(n,o){if(1&n&&(e.j41(0,"h6",20)(1,"span",8),e.EFF(2),e.k0s()()),2&n){const t=e.XpG().$implicit;e.R7$(2),e.JRh(t.title)}}function W(n,o){1&n&&e.nrm(0,"span",22)}function q(n,o){if(1&n){const t=e.RV6();e.j41(0,"button",28),e.bIt("click",function(){e.eBV(t);const a=e.XpG(4);return e.Njj(a.logout())}),e.EFF(1),e.k0s()}if(2&n){const t=e.XpG().$implicit;e.R7$(),e.JRh(t.title)}}function H(n,o){1&n&&e.nrm(0,"fa-icon",30),2&n&&e.Y8G("icon",e.lJ4(2,j))("fixedWidth",!0)}function J(n,o){if(1&n&&(e.j41(0,"a",29),e.EFF(1),e.DNE(2,H,1,3,"fa-icon",30),e.k0s()),2&n){const t=e.XpG().$implicit;e.Y8G("routerLink",e.eq3(3,X,t.link)),e.R7$(),e.SpI(" ",t.title," "),e.R7$(),e.vxM(2,!0===t.isExternal?2:-1)}}function Q(n,o){if(1&n){const t=e.RV6();e.j41(0,"ul",23),e.bIt("click",function(){const a=e.eBV(t).$implicit,r=e.XpG(3);return e.Njj(r.onLinkClick(a.link))}),e.j41(1,"li",24),e.nrm(2,"fa-icon",25),e.DNE(3,q,2,1,"button",26)(4,J,3,5,"a",27),e.k0s()()}if(2&n){const t=o.$implicit;e.R7$(2),e.Y8G("icon",e.eq3(4,L,t.faIcon))("fixedWidth",!0),e.R7$(),e.Y8G("ngIf","logout"===t.link),e.R7$(),e.Y8G("ngIf","Logout"!==t.title)}}function Z(n,o){if(1&n&&(e.j41(0,"div",19),e.DNE(1,F,3,1,"h6",20)(2,W,1,0)(3,Q,5,6,"ul",21),e.k0s()),2&n){const t=o.$implicit,i=e.XpG().ngIf;e.R7$(),e.vxM(1,i.length>1?1:2),e.R7$(2),e.Y8G("ngForOf",t.items)}}function K(n,o){if(1&n&&(e.qex(0),e.DNE(1,Z,4,2,"div",18),e.bVm()),2&n){const t=o.ngIf;e.R7$(),e.Y8G("ngForOf",t)}}let C=(()=>{class n{constructor(t,i,a,r,c){this.servicesApiServices=t,this.storageService=i,this.router=a,this.stateService=r,this.authService=c,this.navOpen=!1,this.loggedOut=new e.bkB,this.menuToggled=new e.bkB,this.isServicesPage=!1}ngOnInit(){this.userAuth=this.storageService.getAuth(),this.stateService.env.GIT_COMMIT_HASH_MEMPOOL_SPACE&&(this.userMenuGroups$=this.servicesApiServices.getUserMenuGroups$(),this.user$=this.servicesApiServices.userSubject$),this.isServicesPage=this.router.url.includes("/services/"),this.router.events.subscribe(t=>{t instanceof g.Z&&(this.isServicesPage||this.toggleMenu(!1))})}toggleMenu(t){this.navOpen=t,this.menuToggled.emit(t)}isSmallScreen(){return window.innerWidth<=767.98}logout(){this.servicesApiServices.logout$().subscribe(()=>{this.loggedOut.emit(!0),this.stateService.env.GIT_COMMIT_HASH_MEMPOOL_SPACE&&(this.userMenuGroups$=this.servicesApiServices.getUserMenuGroups$(),this.authService.logout(),window.location.toString().includes("services")&&this.router.navigateByUrl("/login"))})}onLinkClick(t){"logout"!==t?((!this.isServicesPage||this.isSmallScreen())&&this.toggleMenu(!1),this.router.navigateByUrl(t)):this.toggleMenu(!1)}hamburgerClick(){this.toggleMenu(!this.navOpen),this.stateService.menuOpen$.next(this.navOpen)}onResize(t){this.isSmallScreen()?this.toggleMenu(!1):this.isServicesPage&&this.toggleMenu(!0)}onClick(t){const i=this.isServicesPage&&this.isSmallScreen(),a=t.target.className;if(!a.indexOf)return void((!this.isServicesPage||i)&&this.toggleMenu(!1));const r=-1!==a.indexOf("profile_image"),c=-1!==a.indexOf("menu-click");!r&&!c&&(!this.isServicesPage||i)&&this.toggleMenu(!1)}ngOnDestroy(){this.stateService.menuOpen$.next(!1)}static#e=this.\u0275fac=function(i){return new(i||n)(e.rXU(R.z),e.rXU(v.n),e.rXU(g.Ix),e.rXU(h.d),e.rXU($.B))};static#n=this.\u0275cmp=e.VBU({type:n,selectors:[["app-menu"]],hostBindings:function(i,a){1&i&&e.bIt("resize",function(c){return a.onResize(c)},!1,e.tSv)("click",function(c){return a.onClick(c)},!1,e.tSv)},inputs:{navOpen:"navOpen"},outputs:{loggedOut:"loggedOut",menuToggled:"menuToggled"},decls:8,vars:9,consts:()=>{let t;return t="Sign In",[["usernamenospace",""],t,[1,"sidenav","menu-click"],[1,"d-flex","menu-click"],[1,"scrollable","menu-click"],["class","menu-click",4,"ngIf"],["class","d-flex justify-content-center align-items-center nav-link m-0  menu-click","routerLink","/login","role","tab",3,"click",4,"ngIf"],[4,"ngIf"],[1,"menu-click"],[1,"menu-click","text-nowrap","ellipsis"],[4,"ngIf","ngIfElse"],["class","badge mr-1 badge-og",4,"ngIf"],[1,"badge","mr-1","badge-default",3,"class"],[1,"badge","mr-1","badge-og"],[1,"badge","mr-1","badge-default"],["routerLink","/login","role","tab",1,"d-flex","justify-content-center","align-items-center","nav-link","m-0","menu-click",3,"click"],[1,"menu-click",2,"font-size","25px","margin-right","15px",3,"icon","fixedWidth"],[1,"menu-click",2,"font-size","20px"],["class","menu-click","style","height: max-content;",4,"ngFor","ngForOf"],[1,"menu-click",2,"height","max-content"],[1,"d-flex","justify-content-between","align-items-center","mt-4","mb-2","text-uppercase","menu-click"],["class","nav flex-column menu-click",3,"click",4,"ngFor","ngForOf"],[1,"d-block","mt-2"],[1,"nav","flex-column","menu-click",3,"click"],[1,"nav-item","d-flex","justify-content-start","align-items-center","menu-click"],[1,"menu-click",3,"icon","fixedWidth"],["class","btn nav-link menu-click","role","tab",3,"click",4,"ngIf"],["class","nav-link menu-click","role","tab",3,"routerLink",4,"ngIf"],["role","tab",1,"btn","nav-link","menu-click",3,"click"],["role","tab",1,"nav-link","menu-click",3,"routerLink"],[2,"margin-left","5px","font-size","13px","color","lightgray",3,"icon","fixedWidth"]]},template:function(i,a){1&i&&(e.j41(0,"div",2)(1,"div",3)(2,"nav",4),e.DNE(3,U,9,4,"span",5),e.nI1(4,"async"),e.DNE(5,z,4,3,"a",6)(6,K,2,1,"ng-container",7),e.nI1(7,"async"),e.k0s()()()),2&i&&(e.HbH(a.navOpen?"open":""),e.R7$(3),e.Y8G("ngIf",e.bMT(4,5,a.user$)),e.R7$(2),e.Y8G("ngIf",!a.userAuth),e.R7$(),e.Y8G("ngIf",e.bMT(7,7,a.userMenuGroups$)))},dependencies:[p.Sq,p.bT,g.Wk,M.aY,p.Jj],styles:[".sidenav[_ngcontent-%COMP%]{z-index:10;background-color:transparent;width:225px;height:calc(100vh - 65px);position:absolute;top:65px;transition:.25s;box-shadow:5px 0 30px #000;padding-bottom:20px}@media (max-width: 613px){.sidenav[_ngcontent-%COMP%]{top:105px}}.ltr-layout[_nghost-%COMP%]   .sidenav[_ngcontent-%COMP%], .ltr-layout   [_nghost-%COMP%]   .sidenav[_ngcontent-%COMP%]{left:-250px}.rtl-layout[_nghost-%COMP%]   .sidenav[_ngcontent-%COMP%], .rtl-layout   [_nghost-%COMP%]   .sidenav[_ngcontent-%COMP%]{right:-250px}.ellipsis[_ngcontent-%COMP%]{display:block;overflow:hidden;text-overflow:ellipsis}.scrollable[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto}.sidenav.open[_ngcontent-%COMP%]{display:block;background-color:var(--bg)}.ltr-layout[_nghost-%COMP%]   .sidenav.open[_ngcontent-%COMP%], .ltr-layout   [_nghost-%COMP%]   .sidenav.open[_ngcontent-%COMP%]{left:0}.rtl-layout[_nghost-%COMP%]   .sidenav.open[_ngcontent-%COMP%], .rtl-layout   [_nghost-%COMP%]   .sidenav.open[_ngcontent-%COMP%]{right:0}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{text-decoration:none;color:#d3d3d3;margin-left:20px}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidenav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 65px);background-color:var(--bg);padding:20px}@media (max-width: 991px){.sidenav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{padding-bottom:200px}}@media screen and (max-height: 450px){.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:18px}}.badge-default[_ngcontent-%COMP%]{background-color:#000}.badge-og[_ngcontent-%COMP%]{background-color:var(--title-fg)}.badge-pleb[_ngcontent-%COMP%]{background-color:#3ccbe3}.badge-chad[_ngcontent-%COMP%]{background-color:#957d0b}.badge-whale[_ngcontent-%COMP%]{background-color:var(--tertiary)}.badge-silver[_ngcontent-%COMP%]{background-color:#95a5a6}.badge-gold[_ngcontent-%COMP%]{background-color:#f1c40f}.badge-platinum[_ngcontent-%COMP%]{background-color:var(--tertiary)}"]})}return n})();var ee=_(8756),ne=_(4913),te=_(9260),d=_(1760),ie=_(3061),oe=_(7913),ae=_(6733),re=_(1041),_e=_(6631);const u=n=>({val:n}),ce=n=>({"dual-logos":n}),l=n=>[n],se=(n,o)=>({"dual-logos":n,"mr-0":o}),m=()=>({exact:!0}),le=()=>["fas","tachometer-alt"],ge=()=>["fas","chart-area"],pe=()=>["fas","book"],de=()=>["/about"],me=()=>["fas","info-circle"],fe=n=>({anon:n}),P=n=>({rounded:n}),b=n=>({opacity:n}),ue=n=>({"dropdown-menu-right":n}),ve=()=>["fas","rocket"],he=()=>["fas","hammer"],Me=()=>["fas","bolt"],Ce=()=>["fas","cubes"],Pe=()=>["fas","faucet-drip"];function be(n,o){if(1&n&&e.nrm(0,"img",41),2&n){const t=e.XpG(5);e.Y8G("src","/api/v1/services/account/images/"+t.user.username+"/md5="+t.user.imageMd5,e.B4B)}}function Ee(n,o){1&n&&e.nrm(0,"app-svg-images",42)}function xe(n,o){if(1&n){const t=e.RV6();e.j41(0,"div",38),e.bIt("click",function(a){e.eBV(t);const r=e.XpG(4);return e.Njj(r.hamburgerClick(a))}),e.DNE(1,be,1,1,"img",39)(2,Ee,1,0,"app-svg-images",40),e.k0s()}if(2&n){const t=e.XpG(4);e.HbH(e.eq3(4,fe,!t.user.imageMd5)),e.R7$(),e.Y8G("ngIf",t.user.imageMd5),e.R7$(),e.Y8G("ngIf",!t.user.imageMd5)}}function Te(n,o){if(1&n){const t=e.RV6();e.j41(0,"div",38),e.bIt("click",function(a){e.eBV(t);const r=e.XpG(4);return e.Njj(r.hamburgerClick(a))}),e.nrm(1,"app-svg-images",43),e.k0s()}}function Oe(n,o){1&n&&e.nrm(0,"div",44)}function Se(n,o){if(1&n&&(e.qex(0),e.DNE(1,xe,3,6,"div",35)(2,Te,2,0,"div",36)(3,Oe,1,0,"div",37),e.bVm()),2&n){const t=e.XpG(3);e.R7$(),e.Y8G("ngIf",t.user),e.R7$(),e.Y8G("ngIf",!1),e.R7$(),e.Y8G("ngIf",void 0===t.user)}}function ke(n,o){if(1&n&&e.nrm(0,"img",45),2&n){const t=e.XpG(4);e.Y8G("src",null==t.enterpriseInfo?null:t.enterpriseInfo.header_img,e.B4B)("alt",t.enterpriseInfo.title)}}function Ge(n,o){if(1&n&&(e.j41(0,"div",51),e.nrm(1,"img",52),e.k0s(),e.nrm(2,"div",53)),2&n){const t=e.XpG(5);e.R7$(),e.HbH(e.eq3(3,P,t.enterpriseInfo.rounded_corner)),e.Y8G("src",t.enterpriseInfo.img||"/api/v1/services/enterprise/images/"+t.subdomain+"/logo?imageMd5="+t.enterpriseInfo.imageMd5,e.B4B)}}function Ie(n,o){if(1&n&&e.nrm(0,"app-svg-images",54),2&n){const t=e.XpG(2).ngIf;e.Y8G("ngStyle",e.eq3(1,b,2===t.val?1:.5))}}function Ae(n,o){1&n&&e.nrm(0,"app-svg-images",55)}function Ne(n,o){if(1&n&&e.DNE(0,Ge,3,5,"ng-template",48)(1,Ie,1,3,"app-svg-images",49)(2,Ae,1,0,"app-svg-images",50),2&n){const t=e.XpG(4);e.Y8G("ngIf",t.subdomain&&t.enterpriseInfo),e.R7$(),e.Y8G("ngIf",!t.officialMempoolSpace),e.R7$(),e.Y8G("ngIf",t.officialMempoolSpace)}}function Re(n,o){1&n&&(e.j41(0,"div",56),e.pXf(1,0),e.k0s())}function $e(n,o){1&n&&(e.j41(0,"div",56),e.pXf(1,1),e.k0s())}function we(n,o){if(1&n&&(e.qex(0),e.DNE(1,ke,1,2,"img",45)(2,Ne,3,3),e.j41(3,"div",46),e.DNE(4,Re,2,0,"div",47)(5,$e,2,0,"div",47),e.k0s(),e.bVm()),2&n){const t=o.ngIf,i=e.XpG(3);e.R7$(),e.vxM(1,null!=i.enterpriseInfo&&i.enterpriseInfo.header_img?1:2),e.R7$(3),e.Y8G("ngIf",0===t.val),e.R7$(),e.Y8G("ngIf",1===t.val)}}function Le(n,o){if(1&n&&e.nrm(0,"img",16),2&n){const t=e.XpG(3);e.Y8G("src",null==t.enterpriseInfo?null:t.enterpriseInfo.header_img,e.B4B)("alt",t.enterpriseInfo.title)}}function Xe(n,o){if(1&n&&(e.j41(0,"div",51),e.nrm(1,"img",52),e.k0s(),e.nrm(2,"div",53)),2&n){const t=e.XpG(4);e.R7$(),e.HbH(e.eq3(3,P,t.enterpriseInfo.rounded_corner)),e.Y8G("src",t.enterpriseInfo.img||"/api/v1/services/enterprise/images/"+t.subdomain+"/logo?imageMd5="+t.enterpriseInfo.imageMd5,e.B4B)}}function je(n,o){if(1&n&&e.nrm(0,"img",57),2&n){const t=e.XpG(5);e.Y8G("src",null==t.enterpriseInfo?null:t.enterpriseInfo.header_img,e.B4B)("alt",t.enterpriseInfo.title)}}function Ye(n,o){if(1&n&&e.nrm(0,"app-svg-images",54),2&n){const t=e.XpG(2).ngIf;e.Y8G("ngStyle",e.eq3(1,b,2===t.val?1:.5))}}function ye(n,o){1&n&&e.nrm(0,"app-svg-images",55)}function De(n,o){if(1&n&&e.DNE(0,Ye,1,3,"app-svg-images",49)(1,ye,1,0,"app-svg-images",50),2&n){const t=e.XpG(5);e.Y8G("ngIf",!t.officialMempoolSpace),e.R7$(),e.Y8G("ngIf",t.officialMempoolSpace)}}function Be(n,o){1&n&&(e.j41(0,"div",56),e.pXf(1,2),e.k0s())}function Ve(n,o){1&n&&(e.j41(0,"div",56),e.pXf(1,3),e.k0s())}function Ue(n,o){if(1&n&&(e.qex(0),e.DNE(1,je,1,2,"img",57)(2,De,2,2),e.j41(3,"div",46),e.DNE(4,Be,2,0,"div",47)(5,Ve,2,0,"div",47),e.k0s(),e.bVm()),2&n){const t=o.ngIf,i=e.XpG(4);e.R7$(),e.vxM(1,null!=i.enterpriseInfo&&i.enterpriseInfo.header_img?1:2),e.R7$(3),e.Y8G("ngIf",0===t.val),e.R7$(),e.Y8G("ngIf",1===t.val)}}function ze(n,o){if(1&n&&(e.DNE(0,Xe,3,5,"ng-template",48)(1,Ue,6,3,"ng-container",4),e.nI1(2,"async")),2&n){const t=e.XpG(3);e.Y8G("ngIf",t.subdomain&&t.enterpriseInfo),e.R7$(),e.Y8G("ngIf",e.eq3(4,u,e.bMT(2,2,t.connectionState$)))}}function Fe(n,o){if(1&n&&(e.j41(0,"a",68),e.nrm(1,"app-svg-images",69),e.EFF(2," Mainnet"),e.k0s()),2&n){const t=e.XpG(4);e.Y8G("routerLink",t.networkPaths.mainnet||"/")}}function We(n,o){if(1&n&&(e.j41(0,"a",70),e.nrm(1,"app-svg-images",71),e.EFF(2," Signet"),e.k0s()),2&n){const t=e.XpG(3).ngIf,i=e.XpG();e.AVh("active","signet"===t.val),e.Y8G("routerLink",i.networkPaths.signet||"/signet")}}function qe(n,o){if(1&n&&(e.j41(0,"a",72),e.nrm(1,"app-svg-images",73),e.EFF(2," Testnet3"),e.k0s()),2&n){const t=e.XpG(3).ngIf,i=e.XpG();e.AVh("active","testnet"===t.val),e.Y8G("routerLink",i.networkPaths.testnet||"/testnet")}}function He(n,o){if(1&n&&(e.j41(0,"a",74),e.nrm(1,"app-svg-images",75),e.EFF(2," Testnet4"),e.k0s()),2&n){const t=e.XpG(3).ngIf,i=e.XpG();e.AVh("active","testnet4"===t.val),e.Y8G("routerLink",i.networkPaths.testnet4||"/testnet4")}}function Je(n,o){if(1&n&&(e.j41(0,"a",76),e.nrm(1,"app-svg-images",77),e.EFF(2," Liquid"),e.k0s()),2&n){const t=e.XpG(3).ngIf,i=e.XpG();e.AVh("active","liquid"===t.val),e.Y8G("href",i.env.LIQUID_WEBSITE_URL+i.urlLanguage+(i.networkPaths.liquid||""),e.B4B)}}function Qe(n,o){if(1&n&&(e.j41(0,"a",78),e.nrm(1,"app-svg-images",79),e.EFF(2," Liquid Testnet"),e.k0s()),2&n){const t=e.XpG(3).ngIf,i=e.XpG();e.AVh("active","liquid"===t.val),e.Y8G("href",i.env.LIQUID_WEBSITE_URL+i.urlLanguage+(i.networkPaths.liquidtestnet||"/testnet"),e.B4B)}}function Ze(n,o){if(1&n){const t=e.RV6();e.j41(0,"div",58),e.bIt("resize",function(){e.eBV(t);const a=e.XpG(3);return e.Njj(a.onResize())},!1,e.tSv),e.j41(1,"button",59),e.nrm(2,"app-svg-images",60),e.k0s(),e.j41(3,"div",61),e.DNE(4,Fe,3,1,"a",62)(5,We,3,3,"a",63)(6,qe,3,3,"a",64)(7,He,3,3,"a",65)(8,Je,3,3,"a",66)(9,Qe,3,3,"a",67),e.k0s()()}if(2&n){const t=e.XpG(2).ngIf,i=e.XpG();e.R7$(2),e.Y8G("name",""===t.val?"bitcoin":t.val),e.R7$(),e.Y8G("ngClass",e.eq3(8,ue,i.isMobile)),e.R7$(),e.Y8G("ngIf",i.env.MAINNET_ENABLED),e.R7$(),e.Y8G("ngIf",i.env.SIGNET_ENABLED),e.R7$(),e.Y8G("ngIf",i.env.TESTNET_ENABLED),e.R7$(),e.Y8G("ngIf",i.env.TESTNET4_ENABLED),e.R7$(),e.Y8G("ngIf",i.env.LIQUID_ENABLED),e.R7$(),e.Y8G("ngIf",i.env.LIQUID_TESTNET_ENABLED)}}function Ke(n,o){if(1&n){const t=e.RV6();e.j41(0,"li",19)(1,"a",20),e.nI1(2,"relativeUrl"),e.bIt("click",function(){e.eBV(t);const a=e.XpG(3);return e.Njj(a.collapse())}),e.nrm(3,"fa-icon",80),e.k0s()()}2&n&&(e.Y8G("routerLinkActiveOptions",e.lJ4(6,m)),e.R7$(),e.Y8G("routerLink",e.eq3(7,l,e.bMT(2,4,"/acceleration"))),e.R7$(2),e.Y8G("icon",e.lJ4(9,ve))("fixedWidth",!0))}function en(n,o){if(1&n){const t=e.RV6();e.j41(0,"li",81)(1,"a",20),e.nI1(2,"relativeUrl"),e.bIt("click",function(){e.eBV(t);const a=e.XpG(3);return e.Njj(a.collapse())}),e.nrm(3,"fa-icon",82),e.k0s()()}2&n&&(e.Y8G("routerLinkActiveOptions",e.lJ4(6,m)),e.R7$(),e.Y8G("routerLink",e.eq3(7,l,e.bMT(2,4,"/mining"))),e.R7$(2),e.Y8G("icon",e.lJ4(9,he))("fixedWidth",!0))}function nn(n,o){if(1&n){const t=e.RV6();e.j41(0,"li",83)(1,"a",20),e.nI1(2,"relativeUrl"),e.bIt("click",function(){e.eBV(t);const a=e.XpG(3);return e.Njj(a.collapse())}),e.nrm(3,"fa-icon",84),e.k0s()()}2&n&&(e.Y8G("routerLinkActiveOptions",e.lJ4(6,m)),e.R7$(),e.Y8G("routerLink",e.eq3(7,l,e.bMT(2,4,"/lightning"))),e.R7$(2),e.Y8G("icon",e.lJ4(9,Me))("fixedWidth",!0))}function tn(n,o){if(1&n){const t=e.RV6();e.j41(0,"li",85)(1,"a",20),e.nI1(2,"relativeUrl"),e.bIt("click",function(){e.eBV(t);const a=e.XpG(3);return e.Njj(a.collapse())}),e.nrm(3,"fa-icon",86),e.k0s()()}2&n&&(e.R7$(),e.Y8G("routerLink",e.eq3(5,l,e.bMT(2,3,"/blocks"))),e.R7$(2),e.Y8G("icon",e.lJ4(7,Ce))("fixedWidth",!0))}function on(n,o){if(1&n){const t=e.RV6();e.j41(0,"li",87)(1,"a",20),e.nI1(2,"relativeUrl"),e.bIt("click",function(){e.eBV(t);const a=e.XpG(3);return e.Njj(a.collapse())}),e.nrm(3,"fa-icon",88),e.k0s()()}2&n&&(e.R7$(),e.Y8G("routerLink",e.eq3(5,l,e.bMT(2,3,"/faucet"))),e.R7$(2),e.Y8G("icon",e.lJ4(7,Pe))("fixedWidth",!0))}function an(n,o){if(1&n){const t=e.RV6();e.j41(0,"app-menu",89),e.bIt("loggedOut",function(){e.eBV(t);const a=e.XpG(3);return e.Njj(a.onLoggedOut())})("menuToggled",function(a){e.eBV(t);const r=e.XpG(3);return e.Njj(r.menuToggled(a))}),e.k0s()}if(2&n){const t=e.XpG(3);e.Y8G("navOpen",t.menuOpen)}}function rn(n,o){if(1&n){const t=e.RV6();e.j41(0,"header",12)(1,"nav",13),e.DNE(2,Se,4,3,"ng-container",4),e.j41(3,"a",14),e.nI1(4,"relativeUrl"),e.bIt("click",function(a){e.eBV(t);const r=e.XpG(2);return e.Njj(r.brandClick(a))}),e.DNE(5,we,6,3,"ng-container",4),e.nI1(6,"async"),e.k0s(),e.j41(7,"a",15),e.nI1(8,"relativeUrl"),e.bIt("click",function(a){e.eBV(t);const r=e.XpG(2);return e.Njj(r.brandClick(a))}),e.DNE(9,Le,1,2,"img",16)(10,ze,3,6),e.k0s(),e.DNE(11,Ze,10,10,"div",17),e.j41(12,"div",18)(13,"ul")(14,"li",19)(15,"a",20),e.nI1(16,"relativeUrl"),e.bIt("click",function(){e.eBV(t);const a=e.XpG(2);return e.Njj(a.collapse())}),e.nrm(17,"fa-icon",21),e.k0s()(),e.DNE(18,Ke,4,10,"li",22)(19,en,4,10,"li",23)(20,nn,4,10,"li",24)(21,tn,4,8,"li",25),e.j41(22,"li",26)(23,"a",20),e.nI1(24,"relativeUrl"),e.bIt("click",function(){e.eBV(t);const a=e.XpG(2);return e.Njj(a.collapse())}),e.nrm(25,"fa-icon",27),e.k0s()(),e.DNE(26,on,4,8,"li",28),e.j41(27,"li",29)(28,"a",20),e.nI1(29,"relativeUrl"),e.bIt("click",function(){e.eBV(t);const a=e.XpG(2);return e.Njj(a.collapse())}),e.nrm(30,"fa-icon",30),e.k0s()(),e.j41(31,"li",31)(32,"a",20),e.bIt("click",function(){e.eBV(t);const a=e.XpG(2);return e.Njj(a.collapse())}),e.nrm(33,"fa-icon",32),e.k0s()()(),e.j41(34,"app-search-form",33),e.bIt("searchTriggered",function(){e.eBV(t);const a=e.XpG(2);return e.Njj(a.collapse())}),e.k0s()()(),e.DNE(35,an,1,1,"app-menu",34),e.k0s()}if(2&n){const t=e.XpG().ngIf,i=e.XpG();e.R7$(2),e.Y8G("ngIf",i.servicesEnabled),e.R7$(),e.Y8G("ngClass",e.eq3(43,ce,i.subdomain))("routerLink",e.eq3(45,l,e.bMT(4,31,"/"))),e.R7$(2),e.Y8G("ngIf",e.eq3(47,u,e.bMT(6,33,i.connectionState$))),e.R7$(2),e.Y8G("ngClass",e.l_i(49,se,i.subdomain,i.subdomain))("routerLink",e.eq3(52,l,e.bMT(8,35,"/"))),e.R7$(2),e.vxM(9,null!=i.enterpriseInfo&&i.enterpriseInfo.header_img?9:10),e.R7$(2),e.Y8G("ngIf",i.isDropdownVisible),e.R7$(2),e.ZvI("navbar-nav ",t.val,""),e.R7$(),e.Y8G("routerLinkActiveOptions",e.lJ4(54,m)),e.R7$(),e.Y8G("routerLink",e.eq3(55,l,e.bMT(16,37,"/"))),e.R7$(2),e.Y8G("icon",e.lJ4(57,le))("fixedWidth",!0),e.R7$(),e.Y8G("ngIf",""===t.val&&i.stateService.env.ACCELERATOR),e.R7$(),e.Y8G("ngIf",i.stateService.env.MINING_DASHBOARD),e.R7$(),e.Y8G("ngIf",i.stateService.networkSupportsLightning()),e.R7$(),e.Y8G("ngIf",!i.stateService.env.MINING_DASHBOARD),e.R7$(2),e.Y8G("routerLink",e.eq3(58,l,e.bMT(24,39,"/graphs"))),e.R7$(2),e.Y8G("icon",e.lJ4(60,ge))("fixedWidth",!0),e.R7$(),e.Y8G("ngIf",i.stateService.isMempoolSpaceBuild&&i.stateService.env.OFFICIAL_MEMPOOL_SPACE&&"testnet4"===i.stateService.network),e.R7$(2),e.Y8G("routerLink",e.eq3(61,l,e.bMT(29,41,"/docs"))),e.R7$(2),e.Y8G("icon",e.lJ4(63,pe))("fixedWidth",!0),e.R7$(2),e.Y8G("routerLink",e.lJ4(64,de)),e.R7$(),e.Y8G("icon",e.lJ4(65,me))("fixedWidth",!0),e.R7$(),e.Y8G("hamburgerOpen",null===i.enterpriseInfo&&null!=i.user),e.R7$(),e.Y8G("ngIf",i.servicesEnabled)}}function _n(n,o){1&n&&e.nrm(0,"app-testnet-alert")}function cn(n,o){if(1&n&&e.nrm(0,"app-global-footer",90),2&n){const t=e.XpG(2);e.Y8G("user",t.user)}}function sn(n,o){if(1&n&&(e.qex(0),e.DNE(1,rn,36,66,"header",5),e.j41(2,"div",6),e.nrm(3,"div",7),e.j41(4,"div",8),e.DNE(5,_n,1,0,"app-testnet-alert",4),e.j41(6,"main",9),e.nrm(7,"router-outlet"),e.k0s(),e.nrm(8,"div",10),e.DNE(9,cn,1,1,"app-global-footer",11),e.k0s()(),e.bVm()),2&n){const t=o.ngIf,i=e.XpG();e.R7$(),e.Y8G("ngIf",i.headerVisible),e.R7$(4),e.Y8G("ngIf","testnet"===t.val||"testnet4"===t.val||"signet"===t.val),e.R7$(4),e.Y8G("ngIf",i.footerVisible)}}let ln=(()=>{class n{constructor(t,i,a,r,c,f){this.stateService=t,this.languageService=i,this.enterpriseService=a,this.navigationService=r,this.storageService=c,this.router=f,this.headerVisible=!0,this.footerVisibleOverride=null,this.navCollapsed=!1,this.isMobile=window.innerWidth<=767.98,this.officialMempoolSpace=this.stateService.env.OFFICIAL_MEMPOOL_SPACE,this.subdomain="",this.footerVisible=!0,this.user=void 0,this.servicesEnabled=!1,this.menuOpen=!1}ngOnInit(){this.env=this.stateService.env,this.connectionState$=this.stateService.connectionState$,this.network$=(0,A.h)((0,N.of)(""),this.stateService.networkChanged$),this.urlLanguage=this.languageService.getLanguageForUrl(),this.subdomain=this.enterpriseService.getSubdomain(),this.navigationService.subnetPaths.subscribe(i=>{this.networkPaths=i,this.footerVisible=null===this.footerVisibleOverride?!(i.mainnet.indexOf("docs")>-1):this.footerVisibleOverride}),this.enterpriseInfo$=this.enterpriseService.info$.subscribe(i=>{this.enterpriseInfo=i}),this.servicesEnabled=this.officialMempoolSpace&&!0===this.stateService.env.ACCELERATOR&&""===this.stateService.network,this.refreshAuth();const t=this.router.url.includes("/services/");this.menuOpen=t&&!this.isSmallScreen(),this.setDropdownVisibility()}setDropdownVisibility(){const i=[this.env.TESTNET_ENABLED,this.env.TESTNET4_ENABLED,this.env.SIGNET_ENABLED,this.env.LIQUID_ENABLED,this.env.LIQUID_TESTNET_ENABLED,this.env.MAINNET_ENABLED].filter(a=>a).length;this.isDropdownVisible=i>1}collapse(){this.navCollapsed=!this.navCollapsed}isSmallScreen(){return window.innerWidth<=767.98}onResize(){this.isMobile=this.isSmallScreen()}brandClick(t){this.stateService.resetScroll$.next(!0)}onLoggedOut(){this.refreshAuth()}refreshAuth(){this.user=this.storageService.getAuth()?.user??null}hamburgerClick(t){this.menuComponent&&(this.menuComponent.hamburgerClick(),this.menuOpen=this.menuComponent.navOpen,t.stopPropagation())}menuToggled(t){this.menuOpen=t}ngOnDestroy(){this.enterpriseInfo$&&this.enterpriseInfo$.unsubscribe()}static#e=this.\u0275fac=function(i){return new(i||n)(e.rXU(h.d),e.rXU(ee.g),e.rXU(ne.T),e.rXU(te.o),e.rXU(v.n),e.rXU(g.Ix))};static#n=this.\u0275cmp=e.VBU({type:n,selectors:[["app-master-page"]],viewQuery:function(i,a){if(1&i&&e.GBs(C,5),2&i){let r;e.mGM(r=e.lsd())&&(a.menuComponent=r.first)}},inputs:{headerVisible:"headerVisible",footerVisibleOverride:"footerVisibleOverride"},decls:2,vars:5,consts:()=>{let t,i,a,r,c,f,E,x,T,O,S,k,G;return t="\u0921\u0948\u0936\u092C\u094B\u0930\u094D\u0921",i="\u0917\u094D\u0930\u093E\u092B\u0939\u0930\u0942",a="\u0915\u093E\u0917\u091C\u093E\u0924",r="\u0935\u093F\u0935\u0930\u0923",c="\u0905\u092B\u0932\u093E\u0907\u0928",f="\u092A\u0941\u0928: \u0915\u0928\u0947\u0915\u094D\u091F \u0917\u0930\u094D\u0926\u0948...",E="\u0905\u092B\u0932\u093E\u0907\u0928",x="\u092A\u0941\u0928: \u0915\u0928\u0947\u0915\u094D\u091F \u0917\u0930\u094D\u0926\u0948...",T="Accelerator Dashboard",O="Mining Dashboard",S="\u0932\u093E\u0907\u091F\u0928\u093F\u0919 \u090F\u0915\u094D\u0938\u092A\u094D\u0932\u094B\u0930\u0930",k="\u092C\u094D\u0932\u0915\u0939\u0930\u0942",G="Faucet",[c,f,E,x,[4,"ngIf"],["class","sticky-header",4,"ngIf"],[1,"d-flex",2,"overflow","clip"],[1,"empty-sidenav"],[1,"flex-grow-1","d-flex","flex-column"],[2,"min-width","375px","max-width","100vw"],[1,"flex-grow-1"],[3,"user",4,"ngIf"],[1,"sticky-header"],[1,"navbar","navbar-expand-md","navbar-dark"],[1,"navbar-brand","d-none","d-md-flex",3,"click","ngClass","routerLink"],[1,"navbar-brand","d-flex","d-md-none","justify-content-center",3,"click","ngClass","routerLink"],["height","42px",3,"src","alt"],["ngbDropdown","","class","dropdown-container",3,"resize",4,"ngIf"],["id","navbarCollapse",1,"navbar-collapse"],["routerLinkActive","active","id","btn-home",1,"nav-item",3,"routerLinkActiveOptions"],[1,"nav-link",3,"click","routerLink"],["title",t,3,"icon","fixedWidth"],["class","nav-item","routerLinkActive","active","id","btn-home",3,"routerLinkActiveOptions",4,"ngIf"],["class","nav-item","routerLinkActive","active","id","btn-pools",3,"routerLinkActiveOptions",4,"ngIf"],["class","nav-item","routerLinkActive","active","id","btn-lightning",3,"routerLinkActiveOptions",4,"ngIf"],["class","nav-item","routerLinkActive","active","id","btn-blocks",4,"ngIf"],["routerLinkActive","active","id","btn-graphs",1,"nav-item"],["title",i,3,"icon","fixedWidth"],["class","nav-item","routerLinkActive","active","id","btn-faucet",4,"ngIf"],["routerLinkActive","active","id","btn-docs",1,"nav-item"],["title",a,3,"icon","fixedWidth"],["routerLinkActive","active","id","btn-about",1,"nav-item"],["title",r,3,"icon","fixedWidth"],["location","top",1,"search-form-container",3,"searchTriggered","hamburgerOpen"],[3,"navOpen","loggedOut","menuToggled",4,"ngIf"],["class","profile_image_container",3,"class","click",4,"ngIf"],["class","profile_image_container",3,"click",4,"ngIf"],["class","profile_image_container",4,"ngIf"],[1,"profile_image_container",3,"click"],["class","profile_image",3,"src",4,"ngIf"],["style","color: lightgrey; fill: lightgray","name","anon",4,"ngIf"],[1,"profile_image",3,"src"],["name","anon",2,"color","lightgrey","fill","lightgray"],["name","hamburger","height","40"],[1,"profile_image_container"],["height","48px",1,"mr-3",3,"src","alt"],[1,"connection-badge"],["class","badge badge-warning",4,"ngIf"],[3,"ngIf"],["name","mempoolSpace","viewBox","0 0 500 126","class","mempool-logo",3,"ngStyle",4,"ngIf"],["name","officialMempoolSpace","viewBox","0 0 500 126",4,"ngIf"],[1,"subdomain_container"],[1,"subdomain_logo",3,"src"],[1,"vertical-line"],["name","mempoolSpace","viewBox","0 0 500 126",1,"mempool-logo",3,"ngStyle"],["name","officialMempoolSpace","viewBox","0 0 500 126"],[1,"badge","badge-warning"],["height","36px",3,"src","alt"],["ngbDropdown","",1,"dropdown-container",3,"resize"],["ngbDropdownToggle","","type","button","aria-haspopup","true",1,"btn","btn-secondary","dropdown-toggle-split","d-flex","justify-content-center","align-items-center"],["width","20","height","20","viewBox","0 0 65 65",1,"d-flex","justify-content-center","align-items-center","current-network-svg",3,"name"],["ngbDropdownMenu","",3,"ngClass"],["ngbDropdownItem","","class","mainnet",3,"routerLink",4,"ngIf"],["ngbDropdownItem","","class","signet",3,"active","routerLink",4,"ngIf"],["ngbDropdownItem","","class","testnet",3,"active","routerLink",4,"ngIf"],["ngbDropdownItem","","class","testnet4",3,"active","routerLink",4,"ngIf"],["ngbDropdownItem","","class","liquid",3,"href","active",4,"ngIf"],["ngbDropdownItem","","class","liquidtestnet",3,"href","active",4,"ngIf"],["ngbDropdownItem","",1,"mainnet",3,"routerLink"],["name","bitcoin","width","22","height","22","viewBox","0 0 65 65",1,"mainnet","mr-1",2,"width","25px","height","25px"],["ngbDropdownItem","",1,"signet",3,"routerLink"],["name","signet","width","22","height","22","viewBox","0 0 65 65",1,"mainnet","mr-1",2,"width","25px","height","25px"],["ngbDropdownItem","",1,"testnet",3,"routerLink"],["name","testnet","width","22","height","22","viewBox","0 0 65 65",1,"mainnet","mr-1",2,"width","25px","height","25px"],["ngbDropdownItem","",1,"testnet4",3,"routerLink"],["name","testnet4","width","22","height","22","viewBox","0 0 65 65",1,"mainnet","mr-1",2,"width","25px","height","25px"],["ngbDropdownItem","",1,"liquid",3,"href"],["name","liquid","width","22","height","22","viewBox","0 0 125 125",1,"mainnet","mr-1",2,"width","25px","height","25px"],["ngbDropdownItem","",1,"liquidtestnet",3,"href"],["name","liquidtestnet","width","22","height","22","viewBox","0 0 125 125",1,"mainnet","mr-1",2,"width","25px","height","25px"],["title",T,3,"icon","fixedWidth"],["routerLinkActive","active","id","btn-pools",1,"nav-item",3,"routerLinkActiveOptions"],["title",O,3,"icon","fixedWidth"],["routerLinkActive","active","id","btn-lightning",1,"nav-item",3,"routerLinkActiveOptions"],["title",S,3,"icon","fixedWidth"],["routerLinkActive","active","id","btn-blocks",1,"nav-item"],["title",k,3,"icon","fixedWidth"],["routerLinkActive","active","id","btn-faucet",1,"nav-item"],["title",G,3,"icon","fixedWidth"],[3,"loggedOut","menuToggled","navOpen"],[3,"user"]]},template:function(i,a){1&i&&(e.DNE(0,sn,10,3,"ng-container",4),e.nI1(1,"async")),2&i&&e.Y8G("ngIf",e.eq3(3,u,e.bMT(1,1,a.network$)))},dependencies:[p.YU,p.bT,p.B3,g.n3,g.Wk,g.wQ,C,d.tg,d.do,d.U0,d._H,M.aY,ie.i,oe.m,ae.p,re.I,p.Jj,_e.U],styles:[".sticky-header[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;width:100%;background-color:var(--bg);z-index:100}li.nav-item.active[_ngcontent-%COMP%]{background-color:var(--tertiary)}fa-icon[_ngcontent-%COMP%]{font-size:1.66em}.navbar[_ngcontent-%COMP%]{z-index:100;min-height:64px;width:100%;background-color:var(--nav-bg)}li.nav-item[_ngcontent-%COMP%]{margin:auto 10px;padding-left:10px;padding-right:10px}@media (max-width: 992px){li.nav-item[_ngcontent-%COMP%]{margin:auto 7px;padding-left:8px;padding-right:8px}}@media (max-width: 429px){li.nav-item[_ngcontent-%COMP%]{margin:auto 5px;padding-left:6px;padding-right:6px}}@media (max-width: 369px){li.nav-item[_ngcontent-%COMP%]{margin:auto 3px;padding-left:4px;padding-right:4px}}@media (min-width: 992px){.navbar[_ngcontent-%COMP%]{padding:0rem 2rem}fa-icon[_ngcontent-%COMP%]{font-size:1.2em}.dropdown-container[_ngcontent-%COMP%]{margin-right:16px}li.nav-item[_ngcontent-%COMP%]{margin:auto 0;padding:10px}}.navbar-nav[_ngcontent-%COMP%]{background:var(--nav-bg);bottom:0;box-shadow:0 0 15px #000;flex-direction:row;left:0;justify-content:space-between;position:fixed;width:100%}@media (min-width: 992px){.navbar-nav[_ngcontent-%COMP%]{background:transparent;box-shadow:none;position:relative;width:auto}}.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.8em}@media (min-width: 370px){.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.9em}}@media (min-width: 430px){.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1em}}.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{flex-grow:1;text-align:center}.navbar-collapse[_ngcontent-%COMP%]{justify-content:flex-end}@media (min-width: 564px){.navbar-collapse[_ngcontent-%COMP%]{flex-basis:auto}}@media (min-width: 992px){.navbar-collapse[_ngcontent-%COMP%]{justify-content:space-between}}.navbar[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{width:62px;height:36px;margin-top:5px}.navbar-brand[_ngcontent-%COMP%]{position:relative}.navbar-brand.dual-logos[_ngcontent-%COMP%]{justify-content:space-between}@media (max-width: 767.98px){.navbar-brand.dual-logos[_ngcontent-%COMP%]{width:100%}}nav[_ngcontent-%COMP%]{box-shadow:0 0 15px #000}.connection-badge[_ngcontent-%COMP%]{position:absolute;top:12px;width:100%}.badge[_ngcontent-%COMP%]{margin:0 auto;display:table}.mainnet.active[_ngcontent-%COMP%]{background-color:var(--tertiary)}.liquid.active[_ngcontent-%COMP%]{background-color:var(--liquid)}.liquidtestnet.active[_ngcontent-%COMP%]{background-color:var(--liquidtestnet)}.testnet.active[_ngcontent-%COMP%]{background-color:var(--testnet)}.signet.active[_ngcontent-%COMP%]{background-color:var(--signet)}.dropdown-divider[_ngcontent-%COMP%]{border-top:1px solid #121420}.dropdown-toggle[_ngcontent-%COMP%]:after{vertical-align:.1em}.dropdown-item[_ngcontent-%COMP%]{display:flex;align-items:center}@media (min-width: 992px){.search-form-container[_ngcontent-%COMP%]{width:100%;max-width:500px;padding-left:15px}}.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color:var(--icon)}.subdomain_logo[_ngcontent-%COMP%]{height:35px;overflow:clip;max-width:140px;margin:auto;align-self:center}.subdomain_logo[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:5px}.subdomain_container[_ngcontent-%COMP%]{max-width:140px;text-align:center;align-self:center}.vertical-line[_ngcontent-%COMP%]{border-left:1px solid #444;height:30px;margin-left:20px;margin-right:20px;margin-top:3px}.logo-holder[_ngcontent-%COMP%]{display:flex;flex-direction:row}.navbar-brand[_ngcontent-%COMP%]{flex-direction:row;display:flex}.mempool-logo[_ngcontent-%COMP%], app-svg-images[_ngcontent-%COMP%]{align-self:center;width:140px;height:35px}.beta[_ngcontent-%COMP%]{display:inline;position:absolute;margin:24px 0 0 -15px;font-size:8px}@media (max-width: 767.98px){.beta[_ngcontent-%COMP%]{margin:30px 0 0 -19px;font-size:7px}}@media (max-width: 3429px){.beta[_ngcontent-%COMP%]{margin:25px 0 0 -19px;font-size:7px}}@media (max-width: 369px){.beta[_ngcontent-%COMP%]{margin:20px 0 0 -19px;font-size:7px}}.beta-network[_ngcontent-%COMP%]{font-size:8px}.current-network-svg[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:5px}.rtl-layout[_nghost-%COMP%]   .current-network-svg[_ngcontent-%COMP%], .rtl-layout   [_nghost-%COMP%]   .current-network-svg[_ngcontent-%COMP%]{width:20px;height:20px;margin-left:5px;margin-right:0}.profile_image_container[_ngcontent-%COMP%]{width:35px;margin-right:15px;text-align:center;align-self:center;cursor:pointer}.profile_image_container.anon[_ngcontent-%COMP%]{border:1.5px solid lightgrey;color:#d3d3d3;border-radius:5px}.profile_image[_ngcontent-%COMP%]{height:35px;border-radius:5px}main[_ngcontent-%COMP%]{transition:.2s;transition-property:max-width}.empty-sidenav[_ngcontent-%COMP%]{z-index:1;background-color:transparent;width:0px;height:calc(100vh - 65px);position:sticky;top:65px;padding-bottom:20px}"]})}return n})()}}]);