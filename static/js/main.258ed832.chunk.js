(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(80)},35:function(e,t,a){},37:function(e,t,a){},61:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(23),o=a.n(c),r=a(9),i=a(13),s=a(5);a(35);var m=function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:""}),l.a.createElement("img",{className:"avatar",src:"https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg",alt:"avatar"}))},u=(a(37),Object(n.createContext)()),d="99711685ac4574bc30c9b4794ec7bb1a",v="https://image.tmdb.org/t/p/original",g=a(7),E=a(24),b=a.n(E).a.create({baseURL:"https://api.themoviedb.org/3"});a(61);var p=function(){var e=Object(n.useContext)(u),t=(e.addToMylist,e.myList),a=e.removeFromMylist;console.log(t);var c=Object(n.useState)(""),o=Object(s.a)(c,2),r=o[0],i=o[1];return l.a.createElement("div",{className:"container"},r&&l.a.createElement("div",{className:"youtube"},l.a.createElement(g.a,{videoId:r.key,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}),l.a.createElement("div",{className:"btnDiv"},l.a.createElement("button",{className:"closeBtn",onClick:function(){i("")}},"Close trailer"))),t.length>0?t.map(function(e){return l.a.createElement("div",{className:"thumbNail"},l.a.createElement("div",null,l.a.createElement("h3",null,e.name),l.a.createElement("img",{onClick:function(){return t=e.id,void b.get("/movie/".concat(t,"/videos?api_key=").concat(d,"&language=en-US")).then(function(e){0!==e.data.results.length&&(i(e.data.results[0]),console.log(e.data))});var t},className:"mylistImage",src:"".concat(v+e.backdrop_path),alt:"loading images"})),l.a.createElement("p",{className:"mylistDescription"},e.overview),l.a.createElement("div",null,l.a.createElement("button",{className:"btn",onClick:function(){a(e.id)}},"Remove From My List")))}):l.a.createElement("h1",null,"My list is empty! "))},f=a(0);a(76);var h=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],r=Object(n.useContext)(u),i=r.addToMylist,m=r.myList,E=r.removeFromMylist,p=Object(n.useState)([]),f=Object(s.a)(p,2),h=f[0],y=f[1];return Object(n.useEffect)(function(){b.get(e.url).then(function(e){y(e.data.results),console.log(e.data)})},[]),l.a.createElement("div",{className:"rows"},l.a.createElement("h2",null,e.title),l.a.createElement("div",{className:"posters"},h.map(function(t){return l.a.createElement("div",{className:"moviesPosters"},l.a.createElement("img",{onClick:function(){return e=t.id,void b.get("/movie/".concat(e,"/videos?api_key=").concat(d,"&language=en-US")).then(function(e){0!==e.data.results.length&&(o(e.data.results[0]),console.log(e.data))});var e},className:e.isSmall?"posterImage-small":"posterImage",src:"".concat(v+t.backdrop_path),alt:"loading images"}),(a=t.id,m.some(function(e){return e.id===a})?l.a.createElement("button",{className:"removeMyListBtn",onClick:function(){return E(t.id)}},"Remove From My List"):l.a.createElement("button",{className:"myListBtn",onClick:function(){return i(t)}},"Add to My List")));var a})),c&&l.a.createElement("div",{className:"youtube"},l.a.createElement(g.a,{videoId:c.key,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}),l.a.createElement("div",{className:"btnDiv"},l.a.createElement("button",{className:"closeBtn",onClick:function(){o("")}},"Close trailer"))),console.log(c))},y="discover/movie?api_key=".concat(d,"&with_genres=28"),N="discover/movie?api_key=".concat(d,"&with_genres=35"),k="discover/movie?api_key=".concat(d,"&with_genres=27"),w="discover/movie?api_key=".concat(d,"&with_genres=10749"),_="discover/movie?api_key=".concat(d,"&with_genres=99"),j="discover/tv?api_key=".concat(d,"&with_networks=213");a(78);var O=function(){var e=Object(f.f)(),t=Math.floor(20*Math.random()),a=Object(n.useState)(),c=Object(s.a)(a,2),o=c[0],r=c[1];Object(n.useEffect)(function(){b.get("trending/all/week?api_key=".concat(d,"&language=en-US")).then(function(e){r(e.data.results[t])})},[]);var i=Object(n.useState)(""),m=Object(s.a)(i,2),u=m[0],E=m[1];return l.a.createElement("div",{style:{backgroundImage:"url(".concat(o?v+o.backdrop_path:"",")")},className:"banner"},u&&l.a.createElement("div",{className:"cover-image-youtube"},l.a.createElement(g.a,{videoId:u.key,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}),l.a.createElement("div",{className:"btnDiv"},l.a.createElement("button",{className:"closeBtn",onClick:function(){E("")}},"Close trailer"))),l.a.createElement("div",{className:"content"},l.a.createElement("h1",{className:"title"},o?o.title:""),l.a.createElement("div",{className:"banner-buttos"},l.a.createElement("button",{className:"button",onClick:function(){return e=o.id,void b.get("/movie/".concat(e,"/videos?api_key=").concat(d,"&language=en-US")).then(function(e){0!==e.data.results.length&&(E(e.data.results[0]),console.log(e.data))});var e}},"Play"),l.a.createElement("button",{className:"button",onClick:function(){return e("/mylist")}},"My List")),l.a.createElement("h1",{className:"description"},o?o.overview:"")),l.a.createElement("div",{className:"fade-bottom"}))};var M=function(){return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement(h,{url:j,title:"Netflix Originals"}),l.a.createElement(h,{url:y,isSmall:!0,title:"Action Movies"}),l.a.createElement(h,{url:N,title:"Comedy Movies",isSmall:!0}),l.a.createElement(h,{url:k,title:"Horror Movies",isSmall:!0}),l.a.createElement(h,{url:w,title:"Romance Movies",isSmall:!0}),l.a.createElement(h,{url:_,title:"Documentaries",isSmall:!0}))};var C=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(u.Provider,{value:{myList:a,addToMylist:function(e){var t=Object(i.a)(a).concat(e);c(t),console.log(a.length)},removeFromMylist:function(e){var t=Object(i.a)(a).filter(function(t){return t.id===e});c(t)}}},l.a.createElement(n.Fragment,null,l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",element:l.a.createElement(M,null)}),l.a.createElement(f.a,{path:"mylist",element:l.a.createElement(p,null)})))))};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,null,l.a.createElement(C,null))))}},[[27,2,1]]]);
//# sourceMappingURL=main.258ed832.chunk.js.map