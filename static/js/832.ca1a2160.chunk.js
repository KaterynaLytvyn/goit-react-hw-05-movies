"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[832],{4321:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(184);function c(){return(0,n.jsx)("p",{children:"Loading..."})}},8565:function(e,r,t){t.d(r,{Df:function(){return u},HI:function(){return o},WG:function(){return p}});var n=t(5861),c=t(7757),i=t.n(c),a=t(4569),s=t.n(a),u=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.themoviedb.org/3/trending/movie/day?api_key=92f9c720cb77c75804e80b01c8601d54");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=92f9c720cb77c75804e80b01c8601d54"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("https://api.themoviedb.org/3/search/movie/?api_key=92f9c720cb77c75804e80b01c8601d54&query=".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},9832:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(5861),c=t(8152),i=t(7757),a=t.n(i),s=t(2791),u=t(3504),o=t(6871),p=t(8565),l=t(4321),d="MovieDetails_container__o8VqJ",h="MovieDetails_imageWrapper__ImpNM",v=t(184);function f(e){var r=e.movie;return(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("div",{className:h,children:(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(r.poster_path),alt:r.title})}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h1",{children:[r.title," (",r.release_date.slice(0,4),")"]}),(0,v.jsxs)("p",{children:["User Score: ",10*r.vote_average,"%"]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:r.overview}),(0,v.jsx)("h2",{children:"Genres"}),r.genres.map((function(e){return e.name+" "}))]})]})}function m(){var e=(0,o.UO)().movieId,r=(0,s.useState)(null),t=(0,c.Z)(r,2),i=t[0],d=t[1],h=(0,s.useState)(!1),m=(0,c.Z)(h,2),x=m[0],j=m[1],w=(0,s.useState)(null),b=(0,c.Z)(w,2),g=b[0],_=b[1];return(0,s.useEffect)((function(){function r(){return(r=(0,n.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return j(!0),r.prev=1,r.next=4,(0,p.HI)(e);case 4:t=r.sent,console.log("movie:",t),d(t),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),_(r.t0);case 12:return r.prev=12,j(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[1,9,12,15]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[e]),(0,v.jsxs)("div",{children:[x&&(0,v.jsx)(l.Z,{}),g&&(0,v.jsxs)("p",{children:["An error occured: ",g.message]}),i&&(0,v.jsx)(f,{movie:i}),(0,v.jsx)("h4",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]}),(0,v.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=832.ca1a2160.chunk.js.map