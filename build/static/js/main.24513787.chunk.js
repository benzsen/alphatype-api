(this.webpackJsonpalphatype=this.webpackJsonpalphatype||[]).push([[0],{45:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r,c=n(1),s=n.n(c),a=n(11),i=n.n(a),l=(n(45),n(6)),o=n(0),u=function(){var e=Object(l.c)((function(e){return e.currentUser})),t=e?"20px":"10px";return Object(o.jsxs)("div",{className:"header",style:{padding:t},children:[Object(o.jsx)("h1",{className:"gameTitle",children:"alphaType"}),e?"":"A Typing Game"]})},d=n(4),j=n(39),b=function(e){var t=e.notifClass,n=e.notifMessage;return null===n?null:Object(o.jsx)(j.a,{variant:t,style:{padding:"6px"},children:n})},h=n(3),p=n.n(h),x=n(5),O=function(e){var t=e.start,n=e.now,r=e.localScore,c=(n-t)/1e3;return Object(o.jsx)("div",{className:"timer",children:t?r?Object(o.jsxs)("h3",{children:[Object(o.jsx)("b",{children:"Your alphaTime is: "}),r<=0?"Invalid Result":"".concat(r.toFixed(3),"s !")]}):Object(o.jsxs)("h3",{children:[Object(o.jsx)("b",{children:"Timer:"})," ",c.toFixed(3),"s"]}):Object(o.jsx)("h3",{children:"Timer starts when typing begins"})})},f=n(14),m=n.n(f),v="/api/results",g=null,y=function(){var e=Object(x.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(v);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(x.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,m.a.post(v,{score:t},n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T={allResults:y,setToken:function(e){g="bearer ".concat(e)},saveScore:w},k=n(10),N=0,S=function(e){var t=e.setTotalTime,n=Object(c.useState)(""),s=Object(d.a)(n,2),a=s[0],i=s[1],u=Object(c.useState)(""),j=Object(d.a)(u,2),b=j[0],h=j[1],f=Object(c.useState)(""),m=Object(d.a)(f,2),v=m[0],g=m[1],y=Object(l.c)((function(e){return e.currentUser})),w=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],S=[];w.forEach((function(e,t){S=S.concat({a:e,idx:t})}));var C=S.slice(0,13),I=S.slice(13);Object(c.useEffect)((function(){A()}),[y]);var E=function(e){e.preventDefault(),"Escape"!==e.key&&"Space"!==e.code||A()},U=function(e){return document.getElementsByClassName("ctr-display")[0].style.backgroundColor=e},L=function(){var e=Object(x.a)(p.a.mark((function e(n,c,s){var l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(" "===s){e.next=21;break}if(a||i(Date.now()),"a"===c&&(r=setInterval((function(){var e=Date.now();h(e)}),1),document.addEventListener("keyup",E)),s.toUpperCase()!==c.toUpperCase()){e.next=18;break}if(U(null),!("z"===c&&N>=w.length)){e.next=15;break}return l=(b-a)/1e3,clearInterval(r),e.next=10,g(l);case 10:return e.next=12,T.saveScore(l);case 12:t(l),e.next=16;break;case 15:"z"===c&&N<w.length?A():(document.getElementById(n+1).removeAttribute("disabled"),document.getElementById(n+1).focus());case 16:e.next=19;break;case 18:U("red");case 19:e.next=22;break;case 21:A();case 22:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),A=function(){for(var e=0;e<w.length;e++){var n=0!==e?"disabled":"";document.getElementById(e).disabled=n,document.getElementById(e).value=""}i(""),h(""),g(""),t(""),N=0,U(null),document.getElementById(0).focus(),document.removeEventListener("keyup",E)},D=function(e){return Object(o.jsx)("div",{className:"letterInputFlex",children:e.map((function(e){return Object(o.jsxs)("span",{className:"letterInputSpan",children:[Object(o.jsx)("label",{children:Object(o.jsxs)("b",{children:["\xa0",e.a,"\xa0"]})}),Object(o.jsx)("input",{disabled:0!==e.idx?"disabled":"",type:"text",id:e.idx,maxLength:"1",onChange:function(t){return L(e.idx,e.a,t.target.value)},onKeyDown:function(){return N+=1},className:"letterInput",autoComplete:"off"})]},e.idx)}))})};return Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{now:b,start:a,localScore:v}),Object(o.jsxs)("div",{className:"letterInputFields",children:[D(C),D(I)]}),Object(o.jsx)(k.a,{variant:"secondary",size:"sm",onClick:function(){return A()},children:"Restart (Space Key)"})]})},C=n(40),I=function(e){return e.sort((function(e,t){return e.totalTime-t.totalTime}))},E=function(e){var t=e.usersTopScore,n=e.setUsersTopScore,r=Object(c.useState)(!1),s=Object(d.a)(r,2),a=s[0],i=s[1],u=Object(l.c)((function(e){return e.users}));Object(c.useEffect)((function(){var e=[];0!==u.length&&(u.forEach((function(t){var n="No Score";if(0!==t.results.length){n=I(t.results)[0].totalTime;var r={username:t.username,totalTime:n};e=[].concat(Object(C.a)(e),[r])}})),n(I(e)))}),[u]);var j=a?10:5,b=a?"Show Less":"Show More",h=a?"0":"20px";return Object(o.jsxs)("div",{className:"leaderContainer",children:[Object(o.jsx)("h3",{style:{paddingTop:h},children:Object(o.jsx)("u",{children:"Leaderboard"})}),Object(o.jsx)("table",{className:"leaderboard",children:Object(o.jsxs)("tbody",{style:{textAlign:"left"},children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{}),Object(o.jsx)("th",{children:"User"}),Object(o.jsx)("th",{children:"Time"})]}),function(){var e;return t.slice(0,j).map((function(t,n){return e=n<=2?"".concat(["\ud83c\udfc6","\ud83e\udd48","\ud83e\udd49"][n]," "):Object(o.jsxs)("b",{children:[n+1,"."]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{style:{minWidth:"30px",textAlign:"center"},children:e}),Object(o.jsxs)("td",{style:{minWidth:"130px"},children:[t.username,"\xa0"]}),Object(o.jsxs)("td",{children:[t.totalTime,"s"]})]},n)}))}()]})}),Object(o.jsx)(k.a,{variant:"link",size:"sm",style:{textDecoration:"none",color:"grey"},onClick:function(){return i(!a)},children:b})]})},U=n(36),L=function(e){var t=e.usersTopScore,n=Object(l.c)((function(e){return e.currentUser})),r=Object(l.c)((function(e){return e.users})),c=t.find((function(e){return e.username===n.username})),s=r.find((function(e){return e.username===n.username})),a="No Rank",i="No Game Played",u="0";if(void 0!==c&&null!==c.totalTime){var d=1+t.findIndex((function(e){return e.username===n.username}));a=1===d?Object(o.jsx)(U.a,{pill:!0,bg:"warning",text:"dark",children:"Champ \ud83c\udfc6"}):"Global Ranking: ".concat(d),i=0===t.length?null:"".concat(c.totalTime,"s"),u=s.results.length}return Object(o.jsxs)("div",{className:"userCard",children:[Object(o.jsxs)("h3",{style:{margin:0},children:["Welcome, ",n.username]}),Object(o.jsxs)("div",{className:"rankDisplay",children:[" ",a]}),Object(o.jsx)("table",{className:"userStats",children:Object(o.jsxs)("tbody",{style:{textAlign:"left"},children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{style:{minWidth:"120px"},children:"Personal Best:"}),Object(o.jsx)("td",{children:i})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Games played:"}),Object(o.jsx)("td",{children:u})]})]})})]})},A=function(){var e=Object(x.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.a.post("/api/login",t),e.next=3,n;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D={userLogin:A},B="/api/users",R=function(){var e=Object(x.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(B);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z={getAll:R,signUp:function(e){return m.a.post(B,e).then((function(e){return e.data}))}},F=function(e){return function(){var t=Object(x.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CURRENTUSER",data:e});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"CURRENTUSER"===t.type?t.data:e},W=function(){return Object(o.jsxs)("div",{className:"gameDescText",children:[Object(o.jsx)("h5",{children:"What is alphaType?"}),Object(o.jsx)("p",{children:"It is a game that tests your ability to type the alphabet in the fastest possible time."}),Object(o.jsx)("p",{children:"You will be ranked amongst the best alphaTypers in the world! "}),Object(o.jsxs)("div",{className:"gameDescImgs",children:[Object(o.jsx)("img",{src:"/hands-and-keyboard.svg",className:"gameDescImg",alt:"typing on keyboard",height:"120",width:"120"}),Object(o.jsx)("img",{src:"/speed-running.svg",className:"gameDescImg",alt:"speed",height:"70",width:"70"})]})]})},G=function(e){var t=e.notification,n=Object(l.b)(),r=Object(c.useState)(""),s=Object(d.a)(r,2),a=s[0],i=s[1],u=Object(c.useState)(""),j=Object(d.a)(u,2),b=j[0],h=j[1],O=Object(c.useState)(!0),f=Object(d.a)(O,2),m=f[0],v=f[1],g=function(){var e=Object(x.a)(p.a.mark((function e(r){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!m){e.next=12;break}return e.prev=2,e.next=5,z.signUp({username:a,password:b});case 5:e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(2),t("danger",Object(o.jsxs)("div",{children:["Invalid Credentials",Object(o.jsx)("br",{}),"Username must be unique and have 3-12 characters",Object(o.jsx)("br",{}),"Password must have at least 3 characters"]})),h(""),e.abrupt("return");case 12:return e.prev=12,e.next=15,D.userLogin({username:a,password:b});case 15:c=e.sent,window.localStorage.setItem("loggedAppUser",JSON.stringify(c)),T.setToken(c.token),i(""),h(""),n(F(c)),t("success","Welcome ".concat(c.username," & Happy alphaTyping!")),e.next=28;break;case 24:e.prev=24,e.t1=e.catch(12),h(""),t("danger","Wrong/Invalid Credentials");case 28:case"end":return e.stop()}}),e,null,[[2,7],[12,24]])})));return function(t){return e.apply(this,arguments)}}(),y=!1===m?"Login to Play":"Create Account",w=!1===m?"New User?":"Existing User?",N=!1!==m?"Login":"Sign Up";return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"loginContainer",children:Object(o.jsxs)("div",{className:"loginDisplay",children:[Object(o.jsxs)("form",{onSubmit:g,children:[Object(o.jsx)("h3",{children:y}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"loginField",children:["Username:\xa0",Object(o.jsx)("input",{type:"text",value:a,name:"Username",size:"12",onChange:function(e){var t=e.target;return i(t.value)}})]}),Object(o.jsxs)("div",{className:"loginField",children:["Password:\xa0",Object(o.jsx)("input",{type:"password",value:b,name:"Password",size:"12",onChange:function(e){var t=e.target;return h(t.value)}})]}),Object(o.jsx)(k.a,{className:"loginButton",variant:"secondary",type:"submit",children:"Submit"})]}),Object(o.jsxs)("div",{className:"toggleLoginSignUp",children:[Object(o.jsx)("div",{children:w}),Object(o.jsx)(k.a,{variant:"link",style:{paddingTop:"0"},onClick:function(){v(!m),i(""),h("")},children:N})]})]})}),Object(o.jsx)("div",{className:"gameDescription",children:m?Object(o.jsx)(W,{}):""})]})},M=function(){var e=Object(l.b)();return Object(o.jsx)("div",{children:Object(o.jsx)(k.a,{className:"logoutButton",variant:"outline-secondary",size:"sm",onClick:function(){return e(F(null)),window.localStorage.removeItem("loggedAppUser")},children:"Logout"})})},H=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],s=n?"Hide Instructions":"How to Play?",a=n?"":"none";return Object(o.jsxs)("div",{children:[Object(o.jsx)(k.a,{className:"instruButton",variant:"link",size:"sm",style:{textDecoration:"none",color:"grey"},onClick:function(){return r(!n)},children:s}),Object(o.jsxs)("div",{style:{display:a},children:[Object(o.jsx)("h5",{children:"Mission:"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"In the shortest amount of time, type the alphabet in sequence."}),Object(o.jsx)("div",{children:Object(o.jsx)("u",{children:"The ultimate goal is to claim the #1 spot in the Leaderboard!"})})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h5",{children:"Instructions:"}),Object(o.jsx)("div",{className:"instrucList",children:Object(o.jsxs)("ol",{children:[Object(o.jsx)("li",{children:"To begin the game, type the letter specified above the input field."}),Object(o.jsx)("li",{children:"If a letter is typed correctly, the next letter will be prompted."}),Object(o.jsx)("li",{children:"The background of the game will turn red if a letter is mistyped."}),Object(o.jsx)("li",{children:'The timer will stop once the last letter ("z") is typed.'}),Object(o.jsx)("li",{children:"Happy alphaTyping!"})]})})]})]})},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"GETALL"===t.type?t.data:e},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type,e},K=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.currentUser})),n=Object(c.useState)([]),r=Object(d.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(""),u=Object(d.a)(i,2),j=u[0],h=u[1],O=Object(c.useState)(""),f=Object(d.a)(O,2),m=f[0],v=f[1],g=Object(c.useState)(""),y=Object(d.a)(g,2),w=y[0],k=y[1];Object(c.useEffect)((function(){var t,n=window.localStorage.getItem("loggedAppUser");if(n){var r=JSON.parse(n);e(F(r)),e((t=r.token,function(){var e=Object(x.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.setToken(t);case 2:n({type:"SETTOKEN"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}}),[]),Object(c.useEffect)((function(){e(function(){var e=Object(x.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getAll();case 2:n=e.sent,t({type:"GETALL",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[j,e]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"notifFlex",children:Object(o.jsx)(b,{notifClass:m,notifMessage:w})}),t?Object(o.jsxs)("div",{className:"mainContainer",children:[Object(o.jsxs)("div",{className:"left-display",children:[Object(o.jsx)(L,{usersTopScore:s}),Object(o.jsx)("div",{className:"logoutWeb",children:Object(o.jsx)(M,{})})]}),Object(o.jsx)("div",{className:"ctr-display",children:Object(o.jsx)(S,{totalTime:j,setTotalTime:h})}),Object(o.jsx)("div",{className:"right-display",children:Object(o.jsx)(E,{totalTime:j,usersTopScore:s,setUsersTopScore:a})}),Object(o.jsx)("div",{className:"instructions",children:Object(o.jsx)(H,{})}),Object(o.jsx)("div",{className:"logoutMobile",children:Object(o.jsx)(M,{})})]}):Object(o.jsx)("div",{children:Object(o.jsx)(G,{notification:function(e,t){v(e),k(t),setTimeout((function(){k(null)}),5e3)}})})]})},Y=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("small",{children:"Copyright \xa9 2022 Benny Luo"})})},Q=(n(72),function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{}),Object(o.jsx)(K,{}),Object(o.jsx)(Y,{})]})}),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},X=(n(73),n(18)),Z=n(37),$=n(38),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"GETALL"===t.type?t.data:e},ee=Object(X.combineReducers)({currentUser:P,users:J,result:q,topScore:_}),te=Object(X.createStore)(ee,Object(Z.composeWithDevTools)(Object(X.applyMiddleware)($.a)));i.a.render(Object(o.jsx)(l.a,{store:te,children:Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(Q,{})})}),document.getElementById("root")),V()}},[[74,1,2]]]);
//# sourceMappingURL=main.24513787.chunk.js.map