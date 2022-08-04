(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7f8d"],{"78a7":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const s=Object(c["E"])("data-v-3701fc3f");Object(c["v"])("data-v-3701fc3f");const o={class:"home container-fluid"},r={class:"row justify-content-center h-100"},n={class:"col-lg-8 col-12 shadow p-md-4 p-2"},d={class:"shadow rounded bg-light text-center m-4 p-md-4 p-3"},i=Object(c["g"])('<h2 class="font-lg m-0" data-v-3701fc3f><u data-v-3701fc3f>Welcome Traveller!</u></h2><p class="font-sm mb-1 mx-lg-2 mx-3" data-v-3701fc3f> The Tavern is an interactive character creation experience for Dungeons &amp; Dragons 5th Edition, made for new players and seasoned veterans alike! </p><p class="font-xs d-lg-block d-none mb-1 mx-lg-2 mx-3" data-v-3701fc3f> This application was made to streamline the process of creating a fresh, customized, and ready-to-play character for any Dungeons and Dragons game. </p><span class="text-warning text-shadow text-center font-xxl" data-v-3701fc3f><i class="fab fa-d-and-d" data-v-3701fc3f></i></span><p class="font-xs mx-lg-2 mx-3" data-v-3701fc3f><i data-v-3701fc3f>Simply follow the promps to easily create your ideal character and start your adventure! </i></p>',5),l={class:"row justify-content-center align-items-center mb-1"},b={class:"col-md-3 col-5 order-md-1 order-2 mt-md-0 mt-3 text-right"},m=Object(c["i"])("button",{type:"button",class:"btn btn-primary bg-secondary text-shadow w-100 font-xs"}," About ",-1),u={class:"col-md-5 col-sm-6 col-8 order-md-2 order-1 mt-md-0 mt-2 mx-md-0 mx-5"},f={class:"col-md-3 col-5 order-md-3 order-3 mt-md-0 mt-3 text-left"},h=Object(c["i"])("button",{type:"button",class:"btn btn-primary bg-secondary text-shadow w-100 font-xs"}," Account ",-1),j={class:"col-4 d-lg-block d-none bg-secondary shadow p-md-4"},O={class:"shadow rounded bg-light text-center m-4 p-md-4 p-3"},p=Object(c["i"])("h2",{class:"font-lg m-0 p-0"},[Object(c["i"])("u",null,"Your Characters")],-1),g={key:0},v=Object(c["i"])("i",{class:"fas fa-dice-d20 fa-spin text-warning mt-3 font-xxl"},null,-1),y={key:1},w={key:0,class:"font-md"},x={key:2},k=Object(c["i"])("h2",null,"Log in to view your character list!",-1);Object(c["t"])();const A=s((t,e,a,A,z,I)=>{const S=Object(c["z"])("router-link"),q=Object(c["z"])("CharacterList");return Object(c["s"])(),Object(c["e"])("div",o,[Object(c["i"])("div",r,[Object(c["i"])("div",n,[Object(c["i"])("div",d,[i,Object(c["i"])("div",l,[Object(c["i"])("div",b,[Object(c["i"])(S,{to:{name:"About"}},{default:s(()=>[m]),_:1})]),Object(c["i"])("div",u,[Object(c["i"])("button",{type:"button",class:"btn btn-primary text-shadow w-100 font-sm py-md-3",onClick:e[1]||(e[1]=t=>A.start())}," Get Started! ")]),Object(c["i"])("div",f,[Object(c["i"])(S,{to:{name:"Account"}},{default:s(()=>[h]),_:1})])])])]),Object(c["i"])("div",j,[Object(c["i"])("div",O,[p,A.state.loading?(Object(c["s"])(),Object(c["e"])("div",g,[v])):A.state.user.isAuthenticated&&A.state.characters?(Object(c["s"])(),Object(c["e"])("div",y,[0===A.state.characters.length?(Object(c["s"])(),Object(c["e"])("h3",w," Looks like you need to make some characters! ")):Object(c["f"])("",!0),Object(c["i"])(S,{to:{name:"Account"}},{default:s(()=>[(Object(c["s"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(A.state.characters,t=>(Object(c["s"])(),Object(c["e"])(q,{key:t.id,character:t},null,8,["character"]))),128))]),_:1})])):(Object(c["s"])(),Object(c["e"])("div",x,[k]))])])])])});var z=a("83fc"),I=a("da15"),S=a("5d40"),q=a("41cb"),C=a("53da"),T={name:"Home",setup(){const t=Object(c["w"])({user:Object(c["c"])(()=>z["a"].user),account:Object(c["c"])(()=>z["a"].account),loading:!0,results:Object(c["c"])(()=>z["a"].results),quiz:Object(c["c"])(()=>z["a"].quiz),character:Object(c["c"])(()=>z["a"].character),characters:Object(c["c"])(()=>z["a"].characters)});return Object(c["q"])(async()=>{const e=sessionStorage.getItem("reload");e?sessionStorage.removeItem("reload"):(sessionStorage.setItem("reload","true"),location.reload()),localStorage.clear(),await I["a"].getCharacters(t.account.id),setTimeout((function(){t.loading=!1}),1500)}),{state:t,async random(){try{await C["a"].randomCharacter()}catch(t){S["a"].toast("Error: "+t,"error")}},async start(){try{await S["a"].start(),z["a"].quiz?S["a"].toast("A new adventurer then!","info"):S["a"].toast("I thought I'd seen you before!","info"),q["a"].push("questions")}catch(t){S["a"].toast("Error: "+t,"error")}}}}};T.render=A,T.__scopeId="data-v-3701fc3f";e["default"]=T}}]);