(this.webpackJsonph2=this.webpackJsonph2||[]).push([[0],{17:function(e,t,n){e.exports=n(33)},22:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(2),o=n.n(r),l=(n(22),n(11)),i=n(14),u=n(12),s=n(13),m=n(15),d=n(16),f=n(6),h=n.n(f),C=n(3),b=(n(10),function(e){var t=e.handleChangeName,n=e.nameValue,a=e.numberValue,r=e.handleChangeNumber,o=e.addToContacts,l=e.contactsId;return c.a.createElement("div",{className:h.a.form},c.a.createElement("form",null,c.a.createElement("label",{className:h.a["label-name"],htmlFor:l},"Name",c.a.createElement("input",{name:"name",id:l,type:"text",value:n,onChange:t})),c.a.createElement("label",{className:h.a["label-name"]},"Number",c.a.createElement("input",{name:"number",type:"text",value:a,onChange:r})),c.a.createElement("div",null,c.a.createElement("button",{type:"text",onClick:o},"Add contact"),c.a.createElement(C.a,null))))}),p=function(e){var t=e.handleChangeNameFilter,n=e.filterContacts;return c.a.createElement("div",null,c.a.createElement("p",null,"Find contacts by name"),c.a.createElement("input",{name:"filter",type:"text",onChange:t,onInputCapture:n}))},v=n(7),E=n.n(v),g=function(e){var t=e.contacts,n=e.filterContacts,a=e.deleteContact;return c.a.createElement("div",null,c.a.createElement("ul",null,n.length?n.map((function(e){return c.a.createElement("li",{key:e.name},e.name," : ",e.number,c.a.createElement("button",{type:"button",id:e.id,className:E.a.delete,onClick:function(){a(e.id)}},"Delete"))})):t.map((function(e){return c.a.createElement("li",{key:e.name},e.name," : ",e.number,c.a.createElement("button",{type:"button",id:e.id,className:E.a.delete,onClick:function(){a(e.id)}},"Delete"))}))))},y=n(8),N=n.n(y),S=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}},k=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}},w=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filterContacts:[],filter:"",name:"",number:""},e.notifyA=function(){return Object(C.b)("Enter name and number")},e.notifyB=function(){var t=e.state.name;Object(C.b)("".concat(t," is already in contacts"))},e.addToContacts=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number,r={name:a,number:c,id:N.a.generate()};!0!==e.isContact()?a.length&&c.length?e.setState((function(e){return{contacts:[r].concat(Object(i.a)(e.contacts))}})):e.notifyA():e.notifyB(),e.setState({name:"",number:""})},e.inputHandler=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(l.a)({},n,a))},e.filterContacts=function(t){t.preventDefault(),t.persist();var n=e.state.contacts;e.setState((function(){return{filterContacts:n.filter((function(e){return e.name.toLowerCase().includes(t.target.value)||e.number.toLowerCase().includes(t.target.value)}))}}))},e.deleteContact=function(t){var n=e.state.contacts.filter((function(e){return e.id!==t}));e.setState({contacts:n})},e.isContact=function(t){var n=e.state,a=n.name;return n.contacts.some((function(e){return e.name.toLocaleLowerCase()===a.toLocaleLowerCase()}))},e.contactsId=N.a.generate(),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=k("contacts");e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(e){e.contacts!==this.state.contacts&&S("contacts",this.state.contacts),console.log(this.state.filterContacts)}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.contacts,r=e.filter,o=e.filterContacts;return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(b,{handleChangeName:this.inputHandler,nameValue:t,numberValue:n,handleChangeNumber:this.inputHandler,addToContacts:this.addToContacts,contactsId:this.contactsId,isContact:this.isContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(p,{handleChangeNameFilter:this.inputHandler,filterContacts:this.filterContacts,contacts:a,filter:r}),c.a.createElement(g,{contacts:a,filterContacts:o,deleteContact:this.deleteContact}))}}]),n}(a.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"ContactForm_form__fRqtb","label-name":"ContactForm_label-name__3grc1"}},7:function(e,t,n){e.exports={delete:"ContactList_delete__2-XUe"}}},[[17,1,2]]]);
//# sourceMappingURL=main.a0074724.chunk.js.map