(this["webpackJsonphomework16-employeedirectory"]=this["webpackJsonphomework16-employeedirectory"]||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(12),o=n.n(r),i=(n(23),n(16)),l=n(13),a=n(14),j=n(18),h=n(17),d=n(0);var u=function(e){return Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row"}),Object(d.jsxs)("td",{children:[" ",Object(d.jsx)("img",{alt:e.image,src:e.image})," "]}),Object(d.jsx)("td",{children:e.firstname}),Object(d.jsx)("td",{children:e.lastname}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.nationality}),Object(d.jsx)("td",{children:e.country}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsx)("td",{children:e.mobile}),Object(d.jsx)("td",{children:e.username})]})})};var b=function(){return Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"#"}),Object(d.jsx)("th",{scope:"col",children:"Image"}),Object(d.jsx)("th",{scope:"col",children:"First Name"}),Object(d.jsx)("th",{scope:"col",children:"Last Name"}),Object(d.jsx)("th",{scope:"col",children:"Email"}),Object(d.jsx)("th",{scope:"col",children:"Nationality"}),Object(d.jsx)("th",{scope:"col",children:"Country"}),Object(d.jsx)("th",{scope:"col",children:"Phone"}),Object(d.jsx)("th",{scope:"col",children:"Mobile"}),Object(d.jsx)("th",{scope:"col",children:"User Name"})]})})},p=n(15),m=n.n(p),O=function(){return m.a.get("https://randomuser.me/api/?results=50")},x=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={peopleList:[],currentSort:"desc"},e.loadRandomPersons=function(){O().then((function(t){e.setState({peopleList:t.data.results}),console.log("the people list",e.state.peopleList)})).catch((function(e){return console.log(e)}))},e.sortEmployees=function(){var t=Object(i.a)(e.state.peopleList);console.log("this is newstate",t),t.sort((function(e,t){var n=e.name.first.toLowerCase(),c=t.name.first.toLowerCase();return n<c?-1:n>c?1:0})),"desc"===e.state.currentSort?(e.setState({currentSort:"asc"}),t.reverse()):e.setState({currentSort:"desc"}),e.setState({peopleList:t})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.loadRandomPersons()}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Employee List"}),Object(d.jsx)("button",{onClick:this.sortEmployees,children:" Push Here "}),Object(d.jsx)("button",{onClick:this.filterPeople,children:" Push Here "}),Object(d.jsxs)("table",{class:"table table-hover",children:[Object(d.jsx)(b,{}),this.state.peopleList.map((function(e){return Object(d.jsx)(u,{keys:e.login.uuid,firstname:e.name.first,lastname:e.name.last,gender:e.gender,nationality:e.nat,phone:e.phone,dob:e.dob.date,image:e.picture.thumbnail,email:e.email,country:e.location.country,username:e.login.username,mobile:e.cell})}))]})]})}}]),n}(c.Component);var f=function(){return Object(d.jsx)("div",{class:"container",children:Object(d.jsx)(x,{})})};n(43);var g=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(f,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),y()}},[[44,1,2]]]);
//# sourceMappingURL=main.c2dd8d6c.chunk.js.map