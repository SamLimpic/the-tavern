(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c87d704"],{"09c0":function(e,t,c){"use strict";c("37a8")},"37a8":function(e,t,c){},"7acc":function(e,t,c){"use strict";c.r(t);var s=c("7a23");const a=Object(s["I"])("data-v-6db3cae8");Object(s["v"])("data-v-6db3cae8");const o={class:"results container-fluid"},i={key:0,class:"row justify-content-center h-100"},b={class:"col-md-8 col-12 p-md-5"},l={class:"shadow rounded bg-light text-center m-3 p-md-5 p-4"},j={key:0},n={class:"row justify-content-center"},r={key:1},O=Object(s["i"])("h3",null,"Choose from these sets of available Equipment",-1),u={key:2},h=Object(s["i"])("h3",null,"Time to choose some of your abilities!",-1),d={class:"row justify-content-around"},p={key:3},y={key:0,class:"row justify-content-around"},m={class:"col-4 d-md-block d-none bg-primary h-100 p-5 pt-5"},k={class:"shadow rounded bg-light text-center m-3 p-5"},v=Object(s["i"])("h2",null,[Object(s["i"])("u",null,"Character Profile")],-1);Object(s["t"])();const f=a((e,t,c,a,f,g)=>{const C=Object(s["z"])("SkillsComponent"),w=Object(s["z"])("ChoicesComponent"),B=Object(s["z"])("AbilityComponent"),S=Object(s["z"])("AbilityModsComponent"),A=Object(s["z"])("AbilityScore");return Object(s["s"])(),Object(s["e"])("div",o,[a.state.loading?Object(s["f"])("",!0):(Object(s["s"])(),Object(s["e"])("div",i,[Object(s["i"])("div",b,[Object(s["i"])("div",l,[Object(s["i"])("h2",null,[Object(s["i"])("u",null," You have selected a "+Object(s["B"])(a.state.character.race)+" "+Object(s["B"])(a.state.character.job)+"!",1)]),a.state.skills<a.state.job.proficiencies.skills.choose?(Object(s["s"])(),Object(s["e"])("div",j,[Object(s["i"])("h3",null,"Choose "+Object(s["B"])(a.state.job.proficiencies.skills.choose)+" of your available Skills!",1),Object(s["i"])("div",n,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.job.proficiencies.skills.from,e=>(Object(s["s"])(),Object(s["e"])(C,{key:e,"skill-prop":e},null,8,["skill-prop"]))),128))])])):a.state.equipment<a.state.job.equipment[0].choices.length?(Object(s["s"])(),Object(s["e"])("div",r,[O,Object(s["i"])("div",null,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.job.equipment[0].choices,(e,t)=>(Object(s["s"])(),Object(s["e"])(w,{key:t,"choice-prop":e,"index-prop":t},null,8,["choice-prop","index-prop"]))),128))])])):a.state.chooseAbilities&&a.state.chooseAbilities.length>a.state.abilities?(Object(s["s"])(),Object(s["e"])("div",u,[h,Object(s["i"])("div",d,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.chooseAbilities,e=>(Object(s["s"])(),Object(s["e"])(B,{key:e,"ability-prop":e},null,8,["ability-prop"]))),128))])])):(Object(s["s"])(),Object(s["e"])("div",p,[a.state.chooseScores&&a.state.mods>a.state.modChoice?(Object(s["s"])(),Object(s["e"])("div",y,[(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(a.state.chooseScores,e=>(Object(s["s"])(),Object(s["e"])(S,{key:e,"mod-prop":e},null,8,["mod-prop"]))),128))])):Object(s["f"])("",!0),Object(s["i"])(A)]))])]),Object(s["i"])("div",m,[Object(s["i"])("div",k,[v,Object(s["i"])("h3",null,"Party Role: "+Object(s["B"])(a.state.character.role),1),Object(s["i"])("h3",null,"Play Style: "+Object(s["B"])(a.state.character.style),1),Object(s["i"])("h3",null,"Race: "+Object(s["B"])(a.state.character.race),1),Object(s["i"])("h3",null,"Class: "+Object(s["B"])(a.state.character.job),1),Object(s["i"])("h3",null,"Sub-Class: "+Object(s["B"])(a.state.character.subJob),1),Object(s["i"])("h3",null,"Background: "+Object(s["B"])(a.state.character.background),1)])])]))])});var g=c("83fc"),C=c("da15"),w={name:"Results",setup(){const e=Object(s["w"])({loading:!0,character:Object(s["c"])(()=>g["a"].character),activeCharacter:Object(s["c"])(()=>g["a"].activeCharacter),job:Object(s["c"])(()=>g["a"].job),chooseScores:Object(s["c"])(()=>g["a"].chooseScores),chooseAbilities:Object(s["c"])(()=>g["a"].chooseAbilities),skills:Object(s["c"])(()=>g["a"].count.skills),equipment:Object(s["c"])(()=>g["a"].count.equipment),languages:Object(s["c"])(()=>g["a"].count.languages),mods:Object(s["c"])(()=>g["a"].count.mods),modChoice:Object(s["c"])(()=>g["a"].count.modChoice),score:Object(s["c"])(()=>g["a"].count.score),abilities:Object(s["c"])(()=>g["a"].count.abilities),from:Object(s["c"])(()=>g["a"].languages)});return Object(s["q"])(async()=>{C["a"].createCharacter(),C["a"].getSkills(),C["a"].getAbilityModifiers(),g["a"].activeCharacter=g["a"].character,e.loading=!1}),{state:e,user:Object(s["c"])(()=>g["a"].user)}}};c("09c0");w.render=f,w.__scopeId="data-v-6db3cae8";t["default"]=w}}]);