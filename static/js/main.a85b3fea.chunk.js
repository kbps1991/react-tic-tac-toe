(this.webpackJsonpplaytictactoe=this.webpackJsonpplaytictactoe||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),i=(n(14),n(1)),o=n(2),u=n(4),s=n(3),m=(n(5),n(8)),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){return Object(i.a)(this,n),t.call(this)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"square",onClick:this.props.onClick},this.props.value)}}]),n}(r.a.Component),d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(o.a)(n,[{key:"handleClick",value:function(e){var t=this.state,n=t.squares,a=t.xIsNext,r=n.slice();this.calculateWinner(n)||r[e]||(r[e]=a?"X":"O",this.setState({squares:r,xIsNext:!a}))}},{key:"handleReset",value:function(){this.setState({squares:Array(9).fill(null),xIsNext:!0})}},{key:"calculateWinner",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(m.a)(t[n],3),r=a[0],c=a[1],l=a[2];if(e[r]&&e[r]===e[c]&&e[r]===e[l])return e[r]}return null}},{key:"render",value:function(){var e=this,t=this.state,n=t.squares,a=t.xIsNext,c=this.calculateWinner(n);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"instructions"},"Next player: ",a?"X":"O"),r.a.createElement("div",{className:"instructions"},"Winner:",c||"None"),r.a.createElement("button",{className:"reset-button",onClick:function(){return e.handleReset()}},"Reset"),r.a.createElement("div",{className:"board"},r.a.createElement("div",{className:"board-row"},r.a.createElement(v,{value:n[0],onClick:function(){return e.handleClick(0)}}),r.a.createElement(v,{value:n[1],onClick:function(){return e.handleClick(1)}}),r.a.createElement(v,{value:n[2],onClick:function(){return e.handleClick(2)}})),r.a.createElement("div",{className:"board-row"},r.a.createElement(v,{value:n[3],onClick:function(){return e.handleClick(3)}}),r.a.createElement(v,{value:n[4],onClick:function(){return e.handleClick(4)}}),r.a.createElement(v,{value:n[5],onClick:function(){return e.handleClick(5)}})),r.a.createElement("div",{className:"board-row"},r.a.createElement(v,{value:n[6],onClick:function(){return e.handleClick(6)}}),r.a.createElement(v,{value:n[7],onClick:function(){return e.handleClick(7)}}),r.a.createElement(v,{value:n[8],onClick:function(){return e.handleClick(8)}}))))}}]),n}(r.a.Component),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(d,null)))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.a85b3fea.chunk.js.map