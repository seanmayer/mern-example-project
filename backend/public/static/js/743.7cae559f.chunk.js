"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[743],{9743:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var t=r(5861),c=r(885),a=r(7757),s=r.n(a),o=r(2791),i=r(9271),l=r(3373),u=r(3999),d=r(2921),h=r(184),f=function(e){var n=(0,o.useRef)(),r=e.center,t=e.zoom;return(0,o.useEffect)((function(){var e=new window.google.maps.Map(n.current,{center:r,zoom:t});new window.google.maps.Marker({position:r,map:e})}),[r,t]),(0,h.jsx)("div",{ref:n,className:"map ".concat(e.className),style:e.style})},m=r(5434),x=r(9895),p=r(3108),j=r(9508),v=function(e){var n=(0,j.x)(),r=n.isLoading,a=n.error,i=n.sendRequest,v=n.clearError,g=(0,o.useContext)(p.V),Z=(0,o.useState)(!1),C=(0,c.Z)(Z,2),b=C[0],k=C[1],E=(0,o.useState)(!1),w=(0,c.Z)(E,2),N=w[0],_=w[1],y=function(){return k(!1)},D=function(){_(!1)},S=function(){var n=(0,t.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _(!1),n.prev=1,n.next=4,i("https://xmernx.herokuapp.com/api"+"/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+g.token});case 4:e.onDelete(e.id),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(){return n.apply(this,arguments)}}();return(0,h.jsxs)(o.Fragment,{children:[(0,h.jsx)(m.Z,{error:a,onClear:v}),(0,h.jsx)(d.Z,{show:b,onCancel:y,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,h.jsx)(u.Z,{onClick:y,children:"CLOSE"}),children:(0,h.jsx)("div",{className:"map-container",children:(0,h.jsx)(f,{center:e.coordinates,zoom:16})})}),(0,h.jsx)(d.Z,{show:N,onCancel:D,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,h.jsxs)(o.Fragment,{children:[(0,h.jsx)(u.Z,{inverse:!0,onClick:D,children:"CANCEL"}),(0,h.jsx)(u.Z,{danger:!0,onClick:S,children:"DELETE"})]}),children:(0,h.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it cannot be undone thereafter."})}),(0,h.jsx)("li",{className:"place-item",children:(0,h.jsxs)(l.Z,{className:"place-item__content",children:[r&&(0,h.jsx)(x.Z,{asOverlay:!0}),(0,h.jsx)("div",{className:"place-item__image",children:(0,h.jsx)("img",{src:"".concat("https://xmernx.herokuapp.com","/").concat(e.image),alt:e.title})}),(0,h.jsxs)("div",{className:"place-item__info",children:[(0,h.jsx)("h2",{children:e.title}),(0,h.jsx)("h3",{children:e.address}),(0,h.jsx)("p",{children:e.description})]}),(0,h.jsxs)("div",{className:"place-item__actions",children:[(0,h.jsx)(u.Z,{inverse:!0,onClick:function(){return k(!0)},children:"VIEW ON MAP"}),g.userId===e.creatorId&&(0,h.jsx)(u.Z,{to:"/places/".concat(e.id),children:"EDIT"}),g.userId===e.creatorId&&(0,h.jsx)(u.Z,{danger:!0,onClick:function(){_(!0)},children:"DELETE"})]})]})})]})},g=function(e){return 0===e.items.length?(0,h.jsx)("div",{className:"place-list center",children:(0,h.jsxs)(l.Z,{children:[(0,h.jsx)("h2",{children:"No places found. Maybe create one?"}),(0,h.jsx)(u.Z,{to:"/places/new",children:"Share Place"})]})}):(0,h.jsx)("ul",{className:"place-list",children:e.items.map((function(n){return(0,h.jsx)(v,{id:n.id,image:n.image,title:n.title,description:n.description,address:n.address,creatorId:n.creator,coordinates:n.location,onDelete:e.onDeletePlace},n.id)}))})},Z=function(){var e=(0,o.useState)(),n=(0,c.Z)(e,2),r=n[0],a=n[1],l=(0,j.x)(),u=l.isLoading,d=l.error,f=l.sendRequest,p=l.clearError,v=(0,i.UO)().userId;(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("https://xmernx.herokuapp.com/api"+"/places/user/".concat(v));case 3:n=e.sent,a(n.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[f,v]);return(0,h.jsxs)(o.Fragment,{children:[(0,h.jsx)(m.Z,{error:d,onClear:p}),u&&(0,h.jsx)("div",{className:"center",children:(0,h.jsx)(x.Z,{})}),!u&&r&&(0,h.jsx)(g,{items:r,onDeletePlace:function(e){a((function(n){return n.filter((function(n){return n.id!==e}))}))}})]})}},3999:function(e,n,r){r.d(n,{Z:function(){return a}});r(2791);var t=r(1523),c=r(184),a=function(e){return e.href?(0,c.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,c.jsx)(t.rU,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,c.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}},3373:function(e,n,r){r.d(n,{Z:function(){return c}});r(2791);var t=r(184),c=function(e){return(0,t.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},5434:function(e,n,r){r(2791);var t=r(2921),c=r(3999),a=r(184);n.Z=function(e){return(0,a.jsx)(t.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,a.jsx)(c.Z,{onClick:e.onClear,children:"Okay"}),children:(0,a.jsx)("p",{children:e.error})})}},2921:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(1413),c=r(2791),a=r(4164),s=r(4595),o=r(9422),i=r(184),l=function(e){var n=(0,i.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,i.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,i.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,i.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return a.createPortal(n,document.getElementById("modal-hook"))},u=function(e){return(0,i.jsxs)(c.Fragment,{children:[e.show&&(0,i.jsx)(o.Z,{onClick:e.onCancel}),(0,i.jsx)(s.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(l,(0,t.Z)({},e))})]})}},9508:function(e,n,r){r.d(n,{x:function(){return i}});var t=r(5861),c=r(885),a=r(7757),s=r.n(a),o=r(2791),i=function(){var e=(0,o.useState)(!1),n=(0,c.Z)(e,2),r=n[0],a=n[1],i=(0,o.useState)(),l=(0,c.Z)(i,2),u=l[0],d=l[1],h=(0,o.useRef)([]),f=(0,o.useCallback)(function(){var e=(0,t.Z)(s().mark((function e(n){var r,t,c,o,i,l,u=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",t=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{},a(!0),o=new AbortController,h.current.push(o),e.prev=6,e.next=9,fetch(n,{method:r,body:t,headers:c,signal:o.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(l=e.sent,h.current=h.current.filter((function(e){return e!==o})),i.ok){e.next=16;break}throw new Error(l.message);case 16:return a(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(6),d(e.t0.message),a(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(n){return e.apply(this,arguments)}}(),[]);return(0,o.useEffect)((function(){return function(){h.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:r,error:u,sendRequest:f,clearError:function(){d(null)}}}}}]);
//# sourceMappingURL=743.7cae559f.chunk.js.map