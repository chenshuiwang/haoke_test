(this.webpackJsonphkzf=this.webpackJsonphkzf||[]).push([[3],{25:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return p}));var r=n(6),a=n.n(r),c=n(11),i=window.BMap,o=window.BMAP_STATUS_SUCCESS,u=function(e){var t=e.cityName,n=e.address;return new Promise((function(e,r){n||(n=t),(new i.Geocoder).getPoint(n,(function(t){t?e():r()}),t)}))},s=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){(new i.Geolocation).getCurrentPosition((function(n){if(this.getStatus()===o)if(n.address.city)e({name:"\u5e7f\u5dde",point:n.point});else{var r=new window.BMap.Point(n.point.lng,n.point.lat);(new window.BMap.Geocoder).getLocation(r,(function(t){e({name:t.addressComponents.city.replace("\u5e02",""),point:r})}))}else t(n)}))}));case 2:n=e.sent,t({type:"initCity",value:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u({cityName:e});case 2:r=t.sent,n({type:"initCity",value:{name:e,point:r}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(){return{type:"clearCity"}}},28:function(e,t,n){e.exports=n(41)},33:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),i=n.n(c),o=(n(33),n(34),n(17)),u=n(18),s=n(19),l=n(20),p=n(9),f=n(25),m=n(22),d=n(1),y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,272))})),b=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(6),n.e(13)]).then(n.bind(null,273))})),h=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(11)]).then(n.bind(null,274))})),v=function(){return a.a.createElement("div",null)},w=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initCity()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.props.cityName&&a.a.createElement(m.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement(v,null)},a.a.createElement(d.b,{component:b,path:"/home"}),a.a.createElement(d.b,{path:"/",exact:!0},a.a.createElement(d.a,{to:"/home"})),a.a.createElement(d.b,{component:y,path:"/mapFound",exact:!0}),a.a.createElement(d.b,{component:h,path:"/citySelect",exact:!0}))))}}]),n}(r.Component),O=Object(p.b)((function(e){return{cityName:e.mapReducer.city.name}}),(function(e){return{initCity:function(){e(Object(f.b)())}}}))(w),j={city:{}},E=n(4),C=Object(E.c)({mapReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case"initCity":return n.city=t.value,n;case"clearCity":return n.city={},n}return e}}),S=n(27),g=Object(E.d)(C,Object(E.a)(S.a));i.a.render(a.a.createElement(p.a,{store:g},a.a.createElement(O,null)),document.getElementById("root"))}},[[28,4,5]]]);
//# sourceMappingURL=main.e6034b78.chunk.js.map