import{_ as c}from"./AppLayout-b6000147.js";import p from"./DeleteUserForm-0ff89849.js";import l from"./LogoutOtherBrowserSessionsForm-8de2b80e.js";import{S as s}from"./SectionBorder-52d772fc.js";import f from"./TwoFactorAuthenticationForm-28697c71.js";import u from"./UpdatePasswordForm-fed300bf.js";import d from"./UpdateProfileInformationForm-9dd57bd4.js";import{o,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app-c3ec12c3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-088bad3c.js";import"./SectionTitle-84373be4.js";import"./DangerButton-10bff15f.js";import"./DialogModal-5e96951e.js";import"./TextInput-67b0d035.js";import"./SecondaryButton-ea178307.js";import"./ActionMessage-6f1aed7f.js";import"./PrimaryButton-8187b0a7.js";import"./InputLabel-08b61f32.js";import"./FormSection-8b39062f.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};
