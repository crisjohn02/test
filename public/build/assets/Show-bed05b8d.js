import{_ as i}from"./AppLayout-38c80479.js";import o from"./DeleteTeamForm-136d744b.js";import{S as r}from"./SectionBorder-f25af20d.js";import l from"./TeamMemberManager-f4fee7de.js";import n from"./UpdateTeamNameForm-aa447f0b.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app-01af9ef4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-b0096f09.js";import"./SectionTitle-a54453cb.js";import"./ConfirmationModal-238ba7a8.js";import"./DangerButton-a7f2e2ba.js";import"./SecondaryButton-9ce540db.js";import"./ActionMessage-8c3aa5f0.js";import"./DialogModal-7f03d1ad.js";import"./FormSection-b19020cb.js";import"./TextInput-b505ddc5.js";import"./InputLabel-30d298b4.js";import"./PrimaryButton-26e95ecf.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{D as default};