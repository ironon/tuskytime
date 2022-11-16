import{defineComponent as v,ref as u,computed as p,openBlock as s,createElementBlock as A,Fragment as m,createElementVNode as a,toDisplayString as o,unref as y,createCommentVNode as l,createBlock as f}from"vue";import{i as h,g}from"../server.mjs";import"#internal/nitro";import"vue-router";const b=""+globalThis.__buildAssetsURL("school.6445c814.png"),k={"8/29":{date:"8/31",day:"A"},"8/30":{date:"8/31",day:"B"},"8/31":{date:"8/31",day:"A"},"9/1":{date:"9/1",day:"B",TT:"TT 5"},"9/6":{date:"9/6",day:"A",TT:"TT 1"},"9/7":{date:"9/7",day:"B",TT:"Advisory"},"9/8":{date:"9/8",day:"A",TT:"TT 2"},"9/9":{date:"9/9",day:"B",TT:"TT 6"},"9/12":{date:"9/12",day:"A",TT:"TT 3"},"9/13":{date:"9/13",day:"B",TT:"TT 7"},"9/14":{date:"9/14",day:"A",TT:"Advisory"},"9/15":{date:"9/15",day:"B",TT:"TT 8"},"9/16":{date:"9/16",day:"A",TT:"TT 4"},"9/19":{date:"9/19",day:"B",TT:"TT 5"},"9/20":{date:"9/20",day:"A",TT:"TT 1"},"9/21":{date:"9/21",day:"B",TT:"Advisory"},"9/22":{date:"9/22",day:"A",TT:"TT 2"},"9/23":{date:"9/23",day:"B",TT:"TT 6"},"9/27":{date:"9/27",day:"A",TT:"TT 3"},"9/28":{date:"9/28",day:"B",TT:"Advisory"},"9/29":{date:"9/29",day:"A",TT:"TT 4"},"9/30":{date:"9/30",day:"B",TT:"TT 7"},"10/3":{date:"10/3",day:"A",TT:"TT 1"},"10/4":{date:"10/4",day:"B",TT:"TT 8"},"10/6":{date:"10/6",day:"A",TT:"TT 2"},"10/7":{date:"10/7",day:"B",TT:"TT 5"},"10/11":{date:"10/11",day:"A",TT:"TT 3"},"10/12":{date:"10/12",day:"B",TT:"Advisory",special:"PSAT Day"},"10/13":{date:"10/13",day:"A",TT:"TT 4"},"10/14":{date:"10/14",day:"B",TT:"TT 6"},"10/17":{date:"10/17",day:"A",TT:"TT 1"},"10/18":{date:"10/18",day:"B",TT:"TT 7"},"10/19":{date:"10/19",day:"A",TT:"Advisory"},"10/20":{date:"10/20",day:"B",TT:"TT 8"},"10/21":{date:"10/21",day:"A",TT:"TT 2"},"10/25":{date:"10/25",day:"B",TT:"TT 5"},"10/26":{date:"10/26",day:"A",TT:"Advisory"},"10/27":{date:"10/27",day:"B",TT:"TT 6"},"10/28":{date:"10/28",day:"A",TT:"TT 3"},"11/2":{date:"11/2",day:"B",TT:"Advisory"},"11/3":{date:"11/3",day:"A",TT:"TT 4"},"11/4":{date:"11/4",day:"B",TT:"TT 7"},"11/7":{date:"11/7",day:"A",TT:"TT 1"},"11/9":{date:"11/9",day:"B",TT:"Advisory"},"11/10":{date:"11/10",day:"A",TT:"TT 2"},"11/11":{date:"11/11",day:"B",TT:"TT 8"},"11/14":{date:"11/14",day:"A",TT:"TT 3"},"11/15":{date:"11/15",day:"B",TT:"TT 5"},"11/16":{date:"11/16",day:"A",TT:"Advisory"},"11/17":{date:"11/17",day:"B",TT:"TT 6"},"11/18":{date:"11/18",day:"A",TT:"TT 4"},"11/21":{date:"11/21",day:"B",TT:"TT 7"},"11/22":{date:"11/22",day:"A",TT:"TT 1"},"11/28":{date:"11/28",day:"B",TT:"TT 8"},"11/29":{date:"11/29",day:"A",TT:"TT 2"},"11/30":{date:"11/30",day:"B",TT:"Advisory"},"12/1":{date:"12/1",day:"A",TT:"TT 3"},"12/2":{date:"12/2",day:"B",TT:"TT 5"},"12/5":{date:"12/5",day:"A",TT:"TT 4"},"12/6":{date:"12/6",day:"B",TT:"TT 6"},"12/7":{date:"12/7",day:"A",TT:"Advisory"},"12/8":{date:"12/8",day:"B",TT:"TT 7"},"12/9":{date:"12/9",day:"A",TT:"TT 1"},"12/12":{date:"12/12",day:"B",TT:"TT 8"},"12/13":{date:"12/13",day:"A",TT:"TT 2"},"12/14":{date:"12/14",day:"B",TT:"Advisory"},"12/15":{date:"12/15",day:"A",TT:"TT 3"},"12/16":{date:"12/16",day:"B",TT:"TT 5"},"1/3":{date:"1/3",day:"A",TT:"TT 4"},"1/4":{date:"1/4",day:"B",TT:"Advisory"},"1/5":{date:"1/5",day:"A",TT:"TT 1"},"1/6":{date:"1/6",day:"B",TT:"TT 6"},"1/9":{date:"1/9",day:"A",TT:"TT 2"},"1/10":{date:"1/10",day:"B",TT:"TT 7"},"1/11":{date:"1/11",day:"A",TT:"Advisory"},"1/12":{date:"1/12",day:"B",TT:"TT 8"},"1/13":{date:"1/13",day:"A",TT:"TT 3"},"1/17":{date:"1/17",day:"B",TT:"TT 5"},"1/18":{date:"1/18",day:"A",TT:"Advisory"},"1/19":{date:"1/19",day:"B",TT:"TT 6"},"1/20":{date:"1/20",day:"A",TT:"TT 4"},"1/25":{date:"1/25",day:"B",TT:"Advisory"},"1/26":{date:"1/26",day:"A",TT:"TT 1"},"1/27":{date:"1/27",day:"B",TT:"TT 7"},"1/30":{date:"1/30",day:"A",TT:"TT 2"},"1/31":{date:"1/31",day:"B",TT:"TT 8"},"2/1":{date:"2/1",day:"A",TT:"Advisory"},"2/2":{date:"2/2",day:"B",TT:"TT 5"},"2/3":{date:"2/3",day:"A",TT:"TT 3"},"2/6":{date:"2/6",day:"B",TT:"TT 6"},"2/7":{date:"2/7",day:"A",TT:"TT 4"},"2/8":{date:"2/8",day:"B",TT:"Advisory"},"2/9":{date:"2/9",day:"A",TT:"TT 1"},"2/10":{date:"2/10",day:"B",TT:"TT 7"},"2/13":{date:"2/13",day:"A",TT:"TT 2"},"2/14":{date:"2/14",day:"B",TT:"TT 8"},"2/15":{date:"2/15",day:"A",TT:"Advisory"},"2/16":{date:"2/16",day:"B",TT:"TT 5"},"2/17":{date:"2/17",day:"A",TT:"TT 3"},"2/21":{date:"2/21",day:"B",TT:"TT 6"},"2/22":{date:"2/22",day:"A",TT:"Advisory"},"2/23":{date:"2/23",day:"B",TT:"TT 7"},"2/24":{date:"2/24",day:"A",TT:"TT 4"},"2/27":{date:"2/27",day:"B",TT:"TT 8"},"2/28":{date:"2/28",day:"A",TT:"TT 1"},"3/1":{date:"3/1",day:"B",TT:"Advisory"},"3/2":{date:"3/2",day:"A",TT:"TT 2"},"3/3":{date:"3/3",day:"B",TT:"TT 5"},"3/6":{date:"3/6",day:"A",TT:"TT 3"},"3/7":{date:"3/7",day:"B",TT:"TT 6"},"3/8":{date:"3/8",day:"A",TT:"Advisory"},"3/9":{date:"3/9",day:"B",TT:"TT 7"},"3/10":{date:"3/10",day:"A",TT:"TT 4"},"3/14":{date:"3/14",day:"B",TT:"TT 8"},"3/15":{date:"3/15",day:"A",TT:"Advisory"},"3/16":{date:"3/16",day:"B",TT:"TT 5"},"3/17":{date:"3/17",day:"A",TT:"TT 1"},"3/20":{date:"3/20",day:"B",TT:"TT 6"},"3/21":{date:"3/21",day:"A",TT:"TT 2"},"3/22":{date:"3/22",day:"B",TT:"Advisory"},"3/23":{date:"3/23",day:"A",TT:"TT 3"},"3/24":{date:"3/24",day:"B",TT:"TT 7"},"3/28":{date:"3/28",day:"A",TT:"TT 4"},"3/29":{date:"3/29",day:"B",TT:"Advisory"},"3/30":{date:"3/30",day:"A",TT:"TT 1"},"3/31":{date:"3/31",day:"B",TT:"TT 8"},"4/10":{date:"4/10",day:"A",TT:"TT 2"},"4/11":{date:"4/11",day:"B",TT:"TT 5"},"4/12":{date:"4/12",day:"A",TT:"Advisory"},"4/13":{date:"4/13",day:"B",TT:"TT 6"},"4/14":{date:"4/14",day:"A",TT:"TT 3"},"4/17":{date:"4/17",day:"B",TT:"TT 7"},"4/18":{date:"4/18",day:"A",TT:"TT 4"},"4/19":{date:"4/19",day:"B",TT:"Advisory"},"4/20":{date:"4/20",day:"A",TT:"TT 1"},"4/24":{date:"4/24",day:"B",TT:"TT 8"},"4/25":{date:"4/25",day:"A",TT:"TT 2"},"4/26":{date:"4/26",day:"B",TT:"Advisory"},"4/27":{date:"4/27",day:"A",TT:"TT 3"},"4/28":{date:"4/28",day:"B",TT:"TT 5"},"5/1":{date:"5/1",day:"A",TT:"TT 4"},"5/2":{date:"5/2",day:"B",TT:"TT 6"},"5/3":{date:"5/3",day:"A",TT:"Advisory"},"5/4":{date:"5/4",day:"B",TT:"TT 7"},"5/5":{date:"5/5",day:"A",TT:"TT 1"},"5/8":{date:"5/8",day:"B",TT:"TT 8"},"5/9":{date:"5/9",day:"A",TT:"TT 2"},"5/10":{date:"5/10",day:"B",TT:"Advisory"},"5/11":{date:"5/11",day:"A",TT:"TT 3"},"5/12":{date:"5/12",day:"B",TT:"TT 5"},"5/15":{date:"5/15",day:"A",TT:"TT 4"},"5/16":{date:"5/16",day:"B",TT:"TT 6"},"5/17":{date:"5/17",day:"A",TT:"Advisory"},"5/18":{date:"5/18",day:"B",TT:"TT 7"},"5/19":{date:"5/19",day:"A",TT:"TT 1"},"5/22":{date:"5/22",day:"B",TT:"TT 8"},"5/23":{date:"5/23",day:"A",TT:"TT 2"},"5/24":{date:"5/24",day:"B",TT:"Advisory"},"5/25":{date:"5/25",day:"A",TT:"TT 3"},"5/26":{date:"5/26",day:"B",TT:"TT 5"},"5/30":{date:"5/30",day:"A",TT:"TT 4"},"5/31":{date:"5/31",day:"B",TT:"Advisory"},"6/1":{date:"6/1",day:"A",TT:"TT 1"},"6/2":{date:"6/2",day:"B",TT:"TT 6"},"6/5":{date:"6/5",day:"A",TT:"TT 2"},"6/6":{date:"6/6",day:"B",TT:"TT 7"},"6/7":{date:"6/7",day:"A",TT:"Advisory"},"6/8":{date:"6/8",day:"B",TT:"TT 8"}},D={id:"tt-date"},I={id:"tt-menu"},S={key:0,id:"tt-info"},w=a("h1",null," NO SCHOOL!!!",-1),C=a("img",{src:b},null,-1),M=[w,C],N={key:1,id:"tt-info"},x={for:"day-type"},O={id:"day-type"},V=a("label",{for:"day-type"},"DAY",-1),Y=a("br",null,null,-1),E=a("p",{id:"tt-label"},"AND IT'S TUSKY TIME ",-1),K={id:"TT"},Q={key:0},U={key:1},$=v({__name:"TuskyTime",setup(_){function B(T){var d=(""+T.getDate()).slice(-2),e=(""+(T.getMonth()+1)).slice(-2);return T.getFullYear().toString().substr(2,2),e+"/"+d}function r(T,d,e){return T[d]?(T[d].full_date=e,T[d]):{school:!1,full_date:e}}function c(){const T=["bro it's wednesday","you wasted electricity for me to tell you it's wednesday","duhh",`"hmm it's wednesday i wonder what TT it is"`,"busky bime"];return T[Math.floor(Math.random()*T.length)]}const i=u(0),n=864e5;var t=p(()=>{const T=new Date(Date.now()+i.value*n),d=B(T),e=d.slice(0,5);return r(k,e,d)});return(T,d)=>(s(),A(m,null,[a("p",D,o(y(t).full_date),1),a("div",I,[a("button",{id:"changeday",onClick:d[0]||(d[0]=e=>i.value-=1)},"<"),y(t).school==!1?(s(),A("div",S,M)):(s(),A("div",N,[a("label",x,"TODAY IS A"+o(y(t).day=="A"?"N":""),1),a("h1",O,o(y(t).day),1),V,Y,E,a("h1",K,o(y(t).TT),1),y(t).TT=="Advisory"?(s(),A("h3",Q,o(c()),1)):l("",!0),y(t).special?(s(),A("h1",U,"(also apparently its "+o(y(t).special)+")",1)):l("",!0)])),a("button",{id:"changeday",onClick:d[1]||(d[1]=e=>i.value+=1)},">")])],64))}}),R=v({__name:"index",setup(_){const r=h({apiKey:"AIzaSyA62gZmAbAqVdl7ySW9tZlKvIDUBi71ydQ",authDomain:"tuskytime.firebaseapp.com",projectId:"tuskytime",storageBucket:"tuskytime.appspot.com",messagingSenderId:"462748644600",appId:"1:462748644600:web:77801fadbdfac90f37f70d",measurementId:"G-RHMV5QC0XJ"});return g(r),(c,i)=>{const n=$;return s(),f(n)}}});export{R as default};
//# sourceMappingURL=index.4463ab2d.js.map
