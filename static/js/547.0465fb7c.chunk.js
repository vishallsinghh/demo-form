"use strict";(self.webpackChunkdemo_form=self.webpackChunkdemo_form||[]).push([[547],{4547:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(5861),o=t(8152),l=t(7757),s=t.n(l),a=t(8735),i=t(3046),c=t(3393),u=t(5798),d=t(7640),h=t(1399),f=t(2791),x=t(7479),m=t(184),p=function(e){e.scrollTo,e.LiveDemoRef;var n=(0,f.useState)([]),t=(0,o.Z)(n,2),l=t[0],p=t[1],b=(0,f.useState)(""),g=(0,o.Z)(b,2),j=g[0],v=g[1],w=(0,f.useState)(""),C=(0,o.Z)(w,2),k=C[0],S=C[1],y=(0,f.useState)(""),D=(0,o.Z)(y,2),I=D[0],T=D[1],Z=(0,f.useState)(""),P=(0,o.Z)(Z,2),R=P[0],q=P[1],E=(0,f.useState)(!1),z=(0,o.Z)(E,2),F=z[0],H=z[1],_=(0,f.useState)(!0),O=(0,o.Z)(_,2),U=O[0],B=O[1];(0,f.useEffect)((function(){L()}),[]);var L=function(){x.ZP.get("".concat("https://odoo.techneith.com/techneith/dashboards/")).then((function(e){var n=e.data;p(n)}))},A=function(){var e=(0,r.Z)(s().mark((function e(){var n,t,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={staging_url:I,token:R,email:j,dashboard:k},(t=new FormData).append("staging_url",n.staging_url),t.append("token",n.token),t.append("email",n.email),t.append("dashboard",n.dashboard),e.prev=6,e.next=9,fetch("https://odoo.techneith.com/request/dashboard-demo/",{method:"POST",mode:"cors",body:t});case 9:r=e.sent,o=r.json(),console.log("Final Response: ",o),H(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),console.log("Error: ",e.t0);case 18:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r,o,l,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),H(!0),t={url:I,dashType:k,token:R,email:j},r={url:I,token:R},(o=new FormData).append("url",r.url),o.append("token",r.token),e.prev=7,e.next=10,fetch("https://odoo.techneith.com/authorize/customer",{method:"POST",mode:"cors",body:o});case 10:return l=e.sent,e.next=13,l.json();case 13:if(a=e.sent,console.log("Response1: ",a),H(!1),B(!0),console.log("isvalid:",U),!a.success){e.next=24;break}return console.log("Success, waiting call for formSubmission"),e.next=22,A();case 22:e.next=25;break;case 24:B(!1);case 25:e.next=31;break;case 27:e.prev=27,e.t0=e.catch(7),B(!1),console.log(e.t0);case 31:console.log("Form Values: ",t);case 32:case"end":return e.stop()}}),e,null,[[7,27]])})));return function(n){return e.apply(this,arguments)}}();return(0,m.jsx)(a.kC,{h:{base:"1100",sm:"1100",md:"1100px",lg:"900px"},w:"100%",justifyContent:"center",alignItems:"center",px:{base:"5",md:"10",lg:"100px",xl:"10%"},position:"relative",children:(0,m.jsxs)(a.kC,{h:"full",flexDirection:{base:"column",md:"column",lg:"column",xl:"row"},w:{base:"full",md:"full",lg:"full",xl:"90%"},justifyContent:"center",alignItems:"center",pt:"20",children:[(0,m.jsx)(a.xu,{position:"relative",display:"flex",alignItems:"start",justifyContent:{base:"center",xl:"start"},w:{base:"full",md:"full",lg:"full",xl:"50%"},h:{base:"full",md:"full",lg:"full"},pt:{base:"20"},pr:{base:"5",md:"0"},children:(0,m.jsx)(a.gC,{bg:"none",w:{base:"310px",md:"510px",lg:"490px",xl:"590px"},h:{base:"180px",md:"350px",lg:"300px",xl:"280px"},spacing:"none",borderRadius:"5px",children:(0,m.jsx)(a.xu,{bg:"none",w:"full",h:"full",borderRadius:"0 0 5px 5px",children:(0,m.jsx)(i.Ei,{src:"https://user-images.githubusercontent.com/68636367/202851767-11008859-b92f-4c1a-a3b7-5f1ea664ccbd.gif"})})})}),(0,m.jsx)(a.LZ,{}),(0,m.jsxs)(a.gC,{alignItems:{base:"center",xl:"center"},justifyContent:{base:"end",xl:"center"},w:{base:"full",md:"full",lg:"full",xl:"50%"},h:{base:"full",md:"full",lg:"full"},p:"6",children:[(0,m.jsx)(a.X6,{as:"h1",fontSize:{base:"2xl",md:"3xl",lg:"3xl"},align:"center",children:"Test Sales Dashboard"}),(0,m.jsx)(a.X6,{as:"h2",fontSize:{base:"lg",md:"xl",lg:"2xl"},fontWeight:"small",align:"center",children:"Request Live Demo on your Odoo data"}),(0,m.jsx)("form",{onSubmit:N,children:(0,m.jsx)(c.NI,{children:(0,m.jsxs)(a.gC,{alignItems:{base:"center",md:"end",lg:"center"},justifyContent:{base:"center",xl:"center"},w:{base:"full",md:"full",lg:"full",xl:"100%"},h:{base:"60%",md:"50%",lg:"full"},pt:"6",spacing:"4",children:[(0,m.jsx)(u.II,{variant:"filled",placeholder:"Your Email",type:"email",onChange:function(e){return v(e.currentTarget.value)},isRequired:!0}),(0,m.jsx)(d.Ph,{variant:"filled",placeholder:"Select Dashboard",onChange:function(e){return S(e.currentTarget.value)},isRequired:!0,mt:"5",children:l.map((function(e){return(0,m.jsx)("option",{value:e.id,children:e.name},e.id)}))}),(0,m.jsx)(u.II,{variant:"filled",placeholder:"Connector Url from Power-bi Direct Connector settings",onChange:function(e){return T(e.currentTarget.value)},isRequired:!0}),(0,m.jsx)(u.II,{variant:"filled",placeholder:"Access Token from Power-bi Direct Connector settings",onChange:function(e){return q(e.currentTarget.value)},required:!0}),U?(0,m.jsx)(c.Q6,{children:"Enter the details for demo."}):(0,m.jsx)(a.xv,{color:"red.500",children:"*Invalid Url or Token"}),(0,m.jsx)(h.zx,{className:"buttonSubmit",px:"4",colorScheme:"blue",m:"6px",isDisabled:F,type:"submit",children:"Submit"}),(0,m.jsxs)(a.GS,{pt:"10",children:[(0,m.jsxs)(a.HC,{children:["Enter the Url and Token from your",(0,m.jsx)("b",{children:"Power-Bi Direct Connector"}),"settings in Odoo"]}),(0,m.jsx)(a.HC,{children:"We will send Your Demo Dashboard Url to mentioned email within one working day"}),(0,m.jsx)(a.HC,{children:"Advised to regenerate connector token after the demo expires"}),(0,m.jsxs)(a.HC,{children:["This demo only works with",(0,m.jsx)("b",{children:"Techneith's Power-Bi Direct Connector"})," because it is only direct connector available from odoo to power-bi"]}),(0,m.jsxs)(a.HC,{children:["For Power-BI Dashboards development and customizations contact us on ",(0,m.jsx)("b",{children:"info@techneith.com"})]})]})]})})})]})]})})}}}]);
//# sourceMappingURL=547.0465fb7c.chunk.js.map