import{a as f,_ as h}from"./NavigationCard.cb536f72.js";import{a as r,o as a,b as _,e as d,f as x,p as C,i as F,F as S,r as M,m as N,q as w,j as n,c as L,h as O,l as y}from"./entry.d05ba3fd.js";import{_ as i}from"./FloorsButtons.f5db2ed9.js";import{_ as B}from"./ScaleButtons.133f1383.js";const k={},I=o=>(C("data-v-4bd6140a"),o=o(),F(),o),$={class:"cover"},E={class:"container modal"},V=I(()=>d("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[d("path",{d:"M0.271767 10.3446C-0.0881408 10.7045 -0.0954859 11.3435 0.279112 11.7181C0.661056 12.0927 1.30008 12.0854 1.65264 11.7328L6.00092 7.38454L10.3419 11.7255C10.7091 12.0927 11.3408 12.0927 11.7154 11.7181C12.09 11.3362 12.09 10.7119 11.7227 10.3446L7.38179 6.00367L11.7227 1.6554C12.09 1.28815 12.0973 0.656471 11.7154 0.281873C11.3408 -0.0927245 10.7091 -0.0927245 10.3419 0.274528L6.00092 4.61546L1.65264 0.274528C1.30008 -0.0853795 0.653711 -0.10007 0.279112 0.281873C-0.0954859 0.656471 -0.0881408 1.30284 0.271767 1.6554L4.6127 6.00367L0.271767 10.3446Z",fill:"#EAEAEA"})],-1)),A=[V],j=x('<div class="modal__main" data-v-4bd6140a><p class="modal__text_strong" data-v-4bd6140a>КАРТА КОРПУСОВ</p><p class="modal__text_medium" data-v-4bd6140a>МОСКОВСКОГО ПОЛИТЕХА</p><p class="modal__text" data-v-4bd6140a>Разработано студентами с любовью и заботой о Вас </p><ul class="modal__list" data-v-4bd6140a><li class="modal__text" data-v-4bd6140a>Еще какая-то важная или не очень инфа. </li><li class="modal__text" data-v-4bd6140a>Возможно какие-то контактные данные</li><li class="modal__text" data-v-4bd6140a>А может какая-то инфа о приложении</li></ul></div>',1);function T(o,l){return a(),_("div",$,[d("div",E,[d("button",{class:"modal__close",onClick:l[0]||(l[0]=c=>o.$emit("modal"))},A),j])])}const q=r(k,[["render",T],["__scopeId","data-v-4bd6140a"]]);const z={props:{numberOfFloors:Number,activeFloor:Number}},D=["src"];function Z(o,l,c,m,t,e){return a(),_("div",null,[(a(!0),_(S,null,M(c.numberOfFloors,s=>N((a(),_("img",{key:s,class:"map",src:"_nuxt/assets/images/karta"+(s%3-1)+".jpg"},null,8,D)),[[w,s==c.activeFloor]])),128))])}const G=r(z,[["render",Z],["__scopeId","data-v-98b099d1"]]);const H={components:{FloorsButtons:i},data(){return{navCardState:!1,modalState:!1,numberOfFloors:5,activeFloor:1}},methods:{toggleNavCard(){this.navCardState=!this.navCardState},toggleModal(){this.modalState=!this.modalState},updateFloor(o){this.activeFloor=o.update}}};function J(o,l,c,m,t,e){const s=f,u=q,p=i,v=B,b=G,g=h;return a(),_("div",null,[n(s,{class:"navbar",onModal:e.toggleModal},null,8,["onModal"]),t.modalState==!0?(a(),L(u,{key:0,onModal:e.toggleModal},null,8,["onModal"])):O("",!0),n(p,{class:"floors-buttons",numberOfFloors:t.numberOfFloors,onChange:e.updateFloor},null,8,["numberOfFloors","onChange"]),n(v,{class:"scale-buttons"}),n(b,{numberOfFloors:t.numberOfFloors,activeFloor:t.activeFloor},null,8,["numberOfFloors","activeFloor"]),n(g,{class:y(["navigation-card",{"navigation-card_active":t.navCardState}]),onToggleCard:e.toggleNavCard},null,8,["class","onToggleCard"])])}const U=r(H,[["render",J],["__scopeId","data-v-74984352"]]);export{U as default};