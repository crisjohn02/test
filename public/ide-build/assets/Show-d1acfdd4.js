import{_ as i}from"./AppLayout-5fd8f22e.js";import o from"./DeleteTeamForm-893e8d86.js";import{S as r}from"./SectionBorder-984e0f11.js";import l from"./TeamMemberManager-a5568060.js";import n from"./UpdateTeamNameForm-11f324e9.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app-5d68f662.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-9c8b45e6.js";import"./SectionTitle-3efb50a6.js";import"./ConfirmationModal-44afd937.js";import"./DangerButton-314e32c2.js";import"./SecondaryButton-d999a621.js";import"./ActionMessage-7edc0cc1.js";import"./DialogModal-fd6de260.js";import"./FormSection-6daed3e0.js";import"./TextInput-10f584b4.js";import"./InputLabel-299c110d.js";import"./PrimaryButton-b39735fd.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{D as default};
