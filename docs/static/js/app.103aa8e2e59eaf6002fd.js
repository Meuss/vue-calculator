webpackJsonp([0],{J8vl:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("7+uW"),n={props:["number"],methods:{click:function(){this.$store.commit("number",this.number),this.clickfx(this.number)},clickfx:function(t){document.querySelector('[data-number="'+t+'"]').classList.add("clicked"),setTimeout(function(){document.querySelector('[data-number="'+t+'"]').classList.remove("clicked")},80)}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{"data-id":this.number},on:{click:this.click}},[this._v("\n  "+this._s(this.number)+"\n")])},staticRenderFns:[]};var a=s("VU/8")(n,i,!1,function(t){s("iD65")},"data-v-0ee5f698",null).exports,c=s("NYxO");r.a.use(c.a);var u=new c.a.Store({strict:!0,state:{currentShown:0,lastOperator:!1,lastClickedWasOperator:!1,newNum:!1,oldNum:"",resultNum:""},mutations:{reset:function(t){t.currentShown=0,t.lastClickedWasOperator=!1,t.lastOperator=!1,t.newNum=!1,t.oldNum="",t.resultNum=""},number:function(t,e){if(t.lastClickedWasOperator)t.currentShown=e,t.lastClickedWasOperator=!1;else if(isNaN(e))if(-1===t.currentShown.toString().indexOf(".")){var s=t.currentShown.toString(),r=e.toString();t.currentShown=s+r}else console.log("already has a dot!");else{var n=t.currentShown.toString(),i=e.toString();t.currentShown=parseFloat(n.concat(i))}},inverse:function(t){t.lastOperator="inverse",t.lastClickedWasOperator=!0,t.currentShown=-t.currentShown},divide:function(t){t.lastOperator="/",t.lastClickedWasOperator=!0,t.oldNum=t.currentShown},multiply:function(t){t.lastOperator="*",t.lastClickedWasOperator=!0,t.oldNum=t.currentShown},minus:function(t){t.lastOperator="-",t.lastClickedWasOperator=!0,t.oldNum=t.currentShown},plus:function(t){t.lastOperator="+",t.lastClickedWasOperator=!0,t.oldNum=t.currentShown},percent:function(t){t.lastOperator="%",t.lastClickedWasOperator=!0,t.currentShown/=100},equals:function(t){switch(t.lastOperator){case"+":t.resultNum=parseFloat(t.oldNum)+parseFloat(t.currentShown);break;case"-":t.resultNum=parseFloat(t.oldNum)-parseFloat(t.currentShown);break;case"*":t.resultNum=parseFloat(t.oldNum)*parseFloat(t.currentShown);break;case"/":t.resultNum=parseFloat(t.oldNum)/parseFloat(t.currentShown);break;case"inverse":t.resultNum=t.currentShown;break;case"%":t.resultNum=parseFloat(t.oldNum)/100;break;default:t.resultNum=t.currentShown}isFinite(t.resultNum)||(isNaN(t.resultNum)?(t.currentShown="NaN",t.resultNum="NaN"):(t.currentShown="infinity",t.resultNum="infinity")),t.currentShown=t.resultNum,t.oldNum="",t.lastOperator=!1}}}),o={methods:{clickfx:function(t){document.querySelector(t).classList.add("clicked"),setTimeout(function(){document.querySelector(t).classList.remove("clicked")},80)},inverse:function(){this.$store.commit("inverse"),this.clickfx(".advanced.inverse")},reset:function(){this.$store.commit("reset"),this.clickfx(".advanced.ac")},percent:function(){this.$store.commit("percent"),this.clickfx(".advanced.percent")}},computed:{startPoint:function(){var t="C";return 0!==u.state.currentShown||0!==u.state.currentShown||u.state.lastClickedWasOperator||u.state.lastOperator||u.state.newNum||""!==u.state.oldNum||""!==u.state.resultNum||(t="AC"),t}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"advanced-outer"},[s("div",{staticClass:"advanced ac",on:{click:t.reset}},[t._v(t._s(t.startPoint))]),t._v(" "),s("div",{staticClass:"advanced inverse",on:{click:t.inverse}},[t._v("+/-")]),t._v(" "),s("div",{staticClass:"advanced percent",on:{click:t.percent}},[t._v("%")])])},staticRenderFns:[]};var d=s("VU/8")(o,l,!1,function(t){s("J8vl")},"data-v-936d8926",null).exports,m={methods:{clickfx:function(t){document.querySelector(t).classList.add("clicked"),setTimeout(function(){document.querySelector(t).classList.remove("clicked")},80)},divide:function(){this.$store.commit("divide"),this.clickfx(".basic.divide")},multiply:function(){this.$store.commit("multiply"),this.clickfx(".basic.multiply")},minus:function(){this.$store.commit("minus"),this.clickfx(".basic.minus")},plus:function(){this.$store.commit("plus"),this.clickfx(".basic.plus")},equals:function(){this.$store.commit("equals"),this.clickfx(".basic.equals")}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"basic-outer"},[s("div",{staticClass:"basic divide",on:{click:t.divide}},[t._v("÷")]),t._v(" "),s("div",{staticClass:"basic multiply",on:{click:t.multiply}},[t._v("×")]),t._v(" "),s("div",{staticClass:"basic minus",on:{click:t.minus}},[t._v("-")]),t._v(" "),s("div",{staticClass:"basic plus",on:{click:t.plus}},[t._v("+")]),t._v(" "),s("div",{staticClass:"basic equals",on:{click:t.equals}},[t._v("=")])])},staticRenderFns:[]};var p=s("VU/8")(m,v,!1,function(t){s("sAxY")},"data-v-3097c024",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"value"},[this._v("\n  "+this._s(this.currentShown)+"\n")])},staticRenderFns:[]};var f={name:"App",components:{Advanced:d,Numbers:a,Value:s("VU/8")({data:function(){return{}},computed:{currentShown:function(){return this.$store.state.currentShown}}},h,!1,function(t){s("f0eQ")},"data-v-00dc84d5",null).exports,Basic:p},data:function(){return{numbers:[7,8,9,4,5,6,1,2,3,0,"."]}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"value-wrapper"},[this._m(0),this._v(" "),e("Value")],1),this._v(" "),e("div",{staticClass:"buttons"},[e("div",{staticClass:"advanced-wrapper"},[e("Advanced")],1),this._v(" "),e("div",{staticClass:"basic-wrapper"},[e("Basic")],1),this._v(" "),e("div",{staticClass:"numbers-wrapper"},[e("div",{staticClass:"numbers"},this._l(this.numbers,function(t){return e("div",{key:t,staticClass:"number",attrs:{"data-number":t}},[e("Numbers",{attrs:{number:t}})],1)}))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fake-buttons"},[e("div",{staticClass:"close"}),this._v(" "),e("div",{staticClass:"minimize"}),this._v(" "),e("div",{staticClass:"fullscreen"})])}]};var N=s("VU/8")(f,k,!1,function(t){s("hHNe")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",store:u,components:{App:N},template:"<App/>"})},f0eQ:function(t,e){},hHNe:function(t,e){},iD65:function(t,e){},sAxY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.103aa8e2e59eaf6002fd.js.map