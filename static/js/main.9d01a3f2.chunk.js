(this.webpackJsonpenglish_test=this.webpackJsonpenglish_test||[]).push([[0],{30:function(e,t,n){e.exports=n(46)},35:function(e,t,n){},36:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(24),r=n.n(i),o=(n(35),n(36),n(25)),c=n(9),l=n(10),u=n(11),h=n(13),d=n(12),m=n(28),p=n(15),g=n(17),v=n.n(g),f=n(48),y=n(47),E=n(8),k=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(l.a)(this,n),(a=t.call(this,e)).getProgress=function(){2!==a.state.played?void 0!==a.ref&&void 0!==a.state.duration&&a.setState({progress:a.ref.seek()/a.state.duration*100}):a.setState({progress:100})},a.getDuration=function(){a.setState({duration:a.ref.duration()})},a.handleClick=function(){a.setState((function(e,t){return e.played>1?{disabled:!0}:{playing:!e.playing,played:e.played+1}}),(function(){var e=new E.a,t=e.get(a.test).viewed;e.set(a.test,Object(p.a)({},a.cookie,{viewed:[].concat(Object(m.a)(t),[a.question])}),{path:"/"})}))},a.handleEnd=function(){a.setState((function(e,t){return e.played>1?{disabled:!0,playing:!1}:{playing:!1}}))},a.state={playing:!1,progress:0,disabled:!1,played:0},a.src=e.src,a.question=e.question,a.test=e.test,a.ref=s.a.createRef();var i=new E.a;return a.cookie=i.get(a.test),void 0===a.cookie?(i.set(a.test,{viewed:[],main:0},{path:"/"}),a.cookie={viewed:[],main:0}):a.cookie.viewed.includes(a.question)&&(a.state.played=0),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.getProgress()}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(f.a,{onClick:this.handleClick,disabled:this.state.disabled},"Play"),s.a.createElement(v.a,{src:[this.src],playing:this.state.playing,ref:function(t){return e.ref=t},onLoad:this.getDuration,onEnd:this.handleEnd}),s.a.createElement(y.a,{value:this.state.progress}))}}]),n}(s.a.Component),b=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(l.a)(this,n),(a=t.call(this,e)).getProgress=function(){a.state.plays>=2&&0===a.getTime()?a.setState({progress:100}):void 0!==a.ref&&void 0!==a.state.duration?a.setState({progress:a.ref.seek()/a.state.duration*100}):a.setState({progress:0})},a.getDuration=function(){a.setState({duration:a.ref.duration()})},a.addCookie=function(){var e=new E.a,t=e.get("view count");if(void 0!==e.get("view count")){var n=parseInt(t)+1;e.remove("view count",{path:"/"}),e.set("view count",n.toString(),{path:"/"})}else e.set("view count","0",{path:"/"}),console.log("added cookie")},a.checkCookie=function(){var e=new E.a;console.log(e.getAll())},a.removeCookie=function(){var e=new E.a;e.remove(a.test,{path:"/"}),console.log("removed cookies"),console.log("remaining: ",e.getAll())},a.handleReplay=function(){a.ref.seek(0)},a.getTime=function(){return void 0!==a.ref?a.ref.seek():0},a.jump=function(){a.ref.seek(a.state.duration-1)},a.handlePlay=function(){var e={playing:!a.state.playing};0===a.getTime()&&(e=Object(p.a)({},e,{plays:a.state.plays+1}),(new E.a).set(a.test,Object(p.a)({},a.cookie,{main:a.state.plays+1}),{path:"/"}));a.setState(e)},a.handleEnd=function(){var e={playing:!1};a.state.plays>=2&&(e=Object(p.a)({},e,{disabled:!0})),a.setState(e)},a.state={playing:!1,progress:0,plays:0,disabled:!1},a.src=e.src,a.question=e.question,a.test=e.test,a.ref=s.a.createRef();var i=new E.a;return a.cookie=i.get(a.test),void 0===a.cookie?(i.set(a.test,{viewed:[],main:0},{path:"/"}),a.cookie={viewed:[],main:0}):a.state.plays=parseInt(a.cookie.main),a.state.plays>=2&&(a.state.disabled=!0),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.getProgress()}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(v.a,{src:[this.src],playing:this.state.playing,onLoad:this.getDuration,onEnd:this.handleEnd,ref:function(t){return e.ref=t}}),s.a.createElement(f.a,{onClick:this.handlePlay,disabled:this.state.disabled},this.state.playing?"Pause":"Play"),s.a.createElement(y.a,{value:this.state.progress}))}}]),n}(s.a.Component),w=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).src=e.src,a.test=e.test,a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"header",Style:""},s.a.createElement("img",{src:"https://raw.githubusercontent.com/kierancyphus/english_test/master/tandem.png",Style:"display: block; margin: 10px auto 0px auto; padding: 50px 0 10px 0"}),s.a.createElement("h2",{Style:"text-align: center; padding-bottom: 20px"},"Audio Files for English ",this.test.toUpperCase())),s.a.createElement("div",{className:"content"},s.a.createElement("h3",null,s.a.createElement("u",null,"Questions 29 to 35 (one audio)")),s.a.createElement("p",null,"Please answer the multiple choice comprehension questions based on this audio. You can listen to the audio twice."),s.a.createElement(b,{src:"https://raw.githubusercontent.com/kierancyphus/english_test/master/"+this.test+".mp4",test:this.test}),s.a.createElement("hr",null),s.a.createElement("div",{className:"questions",Style:"padding: 10px 0 10px 0"},s.a.createElement("h3",null,s.a.createElement("u",null,"Questions 35 to 45")),s.a.createElement("p",null,"Please fill in the missing word on the exam. You can only listen to each audio once."),s.a.createElement("hr",null),[29,30,31,32,33,34,35,36,37,38,39].map((function(t){return s.a.createElement("div",{key:"div"+t+e.test},s.a.createElement("h4",{key:"title"+t+e.test},"Question ",6+t),s.a.createElement(k,{src:"https://raw.githubusercontent.com/kierancyphus/english_test/master/"+e.test+"-audio-"+t.toString()+".m4a",key:"button"+t+e.test,question:t,test:e.test}),s.a.createElement("hr",null))})))))}}]),n}(s.a.Component);var j=function(){return s.a.createElement("div",null,s.a.createElement(o.a,{basename:"/english_test"},s.a.createElement(c.c,null,s.a.createElement(c.a,{exact:!0,path:"/a2",component:function(){return s.a.createElement(w,{src:"https://raw.githubusercontent.com/kierancyphus/english_test/master/A2.mp4",test:"a2"})}}),s.a.createElement(c.a,{exact:!0,path:"/b1",component:function(){return s.a.createElement(w,{src:"https://raw.githubusercontent.com/kierancyphus/english_test/master/B1.mp4",test:"b1"})}}),s.a.createElement(c.a,{exact:!0,path:"/b2",component:function(){return s.a.createElement(w,{src:"https://raw.githubusercontent.com/kierancyphus/english_test/master/B2.mp4",test:"b2"})}}),s.a.createElement(c.a,{exact:!0,path:"/c1",component:function(){return s.a.createElement(w,{src:"https://raw.githubusercontent.com/kierancyphus/english_test/master/C1.mp4",test:"c1"})}}),s.a.createElement(c.a,{component:function(){return s.a.createElement("h1",null,"hi is this working")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(45);r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.9d01a3f2.chunk.js.map