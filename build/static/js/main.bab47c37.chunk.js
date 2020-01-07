(this["webpackJsonpgoit-react-hw-05-budget-planner"]=this["webpackJsonpgoit-react-hw-05-budget-planner"]||[]).push([[0],{30:function(e,n,t){e.exports=t(50)},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),o=t.n(u),i=t(5),c=t(6),l=t(8),p=t(7),s=t(9),d=t(1),m=t(2);function b(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return b=function(){return e},e}var f=m.a.form(b()),E=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,a=e.children;return r.a.createElement(f,{onSubmit:t},a)};function v(){var e=Object(d.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return v=function(){return e},e}var x=m.a.label(v(),(function(e){return e.customStyles})),g=function(e){var n=e.children,t=e.customStyles;return r.a.createElement(x,{customStyles:t},n)};function h(){var e=Object(d.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return h=function(){return e},e}var O=m.a.input(h()),y=function(e){var n=e.type,t=void 0===n?" text":n,a=e.value,u=void 0===a?"":a,o=e.onChange,i=void 0===o?function(){return null}:o,c=e.name,l=void 0===c?"":c;return r.a.createElement(O,{type:t,value:u,onChange:i,name:l})};function j(){var e=Object(d.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return j=function(){return e},e}var S=m.a.button(j()),_=function(e){var n=e.type,t=void 0===n?"button":n,a=e.label,u=void 0===a?"":a,o=e.onClick,i=void 0===o?function(){return null}:o;return r.a.createElement(S,{type:t,onClick:i},u)},w={ADD_EXPENSE:"ADD_EXPENSE",REMOVE_EXPENSE:"REMOVE_EXPENSE",SAVE_BUDGET:"SAVE_BUDGET"},D=t(24),C=t.n(D),k=t(3),N=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(l.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).state={budget:0},t.handleChange=function(e){t.setState({budget:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(t.state.budget),t.setState({budget:0})},t}return Object(s.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(E,{onSubmit:this.handleSubmit},r.a.createElement(g,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter your total budget",r.a.createElement(y,{type:"number",value:this.state.budget,onChange:this.handleChange})),r.a.createElement(_,{label:"Save",type:"submit"}))}}]),n}(a.Component),P=Object(k.b)(null,(function(e){return{onSave:function(n){return e(function(e){return{type:w.SAVE_BUDGET,payload:{value:+e}}}(n))}}}))(N),X=t(26),A=t(15),V=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(l.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",amount:0},t.handleChange=function(e){t.setState(Object(A.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSave(Object(X.a)({},t.state)),t.setState({name:"",amount:0})},t}return Object(s.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(E,{onSubmit:this.handleSubmit},r.a.createElement(g,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense name",r.a.createElement(y,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})),r.a.createElement(g,{customStyles:"\n  margin-bottom: 16px;  \n"},"Enter expense amount",r.a.createElement(y,{type:"number",name:"amount",value:this.state.amount,onChange:this.handleChange})),r.a.createElement(_,{label:"Add",type:"submit"}))}}]),n}(a.Component),R=Object(k.b)(null,(function(e){return{onSave:function(n){var t=n.name,a=n.amount;return e(function(e){var n=e.name,t=e.amount;return{type:w.ADD_EXPENSE,payload:{expense:{id:C.a.generate(),name:n,amount:Number(t)}}}}({name:t,amount:a}))}}}))(V),T=t(20),B=function(e){return e.expenses},U=function(e){return e.budget},z=Object(T.a)([B],(function(e){return e.reduce((function(e,n){return e+n.amount}),0)})),G=Object(T.a)([U,z],(function(e,n){return e-n})),M=function(e){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.amount,a=e.onRemove;return r.a.createElement("tr",null,r.a.createElement("td",null,n),r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement(_,{label:"Delete",onClick:a})))}}]),n}(a.Component),I=Object(k.b)((function(e,n){return function(e,n){return B(e).find((function(e){return e.id===n}))}(e,n.id)}),(function(e,n){return{onRemove:function(){return e((t=n.id,{type:w.REMOVE_EXPENSE,payload:{expense:{id:t}}}));var t}}}))(M);function F(){var e=Object(d.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return F=function(){return e},e}var J=m.a.table(F()),L=Object(k.b)((function(e){return{expenses:B(e)}}))((function(e){var n=e.expenses,t=void 0===n?[]:n;e.onRemove;return r.a.createElement(J,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Expense name"),r.a.createElement("th",null,"Expense amount"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.map((function(e){var n=e.id;return r.a.createElement(I,{key:n,id:n})}))))}));function $(){var e=Object(d.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return $=function(){return e},e}function q(){var e=Object(d.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return q=function(){return e},e}function H(){var e=Object(d.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return H=function(){return e},e}var K=m.a.div(H(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),Q=m.a.p(q()),W=m.a.p($()),Y=function(e){var n=e.label,t=e.value,a=e.isPositive;return r.a.createElement(K,{isPositive:a},r.a.createElement(Q,null,n),r.a.createElement(W,null,t,"\xa0$"))};function Z(){var e=Object(d.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Z=function(){return e},e}var ee=m.a.section(Z()),ne=Object(k.b)((function(e){return{budget:U(e),expenses:z(e),balance:G(e)}}))((function(e){var n=e.budget,t=e.expenses,a=e.balance;return r.a.createElement(ee,null,r.a.createElement(Y,{label:"Budget",value:n,isPositive:!0}),r.a.createElement(Y,{label:"Expenses",value:t}),r.a.createElement(Y,{label:"Balance",value:a,isPositive:a>=0}))}));function te(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  align-items: flex-start;\n  grid-gap: 24px;\n  max-width: 960px;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return te=function(){return e},e}var ae=m.a.div(te()),re=function(e){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(ae,null,r.a.createElement(P,null),r.a.createElement(ne,null),r.a.createElement(R,null),r.a.createElement(L,null))}}]),n}(a.Component),ue=(t(49),t(12)),oe=t(27),ie=Object(ue.b)({expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case w.ADD_EXPENSE:return[].concat(Object(oe.a)(e),[a.expense]);case w.REMOVE_EXPENSE:return e.filter((function(e){return e.id!==a.expense.id}));default:return e}},budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case w.SAVE_BUDGET:return a.value;default:return e}}}),ce=Object(ue.c)(ie,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(k.a,{store:ce},r.a.createElement(re,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.bab47c37.chunk.js.map