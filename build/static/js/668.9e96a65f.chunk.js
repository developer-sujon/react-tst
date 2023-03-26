"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[668],{1643:function(e,s,a){var i=a(1413),t=a(9439),r=a(2791),n=a(7022),l=a(9743),c=a(2677),m=a(6149),o=a(3360),d=a(9230),u=a(4695),x=a(1134),h=a(6727),b=a(5061),f=a(1637),j=a(184);s.Z=function(){var e=(0,d.$G)().t,s=(0,b.V)(),a=(0,t.Z)(s,2),Z=a[0],p=a[1],N=p.isLoading,g=p.isSuccess,v=(0,f.z)().data,M=h.Ry({name:h.Z_().required(e("Name is required")).max(50,e("Name maximum 50 characters")),mobile:h.Z_().required(e("Mobile number is required")).matches("^(?:\\+88|88)?(01[3-9]\\d{8})$",e("Invalid mobile number")),message:h.Z_().required(e("Message is required")).max(250,e("Message maximum 250 characters"))}),S=(0,x.cI)({mode:"onChange",defaultValues:{name:"",mobile:"",message:""},resolver:(0,u.X)(M)}),k=S.register,w=S.handleSubmit,q=S.reset,y=S.formState.errors;return(0,r.useEffect)((function(){g&&q()}),[g]),(0,j.jsx)(n.Z,{className:"TopSection onboardMargin",children:(0,j.jsx)(l.Z,{className:"p-2",children:(0,j.jsx)(c.Z,{className:"shadow-sm bg-white mt-2",lg:12,md:12,sm:12,xs:12,children:(0,j.jsxs)(l.Z,{className:"text-center",children:[(0,j.jsx)(c.Z,{className:"d-flex justify-content-center",lg:6,md:6,xs:12,sm:12,children:(0,j.jsxs)(m.Z,{id:"contactForm",onReset:q,onSubmit:w((function(e){Z(e)})),className:"onboardForm",children:[(0,j.jsx)("h4",{className:"section-title ",children:"SEND MESSAGE"}),(0,j.jsx)("h6",{className:"section-sub-title mb-5",children:"Please Enter Your Message"}),(0,j.jsx)("input",(0,i.Z)((0,i.Z)({},k("name")),{},{className:"form-control section-sub-title m-2 ".concat(y.name?"is-invalid":""),type:"text",placeholder:"Your Name"})),(0,j.jsx)("input",(0,i.Z)((0,i.Z)({},k("mobile")),{},{className:"form-control section-sub-title m-2 ".concat(y.mobile?"is-invalid":""),type:"text",placeholder:"Your Mobile"})),(0,j.jsx)("textarea",(0,i.Z)((0,i.Z)({},k("message")),{},{className:"form-control section-sub-title m-2 ".concat(y.message?"is-invalid":""),type:"text",placeholder:"Your Message"})),(0,j.jsxs)(o.Z,{id:"sendBtn",type:"submit",className:"border-0 btn btn-block m-2 site-btn",children:["Send",N&&"...."]})]})}),(0,j.jsx)(c.Z,{className:"m-0 p-0 Desktop",md:6,lg:6,sm:12,xs:12,children:(0,j.jsx)("iframe",{src:null===v||void 0===v?void 0:v.mapLink,frameBorder:"0",allowFullScreen:"",width:"100%",height:"100%","aria-hidden":"false",tabIndex:"0"})})]})})})})}},5668:function(e,s,a){a.r(s);var i=a(2791),t=a(4968),r=a(1369),n=a(3877),l=a(8642),c=a(1643),m=a(184);s.default=function(){return(0,i.useEffect)((function(){window.scroll(0,0)}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"Desktop",children:(0,m.jsx)(t.Z,{})}),(0,m.jsx)("div",{className:"Mobile",children:(0,m.jsx)(r.Z,{})}),(0,m.jsx)(c.Z,{}),(0,m.jsx)("div",{className:"Desktop",children:(0,m.jsx)(n.Z,{})}),(0,m.jsx)("div",{className:"Mobile",children:(0,m.jsx)(l.Z,{})})]})}}}]);
//# sourceMappingURL=668.9e96a65f.chunk.js.map