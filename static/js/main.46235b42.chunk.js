(this["webpackJsonpreact-layout-2"]=this["webpackJsonpreact-layout-2"]||[]).push([[0],[,,,function(e,t,n){e.exports={container:"Table_container__1u_GE",cell:"Table_cell__38xeP",stickyColumnHeader:"Table_stickyColumnHeader__3qO8k",columnHeader:"Table_columnHeader__UavvG",stickyRowHeader:"Table_stickyRowHeader__iLJhq"}},,function(e,t,n){e.exports={container:"Split_container__AhDlu",leftContainer:"Split_leftContainer__3qugU",rightContainer:"Split_rightContainer__2Umr2"}},,function(e,t,n){e.exports={container:"ReviewsTable_container__A-DW3",buttonContainer:"ReviewsTable_buttonContainer__1gw-j"}},,,,function(e,t,n){e.exports={container:"App_container__1MQN3"}},function(e,t,n){e.exports={container:"Header_container__1VC87"}},function(e,t,n){e.exports={container:"Review_container__3gfD5"}},function(e,t,n){e.exports={container:"List_container__1ws04"}},function(e,t,n){e.exports={container:"ReviewHeader_container__3By1y"}},,,,,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(10),i=n.n(r),o=(n(20),n(11)),s=n.n(o),l=n(12),d=n.n(l),u=n(0),j=function(){return Object(u.jsx)("div",{className:d.a.container,children:Object(u.jsx)("h1",{children:"Header"})})},b=n(13),m=n.n(b),O=n(5),_=n.n(O),h=function(e){return Object(u.jsxs)("div",{className:_.a.container,children:[Object(u.jsx)("div",{className:_.a.leftContainer,children:e.left}),Object(u.jsx)("div",{className:_.a.rightContainer,children:e.right})]})},p=n(14),x=n.n(p),f=function(e){return Object(u.jsx)("div",{className:x.a.container,children:e.items.map((function(e,t){return Object(u.jsx)("div",{children:e},t)}))})},v=n(15),g=n.n(v),H=function(){return Object(u.jsx)("div",{className:g.a.container,children:Object(u.jsx)("h1",{children:"Review Header"})})};function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return N(e).map((function(e){return"Item ".concat(e)}))}var w=[{accessor:"id",Header:"Id"},{accessor:"name",Header:"Name"},{accessor:"planogramStatus",Header:"Planogram Status"},{accessor:"locations",Header:"Locations"},{accessor:"products",Header:"Products"}];function N(e){return Array.from(new Array(e).keys())}var y=n(7),R=n.n(y),k=n(1),T=n(4),P=n(8),S=n.n(P),A=n(9),L=n(3),B=n.n(L),M=function(e){var t=c.a.useMemo((function(){return{width:200}}),[]),n=Object(A.useTable)({columns:e.columns,data:e.data,defaultColumn:t},A.useBlockLayout),a=n.getTableProps,r=n.getTableBodyProps,i=n.headerGroups,o=n.rows,s=n.prepareRow;return Object(u.jsxs)("div",Object(k.a)(Object(k.a)({},a()),{},{className:B.a.container,children:[Object(u.jsx)("div",{className:B.a.stickyColumnHeader,children:i.map((function(e){return Object(u.jsx)("div",Object(k.a)(Object(k.a)({},e.getHeaderGroupProps()),{},{className:B.a.columnHeader,children:e.headers.map((function(e,t){return Object(u.jsx)("div",Object(k.a)(Object(k.a)({},e.getHeaderProps()),{},{className:S()(B.a.cell,Object(T.a)({},B.a.stickyRowHeader,0===t)),children:e.render("Header")}))}))}))}))}),Object(u.jsx)("div",Object(k.a)(Object(k.a)({},r()),{},{children:o.map((function(e,t){return s(e),Object(u.jsx)("div",Object(k.a)(Object(k.a)({},e.getRowProps()),{},{className:"tr",children:e.cells.map((function(e,t){return Object(u.jsx)("div",Object(k.a)(Object(k.a)({},e.getCellProps()),{},{className:S()(B.a.cell,Object(T.a)({},B.a.stickyRowHeader,0===t)),children:e.render("Cell")}))}))}))}))}))]}))},D=function(){return Object(u.jsxs)("div",{className:R.a.container,children:[Object(u.jsxs)("div",{className:R.a.buttonContainer,children:[Object(u.jsx)("button",{children:"Add button"}),Object(u.jsx)("button",{children:"Remove button"})]}),Object(u.jsx)(M,{columns:w,data:N(100).map((function(e){return{id:e,name:"Review ".concat(e),planogramStatus:"Copied",locations:Math.random(),products:Math.random()}}))})]})},F=function(){var e=Object(u.jsx)(f,{items:C()}),t=Object(u.jsx)(D,{});return Object(u.jsxs)("div",{className:m.a.container,children:[Object(u.jsx)(H,{}),Object(u.jsx)(h,{left:e,right:t})]})};var G=function(){return Object(u.jsxs)("div",{className:s.a.container,children:[Object(u.jsx)(j,{}),Object(u.jsx)(F,{})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root")),I()}],[[25,1,2]]]);
//# sourceMappingURL=main.46235b42.chunk.js.map