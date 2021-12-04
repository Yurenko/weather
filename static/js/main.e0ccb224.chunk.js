(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(7),a=n.n(r),o=(n(22),n(2)),i=n(16),s=(n(29),n(30),n(13)),u=n.n(s),l=n(1),d=function(e){var t=e.item,n=e.handleClickCity,c=e.handleClickCords,r="http://openweathermap.org/img/wn/".concat(t.weather[0].icon,".png"),a=function(e){return Math.round(100*(e-273.15))/100};return Object(l.jsxs)("div",{className:"border-top d-flex flex-wrap",children:[Object(l.jsx)("div",{className:"p-2",children:Object(l.jsx)("img",{src:r,alt:"icon"})}),Object(l.jsxs)("div",{className:"p-3",children:[Object(l.jsxs)("h4",{children:[Object(l.jsxs)("button",{className:"text-decoration-none text-underline-hover city",onClick:function(){return n(t.name)},children:[t.name,", ",t.sys.country]}),Object(l.jsxs)("span",{children:[" ",t.weather[0].description]})]}),Object(l.jsxs)("span",{className:u()("rounded-pill temp",{hot:a(t.main.temp)>=8,norm:a(t.main.temp)<30&&a(t.main.temp)>-10,cold:a(t.main.temp)<=-10}),children:[a(t.main.temp)," \xb0\u0421"]})," ","temperature from ",a(t.main.temp_min)," to"," ",a(t.main.temp_max)," \xb0\u0421, wind ",t.wind.speed," m/s. clouds"," ",t.clouds.all," %, ",t.main.pressure," hpa",Object(l.jsxs)("div",{children:["Geo coords"," ",Object(l.jsxs)("button",{className:"text-decoration-none text-underline-hover cords",onClick:function(){return c(t.coord.lat,t.coord.lon)},children:["[",t.coord.lat,", ",t.coord.lon,"]"]})]})]})]})},h=function(e){var t=e.items,n=e.handleClickCity,c=e.handleClickCords;return console.log("h",t),Object(l.jsx)("div",{className:"container-xl",children:t&&t.map((function(e,t){return Object(l.jsx)(d,{item:e,handleClickCity:n,handleClickCords:c},e.id+t)})).reverse()})},p=function(){return Object(l.jsx)("h1",{className:"container-xl",children:"Loading..."})},f=(n(32),function(e){var t=e.getWeather,n=e.citySearch,c=e.handleSearch;return Object(l.jsx)("form",{onSubmit:t,children:Object(l.jsxs)("div",{className:"d-flex justify-content-center align-items-center input-group pt-5 pb-5 mb-4",id:"search",children:[Object(l.jsx)("div",{className:"col-3 border-left-50",children:Object(l.jsx)("input",{type:"text",className:"form-control input",placeholder:"Enter the city",name:"city",value:n,onChange:c})}),Object(l.jsx)("button",{className:"btn btn-primary btnSearch",type:"submit",children:"Search"})]})})}),j=(n(33),n(6)),m=n.n(j),b=n(11),O="17009a21e213f47c6745fb2f43f22fe7",x="WEATHER_FEATCH_START",y="WEATHER_FEATCH_SUCCESS",g="WEATHER_FEATCH_ERROR",v="WEATHER_LOADING",w=function(e){return{type:y,payload:e}},C=function(e){return{type:g,payload:e}},E=function(e){return{type:v,payload:e}},k=function(e,t){return function(){var n=Object(b.a)(m.a.mark((function n(c){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(E(!0)),n.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(O)).then((function(e){return e.json()})).then((function(e){if(200!==e.cod)throw c(C(e.message)),new Error(e.message);c(w(e))})).catch((function(e){console.log("Error location featch",e)})).finally((function(){c(E(!1))}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(b.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(E(!0)),t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=celsius&APPID=").concat(O)).then((function(e){return e.json()})).then((function(e){if(200!==e.cod)throw n(C(e.message)),new Error(e.message);n(w(e))})).catch((function(e){console.log("Error search city",e)})).finally((function(){n(E(!1))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var R=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(o.c)((function(e){return e.weatherReduser.data})),s=Object(o.c)((function(e){return e.weatherReduser.isLoading})),u=Object(o.c)((function(e){return e.weatherReduser.error})),d=Object(o.b)();return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,n=e.coords.longitude;d(k(t,n))}),(function(e){console.log(e.message)}))}),[d]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"container-xl border-bottom pb-2",children:"Weather in your city"}),Object(l.jsx)(f,{getWeather:function(e){e.preventDefault();var t=e.target.elements.city.value;d(N(t)).then((function(){r("")}))},citySearch:n,handleSearch:function(e){r(e.target.value)}}),s?Object(l.jsx)(p,{}):!u&&Object(l.jsx)(h,{items:a,handleClickCity:function(e){d(N(e))},handleClickCords:function(e,t){d(k(e,t))}})]})},S=n(5),A=n(14),T=n(15),_=n(17),W=n(3),H={data:[],isLoading:!1,error:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case x:return;case y:return Object(W.a)(Object(W.a)({},e),{},{data:[].concat(Object(_.a)(e.data),[c]),error:""});case g:return Object(W.a)(Object(W.a)({},e),{},{data:{},error:c});case v:return Object(W.a)(Object(W.a)({},e),{},{isLoading:c});default:return e}},D=Object(S.combineReducers)({weatherReduser:L}),F=[T.a],I=S.applyMiddleware.apply(void 0,F),P=Object(S.createStore)(D,Object(A.composeWithDevTools)(I));a.a.render(Object(l.jsx)(o.a,{store:P,children:Object(l.jsx)(R,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e0ccb224.chunk.js.map