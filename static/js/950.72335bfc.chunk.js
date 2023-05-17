"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[950],{950:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),s=r(757),c=r.n(s),o=r(791),i=r(87),u=r(689),l=r(110),h=r(184),m=function(e){var t=e.onSubmit,r=e.searchQuery,n=(0,o.useState)(""),s=(0,a.Z)(n,2),c=s[0],i=s[1],u=!c;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"Searchbar",children:(0,h.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),c!==r?(c||"Enter"===e.key)&&t(c):alert("You have already selected ".concat(c,", you can change your search or continue browsing"))},children:[(0,h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:c,onChange:function(e){var t=e.target.value.trim();i(t)}}),(0,h.jsx)("button",{type:"submit",className:"SearchForm-button",disabled:u,children:(0,h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})}),""===c&&(0,h.jsxs)("p",{className:"Sorry",children:["Sorry, you need to write something.",(0,h.jsx)("br",{})," Please choose a movie."]})]})},d=(r(5),function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],d=(0,o.useState)(""),p=(0,a.Z)(d,2),f=p[0],v=p[1],x=(0,u.TH)(),b=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.h6)(t);case 3:r=e.sent,s(r),v(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching movies with query:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){f&&b(f)}),[f]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{onSubmit:function(e){(0,o.startTransition)((function(){b(e)}))},searchQuery:f}),r.length>0&&(0,h.jsx)("ul",{className:"trending-movies",children:r.map((function(e){return(0,h.jsx)(i.rU,{to:{pathname:"/movies/".concat(e.id),state:{from:x}},children:(0,h.jsxs)("li",{className:"movie-item",children:[(0,h.jsx)("img",{className:"movie-poster",alt:e.title,src:"https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path),width:"120",height:"180"}),(0,h.jsx)("p",{className:"movie-title",children:e.title})]})},e.id)}))})]})})}}]);
//# sourceMappingURL=950.72335bfc.chunk.js.map