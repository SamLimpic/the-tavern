(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2257e4"],{e542:function(e,t,c){"use strict";c.r(t);var a=c("7a23");const s=Object(a["F"])("data-v-0b8c4d7c");Object(a["v"])("data-v-0b8c4d7c");const r={class:"account container-fluid"},i={class:"row justify-content-center h-100"},n={class:"col-lg-8 d-lg-block d-none p-md-4"},b={class:"row justify-content-between shadow rounded bg-light m-4 p-md-4 p-3"},d={key:1,class:"col-12 text-center"},o=Object(a["i"])("h1",{class:"font-xl"},[Object(a["i"])("u",null,"Please select a Character for more details")],-1),l=Object(a["i"])("h2",{class:"mt-5 font-xxl"},[Object(a["i"])("i",{class:"fas fa-dice-d20 fa-spin text-warning"})],-1),j={class:"col-lg-4 col-12 bg-primary text-center h-100 p-md-4 p-2"},O={key:0,class:"shadow rounded bg-light m-4 p-md-4 p-3"},h=Object(a["i"])("h2",{class:"my-5 font-xxl"},[Object(a["i"])("i",{class:"fas fa-dice-d20 fa-spin text-warning"})],-1),u={key:1,class:"shadow rounded bg-light m-4 p-md-4 p-3"},p=Object(a["i"])("h2",{class:"font-lg m-0 p-0"},[Object(a["i"])("u",null,"Your Characters")],-1),g={key:0,class:"font-md"},f={key:2,class:"shadow rounded bg-light text-center m-3 p-5"},v=Object(a["i"])("h2",null,"Log in to view your character list!",-1);Object(a["t"])();const m=s((e,t,c,s,m,w)=>{const y=Object(a["z"])("ActiveCharacter"),k=Object(a["z"])("CharacterList");return Object(a["s"])(),Object(a["e"])("div",r,[Object(a["i"])("div",i,[Object(a["i"])("div",n,[Object(a["i"])("div",b,[s.state.activeCharacter.id?(Object(a["s"])(),Object(a["e"])(y,{key:0})):(Object(a["s"])(),Object(a["e"])("div",d,[o,l]))])]),Object(a["i"])("div",j,[s.state.loading?(Object(a["s"])(),Object(a["e"])("div",O,[h])):s.state.user.isAuthenticated&&s.state.characters?(Object(a["s"])(),Object(a["e"])("div",u,[p,0===s.state.characters.length?(Object(a["s"])(),Object(a["e"])("h3",g," Looks like you need to make some characters! ")):Object(a["f"])("",!0),(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(s.state.characters,e=>(Object(a["s"])(),Object(a["e"])(k,{key:e.id,character:e},null,8,["character"]))),128))])):(Object(a["s"])(),Object(a["e"])("div",f,[v]))])])])});var w=c("83fc"),y=c("da15"),k={name:"Account",setup(){const e=Object(a["w"])({user:Object(a["c"])(()=>w["a"].user),loading:!0,characters:Object(a["c"])(()=>w["a"].characters),activeCharacter:Object(a["c"])(()=>w["a"].activeCharacter),account:Object(a["c"])(()=>w["a"].account),AppState:Object(a["c"])(()=>w["a"])});return Object(a["q"])(async()=>{setTimeout((function(){e.loading=!1}),1e3),await y["a"].getCharacters(e.account.id)}),{state:e}}};k.render=m,k.__scopeId="data-v-0b8c4d7c";t["default"]=k}}]);