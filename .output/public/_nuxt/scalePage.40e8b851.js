import{r as u,_ as h}from"./map.7a3004ea.js";import{a as p,b as d,e as s,j as m,F as c,r as f,h as I,o,t as g,p as v,i as x}from"./entry.e85cd395.js";const C={data(){return{regions:u,viewBox:"0 0 1334 1404",selectedIds:[],selectedAudId:null,defaultColor:"#494949",secondColor:"#9C9C9F",successColor:"#5F6DEC"}},computed:{map(){let e=this.regions;return e.forEach(t=>{this.selectedIds.indexOf(t.id)!==-1?t.fill=this.successColor:t.fill=this.defaultColor}),e},selectedRegions(){return this.map.filter(e=>this.selectedIds.indexOf(e.id)!==-1)}},methods:{findRegionById(e){return this.map.find(t=>t.id===e)},click(e){this.selectedIds.indexOf(e.id)===-1?e.id!==void 0&&(console.log(4312),this.selectedAudId!==null&&this.selectedIds.splice(this.selectedIds.indexOf(this.selectedAudId),1),this.selectedAudId=e.id,this.selectedIds.push(e.id),console.log(this.selectedIds)):(this.selectedAudId=null,this.selectedIds.splice(this.selectedIds.indexOf(e.id),1))}}},i=e=>(v("data-v-ea3884db"),e=e(),x(),e),b={class:"container"},k={class:"layout"},w={class:"layout__map"},S={class:"card"},y={class:"layout__content"},A=i(()=>s("h4",{class:"small-title"}," Actions ",-1)),B=i(()=>s("ul",null,[s("li",null,"Click to select region"),s("li",null,"Scroll mousewheel for zoom"),s("li",null,"Hold left mouse button to drag map")],-1)),O=i(()=>s("h4",{class:"small-title"}," Выбранные аудитории ",-1));function R(e,t,F,E,n,l){const a=h;return o(),d("div",b,[s("div",k,[s("div",w,[s("div",S,[m(a,{map:l.map,"view-box":n.viewBox,"thin-border-on-zoom":!0,"wrapper-styles":{position:"absolute",top:0,left:0,width:"100%",height:"100%"},mobilePreventScroll:!0,onClick:l.click},null,8,["map","view-box","onClick"])])]),s("div",y,[A,B,l.selectedRegions&&l.selectedRegions.length?(o(),d(c,{key:0},[O,(o(!0),d(c,null,f(l.selectedRegions,(r,_)=>(o(),d("div",{class:"label",key:_},g(r.title),1))),128))],64)):I("",!0)])])])}const V=p(C,[["render",R],["__scopeId","data-v-ea3884db"]]);export{V as default};
