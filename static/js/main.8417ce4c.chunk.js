(this.webpackJsonporbis=this.webpackJsonporbis||[]).push([[0],[,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){t.exports=a(18)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(9),s=a.n(r),o=(a(15),a(1)),i=a(2),u=a(4),l=a(3),h=a(5),p=(a(16),function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=this.props.title;return c.a.createElement("div",{className:"stock-button"},e,c.a.createElement("button",{onClick:function(){return t.props.delete()}},"X"))}}]),e}(c.a.Component)),m=(a(17),function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(c)))).state={stockText:"",saved:[]},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=this.props,a=e.saved,n=e.stockText,r=a.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement(p,{delete:function(){return t.props.deleteStock(e)},title:e}))}));return c.a.createElement("section",{className:"col col-1"},c.a.createElement("form",{onSubmit:function(e){return t.props.addStock(e)}},c.a.createElement("div",{className:"form-line"},c.a.createElement("input",{onChange:function(e){return t.props.changeText(e)},value:n,placeholder:"AAPL, BABA, BAC",name:"stock-search",id:"stock-search"}),c.a.createElement("button",null,"Add")),c.a.createElement("label",{htmlFor:"stock-search"},"Search For A Stock By Its Symbol ",c.a.createElement("br",null)," Or Search Multiple Stocks Separated By Commas")),c.a.createElement("div",{className:"saved-stocks"},c.a.createElement("h2",null,"My Stocks"),c.a.createElement("ul",null,r)))}}]),e}(c.a.Component)),f=(a(7),function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(c)))).state={tweetCount:0,error:!1},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this,e="https://api.stocktwits.com/api/2/streams/symbol/".concat(this.props.stock,".json");fetch(e).then((function(t){return t.json()})).then((function(e){return t.setState({tweetCount:e.messages.length})})).catch((function(e){return t.setState({error:e.message})}))}},{key:"render",value:function(){var t=this,e=this.props.stock;return c.a.createElement("li",{onClick:function(){return t.props.activateStock(e)},className:"list-stock"},c.a.createElement("h2",null,e),c.a.createElement("div",{className:"tweet-count"},this.state.tweetCount))}}]),e}(c.a.Component)),k=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=this.props.stocks.map((function(e){return c.a.createElement(f,{key:e,stock:e,activateStock:t.props.activateStock})}));return c.a.createElement("section",{className:"col col-2"},c.a.createElement("h2",null,"Saved Stocks"),c.a.createElement("ul",{className:"stocks"},e))}}]),e}(c.a.Component),d=(a(8),function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("li",{className:"tweet-card"},c.a.createElement("div",{className:"tweet-header"},c.a.createElement("img",{src:this.props.pic,alt:"avatar"}),c.a.createElement("h3",null,"@",this.props.user)),c.a.createElement("p",null,this.props.message),c.a.createElement("div",{className:"tweet-date"},this.props.date))}}]),e}(c.a.Component)),v=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(c)))).state={tweets:[]},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidUpdate",value:function(t){var e=this;if(this.props.stock!==t.stock){var a=[],n="https://api.stocktwits.com/api/2/streams/symbol/".concat(this.props.stock,".json");fetch(n).then((function(t){return t.json()})).then((function(t){t.messages.forEach((function(t){a.push({user:t.user.username,message:t.body,date:t.created_at,pic:t.user.avatar_url})})),e.setState({tweets:a})})).catch((function(t){return e.setState({error:t.message})}))}}},{key:"componentDidMount",value:function(){var t=this;if(this.props.stock){var e=[],a="https://api.stocktwits.com/api/2/streams/symbol/".concat(this.props.stock,".json");fetch(a).then((function(t){return t.json()})).then((function(a){a.messages.forEach((function(a){e.push({user:a.user.username,message:a.body,date:a.created_at,pic:a.user.avatar_url,symbol:t.props.stock})}))})).catch((function(e){return t.setState({error:e.message})})),this.setState({tweets:e})}}},{key:"render",value:function(){var t=this.state.tweets;return t=t.map((function(t,e){return c.a.createElement(d,{key:e,user:t.user,message:t.message,date:t.date,pic:t.pic,symbol:t.symbol})})),c.a.createElement("section",{className:"col col-3"},t.length?c.a.createElement("ul",null,t):"Search for a stock to get tweets")}}]),e}(c.a.Component),b=function(t){function e(){var t,a;Object(o.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(c)))).state={currentStock:null,stockText:"",saved:[]},a.activateStock=function(t){a.setState({currentStock:t})},a.addStock=function(t){t.preventDefault();var e=a.state,n=e.stockText,c=e.saved,r=n.split(/[\s,]+/);r.forEach((function(t){return t.trim()})),(r=(r=r.filter((function(t){return t}))).map((function(t){return t.toUpperCase()}))).forEach((function(t){return c.push(t)})),a.setState({saved:c,stockText:""})},a.deleteStock=function(t){var e=a.state.saved;e=e.filter((function(e){return e!==t})),a.setState({saved:e})},a.changeText=function(t){t.preventDefault(),a.setState({stockText:t.target.value})},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state,e=t.currentStock,a=t.saved,n=t.stockText;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},"StockTwits Search"),c.a.createElement(m,{addStock:this.addStock,changeText:this.changeText,deleteStock:this.deleteStock,saved:a,stockText:n}),c.a.createElement(k,{activateStock:this.activateStock,stocks:a}),c.a.createElement(v,{stock:e}))}}]),e}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.8417ce4c.chunk.js.map