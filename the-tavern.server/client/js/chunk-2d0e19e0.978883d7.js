(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e19e0"],{"7acc":function(e,t,c){"use strict";c.r(t);var s=c("7a23");const a=Object(s["I"])("data-v-da21d970");Object(s["v"])("data-v-da21d970");const o={class:"results container-fluid"},i={class:"row justify-content-center h-100"},b={class:"col-lg-8 col-12 p-md-4"},l={key:0,class:"shadow rounded bg-light text-center m-4 p-md-4 p-3"},n=Object(s["i"])("h2",{class:"font-xl"},[Object(s["i"])("u",null,"Loading your Character"),Object(s["i"])("br"),Object(s["i"])("i",{class:"fas fa-dice-d20 fa-spin text-warning font-xxl mt-3"})],-1),r={key:1,class:"shadow rounded bg-light text-center m-4 p-sm-4 p-3"},j={class:"font-lg"},O={key:0},d={class:"font-sm"},h={class:"row justify-content-center"},u={key:1},p=Object(s["i"])("h3",{class:"font-sm"}," Choose from these sets of available Equipment ",-1),f={key:2},m=Object(s["i"])("h3",{class:"font-sm"}," Time to choose some of your abilities! ",-1),y={class:"row justify-content-around"},g={key:3},v={class:"font-sm"},k={class:"row justify-content-around"},x={key:4},C={key:5,class:"col-12 text-center"},w=Object(s["i"])("h3",{class:"font-sm"},[Object(s["h"])(" Congratulations!"),Object(s["i"])("br"),Object(s["h"])("Click the dice above to save your Character! ")],-1),B={class:"col-4 d-lg-block d-none bg-primary h-100 p-md-4"},A={key:0,class:"shadow rounded bg-light text-center m-4 p-md-4 p-3"},S=Object(s["i"])("h2",{class:"font-lg"},[Object(s["i"])("u",null,"Character Profile"),Object(s["i"])("br"),Object(s["i"])("i",{class:"fas fa-dice-d20 fa-spin text-warning font-xxl mt-3"})],-1),q={key:1,class:"shadow rounded bg-light text-left m-4 p-md-4 p-3"},z=Object(s["i"])("h2",{class:"font-lg"},[Object(s["i"])("u",null,"Your Profile")],-1),J={class:"font-sm"},P=Object(s["h"])(" Party Role: "),L={class:"font-sm"},M=Object(s["h"])(" Play Style: "),R={class:"font-sm"},E=Object(s["h"])(" Race: "),I={class:"font-xs"},T={class:"font-sm"},Y=Object(s["h"])(" Class: "),_={class:"font-xs"},N={key:0,class:"font-sm"},D=Object(s["h"])(" Sub-Class: "),F={class:"font-xs"},G={class:"font-sm"},H=Object(s["h"])(" Background: "),K={class:"font-xs"};Object(s["t"])();const Q=a((e,t,c,a,Q,U)=>{const V=Object(s["z"])("SkillsComponent"),W=Object(s["z"])("ChoicesComponent"),X=Object(s["z"])("AbilityComponent"),Z=Object(s["z"])("AbilityModsComponent"),$=Object(s["z"])("AbilityScore");return Object(s["s"])(),Object(s["e"])("div",o,[Object(s["i"])("div",i,[Object(s["i"])("div",b,[a.state.loading?(Object(s["s"])(),Object(s["e"])("div",l,[n])):(Object(s["s"])(),Object(s["e"])("div",r,[Object(s["i"])("h2",j,[Object(s["i"])("u",null," You have selected a "+Object(s["B"])(a.state.character.race)+" "+Object(s["B"])(a.state.character.job)+"!",1)]),a.state.skills<a.state.job.proficiencies.skills.choose?(Object(s["s"])(),Object(s["e"])("div",O,[Object(s["i"])("h3",d," Choose "+Object(s["B"])(a.state.job.proficiencies.skills.choose)+" of your available Skills! ",1),Object(s["i"])("div",h,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.job.proficiencies.skills.from,e=>(Object(s["s"])(),Object(s["e"])(V,{key:e,"skill-prop":e},null,8,["skill-prop"]))),128))])])):a.state.equipment<a.state.job.equipment[0].choices.length?(Object(s["s"])(),Object(s["e"])("div",u,[p,Object(s["i"])("div",null,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.job.equipment[0].choices,(e,t)=>(Object(s["s"])(),Object(s["e"])(W,{key:t,"choice-prop":e,"index-prop":t},null,8,["choice-prop","index-prop"]))),128))])])):a.state.chooseAbilities&&a.state.chooseAbilities.length>a.state.abilities?(Object(s["s"])(),Object(s["e"])("div",f,[m,Object(s["i"])("div",y,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.chooseAbilities,(e,t)=>(Object(s["s"])(),Object(s["e"])(X,{key:t,"ability-prop":e,"index-prop":t},null,8,["ability-prop","index-prop"]))),128))])])):a.state.chooseScores&&a.state.mods>a.state.modChoice?(Object(s["s"])(),Object(s["e"])("div",g,[Object(s["i"])("h3",v," Now assign your "+Object(s["B"])(a.state.mods)+" Ability Modifiers! ",1),Object(s["i"])("div",k,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.chooseScores,e=>(Object(s["s"])(),Object(s["e"])(Z,{key:e,"mod-prop":e},null,8,["mod-prop"]))),128))])])):a.state.score<6?(Object(s["s"])(),Object(s["e"])("div",x,[Object(s["i"])($)])):(Object(s["s"])(),Object(s["e"])("div",C,[Object(s["i"])("i",{class:"fas fa-dice-d20 text-success fa-7x text-shadow mt-3 mb-4",onClick:t[1]||(t[1]=(...e)=>a.saveCharacter&&a.saveCharacter(...e))}),w]))]))]),Object(s["i"])("div",B,[a.state.loading?(Object(s["s"])(),Object(s["e"])("div",A,[S])):(Object(s["s"])(),Object(s["e"])("div",q,[z,Object(s["i"])("h3",J,[P,Object(s["i"])("span",{class:a.state.colors[a.state.character.role.toLowerCase()]+" font-xs"},[Object(s["i"])("i",null,Object(s["B"])(a.state.character.role),1)],2)]),Object(s["i"])("h3",L,[M,Object(s["i"])("span",{class:a.state.colors[a.state.character.style.toLowerCase()]+" font-xs"},[Object(s["i"])("i",null,Object(s["B"])(a.state.character.style),1)],2)]),Object(s["i"])("h3",R,[E,Object(s["i"])("span",I,[Object(s["i"])("i",null,Object(s["B"])(a.state.character.race),1)])]),Object(s["i"])("h3",T,[Y,Object(s["i"])("span",_,[Object(s["i"])("i",null,Object(s["B"])(a.state.character.job),1)])]),void 0!==a.state.character.subJob?(Object(s["s"])(),Object(s["e"])("h3",N,[D,Object(s["i"])("span",F,[Object(s["i"])("i",null,Object(s["B"])(a.state.character.subJob),1)])])):Object(s["f"])("",!0),Object(s["i"])("h3",G,[H,Object(s["i"])("span",K,[Object(s["i"])("i",null,Object(s["B"])(a.state.character.background),1)])])]))])])])});var U=c("83fc"),V=c("53da"),W=c("da15"),X=c("5d40"),Z={name:"Results",setup(){const e=Object(s["w"])({loading:!0,character:Object(s["c"])(()=>U["a"].character),activeCharacter:Object(s["c"])(()=>U["a"].activeCharacter),job:Object(s["c"])(()=>U["a"].job),chooseScores:Object(s["c"])(()=>U["a"].chooseScores),chooseAbilities:Object(s["c"])(()=>U["a"].chooseAbilities),skills:Object(s["c"])(()=>U["a"].count.skills),equipment:Object(s["c"])(()=>U["a"].count.equipment),languages:Object(s["c"])(()=>U["a"].count.languages),mods:Object(s["c"])(()=>U["a"].count.mods),modChoice:Object(s["c"])(()=>U["a"].count.modChoice),score:Object(s["c"])(()=>U["a"].count.score),abilities:Object(s["c"])(()=>U["a"].count.abilities),from:Object(s["c"])(()=>U["a"].languages),colors:{tank:"text-danger",damage:"text-warning",support:"text-success",utility:"text-info",weapons:"text-danger",spells:"text-info",balance:"text-success"}});return Object(s["q"])(async()=>{"true"===U["a"].built?W["a"].createCharacter():V["a"].loadBuild(),U["a"].activeCharacter=U["a"].character,setTimeout((function(){e.loading=!1}),1e3)}),{state:e,user:Object(s["c"])(()=>U["a"].user),async saveCharacter(){try{await X["a"].multiModal(),await W["a"].saveCharacter()}catch(e){X["a"].toast("Error"+e,"error")}}}}};Z.render=Q,Z.__scopeId="data-v-da21d970";t["default"]=Z}}]);