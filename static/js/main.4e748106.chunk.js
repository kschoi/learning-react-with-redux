(this["webpackJsonp05.videos"]=this["webpackJsonp05.videos"]||[]).push([[0],{33:function(e,t,a){e.exports=a(63)},57:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),c=a.n(i),o=a(8),l=a(9),s=a(11),m=a(10),u=a(12),d=a(14),v=a(6),p=a(17),b=a.n(p),h=a(28),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.onInputChange=function(e){a.setState({term:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.term)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:""},"Video Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),t}(r.a.Component),E=a(29),S=a.n(E).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyAK9Ss8UXcihcD-0BFBzkQmIHndBv899zI"}}),j=a(30),y=(a(57),function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement("div",{className:"video-item item",onClick:function(){return a(t)}},r.a.createElement("img",Object(j.a)({alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url},"alt","")),r.a.createElement("div",{className:"content"},t.snippet.title))}),O=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return r.a.createElement(y,{key:e.id.videoId,onVideoSelect:a,video:e})}));return r.a.createElement("div",{className:"ui relaxed divided list"},n)},g=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement("div",null,r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{src:a,frameborder:"0"})),r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"},t.snippet.title),r.a.createElement("p",null,t.snippet.description)))},w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={videos:[],selectedVideo:null},a.onTermSubmit=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/search",{params:{q:t}});case 2:n=e.sent,r=n.data,a.setState({videos:r.items,selectedVideo:r.items[0]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("buildings")}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(f,{onFormSubmit:this.onTermSubmit}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement(g,{video:this.state.selectedVideo})),r.a.createElement("div",{className:"five wide column"},r.a.createElement(O,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(r.a.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/contact"},"Contact")))),r.a.createElement(v.a,{exact:!0,path:"/",component:w}),r.a.createElement(v.a,{path:"/contact",component:k}))}}]),t}(r.a.Component),k=function(){return r.a.createElement("div",null,"Contact...")},V=N;c.a.render(r.a.createElement(V,null),document.querySelector("#root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4e748106.chunk.js.map