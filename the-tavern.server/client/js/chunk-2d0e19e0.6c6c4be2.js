(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e19e0"],{"7acc":function(e,t,c){"use strict";c.r(t);var s=c("7a23");const a=Object(s["E"])("data-v-4c438e67");Object(s["v"])("data-v-4c438e67");const o={class:"results container-fluid"},l={class:"row justify-content-center h-100"},i={class:"col-lg-8 col-12 p-md-4 p-2"},b={key:0,class:"shadow rounded bg-light text-center m-4 p-md-4 p-3"},j=Object(s["i"])("h2",{class:"font-xl"},[Object(s["i"])("u",null,"Loading your Character")],-1),n=Object(s["i"])("i",{class:"fas fa-dice-d20 fa-spin text-warning font-xxl mt-3"},null,-1),O={key:1,class:"shadow rounded bg-light text-center m-4 p-sm-4 p-3"},r={class:"font-lg"},u={key:0},h={class:"font-sm"},p=Object(s["i"])("h2",{class:"font-xs"},[Object(s["i"])("b",{class:"text-success"}," GREEN "),Object(s["h"])(" skills are encouraged for your build, while "),Object(s["i"])("b",{class:"text-danger"}," RED "),Object(s["h"])(" skills are discouraged. ")],-1),d={class:"row justify-content-center"},f={key:1},g={class:"font-sm"},m={class:"row justify-content-center"},y={key:2},k=Object(s["i"])("h3",{class:"font-sm"}," Choose 1 from each of these sets of available Equipment! ",-1),v={key:3},x=Object(s["i"])("h3",{class:"font-sm"}," Time to choose some of your abilities! ",-1),w={class:"row justify-content-around"},C={key:4},S={class:"font-sm"},B={class:"row justify-content-around"},L={key:5},A={class:"font-sm"},E={class:"row justify-content-around"},q={key:6},z={class:"font-sm"},R=Object(s["i"])("h2",{class:"font-xs"},[Object(s["i"])("b",{class:"text-success"}," GREEN "),Object(s["h"])(" abilities are encouraged for your build, while "),Object(s["i"])("b",{class:"text-danger"}," RED "),Object(s["h"])(" abilities are discouraged. ")],-1),J={class:"row justify-content-around"},P={key:7},N={class:"col-4 d-lg-block d-none bg-secondary h-100 p-md-4"},D={key:0,class:"shadow rounded bg-light text-center m-4 p-md-4 p-3"},G=Object(s["i"])("h2",{class:"font-lg"},[Object(s["i"])("u",null,"Character Profile")],-1),T=Object(s["i"])("i",{class:"fas fa-dice-d20 fa-spin text-warning font-xxl mt-3"},null,-1),Y={key:1,class:"shadow rounded bg-light text-left m-4 p-md-4 p-3"},_=Object(s["i"])("h2",{class:"font-lg"},[Object(s["i"])("u",null,"Your Profile")],-1),I={class:"font-sm"},M=Object(s["h"])(" Party Role: "),F={class:"font-sm"},H=Object(s["h"])(" Play Style: "),K={class:"font-sm"},Q=Object(s["h"])(" Race: "),U={class:"font-xs"},V={class:"font-sm"},W=Object(s["h"])(" Class: "),X={class:"font-xs"},Z={key:0,class:"font-sm"},$=Object(s["h"])(" Sub-Class: "),ee={class:"font-xs"},te={class:"font-sm"},ce=Object(s["h"])(" Background: "),se={class:"font-xs"};Object(s["t"])();const ae=a((e,t,c,a,ae,oe)=>{const le=Object(s["z"])("SkillList"),ie=Object(s["z"])("Language"),be=Object(s["z"])("EquipmentChoice"),je=Object(s["z"])("ActiveAbility"),ne=Object(s["z"])("SpellList"),Oe=Object(s["z"])("AbilityMod"),re=Object(s["z"])("Score");return Object(s["s"])(),Object(s["e"])("div",o,[Object(s["i"])("div",l,[Object(s["i"])("div",i,[a.state.loading?(Object(s["s"])(),Object(s["e"])("div",b,[j,n])):(Object(s["s"])(),Object(s["e"])("div",O,[Object(s["i"])("h2",r,[Object(s["i"])("u",null," You have selected a "+Object(s["B"])(a.state.character.race)+" "+Object(s["B"])(a.state.character.job)+"!",1)]),a.state.skills<a.state.chooseSkills.choose?(Object(s["s"])(),Object(s["e"])("div",u,[Object(s["i"])("h3",h," Choose "+Object(s["B"])(a.state.chooseSkills.choose)+" of your available Skills! ",1),p,Object(s["i"])("div",d,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.chooseSkills.from,(e,t)=>(Object(s["s"])(),Object(s["e"])(le,{key:t,"skill-prop":e,"select-prop":!0},null,8,["skill-prop"]))),128))])])):a.state.languages<a.state.chooseLanguages.choose?(Object(s["s"])(),Object(s["e"])("div",f,[Object(s["i"])("h3",g," Choose "+Object(s["B"])(a.state.chooseLanguages.choose)+" of your available Languages! ",1),Object(s["i"])("div",m,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.chooseLanguages.from,e=>(Object(s["s"])(),Object(s["e"])(ie,{key:e,"language-prop":e,"select-prop":!0},null,8,["language-prop"]))),128))])])):a.state.equipment<a.state.job.equipment[0].choices.length?(Object(s["s"])(),Object(s["e"])("div",y,[k,(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.job.equipment[0].choices,(e,t)=>(Object(s["s"])(),Object(s["e"])(be,{key:t,"choice-prop":e,"index-prop":t},null,8,["choice-prop","index-prop"]))),128))])):a.state.chooseAbilities&&a.state.chooseAbilities.length>a.state.abilities?(Object(s["s"])(),Object(s["e"])("div",v,[x,Object(s["i"])("div",w,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.chooseAbilities,(e,t)=>(Object(s["s"])(),Object(s["e"])(je,{key:t,"ability-prop":e,"index-prop":t},null,8,["ability-prop","index-prop"]))),128))])])):a.state.cantrips<a.state.chooseCantrips.choose?(Object(s["s"])(),Object(s["e"])("div",C,[Object(s["i"])("h3",S," Choose "+Object(s["B"])(a.state.chooseCantrips.choose)+" of your available Cantrips! ",1),Object(s["i"])("div",B,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.chooseCantrips.from,(e,t)=>(Object(s["s"])(),Object(s["e"])(ne,{key:t,"spell-prop":e,"select-prop":!0},null,8,["spell-prop"]))),128))])])):a.state.spells<a.state.chooseSpells.choose?(Object(s["s"])(),Object(s["e"])("div",L,[Object(s["i"])("h3",A," Choose "+Object(s["B"])(a.state.chooseSpells.choose)+" of your available Spells! ",1),Object(s["i"])("div",E,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.chooseSpells.from,(e,t)=>(Object(s["s"])(),Object(s["e"])(ne,{key:t,"spell-prop":e,"select-prop":!0},null,8,["spell-prop"]))),128))])])):a.state.chooseScores&&a.state.mods>a.state.modChoice?(Object(s["s"])(),Object(s["e"])("div",q,[Object(s["i"])("h3",z," Now select "+Object(s["B"])(a.state.mods)+" Abilities to improve! ",1),R,Object(s["i"])("div",J,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.chooseScores,e=>(Object(s["s"])(),Object(s["e"])(Oe,{key:e,"mod-prop":e},null,8,["mod-prop"]))),128))])])):(Object(s["s"])(),Object(s["e"])("div",P,[Object(s["i"])(re)]))]))]),Object(s["i"])("div",N,[a.state.loading?(Object(s["s"])(),Object(s["e"])("div",D,[G,T])):(Object(s["s"])(),Object(s["e"])("div",Y,[_,Object(s["i"])("h3",I,[M,Object(s["i"])("span",{class:a.state.colors[a.state.character.role.toLowerCase()]+" font-xs"},[Object(s["i"])("i",null,Object(s["B"])(a.state.character.role),1)],2)]),Object(s["i"])("h3",F,[H,Object(s["i"])("span",{class:a.state.colors[a.state.character.style.toLowerCase()]+" font-xs"},[Object(s["i"])("i",null,Object(s["B"])(a.state.character.style),1)],2)]),Object(s["i"])("h3",K,[Q,Object(s["i"])("span",U,[Object(s["i"])("i",null,Object(s["B"])(a.state.character.race),1)])]),Object(s["i"])("h3",V,[W,Object(s["i"])("span",X,[Object(s["i"])("i",null,Object(s["B"])(a.state.character.job),1)])]),void 0!==a.state.character.subJob?(Object(s["s"])(),Object(s["e"])("h3",Z,[$,Object(s["i"])("span",ee,[Object(s["i"])("i",null,Object(s["B"])(a.state.character.subJob),1)])])):Object(s["f"])("",!0),Object(s["i"])("h3",te,[ce,Object(s["i"])("span",se,[Object(s["i"])("i",null,Object(s["B"])(a.state.character.background),1)])])]))])])])});var oe=c("83fc"),le=c("53da"),ie=c("da15"),be={name:"Results",setup(){const e=Object(s["w"])({loading:!0,built:Object(s["c"])(()=>oe["a"].built),confirm:Object(s["c"])(()=>oe["a"].confirm),character:Object(s["c"])(()=>oe["a"].character),job:Object(s["c"])(()=>oe["a"].job),skills:Object(s["c"])(()=>oe["a"].count.skills),chooseSkills:Object(s["c"])(()=>oe["a"].skills),equipment:Object(s["c"])(()=>oe["a"].count.equipment),mods:Object(s["c"])(()=>oe["a"].count.mods),modChoice:Object(s["c"])(()=>oe["a"].count.modChoice),score:Object(s["c"])(()=>oe["a"].count.score),chooseScores:Object(s["c"])(()=>oe["a"].chooseScores),abilities:Object(s["c"])(()=>oe["a"].count.abilities),chooseAbilities:Object(s["c"])(()=>oe["a"].chooseAbilities),chooseLanguages:Object(s["c"])(()=>oe["a"].languages),languages:Object(s["c"])(()=>oe["a"].count.languages),chooseCantrips:Object(s["c"])(()=>oe["a"].cantrips),cantrips:Object(s["c"])(()=>oe["a"].count.cantrips),chooseSpells:Object(s["c"])(()=>oe["a"].spells),spells:Object(s["c"])(()=>oe["a"].count.spells),colors:{tank:"text-danger",damage:"text-warning",support:"text-success",utility:"text-info",weapons:"text-danger",spells:"text-info",balance:"text-success"}});return Object(s["q"])(async()=>{await le["a"].getSpells(),await le["a"].getSkills(),e.built?ie["a"].createCharacter():le["a"].loadBuild(),oe["a"].activeCharacter=oe["a"].character,setTimeout((function(){e.loading=!1}),1500)}),{state:e,user:Object(s["c"])(()=>oe["a"].user)}}};be.render=ae,be.__scopeId="data-v-4c438e67";t["default"]=be}}]);