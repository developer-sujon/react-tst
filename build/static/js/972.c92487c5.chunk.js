"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[972],{1643:function(e,t,s){var a=s(1413),n=s(9439),i=s(2791),r=s(7022),c=s(9743),o=s(2677),l=s(6149),u=s(3360),d=s(9230),m=s(4695),h=s(1134),x=s(6727),f=s(5061),p=s(1637),g=s(184);t.Z=function(){var e=(0,d.$G)().t,t=(0,f.V)(),s=(0,n.Z)(t,2),Z=s[0],j=s[1],b=j.isLoading,y=j.isSuccess,v=(0,p.z)().data,S=x.Ry({name:x.Z_().required(e("Name is required")).max(50,e("Name maximum 50 characters")),mobile:x.Z_().required(e("Mobile number is required")).matches("^(?:\\+88|88)?(01[3-9]\\d{8})$",e("Invalid mobile number")),message:x.Z_().required(e("Message is required")).max(250,e("Message maximum 250 characters"))}),R=(0,h.cI)({mode:"onChange",defaultValues:{name:"",mobile:"",message:""},resolver:(0,m.X)(S)}),C=R.register,N=R.handleSubmit,L=R.reset,k=R.formState.errors;return(0,i.useEffect)((function(){y&&L()}),[y]),(0,g.jsx)(r.Z,{className:"TopSection onboardMargin",children:(0,g.jsx)(c.Z,{className:"p-2",children:(0,g.jsx)(o.Z,{className:"shadow-sm bg-white mt-2",lg:12,md:12,sm:12,xs:12,children:(0,g.jsxs)(c.Z,{className:"text-center",children:[(0,g.jsx)(o.Z,{className:"d-flex justify-content-center",lg:6,md:6,xs:12,sm:12,children:(0,g.jsxs)(l.Z,{id:"contactForm",onReset:L,onSubmit:N((function(e){Z(e)})),className:"onboardForm",children:[(0,g.jsx)("h4",{className:"section-title ",children:"SEND MESSAGE"}),(0,g.jsx)("h6",{className:"section-sub-title mb-5",children:"Please Enter Your Message"}),(0,g.jsx)("input",(0,a.Z)((0,a.Z)({},C("name")),{},{className:"form-control section-sub-title m-2 ".concat(k.name?"is-invalid":""),type:"text",placeholder:"Your Name"})),(0,g.jsx)("input",(0,a.Z)((0,a.Z)({},C("mobile")),{},{className:"form-control section-sub-title m-2 ".concat(k.mobile?"is-invalid":""),type:"text",placeholder:"Your Mobile"})),(0,g.jsx)("textarea",(0,a.Z)((0,a.Z)({},C("message")),{},{className:"form-control section-sub-title m-2 ".concat(k.message?"is-invalid":""),type:"text",placeholder:"Your Message"})),(0,g.jsxs)(u.Z,{id:"sendBtn",type:"submit",className:"border-0 btn btn-block m-2 site-btn",children:["Send",b&&"...."]})]})}),(0,g.jsx)(o.Z,{className:"m-0 p-0 Desktop",md:6,lg:6,sm:12,xs:12,children:(0,g.jsx)("iframe",{src:null===v||void 0===v?void 0:v.mapLink,frameBorder:"0",allowFullScreen:"",width:"100%",height:"100%","aria-hidden":"false",tabIndex:"0"})})]})})})})}},2972:function(e,t,s){s.r(t),s.d(t,{default:function(){return N}});var a=s(5671),n=s(3144),i=s(136),r=s(9388),c=s(2791),o=s(4968),l=s(1369),u=(s(1643),s(3877)),d=s(8642),m=s(981),h=s(9743),x=s(2677),f=s(3360),p=s(7022),g=s(1087),Z=s(1243),j=function(){function e(){(0,a.Z)(this,e)}return(0,n.Z)(e,null,[{key:"ProductListByRemark",value:function(e){return this.BaseURL+"ProductListByRemark/"+e}},{key:"ProductListBySubCategory",value:function(e,t){return this.BaseURL+"ProductListBySubCategory/"+e+"/"+t}},{key:"ProductListByCategory",value:function(e){return this.BaseURL+"product-list-by-category/"+e}},{key:"ProductDetails",value:function(e){return this.BaseURL+"productDetails/"+e}},{key:"SuggestedProducts",value:function(e){return this.BaseURL+"SuggestedProducts/"+e}},{key:"ProductSearch",value:function(e){return this.BaseURL+"ProductSearch/"+e}},{key:"GetReview",value:function(e){return this.BaseURL+"getReview/"+e}},{key:"GetCartList",value:function(e){return this.BaseURL+"GetCartList/"+e}},{key:"CountPriceItem",value:function(e){return this.BaseURL+"CountPriceItem/"+e}},{key:"CountTotalPrice",value:function(e){return this.BaseURL+"CountTotalPrice/"+e}},{key:"DeleteItem",value:function(e){return this.BaseURL+"DeleteItem/"+e}}]),e}();j.BaseURL="http://127.0.0.1:8000/api/",j.VisitorDetails=j.BaseURL+"GetVisitorDetails",j.ContactDetails=j.BaseURL+"PostContactDetails",j.SendSiteInfo=j.BaseURL+"SendSiteInfo",j.SendCategoryDetails=j.BaseURL+"SendCategoryDetails",j.SendSliderInfo=j.BaseURL+"SendSliderInfo",j.featuredProducts=j.BaseURL+"featuredProducts",j.specialCollection=j.BaseURL+"special_collection",j.newArrival=j.BaseURL+"new_arrivals",j.notification_history=j.BaseURL+"notification_history",j.AddToCart=j.BaseURL+"AddToCart",j.onAdd=j.BaseURL+"onAdd",j.onSubtract=j.BaseURL+"onSubtract";var b=j,y=function(){function e(){(0,a.Z)(this,e)}return(0,n.Z)(e,null,[{key:"setSession",value:function(e,t){sessionStorage.setItem(e,t)}},{key:"getSession",value:function(e){return sessionStorage.getItem(e)}},{key:"removeSession",value:function(e){return sessionStorage.removeItem(e)}}]),e}(),v=s(6960),S=s(184),R=function(e){(0,i.Z)(s,e);var t=(0,r.Z)(s);function s(){var e;return(0,a.Z)(this,s),(e=t.call(this)).onDelete=function(t){var s=t.target.getAttribute("data-id");Z.Z.post(b.DeleteItem(s)).then((function(t){200==t.status&&1==t.data?(e.setState({RemoveStatus:!0}),v.Z.success("Item Successfully Removed!")):v.Z.error("Error!")})).catch()},e.DeleteRefresh=function(){e.state.RemoveStatus},e.onAdd=function(t){var s=t.target.getAttribute("data-id"),a=t.target.getAttribute("data-quantity"),n=t.target.getAttribute("data-unit"),i=parseInt(a)+1,r=n*i,c=new FormData;c.append("id",s),c.append("newQuantity",i),c.append("newTotal",r),Z.Z.post(b.onAdd,c).then((function(t){1==t.data&&e.setState({OnAddRefresh:!0})})).catch()},e.onSubtract=function(t){var s=t.target.getAttribute("data-id"),a=t.target.getAttribute("data-quantity"),n=t.target.getAttribute("data-unit"),i=parseInt(a)-1,r=n*i,c=new FormData;c.append("id",s),c.append("newQuantity",i),c.append("newTotal",r),Z.Z.post(b.onSubtract,c).then((function(t){1==t.data&&e.setState({OnDeleteRefresh:!0})})).catch()},e.OnAddRefresh=function(){e.state.OnAddRefresh},e.OnDeleteRefresh=function(){e.state.OnDeleteRefresh},e.state={CartData:[],CartCount:[],CartTotalPrice:"",CartDeleteId:"",RemoveStatus:!1,OnAddRefresh:!1,OnDeleteRefresh:!1},e}return(0,n.Z)(s,[{key:"componentDidMount",value:function(){var e=this;Z.Z.get(b.GetCartList(y.getSession("phone"))).then((function(t){200==t.status&&e.setState({CartData:t.data})})).catch(),Z.Z.get(b.CountPriceItem(y.getSession("phone"))).then((function(t){200==t.status&&e.setState({CartCount:t.data})})).catch(),Z.Z.get(b.CountTotalPrice(y.getSession("phone"))).then((function(t){200==t.status&&e.setState({CartTotalPrice:t.data})})).catch()}},{key:"render",value:function(){var e=this,t=this.state.CartData.map((function(t,s){return(0,S.jsx)("div",{children:(0,S.jsx)(m.Z,{children:(0,S.jsx)(m.Z.Body,{children:(0,S.jsxs)(h.Z,{children:[(0,S.jsx)(x.Z,{xl:3,lg:3,md:3,sm:6,xs:6,children:(0,S.jsx)("img",{className:"w-100",height:"auto",src:t.img,alt:""})}),(0,S.jsxs)(x.Z,{xl:6,lg:6,md:6,sm:6,xs:6,children:[(0,S.jsx)("h5",{className:"details-section-title",children:t.product_name}),(0,S.jsxs)("h6",{className:"section-sub-title",children:["Quantity: ",t.product_quantity]}),(0,S.jsxs)("h6",{className:"section-sub-title",children:["Price= ",t.product_quantity," X ",t.unit_price," ="," ",t.total_price]})]}),(0,S.jsxs)(x.Z,{className:"mt-3",xl:3,lg:3,md:3,sm:12,xs:12,children:[(0,S.jsx)(h.Z,{children:(0,S.jsx)(x.Z,{lg:12,md:12,sm:12,xs:12,children:(0,S.jsxs)(h.Z,{className:"justify-content-center",children:[(0,S.jsx)(x.Z,{lg:2,md:2,sm:2,xs:2,children:(0,S.jsx)(f.Z,{"data-id":t.id,"data-quantity":t.product_quantity,"data-total":t.total_price,"data-unit":t.unit_price,onClick:e.onAdd,children:"+"})}),(0,S.jsx)(x.Z,{lg:5,md:2,sm:2,xs:2,children:(0,S.jsx)("input",{value:t.product_quantity,type:"number",className:"form-control text-center"})}),(0,S.jsx)(x.Z,{className:"p-0 m-0",lg:2,md:2,sm:2,xs:2,children:(0,S.jsx)(f.Z,{"data-id":t.id,"data-quantity":t.product_quantity,"data-total":t.total_price,"data-unit":t.unit_price,onClick:e.onSubtract,className:"btn btn-danger",children:"-"})})]})})}),(0,S.jsxs)(f.Z,{"data-id":t.id,onClick:e.onDelete,className:"btn btn-block mt-3 site-btn",children:[" ",(0,S.jsx)("i",{className:"fas fa-trash-alt"}),"Remove"]})]})]})})})})}));return(0,S.jsx)(c.Fragment,{children:(0,S.jsx)(p.Z,{className:"mt-5",children:(0,S.jsxs)(h.Z,{children:[(0,S.jsx)(x.Z,{className:"p-1",lg:12,md:12,sm:12,xs:12,xl:12,children:(0,S.jsx)(h.Z,{children:(0,S.jsx)(x.Z,{children:(0,S.jsx)(m.Z,{children:(0,S.jsxs)(m.Z.Body,{className:"cart-body-background",children:[(0,S.jsx)("p",{className:"cart-title",children:"PRODUCT CART LIST"}),(0,S.jsxs)("h5",{className:"cart-sub-title",children:["TOTAL PRICE: ",this.state.CartTotalPrice]}),(0,S.jsxs)("h5",{className:"cart-sub-title",children:["TOTAL ITEM: ",this.state.CartCount]}),(0,S.jsx)(g.rU,{to:"/order",children:(0,S.jsxs)(f.Z,{className:"cart-checkout-btn",children:[(0,S.jsx)("i",{className:"fas fa-shopping-cart "})," CHECKOUT"]})})]})})})})}),(0,S.jsx)(x.Z,{className:"p-1",lg:12,md:12,sm:12,xs:12,xl:12,children:t}),this.DeleteRefresh(),this.OnAddRefresh(),this.OnDeleteRefresh()]})})})}}]),s}(c.Component),C=function(e){(0,i.Z)(s,e);var t=(0,r.Z)(s);function s(){return(0,a.Z)(this,s),t.apply(this,arguments)}return(0,n.Z)(s,[{key:"componentDidMount",value:function(){window.scroll(0,0)}},{key:"render",value:function(){return(0,S.jsxs)(c.Fragment,{children:[(0,S.jsx)("div",{className:"Desktop",children:(0,S.jsx)(o.Z,{})}),(0,S.jsx)("div",{className:"Mobile",children:(0,S.jsx)(l.Z,{})}),(0,S.jsx)(R,{}),(0,S.jsx)("div",{className:"Desktop",children:(0,S.jsx)(u.Z,{})}),(0,S.jsx)("div",{className:"Mobile",children:(0,S.jsx)(d.Z,{})})]})}}]),s}(c.Component),N=C}}]);
//# sourceMappingURL=972.c92487c5.chunk.js.map