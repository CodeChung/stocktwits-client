(this.webpackJsonporbis=this.webpackJsonporbis||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(18)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),s=(a(13),a(1)),l=a(2),i=a(4),u=a(3),h=a(5),m=(a(14),function(t){function e(){return Object(s.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.title;return c.a.createElement("div",{className:"stock-button"},e,c.a.createElement("button",{onClick:function(){return t.props.delete()}},"X"))}}]),e}(c.a.Component)),p=(a(15),function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={stockText:"",saved:[]},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props,a=e.saved,n=e.stockText,r=a.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement(m,{delete:function(){return t.props.deleteStock(e)},title:e}))}));return c.a.createElement("section",{className:"col col-1"},c.a.createElement("form",{onSubmit:function(e){return t.props.addStock(e)}},c.a.createElement("input",{onChange:function(e){return t.props.changeText(e)},value:n,placeholder:"AAPL, BABA, BAC",name:"stock-search",id:"stock-search"}),c.a.createElement("button",null,"Add"),c.a.createElement("label",{for:"stock-search"},"Search For A Stock By Its Symbol ",c.a.createElement("br",null)," Or Search Multiple Stocks Separated By Commas")),c.a.createElement("div",{className:"saved-stocks"},c.a.createElement("h2",null,"My Stocks"),c.a.createElement("ul",null,r)))}}]),e}(c.a.Component)),f=(a(16),function(t){function e(){return Object(s.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this,e=this.props.stocks.map((function(e){return c.a.createElement("li",{onClick:function(){return t.props.activateStock(e)},key:e,className:"list-stock"},c.a.createElement("h2",null,e),c.a.createElement("div",{className:"tweet-count"},"1"))}));return c.a.createElement("section",{className:"col col-2"},c.a.createElement("ul",{className:"stocks"},e))}}]),e}(c.a.Component)),k=(a(17),function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={tweets:[]},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setState({tweets:[]})}},{key:"render",value:function(){var t=this.state.tweets;return c.a.createElement("section",{className:"col col-3"},t.length?t:"Search for a stock to get tweets")}}]),e}(c.a.Component)),d=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={currentStock:null,stockText:"",saved:[]},a.activateStock=function(t){console.log(t),a.setState({currentStock:t})},a.addStock=function(t){t.preventDefault();var e=a.state,n=e.stockText,c=e.saved,r=n.split(/[\s,]+/);r.forEach((function(t){return t.trim()})),(r=r.map((function(t){return t.toUpperCase()}))).forEach((function(t){return c.push(t)})),a.setState({saved:c,stockText:""})},a.deleteStock=function(t){var e=a.state.saved;e=e.filter((function(e){return e!==t})),a.setState({saved:e})},a.changeText=function(t){t.preventDefault(),a.setState({stockText:t.target.value})},a}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.state,e=t.saved,a=t.stockText;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},"StockTwits Search"),c.a.createElement(p,{addStock:this.addStock,changeText:this.changeText,deleteStock:this.deleteStock,saved:e,stockText:a}),c.a.createElement(f,{activateStock:this.activateStock,stocks:e}),c.a.createElement(k,null))}}]),e}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.40a11669.chunk.js.map