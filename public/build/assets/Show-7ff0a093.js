import{_ as c}from"./AppLayout-38c80479.js";import p from"./DeleteUserForm-b031936d.js";import l from"./LogoutOtherBrowserSessionsForm-e470049b.js";import{S as s}from"./SectionBorder-f25af20d.js";import f from"./TwoFactorAuthenticationForm-efa73fa5.js";import u from"./UpdatePasswordForm-4c65baec.js";import d from"./UpdateProfileInformationForm-385329bd.js";import{o,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app-01af9ef4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-b0096f09.js";import"./SectionTitle-a54453cb.js";import"./DangerButton-a7f2e2ba.js";import"./DialogModal-7f03d1ad.js";import"./TextInput-b505ddc5.js";import"./SecondaryButton-9ce540db.js";import"./ActionMessage-8c3aa5f0.js";import"./PrimaryButton-26e95ecf.js";import"./InputLabel-30d298b4.js";import"./FormSection-b19020cb.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};