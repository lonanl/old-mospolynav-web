import{a,o as s,b as o,F as _,r as i,e as l,t as u}from"./entry.d05ba3fd.js";const d={props:{numberOfFloors:Number},data(){return{activeFloor:1}},mounted(){this.$refs[`button${this.activeFloor}`][0].classList.toggle("btn_active")},methods:{},watch:{activeFloor(e,r){this.$refs[`button${r}`][0].classList.toggle("btn_active"),this.$refs[`button${e}`][0].classList.toggle("btn_active")}}},p={class:"wrapper"},b=["onClick"],f={class:"number"};function m(e,r,c,v,n,h){return s(),o("div",p,[(s(!0),o(_,null,i(c.numberOfFloors,t=>(s(),o("button",{class:"btn",ref_for:!0,ref:"button"+t,key:t,onClick:g=>{e.$emit("change",{update:t}),n.activeFloor=t}},[l("p",f,u(t),1)],8,b))),128))])}const F=a(d,[["render",m],["__scopeId","data-v-cc633ed0"]]);export{F as _};
