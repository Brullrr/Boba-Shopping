(this["webpackJsonpboba-shopping"]=this["webpackJsonpboba-shopping"]||[]).push([[0],[,,,function(e,t,a){e.exports={CheckoutContainer:"CheckoutPage_CheckoutContainer__3GGBz",ItemizedHolder:"CheckoutPage_ItemizedHolder__FIzJh",ElementHolder:"CheckoutPage_ElementHolder__1Y8L5",TotalDiv:"CheckoutPage_TotalDiv__1Ijf0",TotalWords:"CheckoutPage_TotalWords__26vE5",UserInformationForm:"CheckoutPage_UserInformationForm__2H5Wo",CheckoutInput:"CheckoutPage_CheckoutInput__2twMB",SubmitButton:"CheckoutPage_SubmitButton__hT-HL"}},function(e,t,a){e.exports={CartModalContainer:"CartModal_CartModalContainer__29S-n",fadeIn:"CartModal_fadeIn__28Eg0",CartModalHolder:"CartModal_CartModalHolder__3trQV",Backdrop:"CartModal_Backdrop__Vxg2_",CheckoutButton:"CartModal_CheckoutButton__15_3T",ElementHolder:"CartModal_ElementHolder__2vB7o",TotalDiv:"CartModal_TotalDiv__brCeN",TotalWords:"CartModal_TotalWords__1j7C6"}},,,,,,function(e,t,a){e.exports={ProductContainer:"Product_ProductContainer__uKitn",ProductImageHolder:"Product_ProductImageHolder__3mIza",ProductImage:"Product_ProductImage__3C9kn",ProductName:"Product_ProductName__dhVQ0",ProductPrice:"Product_ProductPrice__rfsCk",ProductQandA:"Product_ProductQandA__3mGLo",QuantityInput:"Product_QuantityInput__3Blvl",AddButton:"Product_AddButton__Sf__y"}},function(e,t,a){e.exports={HeaderContainer:"Header_HeaderContainer__1G-5Q",HomeButton:"Header_HomeButton__3CtaN",HomeImage:"Header_HomeImage__5Fg2k",BrowseButton:"Header_BrowseButton__1vK20",CartButton:"Header_CartButton__Ur9qw",CartImage:"Header_CartImage__3COoR",CartNumber:"Header_CartNumber__2-wl8"}},,,,function(e,t,a){e.exports={HomePageContainer:"HomePage_HomePageContainer__ZqV7N",Strip:"HomePage_Strip__OO0D6",NewBoba:"HomePage_NewBoba__1Esh0",NewImg:"HomePage_NewImg__1GQ6T",BobaShoppingIcon:"HomePage_BobaShoppingIcon__3Vx8x"}},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/BobaShopping.cdda4d31.PNG"},,,,function(e,t,a){e.exports={Input:"CheckoutInput_Input__1BR96",Label:"CheckoutInput_Label__3JOdL"}},,,,function(e,t,a){e.exports={ShoppingContainer:"ShoppingPage_ShoppingContainer__2ZIv1"}},function(e,t,a){e.exports=a.p+"static/media/Cart.af5206e7.PNG"},function(e,t,a){e.exports=a.p+"static/media/HomeIcon.ebdea7e0.png"},,function(e,t,a){e.exports=a.p+"static/media/BeerBoba.cac5ed2b.png"},function(e,t,a){e.exports=a.p+"static/media/EiffelBoba.11371db6.png"},function(e,t,a){e.exports=a.p+"static/media/FancyBoba.e1a8316f.png"},function(e,t,a){e.exports=a.p+"static/media/IceCreamBoba.f7df94d3.png"},function(e,t,a){e.exports=a.p+"static/media/MasonBoba.9347ff1e.png"},function(e,t,a){e.exports=a.p+"static/media/MysteryBoba.b56d4c40.png"},function(e,t,a){e.exports=a.p+"static/media/PizzaBoba.a7147acc.png"},function(e,t,a){e.exports=a.p+"static/media/PunchingBoba.643113a0.png"},function(e,t,a){e.exports=a.p+"static/media/RefreshingBoba.66d0cbbf.png"},function(e,t,a){e.exports=a.p+"static/media/TicTacToba.176decd4.png"},function(e,t,a){e.exports=a.p+"static/media/MysteryBoba2.a5c0ccf5.png"},function(e,t,a){e.exports=a.p+"static/media/NEW.eff2278a.png"},,,function(e,t,a){e.exports=a(61)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=(a(54),a(55),a(31)),i=a.n(l),u=a(11),m=a.n(u),d=a(32),s=a.n(d),p=a(33),g=a.n(p),_=a(6),f=a(9),C=Object(_.b)((function(e){return{isCartModalOpen:e.scrtmdlpnrdcr.isCartModalOpen,cart:e.crtrdcr.cart}}),(function(e){return{toggleCartModal:function(){return e({type:"TOGGLE_CART_MODAL"})}}}))((function(e){var t=0;return e.cart.forEach((function(e){t+=e.Quantity})),console.log("[Header.js]  userQUant:   "+t),t>=100&&(t="\u221e"),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:m.a.HeaderContainer},r.a.createElement(f.c,{to:"/"},r.a.createElement("button",{className:m.a.HomeButton},r.a.createElement("img",{className:m.a.HomeImage,src:g.a,alt:"HomeImage"}))),r.a.createElement("div",null),r.a.createElement(f.c,{to:"/Browse"},r.a.createElement("button",{className:m.a.BrowseButton},"\u212c\ud835\udcc7\u2134\ud835\udccc\ud835\udcc8\u212f")),r.a.createElement("div",null),r.a.createElement("button",{onClick:e.toggleCartModal,className:m.a.CartButton},r.a.createElement("p",{className:m.a.CartNumber},t),r.a.createElement("img",{className:m.a.CartImage,src:s.a,alt:"CartImage"}))))})),E=a(35),b=a.n(E),N=a(36),P=a.n(N),h=a(37),y=a.n(h),v=a(38),B=a.n(v),I=a(39),T=a.n(I),k=a(40),H=a.n(k),M=a(41),S=a.n(M),O=a(42),Q=a.n(O),w=a(43),x=a.n(w),A=a(44),F=a.n(A),j=[{productName:"Beer Boba",productPrice:"4.50",productSource:b.a,key:"1"},{productName:"Eiffel Boba",productPrice:"5.00",productSource:P.a,key:"2"},{productName:"Fancy Boba",productPrice:"6.50",productSource:y.a,key:"3"},{productName:"IceCream Boba",productPrice:"8.50",productSource:B.a,key:"4"},{productName:"Mason Boba",productPrice:"3.00",productSource:T.a,key:"5"},{productName:"Mystery Boba",productPrice:"5.00",productSource:H.a,key:"6"},{productName:"Pizza Boba",productPrice:"8.00",productSource:S.a,key:"7"},{productName:"Punching Boba",productPrice:"4.50",productSource:Q.a,key:"8"},{productName:"Refreshing Boba",productPrice:"6.00",productSource:x.a,key:"9"},{productName:"Tic-Tac-Toba",productPrice:"7.50",productSource:F.a,key:"10"}],L=a(48),G=a(10),W=a.n(G),R=function(e){var t=Object(n.useState)("QNTY"),a=Object(L.a)(t,2),o=a[0],c=a[1],l=null;0===o&&(l="1px solid red");return r.a.createElement("div",{className:W.a.ProductContainer},r.a.createElement("div",{className:W.a.ProductImageHolder},r.a.createElement("img",{className:W.a.ProductImage,src:e.source})),r.a.createElement("p",{className:W.a.ProductName},e.name),r.a.createElement("div",null),r.a.createElement("div",{className:W.a.ProductQandA},r.a.createElement("p",{className:W.a.ProductPrice},"$",e.price),r.a.createElement("input",{className:W.a.QuantityInput,placeholder:"Qnty",type:"number",min:"0",max:"10",value:o,onChange:function(e){var t=e.target.value>=11?10:e.target.value;t<=0&&(t=0),c(t)},style:{border:l}}),r.a.createElement("button",{className:W.a.AddButton,onClick:function(){o<=0||o>=11||"QNTY"===o?alert("Please add a quantity."):e.pushToCart(e.name,o)}}," Add to cart ")))},z=Object(_.b)((function(e){return{}}),(function(e){return{pushToCart:function(t,a){return e({type:"PUSH_TO_CART",name:t,quant:a})}}}))((function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(C,null),r.a.createElement("div",{className:i.a.ShoppingContainer},j.map((function(t){return r.a.createElement(n.Fragment,null,r.a.createElement("div",null),r.a.createElement(R,{name:t.productName,price:t.productPrice,keys:t.key,source:t.productSource,pushToCart:e.pushToCart}),r.a.createElement("div",null))}))))})),D=a(4),U=a.n(D),q=Object(_.b)((function(e){return{isCartModalOpen:e.scrtmdlpnrdcr.isCartModalOpen,cart:e.crtrdcr.cart}}),(function(e){return{toggleCartModal:function(){return e({type:"TOGGLE_CART_MODAL"})}}}))((function(e){var t=e.cart,a=0;t.forEach((function(e){a+=e.Quantity*parseFloat(e.Price,10)}));var o=r.a.createElement("div",{className:U.a.ElementHolder},r.a.createElement("p",{className:U.a.ItemName},"Product"),r.a.createElement("p",{className:U.a.ItemAmount},"Quantity"),r.a.createElement("p",{className:U.a.ItemCostTotal},"Product Total")),c=r.a.createElement("div",{className:U.a.TotalDiv},r.a.createElement("p",{className:U.a.TotalWords},"Total:"),r.a.createElement("p",{className:U.a.TotalCost},"$",a,a.toString().includes(".")?0:null));return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:U.a.Backdrop,onClick:e.toggleCartModal}),r.a.createElement("div",{className:U.a.CartModalContainer},r.a.createElement("div",{className:U.a.CartModalHolder},a>=1?o:null,t.map((function(e){if(e.Quantity>=1)return console.log(e.Quantity*parseFloat(e.Price).toString()),r.a.createElement("div",{className:U.a.ElementHolder},r.a.createElement("p",{className:U.a.ItemName},e.ProductName),r.a.createElement("p",{className:U.a.ItemAmount},e.Quantity),r.a.createElement("p",{className:U.a.ItemCostTotal},"$",e.Quantity*parseFloat(e.Price),(e.Quantity*parseFloat(e.Price)+0).toString().includes(".")?0:null," "))})),a>=1?c:null),a>=1?r.a.createElement(f.c,{to:"/Checkout"},r.a.createElement("button",{className:U.a.CheckoutButton},"Checkout")):r.a.createElement("p",null,"Your cart is empty.")))})),$=a(15),V=a.n($),J=a(45),Y=a.n(J),K=a(46),Z=a.n(K),X=a(23),ee=a.n(X),te=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(C,null),r.a.createElement("img",{className:V.a.BobaShoppingIcon,alt:"BobaShopppingIcon",src:ee.a}),r.a.createElement("div",{className:V.a.HomePageContainer},r.a.createElement("img",{className:V.a.NewImg,alt:"NEW",src:Z.a}),r.a.createElement("img",{className:V.a.NewBoba,src:Y.a,alt:"MysteryBoba"}),r.a.createElement("p",{className:V.a.Strip},"Mystery Boba!")))},ae=a(1),ne=a(3),re=a.n(ne),oe=a(27),ce=a.n(oe),le=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:e.Type,className:ce.a.Input,placeholder:e.Placeholder,required:!0}),r.a.createElement("p",{className:ce.a.Label},e.Placeholder))},ie=Object(_.b)((function(e){return{cart:e.crtrdcr.cart}}),(function(e){return{toggleCartModal:function(){return e({type:"TOGGLE_CART_MODAL"})}}}))((function(e){e.toggleCartModal();var t=e.cart,a=0;t.forEach((function(e){a+=e.Quantity*parseFloat(e.Price,10)}));var o=r.a.createElement("div",{className:re.a.ElementHolder},r.a.createElement("p",{className:re.a.ItemName},"Product"),r.a.createElement("p",{className:re.a.ItemAmount},"Quantity"),r.a.createElement("p",{className:re.a.ItemCostTotal},"Product Total")),c=r.a.createElement("div",{className:re.a.TotalDiv},r.a.createElement("p",{className:re.a.TotalWords},"Total:"),r.a.createElement("p",{className:re.a.TotalCost},"$",a,a.toString().includes(".")?0:null)),l=r.a.createElement("div",{className:re.a.CheckoutContainer},r.a.createElement("div",{className:re.a.ItemizedHolder},a>=1?o:null,t.map((function(e){if(e.Quantity>=1)return r.a.createElement("div",{className:re.a.ElementHolder},r.a.createElement("p",{className:re.a.ItemName},e.ProductName),r.a.createElement("p",{className:re.a.ItemAmount},e.Quantity),r.a.createElement("p",{className:re.a.ItemCostTotal},"$",e.Quantity*parseFloat(e.Price),(e.Quantity*parseFloat(e.Price)+0).toString().includes(".")?0:null," "))})),a>=1?c:null),r.a.createElement("div",{className:re.a.UserInformationForm},[{type:"input",placeholder:"Email"},{type:"text",placeholder:"Country"},{type:"text",placeholder:"State"},{type:"text",placeholder:"City"},{type:"text",placeholder:"Address"},{type:"text",placeholder:"Name on Card"},{type:"number",placeholder:"Number on Card"},{type:"number",placeholder:"CSC on Card"}].map((function(e){return r.a.createElement("div",{className:re.a.CheckoutInput},r.a.createElement(le,{Type:e.type,Placeholder:e.placeholder}))})),r.a.createElement("button",{className:re.a.SubmitButton},"Submit Order")));return a<=0&&(l=r.a.createElement("div",{className:re.a.CheckoutContainer},"Nothing in cart.")),r.a.createElement(n.Fragment,null,r.a.createElement(C,null),l)})),ue=Object(_.b)((function(e){return{isCartModalOpen:e.scrtmdlpnrdcr.isCartModalOpen}}),(function(e){return{toggleCartModal:function(){return e({type:"TOGGLE_CART_MODAL"})}}}))((function(e){var t=r.a.createElement(z,null),a=e.isCartModalOpen?r.a.createElement(q,{backdropClicked:e.toggleCartModal}):null,n=r.a.createElement(te,null),o=r.a.createElement(ie,null);return r.a.createElement(f.b,null,r.a.createElement("div",null,a),r.a.createElement(ae.a,{path:"/Browse",exact:!0,render:function(){return r.a.createElement("div",null,t)}}),r.a.createElement(ae.a,{path:"/",exact:!0,render:function(){return r.a.createElement("div",null,n)}}),r.a.createElement(ae.a,{path:"/Checkout",exact:!0,render:function(){return r.a.createElement("div",null,o)}}))}));var me=function(){return r.a.createElement(ue,null)},de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var pe=a(17),ge=a(14),_e={isCartModalOpen:!1},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;return"TOGGLE_CART_MODAL"===t.type?Object(ge.a)(Object(ge.a)({},e),{},{isCartModalOpen:!e.isCartModalOpen}):e},Ce=a(47),Ee={cart:[{ProductName:"Beer Boba",Quantity:0,Price:4.5},{ProductName:"Eiffel Boba",Quantity:0,Price:5},{ProductName:"Fancy Boba",Quantity:0,Price:6.5},{ProductName:"IceCream Boba",Quantity:0,Price:8.5},{ProductName:"Mason Boba",Quantity:0,Price:3},{ProductName:"Mystery Boba",Quantity:0,Price:5},{ProductName:"Pizza Boba",Quantity:0,Price:8},{ProductName:"Punching Boba",Quantity:0,Price:4.5},{ProductName:"Refreshing Boba",Quantity:0,Price:6},{ProductName:"Tic-Tac-Toba",Quantity:0,Price:7.5}]},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;if("PUSH_TO_CART"===t.type){var a=Object(Ce.a)(e.cart),n=parseInt(t.quant,10);return a.forEach((function(e){e.ProductName===t.name&&(e.Quantity=e.Quantity+n)})),Object(ge.a)(Object(ge.a)({},e),{},{cart:a})}return e},Ne=Object(pe.b)({scrtmdlpnrdcr:fe,crtrdcr:be}),Pe=Object(pe.c)(Ne);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{basename:"/Boba-Shopping"},r.a.createElement(_.a,{store:Pe},r.a.createElement(me,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Boba-Shopping",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Boba-Shopping","/service-worker.js");de?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):se(t,e)}))}}()}],[[49,1,2]]]);
//# sourceMappingURL=main.68dc91fa.chunk.js.map