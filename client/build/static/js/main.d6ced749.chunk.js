(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),o=a.n(l),c=a(15),s=a(16),m=a(18),u=a(17),i=a(19),d=a(8),p=a(28),h=(a(56),a(24)),E=a(72),b=a(127),g=a(128),f=a(74),N=a(14),j=a(40),y=a(10),v=a.n(y),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),v.a.get("/api/users/name/"+a.state.userName).then((function(e){console.log(e.data),e.data.length?e.data[0].password===a.state.password?(console.log(e.data[0].password),a.setState({userObject:e.data[0]}),console.log(a.state),a.setState({redirectTo:"/managerprojects"})):a.setState({message:"password not matching"}):a.setState({message:"User not exits"})})).catch((function(e){console.log("API GET /api/users/name  Route Error"),console.log(e)}))},a.state={userName:"",password:"",message:"",redirectTo:null,userObject:{}},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(p.a,{to:{pathname:this.state.redirectTo,state:this.state.userObject}}):r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement("h1",{className:"text-center"},"Welcome to Facil Work !")),r.a.createElement(g.a,null,r.a.createElement(f.a,{md:3}),r.a.createElement(f.a,{md:6},r.a.createElement(N.a,{onSubmit:this.handleSubmit},r.a.createElement(N.a.Group,{controlId:"userNameId"},r.a.createElement(N.a.Label,null,"User Name:"),r.a.createElement(N.a.Control,{type:"text",name:"userName",value:this.state.userName,onChange:this.handleChange,placeholder:"userName",required:!0})),r.a.createElement(N.a.Group,{controlId:"passwordId"},r.a.createElement(N.a.Label,null,"Password:"),r.a.createElement(N.a.Control,{type:"password",placeholder:"Enter Password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0})),r.a.createElement("p",{className:"text",style:{color:"red"}},this.state.message),r.a.createElement(j.a,{variant:"secondary",type:"submit"},"Sign in"),r.a.createElement(d.b,{to:{pathname:"/signup"}},r.a.createElement(j.a,{className:"btn btn-secondary m-2"},"Click here signup")))),r.a.createElement(f.a,{md:3})))}}]),t}(n.Component),O=a(39),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.state={userName:"",firstName:"",lastName:"",password:"",role:"",message:"",companyName:"",redirectTo:null},a.handleSubmit=a.handleSubmit.bind(Object(O.a)(a)),a.handleChange=a.handleChange.bind(Object(O.a)(a)),a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state),v.a.get("/api/users/name/"+this.state.userName).then((function(e){console.log(e.data),e.data.length?t.setState({message:"User Name already exists!"}):v.a.post("/api/users/",{userName:t.state.userName,firstName:t.state.firstName,lastName:t.state.lastName,password:t.state.password,role:t.state.role,companyName:t.state.companyName}).then((function(e){console.log(e),alert("User Signup Sucessful"),t.setState({redirectTo:"/"})})).catch((function(e){console.log("API POST /api/users/ Route Error"),console.log(e)}))})).catch((function(e){console.log("API GET /api/users/name  Route Error"),console.log(e)}))}},{key:"render",value:function(){return this.state.redirectTo?r.a.createElement(p.a,{to:{pathname:this.state.redirectTo}}):r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement("h1",{className:"text-center"},"Welcome to Facil Work !")),r.a.createElement(g.a,null,r.a.createElement(f.a,{md:3}),r.a.createElement(f.a,{md:6},r.a.createElement(N.a,{onSubmit:this.handleSubmit},r.a.createElement(N.a.Group,{controlId:"userNameId"},r.a.createElement(N.a.Label,null,"User Name:"),r.a.createElement(N.a.Control,{type:"text",name:"userName",value:this.state.userName,onChange:this.handleChange,placeholder:"userName",required:!0})),r.a.createElement(N.a.Group,{controlId:"firstNameId"},r.a.createElement(N.a.Label,null,"First Name:"),r.a.createElement(N.a.Control,{type:"text",placeholder:"First Name",name:"firstName",value:this.state.firstName,onChange:this.handleChange,required:!0})),r.a.createElement(N.a.Group,{controlId:"lastNameId"},r.a.createElement(N.a.Label,null,"Last Name:"),r.a.createElement(N.a.Control,{type:"text",placeholder:"Last Name",name:"lastName",value:this.state.lastName,onChange:this.handleChange,required:!0})),r.a.createElement(N.a.Group,{controlId:"passwordId"},r.a.createElement(N.a.Label,null,"Password:"),r.a.createElement(N.a.Control,{type:"password",placeholder:"Enter Password",name:"password",value:this.state.password,onChange:this.handleChange,required:!0})),r.a.createElement(N.a.Group,{controlId:"companyNameId"},r.a.createElement(N.a.Label,null,"Company Name :"),r.a.createElement(N.a.Control,{type:"text",name:"companyName",onChange:this.handleChange,value:this.state.companyName,required:!0})),r.a.createElement(N.a.Group,{controlId:"roleId"},r.a.createElement(N.a.Label,null,"Role:"),r.a.createElement(N.a.Control,{as:"select",name:"role",value:this.state.role,onChange:this.handleChange},r.a.createElement("option",null),r.a.createElement("option",null,"Worker"),r.a.createElement("option",null,"Manager"))),r.a.createElement("p",{className:"text",style:{color:"red"}},this.state.message),r.a.createElement(j.a,{variant:"secondary",type:"submit"},"Signup"),r.a.createElement(d.b,{to:{pathname:"/"}},r.a.createElement(j.a,{className:"btn btn-secondary m-2"},"Already have account click")))),r.a.createElement(f.a,{md:3})))}}]),t}(n.Component),w=a(30),I=a(42),D=a.n(I),L=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=D()().format("MM-DD-YYYY");return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{className:"justify-content-center"},r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{as:"h5"},"Date: ",e," ")),r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{as:"h5"},this.props.title)),r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{as:"h5"},this.props.managername))),r.a.createElement("hr",null))}}]),t}(r.a.Component);var P=function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("h1",null,e.location.state.userName," ",e.location.state.role," "))},S=a(46),x=a(129);var G=function(e){var t=Object(n.useState)([]),a=Object(S.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(!1),s=Object(S.a)(c,2),m=s[0],u=s[1],i=Object(n.useState)([]),p=Object(S.a)(i,2),h=p[0],b=p[1];return Object(n.useEffect)((function(){v.a.get("/api/manager").then((function(e){console.log(e.data),o(e.data)}))}),[m]),Object(n.useEffect)((function(){v.a.get("/api/worker/name/"+e.userName).then((function(e){console.log(e.data),b(e.data)}))}),[m]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(d.b,{to:{pathname:"/manageraddproject",state:{userName:e.userName,firstName:e.firstName,lastName:e.lastName}}},r.a.createElement(j.a,{variant:"secondary"},"Add a Project")),r.a.createElement(x.a,{style:{fontFamily:"sanserif"},striped:!0,bordered:!0,hover:!0,variant:"light"},r.a.createElement("thead",{style:{backgroundColor:"gray"}},r.a.createElement("tr",null,r.a.createElement("th",null,"Project"),r.a.createElement("th",null,"Deadline"),r.a.createElement("th",null,"Hours Alloted"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,l.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.projectName),r.a.createElement("td",null,D()(t.deadLine).format("MM-DD-YYYY")),r.a.createElement("td",null,t.hoursAlloted),r.a.createElement("td",null,t.status),r.a.createElement("td",null,t.workDescription),r.a.createElement("td",null,r.a.createElement(j.a,{variant:"secondary",onClick:function(){return e=t._id,void v.a.delete("/api/manager/id/"+e).then((function(e){console.log(e),u(!m),console.log(m)}));var e}},"Delete"),r.a.createElement(d.b,{to:{pathname:"/manageraddworker",state:{userName:e.userName,projectName:t.projectName,firstName:e.firstName,lastName:e.lastName}}},r.a.createElement(j.a,{className:"btn btn-secondary m-2"},"Add Worker"))))})))),r.a.createElement(x.a,{style:{fontFamily:"sanserif"},striped:!0,bordered:!0,hover:!0,variant:"light"},r.a.createElement("thead",{style:{backgroundColor:"gray"}},r.a.createElement("tr",null,r.a.createElement("th",null,"Project"),r.a.createElement("th",null,"Worker Name"),r.a.createElement("th",null,"Work Description"),r.a.createElement("th",null,"Labour Hours"),r.a.createElement("th",null,"Remarks"),r.a.createElement("th",null,"status"))),r.a.createElement("tbody",null,h.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.projectName),r.a.createElement("td",null,e.workerName),r.a.createElement("td",null,e.workerDescription),r.a.createElement("td",null,e.labourHours),r.a.createElement("td",null,e.remarks),r.a.createElement("td",null,e.status,r.a.createElement(j.a,{variant:"secondary",onClick:function(){return t=e._id,void v.a.delete("/api/worker/id/"+t).then((function(e){console.log(e),u(!m),console.log(m)}));var t}},"Delete")))}))))))},A=a(130),W=a(131);var T=function(e){return r.a.createElement(E.a,null,r.a.createElement(A.a,{bg:"light",expand:"lg"},r.a.createElement(A.a.Brand,null,"Facil-work"),r.a.createElement(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(A.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,null,r.a.createElement(w.a.Item,null,e.title+" "+e.managername),r.a.createElement(w.a.Item,null,"Sigin as ",e.userName),r.a.createElement(W.a,{title:"options",id:"basic-nav-dropdown"},r.a.createElement(W.a.Item,null,"Timesheets"),r.a.createElement(W.a.Item,null,r.a.createElement(d.b,{to:"/"},"Logout")))))))};var F=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{title:e.location.state.role,managername:e.location.state.firstName+" "+e.location.state.lastName,userName:e.location.state.userName}),r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement("h2",{className:"text-center"},"Manager Projects Dashboard")),r.a.createElement(G,{userName:e.location.state.userName,firstName:e.location.state.firstName,lastName:e.location.state.lastName})))};function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={projectName:"",workDescription:"",deadLine:"",hoursAlloted:""},a.handleClick=function(e){e.preventDefault(),console.log(a.state),console.log(a.props),v.a.post("/api/manager",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state,{userName:a.props.location.state.userName})).then((function(e){console.log(e.data),alert("Project created!"),a.setState({projectName:"",workDescription:"",deadLine:"",hoursAlloted:""})})).catch((function(e){return console.log(e)}))},a.handleInputChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement("h3",{className:"text-center"},"Manager add Project View")),r.a.createElement(N.a.Group,{controlId:"projectNameId"},r.a.createElement(N.a.Label,null,"Project Name"),r.a.createElement(N.a.Control,{type:"text",name:"projectName",value:this.state.projectName,onChange:this.handleInputChange,placeholder:"Enter Project Name"})),r.a.createElement(N.a.Group,{controlId:"workDescriptionId"},r.a.createElement(N.a.Label,null,"Work Description"),r.a.createElement(N.a.Control,{type:"text",name:"workDescription",value:this.state.workDescription,onChange:this.handleInputChange,placeholder:"Enter Description"})),r.a.createElement(N.a.Group,{controlId:"deadLineId"},r.a.createElement(N.a.Label,null,"Deadline"),r.a.createElement(N.a.Control,{type:"date",name:"deadLine",value:this.state.deadLine,onChange:this.handleInputChange})),r.a.createElement(N.a.Group,{controlId:"hoursAllotedId"},r.a.createElement(N.a.Label,null,"Hours Alloted"),r.a.createElement(N.a.Control,{type:"number",name:"hoursAlloted",value:this.state.hoursAlloted,onChange:this.handleInputChange,placeholder:"Enter man hours estimated to complete task"})),r.a.createElement(j.a,{variant:"secondary",type:"submit",onClick:this.handleClick},"Add to Project list"),r.a.createElement(d.b,{to:{pathname:"/managerprojects",state:{userName:this.props.location.state.userName,firstName:this.props.location.state.firstName,lastName:this.props.location.state.lastName}}},r.a.createElement(j.a,{className:"btn btn-secondary m-2"},"Projects"))))}}]),t}(r.a.Component);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){e.preventDefault();var t=e.target,n=t.name,r=t.value;a.setState(Object(h.a)({},n,r))},a.handleClick=function(e){e.preventDefault(),console.log(a.state),console.log(a.props),v.a.post("/api/worker",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state,{userName:a.props.location.state.userName,projectName:a.props.location.state.projectName})).then((function(e){console.log(e.data),alert("Worker added!"),a.setState({workerName:"",workerDescription:"",workerDeadLine:"",labourHours:"",remarks:""})})).catch((function(e){return console.log(e)}))},a.state={workerName:"",workerDescription:"",workerDeadLine:"",labourHours:"",remarks:"",userslist:[]},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("/api/users/").then((function(t){console.log(t.data),e.setState({userslist:t.data.filter((function(e){return"Worker"===e.role})).map((function(e){return e.userName}))})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement("h3",{className:"text-center"},"Manager add Worker View")),r.a.createElement(N.a,null,r.a.createElement(N.a.Group,{controlId:"workerNameId"},r.a.createElement(N.a.Label,null,"Worker Name:"),r.a.createElement(N.a.Control,{as:"select",name:"workerName",value:this.state.workerName,onChange:this.handleInputChange,placeholder:"Enter Worker Name"},r.a.createElement("option",null),r.a.createElement("option",null,"default"),this.state.userslist.map((function(e){return r.a.createElement("option",null," ",e)})))),r.a.createElement(N.a.Group,{controlId:"workerDescriptionId"},r.a.createElement(N.a.Label,null,"Work Description"),r.a.createElement(N.a.Control,{type:"text",name:"workerDescription",value:this.state.workerDescription,onChange:this.handleInputChange,placeholder:"Enter Work Description"})),r.a.createElement(N.a.Group,{controlId:"workerDeadLineId"},r.a.createElement(N.a.Label,null,"Work Deadline"),r.a.createElement(N.a.Control,{type:"date",name:"workerDeadLine",value:this.state.workerDeadLine,onChange:this.handleInputChange,placeholder:"Enter Work Deadline"})),r.a.createElement(N.a.Group,{controlId:"labourHoursId"},r.a.createElement(N.a.Label,null,"Labour Hours"),r.a.createElement(N.a.Control,{type:"text",name:"labourHours",value:this.state.labourHours,onChange:this.handleInputChange,placeholder:"Enter Labour Hours"})),r.a.createElement(N.a.Group,{controlId:"remarksId"},r.a.createElement(N.a.Label,null,"Remarks "),r.a.createElement(N.a.Control,{type:"text",name:"remarks",value:this.state.remarks,onChange:this.handleInputChange,placeholder:"Enter remarks here"})),r.a.createElement(j.a,{variant:"secondary",type:"submit",onClick:this.handleClick},"Add worker"),r.a.createElement(d.b,{to:{pathname:"/managerprojects",state:{userName:this.props.location.state.userName,firstName:this.props.location.state.firstName,lastName:this.props.location.state.lastName}}},r.a.createElement(j.a,{className:"btn btn-secondary m-2"},"Projects")))))}}]),t}(n.Component),R=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(p.b,{exact:!0,path:"/signup",component:C}),r.a.createElement(p.b,{exact:!0,path:"/",component:k}),r.a.createElement(p.b,{exact:!0,path:"/welcome",component:P}),r.a.createElement(p.b,{exact:!0,path:"/managerprojects",component:F}),r.a.createElement(p.b,{exact:!0,path:"/manageraddworker",component:q}),r.a.createElement(p.b,{exact:!0,path:"/manageraddproject",component:M}))}}]),t}(n.Component);o.a.render(r.a.createElement(R,null),document.getElementById("root"))},79:function(e,t,a){e.exports=a(124)}},[[79,1,2]]]);
//# sourceMappingURL=main.d6ced749.chunk.js.map