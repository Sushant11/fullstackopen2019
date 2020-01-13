(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),u=n.n(l),c=(n(6),n(2)),o=n.n(c),s=n(3),m=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name:"),r.a.createElement("td",null,r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Phone No:"),r.a.createElement("td",null,r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange}))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"submit"},"Add"))))))},i=function(e){return r.a.createElement("form",{onSubmit:e.handleLogin},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Username"),r.a.createElement("td",null," ",r.a.createElement("input",{type:"text",value:e.username,name:"Username",onChange:function(t){var n=t.target;return e.setUsername(n.value)}}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Password"),r.a.createElement("td",null,r.a.createElement("input",{type:"password",value:e.password,name:"Password",onChange:function(t){var n=t.target;return e.setPassword(n.value)}}))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("button",{type:"submit"},"login"))))))},d=function(e){var t=e.person,n=e.handleDelete;return r.a.createElement("div",null,r.a.createElement("li",null,t.name," : ",t.number," ",r.a.createElement("button",{onClick:n},"Delete")))},E=n(4),p=n.n(E),b="/api/persons",f=null,h=function(){return p.a.get(b)},v=function(e){var t,n;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t={headers:{Authorization:f}},a.next=3,o.a.awrap(p.a.post(b,e,t));case 3:return n=a.sent,a.abrupt("return",n.data);case 5:case"end":return a.stop()}}))},g=function(e){return p.a.delete("".concat(b,"/").concat(e))},w=function(e){f="bearer ".concat(e)},j=function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(p.a.post("/api/login",e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},O=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},y=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),l=n[0],u=n[1],c=Object(a.useState)(""),E=Object(s.a)(c,2),p=E[0],b=E[1],f=Object(a.useState)(""),y=Object(s.a)(f,2),N=y[0],k=y[1],x=Object(a.useState)(null),C=Object(s.a)(x,2),S=C[0],P=C[1],D=Object(a.useState)(""),L=Object(s.a)(D,2),U=L[0],A=L[1],F=Object(a.useState)(""),J=Object(s.a)(F,2),z=J[0],B=J[1],I=Object(a.useState)(null),T=Object(s.a)(I,2),W=T[0],q=T[1];Object(a.useEffect)((function(){h().then((function(e){return u(e.data)}))}),[]);return r.a.createElement("div",null,r.a.createElement(O,{message:S}),null===W?r.a.createElement(a.Fragment,null," ",r.a.createElement("h4",null,"Login"),r.a.createElement(i,{username:U,password:z,setUsername:A,setPassword:B,handleLogin:function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,o.a.awrap(j({username:U,password:z}));case 4:t=n.sent,w(t.token),q(t),A(""),B(""),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),P("Wrong credentials"),setTimeout((function(){P(null)}),5e3);case 15:case"end":return n.stop()}}),null,null,[[1,11]])}})," "):r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement("p",null,W.name," logged in"),r.a.createElement(m,{addPerson:function(e){e.preventDefault();var t={name:p,number:N,id:l.length+1};l.find((function(e){return e.name===p}))?(alert("".concat(p," already added in the List.")),b("")):v(t).then((function(e){u(l.concat(e.data)),b(""),k(""),P("Added")}))},newName:p,newNumber:N,handleNumberChange:function(e){k(e.target.value)},handleNameChange:function(e){b(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),l.map((function(e){return r.a.createElement(d,{key:e.id,person:e,handleDelete:function(){return t=e.id,void(!0===window.confirm("Delete ".concat(t,"?"))&&g(t).then((function(e){return alert("".concat(t," Deleted"),document.location.reload()),e.data})));var t}})}))))};u.a.render(r.a.createElement(y,null),document.getElementById("root"))},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.d9b602cf.chunk.js.map