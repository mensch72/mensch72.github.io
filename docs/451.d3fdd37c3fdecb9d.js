"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[451],{451:(P,d,_)=>{_.r(d),_.d(d,{SettingsPageModule:()=>T});var c=_(6362),a=_(587),s=_(3926),g=_(8139),p=_(1951),m=_(2767),e=_(260),u=_(6301);function f(o,r){if(1&o&&(e._UZ(0,"div",32),e.ALo(1,"translate")),2&o){const n=e.oxw().$implicit;e.Q6J("innerHtml",e.lcZ(1,1,n.message),e.oJD)}}function h(o,r){if(1&o&&(e.ynx(0),e.YNc(1,f,2,3,"div",31),e.BQk()),2&o){const n=r.$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.formGroup.get("email").hasError(n.type)&&(i.formGroup.get("email").dirty||i.formGroup.get("email").touched))}}function x(o,r){if(1&o&&(e._UZ(0,"div",32),e.ALo(1,"translate")),2&o){const n=e.oxw().$implicit;e.Q6J("innerHtml",e.lcZ(1,1,n.message),e.oJD)}}function w(o,r){if(1&o&&(e.ynx(0),e.YNc(1,x,2,3,"div",31),e.BQk()),2&o){const n=r.$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.formGroup.get("pw.password").hasError(n.type)&&(i.formGroup.get("pw.password").dirty||i.formGroup.get("pw.password").touched))}}function Z(o,r){if(1&o&&(e._UZ(0,"div",32),e.ALo(1,"translate")),2&o){const n=e.oxw().$implicit;e.Q6J("innerHtml",e.lcZ(1,1,n.message),e.oJD)}}function y(o,r){if(1&o&&(e.ynx(0),e.YNc(1,Z,2,3,"div",31),e.BQk()),2&o){const n=e.oxw(3);e.xp6(1),e.Q6J("ngIf",n.formGroup.get("pw").hasError("must_match")&&(n.formGroup.get("pw.confirm_password").dirty||n.formGroup.get("pw.confirm_password").touched))}}function S(o,r){if(1&o){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-item"),e._UZ(2,"ion-label",10),e.ALo(3,"translate"),e.TgZ(4,"ion-input",33,34),e.NdJ("keydown.enter",function(){e.CHM(n);const t=e.oxw(2);return t.editing_password=!t.formGroup.get("pw").valid,t.showing_password=!t.formGroup.get("pw").valid&&t.showing_password})("keydown.tab",function(){e.CHM(n);const t=e.oxw(2);return t.editing_password=!t.formGroup.get("pw").valid,t.showing_password=!t.formGroup.get("pw").valid&&t.showing_password})("ionChange",function(){return e.CHM(n),e.oxw(2).set_password()}),e.qZA()(),e.TgZ(6,"div",14),e.YNc(7,y,2,1,"ng-container",15),e.qZA(),e.BQk()}if(2&o){const n=e.oxw(2);e.xp6(2),e.Q6J("innerHtml",e.lcZ(3,6,"retype-password"),e.oJD),e.xp6(2),e.Akn(n.editing_password?"pointer-events:;":"pointer-events:none;font-size:smaller;"),e.Q6J("disabled",!n.editing_password)("type",n.showing_password?"text":"password"),e.xp6(3),e.Q6J("ngForOf",n.G.S.validation_messages.passwords_match)}}function v(o,r){if(1&o&&e._UZ(0,"ion-select-option",35),2&o){const n=r.$implicit,i=e.oxw(2);e.Q6J("value",n)("innerHtml",i.G.S.language_names[n],e.oJD)}}function J(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"ion-content")(1,"form",6),e._UZ(2,"ion-item",7),e.ALo(3,"translate"),e.TgZ(4,"ion-item"),e._UZ(5,"small",8),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"ion-grid",9)(8,"ion-row",9)(9,"ion-col",9)(10,"ion-item"),e._UZ(11,"ion-label",10),e.ALo(12,"translate"),e.TgZ(13,"ion-input",11),e.NdJ("keydown.enter",function(){e.CHM(n);const t=e.oxw();return t.editing_email=!t.formGroup.get("email").valid})("keydown.tab",function(){e.CHM(n);const t=e.oxw();return t.editing_email=!t.formGroup.get("email").valid})("ionChange",function(){return e.CHM(n),e.oxw().set_email()}),e.ALo(14,"translate"),e.qZA()()(),e.TgZ(15,"ion-button",12),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return t.editing_email=!t.editing_email}),e._UZ(16,"ion-icon",13)(17,"span",8),e.ALo(18,"translate"),e.qZA()()(),e.TgZ(19,"div",14),e.YNc(20,h,2,1,"ng-container",15),e.qZA(),e.TgZ(21,"div",16)(22,"ion-grid",9)(23,"ion-row",9)(24,"ion-col",9)(25,"ion-item",17),e._UZ(26,"ion-label",10),e.ALo(27,"translate"),e.TgZ(28,"ion-input",18),e.NdJ("ionChange",function(){return e.CHM(n),e.oxw().set_password()}),e.qZA()()(),e.TgZ(29,"ion-buttons")(30,"ion-button",19),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return t.showing_password=!t.showing_password}),e._UZ(31,"ion-icon",13),e.qZA(),e.TgZ(32,"ion-button",20),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return t.editing_password=!t.editing_password}),e._UZ(33,"ion-icon",13),e.qZA()()()(),e.TgZ(34,"div",14),e.YNc(35,w,2,1,"ng-container",15),e.qZA(),e.YNc(36,S,8,8,"ng-container",5),e.qZA()(),e.TgZ(37,"ion-item",21),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return t.advanced_expanded=!t.advanced_expanded}),e._UZ(38,"ion-icon",22),e.TgZ(39,"ion-label"),e._UZ(40,"small",8),e.ALo(41,"translate"),e.qZA()(),e._UZ(42,"app-select-server",23,24),e.TgZ(44,"form",6),e._UZ(45,"ion-item",7),e.ALo(46,"translate"),e.TgZ(47,"ion-item")(48,"ion-label",25),e._UZ(49,"ion-icon",26),e._uU(50,"\xa0 "),e._UZ(51,"span",8),e.ALo(52,"translate"),e.qZA(),e.TgZ(53,"ion-select",27,28),e.NdJ("ionChange",function(){return e.CHM(n),e.oxw().set_language()}),e.YNc(55,v,1,2,"ion-select-option",29),e.qZA()()(),e._UZ(56,"ion-item",7),e.ALo(57,"translate"),e.TgZ(58,"ion-item")(59,"ion-checkbox",30),e.NdJ("ngModelChange",function(t){return e.CHM(n),e.oxw().notify_of.new_option=t})("ngModelChange",function(){return e.CHM(n),e.oxw().notify_changed()}),e.qZA(),e._UZ(60,"ion-label",8),e.ALo(61,"translate"),e.qZA(),e.TgZ(62,"ion-item")(63,"ion-checkbox",30),e.NdJ("ngModelChange",function(t){return e.CHM(n),e.oxw().notify_of.delegation_accepted=t})("ngModelChange",function(){return e.CHM(n),e.oxw().notify_changed()}),e.qZA(),e._UZ(64,"ion-label",8),e.ALo(65,"translate"),e.qZA(),e.TgZ(66,"ion-item")(67,"ion-checkbox",30),e.NdJ("ngModelChange",function(t){return e.CHM(n),e.oxw().notify_of.delegation_declined=t})("ngModelChange",function(){return e.CHM(n),e.oxw().notify_changed()}),e.qZA(),e._UZ(68,"ion-label",8),e.ALo(69,"translate"),e.qZA(),e.TgZ(70,"ion-item")(71,"ion-checkbox",30),e.NdJ("ngModelChange",function(t){return e.CHM(n),e.oxw().notify_of.poll_closed=t})("ngModelChange",function(){return e.CHM(n),e.oxw().notify_changed()}),e.qZA(),e._UZ(72,"ion-label",8),e.ALo(73,"translate"),e.qZA()()}if(2&o){const n=e.oxw();e.xp6(1),e.Q6J("formGroup",n.formGroup),e.xp6(1),e.Q6J("innerHtml",e.lcZ(3,41,"settings.data-storage"),e.oJD),e.xp6(3),e.Q6J("innerHtml",e.lcZ(6,43,"settings.data-storage-msg"),e.oJD),e.xp6(6),e.Q6J("innerHtml",e.lcZ(12,45,"email"),e.oJD),e.xp6(2),e.Akn(n.editing_email?"pointer-events:;":"pointer-events:none;font-size:smaller;"),e.Q6J("placeholder",e.lcZ(14,47,"settings.email-placeholder"))("readonly",!n.editing_email),e.xp6(2),e.Q6J("disabled",n.editing_email&&!n.formGroup.get("email").valid),e.xp6(1),e.Q6J("name",n.editing_email?"checkmark-outline":"pencil-outline"),e.xp6(1),e.Q6J("innerHtml",e.lcZ(18,49,n.editing_email?"OK":"settings.edit"),e.oJD),e.xp6(3),e.Q6J("ngForOf",n.G.S.validation_messages.email),e.xp6(6),e.Q6J("innerHtml",e.lcZ(27,51,"password"),e.oJD),e.xp6(2),e.Akn(n.editing_password?"pointer-events:;":"pointer-events:none;font-size:smaller;"),e.Q6J("readonly",!n.editing_password)("type",n.showing_password?"text":"password"),e.xp6(3),e.Q6J("name",n.showing_password?"eye-off-outline":"eye-outline"),e.xp6(1),e.Q6J("disabled",n.editing_password&&!n.formGroup.get("pw").valid),e.xp6(1),e.Q6J("name",n.editing_password?"checkmark-outline":"pencil-outline"),e.xp6(2),e.Q6J("ngForOf",n.G.S.validation_messages.password),e.xp6(1),e.Q6J("ngIf",n.editing_password),e.xp6(2),e.Q6J("name",n.advanced_expanded?"caret-down-outline":"caret-forward-outline"),e.xp6(2),e.Q6J("innerHtml","\xa0\xa0\xa0"+e.lcZ(41,53,"draftpoll.advanced-settings"),e.oJD),e.xp6(2),e.Udp("display",n.advanced_expanded?"block":"none"),e.Q6J("page","settings")("page_object",n),e.xp6(2),e.Q6J("formGroup",n.formGroup),e.xp6(1),e.Q6J("innerHtml",e.lcZ(46,55,"settings.appearance"),e.oJD),e.xp6(6),e.Q6J("innerHtml",e.lcZ(52,57,"language"),e.oJD),e.xp6(4),e.Q6J("ngForOf",n.translate.langs),e.xp6(1),e.Q6J("innerHtml",e.lcZ(57,59,"settings.notifications"),e.oJD),e.xp6(3),e.Q6J("ngModel",n.notify_of.new_option),e.xp6(1),e.Q6J("innerHtml",e.lcZ(61,61,"notify_of.new_option"),e.oJD),e.xp6(3),e.Q6J("ngModel",n.notify_of.delegation_accepted),e.xp6(1),e.Q6J("innerHtml",e.lcZ(65,63,"notify_of.delegation_accepted"),e.oJD),e.xp6(3),e.Q6J("ngModel",n.notify_of.delegation_declined),e.xp6(1),e.Q6J("innerHtml",e.lcZ(69,65,"notify_of.delegation_declined"),e.oJD),e.xp6(3),e.Q6J("ngModel",n.notify_of.poll_closed),e.xp6(1),e.Q6J("innerHtml",e.lcZ(73,67,"notify_of.poll_closed"),e.oJD)}}const G=[{path:"",component:(()=>{class o{constructor(n,i,t){this.formBuilder=n,this.translate=i,this.G=t,this.ready=!1,this.G.L.entry("SettingsPage.constructor")}ngOnInit(){this.G.L.entry("SettingsPage.ngOnInit"),this.formGroup=this.formBuilder.group({email:new a.NI("",a.kI.compose([a.kI.required,a.kI.email])),pw:this.formBuilder.group({password:new a.NI("",a.kI.compose([a.kI.required,a.kI.minLength(8),a.kI.pattern(this.G.S.password_regexp)])),confirm_password:new a.NI("",a.kI.required)},{validators:[this.G.S.passwords_match]}),language:new a.NI("",a.kI.required),theme:new a.NI("",a.kI.required)})}ionViewWillEnter(){this.G.L.entry("SettingsPage.ionViewWillEnter"),this.G.D.page=this,this.editing_email=!1,this.editing_password=!1,this.showing_password=!1,this.advanced_expanded=!1,this.notify_of={}}ionViewDidEnter(){this.G.L.entry("SettingsPage.ionViewDidEnter"),this.G.D.ready&&!this.ready&&this.onDataReady()}onDataReady(){this.G.L.entry("SettingsPage.onDataReady"),this.ready=!0}onSelectServerReady(n){this.select_server=n,this.fill_form()}ionViewDidLeave(){this.G.L.entry("SettingsPage.ionViewDidLeave"),this.G.D.save_state(),this.G.L.exit("SettingsPage.ionViewDidLeave")}onDataChange(){this.G.L.entry("SettingsPage.onDataChange"),this.fill_form()}set_email(){let n=this.formGroup.get("email");n.valid&&(this.G.S.email=n.value)}set_password(){let n=this.formGroup.get("pw");n.valid&&(this.G.S.password=n.get("password").value)}set_language(){let n=this.formGroup.get("language");n.valid&&(this.G.S.language=n.value)}set_theme(){let n=this.formGroup.get("theme");n.valid&&(this.G.S.theme=n.value)}set_db(n){this.G.S.db=n}set_db_from_pid(n){this.G.S.db_from_pid=n}set_db_custom_server_url(n){this.G.S.db_custom_server_url=n}set_db_custom_password(n){this.G.S.db_custom_password=n}fill_form(){this.G.L.entry("SettingsPage.fill_form"),this.formGroup.setValue({email:this.G.S.email||"",pw:{password:this.G.S.password||"",confirm_password:this.G.S.password||""},language:this.G.S.language||navigator.languages[0].slice(0,2),theme:this.G.S.theme||"light"}),this.select_server.selectServerFormGroup.setValue({db:this.G.S.db||"",db_from_pid:this.G.S.db_from_pid||"",db_custom_server_url:this.G.S.db_custom_server_url||"",db_custom_password:this.G.S.db_custom_password||""});for(const n of this.G.S.notification_classes)this.notify_of[n]=this.G.S.get_notify_of(n)}notify_changed(){for(const[n,i]of Object.entries(this.notify_of))this.G.S.set_notify_of(n,i),this.G.L.trace("SettingsPage.notify_changed",n,i)}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(a.qu),e.Y36(g.sK),e.Y36(u.U))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-settings"]],viewQuery:function(n,i){if(1&n&&(e.Gf(s.pK,5),e.Gf(m.K,5),e.Gf(s.t9,5)),2&n){let t;e.iGM(t=e.CRH())&&(i.input_retype_password=t.first),e.iGM(t=e.CRH())&&(i.select_server=t.first),e.iGM(t=e.CRH())&&(i.ionSelects=t)}},decls:9,vars:4,consts:[[2,"padding-right","11px"],["slot","start"],[1,"ion-no-padding","ion-no-margin",3,"innerHtml"],["slot","end"],["src","/assets/topright_icon.png"],[4,"ngIf"],[3,"formGroup"],["color","primary",3,"innerHtml"],[3,"innerHtml"],[1,"ion-no-padding"],["position","floating","color","primary",3,"innerHtml"],["formControlName","email","type","text","inputmode","email","required","","debounce","100",3,"placeholder","readonly","keydown.enter","keydown.tab","ionChange"],["fill","clear","tabindex","-1",2,"padding-top","10px",3,"disabled","click"],[3,"name"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["formGroupName","pw"],["lines","none"],["formControlName","password","clearOnEdit","false","clearInput","true","required","","debounce","100",3,"readonly","type","ionChange"],["tabindex","-1","fill","clear","color","primary",2,"padding-top","15px",3,"click"],["fill","clear","tabindex","-1","color","primary",2,"padding-top","10px",3,"disabled","click"],["color","light",3,"click"],["size","small","color","primary",3,"name"],[3,"page","page_object"],["select_server",""],["position","floating","color","primary"],["name","language-outline"],["formControlName","language",3,"ionChange"],["ionSelects",""],[3,"value","innerHtml",4,"ngFor","ngForOf"],["slot","start",3,"ngModel","ngModelChange"],["class","error-message",3,"innerHtml",4,"ngIf"],[1,"error-message",3,"innerHtml"],["formControlName","confirm_password","clearOnEdit","false","clearInput","true","required","","debounce","100",3,"disabled","type","keydown.enter","keydown.tab","ionChange"],["input_retype_password",""],[3,"value","innerHtml"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e._UZ(4,"ion-title",2),e.ALo(5,"translate"),e.TgZ(6,"ion-thumbnail",3),e._UZ(7,"ion-img",4),e.qZA()()(),e.YNc(8,J,74,69,"ion-content",5)),2&n&&(e.xp6(4),e.Q6J("innerHtml",e.lcZ(5,2,"settings.-page-title"),e.oJD),e.xp6(4),e.Q6J("ngIf",i.ready))},directives:[s.Gu,s.sr,s.Sm,s.fG,s.wd,s.Bs,s.Xz,c.O5,s.W2,a._Y,a.JL,a.sg,s.Ie,s.jY,s.Nd,s.wI,s.Q$,s.pK,s.j9,a.JJ,a.u,a.Q7,s.YG,s.gu,c.sg,a.x0,m.K,s.t9,s.QI,s.n0,s.nz,s.w,a.On],pipes:[g.X$],styles:[""]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.Bz.forChild(G)],p.Bz]}),o})();var C=_(4496);let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.ez,a.u5,s.Pc,a.UX,b,C.m,g.aw.forChild()]]}),o})()}}]);
//# sourceMappingURL=451.d3fdd37c3fdecb9d.js.map