import{S as v}from"./SectionTitle-84373be4.js";import{o as y,d as w,b as l,w as o,m as n,a as t,x as f,A as h,B as x,j as _,c as g,k as i,D as d,y as r,n as b,e as k,E as $}from"./app-c3ec12c3.js";const B={class:"md:grid md:grid-cols-3 md:gap-6"},E={class:"mt-5 md:mt-0 md:col-span-2"},S={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},A={__name:"ActionSection",setup(e){return(a,s)=>(y(),w("div",B,[l(v,null,{title:o(()=>[n(a.$slots,"title")]),description:o(()=>[n(a.$slots,"description")]),_:3}),t("div",E,[t("div",S,[n(a.$slots,"content")])])]))}},C={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},N=t("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),T=[N],D={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const s=e;f(()=>s.show,()=>{s.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const m=()=>{s.closeable&&a("close")},u=c=>{c.key==="Escape"&&s.show&&m()};h(()=>document.addEventListener("keydown",u)),x(()=>{document.removeEventListener("keydown",u),document.body.style.overflow=null});const p=_(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[s.maxWidth]);return(c,V)=>(y(),g($,{to:"body"},[l(d,{"leave-active-class":"duration-200"},{default:o(()=>[i(t("div",C,[l(d,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:o(()=>[i(t("div",{class:"fixed inset-0 transform transition-all",onClick:m},T,512),[[r,e.show]])]),_:1}),l(d,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:o(()=>[i(t("div",{class:b(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",p.value])},[e.show?n(c.$slots,"default",{key:0}):k("",!0)],2),[[r,e.show]])]),_:3})],512),[[r,e.show]])]),_:3})]))}};export{A as _,D as a};
