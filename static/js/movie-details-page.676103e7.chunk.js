"use strict";(self.webpackChunkgoit_react_hw_05_movies_2=self.webpackChunkgoit_react_hw_05_movies_2||[]).push([[347],{102:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,i,o,s,c,l,a,d,x,h,p=e(152),u=e(791),f=e(871),j=e(168),v=e(444),b=v.ZP.div(r||(r=(0,j.Z)(["\ndisplay: flex;\nborder-bottom: 1px solid #fff;\npadding-bottom: 10px;\n"]))),g=v.ZP.div(i||(i=(0,j.Z)(["\n"]))),Z=v.ZP.img(o||(o=(0,j.Z)(["\n\theight: 330px;\n\twidth: 210px;\n\t\n\tborder: 1px solid #fff;\n\tborder-radius: 10px;\n\toverflow: hidden;\n"]))),m=v.ZP.div(s||(s=(0,j.Z)(["\n\tmargin-left: 15px;\n"]))),w=v.ZP.ul(c||(c=(0,j.Z)(["\npadding: 0px;\nlist-style: none;\n"]))),_=v.ZP.button(l||(l=(0,j.Z)(["\n\tdisplay: inline-block;\n\tpadding: 10px;\n\tmargin-bottom: 5px;\n\n\ttext-decoration: none;\n\tcolor: rgb(139, 0, 0);\n\tbackground: rgba(0,0,0,0.5);\n\tborder: 1px solid rgb(0,0,0);\n\tborder-radius: 5px;\n\t:hover{\n\t\tcolor: rgb(255, 0, 0);\n\t\tbox-shadow:\n\t\t\t0px 1px 1px rgba(255, 0, 0, 0.12),\n\t\t\t0px 4px 4px rgba(255, 0, 0, 0.16),\n\t\t\t1px 4px 6px rgba(255, 0, 0, 0.26);\n\t}\n"]))),k=e(184),y=function(n){var t=n.location,e=(0,f.s0)();return(0,k.jsx)(_,{type:"button",onClick:function(){var n,r;e(null!==(n=null===t||void 0===t||null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/")},children:"GoBack"})},P=function(n){var t=n.details,e=t.poster_path,r=t.title,i=t.vote_average,o=t.overview,s=t.genres,c=(0,f.TH)();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(y,{location:c}),(0,k.jsxs)(b,{children:[(0,k.jsx)(g,{children:e&&(0,k.jsx)(Z,{src:"https://image.tmdb.org/t/p/w500/".concat(e),alt:"".concat(r," poster")})}),(0,k.jsxs)(m,{children:[(0,k.jsx)("h2",{children:r}),(0,k.jsxs)("p",{children:["User Score: ",(0,k.jsx)("span",{children:i})]}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:o}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)(w,{children:s&&s.map((function(n){var t=n.id,e=n.name;return(0,k.jsx)("li",{children:e},t)}))})]})]})]})},S=e(504),C=v.ZP.div(a||(a=(0,j.Z)(["\n"]))),z=v.ZP.ul(d||(d=(0,j.Z)(["\nlist-style: none;\n"]))),O=v.ZP.li(x||(x=(0,j.Z)(["\n"]))),U=(0,v.ZP)(S.OL)(h||(h=(0,j.Z)(["\ndisplay: inline-block;\nfont-size: 23px;\nfont-weight: 500;\ncolor: black;\ntext-decoration: none;\npadding: 10px;\n&.active{\n\tcolor: rgb(139,0,0);\n\ttext-decoration: underline;\n}\n:hover{\n\tcolor: rgb(255,0,0);\n}\n"]))),A=function(){var n=(0,f.TH)();return(0,k.jsxs)(C,{children:[(0,k.jsxs)(z,{style:{listStyle:"none"},children:[(0,k.jsx)(O,{children:(0,k.jsx)(U,{to:"cast",state:n.state,children:"Cast"})}),(0,k.jsx)(O,{children:(0,k.jsx)(U,{to:"reviews",state:n.state,children:"Reviews"})})]}),(0,k.jsx)("hr",{})]})},F=e(615),G=(0,u.lazy)((function(){return e.e(277).then(e.bind(e,3))})),H=(0,u.lazy)((function(){return e.e(915).then(e.bind(e,216))}));function T(){var n=(0,u.useState)({}),t=(0,p.Z)(n,2),e=t[0],r=t[1],i=(0,f.UO)().movieId;return(0,u.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=").concat("2fcef87760cac0a14e527e71c6ea2c67","&language=en-US")).then((function(n){return n.json()})).then((function(n){return r(n)}))}),[i]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(P,{details:e}),(0,k.jsx)(A,{}),(0,k.jsx)("div",{children:(0,k.jsx)(u.Suspense,{fallback:(0,k.jsx)(F.a,{}),children:(0,k.jsxs)(f.Z5,{children:[(0,k.jsx)(f.AW,{path:"/cast",element:(0,k.jsx)(G,{})}),(0,k.jsx)(f.AW,{path:"/reviews",element:(0,k.jsx)(H,{})})]})})})]})}}}]);
//# sourceMappingURL=movie-details-page.676103e7.chunk.js.map