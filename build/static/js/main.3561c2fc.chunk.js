(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),u=a.n(r),i=(a(60),a(23)),o=a(4),l=a(17),s=a(13),p=a.n(s),m=(a(63),p.a.initializeApp({apiKey:"AIzaSyBxnYOMp_eyxSobHlscMjOP7zGeA_NVa5Y",authDomain:"g-chat-69a1b.firebaseapp.com",projectId:"g-chat-69a1b",storageBucket:"g-chat-69a1b.appspot.com",messagingSenderId:"486372692988",appId:"1:486372692988:web:10c39aed9e9bfb91eb9879"}).auth()),h=c.a.createContext(),d=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),u=r[0],i=r[1],s=Object(n.useState)(null),p=Object(l.a)(s,2),d=p[0],b=p[1],f=Object(o.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){b(e),i(!1),e&&f.push("/chats")}))}),[d,f]);var g={user:d};return c.a.createElement(h.Provider,{value:g},!u&&t)},b=a(18),f=a.n(b),g=a(33),v=a(53),E=a(3),j=a.n(E);function O(){var e=Object(o.f)(),t=Object(n.useContext)(h).user,a=Object(n.useState)(!0),r=Object(l.a)(a,2),u=r[0],i=r[1],s=function(){var t=Object(g.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var e=Object(g.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t?j.a.get("https://api.chatengine.io/users/me",{headers:{"project-id":"5e55a211-c844-4233-87de-9918765604cc","user-name":t.email,"user-secret":t.uid}}).then((function(){i(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.email),e.append("secret",t.uid),p(t.photoURL).then((function(t){e.append("avatar",t,t.name),j.a.post("https://api.chatengine.io/users",e,{headers:{"private-key":"44356a5-b395-42bc-ae1b-31c8c62d430d"}}).then((function(){return i(!1)})).catch((function(e){return console.log(e)}))}))})):e.push("/")}),[t,e]),!t||u?"LOADING....":c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"G-Chat"),c.a.createElement("div",{onClick:s,className:"logout-tab"},"Logout")),c.a.createElement(v.d,{height:"calc(100vh - 66px)",projectID:"5e55a211-c844-4233-87de-9918765604cc",userName:t.email,userSecret:t.uid}))}var w=a(118),k=a(119);function x(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to G-Chat"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(w.a,null),"Sign In with Google"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return m.signInWithRedirect(new p.a.auth.FacebookAuthProvider)}},c.a.createElement(k.a,null),"Sign In with Facebook")))}var I=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(i.a,null,c.a.createElement(d,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/chats",component:O}),c.a.createElement(o.a,{path:"/",component:x})))))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))},55:function(e,t,a){e.exports=a(116)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.3561c2fc.chunk.js.map