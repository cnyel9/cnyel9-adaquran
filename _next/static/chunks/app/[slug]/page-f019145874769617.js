(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6042],{7231:function(e,t,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.bind(n,1609)),Promise.resolve().then(n.bind(n,4452)),Promise.resolve().then(n.bind(n,39)),Promise.resolve().then(n.bind(n,5132)),Promise.resolve().then(n.bind(n,984)),Promise.resolve().then(n.bind(n,4789)),Promise.resolve().then(n.bind(n,5896)),Promise.resolve().then(n.bind(n,6059)),Promise.resolve().then(n.bind(n,2974)),Promise.resolve().then(n.bind(n,6898)),Promise.resolve().then(n.bind(n,4351)),Promise.resolve().then(n.bind(n,5789)),Promise.resolve().then(n.bind(n,7227)),Promise.resolve().then(n.bind(n,5732)),Promise.resolve().then(n.bind(n,5183)),Promise.resolve().then(n.bind(n,1918)),Promise.resolve().then(n.bind(n,8836)),Promise.resolve().then(n.bind(n,5046)),Promise.resolve().then(n.bind(n,5263)),Promise.resolve().then(n.bind(n,6455)),Promise.resolve().then(n.bind(n,8362)),Promise.resolve().then(n.bind(n,4405)),Promise.resolve().then(n.bind(n,8964)),Promise.resolve().then(n.bind(n,7039))},39:function(e,t,n){"use strict";n.r(t),n.d(t,{ListBoxSurah:function(){return W},ListBoxVerse:function(){return X}});var r,o,i,a,l=n(7437),s=n(2265),u=n(44),d=n(2381),c=n(9790),p=n(3880),v=n(6601),f=n(8318),b=n(2640),x=n(5205),m=n(9010),h=n(2554),g=n(4152),R=n(8803),O=n(8358),y=n(1454),P=n(1679),S=n(7700),w=n(4797),L=n(4819),T=n(641),I=n(3891),k=n(5235),E=n(6887),j=n(2165),N=((r=N||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),C=((o=C||{})[o.Single=0]="Single",o[o.Multi=1]="Multi",o),z=((i=z||{})[i.Pointer=0]="Pointer",i[i.Other=1]="Other",i),M=((a=M||{})[a.OpenListbox=0]="OpenListbox",a[a.CloseListbox=1]="CloseListbox",a[a.GoToOption=2]="GoToOption",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterOption=5]="RegisterOption",a[a.UnregisterOption=6]="UnregisterOption",a[a.RegisterLabel=7]="RegisterLabel",a);function D(e,t=e=>e){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,R.z2)(t(e.options.slice()),e=>e.dataRef.current.domRef.current),o=n?r.indexOf(n):null;return-1===o&&(o=null),{options:r,activeOptionIndex:o}}let F={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(e=>n(e.dataRef.current.value));return-1!==r&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=D(e),o=(0,h.d)(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))}),i=o?e.options.indexOf(o):-1;return-1===i||i===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:i,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=D(e,e=>[...e,n]);return null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,t)=>{let n=D(e,e=>{let n=e.findIndex(e=>e.id===t.id);return-1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},A=(0,s.createContext)(null);function B(e){let t=(0,s.useContext)(A);if(null===t){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,B),t}return t}A.displayName="ListboxActionsContext";let V=(0,s.createContext)(null);function Q(e){let t=(0,s.useContext)(V);if(null===t){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Q),t}return t}function Z(e,t){return(0,b.E)(t.type,F,e,t)}V.displayName="ListboxDataContext";let _=s.Fragment,G=f.AN.RenderStrategy|f.AN.Static,U=Object.assign((0,f.yV)(function(e,t){let{value:n,defaultValue:r,form:o,name:i,onChange:a,by:l=(e,t)=>e===t,disabled:d=!1,horizontal:p=!1,multiple:x=!1,...m}=e,g=p?"horizontal":"vertical",y=(0,v.T)(t),[L=x?[]:void 0,k]=(0,I.q)(n,a,r),[E,j]=(0,s.useReducer)(Z,{dataRef:(0,s.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),N=(0,s.useRef)({static:!1,hold:!1}),C=(0,s.useRef)(null),z=(0,s.useRef)(null),M=(0,s.useRef)(null),D=(0,T.z)("string"==typeof l?(e,t)=>(null==e?void 0:e[l])===(null==t?void 0:t[l]):l),F=(0,s.useCallback)(e=>(0,b.E)(B.mode,{1:()=>L.some(t=>D(t,e)),0:()=>D(L,e)}),[L]),B=(0,s.useMemo)(()=>({...E,value:L,disabled:d,mode:x?1:0,orientation:g,compare:D,isSelected:F,optionsPropsRef:N,labelRef:C,buttonRef:z,optionsRef:M}),[L,d,x,E]);(0,c.e)(()=>{E.dataRef.current=B},[B]),(0,P.O)([B.buttonRef,B.optionsRef],(e,t)=>{var n;j({type:1}),(0,R.sP)(t,R.tJ.Loose)||(e.preventDefault(),null==(n=B.buttonRef.current)||n.focus())},0===B.listboxState);let Q=(0,s.useMemo)(()=>({open:0===B.listboxState,disabled:d,value:L}),[B,d,L]),G=(0,T.z)(e=>{let t=B.options.find(t=>t.id===e);t&&J(t.dataRef.current.value)}),U=(0,T.z)(()=>{if(null!==B.activeOptionIndex){let{dataRef:e,id:t}=B.options[B.activeOptionIndex];J(e.current.value),j({type:2,focus:h.T.Specific,id:t})}}),$=(0,T.z)(()=>j({type:0})),Y=(0,T.z)(()=>j({type:1})),K=(0,T.z)((e,t,n)=>e===h.T.Specific?j({type:2,focus:h.T.Specific,id:t,trigger:n}):j({type:2,focus:e,trigger:n})),q=(0,T.z)((e,t)=>(j({type:5,id:e,dataRef:t}),()=>j({type:6,id:e}))),H=(0,T.z)(e=>(j({type:7,id:e}),()=>j({type:7,id:null}))),J=(0,T.z)(e=>(0,b.E)(B.mode,{0:()=>null==k?void 0:k(e),1(){let t=B.value.slice(),n=t.findIndex(t=>D(t,e));return-1===n?t.push(e):t.splice(n,1),null==k?void 0:k(t)}})),W=(0,T.z)(e=>j({type:3,value:e})),X=(0,T.z)(()=>j({type:4})),ee=(0,s.useMemo)(()=>({onChange:J,registerOption:q,registerLabel:H,goToOption:K,closeListbox:Y,openListbox:$,selectActiveOption:U,selectOption:G,search:W,clearSearch:X}),[]),et=(0,s.useRef)(null),en=(0,u.G)();return(0,s.useEffect)(()=>{et.current&&void 0!==r&&en.addEventListener(et.current,"reset",()=>{null==k||k(r)})},[et,k]),s.createElement(A.Provider,{value:ee},s.createElement(V.Provider,{value:B},s.createElement(O.up,{value:(0,b.E)(B.listboxState,{0:O.ZM.Open,1:O.ZM.Closed})},null!=i&&null!=L&&(0,w.t)({[i]:L}).map(([e,t],n)=>s.createElement(S._,{features:S.A.Hidden,ref:0===n?e=>{var t;et.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,f.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:o,name:e,value:t})})),(0,f.sY)({ourProps:{ref:y},theirProps:m,slot:Q,defaultTag:_,name:"Listbox"}))))}),{Button:(0,f.yV)(function(e,t){var n;let r=(0,d.M)(),{id:o=`headlessui-listbox-button-${r}`,...i}=e,a=Q("Listbox.Button"),l=B("Listbox.Button"),c=(0,v.T)(a.buttonRef,t),b=(0,u.G)(),x=(0,T.z)(e=>{switch(e.key){case m.R.Space:case m.R.Enter:case m.R.ArrowDown:e.preventDefault(),l.openListbox(),b.nextFrame(()=>{a.value||l.goToOption(h.T.First)});break;case m.R.ArrowUp:e.preventDefault(),l.openListbox(),b.nextFrame(()=>{a.value||l.goToOption(h.T.Last)})}}),R=(0,T.z)(e=>{e.key===m.R.Space&&e.preventDefault()}),O=(0,T.z)(e=>{if((0,g.P)(e.currentTarget))return e.preventDefault();0===a.listboxState?(l.closeListbox(),b.nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(e.preventDefault(),l.openListbox())}),P=(0,p.v)(()=>{if(a.labelId)return[a.labelId,o].join(" ")},[a.labelId,o]),S=(0,s.useMemo)(()=>({open:0===a.listboxState,disabled:a.disabled,value:a.value}),[a]),w={ref:c,id:o,type:(0,y.f)(e,a.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(n=a.optionsRef.current)?void 0:n.id,"aria-expanded":0===a.listboxState,"aria-labelledby":P,disabled:a.disabled,onKeyDown:x,onKeyUp:R,onClick:O};return(0,f.sY)({ourProps:w,theirProps:i,slot:S,defaultTag:"button",name:"Listbox.Button"})}),Label:(0,f.yV)(function(e,t){let n=(0,d.M)(),{id:r=`headlessui-listbox-label-${n}`,...o}=e,i=Q("Listbox.Label"),a=B("Listbox.Label"),l=(0,v.T)(i.labelRef,t);(0,c.e)(()=>a.registerLabel(r),[r]);let u=(0,T.z)(()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}),p=(0,s.useMemo)(()=>({open:0===i.listboxState,disabled:i.disabled}),[i]);return(0,f.sY)({ourProps:{ref:l,id:r,onClick:u},theirProps:o,slot:p,defaultTag:"label",name:"Listbox.Label"})}),Options:(0,f.yV)(function(e,t){var n;let r=(0,d.M)(),{id:o=`headlessui-listbox-options-${r}`,...i}=e,a=Q("Listbox.Options"),l=B("Listbox.Options"),c=(0,v.T)(a.optionsRef,t),g=(0,u.G)(),R=(0,u.G)(),y=(0,O.oJ)(),P=null!==y?(y&O.ZM.Open)===O.ZM.Open:0===a.listboxState;(0,s.useEffect)(()=>{var e;let t=a.optionsRef.current;t&&0===a.listboxState&&t!==(null==(e=(0,L.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})},[a.listboxState,a.optionsRef]);let S=(0,T.z)(e=>{switch(R.dispose(),e.key){case m.R.Space:if(""!==a.searchQuery)return e.preventDefault(),e.stopPropagation(),l.search(e.key);case m.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==a.activeOptionIndex){let{dataRef:e}=a.options[a.activeOptionIndex];l.onChange(e.current.value)}0===a.mode&&(l.closeListbox(),(0,x.k)().nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case(0,b.E)(a.orientation,{vertical:m.R.ArrowDown,horizontal:m.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),l.goToOption(h.T.Next);case(0,b.E)(a.orientation,{vertical:m.R.ArrowUp,horizontal:m.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),l.goToOption(h.T.Previous);case m.R.Home:case m.R.PageUp:return e.preventDefault(),e.stopPropagation(),l.goToOption(h.T.First);case m.R.End:case m.R.PageDown:return e.preventDefault(),e.stopPropagation(),l.goToOption(h.T.Last);case m.R.Escape:return e.preventDefault(),e.stopPropagation(),l.closeListbox(),g.nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})});case m.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(l.search(e.key),R.setTimeout(()=>l.clearSearch(),350))}}),w=(0,p.v)(()=>{var e,t,n;return null!=(n=null==(e=a.labelRef.current)?void 0:e.id)?n:null==(t=a.buttonRef.current)?void 0:t.id},[a.labelRef.current,a.buttonRef.current]),I=(0,s.useMemo)(()=>({open:0===a.listboxState}),[a]),k={"aria-activedescendant":null===a.activeOptionIndex||null==(n=a.options[a.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===a.mode||void 0,"aria-labelledby":w,"aria-orientation":a.orientation,id:o,onKeyDown:S,role:"listbox",tabIndex:0,ref:c};return(0,f.sY)({ourProps:k,theirProps:i,slot:I,defaultTag:"ul",features:G,visible:P,name:"Listbox.Options"})}),Option:(0,f.yV)(function(e,t){let n=(0,d.M)(),{id:r=`headlessui-listbox-option-${n}`,disabled:o=!1,value:i,...a}=e,l=Q("Listbox.Option"),u=B("Listbox.Option"),p=null!==l.activeOptionIndex&&l.options[l.activeOptionIndex].id===r,b=l.isSelected(i),m=(0,s.useRef)(null),g=(0,j.x)(m),R=(0,k.E)({disabled:o,value:i,domRef:m,get textValue(){return g()}}),O=(0,v.T)(t,m);(0,c.e)(()=>{if(0!==l.listboxState||!p||0===l.activationTrigger)return;let e=(0,x.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=m.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[m,p,l.listboxState,l.activationTrigger,l.activeOptionIndex]),(0,c.e)(()=>u.registerOption(r,R),[R,r]);let y=(0,T.z)(e=>{if(o)return e.preventDefault();u.onChange(i),0===l.mode&&(u.closeListbox(),(0,x.k)().nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))}),P=(0,T.z)(()=>{if(o)return u.goToOption(h.T.Nothing);u.goToOption(h.T.Specific,r)}),S=(0,E.g)(),w=(0,T.z)(e=>S.update(e)),L=(0,T.z)(e=>{S.wasMoved(e)&&(o||p||u.goToOption(h.T.Specific,r,0))}),I=(0,T.z)(e=>{S.wasMoved(e)&&(o||p&&u.goToOption(h.T.Nothing))}),N=(0,s.useMemo)(()=>({active:p,selected:b,disabled:o}),[p,b,o]);return(0,f.sY)({ourProps:{id:r,ref:O,role:"option",tabIndex:!0===o?void 0:-1,"aria-disabled":!0===o||void 0,"aria-selected":b,disabled:void 0,onClick:y,onFocus:P,onPointerEnter:w,onMouseEnter:w,onPointerMove:L,onMouseMove:L,onPointerLeave:I,onMouseLeave:I},theirProps:a,slot:N,defaultTag:"li",name:"Listbox.Option"})})});var $=n(129);let Y=s.forwardRef(function({title:e,titleId:t,...n},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{fillRule:"evenodd",d:"M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z",clipRule:"evenodd"}))}),K=s.forwardRef(function({title:e,titleId:t,...n},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",clipRule:"evenodd"}))});var q=n(9842),H=n(8792);let J=q.mp,W=e=>{let{surah:t}=e,[n,r]=(0,s.useState)(t);return(0,l.jsx)("div",{className:"w-auto",children:(0,l.jsx)(U,{value:n,onChange:r,children:(0,l.jsxs)("div",{className:"relative mt-1",children:[(0,l.jsxs)(U.Button,{className:"relative w-full cursor-default rounded-lg bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-700 py-1 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm",children:[(0,l.jsx)("span",{className:"block truncate font-medium",children:n.name}),(0,l.jsx)("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:(0,l.jsx)(Y,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),(0,l.jsx)($.u,{as:s.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,l.jsx)(U.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",children:J.map((e,t)=>(0,l.jsx)(U.Option,{className:e=>{let{active:t}=e;return"relative cursor-default select-none ".concat(t?"bg-secondary-100 text-secondary-900":"text-gray-900")},value:e,children:(0,l.jsxs)(H.default,{href:"/".concat(e.slug),className:"mb-5",prefetch:!1,children:[(0,l.jsx)("span",{className:"block truncate py-2 px-2 ".concat(n.id==e.id?"font-semibold text-primary-500":"font-medium"),children:e.name}),n.id==e.id?(0,l.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-3 text-primary-600",children:(0,l.jsx)(K,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},t))})})]})})})},X=e=>{let{surah:t}=e,n=(0,q.jZ)(t.id),[r,o]=(0,s.useState)(1);return(0,l.jsx)("div",{className:"w-auto",children:(0,l.jsx)(U,{value:r,onChange:o,children:(0,l.jsxs)("div",{className:"relative mt-1",children:[(0,l.jsxs)(U.Button,{className:"relative w-full cursor-default rounded-lg bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-700 py-1 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm",children:[(0,l.jsx)("span",{className:"block truncate font-medium",children:r}),(0,l.jsx)("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:(0,l.jsx)(Y,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),(0,l.jsx)($.u,{as:s.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,l.jsx)(U.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",children:n.map((e,n)=>(0,l.jsx)(U.Option,{className:e=>{let{active:t}=e;return"relative cursor-default ".concat(t?"bg-secondary-100 text-secondary-900":"text-gray-900")},value:e,children:(0,l.jsxs)(H.default,{href:"/".concat(null==t?void 0:t.slug,"#").concat(e.number-1),prefetch:!1,children:[(0,l.jsx)("span",{onClick:()=>o(e.number),className:"py-2 px-2 block truncate ".concat(r==e.number?" font-semibold text-primary-500":"font-medium"),children:e.number}),r==e.number?(0,l.jsx)("span",{className:"absolute inset-y-0 right-0 flex items-center pr-3 text-primary-600",children:(0,l.jsx)(K,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},n))})})]})})})}},3880:function(e,t,n){"use strict";n.d(t,{v:function(){return a}});var r=n(2265),o=n(9790),i=n(5235);function a(e,t){let[n,a]=(0,r.useState)(e),l=(0,i.E)(e);return(0,o.e)(()=>a(l.current),[l,a,...t]),n}}},function(e){e.O(0,[9349,2026,8834,5615,4377,1609,7855,2573,2971,8069,1744],function(){return e(e.s=7231)}),_N_E=e.O()}]);