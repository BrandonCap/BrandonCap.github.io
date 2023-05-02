(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function i(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(e){if(e.ep)return;e.ep=!0;const c=i(e);fetch(e.href,c)}})();function u(){}function yp(o,n){for(const i in n)o[i]=n[i];return o}function kp(o){return o()}function wp(){return Object.create(null)}function H(o){o.forEach(kp)}function jo(o){return typeof o=="function"}function S(o,n){return o!=o?n==n:o!==n||o&&typeof o=="object"||typeof o=="function"}function Tp(o){return Object.keys(o).length===0}function Rp(o,...n){if(o==null)return u;const i=o.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}function t(o,n){o.appendChild(n)}function y(o,n,i){o.insertBefore(n,i||null)}function f(o){o.parentNode&&o.parentNode.removeChild(o)}function a(o){return document.createElement(o)}function qp(o){return document.createTextNode(o)}function s(){return qp(" ")}function Oo(){return qp("")}function d(o,n,i){i==null?o.removeAttribute(n):o.getAttribute(n)!==i&&o.setAttribute(n,i)}function Pp(o){return Array.from(o.childNodes)}function Np(o,n,{bubbles:i=!1,cancelable:l=!1}={}){const e=document.createEvent("CustomEvent");return e.initCustomEvent(o,i,l,n),e}function ce(o,n){return new o(n)}let le;function ie(o){le=o}function Ko(){if(!le)throw new Error("Function called outside component initialization");return le}function Xp(o){Ko().$$.after_update.push(o)}function Gp(o){Ko().$$.on_destroy.push(o)}function zp(){const o=Ko();return(n,i,{cancelable:l=!1}={})=>{const e=o.$$.callbacks[n];if(e){const c=Np(n,i,{cancelable:l});return e.slice().forEach(m=>{m.call(o,c)}),!c.defaultPrevented}return!0}}function hp(o,n){const i=o.$$.callbacks[n.type];i&&i.slice().forEach(l=>l.call(this,n))}const Z=[],vp=[];let L=[];const gp=[],Sp=Promise.resolve();let xo=!1;function xp(){xo||(xo=!0,Sp.then(Vp))}function Zp(){return xp(),Sp}function Vo(o){L.push(o)}const So=new Set;let G=0;function Vp(){if(G!==0)return;const o=le;do{try{for(;G<Z.length;){const n=Z[G];G++,ie(n),Lp(n.$$)}}catch(n){throw Z.length=0,G=0,n}for(ie(null),Z.length=0,G=0;vp.length;)vp.pop()();for(let n=0;n<L.length;n+=1){const i=L[n];So.has(i)||(So.add(i),i())}L.length=0}while(Z.length);for(;gp.length;)gp.pop()();xo=!1,So.clear(),ie(o)}function Lp(o){if(o.fragment!==null){o.update(),H(o.before_update);const n=o.dirty;o.dirty=[-1],o.fragment&&o.fragment.p(o.ctx,n),o.after_update.forEach(Vo)}}function Jp(o){const n=[],i=[];L.forEach(l=>o.indexOf(l)===-1?n.push(l):i.push(l)),i.forEach(l=>l()),L=n}const Ae=new Set;let P;function Wo(){P={r:0,c:[],p:P}}function Uo(){P.r||H(P.c),P=P.p}function F(o,n){o&&o.i&&(Ae.delete(o),o.i(n))}function R(o,n,i,l){if(o&&o.o){if(Ae.has(o))return;Ae.add(o),P.c.push(()=>{Ae.delete(o),l&&(i&&o.d(1),l())}),o.o(n)}else l&&l()}function jp(o,n){const i={},l={},e={$$scope:1};let c=o.length;for(;c--;){const m=o[c],A=n[c];if(A){for(const r in m)r in A||(l[r]=1);for(const r in A)e[r]||(i[r]=A[r],e[r]=1);o[c]=A}else for(const r in m)e[r]=1}for(const m in l)m in i||(i[m]=void 0);return i}function Op(o){return typeof o=="object"&&o!==null?o:{}}function J(o){o&&o.c()}function N(o,n,i,l){const{fragment:e,after_update:c}=o.$$;e&&e.m(n,i),l||Vo(()=>{const m=o.$$.on_mount.map(kp).filter(jo);o.$$.on_destroy?o.$$.on_destroy.push(...m):H(m),o.$$.on_mount=[]}),c.forEach(Vo)}function X(o,n){const i=o.$$;i.fragment!==null&&(Jp(i.after_update),H(i.on_destroy),i.fragment&&i.fragment.d(n),i.on_destroy=i.fragment=null,i.ctx=[])}function Hp(o,n){o.$$.dirty[0]===-1&&(Z.push(o),xp(),o.$$.dirty.fill(0)),o.$$.dirty[n/31|0]|=1<<n%31}function x(o,n,i,l,e,c,m,A=[-1]){const r=le;ie(o);const p=o.$$={fragment:null,ctx:[],props:c,update:u,not_equal:e,bound:wp(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:wp(),dirty:A,skip_bound:!1,root:n.target||r.$$.root};m&&m(p.root);let g=!1;if(p.ctx=i?i(o,n.props||{},(k,K,...q)=>{const O=q.length?q[0]:K;return p.ctx&&e(p.ctx[k],p.ctx[k]=O)&&(!p.skip_bound&&p.bound[k]&&p.bound[k](O),g&&Hp(o,k)),K}):[],p.update(),g=!0,H(p.before_update),p.fragment=l?l(p.ctx):!1,n.target){if(n.hydrate){const k=Pp(n.target);p.fragment&&p.fragment.l(k),k.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&F(o.$$.fragment),N(o,n.target,n.anchor,n.customElement),Vp()}ie(r)}class V{$destroy(){X(this,1),this.$destroy=u}$on(n,i){if(!jo(i))return u;const l=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return l.push(i),()=>{const e=l.indexOf(i);e!==-1&&l.splice(e,1)}}$set(n){this.$$set&&!Tp(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const z=[];function Kp(o,n){return{subscribe:Wp(o,n).subscribe}}function Wp(o,n=u){let i;const l=new Set;function e(A){if(S(o,A)&&(o=A,i)){const r=!z.length;for(const p of l)p[1](),z.push(p,o);if(r){for(let p=0;p<z.length;p+=2)z[p][0](z[p+1]);z.length=0}}}function c(A){e(A(o))}function m(A,r=u){const p=[A,r];return l.add(p),l.size===1&&(i=n(e)||u),A(o),()=>{l.delete(p),l.size===0&&i&&(i(),i=null)}}return{set:e,update:c,subscribe:m}}function Up(o,n,i){const l=!Array.isArray(o),e=l?[o]:o,c=n.length<2;return Kp(i,m=>{let A=!1;const r=[];let p=0,g=u;const k=()=>{if(p)return;g();const q=n(l?r[0]:r,m);c?m(q):g=jo(q)?q:u},K=e.map((q,O)=>Rp(q,T=>{r[O]=T,p&=~(1<<O),A&&k()},()=>{p|=1<<O}));return A=!0,k(),function(){H(K),g(),A=!1}})}function Dp(o,n){if(o instanceof RegExp)return{keys:!1,pattern:o};var i,l,e,c,m=[],A="",r=o.split("/");for(r[0]||r.shift();e=r.shift();)i=e[0],i==="*"?(m.push("wild"),A+="/(.*)"):i===":"?(l=e.indexOf("?",1),c=e.indexOf(".",1),m.push(e.substring(1,~l?l:~c?c:e.length)),A+=~l&&!~c?"(?:/([^/]+?))?":"/([^/]+?)",~c&&(A+=(~l?"?":"")+"\\"+e.substring(c))):A+="/"+e;return{keys:m,pattern:new RegExp("^"+A+(n?"(?=$|/)":"/?$"),"i")}}function Mp(o){let n,i,l;const e=[o[2]];var c=o[0];function m(A){let r={};for(let p=0;p<e.length;p+=1)r=yp(r,e[p]);return{props:r}}return c&&(n=ce(c,m()),n.$on("routeEvent",o[7])),{c(){n&&J(n.$$.fragment),i=Oo()},m(A,r){n&&N(n,A,r),y(A,i,r),l=!0},p(A,r){const p=r&4?jp(e,[Op(A[2])]):{};if(r&1&&c!==(c=A[0])){if(n){Wo();const g=n;R(g.$$.fragment,1,0,()=>{X(g,1)}),Uo()}c?(n=ce(c,m()),n.$on("routeEvent",A[7]),J(n.$$.fragment),F(n.$$.fragment,1),N(n,i.parentNode,i)):n=null}else c&&n.$set(p)},i(A){l||(n&&F(n.$$.fragment,A),l=!0)},o(A){n&&R(n.$$.fragment,A),l=!1},d(A){A&&f(i),n&&X(n,A)}}}function Cp(o){let n,i,l;const e=[{params:o[1]},o[2]];var c=o[0];function m(A){let r={};for(let p=0;p<e.length;p+=1)r=yp(r,e[p]);return{props:r}}return c&&(n=ce(c,m()),n.$on("routeEvent",o[6])),{c(){n&&J(n.$$.fragment),i=Oo()},m(A,r){n&&N(n,A,r),y(A,i,r),l=!0},p(A,r){const p=r&6?jp(e,[r&2&&{params:A[1]},r&4&&Op(A[2])]):{};if(r&1&&c!==(c=A[0])){if(n){Wo();const g=n;R(g.$$.fragment,1,0,()=>{X(g,1)}),Uo()}c?(n=ce(c,m()),n.$on("routeEvent",A[6]),J(n.$$.fragment),F(n.$$.fragment,1),N(n,i.parentNode,i)):n=null}else c&&n.$set(p)},i(A){l||(n&&F(n.$$.fragment,A),l=!0)},o(A){n&&R(n.$$.fragment,A),l=!1},d(A){A&&f(i),n&&X(n,A)}}}function Yp(o){let n,i,l,e;const c=[Cp,Mp],m=[];function A(r,p){return r[1]?0:1}return n=A(o),i=m[n]=c[n](o),{c(){i.c(),l=Oo()},m(r,p){m[n].m(r,p),y(r,l,p),e=!0},p(r,[p]){let g=n;n=A(r),n===g?m[n].p(r,p):(Wo(),R(m[g],1,1,()=>{m[g]=null}),Uo(),i=m[n],i?i.p(r,p):(i=m[n]=c[n](r),i.c()),F(i,1),i.m(l.parentNode,l))},i(r){e||(F(i),e=!0)},o(r){R(i),e=!1},d(r){m[n].d(r),r&&f(l)}}}function fp(){const o=window.location.href.indexOf("#/");let n=o>-1?window.location.href.substr(o+1):"/";const i=n.indexOf("?");let l="";return i>-1&&(l=n.substr(i+1),n=n.substr(0,i)),{location:n,querystring:l}}const Fo=Kp(null,function(n){n(fp());const i=()=>{n(fp())};return window.addEventListener("hashchange",i,!1),function(){window.removeEventListener("hashchange",i,!1)}});Up(Fo,o=>o.location);Up(Fo,o=>o.querystring);const bp=Wp(void 0);function Bp(o){o?window.scrollTo(o.__svelte_spa_router_scrollX,o.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Ip(o,n,i){let{routes:l={}}=n,{prefix:e=""}=n,{restoreScrollState:c=!1}=n;class m{constructor(w,v){if(!v||typeof v!="function"&&(typeof v!="object"||v._sveltesparouter!==!0))throw Error("Invalid component object");if(!w||typeof w=="string"&&(w.length<1||w.charAt(0)!="/"&&w.charAt(0)!="*")||typeof w=="object"&&!(w instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:j,keys:b}=Dp(w);this.path=w,typeof v=="object"&&v._sveltesparouter===!0?(this.component=v.component,this.conditions=v.conditions||[],this.userData=v.userData,this.props=v.props||{}):(this.component=()=>Promise.resolve(v),this.conditions=[],this.props={}),this._pattern=j,this._keys=b}match(w){if(e){if(typeof e=="string")if(w.startsWith(e))w=w.substr(e.length)||"/";else return null;else if(e instanceof RegExp){const W=w.match(e);if(W&&W[0])w=w.substr(W[0].length)||"/";else return null}}const v=this._pattern.exec(w);if(v===null)return null;if(this._keys===!1)return v;const j={};let b=0;for(;b<this._keys.length;){try{j[this._keys[b]]=decodeURIComponent(v[b+1]||"")||null}catch{j[this._keys[b]]=null}b++}return j}async checkConditions(w){for(let v=0;v<this.conditions.length;v++)if(!await this.conditions[v](w))return!1;return!0}}const A=[];l instanceof Map?l.forEach((h,w)=>{A.push(new m(w,h))}):Object.keys(l).forEach(h=>{A.push(new m(h,l[h]))});let r=null,p=null,g={};const k=zp();async function K(h,w){await Zp(),k(h,w)}let q=null,O=null;c&&(O=h=>{h.state&&(h.state.__svelte_spa_router_scrollY||h.state.__svelte_spa_router_scrollX)?q=h.state:q=null},window.addEventListener("popstate",O),Xp(()=>{Bp(q)}));let T=null,U=null;const D=Fo.subscribe(async h=>{T=h;let w=0;for(;w<A.length;){const v=A[w].match(h.location);if(!v){w++;continue}const j={route:A[w].path,location:h.location,querystring:h.querystring,userData:A[w].userData,params:v&&typeof v=="object"&&Object.keys(v).length?v:null};if(!await A[w].checkConditions(j)){i(0,r=null),U=null,K("conditionsFailed",j);return}K("routeLoading",Object.assign({},j));const b=A[w].component;if(U!=b){b.loading?(i(0,r=b.loading),U=b,i(1,p=b.loadingParams),i(2,g={}),K("routeLoaded",Object.assign({},j,{component:r,name:r.name,params:p}))):(i(0,r=null),U=null);const W=await b();if(h!=T)return;i(0,r=W&&W.default||W),U=b}v&&typeof v=="object"&&Object.keys(v).length?i(1,p=v):i(1,p=null),i(2,g=A[w].props),K("routeLoaded",Object.assign({},j,{component:r,name:r.name,params:p})).then(()=>{bp.set(p)});return}i(0,r=null),U=null,bp.set(void 0)});Gp(()=>{D(),O&&window.removeEventListener("popstate",O)});function re(h){hp.call(this,o,h)}function M(h){hp.call(this,o,h)}return o.$$set=h=>{"routes"in h&&i(3,l=h.routes),"prefix"in h&&i(4,e=h.prefix),"restoreScrollState"in h&&i(5,c=h.restoreScrollState)},o.$$.update=()=>{o.$$.dirty&32&&(history.scrollRestoration=c?"manual":"auto")},[r,p,g,l,e,c,re,M]}class Qp extends V{constructor(n){super(),x(this,n,Ip,Yp,S,{routes:3,prefix:4,restoreScrollState:5})}}function Ep(o){let n;return{c(){n=a("main"),n.innerHTML=`<h1>CPSC 254 Spring 2023 Archive</h1> 
    <a href="/#/Week1"><button>Week 1</button></a> 
    <a href="/#/Week2"><button>Week 2</button></a> 
    <a href="/#/Week3"><button>Week 3</button></a> 
    <a href="/#/Week4"><button>Week 4</button></a> 
    <a href="/#/Week6"><button>Week 6</button></a> 
    <a href="/#/Week7"><button>Week 7</button></a> 
    <a href="/#/Week8"><button>Week 8</button></a> 
    <a href="/#/Week9"><button>Week 9</button></a> 
    <a href="/#/Week11"><button>Week 11</button></a> 
    <a href="/#/Week12"><button>Week 12</button></a>`},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class _p extends V{constructor(n){super(),x(this,n,null,Ep,S,{})}}function $p(o){let n;return{c(){n=a("p"),n.textContent="There seems to be an error!"},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}let em=class extends V{constructor(n){super(),x(this,n,null,$p,S,{})}};function tm(o){let n;return{c(){n=a("div"),n.innerHTML=`<div class="header svelte-1ba2f28"><h1 class="svelte-1ba2f28">Week 1 |</h1> 
		<h2 class="svelte-1ba2f28">UNIX</h2></div> 
	<div class="content svelte-1ba2f28"><p>Week 1 discusses the operating system UNIX, and subsequently Linux, of which we use a lot throughout the class.</p> 
        <p>UNIX is widely considered the mother of modern-operating systems, and is based on what&#39;s known as &quot;Unix Philosophy&quot; that includes characteristics like:</p> 
            <ul><li>Usage of plain text for data storage</li> 
                <li>Hierarchial file system</li> 
                <li>Handling devices and some specific kinds of inter-process communication (IPC) as files</li> 
                <li>Employing a huge number of software tools</li> 
                <li>Multiple small, simple and modular programs which can be threaded toghether via a command-line interpreter using pipes, contrasting to use a single monolithic program which comprises of all the same functionality</li></ul> 
        <br/> 

        <h3>Unix Architecture</h3> 
        <img src="https://4.bp.blogspot.com/-2sXb-d11dno/W23dxq3YvLI/AAAAAAAAGtY/-sAzxj5BYoAMPgo7y5X7g07wZMoxy2UwgCLcBGAs/s1600/unix-architecture.png" alt="Circle diagram depicting UNIX architecture" class="svelte-1ba2f28"/> 

        <p>Pictured above is the architecture of Unix. At the heart is the master control program, the kernel, that controls everything. The interface that communicates between the user and the kernel is the shell,
            where users type in commands. Above that are programs that are further removed from the shell, often with a User Interface to interact with as opposed to directly typing in commands.</p> 
        <p>Some historic Unix operating systems are Solaris and HP-UX, and the largest distributors of UNIX systems include IBM, HP, and SUN.</p> 
        <br/> 

        <h3>What is Linux?</h3> 
        <p>Linux is a derivation of Unix, and while they are often conflated, are not the same. Linux distributions do follow the basis of Unix design, and are the best examples of Unix dervatives.
            Unix operating systems need to conform to the Single UNIX Specification (SUS), and Unix-like systems often conform to the Portable Operating System Interface (POSIX) standard.
            Currently registered UNIX systems include macOS, Solairs, and AIX, and under the POSIX standard Linux distributions could be considered Unix-like operating systems.</p> 

        <p>An important distinction to make is that UNIX is an entire operating system, while Linux itself is just the kernel. 
            <b>Linux is a UNIX clone</b> written from scratch by Linus Torvalds and team, designed to act like Unix without any of the original code.
            Linux distributions are what make Linux a complete operating system, such as Ubuntu or Arch Linux.
            A standard distribution (known commonly as a distro) consists of the Linux kernel, GNU system, GNU utilities, libraries, compiler, additional software, documentation, a window system and window manager, and a desktop environment.</p> 

        <img src="https://b2600043.smushcdn.com/2600043/wp-content/uploads/2016/07/ArticleImage-12104-1.png?lossy=0&amp;strip=1&amp;webp=1" alt="Diagram depicting Linux based OS Architecture" class="svelte-1ba2f28"/> 
        <br/> 

        <h3>History of Open Source</h3> 
        <ul><li>Ken Thompson and Dennis Ritchie presented the first Unix paper at the Symposium on Operating Systems Principles at Purdue University in November 1973</li> 
            <li>UC Berkeley was one of the very early adopters of Unix, and began distributing Unix tools called Berkeley Software Distribution, BSD, to other universities.</li> 
            <li>TCP/IP was added to BSD in 1981 then broken out separate from BSD later.</li> 
            <li>BSD fought lawsuits, and finally was allowed to freely distribute code in 1994. Much of what we now know as Unix comes from BSD.</li> 
            <li>IETF (Internet Engineering Task Force) – Open meetings, open standards - anyone may comment, or contribute. Standards and RFC’s are freely available for downloading from IETF.</li> 
            <li>GNU’s Not Unix – Richard Stallman – Began with a compiler, now known as GCC (GNU C Compiler) part of every Linux OS.</li></ul> 
        <p><b>Copyleft</b> is meant to be the opposite of copyright, giving everyone permission to run, copy, modify, and distribute modified versions of programs covered under copyleft licenses.
            Programs that use copylefted programs must also be free and copylefted, along with any other rules the specific license specifies.</p></div>`,d(n,"class","container")},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class am extends V{constructor(n){super(),x(this,n,null,tm,S,{})}}function sm(o){let n;return{c(){n=a("div"),n.innerHTML=`<div class="header svelte-wamett"><h1 class="svelte-wamett">Week 2 |</h1> 
		<h2 class="svelte-wamett">Licenses</h2></div> 
	<div class="content svelte-wamett"><p>Week 2 discusses software licenses, which are used to define who can use software and how the software can be used.</p> 
		<br/> 

		<h3>What is a software license?</h3> 
		<p>A software license is a document providing legally binding guidelines for the use and distribution of software. 
			A license typically outlines fair use of the software, limitations of liability, warranties, disclaimers, and specifies protections of intellectual property.
			There are 2 main types of software licenses: proprietary or free/open source.
			The difference between them lies in the terms under which users may redistribute or copy the software.</p> 
		<br/> 

		<h3>How do software licenses work?</h3> 
		<p>Software licenses state the right of the developer and the user of the software. Some examples of these terms are:</p> 
		<ul><li>how many times the software can be downloaded</li> 
			<li>what the software will cost</li> 
			<li>what level of access users have to the source code</li></ul> 
		<p>These terms are typically outlined in the &quot;end-user license agreement&quot; or an &quot;enterprise license agreement&quot;.</p> 
		<br/> 

		<h3>What are the different types of software licenses?</h3> 
		<p>There are two main types as mentioned before: free/open source and proprietary licenses.</p> 
		<ul><li><b>Free and open source software (FOSS) licenses</b> are commonly known as open source. This license makes the source code available to the customer, and usually allows them to modify it.</li> 
			<li><b>Proprietary licenses</b> are known as closed source. Only operational code is provided, and reverse engineering the software to obtain source code is typically restricted.</li></ul> 
		<br/> 

		<h3>Open Source Licenses</h3> 
		<p>Here are a few popular examples of Open Source Licenses:</p> 
		<ul><li><b>GPL</b> 
				<ul><li>Foundations: Nobody should be restricted by the software they use.
						There are four freedoms that every user should have:
						<ol><li>the freedom to use the software for any purpose</li> 
							<li>the freedom to change the software to suit your needs</li> 
							<li>the freedom to share the software with your friend and neighbors</li> 
							<li>the freedom to share the changes you make</li></ol></li> 
					<li>Developers: Software released on the GNU GPL license must stay free software, no matter who changes or distributes it</li> 
					<li>Copyleft: The software is copyrighted, however instead of using the license to restrict users it&#39;s used to ensure freedom of use</li></ul></li> 
			<br/> 

			<li><b>Apache Software Foundation</b> 
				<ul><li>http://www.apache.org/licenses/</li> 
					<li>Software under this license can be freely used, modified, and sold regardless of use</li> 
					<li>This is not a copyleft license, modified parts of code can be released under any license. However, unmodified parts must be released under the same Apache License.</li></ul></li> 
			<br/> 

			<li><b>Three Clause License</b> 
				<ul><li><i>Note: This license is also known as the &quot;New BSD License&quot; or &quot;Modified BSD License&quot;. See also the 2-clause BSD License</i></li> 
					<li>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
						<ol><li>Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.</li> 
							<li>Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.</li> 
							<li>Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.</li></ol></li></ul></li></ul> 
		<br/> 

		<h3>Proprietary Licenses</h3> 
		<p>Here are a couple of software licenses from major companies:</p> 
		<ul><li><b>Adobe</b> 
				<ol><li>These terms govern your use of our website or services such as the Creative Cloud (collectively, “Services”) and software that we include as part of the Services, 
						including any applications, Content Files (defined below), scripts, instruction sets, and any related documentation (collectively “Software”). 
						By using the Services or Software, you agree to these terms.</li> 
					<li>Eligibility. You may only use the Services if you are over 13 years old.</li> 
					<li>Privacy. The Privacy Policy at http://www.adobe.com/go/privacy governs any personal information you provide to us. By using the Services
						or Software you agree to the terms of the Privacy Policy.</li> 
					<li>Desktop Application Usage Data. You have the option to share information with Adobe about how you use our desktop applications.
						This option is turned on by default.</li> 
					<li>We may block access to certain Services (or certain service features or content) in certain countries. It is your responsibility to
						make sure your use of the Services is legal where you use them. Services are not available in all languages.</li> 
					<li>Some Services or Software are also subject to the additional terms below (the “Additional Terms”). Any content that we provide to you
						(such as Software, SDK, samples, etc.) are licensed, not sold, to you, and may be subject to Additional Terms. New Additional Terms may be
						added from time to time.</li> 
					<li>Adobe Intellectual Property. We (and our licensors) remain the sole owner of all right, title, and interest in the Services and Software.
						We reserve all rights not granted under these terms.</li> 
					<li>Storage. When the Services provide storage, we recommend that you continue to back up your content regularly. We may create
						reasonable technical limits on your content, such as limits on file size, storage space, processing capacity, and other technical limits. We may
						suspend the Services until you are within the storage space limit associated with your account.</li> 
					<li>Ownership. You retain all rights and ownership of your content. We do not claim any ownership rights to your content.</li></ol></li> 
			<br/> 

			<li><b>Microsoft</b> 
				<ol><li>By accepting this agreement or using the software, you agree to all of these terms, and consent to the transmission of certain
						information during activation and during your use of the software as per the privacy statement described in Section 3. If you do not accept
						and comply with these terms, you may not use the software or its features.</li> 
					<li>Applicability. This agreement applies to the Windows software that is preinstalled on your device, or acquired from a retailer and
						installed by you, the media on which you received the software (if any), any fonts, icons, images or sound files included with the software, and
						also any Microsoft updates, upgrades, supplements or services for the software, unless other terms come with them. It also applies to
						Windows apps developed by Microsoft that provide functionality such as mail, contacts, music and photos that are included with and are a
						part of Windows.</li> 
					<li>License. The software is licensed, not sold. Under this agreement, we grant you the right to install and run one instance of the software on
						your device (the licensed device), for use by one person at a time, so long as you comply with all the terms of this agreement.</li> 
					<li>Restrictions. The manufacturer or installer and Microsoft reserve all rights (such as rights under intellectual property laws) not expressly
						granted in this agreement. For example, this license does not give you any right to, and you may not:

						<ol><li>use or virtualize features of the software separately;</li> 
							<li>publish, copy(other than the permitted backup copy), rent, lease, or lend the software;</li> 
							<li>transfer the software (except as permietted by this agreement)</li> 
							<li>work around any technical restrictions or limitations in the software;</li> 
							<li>use the software as server software, for commercial hosting, make the software available for simultaneous use by multiple users over a network,
								install the software on a server and allow users to access it remotely, or install the software on a device for use only by remote users;</li> 
							<li>reverse engineer, decompile, or disassemble the software, or attempt to do so, except and only to the extent that the foregoing restriction is (a)
								permitted by applicable law; (b) permitted by licensing terms governing the use of open-source components that may be included with the
								software; or (c) required to debug changes to any libraries licensed under the GNU Lesser General Public License which are included with and linked
								to by the software; and</li> 
							<li>when using Internet-based features you may not use those features in any way that could interfere with anyone else’s use of them,
								or to try to gain access to or use any service, data, account, or network, in an unauthorized manner.</li></ol></li></ol></li></ul></div>`,d(n,"class","container")},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class nm extends V{constructor(n){super(),x(this,n,null,sm,S,{})}}function om(o){let n;return{c(){n=a("div"),n.innerHTML=`<div class="header svelte-wamett"><h1 class="svelte-wamett">Week 3 |</h1> 
		<h2 class="svelte-wamett">Introduction to Ubuntu and Commands</h2></div> 
	<div class="content svelte-wamett"><p>Week 3 discusses the linux based operating system Ubuntu along with the many command line functions that come along with it.</p> 

	<h3>Exploring Ubuntu</h3> 
	<p>Ubuntu is a Linux distribution derived from Debian. 
		File organization in Ubuntu follows a hierarchial tree structure where files represent &quot;leaves&quot; along a path.</p> 
	<p>There are two types of pathes:</p> 
	<ul><li>Absolute Paths: Its name starts with the character / (identifying the root directory, which
			contains all other directories and files), then every child directory that must be
			traversed to reach the element is listed, each separated by a / sign.</li> 
		<li>Relative Paths:  is one that doesn&#39;t start with /; in that case, the directory tree is
			traversed starting from a given point, which changes depending on context, called
			the current directory</li></ul> 

	<p>Types of Files in Linux</p> 
	<ul><li>General Files: It is also called ordinary files. It may be an image, video,
			program, or simple text files. These types of files can be in ASCII or Binary
			format. It is the most commonly used file in the Linux system.</li> 
		<li>Directory Files: These types of files are a warehouse for other file types. It
			may be a directory file within a directory (subdirectory).</li> 
		<li>Device Files: In a Windows-like operating system, devices like CD-ROM, and
			hard drives are represented as drive letters like F: G: H whereas in the Linux
			system device are represented as files. As for example, /dev/sda1, /dev/sda2
			and so on.</li></ul> 

	<p>The base of the Linux/Unix file system hierarchy begins at the root and everything starts with the root directory.
		These are the common top-level directories associated with the root directory:</p> 
	<ul><li>/bin – binary or executable programs.</li> 
		<li>/etc – system configuration files.</li> 
		<li>/home – home directory. It is the default current directory.</li> 
		<li>/opt – optional or third-party software.</li> 
		<li>/tmp – temporary space, typically cleared on reboot.</li> 
		<li>/usr – User related programs.</li> 
		<li>/var – log files.</li></ul> 

	<img src="https://media.geeksforgeeks.org/wp-content/uploads/20210501124411/dir.png" alt="Linux Tree Structure" class="svelte-wamett"/> 

	<h3>The Linux Command Line</h3> 
	<p>The Linux command line is a text interface to your computer. Often referred to as the
		shell, terminal, console, prompt or various other names, it can give the appearance of
		being complex and confusing to use. During the formative years of the computer
		industry, one of the early operating systems was called Unix. It was designed to run as a
		multi-user system on mainframe computers, with users connecting to it remotely via
		individual terminals. These terminals were pretty basic by modern standards: just a
		keyboard and screen, with no power to run programs locally.</p> 
	
	<h3>Using the Terminal</h3> 
	<p>The terminal can be launched using the command &quot;ctrl-alt-t&quot;</p> 
	<img src="https://ubuntucommunity.s3.dualstack.us-east-2.amazonaws.com/original/2X/5/5249bad7f0bb536adceb8a9381c7366054546763.png" alt="Example Linux Terminal" class="svelte-wamett"/> 

	<p>Navigation Commands</p> 
	<ul><li>pwd - displays current working directory</li> 
		<li>cd - change directory</li> 
		<li>ls - lists files in current working directory</li></ul> 

	<p>File Commands</p> 
	<ul><li>vi - used to create and edit files</li> 
		<li>cat - reads contents of a file and outputs to the terminal</li> 
		<li>less - used to read contents of a file one page at a time</li> 
		<li>mkdir - creates a new directory</li> 
		<li>rmdir - deletes empty directories</li> 
		<li>rm - used to remove objects from the filesystem</li> 
		<li>mv - move files or directories from one place in the file system to another</li></ul> 

	<h3>File Permissions</h3> 
	<p>Permission Groups</p> 
	<ul><li>Owner: The Owner permissions apply only to the owner of the file or directory,
			they will not impact the actions of other users.</li> 
		<li>Group: The Group permissions apply only to the group that has been assigned to
			the file or directory, they will not affect the actions of other users.</li> 
		<li>All Users: The All Users permissions apply to all other users on the system, this is
			the permission group that you want to watch the most.</li></ul> 

	<p>Permission Types</p> 
	<ul><li>Read: The Read permission refers to a user’s capability to read the contents of
			the file.</li> 
		<li>Write: The Write permissions refer to a user’s capability to write or modify a file
			or directory.</li> 
		<li>Execute: The Execute permission affects a user’s capability to execute a file or
			view the contents of a directory.</li></ul> 

	<p>The permissions of files in your working directory can be viewed using the command &quot;ls -l&quot;.
		Upon running the command, a list of files will appear with a set of nine characters proceeded by a &quot;-&quot;.
		The First set of three characters represents the owner&#39;s permissions, the next three are for groups, and the last are for all user permissions.
		If a user has an r, w, and/or x, that user has access to read, write, and/or execute the corresponding file.
		r, w, and x each have a numerical value: r=4, w=2, and x=1. Permissions of a file can be changed by running &quot;chmod --- filename&quot;
		The &quot;---&quot; represents the three user groups.
		For example, &quot;Chmod 777 file1.txt&quot; gives all permissions (r + w + x = 4 + 2 + 1) to all users.</p></div>`,d(n,"class","container")},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class im extends V{constructor(n){super(),x(this,n,null,om,S,{})}}function lm(o){let n;return{c(){n=a("div"),n.innerHTML=`<div class="header svelte-wamett"><h1 class="svelte-wamett">Week 4 |</h1> 
		<h2 class="svelte-wamett">Linux Command Environment and Package Management</h2></div> 
	<div class="content svelte-wamett"><h3>What is vi?</h3> 
	<p>vi is the default editor that comes preinstalled with unix based operating systems. 
		vi can be started by typing &quot;vi filename&quot; into the terminal, and can then be closed 
		by typing exc and :q!.</p> 

	<img src="https://static.javatpoint.com/linux/images/linux-vi-intro4.png" alt="Example vi view" class="svelte-wamett"/> 

	<p>The unix vi editor has two modes:</p> 
	<ul><li>Command Mode, consisting of commands which cause action to be taken on the file. 
			Every character typed is a command that does something to the text file being 
			edited; a character typed in the command mode may even cause the vi editor to enter the insert mode</li> 
		<li>Insert Mode, in which entered text is inserted into the file. Every character
			typed is added to the text in the file; pressing the escape key turns off the Insert mode.</li></ul> 
	<p>The cursor movement in vi is unlike how we are accustomed to in most everyday programs.
		Cursor and Screen Manipulation commands are as followed:</p> 
	<ul><li>j or Return [or down-arrow] move cursor down one line</li> 
		<li>* k [or up-arrow] move cursor up one line</li> 
		<li>* h or Backspace [or left-arrow] move cursor left one character</li> 
		<li>* l or Space [or right-arrow] move cursor right one character</li> 
		<li>* 0 (zero) move cursor to start of current line (the one with the cursor)</li> 
		<li>* $ move cursor to end of current line</li> 
		<li>w move cursor to beginning of next word</li> 
		<li>b move cursor back to beginning of preceding word</li> 
		<li>:0Return or 1G move cursor to first line in file</li> 
		<li>:nReturn or nG move cursor to line n</li> 
		<li>:$Return or G move cursor to last line in file</li></ul> 
	<p>Editing Text</p> 
	<ul><li>* r replace single character under cursor (no Esc needed)</li> 
		<li>R replace characters, starting with current cursor position, until Esc hit</li> 
		<li>cw change the current word with new text, starting with the character under cursor, until Esc hit</li> 
		<li>cNw change N words beginning with character under cursor, until Esc hit; e.g., c5w changes 5 words</li> 
		<li>C change (replace) the characters in the current line, until Esc hit</li> 
		<li>cc change (replace) the entire current line, stopping when Esc is hit</li> 
		<li>Ncc or cNc change (replace) the next N lines, starting with the current line, stopping when Esc is hit</li> 
		<li>* x delete single character under cursor</li> 
		<li>Nx delete N characters, starting with character under cursor</li> 
		<li>dw delete the single word beginning with character under cursor</li> 
		<li>dNw delete N words beginning with character under cursor; e.g., d5w deletes 5 words</li> 
		<li>D delete the remainder of the line, starting with current cursor position</li> 
		<li>* dd delete entire current line</li> 
		<li>Ndd or dNd delete N lines, beginning with the current line; e.g., 5dd deletes 5 lines</li> 
		<li>yy copy (yank, cut) the current line into the buffer</li> 
		<li>Nyy or yNy copy (yank, cut) the next N lines, including the current line, into the buffer</li> 
		<li>p put (paste) the line(s) in the buffer into the text after the current line</li></ul> 

	<p>The ENV Command is a shell command for Linux, Unix, and Unix-like operating systems. It can be
		used to print a list of the current environment variables, or to run another program in a
		custom environment without modifying the current one. An environment variable is a named object that contains data used by one or more
		applications.</p> 

	<h3>The Cathedral and the Bazaar</h3> 

	<p>&quot;The Cathedral and the Bazaar&quot; is an essay written Eric S. Raymond about methods of software engineering.
		The essay lists several different methods that help in developing a software project. Below are some of the key points from the essay:</p> 
	<ul><li>Developing Something Interesting: Every good work of software starts by scratching a developer&#39;s personal itch. 
			Good programmers know what to write. 
			Great ones know what to rewrite (and reuse).
			To solve an interesting problem, start by finding a problem that is interesting to you.</li> 
		<li>Get Feedback: Release early and often getting customer feedback.
			Given a large enough beta-tester and co-developer base, almost every problem will be characterized quickly and the fix obvious to someone.
			Treating your users as co-developers is your least-hassle route to rapid code improvement and effective debugging.
			If you treat your beta-testers as if they&#39;re your most valuable resource, they will respond by becoming your most valuable resource.
			Often, the most striking and innovative solutions come from realizing that your concept of the problem was wrong.</li> 
		<li>Smart Data Structures and Dumb Code Works a lot Better than the Other Way Around: 
			Good programmers know what to write. Great ones know what to rewrite (and reuse).
			If you have the right attitude, interesting problems will find you.
			Treating your users as co-developers is your least-hassle route to rapid code improvement and effective debugging.
			Given a large enough beta-tester and co-developer base, almost every problem will be characterized quickly and the fix obvious to someone.
			Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away.&#39;&#39;</li></ul> 

	<img src="https://upload.wikimedia.org/wikipedia/en/c/c4/Cathedral-and-the-Bazaar-book-cover.jpg" alt="CathedralBazaar Book Cover" class="svelte-wamett"/> 

	<h3>What are Shell Scripts</h3> 
	<p>A shell script is a file containing a series of commands. 
		The shell reads this file and carries out the commands as though they have been entered directly on the
		command line.
		The shell is somewhat unique, in that it is both a powerful command line interface to the system and a scripting language interpreter. 
		Most of the things that can be done on the command line can be done in scripts, and most of the things that can be done in scripts can be done on the command line.</p> 

	<h3>What is a Package Manager</h3> 
	<p>A collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer&#39;s operating system in a consistent manner.
		A package manager deals with packages, distributions of software and data in archive files. 
		Packages contain metadata, such as the software&#39;s name, description of its purpose, version number, vendor, checksum, and a list of dependencies necessary for the software to run properly.</p> 

	<h3>What is a Software Repository</h3> 
	<p>Repositories store container images which represent executable packages containing everything required to run a discrete application including the code, system tools, system libraries, and the runtime and settings of the application.</p></div>`,d(n,"class","container")},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class rm extends V{constructor(n){super(),x(this,n,null,lm,S,{})}}function Am(o){let n;return{c(){n=a("div"),n.innerHTML=`<div class="header svelte-wamett"><h1 class="svelte-wamett">Week 6 |</h1> 
		<h2 class="svelte-wamett">Automated Testing</h2></div> 
	<div class="content svelte-wamett"><p>Automated software testing is a process in which software tools execute pre-scripted tests on a software application before it is released into production.
		Software testing is a method of assessing the functionality of a software program.
		There are many different types of software testing but the two main categories are dynamic testing and static testing, both of which are often used together.</p> 
	<ul><li>Dynamic Testing: an assessment that is conducted while the program is executed</li> 
		<li>Static Testing: is an examination of the program&#39;s code and associated documentation</li></ul> 

	<h3>The 5 Essentials of Software Testing</h3> 
	<ul><li>Test Strategy: tells you what types of testing and the amount of testing you think will work best at finding the defects that are lurking in the software</li> 
		<li>Test Plan: the testing tasks you will need to execute to carry out that strategy</li> 
		<li>Test Cases: have been prepared in advance in the form of detailed examples you will use to check that the software will actually meet its requirements</li> 
		<li>Test Data: consisting of both input test data and database test data to use while you are executing your test cases</li> 
		<li>Test Environment: where the tests are being carried out</li></ul> 
	<h3>Types of Automated Testing<h3><ul><li>Unit Testing: Testing done at the code level. 
			Bugs are identified in the functions, methods and routines written by developers.
			Due to the presence of unit tests, whenever the code compiles, all unit tests run and tell us the result that whether all functionality is working. 
			If any unit test fails, that means there is now a bug present in the production code.
			Some of the most popular tools present in the market are NUnit and JUnit. 
			Microsoft also provided its own framework for unit testing called MSTest.</li> 
		<li>Automated Web Service / API Tests: An Application Programming Interface (API) makes it possible for software to talk to other software applications. 
			Just like any other software, APIs need to be tested.
			We test here is usually the functionality, compliance and security issues. 
			In web applications, we can test the Request and Response of our application that whether they are secure and encrypted or not.</li> 
		<li>GUI Tests: GUI’s are highly subject to change. But this type of testing is also
			closest to what users will do with our application. Since the user will use the mouse and
			keyboard, automated GUI tests also mimic the same behavior by making use of mouse
			and keyboard to click or write to objects present on the user interface.</li></ul> 
	<h3>10 Best Practices and Strategies for Test Automation</h3> 

	<ol type="1"><li>Hire a Dedicated Automation Engineer or Team</li> 
		<li>An automation tool is important, but it is not the solution of everything</li> 
		<li>Select the automation tool which is familiar to your resources</li> 
		<li>Know the application being tested</li> 
		<li>Good Automation means good manual test case</li> 
		<li>Identify opportunities with automation</li> 
		<li>You cannot automate everything</li> 
		<li>Avoid GUI Automation when there is an alternate present</li> 
		<li>Use Automation for other useful purposes as well</li> 
		<li>Automation is software development</li></ol></h3></h3></div>`,d(n,"class","container")},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class cm extends V{constructor(n){super(),x(this,n,null,Am,S,{})}}function pm(o){let n;return{c(){n=a("div"),n.innerHTML=`<div class="header svelte-wamett"><h1 class="svelte-wamett">Week 7 |</h1> 
		<h2 class="svelte-wamett">Version Control</h2></div> 
	<div class="content svelte-wamett"><h3>About Version Control</h3> 
<p>What is “version control”, and why should you care? Version control is a system that
records changes to a file or set of files over time so that you can recall specific versions
later. For the examples in this book, you will use software source code as the files being
version controlled, though in reality you can do this with nearly any type of file on a
computer. <br/>
If you are a graphic or web designer and want to keep every version of an image or
layout (which you would most certainly want to), a Version Control System (VCS) is a
very wise thing to use. It allows you to revert selected files back to a previous state,
revert the entire project back to a previous state, compare changes over time, see who
last modified something that might be causing a problem, who introduced an issue and
when, and more. Using a VCS also generally means that if you screw things up or lose
files, you can easily recover. In addition, you get all this for very little overhead. <br/>
A component of <u>software configuration management</u>, <b>version control</b>, also known
as <b>revision control</b> or <b>source control</b>,[1] is the management of changes to
documents, <u>computer programs</u>, large web sites, and other collections of information.
Changes are usually identified by a number or letter code, termed the &quot;revision
number&quot;, &quot;revision level&quot;, or simply &quot;revision&quot;. For example, an initial set of files is
&quot;revision 1&quot;. When the first change is made, the resulting set is &quot;revision 2&quot;, and so on.
Each revision is associated with a <u>timestamp</u> and the person making the change.
Revisions can be compared, restored, and with some types of files, merged.
The need for a logical way to organize and control revisions has existed for almost as
long as <u>writing</u> has existed, but revision control became much more important, and
complicated when the era of computing began. The numbering of <u>book editions</u> and
of <u>specification revisions</u> are examples that date back to the print-only era. Today, the
most capable (as well as complex) revision control systems are those used in <u>software development</u>, 
where a team of people may change the same files. <br/> 
<b>Version control systems (VCS)</b> most commonly run as stand-alone applications, but
revision control is also embedded in various types of software such as <u>word processors</u> 
and <u>spreadsheets</u>, collaborative <u>web docs</u>[2] and in various <u>content
management systems</u>, e.g., Wikipedia&#39;s <u>page history</u>. Revision control allows for the
ability to revert a document to a previous revision, which is critical for allowing editors to
track each other&#39;s edits, correct mistakes, and defend against vandalism
and <u>spamming</u>. -https://en.wikipedia.org/wiki/Version_control <br/>
In computer <u>software engineering</u>, revision control is any kind of practice that tracks 
and provides control over changes to source code. Software developers sometimes use
revision control software to maintain documentation and configuration files as well as
source code. <br/>
As teams design, develop and deploy software, it is common for multiple versions of the
same software to be deployed in different sites and for the software&#39;s developers to be
working simultaneously on updates. Bugs or features of the software are often only
present in certain versions (because of the fixing of some problems and the introduction
of others as the program develops). <br/>
Therefore, for the purposes of locating and fixing bugs, it is vitally important to be able
to retrieve and run different versions of the software to determine in which version(s) the
problem occurs. It may also be necessary to develop two versions of the software
concurrently: for instance, where one version has bugs fixed, but no new features
(branch), while the other version is where new features are worked on (trunk).
At the simplest level, developers could simply retain multiple copies of the different
versions of the program, and label them appropriately. This simple approach has been
used in many large software projects. While this method can work, it is inefficient as
many near-identical copies of the program have to be maintained. This requires a lot of
self-discipline on the part of developers and often leads to mistakes. Since the code
base is the same, it also requires granting read-write-execute permission to a set of
developers, and this adds the pressure of someone managing permissions so that the
code base is not compromised, which adds more complexity. Consequently, systems to
automate some or all of the revision control process have been developed. This
ensures that the majority of management of version control steps is hidden behind the
scenes. <br/>
Moreover, in software development, legal and business practice and other
environments, it has become increasingly common for a single document or snippet of
code to be edited by a team, the members of which may be geographically dispersed
and may pursue different and even contrary interests. Sophisticated revision control that
tracks and accounts for ownership of changes to documents and code may be
extremely helpful or even indispensable in such situations. <br/>
Revision control may also track changes to configuration files, such as those typically
stored in /etc or /usr/local/etc on Unix systems. This gives system administrators
another way to easily track changes made and a way to roll back to earlier versions
should the need arise. <br/> 
Revision control manages changes to a set of data over time. These changes can be
structured in various ways. <br/>
Often the data is thought of as a collection of many individual items, such as files or
documents, and changes to individual files are tracked. This accords with intuitions
about separate files but causes problems when identity changes, such as during
renaming, splitting or merging of files. Accordingly, some systems, such as git, instead
consider changes to the data as a whole, which is less intuitive for simple changes but
simplifies more complex changes. <br/>
When data that is under revision control is modified, after being retrieved by checking
out, this is not in general immediately reflected in the revision control system (in
the repository), but must instead be checked in or committed. A copy outside revision
control is known as a &quot;working copy&quot;. As a simple example, when editing a computer
file, the data stored in memory by the editing program is the working copy, which is
committed by saving. Concretely, one may print out a document, edit it by hand, and
only later manually input the changes into a computer and save it. For source code
control, the working copy is instead a copy of all files in a particular revision, generally
stored locally on the developer&#39;s computer;[note 1] in this case saving the file only changes
the working copy, and checking into the repository is a separate step. <br/>
If multiple people are working on a single data set or document, they are implicitly
creating branches of the data (in their working copies), and thus issues of merging
arise, as discussed below. For simple collaborative document editing, this can be
prevented by using file locking or simply avoiding working on the same document that
someone else is working on. <br/>
Revision control systems are often centralized, with a single authoritative data store,
the repository, and check-outs and check-ins done with reference to this central
repository. Alternatively, in distributed revision control, no single repository is
authoritative, and data can be checked out and checked into any repository. When
checking into a different repository, this is interpreted as a merge or patch. <br/> 
</p><br/> 

<h3>Source-management models</h3> 
<p>Traditional revision control systems use a centralized model where all the revision
control functions take place on a shared server. If two developers try to change the
same file at the same time, without some method of managing access the developers
may end up overwriting each other&#39;s work. Centralized revision control systems solve
this problem in one of two different &quot;source management models&quot;: file locking and
version merging. </p><br/> 

<h3>File locking</h3> 
<p>The simplest method of preventing &quot;concurrent access&quot; problems involves locking
files so that only one developer at a time has write access to the central &quot;repository&quot;
copies of those files. Once one developer &quot;checks out&quot; a file, others can read that file,
but no one else may change that file until that developer &quot;checks in&quot; the updated
version (or cancels the checkout). <br/>
File locking has both merits and drawbacks. It can provide some protection against
difficult merge conflicts when a user is making radical changes to many sections of a
large file (or group of files). However, if the files are left exclusively locked for too long,
other developers may be tempted to bypass the revision control software and change
the files locally, leading to more serious problems.
</p><br/> 

<h3>Version merging</h3>
Main article: Merge (revision control)
Most version control systems allow multiple developers to edit the same file at the same
time. The first developer to &quot;check in&quot; changes to the central repository always
succeeds. The system may provide facilities to merge further changes into the central
repository, and preserve the changes from the first developer when other developers
check in. <br/>
Merging two files can be a very delicate operation, and usually possible only if the data
structure is simple, as in text files. The result of a merge of two image files might not
result in an image file at all. The second developer checking in the code will need to
take care with the merge, to make sure that the changes are compatible and that the
merge operation does not introduce its own logic errors within the files. These problems
limit the availability of automatic or semi-automatic merge operations mainly to simple
text-based documents, unless a specific merge plugin is available for the file types.
The concept of a reserved edit can provide an optional means to explicitly lock a file for
exclusive write access, even when a merging capability exists.

<h2>Version Control Best Practices</h2> 

<h3>Commit Related Changes</h3> 
<p>A commit should be a wrapper for related changes. For example, fixing two different
bugs should produce two separate commits. Small commits make it easier for other
team members to understand the changes and roll them back if something went wrong.
With tools like the staging area and the ability to stage only parts of a file, Git makes it
easy to create very granular commits.
</p><br/> 

<h3>Commit Often</h3> 
<p>Committing often keeps your commits small and, again, helps you commit only related
changes. Moreover, it allows you to share your code more frequently with others. That
way it’s easier for everyone to integrate changes regularly and avoid having merge
conflicts. Having few large commits and sharing them rarely, in contrast, makes it hard
both to solve conflicts and to comprehend what happened.
</p><br/> 

<h3>Don’t Commit Half-Done Work</h3> 
<p>You should only commit code when it’s completed. This doesn’t mean you have to
complete a whole, large feature before committing. Quite the contrary: split the feature’s
implementation into logical chunks and remember to commit early and often. But don’t
commit just to have something in the repository before leaving the office at the end of
the day. If you’re tempted to commit just because you need a clean working copy (to
check out a branch, pull in changes, etc.) consider using Git’s “Stash” feature instead.
</p><br/> 

<h3>Test Before You Commit</h3> 
<p>Resist the temptation to commit something that you “think” is completed. Test it
thoroughly to make sure it really is completed and has no side effects (as far as one can
tell). While committing half-baked things in your local repository only requires you to
forgive yourself, having your code tested is even more important when it comes to
pushing / sharing your code with others.
</p><br/> 

<h3>Write Good Commit Messages</h3> 
<p>Begin your message with a short summary of your changes (up to 50 characters as a
guideline). Separate it from the following body by including a blank line. The body of
your message should provide detailed answers to the following questions: What was the
motivation for the change? How does it differ from the previous implementation? Use
the imperative, present tense („change“, not „changed“ or „changes“) to be consistent
with generated messages from commands like git merge.
</p><br/> 

<h3>Version Control is not a Backup System</h3> 
<p>Having your files backed up on a remote server is a nice side effect of having a version
control system. But you should not use your VCS like it was a backup system. When
doing version control, you should pay attention to committing semantically (see “related
changes”) – you shouldn’t just cram in files.
</p><br/> 

<h3>Use Branches</h3> 
<p>Branching is one of Git’s most powerful features – and this is not by accident: quick and
easy branching was a central requirement from day one. Branches are the perfect tool
to help you avoid mixing up different lines of development. You should use branches
extensively in your development workflows: for new features, bug fixes, experiments,
ideas... 
</p><br/> 

<h3>Agree on a Workflow</h3> 
<p>Git lets you pick from a lot of different workflows: long-running branches, topic
branches, merge or rebase, git-flow... Which one you choose depends on a couple of
factors: your project, your overall development and deployment workflows and (maybe
most importantly) on your and your teammates’ personal preferences. However you
choose to work, just make sure to agree on a common workflow that everyone follows.</p> 

<h3>What is Git?</h3> 
<p>Git is a distributed, open-source version control system. It enables developers and data
scientists to track code, merge changes and revert to older versions - AWS. It allows you
to sync changes with a remote server. Due to its flexibility and popularity, Git has
become an industry standard as it supports almost all development environments,
command-line tools, and operating systems
</p><br/> 

<h3>How does Git work?</h3> 
<p>Git stores your files and their development history in a local repository. Whenever you save
changes you have made, Git creates a commit. A commit is a snapshot of current files. These
commits are linked with each other, forming a development history graph, as shown below.
It allows us to revert back to the previous commit, compare changes, and view the progress
of the development project - Azure DevOps. The commits are identified by a unique hash
which is used to compare and revert the changes made.
</p><br/> 

<img src="https://user-images.githubusercontent.com/60375020/235407177-ea4b60e9-c124-4e8f-a68f-71ed81e5084c.png" alt="A graph of the development history" class="svelte-wamett"/> 

<br/> 
<h3>Branches</h3> 
<p>The branches are copies of the source code that works parallel to the main version. To save
the changes made, merge the branch into the main version. This feature promotes conflict-
free teamwork. Each developer has his/her task, and by using branches, they can work on
the new feature without the interference of other teammates. Once the task is finished, you
can merge new features with the main version (master branch).
</p><br/> 
<img src="https://user-images.githubusercontent.com/60375020/235407651-885e3122-9b81-48c3-8393-a407cd6d1184.png" alt="Adding new feature to repository" class="svelte-wamett"/> 

<h3>Commits</h3> 
<p>There are three states of files in Git: modified, staged, and commit. When you make changes
in a file, the changes are saved in the local directory. They are not part of the Git
development history. To create a commit, you need to first stage changed files. You can add
or remove changes in the staging area and then package these changes as a commit with a
message describing the changes.
</p><br/> 

<img src="https://user-images.githubusercontent.com/60375020/235407737-06bfa323-16f2-4850-8091-e09ee0a914ec.png" alt="Three states of files in Git" class="svelte-wamett"/> 

<h3>What are the benefits of Git?</h3> 
<ul>Track changes: It allows developers to view historical changes.
Development history makes it easy to identify and fix bugs.</ul> 
<ul>IDE Integration: Due to its popularity, Git integration is available in all
	development environments, for example VSCode and JupyterLab.</ul> 
<ul>Team collaboration: A developer team can view their progress, and by
	using branches, they can work individually on a task and merge changes
	with the main version. Pull requests, resolving merge conflicts, and code
	review promote team collaboration.</ul> 
<ul>Distributed VSC: In a distributed system, there is no centralized file
	storage. There are multiple backups for the same project. This approach
	allows developers to work offline and commit changes.</ul> 
<br/> 

<h3>Git for Data Science Projects</h3> 
<p>Git provides version control for scripts, metrics, data, and models. By using Git
extension git-lfs, you can store and version a large database and machine learning models.
In a typical data science project, you have a Jupyter notebook, dataset, model, metadata,
and model metrics. The metadata includes files containing meta-information about the
machine learning model, features, model parameters, and automation files. All of these are
necessary for monitoring the progress of AI applications and resolving issues.
Track data science experiments help scientists revert accidental changes, select the best
experiment based on the performance metric, and collaborate with other teammates. The
diagram below shows how changes to data or code affect the metadata and output of the
model. Tracking these changes can also help other teammates come up with a better
solution. Learn all about Git in the latest blog from Summer Worsley.
</p><br/> 

<img src="https://user-images.githubusercontent.com/60375020/235408078-ae0c2eb6-1c08-4e51-a752-469f69416e23.png" alt="Git for a Data Science Project" class="svelte-wamett"/> 

<h3>Collaboration with GitHub</h3> 
<p>GitHub is a cloud software development platform. It is commonly used for saving files,
tracking changes, and collaborating on development projects. In recent years, GitHub has
become the most popular social platform for software development communities.
Individuals can contribute to open-source projects and bug reports, discuss new projects
and discover new tools. <br/>
Data scientists and machine learning engineers are following the path of software
developers and integrating the workflow with GitHub. By doing this, they can share their
research work, allow community contribution, and collaborate with data teams. You can
find all kinds of data science and machine learning projects, guides, tutorials, and resources
on this platform. For students, the platform has become an opportunity to gain work
experience and eventually land a job in a prestigious company.
</p><br/> 

<h3>Portfolio</h3> 
<p>Most technical recruiters will ask for the portfolio projects or GitHub profile. This helps
them determine whether a candidate is a good fit for their company. It is highly
recommended to create a GitHub profile and update it regularly. Hiring managers are
always on the lookout for candidates that are highly experienced in software development
and contribute to open-source projects. Being able to analyze the GitHub portfolio helps
them prepare questions for technical interview sessions.
</p><br/> 

<img src="https://user-images.githubusercontent.com/60375020/235412777-bfdc7c81-d584-4dc0-9815-960b70e030a6.png" class="svelte-wamett"/>

GitHub enables data scientists to showcase their projects, and it can also count as work
experiences on your resume. Showcasing portfolio projects also creates opportunities to
work together, launch a startup, and research work.

<img src="https://user-images.githubusercontent.com/60375020/235412862-71a9f7e0-09a9-423a-866c-383adf37cc7d.png" class="svelte-wamett"/> 

<h3>Features</h3>
GitHub also provides various other features that are as important as showcasing a
portfolio. It is necessary to learn about each feature so that you can incorporate them into
your data science projects.

<ul>Open-source: GitHub provides a complete ecosystem for open-source
projects. You can sponsor maintainers, contribute to a project, use the
open-source tool in your existing project, and promote your work.</ul> 
<ul>Community Collaboration: GitHub has become a community platform
where issues, feature requests, code, and documentation contributions can
be discussed.</ul> 
<ul>Explore: GitHub Explore tab helps you discover new projects, trending
tools, and developer events.</ul> 
<ul>GitHub Gists: You can share the snippet of your code or embed it in a blog
or website.</ul> 
<ul>GitHub CLI: It allows you to perform merge requests, review code, check
issues, and monitor progress from the command line program.</ul> 
<ul>Free Storage: unlimited private and public repositories storage.</ul> 
<ul>Web hosting: You can publish your portfolio site or documentation. GitHub
pages provide easy to build and deploy website experience.</ul> 
<ul>Codespace: a cloud development environment integrated with your GitHub
repository.</ul> 
<ul>Project: a customizable, flexible tool for planning and tracking the work on
GitHub.</ul> 
<ul>Automation: GitHub Action automates development workflow such as
build, test, publish, release, and deployment.</ul> 
<ul>Sponsor: You can support your favorite open-source project or developers
by paying a monthly or one-time fee. It also allows developers to use third-
party payment platforms such as ko-fi.</ul> 
<br/> 

<h3>Basic Commands</h3>
Before we jump into managing data science projects, let&#39;s learn about the most common Git
commands that you will be using in every data science project. The basic commands
include initializing the Git repository, saving changes, checking logs, pushing the changes to
the remote server, and merging.

<ul>git init create a Git repository in a local directory.</ul> 
<ul>git clone <remote-repo-address>: copy the entire repository from a
	remote server to remote directory. You can also use it to copy local
	repositories.</remote-repo-address></ul> 
<ul>git add <file.txt>: add a single file or multiple files and folders to the
	staging area</file.txt></ul> 
<ul>git commit –m “Message”: create a snapshot of changes and save it in the
	repository</ul> 
<ul>git config use to set user-specific configurations like email, username, and file format.</ul> 
<ul>git status shows the list of changed files or files that have yet to be staged and committed.</ul> 
<ul>git push <remote-name><branch-name>: send local commits to remote branch of repository.</branch-name></remote-name></ul> 
<ul>git checkout -b <branch-name>: creates a new branch and switches to a new branch.</branch-name></ul> 
<ul>git remote –v: view all remote repositories.</ul> 
<ul>git remote add <remote-name><host-or-remoteURL>: add remote server to local repository.</host-or-remoteURL></remote-name></ul> 
<ul>git branch –d <branch-name>: delete the branch</branch-name></ul> 
<ul>•	git pull merge commits to a local directory from a remote repository.</ul> 
<ul>•	git merge <branch-name>: after resolving merge conflicts the command blends selected branch into the current branch.</branch-name></ul> 
<ul>•	git log show a detailed list of commits for the current branch.</ul> 
<br/> 

<img src="https://user-images.githubusercontent.com/60375020/235412974-5d93863f-65f0-418d-aa9b-79e97ab604ea.png" class="svelte-wamett"/> 

<br/>
If you are interested in learning more commands, check out the Git cheat sheet by Gitlab. 

<h2>Getting started</h2>
In this section, we are going to use Git to track a data science project and GitHub as a remote server. We will learn how to install Git, 
create and clone a repository from GitHub, run machine learning experiments, and push changes (notebook, model, data) to GitHub using Windows PowerShell 7. 

<h3>Installing Git</h3>
Git supports all operating systems. You can install it using command-line tools or directly download and install the setup. 
<br/>Linux<br/>
For Debian/Ubuntu-based operating systems use \`apt-get install git\`, and if you are using another Linux-based system, check out the complete list of 
installing commands here.
<br/>macOS<br/>
If you have homebrew installed, use this command to download and install Git: \`brew install git\`. You can also download the binary installer and run the setup.
<br/>Windows<br/>
Installing Git on Windows is hassle-free. Just go to the download page, click on the specific Windows version, and download and install the setup. 
If you have a winget tool, you can install it by typing \`winget install --id Git.Git -e --source winget\` in PowerShell. 
After installing Git, make sure you have configured the user name and email. This information is used to sign the commits. 
<br/><br/> 
<i>git config --global user.name &quot;your-user-name&quot; <br/>
	git config --global user.email &quot;your@email.com&quot;
</i><br/>
For more in-depth information on how to install Git, click here. 

<h3>Initializing the Project</h3>
If you have a GitHub account, click on the + button and select a new repository. After that, type the repository name and add a simple description. 
It will create an empty public repository. 

<br/> 
<img src="https://user-images.githubusercontent.com/60375020/235413154-b1350903-4f68-44d9-8e6d-578b92d34a7b.png" class="svelte-wamett"/>

There are many ways to clone remote repositories to the local directory, and GitHub provides a detailed guide on how to clone, add remote, and initialize a Git project.  

<img src="https://user-images.githubusercontent.com/60375020/235413237-e9d4f4eb-48b0-441b-a063-59b12655a569.png" class="svelte-wamett"/>

We can simply clone the repository by providing an HTTPS link. Make sure you are in the working directory using the command prompt or PowerShell. 

<br/><br/> 
<i>git clone https://github.com/kingabzpro/DataCamp-Git.git <br/>

&gt;&gt;&gt; Cloning into &#39;DataCamp-Git&#39;...<br/>
&gt;&gt;&gt; warning: You appear to have cloned an empty repository.<br/>

cd .\\DataCamp-Git\\<br/> 
</i><br/>

OR
Create a new directory called “DataCamp-Git” and initialize Git using a simple command. After that, add a connection to the remote 
repository so that you can sync your work with GitHub.

<br/><br/> 
<i>mkdir DataCamp-Git<br/>
	cd .\\DataCamp-Git<br/>
	git init<br/>
	
	&gt;&gt;&gt; Initialized empty Git repository in C:/Repository/GitHub/DataCamp-Git/.git/ <br/>
	
	git remote add origin https://github.com/kingabzpro/DataCamp-Git.git <br/> 
</i><br/>

OR 
If you already have a project in a directory, just initialize Git using \`git init\` and add GitHub remote, as shown above. 
Simple Commit
Before we add files to our repository, make sure you are in the correct local directory. 
We will start simple and create a README file with the heading DataCamp-Git. Then, we will add it to the staging area by using \`git add\`. 


<br/><br/> 
<i>echo &quot;# DataCamp-Git&quot; &gt;&gt; README.md<br/>
	git add README.md<br/> 
</i><br/>	

Git status shows that we are on the main branch and the \`README.md\` file is staged and ready to be committed.  
<br/><br/> 
<i>git status<br/>

&gt;&gt;&gt; On branch main<br/>
&gt;&gt;&gt; No commits yet<br/>
&gt;&gt;&gt; Changes to be committed:<br/>
  (use &quot;git rm --cached <file>...&quot; to unstage)<br/>
        new file:   README.md<br/> 
</file></i><br/>

To create our first commit, we will use \`git commit\` with a message. As we can observe, the first commit is added under the ed9c886 hash.
<br/><br/> 
<i>git commit -m &quot;first commit&quot;<br/>

&gt;&gt;&gt; [main (root-commit) ed9c886] first commit<br/>
&gt;&gt;&gt; 1 file changed, 1 insertion(+)<br/>
&gt;&gt;&gt; create mode 100644 README.md<br/> 
</i><br/> 

<h3>Adding Project Files</h3>
We will use the DataCamp workspace MasterCard Stock Price with LSTM and GRU and download files. The author of the project has 
preprocessed the data and training time series data on the LSTM and GRU models. Learn more about the project by reading Recurrent Neural Network Tutorial (RNN).
To save the model file, we have added a new code cell in the project&#39;s Jupyter notebook. The new script will create a new directory 
called “model” and save both LSTM and GRU models. 

<br/><br/> 
<i>!mkdir -p model<br/>
	model_lstm.save(&#39;model/LSTM&#39;)<br/>
	model_gru.save(&#39;model/GRU&#39;)<br/> 
</i><br/>

As we can see, the Git repository has a data folder containing CSV files, the model folder with the model’s weight and metadata. 

<img src="https://user-images.githubusercontent.com/60375020/235413303-8eae596b-4ccf-430e-a691-6013f323eaf2.png" class="svelte-wamett"/>

We will now stage all the files. You can add any directory, file, or data after the initial command. 

<i>git add .\\data .\\model LSTM_GRU.ipynb RNN.png</i><br/>
OR
If you want to add all files to the staging area, then use dot.
<i>git add .</i><br/> 

<h3>Commit and Push</h3>
We will commit all the changes with a simple message, and the output shows all the new files in create mode. <br/> 
<br/> 
<i>git commit -m &quot;project files added&quot;<br/>

&gt;&gt;&gt; [main aa3e19a] project files added<br/>
&gt;&gt;&gt;  10 files changed, 5020 insertions(+)<br/>
&gt;&gt;&gt;  create mode 100644 LSTM_GRU.ipynb<br/>
&gt;&gt;&gt;  create mode 100644 RNN.png<br/>
&gt;&gt;&gt;  create mode 100644 data/Mastercard_stock_history.csv<br/>
&gt;&gt;&gt;  create mode 100644 data/Mastercard_stock_info.csv<br/>
&gt;&gt;&gt;  create mode 100644 model/GRU/saved_model.pb<br/>
&gt;&gt;&gt;  create mode 100644 model/GRU/variables/variables.data-00000-of-00001<br/>
&gt;&gt;&gt;  create mode 100644 model/GRU/variables/variables.index<br/>
&gt;&gt;&gt;  create mode 100644 model/LSTM/saved_model.pb<br/>
&gt;&gt;&gt;  create mode 100644 model/LSTM/variables/variables.data-00000-of-00001<br/>
create mode 100644 model/LSTM/variables/variables.index<br/> 
</i><br/>

Syncing with GitHub remote repository requires a remote name and branch name \`git push <remote-name><branch-name>\`. If you 
	have only one remote and one branch, then using \`git push\` will work. <br/>

After \`git push\`, the pop-up window will ask for the credentials, just add your GitHub username or password. You can also generate 
Personal access tokens and add them instead of the password. Learn more by reading the Git Push and Pull Tutorial. <br/> 
<i>git push<br/>

&gt;&gt;&gt; Enumerating objects: 21, done.<br/>
&gt;&gt;&gt; Counting objects: 100% (21/21), done.<br/>
&gt;&gt;&gt; Delta compression using up to 4 threads<br/>
&gt;&gt;&gt; Compressing objects: 100% (19/19), done.<br/>
&gt;&gt;&gt; Writing objects: 100% (21/21), 1.83 MiB | 1.59 MiB/s, done.<br/>
&gt;&gt;&gt; Total 21 (delta 2), reused 0 (delta 0), pack-reused 0<br/>
&gt;&gt;&gt; remote: Resolving deltas: 100% (2/2), done.<br/>
&gt;&gt;&gt; To https://github.com/kingabzpro/DataCamp-Git.git <br/>
&gt;&gt;&gt;  * [new branch]      main -&gt; main<br/></i>  <br/>

We are going to check our GitHub repository kingabzpro/DataCamp-Git to see whether we have successfully pushed the changes 
to remote. The GitHub repository has all the files, data, and models.

<img src="https://user-images.githubusercontent.com/60375020/235413388-1fb96ac7-9896-404e-9708-53dcb6e2c280.png" class="svelte-wamett"/> 

<h3>Git Branches</h3>
It is recommended to work with branches: for example, if you want to work on project documentation, create a documentation 
branch using \`git checkout\` or \`git branch\`. Make changes in the README file and when you have finalized the changes, merge the branch with the base. 
In our case, we have created and switched to a new branch called \`readme\`.
<i>git checkout -b readme</i><br/>

Let’s edit the README file by adding a description to the project and link the RNN DataCamp workspace and tutorial. After that, 
we will stage changes and save a snapshot of changes with a message.

<i>git add README.md<br/>
git commit -m &quot;project description and links to blog&quot;<br/>

&gt;&gt;&gt; [readme f3b8b9b] project description and links to blog<br/>
&gt;&gt;&gt;  1 file changed, 8 insertions(+)<br/></i>  <br/>

The remote repository doesn&#39;t have a readme branch. To create a new branch and push changes, we will use “readme:readme”. 
The output of the command shows that new branches have been created and both local and remote \`readme\` branches are synced. <br/> 

<i>git push origin readme:readme<br/>
&gt;&gt;&gt; remote: Resolving deltas: 100% (1/1), completed with 1 local object. <br/>
&gt;&gt;&gt; remote: Create a pull request for &#39;readme&#39; on GitHub by visiting:<br/>
&gt;&gt;&gt; remote:  https://github.com/kingabzpro/DataCamp-Git/pull/new/readme <br/>
&gt;&gt;&gt; remote:<br/>
To https://github.com/kingabzpro/DataCamp-Git.git <br/>
&gt;&gt;&gt;  * [new branch]      readme -&gt; readme <br/></i>  <br/>

You can observe that we have successfully pushed the local branch to GitHub with a modified version of README.md file. 

<img src="https://user-images.githubusercontent.com/60375020/235413499-66c8cab8-16e7-4ccb-8d26-39b546755ec9.png" class="svelte-wamett"/> 

<h3>Pull Request</h3>
This functionality is common for organizations. For example,  a software developer has worked on a new feature and wants 
to merge changes to the main remote branch. We will now create pull requests using GitHub GUI by clicking on the pull request 
button. After that, select the readme branch  which we want to merge with the base (main). You can type a detailed explanation of 
what features were added and click on the pull request button.

<img src="https://user-images.githubusercontent.com/60375020/235413568-a6104544-182d-49be-b92b-2fcb0be130f2.png" class="svelte-wamett"/>

The maintainer of the repository will compare your changes and merge them when they have passed all the tests. In our case, you are the maintainer, so click on the merge request to blend changes with the main branch. 

<img src="https://user-images.githubusercontent.com/60375020/235413621-f5514110-3189-4c80-b084-56089dcc7360.png" class="svelte-wamett"/>

Congratulations, we have successfully created a pull request and merged it with the main branch. You can view the changes on the main branch here. 
If you want to view all the changes within your git repository, just type \`git log\`, and it will show historical changes to your project. Logging changes in data science projects are important, and Git helps us track all the changes, even large datasets. 

<img src="https://user-images.githubusercontent.com/60375020/235413715-b8752ba0-c9f7-46fb-84b5-c9a44c80faa4.png" class="svelte-wamett"/>

Assignment <br/>
Read ProGit pages 9-61 and 165-217 <br/>
Answer the following:<br/> 
<ul>Why is copying updated files into a directory ineffective?</ul> 
<ul>Briefly describe the difference between “Centralized” version control and “Distributed” version control?</ul> 
<ul>When Git was developed, what were the goals?  Were they met?</ul> 
<ul>What are the three main states in which your files may reside while using Git?</ul> 
<ul>Many programs on GitHub are in need of improvement.  If you find a program you wish to work on, what are the six steps to getting the program, fixing it and submitting your changes?</ul></branch-name></remote-name></div>`,d(n,"class","container")},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class mm extends V{constructor(n){super(),x(this,n,null,pm,S,{})}}function um(o){let n,i,l,e,c,m,A,r,p,g,k,K,q,O,T,U,D,re,M,h,w,v,j,b,W,To,pe,Ro,me,Po,ue,No,de,Xo,we,Go,he,zo,ve,Zo,ge,Lo,fe,Jo,be,Ho,ye,Do,ke,Mo,qe,Co,Se,Yo,xe,Bo,Ve,Io,je,Qo,Oe,Eo,Ke,_o,We,$o,Ue,ei,Fe,ti,Te,ai,Re,si,Pe,ni,Ne,oi,Xe,ii,Ge,li,ze,ri,Ze,Ai,Le,ci,Je,pi,He,mi,De,ui,Me,di,Ce,wi,Ye,hi,Be,vi,Ie,gi,Qe,fi,Ee,bi,_e,yi,$e,ki,et,qi,tt,Si,at,xi,st,Vi,nt,ji,ot,Oi,it,Ki,lt,Wi,rt,Ui,At,Fi,ct,Ti,pt,Ri,mt,Pi,ut,Ni,dt,Xi,wt,Gi,ht,zi,vt,Zi,gt,Li,ft,Ji,bt,Hi,yt,Di,kt,Mi,qt,Ci,St,Yi,xt,Bi,Vt,Ii,jt,Qi,Ot,Ei,Kt,_i,Wt,$i,Ut,el,Ft,tl,Tt,al,Rt,sl,Pt,nl,Nt,ol,Xt,il,Gt,ll,zt,rl,Zt,Al,Lt,cl,Jt,pl,Ht,ml,Dt,ul,Mt,dl,Ct,wl,Yt,hl,Bt,vl,C,gl,It,fl,Y,bl,Qt,yl,B,kl,Et,ql,_t,Sl,$t,xl,I,Vl,ea,jl,ta,Ol,aa,Kl,sa,Wl,na,Ul,oa,Fl,ia,Tl,la,Rl,ra,Pl,Aa,Nl,ca,Xl,pa,Gl,ma,zl,ua,Zl,da,Ll,wa,Jl,ha,Hl,va,Dl,ga,Ml,fa,Cl,Yl,Bl,ba,Il,Ql,El,ya,_l,ka,$l,qa,er,Sa,tr,ar,sr,xa,nr,or,ir,Va,lr,ja,rr,Oa,Ar,Ka,cr,Wa,pr,Ua,mr,Fa,ur,Ta,dr,Ra,wr,Pa,hr,Na,vr,Xa,gr,Ga,fr,za,br,Za,yr,La,kr,Ja,qr,Ha,Sr,Da,xr,Ma,Vr,Ca,jr,Ya,Or,Ba,Kr,Ia,Wr,Qa,Ur,Ea,Fr,_a,Tr,$a,Rr,es,Pr,ts,Nr,as,Xr,ss,Gr,ns,zr,os,Zr,is,Lr,ls,Jr,rs,Hr,As,Dr,cs,Mr,ps,Cr,ms,Yr,us,Br,ds,Ir,ws,Qr,hs,Er,vs,_r,gs,$r,fs,eA,tA,aA,bs,sA,nA,oA,ys,iA,ks,lA,qs,rA,Ss,AA,xs,cA,Vs,pA,js,mA,Os,uA,Ks,dA,Ws,wA,Us,hA,Fs,vA,Ts,gA,Rs,fA,Ps,bA,Ns,yA,Xs,kA,Gs,qA,zs,SA,Zs,xA,Q,VA,Ls,jA,Js,OA,Hs,KA,Ds,WA,Ms,UA,Cs,FA,Ys,TA,Bs,RA,E,PA,Is,NA,Qs,XA,Es,GA,_s,zA,$s,ZA,en,LA,_,JA,tn,HA,an,DA,sn,MA,nn,CA,on,YA,ln,BA,$,IA,rn,QA,An,EA,cn,_A,pn,$A,mn,ec,un,tc,ee,ac,dn,sc,wn,nc,hn,oc,te,ic,vn,lc,gn,rc,fn,Ac,bn,cc,yn,pc,kn,mc,qn,uc,ae,dc,Sn,wc,xn,hc,Vn,vc,jn,gc,On,fc,Kn,bc,Wn,yc,Un,kc,Fn,qc,se,Sc,Tn,xc,Rn,Vc,Pn,jc,Nn,Oc,Xn,Kc,Gn,Wc,ne,Uc,zn,Fc,Zn,Tc,Ln,Rc,Jn,Pc,Hn,Nc,Dn,Xc,Mn,Gc,Cn,zc,Yn,Zc,Bn,Lc,In,Jc,Qn,Hc,En,Dc,_n,Mc,oe,Cc,$n,Yc,eo,Bc,to,Ic,ao,Qc,so,Ec,no,_c,oo,$c,io,ep,lo,tp,ro,ap,Ao,sp,co,np,po,op,mo,ip,uo,lp,wo,rp,ho,Ap,vo,cp,go,pp,fo,mp,bo,up,yo,dp,ko;return{c(){n=a("div"),i=a("div"),i.innerHTML=`<h1 class="svelte-wamett">Week 8 |</h1> 
		<h2 class="svelte-wamett">Linux Utilities</h2>`,l=s(),e=a("div"),c=a("p"),c.textContent="Linux, like Unix, comes equipped with a number of useful utilities – commands that accomplish tasks.  Today, we’ll discuss a few of them.",m=s(),A=a("p"),A.textContent="grep",r=s(),p=a("p"),p.innerHTML="<a>https://www.gnu.org/software/grep/manual/grep.html</a>",g=s(),k=a("p"),k.textContent="grep searches input files for lines containing a match to a given pattern list. When it finds a match in a line, it copies the line to standard output (by default), or produces whatever other sort of output you have requested with options.",K=s(),q=a("p"),q.textContent="Though grep expects to do the matching on text, it has no limits on input line length other than available memory, and it can match arbitrary characters within a line. If the final byte of an input file is not a newline, grep silently supplies one. Since newline is also a separator for the list of patterns, there is no way to match newline characters in a text.",O=s(),T=a("p"),T.textContent="The general synopsis of the grep command line is",U=s(),D=a("p"),D.textContent="grep options pattern input_file_names",re=s(),M=a("p"),M.textContent="There can be zero or more options. pattern will only be seen as such (and not as an input_file_name) if it wasn’t already specified within options (by using the ‘-e pattern’ or ‘-f file’ options). There can be zero or more input_file_names.",h=s(),w=a("p"),w.innerHTML="<a>https://www.linode.com/docs/tools-reference/tools/how-to-grep-for-text-in-files/</a>",v=s(),j=a("p"),j.textContent="While straightforward pattern matching is sufficient for some filtering tasks, the true power of grep lies in its ability to use regular expressions for complex pattern matching. Most characters in regular expressions match with input data literally; however, there are some sequences that carry special significance:",b=s(),W=a("table"),W.innerHTML=`<tbody><tr><th><p>Symbol</p></th> 
			  <th><p>Result</p></th></tr> 
			<tr><td>.</td> 
			  <td>Matches any character.</td></tr> 
			<tr><td>*</td> 
			  <td><p>Matches zero or more instances of the preceding</p><p>character.</p></td></tr> 
			<tr><td>+</td> 
			  <td><p>Matches one or more instances of the preceding </p><p>character.</p></td></tr> 
			<tr><td>[]</td> 
			  <td>Matches any of the characters within the brackets.</td></tr> 
			<tr><td>()</td> 
			  <td><p>Creates a sub-expression that can be combined to </p><p>make more complicated expressions.</p></td></tr> 
			<tr><td>|</td> 
			  <td>OR operator; (www|ftp) matches either “www” or “ftp”.</td></tr> 
			<tr><td>^</td> 
			  <td>Matches the beginning of a line.</td></tr> 
			<tr><td>$</td> 
			  <td>Matches the end of the line.</td></tr> 
			<tr><td>\\</td> 
			  <td><p>Escapes the following character. Since . matches any </p><p>character, to match a literal period you would need to </p><p>use \\..</p></td></tr></tbody>`,To=s(),pe=a("p"),pe.textContent="*** One popular use of grep is to extract useful information from system logs:",Ro=s(),me=a("p"),me.textContent='grep -Eoc "^[0-9]3\\.[0-9]3\\.[0-9]3\\.[0-9]3.* 200"  /srv/www/example.com/logs/access.log',Po=s(),ue=a("p"),ue.textContent="In this command, grep filters an Apache access log for all lines that begin with an IP address, followed by a number of characters, a space and then the characters 200 (where 200 represents a successful HTTP connection). The -c option outputs only a count of the number of matches. To get the output of the IP address of the visitor and the path of the requested file for successful requests, omit the -c flag:",No=s(),de=a("p"),de.textContent='grep -Eo "^[0-9]3\\.[0-9]3\\.[0-9]3\\.[0-9]3.* 200"  /srv/www/example.com/logs/access.log',Xo=s(),we=a("p"),we.textContent="The curly brackets specify the number of instances of the pattern. 3 requires that the previous character occur at least once, but no more than three times. The character class [0-9] will match against one or more numeric digits. You can also generate similar output but report on unsuccessful attempts to access content:",Go=s(),he=a("p"),he.textContent='grep -Eo "^[0-9]3\\.[0-9]3\\.[0-9]3\\.[0-9]3.* 404"  /srv/www/example.com/logs/access.log',zo=s(),ve=a("p"),ve.textContent="The following command generates a list of all IP addresses that have attempted to connect to your web server. Using the -o option, only the matching strings are sent to standard output. This output is filtered through the utility uniq with the pipe operator (|) to filter out duplicate entries:",Zo=s(),ge=a("p"),ge.textContent='grep -Eo "^[0-9]3\\.[0-9]3\\.[0-9]3\\.[0-9]3" /srv/www/example.com/logs/access.log | uniq',Lo=s(),fe=a("p"),fe.textContent="The next example uses an alternative pattern for matching an IP address in a different log. The following command searches the most recent /var/log/auth.log file for invalid login attempts:",Jo=s(),be=a("p"),be.textContent='grep -Eo "Invalid user.*([0-9]3\\.)3[0-9]3" /var/log/auth.log',Ho=s(),ye=a("p"),ye.textContent="You can split the above command into two layers to output a list of IP addresses with failed login attempts to your system:",Do=s(),ke=a("p"),ke.textContent='grep "Invalid user" /var/log/auth.log | grep -Eo "([0-9]3\\.)3[0-9]3" | uniq',Mo=s(),qe=a("p"),qe.textContent="grep can filter the output of commands such as tail -F to provide real-time monitoring of specific log events:",Co=s(),Se=a("p"),Se.textContent='tail ~/.procmail/procmail.log -F | grep "Subject"',Yo=s(),xe=a("p"),xe.textContent="In this case, tail follows the ~/procmail/procmail.log file. This output is passed to grep, which filters the stream and prints only lines that contain the string “Subject”.",Bo=s(),Ve=a("p"),Ve.textContent="Ping",Io=s(),je=a("p"),je.textContent="The ping command is one of the most often used networking utilities for troubleshooting network problems.",Qo=s(),Oe=a("p"),Oe.innerHTML="<a>https://www.lifewire.com/ping-command-2618099</a>",Eo=s(),Ke=a("p"),Ke.innerHTML="The ping <a>command</a> is a <a>Command Prompt command</a> used to test the ability of the source computer to reach a specified destination computer. The ping command is usually used as a simple way to verify that a computer can communicate over the network with another computer or network device.",_o=s(),We=a("p"),We.textContent="The ping command operates by sending Internet Control Message Protocol (ICMP) Echo Request messages to the destination computer and waiting for a response.",$o=s(),Ue=a("p"),Ue.textContent="How many of those responses are returned, and how long it takes for them to return, are the two major pieces of information that the ping command provides.",ei=s(),Fe=a("p"),Fe.innerHTML="For example, you might find that there are no responses when pinging a network printer, only to find out that the printer is offline and its cable needs replaced. Or maybe you need to ping a <a>router</a> to verify that your computer can connect to it, to eliminate it as a possible cause for a networking issue.",ti=s(),Te=a("p"),Te.textContent="The ping command is usually used as a simple way to verify that a computer can communicate over the network with another computer or network device. The ping command operates by sending Internet Control Message Protocol (ICMP) Echo Request messages to the destination computer and waiting for a response.",ai=s(),Re=a("p"),Re.textContent="Crontab",si=s(),Pe=a("p"),Pe.innerHTML="<a>https://en.wikipedia.org/wiki/Cron</a>",ni=s(),Ne=a("p"),Ne.innerHTML="The software utility cron is a time-based <a>job scheduler</a> in <a>Unix-like</a> computer <a>operating </a><a>systems</a>. People who set up and maintain software environments use cron to schedule jobs (commands or <a>shell scripts</a>) to run periodically at fixed times, dates, or intervals. It typically automates system maintenance or administration—though its general-purpose nature makes it useful for things like downloading files from the <a>Internet</a> and downloading <a>email</a> at regular intervals.",oi=s(),Xe=a("p"),Xe.innerHTML="Cron is driven by a crontab (cron table) file, a configuration file that specifies <a>shell</a> commands to run periodically on a given schedule. The crontab files are stored where the lists of jobs and other instructions to the cron <a>daemon</a> are kept. Users can have their own individual crontab files and often there is a system-wide crontab file (usually in /etc or a subdirectory of /etc) that only system administrators can edit.",ii=s(),Ge=a("p"),Ge.textContent="Each line of a crontab file represents a job, and looks like this:",li=s(),ze=a("p"),ze.textContent="# ┌───────────── minute (0 - 59)",ri=s(),Ze=a("p"),Ze.textContent="# │ ┌───────────── hour (0 - 23)",Ai=s(),Le=a("p"),Le.textContent="# │ │ ┌───────────── day of month (1 - 31)",ci=s(),Je=a("p"),Je.textContent="# │ │ │ ┌───────────── month (1 - 12)",pi=s(),He=a("p"),He.textContent="# │ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday;",mi=s(),De=a("p"),De.textContent="# │ │ │ │ │                                       7 is also Sunday on some systems)",ui=s(),Me=a("p"),Me.textContent="# │ │ │ │ │",di=s(),Ce=a("p"),Ce.textContent="# │ │ │ │ │",wi=s(),Ye=a("p"),Ye.textContent="# * * * * *  command to execute",hi=s(),Be=a("p"),Be.textContent="The syntax of each line expects a cron expression made of five fields, followed by a shell command to execute.",vi=s(),Ie=a("p"),Ie.innerHTML="While normally the job is executed when the time/date specification fields all match the current time and date, there is one exception: if both &quot;day of month&quot; (field 3) and &quot;day of week&quot; (field 5) are restricted (not &quot;*&quot;), then one or both must match the current day.<a>[3]</a>",gi=s(),Qe=a("p"),Qe.innerHTML="For example, the following clears the Apache error log at one minute past midnight (00:01) every day, assuming that the default shell for the cron user is <a>Bourne </a><a>shell</a> compliant:",fi=s(),Ee=a("p"),Ee.textContent='1 0 * * * printf "" > /var/log/apache/error_log',bi=s(),_e=a("p"),_e.textContent="This example runs a shell program called export_dump.sh at 23:45 (11:45 PM) every Saturday.",yi=s(),$e=a("p"),$e.textContent="45 23 * * 6 /home/oracle/scripts/export_dump.sh",ki=s(),et=a("p"),et.textContent="The configuration file for a user can be edited by calling crontab -e regardless of where the actual implementation stores this file.",qi=s(),tt=a("p"),tt.innerHTML="Some cron implementations, such as the popular <a>4th BSD edition</a> written by <a>Paul </a><a>Vixie</a> and included in many Linux distributions, add a sixth field: an account username that runs the specified job (subject to user existence and permissions). This is allowed only in the system crontabs—not in others, which are each assigned to a single user to configure. The sixth field is alternatively sometimes used for <span></span><span></span> instead of an account username—the <a>nncron</a> daemon for Windows does this.",Si=s(),at=a("h3"),at.innerHTML="Nonstandard predefined scheduling definitions[<a>edit</a>]",xi=s(),st=a("p"),st.innerHTML="Some cron implementations<a>[4]</a> support the following non-standard macros:",Vi=s(),nt=a("table"),nt.innerHTML=`<tbody><tr><td>Entry</td> 
			  <td>Description</td> 
			  <td>Equivalent to</td></tr> 
			<tr><td>@yearly (or @annually)</td> 
			  <td>Run once a year at midnight of 1 January</td> 
			  <td>0 0 1 1 *</td></tr> 
			<tr><td>@monthly</td> 
			  <td>Run once a month at midnight of the first day of the month</td> 
			  <td>0 0 1 * *</td></tr> 
			<tr><td>@weekly</td> 
			  <td>Run once a week at midnight on Sunday morning</td> 
			  <td>0 0 * * 0</td></tr> 
			<tr><td>@daily</td> 
			  <td>Run once a day at midnight</td> 
			  <td>0 0 * * *</td></tr> 
			<tr><td>@hourly</td> 
			  <td>Run once an hour at the beginning of the hour</td> 
			  <td>0 * * * *</td></tr> 
			<tr><td>@reboot</td> 
			  <td>Run at startup</td> 
			  <td>N/A</td></tr></tbody>`,ji=s(),ot=a("p"),ot.innerHTML="@reboot configures a job to run once when the daemon is started. Since cron is typically never restarted, this typically corresponds to the machine being booted. This behavior is enforced in some variations of cron, such as that provided in <a>Debian</a>,<a>[5]</a> so that simply restarting the daemon does not re-run @reboot jobs.",Oi=s(),it=a("p"),it.innerHTML="@reboot can be useful if there is a need to start up a server or daemon under a particular user, and the user does not have access to configure <a>init</a> to start the program.",Ki=s(),lt=a("h3"),lt.innerHTML="cron permissions[<a>edit</a>]",Wi=s(),rt=a("p"),rt.textContent="These two files play an important role:",Ui=s(),At=a("ul"),At.innerHTML=`<li>/etc/cron.allow - If this file exists, it must contain your username for you to use cron jobs.</li> 
		  <li>/etc/cron.deny - If the cron.allow file does not exist but the /etc/cron.deny file does exist then, to use cron jobs, you must not be listed in the /etc/cron.deny file.</li>`,Fi=s(),ct=a("p"),ct.textContent="Note that if neither of these files exist then, depending on site-dependent configuration parameters, either only the super user can use cron jobs, or all users can use cron jobs.",Ti=s(),pt=a("h2"),pt.innerHTML="CRON expression[<a>edit</a>]",Ri=s(),mt=a("p"),mt.innerHTML="A CRON expression is a string comprising five or six fields separated by white space<a>[10]</a> that represents a set of times, normally as a schedule to execute some routine.",Pi=s(),ut=a("p"),ut.textContent="Comments begin with a comment mark #, and must be on a line by themselves.",Ni=s(),dt=a("table"),dt.innerHTML=`<tbody><tr><td>Field</td> 
			  <td>Required</td> 
			  <td>Allowed values</td> 
			  <td>Allowed special characters</td> 
			  <td>Remarks</td></tr> 
			<tr><td>Minutes</td> 
			  <td>Yes</td> 
			  <td>0–59</td> 
			  <td>* , -</td> 
			  <td></td></tr> 
			<tr><td>Hours</td> 
			  <td>Yes</td> 
			  <td>0–23</td> 
			  <td>* , -</td> 
			  <td></td></tr> 
			<tr><td>Day of month</td> 
			  <td>Yes</td> 
			  <td>1–31</td> 
			  <td>* , - ? L W</td> 
			  <td>? L W only in some implementations</td></tr> 
			<tr><td>Month</td> 
			  <td>Yes</td> 
			  <td>1–12 or JAN–DEC</td> 
			  <td>* , -</td> 
			  <td></td></tr> 
			<tr><td>Day of week</td> 
			  <td>Yes</td> 
			  <td>0–6 or SUN–SAT</td> 
			  <td>* , - ? L #</td> 
			  <td>? L W only in some implementations</td></tr> 
			<tr><td>Year</td> 
			  <td>No</td> 
			  <td>1970–2099</td> 
			  <td>* , -</td> 
			  <td>This field is not supported in standard/default implementations.</td></tr></tbody>`,Xi=s(),wt=a("p"),wt.textContent="The month and weekday abbreviations are not case-sensitive.",Gi=s(),ht=a("ul"),ht.innerHTML=`<li>the particular case of the system crontab file (/etc/crontab), a user field inserts itself before the command. It is generally set to &#39;root&#39;.</li> 
		  <li>some uses of the CRON format there is also a seconds field at the beginning of the pattern. In that case, the CRON expression is a string comprising 6 or 7 fields.<a>[11]</a></li>`,zi=s(),vt=a("p"),vt.textContent="Comma ( , )",Zi=s(),gt=a("p"),gt.textContent='Commas are used to separate items of a list. For example, using "MON,WED,FRI" in the 5th field (day of week) means Mondays, Wednesdays and Fridays.',Li=s(),ft=a("p"),ft.textContent="Hyphen ( - )",Ji=s(),bt=a("p"),bt.textContent="Hyphens define ranges. For example, 2000–2010 indicates every year between 2000 and 2010, inclusive.",Hi=s(),yt=a("p"),yt.textContent="Percent ( % )",Di=s(),kt=a("p"),kt.innerHTML="Percent-signs (%) in the command, unless escaped with backslash (\\), are changed into newline characters, and all data after the first % are sent to the command as standard input.<a>[12</a>",Mi=s(),qt=a("p"),qt.textContent="Mount",Ci=s(),St=a("p"),St.innerHTML="<a>https://www.computerhope.com/unix/umount.htm</a>",Yi=s(),xt=a("p"),xt.innerHTML="The mount command <a>mounts</a> a <a>storage device</a> or <a>filesystem</a>, making it accessible and attaching it to an existing <a>directory</a> structure.",Bi=s(),Vt=a("p"),Vt.innerHTML="The umount command &quot;unmounts&quot; a mounted filesystem, informing the system to complete any pending <a>read</a> or <a>write</a> operations, and safely detach it.",Ii=s(),jt=a("p"),jt.innerHTML="All files accessible in <a>Unix</a>, or a Unix-style system such as <a>Linux</a>, are arranged in one big tree: the <a>file hierarchy</a>, rooted at /. These files can be spread out over several <a>devices</a>. The mount command attaches a filesystem, located on some device or other, to the file tree. Conversely, the umount command will detach it again.",Qi=s(),Ot=a("p"),Ot.textContent="The standard form of the mount command is:",Ei=s(),Kt=a("p"),Kt.textContent="mount -t type device dir ",_i=s(),Wt=a("p"),Wt.innerHTML="This tells the <a>kernel</a> to attach the filesystem found on device (which is of type type) at the directory dir. The previous contents (if any), <a>owner</a>, and <a>mode</a> of dir become invisible, and as long as this filesystem remains mounted, the <a>pathname</a> dir refers to the root of the filesystem on device.",$i=s(),Ut=a("p"),Ut.textContent="The file /etc/fstab may contain lines describing what devices are usually mounted where, using which options.",el=s(),Ft=a("p"),Ft.textContent="The command",tl=s(),Tt=a("p"),Tt.textContent="mount -a [-t type] [-O optlist]",al=s(),Rt=a("p"),Rt.innerHTML="causes all filesystems mentioned in fstab (of the proper type and/or having or not having the proper options) to be mounted as indicated, except for those whose line contains the noauto keyword. This command would typically be included in a <a>boot</a> <a>script</a>. Adding the -F option will make mount <a>fork</a>, so that the filesystems are mounted simultaneously.",sl=s(),Pt=a("p"),Pt.textContent="When mounting a filesystem mentioned in fstab or mtab, it suffices to give only the device, or only the mount point. The programs mount and umount maintain a list of currently mounted filesystems in the file /etc/mtab. If no arguments are given to mount, this list is printed.",nl=s(),Nt=a("p"),Nt.textContent="In general, fstab is no longer necessary for auto mounting.  Modern Linux systems do this like Windows does.",ol=s(),Xt=a("p"),Xt.textContent="Alias",il=s(),Gt=a("p"),Gt.innerHTML="<a>http://www.linfo.org/alias.html</a>",ll=s(),zt=a("p"),zt.innerHTML="The alias <a>command</a> makes it possible to launch any command or group of commands (inclusive of any options, <a>arguments</a> and <a>redirection</a>) by entering a pre-set <a>string</a> (i.e., sequence of <a>characters</a>).",rl=s(),Zt=a("p"),Zt.textContent="That is, it allows a user to create simple names or abbreviations (even consisting of just a single character) for commands regardless of how complex the original commands are and then use them in the same way that ordinary commands are used.",Al=s(),Lt=a("p"),Lt.innerHTML="A command is an instruction given by a user to tell a computer to do something. Commands are generally issued by typing them in at the <a>command line</a> (i.e., an all-text user interface) and then pressing the ENTER key, which passes them to the <a>shell</a>. A shell is a program that provides the traditional, text-only user interface for a <a>Unix-</a><a>like</a> <a>operating systems</a>. Its primary function is to read commands and then execute (i.e., run) them.",cl=s(),Jt=a("p"),Jt.innerHTML="The alias command is built into a number of shells including ash, bash (the default shell on most <a>Linux</a> systems), csh and ksh. It is one of several ways to customize the shell (another is setting environmental variables). Aliases are recognized only by the shell in which they are created, and they apply only for the user that creates them, unless that user is the <a>root</a> (i.e., administrative) user, which can create aliases for any user.",pl=s(),Ht=a("p"),Ht.textContent="Listing and Creating Aliases",ml=s(),Dt=a("p"),Dt.textContent="The general syntax for the alias command varies somewhat according to the shell. In the case of the bash shell it is",ul=s(),Mt=a("p"),Mt.textContent='alias [-p] [name="value"]',dl=s(),Ct=a("p"),Ct.textContent="When used with no arguments and with or without the -p option, alias provides a list of aliases that are in effect for the current user, i.e.,",wl=s(),Yt=a("p"),Yt.textContent="Alias",hl=s(),Bt=a("p"),Bt.textContent="Uses for alias",vl=s(),C=a("ol"),C.innerHTML=`<li>Reducing the amount of typing that is necessary for commands or groups of commands that are long and/or tedious to type. These commands could include opening a file that is frequently used for studying or editing.</li> 
		  <li>A second type of use for aliases is specifying the default version of a program that exists in several versions on a system or specifying default options for a command. For example, the following alias would have the ls command always list all items in a directory rather than just the non-hidden ones:</li>`,gl=s(),It=a("p"),It.textContent='alias ls="ls -a"',fl=s(),Y=a("ol"),Y.innerHTML="<li>A third use of aliases is correcting common misspellings of commands. For example, if a user has a habit of accidentally typing pdw instead of pwd, the following command will create an alias so that either spelling will work:</li>",bl=s(),Qt=a("p"),Qt.textContent='alias pdw="pwd"',yl=s(),B=a("ol"),B.innerHTML="<li>A fourth use of aliases is increasing the safety of the system by making commands interactive. This forces the user to confirm that it is desired to perform a specific action and thereby reduces the risk from accidental or impulsive abuse of powerful commands. For example, the rmcommand, which can remove files and directories and make them virtually unrecoverable, can be made interactive as follows:</li>",kl=s(),Et=a("p"),Et.textContent='alias rm="rm -i"',ql=s(),_t=a("p"),_t.textContent="Likewise, the risks associated with the cp command, which is used to copy the contents of one file to another file, can also be reduced by making it interactive by default. If the name for the file to be written to does not exist in the specified directory (by default the current directory), it will be created, but if it already exists, its contents will be overwritten. Thus, creating the following alias will reduce the chances of an unintended overwriting:",Sl=s(),$t=a("p"),$t.textContent='alias cp="cp -i"',xl=s(),I=a("ol"),I.innerHTML="<li>Another use of aliases is standardizing the name of a command across multiple operating systems. For example, different versions of Linux or other operating systems contain different versions of the <a>vi</a>  <a>text editor</a> (i.e., vi or its <a>clones</a> vim, nvi, elvis, etc.), but issuing the vi command on any of these divergent systems will generally launch the particular vi clone that is resident on that system (assuming that the appropriate alias has been created). For instance, Red Hat Linux installs vim by default, but issuing the command vi launches vim because the alias alias vi=&quot;vim&quot; is also installed by default for all users for the bash, csh and tcsh shells. Of course, the command vim can also be used, but vi is easier for most people to remember.</li>",Vl=s(),ea=a("p"),ea.innerHTML="For people accustomed to <a>MS-DOS</a> commands, the following aliases can be defined so that a Unix-like operating system appears to behave more like MS-DOS:",jl=s(),ta=a("p"),ta.textContent='alias dir="ls" alias copy="cp" alias rename="mv" alias md="mkdir" alias rd="rmdir" alias del="rm -i"',Ol=s(),aa=a("p"),aa.innerHTML="However, some experienced users of Unix-like systems contend that this may not be a good idea and that it might just make Linux seem more confusing, rather than simpler. Instead, they advocate having Linux users become accustomed to the <a>UNIX</a> terminology right from the start",Kl=s(),sa=a("p"),sa.textContent="Tar",Wl=s(),na=a("p"),na.innerHTML="<a>https://www.howtogeek.com/248780/how-to-compress-and-extract-files-using-the-tar-</a><a>command-on-linux/</a>",Ul=s(),oa=a("p"),oa.textContent="The tar command on Linux is often used to create .tar.gz or .tgz archive files, also called “tarballs.” This command has a large number of options, but you just need to remember a few letters to quickly create archives with tar. The tar command can extract the resulting archives, too.",Fl=s(),ia=a("p"),ia.textContent="The GNU tar command included with Linux distributions has integrated compression. It can create a .tar archive and then compress it with gzip or bzip2 compression in a single command. That’s why the resulting file is a .tar.gz file or .tar.bz2 file.",Tl=s(),la=a("p"),la.textContent="Use the following command to compress an entire directory or a single file on Linux. It’ll also compress every other directory inside a directory you specify–in other words, it works recursively.",Rl=s(),ra=a("p"),ra.textContent="tar -czvf name-of-archive.tar.gz /path/to/directory-or-file",Pl=s(),Aa=a("p"),Aa.textContent="Here’s what those switches actually mean:",Nl=s(),ca=a("ul"),ca.innerHTML=`<li>-c: Create an archive.</li> 
		  <li>-z: Compress the archive with gzip.</li> 
		  <li>-v: Display progress in the terminal while creating the archive, also known as “verbose” mode. The v is always optional in these commands, but it’s helpful.</li> 
		  <li>-f: Allows you to specify the filename of the archive.</li>`,Xl=s(),pa=a("h2"),pa.textContent="Use bzip2 Compression Instead",Gl=s(),ma=a("p"),ma.textContent="While gzip compression is most frequently used to create .tar.gz or .tgz files, tar also supports bzip2 compression. This allows you to create bzip2-compressed files, often named .tar.bz2, .tar.bz, or .tbz files. To do so, just replace the -z for gzip in the commands here with a -j for bzip2.",zl=s(),ua=a("p"),ua.textContent="Gzip is faster, but it generally compresses a bit less, so you get a somewhat larger file. Bzip2 is slower, but it compresses a bit more, so you get a somewhat smaller file. Gzip is also more common, with some stripped-down Linux systems including gzip support by default, but not bzip2 support. In general, though, gzip and bzip2 are practically the same thing and both will work similarly.",Zl=s(),da=a("p"),da.textContent="sudo",Ll=s(),wa=a("h3"),wa.innerHTML="<a>https://www.linux.com/blog/how-use-sudo-and-su-commands-linux-introduction</a>",Jl=s(),ha=a("h3"),ha.textContent="Introduction to Linux command 'sudo'",Hl=s(),va=a("p"),va.textContent="In Ubuntu Linux there is not root account configured by default. If users want root account password then they can manually set it up oo can use 'sudo'. As we all know, Linux in many ways protects users' computer being used for bad purposes by some nasty people around us. Using sudo is one of those good ways. Whenever a user tries to install, remove and change any piece of software, the user has to have the root privileges to perform such tasks. sudo, linux command is used to give such permissions to any particular command that a user wants to execute. sudo requires the user to enter user password to give system based permissions. For example user wants to update the operating system by passing command - ",Dl=s(),ga=a("p"),ga.textContent="apt-get update",Ml=s(),fa=a("p"),fa.textContent="The above command will give following error-",Cl=s(),Yl=a("p"),Bl=s(),ba=a("figure"),ba.innerHTML=`<img style="width: 646.875px;max-width: 100%;" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAdgB2AAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkz
	ODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2Nj
	Y2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCANLBQ0DASIA
	AhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAQFAQMGAgf/xABKEAACAQMDAQQGBwUGBQQCAQUA
	AQIDBBEFEiExE0FRkRQiYXGBsQYVMlJTktEjNDVUczNCcqHB4SRDYoLwFiVE8WPCJjZkg6Ky/8QA
	GAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAkEQEBAQEAAwEAAgMAAwEAAAAAARECEiExAyJBEzJR
	QmFxsf/aAAwDAQACEQMRAD8A7DdLP2mviN8ufWfmeevJplVak489cAxv3yxxJv4jc/vvzPFN+rln
	rjwBj1vl3Sb+I3y+818TTOsoPG3PxMxqqf8Ad/zJKY2qcu+TXxMKcufWfmYTyaLiUozgoyaz4FzR
	IVSX3n5md8vvPzIk4Vacc9s3zgkget8vvPzG+X3n5nkxJ4QHvdNrrJfEKo3xvfHtIHb1HVilOST9
	psnVajxnPjkQS90sczaXjkKUn/eefDJHVwo28d0dz95mNXdNNLCF0b985d7WPaN0+icn7cmmvNqO
	YvHDNFCpUksuowJqlJ/3pL4mN8sv135kL0mUqijHMePE9Os4LLzLPtGCZvl3Sb+I3yz9p+ZopVd8
	E8YMVqjisrPAEhynnO6XmN8m/tPHvItWtJKnhv1lzyeo1cQ5WXnrkCRvl3Sb+I3z+8/Mju4T4UcP
	3mVXUv7vT2hY3qb++/Mbn3Tb+JrU0+VHBouKzUsQzHjqmES90u+Ul8Rukn9qWPeRo1JQpqU5OeVn
	qI193c0veCpO+XVza+Jhzk/778zVGunFy29O7J59KjnHZ/5gxI3yxzJpeORvl13PzIle4bhiKcef
	E2Uq6nJR2/5jTG/dP70vMb5P+8/M1yk8PDwRd9TtnHtJYSGmJynLH2n5jfJf3nz7SOrlOajs6+0y
	rhNyWz7PtA37pfefmN8ty9Z+ZF9MW5x7N8e09dt2nKW3HHUfBI3y+8+faHOX3n5kdXK3qGzrxnJ6
	nWVPlrd8QN2+SeFJteORul96XmR4zl6TGGXhrJu7wPW+WcbnjxyN8l/ffmRpVttzODTaS8Tyrn9o
	sp48MgS98/vPzDnLH2n5kWpXcnHbmPjz1Du1Tik6bk/HIErfJv7T8zDlLP2peZ5jLfHK4Mj+zHrf
	L7z8xvl95+Z5Apj1vl95+Y3y+8/M8gGPW+X3n5jfL7z8zyAPW+X3n5jfL70vM8gD1vl96XmN8vvS
	8zyAPW+X3peY3y+9LzPIA9b5fefmN8vvPzPIIPW+X3peY3y+9LzPILR63y+8/Mb5fefmeQB63y+8
	/Mb5fefmeQIPW+X3n5jfL7z8zyBo9b5fefmN8vvS8zyBKPW+X3peY3y+9LzPIIPW+X3n5jfL7z8z
	yDVHrfL7z8xul96XmeTJBndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vM
	bpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL
	70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mA
	BndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfe
	l5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vM
	bpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL
	70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mA
	BndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfe
	l5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMbpfel5mABndL70vMzGUufWfmeTMe8Dy/
	BGt0cyb/ANSJV1vS6U1GreRhPGVHbLp5Hn6/0fuv4+31Zcf5DRYQW1YZkrvr/Rserfxb8Nsv0H1/
	o+cO/j+WX6CCe4Rl1yZUIx6ZK/6/0fp6fH2erL9B9f6Qv/nQ/LL9ALHlrk016UqkouOPV8WRPr/R
	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
	cXjh546knQbh1J9lKKaUZPnnvOfnc1m9enPPhm6lb1Kyk4pNQWXzg1tZlhclzY0rq3tq7hadoqlL
	lv8AurD5N9XI1apZJp4Z5NlVPtHlYfgSqOmXNaG+NGbjnGVgvlJPZuIIJV1Z1bdwU4SW7OMlxo+l
	qrRjOomlKPDcU+8nXc5mm+tc8YJtzYVaEZSnCUUvHHiLfTbmvHdGlNx45WC+UzTUIz3km6sa1tHd
	UhKMc4y8Gu3pSq1VCKbbT6F2ZprPo1VJNJc+1G6Gn3M6aqqC2vv3IstZnCFraxioqSTTwsdyPX0f
	ruUqlNxUlGk3zz3nPztmxm9enPtGDZU+18CRb6dc3C3Qoza4eVg6bJPbWoZn3Ei6sq9s/wBrSlFN
	4TfeZtrG4ueaVKU1nGUPKZpqOs9PE2SoVI0VVaW1vGckmtYV7aUJVaUorrzgm3CX1BRaiv7V8495
	m9J5KMEqpY16VF1KlKUYp4y8EY1LrTAMjBRgGcGAMgEq30+5uU3SozkljLWOCWyfUtRAS7qwuLZZ
	qUpRjnCbwe7fTLmvDtIUpyhnG5Y6k8phsQjBMudOubdbp0ZqLzhvB5trCvcLMKUpLGcrBfOZpsRQ
	TLjTrihBznSmopct4M2+mXNeO6NGbjw8rHQnnzm6ahAmXOnXFvHfUozjDOFJ4ImCyy/DWDKQLHSL
	T0qvJSykoOXRPvQtyFuIk7epTpOUksZ8TT4lhql6rurmEIRjtS9ToetKtKFesvSKzpLdHHGcmZ1k
	2lqtMFtrVvSoV5RpNSgpcSxjPBq0+tQowbmqcpbuFJdeB5etN9K/Bgv762t69m68JRhKMHLbGKwy
	lp0Z1ZbacXJ9cIvPc6mpLrUCRd2dazqKnXpyhJrdiXgaDU9tRgzgJF9YQoUdLdzNQlJVHHbKK9hn
	vrxS3FADoJUaGoW1epDbCVCDliEVz7/IqqVlXrycaVKUmll4JO5U8kQE240y4oU3OVKagureODXb
	Wda5k1Tpylh4eO4s6mauxGBYVNJuKcd0qU0umXg82+m3Vem6lOjOUE8NrHUecNiEjZSpSrSais8Z
	64Jb0m7UJSdCpiKy+ht0yhcRm50bd1W48xfcs9SecTVdVpypT2yWHjPU8Mmak6srnNaj2M9q9VeB
	qtrStcN9lTlJLGWu4uz6qOZJtbTK9KKlKnNJvHODVbWla4linTlJZxwPKfTUfuPdKlKrLEVnjxJV
	fTa9GDnKnNJLLbxwbNMoV3U30qLqZi+PiTymankhVaU6M8SWHjPXJrJ2qutK6Xb0OxlsXqrw55I9
	vbVbiTjShKbWM4Nb6a1ofUyTa2l3dGO6dCaXTnBrtrCvc4dOnKSbxlYJO4ksRQT6+lXVCDm6M9qT
	cm8cEHoyyyrKdwQwzfbWla5lilTlLnDwLcS14pUZ1niKTeM9cGto6TRdOrW11OVai8dm16yWOqKO
	nbVbmoo0qblLHRGZ3KmowJ9TSrqFNz7GeIrMunBqtbGvdScaNOU2llpY6F84uxGXtPdOm6k4wisu
	TwuSXV0q6pU3UdGexdW8HrTaFZ3KnSoupKnJPb7fAnnM1LUOtRnRm4zSTTx1yayfqrqyuZ9tR7GW
	7lfAi0berWmo0oObfciy+tXWpHW/Rv8Ahsfe/myhnpN3GDl2E8JZfTgvvo4mtPS9/wA2WdS/FlaL
	fC+kdHPK7J8fBnnUq1rG4uIu0g55a3ZXXxPDrUrbXqU67koKk87Vl955uqenXFxUrPtvXk5LuOHf
	+21z6/2UlSS7ZuKwljCROrapWq2tSjLtGp97kRbmFGFw40t2xNdepZXVXTnYV40XW7R427lx1R0u
	XGlK/ELqO8dWdGl1oXT1eJ73iS6rgrbrLuq2Xl75fM2aZdu0uoVeMRz3Z7sFlVp6Xcvtc190vWn3
	LL54OVvjdrH9tf0eowqXUnOMZfs3w17UY07Ua9S/gqs6k4bXmDlw+DXb3dKwv5ytnLs3Dat6y+cZ
	JtOpplrWVzSdfdFY9ZZ6mL/f/tGZRirqdSMVF1JZaRHjxqtd/wDSv9DTLUlLUd+f2TqJ/Z5xkse1
	06VxUuc1t014f+eBiS8/U9q/W+Lml/g/1Zv1Jf8Attnz/wAn/REHU7qNzWhODfqxxysd5OoXNldW
	cady6maUFGOxY7v9jrfUla/9tf0eoQq3+KkYzi6cuGvce9P1C6qarSjKvU2+ssOXsZFoXVOw1Cc6
	DexJxjuWX3FlRlpcLmFwnX9VY6eP/wBmev8A9T+1Xq/7xnvbk/8AMr8kvUa8K9duGdqcsZWOMkTP
	GDrxM5bi0+j/APEof4ZfIl1LyvHWHRdabpSrbdm7jGehX6PXpULyM6u7alLos9x6nc0nq/a5fZqt
	u6c4yY652sWLeNvSesXbcItKCaWOjwiBT1K4neUt06jjjmLl16itqcaWp1q1B/s6iUfWjzjjJKVT
	S4Vo3EXXzT4WV/54nPPXtMaNQSpV7WrT9SVRuTa4eeDbeXVxHSYzVae7tMZz7ysvbz0i53L7MJPZ
	xh4z3lha3FncafGhdOplScvURrxyTSTFLUqTrTTqTcnjGW8mvPJIvYUIVEqG7GP7xH9x3nx0WugU
	YV7ypGpGMkqbaTWe9Hv6xuHe032lTZ3w3dSDp93KzrupHHMdrys95cOelusrhOvmHTg5d+qxSrGK
	ubOsopSqTUm+/OUaNRv7mjqVdQrVFFYwlLpwhC79J1KjGP8AZQqrbxh4yTL2lpbvqrruvueM7fcj
	lz/H6zG30ajW1S1l2cIrZzFrq8Pk9So1FexausUoT/s+5rPTqVVfVlLUKNaD9WnHbzD3m6a0u4Xa
	N198vWnxhZfgS89S7Sxtvo05ajPEY/ZXK9xi4vK0NUpLtJuPZ52547yujK3t7+XZ7+z2cZXOT3cX
	VKeoQqwctihh5XfybvPpqR71unCNOjOMUnNtvC69Co6stNWuqFxRoKi5ZjndlY7kVXVnX8pfFrl6
	j4l7F50p5XSj/oUKwveXWm3ltO3nQunPDgorZH35H6QsadEt6dzXqRqRi0oZW5Z7zfd39eld01Cp
	UjFR+ypdepFqV6djcT9Czh8ftFngsZVdMrTjXm6/qLDwv/PEx1/1ivdShSqXFjVcI5eJTTX228dS
	Lq95Wt7uVG3nOjTSi1GLwuhqr6mneW84P9nQl6uY847iTVq6fqC7Ws6zqvrtWFhcGeZZ7pIg6fXq
	VdRhOrKVRqLXrPPczoL2zpW9sq6jCU9rmsLmLxkooStbXUqcqDqdkoPO5ZeeTa9SjTrQ7J+rKXr5
	jzjPcTvm9dSxb9Vl3cVLiq51JSbePtP2GgsdWlbVputRc3KUlnd4YK75Hp5vpuPVObhOMotpp5TR
	f1LqvHR7SarTTk3l595z64fsLSrd0paTa0YuW+De7jjvMd86z1EGdzWnUUp1JykuE2+UXUKtSto9
	x2k5T20ljLzjg5/Jc6Vd2/ote3unPFRKK2LuwO560vpTvqXVHP8A6crf1l/oQtRp2lOT9G7Tqvt+
	4laZdW/ojtblz2Sm5Paue7v+BOrs0v8ASHp9NVNQpqWGu0jlPv5OgvLap6VKnQuewpxaajHp7imu
	na29zSq2jqcVNz389MYJdSpp+oftazq9tLmW1YXgc+ttlZv17+kCpuOVGLkocNd3JzueeSXfwtqc
	4q234ced3jkiHX8+cjpyLllzo0Y0aTudqcoTwn39F3/EpkX1ZK00WtRXWclLx71+g7v9J0rXV/8A
	cN//AOXd1/6iy1Wl6TFXC6yml0z09pRN5Zf6NqVtQtY0blzUYqTWyPfkz3LJLE+POty/4lW8FiLg
	pcdOr7jdZ2NaFK3mrxxjJJ7cYx7OpUU76au41njco4+yWkq9jd06Mqrq9pDmeFhZMWXmYz1rOuQj
	GFJtKU+1WZ98uD1qdedvSl2EpU+M+q8d5E1O7t5W9GhQc9tOpn1o9w1S8o1qUo0XLDX96OO8njb4
	rnxWVritcNdrUlPb03PJaaBSXpanJJp03w17UU0U5SSXVvg6HPomiW9T+9lLxXVnX9PUyL1P+KO4
	qyrTcpttrjllzobzp17/AIf/ANWUL5ZbaRfUqFGrRruSVRperHPGMF7n8fRZ6Vc3tqcF7aV6lXSZ
	KpOUl2ne/cQNSpWUFm17XOV9vwwbtKvKMYej3Dl2bbk9secmevfOlQ48amv6q+ZbajdV6NKnGnVn
	FKfRMiXqsqdzSq0HV5nulu+BMlV0+6oU3UdbcnueFgz1ZcqX/rF81c6ZXrVI5nDCjKXLSyiJo1Nb
	K9Z4zSxJce896pf0qkHStnJ05L1t0ec5NtJRtdJrdc16Sfj3f5dSSXwwnxVX9Ttb2rN9XLJc29jc
	UqLavXFZ+zjH+pz+5psv69zZajHtKzqOokorasLBr9JZJIdfGzW6UY1bLhSezl+PKNV7c1aNhT7K
	pKC39IvHieNQurepUtYUHP1I7XuXtRLr07SWn0nc9pnf/c+JznqTUjXcbLnSK9zUgnVjwpy5a5Xf
	8TVptxX+r7r9tPEKXqrPThmrUtRo9jUtrVy7KcV9uPOc/wCxr0e7o04V6Nw5baqUfVXdz+pqc3xM
	yIFe5r1uKlWcknlJvOCboVLN7TrS5UZNYa9h51GlZU0nbdrly53eGCXZr0fRLmo/tKax3ruOl6ni
	1vpW6hUc7yrlvEaksLPTksPo6/8AiXx/cl80U9STnUlL7zbJ+jXsbO5cqrajsa4jnvReuf45C8+l
	fn18rgu9GuK1SjdxnVm1Glwm/eRdRo2FODdt2u7Cxv8AeedJu4W9SpGo2o1EovCy8E6/lz6W/ES5
	4rt+7g6K0qel2cqdCfo26TSafT2lZqlOx/tLftcuST3eGD3Qo6bKi3Ltt+eDHWXmM340apTr0akY
	1LiVbDaTZZaJcVXSjDfLCjws+0j6lf0XaUbei5YhBwe6PsRr0W/o2spdu5KO3C2xzzkWXrj2X4g1
	7mvV3KpWnJZxhv2l5ZTd3Z7KE/RpQhGLkn9p46ldqFGwjTlK37Xf1W7p1NltR090oyfbdoks+GS9
	WXn0W+mrU6VxTk4VbmdaKa5fTOBoNJT1Gm5YaxJYa9hJ1C8t/q2FnTc8xqbsOPv7/iLD/htJncd8
	auPHwLLfE30gahXlVrODbxCcksv2k36OvFxW4/5L+aKipPdUnLxbZN0i8jaV5ym2lKG3hZ70avOc
	5Fs9Iu3fViuiaLnUK0rOxsVbt03On60oPGcJEe/p2EYTnbutvSW3d0N1K7tLy1p0bx1P2MFGGxY9
	+fJGLdypa9qXpunUFWW6ay3OXO7qZvJ+gWc6dutkniSnDjHJovr2hTtKNtauX7KT+3HuPVte2tzb
	ToXrnulLjs444WDn43d/pFbK7uK8oxq1qk109aWTpNLsoXek0oVJR2qUniSyurKW6o2FJJ0e1zht
	bj3O9prSaVKGe0VTLzHjHJv9J5T+K1p1K5q1qmxOcKbSzDPGfErn1Lm9vKF/ZyqVXN3WVFYWI7U/
	/sp+mTpx8ajD6lhpdhG8fNSMPWxys9xX+8cHS+41U/U7ONpKMYzjLryljoV5ljJJMhHqKy8HQX05
	WFra+jt0+1oqUnDjLwuWc6nyX1ve2l1bqneupupxUIdnHHGO85/pGOo92tV3tjCFwnUkm5bp855M
	OvOhos+ylKD7RcxePA13F5bWtpCjaOe9S53xzw8kqlChLR5xuN+O0/u/A42Zd/pi/WqwqyvrW4jc
	NzcKfqubzjOSXSttul0I0aiozy81EvtLL4INe8s7S2dK0dTdODjLfHPdx8zzbXlpcWVO2vXPFPLW
	yPfl/qLzb7nxb8Ta1PstKuIV6quJtpqUuqWVwR3XnSsX2MpU/wBn/deO4h3tGwp0JOj2u/HG7p1P
	U7yjKwVLMtyp7V6vfgs41YnUajutPpQreu+rlLnL5Obl3l1Z3tCnaUqcnLdFc4j7Sll1On5zLWuW
	C80X1aW6PEnGSbXvKMt9BuVSuJqecOm1wvajX6TYdKjJKsZy9Lorc8b4/Mzf2c7G47OaSe1Prnqb
	tLVu63aXG/1HFraXqzx0vxu1vr7d/wDoV9rUhRrxlVpKrFdYvv4LjVZWNeClSdXduy8rHcQbClZV
	Kb7fte03ert6YwY56nif0s68oXum1KlCmreNKl60Vzv4/wBiho1pUajlHOcY4Zb1riytLOtQtnU3
	VoYlvWeSrtJU1XbrbtuH9nxHE9Vnn49aheTvaqqVFLKio+s8kQsdanaTuouydRw2JPtOucsrjpz8
	dOWUdJp1tG50Nxcox/bPqvcc2upZ+k0HosqDcu1dXd04wZ7luMX6m1alPTretShCM3Wi47ovGMd/
	+ZKsaC+rLetBqFSed0l1fLOVysv/ACLiwvreVtC3u3LZTWY7I85ycv0/O56TqLNUnCyqq5rq4zLO
	JeHHBB06ShbanOC2uLzBr+716Gi7oafChKVLtd/dnp1PGn3NKlZXkJuW6aWzC94k/iZ6aK99dSlt
	lXqOPg5Ftb1Z09Pn2c3Bb+iePAoKs91RtFlWu6MtMqU05dq5JrjjHBrrncLPixqVqjjCKqtqXEln
	qQoVqlDUakKU5QiopYi8eBD02vClOo6meUuiFW6Ub6dWn9mWFyvcSfnlsM9tuvfxD/sibtDrRUa1
	HalOooxjPP2Xzyb7+Wm3kJ106zq4wuMIgWVOynKrGv2uU0obfj1L6vOL/SXqVvdUYxbvJ1ouWEln
	jg8aNXjHNDbic5Nqpnpx/sS6V9a6fTjGi6ifR7o59pV2ULWrudx2m5yeNvgTn3z7T+kzVKNzSg27
	udSEk24rol4EGwr1qVTEKk48dzwWUru1srG4oUXUTrR/vRz0KVVmqrmu/joaktmLnpY/SH9+i/8A
	8a+bJllThb2depCK3ullSXDTw+Txf1NOvY9tJ1u0WIrCwsf+Mj6fqFKDrUa7ahNKEdseccon3nE/
	pJ0e5qXNSrC5lKtFU20pvOH4mbJ9jpcnDiak8SXVdDEbqx09Snaur2kk4PesrBGtLyhDS5U5uXa5
	eMR47jPjvuJIk2NxVuKN/CvOVRJYjuecdSjuoqFecUlhMsbC7o0oXnaOX7T7OF7yuuZKVeco/Zb4
	ydOJnVan1rXQv7JK30q5qQWKmxSjNcOLwc+W2mX1ONCrb3DeypiPqx5wa7+L1EzQ7u4rXc1VrTmu
	zbxJ570bNJt4vTpVouMaiqNKeOUuDFrU02ym60XWzKLjys/+dCBp19SjR9GuG+xcnJ7Y857vkcM8
	tsc8W1CjUp07h1rrtoyj9l93X2kfT2qdxXdJbP2b+yRbihpapTlDt92G458Tzp13QoU5Kbl9hpYj
	nknjs2LY3aZdVbh06FecqsZt5UnlPgjUKk6OtOnSm4RdfDUXhYyedKuaNvVpuq5cN9FnuNE7hLU5
	V4/Z7VyWV3ZO3j9axK1yW6vJvl7+X48E3QqEHYTqYiqiqYU8cpYR5nPT7yhTnWdbe+ZbVhEPT72l
	RTtqrfo8pOUsRzLPd8kY+85Eq6oUakKVw6t12qeWovuWHx1NmlqPZS7NKMeMJdO8qKtDS3TqTj2+
	5ptZ8Sy+jv8AD1jp/uy/nJuryo9c/fo/0182V+ZN4TbLLW4uV/FJN/s1wl7WeNPtnKvHtaMnFyj1
	i/E69WT2tqBtnua2tvwMzhODxUjKOfEnamoW+q1Y047YJx4XuRNvqdvfWdW5t6PZ9ktuG8t8/wC5
	nz+GqHvBmScXhmO46NMGdz8X5mABnI3PxZgAZyNz8X5mAAMptdGYADJnc/F+ZgAAAAGQAM5G546m
	AAMqTXRmAAbz1AAA9bn4s8mQN9pXdCtGaSeJJ8+wze3Erm6qVXhbmvsvjoR8hkkm6mMZM7mu9+Zg
	FVnLGWYAGcswAAM5a6GABltsbnjGWYAGchSa6MwAM5fiMswAGWAAAywABlNowAMtt9WE2jAAzlvv
	Ck10bMADLeepgADKJ2o387uUcxgkoperkgGSWbUBnAHVlVjJnc13swAM5bGTAA2UZ9nWhNJPa0+e
	hLu9QncW6pOMEk0/VyQRkmIwZyzAKrLbfVjODAAy231YUmu9+ZgAelLDJl7fSuaFvTcYJUobfV7+
	nXyIQyTEDKk10Zj2mCq9wm41Iy64afJMu76dxQjTaikpZ9VsgjJLymGchPBgFVlyb6ssLnUJVrZ0
	9sEmkvVK4yyXnUBkGCqy231bMZAAy231Y3Nd78zAAy22YyABltvq2FJro2YAGctvkn17+VWzlQ2w
	SbT46leZ9pLEHyMgwVWdzfewm0YAGctjLRgAZcm+9jLMADOWYAAAAAAABlNowAM5ZOqX852MqG2C
	zLPDeSAZ7sksBt94y10BjuKMuTfVsZZgAZyzAAAzGTi8pmABNur+d1BqcIJ8crOSJnHRmOoJgy5N
	rq/Mwm10ZgFGW2+rMZAAZAAAZAAGcmABlyb72MswAAyAAyMgAZ3PxYTaMADLk31YTa7zAAy231bM
	AAZ3PxZjIAGXJvvMZYAGcswAACeAAM7n4vzGTAAzub735jLMABkZAAzua72YyAB6Unjq/M6z6N/w
	2Px+bOSXQ636N/w2Px+bA0qnB6hC5qZxGLjw/f8AqYp6pWlfTt937FTUYLbzjJh3FOlqUKFWUYQc
	NznJ9OpiNrbq7ncK5Ti5b1xxg83f/tz6ir1vjVay/wAPyRI0ec3CVFNbJy5XwIur1I1tTqypyUov
	GGu/hE+ypStNPuK1aLhOEk0pLGeiN31zIv8ASpvYqN5XXhOWPM0Y4ybLifaV5z67pNms6z42wDPd
	kYXiUYAAAAAAZAGAZ9uB7QMAGcc8AYAAAAyBgAAAZMADPsA6clwF3odB1Y7/ABIMAyAMAGUBgGTA
	AAzgDAM9egQGAZAGAAAAAAGcADAAAAAAAAAAAGTBkodQMeBglAAADJgAZBgAAZAGAZMAAZDAd2Bz
	yAAXtA7zAGegyYAAAyBgz7R3AAAAMAGQMAyYAAAAAABnoYMlgdADBAAAAAAAAAAAAAAAAAAAAAAZ
	/wBDD5AAAAAAAAAAzz1MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABldD
	rfo3/DY/H5s5JdDrfo3/AA2Px+bApdbk1fxaeH2a+bIauq6jt7We3GMFnf2tS91anRopOUqeUm8d
	Ms8T0S5hlThzHwmjnepPrOqyFRKpvqR3k3UNTlcrbSUqdNrEo5ynyQ7ii6FeVOXDRqfsNZLlXAdB
	3cjPcaU9gwSrWyqXMG6aT5x9rBqVGTr9lj1t+3r35wTU1qMEm8tJ2leVOosNY78kcbqsAGSgueg6
	PkmaZbRubunCedrbTw8Poa7ylCldVYQbxGbXL9pPL3ia0ct8J+4OLXDyveb7R0o1f2zko4fTxLPV
	bK0hbSrW8qjwl9p+33Gb1lw1SAYCWDeqwAABnHAistLxJlzYTt4NySWP+pPvJohDuM4HcUAOoAJZ
	fTJlxa6pr4G617JVP2rkljuLi/sbP0KrXt5VXtXG59+fcYveXGdUHeOgaGDbTAM9wSAYz0QaafKw
	SrGjGtXcXnG1vhnvU6EaNzGMc4cE+X7zOohNGDOAaUHPQG61pqpdUoSfEppcP2kGrld2Bjjp8Sfq
	drStpYpuX2scv2HurS0/6vqSp1KruONqfTuz3e8nkmqwDoO/k0rAAwAAMsAO4YJU7OUbSlXa4qPj
	1kS0RAZwYwUABgABgAAZMADK5MG+0o9vcRpfez347hbg1NPwaPJY6nb0rZUY0nJtxe7d4lf3E5uz
	UYAGCqAGcAYBlmYxbAYMuLS5i/Is9Ts7azrwjGVTDgpcvPiTaNlYXdlUqQnWcqVPnnCzjPh7Dn5/
	2zrncDB6kucE+lS096ZKVSpVVzvwor7O3j2G/JdV3UY9hup04SuowTexzSXjjJL1G0p29KMoOWXL
	HL9hPL3hqu6gNG23pKtcU6az68kma1WrDSzh+8wWuoWlC3tIqLn2qkk03x3lXgnPWowBgFVkeIJN
	vZzr0a1SKWKcdz9ZC0RgjLRmEXOSS6smprDXTjA2vGcPyLO/tKFtTs5ZnmpDM8vPPHQl6ba2F3TV
	PfW7RZbS4WPIxe/Wpqg94S8DL4ZP0+nYzp3DuqlSMlDNPZ3vnrwbtxVf3GDZUUd2IZce7J4wWKwZ
	BMtLCdyvVWeM/aSJbIIQMtYbRjBQMrxMHpLPQBjHVM8lzqFjRtbSjPM91SOeXnnCZTkl0YABQAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAGV0Ot+jf8Nj8fmzkl0Ot+jf8ADY/H5sDRQWfpJR5/5T+TNGp2dxK8uKkZ1du5viXGPM326z9I
	qOGk+yfPwZF1T0v06vGFeahvawm8YOHV/m577U9RONb123ystlxdTsPq6vGlWhKo8bVt56r2FRVh
	ONZxm8yyuSfcaPWoWtSs6tJxh1Sby+Tdy2a0qwg+uAuGdGl1ov8AZv8Axv5ESP8AE/8A/P8A/sSt
	BnGVVUXw5Sby+nQQsan1hKe6O1Vs9/K3HC2S3XOplehC41yspvEdifTPcjMKlve11a7KUFJbt0Y8
	8c+B6yp/SCuotJdkn146IgaZ62sU0ml6kvkzGf2k3EW5t/R9SlGC3pVcRyuvJc20KlwnTnZ04RUW
	1JRWWanCnLUqqmoyaqcN+89RddanXhCrKMFFYSbx3E66vUxLajWFsrTWLaCballvPuZKq3FvcXlS
	1lGlFzm4blHnrgxhfXlosr7L7/eR4Wk3rEqu6KUa+7Lz4i5btLVdqVr6Ne1qcW3GMsJvv4LPUP4b
	Uzx9n5oh61VjK8rQxmSkvW8eCfcUnc6bUlCS4aWPI31f9dav9KvTrKV1PKTajJJ4wXfZdnXlbK3h
	KEVlTcVl5/8AsgaPVVt2lOed05pJru7jdfO4p3s9tWT4XMW/Az3bembfas1WzVjdKkm2tqllr3kL
	BIvK1StV3VpynLCWZPLI56efjrPiRZVVSrpuMZZwvW950+pXsKdKTdKk+O9e05Km/Xj70dDqFCVx
	bVJwlHEeMfE4frPcY6+oNtTV9db3FQpxnmTiuEmTp1bS2rO3/ZSilu3yjzz8CLpH7KpUoy61JKKf
	cup7vbCpV1CSjOH2VzzjoZv+2X4lQtVslZXEYQlKScFLLSXeyAy4+kVWM7qG38NL/NlOd+Ns9tyi
	6o6Krn6kuEllc8/FHOrqdLTpuvodfZJLLaw+vVGP1+ylU1ha+kXEU87VJbmu5ZLede1tasrZqk40
	+kpR5ff4e0iaavRrns59aklFPw5/3Pd7YVKuo19soY455x0Rnqy32xvtivpK9Po0qcpShUjucsLj
	qbqlxa2W2lFUqkl6st0eU18CVWuIUtVtYvn9n1TWO8rNRsKjuHUUouNSUpLGXjkzu3Oj/wClOvCv
	qUpxUYRcP7qwu4nXVk43kLi7TpU4xw20mu/BV2VJ0rxxlj7H6F5c3Eb2qrJ/bmk1Kb9VY5/0Hdsz
	Pha529uI1pbYwhGMZPDiuqIjJV5aytpvc4vMmlgi+89HOWenSJOn23pV5SpPKjN4yvcXsK1va3NC
	3jGnJxmoSbjysMqdGqKGoUM/efPwZPr2k/rWnV3Rcalbcsd3Pecf093K59/WvW6iV3UmopxlLjw6
	G677K40etWioxlDbHEV7URtcWyvKLaeJd3uN9rD0jRLmEGlJzXX4Ez1Kf8U9pTVW7pU3wpSSLurO
	jp9BR2U6kk/78fErLWhKlqFCMms9p1Jet8Q65e5c/A3f5WNfWlRjqeowhTjGKcH/AGa8Mss+y7B0
	6UbeE1NqEm4rMe7JU6FVjR1OnOfRKXyLC9daE1NVJNSk3Ha3wY/TZZIz0j6jpjjdN01JptLhJdxK
	r1LTTp9jDs6qS3ZnHnn4EOneVIXclXnUmmksN9/Bt1mxnK9eyUGti6ZZPdydUiHcXVOrc0qkYU0o
	SzhLhl3O8gtKtZ9lSxJvjHC6nN1qEqDjvw93TBcxoSuNGtIwnFNNt5fvNdyZF6Q246le06UIRhuT
	XqLwyyfvtbeVO1/ZyU/VnJx5hjjwK/TV6JqtGdTosvj3PxJdxZTnf0pxnDFWbkvZl95Os3EvpG1W
	yhB+kUZOVOTUU8JLp/sWFw7fTVtSp1H19eK7zRq+KNlC2bTnGom2nxzk86+sVM5T9WPT3sX+WLfe
	I9S5p3V3Q9SnBdos7V3ZR71W0hGuqtJ5jOaXCSXQqoycZprKaeeDpbCitQ0+lH1XUhmcpT78Nm+v
	4Rb6RNboUrWPZxxmUcr1Un1KMstZufSa1Npy+xjl+0rWb/PZGowW2hUsXULiX2YNp56dP9yqLy1X
	o2iV6j+0qiw117h3fWJUOpUVXUnufqqt7+Nxu1m2hG4lUpcwbSWEkuhWOo+135f2s/5nS2FvHU7C
	CbhvTcm6nsZjq+GVL6QdUoUram6Cw5PEsuKz1Nlg6jpU4K0pzi0k5NLOPE03FeF3qcG1mPZ4xL4k
	u63Uadl6O3Dc/W2d/Tqc7bJjN1E1exjSnGqspzmouOFhcEydOhYUpyxCbXPrxXuPGrZdjbOct0+1
	5bfPeY1r+xnhr7P+o99SaX3it1C5hcuG2FOG3P2F1NuiW/b3m1rjY309xXLkv9Oira0pXPC3Rxlc
	Pr/sdev4841fSr1O59IuFLK4jjj3ss9Ef/t17n7v/wCrKGXVt8l9oPr2N5Hck2sLL/6WO5nJZ6Ub
	lifQv4uld6ZKo4Qg9+PVj7ilubWpQm9zT6dMlrpUXW090YySk6jfL9xnvLJUz4rKcVHUYxT4VVL/
	ADL67uqdC2pRlCnPMsNyRT1bedDUob2mnV7veT9St51KNKUZJp1CdZcpWrVrOg6Mq9Ce6MFh4iks
	5/3IujUd1yqz+zSnFtljqMFa6dWoTlGUp4knF+1foadOiqWmXk8Ybpppr3MnNvgS+kHVqu/UK+15
	ju48idYTqqg9tnTqLd1aXgU9STnUlJ5bfidDqkexh/wn7OO1Nqn4/A136kidfEXVrFUq1s8be1W5
	rC45RIdSjZWNNqnSqSctr3R95nVNz9Bc57n2a6v3Gu+oSqafSlHHNT9TnL8lSWteoWNKVKd1Rluh
	COOEks/+MmaZdw+rq2adPNOks8deH1Nd3H0bSq9CU4uTWeH7UR9IXa2d7BNJ9mlz7mX7x7VD1C7h
	cQio06cGpZe1ew86PSdXUKSa9XLy/gzVcWs6TzJrrgsdIiqdpUuGlmE8Z7+i/U6+vH01/SLq1btK
	/ZrpSco/5kz6OP8A4l/4JfNFTcy33NWWftTb/wAy0+jjSu2m1/Zy6+9E6mc4lnpT9JZXJ0Gn1qV3
	a3EJU6cHTpcOMeXwymuLSpQy5NfDJP0NpK5i2szgkv8AMd5edWq2vFRruOeOC/oW0KFjOrRhGvtb
	xuiuenBUX9rOjWcpNNNpce4k287mlH1qs5Uk8ygm8MnV/jGevjTqNxGrKn+yp05QbzGK7+C60S6g
	7WEHCmmo9cc9SJqdvRdlSqxp04ylByfHLeEZ+j8VNOOUsQ7/AHmO/wCXBb6Qb69p1oThGlSi33xX
	PUsKFCna2ca1GEbhygpTU4r1XjoU9xaTpbpyawn7fEl2k69JQdSpOdJ4bgm3leBu54+qtatRuVWW
	HRp05ZTxFHjSaPb38IPo0+72FlqVCjU0uFxTpwhKVTHKxLvNWi01Sj6U0vVk4+3oWX+K/wBNGsXK
	qqnTjJPs21x5f6FWbbiW6vUf/U3/AJmk6cTJjU+AANKAAAAAAAAAAugACAAZAwAAAMmABkwAMmAA
	MmAAAAAAAAAAAAAyYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyuh1v0b/hsfj82cku
	h1v0b/hsfj82BUapXnbanCpSxuVPvWfE1/Xd4k1mnzx9g96vRqV9ShCnCU5umsRisvvIstOu0v3a
	t7fVMWc2+09NNavUr1XOpjc/BGyd9WqUZ0nt2z6+qaKkJU5uE4uMl1TXJ5xg1kAd4BVeqc3CW5Y4
	J31xdSpdnmG1R2/Z7iBGLk8JNskLTrtx3K2rNNZztZmzn+09PNG4nSqOcMbmscruPNO4qU6qqRxl
	LHKPFSnOlNxqRlFruawYxwXIZG2VzOVVVXjcpblx3kr65u9u3MMf4CvwME8YZG+NzUjWjUW3dHpx
	wSaur3VWj2U3Dbt28Q7jRY0aNavGNxV7ODfLyljgm6rptG0p0Z29SdSNSLbbxju8PeZs51LmqlvL
	bZKtdQr2kcUduM55jki45JNnbq4uYUXnEs8rr0NXM9rca6lxOrU7SeM5z0JdLWLqlBU4OG1eMSPe
	W8beoopyfXqR+gyWGRsqVZVpbp+GODX7ug7hg18UXBLtdRr2qapbOXnmOSJ0Zklkpkbqt3UrVVUn
	jdnPTvJFPVrmnRVOLhtTz9kgpNtJJts2SoVI0+0cJKOcZa4M2c/2mRrcm3kwAbU95Jtr6ta4dLbw
	88xyRmueBh+BLl+lSK95VuKnaVNuc54Rvhq91ToxpRcNsenqkDAwS88pkepTcnu48iZQ1a6oU9lN
	wxhLmJB5GOhbzL9MiRWvq1as6s3Hc1jhHmdxOpUU5Y3JY6GkzgZCyN1xd1LiEIzxiHTCwaABJiyM
	5eSdR1a6o0lCDhtSxzEi20Kc60I1Z7It8vwLW80q2p2UK1CtOo3ByaymlwZ6vNuVm5qqr153FR1K
	mN0nl4WD3a3lW0mpUtuU88rJHwZwayZjXpIrX1arVjVm47ovKwjxVualZevj4LBp7zOBkieoZ8id
	S1a6ox2wcMYS+yaLGhG4uY05NpNPp7jZe2sbfbtcnltcmbm5S41XN1UuarqVcbn4LBvt9Vubensp
	uGM55iQWga8Zfpkb7q8q3ck6u3KzjCx1PdrfVrTLpbeVjmOSKW2n6bRrUY1LmpOlCS9WXCTefaZ6
	8ZPZcQrq8rXc1Ks4tpY4WDbDVLinRdKLhtaw/VNuoWlnQi3bXPavHinzn2Gamn2sbLtlXk6nZ7tu
	V18CfxqT2r6lWVWbnLGX4I9V7ipcPM9ucY4WDzRjCVTFSW1Y6lve6Xa07Cdxb151dskspprqW2T0
	KihTdSrGC6yaRe06kNIoZWVVknCWVuWHyc+1tk8dxluTWW2/ex1z5FmvIDQNtQXJdaxXpxpdhS3b
	ZRTe5d+f9il7jbRhKtVUPWbfcuWZ65+VmxqeSRb3dS3XqbfDlZNuo2cLVUdkpNzjmSl3MhF9dRfr
	KaXvJtDVLm3go03BLGOYkEzjIvMv0yN9xeVbie6ptznPCwYq3dWrFqW3HsRoMpdxPGGR7oJSrwTz
	hyWS4v7iktIp28N26El1XvKTGHwPWl4sWaWawzbRrToyUo4ymnysk28sKNrVjB1JLMd3rYJtPR7K
	tZzrQuZylCG7CaxnGfAzeomqq71CvdxxVccZzxHBrt7mpb1FUp43LK5WTVJcljRsbaemSuJ1nGsq
	m1QyunHJr1mHpouNQuLlQVRxxHpiODZR1W5oUlCm4bUscxIsKSdyqab2uWEyTe2UbanGUXJtvGGS
	zn4XGirXnXmnUxlLHCwWeoV4UtPt6dPOZ0sSyvYuhTPhGylB1akKeW9zS4F5i415JlvqdxbU3TpO
	Ci3nmJ7u7CnbWsailPe2k08e0gc46F9dJ6qXO8nc3FKVXHqyXRY7y1u9TqW9lCNBrif96PvK+60+
	FCjSnGU25097yQOWuWzHjz0Y93FxO4qb6mN2McLBm2ualtLdT25ynys9DXBbpqPiTb2yhb21vUUp
	ZqxbafwNXPitV3f17uKjVccJ54jgsbmpSoaVVoR3bqmJcrPh+hSGVl9W8C8/Cxjg2UqsqUsxxnpy
	jW0F1N5ol3epXF3HbVccYS4jgj0qsqU4zjjKaayifd2FO2ptylNSwmlLBLoaVY1rapOF1KU4U922
	LXXHToc51zibFbdajXuoqNRxwnniODZR1e6o09sHDGc8xIdWGybj4eJ5xwayWL6brm7qXUk6u3Ky
	+Fg80LidBtwxlrDysmtDHjwMnw9JlzqdxdU3Cq4YaxxHB6o6tdUIKEHDCSXMfAgpck69sY29vQqJ
	zzUp7ufh+pM5noabm8q3UnKrty8dFgsatSNHRqlKOcuonyvcUqMuTxjLwPCJnsfXJgA23QwDIiMA
	yzKQo8g9YMAYBloYQNYBnBlIDyDLQAwDJso0XVqRjFN5aTx7RRqBYX9jStKSSnLtt2HCWMpESlSn
	VltpQlOXhFZJv9prUDdVoVKP9rTlBvpuWD1Rs69dZpUak/8ADHI2GtBgkVrS4t1+1o1IcZ9aODQk
	XdXWAZaWPaYAAySKNlcV4KdOhUnF98Y5FuCMCRWtK9GOalGpCPjKODRyJdGAZ6dw7gMA9YxjAw+u
	Bo8gy0TLG1o189rUcPWS4aJbiahAk39Cnb3c6dKbnGOMN+4jpcF/rVYB6wYwBgHrHBL0+2o3FVRq
	1HBNpNpoluJqECXqNvRtryVKjUc4JJqTa8CMvB9C761XkHpoxgaBgyl4gAYMhIoAn2NjG5tLmrJz
	TpJYS6Mh1YbKjjyY2bia1g9Y4CWcmtHkGWiRYUade7p0qsnCEm8yXdwLTUYEzULajbVFGjUc1lrL
	aImOCS6awD1jgxgoGCfpdlG8rSpyc1iDl6p50+hRq3kadepsg025ZXgZvRqECbfWM7VpyhNRk3tc
	l1RDNSywYAAUAAGV0Ot+jf8ADY/H5s5JdDrfo3/DY/H5sCPQ/wD6hot8vsn8maNSub+F3XVOdVU1
	J4Sjwl5Eig//AOSUcfhP5Mjapql5TvLijCpFU9zjjauhwsvm52XVPUlOrXcqkm5NrLZa3el0qNjW
	rKtRk4dFF8vlFROUp1MyabZOrWFzStalSTp7I9cPn5G7/TVV3eFyAdGlpottCrdQnVipU02nF9/B
	7utUuIV506NScKcJOO3jomZ0GcZ1o2/O6cm14dP9iJfW86d3UTceZyxz7Tjc8vbH9s0qNTU7qXrc
	7c5ks9OO4snplvU/Y0pUVUfKknnjzPH0cxC9nF/a7J9PejTpdvVjqkIpw3bZP/InVvvE1rp6d/xV
	ajNxeyWE2nh+48RsU7+rQzHEUn347i0qPN66Uvtqe32ZyaOyktZuIcZUVn/Izz31dJ1dQdQtFa1o
	RTi8xzx7ydqeXptnzx2P+iNOucXNL/B/qSL+Mp6XauOMRo859yN/81f7VNnaSu63ZwaTw3ymy/sb
	S2o6hSjHsnLDeVL2P2kH6NzUdQ789nLp8DxYUKlPWqMJuO5qTWPcyd7dPbRrC/4pruUpfMr31LDV
	3i4x4OXzK83+f+sXncTdLs1eXkaTcUmm/W6cItJaZbZnRXZKpH1d2er8yFoCzqEMfdl8jZUf/vqX
	/wDcL5mO7bcjPW6jvTJ+m1LdSWYYbeHju/UsHpVupq3U6DqVOYzT4j/n7CVTmo61exef7PC8kVVK
	0qw1GhRbhvkm14dGTythLXiNqrfUadOpiUe0xnomky5uqVotPj+zhjf4+8r9WcVVtIYe6GVLwzwe
	rum3oUJ8Y7XHzJtuakVV7GnGsuzSS29zI56lHa8Hk9MdG62t5XE9sOqWemS6+rbZSVBui5y6Szwv
	8yN9HJKN5UfPNJrj3o8St6sdTpUZOG+SWMdO849276ZrzLTnG/hSzHbKptTw8YyWE9NtKdWVGXY7
	odXu6/5nuu8V7Kk/tRmk/DuK/U6Mp6rcKO3jHX3Ixz3evrMrXV0upC7hQ3JuospqL46/oTYabQSj
	RlCDqzW1S54ZYymqWr2annf2fGOnRkC8vIUL7tHneqjcWl7TN766skNqDcabKjeyo5jhRTzh4LGe
	lWyrRtv2XaSW5Ty8JefsI6vZ317LnPq55WOhm5X/ALtSS/D/AFNW9LqsvLSVrN5aacmlhPuI2MLO
	S615/sLb3v5Ipe/g7cW3na3PjKzkvov/ANpff+x/0KFNrgv6Ud2kzx3Uf9CdpfqkpUZVm1FNtLPC
	yXa0q3pYo1JUZTmtylnGF4dSLodSNG5quWfsd3vPd9b1PrClDMd0oZX+Znrq7jNtRq2mzhdwpRks
	VJNRaTwuSdDTKNtSTuJUpyzhrOGTJyUbnTqc87+FHHTPBW6/QqRvp1JOO1qK9vQzz3evVJbShSp0
	tYpKltUdjfqvK6M2XVtK4q0004xU+XJPDRD0qD+sIRWOU/kdBc3dG5o+j01Pe4uHK4y1gz+ls6mF
	3XN6lTpUK8qVPa3Fr1ovKfBD7yRe207W5nRnt3Rxna+OhH9x6Z8bjZb7XXhvWY7llew6mUbf6qtU
	oxUcvCz7zk114Lqsv/Y7Jy72/wDU5frzuM9IleNGF1CKjFway0nx3k65tE9PlVpzgoxp5cVyUb78
	dC9to7tHudvGKazn3F69Yl9KHvLug2/o7VWf+cv9CnnHBc2sXP6O1V/+b9C9e5FqnjSdW5VNdZSS
	8y3jp1K3ppV4wnLp3rkhWK2alSz3VY9PeWur3NKF5N1FLG5Yx44Md9XZIlv9KzUtNnZNZkn6ueE/
	HBXdS01PVJ3sfWln1cfZS78lWdPz3P5N8hZaJS339OcvsrKefcVqLywSt9JrV/70anGOfAd31iWo
	t1N3OoKnKWYxqOCz4bjxqtkrW7lGGNnCW1PHQiurm4dRdd+7p7ToaVtLVbCEljducnl46ZRi3wxN
	xW31hG2t23t3ZXjk92dtbzpRjOipTmks56PxNl9UV9qkYrO10+/jpk31o0bGFpsUlKbxLnOcYMXq
	5n9s21W6hp7tpppx2ykopJPwJsNKpUKUpV5UptP2o26vJVLK2qLOJVf1POtRxSk193/UefWSLbVd
	qEKEdnYwiuucPJjS7dXN1saytjfKIT5ZfaPD0aFO5+9Brjnv/wBjp1fHlb6iDrFft7qDT4UEuvtZ
	P0OTenX2efV4/KyhqPMmy/0JbtOvUvu//qx1M5L8UWFv6F5KyjU02VSjKEVvxt6lJVg4S5a+Bc6b
	HfpUox+12j6/AnfyWJ/xV0YuN/CLeXGoln4l/d0KE7am6qg25Y5ZR7XHVEnjPar5k/VYvZS6ZdRI
	nctzFqPqemejLdCcHFR52p+Jp0qluvKUmsqM1ktb+EqGl3FOrhzk01t6dURtJiqdhe1X1jFSWPcy
	c9deHtJbYj6xWlK7rUU24Rnwl06EuOl0rai/SJUpy6rOU8FVKtuuZ1Zf3vBFx9IqcnXjU42qml7e
	rHW5JuF9emzWoKKtIQkkpUscfA009Ot6VnTqVlTk5Nx64feetRioqxz301jHwNepQktPpTeMOphf
	5mZskiS60Xmmu1rb4SjKEUm9qeCTf0JXFrpsYppOOHLDaWccskVIyo6TWhU5l19Xp1RJhdQp6fa0
	Hu3XFNQjhcZx3+ZJ31faTq1Q6haU7WjCKlCVRSxKUX14JVHS4Uae+4lTl37XlNoi6lau2uJynjDe
	Fh+wn/SCnKUqU+MKklz7zdtye2rUbVNOhb0qVWm4NTi5YjnjoQLOh29ZwxnjPQt7+OzTaH/VR/0R
	r0Cmo13Vl0cJLh+1FnWc+zfTVr9ftLqKjxHs1x8WetCf7O87/wBn+pV16sqs90u7joWmgZ2XiXV0
	0vma6njw1Z6V1yt1xL24LWjpVOlSdS4lTltfMXlNorrmLp3jUsZyunwLbX6c5151VjYoJPPXqZvV
	yRm2xDv9M7KEKtKUHGaclGOXtXtNlnpcPR4XFxOm41FxGWU08kuivR7GnKp9mpTTW3wwatSpTqab
	bVY47KUntT695mddfDai31G2hBujGCeO557yXf0J3FCwpxzh0knLHC4XUpNuPA6qFzClZW9Cpucq
	9KKhtXHRdS9bMLVFeWdK0tYpuE6u7lxfOOStLPWLSdObuPV7OTUUs85x/sVh24uxuB6jCUvswk/c
	jyT9PvaduvX3dMcL2lq1BlGUXiSaftRgk3teFxW3Q3Y2pckYsBFza6bCFB17hwai/sSymyn9h0Os
	RlVtHWWNkYxi89epy/S2WRnpDv8ATI04Rq0pQcXFyajl495ts9Oo+gQuK3ZvdJxw20+v+xuowdHS
	q+/H7SmnHHuNdeO/QKK4/tX1+Ji9X4x5NGoaYqVF16MoOEcLEMvk9W2lKMHUr7ZLapJNNEmhGVDQ
	Krnjb2v934E3UasFZ0XLONmf8kZvfXyEqovdOireFejGMYzlhRSba/8AMG2006j6LUr1uzkqcsbX
	lNmupqmbenRpNqMZcJxRvrxUdKufevmhvXqLtR9Q0yMKMa9GUNri5bY5eF4FTjgvrZP6puc/g8Y9
	xQvqduN+VqMF3olvT9FuK04qUoYlF+HDZSdx0GjftNOu8f3Y4ef8LH6f6nXxUXtxO6uJVZybbx19
	xYaJc2tOtFStnKr62JZ7sFRNYeCXpefTY+5/IdSeJ/SXr0lOdOUVhOUml4dCNY3VzBKFCrKDXXC7
	skjW01C3bxzu/wBCvoTqUWqlNpZ45M8T+CT4vdSUlp1dXL7WtxsnjG1ZXBT6dbRubqFOc4RTmlmT
	45Lh1Kl5o91Wu2pyhJRTjxxlFLb0J17hU6O1NywtxPz2SypzfT3qdrC1u6tOE4SUZYTg+OhCJF7b
	zt686dXa5xeHt6EdHafGw6GyqVKOi0ZUXJTcpJuKzxlnPdTo9Prq30ejU5w5SXC9rOX6/wCrPXxi
	EpXOlSldpyl2mN01jjgiW2mxnOtUko9nD1kmnyvYabrU69ei6LknSbTacVnJcU6sfqim1n1aPreX
	cYvlzGfaBcaZGpQVagowTy9qTbSNOmadG5g605QUIyw1LPPBujqypUdlFyXDTzFPgzpqb0i48N6/
	0LL1ntfbxdULSEJxhCCmk0mpd/mb7XSqXodKvVdJqa6PKKaX7w1/1MurjENCt5S6ZX+pep1JC6xc
	aPThQcYzpdo2mms9DXp1vSmqkHsU1JRTb7zdbV43V9TqQT2pOPKwyDbY+sWv/wA6/wD+jH8rMqbc
	aNUoyo39SnKSlJY5XuRJ07TlWoekzcZQUnHY85Ma9Ta1StJ4w9vyR4sb6pb0tspLsst4SWcnXb4T
	Gt9N15Qto05dnCEJRT7+rMaZpiuIdpNwkpR4TT45JErW1v7StcUYSVSnBzm5PHLXd5EOyv69p6sJ
	JJLC9VPvM7c9G+nu9o23o85UqcYSjhdeep70qhSrPatkZtpJt95ulZ2t7Y1bi3hJSi1HMpd/H6kH
	S4KOqUoPqqqQ3ebE/p51ig7fUJ05SU2lHle43abpyrU+3qygqak4tSyu7x+J61+lJahOWVjEfkSk
	u2+j1ZQ6dquvwL5fxkXfUa62mUq1GpK2dOHZRcpYed3H+xr0zTadamqlXZhp8Syu82aJTnGlfPjE
	aeX/AJm6htnaqSTw0+pz766nqJa03GmUqtnUurd04RjwoLLec/7lLOO2Ti+qeGXulL/gM925/wCh
	T3n73W8N7+Z143crXLT7Sy03T1cRdapKEacZYalld3+5WovraLr/AEfuVDr2iXP/AGl7th1UqhQo
	0tOvexcFiPO15yVltp8ry4k8qMducyTxwbtLhjTtQzjMUunxJun1F6HGPOU2/wDM8/VvFrnbiDV0
	6nXt3OhCMHlLHLZq0zT4V3cOpsxSWfWz7f0PdPVY29Nqg5RlnPMUzbpz329/N9XSb+Zv+UjW1itp
	dKrRUqDpp9WllvBG0mlSqzpxaipuTxJvpwSvo/8A21bx7F/MrLB/8dRf/nQ17yzSX1W3V7Z0KyzK
	MlJyxg96bpkrtNtqMduVuT8TZrcJJW8njDTa/wAiy0mpv0+jThnMY856dWZvdn5ypv8AFDlp1G5o
	SdCEack8d7I1hpnbSqzqSgo0ZYkpJrJthqkLaEux3KecpuKaJVCXpWl304ddqcs+LLvUntZUrTLe
	hSuJdl2alsfMXnjg5ZycZ7ovDwXegU2ryceMqm/mijnjf8C/n9unN+r6pUWo2M+0WXb0srd3cez3
	HPvwL2zg6Fjd78PfR4x7mUUupvj01y8gA6NAAAyuh1v0b/hsfj82ckuh1v0b/hsfj82BW3t07HWK
	ddQUnGlja3jrlHmetxnJylY0JN8tvn/Q16xCU9QjGMXUl2a4Sy+8gu1uOvYVV/2MxZKlLmuq9zKr
	GlGmnh7Y9ES7jVpVrWrRdGMd/epPjkr5RlCTjJOMl1TWDyXNAd4MPqaVto1ZUainBtSXTDwWkdbj
	2ajOyozaWN0uW/b0KmEJy5UJSXsQ2y3Yw85xjBm8y/UqTUvZO5lWpx7JtJYg8E2preYvbaUqc+6U
	Xhr/ACKmcJQeJRlF+DWDy/fknjExJ9Lqeldvl537sbmWMdewm/Q6Tm1hzb5fxwUoLeJVyN9zcyuJ
	xlLjCx1yTLTVnb0pU50IVk0kt76EK1tpXNWNOLw5PHTJ5rUnRqzg3zFtdBZPiXG2rdyldTrU49i5
	d0HjBZQ17Y1L0OjvXSWefPBVWtBV6u2VSNNYb3SJV9pcrSDm6qmkk+I47zN8flPSLc13cVZTaxlt
	4znqzSZfHtGOMnSTGvjfY3crOuqsYKWE1hvHU9SvHK99J2pPtN+3PtyRegJkTEuvf1Kt1Kuswcms
	qMn/AOdxOeu5TfolJT7pZ5XueCm5fB7lSqR5lCUV7U0S8wx6rV51q0qkm+ZNpZzgnWeru2oqlOhC
	tFNvE3x5FY17RgXmWGN93cK5qqoqUaaSxiPQ0DuwDWK90qs6Ut0G0/Y8Fs9dysuzpb+6eeV8cFZb
	0VXqOLqRprGcyJl5pMralOoqqqRis5UTn147lZuPVlcOvqMKs3hdqpYzlLknX+sQoXtWCtKM8Neu
	+r4XsOfpznTlmEnFrvRmpOdSbnUk5SfVsf45qeM1vqXtSdeNXdLdHhes+CbHWoqmozsqNSWMbpcv
	39CoMt9MI1eIuJc77N3KvCjGGY42xeEYq30qlzGvsScY7cZ/88TVb0HXntTw8Z6ZM3Vu7aooOWcr
	PTAyfBsvL6V3CnGUFHZ4POSIBjgsmNBP0/UpWalF01VjLCxOXHBAXXxPXZzS3OEknyngWSz2lSbu
	87erKdOnGjufSDx3E2GubI4na0py7pyfKKyhSdaTWcYWeh6u7aVtUjGTzmOemDPjzfSY9VbypUuO
	13STUm4rc/V9xNo6y4UlCrbU6zX96o8sqTPdnJfCLidU1LdeRuIUIU9sdu2Lwu/k8Tv5yqQmo7XG
	W7iT5IYHjDEy9vvTIrNKMZZy5J5bIYGDUiz0LqTJ30p2dG32LFJ5Tz1IZldWSxKx0J+n6jKzUk6a
	qxk03GT447jVeWUrSUVJ5zFS+zgik9dQ+pt/exvJNq3p0U2vse4zp+ozs1h0lUhltxk+CDz0JrsJ
	KxlcdotsZbduBk+J6erzUFczhOFCFFxluzDvN9HWVTpKNW1pVmv71R5b/wAiqfDayYHhDEq9u43U
	ouNCFLCxiHeRUh7CatPbtZV+0SUYbsYHqKhJNvgvdTnC1spWsGn2ijPPTv8A9ijWVymbKterXadW
	cptLHLJ1zuFjXnqWGn6tUsobYw3rDWHJrqyuPfZz27lGTXikWyX6Eas1NSUpbvHJZ0tY20qcKltT
	qOCwnN5ZVe7qYF4nX0sT77UndqMeyjTjGW5KL4MXeoyuYOLgkmsfab7yCB4Qx7pQ7SrGK/vPBeXd
	SNDRKNJNKpGST7n3lDGUoSUotpp5TXcb5zua1Nb3UnF89CdcyliO+uSXZX07PO1blJptOTSeO4i4
	4JtDTZVrepVVRLZHONvsyXrM9jOoajG86W1Ojyn6nuPFjfytKikoqcVn1XLjkhj2jxmYYsbzUlcz
	pyVvTpODbzHqzfT1xRoxpztKVXb/AHpPL+RTgeEMTby/qXk1uTgsYaUm0ywupwtNMpQhJN16PPdj
	hefUo84PdWvVqxhGpUlJQWIpvoiXlM9vDz1LS31iVKm4VaEK/Oc1JZ+BVZ4xk9LoXrmX6tkWNzqL
	va9DMI01BqOE895Z3N/C0sacHQp1kp/3/iUtayqUI055frR3p7WsG6lbVrygnK4bjy9rWTnZz6rG
	RqvNRndVd2NkcJOCk8MxXv51aVvDbs7FYTUnl9P0IaD6nTxjXjE2tqDr2lOjOmm4Ntzby5e8s7Od
	52LUrN11nrN5xx0OfJUNRvIQxC5qRXgmZ641Lzq31u4jOjb04qMZuDi4L+6+ODXCatdEpzWFU7Rp
	ro8clNUuKtWSnUqSlJPKbZmVxWqU1TlUk4J5w3wSfn6w8fTU/A32lzK2qb488ptZxnHcaD3CnOSb
	jFyxy8LODpZMaTr/AFNXkUvRaVN7s7o9We7XWJUKXZ1aEK/LbdSWfgVj69MewdxnxhYmX2oTunHE
	ezjHOIxk8JeBts9Vlb0lCdGNaKWEpybS5K4d5fGZh4+lhd6nC4puEbSjTyusevX3Gq4v51qdGONr
	pR2pqTIncYE4hid9ZSdlG3qU1PbLdvk8tkEAuSKAI90qU6ksQjJv2LJbUeO4Em8tHaVXTc1JpJ5x
	gjpZaSJumsYLGz1WVvDbOlGvHOcTk2jRUspQtqdaUsRqPCzHBFJZOj6sLvUZ3c4JQVKKytsZPDLO
	leQtdDot0qdV9o1tl73yc6srnOGj269WVJU3Uk4J5SzwZ6/OX0zeUy+1OV2nFU1Rg0vVhJ49+Baa
	pOhntKarJpJKpJtIr2DXhMxcWF7qMLqEYxtaVHEt2Yd/s6HieoSnbVKOxYn37nwQvgZXI8YuJlPU
	Z07WpQ7NNTjtznoQ/aS/QJqgqspYTjuWY9SRaaR6VShKNzBSks7cZa/zJ5cz2aq+4n6Ze+jSdN42
	VJJSbfRdCHVpunLa/kSbKxd1Cco1FDZjqs5L1lnsuN+sUaKqyr29RShJpLasLp/seNP1GNkv3enU
	eW8y68ke5VSnN0J1HOMcM9TspwtXXb4UsY2mZJmVPSZeayrqlsdpSjw0nnOM/A1Wmpxt6EacrSlU
	2/3pdXz7iuMrL4NeMzFz0sb3VZXNNwhSjSi1yoS4fJGs7t2teNVRUnGSlhvwPUbKbtaldtxUHjDi
	RWucEk5zEmJF9du7r1KrpqO+WcJ5wRiZSsJ1aMailxJdNrIjWH0yWWfIusZJkb6Ss4W+xYi2859/
	6kP4EtWMvQoXO7icmsbff3/AXP7Kit+HJMstQla53RVWLx6spPHHcQkC2SmLK71SFxBKNlRpc5zH
	/wCjRb30qFrOgoJqbznP/ngRephf5knMMenNuo5Y5zkl1b+VWxp2zikoNPOX7f1PNOxnO3qVnLao
	R3YceosbL0yt2faxh6reWsi2Hpi0vZWzTUVLnPLwao12q/arh792M+3JitRnRltnGUX15WDX/kXJ
	T6tqmsKrRUJ2lKUs5c28t/5Gmz1CFtR2StqVXlvMyvbBPCJi0uNXdWk6dOhCipJxex4yarPUY20c
	StaVXjGZ+8gAeMXFpcau6tvOjToQpKWM7HjvK+jWlSrxqpvcpZ6mvlATmT0YtnrW6ioTtKU2nnfJ
	5bI1jqErWX2FUhltwlJ4fwIQXT2jxhi0udYdWm4U6EKOU1LY8Z95oo6jKlQjSUE8Z53EIDwhkTLb
	UJ29Hs1BSWc/aZFq1HVqynjG5tnn5AuYQJdjfTtJJ7d8M5cHJ4fHgRBnuFmqt62tb7epSha0qfar
	DcXj/QiWt9O2qOeN6axtcngidPaYJ4RnFpdatTrUHTjY0INtetFc/Ij21/KhTrQUE1Vjt69Ov6kP
	qBOZ8WRMsr+VnOcowUt0XHDeCLGbjJSTw14M8j2lw8Vr9c5tOwna05tQ2KcnlrjqR7XUJ29Scoxy
	pLG3c0kQsd49xPGGLavq9OrRlBWNCLePWS5+RFs7+dtOTUd0JSy4OTw/YRO/nkw/IeEzDF19fY/s
	7OlB+MXh/Ir7GlTubqMK1Ts4NP1sZ7iLnB7pOpvXZ7t3/T1HhJPSYtdWvqc6VKlQ2YinGTg8Z4S5
	Kf2nucZL7SeX4oxCnOo8QjKTXclkcySLHgG6dvWgm50pxS8YtGpmt1WAABlHW/Rv+Gx+PzZyS6HW
	/Rv+Gx+PzYEakoy+kdFTz/ZPp7ma9Q1Wdvd16MHHbGTisx5N1BpfSSi//wAT+TNep6moXNxS7Ci/
	WcdzXJw6/wB3O32o69WVxcOo8Zljp5Eyvot1QtKtepBKNPq1NMg1Jb6u7CTeOETK07v0aopwlsfV
	uX+50tzGlf0ACNtVcaPThOjLfn7fd7kRIwX1jjnb22P/APYnaJmSxHmW94XwIsYt6m+OVX5X/ccd
	u1y1J1OzlcapVpUFmKSfrPHcjFXQa0ab2w9b2zWCwf8AHq6lw+zX+hB02pP62prfKS2S4bfgzHl1
	Z6WWqt20oXLoz+0pbXh95Pjo1ScP2UcySy8zXQ3XNsrjUZ9UlU9Zx7uSZaq2t7qpTV1KTUcYY6/S
	56S9VW6NTlDVLeLxubbXPsZJvtGq1a9epGPLlKX2l4m3G3W7RqKT2vhfEiRnVeu4UpNekdN3HUbb
	d1dVdWE7erKlNLdHh95d6nNz06bnjPq9PeiJrm30uvlJS3rKx7CVfrdplSXg4r/NF6u3ml/pR0qb
	qTUY9W0upaR0Su1tcfXXX11g2aDCDhVc8ZUo4yiVcVLaF9OdS6lCTSTjzhcId93yyFvvHO1qUqM9
	ssZxnh5PBYaxc07y8VSltxsS9VYXeQO8783023WlF16yiu7D6+06XUtMUoOKUstcet7Tl6UmqkcN
	rldPeXurup2UmpSwl1z7Th+u+UZtVMrOXpMaEV60pbUm+8nR0K5cEnBbs/fQ0X1nVk/WmnFxzzl8
	nnUKldahLG5PavVUn4Ftu5qbVZXoyoz2yxnGeuTX7i6+kaSu4cJfsl0XtZSs68XZrc+PUW1LJ0Vx
	UlPRbhyxn2e9HOR6nRTTehXDxxzz8Uc/0/2jHX2KCjTdWrGEftSaS5LWnoNxNLMFn/GjVosY9tNv
	mSccJrvGo1Ky1GviU49OFJ8cIXq3rItvtDq2lSlWVKaW98r1ifS0O4dOM5w4mk1iaLWrGL1az7RK
	Muz4jjrwym1KpXV3NNyhFTltxJ9MmfO9XE3XuhbStNSlTksNQ8c9cHq+tp3mpU6VNJylT6Zx0yR9
	PlKV0225Pa+r9x0GoKlOi4WUlVrvG1JYfXnknXd56kNcxd23o7Sw92Wnz4EZ8+82VlNVJKplNSeU
	3nk1no5+Nxst6faVoxXezpKumKen0MKWez59b2HMQbTTTwy9uXP6rtnGUv7Lnn2I5fruzKzUSnR9
	GuasHlYWOuSz1TSa11XpbI5fZpfawVFg3KrPc23t7+Swvqk46nb+vJLs/F+0x1sqe9VM7OpC57Bp
	b9zjjd3k2jo1SUczjx7JosUoO/sXLCblnp16DVfRvT5xq3MqXEeI+4n+Trr4nldc/dW1S1qbKqSl
	jPDzwaC31y9o3dVOk4NbEsxXtZU+7k9HFtnt0lYSblgtaekymtu172+PWIFtQlXqbIp5XPHvL2VG
	3sryNOd1PK59Y5/r1Z8Z6qnr2VWlXVKSWZS2r1iZT0Ov2UZyh9rwmixulCV3p7TTTnmLx9rlFXrU
	6kdTuIqUoxUuEpPHRGee73El1Ya3bTrXtGhFevKksLOOjf6ET6guHtxBe310WVfL1a1T/C6+ZD9K
	hSV5TnWalOTUU2/b0MTrrMjO2IF1ptW1m+0ikuF9rJNvLW8o6XUUoQVDesvPOco83jzo1KW5ybq9
	X8T1SlKX0drZbk+2XV58De25avv0pqdN1K0acespJLktY6DWcMuHP+NEC0WNQpN/ix+ZYavUnG+b
	jOS9ePCbx0Rvq3cjVvtBq2FW3rwp1kk5rKxLJZVLa8hpsmoQ7Lsstt84wbPpBzJSfDUOMe812UpT
	0q8TbeKXGX7GY8vKSpuqLBa0tFrOP7SPL6YmuhVtYbL93VvqKXb3Ho8ktuKeei5yb7tnxbVRcWjo
	VowafrPHX2l7b6ZH6spvEt25/wB72sptRs6trODbm4TzKEpPqvEsLd1Ho1J5l9t859rMfpt5mUqt
	u7N2tTbhp4T5eSRb6NXrUo1XFbZpSWJogRlKUsyk373kt9TnKOl2G2Tj6j6PGeEbu/NS26gXti7Z
	pNNLOOuTdb6XKqnw+uPtEGG+tUUW5Pld5fVbO30+ajVuqkZP1kpd/d3Ge7ZM32dWxUXFhUt60ITW
	FNtRxLJfWumxemUJYlua59b2si684u2spU3uXZt58j3bOT0mhtlJvwz7Wc+ureJUtuKu5sXQntaf
	Kz1LOlaXlKxqOjCHZunmW58429xQynNt7pSfvZfaLOUtNvVly9XHL/6WdOpZNX3HPtesWlDRK9Sn
	mUV17poh0YpVfW64LP6QTqQ1BKLcF2a4i8eJrq2+oeSvutOq21WEJxS7SWI+smS6Wh1pUYzlH7XT
	E0S6u52mnuqsZj6rfLfQ0ajOcKdLEpL9oujMeVvo2q6+sK1jJQrJJuO7iWe8iHQ6s+0sqsmuUks/
	E57B0/LrymtQ4x7S2ttGuKlFzlBYTxxNFbSS3c+Bd/SF1IXUNjcY9kuIvC6sd9XcidVt1iM6dO1p
	tL+y2/JGuztbuNpF28INc/afcNUz6PbN5b7Hv9yMaE5y3JNv9m+M+04f+LN+KHHJY2mkVril2iin
	HCl9tdCBgurmUoaVbNNxzS7njPCO/Vv9N6gX1hK0hGTWE3jrk2WulVa1N1HH1E8PEkQe0lLO6bfH
	e8nUap6Oo04TrOknTTe1YOf6ddc5Gbcc9fWFS0cXNJKeXH1s8G6y0q4uqSqxinTeUnuSeUWNa7tq
	jtqEKkakcbHJp5XQ8am50tPiqOVR7RYmnjL54E76sw2oF7p07VNuLSSX97Ja6XpkfR67almVJY9b
	2M56U5yXrSk/e2y30aU3b3uJSeKPj04ZrqXx+rdRL6wdvFTaay8dc9xstdHr16XabU4ZabU0QnKU
	qiU5SfK6vJda9KcLmSpZjT2L7LwS2zJqW1V32n1bNxc0kpZx62ehttNIr3NGNWMU4SWV66XeT8yn
	pTdWPSj6rfOeDXOUo6JZ4k48vlPHiPO4bcQ7zTXbQcmmkl97Pearuxq21KjOaSjUhuXrZ44/Ujyq
	TlndOT97ZeUV9Y2GyHrTpU1FJeOPb7jVt5m1bcVkNPqys43OF2cpOKe7v9xCwXd7m20inbT9WrGp
	lx70nkpDXF321zdEXei0YU4yr1MqMoNLD78/7FIi9oJy0eiocyTlnHhlk/W+vTPXpU3V1UuqvaVN
	u7CXCwLOCqXVKD/vTSNBZaNS3VZVn0pSjL5musnLV+N+sVNlrRtfwZP5ePxIl5p1W1SlOKS2p/ay
	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
	ZfWenVVuqWW6T75KLZz2Bxkl4h4t1xOE6maUNix0NI7vaDpI0yvVw/aXlpqts7epTuqEqzlLKcsP
	C+JRe4Lj3meuJ0liyd7TpXkalGEqdNTzKMcLKz0LBavp8/XqWblPo5NRyc73mevvM/44njG+8upX
	VVSlKbwses8kcN5fI6HSep6ajKeC507VaNK29HuKc6qlJtp4aa+PuKXuyZjFzkorvM9c79SzVlWv
	aMbuM7am6UFPLUcLKz7CdDVNPl69azc5vrJqLbKGpSlTS3Y58GeGZ8JU8ZU+tqE6l3Csp1FsTSzL
	ldSwjqlhUpx7a0dSaXMpKLy+8oqcHUmoQxl+InBwltljPTgeEPFZVb62jeSqUaDpwcUlFJIT1NK9
	hWpqpCEY4cU+/krOnvMF/wAcp4rDUrq3uIU+xo7JZbk8LkrjPeH/AJmpM9NCLrTtTt6dGVK6oyrL
	aoxzhpeZSpIyu8nXM6+pVjVvLeN1UnSouEH0SSWDF5fQr3VOrGMkowxzj2lcwTwhi1uNShUqWk6c
	ZwdBetysvp0JcNUsa0F29q6lXvnNRbaOfQ7+R4RPFKvqtGtXToU+zjtxjCXPwIvuHAybkaxtoVZU
	Z7lJr3MvXqljWl2tS1cpdMyUWznUbFRlKm6ixtXtOfXMv1mzVlfanTq1reVKE4KjLKWVx06eRJjq
	dhVpxda0dSr/AHpyUW2UL6+4xx8B/jmejxi7r6vSqajRrxp1FCENrWV7f1Ky4rqpXlNZScm/8z1b
	UIVKUpST4eOpGkkpyS6J4Q55kMTqt7Cel07ZRlvjPc5cY7/1N2lajRt4dlcUpVabk248NPj2lVjA
	z3mrzLMXFreXtpO6o1be37JQqbpJJLK48DTf3kLq47SEZRW5PnHgQHgCcxcWuqajTvPsQnH1cetj
	xMaTqFK1VWFeEqkamFjjGOfEq+/gcE8JJjPisdQubWs59hbqnmSa4S4+BOhqGnJLFkk/8MSg9g6C
	8bMLyn6nfK8nDYpxjTTSUn0XsN+l6jSt4KnXhKpBJ4jxjOfaVIF4mYvisdRuLapV3W9BUo7UsJJc
	/Axe30K9la0YwknSi028YfQr+Me0ZwXxhkeoTcJKSbWH3F/9b2dfLuLaVWXROaTwjnjA64nRZq21
	bUKN1GhCjTlTjSTTTxju8PcNN1OlbyjGtCdSmotbeMZ+JVdQuOhP8czEyLLUri1qr/h7dU+F0SXf
	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
	tzFLHeRq6xq1LK/5f6nWfr6b8lVK1rQcU6U05vEU11Zv+q7zb+61s962lpeJdvZPH/NX+hjUdRuK
	GqVYQqz7PhKKxxwic93qE6Uio1N6g4S3Poscl1X0uT06hKNOo5unlpLvwadagrfUk6KUMQTWPiSr
	m9uaem2zjVkm6Xd7kOur6w32op2tWM3CVOakuqa6GJ29WE1CdOcZNZSa6k2zrTr16kq0nNuOcsk3
	6/8AcqGV/wAv9TV6s+mqitQqUVHtISjuWVuXU2UrK5rU1Up0Kk4PpJR4J+uJKNp/gf8AoeLLUp21
	vGkozcU2+OhfO3nYu+lXgco32dD0m5jTc4wyn60unQtKmmUaqjGlWoQkuG85z/mavWLqooUnVntS
	b9x0+6hptN2e+G1+tmp9rn/6Ka4t/q/a41oTnuSezrjqWcq1pqssypRp1J+qpzl0wcf09+/6Y6Um
	odm68pU5KSlJvgi9CdqdjKyqRbnGcZt7dq4wiD7TtxmNz4nWX7vL/EQ6n9pP3smWX7vL/F+hDqf2
	kvexPo8AA0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AADK6HW/Rv8Ahsfj82ckuh1v0b/hsfj82BXXkKMtWpwuIuUXT5UfibqMrOy7WcKdRJrjv6fEga43
	HUItNp9munvZXOpN5TnLzOffF6v1nFvbarCnqVau9+ypDauFnu/QlUFY0LiFeNKolT688/M5zLPX
	a1Om+XmyX8t+Hit43tH0u5ltntlPMeO7LNNO5px1OpValsaeFjnuKzc89X5jLznLyWfnIeK6Wowp
	ajSqtS7KMXuWFnvJMfq9zdd0quW9/X4+Jzu5t8vJntZ4xvl5kv5f8S8pmqXFO4v51aSkotLG7r0L
	urdQejVLlqTrRqKKljjHHcUNjXhSqt1Iwktv97k2ahqLuuI0404YXqwfGfcTrjbJ/wAMSdLus3Nd
	c7q7SXHe2S7mvQp1XbXkZTVJppQ8f/Gc/SqOnUjOLeU0+uC0jq8ZUlGpQpOXfKXLZnr8868ol59t
	89SoVtWtq0Y1NkE1JNLPf7T1cU7G4m59lUzJtvLff8Sjq1MyTjxhdxh1Z8evLzZq/nbZYvj7brqF
	OnWnGnFqKfGWWtpc2lzaSoXMKkpSlxjhYWPaUTk3y22/aFOUekmvczd41bFlQq0bavJRjJRc+nXh
	MzXuab1OpVipbXFJLHPcVe55zl594y285eROMumLurqNKnrELmKmoqnt6c95J7Swq1YXbpVd+7tJ
	PPf16ZObcm3lts9KpNLClLHvM9fnvw8VvVrWtzqterUhUdNpOK6NNJe09rWd17SlJydHD3rasvqU
	m+Xi8+8xl+Jf8c/s8V7G5tqTr1oQqKU3uT/8ZBr6jWlXcoSxx3xRB3yxjc/MxkT85/Z4uinf271G
	lc7amYQ29Pf7faVkq0PTo1cPaqu5+OM5IO+Xi/MxufiJxieK6utTS1KpXoboqaS9aKzjC/QlJ6fO
	4jcQpVdkeOXz8zm9zfVs9KpNLCnLHvJfz/4eK4r39GN7TdOM1TjUzJNc4ySJ/V9xVlczpVWqntw/
	Dx9hzzk3y2zPaTxhTljwyT/F/wAJyuJ6nCtqlvWkpuFOLj9lZ7yVKpp6qK67Krui9+c9/mc3lrnL
	yeu0njG6WPeW/mXlZX2pdrdynQyoNLClFZ6Fm69hXuI3LpVXtW3/AM59pzGT0qk0sKcse8dflsyL
	4re5vac7ii4qe2nUzyu7JG1G4hV1KpWgpKL29Vz0RX5fi/MNt9W2an5+JOVprVzTub3fSUlHYl6y
	57yVZ3VpcWqo3EKknCCjHHH+pQuTfVtmVOUeja9zJeNmHinXMoWtxP0ZOK6c88YLaVexu6tOtKnV
	bhHb4f6+05pycnltv3s9KpNLiUl7mTri2fS8rHWLmlXnSjSUkqacfW+Bu0+rp8bOMbilVlVy8uL4
	6+8pnJvltsKTXRtfE1OP44Y9J7XwZjUlCW6OE+vQ8A3i43RqKrWc63OeuOC/pabaTj6RTpyVKLw0
	5PJzSeCTC8qQouCnLDf3mcu+LfiWJWs3cK/ZUIKSVvuik17v0KxcGZScpOT6vkwb55yYsidZfu8/
	8RDqf2k/ezdQuOypuOFy88mict02/F5LPo8gAqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrodb9G/4bH4/NnJLodb9G/wCGx+PzYFJrv7/H+mvmysLP
	Xf36P9NfNlYAAAAAAZXUGABkAe8B8QDAAAyBgGTAAAADJgADJgAAAAAAAAAAAAMmDIGAZAAwAAAA
	AGQBgGTAAAADJgyABgz0GgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAADK6HW/Rv+Gx+PzZyS6HW/Rv8Ahsfj82BSa7+/x/pr5srO8s9d/f4/0182
	VneAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGV0Ot+jf8ADY/H
	5s5JdDrfo3/DY/H5sCk139/j/TXzZWd5Z67+/wAf6a+bKzvAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK6HW/Rv8Ahsfj82ckuh1v0b/hsfj82BSa7+/x/pr5srO8
	s9d/f4/0182VneAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGV0
	Ot+jf8Nj8fmzkl0Ot+jf8Nj8fmwKTXf3+P8ATXzZWd5Z67+/x/pr5srO8AAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrodb9G/4bH4/NnJLodb9G/4bH4/NgUmu/v8
	f6a+bKzvLPXf3+P9NfNlZ3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAABldDrfo3/DY/H5s5JdDrfo3/DY/H5sCk139/j/TXzZWd5Z67+/x/pr5srO8AAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrodb9G/4bH4/NnJLodb9G/4bH4/N
	gUmu/v8AH+mvmys7yz139/j/AE182VneAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAGV0Ot+jf8Nj8fmzkl0Ot+jf8ADY/H5sCk139/j/TXzZWd5Z67+/x/pr5srO8A
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrodb9G/4bH4/NnJLo
	db9G/wCGx+PzYFJrv7/H+mvmys7yz139/j/TXzZWd4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAZXQ636N/wANj8fmzkl0Ot+jf8Nj8fmwKTXf3+P9NfNlZ3lnrv7/
	AB/pr5srO8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrodb9G
	/wCGx+PzZyS6HW/Rv+Gx+PzYFJrv7/H+mvmys7yz139/j/TXzZWd4AAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZXQ636N/w2Px+bOSXQ636N/w2Px+bApNd/f4/wBN
	fNlZ3lnrv7/H+mvmys7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAyuh1v0b/hsfj82ckuh1v0b/hsfj82BSa7+/x/pr5srO8s9d/f4/0182VneAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGV0Ot+jf8Nj8fmzkl0Ot+jf8Nj8fmwKT
	Xf3+P9NfNlZ3lnrv7/H+mvmys7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAyuh1v0b/hsfj82ckuh1v0b/hsfj82BSa7+/wAf6a+bKzvLPXf3+P8ATXzZWd4AAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZXQ636N/w2Px+bOSXQ636N
	/wANj8fmwKTXf3+P9NfNlZ3lnrv7/H+mvmys7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAyuh1v0b/hsfj82ckuh1v0b/AIbH4/NgUmu/v8f6a+bKzvLPXf3+P9Nf
	NlZ3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABldDrfo3/AA2P
	x+bOSXQ636N/w2Px+bApNd/f4/0182VneWeu/v8AH+mvmys7wAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyuh1v0b/AIbH4/NnJLodb9G/4bH4/NgUmu/v8f6a+bKz
	vLPXf3+P9NfNlZ3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABl
	dDrfo3/DY/H5s5JdDrfo3/DY/H5sCk139/j/AE182VneWeu/v8f6a+bKzvAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK6HW/Rv+Gx+PzZyS6HW/Rv+Gx+PzYFJrv7
	/H+mvmys7yz139/j/TXzZWd4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAZXQ636N/w2Px+bOSXQ636N/w2Px+bApNd/f4/0182VneWeu/v8f6a+bKzvAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK6HW/Rv+Gx+PzZyS6HW/Rv+Gx+P
	zYFJrv7/AB/pr5srO8s9d/f4/wBNfNlZ3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAABldDrfo3/DY/H5s5JdDrfo3/AA2Px+bApNd/f4/0182VneWeu/v8f6a+bKzv
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK6HW/Rv+Gx+PzZyS
	6HW/Rv8Ahsfj82BSa7+/x/pr5srO8s9d/f4/0182VneAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAGV0Ot+jf8ADY/H5s5JdDrfo3/DY/H5sCk139/j/TXzZWd5Z67+
	/wAf6a+bKzvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK6HW/
	Rv8Ahsfj82ckuh1v0b/hsfj82BSa7+/x/pr5srO8s9d/f4/0182VneAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGV0Ot+jf8Nj8fmzkl0Ot+jf8Nj8fmwKTXf3+P8A
	TXzZWd5Z67+/x/pr5srO8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAMrodb9G/4bH4/NnJLodb9G/4bH4/NgUmu/v8f6a+bKzvLPXf3+P9NfNlZ3gAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABldDrfo3/DY/H5s5JdDrfo3/DY/H5sC
	k139/j/TXzZWd5Z67+/x/pr5srO8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAMrodb9G/4bH4/NnJLodb9G/4bH4/NgUmu/v8AH+mvmys7yz139/j/AE182VneAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGV0Ot+jf8Nj8fmzkl0Ot+
	jf8ADY/H5sCk139/j/TXzZWd5Z67+/x/pr5srO8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAMrodb9G/4bH4/NnJLodb9G/wCGx+PzYFJrv7/H+mvmys7yz139/j/T
	XzZWd4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZXQ636N/wAN
	j8fmzkl0Ot+jf8Nj8fmwKTXf36P9NfNlYWeu/v8AH+mvmys7wAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyuh1v0b/AIbH4/NnJLozrfo3/DY/H5sCk139/j/TXzZW
	nc6gl6XHhfYX+pHwvBeQHGmeDscLHReRjC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg
	7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLw
	XkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7D
	C8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXk
	Bx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8
	F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx
	/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5
	DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A
	4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC
	8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4O
	wwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F
	5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4Oww
	vBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5A
	cfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvB
	eQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5Acf
	wODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQ
	wvBeQHH8Dg7DC8F5DC8F5AcfwODsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8Dg7DC8F5DC8F5AcfwO
	DsMLwXkMLwXkBx/A4OwwvBeQwvBeQHH8GDscLwXkMLwXkBx66M636N/w2Px+bPeFh8LyLrSEvRFx
	/wCZYH//" alt="apt-get update error" class="svelte-wamett"/>`,Il=s(),Ql=a("p"),El=s(),ya=a("p"),ya.textContent="apt-get update error",_l=s(),ka=a("p"),ka.textContent="This error is due to not having root privileges to the user 'sandy'. The root privileges can be required by passing sudo at the very beginning, like below-",$l=s(),qa=a("p"),qa.textContent="sudo apt-get update",er=s(),Sa=a("p"),Sa.textContent="The above command will execute command and the operating system will update",tr=s(),ar=a("p"),sr=s(),xa=a("figure"),xa.innerHTML=`<img style="width: 638.775px;max-width: 100%;" src="data:image/jpeg;base64,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" alt="Linux command" class="svelte-wamett"/>`,nr=s(),or=a("p"),ir=s(),Va=a("p"),Va.textContent="sudo apt-get update",lr=s(),ja=a("p"),ja.textContent="ssh",rr=s(),Oa=a("p"),Oa.innerHTML="<a>https://www.ssh.com/ssh/command/</a>",Ar=s(),Ka=a("p"),Ka.textContent="Practically every Unix and Linux system includes the ssh command. This command is used to start the SSH client program that enables secure connection to the SSH server on a remote machine. The ssh command is used from logging into the remote machine, transferring files between the two machines, and for executing commands on the remote machine.",cr=s(),Wa=a("h2"),Wa.textContent="SSH COMMAND IN LINUX",pr=s(),Ua=a("p"),Ua.textContent="The ssh command provides a secure encrypted connection between two hosts over an insecure network. This connection can also be used for terminal access, file transfers, and for tunneling other applications. Graphical X11 applications can also be run securely over SSH from a remote location.",mr=s(),Fa=a("h2"),Fa.textContent="OTHER SSH COMMANDS",ur=s(),Ta=a("p"),Ta.textContent="There are other SSH commands besides the client ssh. Each has its own page.",dr=s(),Ra=a("ul"),Ra.innerHTML=`<li><a>ssh-keygen</a> - creates a key pair for public key authentication</li> 
		  <li><a>ssh-copy-id</a> - configures a public key as authorized on a server</li> 
		  <li><a>ssh-agent</a> - agent to hold private key for single sign-on</li> 
		  <li><a>ssh-add</a> - tool to add a key to the agent</li> 
		  <li><a>scp</a> - file transfer client with RCP-like command interface</li> 
		  <li><a>sftp</a> - file transfer client with FTP-like command interface</li> 
		  <li><a>sshd</a> - OpenSSH server</li>`,wr=s(),Pa=a("h2"),Pa.textContent="USING THE LINUX CLIENT",hr=s(),Na=a("p"),Na.innerHTML="Linux typically uses the <a>OpenSSH</a> client. The ssh command to log into a remote machine is very simple. To log in to a remote computer called sample.ssh.com, type the following command at a shell prompt:",vr=s(),Xa=a("p"),Xa.textContent="ssh sample.ssh.com",gr=s(),Ga=a("p"),Ga.textContent="If this is the first time you use ssh to connect to this remote machine, you will see a message like:",fr=s(),za=a("p"),za.textContent="The authenticity of host 'sample.ssh.com' cannot be established.",br=s(),Za=a("p"),Za.textContent="DSA key fingerprint is 04:48:30:31:b0:f3:5a:9b:01:9d:b3:a7:38:e2:b1:0c.",yr=s(),La=a("p"),La.textContent="Are you sure you want to continue connecting (yes/no)?",kr=s(),Ja=a("p"),Ja.textContent="Type yes to continue. This will add the server to your list of known hosts (~/.ssh/known_hosts) as seen in the following message:",qr=s(),Ha=a("p"),Ha.textContent="Warning: Permanently added 'sample.ssh.com' (DSA) to the list of known hosts.",Sr=s(),Da=a("p"),Da.innerHTML="Each server has a <a>host key</a>, and the above question related to verifying and saving the host key, so that next time you connect to the server, it can verify that it actually is the same server.",xr=s(),Ma=a("p"),Ma.textContent="Once the server connection has been established, the user is authenticated. Typically, it asks for a password. For some servers, you may be required to type in a one-time password generated by a special hardware token.",Vr=s(),Ca=a("p"),Ca.textContent="Once authentication has been accepted, you will be at the shell prompt for the remote machine.",jr=s(),Ya=a("h2"),Ya.textContent="SSH CLIENT CONFIGURATION FILE",Or=s(),Ba=a("p"),Ba.innerHTML="The ssh command reads its configuration from the SSH client configuration file ~/.ssh/config. For more information, see the page on <a>SSH client configuration file</a>.",Kr=s(),Ia=a("h2"),Ia.textContent="CONFIGURING PUBLIC KEY AUTHENTICATION",Wr=s(),Qa=a("p"),Qa.innerHTML="To configure passwordless <a>public key authentication</a>, you may want to create an <a>SSH </a><a>key</a> and set up an <a>authorized_keys</a> file. See the pages on <a>ssh-keygen</a> and <a>ssh-copy-</a><a>id</a> for more information.",Ur=s(),Ea=a("h2"),Ea.textContent="CONFIGURING PORT FORWARDING",Fr=s(),_a=a("p"),_a.innerHTML="Command-line options can be used to set up port forwarding. Local fowarding means that a local port (at the client computer) is tunneled to an IP address and port from the server. Remote forwarding means that a remote port (at the server computer) is forwarded to a given IP address and port from the client machine. See the page on <a>configuring port forwarding</a> on how to configure them.",Tr=s(),$a=a("p"),$a.textContent="OpenSSH also supports forwarding Unix domain sockets and IP packets from a tunnel device to establish a VPN (Virtual Private Network).",Rr=s(),es=a("h2"),es.textContent="SSH COMMAND LINE OPTIONS",Pr=s(),ts=a("p"),ts.textContent="Some of the most important command-line options for the OpenSSH client are:",Nr=s(),as=a("ul"),as.innerHTML=`<li>1 Use protocol version 1 only.</li> 
		  <li>2 Use protocol version 2 only.</li> 
		  <li>4 Use IPv4 addresses only.</li> 
		  <li>6 Use IPv6 addresses only.</li> 
		  <li>A Enable forwarding of the authentication agent connection.</li> 
		  <li>a Disable forwarding of the authentication agent connection.</li> 
		  <li>C Use data compression</li> 
		  <li>c cipher_spec Selects the cipher specification for encrypting the session.</li> 
		  <li>D [bind_address:]port Dynamic application-level port forwarding. This allocates a socket to listen to port on the local side. When a connection is made to this port, the connection is forwarded over the secure channel, and the application protocol is then used to determine where to connect to from the remote machine.</li> 
		  <li>E log_file Append debug logs to log_file instead of standard error.</li> 
		  <li>F configfile Specifies a per-user configuration file. The default for the per-user configuration file is ~/.ssh/config.</li> 
		  <li>g Allows remote hosts to connect to local forwarded ports.</li> 
		  <li>i identity_file A file from which the <a>identity key</a> (private key) for <a>public key </a><a>authentication</a> is read.</li> 
		  <li>J [user@]host[:port] Connect to the target host by first making a ssh connection to the pjump host[(/iam/jump-host) and then establishing a <a>TCP forwarding</a> to the ultimate destination from there.</li> 
		  <li>l login_name Specifies the user to log in as on the remote machine.</li> 
		  <li>p port Port to connect to on the remote host.</li> 
		  <li>q Quiet mode.</li> 
		  <li>V Display the version number.</li> 
		  <li>v Verbose mode.</li> 
		  <li>X Enables X11 forwarding.</li>`,Xr=s(),ss=a("h2"),ss.textContent="A LITTLE HISTORY",Gr=s(),ns=a("p"),ns.innerHTML="SSH replaced several older commands and protocols in Unix and Linux the 1990s. They include <a>telnet</a>, <a>rlogin</a>, and <a>rsh</a>.",zr=s(),os=a("p"),os.innerHTML="SSH runs at TCP/IP port 22. This is right between <a>ftp</a> and telnet, which are 20 years older. Read the story of <a>how SSH got port 22</a>.",Zr=s(),is=a("p"),is.textContent="The following video summarizes how and why SSH was originally developed.",Lr=s(),ls=a("p"),ls.innerHTML="<a>https://www.youtube.com/watch?v=OHBdKM7s5V4</a>",Jr=s(),rs=a("p"),rs.textContent="iptables",Hr=s(),As=a("p"),As.innerHTML="<a>https://www.howtogeek.com/177621/the-beginners-guide-to-iptables-the-linux-firewall/</a>",Dr=s(),cs=a("p"),cs.textContent="iptables is a command-line firewall utility that uses policy chains to allow or block traffic. When a connection tries to establish itself on your system, iptables looks for a rule in its list to match it to. If it doesn’t find one, it resorts to the default action.",Mr=s(),ps=a("p"),ps.textContent="iptables almost always comes pre-installed on any Linux distribution. To update/install it, just retrieve the iptables package:",Cr=s(),ms=a("p"),ms.textContent="sudo apt-get install iptables",Yr=s(),us=a("p"),us.innerHTML="There are GUI alternatives to iptables like <a>Firestarter</a>, but iptables isn’t really that hard once you have a few commands down. You want to be extremely careful when configuring iptables rules, particularly if you’re SSH’d into a server, because one wrong command can permanently lock you out until it’s manually fixed at the physical machine.",Br=s(),ds=a("h2"),ds.textContent="Types of Chains",Ir=s(),ws=a("p"),ws.textContent="iptables uses three different chains: input, forward, and output.",Qr=s(),hs=a("p"),hs.textContent="Input – This chain is used to control the behavior for incoming connections. For example, if a user attempts to SSH into your PC/server, iptables will attempt to match the IP address and port to a rule in the input chain.",Er=s(),vs=a("p"),vs.textContent="Forward – This chain is used for incoming connections that aren’t actually being delivered locally. Think of a router – data is always being sent to it but rarely actually destined for the router itself; the data is just forwarded to its target. Unless you’re doing some kind of routing, NATing, or something else on your system that requires forwarding, you won’t even use this chain.",_r=s(),gs=a("p"),gs.textContent="There’s one sure-fire way to check whether or not your system uses/needs the forward chain.",$r=s(),fs=a("p"),fs.textContent="iptables -L -v",eA=s(),tA=a("p"),aA=s(),bs=a("figure"),bs.innerHTML=`<img style="width: 702.0px;max-width: 100%;" src="data:image/jpeg;base64,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
	ke89RWzvbr9aX3NV4ymkS8vfJFkbXvK//PXX60vuPed/+euv1pfc1QFxs+87/wDPXX60vuT7zv8A
	89dfrS+5qgYdNr3nf/nrr9aX3HvO/wDz11+tL7mqBOzpte8tQxl311+tL7hanqHe9usf/dL7m7om
	ie9ZY8flNC8t/ZLipR5ufleBeqj0tSvt8X10/wDnS+495X/566/Wl9zV6dsZAxcbXvK//PXX60vu
	PeV/+euv1pfc1QDG17zv/wA9dfrS+4953/566/Wl9zVARte87/8APXX60vuHqOoJf326/Wl9zVQj
	vvJgba1LUFv7bdfrS+55Wp3/ADYd9dY/+6X3NZp5xkdI5x0IRtvUr9Py310/+dL7j3lfrrfXX60v
	uaj6JruEnL4tg02veV/+euv1pfce8r/89dfrS+5qtYfXIKja95X/AOeuv1pfce8r/wDPXX60vuao
	Bja95X/566/Wl9x7yv8A89dfrS+5qgGNr3lf/nrr9aX3HvK//PXX60vuaoBja95X/wCeuv1pfce8
	r/8APXX60vuaoBja95X/AOeuv1pfce8r/wDPXX60vuaoBja95X/566/Wl9x7yv8A89dfrS+5qgGN
	r3lf/nrr9aX3HvK//PXX60vuaoBja95X/wCeuv1pfce8r/8APXX60vuaoBja95X/AOeuv1pfce8r
	/wDPXX60vuaoBja95X/566/Wl9x7yv8A89dfrS+5qgGNr3lf/nrr9aX3HvK//PXX60vuaoBja95X
	/wCeuv1pfce8r/8APXX60vuaoBja95X/AOeuv1pfce8r/wDPXX60vuaoBja95X/566/Wl9x7yv8A
	89dfrS+5qgGNr3lf/nrr9aX3HvK//PXX60vuaoBja95X/wCeuv1pfce8r/8APXX60vuaoBja95X/
	AOeuv1pfce8r/wDPXX60vuaoBja95X/566/Wl9x7yv8A89dfrS+5qgGNr3lf/nrr9aX3HvK//PXX
	60vuaoBja95X/wCeuv1pfce8r/8APXX60vuaoBja95X/AOeuv1pfce8r/wDPXX60vuaoBja95X/5
	66/Wl9x7yv8A89dfrS+5qgGNr3lf/nrr9aX3HvK//PXX60vuaoBja95X/wCeuv1pfce8r/8APXX6
	0vuaoBja95X/AOeuv1pfce8r/wDPXX60vuaoBja95X/566/Wl9x7yv8A89dfrS+5qgGNr3lf/nrr
	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
	VOvUivRMmLyi4WHDMbKqri5aSg89TmcVatC6kqFF5hB7HEqX13U2dzUx/mNdSbk8+b5sVeL3SaU4
	yXZ5L7RVLXNEdBS8+y6nz7o9nsZqdzcW8eWlVmk/RhnlO3b1Ph73dbTqN+Zbrc9cL6qrOcqNZpRq
	7M4dW7r1ceJWnJejZhefiUmn8irYu2o8N07+tKvazb5v8Ry7/h6dja+JUe/yZxIXt1CmlG4qJfUi
	pd3FRctSvOS+bM1ZGSwtvab1UamyZYXwlVlFSoS2a/eKrGpKD54yaa7o2I393GO1xUx/mNJi82NB
	6PY11dzzmO2Xko+oVo3F7UnDHK+hjqXlzVWKlabT9WYu2P8AuRYjCXQEJYHcNJEcxy8sjuem9uhU
	w5vST3+Z53T3Je8UGt9ty+JYtnBXL46Te7z1Mmo8L3NxeTq01FqUm/iKlTuKtu+alOUX8mZnqN5l
	f1mos/4iXupjr3XCt5QoTrTUeWCy8SOBKODNK+upLldxUkn1TkYG8hYJkPHckjuFJLbYlSUY9WQy
	ZS2xgCM7Zy2S4uUU10CeI9CMbYzsVKsnCV+qF9ClUf7J9Swa7Wt9N0+sreXmrrmPn0Jyh8Dafqj3
	Uua1XEalSUkvVmUk7Y5SdWTm+pDeYrHYLbOO4Wy+oaM5BGMElAEEgACAJAAAAjuBIIezJAAAAAAA
	AAAAAAFu9gAD2YewAB7EASCOw6ASCE8kgAQnkkAAAAA7ZAAEASAAAIJAAjJIAAAAAAAD2QABbrKI
	W62AkEZJw8ZAAhMkAAAAAAAAA+vUlpJbSyyM47ZMtK2qVf7OjJv5IXxJWFZfV4D6LJtS068SzKhU
	S9cGOlQlK6p0595JblhaxrLlmXQ85zvgsuu6RTstOjVjjLaK29tjH0+IJyAaX4nmIzjqMBbvcicT
	r3wEsPPMZKFF3NdU4PGTsX3DdW0tVVc0045LfC3txG89D1Gq4mPo3FdiXhYT6jVbVO7cUTO7ckaj
	RBL6j3KbbPOQDTRkZAwRmmHnOcjp0XMbFOwuqkOanRnKPyR693XseltVX/5BrVb5uuxG72W6R7nS
	qRm41IuL9GZY2lyqbqRozcGuqQT6wp5WCOnfclQfJlPEs9DJO2rQhzzpyS/eaMtWsUkkvmN0uhlo
	W1W4/s6cpteiMvu2/b3t6iS/wm2be2qsJEpqUd9j3VoVaTxUpyj9UKVCpcycaVOUkt9kZXWNrzY5
	8olvK6YwJxdOeJRcWvU90retWf7OEpfRCeHjFvlLGzJfkfqZY0K0qnhqnJyW2MGVabe8zzbVH/8A
	kqa1VJZ9PkS1jozYlp93ypeyVc+vKYq9vWoVEqsJR27okqxjW+3QLYhZb+QfUtUe7J3HRBNt4QiD
	823R+hMcrd9uxYdC0JXEfabnEaa2xI5msUqNK4caLTin2BrQ6ttbANYS+YEVBJBIMAQC3wiUl3ZE
	N3uzLbUFXrRg5qOX1ZZI8HuvvSvaXTOBPEqrxTc99yG93sb+q6bU0yv4cqik8djRxjvnJIGNstjG
	fhZt6dYzv7mNJPGXg2tZ0WppUt5JpvGw+kclAnOQVQAESAAAgkANAZAW4iHUlYD2PVOnUqSxCDm/
	RFZeVv1ZEn0UWZ6trXpYnUoTjHvlGBtOScVgzGt6T02aC+hPLKVTCWcmw7C8/Bb1GvVIVNaq3fob
	FG7uLaLVCtKOeuCK1tXoRzVpyj9UYVtul/Akul6epTlVk51Jc0n6njc2IWNzVXPToTefREOyuaeZ
	VKM4/VGsxJdYW/8ACOr6HqEJ1HyxTb9DOtOvUv7vUef8Ia1q/Fn5Epd2bD069ju7eov4GF05xqKD
	T5ntgRHlbvYL4syNn3be4Thb1Gn6IipYXdNZqUJ/xQqfpr/FL4sEPyvHUnlb8sYvm9DZjp144c3s
	9Rp/IvGlaz2w1uE928YybL02+xlW9Rf/AJPFe0uKNKLq0pRz6oz9WMHboTl5/wDAaxHqRzY6dS1U
	xw089QlnKbwRLthbnpR50klmXoEtRy46SykQsuXqbUNPu5R8ttUS9cGGdGtbzfPCUfqjKyvDSxu8
	EfEsJkqLmumX6GzHT7qcOeFvU2+RqJrWzjCaIbecJGata3FPldWlOK+aMTTTz1RJ6aYxunl+hHbL
	WDNStq1Zc1KjKX0R6nZ3aWJ29SK+aHJdYO67EvciTx5XF5PVOnVqvlpwlL5JFnhrznfCRMlts9zY
	lp15CPM6FRL6GvKLp/FF59Bqa84z3PXNmSWDLStatam6lOnJpeiMPmg2mmpeg1RfE+wMys7jk8V0
	p8r3zgxMaIAICpAAZCCSAqSASWgCASCX0wHHYL0G7eAHM2to5wOvbBY+G9MpXlObqJPDONqdKNC/
	rUo9IywhWPrVIJIEb5UJIJCRD6E4xFMg2rWxrXalyJ4is9CpWqst5wM79DJNOhmMlueFuskagCCQ
	AAAAAKEAkIjGSXJdEsP1G6WRs1stwpsl+8w05ddsHqnSlVeKUW5fI9VKFah/bQks+qIzO2NP+Iy3
	+EjZPY9eaTxFNsvIQ32xgZw+mTLK1r04c9WlJL5oxN5aUVgvHxdH6pYI+eMHqEJzlhbtdkbD0+8m
	k1b1MfQykrWUv8JGMd/4Ga4t61CP7SnKP1RifXoVQAAH9A3jytHW0CwV/cThJLyrJi12zjZ3zguy
	Cb8c5dAG9gFlyAAKVDeF0CW2Sc9sGeytKt1WUIJ7kqa109m8BMy1qM7eUoTTzkxLoSCQAaUABChC
	ab36AYT7YEI9N4eV0PK3+R7pw5pxTkkmyw3HDrqWHtNCpF4XRCorfMnsS00eqlJ0Z8kliR53i/MR
	UJEjvldAUQSAAAAAAAbemWbvL6NKK2ZcbmtY6BbwXJms452OPwZCL1OLl1wzX4nqVney5+ibwWsR
	vS4sdWMo1FmL9EcWNaFfVoTgsRc1g5+X1RsWOfbqLf76JC+L9rOlVNS0yEKU4xeU/MysXXCl7Qou
	o5wml2juWDiS6q2+lQlTeN0c/hTVq91fRoVsSg0+pn6s8VKpTlTlJS2aeDf0vR62p83hThDl/eZs
	cT28KN8+3M29jHpFve3XNG0WMfwNQt6b0+D72MXJVqUsdkzhXlrVtK7pVE00W/T9M1u3uYOfI4ZW
	cyzsY+NaEefnUUp7ZwZpw9crRtDurpK4t61OGH+JnY1y31alpzdetTlTjHGxVLe7rwkowk0s9mXX
	U5zqcOOUnl8iLfE/2UJ7brqza0/T6mo1fDp/EvU1PM5b9Cy8G/32rt0RJ41aj+h16+takn6NnP1L
	QrrT/wC0xJesTp8SanXo6tKNOTWMbZOtZ1/evDdSVVJzTxktZULHmwDLcQVOtUh3yYSzx0SE8NP0
	AKlWPRNfuKM40E1yP5Fg4i1ivYU6EqXKlOGXsUfTHm/hFFk40zGja4/9sjn9Vq6u53lz4s+reT6F
	pEKU+HqUJJc04tJs+aR3cS9eNKhw5Zzj+F5Yavqs6xp8rHU1TxvzJ57Fg1eMf6OPKWdtxe0o6vpl
	O5p71efc96umuG5Q/EmjCX1r8FxjGlUqJLMZdxf8U16F9UpZXJF4xg9cFx56FWC+JyMF/wAK3txq
	E6mI8jlnqaZvro3FvbazpPjqHnUXI5/BscXdWDScVBnSrVKGi6O6Dl+0lFxayc7guXNc1fnCX/kN
	Xxw9cSV/JfNnc4LipOSlhx5jh65Fq9m/mzt8FRTlLf8AESNcvHN1K8qWWt1ZUcJKfodnR+Jbm7vF
	Sm44yuxXeIP9710v3zLw8sahBrrzI1GKs/Emu3Gn3jpUeVJJPoVHVNUq6jWU6rT2xsjr8a/70l/l
	RWDP1uTpL9OxD2J7kN5aRoiWtjd0m0d3dxpxW6abNHuWXgunGeozz2g2WJW/xNfKwto2VHbMU3gp
	jeW2+52eJqsql+2+2xxk+bdmJWsb2maXW1ObhSa29TrPgy9Wc1qSfpkz8DpKdw5fwNXXdTubfWas
	YyfLF7bmqxrm6jpFxp7/AGi5l6o0VGUpYim38i/afXhrOjOFZJzSb6fI4fDVhGrrTjUWUm/9RD9M
	FnwveXdLnU4QX+LYxahw7d2EOebjNf4dzqcR6zXo11SoYjGG22xs8NapPUKdShcpNNYRL2uqXvGS
	fRosnClxVq6k4zl5eU5uv2kbbVKsI9Ezc4Q31Jr/AAmuPhXrjH/eMUunKV+Ky8IsHGK5NRj/AJSv
	qTz8jHFVp0fQb+Cp3NvXorm3Sb3PPFFHUKcVK8qRkm9sHL0e8r+8KMFN8il0yWHjPM7Kk36lRSor
	LwZbe3qXFVQpxbb+RjSzsuhdOFLWjQ0+V9UWZReN0WGuXR4RvKsFLxacc9pPBg1Dhy5sKXPUq05L
	5M96rr1xVupJPlUW1HGxz6up3FeHLUllfUixk0vSK+pynGjKKcVnc176yqWNw6NXHMjocOXrtr5J
	PabSOhxjZ/13x4ryySRU3tytM0S41Kk6lJxSXqaFejKhWlTk1mLwy6aVjT+GqtV7S5il3c3Urzn6
	vJPrU8YmSmOxO2DQ8vbcsnCVs3eRuZLyR65K5GOWvmy52cZWHDVSpy+bO2xKw6Wpyo6lpd0qKXND
	Y+eVKfJUcGvMupaeFriVS6nQmpYqyzujla1bez6rVUlhOWxIOrw3o9F0pXd3HMFHmiZrviqNGp4d
	qsQXqjbqTlQ4Vt/D7prJRJ+ao3nfIvuLJ1ru6vrVLUKXK4+fHXBHDWkrULlTqpOlF7nClJOSTLpw
	2o0dEuZ0885cw9etQ1+30qo7azjhweHsc664ip3VGSrRzJrbCOFqEpTuqkp9cmu/NFEl1cx09E31
	JZXctnEOtVtMq06dLlWYJ9Cp8PvOoxUuhc9etNLrVKcr6covkXQvLqOcvatT4svKsWm4/wDSc2yn
	7TrFOdTdynudbULTQqdrN29So542ycfS8PUqKXRS2JPHT4u+tapU0qzpeDyrLx0NPSdbhqld0Llc
	0muyNniDSLjUbOkqOOvdmpomgy0qs6920sR7MkuuTia/aLS9RTpLDa5kbdjxRdeJSoycXDGOhpcS
	38b2/wAweVFYOdYf3uGfU1xdKv2uavUs7C3q0+VOaz0KfqeuV9QoxjUaynvsd3irfSLL/KUwz9Xi
	hkpZBG3c1VSm1nBY+FNNpXU6letHPh7lc8zfyLRwjqFGi6lCq8eJsGK27/iZ2t34FFJUovGMdjPf
	2tvrOke00I4nnfJo6pwvd3N/Ova8rpye2ZHb07Tqmn6VKN1hbPozNJXz+hONtec0ltF4ZYo8V+DT
	jGisJLfYrd24e1VMfvM6+h2+m1U3fSkpJ7YNFWbxKGs6PWqTg1KEM5awUWFLN5Cgvhcki+3dJ09J
	nHTcSpOHmz1wUCLnSu48q88ZZ3M/RdriVHQNNjKlDz564yYtH1latdK3uY83N6I3aUIanocfeGIr
	PYjStHtbVSr2Uuaos4yy8hUuIrOFrf4pL4m2WHRLGjY6e7ytHMpR5kVzU6laepSjcLD5ngtWozVL
	RrF9I8u4+FYrbiJXFy6NelLwp7R8py+KdLhbVPHorys3a+q6fWs7WlT2qRlvhGfiXD0KE1u+YniR
	44ZgvcNWWE5cxydO0id/qVSdSOIRm+ux3uDIxnpc8/DzG7q9Opa6fWnZRi095eorUrh69qdO2tlZ
	W2FyrlkVDOTJcVJ1K0pVc82THnAVDJSCaZDjvv0NrWW3oSuK8aUPil0O9T4PvakFJ1acU/VnO4ff
	+1qKjvuWXi69rW1O38N4b9CVjXCveGruzg5ylGa/w7nGaalytNMuXDOryu3O2u8NOOEcXiazja6l
	KnTW3Uk9a1503QK+o0vEp1acVnHmZt1eELynTc/Fpyx2i8mHS7HVK9LFusQ+uCxaLY6pb3lNXHK6
	be/myVncUa4oTt6rpzWGtjJa2dW7qclOLfzwdvi62jG+bxjMux2dHp0tN0SN1ypylF4yjMXXFp8H
	XklzOrSj8mzR1HQ7jTU5VakJJfus93evXdatKXNj6M0ri/rXEMVHksVZ+C1m3rN/vFf1alKpq9eM
	U23IsXBEZOjVXrI3Kuk0bG6r310nnPNDG4rnvarz4euYWauZzhGL7PqcmNOU58sU2842OtrWszvq
	zjTeIJ7JbG5whYu6vszSa5cr6ljfK9MNpwteXNLnU4QXpJ4MV/w5d2NPnlKM0v3dyzavYaxWrLwF
	TjBLCxLBs6RZ3sbepSv1Tal03yQlfPbe3lXrxpJqMpPG/Yv3D2h1bOlV8WpTlzQwsMpeq0/ZtUrK
	LwlLbBZeELqrUp3EZybSpvGWa+JWtfcJ3NavKar0UvnIr+o2NSwrqjKcZbfhZtalf11cyh4kuvqc
	2pOUqidRtv5mVb+m6Jc6jnwsRXrI6L4OvEn+3o/9R3dFnG40WpTs+XxsJb7bnAvKWq2VSU62f4PI
	qSuNfWc7KvKlUkm16Gv2Ml1WnXqudTOWYvL3yWNpW5BMsr4egwl0AgkAAm28djLaUVXrqmmln1MO
	3bqTlxeU8P5BKvmi6fp1jVpKaUqs91h5OdxmoqpDlWE2crh+dSWs23NJtZ9TqcbNSnS+pnl0nD1V
	oQ55xivUtmk6XZUYQr3bjLfZJ9yottJI2bepUdanDnljmXc1fFq7cWxpvSnKmkopLBQU3nK7F54m
	SeiJp/hRSaCU6sSRlbOH9Ht6dtO/u45wuaJF1xY4VeS2SUE+6N3VZypcO26p7ZhuUWK5nGP428BI
	7GsavT1Gl08/0OMm8YN+40W6o2quJRXIzQyl5e4dIAEFhVm4Lz7dUS7xOjr/AA3dX+oOrCpTimuj
	ZzuC1m+qP0jky8T6vcU9UcIvGEK57/k5epcP3VhHmm1JesTRsbOpe3ULeDSlJ43Lnod37302dG5S
	cs7FYU/YNZzDpCbEXkxappNfTJRjWaeemDxp+nVdQqunSxlepa+JKPt2lW9xFZajlmrwbbun49xN
	bKm2iLvTgXum1rG79nqSjz+pauF9Dr29xCvVqU5Rx0T3Kvrt47u/lUz0O3wfdVa2oQi5NxS9TXxG
	fV+F7m5upThWpRi3nDZXNT0qrp0kqk4Sz+6zf1+9uI301ztRUn0Zxp1qlxOKcnL6syM1jp9a9qcl
	NfxaOx/Q685c+NS+mTv6Np86eiU6tvGPjTTTyaC0zXFcqWYYz+8WrqrX+n1rCr4dVfxR4tbSpdVY
	06ay2Xfiey8TSXUmo+LFJbHH4Qr0ad14c8c7ltkkWvEODryUFJ1qUc9mzR1PQa+mwU6tSEot/hZ3
	9cstUlcTqwa8JPK5ZFZvru6wqVXOE+4qRopLmy+hYuGdYlSrq3rvNF9iutSi/N0PVGbpzUo9cmp4
	VYeKNNVGpGvBbTXMit5bfmL3q0VX0CFWXWNNFFa3yZXiYw/kAClQSAFAAAAAHY4XvFaarCdR4WMH
	Y4o0irXlC6oxcoNZZUIycd4vD9Tv6dxPVtaPhV6brx9JMtZkclafczk1GmybWlKhqFKnUWJKSO9P
	iy3lBqGnwi33Rwat74l8rnk75wZnVLFt4rz7nhnplHG4Pb98w22wzHqvED1Gzjbuly4ecmno2pPT
	L2NdQ58L4SGdOjxWl7fCXXrsWS0g7fh9VbalHxJU8vBStU1L3jX8WUeTHY29K4hr2EJQnB1qfaLe
	xrizylrNZ6jqD1CkpuW81lZOrxrKTppNYW25rR4ttE+b3bBS9Tla3rstV28PkRmza3wmXtyovlkl
	Dfcvtal7Tw3JUnzSUFlHz9ZS+Z3tI4jnp9F0qlLxYvsy3+cZy7rk1LK4hlyg0kd7g7y3VT6GPUeI
	6V5QlThZxptrGUaGjas9Mqym6fPzLAk6W+NjivC1mTXXCO9w7n3DUWNslT1e+95Xjr8nJnsb+ncQ
	uy06Vr4XNl55hfCRyrzDu6v+ZmE91aniTnLG8nkxiTpuhJBKeGn6GkvjoaRSqO+hiG3qWPi+lUlT
	tko5/ZnO07iO3srfDsYTmvxG7W40o11HxNPjLCwskrnJdVKKcamJLDLncyxwvbL6lUvbqFzcyqwp
	Kmm84R0KuveJpdKy8HHJ+L1Ddnbd4Svo0rt0Kr/Z42ydziugqejT5e+5QbevKhcKrHs84O5qvFEt
	QsfZnR5dksmbEzt0OC/7CrvupHJ1rVbmGo1YQqzSUuzPGi629Kpzj4XPzPJzbu59quqlblxzvOPQ
	sPz2itXq1pZq1ZST9WWPgupGOoTi3hODRVsepntLmpaVVOnJp/IshY7HEGmV6V65KLcXudfhOydt
	a1a9XMcPJp0+LoeGo17ONVruzXv+J3c0XSoUPAi1vykxfjl6zWVTU67W+ZGzw3FvUYt+qOVOXPJy
	lu33NnTrx2NwqqXNh5wWM47nGn+9Jf5UVg6es6s9UunWdPkysYOYMdPh3GN8gkVIhvc7/CdxG31B
	tvHNHBwexlta0qFeM0+jLGeUdvi21lRvlNLyOOclf67epfKio8RaV5cRrJJJLqUq9tp29ZxnFx5X
	j6mOMsLelk4JXNOtHuaPEOn3E9Yq4g2m9jocENKdWUd3sbercT0rTUalKpYxm4v4mXl6zjLoNs9M
	0l1bnytprD+hyuGruMdebk8Jt/6mjrHENW/hyQg6UM9EcmFWpRqqdOTUvVCNZ0sPE2l3LuuenTbj
	PfJt8J6dWt1Ur14uMY7mracWeFRULi3VZpYzIxajxRO6peHQpeAmsPlYTGnxJcRr6tVlB5TZn4Vl
	GOpZbxscSUnN80nlvuZLa4nbVlUg2sFni8osnF1lVq6jCcItx5Cs1aM6T5ZrBaI8YU3CKq2UajSx
	lnD1XUIX9VThRVJLsjHGYuax6VKMb+jv+ItvFVtUr6ZQlSTluUiMuSalHZruWSx4r8C2jRr26rKP
	qaxmuBWtqtvFTlHEcly4aqUrnRp2il+0lLKRX9V1qnqEeWFrGmvkaFle1rKqp05NfQpjb1PSLmhd
	Sc4NZb5fmaTs66hJyhhIscOLqbglXso1ZJdWauocR0buhKnTso021jKM404VtU8CrCfoy+KjHXNH
	pNPNRSTeChxpyntBczXYuHB869DmdWLVNRfU38Zx64oqRs7JWcHjMUylN5TOvxJfu+vXPoo7YOQu
	hiTtuHZEdJMLfJPY3Rs2NB17mmks+ZF51fWKOlUqdDw4TzBPlkikaXeqwuPEcOf5GfWtV963Earp
	8nLHGCXxjO1isuKaXtEErSjTz3SMHF9vmFC7prPibsqlObhJS64Oze8Qe16fTtpUcckccxFxYtHn
	T1PQo2qealOLbRUrzS7q3uZJUm0YtP1CtYVFKlJr1S7lgXF9JwSqWEZy9WLDtXZ2VxTpupUp4SLR
	wfd0pUKtpUa5qj2OTquvQv6LpwtlSz6HJt7mpb1VUpycWvQQsdfW9Guba9q1FTbhJ7HMjp9zNOfh
	4jjJ36HFyjRULi1VZpdZGK94mpXFB06VnGlldULP+E1z9BWNRip7Ha4zp1Hc0vDbx4aK5ZXnstwq
	rjzb9Cxz4xo1YxVbT4TaWMsvLuMzjlVh0q+MSTM2lRcNSoqW3mO6+KbNr/dlM4c76L1BXMKSilLK
	ihOo1e1t4pualrp9GVKpJZfZlPqaldXEeWVaa/ib2s669Ut6dLwuTkeTjtpvZYM8YTjiW/NzN5fz
	M9g+a7h9TXWy33PdGp4VaNRLodOPS1ceKttJsv8AKUo7Wqa69QtKFB0uXwljPqcYx9IgbdyWR9UW
	qlptZR7peLlcmU16HjOxu6XfQsarlVoqsvRhmzXQ06jq1xOMYyqcnrzFh1S8Wl6OrepUcq2d1JnI
	rcWRdNxoWqpP1RX7q8rXdVzrTc8+pkkeadOdes1TjzSk8mV2d3T3jB5IsLr2SuqrjzY7FhhxZbxi
	k9Og36mixvcK0riFrcSuXLk5ejZwLh0qvEHlSUOddDY1DieVzS8O3o+AmsPl7nA8WfiKak+ZPOTO
	dpi68UUriNunbpxo7YcTmcMzvlqEYx5pw75Z5suKZUaCpXNDx4r94zy4tpRg/AsY0pfvIti4x8W+
	FTu6TjhSx5vqdmMI6tw9GNN5nSp9EUi7uql3WdSo28vubul6zV06W2ZQfWPqJ4lidO0q7qX0ISpv
	EZJs7/FtxGhbqzWNsM1qnGFNxfhWUYSa+JFdvL6re13Uqttv1ISdrfwvKfuepKKw89jn6ZrkrfUa
	tC4fNSlN55t8GlpnEEtPsJWypc3M88xyKtbnqzqYw5PJcWTpaeJdGjKnG9s1zQn5njsVKTw8NHft
	OJZ0bGVrUpeInHCb7HEr1Y1ZZUeUmLGPHdEPdEtrGEyF03N6tdPh7bVqPLu8li4ys61WlbyjHOCu
	cP8A+96CXdl117W4aZToxq2yrZ9exOXjnlcPhXTK8biVevBxglnJq8S16VzrqcJZjlIzXfFjrUXT
	oW6pJrGxW5VZTqc8m285ySNSPoOoOpY6VF2sE04p5Rx9Bvb2tq1OnV5uWUvU1NO4mnbUPCuKXjx/
	xM3IcX29OXNT06EZro0GcuMfGEnC6Sa2T6nW05Q1Hh6FCnLM4RbwipatqstTq88ocu+cHjTtUr2E
	06cny+iJI1iLrTLuhVlGdJp5ME7SrThzTjgsq4votftbCM5erOdqmuUr6m4wtY0s+hVdngmbjSq7
	fiNv37CvfV7G6UVFvlTZWdG116XTnFUufmeTn3V3KveTuF5XJ5XyJjH5uuvr+hys6jrUU5UpPZmf
	gy4p09QdOc8PlZio8T409WtxQ8bCwpM4kbiVOv4tLySz2NRbKs+v0tRt67nSnUcHv8RyZ3OpqHNK
	VRJf4jfteLPDoeHcWyrv1kRecT0Lm3lSjYxg2uqJixXbicqlTmk25d8ls4Klz+000t/DZUpy5pOW
	MZNvTNRqafW8Sm380u5Sxsatp9zG9l+zOdUo1YS88cMtE+MKNSPnsIyljqyv6jfK8uPEhDw1+6iG
	MtrSvrZKpTc4x67MsOkaxc168LevbQnCTw5S3Odp/ElK0oeFVs41fmzZfFtuovwtPhCXZrsOU1mR
	g4usqdtdynSikm+iK5n1W5t6jqNW+rOc29+xqwT50kuZ56F4tt630S+u6Xi0qTcPU0qkJU5yhNYl
	F4Z9G4arOlpMvaKXhr5lD1ecZ6hVcMY5n0F9SNMBgNIylv3JUcrLDw44xueqM/DmnJcy9BErrcO0
	pvVqEseVM6vGdKc5UnGOcMxWnFVtawgo6dDmiviMtxxjRuFipYRl9TPOazxlipuEnlNYaM1lSnKr
	TklnzIXdwq93KtCChGX4UdjTOILaxt1TlYQqSTzzM18Wx3eJISlpMYwWfKv9CjNSpVE2sYLbU41p
	VYcs7CLXoyu6rf076opU6CpL0RJDFxtOTVtCVKLzOnDZIqEtLuLe+gqkGsSR503VK1hNOEm4916n
	eXF9BpeJp8JyXdlTG7r8JR4Yhhb8yKPJvO6O5rPEctSt/BjR8OOc4Rwnu8kxqBBJBqLVl4M/vtT/
	ACnnii1rVNWlyw6o5mk6m9Nruoo82ex358ZUKj5qmnwlL1ZK53jdbnDVlLTNOncXWYb9yn6jV8S/
	qzhunJnS1TiOrfQcIQdKD/CmcTzTeyy2Gs6XbQK61DS61rPeShiJsV6HuXRUntKSaZX+F4XVK+jL
	lkoOSyb3GWpOtWduniMWZrPGXVUqTc5ttbNlh4KljVIQ9clbknnqbNld1LO4jVptpr0N/G7HX4is
	bj26T5HyybeTj+FVtpxlOGF2+ZZf6YUpU4xrWMajSxlnF1bVIahKLhQVJLsjOM4uFlOd7w/SjbSa
	qRTbUWVivW1WnWcZOaX+Y1NN1evp9TMZNw/dO5/S+hJefT4SfqxYY4d7cXzjy15TUX6swWtK4qS5
	7fOV3TNvVtWjqEswoKkvRHnSdUjp0syoqos5wy8Ws10LHVdQtJqE6fi9mpPJ2tZtqd7o1O4nRjSq
	PdqKOd/S21zn3bDPqc/VOIKl9DlpxdOH7qJy7ZkcR5UnF7nu3g6tVRS3yeN3PK3bLHw3pEp1lc3C
	cKa9SzqLydXV6ioaDGlLZypoo+cosHFOpRua0KFPaMFy7dyvPbCIvGYkB+gKtiCSCQQAAAAAAAUA
	AQCN+xISy9gEkn9RlpYTHwvD6s6MdFru1dxty4yQc7Cax3CaQaS+pCW5UMskhvfCPXJLG4q6gMjo
	yRBCJIAEkEgoABLLS9SBtzY7DOHg3a+mVaFr48lsab7BnUMABsIJCCI3Z66EJ5eEJQl1CaZyB2IK
	upAAQAAWAAAAAlAgkFg29P1G40+qpUqjS9Eeb28neVOeo8v5mu48j5mmRHDeWiamOzoOsU9Lc/2T
	zPuaWqXavr2pWS67mmsybz0Iyot8qJfRPWIefUhbonDXVlioJACfQgALySAQF4+BIILrP1OdiEyQ
	t3hEq8jqFtJZPUoSisnjO24Pjr6NqNlY1pyuLZ1MrCN7UeJacqLpWNGVJlbymsPqglJLnT3CJlKV
	STlJ7tnl+gbYXXLCi2JD3AAAAAAAAAAAAAAAAAAAACCQDQEElAMgnGEZnojcZYjlvY9Si1uy8hAA
	AAAAAAiCSCQoAABHUkRTk8IAtg2S4OL3Ib9CAADQdxlZ3QRG3NuiT1EtL4kh8W/QyeBXa5lCXL9D
	G93gn0bWmXUbG9p1pRcuV52Ohr2sw1ONNRptcvqcVvGEM4ZeQjGO5Ia3yCAACqAAAAAAAAAAAAAA
	AAAAAACxPoo83fGDJb1o06qlKOWjHhvow3FvoyRXbveIqtWgqNJyjHBxZS5m5PqzzD4WicroiVJE
	J5Hcdz34b5cmvix5BCeSSQoCCQAAAAAAAAAAAAAAAAobmmXNC2uIzr0vEin0NMhfEs9AlWurxPZq
	hKFpaypTa6lar3NS5qudZuTMUlu2iWnyqeVuRIjOQM53BVAAAAICBIIEWVKCeJNdiCcYQT69QlyV
	U/RnbuOIWrL2akmsrqcLvkiCjyvK3yWle5uU5c8nlnnIbzsGkkZimc7gjsDRqQAQAAAAAAACAMp9
	AZrJRneU4y7yRUY4054y4y/keZQlj4ZL+B9Fuq1rpWnQm7elLfrKJrW97Yaz/VnSpU3LvGO5lNUP
	4muXqvUv6SfC+ElzeEVPXNO9gueXdRe6ZbaMM8M8sPNKVLYjNr5/yyyk1uTKLjLGGv4Fn0fRI0aa
	u9QzCOMxz3Zpa9qVG4qOnb0qaS7pFjUcuypeJcxjytxfyLBr+k0bS2o1KMZZlDL2MHD+rqySpVLe
	nJt5zJblr1rVoWlvSm6FOalDOJLoWpPXzbkm3lxaX0IcXF79OxYL/iGnc0ZUla0YcyxmKNPQbCF7
	eKM5PCeSRquU4yX4ZY+hMoSS5uVqPzRe9U1G20ap7OrWjPC6yicfVNZtb20cYUaUJP8AdQqSq02s
	rlB6k3nDikn3PJY0k926zXp/5keOxkt/7en/AJkIlXfX6f8A/j+Ix3wui+RRpwllNxlhddj6ZXuq
	FtoynNRmkltJfI5lrqthqdVWjo0oOe2VHckYlUTH7vQcsk8uLx64OzxFpfu65zTy4TexYNJp219o
	Dp+HDxacG28bl+N6os00/L0PUotdn/I2KVH+tqjPbz/+S2cQUqFjoqowpwc5JPONzKap1tBzqJRT
	f8Cy6rpFK20uhWpqXiTjmWxo6Hq0LDMPAp1HJ58y6Fx1LVYUNNoVpUacnOOVFrY1fB80dOaWXF/y
	IafLzdiyXnEdK4oOn7JRi2sbI5ujaf7wvuR55FvsIOcot7qMmvoJRcVvFr+Bd7q+sNGlGiqdOo8b
	80TJFWev2VR0qcIzWy5UTRQ3lJfMlRf7r/gjb9hS1P2ao2sSwXLkttF0+nUdGFTO2ZIsNUNQl05Z
	Z+h4b32Le+JLatGUPZaC2e6iVW4qZqSkopZYWMbW6UQvTuGsrmexD6LAVOGviNmwt/aLiCw+Rtdj
	WT/iWTh/WKVvyUpUablnuixk4k02lZ8kqUZPyJ9CuuMmnLlax8j6Nr2rwsoRlKhTqZin5kVbU9fp
	3du4RtaUG1+FGIK/8ey6nuKcVhwln6GaxrxoXMKk4prOcMs8OJbZSUfY6DXrylLVQ5JReJJp/QJp
	vfqXfVrK31DS/baMYxk30iinUaPNceHLZZ6iVbWJQlneLx9CfDnzfDLH0PoFZ2WlafSnKlTnJwT8
	yOVV4ltalKUVbUU8dogipNPmwhyyltFNv6G3NO9vklFRjJ4WC30bWy0KzjVrqMp+kkWeJvajckl1
	jL+RDXL1TR9A0vVLTU7pW/s1FJrqolZ4koxo33JGKUW30H01xeV9Wsr5EuLfwxl/It2kaVa2Fn7Z
	dSypLmipLKZno6/ZVq3gO1oqEtlJRM72zvalOEluzNaUvFrxSi2vod7ibR6dpH2mlJ8kmYuH9XjZ
	w8FW9Opl/FJbmo1yvTPr+lUrK2oToqT54ZlsVmUJbPlaX0PpWtatCztaU5UKc+aGcSXQqmoa/Su6
	XIralDbrFGfqzxwGtjzF77kzfNNyiQ231WDSpAABbAAAAAAAAAAAAAABAErfZdSVSqYzyP8Akdjh
	i3p3GoctRJpLJZtU1Wz0yrGj7PRax1cSVmVQXFraSab6bCMXvzF5q21nrljOpbqMakVsoopde2dv
	dSpTbTi8MT1b4wpSb+F4+hPJP9yX8i+afRtbPQ6NzOnCTa/EjSlxNbbxVpQ/6RfUnin/ACw+b5hJ
	yeIptm7fXHtlxzUqcY57ItOnaZa6XZK7usczSklJF+H1SpQktuWWe+xBerfWdNvqrt5UqMed4TUd
	zh8R6S9PrOpSWaUnhMkN7cvT6Sq1opxbTeOh2uItKp2NOHgRk1KKb2J4d1hW8IUJW1KW/wATW5Y9
	f1iFmoPwKdTMU/Mi8je3zmUJRWXFpfQ85WNjv6nrkLqi0ralB4/CjgJ80m3sGjsQ/kOreCU1gCWu
	VZZGG1tGT/gb2jWEr+9jSaeGW25uLHQ6UafhU6kmt+aIZ1RXTnFJyi0n8iMYfyL2oWPEFpPw1GnU
	gukEVKdn7Jqkbef76W4N6aapzl8MX/IhxcesZfyPol3UtdH02FR0KcpZXxI1ba607WH4MoU6c3+7
	EmrqhrOG2dPRLRXN7CE4vllLD2J1vTZafdeVZg91k7/Dmsw56NurelnOObG5Ylrk8R6fGyupU6MZ
	OKe2xw8OKzJNfVH0HXtdp2V1KEralPD6yRV9Y1mF9R8OnbUoLPWKIscYAFioPdLepHCbSfoeTqaN
	qcNOqylKjCplY8yE9ZWChqmn09G8KrCXif5Cm1pQlVm455W2fRbK6p6hpcqztKSTT6L5Hzy6li5q
	csV8T2M/Rj6kqMs7xl/I3tGowrajRjPu+hddTvLTSaFFO2pSz3cTVHzxwllvlaX0POU1t1PoFKdn
	rlrONOlThKEW/KikXturavKPoSrGDbJGGnuQ1ndE5yVQAAAAAAAAAAAAAAAAAmMXOSS7lSoabaUU
	3/A9ODa8sZZ75RddN0220yw9quUm2uZKSPVvq2nahVdvKlShl4TjElRRuXbzExjKUfLFtfQ7nEWk
	ewVvFp5dKT2Z2NFoUqmg+JKlBvffBDVKz3fVEuEo4covD+RmqKPtUmuil0/iXDXLWlT0WjUhTipe
	En0F8al7UulBzqpJNrPZFnudIo09EpXMFLnl1OXoepQ0+pJypQqOfaS6F2utVjT0Wjc+BTal+HGy
	Nb0xvb5rKE93yv8AkecPBZbziOjXpOCtaMfmolcrSVSo5R/kjHFu+PCe+5IbeMNBGiAAAAAAAAAA
	AAAAAAAbXK0DYsKHtF3Cm+jZUrXjCUo4jFv+BKpyisOMv5F+ufZtFsqM/BpzclvzI5tbiO1r0Zxd
	rRjlbNRJUipRwniQUJOWEmzLyq4rqMV1fYudlYWejWSr3bTn1SkslLVIcJRzzRf8jzF5znsXy11P
	TdVqO2lTpQ5nhNRK9r+lewXGYL9nJ7P1M0l7cZQm4qSi8fQjr0Lxp9vR/o3GcqcXLke+CnUIv2uO
	23P/AORfWp4wSTj1TX8B3SXcunFFCjDToSp0oRfIui+RwOG7aFxqdKNRZTfQvFm3HL5Jdoy/kOV7
	5jLP0L7qWo2Ol1HDwKUmnjeJx9R16hc2/LC2oxb7pEnrVVhNcu57UZzWVF4+huaZYS1C7VPGF12L
	dVenaHSjF8k6mM4ki8mYonI09oy/kedsyznKLfX4italNx9loLPdRK5ClK+1HEIJRlLsDWrGnNx5
	uVtP0QUJYzyy/kXeMLDQbZTny1Kr25Zo9WN/Z6vB0alClSbT+GINUX8LfoQnk6etWHuy5cEsxlus
	nN+ZGgAFAAAAAIBnsMe3Uc/vowZxuZ7D++0pPvJFZq48Wb6RD6orfDbmtThyZbL1qFrb3OlwVeUY
	LK+I59ta6ZpD9pVWlOS7JmKzrncatc9t5fwblg0SpRo6PSlWS5OTuUXWtTd9dNvLgm0voWWnd28u
	HXTdWPMqeEskS8WXX7eV9ZKpY1XKn15Y9Eii1KbpycZvEkdrQdaqWVVUajcqMvLjsbfEllZzj7Tb
	Vaab/CnuakbnSvWDftMW3lZLbxZvYW2F/wCminUp+HVS+ZfKVzY6tpsadWpCFSEVFOTLy8J7qgLp
	jG5tWF7KxrKcN3k72o6PZWtrOcLilOTXZnJ0WhQr3DjcOKj6yMxbdWGlrVjqUVG8o04yf45GvqvD
	tCds7qyrKcV2iZ6nD9hNqULygl6ZNq7vLTTNKlb0pwn/AJWWxmKLJOLlGS3jseOplrSVSrOaezec
	GMR0h2Pdt/b0/wDMjweqL5asH6SRYzyXniH/APn9vLsv9Cp6JGT1GnyPzZLpzWep6UqNS4pweF8T
	MFrZ6ZpL8Z1aVWUd1hknTnGpxlhWlqnvLG5qcI3qpVqtGfSceVHO13VHf3MsZ5IvY0rKtK3uKdRP
	bmWxZ41VplpP+3nHk8qXNk0+MLvnu4UoPMVBItdG9oT0x30oYnKPLl/Q+c6hXlXuZybzuzOEYrRJ
	14pvGe5cOIG46LZ8seZKG7KXTliakl0L3p95Z6lpatq84RcY4XMzXLuKockpPmyW7gfkdxJ4TkoP
	Yx3mjWNtQk43FKTxskzkaPqPuu/5ovKe2UTwsWXU9as6V26dxp1OUvVmKhxVaW6caFjTp/Q2q9LT
	NX5akp04VGusmc680Swt7WpKNzRlLthkRXry8dbUKlzFcrcspFgsOJ6VW2hbXltGSj+KRXKKgrtQ
	mk456lpp6Jp1xbRkrmjCT9WUr3U0aw1RSqWdaEZ4zyRKlc20rWvKnUzs+rLtp9vZ6KpVVc0qkuVr
	ysqGrXSvbuUorEcsjUaLznbdDGERF+VodSrOyPl3wbumJO8hN7LKNPLxgy29Tw6kGnspJmpWbFr4
	yWY0+y8NFOkk+m+D6DKdhrVhFVatOnNJLMmcPVNIs7O0m6VxSqSxtysx4a1+G9KjqNVyn8FN7nau
	7/TLCu7dWlKo47ZOTwtqsLGpOlUWI1Nmzr32kWN/XdeFzRp8zy8sqOi7ijdaBzUoRhDL2RQIP+vP
	f8X/AJLvXlZ6fons9O4pzab+FlHptSvc55Vzdf4knVVbuKMR0232zmkilNpr4cFu4luaNawt4QqR
	bVNLZlQa7N5K1PHR0NL2+nzdOZYO7xo5ueOkMIq9rXlRuIT6cryXeF1Y65aKFdwhP96TLPGNyuDw
	Y861BfJnviPD1WPN0y8lj0bSrK0ulUo1qc5rOHFlZ4qn/XuZbYbJL2vq11rqlbaLbylbRrQUOjOJ
	HiHTY4l7upJroe9E1m3uLP2W7SwlhczPdXQdNqz8SN1RjHqlkmdpjn63xFDULRUVQUVnJwbPe5i4
	vG5va5bULas40ZxkvWJzKM3SqKeNkanTV7i5cWL/AGdbPr+yRSlh9S/0a9jq+lqlXqQhOMVFOT6H
	I1HRrK2t3Knc0ptLszOd6TzFYwuzIZMsJtL+Y6Qz1NKAAAAAAAAAAAAAAAAAADv8H4Wptvfy9CeM
	XzajFcuPKRwe170xjsWjW9Ls7uvF1a9KE8fiZOTnL24vBam3JpvkT3OPrTi9ZrLH4+pZqt1Y6LYV
	IW04Sm11iyl17h3F26svxPJOPrVnS43Xl4Wt0nnqUeWeZ4LncXNCXDdCmqsVNZyslNltJvOUXl6v
	HxmscOvFSfLuXDinnWl26hlx8JZZSVJxkprsXXS9WtdSsvZbrEWkopyZfifVR01SV9R5FzS5i38V
	76Nb87xPO6MlvpumadVdy61KbjukmV/iHV/eFxKMNoJ7IzE+ufpjavILruiycYrEKa9aa3KraVnQ
	rxk03hl6nOx1mwUatSnCphLMmavZ9UCWfqG/L0LLq2lWdrbN061OcsdmVqTw8LoSNo7LCEknHbqe
	iEkaSrLwW09TgmuzNLiTxFqT8TLjl4yaukX8rG8jNPGC3VqWn61SjOVSnSmlu5PqGa5PBqk7qpja
	OdzDreP6TvCyudbnblcafodrONFwqVJLrFlUjdSvNVhVlnzTXUlvafFo4sx7mhl53W5W+HXNarT5
	Fkvl/Z211pcaVepCK2eZM5dna6bpEnV8alUkumGZWNDjZrntl0zDc5PDeFqdJJ/iRj13Upahd5eX
	GLwvoa+k3Ktb6nUa2Usl4rY7PGW2oTys5ZW9scucH0C8pafrNGNSValTqdW5Mrut6baWtD9jWp1J
	56xYsI4IALGgLrnr8vQCMuVt46lSxe+Gm/cTUXnZ/wChSbhctxVXXzPcsvCWo0qSdCrNRg09mzav
	tH09uVaFzRSe/LkznbKvcP4lq1D6na41b5KC+pxtKdO21ym3Jcil1Orxhc0a8aPhTjNr0ZaqeCW/
	FuI5/wDTOTxFFRv5ROjwdWpW9WvKrUjHMMLLOZr0o1dQlOM1JfIl9WOYnyrBJCabw0TjBYoAC4AA
	IAAAAAAAAAAAGeyx7THPqYCYzcJKUeqKlXbifxHptu6eeRU1nBUdNz7dS5OvMW3S9VtdRsfZblxi
	8cuZMy2+m6Zp1WVeValUa3ik+hmxlj4qX+xrbnfm5tzJw759CcF6P/Qr/Eer+313Tp7U4vKNzhfV
	6dv+wrfA1jcYK/UWLucf8b/1LpxAn7joPPSktjxW0XTrit48LmjBPdpsjim7tvd8KFKrCfLDGzFn
	S8b2pdLzVIt7F0v/AP8AlbbG/UpKny8rwXfRr6zvNJha3MoxwtuZj5iWd6o76vK7jC7Mtt3odjSo
	ynG6oyfomVWqowqyjHdZ6onHpu3WPf1JEfhbe4RvQABAAAAAAAAAAAAAAD3RqSpVVOMnHB4M9jGn
	K5gqqXJnfJpKs1lxFb3FCNvd0YzUVjmkZLjQ7LUKLq2daPMllxieYaHp9xS5oXNGnldGzfslZ6Nb
	1OWvTnJxa8rM1FStKHgapGnV8uGuv1LHxlzqlSklmn4a/wBCsahd+Ne+PD1/8lrstStNVsVb3fLG
	WEsyYS+qrovM9SpOCw89EWXjJKVpaZeJLqbFtZ6ZpdTx/FpVGnlJMrev6pLUbmSjlQi/KSzUiy6b
	5uG4xSziD3KXRj/XYpS/H0/iWPhnV6UKDtLhrl5cbs3HomnSuFWp3dCKznGRZ3rUuJ4sz7vppL/0
	1/ocPhPfV6Kf7x1uK72hK3VOlOM2opbM43C1SnT1OnUqVFFKXcTpLNZuLmlqE9vxHAzzpLHKl3O5
	xRVp176Uqc1JOXVHDTxJp7oSdtVaOC3FX0ovzPke5pcU+JHUMTTxjuaWkahLTb1VVlrpsW+tPTtb
	pKVRwpzxjMmWzUnSgvdp5zg6/DuHqdHfHmWx2qug2FOnJxu6L+SZXXOOn6jGVKSlyy6oJV317UrW
	zruNeyhUjnZyOVDiexoz5qWn04v1Rt07yw1u2ULrljUW/NNmrPQdPhBz9qov5ZCRxNf1VandRqeG
	oxUcHI7mzf0oQruNOScfka5HQABQAAAAADPZcvtlHm7SW5gxknmwku5UxdeKasJ6RBQqRe62TKS5
	uS3bx9SXOq1vJtfNkL17mUxGcrlXc9KTUeVthZ6nnGXkYuJUmly+gzNrEpZQ5hh9UUxLe+ZEKeN9
	0EufdhuUtsLCFMG5T6N4+bC5+ikMr4e4ajHrkkKnmaeOZ/zPLnKXlbbQawtuh6Ud8pMojEYghdW1
	1JZIoADS5opSz1ePqSpOSay/5kZaeEGlh56krGPUI+ZRT6ll07h2NWhCvOvSUeuHLcrC2W/RnvxZ
	qKUak1H6iJVo1zUaVCyVjbv4XnZlUc8yy+pLblum2/myN1HD6k+t50hZgn6M9R5opyjLGfmQ3nCk
	Q1ytY6FqV6bc1lt5+p526YY7nr8WwUzJbqT/AJiUnJdXn6kJ+V5GFjcJIPmwsvYl/CsNp/UjZ9CM
	dmFsenKWN22/qEuZYW31EXyvb/uQ95Zl0GE8MqKcXvkY2Dwt49hnIqcQACH0ziPV4+olLMdm/wCY
	Wc8oxyPEu5PTDdpNPoS6k2klJr+JGMboPLW4MS21Llbb/iRvy79AsfEyFzN5iUepT8TGc4R52Tyi
	VKXTCHrkNR7px8WvGL6NlpocOQrUFKlXpxz6yKmvK9up7VatF8qqTX/6K58ovVna2uhxdSpVjOa/
	dlkp+r3vtl3OW+E3g1JVJTeJVJv+JHNP5YM521PEJ+mUS5zWyk/5kYzuR33KYl5a5ZPIzLHL2Cwp
	Z7BvL8oEptLCbX8RzPDy2/4nnq/MTl9hVSscpC2iRs/iPSaXwkEAAoAAAAAAAAAAAAAAAA7vCVWN
	PU25tJcvc98XTi9SjKE8rl7Mr6c47wePoHNz80pNterFZk7JPzLmy0G1+FbB5TTGXny9ycWqlz5o
	qLzg8p48pKzl56obvzS6F5JCWc/INr8OUwtlhBf4ugCUqjSzJv8AiHjlT7sf5ejG3TuiCYy5XiQT
	qRi8S29MkeZvL6B+Z5iUTKUpLDb/AJkdI4H4lkju8BRZ6snoyMtpImTASSe5KnNY8z/mR2HbbqEx
	LlzS3zkz2LfttLmaSUkYMprD6kJtbS2+gTF24oqU5aRHw6kXPK6MpMZ9edtv6kylKS5XOTXzZ5bz
	0GLInLzhdGPMu42a37Ef6CLXqMsLzN/zPKfm74J69B8WwTAABUDPMkkStmRzZbAlrG8WTmUusnj6
	nlJKOWN10CJXxZbJcpZyn/Mjyrp1D5n1Ac7UsrKb6kuSzlpkebGNtg3Ll7EVCw5bInuMjGCgACgA
	CAAAAAAAAAAAAzjdgbd+gBYTzHKZMpVMZ5n/ADPO7+hLcVtHOQYbNb9Q1hZTHmIS9QY9eJPOOZ4+
	pGcvDbaDbb2HQGIb3wuh6yl6oj/L1H+YCedvu/5kRxhjp8I/zBBbZwAmo/CM56hQAAAAAAAAAAAA
	AABQIz2RIWVuBPPUW3M/5iUpNbyf8zzs3uTy90ZBJp5T2EZOMsyb/gGs/UN5WGVMTJuTzl4+pGZe
	uwWUsDDa+gMRlJ9HknmaWU5fzGXypBNqQMHNy3ywko79x2wMPlb9BgZb69xnbl7jOYoJqLyBOeWO
	H1EZTUerx6EPLeV0Jz+LuXTBTb7v+Z5ziRK65ZGeZkXHp87fxbfUOcumX/MjGGHv0CYhqUd2yduw
	W63IQVIAAAAAACgACAAAAAKAAAEZwyQsNjAaXxDMpbtbEYy2jasbSreVVSpxf8Ala8PM+UtWjadT
	raJUrSim1LAp8JW8YJ173wp+jR3bfT4aboNSnSq+Mm85Mpvb51cLluJxXRMx4T6PdGzcUnO8moea
	Tk/Kduy4aVSkql3VdupLKySFquZzHfbB6azTUl1LPccK0lRc7W68ZpZeEVmpQnSreHLKfoa1deHs
	uV/zG6jsslg0zht3VHxrqq6MPVm5/RfT91HU0/kE1U0njL79DLa0J3NeNJLq8Hu9tlb3M6canNGL
	wmWPhzSbSbpXErxKo3nkLCuHqemVtPqYnFpGg935dz6HxDpFreVuaveKlstmVfVtIs7OlzUL1VJL
	sjH1renItqar1o05vCZZb3hmlQ0yNxCpJtxyaGjaZaXyc6t4qEovC+Z3dT0edLTXOGoyqQjHOPUt
	ZtUjpsupC9T00st825t6VYvUbjwk+X5lXWms46BLLwW+fCFrTSVTUORtZwzR1Xhf2O3da2rOtFLL
	a7EJVeeE8BpJ+V5ZK/dksPuywadw/ZXdpCrUv1Tb7Fi2q9JfvbMbvr0LTW4VpOi52114+N9it1qD
	hWdOTxh4GpPGWxsql/cQpU1nO2xF9Zu0rSpyypJ4wW/hrSbSjWpV4XalU68h71zRLK7unOpeKlJv
	dCpx9UTCezeMGzY0Fd1o0M436m3q2mWtioujdqtlm7pGlWlzSjWlfKhNsh9e9b4do6baKvCpKTwn
	uVpPneGW/iHS6ttYOcr2VaC9So567DjV02zj0EUnJ52Nqxs6t7WjTp028vDa7FijwlbqKVW95Kne
	LRaaqewW2yO3q2gTsk6tPM6fqc7T7KV9dKjFtZ7oQ1q4l1x0GHIt/wDRG2pwSrX/ACSkujNXUOFP
	At/Ftrh1VFZ2JUlVp5T5X2BMk4y5ZLzIg1GvUEkEkAAAAAAAAAAAAAUAAQAAAAAAAAAAAAAAgkAC
	CQDQAgCQAAABQABAAAAAAACAoSAEACABIAAgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJA
	AABAAgKkAFAAAAAQAAAAAAAAAAAAAAAFAAEAAAAAAAAAAAAAAAAAAAAAVQAAAARAAAAAAAAAAAAA
	AAAQABQHTcEbN4fcaJ+J5TwW7g+jFePUay4wyVF4zhFo4Qu4wq1aNR4Uo4CVz9b1SvX1CTU2kuxZ
	dGuZ1uHakpy6PBx9c0Ko7tztlmL9Nzs6RbytuHKtOusS5iMuFoNtGtry51lc7LHrOl1LqaitRp0o
	R6RfYq+jXsbXXVKb8qmzt69p9W6XtNrNNS3wnkzYvra0fT1YSm6mpUqkZLGEys8T+DHV34DTisPK
	MXu+/UG/MsdcpnOqU6jrcs5LmLCxerG5o6nobtlWhRnnq2cK+0a9tczo1HVXXMUadPSrulBVKeWv
	kiw6Dc6i68KVZtUuj5ohIplZVXN+JlSXVM39DnN39JJ4XMjc4rpUqd6/BxzSlvhnP0ipGlf0lN78
	y3LK1yd3jOpOFzlS2wtiqupKovNuXbirTal4lVpNSTS6blUudNr2tNzmsRXyJitSnNxzyPlL7Dfh
	pyn5v2ZQEktn3L/pzjdaBOhHdqngZrNUCUouTxHB3+ENtSax+E0q2jXFJyco4S+Ru8IJx1SSlv5S
	ozcXXVWnqMVCTS5Tq8PVp3uiXNOo87pZZxeMlnUYvtynU4Rz7nuuV43M/NVVLuly31WjCPM28LB3
	dP4duatrGVS5VCOPxGjQlCPEScsJeJ5sln4jjd17ePsk06Wdkty+FZtC0ydlUlm+hXhytcsSpcTU
	Y0tRahtnc7fCtC6p3s/GUlHlfVHG4oxLVMZ2wFjNwhUn7zppvKyRxTVqR1ColPbmMXCtbk1akpNK
	Oe50+JNJrVrt1aa5oyeVjcE6VKcnNJSeTNb1ZRq06aeFzIyXen1bRJy2MFFrx4SfZoKu/EL5uHsP
	rhFG/CX+9pR1Lh1xo/Fsin1tJuKFOcqqwl8iSYwsXCVJUrK5uGsyjHKOFqmp3NW+nUjUcd8nZ4Ru
	6bpV7Wo0nNcqyzS1Th+4d9JUcODfVFvau3oFw9U0h0rjztJvL+hwuH48uv4jslJ/6nf0+lDQ9Hcq
	0o+I01s/kV7h6Xia9zQeE23v9R4N7jCvVp3NFRljym5wpd1Luxu6dWTajHbJz+NWvaaCf7pn4Na8
	C627ESRXdWioahUil0Zpm/rf+86r+ZoFjrEEgFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAB
	BBIAAAFAAEAAACCQAIJAUAAQAAAAACCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAQSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCQAABQAAAAEAAAAAAAAAAAAAAAAAAABl
	LcEZ+QDpue6NWpSqeJTeGec52I6PboDHet+K9Qt6ahBU2l+8skXXFOoXNF06igov91HDfTCIe8Qm
	Pblzyc0/Mzq2XEN9Y0+WHLJf4tzjtYWw6Y756imLBV4u1CtScHClhrfETh1a3i1fFn8eex55uR+V
	ZyQ+vMuohjtWnFN9a01ThGm4r1Rlq8X6hUjjlpL6ROBnyP1CeI4FSMtxXq16sqlR5cnkxRfLNST3
	i8hbBdXkRqx3LXim/oU1GnySS/eWTBqOvXWo03CuoJf4Ucp7dCMLrkGJeJbrsdHTtcvNOfLS5cP1
	Octh1CWO3ecUXt1B060aaj8kc/T9RrWVy61vjma7mn8ye+wMbV9qFbUblTusZxjYz6frN1YUp0aP
	L4c3vk5zYcV1TeRhjJWq+LXlUbanJ52OracUX9lRjQp8kox/eWTjegWzBixS4x1FJrlpLK7I4d3d
	TvK3i1PiMHzJT+REx7o1vAmpptNeh3KPF+oQpRpwVNqP7yOAnvnAk8vZYCt/UdXuNSf7dRX+VHPS
	jzYPWeVYSyRhYz3Cutp3EN9p1Pkpcrj/AItydR4jur+nyVYwSa7I48tum5LecbFZxlo1p29SNSk8
	S6nZpcXahTgqaVN46to4KCfK21vkLjoanq9e+m3Uez7I1rK9qWNdV6XxL1MEX6oc3yC43dR1O41O
	UZV+XEVjY96brF1psZwtuXE9nk5/VEJfMmJIzXNeVzXlVqfHLrgxEElUABUAARQAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAUAASoBICgADJ2AAaAAVAAEAABQEEhAAAgAAAAAAAAACgAAAAAAAgAAAQSA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAACgAAAIJIAAAAAAQSCqEEgIAAggkAFAQSCBBIAAAAQSCgAAIBIIBBICAACgAKA
	AAAAAAAAAAAAAACAAAABAEgAoAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEgoEEgAAAgAAoAA
	AACAAI0AEASAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgkAAAAAAAAoAAAACAAAAAAAA
	AAAAAKAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd8MbN4QAEZWcDPQCQGvNhbh5TKAAIAI
	C3AkBfMhNeoNSB0AAAAAAAAAUA6vC6DvsABD6k5WcZCAJ5XnpsRleoADs2SltlgeQCXsgAEmk9nk
	dFvsABGJdUth9NwJAjhvDeAAA6PcPHqAA2x1G3LlbgASltl7ELcABsu4AAAABt3Y6ddkAAAAAAAA
	UAF1wF1wQAPrsF3AAdtyE13AkAAAAAAAAAAAAAAHX6+gAEdHh7EvOfkAA+uxGdwJA7j6gARnfbcn
	p12AgEhJtAQCV8x32AgE7+gAAbYe432xvkAA9uo7ZAEEtNMbeoAELJLyABH+pK+ewNAF8wAAAAAA
	AAAAAAAAAAt+m4AEJNvoSAAAABbsjvgCQR3JaxjAADGw29QAAAAAAAAAACgAeE8J5CBBI3zuABDJ
	xsAAW/UhbgSAAAAAALoQtwJAW7DznAAB7Db1AAAoAAgAAAB9B16AAQs9yQAAAAAAAAAAAAAAAAAA
	AAAAAAAAAPrnGQ5J9I4G72j1OvY6Bd3sU01BeskXE1x4pLPNu2S10S3bLFV4QuKVPndxSljsmcml
	beFqNOlPfEkRNa86FSjHnlFpMxbvdly4ptqNHSoShHDyinPOfkTVAAVTBD26EkR2e4Knp1DxjPLg
	z2MI17uManwv1LPrOk2FDT41KThzcuXhkrMVHqh0Qx5muwlskkSNCAawDQAAUCCQlmSXqWJaJeXr
	hiLxGSfU79nwrdX1v7RGtThHp5jPLg6s1/e6H/UhU1WfhWeo2ay1udHVNKqaa4qdWE/8rPGn6Zca
	jUxTXLH1aIutHfG8iEtsllqcH3ChlXFJv0T3OLe2FaxreHUTx64Ca1W90ksCUdl5zr6RoFxqlKc6
	dSMUn3N7+hlxHLd1RbXZMhqsp42YisPdZN7UdMrWM8VYtrOzSM+m6LcahFypziklncquXzL9zAx6
	7nu4ozo1HCck2njY29M0yrqNaNKnJLmeNwNFc3RPYhPlbWOptahY1NPuZUZyTw8bGbTNKq6nWdOk
	0seoNaEscuEssh5OvqehV9K81VqS9UcqKlUlhbZZDUNproRhJp9fkWWlwddVKMKvj0oqSzuzxX4S
	uaMHJV6c/wDK8g1Xk1zNuOw2k8LymS5pVbeq6c08r5HY03hi51G0VxTqwgn+8DXDaed3lCWOxYav
	CVzSg8V6dR/4Xk4lzazs5uFWL/kVWHaSASwsrowAG3cDOOwExipS3/ke3b1vilCSh2bOroGkO/uY
	zljw4vfJ0OI7y0o042tGO8Nm0EVZ7SwB139QFgAAtQSAWMoz8iZJtcyeEiYvffod3RZaQ7ZxvKDm
	8+pKOC/M13wGt9i6aro+mU9KncWlBwfLlNlLls18yQg9+oWHu47HqMVKpFPpnct9vpGnz0RTk4eJ
	9SqpwPVVKNWSXRNo8gAAAAAAAAAAAHR5XVAJZlt1AP1fULMo46YO9acK3V1beOpxSaykzj3dtVtK
	8qE35o9QMDW2+7J2awo7kxi87bt+h17Dh67vEpqSpr1lsEcdLC3ZD/mWG44SuaUed3NKSXZM4dxT
	dGq6fdPANY+ZYxyb+pCwvi3Onp+jXV9jl8q9WjpS4OuFFt3NF/LINVvosp5CUsPfGTYvLKdnV8KT
	WTq6dwvdX9F1Y1YRivUJrg/JvLJ36YLN/Q2tnPtdDP8AmRzNT0erpzzOvTnl48rBrmcz6NDGF13O
	xpfDt1qlNVKdSEY/M3Z8HXC3V1RbXbINVrMYrDWWx0w1sb2oaXV0+aVaLkvVI2NM0KpqScoV6cF6
	SYXXJa5t3INLGzLRHgi6nnFzRkl6Mxvg+rThKUrqhsunMgmq3LOU85G0sYWD3VpOhWdNyUsPqjw0
	99wqW8LY85bJSITblhAp037iSz3Ovpug3GoLKkoR9ZdDZueErq3pOoqtOol2juEcDOGl1B6nBwlK
	Mk04vG55DQAAAAAAAAAAAAAYyI5jLCIeTLQSdxBP1QHp21elHxJxkomDuy769RpQ4f5oxxLCKSEA
	AAXUR+IIdwo+oSbzueqceeZ2b7Q3b2FK4ylzrIHDSeepLwnhoLMSMKW7AkAAAAAAAAABTrnfAjiK
	3WWRjJtWdlVv66p0E182gzrWTeMvYYfd5LK+DrqUFm4pZx0zucS+0+tZVOSqvpsCVqtBPBCbzuSw
	0iXTY9xhKa5YrLPMep1OGqUa+qQhUWUwy506c6UeWaabMaWxY+L7anbXFFU1jKK6AAAU7CK2Y7DO
	EBHrgnD5c5NrTbR3VzCl++8GzrWly0+u4ZWzJRzIp43GV6bhyaWGRhdQJABQAAAjq0uxJHR79APb
	hJ7JYXqeeXDxn+Jb9Gt9M1KwlSjT5a6jjLfcr2qadOwuZQmvKgjR/jkDbssIBQAAAAAAAAAAAAAA
	AAAAAAAAAAAAdXh2xV7qcINZjgsPEOrTsIQtbTlS5cM53BUl7zjHvhmrxPR8O+lmT5pNtIt9Z4tV
	azdqW0t36mKhWnX1SnOp8TmuhpvGN+psWGPbKDW/nRJ6zyfRdSt7Ctp0Ff8ANy5XQ48uHdKu6L9h
	cnU7ZZk4rbjpEHGTTyjk8HVanvaEZSbWHs2SrxcO9t3aVp05rzJ4R0dEttOqxk9QcvlymbiuKWox
	UEsvJl0fh6pcQda7cqdLrlPsOK8q6FHSNAuswoOpz9ssr+t6TPTLtxa8nYslrpWj0ryDpX1VzUlh
	ZPPG1NKGX023JSVydIo6LOjm+dRVc7cp19b0exp6VKtbyqPy5WWUyk05pqTxkvN+1/RqWX+BFviT
	1Q3jGDrcPaZDUbh06vwxORhJ5bLNwXl3lZr90zFrpXGiaDa1fCrOpz/U0dY4coUrZ3Nll0l6s0uK
	as1rEo8zWF6nd0KU6/DdSNXfzdzd8SKO1iTXZdSNuxmu/Lc1IJbczMPQzHRB6p/HH6ogmn/aR+pu
	MVenOUOE5yhnOV0KhK6u+Z48T/uXeyu1ZcNyq8kZ4a2kso5EuK4JteyW+f8AKiJFanKrcVIRqt9e
	5dac1pGgUqsElKaa3RUpXSudTVTljFOWcJbFn4jaXD1q09mwX1XqGuXULxVIy3bw8lk12nTv9F9s
	S8ySWxSIpc0XnuXil5eE6md1zdynJ44Zbp6NdNdUyv1dUuKOoy5JPPN3ZZOFY056ddKtJxg5dUKO
	i6LXvnKFzOVTm6GS+PWpv27h6jVrJKeG3saXCDw6sV15JGPim+qUIqxpxSp03syOCp5uKi7um/8A
	QG9ODeUJ1rupGkm5czOvwjFQ1OmmnlS3O1pVK3s6Na5uorm52llE0LRW+pU60IpRqPmQS1VuI1za
	xX/z7He4fprTrCV5LZzhscLUYe08QSpp5cqmCz6ppV7LRre3tqeXF77hWK6re+eH8veopNlMppq4
	5H2kXjh7TL+zhOlc0Uocr6sqmoUHb6pytYbln/uBateq1KOjUHB4aprucPh3Vrp3sKUvNGcsPO5a
	b60s62l0PbK0oR8NdDDY6ZYWFrO6tJuq4rmXMgOHxfQhSufESScpHTsJyp8JxlHZ5ZVtZvq2o3rn
	JYWc4RZrZr+ikV3yzK1XrLXLu0u3yyTXN+LcsXENrTvtIV4kueMMvHqUmePGfM8eYvUY8vCtdSec
	xWMm74kUJptL5Amfmlt2IMxsJjlyWCD3Qx4sc+p0jPLxd6MI6Xw9UnDac4qSKTWqutVlOTy5dS68
	QZ9z0XH4fDWSjfiz2Oe/5Ncf5ZLen4tenDtKSRclw7pNvaxq3fOs+jKhZf36l/nRceK6j9zw/Duu
	hvn1HKW/phfD2mXlJ+73Jz7czKrfWdS0rSpzWGng6HDtzVp6hDE5NemTr8WUacrq1kkk5Ry8GePb
	VrR0Xh72qn410sUksvfsdRaJodeUqVu5+KvVmXV6jtdBt1S8vNDfBT7OvVhd05qpLPMu5N7L42da
	0mpplZxkvL8jm085WHtkvHEXLW0KFeaXO3gpC2qL0yanfR8XzUMvhhr/AONFBknlYL7qD5uGZY/9
	tFBxutzHlXj46uiw02rWkr9zxjblLVDR9Lr6e5WkquEm95FByovZvJe+HGnoDnlt4Zu+FUevFRrz
	hHs2iadKVWrGnDeTJusTuKj6PmZ1OGKEaur0HLdJiDqafwxQp0PG1LaLWVhnuencOqMuV1M423MX
	GV3UVWFKDcYxeNngqzqT5fjln6mRt3FC3V+oUs+E2juavoFpb6Z7TaqWcLOWVeM3lNvdMvGlSWp8
	Pzt28zzsa+Jaqel2XtV9To1Okn2OlxJpVpptOj7Pnnl8WTa4bsOXV/ElnlpTwzQ4nuvH1KpFPKhL
	YzrU9cQPqTndhbxyWLUPHY3NLtndXtOkl8TNSK7ss3B1lKrcePGOXCRpi1262pqwqWVnTaSzyzOD
	xbaeFeTuory1HhG5qWiarX1V1o0fIpZTybmvadVqaJRVVYnDdmKsV3hiwV5qHLJZ5VzHY4l1upaN
	WlryqGN9jDwW/wCtzUV5uRnJ4iUoX8lLqxyqT1ip6xdwTalld8niypy1DU6fPu5y3NLEkt1szq8O
	NR1Wh/nRvj41yWjWL1aLYwoW3KqnR5RU/fN4qjk5eb6nY41pct3KpKTxJ7IqqXqY4+pxbF5dzuq8
	alb4ltsXaxlOHDVxKGeblWMFCWerW2T6DotxG10GtWaUlFLZ9Dd8Z+qXUu7tTlnxP+5r169StFKo
	5bepaJ8WQTajaW7/APyivane+3XMqkacYZfSKwjCz1buF5f7CyvRlYep3NO+lKEm8Sa6/MtfCUE9
	G5avlhvlmi7Hh63ryqSvJ55m2mu4nqfW/qK9q4flWuEudQWNii07irRk1CTS+pY+INboVLeNvZz5
	qfLjJV8cyThu+5qetXxeeF7ipOzruUm2qb7lVvL2v7TPzvv3LLwp/cbhPr4bKlef3mX1F/ojBlpt
	92RjZ4D6ErqhVngsKPzNnTafi3dOLW0pJGtjmZv6NJLUKS/xoqclw1Sc7KxjZWSSqZXX5mHSXqFj
	dxtr3lcKi5vUjim6nZ3irRinHC6mjaa3V1TV6KlCKxHGxipGpxXZK3uYygsKpuV/GNi2cbKKqW2X
	+Aqf0EaiSCQbSrHw3olvqNB1LhPCfY6T0jh91fCi6niZxuyeD5uOmTS9WVW9qzWo1nGcs877mb6m
	ulregSsUqtJZpS3XfY41vGnKvGNTPLncvNpP2nh6qq27jT2b3Khp+nVb26dOjHKXUcR36Vhw64JT
	dTmfzPGqcO2ys5XFhlxXqzNU4f022ine3dWnU9EzsW1C1jodRW1WVWGeshTXzqNCcqvhpb5wWnTu
	GKHsqr3+0Ws7M0NEownxFBPdc72N7jO8qxrQpQbhGLxiLwTWmSWn8OcslF1OfG25XbilRoalGNHP
	Llf6mm6kpPLnJfxPVOX7Snl5fMt2WM/F41/bQUluuVHB0XQPas17lYoRfm7Mu1Kzo3Glwp1HnMU9
	yu8VVbq1owowpqnS5esdsiMy1X9YpWNGu4WXN5Xvk2tG0KV5Hxq6/ZYycamuarF5by98n0SxpWsN
	ApeLUdOLWMoRuuUtJ4flPwoup4v1ORr+hy06XiU1+yxk6sLDQlcc/vCtzLf/AP3cz69qOn1NJlSo
	1vEktlkk9SVw9Bhpk8+28/NnbBctRpaXPTKKuHPwVHy49D5vbNutzrZJ9i5a6/8AYNo03vA1Rzru
	34fVu3bupz42ycKxs53lyqdPpk1sylspM3dKvHp94qjS5fmOIs09C0exhGN/zqo1nys0r+y0ONpO
	Vo6niJbZZ1buOna8o1faZqqopcq6HC1Lh+9tKUqsYydJb5bMkcJxw9uh5Y5d/O8Epvsso02htdgS
	s52RHffZgSAOxQSyy88OUY2ekK8aXO8oo8cc6y+5eLZuPCcHHfEgzWm5auqktRzHwYSwbvEFGnf6
	ZC6x56cN9u5xZcRVlZztFTg4OXU79eUnwzWlOKTcE0Z5eM8fVAafM8kd9yd8sdicXWoTWTscMKT1
	ang5Gx2OFm/fNNfI1XOrhrVhpVaVKV65cyW2Gci74bsa9tKrp2W4rLyzX41qVI3NCMZNJx7Mjg+5
	q+POlJuUZbPLMxNcGjaqF9GhcbLmSeDua9oVtZ2Kr2qe+OpqcTQjQ1qo4fheTv2rWrcNKGc1E2y3
	xdVXRbCN9exozWz9Dc4j0200+pSjb53Xmz6nQ4TtfCvJV5rCg2jja9cOtqFTL2UngT07d/hylpHN
	Rk3Px/8AydDX6GizuHK9dTnzvylU4b31OlmTxzLBvcZScdQmsvGS30aer09JjT5rHnzn8Ri0XR6m
	p1E4ryZ3bOZvsstrJf8AhujQp6DUdaXJHm3kuqIa0fdOgUsU6zqeItnh9zQ1nh6NtRVxarNFrO77
	G7W0/QqtZt6hW5m//wDe5vXV9pdLSaltC5lNqGI8xNJVN02xnf3ChBbZ3LRV0PRbJKN5zqffDK7o
	uoRsLzm25W92y0XdDTden4tG6m6jXwroa+Jt1yNUs9FhaSnZufOumWVzpL5Ha1XQb20g5KMnS9Wz
	jPOOV9TMdJ42dOup2l3CpTeEnlls1+jHUtGo3SXnby8FJS5S9aX+04cSlulB4NcmJ6o0viZB6q/2
	kvqeRG6AAAAAAAAAAAAAAAAAAAAAAAAAADe0W9dhfwrdkW/UtPttbt4XFvVUqkY7pepQu2DattSu
	7RYt6zgvkKzHXXCtwm5VIyjH1ObC39l1aFJPKjNHuWv6nOPLK6m0zRlXqSq+K5PnznInpmrpxWsa
	PDfujjcHLOswed8PY5NfUbq5p+HWrOUV2Zjtbmra1VUoVHCa7olWR2+K2vbo9nuWKynTvtCVChW/
	axhhpdclCuLqrXnzV5OcvVmS1vLi0zKhWdNv0EZsd604f1GnfU5SjU5YyTbNzjVpRWZZ6bFf/pFq
	iW93M1Lq9ubz+3quf1CyMGzaafKsl/tOTVdBlQh8SilsfPsbYNu11G7s1ihWcF8hfDHRveHa1pTl
	OopJJdza4P2uqij6HIuNYv7mDhWuJSi+zNe2u69pJyoVHBvrgYWOpxa/9ryWOy3O/wAOrOgzedsl
	KuLirdVPErTc5erM1HUbqhRdGlWcab7It8JGO8bd3VeNlJmHqTKTk22856nkkbD1D44/VEBPDyup
	WavFbK4Qqbb8yKRUWZPHU2Zaldu1du60vDf4TVW+/cJEqfI4tLdF306tb6to0LWrNeJBbL5lH7mW
	3uq1tPmozcZeqC1YqXC1ZXWakZKmnnJt8RX9G1sPYKDTyk3grz17U5LDup4NGtWqV589SXNL1Kli
	58MSb0a5bXcr0b2dprDnzPlU8mnR1G6t6UqVKq4wl1SNeUpVJOUnlshi563arVNNhd0VmT3lg53B
	snT1SUf8ODj09SvKNHwYV5KnjGDFb3de2qupRqOM33QMW/i+6jQatqeFzJS2OnplzC70rxmlmjFI
	+e3V5Xu6inXqOcksZZko6jd0KUqVKs4wl1RPhePbt6Xb+08QTqtbRqZM3Ees3FtqVWlTnJRT2wyu
	Ub+5oTc6VVxk+rMdxXqXNR1K0nKT6tlMdzStbupXUY1K0mntuze4qtF7VSrRXWKZUoTlTkpReGu5
	s1tSu7hLxa0pY6ZBi4cRScdGoLO/hI5HC+qSp1ZW1V88au2H2ONW1G6uKahVrSlFLCTNelUnSmp0
	3iS6MhjucR6Y7a9daDapyeyXQsGlUJXPDcY01zSy9il3OoXV1FRr1XNLpk922r31pT8OhcShFdkM
	V27Thir7U6l2pU4ZzubHEup0KNpG1taiklHDwcCeualVg4zupNHPm5VJOUnlsVEPdJp9eoGcbYAj
	QIvEk16gh7I0lX2lKOr8PVIR3lCKjsUivSdCpOk+sdjq6Bq70+vGnLPhzeZI6PEVnZ1qUbqhUhGU
	t2kYs7J4rdgv63Rz2mj6DrOnS1LSoQpp526Hz6xT9uo9/Oi88RXtxaaXCVtUcHt0N3uMSdtLR+Hp
	WNdXFy3CMfU5nE2pQubyHhtYpbbHPqa5qNem4VLqTXoznyk5Nt7t9TPHpV7tKtvrOkwt5TSqQjhI
	51nwtVpXinWco04POX3K3b3Va1lzUZuD+Rtz17UqkeWV1Nr0C47nFeo0ZUFZ0JKUYvOxU1JuSRM5
	zqTc5yy2ee+xYfH0C0dPUuH6ltTlmpypYRWbvh2vaUpTqKSSWdznWuoXVp/YVXD6GWvrN/cwcK1x
	KUX2ZM70kaLwn6l04RuKc7N2s5JPD2KUZre6rW0+ejNxl6oq1373hmuqk6nLJRbbycvTLh6dqcZS
	e0JEz13UqkOSV1Nx9Dnzk5ycpPLY8RfNTsbfXranVoVF4iWWkcJ8K3cW24TwjkW2o3Vp/YVnD6G1
	LiDU5R3u57kxWpf2rta7py2aOvwpfK0v4wqzxB+pxpTr3lfM25yfc7GnaDcVLmE5pwh+80Vlbbuh
	R07Tbi5hJZqeZM+c3NXxbidTOeZ5LPxVqX7GlaU55ShyywVPthGZ61E+uxC2gO247YKtEnJpIu+l
	xlpvD1xVisTaTTKQnh5RtS1O7lRdF1pOm9sGvjONuWvXspN+NNfLJZdBvp6lY1qdbMpKm+pRe+TY
	tr65tM+BVcOZYeDI6WnXL0vVXzPlztgsOqaTQ1mCr21TmnjokUerVnWqc9SXNL1Ni21S8tVihXlB
	fIcp0k9dZ8K3MHzVOdRXc5dOT0/UU4vPhyMk9e1KpFxndTafY0J1JTk5SeW+rNTxqr5Vha8Q6dDF
	ReMt2l1OHLhS6cnmMkvU4lte3FpLmoVHB/I23xBqjWHdzMeJGLUbFWFVUudyfXcuOlW8q/DlxSpr
	mlJLCKLXuKtxPnqycperNm21e+tY8tC4lBeiN/DG/Lhm/nJ/1eaRp32jXVhBSrU5RXqz3/SLVfzc
	zBdare3kVG4rynFdmZhFt4ZUpaK92lhlNupt3NRPdczMlHUru3o+FRrOMPRGo23Jyby2ImEMbuTG
	6baWxDWepOXjHYs9aXPhPexuH/8AGyp3v95l9T1b391bQcaNVwTWGka8pOcsyeWxf6Ih9AmQBViV
	tky2dXwbmFR9pJmIgqVfrijT1/S48k/2ueiMOiaHHSq/tN08KOfiKlbajdWn9hWcPoZK2s6hXg4V
	biUovszNTGzxFfq9vGluovCOP0JbcpZe7DEaAMZ6BLHU0yvXBUVLT5w65ZoXXC1xVv5zSlyyk3k3
	ODpOGmTecSzscK+17U6V7VhG6moqTwS+piw6hcUNK0n2VTTnKPK/kcfhG6pUL2p4kkudYTZwrm6r
	XU+avUc2+7MUKk6U04dV3JFxctd0W8u7x1aEp1IPokb+m2taw0SpC5Tg89GU6Gv6nFcsbmcURX1v
	Ua0PDq3UpphPr3Z3fsWuePnKjNvBa9TsbfiG3p1qVRRqxWXGPcoUpOUuZ7s2bfUru1/sazh9BjTr
	Pha7Tk3Tkku5y6lp7JeRpze6kupnfEOqSTTu54ZoVa9WtU8SpJyl6hM6XzWK1ShoSnCbi0lho09I
	1SjqtB2l2oub2i5dSq1tSu69HwqtaUoehgo1p0KiqU5csl0YiSOprGl1NOuZy5WoSflZYtEvLe/0
	mNlUmozjHYqF1qN1eRUbis5qPTJho16tvLmpScX6orSw1uGLxVmqanKPXmObqmm1bCXLNye3chcQ
	aolhXc8Grc31zdPNeq5v5kiYw0Z4nnou5fnbU9V0OhToz5pQh0R8/Nu21O8tFihWlBfItMdG44au
	LWnKcoySwc6xs/aqvhZfMZK2t6jXhy1LmUo+hqUa9ShU8SnJxl6iGLAuHNQopeB4m++Ud61hUtdI
	r09QqS5mtucqEeINUisK7mYLnVb26WK9eU18wSMN7KHtM/Dw45PdhZu9rxppuKbxlGt3OxoFpUr3
	UXCr4ag02Frc1vhZaZZqvGvKT9Ct+ueqLtxbqlOVorWM1OSxuikt5fQhAAGlF1Llwzf0Ktl7DXkl
	s8ZKae6VWdGfPTliXqEq0z4TqyuXJOXht5ybHE2oUbexp2dGaliHLLHqV3+kGp8vL7VPBoVatSvN
	zqS5m+pmpJ28ZyFu2gOgkbQlk7HDE1HV6bOQtj3RqzoVFUpS5ZLuisWLzxFotfUZ0p04yeF2I0iw
	paFb1qt1PE5LZSKsuINTikldz2MF3qd5eJKvXlNfMiY9atdq71CpVzlSOtwjfK3u3RqS8jjjc4FK
	g6s+WCy/kd7S9BuYVo1qmYRW+6Lgsuq0qWl6PVqU2lKT5v5nzu5qOtUlLrllk4q1P2jloU5eRRSa
	KwuuEZnbUdDRK8aOoUJSeEpbstev6PLVX7Rb5kpPOxRIScJNrqdClreo0aahTuZRiuiNUx71HSKt
	hQTqpxee53eGNQoOylZXE0ud5yys3eo3d4sXFaU18zXhUlTmpQeGu4TFpv8Ahi4nX8S3cpQk85Ry
	9R0i4sYKVXm39TFHX9ThFRjdTSXQwXWp3l2kritKaXqZJHrTbD2+s4czj9Drrh7UrWSVsqmPVFfo
	XFW3nzUpuL9Ub64h1RdLuZosW95ttFnTv5PxP8RQblx9pm4vKyZ7nVLy7WK9eU/qahJGp4yW8HWr
	eH3k8IuteXuzhqjTltJprc53DulUqcXd3E4tR8yTNPibVfbK3hU3+zi9kWsyduG3mTfzAAjQAAAA
	AAAAAAAAAAAAAAAAAAAAAAIJAFTAgkFixAxkE5S+LoSlOuxDw3jBPSSS6Msq0Gn7pd01vycxEVr5
	diOb0Jb/AJBLBqGowyQoupLCM07WdKK5k1klXWHIZDWGSBCJIAokAgQSCD1CPNOMfV4A85zLONie
	jO9qOiey6X4+PRnCk8NIJEALuAqACVsAS9Q2kIpzlgzTtZxipOLSBGAkZ7AAAAaAAGoJIJAAAgAE
	pZeEaiIwRujPWtZ0knJNZMPbcn1TKYIJEAgkE+hnPXr2Mjq1ZxUZT8q7GPO6yQ0k/qWsvdOpOnNS
	g8cu5uXOrXd3RVKpUzFdjR5sbLoFy4+Yni4PCl03Ai33I2zsQSQAUiX0IQXUmMW5YAhdSTPVtpQh
	lxaNfoVYEkAnH0oSAOXqVBO2EQTkqvdKtVoTUqcsM6c+JNSVPwvG8uOmDkyxkl8qksdSVHqpVnXk
	51XmR4Xl39SMvm3C+LfojKpBD+LPYGxJBIIAACABBaJABFQABUqQCBPBIzkDKwIIxkYJpwc5bGWr
	bzpx5pJoQYgAIoABfQAIAkgA1EgSQSZqhAPdGm6ssJZEK85w9g8mSrQlRfmWPqY289AjetNVurOm
	6dOphM1K1SVWcqlR5beTxs35g9n5eg+kNmtthzY6B42ySk3Jcvd4Cm7XXcjGFv1OtDh27nae0pLl
	OTKLU2pdU8EZgACtAIJBEEggFiQQSUiCQCUAAAAAoAALh9DYt76tapqnLDawa/0CypczKzWSdWdS
	bnWeZMx5a2DSluwm8bkWAAAAAAOwI7gEO5OG5JGd20vD5uV49QMAIxjqSBBLXTBBKSl/ADLQrzta
	iqUniXqdKpxNqdSnySreX6HI8pCyX1Mx7lUnUm5TeWzxFebJOck5xsZ8VC6sBrG/qQVUggFRJBIM
	qAEGk5eJHbPcD5ik8bS1O59nVJTxHGDWw5LPfuFnv0ITeXjoZQ27AjbsSVQAAAAAAAAAAAAAAAAE
	EgAAAAAAAACCQX4p9CYxlOSglu3ggz2D/r1JYz5kOLFdGhwzqVWkp06OU/meLnhzUbak6lajiC75
	LZrt7UsdKhKk3HddDm6Hrsry6VC5XPF/vGfpKqMo8r5am2C/QfPwu4roqXU4HFVhG0uYShHaa5sF
	lsred3w9GlTjvKnjYjPKvn9C2qV6ip0lzPJs3uk3dmuavDliWelbW3D9oqlXlnWksNS7FY1PU6l/
	WblJqHpkrfHxsaNo15eVFWo01KCeHuWrX9EuLm2oxt6MeaMMPHqVHSb+tbVY06NWWG+iZbOJL+vb
	2lvKE5RbppvDF8Yn9KtccPX9rTdWtTSjHd7nNjDnmlT3lJ4wbVfVbuvFxnVm4vrlm7w14LvV4qWM
	rGRG68U+GNVrQU6dBNP5mO90K+s6Tq16fLj5lo4glqFOtzWMZ+DhYcXsVm+1W6nSdG5Usv1ZazHK
	km3lrGAS085TymQxG4dj3bf29P8AzI8GS2/t6f8AmRUr6BqtlWvtDUKEeZtL/QqdfhnU6UHVnRWI
	/Mt+pX87TQ1JLlaS/wBDg6RxFVr38KVdZpt75ZmsRWZwlGfLNYkuxurRb12qu40803vk6/F9jTpT
	p16KSVR52Olw3c+2aTUtWs8lN4E8atUdw5mn3zjBvVdHvKdp7TKniku56haVKepKlyZ83/ksnFla
	NGwhawfLmCeEF1XNJ0i7v5OVGCcYvD3Lhq2iV62lW9GjRj4kY4kUvT9Qr281GlOUU+uGXLWb6vS0
	a1nCclKUN3kt8ZVa44b1C2pOdSkkl8zk8reIr489Deraxd1I+HOrNr5s6HC1gry/cpRysZwFrUt+
	H9RuoqdOimeL3Q7+yhzVqWI92WvV/etOso2VpLkS6xNnS6V7eWdSlqNs4t7JyIj508ZS7s6VnoOo
	XcFK3pc0X6nqtRp22uSpyS5FPG5cbuNeGlUp6dBvP7pTkqcuF9UgnKdFKKWepyJ0qkajjJYaeDt1
	dU1KhKULnnjt0bOJVk6knJPLbIseZ45lnYdPoTty77s89f4BpKSXw7s7Wi6NdXVWFaNNOOTiLL6I
	6+jalcUK8KMZSSyu5ueMVZuI9EubqMPZaMcqCXoVa60G/s6Mp3FJRS+ZZ+KtRr2tOHh1JRbgnsyo
	3Wq3VenyTqSkmu7Oc9Vr29vUuKipQWZN4R1o8L6s15aCa+py7R1o1oSpJuedkix0nr02pxpVeX6m
	qa4d5pV1YScbiHKkaSz0S2Pod7QqXOgqV1S5aud2+pRaMIxvOV7rmMrrbt+HtQrxjOlSzF77mWpw
	tqcFzzopJb9SzaxezsdMo+DHDdNPYq0+IL2UGpSlh/M0kc2vQnQquFRYaNqy0i7v/wCwp5RFnF3l
	/DmfNzSWUW/WbyGh2UaVCEfE23RVt3pXXwtq0FnwFj6nKubSrazcaqxLuW3hzWK95qcYVJNxaezZ
	zOJ4Z1FKKy23sZ+pK49nZVryXLbx5pHS/ovqvK5SoJRSz1LRY2VSy0mFW2tVUq1IZ+jNG3nrvtSl
	O2qcknvFvZIM6qNa3lb1HGaakux0dG0e81CarUqadNPDO/xdYKNmrhUlGbe6SK5pd/XoVFThUlTj
	nomGr4tvEGiV7m2oK2ox5oQxLG25VLvh+/tYc9akkvqWriXUK1vY28qc5Jumm2mU6tq91WhyzqSk
	vmwcfGm8J8r6nnDj1Jb5nl7Mj+ORGkgAoAAAAAAAAAAAAABBJARmt7arcz5KUctnVjwpqcocyo/9
	zJwjFT1PGM4j0OpxNrFxZ3kYU8xXL0TFrOq5eaReWK/b08R7s0Y8qzuXrSL2Gt2U6FxBKb2TfUqO
	oW6tdRqUksqMsEjT3a6JfXcFUoUuaMja/opquOZ0V/MslOv7Lw1QqU1iTT6FYlxBdttOpNL6lo59
	xa1rap4VaPKe7LTrm+qclGGd8HmU53lZOpJ5bLtWnR0XSYTpwi6koKWe4+IrNXhnVKcHKVFcsfmc
	qpRnTlyTWGix6ZxLXqX0YVYuUJyw02ZuLrClCEbuk1FVH0RmDnaLo15dclanSTp56li4j0K4uow9
	moxyoJPGxWdFv69GrCnCrLlytkyx8VajXoRpunUlHyLozXJPqsXmg31nDmq00v4nMec4a3RvXOqX
	FxT5Z1ZS+rNFJrd7kbR2GGwt85GWkUe1vtDdnRtuH9SuqfPRopr6mfhiwjdajBT3XU6+vay7OcaF
	p5eVYfKKyr97ol3YQU68MHPhHnmlDdsu+hanHVqNS3uoJyxhNlev7RWmvKlBeVTQTShw1qNxBThS
	8r+Z4ueH9RtYuVSjhItuv3s7HSYSoNrdbo5uh69K7uo29eCmpd5GdWVUXBxk4v4iy8O6FdyuKNxK
	knTbyYeK9Pha3MKkPLzrOEeuG9SuHeUaXiS5FLGMmoldPiTh68uryc7WiuVvtsVm90a+0+lz16aj
	HPqWLinU7m3vpxpVJJJ9EysXeoXF5D9rUlj0bM1Y1QAajYbum6bdX9XFvBScdzSNi0va1pNujOUW
	+uGVmrlGGt22mOh7LBxSe5SK3ieNPnilLLyi/wCh3FW60WVSpVk5YfV/IoNzmVzUefxM5z1l5pUp
	1qipwWZSOtT4Y1WUVKNBOL+Zh0HD1ShFrOWWnifUqthSoKjJr6M6XxVYuuHtQtIeJWpYX1OX5vha
	3L1oGoy1ajWpV1nlg2slT1akqF1JJHP6saPNhjGP4jCksg6KAAgAAAAAAAAAAAAABBJ7o0/FqqPq
	ypWxa6ZdXzSt4cxuVuG9Tp0+arRSivRlnrSpaJpEHBLxJwTRx9M4jrVLxQrx5oSeMNkrOq5OnKlL
	kkvMjcoaPd3Fv48afk9TucWWFKFOF3SSXiS6I39BWeHsvrv/AKGY1eSjcsoN08ebODer6Pd29GFW
	dPEZLOTXm83M3j8f/kuvEDj7ioJPDdJGr4nG9qlpmmXOoVn7PDmcHuXS70SvU0OjRjRj40epR7G9
	rWdT9nJx5urT6l1vb6vHhu3rRnLnfV5G9M31VrjhvUqMHOpSSX1OVOPhycZdTerazd1U4yqTa+po
	Tm6ksy6mY6/Hnla37EkY+eSUaQAAAAAAAAAAAAAAABBKUpeWK6kG3pqpe203Vkks9ys1s2ugX91T
	UqdLKfTcy1eGNUo03KVFKKWW8lr1Px1p1CWnQcsLdxKxX1bUKUZQr86ysYbM1JXEalSm00bdjpdx
	fTXgQ5kYreLuLqMZLq0Xa+r09BsI06NOLqSipZ7lW3tWa/DepW9NzlR8q+ZynTnSlKM1hlp0fiKr
	Wvo0biHNGb6NmPi2wp0J068MJVXnCBK5FLRrutaK4jDyYzk0YwlOfJjzZwXvTtuGI4X4GUmhj2uP
	m35//JP/ABdZ7zSLyypqpWp4i1nJq0KM7mrGnSWZPsXTiv8A3bT3/Av9Dg8LQT1ainHO44puPFPh
	jVKnw0Vj6nm44e1G1pudaklH6nc4i1ivaXMqdLMUnjZnAudauq1JRqTk0/Vk1quak/45wdGz0K9v
	IZpU8s2eG9PjfX2+8Usnb1zW42DVvbU4xwviiWs7rhVeGdVpx5p0Eor5nJqU50akqcl5uh1anEF1
	JcrqSee2TX06j7bqcPEe8pdBAsdFu72P7CHNLvkz1uHNSt6bnVopJfMtuo0720to0bC0bktnKPUw
	6NHVVNwvLecoNfiFSVQ1GWJJrdPB5We53uK7FWd6lTWOZZaRwf4iNpABQAAAgkF+KJZNiw2vqS/x
	I1vobFi+W8ovu5ocXPkunFNKdTSIcsW90V7huxrz1KGYSivUuWqX9vZ6VTdzTc1lbI4lTinT6NJu
	0t5wqepj6Rg4zqxnVoRjLLhDDO9pt47LQYVks8sMtHz+8uql1WlVlLbOcHdp8RUI6PK1dOTk4YyV
	LHYrStuI7Lmi4wqpZafVlLvrOdnXlSqQaS7s96de1bKvGtSliOd18jra1rNjqNBNUpeL3Yajh2OI
	3EZdNy5cTUKlfTreUE2vDW5ScuFVNdOparHiqgrT2e9pyqLGFgt8STtV/AqxUsweETbuspp0E8r0
	LBqOs6XVtpU7e3lCTWMs5Wk3tGyrOdaLlF9kSLXTs9evLbEbmE6kenKzs3Vpa6rpMrlWyozXqaT1
	7Q6iUpWU+YwalxLRnZujaQlCL7MVIrVWDp1Jwz0eEYz1KoqknJp8z7kCNHY92/8Ab0/8yPBMJcs4
	y9Hk0VfNfjKXD+yctl/oVjQbGtV1Cn+yly564O1bcU2Psit7ujOotuglxRYUKcnZW86ciViPPGNW
	Hg29GLTcNmjmcM3ztbxxb2qeXBzb29q31edWb6vJ4t1ONWnOmnzZEWr69JzrMq6X7JQznsVjii7V
	zfJxe0Vy4LVHUqlvw8qlaX7R7Hz65n4tecnvltkWItWo14trb0LprdGpcaHbSop4hDdIo9NvLaeG
	i06TxPRpWzt7uEpxSwX0Vt0KrjzOmyzcEXEY3UqcnyvleGY77W9KnScKFrOLa6nAoXk7W58WjmKy
	CrRrN9q1neOMJ1HTe+V0OZ7+1XDbqVMI6dLiqzqwjG8pSntgwXuuaRO2nToWs4yl3IYrlWpVuK8q
	jbc5POTp2OqanYxUZSqOkuiOZTrKncqp+DOcFmpcQaR7PCFxaTk13KnKOjptxba4pU61pifK3zsq
	Gq2qsruUYvKy9iw/0l022g1ZW86cmsZKvd3Mrqu6tR5IsYMcycugeEvqEm4t52IwGkpYWUzb02Sj
	cU5y6uSNMyU5ck4y9Hk3KlXDi6jUq0ac4wco8i3X0KfKjUxzODSRa7Xiu0dmqN7RnUS22NLVNX02
	vayhbW8oOS7mMRn4OtKVeVWpUipOnul6mXV9avbe/nToqdOCeyOHpGqz02spJvkb3SO/V1/SLh+J
	c205y6jkjp0LurdcOKpWT5m31KLHa9ef3v8AyWW84osZ2Hs1rQnBfMq8KqVx409456EnpVv4qytN
	tsPH7JFKy8bvJYNa1uje21GlGEvLDBX8pvCWDU9anjoaLONO/pNvGZIsfGFrUrPxoRc4tLdFOhKV
	KqpLqnlFrsOI4q2VO+pTqRXbArM/pq8H29aOsQlODUcPcjiSXJqkZdMNlj0TUrK5r4t7WdPru0Vf
	iqanePDy8vBL6LVVr3E9Coys6jUow3USrz1zVqeIuVXm7nnRuIalhDw6rcodMI6j4i0Wp552k3P1
	DLg6jqd9cUvDr1J467mnZNOvFy65NzWb63u6rnb03CL7M5sU4eeLSaEbvi78T0p1tLoSpwbUaSy0
	UrwasY5cHgtFhxTbxsnb3lOVSOMbGDUNY0qvbuFvbSi8dxVnit/VEY7olvOWugzmnsIoACgAAAAA
	AAAAAAAAEEkBFg4PytTbS35TLxfbVpahGeG1ymLg/m96bPblLJresabbXMaV3byqSx1RK5xzuD7a
	dKlOvWg4KL7nA1iqp6vWknzRcjrajxRRlbSoWUJU1JdCsupKVTnn1fUn1ueLtd4fC1vjbqUaSzJp
	vJYq2u0JaNStHCTlArzw3zrbJb61PGW0mqdePNusl04gt5XmlUZ0N1GmspFFeVun5iw6PxI7Wn4N
	2pTpvsi/GfHO0uxuKt/SjGnKOJbvBZOLakKenUbZtOcHueZ8TaZQjKVrbzjUl3KzqOo1b+4lUqtv
	JIjzpq/rkGnhZRaOLqM6lGnUpwcoqCy0VClKVOalB4w8lrtOKLSVn4N7TlUitsIvI8VSdvViuZwa
	R4aeOpY9W1fTq9u429CUNu5XHlvK6EbMZXXoM80cYGUEUWLg6rGnqcOaSSwzxxLY1oX3ixg3GTbO
	JbXE7WupxfQtdvxNZ1aMYX9KVVpYWBWa8cI2lWFSpXqQcYrfc0tXqqrxI5xezmjbvuKKXgOjYwlT
	i1jcr9rOVS/pTm8tzQZ+LjxRTnPRYuEG1lbIr3DljXqanCShKMV3wXPUNQtbTTo+1UpTht0OE+KL
	CjF+xW84P1MfVYeNasXWt4KSk4xwzl8OSS1SltjzI0b26neV5VZS7nmzrztbiNWMujya4rix8YW9
	WV5KpCDcZPqVmdKdNeeD5fUt0eKrCvbxheW86jj6HJ1jVbC8peHa0JQ37hY4gAKoI7t+qAWVuu4T
	6vXC7VXR3TjtLD2/gU+6tayuai8NrzM39A1uOmVP2qbjjGx1briDSa0HL2WfiPuZT64nD2ffFGLW
	/MdrjWL5aHplnBtL2nbarC5UXyKWcG7r+sU9UVONOLjy+pq+EbvBL/b3CX7hyuI2lqMooy8P6tR0
	upV8SDblHGUaeqXdO8vJVIRaz6mbO1jRax0JITfPuTtnY0oABAABQABAAAAAAAAAM1pJQuItvG5h
	GH2BV61+3lfaTRq0t+SmuhVdKsrirf04qnLaW7wdHSOJPZqfgXSlOn0wjoviXTaClK0oShOXcVnH
	viypClplChlc8ZbmXhlqro7pLd4e38CpanqNW/uJTqNtPobGi6zPTauW3y9MIiWY169tWp30oypy
	WZt/9y3cRR5dDo5W6pI1pcRaPVxOtazlU9TS17iOhqNuqVCnKMYxxhjl4cZ2rtH44uRd7mnKvwtb
	qnFtrLeCi+bCw8YLLo/EsLO1VC5jKcMYwh8XO1elQqpvyPGTx9UWm61vSKlFxpWk4yfcq9WaqVJO
	CajknFq14x6EoR+GRBoSAAAAAAAAAAAAAAAoHqmm5rli5S7YPJms6yoV41XuohLHVsdX1CzXLPxP
	DX4SxWUrbXLaanack4xzzM59LXdInSSuLaUpYJnxNZUKMoWdGdPKwZrMcZ042GrqLaksr/UsfFVt
	O7tKdxQzJKCWF9Cm3FxK5reI35s5yd7S+JfAoqhdKVSHoijQ0OxuKuo08wls+uOh2+MatNULak2p
	Sp7MT4o0+gm7ShOFR75+ZWr+8qX1edWpPPM8olFx0f8Ab8PKMHlqD8qKhC3qRvoxlScXz/8Ak29D
	1yemycZczp4xhHY/pJo1SfPOzqOfqL6NjiuLdjTWcfs1/ocPhN/7Yor/ABGXX9ep6jDw6MZRWMLJ
	ztD1Clp97CtUg5crzsOCcm/xdn3hP/McGPTEnzL0OlrWo09RupVYRaWc7nM6SyujMz115eLJwZXj
	DUHHKinFo88VadXhe+JCMpQazlI4VvWq21dVaEuUtFtxTbzoKF9TlVx6G+TnxVX2eq9/DawdHQKi
	p6pR8RYxLqzs1dd0WVNqFpNMrdxcxnd+JbpwSedxFXbiO7v6E/GtJzcG9uUrr13Vn0qVDcsOKIUq
	Ko3sZVYJbJGWpr2jeG+S0mpPuSpit6he3F1VVSvNykljc1fmZ7yrSr1nOmsL0MGc9hGgAFUAAAAF
	+EQZ7Wp4VenUl8EZZMIbxsug4pYs2ua3Z6hp8aNHm50+5WcSzjuHFY67hfD8zP1ZOkYk3h9BlJ4R
	K2XzIST3ZTEpPL9CElnCBOE+rAN8r+YalFZeBH5hLMupDBJNZkQuX5k8z5uXGxMvL0RqJXnOXnsQ
	t5fI9NZWUbNGyr1qfiwhmK7kpGtzb4iN+4cXGTUtmiMiNJIJawl8w9iiFHG5KeE0yMb5/CSsuLwi
	MYmDXMm/hXUs1hfaDQtoSqxqeMvkVjphrqTJ53fX0LFrs6zrSvl4VF4orocXz9VgddnsGsLCZj6u
	IklFZC5Gts5J+HfqhJN4eDSCeI4Y82cdgl3Q25twphYyRnKwyVnlaIzhDAaWxMpJxSCeVuQmsgqU
	nJYj/wBxnHln/wBic4e+xHw79QhlJ4j0AfTfq+hGfUVUgZQaxHPYkDrHYjPMifxfISfI/LuixBeZ
	fQNYxzBpNZzhsPaOO4oNrn8vQLGPmE2o9NyIpPd9Qsj0ubqyHnOQuuBsm8ge6LSrRlPonuWmhqGg
	yopXEanMvRFT+nQfi+RWbFwqcR6ZZ03DT1JP5oq11WqXNeVWbzzPJgzv02GNupn61xnSOktxLdkr
	puR3CZ2nG+ERy5e5KeHnuQ/M99hFviXtsEttiOnzHUUniebEcMRTa2IW3zJbb+RYAAAAAAAAAAAA
	AAAABBIA6mgX9LT7zxa2eXGNj1xFqFDUL2NW2zhRxucnC7sJvl+YrMg/jTj1DzJ79UH/ANyOvXYk
	jSU30DWHh9AvTsElFZW7KRGN8olty6jPYheV7blDCxt2JbzFBvm67DPbsZnqYYcZYRDjFbb5JSS3
	zuM83xbF5CH6MltYwiOjHVsKnGEmHtuQkTL5AG8oJbrA7DOVgIeZPfoZbWcaVzCrP4VJMxJ4WOw+
	HpuUxZtd16zv9NjQpc2U+6KzBygmljDI6v5B5M4SGMSyxsv4kp4XzHz7lUUnHoRvF8zJznrsF8+h
	AABQ+gSecS7AhZy2SeiW4yEcdQniPQjG5QjjO3UmS7sOW2Ehyr1ZAxJpPbBLclusEY+ZGNupoSs8
	2ZEZTZOXkCgACQAAUAAQAAAAAAAACG2uhIzgBnbcjEWtshdcslybeMbASspENpx26jlXqxhJbA9O
	V5WRH4srsHu8tgUQ05SyS2w3lehHw9Ny/E+pjl7kqTS3Ie79COhmHJMVnOB0GWCtfAABAAAAAAAA
	AAACCQAGG3jsQTtgLUNJPBOU9kQm0etn9QmI279RiUPMhhNYYz27Aw2kuZ9UeWktz0FjfIph58ZW
	MB5a26kD8QTDdrLJ6LbuPkNsfMcejNMepHyXQnshlroMaTvjCIjFLb8Qxzbt4YzsKzmITfNhjdMm
	OxC3e4ipai33yJZ/gO4az1FESilvEnOSFsEIJAAAAAAAAAAAAAAAAAAAjfsSE/NgA2sfMKPl5nLq
	HhSaZ1dC0t6hcYb8kdypXKi/P5tkXXQKMJ8OVZ4TfMZbj3PprVCtbU6s13OmnbVNCqexwjSjnoiW
	9M72+bXWPaqi/wAT2Ma3TTWDejau81CVGCxJyayWWNlp2j0IO7jCvOS3T7Elat1TFsvU9Zi6Si9m
	XelQ0vVqM429CnSnGOSo31k7S88Ka7lNaj64Tyg1mOz3Lrp2kWljpvtdzTjWS7M8LU9Fk3H3fCPz
	yE1TUkl13fU2tMt1cXkabezaQ1B0ZXc5UoqMG9kixcOX+nwVKlO0i6ucc5ZS9OdxJplPT6+Kc87I
	4j367H0bX73T7eti5tY1ZYXUq2sahp9xScbezjTl6oz9XenHtHGFxDxccvzLdqE9JlpEFCVNVeXo
	l3ONol/Y0IyjeWiqvOzfYs2oW+n19HlWoWkYvkymuwtZ18/b8ziuxG6XQ9N7tcu/qdXhuzhd3vLV
	SksZwzUXXJ2SzkhSWdy/370ewqxpVLOm3jqa+o6VY6hplS5sqUKfIuiJq6pLz1S2EpJpdvme3F05
	Si91EsemX2lU7GmriyhOfdseparLxFbPm+ZGEt2y+W1tper0pRt6FOlNJvBTr639lu3CcdkyasbO
	g2MdQvoU6ksJsa3Zqyu508bJ4TLPw1fWFWrSp07WMavTnMutajptK5lG4tI1JRe7ZeVZnqgRaz6m
	3p3h+1x9owqee5t6xe2NdRdraqlv2NzSL/T6dCEbmzjVm3jLHxrk3OIp6ZLT17I6fPhfCiowTzv0
	LvxLZ2cdJdehQjDZdCkYe7yZiSpw8vbYiL5W8756HX0HSZalXy5Ypwe+Sx1XotlU9nqW9OcovHMa
	tNUXLUsND/sXHV9Ft7iz9rsuXf8ADE4WiWcbnU40aqWO6ZNWVy0lyt5ISSa5mX++jpGm8lOrZwk5
	LqY7jS9P1OwnVtKcKbhHOENTVFa8zx0BkuKToVXTfYxFaxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	Q9lldSQs8xRCWcORc+DlFUrhrr4bwU3OZHc4a1ONldTjN+WSwT4zWjrE6k7+Tq5znuWvQW/6NVG9
	/ML/AEWhrE/Hoygk/WSRuUreGk6JUoSnBtvOzyT4z9cDh2Mff8c95s7WtVtHjcSV1aylJPrkqFnf
	uy1fx09lJstlxQs9eoKpCSVXGXl43M50v1r2WraJZyc6FrKMn3yV/X9Qp32pOtSTUdsI61XhV0qL
	lOpDCWdpFarU6dK58N7rJqFWfSuILadg7S+pynFsy19AtNQp89lOFNvs3ua1vw5C6t1OjOCl85HR
	0zR56bcRrV6sHGL6KYqRT72ynZ15UqvWLwmZ9EX+0Ked/Mjb4nvKN3d4pdIvc5unXKt72k18Kkhx
	a5LBxqv6xldcLcqsU8bs+g6lZW+t0I1KU4qTx1ZXNY0ONhQc+aLkvRkvpfHAT656H0Cl/wDy7cf/
	AGigZUZJF70K5heaZK2lKK8uN2LGaojcm92d/hDPvN4/dNnUOHIW1OVVyg1jbEjW4SxT1WW6S5e7
	N8VqeMv95R/ynW4Tlz6Pcxk/LnocjjCUZ6hF5T8vY6fCc6a0m5U5JPO2Wc/hVcrW8rjV50KflUp4
	3LPHRtN0y0hK/gqkvRMrntUaGueLL4YTzsWy+taGvWsK1Kok5b4csGuKVk0KrpU68vYaDp1OV7tl
	W4qx7yxjsWXQ9FlplxKtVq08crW0ir8SVYT1PmTykiX1riz8ILGqU9+554qX+0am34jW4euoWmp0
	6s88qZa9U0ajqko3FKcFz77yLyTj6oHy6GShlXMF25kdTWdLhYpLKbz2ZyaVRRqRk+zL8a5Lzr+f
	6PdNsIoz+Fl/tKlPWdFdvKUU9lu8HC1PQYWFCcuaLfVYkZkYnjpcKJR0q7lD4+QqmoylO7m6ueY6
	3DGqwtKs6NV+Spsdi84etr+u7inOChJ53kW+rOk8HylPTZRqfAoyx/I42g4fELz+9L/U7V5e22i6
	b7Lbv9oV/h2pGetxnUeM5YJG7xp/eaOP3Ta4Mm/ZbuMt047GnxlNSuKLhJNKPZmzwdJK3uuaUVld
	2Q/4r+srl1GovmaJva009Sq4edzQK6VJBIKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA37AgCcNLJEfXL
	TJIfXIqMyuK8Y7Vpr6SIlc1pR81ab+rMb3I7YBj05Zj5j1CtUhHFOrNfRnh7oenyBYyq4uKiw61T
	/qMfNLOOr9WQ3npsG8r/AMhWSFxXh8NWaXykS7q4msutUa/zGJfDghbBMS3zPOW33yE8N/IdAupR
	lhcVlDCqzj9GeZ3FSptOpKX1Z4e/yH8DOKJ83U9QqVKUswqSivkzz2GdjSYySua8m/2s5L0bPNOc
	4zcuZxfyZ4JIY9c8nU5pScv8zFOtODfLOUc9kzyyW1jGBiplNt5e+erJjXrR2p1ZqK9GeB3CYzSu
	676V6n/UYpOc95PL+ZAJiwUpx+FbmX2m4SxKtOK7JSMXcPfqW9pnb251Km8pykvmzxGWJdA3lYWw
	7YC8u3uFarT+CpOK+TJq1600lKpOS+bMT3JyIkiXJ+XG2O6MkLm45sRrTwv8RiH02FXHurWq1pZl
	Jv6s8wc4bxbUvkQtiHn1BHudWU8OpJtr1YhUnD4Kko564Z5C2BiZScpbvPzZAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
	AAAAAAAAAAAAAAAAA/EN091sABCeW8IPsBIHxT22Qa36k0AAUAQSgQAW3zITecOIL0kCW3zIx3Ak
	AAAAAAAABLLz0Ia36gSA+iwsh9E28AAGtttxjPfBQBD2aa3SJk02uxIQAaXN1GPTcsKAlYi99yO+
	2+RnagGezWBjC9SIAAXogCUk03k8539QJAWHJ9gum240oAAAATw8tdQAD3eF/MYx8wAAAAAAAE8P
	pkACPxdSWsPqVNAO+A1h+pKt6ARltdMAHxIACgIBUSCAQSAAAAAABbvCAAfDsx0WcBcAPi/wjmSe
	EshADOOqI3W7WwEgddxn5AAGsb56jCa6gAR0WGGtttwJBGcrpuSllb7AgCM8u3Ulev8A2AANd0E/
	VYKAI7h79CCQJtYx3GNgACXzAADo/kQ8c2V0KJBGBu+xBIGOboHjGO4QBH1JWy3CgIXdvb0C3AkE
	Y5erDXL1CJAaaaeMiW+OwUBGewAkEEhQABAEEgAQO6LgkESeZYR6ceXuSdrekAYz0eRH0YQAewLQ
	AIZBIIxtkZywJBHfqSNAEACQAAAAAAjp3KJBGfkS3jsQAML1IW7wUSA8rbAw2vQgAbJjOewABbkP
	rswJAz8sApAEE4+ZEtwAa+ZGfkFSCCROwAHXboFgA9vmRHffoL0k9SAQBIIJAAEYyBIC3iyI7prO
	4EgLKWGgnl+gvQAR8st90MbiAAAAAAY3zkPmfV5R6pU5V6qpxWWy2WXDNvSt1WvccuM4yKkqoJ8v
	RdT3GLqzjCKw28FvqafoUoNUlJTXTLK/4cKOrwhDopoRLekXulVbO3VWXRnOxjr1LzxXCctIhyQb
	3XRFKnRqJ5dOa/gZ+rvTGSCYwnP4Yyl9EaX4hEfE8IyeBVXWlP8A6WeOVxljGH8yJxSovPLHd/Iy
	1LavTp804SSfdo92ClTuo1J05SivRZLPrOp2lbTowhRnGSjjLjgt8S+qdnC3JfRMnZScn0YcZVMO
	Cb+gV5BldCq+lKf/AEs8Spzj8UZL6olNQACqAExi5yUV1bwEeX1wMrlflLbpvDtCnZ+0al0+TNmn
	pOjXqdK0TU+m7BqlR5sbPYYTbUtzf1DTZ2F46c15M4OxcaNZ0tEpXSi+aZBV11xHoO3zPcIxdVJf
	C3gs97olpQ0R3UIvxVjcurb8VbOGttu4ysvK+hYNKjos6EleRm5/I71tomhXNvKrThPlgsvckZ3F
	CXKlutyEnFYTLXdUuHacJqMKnPjbc5Wi2FG/1Nww/DwWHKuSsL4tyG+XdbF3vdL4esqsadeFTnaz
	szDc8P2N1Zzq2C6Luyb2n6VDdrMnkheZ4W2Dp6bp8JanC2uU2ubGxn4l023065lGimlnAvrUri4w
	/mI9MPqdHQ7Sld3nh1U3HBu67p1rp+pU4RT5HHLLyJXBykmms5ClFfhZbba34dqeGpwqeI16nQvt
	F0K0o061SE+WSytys72oW3VrqMOO6Z3NZWjqhH2KM1LPc4eFy5l0MT10oCCTUQM9rbTu58lOLbMM
	VzSSLpotpR0vT/bqyw5x8v1FRWb7S6tjHFRrJoPZ4R0NW1StqNxKUmuU58Yt7JNsKA9+BW/9qf8A
	0siVOcfihJfVBNeASeo05y+GEn9EDXkLPb+R7dGrHrTmvqjzDaa/eBrLGxuZpTjQqNPpiJFW3q0V
	mrSlFP1RZNG4juPFo2vk5U8fCbfGjUrOk8JPm3wicriX1S38OV1CUmsJZZHTc2rFShWjUlTlKC9F
	ks7Xl4x1La4hBSnCSjjq0YS461qVrW0uNOnRnGfIllxKeZ3vFniASeo0qkvhhJ/RGjXkHt0aq605
	r/8AJ5UZN4SbfoNR5JJlCUPii19UIxlJ4im/ogagEyjKLxKLT+aICgAKAxtzR2M9jb+0XVOnjKck
	mXW44VsFbuNJPxFHm6/IlZ3tQ8+XzdScPbzI91qfh3EoTWybRm07T5X11GnSTw2Rdar267kLHVLB
	dHoOl2FJO/3k+0Wat9pulStfEs8rvuykVbPN9SUnLZsyUqDrVvDprzZLVa8NWttbKtqGMeie5E1U
	Hyx2Ci5d9i3T07QasH7OpKa9WVupQpx1DwvwOWNgutXK+FrOCMqT2WC8R0TRrXTaVxcwnmfozU8L
	hnDxCpn6hNVJLml5gtpbPY39SjZuty2yaXzLNZaBpdPTfaLuEn5U9mWm9qWviIfxbvJdKWm6Ddfs
	7eMlN7LLOHrWjvTayyvJkhK4+d+jJw5S8uxZdNhoVS3XtMJufyOytD0P2GVzyT8NP1Kb2oMcqMt9
	0G5YWXkst9T0CFrU8CFRVO2WVueM+X4ewjTzlY6DDzlHrd/F07EbuOwEbJ5luSt+myPUIxlUUZ9y
	5w0TSKNlTq3cJZlFPZj4zvalZS7ZIyn2LXVjw7GnJUoVOZepXK1OFW8cLf4c7ZIusDXbsQ0uTYtt
	noNpSslcagvK/Rmalo2j3ycbGMlP/EyinY8uz3I8y6s29TsXZXfhz6ZO3pWi2krfx7ySdNrKSluB
	Wfh6EJLOWXeho2h33NC1UlNL8TK3rWlvT7lwkvKBzsZjvvI85wsSTb7GxaWVW6rxhRW7LdY8KU/Z
	ZVL3DkunKyCk8y/Etidms9uxsX9GNG9q0o/BF4R1OGdMt9QrVYV02oxysFHC7ZluSvNHme7Olqlj
	G31R21NPlO1baDaW2mSubxeZdshIqi5n3PPV7ma68Hx5Khnlz3MS5f4hseM4SIJ7EBEg9qjVayqc
	3/AOjVS3pzX8AmvBBJMYSl8MW/ogIB78Ct/7U/8ApZ4acXumvqKsQTnAxk9qlUkninN/wNfE+vDS
	6m1YWc7658OPoa8qNVRWacl9Ud3hDbVGn+6Y4nKuXqNhPT7hRl3WTTe+5YuMX/tKC7chwFCck+WE
	n9ESVY8rdAYcdmtz1GnOXwwk/ojSWvBKWXhnt0asVl05r6o8CGkFzZillhrl2kmmdrh3T1Xv6aqU
	5crfXA4hsVQvJQp0ptZ7IEripLGSD1KnKHxRlH6oRjKTxFNv5IgggyeBV/8Aan/0s8yhKHxRcfqi
	qgAAAAUCEsPLJIe4BvfYnGerCT2SOxpOgV79xk8KL9diI46wnkRi+bOS2cQcP2mnWHiU0+ZJZ3Kn
	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
	1CzTU1OVP17Csxymop/Flog9Sw98Ya6nkR0SZLb+3p/5kY+x7tv7en/mRYzX0m7saV5o0Y15unFp
	b/wOFU4VsalNq2u5VKvZG/rlapR0DMZN7L/Qq+h39xDU6cnOTWehI5ytO9sqljXdOtFrDwmztUeG
	qVxpEbyFaXPyuTijb4zpQlRt6+MSnuz1wjdeLb17actvDaSLPG7VSjTdSahjzc2Du3/D9K00v2qp
	VlGptiJj91yjrPhrbDzj+J0uMbpJU7b/AALYymuVoWn2NfM7u6dJp7L1Llqen2NbTaEKty4Uox2l
	6o+c2speKkv5Fx16bjotmnLlzDoa5eK5l5o+kUrdyo3znLGywcG3tqlzW9npRy89THOpPmxl4LPw
	ZaxrXjnLHw9STxKmjwtawgvbLmVKTWcHi/4XowtpVrOtKsoo6ur6ZSvbjm96xp4WOU2NJt7XT6M6
	dXUoV1J9GRdfPlRqTrqio+ZPGCy2fC9CdvGre15UcnKvK1OjrlSpTacFPOxbZztdY0ulCF5GlUXY
	sK5U+HtJjGUoX8pSS6YKvWpwp1JJTyk+p3LvRb60lJ0pTrQ/eSOFOLc3GSw8hY8t7prcPZ59ewzh
	cuMEeuQr1nOOxZOHtOsaqhUq3LjPPQrMd+rN7S5TV7CMZPlyjc8Zq969p1hdRj7TdOklFJNFV1HS
	dMtbaUre9dWWOjOnxlOUadNRf4EU+pObSTZzgzWNCnWuY06k+WEnjJZI8O6Q2k9Rkn6YOBp9hWva
	0YUsrfquxY48NxpteNqShNdmao0NX4cVlB17ecqlLomcGnTc58seucYPo1a2UNA8PxvGSb8xQabU
	b7Zfi/8AJJ6LHQ4Ut3bwrXNxKllZIrcPaTCk5Qv5Skl0wbnElSdPTKCjNxzTRTPGq4/tWx9JPr3c
	0YQuXToS8TfCO5pvDPj0lWu5SpQfc5WkQVe/pqXXmWSy8W3lS2pq3oScUsPYvxb3XiPCem1ny0b6
	UqnpgruraerGv4Sk2+x1eELipU1iClNvZnjiWHiapGPRtvcn1nxr6ToNbUE3Vi6dOP4kdWPC2lyz
	CGoSlVX4cHbVnD3LQgrpW7lDeXqcqholCnWjVWsRbTy36k3tlXNV0ytp9RxlTfJ2kze4f0/T68VU
	u7t0qie0TscV1LWtpyjC4jOafVFRspyhcxXxbmo3y8fQdb06xubairi5dOMYYi/VFVv9I0uhS5re
	9dSWOmDq8VyktPtmnj9kiluc5L4mZ+rx8J+WTWNvU87Lo8jfvuNvTBVSQSCqgkAqAAIAAAAAAAAA
	AA3tJ0/3hdKllr6FkqcK6dQSjXvJQm1nGDmcHrOqPt5epl4wr1IahFQqP4ScmJTU+GVb0XWtJyqw
	issrqUlNxccMuPCd3UuKUqFdupGTxuV/WKSp6tWjDZKXQk9W+Onp/C9K4soXNetKmpGZ8OaOov8A
	2jLK+Rv1qkqfC1vhtPDKTK4qqTfO2Xlezj3GW/t6FtcctGq6kfmdTSOHZ3i8WvzQpevyORbLxqqU
	vM8l0164lZaRRhRfI5U10L8PrTlwnYVFNULyU6i6RK5f6fOwryp1k1j1Mul39zTv6UnWkk5b/Msf
	F1OFXTaNzyJym92Zh9c/h7TtOrwhUq3jhVz8JZNf0+wuIwV1dOklFJMomlVMXUEtt0WPi+clCnvv
	yIvJPrm6npemW9JyoXjm8ehwceZpPKPU6spLDZ5worZljZ0CWdyOm77hpqOSpWa3pTu6ipU1lv0L
	Lb8K2yoqd9cyotrKRr8H0KdTUoZSexHE2o1al74Kk4qLaRGWfUOGYQtvEsZyrKKy2VyFCcriNKa5
	ZN4LRwje1p1KlCpJzi9sM0NYoxp8Scsdkqi2F9JenSpcKWkLZVrq5lTTMdfhS3qU27O4lVfob3FV
	Sa0eDi3HdbHC4c1GvHUoQlVfK+xNXXIuradpWdKquV5wWvhvTdOU6NX2t+K3nl+Zr8Z0KdOpRlGK
	zOOcnP4bnL3lRT6cyLCrRr2l6ZdXUpXN46Us9MFW1jTdOtKOba8dSeehvcYSktQqYljcrUpSlHMv
	MyUiAQSWNB09FsbO6qyV3cuikspnMRKk4y8rwX6i8rQ7adi3b6lVlBJvCZSK8FTrThzt4k92Xnhu
	SehPmW+Hv/Ao9ws3FVv99mPqMllau6uoUlnEu5aJcJWFGlCVxeSpuXY4WgZ960MdMne4zrThTt1C
	TTLfBiu+FreNs6lncSrNLLKrUoypTcJZ2Ldwdc1KyuKdWTkvDeMnA12Hh3kkiX1Y5rbTJeOwjjG4
	NRQAAAAAAAAAAAAAAAAAzWkFUuIxfTJSuxpXDjvafi15Sp013R0JcK2UlJW93KrNfhN3Xbl2GlUa
	VHy89NZaKtpV/cUr+D8WTTluSs6w6hY1bGu6VSLjh4Orp/D9G5032l1ZZ32OnxbTjV02hccuJylu
	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
	AAAAAAAAAAAAAAAAAAAAAAAAAA//" alt="Text
	
	Description automatically generated" class="svelte-wamett"/>`,sA=s(),nA=a("p"),oA=s(),ys=a("p"),ys.textContent="The screenshot above is of a server that’s been running for a few weeks and has no restrictions on incoming or outgoing connections. As you can see, the input chain has processed 11GB of packets and the output chain has processed 17GB. The forward chain, on the other hand, has not needed to process a single packet. This is because the server isn’t doing any kind of forwarding or being used as a pass-through device.",iA=s(),ks=a("p"),ks.textContent="Output – This chain is used for outgoing connections. For example, if you try to ping howtogeek.com, iptables will check its output chain to see what the rules are regarding ping and howtogeek.com before making a decision to allow or deny the connection attempt.",lA=s(),qs=a("p"),qs.textContent="The caveat",rA=s(),Ss=a("p"),Ss.textContent="Even though pinging an external host seems like something that would only need to traverse the output chain, keep in mind that to return the data, the input chain will be used as well. When using iptables to lock down your system, remember that a lot of protocols will require two-way communication, so both the input and output chains will need to be configured properly. SSH is a common protocol that people forget to allow on both chains.",AA=s(),xs=a("p"),xs.textContent="History",cA=s(),Vs=a("p"),Vs.innerHTML="<a>https://mediatemple.net/community/products/dv/204404624/using-the-history-command</a>",pA=s(),js=a("p"),js.textContent="In Linux, there is a very useful command to show you all of the last commands that have been recently used. The command is simply called history, but can also be accessed by looking at your .bash_history in your home folder. By default, the history command will show you the last five hundred commands you have entered.",mA=s(),Os=a("p"),Os.textContent="This is especially useful during a live forensics investigation.",uA=s(),Ks=a("p"),Ks.textContent="passwd",dA=s(),Ws=a("p"),Ws.textContent="SED command in UNIX stands for stream editor and it can perform lots of functions on file like searching, find and replace, insertion or deletion. Though most common use of SED command in UNIX is for substitution or for find and replace. By using SED you can edit files even without opening them, which is much quicker way to find and replace something in file, than first opening that file in VI Editor and then changing it.",wA=s(),Us=a("ul"),Us.innerHTML=`<li>SED is a powerful text stream editor. Can do insertion, deletion, search and replace(substitution).</li> 
		  <li>SED command in unix supports regular expression which allows it perform complex pattern matching.</li>`,hA=s(),Fs=a("p"),Fs.textContent="Syntax:",vA=s(),Ts=a("p"),Ts.textContent="sed OPTIONS... [SCRIPT] [INPUTFILE...]",gA=s(),Rs=a("p"),Rs.textContent="Example:Consider the below text file as an input.",fA=s(),Ps=a("p"),Ps.textContent="$cat > geekfile.txt",bA=s(),Ns=a("p"),Ns.textContent="unix is great os. unix is opensource. unix is free os.",yA=s(),Xs=a("p"),Xs.textContent="learn operating system.",kA=s(),Gs=a("p"),Gs.textContent="unix linux which one you choose.",qA=s(),zs=a("p"),zs.textContent="unix is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.",SA=s(),Zs=a("p"),Zs.textContent="Sample Commands",xA=s(),Q=a("ol"),Q.innerHTML="<li>Replacing or substituting string : Sed command is mostly used to replace the text in a file. The below simple sed command replaces the word “unix” with “linux” in the file.</li>",VA=s(),Ls=a("p"),Ls.textContent="$sed 's/unix/linux/' geekfile.txt",jA=s(),Js=a("p"),Js.textContent="Output :",OA=s(),Hs=a("p"),Hs.textContent="linux is great os. unix is opensource. unix is free os.",KA=s(),Ds=a("p"),Ds.textContent="learn operating system.",WA=s(),Ms=a("p"),Ms.textContent="linux linux which one you choose.",UA=s(),Cs=a("p"),Cs.textContent="linux is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.",FA=s(),Ys=a("p"),Ys.textContent="Here the “s” specifies the substitution operation. The “/” are delimiters. The “unix” is the search pattern and the “linux” is the replacement string.",TA=s(),Bs=a("p"),Bs.textContent="By default, the sed command replaces the first occurrence of the pattern in each line and it won’t replace the second, third…occurrence in the line.",RA=s(),E=a("ol"),E.innerHTML="<li>Replacing the nth occurrence of a pattern in a line : Use the /1, /2 etc flags to replace the first, second occurrence of a pattern in a line. The below command replaces the second occurrence of the word “unix” with “linux” in a line.</li>",PA=s(),Is=a("p"),Is.textContent="$sed 's/unix/linux/2' geekfile.txt",NA=s(),Qs=a("p"),Qs.textContent="Output:",XA=s(),Es=a("p"),Es.textContent="unix is great os. linux is opensource. unix is free os.",GA=s(),_s=a("p"),_s.textContent="learn operating system.",zA=s(),$s=a("p"),$s.textContent="unix linux which one you choose.",ZA=s(),en=a("p"),en.textContent="unix is easy to learn.linux is a multiuser os.Learn unix .unix is a powerful.",LA=s(),_=a("ol"),_.innerHTML="<li>Replacing all the occurrence of the pattern in a line : The substitute flag /g (global replacement) specifies the sed command to replace all the occurrences of the string in the line.</li>",JA=s(),tn=a("p"),tn.textContent="$sed 's/unix/linux/g' geekfile.txt",HA=s(),an=a("p"),an.textContent="Output :",DA=s(),sn=a("p"),sn.textContent="linux is great os. linux is opensource. linux is free os.",MA=s(),nn=a("p"),nn.textContent="learn operating system.",CA=s(),on=a("p"),on.textContent="linux linux which one you choose.",YA=s(),ln=a("p"),ln.textContent="linux is easy to learn.linux is a multiuser os.Learn linux .linux is a powerful.",BA=s(),$=a("ol"),$.innerHTML="<li>Replacing from nth occurrence to all occurrences in a line : Use the combination of /1, /2 etc and /g to replace all the patterns from the nth occurrence of a pattern in a line. The following sed command replaces the third, fourth, fifth… “unix” word with “linux” word in a line.</li>",IA=s(),rn=a("p"),rn.textContent="$sed 's/unix/linux/2g' geekfile.txt",QA=s(),An=a("p"),An.textContent="Output:",EA=s(),cn=a("p"),cn.textContent="unix is great os. unix is opensource. linux is free os.",_A=s(),pn=a("p"),pn.textContent="learn operating system.",$A=s(),mn=a("p"),mn.textContent="unix linux which one you choose.",ec=s(),un=a("p"),un.textContent="unix is easy to learn.unix is a multiuser os.Learn linux .linux is a powerful.",tc=s(),ee=a("ol"),ee.innerHTML="<li>Parenthesize first character of each word : This sed example prints the first character of every word in parenthesis.</li>",ac=s(),dn=a("p"),dn.textContent=`$ echo "Welcome To The Geek Stuff" | sed 's/\\(\\b[A-Z]\\)/\\(\\1\\)/g'`,sc=s(),wn=a("p"),wn.textContent="Output:",nc=s(),hn=a("p"),hn.textContent="(W)elcome (T)o (T)he (G)eek (S)tuff",oc=s(),te=a("ol"),te.innerHTML="<li>Replacing string on a specific line number : You can restrict the sed command to replace the string on a specific line number. An example is</li>",ic=s(),vn=a("p"),vn.textContent="$sed '3 s/unix/linux/' geekfile.txt",lc=s(),gn=a("p"),gn.textContent="Output:",rc=s(),fn=a("p"),fn.textContent="unix is great os. unix is opensource. unix is free os.",Ac=s(),bn=a("p"),bn.textContent="learn operating system.",cc=s(),yn=a("p"),yn.textContent="linux linux which one you choose.",pc=s(),kn=a("p"),kn.textContent="unix is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.",mc=s(),qn=a("p"),qn.textContent="The above sed command replaces the string only on the third line.",uc=s(),ae=a("ol"),ae.innerHTML="<li>Duplicating the replaced line with /p flag : The /p print flag prints the replaced line twice on the terminal. If a line does not have the search pattern and is not replaced, then the /p prints that line only once.</li>",dc=s(),Sn=a("p"),Sn.textContent="$sed 's/unix/linux/p' geekfile.txt",wc=s(),xn=a("p"),xn.textContent="Output:",hc=s(),Vn=a("p"),Vn.textContent="linux is great os. unix is opensource. unix is free os.",vc=s(),jn=a("p"),jn.textContent="linux is great os. unix is opensource. unix is free os.",gc=s(),On=a("p"),On.textContent="learn operating system.",fc=s(),Kn=a("p"),Kn.textContent="linux linux which one you choose.",bc=s(),Wn=a("p"),Wn.textContent="linux linux which one you choose.",yc=s(),Un=a("p"),Un.textContent="linux is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.",kc=s(),Fn=a("p"),Fn.textContent="linux is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.",qc=s(),se=a("ol"),se.innerHTML="<li>Printing only the replaced lines : Use the -n option along with the /p print flag to display only the replaced lines. Here the -n option suppresses the duplicate rows generated by the /p flag and prints the replaced lines only one time.</li>",Sc=s(),Tn=a("p"),Tn.textContent="$sed -n 's/unix/linux/p' geekfile.txt",xc=s(),Rn=a("p"),Rn.textContent="Output:",Vc=s(),Pn=a("p"),Pn.textContent="linux is great os. unix is opensource. unix is free os.",jc=s(),Nn=a("p"),Nn.textContent="linux linux which one you choose.",Oc=s(),Xn=a("p"),Xn.textContent="linux is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.",Kc=s(),Gn=a("p"),Gn.textContent="If you use -n alone without /p, then the sed does not print anything.",Wc=s(),ne=a("ol"),ne.innerHTML="<li>Replacing string on a range of lines : You can specify a range of line numbers to the sed command for replacing a string.</li>",Uc=s(),zn=a("p"),zn.textContent="$sed '1,3 s/unix/linux/' geekfile.txt",Fc=s(),Zn=a("p"),Zn.textContent="Output:",Tc=s(),Ln=a("p"),Ln.textContent="linux is great os. unix is opensource. unix is free os.",Rc=s(),Jn=a("p"),Jn.textContent="learn operating system.",Pc=s(),Hn=a("p"),Hn.textContent="linux linux which one you choose.",Nc=s(),Dn=a("p"),Dn.textContent="unix is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.",Xc=s(),Mn=a("p"),Mn.textContent="Here the sed command replaces the lines with range from 1 to 3. Another example is",Gc=s(),Cn=a("p"),Cn.textContent="$sed '2,$ s/unix/linux/' geekfile.txt",zc=s(),Yn=a("p"),Yn.textContent="Output:",Zc=s(),Bn=a("p"),Bn.textContent="unix is great os. unix is opensource. unix is free os.",Lc=s(),In=a("p"),In.textContent="learn operating system.",Jc=s(),Qn=a("p"),Qn.textContent="linux linux which one you choose.",Hc=s(),En=a("p"),En.textContent="linux is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful",Dc=s(),_n=a("p"),_n.textContent="Here $ indicates the last line in the file. So the sed command replaces the text from second line to last line in the file.",Mc=s(),oe=a("ol"),oe.innerHTML="<li>Deleting lines from a particular file : SED command can also be used for deleting lines from a particular file. SED command is used for performing deletion operation without even opening the fileExamples:1. To Delete a particular line say n in this example</li>",Cc=s(),$n=a("p"),$n.textContent="Syntax:",Yc=s(),eo=a("p"),eo.textContent="$ sed 'nd' filename.txt",Bc=s(),to=a("p"),to.textContent="Example: $ sed '5d' filename.txt",Ic=s(),ao=a("p"),ao.textContent="2. To Delete a last line",Qc=s(),so=a("p"),so.textContent="Syntax:",Ec=s(),no=a("p"),no.textContent="$ sed '$d' filename.txt",_c=s(),oo=a("p"),oo.textContent="3. To Delete line from range x to y",$c=s(),io=a("p"),io.textContent="Syntax:",ep=s(),lo=a("p"),lo.textContent="$ sed 'x,yd' filename.txt",tp=s(),ro=a("p"),ro.textContent="Example:",ap=s(),Ao=a("p"),Ao.textContent="$ sed '3,6d' filename.txt",sp=s(),co=a("p"),co.textContent="4. To Delete from nth to last line",np=s(),po=a("p"),po.textContent="Syntax:",op=s(),mo=a("p"),mo.textContent="$ sed 'nth,$d' filename.txt",ip=s(),uo=a("p"),uo.textContent="Example:",lp=s(),wo=a("p"),wo.textContent="$ sed '12,$d' filename.txt",rp=s(),ho=a("p"),ho.textContent="5. To Delete pattern matching line",Ap=s(),vo=a("p"),vo.textContent="Syntax:",cp=s(),go=a("p"),go.textContent="$ sed '/pattern/d' filename.txt",pp=s(),fo=a("p"),fo.textContent="Example:",mp=s(),bo=a("p"),bo.textContent="$ sed '/abc/d' filename.txt",up=s(),yo=a("p"),yo.textContent="Assignment",dp=s(),ko=a("ul"),ko.innerHTML=`<li>View the following video<a>https://www.youtube.com/watch?v=OHBdKM7s5V4</a></li> 
		  <li>What file is used in your version of Linux to make Alias permanent systemwide?</li>`,d(i,"class","header svelte-wamett"),d(C,"start","1"),d(C,"type","1"),d(Y,"start","3"),d(Y,"type","1"),d(B,"start","4"),d(B,"type","1"),d(I,"start","5"),d(I,"type","1"),d(Q,"start","1"),d(Q,"type","1"),d(E,"start","2"),d(E,"type","1"),d(_,"start","3"),d(_,"type","1"),d($,"start","4"),d($,"type","1"),d(ee,"start","5"),d(ee,"type","1"),d(te,"start","6"),d(te,"type","1"),d(ae,"start","7"),d(ae,"type","1"),d(se,"start","8"),d(se,"type","1"),d(ne,"start","9"),d(ne,"type","1"),d(oe,"start","10"),d(oe,"type","1"),d(e,"class","content svelte-wamett"),d(n,"class","container")},m(qo,Fp){y(qo,n,Fp),t(n,i),t(n,l),t(n,e),t(e,c),t(e,m),t(e,A),t(e,r),t(e,p),t(e,g),t(e,k),t(e,K),t(e,q),t(e,O),t(e,T),t(e,U),t(e,D),t(e,re),t(e,M),t(e,h),t(e,w),t(e,v),t(e,j),t(e,b),t(e,W),t(e,To),t(e,pe),t(e,Ro),t(e,me),t(e,Po),t(e,ue),t(e,No),t(e,de),t(e,Xo),t(e,we),t(e,Go),t(e,he),t(e,zo),t(e,ve),t(e,Zo),t(e,ge),t(e,Lo),t(e,fe),t(e,Jo),t(e,be),t(e,Ho),t(e,ye),t(e,Do),t(e,ke),t(e,Mo),t(e,qe),t(e,Co),t(e,Se),t(e,Yo),t(e,xe),t(e,Bo),t(e,Ve),t(e,Io),t(e,je),t(e,Qo),t(e,Oe),t(e,Eo),t(e,Ke),t(e,_o),t(e,We),t(e,$o),t(e,Ue),t(e,ei),t(e,Fe),t(e,ti),t(e,Te),t(e,ai),t(e,Re),t(e,si),t(e,Pe),t(e,ni),t(e,Ne),t(e,oi),t(e,Xe),t(e,ii),t(e,Ge),t(e,li),t(e,ze),t(e,ri),t(e,Ze),t(e,Ai),t(e,Le),t(e,ci),t(e,Je),t(e,pi),t(e,He),t(e,mi),t(e,De),t(e,ui),t(e,Me),t(e,di),t(e,Ce),t(e,wi),t(e,Ye),t(e,hi),t(e,Be),t(e,vi),t(e,Ie),t(e,gi),t(e,Qe),t(e,fi),t(e,Ee),t(e,bi),t(e,_e),t(e,yi),t(e,$e),t(e,ki),t(e,et),t(e,qi),t(e,tt),t(e,Si),t(e,at),t(e,xi),t(e,st),t(e,Vi),t(e,nt),t(e,ji),t(e,ot),t(e,Oi),t(e,it),t(e,Ki),t(e,lt),t(e,Wi),t(e,rt),t(e,Ui),t(e,At),t(e,Fi),t(e,ct),t(e,Ti),t(e,pt),t(e,Ri),t(e,mt),t(e,Pi),t(e,ut),t(e,Ni),t(e,dt),t(e,Xi),t(e,wt),t(e,Gi),t(e,ht),t(e,zi),t(e,vt),t(e,Zi),t(e,gt),t(e,Li),t(e,ft),t(e,Ji),t(e,bt),t(e,Hi),t(e,yt),t(e,Di),t(e,kt),t(e,Mi),t(e,qt),t(e,Ci),t(e,St),t(e,Yi),t(e,xt),t(e,Bi),t(e,Vt),t(e,Ii),t(e,jt),t(e,Qi),t(e,Ot),t(e,Ei),t(e,Kt),t(e,_i),t(e,Wt),t(e,$i),t(e,Ut),t(e,el),t(e,Ft),t(e,tl),t(e,Tt),t(e,al),t(e,Rt),t(e,sl),t(e,Pt),t(e,nl),t(e,Nt),t(e,ol),t(e,Xt),t(e,il),t(e,Gt),t(e,ll),t(e,zt),t(e,rl),t(e,Zt),t(e,Al),t(e,Lt),t(e,cl),t(e,Jt),t(e,pl),t(e,Ht),t(e,ml),t(e,Dt),t(e,ul),t(e,Mt),t(e,dl),t(e,Ct),t(e,wl),t(e,Yt),t(e,hl),t(e,Bt),t(e,vl),t(e,C),t(e,gl),t(e,It),t(e,fl),t(e,Y),t(e,bl),t(e,Qt),t(e,yl),t(e,B),t(e,kl),t(e,Et),t(e,ql),t(e,_t),t(e,Sl),t(e,$t),t(e,xl),t(e,I),t(e,Vl),t(e,ea),t(e,jl),t(e,ta),t(e,Ol),t(e,aa),t(e,Kl),t(e,sa),t(e,Wl),t(e,na),t(e,Ul),t(e,oa),t(e,Fl),t(e,ia),t(e,Tl),t(e,la),t(e,Rl),t(e,ra),t(e,Pl),t(e,Aa),t(e,Nl),t(e,ca),t(e,Xl),t(e,pa),t(e,Gl),t(e,ma),t(e,zl),t(e,ua),t(e,Zl),t(e,da),t(e,Ll),t(e,wa),t(e,Jl),t(e,ha),t(e,Hl),t(e,va),t(e,Dl),t(e,ga),t(e,Ml),t(e,fa),t(e,Cl),t(e,Yl),t(e,Bl),t(e,ba),t(e,Il),t(e,Ql),t(e,El),t(e,ya),t(e,_l),t(e,ka),t(e,$l),t(e,qa),t(e,er),t(e,Sa),t(e,tr),t(e,ar),t(e,sr),t(e,xa),t(e,nr),t(e,or),t(e,ir),t(e,Va),t(e,lr),t(e,ja),t(e,rr),t(e,Oa),t(e,Ar),t(e,Ka),t(e,cr),t(e,Wa),t(e,pr),t(e,Ua),t(e,mr),t(e,Fa),t(e,ur),t(e,Ta),t(e,dr),t(e,Ra),t(e,wr),t(e,Pa),t(e,hr),t(e,Na),t(e,vr),t(e,Xa),t(e,gr),t(e,Ga),t(e,fr),t(e,za),t(e,br),t(e,Za),t(e,yr),t(e,La),t(e,kr),t(e,Ja),t(e,qr),t(e,Ha),t(e,Sr),t(e,Da),t(e,xr),t(e,Ma),t(e,Vr),t(e,Ca),t(e,jr),t(e,Ya),t(e,Or),t(e,Ba),t(e,Kr),t(e,Ia),t(e,Wr),t(e,Qa),t(e,Ur),t(e,Ea),t(e,Fr),t(e,_a),t(e,Tr),t(e,$a),t(e,Rr),t(e,es),t(e,Pr),t(e,ts),t(e,Nr),t(e,as),t(e,Xr),t(e,ss),t(e,Gr),t(e,ns),t(e,zr),t(e,os),t(e,Zr),t(e,is),t(e,Lr),t(e,ls),t(e,Jr),t(e,rs),t(e,Hr),t(e,As),t(e,Dr),t(e,cs),t(e,Mr),t(e,ps),t(e,Cr),t(e,ms),t(e,Yr),t(e,us),t(e,Br),t(e,ds),t(e,Ir),t(e,ws),t(e,Qr),t(e,hs),t(e,Er),t(e,vs),t(e,_r),t(e,gs),t(e,$r),t(e,fs),t(e,eA),t(e,tA),t(e,aA),t(e,bs),t(e,sA),t(e,nA),t(e,oA),t(e,ys),t(e,iA),t(e,ks),t(e,lA),t(e,qs),t(e,rA),t(e,Ss),t(e,AA),t(e,xs),t(e,cA),t(e,Vs),t(e,pA),t(e,js),t(e,mA),t(e,Os),t(e,uA),t(e,Ks),t(e,dA),t(e,Ws),t(e,wA),t(e,Us),t(e,hA),t(e,Fs),t(e,vA),t(e,Ts),t(e,gA),t(e,Rs),t(e,fA),t(e,Ps),t(e,bA),t(e,Ns),t(e,yA),t(e,Xs),t(e,kA),t(e,Gs),t(e,qA),t(e,zs),t(e,SA),t(e,Zs),t(e,xA),t(e,Q),t(e,VA),t(e,Ls),t(e,jA),t(e,Js),t(e,OA),t(e,Hs),t(e,KA),t(e,Ds),t(e,WA),t(e,Ms),t(e,UA),t(e,Cs),t(e,FA),t(e,Ys),t(e,TA),t(e,Bs),t(e,RA),t(e,E),t(e,PA),t(e,Is),t(e,NA),t(e,Qs),t(e,XA),t(e,Es),t(e,GA),t(e,_s),t(e,zA),t(e,$s),t(e,ZA),t(e,en),t(e,LA),t(e,_),t(e,JA),t(e,tn),t(e,HA),t(e,an),t(e,DA),t(e,sn),t(e,MA),t(e,nn),t(e,CA),t(e,on),t(e,YA),t(e,ln),t(e,BA),t(e,$),t(e,IA),t(e,rn),t(e,QA),t(e,An),t(e,EA),t(e,cn),t(e,_A),t(e,pn),t(e,$A),t(e,mn),t(e,ec),t(e,un),t(e,tc),t(e,ee),t(e,ac),t(e,dn),t(e,sc),t(e,wn),t(e,nc),t(e,hn),t(e,oc),t(e,te),t(e,ic),t(e,vn),t(e,lc),t(e,gn),t(e,rc),t(e,fn),t(e,Ac),t(e,bn),t(e,cc),t(e,yn),t(e,pc),t(e,kn),t(e,mc),t(e,qn),t(e,uc),t(e,ae),t(e,dc),t(e,Sn),t(e,wc),t(e,xn),t(e,hc),t(e,Vn),t(e,vc),t(e,jn),t(e,gc),t(e,On),t(e,fc),t(e,Kn),t(e,bc),t(e,Wn),t(e,yc),t(e,Un),t(e,kc),t(e,Fn),t(e,qc),t(e,se),t(e,Sc),t(e,Tn),t(e,xc),t(e,Rn),t(e,Vc),t(e,Pn),t(e,jc),t(e,Nn),t(e,Oc),t(e,Xn),t(e,Kc),t(e,Gn),t(e,Wc),t(e,ne),t(e,Uc),t(e,zn),t(e,Fc),t(e,Zn),t(e,Tc),t(e,Ln),t(e,Rc),t(e,Jn),t(e,Pc),t(e,Hn),t(e,Nc),t(e,Dn),t(e,Xc),t(e,Mn),t(e,Gc),t(e,Cn),t(e,zc),t(e,Yn),t(e,Zc),t(e,Bn),t(e,Lc),t(e,In),t(e,Jc),t(e,Qn),t(e,Hc),t(e,En),t(e,Dc),t(e,_n),t(e,Mc),t(e,oe),t(e,Cc),t(e,$n),t(e,Yc),t(e,eo),t(e,Bc),t(e,to),t(e,Ic),t(e,ao),t(e,Qc),t(e,so),t(e,Ec),t(e,no),t(e,_c),t(e,oo),t(e,$c),t(e,io),t(e,ep),t(e,lo),t(e,tp),t(e,ro),t(e,ap),t(e,Ao),t(e,sp),t(e,co),t(e,np),t(e,po),t(e,op),t(e,mo),t(e,ip),t(e,uo),t(e,lp),t(e,wo),t(e,rp),t(e,ho),t(e,Ap),t(e,vo),t(e,cp),t(e,go),t(e,pp),t(e,fo),t(e,mp),t(e,bo),t(e,up),t(e,yo),t(e,dp),t(e,ko)},p:u,i:u,o:u,d(qo){qo&&f(n)}}}class dm extends V{constructor(n){super(),x(this,n,null,um,S,{})}}function wm(o){let n;return{c(){n=a("div"),n.innerHTML=`<div class="header svelte-wamett"><h1 class="svelte-wamett">Week 9 |</h1> 
		<h2 class="svelte-wamett">Project Development</h2> 
		<h2 class="svelte-wamett">9 STEPS TO A HASSLE FREE AND EFFECTIVE SOFTWARE DEVELOPMENT PROJECT</h2>  <br class="svelte-wamett"/>  

		<p class="svelte-wamett">Following these nine steps may be the ultimate secret weapon to winning business and
            successfully delivering new easy-to-use software that meets and exceeds expectations.</p> 
    <p class="svelte-wamett">Has your company developed entirely new software or added to software already in use
            throughout the organization and found the process cumbersome, frustrating, and sometimes not living up to
            expectations or meeting organisational goals? If so, the solution to a smooth and effective development
            programme may be as easy as staffing a well-qualified project manager and adopting a proven development
            process.</p> 
    <p class="svelte-wamett">For any software development or other project initiative your company may be
            considering, it is critical to have in place and practice a set of effective and proven guidelines to ensure
            project success and delivery of the expected results: taking into consideration the role and
            responsibilities of a well-qualified project manager, knowledge of important business and financial aspects,
            and a step-by-step process that all contribute to the solid foundation and implementation of an effective
            project plan.</p>  <br class="svelte-wamett"/> 

	<h3 class="svelte-wamett">Developing a Practical Approach: The Role of the Project Manage</h3> 
	<p class="svelte-wamett">When undertaking a software development project, the first element to consider is the
		establishment of a comprehensive yet practical approach to the initiative that ultimately will lead to a
		successful end result.</p><br class="svelte-wamett"/> 
<p class="svelte-wamett">The in-house project manager has a key role in ensuring each phase of the project is
		carried out as planned. The project manager is responsible for considering the potential risks involved with
		the project and how to avoid and resolve them, establishing and maintaining momentum throughout the project,
		ensuring individual project team member tasks are assigned appropriately and carried out according to
		specifications, and successfully addressing and resolving any conflicts that may arise during the length of
		the development project.</p><br class="svelte-wamett"/> 
<p class="svelte-wamett">A well-qualified project manager is able to address what may seem to be an
		overwhelmingly complex process by developing an organized approach where the process is broken down into
		manageable individual tasks and understanding how to keep those involved in the project dedicated to the
		ultimate goal of meeting and even exceeding the expected end result.</p><br class="svelte-wamett"/> 
<p class="svelte-wamett">If the project manager dedicates the necessary time, effort, and resources to the
		preparation of an efficient, comprehensive, and practical approach, then the project team may progress with
		ease and confidence as they deliver on their individual tasks, having a solid foundation and strategic
		framework at the outset. Far too often, however, failures with such projects are the result of not only a
		poorly executed plan, but one that ultimately lacked the fundamental elements of a well-though-out approach
		rooted in adequate preparation and commitment from the project manager and project team.</p><br class="svelte-wamett"/> 
<p class="svelte-wamett">Designing a strategic plan means taking into consideration all aspects that can contribute to success or potential failure.</p>  <br class="svelte-wamett"/> 


<h3 class="svelte-wamett">Embarking on the Initiative: Key Steps to Consider</h3> 
<p class="svelte-wamett">With a comprehensive approach and a competent project manager in place to guide the
		new software development initiative, there is another important element your organization may find helpful
		as you embark on the project: establishing specific steps that can be followed to project completion that
		are based on proven industry experience in such a project environment.</p><br class="svelte-wamett"/> 
<p class="svelte-wamett">Following are a set of practical guidelines to approach a software development
		project, established by two university professors and business consultants with specialised expertise in the
		computing, engineering, and general business environments.</p><br class="svelte-wamett"/> 
<p class="svelte-wamett">Dr. Gordon Scott Gehrs is an adjunct instructor at the Illinois Institute of
		Technology (IIT) and a business consultant for the Jules F. Knapp Entrepreneurship Center at IIT. Dr. Dorota
		Huizinga is associate dean of the College of Engineering and Computer Science and a professor in the
		Computer Science Department at California State University, Fullerton, as well as a frequent business
		seminar speaker, a business consultant, and co-author of Automated Defect Prevention: Best Practices in
		Software Management.</p><br class="svelte-wamett"/> 
<p class="svelte-wamett">Read on for nine key steps to consider as you embark on a software development
		project.</p><br class="svelte-wamett"/> 

<h2 class="svelte-wamett">Step #1: Conduct Feasibility Analysis</h2> 
<p class="svelte-wamett">According to Dr. Gehrs, a critical first step is to interview
	stakeholders in order to uncover whether a specific need exists, identify this exact need, and determine
	whether the proposed project can feasibly deliver the expected software development.  Many times, this
	is the point at which an ROI study will be carried out in order to determine project costs and
	benefits,   says Dr. Gehrs.</p><br class="svelte-wamett"/> 

<h2 class="svelte-wamett">Step #2: Analyze and Determine Requirements</h2> 
<p class="svelte-wamett">When it comes to the next step of determining requirements, Dr. Gehrs believes a
            proper analysis should consist of interviews with end users and others who will be associated with the new
            software system. In addition, a thorough review and a keen understanding of user documents, business rules,
            and processes are keys to determining appropriate and necessary features and functionality. This is a
            valuable and significant step in the development process and the point at which such deliverables as those
            documents outlining the scope of the project and those detailing the software product requirement will be
            produced.</p> 
    <p class="svelte-wamett">Dr. Huizinga notes the importance of having the minimum technology infrastructure in
            place before beginning a software project, which include:</p> 
    <ul class="c13 lst-kix_xald7tnl4lmq-0 start svelte-wamett"><li class="c14 c21 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Desktops for development with an advanced integrated
                development environment suite</span></li> 
        <li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">A server with a configuration management system for document
                tracking and version control</span></li> 
        <li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">A staging server for integration testing and a production
                server for deployment of the final product</span></li> 
        <li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">A requirement/task/defect tracking tool</span></li> 
        <li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">An automated build system</span></li> 
        <li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">A regression testing tool</span></li> 
        <li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">An automated reporting system</span></li></ul> 
    <p class="svelte-wamett">Investing in the proper infrastructure is essential and will pay back
            quickly, asserts Dr. Huizinga. There are three key elements the proper infrastructure provides:</p> 
    <ul class="c13 lst-kix_n0punn523wit-0 start svelte-wamett"><li class="c21 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Product and project visibility</span></li> 
        <li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Automation of repetitive and mundane tasks</span></li> 
        <li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Facilitation of collaboration</span></li> 
    </ul><br class="svelte-wamett"/> 

	<h2 class="svelte-wamett">Step #3: Consider Industry Best Practices</h2> 
	<p class="svelte-wamett">When defining a software development process, consider proven industry best
		practices. Dr. Huizinga recommends a good, customized Agile process with emphasis on pictorial documentation
		both for requirements and technical documentation. It is important to follow a standard template and all
		activities should be traceable through a requirements/task/defect tool and shared document
		repository.</p><br class="svelte-wamett"/> 

<h2 class="svelte-wamett">Step #4: Design</h2> 
<p class="svelte-wamett">During the design phase, the software architect, programmer, and/or developer may put
	together a detailed design document outlining exactly how the software will meet the specified requirements.
	Dr. Gehrs recommends the use of mock-ups to accompany the design document as a way of illustrating
	user-interface elements.</p><br class="svelte-wamett"/> 
<p class="svelte-wamett">In some cases, customization is required in order to meet specific, individual
	project needs. For example, Dr. Huizinga notes that this might include the use of specialized COTS
	(Commercial Off-The-Shelf) hardware and software components. The wide spectrum of products from databases to
	game engines is dictated by the market shift to customization of existing commercial applications to fit
	project needs rather than in-house development of such systems. According to Dr. Huizinga, COTS can offer
	higher quality because they are developed by vendors who specialize in systems that provide the required
	functionality and are well-tested by many users.</p><br class="svelte-wamett"/> 

	<h2 class="svelte-wamett">Step #5: Measuring and Tracking Progress</h2> 
	<p class="svelte-wamett">Without the proper technology infrastructure in place, it is difficult to collect and
	measure key project data. Consequently, the software projects cannot be managed effectively, says
	Dr. Huizinga. Project indicators can help to ensure the prompt identification of potential or existing
	problems, therefore allowing them to be recognised and remedied in a timely manner. When observed over an
	extended period, notes Dr. Huizinga, these indicators can be used to determine product quality and
	deployment readiness.</p><br class="svelte-wamett"/> 

	<h2 class="svelte-wamett">Step #6: Development</h2> 
	<p class="svelte-wamett">At the development phase, the design document is translated into a
		real piece of software. When prior careful planning has been executed, the software will match the
		requirements of the business driver that initiated the need for the project. Dr. Gehrs points out that
		development cycles may produce several versions of the software:</p> 
<ul class="c13 lst-kix_d5ck0cs3b2f3-0 start svelte-wamett"><li class="c21 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Alpha: preliminary feature/functionality only</span></li> 
	<li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Beta: used for internal testing or usability testing</span></li> 
	<li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Release Candidates: usually a very stable build that may need
			minor tweaks</span></li> 
	<li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Production Build or Gold Master: ready for release</span></li></ul> 
<p class="svelte-wamett">Project managers need feedback on the user&#39;s navigational experience,
		task-completion times, ease of use, and other information related to the user interface and user-centric
		elements.</p> 

	<h2 class="svelte-wamett">Step #7: Addressing Automation</h2> 
	<p class="svelte-wamett">Another key step is to ensure the automation of repetitive tasks:</p> 
	<ul class="c13 lst-kix_n2y941k85acy-0 start svelte-wamett"><li class="c21 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Code builds;</span></li> 
		<li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Static code analysis scans;</span></li> 
		<li class="c14 c15 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Regression tests;</span></li> 
		<li class="c15 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Collection of project, and product, related measures</span></li></ul> 
	<p class="svelte-wamett">Dr. Huizinga believes that taking such measures reduces the error-prone human
			influence when the software is implemented. It also facilitates the use of best practices and collection of
			project-related data. All repetitive and mundane tasks should be automated whenever possible in any
			portion of the software life cycle, she adds.</p> 

	<h2 class="svelte-wamett">Step #8: Testing</h2> 
	<p class="svelte-wamett">As the project continues on through each phase and on to testing, a general
		progression of action is as follows: software features are laid out in some sort of list, scripts are
		written for each task the user might perform, and those features are tested to ensure they function
		properly. Dr. Gehrs points out that testing also may vary quite widely depending on the individual testing
		procedures adopted by the organisation. Testing can consist of several sub-stages as well, such as quality
		assurance and staging.</p> 
	<p class="svelte-wamett">Once the software is in general use, any bugs found at this point are addressed based
		on a criticality scale: urgent fixes are scheduled to be carried out as soon as possible. In addition,
		feature enhancements/changes may be slated for future upgrade versions.</p> 

		<h2 class="svelte-wamett">Step #9: Gradual Implementation Practices</h2> 
																														

		<p class="svelte-wamett">Incremental implementation of the above practices is critical to success. The
			approach of gradually introducing change group by group and practice by practice is essential to achieving
			the desired organizational culture change, as change is unsettling, and there will always be some degree of
			resistance, points out Dr. Huizinga. Because of the complex nature of software projects and the technology
			involved, new software development warrants this systematic approach.</p> 
	<p class="svelte-wamett">Understanding the role of the project leader and importance of having
			well-thought-out development processes in place may be a company&#39;s only real competitive advantage in an
			increasingly competitive marketplace. It is the ultimate secret weapon to winning business and successfully
			delivering new easy-to-use software.</p> 
	<p class="svelte-wamett">With workable and disciplined software project guidelines and well-qualified project
			managers, your organisation can&#39;t lose.</p> 
	<hr class="svelte-wamett"/> 
	<p class="c6 c29 svelte-wamett"><span class="c1 svelte-wamett"></span></p> 
	<p class="c6 svelte-wamett"><span class="c2 c11 svelte-wamett">ExecutiveBrief, the technology management resource for business leaders, offers
			proven tips, techniques, and action plans that companies can use to better manage people, processes and
			tools - the keys to improving their business performance. To learn more, please visit: 
			class=&quot;c4 c2&quot;&gt;<a class="c5 svelte-wamett" href="https://www.google.com/url?q=http://united.softserveinc.com/home/&amp;sa=D&amp;source=editors&amp;ust=1682924986923247&amp;usg=AOvVaw3j0TXNb-MMHJMxDKThmWWx">SoftServe
				United Blog</a></span></p> 
	<p class="c6 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">© ExecutiveBrief 2008</span></p> 
	<p class="c6 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://www.projectsmart.co.uk/9-steps-to-a-hassle-free-and-effective-software-development-project.php&amp;sa=D&amp;source=editors&amp;ust=1682924986923663&amp;usg=AOvVaw0crt5D1Ws5wTUCPeFCGv09">https://www.projectsmart.co.uk/9-steps-to-a-hassle-free-and-effective-software-development-project.php</a></span></p> 
	<p class="c6 c29 svelte-wamett"><span class="c1 svelte-wamett"></span></p> 
	<h1 class="c26 c34 svelte-wamett"><span class="c10 c2 svelte-wamett">Agile software development</span></h1> 
	<p class="c3 c17 svelte-wamett" id="h.1pxezwc"><span class="c10 c2 svelte-wamett">Agile software development</span><span class="c2 svelte-wamett"> describes an approach to </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Software_development&amp;sa=D&amp;source=editors&amp;ust=1682924986924082&amp;usg=AOvVaw0zmCL-Jx5NIcr3TWw82Wzh">software
				development</a></span><span class="c2 svelte-wamett"> under which requirements and solutions evolve through the
			collaborative effort of </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Self-organization%23Human_society&amp;sa=D&amp;source=editors&amp;ust=1682924986924264&amp;usg=AOvVaw1VMCd14QZEmQUxDUm63DSl">self-organizing</a></span><span class="c2 svelte-wamett"> and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Cross-functional_team&amp;sa=D&amp;source=editors&amp;ust=1682924986924422&amp;usg=AOvVaw2GvVVliGDfdlMv6u-URzaS">cross-functional</a></span><span class="c2 svelte-wamett"> teams and their </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Customer&amp;sa=D&amp;source=editors&amp;ust=1682924986924555&amp;usg=AOvVaw08wQldimJz8fMqRXhEckLT">customer(s)</a></span><span class="c2 svelte-wamett">/</span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/End_user&amp;sa=D&amp;source=editors&amp;ust=1682924986924690&amp;usg=AOvVaw0lixELBijI9--CCFr3UJqw">end
				users(s)</a></span><span class="c2 svelte-wamett">.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Collier_2011-1&amp;sa=D&amp;source=editors&amp;ust=1682924986924844&amp;usg=AOvVaw0ikUxVvtI5pxCl0FfdG-RV">[1]</a></span><span class="c2 svelte-wamett"> It advocates adaptive planning, evolutionary development, early delivery,
			and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Continual_improvement_process&amp;sa=D&amp;source=editors&amp;ust=1682924986924998&amp;usg=AOvVaw199C5NlaXQbFMXwX5cX3Yn">continual
				improvement</a></span><span class="c2 svelte-wamett">, and it encourages rapid and flexible response to
			change.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-WhatIsAgile-2&amp;sa=D&amp;source=editors&amp;ust=1682924986925155&amp;usg=AOvVaw3zyStFSvJXgew5UukGPIiy">[2]</a></span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">The term </span><span class="c2 c11 svelte-wamett">agile</span><span class="c2 svelte-wamett"> (sometimes written </span><span class="c2 c11 svelte-wamett">Agile</span><span class="c2 svelte-wamett">)</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-3&amp;sa=D&amp;source=editors&amp;ust=1682924986925464&amp;usg=AOvVaw2sCLK8zXgZ9uSlME6I6j1U">[3]</a></span><span class="c2 svelte-wamett"> was popularized, in this context, by the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23The_Agile_Manifesto&amp;sa=D&amp;source=editors&amp;ust=1682924986925646&amp;usg=AOvVaw1PXTYcRRAT6lZ11PIZ_Z3B">Manifesto
				for Agile Software Development</a></span><span class="c2 svelte-wamett">.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-AgileManifesto-4&amp;sa=D&amp;source=editors&amp;ust=1682924986925825&amp;usg=AOvVaw2Q5pGFbN9sLSFxH7kMQZlN">[4]</a></span><span class="c2 svelte-wamett"> The values and principles espoused in this manifesto were derived from and underpin a broad
			range of </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Software_development_process&amp;sa=D&amp;source=editors&amp;ust=1682924986925988&amp;usg=AOvVaw11_g7HkKjpyok5oQk7sSWz">software
				development frameworks</a></span><span class="c2 svelte-wamett">, including </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)&amp;sa=D&amp;source=editors&amp;ust=1682924986926168&amp;usg=AOvVaw2i6L_V02svLfbU-yZp7jGQ">Scrum</a></span><span class="c2 svelte-wamett"> and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Kanban_(development)&amp;sa=D&amp;source=editors&amp;ust=1682924986926344&amp;usg=AOvVaw1BOrAbqUFXzNXGui74PtG-">Kanban</a></span><span class="c2 svelte-wamett">.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-5&amp;sa=D&amp;source=editors&amp;ust=1682924986926494&amp;usg=AOvVaw1weVDALtF1_mTYnBlbf4Bm">[5]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-LarmanGuide-6&amp;sa=D&amp;source=editors&amp;ust=1682924986926637&amp;usg=AOvVaw1oiiZK0zHkelQl42SwP3hE">[6]</a></span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c1 svelte-wamett">While there is significant anecdotal evidence that adopting agile practices and
			values improves the agility of software professionals, teams and organizations; some empirical studies have
			found no scientific evidence.</span></p> 
	<h2 class="c12 svelte-wamett"><span class="c10 c2 svelte-wamett">History[</span><span class="c4 c10 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D1&amp;sa=D&amp;source=editors&amp;ust=1682924986926949&amp;usg=AOvVaw3wz7ZGA7IWV346RAt7R8tk">edit</a></span><span class="c10 c2 svelte-wamett">]</span></h2> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">In 2001, seventeen software developers met at a resort in </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Snowbird,_Utah&amp;sa=D&amp;source=editors&amp;ust=1682924986927247&amp;usg=AOvVaw2V9nl6b5T83Ovonho9sOLa">Snowbird</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Utah&amp;sa=D&amp;source=editors&amp;ust=1682924986927379&amp;usg=AOvVaw3hDG079zyEsXqLIOhYhNPU">Utah</a></span><span class="c2 svelte-wamett"> to discuss these lightweight development methods, among others </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Jeff_Sutherland&amp;sa=D&amp;source=editors&amp;ust=1682924986927516&amp;usg=AOvVaw0byuBHvwM7Qh1QXbok21ow">Jeff
				Sutherland</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Ken_Schwaber&amp;sa=D&amp;source=editors&amp;ust=1682924986927645&amp;usg=AOvVaw0zCQnSo9gyrfat794QEWOR">Ken
				Schwaber</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Jim_Highsmith&amp;sa=D&amp;source=editors&amp;ust=1682924986927779&amp;usg=AOvVaw1ooyqtUdIb7c3dE8kZB-YX">Jim
				Highsmith</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Alistair_Cockburn&amp;sa=D&amp;source=editors&amp;ust=1682924986927917&amp;usg=AOvVaw1gNX8RCsUEKqfT0i5DHJX0">Alistair
				Cockburn</a></span><span class="c2 svelte-wamett">, and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Robert_Cecil_Martin&amp;sa=D&amp;source=editors&amp;ust=1682924986928054&amp;usg=AOvVaw0g91DeUU65FtYCidLxsQnJ">Bob
				Martin</a></span><span class="c2 svelte-wamett">. Together they published the </span><span class="c2 c11 svelte-wamett">Manifesto for Agile Software Development</span><span class="c2 svelte-wamett">.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-AgileManifesto-4&amp;sa=D&amp;source=editors&amp;ust=1682924986928247&amp;usg=AOvVaw31m4i3gMItf8HIrwonHxmc">[4]</a></span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Iterative_and_incremental_development&amp;sa=D&amp;source=editors&amp;ust=1682924986928466&amp;usg=AOvVaw3D12wWrrCcE46mlnQAMUsn">Iterative
				and incremental development methods</a></span><span class="c2 svelte-wamett">, however, can be traced back as early as
			1957,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-craig2003-9&amp;sa=D&amp;source=editors&amp;ust=1682924986928693&amp;usg=AOvVaw03yc5HnvGDMba42z2L3RWj">[9]</a></span><span class="c2 svelte-wamett"> with evolutionary project management</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-EvolutionaryProjectManagement-10&amp;sa=D&amp;source=editors&amp;ust=1682924986928896&amp;usg=AOvVaw34OMUOmqjOYSyIQUsqH2f1">[10]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-11&amp;sa=D&amp;source=editors&amp;ust=1682924986929040&amp;usg=AOvVaw0NPp5HGTVWaznQnuY7RT_R">[11]</a></span><span class="c2 svelte-wamett"> and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Adaptive_software_development&amp;sa=D&amp;source=editors&amp;ust=1682924986929200&amp;usg=AOvVaw2N4LkhCpsS7kpCQzVQLMSw">adaptive
				software development</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-edmonds1974-12&amp;sa=D&amp;source=editors&amp;ust=1682924986929351&amp;usg=AOvVaw3S9LDNxDD8UFpW2LZS9XdW">[12]</a></span><span class="c1 svelte-wamett"> emerging in the early 1970s.</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">During the 1990s, a number of </span><span class="c2 c11 svelte-wamett">lightweight</span><span class="c2 svelte-wamett"> software development methods evolved in reaction to
			the prevailing </span><span class="c2 c11 svelte-wamett">heavyweight</span><span class="c2 svelte-wamett"> methods that
			critics described as overly regulated, planned, and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Micromanagement&amp;sa=D&amp;source=editors&amp;ust=1682924986929625&amp;usg=AOvVaw3LC_OOyOXgUaawc9W-r06M">micro-managed</a></span><span class="c2 svelte-wamett">. These included: </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Rapid_application_development&amp;sa=D&amp;source=editors&amp;ust=1682924986929790&amp;usg=AOvVaw0vkNeoXvBPBnk1eslNWCzr">rapid
				application development</a></span><span class="c2 svelte-wamett"> (RAD), from 1991;</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-13&amp;sa=D&amp;source=editors&amp;ust=1682924986929942&amp;usg=AOvVaw2tCj94y9EYDYQLCkDH78N2">[13]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-14&amp;sa=D&amp;source=editors&amp;ust=1682924986930076&amp;usg=AOvVaw1upNQFP0PS31kuYqLSRLqX">[14]</a></span><span class="c2 svelte-wamett"> the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Unified_Process&amp;sa=D&amp;source=editors&amp;ust=1682924986930250&amp;usg=AOvVaw3WQTJE9KC7ZXfmAhZWDPAn">unified
				process</a></span><span class="c2 svelte-wamett"> (UP) and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Dynamic_systems_development_method&amp;sa=D&amp;source=editors&amp;ust=1682924986930405&amp;usg=AOvVaw37jBymxA2SmaCh8ReaXBf1">dynamic
				systems development method</a></span><span class="c2 svelte-wamett"> (DSDM), both from 1994; </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)&amp;sa=D&amp;source=editors&amp;ust=1682924986930555&amp;usg=AOvVaw144WZW-OiaTi7GR3P-U4dG">Scrum</a></span><span class="c2 svelte-wamett">, from 1995; Crystal Clear and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Extreme_programming&amp;sa=D&amp;source=editors&amp;ust=1682924986930716&amp;usg=AOvVaw3h4eI6v-_jVhQuZlhMxodR">extreme
				programming</a></span><span class="c2 svelte-wamett"> (XP), both from 1996; and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Feature-driven_development&amp;sa=D&amp;source=editors&amp;ust=1682924986930875&amp;usg=AOvVaw09yv7XbUbzesJEnT5ypksk">feature-driven
				development</a></span><span class="c2 svelte-wamett">, from 1997. Although these all originated before the publication
			of the </span><span class="c2 c11 svelte-wamett">Agile Manifesto</span><span class="c2 svelte-wamett">, they are now collectively
			referred to as agile software development methods.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-LarmanGuide-6&amp;sa=D&amp;source=editors&amp;ust=1682924986931096&amp;usg=AOvVaw3ypeOMo8RBtjFNO0L7tws9">[6]</a></span><span class="c2 svelte-wamett"> At the same time, similar changes were underway in manufacturing</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-15&amp;sa=D&amp;source=editors&amp;ust=1682924986931260&amp;usg=AOvVaw0NBclC8P6bWVF910llDhbg">[15]</a></span><span class="c2 svelte-wamett"> and aerospace.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-16&amp;sa=D&amp;source=editors&amp;ust=1682924986931411&amp;usg=AOvVaw2og79jGvxDximV2F6sczxD">[16]</a></span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">In 2005, a group headed by Cockburn and Highsmith wrote an addendum
			of </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Project_management&amp;sa=D&amp;source=editors&amp;ust=1682924986931635&amp;usg=AOvVaw209bnQ5_ntCVHcepG3TfXY">project
				management</a></span><span class="c2 svelte-wamett"> principles, the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/PM_Declaration_of_Interdependence&amp;sa=D&amp;source=editors&amp;ust=1682924986931805&amp;usg=AOvVaw20NNbea8v-fJyn_z0ToDl9">Declaration
				of Interdependence</a></span><span class="c2 svelte-wamett">,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-17&amp;sa=D&amp;source=editors&amp;ust=1682924986931985&amp;usg=AOvVaw0Hoay2W6QDVtpRxIPtj5m4">[17]</a></span><span class="c1 svelte-wamett"> to guide software project management according to agile software development
			methods.</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">In 2009, a group working with Martin wrote an extension of </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Software_development&amp;sa=D&amp;source=editors&amp;ust=1682924986932299&amp;usg=AOvVaw18-JIBc9fdeQ5hkkNyQfP-">software
				development</a></span><span class="c2 svelte-wamett"> principles, the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Software_craftsmanship&amp;sa=D&amp;source=editors&amp;ust=1682924986932491&amp;usg=AOvVaw2o1oTtJW3UAHAq_J4F6_XP">Software
				Craftsmanship Manifesto</a></span><span class="c2 svelte-wamett">, to guide agile software development according
			to </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Professional&amp;sa=D&amp;source=editors&amp;ust=1682924986932696&amp;usg=AOvVaw1UZGplQ9BRhn3kK9aCNA22">professional</a></span><span class="c1 svelte-wamett"> conduct and mastery.</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">In 2011, the Agile Alliance created the </span><span class="c2 c11 svelte-wamett">Guide to
			Agile Practices</span><span class="c2 svelte-wamett"> (renamed the </span><span class="c2 c11 svelte-wamett">Agile
			Glossary</span><span class="c2 svelte-wamett"> in 2016),</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-18&amp;sa=D&amp;source=editors&amp;ust=1682924986933103&amp;usg=AOvVaw2Iqw5tKYcvHPaGS96aRFDe">[18]</a></span><span class="c1 svelte-wamett"> an evolving open-source compendium of the working definitions of agile practices, terms,
			and elements, along with interpretations and experience guidelines from the worldwide community of agile
			practitioners.</span></p> 
	<h2 class="c12 svelte-wamett" id="h.49x2ik5"><span class="c10 c2 svelte-wamett">The </span><span class="c10 c2 c11 svelte-wamett">Manifesto for Agile
			Software Development</span><span class="c10 c2 svelte-wamett">[</span><span class="c4 c10 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D2&amp;sa=D&amp;source=editors&amp;ust=1682924986933453&amp;usg=AOvVaw1WHKjpdomsHHPdV3fzp_Xl">edit</a></span><span class="c10 c2 svelte-wamett">]</span></h2> 
	<h3 class="c7 c17 svelte-wamett"><span class="c32 c2 svelte-wamett">Agile software development values[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D3&amp;sa=D&amp;source=editors&amp;ust=1682924986933763&amp;usg=AOvVaw1Ybq8GyLaeAz-KNc-O4zxp">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">Based on their combined experience of developing software and helping others do
			that, the seventeen signatories to the manifesto proclaimed that they value:</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-AgileManifesto-4&amp;sa=D&amp;source=editors&amp;ust=1682924986934031&amp;usg=AOvVaw1XebP_5t6p5LmbaFzegpCJ">[4]</a></span></p> 
	<ul class="c13 lst-kix_1k0v5bfilp6i-0 start svelte-wamett"><li class="c24 c35 li-bullet-0 svelte-wamett" id="h.2p2csry"><span class="c10 c2 c11 svelte-wamett">Individuals and Interactions</span><span class="c2 c11 svelte-wamett"> over processes and tools</span></li> 
		<li class="c8 li-bullet-0 svelte-wamett"><span class="c10 c2 c11 svelte-wamett">Working Software</span><span class="c2 c11 svelte-wamett"> over
				comprehensive documentation</span></li> 
		<li class="c8 li-bullet-0 svelte-wamett"><span class="c10 c2 c11 svelte-wamett">Customer Collaboration</span><span class="c2 c11 svelte-wamett"> over
				contract negotiation</span></li> 
		<li class="c8 li-bullet-0 svelte-wamett"><span class="c10 c2 c11 svelte-wamett">Responding to Change</span><span class="c2 c11 svelte-wamett"> over
				following a plan</span></li></ul> 
	<p class="c3 c17 svelte-wamett"><span class="c1 svelte-wamett">That is, while there is value in the items on the right, they value the items on
			the left more.</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">As </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scott_Ambler&amp;sa=D&amp;source=editors&amp;ust=1682924986934689&amp;usg=AOvVaw3BceH1K7X5DDuCiR814niM">Scott
				Ambler</a></span><span class="c2 svelte-wamett"> elucidated:</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-abmmw-19&amp;sa=D&amp;source=editors&amp;ust=1682924986934853&amp;usg=AOvVaw2aQlgHrJSJjHnng6Nt-fkN">[19]</a></span></p> 
	<ul class="c13 lst-kix_ddwbyvg7rsbv-0 start svelte-wamett"><li class="c24 c35 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Tools and processes are important, but it is more important to
				have competent people working together effectively.</span></li> 
		<li class="c8 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Good documentation is useful in helping people to understand how the
				software is built and how to use it, but the main point of development is to create software, not
				documentation.</span></li> 
		<li class="c8 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">A contract is important but is no substitute for working closely
				with customers to discover what they need.</span></li> 
		<li class="c8 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">A project plan is important, but it must not be too rigid to
				accommodate changes in technology or the environment, stakeholders&#39; priorities, and people&#39;s
				understanding of the problem and its solution.</span></li></ul> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">Some of the authors formed the Agile Alliance, a non-profit organization that
			promotes software development according to the manifesto&#39;s values and principles. Introducing the
			manifesto on behalf of the Agile Alliance, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Jim_Highsmith&amp;sa=D&amp;source=editors&amp;ust=1682924986935359&amp;usg=AOvVaw3AqWHtz_-Ytfe-Z6qLMN-K">Jim
				Highsmith</a></span><span class="c1 svelte-wamett"> said,</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c1 svelte-wamett">The Agile movement is not anti-methodology, in fact many of us want to restore
			credibility to the word methodology. We want to restore a balance. We embrace modeling, but not in order to
			file some diagram in a dusty corporate repository. We embrace documentation, but not hundreds of pages of
			never-maintained and rarely-used tomes. We plan, but recognize the limits of planning in a turbulent
			environment. Those who would brand proponents of XP or SCRUM or any of the other Agile Methodologies as
			&quot;hackers&quot; are ignorant of both the methodologies and the original definition of the term
			hacker.</span></p> 
	<p class="c26 c17 svelte-wamett"><span class="c2 svelte-wamett">— </span><span class="c2 c11 svelte-wamett">Jim Highsmith, History: The Agile
			Manifesto</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-20&amp;sa=D&amp;source=editors&amp;ust=1682924986935711&amp;usg=AOvVaw3BQaTpHj-gx6rUzCn1lt8j">[20]</a></span></p> 
	<h3 class="c7 c17 svelte-wamett"><span class="c32 c2 svelte-wamett">Agile software development principles[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D4&amp;sa=D&amp;source=editors&amp;ust=1682924986935946&amp;usg=AOvVaw2Ugbpor5ZE6QQ9Li__iarb">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 c17 svelte-wamett" id="h.147n2zr"><span class="c2 svelte-wamett">The </span><span class="c2 c11 svelte-wamett">Manifesto for Agile Software
			Development</span><span class="c2 svelte-wamett"> is based on twelve principles:</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-ManifestoPrinciples-21&amp;sa=D&amp;source=editors&amp;ust=1682924986936368&amp;usg=AOvVaw3ZMBhLdzvOJOuhQJ0q1G4h">[21]</a></span></p> 
	<ol class="c13 lst-kix_3bj828qqf0mr-0 start svelte-wamett" start="1"><li class="c24 c40 c43 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Customer satisfaction by early and continuous delivery of
				valuable software</span></li> 
		<li class="c18 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Welcome changing requirements, even in late development</span></li> 
		<li class="c18 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Working software is delivered frequently (weeks rather than
				months)</span></li> 
		<li class="c18 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Close, daily cooperation between business people and
				developers</span></li> 
		<li class="c18 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Projects are built around motivated individuals, who should be
				trusted</span></li> 
		<li class="c18 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Face-to-face conversation is the best form of communication
				(co-location)</span></li> 
		<li class="c18 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Working software is the primary measure of progress</span></li> 
		<li class="c18 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Sustainable development, able to maintain a constant pace</span></li> 
		<li class="c18 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Continuous attention to technical excellence and good design</span></li> 
		<li class="c18 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Simplicity—the art of maximizing the amount of work not
				done—is essential</span></li> 
		<li class="c18 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Best architectures, requirements, and designs emerge from
				self-organizing teams</span></li> 
		<li class="c18 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Regularly, the team reflects on how to become more effective, and
				adjusts accordingly</span></li></ol> 
	<h2 class="c12 svelte-wamett"><span class="c10 c2 svelte-wamett">Overview[</span><span class="c4 c10 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D5&amp;sa=D&amp;source=editors&amp;ust=1682924986937292&amp;usg=AOvVaw2NkqsX8gUCqWgE4UN_0fN8">edit</a></span><span class="c10 c2 svelte-wamett">]</span></h2> 
	<p class="c17 c20 svelte-wamett"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 200.00px; height: 150.40px;" class="svelte-wamett"><img alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Pair_programming_1.jpg/200px-Pair_programming_1.jpg" src="images/image3.jpg" style="width: 200.00px; height: 150.40px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" class="svelte-wamett"/></span></p> 
	<p class="c17 c19 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming&amp;sa=D&amp;source=editors&amp;ust=1682924986937624&amp;usg=AOvVaw2yj3l_9ipFX8GXPc7IPOJg">Pair
				programming</a></span><span class="c2 svelte-wamett">, an agile development technique used by </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Extreme_Programming&amp;sa=D&amp;source=editors&amp;ust=1682924986937782&amp;usg=AOvVaw34tIWKLNa5Z7H9Ve7mSen0">XP</a></span><span class="c1 svelte-wamett">. Note information radiators in the background.</span></p> 
	<h3 class="c7 c17 svelte-wamett"><span class="c32 c2 svelte-wamett">Iterative, incremental and evolutionary[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D6&amp;sa=D&amp;source=editors&amp;ust=1682924986938030&amp;usg=AOvVaw3isED2rFtUr9uOQUnQdoQs">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">Most agile development methods break product development work into small
			increments that minimize the amount of up-front planning and design. Iterations, or sprints, are short time
			frames (</span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Timeboxing&amp;sa=D&amp;source=editors&amp;ust=1682924986938295&amp;usg=AOvVaw2l1tFMFSPM_JKPauH9Jav2">timeboxes</a></span><span class="c2 svelte-wamett">) that typically last from one to four weeks. Each iteration involves a </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Cross-functional_team&amp;sa=D&amp;source=editors&amp;ust=1682924986938451&amp;usg=AOvVaw2-3yIIR_0KUlfiMsKMbgjg">cross-functional
				team</a></span><span class="c2 svelte-wamett"> working in all functions: </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Project_planning&amp;sa=D&amp;source=editors&amp;ust=1682924986938605&amp;usg=AOvVaw0E2ud-cs2bTTX_YR_a663b">planning</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Requirements_analysis&amp;sa=D&amp;source=editors&amp;ust=1682924986938752&amp;usg=AOvVaw0lvNqJIGZqIKItB-ohOyXO">analysis</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Software_design&amp;sa=D&amp;source=editors&amp;ust=1682924986938889&amp;usg=AOvVaw3DtdCz_uu5xC-HnIt5qHNK">design</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Computer_programming&amp;sa=D&amp;source=editors&amp;ust=1682924986939028&amp;usg=AOvVaw26P7rulMD8IooOKLHygr4I">coding</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Unit_testing&amp;sa=D&amp;source=editors&amp;ust=1682924986939171&amp;usg=AOvVaw2GIkCJHaNp00ZhbW7qrWGd">unit
				testing</a></span><span class="c2 svelte-wamett">, and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Acceptance_testing&amp;sa=D&amp;source=editors&amp;ust=1682924986939309&amp;usg=AOvVaw3lZ_ZDz5haGpUdbFQs7PCv">acceptance
				testing</a></span><span class="c2 svelte-wamett">. At the end of the iteration a working product is demonstrated to
			stakeholders. This minimizes overall risk and allows the product to adapt to changes quickly.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-auto-22&amp;sa=D&amp;source=editors&amp;ust=1682924986939472&amp;usg=AOvVaw02miq1zD6OH0D6Dy_H-hTb">[22]</a></span><span class="c2 svelte-wamett"> An iteration might not add enough functionality to warrant a market release, but the goal
			is to have an available release (with minimal </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Software_bug&amp;sa=D&amp;source=editors&amp;ust=1682924986939622&amp;usg=AOvVaw1jqkHtoQztizk_FUOVjb0E">bugs</a></span><span class="c2 svelte-wamett">) at the end of each iteration.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-embracing_change-23&amp;sa=D&amp;source=editors&amp;ust=1682924986939783&amp;usg=AOvVaw18JimeQ6ZHw555yy3FqTUi">[23]</a></span><span class="c1 svelte-wamett"> Multiple iterations might be required to release a product or new features.</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c1 svelte-wamett">Working software is the primary measure of progress.</span></p> 
	<h3 class="c7 c17 svelte-wamett"><span class="c32 c2 svelte-wamett">Efficient and face-to-face communication[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D7&amp;sa=D&amp;source=editors&amp;ust=1682924986940082&amp;usg=AOvVaw2NaSuiIqeBfVvypRbPGqrV">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">No matter which development method is followed, every team should include
			a </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Customer_representative&amp;sa=D&amp;source=editors&amp;ust=1682924986940371&amp;usg=AOvVaw3OmvNSaT5kSPfCQiOJXLo8">customer
				representative</a></span><span class="c2 svelte-wamett"> (Product Owner in Scrum). This person is agreed by
			stakeholders to act on their behalf and makes a personal commitment to being available for developers to
			answer questions throughout the iteration. At the end of each iteration, stakeholders and the customer
			representative review progress and re-evaluate priorities with a view to optimizing the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Rate_of_return&amp;sa=D&amp;source=editors&amp;ust=1682924986940560&amp;usg=AOvVaw34BLjBNJTGCiF4cuOcArFq">return
				on investment</a></span><span class="c1 svelte-wamett">(ROI) and ensuring alignment with customer needs and company
			goals.</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">In agile software development, an </span><span class="c2 c11 svelte-wamett">information
			radiator</span><span class="c2 svelte-wamett"> is a (normally large) physical display located prominently near the
			development team, where passers-by can see it. It presents an up-to-date summary of the product development
			status.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Cockburn,_Information_radiator-24&amp;sa=D&amp;source=editors&amp;ust=1682924986940880&amp;usg=AOvVaw0WERQkBHjS_A_IhCNFdvri">[24]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Ambler-25&amp;sa=D&amp;source=editors&amp;ust=1682924986941034&amp;usg=AOvVaw2-T4QdpH-0kKS-XbzE46e6">[25]</a></span><span class="c2 svelte-wamett"> A </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Build_light_indicator&amp;sa=D&amp;source=editors&amp;ust=1682924986941189&amp;usg=AOvVaw1sNl3QbbrfJr0snvH6Eszt">build
				light indicator</a></span><span class="c1 svelte-wamett"> may also be used to inform a team about the current
			status of their product development.</span></p> 
	<h3 class="c7 c39 c17 svelte-wamett"><span class="c1 svelte-wamett"></span></h3> 
	<h3 class="c7 c39 c17 svelte-wamett"><span class="c1 svelte-wamett"></span></h3> 
	<h3 class="c7 c17 svelte-wamett"><span class="c32 c2 svelte-wamett">Very short feedback loop and adaptation cycle[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D8&amp;sa=D&amp;source=editors&amp;ust=1682924986941718&amp;usg=AOvVaw13aIrgvvb-9mN7B1F-L3DU">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">A common characteristic in agile software development is the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Stand-up_meeting&amp;sa=D&amp;source=editors&amp;ust=1682924986942098&amp;usg=AOvVaw1FmOovPPUvlMxE_mQKTi2k">daily
				stand-up</a></span><span class="c2 svelte-wamett"> (also known as the </span><span class="c2 c11 svelte-wamett">daily
			scrum)</span><span class="c2 svelte-wamett">. In a brief session, team members report to each other what they did the
			previous day toward their team&#39;s iteration goal, what they intend to do today toward the goal, and any
			roadblocks or impediments they can see to the goal.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-26&amp;sa=D&amp;source=editors&amp;ust=1682924986942364&amp;usg=AOvVaw1ZvPqGipISNipDCZ1-Diyq">[26]</a></span></p> 
	<h3 class="c7 c17 svelte-wamett"><span class="c32 c2 svelte-wamett">Quality focus[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D9&amp;sa=D&amp;source=editors&amp;ust=1682924986942607&amp;usg=AOvVaw1KJJDP4C5xZhjrRW0ZXdYY">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">Specific tools and techniques, such as </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Continuous_integration&amp;sa=D&amp;source=editors&amp;ust=1682924986942876&amp;usg=AOvVaw1F82_u7dV8CYWlZeJfViJR">continuous
				integration</a></span><span class="c2 svelte-wamett">, automated </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Unit_testing&amp;sa=D&amp;source=editors&amp;ust=1682924986943058&amp;usg=AOvVaw3x8XzweHzVavqeI3eHeuaA">unit
				testing</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming&amp;sa=D&amp;source=editors&amp;ust=1682924986943267&amp;usg=AOvVaw1K5Q2slj9PEVTMG_jjuoru">pair
				programming</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Test-driven_development&amp;sa=D&amp;source=editors&amp;ust=1682924986943422&amp;usg=AOvVaw0U3ZXttt501XlMGCOg1xUR">test-driven
				development</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Software_design_pattern&amp;sa=D&amp;source=editors&amp;ust=1682924986943574&amp;usg=AOvVaw3xFafKEeWqcOn6P4cNZxMW">design
				patterns</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Behavior-driven_development&amp;sa=D&amp;source=editors&amp;ust=1682924986943732&amp;usg=AOvVaw3Ki0PSrCPMjia7-_Majciy">behavior-driven
				development</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Domain-driven_design&amp;sa=D&amp;source=editors&amp;ust=1682924986943884&amp;usg=AOvVaw291sKzyNUzn7_d6pzQdhAL">domain-driven
				design</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Code_refactoring&amp;sa=D&amp;source=editors&amp;ust=1682924986944038&amp;usg=AOvVaw2XRqmmrhzVBAC8EFCFcAB9">code
				refactoring</a></span><span class="c2 svelte-wamett"> and other techniques are often used to improve quality and
			enhance product development agility.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-27&amp;sa=D&amp;source=editors&amp;ust=1682924986944208&amp;usg=AOvVaw3Jrrq95XWxRSrpUZaGUFRn">[27]</a></span><span class="c2 svelte-wamett"> The idea is that the quality is built into the software. </span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-28&amp;sa=D&amp;source=editors&amp;ust=1682924986944423&amp;usg=AOvVaw27hoFxhBU8fDTkVeyWT5Jb">[28]</a></span></p> 
	<h2 class="c12 svelte-wamett"><span class="c10 c2 svelte-wamett">Philosophy[</span><span class="c4 c10 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D10&amp;sa=D&amp;source=editors&amp;ust=1682924986944672&amp;usg=AOvVaw0y2O0wJZ6b6J16atlDRIah">edit</a></span><span class="c10 c2 svelte-wamett">]</span></h2> 
	<p class="c3 c17 svelte-wamett" id="h.3o7alnk"><span class="c2 svelte-wamett">Compared to traditional software engineering, agile software
			development mainly targets complex systems and product development with dynamic, non-deterministic and
			non-linear characteristics. Accurate estimates, stable plans, and predictions are often hard to get in early
			stages, and confidence in them is likely to be low. Agile practitioners will seek to reduce the
			&quot;leap-of-faith&quot; that is needed before any evidence of value can be obtained.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Mitchell2016-29&amp;sa=D&amp;source=editors&amp;ust=1682924986945081&amp;usg=AOvVaw0MSWuCCAIv6eXHZN6jJzEq">[29]</a></span><span class="c2 svelte-wamett"> Requirements and design are held to be emergent. Big up-front specifications would probably
			cause a lot of waste in such cases, i.e., are not economically sound. These basic arguments and previous
			industry experiences, learned from years of successes and failures, have helped shape agile
			development&#39;s favor of adaptive, iterative and evolutionary development.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Larman2004-30&amp;sa=D&amp;source=editors&amp;ust=1682924986945316&amp;usg=AOvVaw2-G_9CWzup9iQR-37UviIm">[30]</a></span></p> 
	<h3 class="c7 c17 svelte-wamett"><span class="c32 c2 svelte-wamett">Adaptive vs. predictive[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D11&amp;sa=D&amp;source=editors&amp;ust=1682924986945608&amp;usg=AOvVaw1u42u8QU53fgKy-3DUOfz_">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">Development methods exist on a continuum from </span><span class="c2 c11 svelte-wamett">adaptive</span><span class="c2 svelte-wamett"> to </span><span class="c2 c11 svelte-wamett">predictive</span><span class="c2 svelte-wamett">.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-boehm2004App-31&amp;sa=D&amp;source=editors&amp;ust=1682924986945956&amp;usg=AOvVaw29VtgFgXUhE9bzOp3P1Ifn">[31]</a></span><span class="c2 svelte-wamett"> Agile software development methods lie on the </span><span class="c2 c11 svelte-wamett">adaptive</span><span class="c2 svelte-wamett"> side of this continuum. One key of adaptive development
			methods is a &quot;</span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Rolling_Wave_planning&amp;sa=D&amp;source=editors&amp;ust=1682924986946170&amp;usg=AOvVaw29bNvsj6NjOuv-0RdDXA3a">Rolling
				Wave</a></span><span class="c2 svelte-wamett">&quot; approach to schedule planning, which identifies milestones but
			leaves flexibility in the path to reach them, and also allows for the milestones themselves to
			change.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-32&amp;sa=D&amp;source=editors&amp;ust=1682924986946340&amp;usg=AOvVaw3tI0Lc-OebrWrLlhlvHa0V">[32]</a></span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 c11 svelte-wamett">Adaptive</span><span class="c1 svelte-wamett"> methods focus on adapting quickly to
			changing realities. When the needs of a project change, an adaptive team changes as well. An adaptive team
			has difficulty describing exactly what will happen in the future. The further away a date is, the more vague
			an adaptive method is about what will happen on that date. An adaptive team cannot report exactly what tasks
			they will do next week, but only which features they plan for next month. When asked about a release six
			months from now, an adaptive team might be able to report only the mission statement for the release, or a
			statement of expected value vs. cost.</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 c11 svelte-wamett">Predictive</span><span class="c2 svelte-wamett"> methods, in contrast, focus on
			analysing and planning the future in detail and cater for known risks. In the extremes, a predictive team
			can report exactly what features and tasks are planned for the entire length of the development process.
			Predictive methods rely on effective early phase analysis and if this goes very wrong, the project may have
			difficulty changing direction. Predictive teams often institute a </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Change_control_board&amp;sa=D&amp;source=editors&amp;ust=1682924986946711&amp;usg=AOvVaw1P5QVEoYlbsSev_gPcQ2ZC">change
				control board</a></span><span class="c1 svelte-wamett"> to ensure they consider only the most valuable
			changes.</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Risk_analysis_(engineering)&amp;sa=D&amp;source=editors&amp;ust=1682924986946918&amp;usg=AOvVaw38xFt7LynkkH-lOlE1pSk-">Risk
				analysis</a></span><span class="c2 svelte-wamett"> can be used to choose between adaptive (</span><span class="c2 c11 svelte-wamett">agile</span><span class="c2 svelte-wamett"> or </span><span class="c2 c11 svelte-wamett">value-driven</span><span class="c2 svelte-wamett">) and predictive (</span><span class="c2 c11 svelte-wamett">plan-driven</span><span class="c2 svelte-wamett">) methods.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-PMBridgeToAgility-33&amp;sa=D&amp;source=editors&amp;ust=1682924986947195&amp;usg=AOvVaw2jKfVVKO9qAdRS7HQtcknv">[33]</a></span><span class="c2 svelte-wamett"> </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Barry_Boehm&amp;sa=D&amp;source=editors&amp;ust=1682924986947338&amp;usg=AOvVaw0AI8M6qHbOaL4Y5Oi_6yl2">Barry
				Boehm</a></span><span class="c2 svelte-wamett"> and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Richard_Turner_(software)&amp;sa=D&amp;source=editors&amp;ust=1682924986947507&amp;usg=AOvVaw073GU31LB5JbsqOyony3S8">Richard
				Turner</a></span><span class="c2 svelte-wamett">suggest that each side of the continuum has its own </span><span class="c2 c11 svelte-wamett">home ground</span><span class="c2 svelte-wamett">, as follows:</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-boehm2004-34&amp;sa=D&amp;source=editors&amp;ust=1682924986947705&amp;usg=AOvVaw0K0toBVm1AORc34MQ4Nh4c">[34]</a></span><span class="c1 svelte-wamett"> </span></p> 
	<p class="c3 c29 c17 svelte-wamett"><span class="c1 svelte-wamett"></span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c10 c2 svelte-wamett">Iterative vs. waterfall[</span><span class="c4 c10 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D12&amp;sa=D&amp;source=editors&amp;ust=1682924986947973&amp;usg=AOvVaw0MDHi1cZCF3bTBHiXoFbAv">edit</a></span><span class="c10 c2 c27 svelte-wamett">]</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">One of the differences between agile software development methods and waterfall
			is the approach to quality and testing. In the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Waterfall_model&amp;sa=D&amp;source=editors&amp;ust=1682924986948207&amp;usg=AOvVaw2xPjVQXmiACMEAvm7kxG4v">waterfall
				model</a></span><span class="c2 svelte-wamett">, there is always a separate </span><span class="c2 c11 svelte-wamett">testing
			phase</span><span class="c2 svelte-wamett"> after a </span><span class="c2 c11 svelte-wamett">build phase</span><span class="c1 svelte-wamett">; however, in agile software development testing is completed in the same iteration as
			programming.</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">Because testing is done in every iteration—which develops a small piece of
			the software—users can frequently use those new pieces of software and validate the value. After the
			users know the real value of the updated piece of software, they can make better decisions about the
			software&#39;s future. Having a value retrospective and software re-planning session in each
			iteration—</span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)&amp;sa=D&amp;source=editors&amp;ust=1682924986948525&amp;usg=AOvVaw2CVMiJjlxjNNy6O_viRM5i">Scrum</a></span><span class="c2 svelte-wamett"> typically has iterations of just two weeks—helps the team continuously adapt its
			plans so as to maximize the value it delivers. This follows a pattern similar to the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/PDCA&amp;sa=D&amp;source=editors&amp;ust=1682924986948677&amp;usg=AOvVaw1MXSAM7hJYB2E-TD_FC7k7">PDCA</a></span><span class="c2 svelte-wamett"> cycle, as the work is </span><span class="c2 c11 svelte-wamett">planned</span><span class="c2 svelte-wamett">, </span><span class="c2 c11 svelte-wamett">done</span><span class="c2 svelte-wamett">, </span><span class="c2 c11 svelte-wamett">checked</span><span class="c2 svelte-wamett"> (in the review and retrospective), and any changes
			agreed are </span><span class="c2 c11 svelte-wamett">acted</span><span class="c1 svelte-wamett"> upon.</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">This iterative approach supports a </span><span class="c2 c11 svelte-wamett">product</span><span class="c2 svelte-wamett"> rather than a </span><span class="c2 c11 svelte-wamett">project</span><span class="c2 svelte-wamett"> mindset. This provides greater flexibility throughout
			the development process; whereas on projects the requirements are defined and locked down from the very
			beginning, making it difficult to change them later. Iterative product development allows the software to
			evolve in response to changes in business environment or market requirements.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-35&amp;sa=D&amp;source=editors&amp;ust=1682924986949126&amp;usg=AOvVaw0FQSXjrJLY4jWjLKUMXRzm">[35]</a></span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">Because of the short iteration style of agile software development, it also has
			strong connections with the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Lean_startup&amp;sa=D&amp;source=editors&amp;ust=1682924986949449&amp;usg=AOvVaw1dA_p9_ozU_VaIowQsikkt">lean
				startup</a></span><span class="c1 svelte-wamett"> concept.</span></p> 
	<h3 class="c7 c17 svelte-wamett"><span class="c32 c2 svelte-wamett">Code vs. documentation[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D13&amp;sa=D&amp;source=editors&amp;ust=1682924986949780&amp;usg=AOvVaw2drEGoWKH7_n-EorWIYW7_">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">In a letter to </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Computer_(magazine)&amp;sa=D&amp;source=editors&amp;ust=1682924986950040&amp;usg=AOvVaw1xEU2QVTfZpWa2AIyXuZtV">IEEE
				Computer</a></span><span class="c2 svelte-wamett">, Steven Rakitin expressed cynicism about agile software
			development, calling it &quot;yet another attempt to undermine the discipline of software engineering&quot;
			and translating &quot;Working software over comprehensive documentation&quot; as &quot;We want to spend all
			our time coding. Remember, real programmers don&#39;t write documentation.&quot;</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-rakitin2001-36&amp;sa=D&amp;source=editors&amp;ust=1682924986950333&amp;usg=AOvVaw3tCFGmulsFmiHKbhmh3tyE">[36]</a></span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">This is disputed by proponents of agile software development, who state that
			developers should write documentation if that is the best way to achieve the relevant goals, but that there
			are often better ways to achieve those goals than writing static documentation.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-agiledoc-37&amp;sa=D&amp;source=editors&amp;ust=1682924986950657&amp;usg=AOvVaw0nIhjPeY7RR3o9BH5VSiN_">[37]</a></span><span class="c2 svelte-wamett"> </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scott_Ambler&amp;sa=D&amp;source=editors&amp;ust=1682924986950828&amp;usg=AOvVaw3CRwdIoP7BXjkVgWZBTpM7">Scott
				Ambler</a></span><span class="c2 svelte-wamett"> states that documentation should be &quot;Just Barely Good
			Enough&quot; (JBGE),</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-38&amp;sa=D&amp;source=editors&amp;ust=1682924986951043&amp;usg=AOvVaw00zTvCoAkFX_HcDyJINGMe">[38]</a></span><span class="c2 svelte-wamett"> that too much or comprehensive documentation would usually cause waste, and developers
			rarely trust detailed documentation because it&#39;s usually out of sync with code,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-agiledoc-37&amp;sa=D&amp;source=editors&amp;ust=1682924986951304&amp;usg=AOvVaw3bmMBpCFbQ0KoKC3mExPJi">[37]</a></span><span class="c2 svelte-wamett"> while too little documentation may also cause problems for maintenance, communication,
			learning and knowledge sharing. </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Alistair_Cockburn&amp;sa=D&amp;source=editors&amp;ust=1682924986951470&amp;usg=AOvVaw1jHKGag082rOl21TpPAC3T">Alistair
				Cockburn</a></span><span class="c2 svelte-wamett"> wrote of the </span><span class="c2 c11 svelte-wamett">Crystal
			Clear</span><span class="c1 svelte-wamett"> method:</span></p> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">Crystal considers development a series of co-operative games, and intends that
			the documentation is enough to help the next win at the next game. The work products for Crystal include use
			cases, risk list, iteration plan, core domain models, and design notes to inform on choices...however there
			are no templates for these documents and descriptions are necessarily vague, but the objective is
			clear, </span><span class="c10 c2 svelte-wamett">just enough documentation</span><span class="c1 svelte-wamett"> for the next
			game. I always tend to characterize this to my team as: what would you want to know if you joined the team
			tomorrow.</span></p> 
	<p class="c26 c17 svelte-wamett"><span class="c2 svelte-wamett">— </span><span class="c2 c11 svelte-wamett">Alistair Cockburn.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-39&amp;sa=D&amp;source=editors&amp;ust=1682924986951892&amp;usg=AOvVaw1PsUKDfCEwFUIKPxUCyX7y">[39]</a></span></p> 
	<h2 class="c12 svelte-wamett"><span class="c10 c2 svelte-wamett">Agile software development methods</span></h2> 
	<p class="c3 c17 svelte-wamett"><span class="c2 svelte-wamett">Agile software development methods support a broad range of the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Software_development_life_cycle&amp;sa=D&amp;source=editors&amp;ust=1682924986952221&amp;usg=AOvVaw1drc4hIuaKUq5XnZxWw3Pt">software
				development life cycle</a></span><span class="c2 svelte-wamett">.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Abrahamsson2002-40&amp;sa=D&amp;source=editors&amp;ust=1682924986952390&amp;usg=AOvVaw3EsK6-RwO9zk2vYX4YuzAf">[40]</a></span><span class="c2 svelte-wamett"> Some focus on the practices (e.g., XP, pragmatic programming, agile modeling), while some
			focus on managing the flow of work (e.g., Scrum, Kanban). Some support activities for requirements
			specification and development (e.g., FDD), while some seek to cover the full development life cycle (e.g.,
			DSDM, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Rational_Unified_Process&amp;sa=D&amp;source=editors&amp;ust=1682924986952600&amp;usg=AOvVaw3aQsC5O4KGs0tvgcjzq3Jx">RUP</a></span><span class="c1 svelte-wamett">).</span></p> 
	<h3 class="c7 c39 svelte-wamett"><span class="c1 svelte-wamett"></span></h3> 
	<h3 class="c7 svelte-wamett"><span class="c32 c2 svelte-wamett">Agile software development practices[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D15&amp;sa=D&amp;source=editors&amp;ust=1682924986952993&amp;usg=AOvVaw20DDeciFruQ7L7I2U5Hwkt">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 svelte-wamett"><span class="c1 svelte-wamett">Agile software development is supported by a number of concrete practices, covering
			areas like requirements, design, modeling, coding, testing, planning, risk management, process, quality,
			etc. Some notable agile software development practices include:</span></p> 
	<p class="c3 svelte-wamett"><span class="c1 svelte-wamett">Certain practices are described at the end of this document.  They are
			identified by *</span></p> 
	<ul class="c13 lst-kix_tho5n43zoqc8-0 start svelte-wamett"><li class="c24 c31 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Acceptance_test-driven_development&amp;sa=D&amp;source=editors&amp;ust=1682924986953353&amp;usg=AOvVaw1yW1v5TLQvw582uKeDCUXT">Acceptance
					test-driven development</a></span><span class="c1 svelte-wamett"> (ATDD)</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_modeling&amp;sa=D&amp;source=editors&amp;ust=1682924986953671&amp;usg=AOvVaw0dNSkBi0qdQkJB-ihcs7FN">Agile
					modeling</a></span><span class="c1 svelte-wamett"> *</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_testing&amp;sa=D&amp;source=editors&amp;ust=1682924986953873&amp;usg=AOvVaw2bikXo6L7b7KiT_hsm-AV7">Agile
					testing</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(development)%23Product_Backlog&amp;sa=D&amp;source=editors&amp;ust=1682924986954083&amp;usg=AOvVaw1MvZjcPTdD0f-k1DdLpgLA">Backlogs</a></span><span class="c1 svelte-wamett"> (Product and Sprint)</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Behavior-driven_development&amp;sa=D&amp;source=editors&amp;ust=1682924986954291&amp;usg=AOvVaw3CvZ9BqqISGxqn_3JYXPeG">Behavior-driven
					development</a></span><span class="c1 svelte-wamett"> (BDD)</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Business analyst designer method (BADM)</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-41&amp;sa=D&amp;source=editors&amp;ust=1682924986954510&amp;usg=AOvVaw2mUj2SMzOdIkdaL_yrGO0v">[41]</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Continuous_integration&amp;sa=D&amp;source=editors&amp;ust=1682924986954699&amp;usg=AOvVaw2Kto-Ve8-fk66RzUY0hBHe">Continuous
					integration</a></span><span class="c1 svelte-wamett"> (CI)</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Cross-functional_team&amp;sa=D&amp;source=editors&amp;ust=1682924986954893&amp;usg=AOvVaw290L5pQm9KnWV81XPpy7i-">Cross-functional
					team</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Domain-driven_design&amp;sa=D&amp;source=editors&amp;ust=1682924986955085&amp;usg=AOvVaw3eVYdMKrgsUShkn-ttZjA9">Domain-driven
					design</a></span><span class="c1 svelte-wamett"> (DDD)</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Information radiators (scrum board, task board, visual management
				board, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Burndown_chart&amp;sa=D&amp;source=editors&amp;ust=1682924986955300&amp;usg=AOvVaw2FyHzKxFl4EVYwyvNX_WIo">burndown
					chart</a></span><span class="c1 svelte-wamett">)</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Iterative_and_incremental_development&amp;sa=D&amp;source=editors&amp;ust=1682924986955496&amp;usg=AOvVaw0KiruSiptWOdzdvHKsKCAB">Iterative
					and incremental development</a></span><span class="c1 svelte-wamett"> (IID)</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Kanban *</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Low-code_development_platforms&amp;sa=D&amp;source=editors&amp;ust=1682924986955744&amp;usg=AOvVaw3msnJfnY42BvLgfi3GQ_Fz">Low-code
					development platforms</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming&amp;sa=D&amp;source=editors&amp;ust=1682924986955924&amp;usg=AOvVaw07aC0qwCY41pzY5iLhjkuN">Pair
					programming</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Planning_poker&amp;sa=D&amp;source=editors&amp;ust=1682924986956104&amp;usg=AOvVaw0sKV-u-KMyR4WsOK5Rzgn2">Planning
					poker</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Refactoring&amp;sa=D&amp;source=editors&amp;ust=1682924986956286&amp;usg=AOvVaw2NIHSwKhfzgNSkicbcrQbc">Refactoring</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Retrospective&amp;sa=D&amp;source=editors&amp;ust=1682924986956476&amp;usg=AOvVaw0w83zvxM8hzf5ceOJDUYlu">Retrospective</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(development)&amp;sa=D&amp;source=editors&amp;ust=1682924986956661&amp;usg=AOvVaw06yoWbxR0sPO54VO4O7SJa">Scrum
					events</a></span><span class="c1 svelte-wamett"> (sprint planning, daily scrum, sprint review and
				retrospective) *</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Story-driven_modeling&amp;sa=D&amp;source=editors&amp;ust=1682924986956848&amp;usg=AOvVaw0x712nuVc_B8iMvJS6HyGO">Story-driven
					modeling</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Test-driven_development&amp;sa=D&amp;source=editors&amp;ust=1682924986957039&amp;usg=AOvVaw2f-FLqYfijphChG4u2uQqW">Test-driven
					development</a></span><span class="c1 svelte-wamett"> (TDD)</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Timeboxing&amp;sa=D&amp;source=editors&amp;ust=1682924986957235&amp;usg=AOvVaw0uld3HkBGU5KlCCwb59j3S">Timeboxing</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c2 c4 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/User_story&amp;sa=D&amp;source=editors&amp;ust=1682924986957414&amp;usg=AOvVaw0l5cAZO4WWvcvUQS0pxu26">User
					story</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">User story mapping</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Velocity_(software_development)&amp;sa=D&amp;source=editors&amp;ust=1682924986957658&amp;usg=AOvVaw2VYLH3DKg8OGlduw9XcCXF">Velocity
					tracking</a></span></li></ul> 
	<p class="c24 c29 c33 svelte-wamett"><span class="c1 svelte-wamett"></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">The Agile Alliance has provided a comprehensive online guide to applying these and
			other practices.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Agile_Practices_Guide-42&amp;sa=D&amp;source=editors&amp;ust=1682924986957940&amp;usg=AOvVaw3ulTYAx_auEl4-sA5wEKAp">[42]</a></span></p> 
	<h3 class="c7 svelte-wamett"><span class="c32 c2 svelte-wamett">Method tailoring[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D16&amp;sa=D&amp;source=editors&amp;ust=1682924986958173&amp;usg=AOvVaw3g77vy92MG6ulRiYeIy7DU">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 svelte-wamett"><span class="c1 svelte-wamett">In the literature, different terms refer to the notion of method adaptation,
			including &#39;method tailoring&#39;, &#39;method fragment adaptation&#39; and &#39;situational method
			engineering&#39;. Method tailoring is defined as:</span></p> 
	<p class="c3 svelte-wamett"><span class="c1 svelte-wamett">A process or capability in which human agents determine a system development approach
			for a specific project situation through responsive changes in, and dynamic interplays between contexts,
			intentions, and method fragments.</span></p> 
	<p class="c26 svelte-wamett"><span class="c2 svelte-wamett">— </span><span class="c2 c11 svelte-wamett">Mehmet Nafiz Aydin et al., An Agile Information
			Systems Development Method in use</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Aydin2004-43&amp;sa=D&amp;source=editors&amp;ust=1682924986958565&amp;usg=AOvVaw0p7gk1q0KN5xTi4Xzugkmb">[43]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Situation-appropriateness should be considered as a distinguishing characteristic
			between agile methods and more plan-driven software development methods, with agile methods allowing product
			development teams to adapt working practices according to the needs of individual products.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-44&amp;sa=D&amp;source=editors&amp;ust=1682924986958810&amp;usg=AOvVaw3XW_n4SHWoerpTtX65Ptt3">[44]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Aydin2004-43&amp;sa=D&amp;source=editors&amp;ust=1682924986958954&amp;usg=AOvVaw149BOR0BI0iooh5Pr_GleC">[43]</a></span><span class="c2 svelte-wamett"> Potentially, most agile methods could be suitable for method tailoring,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Abrahamsson2002-40&amp;sa=D&amp;source=editors&amp;ust=1682924986959135&amp;usg=AOvVaw1UhddDnE40vNkLxds-TUNJ">[40]</a></span><span class="c2 svelte-wamett"> such as </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Dynamic_Systems_Development_Method&amp;sa=D&amp;source=editors&amp;ust=1682924986959317&amp;usg=AOvVaw0csKZ9Hbq-bSwAZDts8OwV">DSDM</a></span><span class="c2 svelte-wamett"> tailored in a </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Capability_Maturity_Model&amp;sa=D&amp;source=editors&amp;ust=1682924986959477&amp;usg=AOvVaw1Br8SwCjXwMDM2wZdmZPQN">CMM</a></span><span class="c2 svelte-wamett"> context.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Abrahamsson2003-45&amp;sa=D&amp;source=editors&amp;ust=1682924986959644&amp;usg=AOvVaw2eg_7yLz5wkLkWDTanq5Po">[45]</a></span><span class="c2 svelte-wamett"> and XP tailored with the </span><span class="c2 c11 svelte-wamett">Rule Description
			Practices</span><span class="c2 svelte-wamett"> (RDP) technique.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-46&amp;sa=D&amp;source=editors&amp;ust=1682924986959847&amp;usg=AOvVaw2FKkS3Rx6yDwNEQdkYEOdh">[46]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Aydin2005-47&amp;sa=D&amp;source=editors&amp;ust=1682924986959997&amp;usg=AOvVaw1wjao3tIEvl-DO16nAY7Gi">[47]</a></span><span class="c2 svelte-wamett"> Not all agile proponents agree, however, with Schwaber noting &quot;that is how we got into
			trouble in the first place, thinking that the problem was not having a perfect methodology. Efforts [should]
			center on the changes [needed] in the enterprise&quot;.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-48&amp;sa=D&amp;source=editors&amp;ust=1682924986960185&amp;usg=AOvVaw3jose3gcZzw9Kh7qkIL3O_">[48]</a></span><span class="c2 svelte-wamett"> Bas Vodde reinforced this viewpoint, suggesting that unlike traditional, large
			methodologies that require you to pick and choose elements, Scrum provides the basics on top of which you
			add additional elements to localise and contextualise its use.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-49&amp;sa=D&amp;source=editors&amp;ust=1682924986960388&amp;usg=AOvVaw0BLZnZzclv_zC404chg594">[49]</a></span></p> 
	<h3 class="c7 svelte-wamett"><span class="c32 c2 svelte-wamett">Large-scale, offshore and distributed[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D17&amp;sa=D&amp;source=editors&amp;ust=1682924986960646&amp;usg=AOvVaw3UvM3l2dcr03_yZxvmLjZw">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Agile software development has been widely seen as highly suited to certain types of
			environments, including small teams of experts working on </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Greenfield_project&amp;sa=D&amp;source=editors&amp;ust=1682924986960917&amp;usg=AOvVaw0g8vnd1KcGcDn8UKVvjGe1">greenfield
				projects</a></span><span class="c2 svelte-wamett">, and the challenges and limitations encountered in the adoption of
			agile software development methods in a large organization with </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Legacy_system&amp;sa=D&amp;source=editors&amp;ust=1682924986961084&amp;usg=AOvVaw3R10Jw0o4wdtOV2a3iXwvJ">legacy
				infrastructure</a></span><span class="c1 svelte-wamett"> are well-documented and understood.</span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">In response, a range of strategies and patterns has evolved for overcoming challenges
			with large-scale development efforts (&gt;20 developers)</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-ambler2006-52&amp;sa=D&amp;source=editors&amp;ust=1682924986961340&amp;usg=AOvVaw2bPA057IZaYGJ2fEKZZuDT">[52]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-sstc2007-53&amp;sa=D&amp;source=editors&amp;ust=1682924986961496&amp;usg=AOvVaw0K7L2n-uwuUljFvr8f1Znx">[53]</a></span><span class="c1 svelte-wamett"> or distributed (non-colocated) development teams, amongst other challenges; and there
			are now several recognised frameworks that seek to mitigate or avoid these challenges.</span></p> 
	<ul class="c13 lst-kix_kwtivhg30tk8-0 start svelte-wamett"><li class="c24 c31 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scaled_Agile_Framework&amp;sa=D&amp;source=editors&amp;ust=1682924986961730&amp;usg=AOvVaw3a68W486-JHhgy9aKfCl4w">Scaled
					agile framework</a></span><span class="c2 svelte-wamett"> (SAFe),</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-56&amp;sa=D&amp;source=editors&amp;ust=1682924986962086&amp;usg=AOvVaw2ClX9pseklJtNzWnO9tz7p">[56]</a></span><span class="c2 svelte-wamett"> Dean Leffingwell </span><span class="c2 c11 svelte-wamett">inter alia</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Disciplined_agile_delivery&amp;sa=D&amp;source=editors&amp;ust=1682924986962598&amp;usg=AOvVaw3IcSVpBXHOnmkmGH4IdLQc">Disciplined
					agile delivery</a></span><span class="c2 svelte-wamett"> (DAD), </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scott_Ambler&amp;sa=D&amp;source=editors&amp;ust=1682924986962856&amp;usg=AOvVaw3UKsT_0TmW77YomCyoi3Ii">Scott
					Ambler</a></span><span class="c2 svelte-wamett"> </span><span class="c2 c11 svelte-wamett">inter alia</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Large-Scale_Scrum&amp;sa=D&amp;source=editors&amp;ust=1682924986963187&amp;usg=AOvVaw3LEYezW7uQ_siRCWdwCCVU">Large-scale
					scrum</a></span><span class="c2 svelte-wamett"> (LeSS), </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Craig_Larman&amp;sa=D&amp;source=editors&amp;ust=1682924986963380&amp;usg=AOvVaw0-bYUkg7fknSl6M57A-co1">Craig
					Larman</a></span><span class="c1 svelte-wamett"> and Bas Vodde</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Nexus (scaled professional Scrum),</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-57&amp;sa=D&amp;source=editors&amp;ust=1682924986963673&amp;usg=AOvVaw37JT7yIBkcvS4jWRNoWYw2">[57]</a></span><span class="c2 svelte-wamett"> </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Ken_Schwaber&amp;sa=D&amp;source=editors&amp;ust=1682924986963861&amp;usg=AOvVaw3jkl_AziAbY9RP40otln67">Ken
					Schwaber</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Scrum at Scale,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-58&amp;sa=D&amp;source=editors&amp;ust=1682924986964232&amp;usg=AOvVaw3ZvFDBMp4P2zAHlgJv7JJG">[58]</a></span><span class="c2 svelte-wamett"> </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Jeff_Sutherland&amp;sa=D&amp;source=editors&amp;ust=1682924986964449&amp;usg=AOvVaw0SOk9t5T5HCqTtzeD0nbfZ">Jeff
					Sutherland</a></span><span class="c1 svelte-wamett">, Alex Brown</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Enterprise Scrum,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-59&amp;sa=D&amp;source=editors&amp;ust=1682924986964778&amp;usg=AOvVaw2QjSXp2kUPggFjXtR0goMw">[59]</a></span><span class="c1 svelte-wamett"> Mike Beedle</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Setchu (Scrum-based lightweight framework),</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-60&amp;sa=D&amp;source=editors&amp;ust=1682924986965111&amp;usg=AOvVaw2TtUb8jP2SWHcQUa6dydVv">[60]</a></span><span class="c1 svelte-wamett"> Michael Ebbage</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Xscale</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-61&amp;sa=D&amp;source=editors&amp;ust=1682924986965442&amp;usg=AOvVaw21BCZTOF37qKfhtRctbx0f">[61]</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Agile path</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-62&amp;sa=D&amp;source=editors&amp;ust=1682924986965767&amp;usg=AOvVaw2rL9jrSXbz19xihJjWEJxx">[62]</a></span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Holistic Software Development </span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-63&amp;sa=D&amp;source=editors&amp;ust=1682924986966109&amp;usg=AOvVaw0pVbKa-DHFGWAfSYocKW4K">[63]</a></span></li></ul> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">There are many conflicting viewpoints on whether all of these are effective or indeed
			fit the definition of agile development, and this remains an active and ongoing area of
			research.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-ambler2006-52&amp;sa=D&amp;source=editors&amp;ust=1682924986966467&amp;usg=AOvVaw2MX4oawtIdJHtVlzFEFBJl">[52]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-oopsla2002-64&amp;sa=D&amp;source=editors&amp;ust=1682924986966680&amp;usg=AOvVaw06hisopmdjPDplnRwiZNBY">[64]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c1 svelte-wamett">When agile software development is applied in a distributed setting (with teams
			dispersed across multiple business locations), it is commonly referred to as distributed agile development.
			The goal is to leverage the unique benefits offered by each approach. Distributed development allow
			organizations to build software by strategically setting up teams in different parts of the globe, virtually
			building software round-the-clock (more commonly referred to as follow-the-sun model). On the other hand,
			agile development provides increased transparency, continuous feedback and more flexibility when responding
			to changes.</span></p> 
	<h3 class="c7 svelte-wamett"><span class="c32 c2 svelte-wamett">Regulated domains[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D18&amp;sa=D&amp;source=editors&amp;ust=1682924986967186&amp;usg=AOvVaw2c1e0MzcLzEimzLUfV_8QV">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Agile software development methods were initially seen as best suitable for
			non-critical product developments, thereby excluded from use in regulated domains such as medical devices,
			pharmaceutical, financial, nuclear systems, automotive, and avionics sectors, etc. However, in the last
			several years, there have been several initiatives for the adaptation of agile methods for these
			domains.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Fitzgerald2013-65&amp;sa=D&amp;source=editors&amp;ust=1682924986967665&amp;usg=AOvVaw1XNKNuKkSx8Nljisb81ULH">[65]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Cawley2010-66&amp;sa=D&amp;source=editors&amp;ust=1682924986967891&amp;usg=AOvVaw17NyjVQ654X7uqU1KpWl4Y">[66]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-McHugh2014-67&amp;sa=D&amp;source=editors&amp;ust=1682924986968144&amp;usg=AOvVaw0fYi6A6XhNUd97MUF4pqNf">[67]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">There are numerous standards that may apply in regulated domains,
			including </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/ISO_26262&amp;sa=D&amp;source=editors&amp;ust=1682924986968509&amp;usg=AOvVaw1VX9FQC9bupU_sVf0uOSiR">ISO
				26262</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/ISO_9000&amp;sa=D&amp;source=editors&amp;ust=1682924986968712&amp;usg=AOvVaw12_MWKBdDAypM3FOTxfvNn">ISO
				9000</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/ISO_9001&amp;sa=D&amp;source=editors&amp;ust=1682924986968921&amp;usg=AOvVaw0kqQjNaGhEw_g9SoBboxC-">ISO
				9001</a></span><span class="c2 svelte-wamett">, and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/ISO/IEC_15504&amp;sa=D&amp;source=editors&amp;ust=1682924986969196&amp;usg=AOvVaw3u9YwCSgeY7oVlFDX2LR3D">ISO/IEC
				15504</a></span><span class="c2 svelte-wamett">. A number of key concerns are of particular importance in regulated
			domains:</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Fitzgerald2013-65&amp;sa=D&amp;source=editors&amp;ust=1682924986969479&amp;usg=AOvVaw39V9ftyRxxssHsF5veWyGk">[65]</a></span></p> 
	<ul class="c13 lst-kix_w7lnz2uxeyac-0 start svelte-wamett"><li class="c24 c31 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Quality_assurance&amp;sa=D&amp;source=editors&amp;ust=1682924986969784&amp;usg=AOvVaw2spV005edToGMo4DmFTHLJ">Quality
					assurance</a></span><span class="c1 svelte-wamett"> (QA): Systematic and inherent quality management
				underpinning a controlled professional process and reliability and correctness of product.</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Safety and security: Formal planning and risk management to mitigate
				safety risks for users and securely protecting users from unintentional and malicious misuse.</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Traceability: Documentation providing auditable evidence of
				regulatory compliance and facilitating traceability and investigation of problems.</span></li> 
		<li class="c9 li-bullet-0 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Verification_and_Validation&amp;sa=D&amp;source=editors&amp;ust=1682924986970317&amp;usg=AOvVaw2GaQ4O-pTMx_QVJ_8_wWpO">Verification
					and Validation</a></span><span class="c1 svelte-wamett"> (V&amp;V): Embedded throughout the software
				development process (e.g. user requirements specification, functional specification, design
				specification, code review, unit tests, integration tests, system tests).</span></li></ul> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">The </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(development)&amp;sa=D&amp;source=editors&amp;ust=1682924986970585&amp;usg=AOvVaw3O4nCIQVx-lAgY59DXchj0">Scrum</a></span><span class="c2 svelte-wamett"> framework in particular has received considerable attention. Two derived methods have been
			defined: R-Scrum (Regulated Scrum)</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Fitzgerald2013-65&amp;sa=D&amp;source=editors&amp;ust=1682924986970807&amp;usg=AOvVaw2FpBdZTk1uTG8O_7vj-sCy">[65]</a></span><span class="c2 svelte-wamett"> and SafeScrum.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-SafeScrum-68&amp;sa=D&amp;source=editors&amp;ust=1682924986971029&amp;usg=AOvVaw3CQ0rcXeCRzUy6LSR9R3T_">[68]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-69&amp;sa=D&amp;source=editors&amp;ust=1682924986971239&amp;usg=AOvVaw07orvZD23hfHTXhJO4opTj">[69]</a></span></p> 
	<h2 class="c16 svelte-wamett"><span class="c10 c2 svelte-wamett">Experience and adoption</span></h2> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Although agile software development methods can be used with any programming paradigm
			or language in practice, they were originally closely associated with object-oriented environments such as
			Smalltalk and Lisp and later Java. The initial adopters of agile methods were usually small to medium-sized
			teams working on unprecedented systems with requirements that were difficult to finalize and likely to
			change as the system was being developed. This section describes common problems that organizations
			encounter when they try to adopt agile software development methods as well as various techniques to measure
			the quality and performance of agile teams.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-70&amp;sa=D&amp;source=editors&amp;ust=1682924986971826&amp;usg=AOvVaw254jF-KVDjbnN4SlYZYHZI">[70]</a></span></p> 
	<h3 class="c7 svelte-wamett"><span class="c1 svelte-wamett">Measuring agility</span></h3> 
	<p class="c3 svelte-wamett" id="h.23ckvvd"><span class="c1 svelte-wamett">The best agile practitioners have always emphasized sound engineering
			principles. As a result, there are a number of best practices and tools for measuring the performance of
			agile software development and teams.</span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Internal assessments</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">The </span><span class="c2 c11 svelte-wamett">Agility measurement index</span><span class="c2 svelte-wamett">, amongst others, rates developments against five dimensions of product development (duration,
			risk, novelty, effort, and interaction).</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-71&amp;sa=D&amp;source=editors&amp;ust=1682924986972626&amp;usg=AOvVaw1EdJx9kGPf2LJx_eiK-tGD">[71]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-72&amp;sa=D&amp;source=editors&amp;ust=1682924986972831&amp;usg=AOvVaw3rodOXDuypuX9Feqxxt6qN">[72]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Other techniques are based on measurable goals</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-73&amp;sa=D&amp;source=editors&amp;ust=1682924986973196&amp;usg=AOvVaw0X8fzAgp_8YxuU-qStUWel">[73]</a></span><span class="c2 svelte-wamett"> and one study suggests that </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Velocity_(software_development)&amp;sa=D&amp;source=editors&amp;ust=1682924986973440&amp;usg=AOvVaw1daFQWUDZxYf_JTCCwjq8a">velocity</a></span><span class="c2 svelte-wamett"> can be used as a metric of agility.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Kurian_2006-74&amp;sa=D&amp;source=editors&amp;ust=1682924986973703&amp;usg=AOvVaw2o-JwVzO6WL-a29IDvPMqU">[74]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">There are also agile self-assessments to determine whether a team is using agile
			software development practices (Nokia test,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-75&amp;sa=D&amp;source=editors&amp;ust=1682924986974062&amp;usg=AOvVaw13spjWph2AT5Tdjw_1EbWJ">[75]</a></span><span class="c2 svelte-wamett"> Karlskrona test,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-76&amp;sa=D&amp;source=editors&amp;ust=1682924986974306&amp;usg=AOvVaw23uDMuTTimNHAAHKCTbMAX">[76]</a></span><span class="c2 svelte-wamett"> 42 points test</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-77&amp;sa=D&amp;source=editors&amp;ust=1682924986974550&amp;usg=AOvVaw0EDSScgAd8GE9TyjGfsYY2">[77]</a></span><span class="c1 svelte-wamett">).</span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Public surveys</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">One of the early studies reporting gains in quality, productivity, and business
			satisfaction by using agile software developments methods was a survey conducted by Shine Technologies from
			November 2002 to January 2003.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-78&amp;sa=D&amp;source=editors&amp;ust=1682924986975010&amp;usg=AOvVaw3-P2SEz2472gAOybVlxQZv">[78]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">A similar survey, the </span><span class="c2 c11 svelte-wamett">State of Agile</span><span class="c2 svelte-wamett">, is conducted every year starting in 2006 with thousands of participants from around the
			software development community. This tracks trends on the benefits of agility, lessons learned, and good
			practices. Each survey has reported increasing numbers saying that agile software development helps them
			deliver software faster; improves their ability to manage changing customer priorities; and increases their
			productivity.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-79&amp;sa=D&amp;source=editors&amp;ust=1682924986975418&amp;usg=AOvVaw2AFsqVnvhvcjNmL6oT9ZWw">[79]</a></span><span class="c2 svelte-wamett"> Surveys have also consistently shown better results with agile product development methods
			compared to classical project management.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-80&amp;sa=D&amp;source=editors&amp;ust=1682924986975676&amp;usg=AOvVaw2e6tCNdGmscixq4SO7i_ke">[80]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-81&amp;sa=D&amp;source=editors&amp;ust=1682924986975899&amp;usg=AOvVaw3119cwad1LotccYzwkT0Ot">[81]</a></span><span class="c2 svelte-wamett"> In balance, there are reports that some feel that agile development methods are still too
			young to enable extensive academic research of their success.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-82&amp;sa=D&amp;source=editors&amp;ust=1682924986976151&amp;usg=AOvVaw0BT27H5HYkJsCvtHtlH63O">[82]</a></span></p> 
	<h3 class="c7 svelte-wamett"><span class="c1 svelte-wamett">Common agile software development pitfalls</span></h3> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Organizations and teams implementing agile software development often face
			difficulties transitioning from more traditional methods such as </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Waterfall_development&amp;sa=D&amp;source=editors&amp;ust=1682924986976600&amp;usg=AOvVaw2oYHimBNdvHcPkC6_dYO7c">waterfall
				development</a></span><span class="c2 svelte-wamett">, such as teams having an agile process forced on
			them.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-The_Art_of_Agile_Development-83&amp;sa=D&amp;source=editors&amp;ust=1682924986976851&amp;usg=AOvVaw1J4ckpGY88HRaJH2W3PMV0">[83]</a></span><span class="c2 svelte-wamett"> These are often termed </span><span class="c2 c11 svelte-wamett">agile anti-patterns</span><span class="c2 svelte-wamett"> or more commonly </span><span class="c2 c11 svelte-wamett">agile smells</span><span class="c1 svelte-wamett">.
			Below are some common examples:</span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Lack of overall product design</span></h4> 
	<p class="c3 svelte-wamett"><span class="c1 svelte-wamett">A goal of agile software development is to focus more on producing working software
			and less on documentation. This is in contrast to waterfall models where the process is often highly
			controlled and minor changes to the system require significant revision of supporting documentation.
			However, this does not justify completely doing without any analysis or design at all. Failure to pay
			attention to design can cause a team to proceed rapidly at first but then to have significant rework
			required as they attempt to scale up the system. One of the key features of agile software development is
			that it is iterative. When done correctly design emerges as the system is developed and commonalities and
			opportunities for re-use are discovered.</span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Adding stories to an iteration in progress</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">In agile software development, </span><span class="c2 c11 svelte-wamett">stories (</span><span class="c2 svelte-wamett">similar to </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Use_case&amp;sa=D&amp;source=editors&amp;ust=1682924986977741&amp;usg=AOvVaw184fVrpmpDdAOn8B3nNc0v">use
				case</a></span><span class="c2 svelte-wamett"> descriptions) are typically used to define requirements and
			an </span><span class="c2 c11 svelte-wamett">iteration</span><span class="c2 svelte-wamett"> is a short period of time during
			which the team commits to specific goals.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-85&amp;sa=D&amp;source=editors&amp;ust=1682924986978047&amp;usg=AOvVaw2Ad95yo_O4EZ9SzGMX65i-">[85]</a></span><span class="c2 svelte-wamett"> Adding stories to an iteration in progress is detrimental to a good flow of work. These
			should be added to the product backlog and prioritized for a subsequent iteration or in rare cases the
			iteration could be cancelled.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-axisagile.com.au-86&amp;sa=D&amp;source=editors&amp;ust=1682924986978327&amp;usg=AOvVaw0erWccKiI591SH61DICjls">[86]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c1 svelte-wamett">This does not mean that a story cannot expand. Teams must deal with new information,
			which may produce additional tasks for a story. If the new information prevents the story from being
			completed during the iteration, then it should be carried over to a subsequent iteration. However, it should
			be prioritized against all remaining stories, as the new information may have changed the story&#39;s
			original priority.</span></p> 
	<h4 class="c7 svelte-wamett"><span class="c2 c11 c23 svelte-wamett">Lack of sponsor support</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Agile software development is often implemented as a grassroots effort in
			organizations by software development teams trying to optimize their development processes and ensure
			consistency in the software development life cycle. By not having sponsor support, teams may face
			difficulties and resistance from business partners, other development teams and management. Additionally,
			they may suffer without appropriate funding and resources.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-87&amp;sa=D&amp;source=editors&amp;ust=1682924986978950&amp;usg=AOvVaw23K_KVAjqYRVeiPk2cNSfO">[87]</a></span><span class="c2 svelte-wamett"> This increases the likelihood of failure.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-88&amp;sa=D&amp;source=editors&amp;ust=1682924986979242&amp;usg=AOvVaw1v1vkwdB07Oq6ZVz_FRlMf">[88]</a></span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Insufficient training</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">A survey performed by VersionOne found respondents cited insufficient training as the
			most significant cause for failed agile implementations</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-89&amp;sa=D&amp;source=editors&amp;ust=1682924986979735&amp;usg=AOvVaw0AwObxLe5UqpUrAp5LwRca">[89]</a></span><span class="c1 svelte-wamett"> Teams have fallen into the trap of assuming the reduced processes of agile software
			development compared to other methodologies such as waterfall means that there are no actual rules for agile
			software development. Agile software development is a set of prescribed methodologies, and training/practice
			is a requirement.</span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Product owner role is not properly filled</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">The </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Product_owner&amp;sa=D&amp;source=editors&amp;ust=1682924986980230&amp;usg=AOvVaw37GtM1WtVxZhRQN_SRZSsc">product
				owner</a></span><span class="c1 svelte-wamett"> is responsible for representing the business in the development
			activity and is often the most demanding role.</span></p> 
	<p class="c3 svelte-wamett"><span class="c1 svelte-wamett">A common mistake is to have the product owner role filled by someone from the
			development team. This requires the team to make its own decisions on prioritization without real feedback
			from the business. They try to solve business issues internally or delay work as they reach outside the team
			for direction. This often leads to distraction and a breakdown in collaboration.</span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Teams are not focused</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Agile software development requires teams to meet product commitments, which means
			they should focus only on work for that product. However, team members who appear to have spare capacity are
			often expected to take on other work, which makes it difficult for them to help complete the work to which
			their team had committed.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-92&amp;sa=D&amp;source=editors&amp;ust=1682924986980841&amp;usg=AOvVaw2ufsPbbwwkr2RvGdc8IgNs">[92]</a></span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Excessive preparation/planning</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Teams may fall into the trap of spending too much time preparing or planning. This is
			a common trap for teams less familiar with agile software development where the teams feel obliged to have a
			complete understanding and specification of all stories. Teams should be prepared to move forward only with
			those stories in which they have confidence, then during the iteration continue to discover and prepare work
			for subsequent iterations (often referred to as </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Refinement_(computing)&amp;sa=D&amp;source=editors&amp;ust=1682924986981391&amp;usg=AOvVaw1pHCgv4lmDy-EtnLI7NKB4">backlog
				refinement</a></span><span class="c1 svelte-wamett"> or grooming).</span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Problem-solving in the daily standup</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">A daily standup should be a focused, timely meeting where all team members
			disseminate information. If problem-solving occurs, it often can only involve certain team members and
			potentially is not the best use of the entire team&#39;s time. If during the daily standup the team starts
			diving into problem-solving, it should be set aside until a sub-team can discuss, usually immediately after
			the standup completes.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-93&amp;sa=D&amp;source=editors&amp;ust=1682924986981908&amp;usg=AOvVaw3bvCfmASGW09YxZzaWNXDB">[93]</a></span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Assigning tasks</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">One of the intended benefits of agile software development is to empower the team to
			make choices, as they are closest to the problem. Additionally, they should make choices as close to
			implementation as possible, to use more timely information in the decision. If team members are assigned
			tasks by others or too early in the process, the benefits of localized and timely decision making can be
			lost.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Effective_Sprint_Planning-94&amp;sa=D&amp;source=editors&amp;ust=1682924986982444&amp;usg=AOvVaw1OhE4YeH4S_5k-o0q1yk5G">[94]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Being assigned work also constrains team members into certain roles (for example,
			team member A must always do the database work), which limits opportunities for cross-training.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Effective_Sprint_Planning-94&amp;sa=D&amp;source=editors&amp;ust=1682924986982852&amp;usg=AOvVaw0JBiY2G4ZzMizHzl3ZuV9K">[94]</a></span><span class="c1 svelte-wamett"> Team members themselves can choose to take on tasks that stretch their abilities and
			provide cross-training opportunities.</span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Scrum master as a contributor</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Another common pitfall is for a scrum master to act as a contributor. While not
			prohibited by the Scrum methodology, the scrum master needs to ensure they have the capacity to act in the
			role of scrum master first and not working on development tasks. A scrum master&#39;s role is to facilitate
			the process rather than create the product.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-agileconnection.com-95&amp;sa=D&amp;source=editors&amp;ust=1682924986983583&amp;usg=AOvVaw334FCwvvB9_0YBZ0vHXTPG">[95]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Having the scrum master also multitasking may result in too many context switches to
			be productive. Additionally, as a scrum master is responsible for ensuring roadblocks are removed so that
			the team can make forward progress, the benefit gained by individual tasks moving forward may not outweigh
			roadblocks that are deferred due to lack of capacity.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-agileconnection.com-95&amp;sa=D&amp;source=editors&amp;ust=1682924986984023&amp;usg=AOvVaw0xK3v78TyK-o-6xLO-yFNs">[95]</a></span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Lack of test automation</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Due to the iterative nature of agile development, multiple rounds of testing are
			often needed. Automated testing helps reduce the impact of repeated unit, integration, and regression tests
			and frees developers and testers to focus on higher value work.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-96&amp;sa=D&amp;source=editors&amp;ust=1682924986984659&amp;usg=AOvVaw0zkGseNjbewd1Qi5ODG2gO">[96]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Test automation also supports continued </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Refactoring&amp;sa=D&amp;source=editors&amp;ust=1682924986984954&amp;usg=AOvVaw3LEWYicwUSfxGfU0uCkexy">refactoring</a></span><span class="c1 svelte-wamett"> required by iterative software development. Allowing a developer to quickly run tests to
			confirm refactoring has not modified the functionality of the application may reduce the workload and
			increase confidence that cleanup efforts have not introduced new defects.</span></p> 
	<h4 class="c7 svelte-wamett"><span class="c23 c2 c11 svelte-wamett">Allowing technical debt to build up</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Focusing on delivering new functionality may result in increased </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Technical_debt&amp;sa=D&amp;source=editors&amp;ust=1682924986985438&amp;usg=AOvVaw2eGq8LYgPqp8O5gv8USQCJ">technical
				debt</a></span><span class="c2 svelte-wamett">. The team must allow themselves time for defect remediation and
			refactoring. Technical debt hinders planning abilities by increasing the amount of unscheduled work as
			production defects distract the team from further progress.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Technical_Debt_%2B_Red_October-97&amp;sa=D&amp;source=editors&amp;ust=1682924986985727&amp;usg=AOvVaw2xM3WxkSuqA4pQhC2UMl85">[97]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">As the system evolves it is important to </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Code_refactoring&amp;sa=D&amp;source=editors&amp;ust=1682924986986037&amp;usg=AOvVaw0LTmGTUD3DJbOHiVjjOZ4s">refactor</a></span><span class="c2 svelte-wamett"> as entropy of the system naturally increases.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-98&amp;sa=D&amp;source=editors&amp;ust=1682924986986283&amp;usg=AOvVaw3sRB4LIS5J91xKC137mKaF">[98]</a></span><span class="c2 svelte-wamett"> Over time the lack of constant maintenance causes increasing defects and development
			costs.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Technical_Debt_%2B_Red_October-97&amp;sa=D&amp;source=editors&amp;ust=1682924986986552&amp;usg=AOvVaw0lT-co75NqcUPehMh3mS50">[97]</a></span></p> 
	<h4 class="c7 svelte-wamett"><span class="c32 c11 svelte-wamett">Attempting to take on too much in an iteration[</span><span class="c4 c32 c11 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D36&amp;sa=D&amp;source=editors&amp;ust=1682924986986920&amp;usg=AOvVaw2QRQ6LuwEWgoPA3fWLG96Q">edit</a></span><span class="c23 c2 c11 svelte-wamett">]</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">A common misconception is that agile software development allows continuous change,
			however an iteration backlog is an agreement of what work can be completed during an iteration.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-99&amp;sa=D&amp;source=editors&amp;ust=1682924986987343&amp;usg=AOvVaw3cJRqROdX5DFHctMhmlIWF">[99]</a></span><span class="c2 svelte-wamett"> Having too much </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Work_in_process&amp;sa=D&amp;source=editors&amp;ust=1682924986987570&amp;usg=AOvVaw34zwc_26qttJoaXN8cRcqJ">work-in-progress
				(WIP)</a></span><span class="c2 svelte-wamett"> results in inefficiencies such as context-switching and
			queueing.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-100&amp;sa=D&amp;source=editors&amp;ust=1682924986987817&amp;usg=AOvVaw2a-vWCE11bNNj2gOf0vLpH">[100]</a></span><span class="c2 svelte-wamett"> The team must avoid feeling pressured into taking on additional work.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-101&amp;sa=D&amp;source=editors&amp;ust=1682924986988066&amp;usg=AOvVaw1Gtvf7QND250DXtrWJlm-u">[101]</a></span></p> 
	<h4 class="c7 svelte-wamett"><span class="c32 c11 svelte-wamett">Fixed time, resources, scope, and quality[</span><span class="c4 c11 c32 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D37&amp;sa=D&amp;source=editors&amp;ust=1682924986988446&amp;usg=AOvVaw1RQPtNU5pB14pSjIh9AcMD">edit</a></span><span class="c23 c2 c11 svelte-wamett">]</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Agile software development fixes time (iteration duration), quality, and ideally
			resources in advance (though maintaining fixed resources may be difficult if developers are often pulled
			away from tasks to handle production incidents), while the scope remains variable. The customer or product
			owner often push for a fixed scope for an iteration. However, teams should be reluctant to commit to the
			locked time, resources and scope (commonly known as the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Project_management_triangle&amp;sa=D&amp;source=editors&amp;ust=1682924986988876&amp;usg=AOvVaw2Ea67Z251uq-e4OO5aajq-">project
				management triangle</a></span><span class="c2 svelte-wamett">). Efforts to add scope to the fixed time and resources
			of agile software development may result in decreased quality.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-adeptechllc.com-102&amp;sa=D&amp;source=editors&amp;ust=1682924986989149&amp;usg=AOvVaw0AsD7rGerpd3aALDXUKDMz">[102]</a></span></p> 
	<h4 class="c7 svelte-wamett"><span class="c32 c11 svelte-wamett">Developer burnout[</span><span class="c4 c32 c11 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D38&amp;sa=D&amp;source=editors&amp;ust=1682924986989610&amp;usg=AOvVaw25jGxsWh1OGkD3B6fYHun-">edit</a></span><span class="c23 c2 c11 svelte-wamett">]</span></h4> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Due to the focused pace and continuous nature of agile practices, there is a
			heightened risk of burnout among member of the delivery team. </span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-103&amp;sa=D&amp;source=editors&amp;ust=1682924986989986&amp;usg=AOvVaw3t9jgI7IpoNLnbLSoN6XLN">[103]</a></span></p> 
	<h2 class="c16 svelte-wamett"><span class="c10 c2 svelte-wamett">Agile management[</span><span class="c4 c10 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D39&amp;sa=D&amp;source=editors&amp;ust=1682924986990285&amp;usg=AOvVaw1jXsqvBk9MoPRgLdQSrNuv">edit</a></span><span class="c10 c2 svelte-wamett">]</span></h2> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">The term &quot;agile management&quot; is applied to an iterative, incremental method
			of managing the design and build activities of engineering, information technology and other business areas
			that aim to provide new product or service development in a highly flexible and interactive manner, based on
			the principles expressed in the </span><span class="c2 c11 svelte-wamett">Manifesto for Agile Software
			Development</span><span class="c2 svelte-wamett">.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-104&amp;sa=D&amp;source=editors&amp;ust=1682924986990644&amp;usg=AOvVaw2p_tiO3rF-gtTW8auVq66v">[104]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Agile X techniques may also be called </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Extreme_project_management&amp;sa=D&amp;source=editors&amp;ust=1682924986990894&amp;usg=AOvVaw30c2SF98DnsDLxk6kT9PYg">extreme
				project management</a></span><span class="c2 svelte-wamett">. It is a variant of </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Iterative_and_incremental_development&amp;sa=D&amp;source=editors&amp;ust=1682924986991056&amp;usg=AOvVaw28Tth3ukhVeBd5HaTmtCnW">iterative
				life cycle</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-105&amp;sa=D&amp;source=editors&amp;ust=1682924986991387&amp;usg=AOvVaw2Pq6nDUGi19JaTuufdw4zI">[105]</a></span><span class="c2 svelte-wamett"> where </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Deliverable&amp;sa=D&amp;source=editors&amp;ust=1682924986991548&amp;usg=AOvVaw1Wlc0xLFMUysjb4kOL2Aji">deliverables</a></span><span class="c2 svelte-wamett"> are submitted in stages. The main difference between agile and iterative development is
			that agile methods complete small portions of the deliverables in each delivery cycle
			(iteration),</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-106&amp;sa=D&amp;source=editors&amp;ust=1682924986991748&amp;usg=AOvVaw3YsClQNRbIddz8fsBgDS9R">[106]</a></span><span class="c1 svelte-wamett">while iterative methods evolve the entire set of deliverables over time, completing them near the
			end of the project. Both iterative and agile methods were developed as a reaction to various obstacles that
			developed in more sequential forms of project organization. For example, as technology projects grow in
			complexity, end users tend to have difficulty defining the long-term requirements without being able to view
			progressive prototypes. Projects that develop in iterations can constantly gather feedback to help refine
			those requirements.</span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Agile management also offers a simple framework promoting communication and
			reflection on past </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Work_(project_management)&amp;sa=D&amp;source=editors&amp;ust=1682924986992013&amp;usg=AOvVaw0D64EaZfcjJKg2Iy_VOyLV">work</a></span><span class="c2 svelte-wamett"> amongst </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Project_team&amp;sa=D&amp;source=editors&amp;ust=1682924986992160&amp;usg=AOvVaw1jz1XYvdany8zhzumEo68B">team</a></span><span class="c2 svelte-wamett"> members.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-107&amp;sa=D&amp;source=editors&amp;ust=1682924986992329&amp;usg=AOvVaw0mRo3hnW_9SGH9oDcM6vVI">[107]</a></span><span class="c2 svelte-wamett"> Teams who were using traditional waterfall planning and adopted the agile way of
			development typically go through a transformation phase and often take help from agile coaches who help
			guide the teams through a smooth transformation. There are typically two styles of agile coaching:
			push-based and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pull-based_agile_coaching&amp;sa=D&amp;source=editors&amp;ust=1682924986992511&amp;usg=AOvVaw326ZOZHU7qcXyPDHECngcT">pull-based
				agile coaching</a></span><span class="c2 svelte-wamett">. Agile management approaches have also been employed and
			adapted to the business and government sectors. For example, within the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Federal_government_of_the_United_States&amp;sa=D&amp;source=editors&amp;ust=1682924986992684&amp;usg=AOvVaw3v3J5GcfvBJqq2UgvVbHET">federal
				government of the United States</a></span><span class="c2 svelte-wamett">, the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/United_States_Agency_for_International_Development&amp;sa=D&amp;source=editors&amp;ust=1682924986992850&amp;usg=AOvVaw15bwh3FwQWsFxTJHFlGES_">United
				States Agency for International Development</a></span><span class="c2 svelte-wamett"> (USAID) is employing
			a </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Collaborative_project_management&amp;sa=D&amp;source=editors&amp;ust=1682924986993007&amp;usg=AOvVaw3ynOIzEznuWKetC-iU__4-">collaborative
				project management</a></span><span class="c2 svelte-wamett"> approach that focuses on
			incorporating </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Collaborating,_learning_and_adapting&amp;sa=D&amp;source=editors&amp;ust=1682924986993172&amp;usg=AOvVaw2SE1kinS6EXjU1Wsj1h4yi">collaborating,
				learning and adapting</a></span><span class="c2 svelte-wamett"> (CLA) strategies to iterate and adapt
			programming.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-108&amp;sa=D&amp;source=editors&amp;ust=1682924986993378&amp;usg=AOvVaw0Kh9590x6_WxxwJZS5O8iQ">[108]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Agile methods are mentioned in the </span><span class="c2 c11 svelte-wamett">Guide to the
			Project Management Body of Knowledge</span><span class="c2 svelte-wamett"> (</span><span class="c2 c11 svelte-wamett">PMBOK
			Guide</span><span class="c1 svelte-wamett">) under the Project Lifecycle definition:</span></p> 
	<p class="c3 svelte-wamett"><span class="c10 c2 svelte-wamett">Adaptive project life cycle</span><span class="c2 svelte-wamett">, a project life cycle, also
			known as change-driven or agile methods, that is intended to facilitate change and require a high degree of
			ongoing </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Project_stakeholders&amp;sa=D&amp;source=editors&amp;ust=1682924986993764&amp;usg=AOvVaw2w62xy4nLphF4lLGCYSX_H">stakeholder</a></span><span class="c2 svelte-wamett"> involvement. Adaptive life cycles are also iterative and incremental, but differ in that
			iterations are very rapid (usually 2-4 weeks in length) and are fixed in time and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Resource_(project_management)&amp;sa=D&amp;source=editors&amp;ust=1682924986993928&amp;usg=AOvVaw11hrUAfDibyOvX-3vt5j83">resources</a></span><span class="c2 svelte-wamett">.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-109&amp;sa=D&amp;source=editors&amp;ust=1682924986994087&amp;usg=AOvVaw0akrzhJD21CGuyfuL7DylU">[109]</a></span></p> 
	<h3 class="c7 svelte-wamett"><span class="c32 c2 svelte-wamett">Applications outside software development[</span><span class="c4 c32 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D40&amp;sa=D&amp;source=editors&amp;ust=1682924986994337&amp;usg=AOvVaw0ZeXycqBFEAets4S3L9hmR">edit</a></span><span class="c1 svelte-wamett">]</span></h3> 
	<p class="c20 svelte-wamett"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 220.00px; height: 164.80px;" class="svelte-wamett"><img alt="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Agile_Brazil_2014_conference_entrance.jpg/220px-Agile_Brazil_2014_conference_entrance.jpg" src="images/image4.jpg" style="width: 220.00px; height: 164.80px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" class="svelte-wamett"/></span></p> 
	<p class="c19 svelte-wamett"><span class="c1 svelte-wamett">Agile Brazil 2014 conference</span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">According to Jean-Loup Richet (Research Fellow at </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/ESSEC&amp;sa=D&amp;source=editors&amp;ust=1682924986994731&amp;usg=AOvVaw08DxYgsowEvS8WvW7_obBN">ESSEC</a></span><span class="c2 svelte-wamett"> Institute for Strategic Innovation &amp; Services) &quot;this approach can be leveraged
			effectively for non-software products and for project management in general, especially in areas of
			innovation and uncertainty.&quot; The end result is a product or project that best meets current customer
			needs and is delivered with minimal costs, waste, and time, enabling companies to achieve bottom line gains
			earlier than via traditional approaches.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-110&amp;sa=D&amp;source=editors&amp;ust=1682924986994919&amp;usg=AOvVaw01Tu0wgFCnJ-tNpqXvOiPy">[110]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Agile software development methods have been extensively used for development of
			software products and some of them use certain characteristics of software, such as object
			technologies.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-Smith2007-111&amp;sa=D&amp;source=editors&amp;ust=1682924986995147&amp;usg=AOvVaw1cTvj6PImeMpsRjJdHS_Ey">[111]</a></span><span class="c2 svelte-wamett"> However, these techniques can be applied to the development of non-software products, such
			as computers, motor vehicles,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-112&amp;sa=D&amp;source=editors&amp;ust=1682924986995326&amp;usg=AOvVaw0QjD5jYbsA14RsPSHyxfDB">[112]</a></span><span class="c2 svelte-wamett"> medical devices, food, clothing, and music;</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-113&amp;sa=D&amp;source=editors&amp;ust=1682924986995504&amp;usg=AOvVaw0v7H1jANy2ZIpSJou6dem8">[113]</a></span><span class="c2 svelte-wamett">see </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Flexible_product_development&amp;sa=D&amp;source=editors&amp;ust=1682924986995666&amp;usg=AOvVaw14cJdS4Rvx0mIwOJI1GKZw">Flexible
				product development</a></span><span class="c2 svelte-wamett">. Agile software development methods have been used in
			non-development </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/IT_infrastructure&amp;sa=D&amp;source=editors&amp;ust=1682924986995814&amp;usg=AOvVaw2b_1zr5ijQkFFn2PMJQ1cD">IT
				infrastructure</a></span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/IT_infrastructure_deployment&amp;sa=D&amp;source=editors&amp;ust=1682924986995946&amp;usg=AOvVaw0E7mRBrzOX99BaxeF-iga9">deployments
				and migrations</a></span><span class="c2 svelte-wamett">. Some of the wider principles of agile software development
			have also found application in general management</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-114&amp;sa=D&amp;source=editors&amp;ust=1682924986996103&amp;usg=AOvVaw2UoS4ZcNYU2C-WeqiFmZfw">[114]</a></span><span class="c2 svelte-wamett"> (e.g., strategy, governance, risk, finance) under the terms </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Business_agility&amp;sa=D&amp;source=editors&amp;ust=1682924986996253&amp;usg=AOvVaw1OHW385DFBdS8rSt9_mw4Q">business
				agility</a></span><span class="c1 svelte-wamett"> or agile business management.</span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Under an agile business management model, agile software development techniques,
			practices, principles and values are expressed across five domains.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-115&amp;sa=D&amp;source=editors&amp;ust=1682924986996482&amp;usg=AOvVaw16LFAPAoxCOaSTQ8H-z8Cn">[115]</a></span></p> 
	<ol class="c13 lst-kix_s9dn5a4r3zhi-0 start svelte-wamett" start="1"><li class="c24 c37 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Integrated </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Customer_engagement&amp;sa=D&amp;source=editors&amp;ust=1682924986996729&amp;usg=AOvVaw2G9CgYYOezodUxvFYVLLT8">customer
					engagement</a></span><span class="c1 svelte-wamett">: to embed customers within any delivery process to share
				accountability for product/service delivery.</span></li> 
		<li class="c22 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Facilitation-based management: adopting agile management models,
				like the role of </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_Master&amp;sa=D&amp;source=editors&amp;ust=1682924986996957&amp;usg=AOvVaw1pluAI2oe05Dbsq91j8WAR">Scrum
					Master</a></span><span class="c1 svelte-wamett">, to facilitate the day-to-day operation of teams.</span></li> 
		<li class="c22 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Agile work practices: adopting specific iterative and incremental
				work practices such as </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)&amp;sa=D&amp;source=editors&amp;ust=1682924986997208&amp;usg=AOvVaw1HwFeEITrlX1hvhtlaoVAO">Scrum</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Kanban_(development)&amp;sa=D&amp;source=editors&amp;ust=1682924986997405&amp;usg=AOvVaw1xjh0h-U_UfjVRZQevglpU">Kanban</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Test-driven_development&amp;sa=D&amp;source=editors&amp;ust=1682924986997580&amp;usg=AOvVaw2VAo_PUYmQ5CS_Xent-Drh">test-driven
					development</a></span><span class="c2 svelte-wamett"> or </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Feature-driven_development&amp;sa=D&amp;source=editors&amp;ust=1682924986997750&amp;usg=AOvVaw0fu77PrurTMj4p_Is98laH">feature-driven
					development</a></span><span class="c2 svelte-wamett"> across all business functions (from
				sales, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Human_resources&amp;sa=D&amp;source=editors&amp;ust=1682924986997895&amp;usg=AOvVaw0fePnbgQ2yY7A7-sNCp1GL">human
					resources</a></span><span class="c2 svelte-wamett">, finance</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-116&amp;sa=D&amp;source=editors&amp;ust=1682924986998048&amp;usg=AOvVaw0wb5Z2zOg2t410IDXoCI3G">[116]</a></span><span class="c2 svelte-wamett"> and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Marketing&amp;sa=D&amp;source=editors&amp;ust=1682924986998188&amp;usg=AOvVaw0PqvRYju2mKUgaZDMYAGaC">marketing</a></span><span class="c1 svelte-wamett">).</span></li> 
		<li class="c22 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">An enabling organisational structure: with a focus on
				staff </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Engagement_marketing&amp;sa=D&amp;source=editors&amp;ust=1682924986998403&amp;usg=AOvVaw2eqPxwLkO9dGV_qhYxUves">engagement</a></span><span class="c1 svelte-wamett">, personal autonomy and outcomes based governance.</span></li> 
		<li class="c22 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">Applications of agile process (along with </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/DevOps&amp;sa=D&amp;source=editors&amp;ust=1682924986998605&amp;usg=AOvVaw1P1RoUHG_eiO2yj7c0s8m-">DevOps</a></span><span class="c2 svelte-wamett"> and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Lean_manufacturing&amp;sa=D&amp;source=editors&amp;ust=1682924986998756&amp;usg=AOvVaw1JgFD7n9gGS2VKyKDF0Hvr">lean
					manufacturing</a></span><span class="c2 svelte-wamett">), to </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Data_analysis&amp;sa=D&amp;source=editors&amp;ust=1682924986998893&amp;usg=AOvVaw2ZN0rAHbmQw_lexURpttEs">data
					analytics</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Business_intelligence&amp;sa=D&amp;source=editors&amp;ust=1682924986999036&amp;usg=AOvVaw2Rxu4tKKmUbiKl82QSj0vD">business
					intelligence</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Big_data&amp;sa=D&amp;source=editors&amp;ust=1682924986999178&amp;usg=AOvVaw2PmeQsUYgq5V19L2f___tC">big
					data</a></span><span class="c2 svelte-wamett">, and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Data_science&amp;sa=D&amp;source=editors&amp;ust=1682924986999322&amp;usg=AOvVaw1WSYKCDwAohxnsI5CfVsdI">data
					science</a></span><span class="c2 svelte-wamett"> is called </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Dataops&amp;sa=D&amp;source=editors&amp;ust=1682924986999458&amp;usg=AOvVaw3ogqY3MqhbDrVypwIxNDrr">DataOps</a></span></li></ol> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Agile software development paradigms can be used in other areas of life such as
			raising children. Its success in child development might be founded on some basic management principles;
			communication, adaptation, and awareness. Bruce Feiler has claimed that the basic agile development
			paradigms can be applied to household management and raising children. In his </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/TED_(conference)&amp;sa=D&amp;source=editors&amp;ust=1682924986999708&amp;usg=AOvVaw0j_2Wd870rnRllZMlTC_iZ">TED
				Talk</a></span><span class="c2 svelte-wamett"> &quot;</span><span class="c2 c11 svelte-wamett">Agile programming – for
			your family</span><span class="c2 svelte-wamett">&quot;,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-117&amp;sa=D&amp;source=editors&amp;ust=1682924986999906&amp;usg=AOvVaw0QlxC_NJRrGpt-S4MgzIPc">[117]</a></span><span class="c1 svelte-wamett"> these paradigms brought significant changes to his household environment, such as the kids
			doing dishes, taking out the trash, and decreasing his children&#39;s emotional outbreaks, which
			inadvertently increased their emotional stability.</span></p> 
	<h2 class="c16 svelte-wamett"><span class="c10 c2 svelte-wamett">Criticism[</span><span class="c4 c10 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DAgile_software_development%26action%3Dedit%26section%3D41&amp;sa=D&amp;source=editors&amp;ust=1682924987000152&amp;usg=AOvVaw1N1sIfvkoYd5pYP9207uNc">edit</a></span><span class="c10 c2 svelte-wamett">]</span></h2> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Agile practices can be inefficient in large organizations and certain types of
			developments.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-118&amp;sa=D&amp;source=editors&amp;ust=1682924987000446&amp;usg=AOvVaw0duNqKEzp6kfJtESL4nBp1">[118]</a></span><span class="c2 svelte-wamett"> Many organizations believe that agile software development methodologies are too extreme
			and adopt a Hybrid approach </span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-119&amp;sa=D&amp;source=editors&amp;ust=1682924987000634&amp;usg=AOvVaw3ZFOCz47Je_Q-A_guGXOFV">[119]</a></span><span class="c2 svelte-wamett"> that mixes elements of agile software development and plan-driven approaches.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-120&amp;sa=D&amp;source=editors&amp;ust=1682924987000807&amp;usg=AOvVaw3gGEOeVKR8fRFQnBq5aKOW">[120]</a></span><span class="c2 svelte-wamett"> Some methods, such as </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Dynamic_systems_development_method&amp;sa=D&amp;source=editors&amp;ust=1682924987000966&amp;usg=AOvVaw2pRPX35UgKvADYOP1SRIwY">dynamic
				systems development method</a></span><span class="c1 svelte-wamett"> (DSDM) attempt this in a disciplined way,
			without sacrificing fundamental principles.</span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">The increasing adoption of agile practices has also been criticized as being
			a </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Management_fad&amp;sa=D&amp;source=editors&amp;ust=1682924987001184&amp;usg=AOvVaw2Tc35rr7pqbgXPclupBsy7">management
				fad</a></span><span class="c2 svelte-wamett"> that simply describes existing good practices under new jargon,
			promotes a &quot;one size fits all&quot; mindset towards development strategies, and wrongly emphasizes
			method over results.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-121&amp;sa=D&amp;source=editors&amp;ust=1682924987001363&amp;usg=AOvVaw2WP5F660E6Gv5b7_0LRk0E">[121]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Alistair_Cockburn&amp;sa=D&amp;source=editors&amp;ust=1682924987001560&amp;usg=AOvVaw0LtWhSFcFfT1eaP_-9Yukx">Alistair
				Cockburn</a></span><span class="c2 svelte-wamett"> organized a celebration of the 10th anniversary of
			the </span><span class="c2 c11 svelte-wamett">Manifesto for Agile Software Development</span><span class="c2 svelte-wamett"> in Snowbird, Utah on 12 February 2011, gathering some 30+ people who had been involved at
			the original meeting and since. A list of about 20 </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Elephant_in_the_room&amp;sa=D&amp;source=editors&amp;ust=1682924987001904&amp;usg=AOvVaw3ThdcqsGAGd8F4XP4vL5UK">elephants
				in the room</a></span><span class="c2 svelte-wamett"> (&quot;undiscussable&quot; agile topics/issues) were
			collected, including aspects: the alliances, failures and limitations of agile software development
			practices and context (possible causes: commercial interests, decontextualization, no obvious way to make
			progress based on failure, limited objective evidence, cognitive biases and reasoning fallacies), politics
			and culture.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-TeenAgile-122&amp;sa=D&amp;source=editors&amp;ust=1682924987002085&amp;usg=AOvVaw1ebTjSZL4L_widMeqI1Bt6">[122]</a></span><span class="c2 svelte-wamett"> As </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Philippe_Kruchten&amp;sa=D&amp;source=editors&amp;ust=1682924987002245&amp;usg=AOvVaw2O18txY3weHSnBa-8O65Aj">Philippe
				Kruchten</a></span><span class="c1 svelte-wamett"> wrote:</span></p> 
	<p class="c3 svelte-wamett"><span class="c1 svelte-wamett">The agile movement is in some ways a bit like a teenager: very self-conscious,
			checking constantly its appearance in a mirror, accepting few criticisms, only interested in being with its
			peers, rejecting en bloc all wisdom from the past, just because it is from the past, adopting fads and new
			jargon, at times cocky and arrogant. But I have no doubts that it will mature further, become more open to
			the outside world, more reflective, and therefore, more effective.</span></p> 
	<p class="c26 svelte-wamett"><span class="c2 svelte-wamett">— </span><span class="c2 c11 svelte-wamett">Philippe Kruchten</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development%23cite_note-TeenAgile-122&amp;sa=D&amp;source=editors&amp;ust=1682924987002584&amp;usg=AOvVaw0YHyNX5a6Wbck8wD-wZZoq">[122]</a></span></p> 
	<p class="c26 svelte-wamett"><span class="c1 svelte-wamett">-https://en.wikipedia.org/wiki/Agile_software_development</span></p> 
	<p class="c26 c29 svelte-wamett"><span class="c1 svelte-wamett"></span></p> 
	<p class="c3 c14 svelte-wamett"><span class="c10 c2 svelte-wamett">Agile modeling</span><span class="c2 svelte-wamett"> (AM) is a methodology
			for </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Software_development_process_models&amp;sa=D&amp;source=editors&amp;ust=1682924987002959&amp;usg=AOvVaw2bStHuHY5mibgIwIMeAyUh">modeling</a></span><span class="c2 svelte-wamett"> and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Documentation&amp;sa=D&amp;source=editors&amp;ust=1682924987003116&amp;usg=AOvVaw2zGvFnbXIoao3BHmXrAgmW">documenting</a></span><span class="c2 svelte-wamett"> software systems based on best practices. It is a collection of values and principles, that
			can be applied on an (agile) software development project. This methodology is more flexible than
			traditional modeling methods, making it a better fit in a fast changing environment.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_modeling%23cite_note-1&amp;sa=D&amp;source=editors&amp;ust=1682924987003291&amp;usg=AOvVaw1wYsonNhIIVyhb4LMKTF81">[1]</a></span><span class="c2 svelte-wamett"> It is part of the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development&amp;sa=D&amp;source=editors&amp;ust=1682924987003443&amp;usg=AOvVaw0GErWDDLOV1pPhcPKK1W41">agile
				software development</a></span><span class="c1 svelte-wamett"> tool kit.</span></p> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">Agile modeling is a supplement to other </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_development&amp;sa=D&amp;source=editors&amp;ust=1682924987003658&amp;usg=AOvVaw1-PJyzmzUcjcIZU0QNO6tH">agile
				development</a></span><span class="c2 svelte-wamett"> methodologies such as </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(development)&amp;sa=D&amp;source=editors&amp;ust=1682924987003812&amp;usg=AOvVaw0DzenSV0xYWnCfw2sD_FyC">Scrum</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Extreme_programming&amp;sa=D&amp;source=editors&amp;ust=1682924987003962&amp;usg=AOvVaw3cSuPMsN2kyB_U-7ied9bD">extreme
				programming</a></span><span class="c2 svelte-wamett"> (XP), and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Rational_Unified_Process&amp;sa=D&amp;source=editors&amp;ust=1682924987004116&amp;usg=AOvVaw0VLrx2a3xdvCkRgjPF01PL">Rational
				Unified Process</a></span><span class="c2 svelte-wamett"> (RUP). It is explicitly included as part of
			the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Disciplined_agile_delivery&amp;sa=D&amp;source=editors&amp;ust=1682924987004282&amp;usg=AOvVaw1SLCd78XpPAyr85mBxTAKG">disciplined
				agile delivery</a></span><span class="c2 svelte-wamett"> (DAD) framework. As per 2011 stats, agile modeling
			accounted for 1% of all agile software development.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_modeling%23cite_note-2&amp;sa=D&amp;source=editors&amp;ust=1682924987004443&amp;usg=AOvVaw05Wq9UQEVJGuJ6QWMLmCrw">[2]</a></span><span class="c1 svelte-wamett"> </span></p> 
	<h1 class="c26 c34 svelte-wamett"><span class="c2 svelte-wamett">https://en.wikipedia.org/wiki/Agile_modeling</span><span class="c10 c2 svelte-wamett"><br class="svelte-wamett"/>Kanban (development)</span></h1> 
	<p class="c26 svelte-wamett"><span class="c1 svelte-wamett">From Wikipedia, the free encyclopedia</span></p> 
	<p class="c26 svelte-wamett"><span class="c2 c11 svelte-wamett">This article is about the process-management and improvement method. For the
			lean-manufacturing process, see </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Kanban&amp;sa=D&amp;source=editors&amp;ust=1682924987004838&amp;usg=AOvVaw1fiuUZLn-sXqYpA9tcVQWA">Kanban</a></span><span class="c2 c11 svelte-wamett">.</span><span class="c10 c2 svelte-wamett"> Kanban</span><span class="c1 svelte-wamett"> is a lean method to
			manage and improve work across human systems. This approach aims to manage work by balancing the demands
			with available capacity, and improving the handling of system level bottlenecks.</span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">Work items are visualized to give participants a view of progress and process, from
			start to finish usually via a Kanban board. Work is </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Push%25E2%2580%2593pull_strategy&amp;sa=D&amp;source=editors&amp;ust=1682924987005160&amp;usg=AOvVaw0MC3oT8tpMopvKOI54azsj">pulled</a></span><span class="c1 svelte-wamett"> as capacity permits, rather than work being pushed into the process when requested.</span></p> 
	<p class="c3 svelte-wamett"><span class="c2 svelte-wamett">In </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Knowledge_worker&amp;sa=D&amp;source=editors&amp;ust=1682924987005375&amp;usg=AOvVaw34WeL05sKsH7mTS4KdsvHY">knowledge
				work</a></span><span class="c2 svelte-wamett"> and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Software_development&amp;sa=D&amp;source=editors&amp;ust=1682924987005520&amp;usg=AOvVaw3YyoPw4bdxRFrNCow6nJpL">software
				development</a></span><span class="c2 svelte-wamett">, this provides a visual </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Process_management&amp;sa=D&amp;source=editors&amp;ust=1682924987005703&amp;usg=AOvVaw1MPENVeYB0tMU0ZcqnnEUH">process
				management</a></span><span class="c2 svelte-wamett"> system which aids decision-making about what, when and how
			much to produce. Although the underlying </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Kanban&amp;sa=D&amp;source=editors&amp;ust=1682924987005885&amp;usg=AOvVaw0KXFyMjg8Dm_sPRsRyxY7k">Kanban</a></span><span class="c2 svelte-wamett"> method originated in </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Lean_manufacturing&amp;sa=D&amp;source=editors&amp;ust=1682924987006033&amp;usg=AOvVaw3lK3b2rZPwRI8su7WrQ87k">lean
				manufacturing</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Kanban_(development)%23cite_note-1&amp;sa=D&amp;source=editors&amp;ust=1682924987006196&amp;usg=AOvVaw38pmRVDv5JbDgyjMXbKX3Z">[1]</a></span><span class="c2 svelte-wamett"> (inspired by the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Toyota_Production_System&amp;sa=D&amp;source=editors&amp;ust=1682924987006352&amp;usg=AOvVaw2WU2FTYP-9v2c_jk8G-MF7">Toyota
				Production System</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Kanban_(development)%23cite_note-2&amp;sa=D&amp;source=editors&amp;ust=1682924987006490&amp;usg=AOvVaw3tfy479nad9tssgGUiD6j_">[2]</a></span><span class="c2 svelte-wamett">) it is used mainly for software development and technology related work. However Kanban can be
			applied to any area of work, and it can even be combined with other methods or frameworks such
			as </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)&amp;sa=D&amp;source=editors&amp;ust=1682924987006669&amp;usg=AOvVaw25B0YY3xT2aJfPoBkt71DX">Scrum</a></span><span class="c2 svelte-wamett">.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Kanban_(development)%23cite_note-3&amp;sa=D&amp;source=editors&amp;ust=1682924987006840&amp;usg=AOvVaw3t-DnK5bsyQQHamrRrFIFW">[3]</a></span></p> 
	<p class="c3 svelte-wamett"><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Kanban_(development)&amp;sa=D&amp;source=editors&amp;ust=1682924987007060&amp;usg=AOvVaw3JR6i7sM9c4Tq5xwDxI7pH">https://en.wikipedia.org/wiki/Kanban_(development)</a></span></p> 
	<p class="c3 c29 svelte-wamett"><span class="c30 c2 svelte-wamett"></span></p> 
	<p class="c3 c29 svelte-wamett"><span class="c1 svelte-wamett"></span></p> 
	<p class="c14 c26 svelte-wamett"><span class="c10 c2 c11 svelte-wamett">&quot;RAD tool&quot; and &quot;Rapid Application Development
			Tool&quot;</span><span class="c2 c11 svelte-wamett"> redirect here. For development tools focused on making graphical
			user interfaces, see </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Graphical_user_interface_builder&amp;sa=D&amp;source=editors&amp;ust=1682924987007403&amp;usg=AOvVaw3ghtLQG48MclI5pKMYxRk0">graphical
				user interface builder</a></span><span class="c2 c11 svelte-wamett">.</span><span class="c10 c2 svelte-wamett"> Rapid-application development</span><span class="c2 svelte-wamett"> (</span><span class="c10 c2 svelte-wamett">RAD</span><span class="c2 svelte-wamett">) is both a general term, used to refer to adaptive software
			development approaches, as well as the name for </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/James_Martin_(author)&amp;sa=D&amp;source=editors&amp;ust=1682924987007622&amp;usg=AOvVaw3gQNz-JhPh4tEOnDzXvr0w">James
				Martin</a></span><span class="c1 svelte-wamett">&#39;s approach to rapid development. In general, RAD approaches to
			software development put less emphasis on planning and more emphasis on an adaptive process. Prototypes are
			often used in addition to or sometimes even in place of design specifications.</span></p> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">RAD is especially well suited for (although not limited to) developing software
			that is driven by user interface requirements. </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Graphical_user_interface_builder&amp;sa=D&amp;source=editors&amp;ust=1682924987007874&amp;usg=AOvVaw2QPpuzPC2hSgtntq3BKL_l">Graphical
				user interface builders</a></span><span class="c2 svelte-wamett"> are often called rapid application development
			tools. Other approaches to rapid development include the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Adaptive_software_development&amp;sa=D&amp;source=editors&amp;ust=1682924987008036&amp;usg=AOvVaw2q9oglQCzYzhIWi1ND0VEr">adaptive</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development&amp;sa=D&amp;source=editors&amp;ust=1682924987008192&amp;usg=AOvVaw39r0DqQzwRQ_8TYM0PMMsP">agile</a></span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Spiral_model&amp;sa=D&amp;source=editors&amp;ust=1682924987008335&amp;usg=AOvVaw2R637PJBioGYpFjKL3HJRh">spiral</a></span><span class="c2 svelte-wamett">, and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Unified_Process&amp;sa=D&amp;source=editors&amp;ust=1682924987008472&amp;usg=AOvVaw1ARpvxrmp4hiZ3p8UswPdL">unified</a></span><span class="c1 svelte-wamett"> models.</span></p> 
	<p class="c3 c14 svelte-wamett"><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Rapid_application_development&amp;sa=D&amp;source=editors&amp;ust=1682924987008685&amp;usg=AOvVaw099DrRPMe9ZYta7H3YUMm5">https://en.wikipedia.org/wiki/Rapid_application_development</a></span></p> 
	<p class="c3 c29 c14 svelte-wamett"><span class="c1 svelte-wamett"></span></p> 
	<p class="c24 c29 svelte-wamett"><span class="c1 svelte-wamett"></span></p> 
	<h1 class="c26 c34 svelte-wamett"><span class="c10 c2 svelte-wamett">Scrum (software development)</span></h1> 
	<p class="c26 svelte-wamett"><span class="c10 c2 svelte-wamett">Scrum</span><span class="c2 svelte-wamett"> is an </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development&amp;sa=D&amp;source=editors&amp;ust=1682924987009098&amp;usg=AOvVaw2-qBmJnPOa-MKMS30CL5Yb">agile</a></span><span class="c2 svelte-wamett"> framework for managing work with an emphasis on </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Software_development&amp;sa=D&amp;source=editors&amp;ust=1682924987009253&amp;usg=AOvVaw1ndAUhR8OpZZMu4cUmxcvD">software
				development</a></span><span class="c2 svelte-wamett">. It is designed for teams of three to nine developers who break
			their work into actions that can be completed within timeboxed iterations, called </span><span class="c2 c11 svelte-wamett">sprints</span><span class="c2 svelte-wamett"> (typically two-weeks) and track progress and re-plan in
			15-minute </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Stand-up_meeting&amp;sa=D&amp;source=editors&amp;ust=1682924987009440&amp;usg=AOvVaw1xOqrNYazEmItia8T6R0-t">stand-up
				meetings</a></span><span class="c2 svelte-wamett">, called </span><span class="c2 c11 svelte-wamett">daily scrums</span><span class="c2 svelte-wamett">.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)%23cite_note-schwaber-1&amp;sa=D&amp;source=editors&amp;ust=1682924987009643&amp;usg=AOvVaw1Fx9CeuarqynEznebsUpEd">[1]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)%23cite_note-2&amp;sa=D&amp;source=editors&amp;ust=1682924987009793&amp;usg=AOvVaw3ZIK3aSkwVuJ8jgIGEr_xX">[2]</a></span><span class="c2 svelte-wamett"> Approaches to coordinating the work of multiple scrum teams in larger organizations
			include </span><span class="c2 c11 svelte-wamett">Large-Scale Scrum</span><span class="c2 svelte-wamett">, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scaled_agile_framework&amp;sa=D&amp;source=editors&amp;ust=1682924987009981&amp;usg=AOvVaw3Vl1JrLhtiCgnOBPP6FL4G">Scaled
				Agile Framework</a></span><span class="c2 c11 svelte-wamett"> (SAFe)</span><span class="c2 svelte-wamett"> and </span><span class="c2 c11 svelte-wamett">Scrum of Scrums</span><span class="c1 svelte-wamett">, among
			others.</span></p> 
	<h2 class="c16 c14 svelte-wamett"><span class="c10 c2 svelte-wamett">Key ideas[</span><span class="c4 c2 c10 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/w/index.php?title%3DScrum_(software_development)%26action%3Dedit%26section%3D1&amp;sa=D&amp;source=editors&amp;ust=1682924987010284&amp;usg=AOvVaw1CtKV4tSfHSs9lRDvHJttV">edit</a></span><span class="c10 c2 svelte-wamett">]</span></h2> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">Scrum is an </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Iterative_design&amp;sa=D&amp;source=editors&amp;ust=1682924987010577&amp;usg=AOvVaw0ZkTWMXrUhyFUX0ShGfeWA">iterative</a></span><span class="c2 svelte-wamett"> and </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Iterative_and_incremental_development&amp;sa=D&amp;source=editors&amp;ust=1682924987010788&amp;usg=AOvVaw1-kkuudkM3u7BU4IC72R_4">incremental</a></span><span class="c2 svelte-wamett"> framework for managing product development.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)%23cite_note-scrumalliance-3&amp;sa=D&amp;source=editors&amp;ust=1682924987010983&amp;usg=AOvVaw3h_HWwQnBpi_Zrh8IcEEAA">[3]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)%23cite_note-gunther-4&amp;sa=D&amp;source=editors&amp;ust=1682924987011134&amp;usg=AOvVaw0K5I-gbiZdTKzldUEDLKVl">[4]</a></span><span class="c2 svelte-wamett"> It defines &quot;a flexible, </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Holism&amp;sa=D&amp;source=editors&amp;ust=1682924987011290&amp;usg=AOvVaw2x4RMjzq47QTozxD9zdZJS">holistic</a></span><span class="c2 svelte-wamett"> product development strategy where a development team works as a unit to reach a common
			goal&quot;,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)%23cite_note-TakeuchiNonaka-5&amp;sa=D&amp;source=editors&amp;ust=1682924987011469&amp;usg=AOvVaw36TTTl80vcqjO2p3u1WHf_">[5]</a></span><span class="c2 svelte-wamett"> challenges assumptions of the &quot;traditional, sequential approach&quot;</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)%23cite_note-TakeuchiNonaka-5&amp;sa=D&amp;source=editors&amp;ust=1682924987011648&amp;usg=AOvVaw1VFfy4BjyVUx_OMofFxJfz">[5]</a></span><span class="c2 svelte-wamett"> to product development, and enables teams to self-organize by encouraging
			physical </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Colocation_(business)&amp;sa=D&amp;source=editors&amp;ust=1682924987011828&amp;usg=AOvVaw2YfgdJjVRuYoRZAncWtYfc">co-location</a></span><span class="c1 svelte-wamett"> or close online collaboration of all team members, as well as daily face-to-face
			communication among all team members and disciplines involved.</span></p> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">A key principle of Scrum is the dual recognition that customers will change their
			minds about what they want or need (often called requirements volatility</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)%23cite_note-6&amp;sa=D&amp;source=editors&amp;ust=1682924987012088&amp;usg=AOvVaw1nOB-1ki3FDiEKpdHDVehe">[6]</a></span><span class="c2 svelte-wamett">) and that there will be unpredictable challenges—for which a predictive or planned
			approach is not suited. As such, Scrum adopts an evidence-based </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Empirical_process&amp;sa=D&amp;source=editors&amp;ust=1682924987012276&amp;usg=AOvVaw0rqfIVGCGmuGRUnRR5CMI7">empirical
				approach</a></span><span class="c1 svelte-wamett">—accepting that the problem cannot be fully understood or
			defined up front, and instead focusing on how to maximize the team&#39;s ability to deliver quickly, to
			respond to emerging requirements, and to adapt to evolving technologies and changes in market
			conditions.</span></p> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">Many of the terms used in Scrum (e.g., scrum master) are typically written with
			leading capitals (i.e., Scrum Master) or as conjoint words written in </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Camel_case&amp;sa=D&amp;source=editors&amp;ust=1682924987012559&amp;usg=AOvVaw1J-WZvlAUG6X5CATs3Apez">camel
				case</a></span><span class="c2 svelte-wamett">(i.e., ScrumMaster). To maintain an encyclopedic tone, however, this
			article uses normal sentence case for these terms—unless they are recognized marks (such
			as </span><span class="c2 c11 svelte-wamett">Certified Scrum Master</span><span class="c2 svelte-wamett">). This is occasionally
			seen written in all-capitals, as SCRUM.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)%23cite_note-7&amp;sa=D&amp;source=editors&amp;ust=1682924987012778&amp;usg=AOvVaw3sxTnwBwRUXUxPn-DkgJce">[7]</a></span><span class="c2 svelte-wamett"> The word is not an </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Acronym&amp;sa=D&amp;source=editors&amp;ust=1682924987012916&amp;usg=AOvVaw3rMsOwqMjnqBYLN5hHWr0h">acronym</a></span><span class="c2 svelte-wamett">, so this is not correct; however, it likely arose due to an early paper by Ken Schwaber which
			capitalized SCRUM in its title.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)%23cite_note-schwaber-1&amp;sa=D&amp;source=editors&amp;ust=1682924987013081&amp;usg=AOvVaw1OcSOMVyhjm9a58fle6t45">[1]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)%23cite_note-8&amp;sa=D&amp;source=editors&amp;ust=1682924987013224&amp;usg=AOvVaw1ETxqYrcvjXtU_MdeB7jpl">[8]</a></span></p> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">While the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Trademark&amp;sa=D&amp;source=editors&amp;ust=1682924987013432&amp;usg=AOvVaw3c4tXOFpojCvh5i0ijuQtl">trademark</a></span><span class="c2 svelte-wamett"> on the term Scrum itself has been allowed to lapse, so that it is deemed as owned by the
			wider community rather than an individual,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)%23cite_note-9&amp;sa=D&amp;source=editors&amp;ust=1682924987013606&amp;usg=AOvVaw3caetmxsXnqNs0xgMkYdNa">[9]</a></span><span class="c2 svelte-wamett"> the leading capital is retained—except when used with other words (as
			in </span><span class="c2 c11 svelte-wamett">daily scrum</span><span class="c2 svelte-wamett"> or </span><span class="c2 c11 svelte-wamett">scrum team</span><span class="c2 svelte-wamett">). - </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Scrum_(software_development)&amp;sa=D&amp;source=editors&amp;ust=1682924987013862&amp;usg=AOvVaw14MwM-qmiG-S8BBwpGGzOP">https://en.wikipedia.org/wiki/Scrum_(software_development)</a></span></p> 
	<p class="c3 c29 c14 svelte-wamett"><span class="c1 svelte-wamett"></span></p> 
	<h1 class="c26 c34 svelte-wamett"><span class="c10 c2 svelte-wamett">Pair programming</span></h1> 
	<p class="c20 svelte-wamett"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 330.40px; height: 248.00px;" class="svelte-wamett"><img alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Pair_programming_1.jpg/330px-Pair_programming_1.jpg" src="images/image2.jpg" style="width: 330.40px; height: 248.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="" class="svelte-wamett"/></span></p> 
	<p class="c19 svelte-wamett"><span class="c1 svelte-wamett">Two co-workers pair programming</span></p> 
	<p class="c3 svelte-wamett"><span class="c10 c2 svelte-wamett">Pair programming</span><span class="c2 svelte-wamett"> is an </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Agile_software_development&amp;sa=D&amp;source=editors&amp;ust=1682924987014403&amp;usg=AOvVaw0sIbfPmvRG6KutyRnhtQi_">agile
				software development</a></span><span class="c2 svelte-wamett"> technique in which two </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Computer_programmer&amp;sa=D&amp;source=editors&amp;ust=1682924987014551&amp;usg=AOvVaw3ZyrqZvqsv1aQ8okY-PVgC">programmers</a></span><span class="c2 svelte-wamett"> work together at one workstation. One, the </span><span class="c2 c11 svelte-wamett">driver</span><span class="c2 svelte-wamett">, writes </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Source_code&amp;sa=D&amp;source=editors&amp;ust=1682924987014749&amp;usg=AOvVaw1FNSvhiUgslRd1VWUGxMCb">code</a></span><span class="c2 svelte-wamett"> while the other, the </span><span class="c2 c11 svelte-wamett">observer</span><span class="c2 svelte-wamett"> or </span><span class="c2 c11 svelte-wamett">navigator</span><span class="c2 svelte-wamett">,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-1&amp;sa=D&amp;source=editors&amp;ust=1682924987014983&amp;usg=AOvVaw2cuzHolJd_MmMVIc1mtPxM">[1]</a></span><span class="c2 svelte-wamett"> </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Code_review&amp;sa=D&amp;source=editors&amp;ust=1682924987015125&amp;usg=AOvVaw1xMr4_wWD6exfxGFoyNdWx">reviews</a></span><span class="c1 svelte-wamett"> each line of code as it is typed in. The two programmers switch roles frequently.</span></p> 
	<p class="c3 svelte-wamett"><span class="c1 svelte-wamett">While reviewing, the observer also considers the &quot;strategic&quot; direction of
			the work, coming up with ideas for improvements and likely future problems to address. This is intended to
			free the driver to focus all of their attention on the &quot;tactical&quot; aspects of completing the
			current task, using the observer as a safety net and guide.</span></p> 
	<h2 class="c16 c14 svelte-wamett"><span class="c10 c2 svelte-wamett">Economics</span></h2> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">Pair programming increases the </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Man-hour&amp;sa=D&amp;source=editors&amp;ust=1682924987015509&amp;usg=AOvVaw0rS2DXgkfTmZDrbmfhfM32">man-hours</a></span><span class="c2 svelte-wamett"> required to deliver code compared to programmers working individually. Experiments yielded
			diverse results, suggesting increases of between 15% and 100%.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-ijhcs-2&amp;sa=D&amp;source=editors&amp;ust=1682924987015675&amp;usg=AOvVaw13GCQeWTFl6zHCUCgDbarj">[2]</a></span><span class="c2 svelte-wamett"> However, the resulting code has about 15% fewer defects.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-costs-benefits-3&amp;sa=D&amp;source=editors&amp;ust=1682924987015842&amp;usg=AOvVaw1HYeTrcU1mE9STwcH44m8g">[3]</a></span><span class="c2 svelte-wamett"> Along with code development time, other factors like field support costs and quality
			assurance also figure in to the return on investment. Pair programming might theoretically offset these
			expenses by reducing defects in the programs.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-costs-benefits-3&amp;sa=D&amp;source=editors&amp;ust=1682924987016010&amp;usg=AOvVaw2y7C7nFVYwXGnu3g2GKvg3">[3]</a></span></p> 
	<h2 class="c16 c14 svelte-wamett"><span class="c10 c2 svelte-wamett">Design quality</span></h2> 
	<p class="c3 c14 svelte-wamett"><span class="c1 svelte-wamett">A system with two programmers possesses greater potential for the generation of
			more diverse solutions to problems for three reasons:</span></p> 
	<ol class="c13 lst-kix_rvbvlev0z6uc-0 start svelte-wamett" start="1"><li class="c24 c37 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">the programmers bring different prior experiences to the
				task;</span></li> 
		<li class="c14 c22 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">they may access information relevant to the task in different
				ways;</span></li> 
		<li class="c22 c14 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">they stand in different relationships to the problem by virtue
				of their functional roles.</span></li></ol> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">In an attempt to share goals and plans, the programmers must overtly negotiate a
			shared course of action when a conflict arises between them. In doing so, they consider a larger number of
			ways of solving the problem than a single programmer alone might do. This significantly improves the design
			quality of the program as it reduces the chances of selecting a poor method.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-4&amp;sa=D&amp;source=editors&amp;ust=1682924987016570&amp;usg=AOvVaw1d8u2Iej1zGb7Lo3Nfvcfy">[4]</a></span></p> 
	<h2 class="c16 c14 svelte-wamett"><span class="c10 c2 svelte-wamett">Satisfaction</span></h2> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">In an online survey of pair programmers, 96% of them stated that they enjoyed
			their work more than when they programmed alone and 95% said that they were more confident in their
			solutions when they pair programmed.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-strengthening-5&amp;sa=D&amp;source=editors&amp;ust=1682924987016900&amp;usg=AOvVaw2WgMdZI_y-g35GACHf5CT4">[5]</a></span></p> 
	<h2 class="c16 c14 svelte-wamett"><span class="c10 c2 svelte-wamett">Learning</span></h2> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">Knowledge is constantly shared between pair programmers, whether in the industry
			or in a classroom, many sources suggest that students show higher confidence when programming in
			pairs,</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-strengthening-5&amp;sa=D&amp;source=editors&amp;ust=1682924987017220&amp;usg=AOvVaw3lNaMFG3TSbHpSQmOVHW0N">[5]</a></span><span class="c2 svelte-wamett"> and many learn whether it be from tips on programming language rules to overall design
			skill.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-support-6&amp;sa=D&amp;source=editors&amp;ust=1682924987017379&amp;usg=AOvVaw1WGR-5Ot-azwi0HciEMRt5">[6]</a></span><span class="c2 svelte-wamett"> In &quot;promiscuous pairing&quot;, each programmer communicates and works with all the
			other programmers on the team rather than pairing only with one partner, which causes knowledge of the
			system to spread throughout the whole team.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-costs-benefits-3&amp;sa=D&amp;source=editors&amp;ust=1682924987017564&amp;usg=AOvVaw2xMg3Y41X8fqa6tZyqevNf">[3]</a></span><span class="c2 svelte-wamett"> Pair programming allows programmers to examine their partner&#39;s code and provide
			feedback which is necessary to increase their own ability to develop monitoring mechanisms for their own
			learning activities.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-support-6&amp;sa=D&amp;source=editors&amp;ust=1682924987017750&amp;usg=AOvVaw3DbInrDHogKPtvOcMf7GpX">[6]</a></span></p> 
	<h2 class="c16 c14 svelte-wamett"><span class="c10 c2 svelte-wamett">Team-building and communication</span></h2> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">Pair programming allows team members to share problems and solutions quickly
			making them less likely to have hidden agendas from each other. This helps pair programmers to learn to
			communicate more easily. “This raises the communication bandwidth and frequency within the project,
			increasing overall information flow within the team.”</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-costs-benefits-3&amp;sa=D&amp;source=editors&amp;ust=1682924987018123&amp;usg=AOvVaw02Q6p2p0EKrdXyFvWJDtIo">[3]</a></span></p> 
	<h2 class="c16 c14 svelte-wamett"><span class="c10 c2 svelte-wamett">Studies</span></h2> 
	<p class="c3 c14 svelte-wamett"><span class="c1 svelte-wamett">There are both empirical studies and meta-analyses of pair programming. The
			empirical studies tend to examine the level of productivity and the quality of the code, while meta-analyses
			may focus on biases introduced by the process of testing and publishing.</span></p> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">A </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Meta-analysis&amp;sa=D&amp;source=editors&amp;ust=1682924987018521&amp;usg=AOvVaw1GIK2WluSj9n-H5n51BVMc">meta-analysis</a></span><span class="c2 svelte-wamett"> found pairs typically consider more design alternatives than programmers working alone,
			arrive at simpler more maintainable designs, and catch design defects earlier. However, it raised concerns
			its findings may have been influenced by &quot;signs of </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Publication_bias&amp;sa=D&amp;source=editors&amp;ust=1682924987018697&amp;usg=AOvVaw3osIUvUJ3jslQ3p6XAnac_">publication
				bias</a></span><span class="c2 svelte-wamett"> among published studies on pair programming&quot;. It concluded
			that &quot;pair programming is not uniformly beneficial or effective&quot;.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-hannay-meta-7&amp;sa=D&amp;source=editors&amp;ust=1682924987018857&amp;usg=AOvVaw2zWIXB2oKHTSnEtWd_PtYX">[7]</a></span></p> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">Although pair programmers may complete a task faster than a solo programmer, the
			total number of </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Man-hour&amp;sa=D&amp;source=editors&amp;ust=1682924987019069&amp;usg=AOvVaw06b4z_ubKgAGrwisDAaADv">man-hours</a></span><span class="c2 svelte-wamett"> increases.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-ijhcs-2&amp;sa=D&amp;source=editors&amp;ust=1682924987019236&amp;usg=AOvVaw2FkutjfQhHI9wHWnRkBdc_">[2]</a></span><span class="c1 svelte-wamett"> A manager would have to balance faster completion of the work and reduced testing and
			debugging time against the higher cost of coding. The relative weight of these factors can vary by project
			and task.</span></p> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">The benefit of pairing is greatest on tasks that the programmers do not fully
			understand before they begin: that is, challenging tasks that call for creativity and sophistication, and
			for novices as compared to experts.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-ijhcs-2&amp;sa=D&amp;source=editors&amp;ust=1682924987019460&amp;usg=AOvVaw3R77daX28xCgwO6INawsJ8">[2]</a></span><span class="c2 svelte-wamett"> Pair programming could be helpful for attaining high quality and correctness on complex
			programming tasks, but it would also increase the development effort (cost) significantly.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-hannay-meta-7&amp;sa=D&amp;source=editors&amp;ust=1682924987019622&amp;usg=AOvVaw3yN_jgzeT2BfAC11Sx5yCV">[7]</a></span></p> 
	<p class="c3 c14 svelte-wamett"><span class="c2 svelte-wamett">On simple tasks, which the pair already fully understands, pairing results in a
			net drop in productivity.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-ijhcs-2&amp;sa=D&amp;source=editors&amp;ust=1682924987019835&amp;usg=AOvVaw3gjair7YwURVVisXnbVZHw">[2]</a></span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-Arisholm_2007_65%25E2%2580%259386-8&amp;sa=D&amp;source=editors&amp;ust=1682924987019974&amp;usg=AOvVaw11EzomCDVJ2tTV2Pyl79or">[8]</a></span><span class="c2 svelte-wamett"> It may reduce the code development time but also risks reducing the quality of the
			program.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-hannay-meta-7&amp;sa=D&amp;source=editors&amp;ust=1682924987020137&amp;usg=AOvVaw3KuJ5ANFJLN4xn5ROdVeQS">[7]</a></span><span class="c2 svelte-wamett"> Productivity can also drop when novice–novice pairing is used without sufficient
			availability of a mentor to coach them.</span><span class="c0 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming%23cite_note-9&amp;sa=D&amp;source=editors&amp;ust=1682924987020317&amp;usg=AOvVaw0NO8eGGW9jOVpyuwnSP_Ez">[9]</a></span></p> 
	<h2 class="c14 c16 svelte-wamett"><span class="c10 c2 svelte-wamett">Indicators of non-performance</span></h2> 
	<p class="c3 c14 svelte-wamett"><span class="c1 svelte-wamett">There are indicators that a pair is not performing well:</span></p> 
	<ul class="c13 lst-kix_jowpop8hqsse-0 start svelte-wamett"><li class="c24 c31 c14 li-bullet-0 svelte-wamett"><span class="c2 c11 svelte-wamett">Disengagement</span><span class="c1 svelte-wamett"> may present
				as one of the members physically withdraws away from the keyboard, accesses email, or even falls
				asleep.</span></li> 
		<li class="c9 c14 li-bullet-0 svelte-wamett"><span class="c2 svelte-wamett">The </span><span class="c2 c11 svelte-wamett">&quot;Watch the
				Master&quot;</span><span class="c1 svelte-wamett"> phenomenon can arise if one member is more experienced than
				the other. In this situation, the junior member may take the observer role, deferring to the senior
				member of the pair for the majority of coding activity. This can easily lead to disengagement.</span></li></ul> 
	<p class="c24 c14 svelte-wamett"><span class="c1 svelte-wamett">Assignment:</span></p> 
	<p class="c14 c24 svelte-wamett"><span class="c2 svelte-wamett">Read </span><span class="c4 c2 svelte-wamett"><a class="c5 svelte-wamett" href="https://www.google.com/url?q=https://en.wikipedia.org/wiki/Pair_programming&amp;sa=D&amp;source=editors&amp;ust=1682924987020956&amp;usg=AOvVaw34FUOzyCEjt5F3awm3CPPJ">https://en.wikipedia.org/wiki/Pair_programming</a></span></p> 
	<p class="c24 c14 svelte-wamett"><span class="c1 svelte-wamett">Answer the following:</span></p> 
	<ul class="c13 lst-kix_ntjsso13s1qg-0 start svelte-wamett"><li class="c24 c33 c14 c40 li-bullet-0 svelte-wamett"><span class="c1 svelte-wamett">Since Pair Programming increases manpower required to
				develop a project, is it economically feasible?  How can it be justified?</span></li></ul></div> 
	<div class="content svelte-wamett"></div>`,d(n,"class","container")},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class hm extends V{constructor(n){super(),x(this,n,null,wm,S,{})}}function vm(o){let n;return{c(){n=a("div"),n.innerHTML=`<div class="header svelte-wamett"><h1 class="svelte-wamett">Week 10 |</h1> 
		<h2 class="svelte-wamett">Open Source Libraries</h2></div> 
	<div class="content svelte-wamett"></div>`,d(n,"class","container")},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class gm extends V{constructor(n){super(),x(this,n,null,vm,S,{})}}function fm(o){let n;return{c(){n=a("div"),n.innerHTML=`<div class="header svelte-gj2taj"><h1 class="svelte-gj2taj">Week 11 |</h1> 
		<h2 class="svelte-gj2taj">Linux Servers</h2></div> 
	<div class="section svelte-gj2taj"><p>This week&#39;s discussion was on the advantages of using Linux for servers.</p>
		The advantages of using Linux for servers include:
		<ul><li>Performance</li> 
			<li>Security</li> 
			<li>Stability</li> 
			<li>Scalability</li></ul> 
		<p>We&#39;ve talked about why one would choose Linux over Windows, and here are some reasons:</p> 
		<ul><li><b>Cost savings</b> 
				<br/>
				Since Linux is free and open source, most distributions of Linux are free. With Windows, a license must be purchased from Microsoft, and pricing will vary depending on the organization (ie. enterprise pricing).</li> 
			<li><b>Access to open source applications</b> 
				<br/>
				Running open source software on Linux is generally more seamless compared to running on Windows.</li> 
			<li><b>More reliable</b> 
				<br/>
				Linux and its software generally use fewer resources, and thus will result in running more efficient systems.</li> 
			<li><b>Easier to modify</b> 
				<br/>
				It is generally easier to modify and configure various components of Linux. On Windows, modifications come in the form of updates, which we typically would have to wait for.</li></ul> 
		<p>We&#39;ve also talked about why one would choose Linux over Windows. Here are some reasons:</p> 
		<ul><li><b>Better support</b></li> 
			<li><b>Better integration with Microsoft products</b></li> 
			<li><b>More complete</b></li> 
			<li><b>Remote desktop access</b></li> 
			<li><b>Scripting frameworks</b></li></ul></div>`,d(n,"class","container")},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class bm extends V{constructor(n){super(),x(this,n,null,fm,S,{})}}function ym(o){let n;return{c(){n=a("div"),n.innerHTML=`<div class="header svelte-gj2taj"><h1 class="svelte-gj2taj">Week 12 |</h1> 
		<h2 class="svelte-gj2taj">Where Linux is Used</h2></div> 
	<div class="section svelte-gj2taj"><p>This week&#39;s discussion was mainly about how popular Linux is, even though it is a minority in the desktop space by a large margin. The discussion seemed to revolve around a 2011 article found <a href="http://web.archive.org/web/20110718005048/http://www.focus.com/fyi/50-places-linux-running-you-might-not-expect">here</a>.</p> 
		<p>The versatility of the Linux kernel allows it to have <b>many</b> use cases, and thus be used in various types of operating systems for various purposes. Although we don&#39;t see Linux-based desktops often, we see Linux typically used in enterprise applications, such as networking, databases, scientific computing, and most importantly, web-serving. In fact, <b>Linux powers about 67% of all active web servers</b> according to a study done by <i>W3Techs</i>.</p></div>`,d(n,"class","container")},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class km extends V{constructor(n){super(),x(this,n,null,ym,S,{})}}function qm(o){let n;return{c(){n=a("div"),n.innerHTML="<p>This site contains notes and summaries of the CPSC 254 course for Spring 2023 at California State University, Fullerton.</p>",d(n,"id","content"),d(n,"class","svelte-1vtp2rw")},m(i,l){y(i,n,l)},p:u,i:u,o:u,d(i){i&&f(n)}}}class Sm extends V{constructor(n){super(),x(this,n,null,qm,S,{})}}function xm(o){let n,i,l,e,c,m,A;return l=new _p({}),m=new Qp({props:{routes:o[0]}}),{c(){n=a("div"),i=a("div"),J(l.$$.fragment),e=s(),c=a("div"),J(m.$$.fragment),d(i,"class","header"),d(c,"class","content svelte-esf1rj"),d(n,"class","container svelte-esf1rj")},m(r,p){y(r,n,p),t(n,i),N(l,i,null),t(n,e),t(n,c),N(m,c,null),A=!0},p:u,i(r){A||(F(l.$$.fragment,r),F(m.$$.fragment,r),A=!0)},o(r){R(l.$$.fragment,r),R(m.$$.fragment,r),A=!1},d(r){r&&f(n),X(l),X(m)}}}function Vm(o){return[{"/":Sm,"/Week1":am,"/Week2":nm,"/Week3":im,"/Week4":rm,"/Week6":cm,"/Week7":mm,"/Week8":dm,"/Week9":hm,"/Week10":gm,"/Week11":bm,"/Week12":km,"*":em}]}class jm extends V{constructor(n){super(),x(this,n,Vm,xm,S,{})}}new jm({target:document.getElementById("app")});
