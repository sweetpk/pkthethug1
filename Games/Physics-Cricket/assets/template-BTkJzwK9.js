(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="170",hu=0,bc=1,uu=2,th=1,eh=2,Bn=3,li=0,ke=1,Me=2,ai=0,rs=1,Jo=2,Ec=3,Tc=4,du=5,bi=100,fu=101,pu=102,mu=103,gu=104,xu=200,_u=201,vu=202,Mu=203,jo=204,Qo=205,yu=206,Su=207,wu=208,bu=209,Eu=210,Tu=211,Au=212,Ru=213,Cu=214,ta=0,ea=1,na=2,ls=3,ia=4,sa=5,ra=6,oa=7,nh=0,Pu=1,Lu=2,ci=0,Du=1,Iu=2,Uu=3,Fu=4,Nu=5,Ou=6,zu=7,ih=300,hs=301,us=302,aa=303,ca=304,jr=306,oi=1e3,Ai=1001,la=1002,Qe=1003,Bu=1004,nr=1005,Tn=1006,lo=1007,Ri=1008,Xn=1009,sh=1010,rh=1011,Xs=1012,Ka=1013,Ci=1014,An=1015,js=1016,Ja=1017,ja=1018,ds=1020,oh=35902,ah=1021,ch=1022,yn=1023,lh=1024,hh=1025,os=1026,fs=1027,Qa=1028,tc=1029,uh=1030,ec=1031,nc=1033,Or=33776,zr=33777,Br=33778,kr=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,xa=37808,_a=37809,va=37810,Ma=37811,ya=37812,Sa=37813,wa=37814,ba=37815,Ea=37816,Ta=37817,Aa=37818,Ra=37819,Ca=37820,Pa=37821,Hr=36492,La=36494,Da=36495,dh=36283,Ia=36284,Ua=36285,Fa=36286,ku=3200,Hu=3201,fh=0,Vu=1,Hn="",Je="srgb",xs="srgb-linear",Qr="linear",fe="srgb",Ni=7680,Ac=519,Gu=512,Wu=513,Xu=514,ph=515,qu=516,Yu=517,Zu=518,$u=519,Na=35044,Ku=35048,Rc="300 es",Vn=2e3,Wr=2001;class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const as=Math.PI/180,qs=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function ic(i,t){return(i%t+t)%t}function Ju(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ju(i,t,e){return i!==t?(e-i)/(t-i):0}function ks(i,t,e){return(1-e)*i+e*t}function Qu(i,t,e,n){return ks(i,t,1-Math.exp(-e*n))}function td(i,t=1){return t-Math.abs(ic(i,t*2)-t)}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function id(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sd(i,t){return i+Math.random()*(t-i)}function rd(i){return i*(.5-Math.random())}function od(i){i!==void 0&&(Cc=i);let t=Cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ad(i){return i*as}function cd(i){return i*qs}function ld(i){return(i&i-1)===0&&i!==0}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $e={DEG2RAD:as,RAD2DEG:qs,generateUUID:Cn,clamp:Ne,euclideanModulo:ic,mapLinear:Ju,inverseLerp:ju,lerp:ks,damp:Qu,pingpong:td,smoothstep:ed,smootherstep:nd,randInt:id,randFloat:sd,randFloatSpread:rd,seededRandom:od,degToRad:ad,radToDeg:cd,isPowerOfTwo:ld,ceilPowerOfTwo:hd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:dd,normalize:de,denormalize:Mn};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,r,o,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],y=s[4],M=s[7],L=s[2],A=s[5],b=s[8];return r[0]=o*x+a*S+c*L,r[3]=o*m+a*y+c*A,r[6]=o*p+a*M+c*b,r[1]=l*x+u*S+d*L,r[4]=l*m+u*y+d*A,r[7]=l*p+u*M+d*b,r[2]=h*x+f*S+g*L,r[5]=h*m+f*y+g*A,r[8]=h*p+f*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ho.makeScale(t,e)),this}rotate(t){return this.premultiply(ho.makeRotation(-t)),this}translate(t,e){return this.premultiply(ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ho=new Jt;function mh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){const i=Xr("canvas");return i.style.display="block",i}const Pc={};function Ns(i){i in Pc||(Pc[i]=!0,console.warn(i))}function pd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function md(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?Qr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Lc=[.64,.33,.3,.6,.15,.06],Dc=[.2126,.7152,.0722],Ic=[.3127,.329],Uc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[xs]:{primaries:Lc,whitePoint:Ic,transfer:Qr,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:Dc,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:Lc,whitePoint:Ic,transfer:fe,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:Dc,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});let Oi;class xd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=Xr("canvas")),Oi.width=t.width,Oi.height=t.height;const n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _d=0;class gh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Cn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uo(s[o].image)):r.push(uo(s[o]))}else r=uo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vd=0;class Xe extends _s{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Ai,s=Ai,r=Tn,o=Ri,a=yn,c=Xn,l=Xe.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Cn(),this.name="",this.source=new gh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oi:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oi:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=ih;Xe.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,s=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(f+1)/2,L=(p+1)/2,A=(u+h)/4,b=(d+x)/4,P=(g+m)/4;return y>M&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=b/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=b/r,s=P/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-x)/S,this.z=(h-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Md extends _s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Md{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xh extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yd extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==h||l!==f||u!==g){let m=1-a;const p=c*h+l*f+u*g+d*x,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),A=Math.atan2(L,p*S);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}const M=a*S;if(c=c*m+h*M,l=l*m+f*M,u=u*m+g*M,d=d*m+x*M,m===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new R,Nc=new qe;class Ii{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),sr.subVectors(this.max,bs),zi.subVectors(t.a,bs),Bi.subVectors(t.b,bs),ki.subVectors(t.c,bs),Kn.subVectors(Bi,zi),Jn.subVectors(ki,Bi),fi.subVectors(zi,ki);let e=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-fi.z,fi.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,fi.z,0,-fi.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-fi.y,fi.x,0];return!po(e,zi,Bi,ki,sr)||(e=[1,0,0,0,1,0,0,0,1],!po(e,zi,Bi,ki,sr))?!1:(rr.crossVectors(Kn,Jn),e=[rr.x,rr.y,rr.z],po(e,zi,Bi,ki,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new R,new R,new R,new R,new R,new R,new R,new R],gn=new R,ir=new Ii,zi=new R,Bi=new R,ki=new R,Kn=new R,Jn=new R,fi=new R,bs=new R,sr=new R,rr=new R,pi=new R;function po(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),c=t.dot(pi),l=e.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Sd=new Ii,Es=new R,mo=new R;class vs{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(mo)),this.expandByPoint(Es.copy(t.center).sub(mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new R,go=new R,or=new R,jn=new R,xo=new R,ar=new R,_o=new R;class _h{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){go.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(go);const r=t.distanceTo(e)*.5,o=-this.direction.dot(or),a=jn.dot(this.direction),c=-jn.dot(or),l=jn.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(go).addScaledVector(or,h),f}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,n,s,r){xo.subVectors(e,t),ar.subVectors(n,t),_o.crossVectors(xo,ar);let o=this.direction.dot(_o),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);const c=a*this.direction.dot(ar.crossVectors(jn,ar));if(c<0)return null;const l=a*this.direction.dot(xo.cross(jn));if(l<0||c+l>o)return null;const u=-a*jn.dot(_o);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),o=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){const h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wd,t,bd)}lookAt(t,e,n){const s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Qn.crossVectors(n,sn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Qn.crossVectors(n,sn)),Qn.normalize(),cr.crossVectors(sn,Qn),s[0]=Qn.x,s[4]=cr.x,s[8]=sn.x,s[1]=Qn.y,s[5]=cr.y,s[9]=sn.y,s[2]=Qn.z,s[6]=cr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],y=n[7],M=n[11],L=n[15],A=s[0],b=s[4],P=s[8],_=s[12],v=s[1],T=s[5],N=s[9],O=s[13],V=s[2],W=s[6],X=s[10],tt=s[14],G=s[3],ot=s[7],pt=s[11],xt=s[15];return r[0]=o*A+a*v+c*V+l*G,r[4]=o*b+a*T+c*W+l*ot,r[8]=o*P+a*N+c*X+l*pt,r[12]=o*_+a*O+c*tt+l*xt,r[1]=u*A+d*v+h*V+f*G,r[5]=u*b+d*T+h*W+f*ot,r[9]=u*P+d*N+h*X+f*pt,r[13]=u*_+d*O+h*tt+f*xt,r[2]=g*A+x*v+m*V+p*G,r[6]=g*b+x*T+m*W+p*ot,r[10]=g*P+x*N+m*X+p*pt,r[14]=g*_+x*O+m*tt+p*xt,r[3]=S*A+y*v+M*V+L*G,r[7]=S*b+y*T+M*W+L*ot,r[11]=S*P+y*N+M*X+L*pt,r[15]=S*_+y*O+M*tt+L*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*h+n*l*h+s*a*f-n*c*f)+x*(+e*c*f-e*l*h+r*o*h-s*o*f+s*l*u-r*c*u)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-e*c*d+e*a*h+s*o*d-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],S=d*m*l-x*h*l+x*c*f-a*m*f-d*c*p+a*h*p,y=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,M=u*x*l-g*d*l+g*a*f-o*x*f-u*a*p+o*d*p,L=g*d*c-u*x*c-g*a*h+o*x*h+u*a*m-o*d*m,A=e*S+n*y+s*M+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=S*b,t[1]=(x*h*r-d*m*r-x*s*f+n*m*f+d*s*p-n*h*p)*b,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*b,t[3]=(d*c*r-a*h*r-d*s*l+n*h*l+a*s*f-n*c*f)*b,t[4]=y*b,t[5]=(u*m*r-g*h*r+g*s*f-e*m*f-u*s*p+e*h*p)*b,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*b,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*f+e*c*f)*b,t[8]=M*b,t[9]=(g*d*r-u*x*r-g*n*f+e*x*f+u*n*p-e*d*p)*b,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*b,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*f-e*a*f)*b,t[12]=L*b,t[13]=(u*x*s-g*d*s+g*n*h-e*x*h-u*n*m+e*d*m)*b,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*b,t[15]=(o*d*s-u*a*s+u*n*c-e*d*c-o*n*h+e*a*h)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,x=o*u,m=o*d,p=a*d,S=c*l,y=c*u,M=c*d,L=n.x,A=n.y,b=n.z;return s[0]=(1-(x+p))*L,s[1]=(f+M)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(h+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+y)*b,s[9]=(m-S)*b,s[10]=(1-(h+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Hi.set(s[0],s[1],s[2]).length();const o=Hi.set(s[4],s[5],s[6]).length(),a=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const l=1/r,u=1/o,d=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let f,g;if(a===Vn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){const c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(o-r),h=(e+t)*l,f=(n+s)*u;let g,x;if(a===Vn)g=(o+r)*d,x=-2*d;else if(a===Wr)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hi=new R,xn=new se,wd=new R(0,0,0),bd=new R(1,1,1),Qn=new R,cr=new R,sn=new R,Oc=new se,zc=new qe;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ed=0;const Bc=new R,Vi=new qe,Nn=new se,lr=new R,Ts=new R,Td=new R,Ad=new qe,kc=new R(1,0,0),Hc=new R(0,1,0),Vc=new R(0,0,1),Gc={type:"added"},Rd={type:"removed"},Gi={type:"childadded",child:null},vo={type:"childremoved",child:null};class Pe extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new R,e=new Sn,n=new qe,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Jt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(kc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(Vc,t)}translateOnAxis(t,e){return Bc.copy(t).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(Vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ts,lr,this.up):Nn.lookAt(lr,Ts,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rd),vo.child=t,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,Td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Pe.DEFAULT_UP=new R(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new R,On=new R,Mo=new R,zn=new R,Wi=new R,Xi=new R,Wc=new R,yo=new R,So=new R,wo=new R,bo=new Se,Eo=new Se,To=new Se;class an{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),On.subVectors(n,e),Mo.subVectors(t,e);const o=_n.dot(_n),a=_n.dot(On),c=_n.dot(Mo),l=On.dot(On),u=On.dot(Mo),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return bo.setScalar(0),Eo.setScalar(0),To.setScalar(0),bo.fromBufferAttribute(t,e),Eo.fromBufferAttribute(t,n),To.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(bo,r.x),o.addScaledVector(Eo,r.y),o.addScaledVector(To,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),On.subVectors(t,e),_n.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),On.subVectors(this.a,this.b),_n.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Wi.subVectors(s,n),Xi.subVectors(r,n),yo.subVectors(t,n);const c=Wi.dot(yo),l=Xi.dot(yo);if(c<=0&&l<=0)return e.copy(n);So.subVectors(t,s);const u=Wi.dot(So),d=Xi.dot(So);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Wi,o);wo.subVectors(t,r);const f=Wi.dot(wo),g=Xi.dot(wo);if(g>=0&&f<=g)return e.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Xi,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Wc.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Wc,a);const p=1/(m+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Ao(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=ic(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ao(o,r,t+1/3),this.g=Ao(o,r,t),this.b=Ao(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=Mh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ie.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Ne(Ve.r*255,0,255))*65536+Math.round(Ne(Ve.g*255,0,255))*256+Math.round(Ne(Ve.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Je){ie.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(hr);const n=ks(ti.h,hr.h,e),s=ks(ti.s,hr.s,e),r=ks(ti.l,hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new $t;$t.NAMES=Mh;let Cd=0;class Ui extends _s{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Cn(),this.name="",this.blending=rs,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jo,this.blendDst=Qo,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class me extends Ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new R,ur=new ft;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Na&&(t.usage=this.usage),t}}class yh extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sh extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pd=0;const hn=new se,Ro=new Pe,qi=new R,rn=new Ii,As=new Ii,Ie=new R;class we extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mh(t)?Sh:yh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Ro.lookAt(t),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(rn.min,As.min),rn.expandByPoint(Ie),Ie.addVectors(rn.max,As.max),rn.expandByPoint(Ie)):(rn.expandByPoint(As.min),rn.expandByPoint(As.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ie.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(t,l),Ie.add(qi)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new R,c[P]=new R;const l=new R,u=new R,d=new R,h=new ft,f=new ft,g=new ft,x=new R,m=new R;function p(P,_,v){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,_),d.fromBufferAttribute(n,v),h.fromBufferAttribute(r,P),f.fromBufferAttribute(r,_),g.fromBufferAttribute(r,v),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(T),a[P].add(x),a[_].add(x),a[v].add(x),c[P].add(m),c[_].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,_=S.length;P<_;++P){const v=S[P],T=v.start,N=v.count;for(let O=T,V=T+N;O<V;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new R,M=new R,L=new R,A=new R;function b(P){L.fromBufferAttribute(s,P),A.copy(L);const _=a[P];y.copy(_),y.sub(L.multiplyScalar(L.dot(_))).normalize(),M.crossVectors(A,_);const T=M.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,T)}for(let P=0,_=S.length;P<_;++P){const v=S[P],T=v.start,N=v.count;for(let O=T,V=T+N;O<V;O+=3)b(t.getX(O+0)),b(t.getX(O+1)),b(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,u=new R,d=new R;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Ee(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xc=new se,mi=new _h,dr=new vs,qc=new R,fr=new R,pr=new R,mr=new R,Co=new R,gr=new R,Yc=new R,xr=new R;class Q extends Pe{constructor(t=new we,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Co.fromBufferAttribute(d,t),o?gr.addScaledVector(Co,u):gr.addScaledVector(Co.sub(e),u))}e.add(gr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(dr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(dr,qc)===null||mi.origin.distanceToSquared(qc)>(t.far-t.near)**2))&&(Xc.copy(r).invert(),mi.copy(t.ray).applyMatrix4(Xc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,L=y;M<L;M+=3){const A=a.getX(M),b=a.getX(M+1),P=a.getX(M+2);s=_r(this,p,t,n,l,u,d,A,b,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=_r(this,o,t,n,l,u,d,S,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,L=y;M<L;M+=3){const A=M,b=M+1,P=M+2;s=_r(this,p,t,n,l,u,d,A,b,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=m,y=m+1,M=m+2;s=_r(this,o,t,n,l,u,d,S,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ld(i,t,e,n,s,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===li,a),c===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(xr);return l<e.near||l>e.far?null:{distance:l,point:xr.clone(),object:i}}function _r(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,fr),i.getVertexPosition(c,pr),i.getVertexPosition(l,mr);const u=Ld(i,t,e,n,fr,pr,mr,Yc);if(u){const d=new R;an.getBarycoord(Yc,fr,pr,mr,d),s&&(u.uv=an.getInterpolatedAttribute(s,a,c,l,d,new ft)),r&&(u.uv1=an.getInterpolatedAttribute(r,a,c,l,d,new ft)),o&&(u.normal=an.getInterpolatedAttribute(o,a,c,l,d,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new R,materialIndex:0};an.getNormal(fr,pr,mr,h.normal),u.face=h,u.barycoord=d}return u}class te extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(d,2));function g(x,m,p,S,y,M,L,A,b,P,_){const v=M/b,T=L/P,N=M/2,O=L/2,V=A/2,W=b+1,X=P+1;let tt=0,G=0;const ot=new R;for(let pt=0;pt<X;pt++){const xt=pt*T-O;for(let mt=0;mt<W;mt++){const Ft=mt*v-N;ot[x]=Ft*S,ot[m]=xt*y,ot[p]=V,l.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[p]=A>0?1:-1,u.push(ot.x,ot.y,ot.z),d.push(mt/b),d.push(1-pt/P),tt+=1}}for(let pt=0;pt<P;pt++)for(let xt=0;xt<b;xt++){const mt=h+xt+W*pt,Ft=h+xt+W*(pt+1),j=h+(xt+1)+W*(pt+1),ut=h+(xt+1)+W*pt;c.push(mt,Ft,ut),c.push(Ft,j,ut),G+=6}a.addGroup(f,G,_),f+=G,h+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=ps(i[e]);for(const s in n)t[s]=n[s]}return t}function Dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Id={clone:ps,merge:Ke};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bh extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new R,Zc=new ft,$c=new ft;class un extends bh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,Zc,$c),e.subVectors($c,Zc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(as*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,Zi=1;class Nd extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(Yi,Zi,t,e);s.layers=this.layers,this.add(s);const r=new un(Yi,Zi,t,e);r.layers=this.layers,this.add(r);const o=new un(Yi,Zi,t,e);o.layers=this.layers,this.add(o);const a=new un(Yi,Zi,t,e);a.layers=this.layers,this.add(a);const c=new un(Yi,Zi,t,e);c.layers=this.layers,this.add(c);const l=new un(Yi,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eh extends Xe{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:hs,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Od extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Eh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new te(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:ai});r.uniforms.tEquirect.value=e;const o=new Q(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Tn),new Nd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Po=new R,zd=new R,Bd=new Jt;class yi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Po.subVectors(n,e).cross(zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Po),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bd.getNormalMatrix(t),s=this.coplanarPoint(Po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new vs,vr=new R;class sc{constructor(t=new yi,e=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],S=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,h-l,m-f,M-p).normalize(),n[1].setComponents(c+r,h+l,m+f,M+p).normalize(),n[2].setComponents(c+o,h+u,m+g,M+S).normalize(),n[3].setComponents(c-o,h-u,m-g,M-S).normalize(),n[4].setComponents(c-a,h-d,m-x,M-y).normalize(),e===Vn)n[5].setComponents(c+a,h+d,m+x,M+y).normalize();else if(e===Wr)n[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(vr.x=s.normal.x>0?t.max.x:t.min.x,vr.y=s.normal.y>0?t.max.y:t.min.y,vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Th(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function kd(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class je extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const S=p*h-o;for(let y=0;y<l;y++){const M=y*d-r;g.push(M,-S,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const y=S+l*p,M=S+l*(p+1),L=S+1+l*(p+1),A=S+1+l*p;f.push(y,M,A),f.push(M,L,A)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ef=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ff=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Np=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$p=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Hd,alphahash_pars_fragment:Vd,alphamap_fragment:Gd,alphamap_pars_fragment:Wd,alphatest_fragment:Xd,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:Zd,batching_pars_vertex:$d,batching_vertex:Kd,begin_vertex:Jd,beginnormal_vertex:jd,bsdfs:Qd,iridescence_fragment:tf,bumpmap_pars_fragment:ef,clipping_planes_fragment:nf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:rf,clipping_planes_vertex:of,color_fragment:af,color_pars_fragment:cf,color_pars_vertex:lf,color_vertex:hf,common:uf,cube_uv_reflection_fragment:df,defaultnormal_vertex:ff,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:xf,colorspace_fragment:_f,colorspace_pars_fragment:vf,envmap_fragment:Mf,envmap_common_pars_fragment:yf,envmap_pars_fragment:Sf,envmap_pars_vertex:wf,envmap_physical_pars_fragment:Uf,envmap_vertex:bf,fog_vertex:Ef,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:Rf,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Df,lights_pars_begin:If,lights_toon_fragment:Ff,lights_toon_pars_fragment:Nf,lights_phong_fragment:Of,lights_phong_pars_fragment:zf,lights_physical_fragment:Bf,lights_physical_pars_fragment:kf,lights_fragment_begin:Hf,lights_fragment_maps:Vf,lights_fragment_end:Gf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:Zf,map_pars_fragment:$f,map_particle_fragment:Kf,map_particle_pars_fragment:Jf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:Qf,morphinstance_vertex:tp,morphcolor_vertex:ep,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:op,normal_pars_fragment:ap,normal_pars_vertex:cp,normal_vertex:lp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:xp,project_vertex:_p,dithering_fragment:vp,dithering_pars_fragment:Mp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:bp,shadowmap_vertex:Ep,shadowmask_pars_fragment:Tp,skinbase_vertex:Ap,skinning_pars_vertex:Rp,skinning_vertex:Cp,skinnormal_vertex:Pp,specularmap_fragment:Lp,specularmap_pars_fragment:Dp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Up,transmission_fragment:Fp,transmission_pars_fragment:Np,uv_pars_fragment:Op,uv_pars_vertex:zp,uv_vertex:Bp,worldpos_vertex:kp,background_vert:Hp,background_frag:Vp,backgroundCube_vert:Gp,backgroundCube_frag:Wp,cube_vert:Xp,cube_frag:qp,depth_vert:Yp,depth_frag:Zp,distanceRGBA_vert:$p,distanceRGBA_frag:Kp,equirect_vert:Jp,equirect_frag:jp,linedashed_vert:Qp,linedashed_frag:t0,meshbasic_vert:e0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:s0,meshmatcap_vert:r0,meshmatcap_frag:o0,meshnormal_vert:a0,meshnormal_frag:c0,meshphong_vert:l0,meshphong_frag:h0,meshphysical_vert:u0,meshphysical_frag:d0,meshtoon_vert:f0,meshtoon_frag:p0,points_vert:m0,points_frag:g0,shadow_vert:x0,shadow_frag:_0,sprite_vert:v0,sprite_frag:M0},Ct={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},bn={basic:{uniforms:Ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ke([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ke([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ke([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ke([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ke([Ct.points,Ct.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ke([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ke([Ct.common,Ct.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ke([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ke([Ct.sprite,Ct.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ke([Ct.common,Ct.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ke([Ct.lights,Ct.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};bn.physical={uniforms:Ke([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Mr={r:0,b:0,g:0},xi=new Sn,y0=new se;function S0(i,t,e,n,s,r,o){const a=new $t(0);let c=r===!0?0:1,l,u,d=null,h=0,f=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function x(S){let y=!1;const M=g(S);M===null?p(a,c):M&&M.isColor&&(p(M,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===jr)?(u===void 0&&(u=new Q(new te(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:ps(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xi.copy(y.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(y0.makeRotationFromEuler(xi)),u.material.toneMapped=ie.getTransfer(M.colorSpace)!==fe,(d!==M||h!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Q(new je(2,2),new fn({name:"BackgroundMaterial",uniforms:ps(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ie.getTransfer(M.colorSpace)!==fe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(Mr,wh(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:x,addToRenderList:m}}function w0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(v,T,N,O,V){let W=!1;const X=d(O,N,T);r!==X&&(r=X,l(r.object)),W=f(v,O,N,V),W&&g(v,O,N,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(v,T,N,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function d(v,T,N){const O=N.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let W=V[T.id];W===void 0&&(W={},V[T.id]=W);let X=W[O];return X===void 0&&(X=h(c()),W[O]=X),X}function h(v){const T=[],N=[],O=[];for(let V=0;V<e;V++)T[V]=0,N[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:N,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,T,N,O){const V=r.attributes,W=T.attributes;let X=0;const tt=N.getAttributes();for(const G in tt)if(tt[G].location>=0){const pt=V[G];let xt=W[G];if(xt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(xt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(xt=v.instanceColor)),pt===void 0||pt.attribute!==xt||xt&&pt.data!==xt.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(v,T,N,O){const V={},W=T.attributes;let X=0;const tt=N.getAttributes();for(const G in tt)if(tt[G].location>=0){let pt=W[G];pt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const xt={};xt.attribute=pt,pt&&pt.data&&(xt.data=pt.data),V[G]=xt,X++}r.attributes=V,r.attributesNum=X,r.index=O}function x(){const v=r.newAttributes;for(let T=0,N=v.length;T<N;T++)v[T]=0}function m(v){p(v,0)}function p(v,T){const N=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;N[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),V[v]!==T&&(i.vertexAttribDivisor(v,T),V[v]=T)}function S(){const v=r.newAttributes,T=r.enabledAttributes;for(let N=0,O=T.length;N<O;N++)T[N]!==v[N]&&(i.disableVertexAttribArray(N),T[N]=0)}function y(v,T,N,O,V,W,X){X===!0?i.vertexAttribIPointer(v,T,N,V,W):i.vertexAttribPointer(v,T,N,O,V,W)}function M(v,T,N,O){x();const V=O.attributes,W=N.getAttributes(),X=T.defaultAttributeValues;for(const tt in W){const G=W[tt];if(G.location>=0){let ot=V[tt];if(ot===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),ot!==void 0){const pt=ot.normalized,xt=ot.itemSize,mt=t.get(ot);if(mt===void 0)continue;const Ft=mt.buffer,j=mt.type,ut=mt.bytesPerElement,wt=j===i.INT||j===i.UNSIGNED_INT||ot.gpuType===Ka;if(ot.isInterleavedBufferAttribute){const at=ot.data,Ht=at.stride,qt=ot.offset;if(at.isInstancedInterleavedBuffer){for(let Xt=0;Xt<G.locationSize;Xt++)p(G.location+Xt,at.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Xt=0;Xt<G.locationSize;Xt++)m(G.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let Xt=0;Xt<G.locationSize;Xt++)y(G.location+Xt,xt/G.locationSize,j,pt,Ht*ut,(qt+xt/G.locationSize*Xt)*ut,wt)}else{if(ot.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)p(G.location+at,ot.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let at=0;at<G.locationSize;at++)m(G.location+at);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let at=0;at<G.locationSize;at++)y(G.location+at,xt/G.locationSize,j,pt,xt*ut,xt/G.locationSize*at*ut,wt)}}else if(X!==void 0){const pt=X[tt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(G.location,pt);break;case 3:i.vertexAttrib3fv(G.location,pt);break;case 4:i.vertexAttrib4fv(G.location,pt);break;default:i.vertexAttrib1fv(G.location,pt)}}}}S()}function L(){P();for(const v in n){const T=n[v];for(const N in T){const O=T[N];for(const V in O)u(O[V].object),delete O[V];delete T[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const N in T){const O=T[N];for(const V in O)u(O[V].object),delete O[V];delete T[N]}delete n[v.id]}function b(v){for(const T in n){const N=n[T];if(N[v.id]===void 0)continue;const O=N[v.id];for(const V in O)u(O[V].object),delete O[V];delete N[v.id]}}function P(){_(),o=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:_,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function b0(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function E0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==yn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Xn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==An&&!P)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:L,maxSamples:A}}function T0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new yi,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const S=r?0:n,y=S*4;let M=p.clippingState||null;c.value=M,M=u(g,h,y,f);for(let L=0;L!==y;++L)M[L]=e[L];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=f;y!==x;++y,M+=4)o.copy(d[y]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function A0(i){let t=new WeakMap;function e(o,a){return a===aa?o.mapping=hs:a===ca&&(o.mapping=us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===aa||a===ca)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Od(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ah extends bh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ns=4,Kc=[.125,.215,.35,.446,.526,.582],Ei=20,Lo=new Ah,Jc=new $t;let Do=null,Io=0,Uo=0,Fo=!1;const Si=(1+Math.sqrt(5))/2,$i=1/Si,jc=[new R(-Si,$i,0),new R(Si,$i,0),new R(-$i,0,Si),new R($i,0,Si),new R(0,Si,-$i),new R(0,Si,$i),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Qc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Io,Uo),this._renderer.xr.enabled=Fo,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:js,format:yn,colorSpace:xs,depthBuffer:!1},s=tl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R0(r)),this._blurMaterial=C0(r,t,e)}return s}_compileMaterial(t){const e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,Lo)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Jc),u.toneMapping=ci,u.autoClear=!1;const f=new me({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Q(new te,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Jc),x=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;yr(s,S*y,p>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;yr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Lo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jc[(s-r-1)%jc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Q(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const p=[];let S=0;for(let b=0;b<Ei;++b){const P=b/x,_=Math.exp(-P*P/2);p.push(_),b===0?S+=_:b<m&&(S+=2*_)}for(let b=0;b<p.length;b++)p[b]=p[b]/S;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const M=this._sizeLods[s],L=3*M*(s>y-ns?s-y+ns:0),A=4*(this._cubeSize-M);yr(e,L,A,3*M,2*M),c.setRenderTarget(e),c.render(d,Lo)}}function R0(i){const t=[],e=[],n=[];let s=i;const r=i-ns+1+Kc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ns?c=Kc[o-i+ns-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),y=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){const b=A%3*2/3-1,P=A>2?0:-1,_=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];S.set(_,x*g*A),y.set(h,m*g*A);const v=[A,A,A,A,A,A];M.set(v,p*g*A)}const L=new we;L.setAttribute("position",new Ee(S,x)),L.setAttribute("uv",new Ee(y,m)),L.setAttribute("faceIndex",new Ee(M,p)),t.push(L),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function tl(i,t,e){const n=new Pi(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function C0(i,t,e){const n=new Float32Array(Ei),s=new R(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function el(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function nl(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function P0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===aa||c===ca,u=c===hs||c===us;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Qc(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Qc(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function L0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,t,e,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const S=f.array;x=f.version;for(let y=0,M=S.length;y<M;y+=3){const L=S[y+0],A=S[y+1],b=S[y+2];h.push(L,A,A,b,b,L)}}else if(g!==void 0){const S=g.array;x=g.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const L=y+0,A=y+1,b=y+2;h.push(L,A,A,b,b,L)}}else return;const m=new(mh(h)?Sh:yh)(h,1);m.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function I0(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*o,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(h,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*x[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function U0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function F0(i,t,e){const n=new WeakMap,s=new Se;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let L=a.attributes.position.count*M,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const b=new Float32Array(L*A*4*d),P=new xh(b,L,A,d);P.type=An,P.needsUpdate=!0;const _=M*4;for(let T=0;T<d;T++){const N=p[T],O=S[T],V=y[T],W=L*A*4*T;for(let X=0;X<N.count;X++){const tt=X*_;g===!0&&(s.fromBufferAttribute(N,X),b[W+tt+0]=s.x,b[W+tt+1]=s.y,b[W+tt+2]=s.z,b[W+tt+3]=0),x===!0&&(s.fromBufferAttribute(O,X),b[W+tt+4]=s.x,b[W+tt+5]=s.y,b[W+tt+6]=s.z,b[W+tt+7]=0),m===!0&&(s.fromBufferAttribute(V,X),b[W+tt+8]=s.x,b[W+tt+9]=s.y,b[W+tt+10]=s.z,b[W+tt+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:P,size:new ft(L,A)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function N0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Rh extends Xe{constructor(t,e,n,s,r,o,a,c,l,u=os){if(u!==os&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===os&&(n=Ci),n===void 0&&u===fs&&(n=ds),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ch=new Xe,il=new Rh(1,1),Ph=new xh,Lh=new yd,Dh=new Eh,sl=[],rl=[],ol=new Float32Array(16),al=new Float32Array(9),cl=new Float32Array(4);function Ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=sl[s];if(r===void 0&&(r=new Float32Array(s),sl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function to(i,t){let e=rl[t];e===void 0&&(e=new Int32Array(t),rl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function O0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function H0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;cl.set(n),i.uniformMatrix2fv(this.addr,!1,cl),De(e,n)}}function V0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;al.set(n),i.uniformMatrix3fv(this.addr,!1,al),De(e,n)}}function G0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;ol.set(n),i.uniformMatrix4fv(this.addr,!1,ol),De(e,n)}}function W0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Z0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function j0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(il.compareFunction=ph,r=il):r=Ch,e.setTexture2D(t||r,s)}function Q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lh,s)}function tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dh,s)}function em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ph,s)}function nm(i){switch(i){case 5126:return O0;case 35664:return z0;case 35665:return B0;case 35666:return k0;case 35674:return H0;case 35675:return V0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return Z0;case 36294:return $0;case 36295:return K0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}function im(i,t){i.uniform1fv(this.addr,t)}function sm(i,t){const e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function rm(i,t){const e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function om(i,t){const e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function am(i,t){const e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cm(i,t){const e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lm(i,t){const e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hm(i,t){i.uniform1iv(this.addr,t)}function um(i,t){i.uniform2iv(this.addr,t)}function dm(i,t){i.uniform3iv(this.addr,t)}function fm(i,t){i.uniform4iv(this.addr,t)}function pm(i,t){i.uniform1uiv(this.addr,t)}function mm(i,t){i.uniform2uiv(this.addr,t)}function gm(i,t){i.uniform3uiv(this.addr,t)}function xm(i,t){i.uniform4uiv(this.addr,t)}function _m(i,t,e){const n=this.cache,s=t.length,r=to(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ch,r[o])}function vm(i,t,e){const n=this.cache,s=t.length,r=to(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Lh,r[o])}function Mm(i,t,e){const n=this.cache,s=t.length,r=to(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Dh,r[o])}function ym(i,t,e){const n=this.cache,s=t.length,r=to(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ph,r[o])}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return ym}}class wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nm(e.type)}}class bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sm(e.type)}}class Em{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const No=/(\w+)(\])?(\[|\.)?/g;function ll(i,t){i.seq.push(t),i.map[t.id]=t}function Tm(i,t,e){const n=i.name,s=n.length;for(No.lastIndex=0;;){const r=No.exec(n),o=No.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ll(e,l===void 0?new wm(a,i,t):new bm(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Em(a),ll(e,d)),e=d}}}class Vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Tm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function hl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Am=37297;let Rm=0;function Cm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ul=new Jt;function Pm(i){ie._getMatrix(ul,ie.workingColorSpace,i);const t=`mat3( ${ul.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Qr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Cm(i.getShaderSource(t),o)}else return s}function Lm(i,t){const e=Pm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Dm(i,t){let e;switch(t){case Du:e="Linear";break;case Iu:e="Reinhard";break;case Uu:e="Cineon";break;case Fu:e="ACESFilmic";break;case Ou:e="AgX";break;case zu:e="Neutral";break;case Nu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new R;function Im(){ie.getLuminanceCoefficients(Sr);const i=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function Fm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Os(i){return i!==""}function fl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(i){return i.replace(Om,Bm)}const zm=new Map;function Bm(i,t){let e=jt[t];if(e===void 0){const n=zm.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oa(e)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(i){return i.replace(km,Hm)}function Hm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===th?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function Xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nh:t="ENVMAP_BLENDING_MULTIPLY";break;case Pu:t="ENVMAP_BLENDING_MIX";break;case Lu:t="ENVMAP_BLENDING_ADD";break}return t}function qm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ym(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Vm(e),l=Gm(e),u=Wm(e),d=Xm(e),h=qm(e),f=Um(e),g=Fm(r),x=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?jt.tonemapping_pars_fragment:"",e.toneMapping!==ci?Dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Lm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=Oa(o),o=fl(o,e),o=pl(o,e),a=Oa(a),a=fl(a,e),a=pl(a,e),o=ml(o),a=ml(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,M=S+p+a,L=hl(s,s.VERTEX_SHADER,y),A=hl(s,s.FRAGMENT_SHADER,M);s.attachShader(x,L),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(T){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(L).trim(),V=s.getShaderInfoLog(A).trim();let W=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,A);else{const tt=dl(s,L,"vertex"),G=dl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+tt+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||V==="")&&(X=!1);X&&(T.diagnostics={runnable:W,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(L),s.deleteShader(A),P=new Vr(s,x),_=Nm(s,x)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Am)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=A,this}let Zm=0;class $m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Km(t),e.set(t,n)),n}}class Km{constructor(t){this.id=Zm++,this.code=t,this.usedTimes=0}}function Jm(i,t,e,n,s,r,o){const a=new vh,c=new $m,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,v,T,N,O){const V=N.fog,W=O.geometry,X=_.isMeshStandardMaterial?N.environment:null,tt=(_.isMeshStandardMaterial?e:t).get(_.envMap||X),G=tt&&tt.mapping===jr?tt.image.height:null,ot=g[_.type];_.precision!==null&&(f=s.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xt=pt!==void 0?pt.length:0;let mt=0;W.morphAttributes.position!==void 0&&(mt=1),W.morphAttributes.normal!==void 0&&(mt=2),W.morphAttributes.color!==void 0&&(mt=3);let Ft,j,ut,wt;if(ot){const ue=bn[ot];Ft=ue.vertexShader,j=ue.fragmentShader}else Ft=_.vertexShader,j=_.fragmentShader,c.update(_),ut=c.getVertexShaderID(_),wt=c.getFragmentShaderID(_);const at=i.getRenderTarget(),Ht=i.state.buffers.depth.getReversed(),qt=O.isInstancedMesh===!0,Xt=O.isBatchedMesh===!0,ee=!!_.map,ct=!!_.matcap,vt=!!tt,I=!!_.aoMap,Nt=!!_.lightMap,st=!!_.bumpMap,Pt=!!_.normalMap,Mt=!!_.displacementMap,Gt=!!_.emissiveMap,bt=!!_.metalnessMap,C=!!_.roughnessMap,w=_.anisotropy>0,q=_.clearcoat>0,et=_.dispersion>0,ht=_.iridescence>0,nt=_.sheen>0,Lt=_.transmission>0,_t=w&&!!_.anisotropyMap,D=q&&!!_.clearcoatMap,Z=q&&!!_.clearcoatNormalMap,z=q&&!!_.clearcoatRoughnessMap,Y=ht&&!!_.iridescenceMap,lt=ht&&!!_.iridescenceThicknessMap,yt=nt&&!!_.sheenColorMap,dt=nt&&!!_.sheenRoughnessMap,Ut=!!_.specularMap,Rt=!!_.specularColorMap,Ot=!!_.specularIntensityMap,F=Lt&&!!_.transmissionMap,gt=Lt&&!!_.thicknessMap,$=!!_.gradientMap,rt=!!_.alphaMap,Et=_.alphaTest>0,Tt=!!_.alphaHash,Yt=!!_.extensions;let pe=ci;_.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Re={shaderID:ot,shaderType:_.type,shaderName:_.name,vertexShader:Ft,fragmentShader:j,defines:_.defines,customVertexShaderID:ut,customFragmentShaderID:wt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&O._colorsTexture!==null,instancing:qt,instancingColor:qt&&O.instanceColor!==null,instancingMorph:qt&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:xs,alphaToCoverage:!!_.alphaToCoverage,map:ee,matcap:ct,envMap:vt,envMapMode:vt&&tt.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:Nt,bumpMap:st,normalMap:Pt,displacementMap:h&&Mt,emissiveMap:Gt,normalMapObjectSpace:Pt&&_.normalMapType===Vu,normalMapTangentSpace:Pt&&_.normalMapType===fh,metalnessMap:bt,roughnessMap:C,anisotropy:w,anisotropyMap:_t,clearcoat:q,clearcoatMap:D,clearcoatNormalMap:Z,clearcoatRoughnessMap:z,dispersion:et,iridescence:ht,iridescenceMap:Y,iridescenceThicknessMap:lt,sheen:nt,sheenColorMap:yt,sheenRoughnessMap:dt,specularMap:Ut,specularColorMap:Rt,specularIntensityMap:Ot,transmission:Lt,transmissionMap:F,thicknessMap:gt,gradientMap:$,opaque:_.transparent===!1&&_.blending===rs&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:Et,alphaHash:Tt,combine:_.combine,mapUv:ee&&x(_.map.channel),aoMapUv:I&&x(_.aoMap.channel),lightMapUv:Nt&&x(_.lightMap.channel),bumpMapUv:st&&x(_.bumpMap.channel),normalMapUv:Pt&&x(_.normalMap.channel),displacementMapUv:Mt&&x(_.displacementMap.channel),emissiveMapUv:Gt&&x(_.emissiveMap.channel),metalnessMapUv:bt&&x(_.metalnessMap.channel),roughnessMapUv:C&&x(_.roughnessMap.channel),anisotropyMapUv:_t&&x(_.anisotropyMap.channel),clearcoatMapUv:D&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:Z&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(_.sheenRoughnessMap.channel),specularMapUv:Ut&&x(_.specularMap.channel),specularColorMapUv:Rt&&x(_.specularColorMap.channel),specularIntensityMapUv:Ot&&x(_.specularIntensityMap.channel),transmissionMapUv:F&&x(_.transmissionMap.channel),thicknessMapUv:gt&&x(_.thicknessMap.channel),alphaMapUv:rt&&x(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pt||w),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(ee||rt),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ht,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:mt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:ee&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:Gt&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Me,flipSided:_.side===ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Yt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&_.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function p(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const T in _.defines)v.push(T),v.push(_.defines[T]);return _.isRawShaderMaterial===!1&&(S(v,_),y(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function S(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function y(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),_.push(a.mask)}function M(_){const v=g[_.type];let T;if(v){const N=bn[v];T=Id.clone(N.uniforms)}else T=_.uniforms;return T}function L(_,v){let T;for(let N=0,O=u.length;N<O;N++){const V=u[N];if(V.cacheKey===v){T=V,++T.usedTimes;break}}return T===void 0&&(T=new Ym(i,v,_,r),u.push(T)),T}function A(_){if(--_.usedTimes===0){const v=u.indexOf(_);u[v]=u[u.length-1],u.pop(),_.destroy()}}function b(_){c.remove(_)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:P}}function jm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _l(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,h,f,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function a(d,h,f,g,x,m){const p=o(d,h,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,h,f,g,x,m){const p=o(d,h,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,h){e.length>1&&e.sort(d||Qm),n.length>1&&n.sort(h||xl),s.length>1&&s.sort(h||xl)}function u(){for(let d=t,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function tg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new _l,i.set(n,[o])):s>=r.length?(o=new _l,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function eg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new $t};break;case"SpotLight":e={position:new R,direction:new R,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function ng(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ig=0;function sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rg(i){const t=new eg,e=ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new se,o=new se;function a(l){let u=0,d=0,h=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,y=0,M=0,L=0,A=0,b=0;l.sort(sg);for(let _=0,v=l.length;_<v;_++){const T=l[_],N=T.color,O=T.intensity,V=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=N.r*O,d+=N.g*O,h+=N.b*O;else if(T.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(T.sh.coefficients[X],O);b++}else if(T.isDirectionalLight){const X=t.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const tt=T.shadow,G=e.get(T);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=T.shadow.matrix,S++}n.directional[f]=X,f++}else if(T.isSpotLight){const X=t.get(T);X.position.setFromMatrixPosition(T.matrixWorld),X.color.copy(N).multiplyScalar(O),X.distance=V,X.coneCos=Math.cos(T.angle),X.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),X.decay=T.decay,n.spot[x]=X;const tt=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,tt.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[x]=tt.matrix,T.castShadow){const G=e.get(T);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=W,M++}x++}else if(T.isRectAreaLight){const X=t.get(T);X.color.copy(N).multiplyScalar(O),X.halfWidth.set(T.width*.5,0,0),X.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=X,m++}else if(T.isPointLight){const X=t.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),X.distance=T.distance,X.decay=T.decay,T.castShadow){const tt=T.shadow,G=e.get(T);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=T.shadow.matrix,y++}n.point[g]=X,g++}else if(T.isHemisphereLight){const X=t.get(T);X.skyColor.copy(T.color).multiplyScalar(O),X.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==y||P.numSpotShadows!==M||P.numSpotMaps!==L||P.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=y,P.numSpotShadows=M,P.numSpotMaps=L,P.numLightProbes=b,n.version=ig++)}function c(l,u){let d=0,h=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const y=l[p];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function vl(i){const t=new rg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function og(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new vl(i),t.set(s,[a])):r>=o.length?(a=new vl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class ag extends Ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cg extends Ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ug(i,t,e){let n=new sc;const s=new ft,r=new ft,o=new Se,a=new ag({depthPacking:Hu}),c=new cg,l={},u=e.maxTextureSize,d={[li]:ke,[ke]:li,[Me]:Me},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:lg,fragmentShader:hg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Q(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th;let p=this.type;this.render=function(A,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const _=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ai),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=p!==Bn&&this.type===Bn,V=p===Bn&&this.type!==Bn;for(let W=0,X=A.length;W<X;W++){const tt=A[W],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ot=G.getFrameExtents();if(s.multiply(ot),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,G.mapSize.y=r.y)),G.map===null||O===!0||V===!0){const xt=this.type!==Bn?{minFilter:Qe,magFilter:Qe}:{};G.map!==null&&G.map.dispose(),G.map=new Pi(s.x,s.y,xt),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const pt=G.getViewportCount();for(let xt=0;xt<pt;xt++){const mt=G.getViewport(xt);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),N.viewport(o),G.updateMatrices(tt,xt),n=G.getFrustum(),M(b,P,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===Bn&&S(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,v,T)};function S(A,b){const P=t.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pi(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,P,h,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,P,f,x,null)}function y(A,b,P,_){let v=null;const T=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)v=T;else if(v=P.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=v.uuid,O=b.uuid;let V=l[N];V===void 0&&(V={},l[N]=V);let W=V[O];W===void 0&&(W=v.clone(),V[O]=W,b.addEventListener("dispose",L)),v=W}if(v.visible=b.visible,v.wireframe=b.wireframe,_===Bn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:d[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=i.properties.get(v);N.light=P}return v}function M(A,b,P,_,v){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Bn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=t.update(A),V=A.material;if(Array.isArray(V)){const W=O.groups;for(let X=0,tt=W.length;X<tt;X++){const G=W[X],ot=V[G.materialIndex];if(ot&&ot.visible){const pt=y(A,ot,_,v);A.onBeforeShadow(i,A,b,P,O,pt,G),i.renderBufferDirect(P,null,O,pt,A,G),A.onAfterShadow(i,A,b,P,O,pt,G)}}}else if(V.visible){const W=y(A,V,_,v);A.onBeforeShadow(i,A,b,P,O,W,null),i.renderBufferDirect(P,null,O,W,A,null),A.onAfterShadow(i,A,b,P,O,W,null)}}const N=A.children;for(let O=0,V=N.length;O<V;O++)M(N[O],b,P,_,v)}function L(A){A.target.removeEventListener("dispose",L);for(const P in l){const _=l[P],v=A.target.uuid;v in _&&(_[v].dispose(),delete _[v])}}}const dg={[ta]:ea,[na]:ra,[ia]:oa,[ls]:sa,[ea]:ta,[ra]:na,[oa]:ia,[sa]:ls};function fg(i,t){function e(){let F=!1;const gt=new Se;let $=null;const rt=new Se(0,0,0,0);return{setMask:function(Et){$!==Et&&!F&&(i.colorMask(Et,Et,Et,Et),$=Et)},setLocked:function(Et){F=Et},setClear:function(Et,Tt,Yt,pe,Re){Re===!0&&(Et*=pe,Tt*=pe,Yt*=pe),gt.set(Et,Tt,Yt,pe),rt.equals(gt)===!1&&(i.clearColor(Et,Tt,Yt,pe),rt.copy(gt))},reset:function(){F=!1,$=null,rt.set(-1,0,0,0)}}}function n(){let F=!1,gt=!1,$=null,rt=null,Et=null;return{setReversed:function(Tt){if(gt!==Tt){const Yt=t.get("EXT_clip_control");gt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const pe=Et;Et=null,this.setClear(pe)}gt=Tt},getReversed:function(){return gt},setTest:function(Tt){Tt?at(i.DEPTH_TEST):Ht(i.DEPTH_TEST)},setMask:function(Tt){$!==Tt&&!F&&(i.depthMask(Tt),$=Tt)},setFunc:function(Tt){if(gt&&(Tt=dg[Tt]),rt!==Tt){switch(Tt){case ta:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=Tt}},setLocked:function(Tt){F=Tt},setClear:function(Tt){Et!==Tt&&(gt&&(Tt=1-Tt),i.clearDepth(Tt),Et=Tt)},reset:function(){F=!1,$=null,rt=null,Et=null,gt=!1}}}function s(){let F=!1,gt=null,$=null,rt=null,Et=null,Tt=null,Yt=null,pe=null,Re=null;return{setTest:function(ue){F||(ue?at(i.STENCIL_TEST):Ht(i.STENCIL_TEST))},setMask:function(ue){gt!==ue&&!F&&(i.stencilMask(ue),gt=ue)},setFunc:function(ue,pn,Dn){($!==ue||rt!==pn||Et!==Dn)&&(i.stencilFunc(ue,pn,Dn),$=ue,rt=pn,Et=Dn)},setOp:function(ue,pn,Dn){(Tt!==ue||Yt!==pn||pe!==Dn)&&(i.stencilOp(ue,pn,Dn),Tt=ue,Yt=pn,pe=Dn)},setLocked:function(ue){F=ue},setClear:function(ue){Re!==ue&&(i.clearStencil(ue),Re=ue)},reset:function(){F=!1,gt=null,$=null,rt=null,Et=null,Tt=null,Yt=null,pe=null,Re=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,y=null,M=null,L=null,A=null,b=new $t(0,0,0),P=0,_=!1,v=null,T=null,N=null,O=null,V=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,tt=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=tt>=2);let ot=null,pt={};const xt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Ft=new Se().fromArray(xt),j=new Se().fromArray(mt);function ut(F,gt,$,rt){const Et=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(F,Tt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<$;Yt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(gt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Tt}const wt={};wt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(ls),st(!1),Pt(bc),at(i.CULL_FACE),I(ai);function at(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function Ht(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function qt(F,gt){return d[F]!==gt?(i.bindFramebuffer(F,gt),d[F]=gt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Xt(F,gt){let $=f,rt=!1;if(F){$=h.get(gt),$===void 0&&($=[],h.set(gt,$));const Et=F.textures;if($.length!==Et.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Yt=Et.length;Tt<Yt;Tt++)$[Tt]=i.COLOR_ATTACHMENT0+Tt;$.length=Et.length,rt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,rt=!0);rt&&i.drawBuffers($)}function ee(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const ct={[bi]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};ct[mu]=i.MIN,ct[gu]=i.MAX;const vt={[xu]:i.ZERO,[_u]:i.ONE,[vu]:i.SRC_COLOR,[jo]:i.SRC_ALPHA,[Eu]:i.SRC_ALPHA_SATURATE,[wu]:i.DST_COLOR,[yu]:i.DST_ALPHA,[Mu]:i.ONE_MINUS_SRC_COLOR,[Qo]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[Tu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Ru]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function I(F,gt,$,rt,Et,Tt,Yt,pe,Re,ue){if(F===ai){x===!0&&(Ht(i.BLEND),x=!1);return}if(x===!1&&(at(i.BLEND),x=!0),F!==du){if(F!==m||ue!==_){if((p!==bi||M!==bi)&&(i.blendEquation(i.FUNC_ADD),p=bi,M=bi),ue)switch(F){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jo:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,y=null,L=null,A=null,b.set(0,0,0),P=0,m=F,_=ue}return}Et=Et||gt,Tt=Tt||$,Yt=Yt||rt,(gt!==p||Et!==M)&&(i.blendEquationSeparate(ct[gt],ct[Et]),p=gt,M=Et),($!==S||rt!==y||Tt!==L||Yt!==A)&&(i.blendFuncSeparate(vt[$],vt[rt],vt[Tt],vt[Yt]),S=$,y=rt,L=Tt,A=Yt),(pe.equals(b)===!1||Re!==P)&&(i.blendColor(pe.r,pe.g,pe.b,Re),b.copy(pe),P=Re),m=F,_=!1}function Nt(F,gt){F.side===Me?Ht(i.CULL_FACE):at(i.CULL_FACE);let $=F.side===ke;gt&&($=!$),st($),F.blending===rs&&F.transparent===!1?I(ai):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const rt=F.stencilWrite;a.setTest(rt),rt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(F){v!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),v=F)}function Pt(F){F!==hu?(at(i.CULL_FACE),F!==T&&(F===bc?i.cullFace(i.BACK):F===uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ht(i.CULL_FACE),T=F}function Mt(F){F!==N&&(X&&i.lineWidth(F),N=F)}function Gt(F,gt,$){F?(at(i.POLYGON_OFFSET_FILL),(O!==gt||V!==$)&&(i.polygonOffset(gt,$),O=gt,V=$)):Ht(i.POLYGON_OFFSET_FILL)}function bt(F){F?at(i.SCISSOR_TEST):Ht(i.SCISSOR_TEST)}function C(F){F===void 0&&(F=i.TEXTURE0+W-1),ot!==F&&(i.activeTexture(F),ot=F)}function w(F,gt,$){$===void 0&&(ot===null?$=i.TEXTURE0+W-1:$=ot);let rt=pt[$];rt===void 0&&(rt={type:void 0,texture:void 0},pt[$]=rt),(rt.type!==F||rt.texture!==gt)&&(ot!==$&&(i.activeTexture($),ot=$),i.bindTexture(F,gt||wt[F]),rt.type=F,rt.texture=gt)}function q(){const F=pt[ot];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(F){Ft.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ft.copy(F))}function dt(F){j.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),j.copy(F))}function Ut(F,gt){let $=l.get(gt);$===void 0&&($=new WeakMap,l.set(gt,$));let rt=$.get(F);rt===void 0&&(rt=i.getUniformBlockIndex(gt,F.name),$.set(F,rt))}function Rt(F,gt){const rt=l.get(gt).get(F);c.get(gt)!==rt&&(i.uniformBlockBinding(gt,rt,F.__bindingPointIndex),c.set(gt,rt))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,pt={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,y=null,M=null,L=null,A=null,b=new $t(0,0,0),P=0,_=!1,v=null,T=null,N=null,O=null,V=null,Ft.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Ht,bindFramebuffer:qt,drawBuffers:Xt,useProgram:ee,setBlending:I,setMaterial:Nt,setFlipSided:st,setCullFace:Pt,setLineWidth:Mt,setPolygonOffset:Gt,setScissorTest:bt,activeTexture:C,bindTexture:w,unbindTexture:q,compressedTexImage2D:et,compressedTexImage3D:ht,texImage2D:Y,texImage3D:lt,updateUBOMapping:Ut,uniformBlockBinding:Rt,texStorage2D:Z,texStorage3D:z,texSubImage2D:nt,texSubImage3D:Lt,compressedTexSubImage2D:_t,compressedTexSubImage3D:D,scissor:yt,viewport:dt,reset:Ot}}function Ml(i,t,e,n){const s=pg(n);switch(e){case ah:return i*t;case lh:return i*t;case hh:return i*t*2;case Qa:return i*t/s.components*s.byteLength;case tc:return i*t/s.components*s.byteLength;case uh:return i*t*2/s.components*s.byteLength;case ec:return i*t*2/s.components*s.byteLength;case ch:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case nc:return i*t*4/s.components*s.byteLength;case Or:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(i,16)*Math.max(t,8)/4;case ha:case da:return Math.max(i,8)*Math.max(t,8)/2;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hr:case La:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dh:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ua:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pg(i){switch(i){case Xn:case sh:return{byteLength:1,components:1};case Xs:case rh:case js:return{byteLength:2,components:1};case Ja:case ja:return{byteLength:2,components:4};case Ci:case Ka:case An:return{byteLength:4,components:1};case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function mg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return f?new OffscreenCanvas(C,w):Xr("canvas")}function x(C,w,q){let et=1;const ht=bt(C);if((ht.width>q||ht.height>q)&&(et=q/Math.max(ht.width,ht.height)),et<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const nt=Math.floor(et*ht.width),Lt=Math.floor(et*ht.height);d===void 0&&(d=g(nt,Lt));const _t=w?g(nt,Lt):d;return _t.width=nt,_t.height=Lt,_t.getContext("2d").drawImage(C,0,0,nt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+nt+"x"+Lt+")."),_t}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,w,q,et,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=w;if(w===i.RED&&(q===i.FLOAT&&(nt=i.R32F),q===i.HALF_FLOAT&&(nt=i.R16F),q===i.UNSIGNED_BYTE&&(nt=i.R8)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.R8UI),q===i.UNSIGNED_SHORT&&(nt=i.R16UI),q===i.UNSIGNED_INT&&(nt=i.R32UI),q===i.BYTE&&(nt=i.R8I),q===i.SHORT&&(nt=i.R16I),q===i.INT&&(nt=i.R32I)),w===i.RG&&(q===i.FLOAT&&(nt=i.RG32F),q===i.HALF_FLOAT&&(nt=i.RG16F),q===i.UNSIGNED_BYTE&&(nt=i.RG8)),w===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RG8UI),q===i.UNSIGNED_SHORT&&(nt=i.RG16UI),q===i.UNSIGNED_INT&&(nt=i.RG32UI),q===i.BYTE&&(nt=i.RG8I),q===i.SHORT&&(nt=i.RG16I),q===i.INT&&(nt=i.RG32I)),w===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),q===i.UNSIGNED_INT&&(nt=i.RGB32UI),q===i.BYTE&&(nt=i.RGB8I),q===i.SHORT&&(nt=i.RGB16I),q===i.INT&&(nt=i.RGB32I)),w===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),q===i.UNSIGNED_INT&&(nt=i.RGBA32UI),q===i.BYTE&&(nt=i.RGBA8I),q===i.SHORT&&(nt=i.RGBA16I),q===i.INT&&(nt=i.RGBA32I)),w===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),w===i.RGBA){const Lt=ht?Qr:ie.getTransfer(et);q===i.FLOAT&&(nt=i.RGBA32F),q===i.HALF_FLOAT&&(nt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(nt=Lt===fe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function M(C,w){let q;return C?w===null||w===Ci||w===ds?q=i.DEPTH24_STENCIL8:w===An?q=i.DEPTH32F_STENCIL8:w===Xs&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ci||w===ds?q=i.DEPTH_COMPONENT24:w===An?q=i.DEPTH_COMPONENT32F:w===Xs&&(q=i.DEPTH_COMPONENT16),q}function L(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==Tn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){const w=C.target;w.removeEventListener("dispose",A),P(w),w.isVideoTexture&&u.delete(w)}function b(C){const w=C.target;w.removeEventListener("dispose",b),v(w)}function P(C){const w=n.get(C);if(w.__webglInit===void 0)return;const q=C.source,et=h.get(q);if(et){const ht=et[w.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&_(C),Object.keys(et).length===0&&h.delete(q)}n.remove(C)}function _(C){const w=n.get(C);i.deleteTexture(w.__webglTexture);const q=C.source,et=h.get(q);delete et[w.__cacheKey],o.memory.textures--}function v(C){const w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let ht=0;ht<w.__webglFramebuffer[et].length;ht++)i.deleteFramebuffer(w.__webglFramebuffer[et][ht]);else i.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)i.deleteFramebuffer(w.__webglFramebuffer[et]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=C.textures;for(let et=0,ht=q.length;et<ht;et++){const nt=n.get(q[et]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(q[et])}n.remove(C)}let T=0;function N(){T=0}function O(){const C=T;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),T+=1,C}function V(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function W(C,w){const q=n.get(C);if(C.isVideoTexture&&Mt(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const et=C.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(q,C,w);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}function X(C,w){const q=n.get(C);if(C.version>0&&q.__version!==C.version){j(q,C,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}function tt(C,w){const q=n.get(C);if(C.version>0&&q.__version!==C.version){j(q,C,w);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}function G(C,w){const q=n.get(C);if(C.version>0&&q.__version!==C.version){ut(q,C,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}const ot={[oi]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},pt={[Qe]:i.NEAREST,[Bu]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},xt={[Gu]:i.NEVER,[$u]:i.ALWAYS,[Wu]:i.LESS,[ph]:i.LEQUAL,[Xu]:i.EQUAL,[Zu]:i.GEQUAL,[qu]:i.GREATER,[Yu]:i.NOTEQUAL};function mt(C,w){if(w.type===An&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Tn||w.magFilter===lo||w.magFilter===nr||w.magFilter===Ri||w.minFilter===Tn||w.minFilter===lo||w.minFilter===nr||w.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ot[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ot[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ot[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pt[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pt[w.minFilter]),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,xt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Qe||w.minFilter!==nr&&w.minFilter!==Ri||w.type===An&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ft(C,w){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",A));const et=w.source;let ht=h.get(et);ht===void 0&&(ht={},h.set(et,ht));const nt=V(w);if(nt!==C.__cacheKey){ht[nt]===void 0&&(ht[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ht[nt].usedTimes++;const Lt=ht[C.__cacheKey];Lt!==void 0&&(ht[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&_(w)),C.__cacheKey=nt,C.__webglTexture=ht[nt].texture}return q}function j(C,w,q){let et=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=i.TEXTURE_3D);const ht=Ft(C,w),nt=w.source;e.bindTexture(et,C.__webglTexture,i.TEXTURE0+q);const Lt=n.get(nt);if(nt.version!==Lt.__version||ht===!0){e.activeTexture(i.TEXTURE0+q);const _t=ie.getPrimaries(ie.workingColorSpace),D=w.colorSpace===Hn?null:ie.getPrimaries(w.colorSpace),Z=w.colorSpace===Hn||_t===D?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let z=x(w.image,!1,s.maxTextureSize);z=Gt(w,z);const Y=r.convert(w.format,w.colorSpace),lt=r.convert(w.type);let yt=y(w.internalFormat,Y,lt,w.colorSpace,w.isVideoTexture);mt(et,w);let dt;const Ut=w.mipmaps,Rt=w.isVideoTexture!==!0,Ot=Lt.__version===void 0||ht===!0,F=nt.dataReady,gt=L(w,z);if(w.isDepthTexture)yt=M(w.format===fs,w.type),Ot&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,yt,z.width,z.height):e.texImage2D(i.TEXTURE_2D,0,yt,z.width,z.height,0,Y,lt,null));else if(w.isDataTexture)if(Ut.length>0){Rt&&Ot&&e.texStorage2D(i.TEXTURE_2D,gt,yt,Ut[0].width,Ut[0].height);for(let $=0,rt=Ut.length;$<rt;$++)dt=Ut[$],Rt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,Y,lt,dt.data):e.texImage2D(i.TEXTURE_2D,$,yt,dt.width,dt.height,0,Y,lt,dt.data);w.generateMipmaps=!1}else Rt?(Ot&&e.texStorage2D(i.TEXTURE_2D,gt,yt,z.width,z.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,z.width,z.height,Y,lt,z.data)):e.texImage2D(i.TEXTURE_2D,0,yt,z.width,z.height,0,Y,lt,z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Rt&&Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,yt,Ut[0].width,Ut[0].height,z.depth);for(let $=0,rt=Ut.length;$<rt;$++)if(dt=Ut[$],w.format!==yn)if(Y!==null)if(Rt){if(F)if(w.layerUpdates.size>0){const Et=Ml(dt.width,dt.height,w.format,w.type);for(const Tt of w.layerUpdates){const Yt=dt.data.subarray(Tt*Et/dt.data.BYTES_PER_ELEMENT,(Tt+1)*Et/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Tt,dt.width,dt.height,1,Y,Yt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,z.depth,Y,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,yt,dt.width,dt.height,z.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,z.depth,Y,lt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,yt,dt.width,dt.height,z.depth,0,Y,lt,dt.data)}else{Rt&&Ot&&e.texStorage2D(i.TEXTURE_2D,gt,yt,Ut[0].width,Ut[0].height);for(let $=0,rt=Ut.length;$<rt;$++)dt=Ut[$],w.format!==yn?Y!==null?Rt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,Y,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,Y,lt,dt.data):e.texImage2D(i.TEXTURE_2D,$,yt,dt.width,dt.height,0,Y,lt,dt.data)}else if(w.isDataArrayTexture)if(Rt){if(Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,yt,z.width,z.height,z.depth),F)if(w.layerUpdates.size>0){const $=Ml(z.width,z.height,w.format,w.type);for(const rt of w.layerUpdates){const Et=z.data.subarray(rt*$/z.data.BYTES_PER_ELEMENT,(rt+1)*$/z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,z.width,z.height,1,Y,lt,Et)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,Y,lt,z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,z.width,z.height,z.depth,0,Y,lt,z.data);else if(w.isData3DTexture)Rt?(Ot&&e.texStorage3D(i.TEXTURE_3D,gt,yt,z.width,z.height,z.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,Y,lt,z.data)):e.texImage3D(i.TEXTURE_3D,0,yt,z.width,z.height,z.depth,0,Y,lt,z.data);else if(w.isFramebufferTexture){if(Ot)if(Rt)e.texStorage2D(i.TEXTURE_2D,gt,yt,z.width,z.height);else{let $=z.width,rt=z.height;for(let Et=0;Et<gt;Et++)e.texImage2D(i.TEXTURE_2D,Et,yt,$,rt,0,Y,lt,null),$>>=1,rt>>=1}}else if(Ut.length>0){if(Rt&&Ot){const $=bt(Ut[0]);e.texStorage2D(i.TEXTURE_2D,gt,yt,$.width,$.height)}for(let $=0,rt=Ut.length;$<rt;$++)dt=Ut[$],Rt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Y,lt,dt):e.texImage2D(i.TEXTURE_2D,$,yt,Y,lt,dt);w.generateMipmaps=!1}else if(Rt){if(Ot){const $=bt(z);e.texStorage2D(i.TEXTURE_2D,gt,yt,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Y,lt,z)}else e.texImage2D(i.TEXTURE_2D,0,yt,Y,lt,z);m(w)&&p(et),Lt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ut(C,w,q){if(w.image.length!==6)return;const et=Ft(C,w),ht=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);const nt=n.get(ht);if(ht.version!==nt.__version||et===!0){e.activeTexture(i.TEXTURE0+q);const Lt=ie.getPrimaries(ie.workingColorSpace),_t=w.colorSpace===Hn?null:ie.getPrimaries(w.colorSpace),D=w.colorSpace===Hn||Lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const Z=w.isCompressedTexture||w.image[0].isCompressedTexture,z=w.image[0]&&w.image[0].isDataTexture,Y=[];for(let rt=0;rt<6;rt++)!Z&&!z?Y[rt]=x(w.image[rt],!0,s.maxCubemapSize):Y[rt]=z?w.image[rt].image:w.image[rt],Y[rt]=Gt(w,Y[rt]);const lt=Y[0],yt=r.convert(w.format,w.colorSpace),dt=r.convert(w.type),Ut=y(w.internalFormat,yt,dt,w.colorSpace),Rt=w.isVideoTexture!==!0,Ot=nt.__version===void 0||et===!0,F=ht.dataReady;let gt=L(w,lt);mt(i.TEXTURE_CUBE_MAP,w);let $;if(Z){Rt&&Ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Ut,lt.width,lt.height);for(let rt=0;rt<6;rt++){$=Y[rt].mipmaps;for(let Et=0;Et<$.length;Et++){const Tt=$[Et];w.format!==yn?yt!==null?Rt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,0,0,Tt.width,Tt.height,yt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,Ut,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,0,0,Tt.width,Tt.height,yt,dt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,Ut,Tt.width,Tt.height,0,yt,dt,Tt.data)}}}else{if($=w.mipmaps,Rt&&Ot){$.length>0&&gt++;const rt=bt(Y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Ut,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(z){Rt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Y[rt].width,Y[rt].height,yt,dt,Y[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ut,Y[rt].width,Y[rt].height,0,yt,dt,Y[rt].data);for(let Et=0;Et<$.length;Et++){const Yt=$[Et].image[rt].image;Rt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,0,0,Yt.width,Yt.height,yt,dt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,Ut,Yt.width,Yt.height,0,yt,dt,Yt.data)}}else{Rt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,yt,dt,Y[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ut,yt,dt,Y[rt]);for(let Et=0;Et<$.length;Et++){const Tt=$[Et];Rt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,0,0,yt,dt,Tt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,Ut,yt,dt,Tt.image[rt])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),nt.__version=ht.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function wt(C,w,q,et,ht,nt){const Lt=r.convert(q.format,q.colorSpace),_t=r.convert(q.type),D=y(q.internalFormat,Lt,_t,q.colorSpace),Z=n.get(w),z=n.get(q);if(z.__renderTarget=w,!Z.__hasExternalTextures){const Y=Math.max(1,w.width>>nt),lt=Math.max(1,w.height>>nt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,nt,D,Y,lt,w.depth,0,Lt,_t,null):e.texImage2D(ht,nt,D,Y,lt,0,Lt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ht,z.__webglTexture,0,st(w)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,ht,z.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(C,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer){const et=w.depthTexture,ht=et&&et.isDepthTexture?et.type:null,nt=M(w.stencilBuffer,ht),Lt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=st(w);Pt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,nt,w.width,w.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,nt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,nt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,C)}else{const et=w.textures;for(let ht=0;ht<et.length;ht++){const nt=et[ht],Lt=r.convert(nt.format,nt.colorSpace),_t=r.convert(nt.type),D=y(nt.internalFormat,Lt,_t,nt.colorSpace),Z=st(w);q&&Pt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,D,w.width,w.height):Pt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,D,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,D,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(w.depthTexture);et.__renderTarget=w,(!et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const ht=et.__webglTexture,nt=st(w);if(w.depthTexture.format===os)Pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(w.depthTexture.format===fs)Pt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function qt(C){const w=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const et=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){const ht=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",ht)};et.addEventListener("dispose",ht),w.__depthDisposeCallback=ht}w.__boundDepthTexture=et}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ht(w.__webglFramebuffer,C)}else if(q){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=i.createRenderbuffer(),at(w.__webglDepthbuffer[et],C,!1);else{const ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=w.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),at(w.__webglDepthbuffer,C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(C,w,q){const et=n.get(C);w!==void 0&&wt(et.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&qt(C)}function ee(C){const w=C.texture,q=n.get(C),et=n.get(w);C.addEventListener("dispose",b);const ht=C.textures,nt=C.isWebGLCubeRenderTarget===!0,Lt=ht.length>1;if(Lt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=w.version,o.memory.textures++),nt){q.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[_t]=[];for(let D=0;D<w.mipmaps.length;D++)q.__webglFramebuffer[_t][D]=i.createFramebuffer()}else q.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let _t=0;_t<w.mipmaps.length;_t++)q.__webglFramebuffer[_t]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let _t=0,D=ht.length;_t<D;_t++){const Z=n.get(ht[_t]);Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Pt(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let _t=0;_t<ht.length;_t++){const D=ht[_t];q.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[_t]);const Z=r.convert(D.format,D.colorSpace),z=r.convert(D.type),Y=y(D.internalFormat,Z,z,D.colorSpace,C.isXRRenderTarget===!0),lt=st(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,q.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),at(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),mt(i.TEXTURE_CUBE_MAP,w);for(let _t=0;_t<6;_t++)if(w.mipmaps&&w.mipmaps.length>0)for(let D=0;D<w.mipmaps.length;D++)wt(q.__webglFramebuffer[_t][D],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,D);else wt(q.__webglFramebuffer[_t],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,D=ht.length;_t<D;_t++){const Z=ht[_t],z=n.get(Z);e.bindTexture(i.TEXTURE_2D,z.__webglTexture),mt(i.TEXTURE_2D,Z),wt(q.__webglFramebuffer,C,Z,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(Z)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,et.__webglTexture),mt(_t,w),w.mipmaps&&w.mipmaps.length>0)for(let D=0;D<w.mipmaps.length;D++)wt(q.__webglFramebuffer[D],C,w,i.COLOR_ATTACHMENT0,_t,D);else wt(q.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,_t,0);m(w)&&p(_t),e.unbindTexture()}C.depthBuffer&&qt(C)}function ct(C){const w=C.textures;for(let q=0,et=w.length;q<et;q++){const ht=w[q];if(m(ht)){const nt=S(C),Lt=n.get(ht).__webglTexture;e.bindTexture(nt,Lt),p(nt),e.unbindTexture()}}}const vt=[],I=[];function Nt(C){if(C.samples>0){if(Pt(C)===!1){const w=C.textures,q=C.width,et=C.height;let ht=i.COLOR_BUFFER_BIT;const nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(C),_t=w.length>1;if(_t)for(let D=0;D<w.length;D++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let D=0;D<w.length;D++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[D]);const Z=n.get(w[D]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,q,et,0,0,q,et,ht,i.NEAREST),c===!0&&(vt.length=0,I.length=0,vt.push(i.COLOR_ATTACHMENT0+D),C.depthBuffer&&C.resolveDepthBuffer===!1&&(vt.push(nt),I.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let D=0;D<w.length;D++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[D]);const Z=n.get(w[D]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+D,i.TEXTURE_2D,Z,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const w=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function st(C){return Math.min(s.maxSamples,C.samples)}function Pt(C){const w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Mt(C){const w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function Gt(C,w){const q=C.colorSpace,et=C.format,ht=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==xs&&q!==Hn&&(ie.getTransfer(q)===fe?(et!==yn||ht!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=Xt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Pt}function gg(i,t){function e(n,s=Hn){let r;const o=ie.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return i.BYTE;if(n===rh)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===js)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===ch)return i.RGB;if(n===yn)return i.RGBA;if(n===lh)return i.LUMINANCE;if(n===hh)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===Qa)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===uh)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===Or||n===zr||n===Br||n===kr)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ma)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ga)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===_a||n===va||n===Ma||n===ya||n===Sa||n===wa||n===ba||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hr||n===La||n===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hr)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===Ia||n===Ua||n===Fa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class xg extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ae extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _g={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fn({vertexShader:vg,fragmentShader:Mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sg extends _s{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const x=new yg,m=e.getContextAttributes();let p=null,S=null;const y=[],M=[],L=new ft;let A=null;const b=new un;b.viewport=new Se;const P=new un;P.viewport=new Se;const _=[b,P],v=new xg;let T=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ut=y[j];return ut===void 0&&(ut=new Oo,y[j]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(j){let ut=y[j];return ut===void 0&&(ut=new Oo,y[j]=ut),ut.getGripSpace()},this.getHand=function(j){let ut=y[j];return ut===void 0&&(ut=new Oo,y[j]=ut),ut.getHandSpace()};function O(j){const ut=M.indexOf(j.inputSource);if(ut===-1)return;const wt=y[ut];wt!==void 0&&(wt.update(j.inputSource,j.frame,l||o),wt.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",W);for(let j=0;j<y.length;j++){const ut=M[j];ut!==null&&(M[j]=null,y[j].disconnect(ut))}T=null,N=null,x.reset(),t.setRenderTarget(p),f=null,h=null,d=null,s=null,S=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Pi(f.framebufferWidth,f.framebufferHeight,{format:yn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,wt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?fs:os,wt=m.stencil?ds:Ci);const Ht={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(Ht),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new Pi(h.textureWidth,h.textureHeight,{format:yn,type:Xn,depthTexture:new Rh(h.textureWidth,h.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(j){for(let ut=0;ut<j.removed.length;ut++){const wt=j.removed[ut],at=M.indexOf(wt);at>=0&&(M[at]=null,y[at].disconnect(wt))}for(let ut=0;ut<j.added.length;ut++){const wt=j.added[ut];let at=M.indexOf(wt);if(at===-1){for(let qt=0;qt<y.length;qt++)if(qt>=M.length){M.push(wt),at=qt;break}else if(M[qt]===null){M[qt]=wt,at=qt;break}if(at===-1)break}const Ht=y[at];Ht&&Ht.connect(wt)}}const X=new R,tt=new R;function G(j,ut,wt){X.setFromMatrixPosition(ut.matrixWorld),tt.setFromMatrixPosition(wt.matrixWorld);const at=X.distanceTo(tt),Ht=ut.projectionMatrix.elements,qt=wt.projectionMatrix.elements,Xt=Ht[14]/(Ht[10]-1),ee=Ht[14]/(Ht[10]+1),ct=(Ht[9]+1)/Ht[5],vt=(Ht[9]-1)/Ht[5],I=(Ht[8]-1)/Ht[0],Nt=(qt[8]+1)/qt[0],st=Xt*I,Pt=Xt*Nt,Mt=at/(-I+Nt),Gt=Mt*-I;if(ut.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Gt),j.translateZ(Mt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ht[10]===-1)j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const bt=Xt+Mt,C=ee+Mt,w=st-Gt,q=Pt+(at-Gt),et=ct*ee/C*bt,ht=vt*ee/C*bt;j.projectionMatrix.makePerspective(w,q,et,ht,bt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ot(j,ut){ut===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ut.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ut=j.near,wt=j.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),v.near=P.near=b.near=ut,v.far=P.far=b.far=wt,(T!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,N=v.far),b.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,v.layers.mask=b.layers.mask|P.layers.mask;const at=j.parent,Ht=v.cameras;ot(v,at);for(let qt=0;qt<Ht.length;qt++)ot(Ht[qt],at);Ht.length===2?G(v,b,P):v.projectionMatrix.copy(b.projectionMatrix),pt(j,v,at)};function pt(j,ut,wt){wt===null?j.matrix.copy(ut.matrixWorld):(j.matrix.copy(wt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ut.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ut.projectionMatrix),j.projectionMatrixInverse.copy(ut.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let xt=null;function mt(j,ut){if(u=ut.getViewerPose(l||o),g=ut,u!==null){const wt=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let at=!1;wt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let qt=0;qt<wt.length;qt++){const Xt=wt[qt];let ee=null;if(f!==null)ee=f.getViewport(Xt);else{const vt=d.getViewSubImage(h,Xt);ee=vt.viewport,qt===0&&(t.setRenderTargetTextures(S,vt.colorTexture,h.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(S))}let ct=_[qt];ct===void 0&&(ct=new un,ct.layers.enable(qt),ct.viewport=new Se,_[qt]=ct),ct.matrix.fromArray(Xt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Xt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(ee.x,ee.y,ee.width,ee.height),qt===0&&(v.matrix.copy(ct.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(ct)}const Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const qt=d.getDepthInformation(wt[0]);qt&&qt.isValid&&qt.texture&&x.init(t,qt,s.renderState)}}for(let wt=0;wt<y.length;wt++){const at=M[wt],Ht=y[wt];at!==null&&Ht!==void 0&&Ht.update(at,ut,l||o)}xt&&xt(j,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}const Ft=new Th;Ft.setAnimationLoop(mt),this.setAnimationLoop=function(j){xt=j},this.dispose=function(){}}}const _i=new Sn,wg=new se;function bg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,y,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,M=S.envMapRotation;y&&(m.envMap.value=y,_i.copy(M),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(_i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Eg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const M=y.program;n.uniformBlockBinding(S,M)}function l(S,y){let M=s[S.id];M===void 0&&(g(S),M=u(S),s[S.id]=M,S.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(S,L);const A=t.render.frame;r[S.id]!==A&&(h(S),r[S.id]=A)}function u(S){const y=d();S.__bindingPointIndex=y;const M=i.createBuffer(),L=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=s[S.id],M=S.uniforms,L=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,b=M.length;A<b;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let _=0,v=P.length;_<v;_++){const T=P[_];if(f(T,A,_,L)===!0){const N=T.__offset,O=Array.isArray(T.value)?T.value:[T.value];let V=0;for(let W=0;W<O.length;W++){const X=O[W],tt=x(X);typeof X=="number"||typeof X=="boolean"?(T.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,N+V,T.__data)):X.isMatrix3?(T.__data[0]=X.elements[0],T.__data[1]=X.elements[1],T.__data[2]=X.elements[2],T.__data[3]=0,T.__data[4]=X.elements[3],T.__data[5]=X.elements[4],T.__data[6]=X.elements[5],T.__data[7]=0,T.__data[8]=X.elements[6],T.__data[9]=X.elements[7],T.__data[10]=X.elements[8],T.__data[11]=0):(X.toArray(T.__data,V),V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,M,L){const A=S.value,b=y+"_"+M;if(L[b]===void 0)return typeof A=="number"||typeof A=="boolean"?L[b]=A:L[b]=A.clone(),!0;{const P=L[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(S){const y=S.uniforms;let M=0;const L=16;for(let b=0,P=y.length;b<P;b++){const _=Array.isArray(y[b])?y[b]:[y[b]];for(let v=0,T=_.length;v<T;v++){const N=_[v],O=Array.isArray(N.value)?N.value:[N.value];for(let V=0,W=O.length;V<W;V++){const X=O[V],tt=x(X),G=M%L,ot=G%tt.boundary,pt=G+ot;M+=ot,pt!==0&&L-pt<tt.storage&&(M+=L-pt),N.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=tt.storage}}}const A=M%L;return A>0&&(M+=L-A),S.__size=M,S.__cache={},this}function x(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Tg{constructor(t={}){const{canvas:e=fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=ci,this.toneMappingExposure=1;const M=this;let L=!1,A=0,b=0,P=null,_=-1,v=null;const T=new Se,N=new Se;let O=null;const V=new $t(0);let W=0,X=e.width,tt=e.height,G=1,ot=null,pt=null;const xt=new Se(0,0,X,tt),mt=new Se(0,0,X,tt);let Ft=!1;const j=new sc;let ut=!1,wt=!1;const at=new se,Ht=new se,qt=new R,Xt=new Se,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function vt(){return P===null?G:1}let I=n;function Nt(E,k){return e.getContext(E,k)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$a}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),I===null){const k="webgl2";if(I=Nt(k,E),I===null)throw Nt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,Pt,Mt,Gt,bt,C,w,q,et,ht,nt,Lt,_t,D,Z,z,Y,lt,yt,dt,Ut,Rt,Ot,F;function gt(){st=new L0(I),st.init(),Rt=new gg(I,st),Pt=new E0(I,st,t,Rt),Mt=new fg(I,st),Pt.reverseDepthBuffer&&h&&Mt.buffers.depth.setReversed(!0),Gt=new U0(I),bt=new jm,C=new mg(I,st,Mt,bt,Pt,Rt,Gt),w=new A0(M),q=new P0(M),et=new kd(I),Ot=new w0(I,et),ht=new D0(I,et,Gt,Ot),nt=new N0(I,ht,et,Gt),yt=new F0(I,Pt,C),z=new T0(bt),Lt=new Jm(M,w,q,st,Pt,Ot,z),_t=new bg(M,bt),D=new tg,Z=new og(st),lt=new S0(M,w,q,Mt,nt,f,c),Y=new ug(M,nt,Pt),F=new Eg(I,Gt,Pt,Mt),dt=new b0(I,st,Gt),Ut=new I0(I,st,Gt),Gt.programs=Lt.programs,M.capabilities=Pt,M.extensions=st,M.properties=bt,M.renderLists=D,M.shadowMap=Y,M.state=Mt,M.info=Gt}gt();const $=new Sg(M,I);this.xr=$,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(X,tt,!1))},this.getSize=function(E){return E.set(X,tt)},this.setSize=function(E,k,K=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,tt=k,e.width=Math.floor(E*G),e.height=Math.floor(k*G),K===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(X*G,tt*G).floor()},this.setDrawingBufferSize=function(E,k,K){X=E,tt=k,G=K,e.width=Math.floor(E*K),e.height=Math.floor(k*K),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(xt)},this.setViewport=function(E,k,K,J){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,k,K,J),Mt.viewport(T.copy(xt).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(mt)},this.setScissor=function(E,k,K,J){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,k,K,J),Mt.scissor(N.copy(mt).multiplyScalar(G).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(E){Mt.setScissorTest(Ft=E)},this.setOpaqueSort=function(E){ot=E},this.setTransparentSort=function(E){pt=E},this.getClearColor=function(E){return E.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(E=!0,k=!0,K=!0){let J=0;if(E){let H=!1;if(P!==null){const St=P.texture.format;H=St===nc||St===ec||St===tc}if(H){const St=P.texture.type,Dt=St===Xn||St===Ci||St===Xs||St===ds||St===Ja||St===ja,zt=lt.getClearColor(),Bt=lt.getClearAlpha(),Zt=zt.r,Kt=zt.g,kt=zt.b;Dt?(g[0]=Zt,g[1]=Kt,g[2]=kt,g[3]=Bt,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Zt,x[1]=Kt,x[2]=kt,x[3]=Bt,I.clearBufferiv(I.COLOR,0,x))}else J|=I.COLOR_BUFFER_BIT}k&&(J|=I.DEPTH_BUFFER_BIT),K&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),D.dispose(),Z.dispose(),bt.dispose(),w.dispose(),q.dispose(),nt.dispose(),Ot.dispose(),F.dispose(),Lt.dispose(),$.dispose(),$.removeEventListener("sessionstart",gc),$.removeEventListener("sessionend",xc),di.stop()};function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=Gt.autoReset,k=Y.enabled,K=Y.autoUpdate,J=Y.needsUpdate,H=Y.type;gt(),Gt.autoReset=E,Y.enabled=k,Y.autoUpdate=K,Y.needsUpdate=J,Y.type=H}function Tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yt(E){const k=E.target;k.removeEventListener("dispose",Yt),pe(k)}function pe(E){Re(E),bt.remove(E)}function Re(E){const k=bt.get(E).programs;k!==void 0&&(k.forEach(function(K){Lt.releaseProgram(K)}),E.isShaderMaterial&&Lt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,K,J,H,St){k===null&&(k=ee);const Dt=H.isMesh&&H.matrixWorld.determinant()<0,zt=au(E,k,K,J,H);Mt.setMaterial(J,Dt);let Bt=K.index,Zt=1;if(J.wireframe===!0){if(Bt=ht.getWireframeAttribute(K),Bt===void 0)return;Zt=2}const Kt=K.drawRange,kt=K.attributes.position;let re=Kt.start*Zt,ge=(Kt.start+Kt.count)*Zt;St!==null&&(re=Math.max(re,St.start*Zt),ge=Math.min(ge,(St.start+St.count)*Zt)),Bt!==null?(re=Math.max(re,0),ge=Math.min(ge,Bt.count)):kt!=null&&(re=Math.max(re,0),ge=Math.min(ge,kt.count));const xe=ge-re;if(xe<0||xe===1/0)return;Ot.setup(H,J,zt,K,Bt);let tn,ce=dt;if(Bt!==null&&(tn=et.get(Bt),ce=Ut,ce.setIndex(tn)),H.isMesh)J.wireframe===!0?(Mt.setLineWidth(J.wireframeLinewidth*vt()),ce.setMode(I.LINES)):ce.setMode(I.TRIANGLES);else if(H.isLine){let Vt=J.linewidth;Vt===void 0&&(Vt=1),Mt.setLineWidth(Vt*vt()),H.isLineSegments?ce.setMode(I.LINES):H.isLineLoop?ce.setMode(I.LINE_LOOP):ce.setMode(I.LINE_STRIP)}else H.isPoints?ce.setMode(I.POINTS):H.isSprite&&ce.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ce.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ce.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Vt=H._multiDrawStarts,In=H._multiDrawCounts,le=H._multiDrawCount,mn=Bt?et.get(Bt).bytesPerElement:1,Fi=bt.get(J).currentProgram.getUniforms();for(let nn=0;nn<le;nn++)Fi.setValue(I,"_gl_DrawID",nn),ce.render(Vt[nn]/mn,In[nn])}else if(H.isInstancedMesh)ce.renderInstances(re,xe,H.count);else if(K.isInstancedBufferGeometry){const Vt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,In=Math.min(K.instanceCount,Vt);ce.renderInstances(re,xe,In)}else ce.render(re,xe)};function ue(E,k,K){E.transparent===!0&&E.side===Me&&E.forceSinglePass===!1?(E.side=ke,E.needsUpdate=!0,er(E,k,K),E.side=li,E.needsUpdate=!0,er(E,k,K),E.side=Me):er(E,k,K)}this.compile=function(E,k,K=null){K===null&&(K=E),p=Z.get(K),p.init(k),y.push(p),K.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==K&&E.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const J=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const St=H.material;if(St)if(Array.isArray(St))for(let Dt=0;Dt<St.length;Dt++){const zt=St[Dt];ue(zt,K,H),J.add(zt)}else ue(St,K,H),J.add(St)}),y.pop(),p=null,J},this.compileAsync=function(E,k,K=null){const J=this.compile(E,k,K);return new Promise(H=>{function St(){if(J.forEach(function(Dt){bt.get(Dt).currentProgram.isReady()&&J.delete(Dt)}),J.size===0){H(E);return}setTimeout(St,10)}st.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let pn=null;function Dn(E){pn&&pn(E)}function gc(){di.stop()}function xc(){di.start()}const di=new Th;di.setAnimationLoop(Dn),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(E){pn=E,$.setAnimationLoop(E),E===null?di.stop():di.start()},$.addEventListener("sessionstart",gc),$.addEventListener("sessionend",xc),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,k,P),p=Z.get(E,y.length),p.init(k),y.push(p),Ht.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(Ht),wt=this.localClippingEnabled,ut=z.init(this.clippingPlanes,wt),m=D.get(E,S.length),m.init(),S.push(m),$.enabled===!0&&$.isPresenting===!0){const St=M.xr.getDepthSensingMesh();St!==null&&co(St,k,-1/0,M.sortObjects)}co(E,k,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ot,pt),ct=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ct&&lt.addToRenderList(m,E),this.info.render.frame++,ut===!0&&z.beginShadows();const K=p.state.shadowsArray;Y.render(K,E,k),ut===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const St=k.cameras;if(H.length>0)for(let Dt=0,zt=St.length;Dt<zt;Dt++){const Bt=St[Dt];vc(J,H,E,Bt)}ct&&lt.render(E);for(let Dt=0,zt=St.length;Dt<zt;Dt++){const Bt=St[Dt];_c(m,E,Bt,Bt.viewport)}}else H.length>0&&vc(J,H,E,k),ct&&lt.render(E),_c(m,E,k);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(M,E,k),Ot.resetDefaultState(),_=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],ut===!0&&z.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function co(E,k,K,J){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){J&&Xt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ht);const Dt=nt.update(E),zt=E.material;zt.visible&&m.push(E,Dt,zt,K,Xt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const Dt=nt.update(E),zt=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xt.copy(E.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Xt.copy(Dt.boundingSphere.center)),Xt.applyMatrix4(E.matrixWorld).applyMatrix4(Ht)),Array.isArray(zt)){const Bt=Dt.groups;for(let Zt=0,Kt=Bt.length;Zt<Kt;Zt++){const kt=Bt[Zt],re=zt[kt.materialIndex];re&&re.visible&&m.push(E,Dt,re,K,Xt.z,kt)}}else zt.visible&&m.push(E,Dt,zt,K,Xt.z,null)}}const St=E.children;for(let Dt=0,zt=St.length;Dt<zt;Dt++)co(St[Dt],k,K,J)}function _c(E,k,K,J){const H=E.opaque,St=E.transmissive,Dt=E.transparent;p.setupLightsView(K),ut===!0&&z.setGlobalState(M.clippingPlanes,K),J&&Mt.viewport(T.copy(J)),H.length>0&&tr(H,k,K),St.length>0&&tr(St,k,K),Dt.length>0&&tr(Dt,k,K),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function vc(E,k,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Pi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?js:Xn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const St=p.state.transmissionRenderTarget[J.id],Dt=J.viewport||T;St.setSize(Dt.z,Dt.w);const zt=M.getRenderTarget();M.setRenderTarget(St),M.getClearColor(V),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),ct&&lt.render(K);const Bt=M.toneMapping;M.toneMapping=ci;const Zt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),ut===!0&&z.setGlobalState(M.clippingPlanes,J),tr(E,K,J),C.updateMultisampleRenderTarget(St),C.updateRenderTargetMipmap(St),st.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let kt=0,re=k.length;kt<re;kt++){const ge=k[kt],xe=ge.object,tn=ge.geometry,ce=ge.material,Vt=ge.group;if(ce.side===Me&&xe.layers.test(J.layers)){const In=ce.side;ce.side=ke,ce.needsUpdate=!0,Mc(xe,K,J,tn,ce,Vt),ce.side=In,ce.needsUpdate=!0,Kt=!0}}Kt===!0&&(C.updateMultisampleRenderTarget(St),C.updateRenderTargetMipmap(St))}M.setRenderTarget(zt),M.setClearColor(V,W),Zt!==void 0&&(J.viewport=Zt),M.toneMapping=Bt}function tr(E,k,K){const J=k.isScene===!0?k.overrideMaterial:null;for(let H=0,St=E.length;H<St;H++){const Dt=E[H],zt=Dt.object,Bt=Dt.geometry,Zt=J===null?Dt.material:J,Kt=Dt.group;zt.layers.test(K.layers)&&Mc(zt,k,K,Bt,Zt,Kt)}}function Mc(E,k,K,J,H,St){E.onBeforeRender(M,k,K,J,H,St),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(M,k,K,J,E,St),H.transparent===!0&&H.side===Me&&H.forceSinglePass===!1?(H.side=ke,H.needsUpdate=!0,M.renderBufferDirect(K,k,J,H,E,St),H.side=li,H.needsUpdate=!0,M.renderBufferDirect(K,k,J,H,E,St),H.side=Me):M.renderBufferDirect(K,k,J,H,E,St),E.onAfterRender(M,k,K,J,H,St)}function er(E,k,K){k.isScene!==!0&&(k=ee);const J=bt.get(E),H=p.state.lights,St=p.state.shadowsArray,Dt=H.state.version,zt=Lt.getParameters(E,H.state,St,k,K),Bt=Lt.getProgramCacheKey(zt);let Zt=J.programs;J.environment=E.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(E.isMeshStandardMaterial?q:w).get(E.envMap||J.environment),J.envMapRotation=J.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Zt===void 0&&(E.addEventListener("dispose",Yt),Zt=new Map,J.programs=Zt);let Kt=Zt.get(Bt);if(Kt!==void 0){if(J.currentProgram===Kt&&J.lightsStateVersion===Dt)return Sc(E,zt),Kt}else zt.uniforms=Lt.getUniforms(E),E.onBeforeCompile(zt,M),Kt=Lt.acquireProgram(zt,Bt),Zt.set(Bt,Kt),J.uniforms=zt.uniforms;const kt=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=z.uniform),Sc(E,zt),J.needsLights=lu(E),J.lightsStateVersion=Dt,J.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMap.value=H.state.directionalShadowMap,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotShadowMap.value=H.state.spotShadowMap,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMap.value=H.state.pointShadowMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=Kt,J.uniformsList=null,Kt}function yc(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Vr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Sc(E,k){const K=bt.get(E);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function au(E,k,K,J,H){k.isScene!==!0&&(k=ee),C.resetTextureUnits();const St=k.fog,Dt=J.isMeshStandardMaterial?k.environment:null,zt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xs,Bt=(J.isMeshStandardMaterial?q:w).get(J.envMap||Dt),Zt=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Kt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),kt=!!K.morphAttributes.position,re=!!K.morphAttributes.normal,ge=!!K.morphAttributes.color;let xe=ci;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xe=M.toneMapping);const tn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ce=tn!==void 0?tn.length:0,Vt=bt.get(J),In=p.state.lights;if(ut===!0&&(wt===!0||E!==v)){const ln=E===v&&J.id===_;z.setState(J,E,ln)}let le=!1;J.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==In.state.version||Vt.outputColorSpace!==zt||H.isBatchedMesh&&Vt.batching===!1||!H.isBatchedMesh&&Vt.batching===!0||H.isBatchedMesh&&Vt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Vt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Vt.instancing===!1||!H.isInstancedMesh&&Vt.instancing===!0||H.isSkinnedMesh&&Vt.skinning===!1||!H.isSkinnedMesh&&Vt.skinning===!0||H.isInstancedMesh&&Vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Vt.instancingMorph===!1&&H.morphTexture!==null||Vt.envMap!==Bt||J.fog===!0&&Vt.fog!==St||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==z.numPlanes||Vt.numIntersection!==z.numIntersection)||Vt.vertexAlphas!==Zt||Vt.vertexTangents!==Kt||Vt.morphTargets!==kt||Vt.morphNormals!==re||Vt.morphColors!==ge||Vt.toneMapping!==xe||Vt.morphTargetsCount!==ce)&&(le=!0):(le=!0,Vt.__version=J.version);let mn=Vt.currentProgram;le===!0&&(mn=er(J,k,H));let Fi=!1,nn=!1,Ss=!1;const _e=mn.getUniforms(),wn=Vt.uniforms;if(Mt.useProgram(mn.program)&&(Fi=!0,nn=!0,Ss=!0),J.id!==_&&(_=J.id,nn=!0),Fi||v!==E){Mt.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),md(at),gd(at),_e.setValue(I,"projectionMatrix",at)):_e.setValue(I,"projectionMatrix",E.projectionMatrix),_e.setValue(I,"viewMatrix",E.matrixWorldInverse);const Zn=_e.map.cameraPosition;Zn!==void 0&&Zn.setValue(I,qt.setFromMatrixPosition(E.matrixWorld)),Pt.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&_e.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,nn=!0,Ss=!0)}if(H.isSkinnedMesh){_e.setOptional(I,H,"bindMatrix"),_e.setOptional(I,H,"bindMatrixInverse");const ln=H.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),_e.setValue(I,"boneTexture",ln.boneTexture,C))}H.isBatchedMesh&&(_e.setOptional(I,H,"batchingTexture"),_e.setValue(I,"batchingTexture",H._matricesTexture,C),_e.setOptional(I,H,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",H._indirectTexture,C),_e.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",H._colorsTexture,C));const ws=K.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0)&&yt.update(H,K,mn),(nn||Vt.receiveShadow!==H.receiveShadow)&&(Vt.receiveShadow=H.receiveShadow,_e.setValue(I,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(wn.envMap.value=Bt,wn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(wn.envMapIntensity.value=k.environmentIntensity),nn&&(_e.setValue(I,"toneMappingExposure",M.toneMappingExposure),Vt.needsLights&&cu(wn,Ss),St&&J.fog===!0&&_t.refreshFogUniforms(wn,St),_t.refreshMaterialUniforms(wn,J,G,tt,p.state.transmissionRenderTarget[E.id]),Vr.upload(I,yc(Vt),wn,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Vr.upload(I,yc(Vt),wn,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&_e.setValue(I,"center",H.center),_e.setValue(I,"modelViewMatrix",H.modelViewMatrix),_e.setValue(I,"normalMatrix",H.normalMatrix),_e.setValue(I,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ln=J.uniformsGroups;for(let Zn=0,$n=ln.length;Zn<$n;Zn++){const wc=ln[Zn];F.update(wc,mn),F.bind(wc,mn)}}return mn}function cu(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function lu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,k,K){bt.get(E.texture).__webglTexture=k,bt.get(E.depthTexture).__webglTexture=K;const J=bt.get(E);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const K=bt.get(E);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,K=0){P=E,A=k,b=K;let J=!0,H=null,St=!1,Dt=!1;if(E){const Bt=bt.get(E);if(Bt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(Bt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(Bt.__hasExternalTextures)C.rebindTextures(E,bt.get(E.texture).__webglTexture,bt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const kt=E.depthTexture;if(Bt.__boundDepthTexture!==kt){if(kt!==null&&bt.has(kt)&&(E.width!==kt.image.width||E.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Zt=E.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Dt=!0);const Kt=bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Kt[k])?H=Kt[k][K]:H=Kt[k],St=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?H=bt.get(E).__webglMultisampledFramebuffer:Array.isArray(Kt)?H=Kt[K]:H=Kt,T.copy(E.viewport),N.copy(E.scissor),O=E.scissorTest}else T.copy(xt).multiplyScalar(G).floor(),N.copy(mt).multiplyScalar(G).floor(),O=Ft;if(Mt.bindFramebuffer(I.FRAMEBUFFER,H)&&J&&Mt.drawBuffers(E,H),Mt.viewport(T),Mt.scissor(N),Mt.setScissorTest(O),St){const Bt=bt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Bt.__webglTexture,K)}else if(Dt){const Bt=bt.get(E.texture),Zt=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,K||0,Zt)}_=-1},this.readRenderTargetPixels=function(E,k,K,J,H,St,Dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Dt!==void 0&&(zt=zt[Dt]),zt){Mt.bindFramebuffer(I.FRAMEBUFFER,zt);try{const Bt=E.texture,Zt=Bt.format,Kt=Bt.type;if(!Pt.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-J&&K>=0&&K<=E.height-H&&I.readPixels(k,K,J,H,Rt.convert(Zt),Rt.convert(Kt),St)}finally{const Bt=P!==null?bt.get(P).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(E,k,K,J,H,St,Dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Dt!==void 0&&(zt=zt[Dt]),zt){const Bt=E.texture,Zt=Bt.format,Kt=Bt.type;if(!Pt.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-J&&K>=0&&K<=E.height-H){Mt.bindFramebuffer(I.FRAMEBUFFER,zt);const kt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.bufferData(I.PIXEL_PACK_BUFFER,St.byteLength,I.STREAM_READ),I.readPixels(k,K,J,H,Rt.convert(Zt),Rt.convert(Kt),0);const re=P!==null?bt.get(P).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,re);const ge=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await pd(I,ge,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,kt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,St),I.deleteBuffer(kt),I.deleteSync(ge),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,K=0){E.isTexture!==!0&&(Ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const J=Math.pow(2,-K),H=Math.floor(E.image.width*J),St=Math.floor(E.image.height*J),Dt=k!==null?k.x:0,zt=k!==null?k.y:0;C.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,Dt,zt,H,St),Mt.unbindTexture()},this.copyTextureToTexture=function(E,k,K=null,J=null,H=0){E.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,E=arguments[1],k=arguments[2],H=arguments[3]||0,K=null);let St,Dt,zt,Bt,Zt,Kt,kt,re,ge;const xe=E.isCompressedTexture?E.mipmaps[H]:E.image;K!==null?(St=K.max.x-K.min.x,Dt=K.max.y-K.min.y,zt=K.isBox3?K.max.z-K.min.z:1,Bt=K.min.x,Zt=K.min.y,Kt=K.isBox3?K.min.z:0):(St=xe.width,Dt=xe.height,zt=xe.depth||1,Bt=0,Zt=0,Kt=0),J!==null?(kt=J.x,re=J.y,ge=J.z):(kt=0,re=0,ge=0);const tn=Rt.convert(k.format),ce=Rt.convert(k.type);let Vt;k.isData3DTexture?(C.setTexture3D(k,0),Vt=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Vt=I.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Vt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const In=I.getParameter(I.UNPACK_ROW_LENGTH),le=I.getParameter(I.UNPACK_IMAGE_HEIGHT),mn=I.getParameter(I.UNPACK_SKIP_PIXELS),Fi=I.getParameter(I.UNPACK_SKIP_ROWS),nn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Kt);const Ss=E.isDataArrayTexture||E.isData3DTexture,_e=k.isDataArrayTexture||k.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const wn=bt.get(E),ws=bt.get(k),ln=bt.get(wn.__renderTarget),Zn=bt.get(ws.__renderTarget);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,ln.__webglFramebuffer),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let $n=0;$n<zt;$n++)Ss&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(E).__webglTexture,H,Kt+$n),E.isDepthTexture?(_e&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.get(k).__webglTexture,H,ge+$n),I.blitFramebuffer(Bt,Zt,St,Dt,kt,re,St,Dt,I.DEPTH_BUFFER_BIT,I.NEAREST)):_e?I.copyTexSubImage3D(Vt,H,kt,re,ge+$n,Bt,Zt,St,Dt):I.copyTexSubImage2D(Vt,H,kt,re,ge+$n,Bt,Zt,St,Dt);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _e?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Vt,H,kt,re,ge,St,Dt,zt,tn,ce,xe.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Vt,H,kt,re,ge,St,Dt,zt,tn,xe.data):I.texSubImage3D(Vt,H,kt,re,ge,St,Dt,zt,tn,ce,xe):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,kt,re,St,Dt,tn,ce,xe.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,kt,re,xe.width,xe.height,tn,xe.data):I.texSubImage2D(I.TEXTURE_2D,H,kt,re,St,Dt,tn,ce,xe);I.pixelStorei(I.UNPACK_ROW_LENGTH,In),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le),I.pixelStorei(I.UNPACK_SKIP_PIXELS,mn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Fi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,nn),H===0&&k.generateMipmaps&&I.generateMipmap(Vt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(E,k,K=null,J=null,H=0){return E.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,E=arguments[2],k=arguments[3],H=arguments[4]||0),Ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,K,J,H)},this.initRenderTarget=function(E){bt.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){A=0,b=0,P=null,Mt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class oc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new oc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ag extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Na,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new R;class qr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ih extends Ui{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ki;const Rs=new R,Ji=new R,ji=new R,Qi=new ft,Cs=new ft,Uh=new se,wr=new R,Ps=new R,br=new R,yl=new ft,zo=new ft,Sl=new ft;class Cg extends Pe{constructor(t=new Ih){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rg(e,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new qr(n,3,0,!1)),Ki.setAttribute("uv",new qr(n,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),Uh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-ji.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Er(wr.set(-.5,-.5,0),ji,o,Ji,s,r),Er(Ps.set(.5,-.5,0),ji,o,Ji,s,r),Er(br.set(.5,.5,0),ji,o,Ji,s,r),yl.set(0,0),zo.set(1,0),Sl.set(1,1);let a=t.ray.intersectTriangle(wr,Ps,br,!1,Rs);if(a===null&&(Er(Ps.set(-.5,.5,0),ji,o,Ji,s,r),zo.set(0,1),a=t.ray.intersectTriangle(wr,br,Ps,!1,Rs),a===null))return;const c=t.ray.origin.distanceTo(Rs);c<t.near||c>t.far||e.push({distance:c,point:Rs.clone(),uv:an.getInterpolation(Rs,wr,Ps,br,yl,zo,Sl,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Er(i,t,e,n,s,r){Qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Cs.x=r*Qi.x-s*Qi.y,Cs.y=s*Qi.x+r*Qi.y):Cs.copy(Qi),i.copy(t),i.x+=Cs.x,i.y+=Cs.y,i.applyMatrix4(Uh)}class Pg extends Xe{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Qe,u=Qe,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wl extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ts=new se,bl=new se,Tr=[],El=new Ii,Lg=new se,Ls=new Q,Ds=new vs;class za extends Q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),El.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(El)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Ds.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),t.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),bl.multiplyMatrices(n,ts),Ls.matrixWorld=bl,Ls.raycast(t,Tr);for(let o=0,a=Tr.length;o<a;o++){const c=Tr[o];c.instanceId=r,c.object=this,e.push(c)}Tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pg(new Float32Array(s*this.count),s,this.count,Qa,An));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ac extends Ui{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yr=new R,Zr=new R,Tl=new se,Is=new _h,Ar=new vs,Bo=new R,Al=new R;class Fh extends Pe{constructor(t=new we,e=new ac){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Yr.fromBufferAttribute(e,s-1),Zr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Yr.distanceTo(Zr);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=r,t.ray.intersectsSphere(Ar)===!1)return;Tl.copy(s).invert(),Is.copy(t.ray).applyMatrix4(Tl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=u.getX(x),S=u.getX(x+1),y=Rr(this,t,Is,c,p,S);y&&e.push(y)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(f),p=Rr(this,t,Is,c,x,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){const p=Rr(this,t,Is,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Rr(this,t,Is,c,g-1,f);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Rr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Yr.fromBufferAttribute(o,s),Zr.fromBufferAttribute(o,r),e.distanceSqToSegment(Yr,Zr,Bo,Al)>n)return;Bo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Bo);if(!(c<t.near||c>t.far))return{distance:c,point:Al.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Rl=new R,Cl=new R;class Dg extends Fh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Rl.fromBufferAttribute(e,s),Cl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rl.distanceTo(Cl);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cc extends Xe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ft:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,c=new se;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lc extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ig extends lc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Cr=new R,ko=new hc,Ho=new hc,Vo=new hc;class Ug extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Cr.subVectors(s[0],s[1]).add(s[0]),l=Cr);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Cr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Cr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ko.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,x,m),Ho.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,x,m),Vo.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Ho.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Vo.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(ko.calc(c),Ho.calc(c),Vo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Pl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Fg(i,t){const e=1-i;return e*e*t}function Ng(i,t){return 2*(1-i)*i*t}function Og(i,t){return i*i*t}function Hs(i,t,e,n){return Fg(i,t)+Ng(i,e)+Og(i,n)}function zg(i,t){const e=1-i;return e*e*e*t}function Bg(i,t){const e=1-i;return 3*e*e*i*t}function kg(i,t){return 3*(1-i)*i*i*t}function Hg(i,t){return i*i*i*t}function Vs(i,t,e,n,s){return zg(i,t)+Bg(i,e)+kg(i,n)+Hg(i,s)}class Nh extends Pn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vg extends Pn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y),Vs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Oh extends Pn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gg extends Pn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zh extends Pn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wg extends Pn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(t,s.x,r.x,o.x),Hs(t,s.y,r.y,o.y),Hs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bh extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Pl(a,c.x,l.x,u.x,d.x),Pl(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var Ba=Object.freeze({__proto__:null,ArcCurve:Ig,CatmullRomCurve3:Ug,CubicBezierCurve:Nh,CubicBezierCurve3:Vg,EllipseCurve:lc,LineCurve:Oh,LineCurve3:Gg,QuadraticBezierCurve:zh,QuadraticBezierCurve3:Wg,SplineCurve:Bh});class Xg extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ba[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ba[s.type]().fromJSON(s))}return this}}class ka extends Xg{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Oh(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new zh(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Nh(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new lc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class eo extends we{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,d=new R,h=new ft,f=new R,g=new R,x=new R;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let S=0;S<=e;S++){const y=n+S*u*s,M=Math.sin(y),L=Math.cos(y);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*M,d.y=t[A].y,d.z=t[A].x*L,o.push(d.x,d.y,d.z),h.x=S/e,h.y=A/(t.length-1),a.push(h.x,h.y);const b=c[3*A+0]*M,P=c[3*A+1],_=c[3*A+0]*L;l.push(b,P,_)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const M=y+S*t.length,L=M,A=M+t.length,b=M+t.length+1,P=M+1;r.push(L,A,P),r.push(b,P,A)}this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.points,t.segments,t.phiStart,t.phiLength)}}class Oe extends eo{constructor(t=1,e=1,n=4,s=8){const r=new ka;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Oe(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ln extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new R,u=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const x=[],m=n/2;let p=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(f,2));function S(){const M=new R,L=new R;let A=0;const b=(e-t)/n;for(let P=0;P<=r;P++){const _=[],v=P/r,T=v*(e-t)+t;for(let N=0;N<=s;N++){const O=N/s,V=O*c+a,W=Math.sin(V),X=Math.cos(V);L.x=T*W,L.y=-v*n+m,L.z=T*X,d.push(L.x,L.y,L.z),M.set(W,b,X).normalize(),h.push(M.x,M.y,M.z),f.push(O,1-v),_.push(g++)}x.push(_)}for(let P=0;P<s;P++)for(let _=0;_<r;_++){const v=x[_][P],T=x[_+1][P],N=x[_+1][P+1],O=x[_][P+1];(t>0||_!==0)&&(u.push(v,T,O),A+=3),(e>0||_!==r-1)&&(u.push(T,N,O),A+=3)}l.addGroup(p,A,0),p+=A}function y(M){const L=g,A=new ft,b=new R;let P=0;const _=M===!0?t:e,v=M===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*v,0),h.push(0,v,0),f.push(.5,.5),g++;const T=g;for(let N=0;N<=s;N++){const V=N/s*c+a,W=Math.cos(V),X=Math.sin(V);b.x=_*X,b.y=m*v,b.z=_*W,d.push(b.x,b.y,b.z),h.push(0,v,0),A.x=W*.5+.5,A.y=X*.5*v+.5,f.push(A.x,A.y),g++}for(let N=0;N<s;N++){const O=L+N,V=T+N;M===!0?u.push(V,V+1,O):u.push(V+1,V,O),P+=3}l.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Pr=new R,Lr=new R,Go=new R,Dr=new an;class qg extends we{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(as*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:x,b:m,c:p}=Dr;if(x.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Dr.getNormal(Go),d[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){const y=(S+1)%3,M=d[S],L=d[y],A=Dr[u[S]],b=Dr[u[y]],P=`${M}_${L}`,_=`${L}_${M}`;_ in h&&h[_]?(Go.dot(h[_].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(b.x,b.y,b.z)),h[_]=null):P in h||(h[P]={index0:l[S],index1:l[y],normal:Go.clone()})}}for(const g in h)if(h[g]){const{index0:x,index1:m}=h[g];Pr.fromBufferAttribute(a,x),Lr.fromBufferAttribute(a,m),f.push(Pr.x,Pr.y,Pr.z),f.push(Lr.x,Lr.y,Lr.z)}this.setAttribute("position",new he(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class kh extends ka{constructor(t){super(t),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ka().fromJSON(s))}return this}}const Yg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Hh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,d,h,f;if(n&&(r=jg(i,t,r,e)),i.length>80*e){a=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)d=i[g],h=i[g+1],d<a&&(a=d),h<c&&(c=h),d>l&&(l=d),h>u&&(u=h);f=Math.max(l-a,u-c),f=f!==0?32767/f:0}return Ys(r,o,e,a,c,f,0),o}};function Hh(i,t,e,n,s){let r,o;if(s===lx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Ll(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ll(r,i[r],i[r+1],o);return o&&no(o,o.next)&&($s(o),o=o.next),o}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(no(e,e.next)||ye(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ys(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ix(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?$g(i,n,s,r):Zg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),$s(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Kg(Li(i),t,e),Ys(i,t,e,n,s,r,2)):o===2&&Jg(i,t,e,n,s,r):Ys(Li(i),t,e,n,s,r,1);break}}}function Zg(i){const t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,h=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&is(s,a,r,c,o,l,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $g(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ye(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=a<c?a<l?a:l:c<l?c:l,g=u<d?u<h?u:h:d<h?d:h,x=a>c?a>l?a:l:c>l?c:l,m=u>d?u>h?u:h:d>h?d:h,p=Ha(f,g,t,e,n),S=Ha(x,m,t,e,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=p&&M&&M.z<=S;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&is(a,u,c,d,l,h,y.x,y.y)&&ye(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&is(a,u,c,d,l,h,M.x,M.y)&&ye(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&is(a,u,c,d,l,h,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=S;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&is(a,u,c,d,l,h,M.x,M.y)&&ye(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Kg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!no(s,r)&&Vh(s,n,n.next,r)&&Zs(s,r)&&Zs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),$s(n),$s(n.next),n=i=r),n=n.next}while(n!==i);return Li(n)}function Jg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ox(o,a)){let c=Gh(o,a);o=Li(o,o.next),c=Li(c,c.next),Ys(o,t,e,n,s,r,0),Ys(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function jg(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Hh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(rx(l));for(s.sort(Qg),r=0;r<s.length;r++)e=tx(s[r],e);return e}function Qg(i,t){return i.x-t.x}function tx(i,t){const e=ex(i,t);if(!e)return t;const n=Gh(e,i);return Li(n,n.next),Li(e,e.next)}function ex(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const h=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=r&&h>n&&(n=h,s=e.x<e.next.x?e:e.next,h===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&is(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Zs(e,i)&&(d<u||d===u&&(e.x>s.x||e.x===s.x&&nx(s,e)))&&(s=e,u=d)),e=e.next;while(e!==a);return s}function nx(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function ix(i,t,e,n){let s=i;do s.z===0&&(s.z=Ha(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sx(s)}function sx(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ha(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function rx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function is(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ox(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ax(i,t)&&(Zs(i,t)&&Zs(t,i)&&cx(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||no(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function no(i,t){return i.x===t.x&&i.y===t.y}function Vh(i,t,e,n){const s=Ur(ye(i,t,e)),r=Ur(ye(i,t,n)),o=Ur(ye(e,n,i)),a=Ur(ye(e,n,t));return!!(s!==r&&o!==a||s===0&&Ir(i,e,t)||r===0&&Ir(i,n,t)||o===0&&Ir(e,i,n)||a===0&&Ir(e,t,n))}function Ir(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ur(i){return i>0?1:i<0?-1:0}function ax(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zs(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function cx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gh(i,t){const e=new Va(i.i,i.x,i.y),n=new Va(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ll(i,t,e,n){const s=new Va(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Va(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Gs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Gs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Dl(t),Il(n,t);let o=t.length;e.forEach(Dl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Il(n,e[c]);const a=Yg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Dl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Il(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class uc extends we{constructor(t=new kh([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:hx;let y,M=!1,L,A,b,P;p&&(y=p.getSpacedPoints(u),M=!0,h=!1,L=p.computeFrenetFrames(u,!1),A=new R,b=new R,P=new R),h||(m=0,f=0,g=0,x=0);const _=a.extractPoints(l);let v=_.shape;const T=_.holes;if(!Gs.isClockWise(v)){v=v.reverse();for(let ct=0,vt=T.length;ct<vt;ct++){const I=T[ct];Gs.isClockWise(I)&&(T[ct]=I.reverse())}}const O=Gs.triangulateShape(v,T),V=v;for(let ct=0,vt=T.length;ct<vt;ct++){const I=T[ct];v=v.concat(I)}function W(ct,vt,I){return vt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(vt,I)}const X=v.length,tt=O.length;function G(ct,vt,I){let Nt,st,Pt;const Mt=ct.x-vt.x,Gt=ct.y-vt.y,bt=I.x-ct.x,C=I.y-ct.y,w=Mt*Mt+Gt*Gt,q=Mt*C-Gt*bt;if(Math.abs(q)>Number.EPSILON){const et=Math.sqrt(w),ht=Math.sqrt(bt*bt+C*C),nt=vt.x-Gt/et,Lt=vt.y+Mt/et,_t=I.x-C/ht,D=I.y+bt/ht,Z=((_t-nt)*C-(D-Lt)*bt)/(Mt*C-Gt*bt);Nt=nt+Mt*Z-ct.x,st=Lt+Gt*Z-ct.y;const z=Nt*Nt+st*st;if(z<=2)return new ft(Nt,st);Pt=Math.sqrt(z/2)}else{let et=!1;Mt>Number.EPSILON?bt>Number.EPSILON&&(et=!0):Mt<-Number.EPSILON?bt<-Number.EPSILON&&(et=!0):Math.sign(Gt)===Math.sign(C)&&(et=!0),et?(Nt=-Gt,st=Mt,Pt=Math.sqrt(w)):(Nt=Mt,st=Gt,Pt=Math.sqrt(w/2))}return new ft(Nt/Pt,st/Pt)}const ot=[];for(let ct=0,vt=V.length,I=vt-1,Nt=ct+1;ct<vt;ct++,I++,Nt++)I===vt&&(I=0),Nt===vt&&(Nt=0),ot[ct]=G(V[ct],V[I],V[Nt]);const pt=[];let xt,mt=ot.concat();for(let ct=0,vt=T.length;ct<vt;ct++){const I=T[ct];xt=[];for(let Nt=0,st=I.length,Pt=st-1,Mt=Nt+1;Nt<st;Nt++,Pt++,Mt++)Pt===st&&(Pt=0),Mt===st&&(Mt=0),xt[Nt]=G(I[Nt],I[Pt],I[Mt]);pt.push(xt),mt=mt.concat(xt)}for(let ct=0;ct<m;ct++){const vt=ct/m,I=f*Math.cos(vt*Math.PI/2),Nt=g*Math.sin(vt*Math.PI/2)+x;for(let st=0,Pt=V.length;st<Pt;st++){const Mt=W(V[st],ot[st],Nt);at(Mt.x,Mt.y,-I)}for(let st=0,Pt=T.length;st<Pt;st++){const Mt=T[st];xt=pt[st];for(let Gt=0,bt=Mt.length;Gt<bt;Gt++){const C=W(Mt[Gt],xt[Gt],Nt);at(C.x,C.y,-I)}}}const Ft=g+x;for(let ct=0;ct<X;ct++){const vt=h?W(v[ct],mt[ct],Ft):v[ct];M?(b.copy(L.normals[0]).multiplyScalar(vt.x),A.copy(L.binormals[0]).multiplyScalar(vt.y),P.copy(y[0]).add(b).add(A),at(P.x,P.y,P.z)):at(vt.x,vt.y,0)}for(let ct=1;ct<=u;ct++)for(let vt=0;vt<X;vt++){const I=h?W(v[vt],mt[vt],Ft):v[vt];M?(b.copy(L.normals[ct]).multiplyScalar(I.x),A.copy(L.binormals[ct]).multiplyScalar(I.y),P.copy(y[ct]).add(b).add(A),at(P.x,P.y,P.z)):at(I.x,I.y,d/u*ct)}for(let ct=m-1;ct>=0;ct--){const vt=ct/m,I=f*Math.cos(vt*Math.PI/2),Nt=g*Math.sin(vt*Math.PI/2)+x;for(let st=0,Pt=V.length;st<Pt;st++){const Mt=W(V[st],ot[st],Nt);at(Mt.x,Mt.y,d+I)}for(let st=0,Pt=T.length;st<Pt;st++){const Mt=T[st];xt=pt[st];for(let Gt=0,bt=Mt.length;Gt<bt;Gt++){const C=W(Mt[Gt],xt[Gt],Nt);M?at(C.x,C.y+y[u-1].y,y[u-1].x+I):at(C.x,C.y,d+I)}}}j(),ut();function j(){const ct=s.length/3;if(h){let vt=0,I=X*vt;for(let Nt=0;Nt<tt;Nt++){const st=O[Nt];Ht(st[2]+I,st[1]+I,st[0]+I)}vt=u+m*2,I=X*vt;for(let Nt=0;Nt<tt;Nt++){const st=O[Nt];Ht(st[0]+I,st[1]+I,st[2]+I)}}else{for(let vt=0;vt<tt;vt++){const I=O[vt];Ht(I[2],I[1],I[0])}for(let vt=0;vt<tt;vt++){const I=O[vt];Ht(I[0]+X*u,I[1]+X*u,I[2]+X*u)}}n.addGroup(ct,s.length/3-ct,0)}function ut(){const ct=s.length/3;let vt=0;wt(V,vt),vt+=V.length;for(let I=0,Nt=T.length;I<Nt;I++){const st=T[I];wt(st,vt),vt+=st.length}n.addGroup(ct,s.length/3-ct,1)}function wt(ct,vt){let I=ct.length;for(;--I>=0;){const Nt=I;let st=I-1;st<0&&(st=ct.length-1);for(let Pt=0,Mt=u+m*2;Pt<Mt;Pt++){const Gt=X*Pt,bt=X*(Pt+1),C=vt+Nt+Gt,w=vt+st+Gt,q=vt+st+bt,et=vt+Nt+bt;qt(C,w,q,et)}}}function at(ct,vt,I){c.push(ct),c.push(vt),c.push(I)}function Ht(ct,vt,I){Xt(ct),Xt(vt),Xt(I);const Nt=s.length/3,st=S.generateTopUV(n,s,Nt-3,Nt-2,Nt-1);ee(st[0]),ee(st[1]),ee(st[2])}function qt(ct,vt,I,Nt){Xt(ct),Xt(vt),Xt(Nt),Xt(vt),Xt(I),Xt(Nt);const st=s.length/3,Pt=S.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);ee(Pt[0]),ee(Pt[1]),ee(Pt[3]),ee(Pt[1]),ee(Pt[2]),ee(Pt[3])}function Xt(ct){s.push(c[ct*3+0]),s.push(c[ct*3+1]),s.push(c[ct*3+2])}function ee(ct){r.push(ct.x),r.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ux(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ba[s.type]().fromJSON(s)),new uc(n,t.options)}}const hx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ft(r,o),new ft(a,c),new ft(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ft(o,1-c),new ft(l,1-d),new ft(h,1-g),new ft(x,1-p)]:[new ft(a,1-c),new ft(u,1-d),new ft(f,1-g),new ft(m,1-p)]}};function ux(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class io extends we{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=t;const h=(e-t)/s,f=new R,g=new ft;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const S=p+m,y=S,M=S+n+1,L=S+n+2,A=S+1;a.push(y,M,A),a.push(M,L,A)}}this.setIndex(a),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class be extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new R,h=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){const A=L/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(A+M,1-y),S.push(l++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const y=u[p][S+1],M=u[p][S],L=u[p+1][S],A=u[p+1][S+1];(p!==0||o>0)&&f.push(y,M,A),(p!==n-1||c<Math.PI)&&f.push(M,L,A)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ms extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new R,d=new R,h=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;o.push(x,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class dx extends Ui{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new $t(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Wh extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class fx extends Wh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wo=new se,Ul=new R,Fl=new R;class px{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ul.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ul),Fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fl),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mx extends px{constructor(){super(new Ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gx extends Wh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new mx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);const En=20.12,it={physics:{dt:1/240,maxStepsPerFrame:24,gravity:9.81,airDensity:1.2,maxMicroSteps:64,microStepDistance:.006},ball:{radius:.036,mass:.16,dragCoefficient:.28,magnusCoefficient:16e-5,spinDecay:.2,maxMagnusAccel:3.4},ground:{pitchRestitution:.58,pitchFriction:.24,outfieldRestitution:.48,outfieldFriction:.2,rollingResistance:.12,rollThreshold:.85},bat:{mass:1.28,totalLength:.965,bladeLength:.56,bladeWidth:.108,collisionWidth:.145,bladeFace:.02,bladeBack:-.032,handleRadius:.018,gripFromToe:.8,comFromToe:.39,inertiaTransverse:.09,inertiaLong:.0022,sweetSpotFromToe:.19,sweetSpotWidth:.15,restitution:.76,restitutionFloor:.54,handCouplingMass:1.4,edgeRestitutionLoss:.25,friction:.26,softHandsMin:.4,softHandsSpeed:4.5,swingPowerMultiplier:1.14,maxExitSpeed:52},control:{mouseSensitivity:1,joystickSensitivity:1,responsiveness:1,showJoystick:"auto",mouseRadPerPixel:.0068,joystickRangeA:1.75,joystickRangeB:1.85,springFrequency:46,damping:.92,maxTiltSpeed:62,maxTiltAccel:2600,faceFollowRate:30,faceVelocityRef:7,restTilt:{a:0,b:.25},tiltMin:{a:-1.45,b:-1.35},tiltMax:{a:1.45,b:3},recenterRate:0,handsRest:{x:.04,y:.81,z:-1.12},swingMemoryTau:.08},body:{x:-.1,z:-.8,radius:.21,height:1.5},camera:{position:{x:0,y:1.58,z:.82},pitchDeg:-14.5,verticalFov:66,minHorizontalFov:74},stumps:{z:0,spacing:.1143,height:.711,radius:.0175},field:{boundaryRadius:55,centerZ:-En/2,pitchHalfWidth:1.52},bowling:{speeds:{slow:[78,95],medium:[125,140],fastMedium:[125,140],swing:[140,150],fast:[145,160]},releaseHeight:2.15,lines:{outsideOff:[.18,.32],off:[.07,.14],middle:[-.03,.03],leg:[-.13,-.07],outsideLeg:[-.26,-.17]},lengths:{yorker:[1.1,1.8],full:[2.4,4.2],good:[4.4,6.2],short:[5,6.5]}},fielding:{maxSpeed:6.6,jogSpeed:3.6,keeperSpeed:5.8,accel:18,reactionBase:.18,reactionInfieldFast:.24,catchRadius:1.15,diveCatchRadius:1.55,fastShotCatchRadius:.62,keeperCatchRadius:1.45,keeperCatchZoneRadius:6.5,keeperGroundRadius:3.8,keeperDepthSlow:2.35,keeperDepthFast:8.75,slipDepthSlow:2.85,slipDepthFast:8.05,slipWidthSlow:2.4,slipWidthFast:3.6,minSeparation:2.6,minCatchHeight:.14,maxCatchHeight:2.38,minCatchAirTime:.12,stopRadius:1.1,slideStopRadius:1.45,positions:[{id:"keeper",name:"Wicketkeeper",x:.22,z:3.8,isKeeper:!0,ring:"keeper"},{id:"slip",name:"First Slip",x:3.1,z:4.3,ring:"close"},{id:"point",name:"Point",x:19.5,z:-2.5,ring:"infield"},{id:"cover",name:"Cover",x:17.5,z:-14.5,ring:"infield"},{id:"midOff",name:"Mid-Off",x:6.8,z:-24.5,ring:"infield"},{id:"midOn",name:"Mid-On",x:-6.8,z:-24.5,ring:"infield"},{id:"midWicket",name:"Mid-Wicket",x:-18,z:-13.5,ring:"infield"},{id:"squareLeg",name:"Square Leg",x:-17.5,z:1.5,ring:"infield"},{id:"longOff",name:"Long-Off",x:14.5,z:-53.5,ring:"boundary"},{id:"longOn",name:"Long-On",x:-14.5,z:-53.5,ring:"boundary"},{id:"deepCover",name:"Deep Cover",x:33,z:-38.5,ring:"boundary"},{id:"deepMidWicket",name:"Deep Mid-Wicket",x:-34,z:-34.5,ring:"boundary"}]},game:{ballsPerOver:6,wickets:10,deadBallTimeout:8.5,resultPause:1.25}},Xh="physics-cricket-settings-v1";function xx(){try{const i=localStorage.getItem(Xh);if(!i)return;const t=JSON.parse(i);for(const e of["mouseSensitivity","joystickSensitivity","responsiveness"])typeof t[e]=="number"&&isFinite(t[e])&&(it.control[e]=t[e]);typeof t.showJoystick=="string"&&(it.control.showJoystick=t.showJoystick)}catch{}}function qh(){try{const i=it.control;localStorage.setItem(Xh,JSON.stringify({mouseSensitivity:i.mouseSensitivity,joystickSensitivity:i.joystickSensitivity,responsiveness:i.responsiveness,showJoystick:i.showJoystick}))}catch{}}const Nl=new R,Xo=new R,qo=new R,Ol=new se;function si(i,t,e){return i<t?t:i>e?e:i}function zs(i,t,e){const n=si((e-i)/(t-i),0,1);return n*n*(3-2*n)}function Yh(i){return i-.45*zs(-.2,1.1,i)}function _x(i,t,e){const n=si(i,-1.5,1.5),s=Yh(t),r=Math.cos(n);return e.set(Math.sin(n),-r*Math.cos(s),-r*Math.sin(s))}class vx{constructor(){const t=it.control;this.tilt=new ft(t.restTilt.a,t.restTilt.b),this.tiltVel=new ft,this.target=this.tilt.clone(),this.stepTarget=this.tilt.clone(),this.position=new R,this.quaternion=new qe,this.prevPosition=new R,this.prevQuaternion=new qe,this.hands=new R,this.dir=new R(0,-1,0),this.face=new R(0,0,-1),this.sweetLocal=new R(0,it.bat.sweetSpotFromToe,it.bat.bladeFace),this.sweetPos=new R,this.prevSweetPos=new R,this.sweetVel=new R,this.intentVel=new R,this.swingMemoryVel=new R,this.push=new R,this.prevFreeSweet=new R,this.lastDt=it.physics.dt,this.reset()}reset(){const t=it.control;this.tilt.set(t.restTilt.a,t.restTilt.b),this.tiltVel.set(0,0),this.target.copy(this.tilt),this.stepTarget.copy(this.tilt),this.sweetVel.set(0,0,0),this.intentVel.set(0,0,0),this.swingMemoryVel.set(0,0,0),this._computePose(0,!0),this.prevFreeSweet.subVectors(this.sweetPos,this.push),this.prevPosition.copy(this.position),this.prevQuaternion.copy(this.quaternion),this.prevSweetPos.copy(this.sweetPos)}clampTarget(t){const e=it.control;return t.x=si(t.x,e.tiltMin.a,e.tiltMax.a),t.y=si(t.y,e.tiltMin.b,e.tiltMax.b),t}addTargetDelta(t,e){this.target.x+=t,this.target.y+=e,this.clampTarget(this.target)}setTargetAbsolute(t,e){this.target.set(t,e),this.clampTarget(this.target)}recenter(t,e){if(e<=0)return;const n=it.control.restTilt,s=1-Math.exp(-e*t);this.target.x+=(n.a-this.target.x)*s,this.target.y+=(n.b-this.target.y)*s}step(t,e){const n=it.control,s=n.responsiveness,r=n.springFrequency*Math.sqrt(s),o=n.damping;this.stepTarget.copy(e),this.prevPosition.copy(this.position),this.prevQuaternion.copy(this.quaternion),this.prevSweetPos.copy(this.sweetPos);let a=r*r*(e.x-this.tilt.x)-2*o*r*this.tiltVel.x,c=r*r*(e.y-this.tilt.y)-2*o*r*this.tiltVel.y;const l=n.maxTiltAccel*s,u=Math.hypot(a,c);u>l&&(a*=l/u,c*=l/u),this.tiltVel.x+=a*t,this.tiltVel.y+=c*t;const d=this.tiltVel.length();if(d>n.maxTiltSpeed&&this.tiltVel.multiplyScalar(n.maxTiltSpeed/d),this.tilt.x+=this.tiltVel.x*t,this.tilt.y+=this.tiltVel.y*t,this.tilt.x=si(this.tilt.x,n.tiltMin.a-.05,n.tiltMax.a+.05),this.tilt.y=si(this.tilt.y,n.tiltMin.b-.1,n.tiltMax.b+.1),this._computePose(t,!1),this.lastDt=t,t>0){this.sweetVel.subVectors(this.sweetPos,this.prevSweetPos).divideScalar(t),this.intentVel.subVectors(this.sweetPos,this.push).sub(this.prevFreeSweet).divideScalar(t);const h=Math.exp(-t/(n.swingMemoryTau||.075));if(this.swingMemoryVel.multiplyScalar(h),this.intentVel.lengthSq()>this.swingMemoryVel.lengthSq()){this.swingMemoryVel.copy(this.intentVel);const f=this.swingMemoryVel.length();f>28&&this.swingMemoryVel.multiplyScalar(28/f)}}this.prevFreeSweet.subVectors(this.sweetPos,this.push)}_computePose(t,e){const n=it.control,s=it.bat,r=this.tilt.x,o=this.tilt.y,a=n.handsRest,c=zs(-.2,1.1,o);this.hands.set(a.x+.16*Math.tanh(r*.9),a.y+.36*zs(.9,2.6,o)+.06*Math.min(Math.abs(r),1.4)*zs(.4,1.4,o),a.z-.3*c+.12*zs(1.8,2.9,o)),_x(r,o,this.dir),this.position.copy(this.hands).addScaledVector(this.dir,s.gripFromToe);const l=Yh(o),u=qo.set(0,Math.sin(l),-Math.cos(l));u.addScaledVector(this.dir,-u.dot(this.dir)).normalize();const d=this.intentVel,h=d.dot(u),f=Math.abs(h)-h,g=1/n.faceVelocityRef,x=Nl.set(u.x+(d.x+f*u.x)*g,u.y+(d.y+f*u.y)*g,u.z+(d.z+f*u.z)*g);x.addScaledVector(this.dir,-x.dot(this.dir)),x.lengthSq()<1e-8&&x.copy(u),x.normalize(),e?this.face.copy(x):this.face.lerp(x,1-Math.exp(-n.faceFollowRate*Math.sqrt(n.responsiveness)*t)),this.face.addScaledVector(this.dir,-this.face.dot(this.dir)),this.face.lengthSq()<1e-8&&this.face.copy(x),this.face.normalize(),this._applyConstraints();const m=Xo.copy(this.dir).negate(),p=qo.crossVectors(m,this.face).normalize();Ol.makeBasis(p,m,this.face),this.quaternion.setFromRotationMatrix(Ol),this.sweetPos.copy(this.sweetLocal).applyQuaternion(this.quaternion).add(this.position)}_applyConstraints(){const t=it.bat,e=t.bladeWidth*.5,n=Xo.copy(this.dir).negate(),s=qo.crossVectors(n,this.face).normalize(),r=[[0,0,0],[-e,0,t.bladeFace],[e,0,t.bladeFace],[-e,0,t.bladeBack],[e,0,t.bladeBack],[-e,t.bladeLength,t.bladeFace],[e,t.bladeLength,t.bladeFace]];let o=0;for(let a=0;a<r.length;a++){const c=r[a],l=this.position.y+o+c[0]*s.y+c[1]*n.y+c[2]*this.face.y;l<.003&&(o+=.003-l)}this.push.set(0,o,0),o&&(this.position.y+=o,this.hands.y+=o)}poseAt(t,e,n){e.lerpVectors(this.prevPosition,this.position,t),n.slerpQuaternions(this.prevQuaternion,this.quaternion,t)}pointVelocity(t,e){const n=Nl.copy(t).applyQuaternion(this.quaternion).add(this.position),s=Xo.copy(t).applyQuaternion(this.prevQuaternion).add(this.prevPosition);e.subVectors(n,s).divideScalar(this.lastDt||it.physics.dt);const r=it.bat,o=r.gripFromToe-r.sweetSpotFromToe,a=si(Math.abs(r.gripFromToe-t.y),.18,r.gripFromToe),c=si(a/o,.35,1.25),l=this.swingMemoryVel.length()*c;return l>e.length()&&l>2&&e.copy(this.swingMemoryVel).multiplyScalar(c),e}get sweetSpeed(){return Math.max(this.sweetVel.length(),this.swingMemoryVel.length())}}const Fr=new R,Us=new R,Mx=new qe;function $r(i,t){return Math.abs(i)<it.field.pitchHalfWidth&&t<1.3&&t>-En-1.3}class Zh{constructor(){this.pos=new R,this.vel=new R,this.spin=new R,this.prevPos=new R,this.orientation=new qe,this.prevOrientation=new qe,this.active=!1,this.rolling=!1,this.events=[];const t=it.ball;this.dragK=.5*it.physics.airDensity*t.dragCoefficient*Math.PI*t.radius*t.radius/t.mass}launch(t,e,n=null){this.pos.copy(t),this.prevPos.copy(t),this.vel.copy(e),n?this.spin.copy(n):this.spin.set(-e.length()*2,0,0),this.active=!0,this.rolling=!1}step(t){if(this.prevPos.copy(this.pos),this.prevOrientation.copy(this.orientation),!this.active)return;const e=it.ball,n=it.physics.gravity,s=e.radius,r=this.vel,o=r.length();if(this.rolling){const c=Math.hypot(r.x,r.z),l=it.ground.rollingResistance*n*($r(this.pos.x,this.pos.z)?.6:1)+this.dragK*c*c,u=Math.max(0,c-l*t);c>1e-6?(r.x*=u/c,r.z*=u/c):(r.x=0,r.z=0),r.y=0,this.pos.x+=r.x*t,this.pos.z+=r.z*t,this.pos.y=s,this.spin.set(r.z/s,0,-r.x/s)}else{Fr.set(0,-n,0),Fr.addScaledVector(r,-this.dragK*o),Us.crossVectors(this.spin,r).multiplyScalar(e.magnusCoefficient);const c=Us.length();c>e.maxMagnusAccel&&Us.multiplyScalar(e.maxMagnusAccel/c),Fr.add(Us),r.addScaledVector(Fr,t),this.pos.addScaledVector(r,t),this.spin.multiplyScalar(Math.exp(-e.spinDecay*t)),this.pos.y<s&&r.y<0&&this._bounce(s)}const a=this.spin.length();if(a>1e-4){const c=Mx.setFromAxisAngle(Us.copy(this.spin).divideScalar(a),a*t);this.orientation.premultiply(c)}}_bounce(t){const e=it.ground,n=this.vel,s=$r(this.pos.x,this.pos.z),r=s?e.pitchRestitution:e.outfieldRestitution,o=s?e.pitchFriction:e.outfieldFriction,a=-n.y;this.pos.y=t+(t-this.pos.y)*r,n.y=a*r;const c=this.spin,l=n.x+c.z*t,u=n.z-c.x*t,d=Math.hypot(l,u);if(d>1e-6){const h=Math.min(o*(1+r)*a,d*.2857142857142857),f=-l/d*h,g=-u/d*h;n.x+=f,n.z+=g;const x=5/(2*t);c.x+=-g*x,c.z+=f*x}this.events.push({type:"bounce",onPitch:s,speed:a,pos:this.pos.clone()}),n.y<e.rollThreshold&&(n.y=0,this.pos.y=t,this.rolling=!0)}}const kn=new R,zl=new R,Bl=new R,Yo=new qe,kl=new qe,Hl=new R;function dn(i,t,e){return i<t?t:i>e?e:i}function Fs(i,t,e){const n=dn((e-i)/(t-i),0,1);return n*n*(3-2*n)}function Kr(i,t,e){const n=it.bat,s=(n.collisionWidth||n.bladeWidth)/2,r=-s,o=s,a=0,c=n.bladeLength,l=n.bladeBack,u=n.bladeFace;let d,h;if(!(i.x>r&&i.x<o&&i.y>a&&i.y<c&&i.z>l&&i.z<u))t.set(dn(i.x,r,o),dn(i.y,a,c),dn(i.z,l,u)),e.subVectors(i,t),d=e.length(),e.divideScalar(d||1);else{const L=[i.x-r,o-i.x,i.y-a,c-i.y,i.z-l,u-i.z];let A=0;for(let b=1;b<6;b++)L[b]<L[A]&&(A=b);t.copy(i),e.set(0,0,0),A===0&&(t.x=r,e.x=-1),A===1&&(t.x=o,e.x=1),A===2&&(t.y=a,e.y=-1),A===3&&(t.y=c,e.y=1),A===4&&(t.z=l,e.z=-1),A===5&&(t.z=u,e.z=1),d=-L[A]}h="blade";const g=(l+u)/2,x=dn(i.y,c,n.totalLength),m=i.x,p=i.y-x,S=i.z-g,y=Math.hypot(m,p,S),M=y-n.handleRadius;return M<d&&(d=M,h="handle",y>1e-7?e.set(m/y,p/y,S/y):e.set(0,0,1),t.set(0,x,g).addScaledVector(e,n.handleRadius)),Kr.region=h,d}Kr.region="blade";function yx(i,t,e){const n=it.ball.radius,s=t.prevPos,r=t.pos,o=it.bat.totalLength/2,a=Hl.set(0,o,0).applyQuaternion(i.prevQuaternion).add(i.prevPosition),c=a.x,l=a.y,u=a.z,d=Hl.set(0,o,0).applyQuaternion(i.quaternion).add(i.position),h=i.position.distanceTo(i.prevPosition)+2*o*i.quaternion.angleTo(i.prevQuaternion),f=s.distanceTo(r),g=o+.08+n+h+f,x=Math.hypot(s.x-c,s.y-l,s.z-u),m=r.distanceTo(d);if(Math.min(x,m)>g)return null;const p=it.physics,S=dn(Math.ceil((h+f)/p.microStepDistance),1,p.maxMicroSteps),y=new R;for(let M=1;M<=S;M++){const L=M/S;if(i.poseAt(L,y,Yo),kl.copy(Yo).invert(),kn.lerpVectors(s,r,L).sub(y).applyQuaternion(kl),Kr(kn,Bl,zl)<n){const b=Sx(i,t,Bl.clone(),zl.clone(),Kr.region,y,Yo,L,e);if(b)return b}}return null}function Sx(i,t,e,n,s,r,o,a,c){const l=it.bat,u=it.ball,d=u.radius,h=(l.collisionWidth||l.bladeWidth)/2,f=n.clone();if(s==="blade"&&e.z>=-.005&&e.y>.012){const ut=dn(e.x/h,-1,1),wt=Math.abs(ut);if(wt<.88)f.set(ut*.3,.05,1).normalize();else{const at=Fs(.85,1,wt);f.set(Math.sign(ut)*(.3+.58*at),.06,1-.55*at).normalize()}}const g=f.clone().applyQuaternion(o).normalize(),x=e.clone().applyQuaternion(o).add(r),m=i.pointVelocity(e,new R),p=m.length();if(p>3.5){const wt=1+((l.swingPowerMultiplier||1.25)-1)*Fs(3.5,11,p);if(m.multiplyScalar(wt),s==="blade"&&g.z<-.5&&(m.y>1.5||i.tilt.y>.35)){const at=.24*Fs(5,16,p)*Fs(.1,.9,i.tilt.y);g.y=dn(g.y+at,-.35,.62),g.normalize()}}const S=g.clone().multiplyScalar(-d),M=t.vel.clone().add(new R().crossVectors(t.spin,S)).sub(m),L=M.dot(g);if(L>=-.05)return null;const A=e.clone().sub(new R(0,l.comFromToe,0)),b=new R().crossVectors(A,f),_=1/(1/(l.mass+l.handCouplingMass)+b.x*b.x/l.inertiaTransverse+b.y*b.y/l.inertiaLong+b.z*b.z/l.inertiaTransverse);let v,T,N;if(s==="blade"){v=l.restitutionFloor+(1-l.restitutionFloor)*Math.exp(-Math.pow((e.y-l.sweetSpotFromToe)/l.sweetSpotWidth,2));const ut=dn(Math.abs(e.x)/h,0,1);T=1-l.edgeRestitutionLoss*Math.pow(ut,3),N=Math.max(.25,f.z)}else v=.45,T=.7,N=.3;const O=Math.max(0,m.dot(g)),V=l.softHandsMin+(1-l.softHandsMin)*Fs(0,l.softHandsSpeed,O),W=l.restitution*v*T*(.75+.25*N)*V,X=-(1+W)*L/(1/u.mass+1/_),tt=g.clone().multiplyScalar(X/u.mass),G=M.clone().addScaledVector(g,-L),ot=G.length(),pt=.4*u.mass*d*d;if(ot>1e-5){const ut=ot/(3.5/u.mass+1/_),wt=Math.min(l.friction*X,ut),at=G.multiplyScalar(-wt/ot);tt.addScaledVector(at,1/u.mass),t.spin.add(new R().crossVectors(S,at).divideScalar(pt))}const xt=t.vel.length();t.vel.add(tt);let mt=t.vel.length();mt>l.maxExitSpeed&&(t.vel.multiplyScalar(l.maxExitSpeed/mt),mt=l.maxExitSpeed),t.pos.copy(x).addScaledVector(g,d+.002).addScaledVector(t.vel,(1-a)*c),t.rolling=!1,typeof i.onBallImpact=="function"&&i.onBallImpact(O);const Ft=dn(v*T*N,0,1),j=s==="handle"||N<.72||Math.abs(e.x)>h*.86;return{type:"bat",region:s,quality:Ft,edge:j,restitution:W,effectiveMass:_,contactLocal:e,normal:g,batSpeed:m.length(),batNormalSpeed:O,incomingSpeed:xt,exitSpeed:mt,impulse:X,pos:x}}function Vl(i,t,e){const n=it.stumps,s=it.ball.radius,r=i.prevPos,o=i.pos,a=Math.min(r.z,o.z);if(Math.max(r.z,o.z)<e-.3||a>e+.3||Math.min(r.y,o.y)>n.height+.06)return null;const l=dn(Math.ceil(r.distanceTo(o)/.008),1,64);for(let u=1;u<=l;u++){kn.lerpVectors(r,o,u/l);for(let d=-1;d<=1;d++){const h=d*n.spacing,f=dn(kn.y,0,n.height+.015),g=kn.x-h,x=kn.y-f,m=kn.z-e,p=Math.hypot(g,x,m);if(p<s+n.radius){const S=new R(g,x,m).divideScalar(p||1),y=i.vel.dot(S),M=i.vel.length();return y<0&&i.vel.addScaledVector(S,-1.25*y),i.vel.multiplyScalar(.7),i.pos.copy(kn).addScaledVector(S,s+n.radius-p+.002),i.rolling=!1,{type:"stumps",stump:d,speed:M,normal:S,pos:kn.clone()}}}}return null}const Ue=0,Fe=-1.22;function Ce(i,t,e){return i<t?t:i>e?e:i}function vn(i,t,e){return i+(t-i)*e}function vi(i,t,e){let n=(t-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*e}function ve(i,t=.8){const e=it.field,n=Math.max(1,e.boundaryRadius-t),s=i.x,r=i.z-e.centerZ,o=Math.hypot(s,r);if(o>n){const a=n/o;i.x=s*a,i.z=e.centerZ+r*a}}class wx{constructor(){this.fielders=it.fielding.positions.map(t=>{const e=new R(t.x,0,t.z),n=e.clone(),s=Math.atan2(Ue-t.x,Fe-t.z);return{id:t.id,name:t.name,isKeeper:!!t.isKeeper,ring:t.ring,defaultHome:e,home:n,baseFacing:s,pos:n.clone(),vel:new R,target:n.clone(),facing:s,state:"idle",stridePhase:0,reactionTimer:0,actionTimer:0,jumpY:0,_jumpPeak:0,diveDir:0,catchStyle:"chest",stopStyle:"pickup",catchHeight:1.2,_role:"idle",_interceptPt:n.clone(),_ballDist:99,_ballY:0}}),this.byId={};for(const t of this.fielders)this.byId[t.id]=t;this.keeper=this.fielders.find(t=>t.isKeeper)||this.fielders[0],this.slip=this.byId.slip||null,this._backupPt=new R,this._groundPt=new R,this._scored=[],this.ballPos=new R(0,-10,0),this.ballVel=new R,this.ballActive=!1,this.flightSamples=[],this.groundSamples=[],this.groundEndSpot=new R,this.primaryGroundChaser=null,this.shotHistory=[],this.deliveryContext={pace:"medium",kmh:112,lineX:0},this.currentTactic="Balanced Straight-V",this.activeKeeperCatchZone=it.fielding.keeperCatchZoneRadius,this.resetMatch()}resetMatch(){this.shotHistory.length=0,this.deliveryContext={pace:"medium",kmh:112,lineX:0},this.currentTactic="Balanced Straight-V",this.activeKeeperCatchZone=it.fielding.keeperCatchZoneRadius;for(const t of this.fielders)t.home.copy(t.defaultHome),t.baseFacing=Math.atan2(Ue-t.home.x,Fe-t.home.z);this.resetDelivery()}resetDelivery(){for(const t of this.fielders)t.pos.copy(t.home),t.vel.set(0,0,0),t.target.copy(t.home),t.baseFacing=Math.atan2(Ue-t.home.x,Fe-t.home.z),t.facing=t.baseFacing,t.state="idle",t.stridePhase=0,t.reactionTimer=0,t.actionTimer=0,t.jumpY=0,t._jumpPeak=0,t.diveDir=0,t.catchStyle="chest",t.stopStyle="pickup",t.catchHeight=1.2,t._role="idle",t._interceptPt.copy(t.home),t._ballDist=99,t._ballY=0;this.hit=!1,this.groundedAfterHit=!1,this.hitTime=-1,this.firstContact=null,this.resolved=!1,this.heldBallPos=null,this.holder=null,this.landingSpot=null,this.flightSamples.length=0,this.groundSamples.length=0,this.groundEndSpot.set(0,0,0),this.designatedCatcher=null,this.primaryGroundChaser=null,this.primaryChasers=[],this.ballActive=!1,this.ballPos.set(0,-10,0),this.ballVel.set(0,0,0)}setDeliveryContext(t){const e=it.fielding;this.deliveryContext=t||{pace:"medium",kmh:112,lineX:0};const n=(t==null?void 0:t.pace)==="fast"?136:(t==null?void 0:t.pace)==="slow"?86:112,s=(t==null?void 0:t.kmh)??n,r=Ce((s-80)/62,0,1);for(const a of this.fielders)a.home.copy(a.defaultHome);const o=Ce((t==null?void 0:t.lineX)||0,-.35,.35)*.35;this.keeper.home.set(.2+.12*r+o,0,vn(e.keeperDepthSlow,e.keeperDepthFast,r)),this.slip&&this.slip.home.set(vn(e.slipWidthSlow,e.slipWidthFast,r),0,vn(e.slipDepthSlow,e.slipDepthFast,r)),this.activeKeeperCatchZone=e.keeperCatchZoneRadius+r*1.6,this._applyTacticalFieldShifts(r);for(const a of this.fielders)ve(a.home,1.4);this._enforceHomeSeparation();for(const a of this.fielders)a.baseFacing=Math.atan2(Ue-a.home.x,Fe-a.home.z),a.pos.copy(a.home),a.target.copy(a.home),a._interceptPt.copy(a.home),a.facing=a.baseFacing}_applyTacticalFieldShifts(t){const e=this.shotHistory.length,n=1+(t-.45)*.1;if(e>=2){let s=0,r=0,o=0,a=0,c=0;for(let d=0;d<e;d++){const h=this.shotHistory[d],f=1+d*.35;c+=f,h.lofted&&(a+=f),Math.abs(h.angleDeg)<=24?s+=f:h.angleDeg>24?r+=f:o+=f}const l=c>0?a/c:0,u=(d,h,f)=>{this.byId[d]&&this.byId[d].home.set(h,0,f)};r>s&&r>=o?(this.currentTactic="Off-Side Cover Trap",u("longOff",16.5,-52),u("longOn",-8.5,-54.5),u("deepCover",35.5,-32),u("cover",16,-16.5),u("point",20,-5.5),u("midOff",9.2,-23.5)):o>s&&o>r?(this.currentTactic="Leg-Side Mid-Wicket Trap",u("longOn",-16.5,-52),u("longOff",8.5,-54.5),u("deepMidWicket",-36,-28),u("midOn",-9.2,-23.5),u("midWicket",-17.5,-16),u("squareLeg",-18.5,-2)):(this.currentTactic="Straight-V Boundary Trap",u("longOff",11.2,-54.2),u("longOn",-11.2,-54.2),u("midOff",8.5,-24),u("midOn",-8.5,-24));for(const d of this.fielders){if(d.ring!=="infield")continue;const h=d.home.x-Ue,f=d.home.z-Fe;d.home.set(Ue+h*n,0,Fe+f*n)}if(l>=.45){const d=it.field.centerZ;for(const h of this.fielders)if(h.ring==="infield"){const f=h.home.x-Ue,g=h.home.z-Fe,x=Math.hypot(f,g)||1;h.home.x+=f/x*3.2,h.home.z+=g/x*3.2}else if(h.ring==="boundary"){const f=h.home.x,g=h.home.z-d,x=Math.hypot(f,g)||1,m=52.5;h.home.set(f/x*m,0,d+g/x*m)}}else if(l<=.15&&e>=3){for(const d of this.fielders)if(d.ring==="infield"){const h=d.home.x-Ue,f=d.home.z-Fe,g=Math.hypot(h,f)||1;d.home.x-=h/g*1.8,d.home.z-=f/g*1.8}}}else{this.currentTactic="Balanced Straight-V";for(const s of this.fielders){if(s.ring!=="infield")continue;const r=s.home.x-Ue,o=s.home.z-Fe;s.home.set(Ue+r*n,0,Fe+o*n)}}}_enforceHomeSeparation(){const t=it.fielding.minSeparation||2.6,e=this.fielders;for(let n=0;n<e.length;n++){const s=e[n];for(let r=n+1;r<e.length;r++){const o=e[r];let a=o.home.x-s.home.x,c=o.home.z-s.home.z,l=Math.hypot(a,c);if(l>=t)continue;l<1e-4&&(a=1,c=0,l=1);const u=t-l,d=a/l,h=c/l,f=s.isKeeper?0:o.isKeeper?1:.5,g=1-f;s.home.x-=d*u*f,s.home.z-=h*u*f,o.home.x+=d*u*g,o.home.z+=h*u*g,ve(s.home,1.4),ve(o.home,1.4)}}}onBatHit(t,e){if(this.hit)return;const n=it.fielding;if(this.hit=!0,this.hitTime=t.time,this.firstContact=t,!t.edge&&t.exitSpeed>8.5){const s=Math.atan2(e.vel.x,-e.vel.z)*180/Math.PI,r=e.vel.y>6.2&&t.exitSpeed>17;this.shotHistory.push({angleDeg:s,exitSpeed:t.exitSpeed,lofted:r}),this.shotHistory.length>8&&this.shotHistory.shift()}(e.vel.y<-.8||e.pos.y<.14&&e.vel.y<=.4)&&(this.groundedAfterHit=!0),this.landingSpot=this._predictLanding(e);for(const s of this.fielders)t.edge?s.reactionTimer=s.isKeeper||s.id==="slip"?.07:.15:s.ring==="infield"&&t.exitSpeed>30?s.reactionTimer=n.reactionInfieldFast:s.reactionTimer=n.reactionBase}onBounce(t,e){this.hit&&(t.time-this.hitTime>.045||e.vel.y<2.2)&&(this.groundedAfterHit=!0)}_predictLanding(t){const e=it.ball,n=it.physics.gravity,s=e.radius,r=1/60;this.flightSamples.length=0;let o=t.pos.x,a=t.pos.y,c=t.pos.z,l=t.vel.x,u=t.vel.y,d=t.vel.z,h=t.spin.x,f=t.spin.y,g=t.spin.z,x=a,m=0;const p=Math.exp(-e.spinDecay*r);if(a<=s&&u<=0)return{x:o,z:c,tFlight:0,maxH:x,vx:l,vz:d};for(let S=0;S<360;S++){const y=Math.hypot(l,u,d);let M=-t.dragK*y*l,L=-n-t.dragK*y*u,A=-t.dragK*y*d,b=(f*d-g*u)*e.magnusCoefficient,P=(g*l-h*d)*e.magnusCoefficient,_=(h*u-f*l)*e.magnusCoefficient;const v=Math.hypot(b,P,_);if(v>e.maxMagnusAccel){const T=e.maxMagnusAccel/v;b*=T,P*=T,_*=T}if(M+=b,L+=P,A+=_,l+=M*r,u+=L*r,d+=A*r,o+=l*r,a+=u*r,c+=d*r,h*=p,f*=p,g*=p,m+=r,a>x&&(x=a),S%3===2&&a>s&&this.flightSamples.push({x:o,y:a,z:c,t:m}),a<=s)return{x:o,z:c,tFlight:m,maxH:x,vx:l,vz:d}}return{x:o,z:c,tFlight:m,maxH:x,vx:l,vz:d}}step(t,e,n,s){var d;const r=it.fielding;if(e){this.ballPos.copy(e.pos),this.ballVel.copy(e.vel),this.ballActive=!!e.active;for(const h of this.fielders)h._ballDist=Math.hypot(e.pos.x-h.pos.x,e.pos.z-h.pos.z),h._ballY=e.pos.y}if(this.resolved){const h=this.holder;if(h){h.actionTimer+=t;const g=h.state==="diving"?5:8.5;if(h.vel.multiplyScalar(Math.exp(-g*t)),h.pos.addScaledVector(h.vel,t),ve(h.pos,.7),h.state==="catching"&&h._jumpPeak>0)if(h.actionTimer<.32){const x=h.actionTimer/.32;h.jumpY=h._jumpPeak*Math.cos(x*Math.PI*.5)}else h.jumpY=0;this.heldBallPos&&this._updateHeldBallPosition(h)}const f=h?h.pos:this.ballPos;for(const g of this.fielders){if(g===h)continue;g.vel.multiplyScalar(Math.exp(-6.5*t)),g.pos.addScaledVector(g.vel,t),ve(g.pos,.75);const x=g.vel.length();x>.2?g.stridePhase+=x*t*2.8:(g.state=g.isKeeper?"keeper_guard":"idle",g.facing=vi(g.facing,Math.atan2(f.x-g.pos.x,f.z-g.pos.z),Ce(10*t,0,1)))}return}if(!e.active)return;if(!this.hit){for(const h of this.fielders)if(h.ring==="infield"){if(e.pos.z<-6.5){const f=Ue-h.home.x,g=Fe-h.home.z,x=Math.hypot(f,g)||1;h.target.set(h.home.x+f/x*.55,0,h.home.z+g/x*.55),this._steerFielder(h,t,r.jogSpeed*.45,!1)}else h.vel.multiplyScalar(Math.exp(-12*t));h.state=h.vel.lengthSq()>.04?"walk_in":"idle",h.state==="idle"&&(h.facing=h.baseFacing)}if(e.pos.z>-2.5){const h=this.keeper,f=Ce(e.pos.x+e.vel.x*.12,-2.2,2.2);h.target.set(f,0,h.home.z),this._steerFielder(h,t,r.keeperSpeed,!0);const g=Math.hypot(e.pos.x-h.pos.x,e.pos.z-h.pos.z);e.pos.z>=h.pos.z-.35&&g<1.35&&e.pos.y<1.95&&this._completeStop(h,e,s,!1,"keeper_take")}return}const o=n-this.hitTime;e.rolling&&o>.08&&(this.groundedAfterHit=!0);const a=it.field,c=Math.hypot(e.pos.x,e.pos.z-a.centerZ);if(!(c<a.boundaryRadius-.15)){for(const h of this.fielders)h.vel.multiplyScalar(Math.exp(-8*t)),h.vel.lengthSq()<.04&&(h.state="idle");return}(this.groundedAfterHit||e.rolling||!this.landingSpot)&&this._updateGroundPath(e),this._assignChasers(e,o);for(const h of this.fielders){if(h._role==="idle"||o<h.reactionTimer){h.vel.multiplyScalar(Math.exp(-8*t)),h.vel.lengthSq()<.04&&(h.state=h.isKeeper?"keeper_guard":"idle",h.facing=vi(h.facing,Math.atan2(e.pos.x-h.pos.x,e.pos.z-h.pos.z),Ce(14*t,0,1)));continue}if(this._computeFielderTarget(h,e,o),h._role==="keeper_guard"){const x=Math.hypot(e.pos.x-h.home.x,e.pos.z-h.home.z),m=e.pos.z<-2||x>10?r.jogSpeed*1.1:r.jogSpeed*.85;this._steerFielder(h,t,m,!1),h.vel.length()>.25?h.state="backup":(h.state="keeper_guard",h.facing=vi(h.facing,Math.atan2(e.pos.x-h.pos.x,e.pos.z-h.pos.z),Ce(16*t,0,1)));continue}let f=r.jogSpeed;h._role==="catcher"||h._role==="chase"?f=h.isKeeper?r.keeperSpeed:r.maxSpeed:h._role==="relay"?f=r.jogSpeed*.85:h._role==="watch_shift"&&(f=r.jogSpeed*.55),this._steerFielder(h,t,f,!1);const g=h.vel.length();h._role==="catcher"?Math.hypot(h.target.x-h.pos.x,h.target.z-h.pos.z)<.85&&g<1.4?(h.state="set_catch",h.facing=vi(h.facing,Math.atan2(e.pos.x-h.pos.x,e.pos.z-h.pos.z),Ce(18*t,0,1))):h.state="chasing":h._role==="chase"?(h.state=g>.2?"chasing":"idle",h.state==="idle"&&(h.facing=vi(h.facing,Math.atan2(e.pos.x-h.pos.x,e.pos.z-h.pos.z),Ce(14*t,0,1)))):(h.state=g>.2?"backup":"idle",h.state==="idle"&&(h.facing=vi(h.facing,Math.atan2(e.pos.x-h.pos.x,e.pos.z-h.pos.z),Ce(14*t,0,1))))}if(this._enforceSeparation(),!this.groundedAfterHit&&!e.rolling&&o>=r.minCatchAirTime&&c<a.boundaryRadius-.4&&e.pos.y>=r.minCatchHeight&&e.pos.y<=r.maxCatchHeight){const h=this.firstContact&&!this.firstContact.edge&&this.firstContact.quality>.78&&this.firstContact.exitSpeed>31&&o<.48;if(!(h&&e.pos.y>=1.85)){const f=this._orderedCatchCandidates(e,o);for(const g of f){const x=e.pos.x-g.pos.x,m=e.pos.z-g.pos.z,p=Math.hypot(x,m);let S;if((g.isKeeper||g.id==="slip")&&((d=this.firstContact)!=null&&d.edge)?S=r.keeperCatchRadius:h?S=r.fastShotCatchRadius:o>.5?S=r.diveCatchRadius:S=r.catchRadius,p<=S){const y=x*(e.vel.x-g.vel.x)+m*(e.vel.z-g.vel.z),M=e.pos.y+e.vel.y*.035,L=Math.hypot(e.pos.x+e.vel.x*.035,e.pos.z+e.vel.z*.035-a.centerZ),A=M>=r.minCatchHeight+.06&&M<=r.maxCatchHeight-.05&&L<a.boundaryRadius-.45;if(y<-.15&&p>.28&&A)continue;this._completeCatch(g,e,p,s);return}}}}if((this.groundedAfterHit||e.rolling||e.pos.y<r.minCatchHeight)&&o>=.14&&c<a.boundaryRadius-.25&&e.pos.y<=1.25){const h=e.vel.length(),f=c>a.boundaryRadius-9.5&&h>3.2,g=this._orderedStopCandidates(e,o);for(const x of g){const m=e.pos.x-x.pos.x,p=e.pos.z-x.pos.z,S=Math.hypot(m,p);let y=r.stopRadius;if(f?y=r.slideStopRadius:h>30&&o<.42?y=.75:h<20&&o>.45&&(y=r.slideStopRadius),S<=y){if(m*(e.vel.x-x.vel.x)+p*(e.vel.z-x.vel.z)<-.15&&S>.35&&h>1.5&&Math.hypot(e.pos.x+e.vel.x*.035,e.pos.z+e.vel.z*.035-a.centerZ)<a.boundaryRadius-.35)continue;this._completeStop(x,e,s,S>.95,null,S);return}}}}_updateHeldBallPosition(t){const e=t.actionTimer;let n=1.15,s=.24,r=0;if(t.state==="diving")if(e<.6)n=.36,s=.35,r=t.diveDir*.18;else{const c=Ce((e-.6)/.25,0,1);n=.64+1.05*c,s=.24*(1-c)+.06,r=-.2*c}else if(t.state==="catching")if(e<.34)n=t.catchStyle==="overhead"?1.9+t.jumpY:t.catchStyle==="low"?.56:1.24,s=t.catchStyle==="low"?.34:.28;else{const c=Ce((e-.34)/.2,0,1);n=1.24+(2.06-1.24)*c,s=.26*(1-c)+.08*c,r=-.2*c}else if(t.state==="fielded")if(t.stopStyle==="keeper_take")n=Ce(t.catchHeight,.45,1.35),s=.32;else{const c=t.stopStyle==="slide"?.36:.26;if(e<c)n=t.stopStyle==="slide"?.28:.26,s=.34,r=t.stopStyle==="slide"?-.16:0;else if(e<c+.24){const l=Ce((e-c)/.24,0,1);n=vn(.28,1.42,l),s=vn(.32,-.14,l),r=vn(0,-.22,l)}else{const l=Ce((e-(c+.24))/.22,0,1);n=vn(1.42,1.18,l),s=vn(-.14,.28,l),r=vn(-.22,-.14,l)}}const o=Math.sin(t.facing),a=Math.cos(t.facing);this.heldBallPos.set(t.pos.x+o*s+a*r,n,t.pos.z+a*s-o*r)}_orderedCatchCandidates(t,e){const n=[];this.designatedCatcher&&e>=this.designatedCatcher.reactionTimer*.75&&!this._keeperIneligibleAtBall(this.designatedCatcher,t)&&n.push(this.designatedCatcher);const s=[];for(const r of this.fielders){if(r===this.designatedCatcher||e<r.reactionTimer*.75||this._keeperIneligibleAtBall(r,t))continue;const o=Math.hypot(t.pos.x-r.pos.x,t.pos.z-r.pos.z);s.push({f:r,hd:o})}s.sort((r,o)=>r.hd-o.hd);for(const r of s)n.push(r.f);return n}_orderedStopCandidates(t,e){const n=[];for(const s of this.fielders){if(e<s.reactionTimer*.85)continue;const r=Math.hypot(t.pos.x-s.pos.x,t.pos.z-s.pos.z);n.push({f:s,hd:r})}return n.sort((s,r)=>s.hd-r.hd),n.map(s=>s.f)}_keeperIneligibleAtBall(t,e){return t.isKeeper?Math.hypot(e.pos.x-t.home.x,e.pos.z-t.home.z)>this.activeKeeperCatchZone||e.pos.z<-1.8:!1}_evaluateAerialIntercept(t,e){const n=it.fielding,s=Math.max(0,t.reactionTimer-e),r=t.isKeeper?n.keeperSpeed:n.maxSpeed,o=this.landingSpot;let a=null,c=null,l=null;const u=(d,h,f,g,x)=>{const m=Math.hypot(d-t.pos.x,f-t.pos.z),p=e+s+m/r,S=p-g,M=Math.max(0,g-e-s)*r+(x?n.diveCatchRadius:n.catchRadius),L={ix:d,iy:h,iz:f,it:g,dist:m,timeToReach:p,deficit:S,reachable:m<=M};(x||L.reachable||S<=.16)&&(!l||S<l.deficit)&&(l=L),S<=0&&(a||(a=L),!c&&h<=1.85&&(c=L))};for(let d=0;d<this.flightSamples.length;d++){const h=this.flightSamples[d];h.t>=e+.08&&h.y>=.2&&h.y<=2.18&&u(h.x,h.y,h.z,h.t,!1)}return u(o.x,.2,o.z,o.tFlight,!0),c||a||l}_updateGroundPath(t){this.groundSamples.length=0;const e=it.ball,n=it.physics.gravity,s=it.ground,r=e.radius,o=1/30,a=it.field.boundaryRadius-.75,c=it.field.centerZ,l=Math.exp(-e.spinDecay*o);let u=t.pos.x,d=t.pos.y,h=t.pos.z,f=t.vel.x,g=t.vel.y,x=t.vel.z,m=t.spin.x,p=t.spin.y,S=t.spin.z,y=!!t.rolling,M=0;this.groundEndSpot.set(u,0,h);for(let L=0;L<168;L++){if(y){const A=Math.hypot(f,x);if(A<.15)break;const b=s.rollingResistance*n*($r(u,h)?.6:1)+t.dragK*A*A,_=Math.max(0,A-b*o)/A;f*=_,x*=_,g=0,u+=f*o,h+=x*o,d=r}else{const A=Math.hypot(f,g,x);let b=-t.dragK*A*f,P=-n-t.dragK*A*g,_=-t.dragK*A*x,v=(p*x-S*g)*e.magnusCoefficient,T=(S*f-m*x)*e.magnusCoefficient,N=(m*g-p*f)*e.magnusCoefficient;const O=Math.hypot(v,T,N);if(O>e.maxMagnusAccel){const V=e.maxMagnusAccel/O;v*=V,T*=V,N*=V}if(f+=(b+v)*o,g+=(P+T)*o,x+=(_+N)*o,u+=f*o,d+=g*o,h+=x*o,m*=l,p*=l,S*=l,d<=r&&g<0){const V=$r(u,h),W=V?s.pitchRestitution:s.outfieldRestitution,X=V?s.pitchFriction:s.outfieldFriction,tt=-g;d=r+(r-d)*W,g=tt*W;const G=f+S*r,ot=x-m*r,pt=Math.hypot(G,ot);if(pt>1e-6){const xt=Math.min(X*(1+W)*tt,pt*.2857142857142857),mt=-G/pt*xt,Ft=-ot/pt*xt;f+=mt,x+=Ft;const j=5/(2*r);m+=-Ft*j,S+=mt*j}g<s.rollThreshold&&(g=0,d=r,y=!0)}}if(M+=o,this.groundEndSpot.set(u,0,h),Math.hypot(u,h-c)>=a){ve(this.groundEndSpot,.85),this.groundSamples.push({x:this.groundEndSpot.x,z:this.groundEndSpot.z,t:M});break}L%2===1&&this.groundSamples.push({x:u,z:h,t:M})}ve(this.groundEndSpot,.85)}_predictGroundIntercept(t,e,n,s){const r=it.fielding,o=Math.hypot(e.vel.x,e.vel.z),a=Math.max(0,t.reactionTimer-n),c=t.isKeeper?r.keeperSpeed:r.maxSpeed;if(o<1||this.groundSamples.length===0)return s.set(e.pos.x,0,e.pos.z),ve(s,.8),a+Math.hypot(s.x-t.pos.x,s.z-t.pos.z)/c;const l=r.stopRadius*.65;for(let u=0;u<this.groundSamples.length;u++){const d=this.groundSamples[u],h=Math.max(0,d.t-a)*c+l;if(Math.hypot(d.x-t.pos.x,d.z-t.pos.z)<=h)return s.set(d.x,0,d.z),ve(s,.8),d.t}return s.copy(this.groundEndSpot),ve(s,.85),a+Math.hypot(s.x-t.pos.x,s.z-t.pos.z)/c}_assignChasers(t,e){var a;const n=it.fielding;this.primaryChasers.length=0;for(const c of this.fielders)c._role="idle";const s=!this.groundedAfterHit&&!t.rolling&&this.landingSpot;let r=null,o=null;if(s){let c=1/0;const l=[];let u=null;for(const g of this.fielders){const x=this._evaluateAerialIntercept(g,e);if(!x)continue;const m={f:g,...x};g.isKeeper?u=m:(l.push(m),x.timeToReach<c&&(c=x.timeToReach))}const d=[];for(const g of l){const x=g.f===this.designatedCatcher?-.18:0;g.score=g.deficit+x,d.push(g)}if(u&&Math.hypot(u.ix-this.keeper.home.x,u.iz-this.keeper.home.z)<=this.activeKeeperCatchZone&&u.iz>=-1.8&&u.deficit<=.18&&u.timeToReach<=c+.02){const m=u.f===this.designatedCatcher?-.18:0;u.score=u.deficit+m,d.push(u)}d.sort((g,x)=>g.score-x.score);const h=d[0],f=h&&h.f===this.designatedCatcher?.36:.28;if(h&&h.deficit<=f){this.designatedCatcher=h.f,h.f._role="catcher",h.f._interceptPt.set(h.ix,0,h.iz),ve(h.f._interceptPt,.9),this.primaryChasers.push(h.f),r=h.f,o=h.f._interceptPt;const g=Math.hypot(this.landingSpot.vx,this.landingSpot.vz);let x=g>.5?this.landingSpot.vx/g:h.ix-Ue,m=g>.5?this.landingSpot.vz/g:h.iz-Fe;const p=Math.hypot(x,m)||1;x/=p,m/=p;let S=null,y=1/0;for(const M of l){if(M.f===h.f)continue;const L=Math.hypot(M.f.pos.x-h.ix,M.f.pos.z-h.iz);L<24&&L<y&&(y=L,S=M.f)}S&&(this._placeBackupPoint(h.f._interceptPt,x,m,8,6.8,S._interceptPt),S._role="backup")}else{this.designatedCatcher=null;const g=this.landingSpot.x+(this.landingSpot.vx||t.vel.x)*.55,x=this.landingSpot.z+(this.landingSpot.vz||t.vel.z)*.55;l.sort((p,S)=>{const y=Math.hypot(p.f.pos.x-g,p.f.pos.z-x),M=Math.hypot(S.f.pos.x-g,S.f.pos.z-x);return y-M});const m=(a=l[0])==null?void 0:a.f;if(m){this.primaryGroundChaser=m,m._role="chase",m._interceptPt.set(g,0,x),ve(m._interceptPt,.9),this.primaryChasers.push(m),r=m,o=m._interceptPt;const p=Math.hypot(this.landingSpot.vx,this.landingSpot.vz),S=p>.5?this.landingSpot.vx/p:0,y=p>.5?this.landingSpot.vz/p:-1;for(let M=1;M<l.length;M++){const L=l[M].f;if(Math.hypot(L.pos.x-this.landingSpot.x,L.pos.z-this.landingSpot.z)<26){this._placeBackupPoint(m._interceptPt,S,y,8,6.8,L._interceptPt),L._role="backup";break}}}}}else{this.designatedCatcher=null;const c=Math.hypot(t.vel.x,t.vel.z),l=c>.5?t.vel.x/c:0,u=c>.5?t.vel.z/c:-1,d=Math.hypot(t.pos.x-Ue,t.pos.z-Fe);let h=1/0;const f=[];let g=null;for(const p of this.fielders){const S=this._predictGroundIntercept(p,t,e,this._groundPt),y=this._groundPt.x,M=this._groundPt.z,L=Math.hypot(y-p.pos.x,M-p.pos.z),A=Math.hypot(p.pos.x-Ue,p.pos.z-Fe),b=t.pos.x-p.pos.x,P=t.pos.z-p.pos.z,_=Math.hypot(b,P)||1,v=(b*t.vel.x+P*t.vel.z)/_,T=p.ring==="infield"&&d>A+2.2&&v>n.maxSpeed*.92&&_>2.4;let N=S+L*.002;T?N+=2.2:p===this.primaryGroundChaser&&(N-=.16);const O={f:p,interceptTime:S,timeScore:N,ptX:y,ptZ:M};p.isKeeper?g=O:(f.push(O),S<h&&(h=S))}const x=f.slice();if(g){const p=Math.hypot(t.pos.x-this.keeper.home.x,t.pos.z-this.keeper.home.z);c<4.2&&p<=n.keeperGroundRadius&&t.pos.z>=-.8&&g.interceptTime<=h-.02&&x.push(g)}x.sort((p,S)=>p.timeScore-S.timeScore);const m=x[0];if(m){const p=m.f;this.primaryGroundChaser=p,p._role="chase",p._interceptPt.set(m.ptX,0,m.ptZ),this.primaryChasers.push(p),r=p,o=p._interceptPt;const S=Math.hypot(p.pos.x-t.pos.x,p.pos.z-t.pos.z);if(c>4.5&&S>3.5){this._backupPt.copy(p._interceptPt);let y=null,M=1/0;for(const L of f){if(L.f===p)continue;const A=Math.hypot(L.f.pos.x-this._backupPt.x,L.f.pos.z-this._backupPt.z);A<28&&A<M&&(M=A,y=L.f)}y&&(this._placeBackupPoint(this._backupPt,l,u,7.5,6.5,y._interceptPt),y._role="backup")}}}if(this.keeper&&this.keeper._role!=="catcher"&&this.keeper._role!=="chase"&&(this.keeper._role="keeper_guard"),r&&o&&Math.hypot(o.x-Ue,o.z-Fe)>=15){const l=vn(Ue,o.x,.55),u=vn(Fe,o.z,.55);let d=null,h=1/0;for(const f of this.fielders){if(f._role!=="idle"||f.isKeeper||f.ring!=="infield")continue;const g=Math.hypot(f.pos.x-o.x,f.pos.z-o.z);if(g>34||g<8)continue;const x=Math.hypot(f.pos.x-l,f.pos.z-u);x<h&&(h=x,d=f)}d&&(d._interceptPt.set(l,0,u),ve(d._interceptPt,1),Math.hypot(d._interceptPt.x-o.x,d._interceptPt.z-o.z)>=8&&(d._role="relay"))}for(const c of this.fielders){if(c._role!=="idle"||c.isKeeper)continue;const l=t.pos.x-c.home.x,u=t.pos.z-c.home.z,d=Math.hypot(l,u)||1,h=Math.min(1.4,d*.15);c._interceptPt.set(c.home.x+l/d*h,0,c.home.z+u/d*h),ve(c._interceptPt,1),c._role="watch_shift"}}_placeBackupPoint(t,e,n,s,r,o){o.set(t.x+e*s,0,t.z+n*s),ve(o,1);const a=o.x-t.x,c=o.z-t.z;if(Math.hypot(a,c)<r){const u=-n,d=e;o.set(t.x+u*r,0,t.z+d*r),ve(o,1),Math.hypot(o.x-t.x,o.z-t.z)<r&&(o.set(t.x-e*r,0,t.z-n*r),ve(o,1))}}_computeFielderTarget(t,e,n){if(t._role==="keeper_guard"){const s=Math.hypot(e.pos.x-t.home.x,e.pos.z-t.home.z);e.pos.z<-2||s>10?t.target.set(Ce(e.pos.x*.08,-.8,.8),0,.65):t.target.set(t.home.x+Ce((e.pos.x-t.home.x)*.18,-1,1),0,t.home.z+Ce((e.pos.z-t.home.z)*.12,-.6,.6));return}if(t._role==="catcher"||t._role==="backup"||t._role==="relay"||t._role==="watch_shift"){t.target.copy(t._interceptPt),ve(t.target,.9);return}if(!this.groundedAfterHit&&this.landingSpot){t.target.copy(t._interceptPt),ve(t.target,.9);return}this._predictGroundIntercept(t,e,n,t.target),ve(t.target,.8)}_steerFielder(t,e,n,s=!1){const r=it.fielding,o=t.target.x-t.pos.x,a=t.target.z-t.pos.z,c=Math.hypot(o,a);let l=0,u=0;if(c>.1){const m=Math.min(n,c*8);l=o/c*m,u=a/c*m}const d=l-t.vel.x,h=u-t.vel.z,f=Math.hypot(d,h),g=r.accel*e;f>g&&f>1e-6?(t.vel.x+=d/f*g,t.vel.z+=h/f*g):(t.vel.x=l,t.vel.z=u);const x=Math.hypot(t.vel.x,t.vel.z);if(x>n&&(t.vel.x*=n/x,t.vel.z*=n/x),t.pos.x+=t.vel.x*e,t.pos.z+=t.vel.z*e,t.pos.y=0,x>.2)if(t.stridePhase+=x*e*2.8,s)t.facing=t.baseFacing;else{const m=Math.atan2(t.vel.x,t.vel.z);t.facing=vi(t.facing,m,Ce(16*e,0,1))}else s&&(t.facing=t.baseFacing)}_enforceSeparation(){const t=it.fielding.minSeparation||2.6,e=this.fielders,n=s=>s._role==="catcher"?4:s._role==="chase"||s.isKeeper?3:s._role==="backup"?2:s._role==="relay"?1:0;for(let s=0;s<e.length;s++){const r=e[s];for(let o=s+1;o<e.length;o++){const a=e[o];let c=a.pos.x-r.pos.x,l=a.pos.z-r.pos.z,u=Math.hypot(c,l);if(u>=t)continue;u<1e-4&&(c=1,l=0,u=1);const d=c/u,h=l/u,f=t-u,g=n(r),x=n(a);let m=.5,p=.5;g>x?(m=0,p=1):x>g&&(m=1,p=0),r.pos.x-=d*f*m,r.pos.z-=h*f*m,a.pos.x+=d*f*p,a.pos.z+=h*f*p,ve(r.pos,.8),ve(a.pos,.8)}}}_completeCatch(t,e,n,s){this.resolved=!0,this.holder=t,t.actionTimer=0;const r=n>.92||n>.68&&e.pos.y<.45;if(t.state=r?"diving":"catching",t.catchHeight=e.pos.y,r?t.catchStyle="dive":e.pos.y>=1.62?t.catchStyle="overhead":e.pos.y<.82?t.catchStyle="low":t.catchStyle="chest",Math.hypot(e.vel.x,e.vel.z)>1?t.facing=Math.atan2(-e.vel.x,-e.vel.z):t.facing=Math.atan2(e.pos.x-t.pos.x,e.pos.z-t.pos.z),Number.isFinite(t.facing)||(t.facing=t.baseFacing),r){const a=e.pos.x-t.pos.x,c=e.pos.z-t.pos.z,l=a*Math.cos(t.facing)-c*Math.sin(t.facing);t.diveDir=l>=0?1:-1;const u=Math.hypot(a,c)||1;t.vel.set(a/u*3.2,0,c/u*3.2),t._jumpPeak=0,t.jumpY=0}else{t.diveDir=0,n>.12&&(t.pos.x+=(e.pos.x-t.pos.x)*.85,t.pos.z+=(e.pos.z-t.pos.z)*.85),t.vel.multiplyScalar(.15);const a=t.catchStyle==="overhead"?Math.max(0,Math.min(.42,e.pos.y-1.72)):0;t._jumpPeak=a,t.jumpY=a}e.vel.set(0,0,0),e.active=!1,e.rolling=!1,this.heldBallPos=new R(t.pos.x,Math.max(.45,Math.min(2.15,e.pos.y)),t.pos.z),this._updateHeldBallPosition(t),s.push({type:"catch",fielder:t.name,fielderId:t.id,isKeeper:t.isKeeper,diving:r,catchStyle:t.catchStyle,pos:this.heldBallPos.clone()})}_completeStop(t,e,n,s,r=null,o=0){this.resolved=!0,this.holder=t,t.actionTimer=0,t.state="fielded",t._jumpPeak=0,t.jumpY=0;const a=it.field,c=Math.hypot(e.pos.x,e.pos.z-a.centerZ),l=e.vel.length(),u=c>a.boundaryRadius-6,d=r?!1:s&&l>4.5||u&&l>3.2&&o>.65;if(t.stopStyle=r||(d?"slide":"pickup"),t.catchHeight=e.pos.y,r==="keeper_take")t.facing=t.baseFacing,t.diveDir=0,t.pos.set(Ce(e.pos.x,-2.4,2.4),0,t.home.z);else if(d){const f=e.pos.x-t.pos.x,g=e.pos.z-t.pos.z;t.facing=Math.atan2(Ue-e.pos.x,Fe-e.pos.z);const x=f*Math.cos(t.facing)-g*Math.sin(t.facing);t.diveDir=x>=0?1:-1,t.pos.set(e.pos.x,0,e.pos.z),ve(t.pos,.85),t.vel.multiplyScalar(.35),e.pos.set(t.pos.x,it.ball.radius,t.pos.z)}else t.diveDir=0,t.pos.set(e.pos.x,0,e.pos.z),ve(t.pos,.85),t.facing=Math.atan2(Ue-e.pos.x,Fe-e.pos.z),t.vel.set(0,0,0),e.pos.set(t.pos.x,it.ball.radius,t.pos.z);e.vel.set(0,0,0),e.rolling=!0,e.pos.y=it.ball.radius,this.heldBallPos=new R(t.pos.x,.85,t.pos.z),this._updateHeldBallPosition(t);const h=Math.hypot(t.pos.x-t.home.x,t.pos.z-t.home.z);n.push({type:"fielded",fielder:t.name,fielderId:t.id,isKeeper:t.isKeeper,sliding:d,stopStyle:t.stopStyle,chaseDist:h,pos:e.pos.clone()})}}class bx{constructor(){this.bat=new vx,this.ball=new Zh,this.fielding=new wx,this.events=[],this.stumpsBroken=!1,this.nonStrikerBroken=!1,this.time=0,this.lastBatContactTime=-1,this._target=new ft}resetDelivery(){this.ball.active=!1,this.ball.rolling=!1,this.fielding.resetDelivery(),this.stumpsBroken=!1,this.nonStrikerBroken=!1,this.lastBatContactTime=-1,this.events.length=0}step(t,e){this.time+=t,this.bat.step(t,e);const n=this.ball;if(n.step(t),n.active){const s=yx(this.bat,n,t);if(s&&(s.repeat=this.lastBatContactTime>=0&&this.time-this.lastBatContactTime<.12,s.time=this.time,this.lastBatContactTime=this.time,this.fielding.onBatHit(s,n),this.events.push(s)),!this.stumpsBroken){const r=Vl(n,t,it.stumps.z);r&&(this.stumpsBroken=!0,r.time=this.time,this.events.push(r))}if(!this.nonStrikerBroken){const r=Vl(n,t,-it.stumps.z-20.12);r&&(this.nonStrikerBroken=!0,r.isNonStriker=!0,r.time=this.time,this.events.push(r))}}if(n.events.length){for(const s of n.events)s.time=this.time,s.type==="bounce"&&this.fielding.onBounce(s,n),this.events.push(s);n.events.length=0}this.fielding.step(t,n,this.time,this.events)}drainEvents(){const t=this.events.slice();return this.events.length=0,t}}const ze=(i,t)=>i+Math.random()*(t-i),Gl=i=>i[Math.floor(Math.random()*i.length)],Wl=[{name:"Half-volley outside off",line:"outsideOff",length:"full",cat:"easy"},{name:"Slot ball on middle",line:"middle",length:"full",cat:"easy"},{name:"Overpitched on the pads",line:"leg",length:"full",cat:"easy"},{name:"Full and wide outside off",line:"outsideOff",length:"full",cat:"easy"},{name:"Half-volley on off stump",line:"off",length:"full",cat:"easy"},{name:"Good length, off stump",line:"off",length:"good",cat:"stock"},{name:"Good length, middle",line:"middle",length:"good",cat:"stock"},{name:"Good length outside off",line:"outsideOff",length:"good",cat:"stock"},{name:"Full on off stump",line:"off",length:"full",cat:"stock"},{name:"Good length on leg stump",line:"leg",length:"good",cat:"stock"},{name:"Yorker on middle",line:"middle",length:"yorker",cat:"hard"},{name:"Yorker on off",line:"off",length:"yorker",cat:"hard"},{name:"Full attacking length",line:"middle",length:"full",cat:"hard"},{name:"Good length at off stump",line:"off",length:"good",cat:"hard"},{name:"Yorker on leg stump",line:"leg",length:"yorker",cat:"hard"}],Xl=[{id:"fastMediumR",name:"Right-arm Fast-Medium",hand:"right",style:"fastMedium",pace:"medium",speedRange:[125,140],runSpeed:6.2,runDistance:11.5},{id:"fastR",name:"Right-arm Fast",hand:"right",style:"fast",pace:"fast",speedRange:[145,160],runSpeed:7.2,runDistance:14},{id:"fastL",name:"Left-arm Fast",hand:"left",style:"fast",pace:"fast",speedRange:[145,160],runSpeed:7.2,runDistance:14},{id:"inSwingR",name:"Right-arm Fast (Inswing)",hand:"right",style:"inSwing",pace:"fast",speedRange:[140,150],runSpeed:6.8,runDistance:13},{id:"outSwingR",name:"Right-arm Fast (Outswing)",hand:"right",style:"outSwing",pace:"fast",speedRange:[140,150],runSpeed:6.8,runDistance:13},{id:"offSpinR",name:"Right-arm Offbreak",hand:"right",style:"offSpin",pace:"slow",speedRange:[78,95],runSpeed:3.6,runDistance:5},{id:"offSpinL",name:"Slow Left-arm Orthodox",hand:"left",style:"offSpin",pace:"slow",speedRange:[78,95],runSpeed:3.6,runDistance:5},{id:"legSpinR",name:"Right-arm Legbreak",hand:"right",style:"legSpin",pace:"slow",speedRange:[78,95],runSpeed:3.6,runDistance:5}];function Ex(i,t){const e=new R;return i==="fastMedium"?e.set(-t*2,ze(-90,90),ze(-55,55)):i==="fast"?e.set(-t*2.1,ze(-75,75),ze(-45,45)):i==="inSwing"?e.set(-t*1.9,-ze(460,580),ze(115,165)):i==="outSwing"?e.set(-t*1.9,ze(460,580),-ze(115,165)):i==="offSpin"?e.set(ze(125,150),ze(60,90),ze(470,550)):i==="legSpin"?e.set(ze(130,155),-ze(65,95),-ze(500,580)):e.set(-t*2,0,0),e}class Tx{constructor(){this.reset()}reset(){this.consecutiveHard=0,this.ballsSinceEasy=0,this.lastTemplate=null,this.recentRuns=[],this.overIndex=-1,this.bowler=null,this.lastBowlerType=null}startOver(t){this.overIndex=t;const e=Xl.filter(n=>n!==this.lastBowlerType);this.bowler=Gl(e),this.lastBowlerType=this.bowler}recordOutcome(t){this.recentRuns.push(t),this.recentRuns.length>4&&this.recentRuns.shift()}next(){const t=this.recentRuns.reduce((p,S)=>p+S,0);let e=.18+.1*this.consecutiveHard+.05*Math.max(0,this.ballsSinceEasy-3),n=.22+(t>=8?.18:0)-.08*this.consecutiveHard;e=Math.min(e,.6),n=Math.max(n,.05);const s=Math.random(),r=s<e?"easy":s<e+n?"hard":"stock",o=this.bowler||Xl[0];let a=Wl.filter(p=>p.cat===r&&p!==this.lastTemplate);o.pace==="slow"&&(a=a.filter(p=>!(p.length==="yorker"&&p.cat==="hard"&&Math.random()<.5))),a.length||(a=Wl.filter(p=>p.cat==="stock"));const c=Gl(a);this.lastTemplate=c,this.consecutiveHard=r==="hard"?this.consecutiveHard+1:0,this.ballsSinceEasy=r==="easy"?0:this.ballsSinceEasy+1;const[l,u]=o.speedRange||it.bowling.speeds[o.pace],d=ze(l,u),h=d/3.6;let f=c.line;o.style==="offSpin"&&f==="outsideLeg"&&(f="leg"),o.style==="legSpin"&&f==="outsideOff"&&(f="off");const g=it.bowling.lines[f],x=it.bowling.lengths[c.length],m=ze(g[0],g[1]);return{name:c.name,category:r,bowler:o,pace:o.pace,kmh:d,speed:h,lineX:m,bounceX:m,bounceDist:ze(x[0],x[1]),spin:Ex(o.style,h)}}}const Ze=new Zh;function Ax(i,t){const e=it.ball.radius,n=it.physics.gravity,s=it.ball,r=.5*it.physics.airDensity*s.dragCoefficient*Math.PI*s.radius*s.radius/s.mass,o=it.physics.dt,a=it.stumps.z-t.bounceDist;if(!t.spin){t.bounceX=t.lineX;const x=new R(t.lineX,e,it.stumps.z),m=new R(x.x-i.x,0,x.z-i.z).normalize(),p=A=>{const b=t.speed*Math.cos(A);let P=m.x*b,_=m.z*b,v=t.speed*Math.sin(A);i.x;let T=i.y,N=i.z;for(let O=0;O<2e3;O++){const V=Math.hypot(P,v,_);if(P+=-r*V*P*o,v+=(-n-r*V*v)*o,_+=-r*V*_*o,T+=v*o,N+=_*o,T<=e)return N;if(N>5)return 10}return 10};let S=-.6,y=.35;for(let A=0;A<40;A++){const b=(S+y)/2;p(b)<a?S=b:y=b}const M=(S+y)/2,L=t.speed*Math.cos(M);return new R(m.x*L,t.speed*Math.sin(M),m.z*L)}const c=t.spin;let l=t.lineX,u=-.1,d=t.lineX;const h=new R,f=new R;for(let x=0;x<3;x++){h.set(l-i.x,0,it.stumps.z-i.z).normalize();let m=-.6,p=.38;for(let L=0;L<28;L++){const A=(m+p)/2,b=t.speed*Math.cos(A);f.set(h.x*b,t.speed*Math.sin(A),h.z*b),Ze.launch(i,f,c),Ze.events.length=0;let P=10;for(let _=0;_<1200;_++){if(Ze.step(o),Ze.events.length){P=Ze.events[0].pos.z,Ze.events.length=0;break}if(Ze.pos.z>5)break}P<a?m=A:p=A}u=(m+p)/2;const S=t.speed*Math.cos(u);f.set(h.x*S,t.speed*Math.sin(u),h.z*S),Ze.launch(i,f,c),Ze.events.length=0;let y=l,M=l;for(let L=0;L<1500;L++)if(Ze.step(o),Ze.events.length&&(y=Ze.events[0].pos.x,Ze.events.length=0),Ze.pos.z>=it.stumps.z){M=Ze.pos.x;break}d=y,l-=(M-t.lineX)*.85}t.bounceX=d,h.set(l-i.x,0,it.stumps.z-i.z).normalize();const g=t.speed*Math.cos(u);return new R(h.x*g,t.speed*Math.sin(u),h.z*g)}const Rx=-En+1.22,Jr={hipHeight:.98,torsoLength:.56,shoulderHalf:.2,armLength:.7,legLength:.96,bodyX:.42};function $h(i){const e=i.runSpeed,n=i.pace==="slow"?.55:.42,s=i.runDistance/e+.35,r=e*n*.6,o=Rx-.35,a=o-r,c=e*(s-.35*(1-Math.exp(-s/.35)));return{v:e,tau:.35,tGather:n,tRun:s,gatherDist:r,zRelease:o,zGather:a,zStart:a-c,tRelease:s+n,stride:i.pace==="slow"?1.2:1.9,releaseAngle:Math.PI-.05,hand:i.hand==="left"?"left":"right"}}const Mi=new R,ql=new R;function Kh(i,t,e={}){const n=Jr,s=t.hand==="left",r=s?-1:1;let o,a=r*n.bodyX,c=0,l,u,d,h,f,g=0,x=0,m;const p=.2*t.v;if(i<=t.tRun){const b=Math.max(0,i);m=t.v*(b-t.tau*(1-Math.exp(-b/t.tau))),o=t.zStart+m;const P=m/t.stride*Math.PI*2;h=.75*Math.sin(P),f=-h,g=.6*Math.max(0,Math.sin(P+1.2))+.2,x=.6*Math.max(0,Math.sin(P+1.2+Math.PI))+.2,c=.05*Math.abs(Math.sin(P)),l=.18,u=.25-.45*Math.sin(P),d=.25+.45*Math.sin(P)}else if(i<=t.tRelease){const b=(i-t.tRun)/t.tGather;o=t.zGather+t.v*t.tGather*(b-.4*b*b),c=.16*Math.sin(Math.PI*Math.min(1,b*1.25)),l=.18-.42*Math.sin(Math.PI*Math.min(1,b*1.3))+.12*b*b,u=.2+(t.releaseAngle-.2)*Math.pow(b,2.2),d=b<.6?.25+(Math.PI-.1-.25)*(b/.6):Math.PI-.1-2.2*((b-.6)/.4),h=-.55*Math.min(1,b*1.6),f=.45*b,g=.5*(1-b),x=.6*Math.sin(Math.PI*b)}else{const b=i-t.tRelease,P=.7;o=t.zRelease+p*P*(1-Math.exp(-b/P))+.9*(1-Math.exp(-b/.25)),a=r*(n.bodyX+.9*(1-Math.exp(-b/.8))),l=.3+.35*(1-Math.exp(-b/.2)),u=t.releaseAngle+(2*Math.PI+.35-t.releaseAngle)*(1-Math.exp(-b/.11)),d=.9+.2*Math.exp(-b/.2),h=-.5*Math.exp(-b/.5),f=.5*Math.exp(-b/.4)+.2*Math.sin(b*6)*Math.exp(-b),g=.3,x=.4,c=0}e.x=a,e.z=o,e.y=c,e.lean=l,s?(e.armL=u,e.armR=d,e.legR=h,e.legL=f,e.kneeR=g,e.kneeL=x):(e.armR=u,e.armL=d,e.legL=h,e.legR=f,e.kneeL=g,e.kneeR=x);const S=n.hipHeight+c;Mi.set(-r*n.shoulderHalf,n.torsoLength,0),ql.set(0,-Math.cos(u),-Math.sin(u)).multiplyScalar(n.armLength),Mi.add(ql);const y=Math.cos(l),M=Math.sin(l),L=Mi.y*y-Mi.z*M,A=Mi.y*M+Mi.z*y;return e.hand=(e.hand||new R).set(a+Mi.x,S+L,o+A),e}class Cx{start(){this.hit=!1,this.firstContact=null,this.groundedAfterHit=!1,this.result=null,this.t=0,this.tHit=0,this.maxHeight=0,this.closestToHead=1/0}update(t,e,n){var s;if(this.result)return this.result;this.t+=t;for(const r of n)if(r.type==="bat"&&!this.hit)this.hit=!0,this.firstContact=r,this.tHit=this.t;else if(r.type==="bounce"&&this.hit)(this.t-this.tHit>.06||e.vel.y<2.5)&&(this.groundedAfterHit=!0);else if(r.type==="stumps"){if(r.isNonStriker)continue;return this.result={kind:"wicket",runs:0,text:this.hit?"Played on!":"Bowled!"},this.result}else if(r.type==="catch"){const o=Math.hypot(r.pos.x,r.pos.z+1.22);return this.result={kind:"wicket",caught:!0,fielder:r.fielder,runs:0,text:r.isKeeper?"Caught behind!":`Caught (${r.fielder})!`,distance:Math.round(o)},this.result}else if(r.type==="fielded")if(this.hit){const o=Math.hypot(r.pos.x,r.pos.z+1.22),a=Math.max(0,this.t-this.tHit);return this.result=this.scoreInfieldOrOutfield(o,r.fielder,a,r.chaseDist??0),this.result}else return this.result={kind:"dot",runs:0,text:"Dot ball",distance:0},this.result;if(!e.active)return null;if(this.hit){e.rolling&&this.t-this.tHit>.08&&(this.groundedAfterHit=!0),this.maxHeight=Math.max(this.maxHeight,e.pos.y);const r=it.field,o=e.pos.x,a=e.pos.z-r.centerZ,c=Math.hypot(o,a),l=Math.hypot(e.pos.x,e.pos.z+1.22);if(c>=r.boundaryRadius){if(!this.groundedAfterHit&&this.maxHeight>1.2){const f=((s=this.firstContact)==null?void 0:s.exitSpeed)||Math.hypot(e.vel.x,e.vel.y,e.vel.z),g=Math.hypot(e.vel.x,e.vel.z),x=Math.max(0,Math.min(1,(f-25)/22)),m=Math.max(0,Math.min(13,(g-8)*.65)),p=Math.max(78,Math.min(115,Math.round(78+x*24+m)));this.result={kind:"six",runs:6,text:"SIX!",distance:p}}else this.result={kind:"four",runs:4,text:"FOUR!"};return this.result}const u=e.vel.length(),d=Math.max(0,this.t-this.tHit);if(l<12&&e.rolling&&u<.25||d>it.game.deadBallTimeout)return this.result=this.scoreInfieldOrOutfield(l,"",d,l<12?0:10),this.result}else if(e.pos.z>it.stumps.z+1||e.pos.y<-1||e.rolling&&e.vel.length()<.5||this.t>4)return this.result={kind:"dot",runs:0,text:"Dot ball",distance:0},this.result;return null}scoreInfieldOrOutfield(t,e="",n=0,s=0){const r=Math.round(t);if(t<6.5)return{kind:"dot",runs:0,text:"Defended",distance:r,fielder:e};if(t<18)return{kind:"dot",runs:0,text:e?`Fielded (${e})`:"No run",distance:r,fielder:e};const o=Math.min(.55,Math.max(0,s-4)*.045),a=n+o;let c=0;return t>=46&&n>=3.5&&s>=11.5&&a>=4?c=3:t>=38&&n>=2.55&&s>=8&&a>=2.95?c=2:(t>=26&&n>=1.45&&a>=1.6&&!(t<32&&s<5&&n<1.75)||t>=18&&t<26&&n>=2.15&&s>=8.5&&a>=2.45)&&(c=1),c===3?{kind:"runs",runs:3,text:"3 RUNS!",distance:r,fielder:e}:c===2?{kind:"runs",runs:2,text:"2 RUNS!",distance:r,fielder:e}:c===1?{kind:"runs",runs:1,text:"1 RUN!",distance:r,fielder:e}:{kind:"dot",runs:0,text:e?`Fielded (${e})`:"No run",distance:r,fielder:e}}}function Px(i=5,t=Math.random){const n=[2,5,10].includes(i)?i:5,s=n*6,r=10,[o,a]=n===2?[15,19]:[18,21],c=Math.ceil(n*o),l=Math.floor(n*a),u=c+Math.floor(t()*(l-c+1)),d=+(u/s*6).toFixed(1);return{mode:"exhibition",overs:n,totalOvers:n,maxBalls:s,maxWickets:r,startBalls:0,startRuns:0,startWickets:0,wicketsRemaining:r,target:u,needRuns:u,ballsRemaining:s,reqRR:d,banner:`CHASE ${u} IN ${n} OVERS!`}}function Lx(i=Math.random){const s=i()<.5?4:5,r=s*6,o=60-r,a=3+Math.floor(i()*3),c=10-a,l=13.5+i()*3.5,u=Math.round(r/6*l),d=Math.ceil(o/6*21),h=Math.floor(o/6*24),f=d+Math.floor(i()*(h-d+1)),g=u+f,x=+(f/o*6).toFixed(1);return{mode:"scenario",overs:10,totalOvers:10,maxBalls:60,maxWickets:10,elapsedOvers:s,startBalls:r,startRuns:u,startWickets:c,wicketsRemaining:a,target:g,needRuns:f,ballsRemaining:o,reqRR:x,banner:`SCENARIO: ${u}/${c} (${s}.0 OV) · NEED ${f} OFF ${o}B`}}function so({runs:i,wickets:t,balls:e,target:n,maxBalls:s,maxWickets:r}){const o=Math.max(0,n-i),a=Math.max(0,s-e),c=Math.max(0,r-t),l=a>0?+(o/a*6).toFixed(1):o>0?99.9:0;if(i>=n)return{finished:!0,outcome:"won",title:"VICTORY!",badge:"TARGET CHASED!",summary:`Won by ${c} wicket${c===1?"":"s"} (${a} ball${a===1?"":"s"} remaining)`,runsNeeded:0,ballsRemaining:a,wicketsRemaining:c,reqRR:0};if(t>=r||e>=s){if(i===n-1)return{finished:!0,outcome:"tied",title:"MATCH TIED!",badge:"SCORES LEVEL",summary:`Tied at ${i}/${t} (Target ${n})`,runsNeeded:o,ballsRemaining:a,wicketsRemaining:c,reqRR:l};const u=n-1-i;return{finished:!0,outcome:"lost",title:"DEFEAT!",badge:t>=r?"ALL OUT":"OVERS UP",summary:`Lost by ${u} run${u===1?"":"s"} · Needed ${n}`,runsNeeded:o,ballsRemaining:a,wicketsRemaining:c,reqRR:l}}return{finished:!1,outcome:"in_progress",runsNeeded:o,ballsRemaining:a,wicketsRemaining:c,reqRR:l}}class Dx{constructor(t,e,n){this.canvas=t,this.isTouchDevice=!!(typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0)||typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches),this.locked=!1,this.mouseDX=0,this.mouseDY=0,this.mouseIdleTime=0,this.stick={x:0,y:0,active:!1,id:null},this.originX=0,this.originY=0,this.usingJoystick=this.isTouchDevice,this.joyEl=e,this.knobEl=n,this.onLockChange=null,document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("pointerlockerror",()=>{this.locked=!1}),document.addEventListener("mousemove",s=>{this.locked&&(Math.abs(s.movementX)>400||Math.abs(s.movementY)>400||(this.mouseDX+=s.movementX,this.mouseDY+=s.movementY))}),this._setupJoystick()}requestLock(){if(!this.locked)try{const t=this.canvas.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{try{this.canvas.requestPointerLock()}catch{}})}catch{try{this.canvas.requestPointerLock()}catch{}}}releaseLock(){if(document.pointerLockElement)try{document.exitPointerLock()}catch{}}_setupJoystick(){const t=this.joyEl,e=this.knobEl,n=()=>t&&t.clientWidth>20?t.clientWidth*.5:70,s=c=>!c||!c.closest?!1:!!(c.closest("#topControls")||c.closest(".icon-btn")||c.closest("button")||c.closest("a")||c.closest("input")||c.closest("select")||c.closest(".overlay:not(.hidden)")),r=c=>{const l=n();let u=(c.clientX-this.originX)/l,d=(c.clientY-this.originY)/l;const h=Math.hypot(u,d);h>1&&(u/=h,d/=h),this.stick.x=u,this.stick.y=d,e&&(e.style.transform=`translate(${u*l*.75}px, ${d*l*.75}px)`)};window.addEventListener("touchstart",c=>{if(s(c.target)||document.querySelector(".overlay:not(.hidden)")||this.stick.active)return;const l=c.changedTouches[0];l&&(c.preventDefault(),this.stick.id=l.identifier,this.stick.active=!0,this.usingJoystick=!0,this.originX=l.clientX,this.originY=l.clientY,this.stick.x=0,this.stick.y=0,t&&(t.style.left=`${l.clientX}px`,t.style.top=`${l.clientY}px`,t.style.right="auto",t.style.bottom="auto",t.classList.add("active")),e&&(e.style.transform="translate(0px, 0px)"))},{passive:!1}),window.addEventListener("touchmove",c=>{if(this.stick.active){for(const l of c.changedTouches)if(l.identifier===this.stick.id){c.preventDefault(),r(l);break}}},{passive:!1});const o=c=>{if(this.stick.active){for(const l of c.changedTouches)if(l.identifier===this.stick.id){this.stick.active=!1,this.stick.id=null,this.stick.x=0,this.stick.y=0,t&&t.classList.remove("active"),e&&(e.style.transform="translate(0px, 0px)");break}}};window.addEventListener("touchend",o),window.addEventListener("touchcancel",o),window.addEventListener("blur",()=>{this.stick.active&&(this.stick.active=!1,this.stick.id=null,this.stick.x=0,this.stick.y=0,t&&t.classList.remove("active"),e&&(e.style.transform="translate(0px, 0px)"))});let a=!1;t&&(t.addEventListener("mousedown",c=>{this.locked||(a=!0,this.stick.active=!0,this.usingJoystick=!0,this.originX=c.clientX,this.originY=c.clientY,t.style.left=`${c.clientX}px`,t.style.top=`${c.clientY}px`,t.classList.add("active"),c.stopPropagation())}),window.addEventListener("mousemove",c=>{if(a&&!this.locked){const l=n();let u=(c.clientX-this.originX)/l,d=(c.clientY-this.originY)/l;const h=Math.hypot(u,d);h>1&&(u/=h,d/=h),this.stick.x=u,this.stick.y=d,e&&(e.style.transform=`translate(${u*l*.75}px, ${d*l*.75}px)`)}}),window.addEventListener("mouseup",()=>{a&&(a=!1,this.stick.active=!1,this.stick.x=0,this.stick.y=0,t.classList.remove("active"),e&&(e.style.transform="translate(0px, 0px)"))}))}applyTo(t,e,n){const s=it.control;if(this.mouseDX||this.mouseDY){this.usingJoystick=!1;const r=s.mouseRadPerPixel*s.mouseSensitivity;t.addTargetDelta(this.mouseDX*r,-this.mouseDY*r),this.mouseDX=0,this.mouseDY=0}if(this.stick.active){this.usingJoystick=!0;const r=s.joystickSensitivity,o=s.restTilt,a=d=>Math.sign(d)*Math.pow(Math.abs(d),1.25),c=a(this.stick.x),l=a(-this.stick.y),u=l>=0?s.tiltMax.b-o.b:o.b-s.tiltMin.b;t.setTargetAbsolute(o.a+c*s.joystickRangeA*r,o.b+l*u*r)}else this.usingJoystick&&t.recenter(n,6)}}class Ix{constructor(){this.ctx=null,this.master=null,this.crowdGain=null,this.enabled=!0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9,this.master.connect(this.ctx.destination),this.noise=this._makeNoise(2),this._startCrowd())}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_makeNoise(t){const e=this.ctx.sampleRate*t,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return n}_noiseBurst({freq:t,q:e=1,type:n="bandpass",gain:s=.5,attack:r=.001,decay:o=.08,when:a=0}){if(s<=1e-4)return;const c=this.ctx,l=c.currentTime+a,u=c.createBufferSource();u.buffer=this.noise;const d=c.createBiquadFilter();d.type=n,d.frequency.value=t,d.Q.value=e;const h=c.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.linearRampToValueAtTime(s,l+r),h.gain.exponentialRampToValueAtTime(1e-4,l+r+o),u.connect(d).connect(h).connect(this.master),u.start(l,Math.random()),u.stop(l+r+o+.05)}_tone({freq:t,endFreq:e,gain:n=.3,decay:s=.1,type:r="sine",when:o=0}){if(n<=1e-4)return;const a=this.ctx,c=a.currentTime+o,l=a.createOscillator();l.type=r,l.frequency.setValueAtTime(t,c),e&&l.frequency.exponentialRampToValueAtTime(e,c+s);const u=a.createGain();u.gain.setValueAtTime(n,c),u.gain.exponentialRampToValueAtTime(1e-4,c+s),l.connect(u).connect(this.master),l.start(c),l.stop(c+s+.05)}batHit(t,e,n,s){if(!this.ctx)return;const r=.25+.75*e;if(n)this._noiseBurst({freq:3600,q:7,gain:.55*r,decay:.028}),this._tone({freq:2200,endFreq:1500,gain:.15*r,decay:.045,type:"triangle"});else if(s)this._noiseBurst({freq:650,q:1.4,type:"lowpass",gain:.55*r,decay:.045}),this._tone({freq:240,endFreq:160,gain:.3*r,decay:.055});else{const o=Math.max(0,Math.min(1,t)),a=.05+.12*o;this._noiseBurst({freq:2200+800*o,q:3.5,gain:.95*r*(.8+.4*o),decay:.025+.02*o}),this._tone({freq:560+140*o,endFreq:380,gain:.42*r*(.6+.5*o),decay:a,type:"triangle"}),this._tone({freq:175,endFreq:110,gain:.45*r*(.7+.3*o),decay:a*1.3,type:"sine"}),o>.7&&this._tone({freq:880,endFreq:720,gain:.18*r,decay:a*.7,type:"sine",when:.002})}}bounce(t){if(!this.ctx)return;const e=Math.min(1,t);this._noiseBurst({freq:320,q:1.2,type:"lowpass",gain:.32*e,decay:.045}),this._noiseBurst({freq:1100,q:2,type:"bandpass",gain:.15*e,decay:.025}),this._tone({freq:140,endFreq:85,gain:.2*e,decay:.04})}stumps(){this.ctx&&(this._noiseBurst({freq:2400,q:3.2,gain:.75,decay:.05}),this._tone({freq:920,endFreq:520,gain:.35,decay:.14,type:"triangle"}),this._noiseBurst({freq:1700,q:4.5,gain:.45,decay:.04,when:.04}),this._tone({freq:1250,endFreq:700,gain:.22,decay:.08,type:"square",when:.06}),this._noiseBurst({freq:1300,q:3,gain:.35,decay:.06,when:.09}),this.cheer(.65,2.2))}whoosh(t){this.ctx&&(this._noiseBurst({freq:1100,q:1,gain:.18*t,attack:.03,decay:.14}),this.gasp())}gasp(){if(!this.ctx||!this.crowdGain)return;const t=this.crowdGain.gain,e=this.ctx.currentTime;t.cancelScheduledValues(e),t.setValueAtTime(t.value,e),t.linearRampToValueAtTime(.08,e+.12),t.linearRampToValueAtTime(.035,e+1.2)}_startCrowd(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.noise,e.loop=!0;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=850,n.Q.value=.55,this.crowdGain=t.createGain(),this.crowdGain.gain.value=.035,e.connect(n).connect(this.crowdGain).connect(this.master),e.start()}cheer(t=1,e=2.5){if(!this.ctx||!this.crowdGain)return;const n=this.crowdGain.gain,s=this.ctx.currentTime;n.cancelScheduledValues(s),n.setValueAtTime(n.value,s),n.linearRampToValueAtTime(.035+.28*t,s+.18),n.exponentialRampToValueAtTime(.035,s+e)}boundaryFanfare(t=!1){if(!this.ctx||!this.enabled)return;const e=t?[523.25,659.25,783.99,1046.5]:[523.25,659.25,783.99],n=t?.13:.11;e.forEach((s,r)=>{this._tone({freq:s,gain:.18,decay:.24,type:"triangle",when:r*n}),this._tone({freq:s*2,gain:.08,decay:.16,type:"sine",when:r*n})})}appeal(){!this.ctx||!this.enabled||(this._tone({freq:280,endFreq:420,gain:.24,decay:.28,type:"triangle"}),this._tone({freq:440,endFreq:620,gain:.16,decay:.22,type:"sine"}),this._noiseBurst({freq:1400,q:2.2,gain:.22,decay:.18,attack:.02}))}wicketWhistle(){!this.ctx||!this.enabled||(this._tone({freq:2800,gain:.22,decay:.38,type:"sine",when:.12}),this._tone({freq:2980,gain:.2,decay:.38,type:"sine",when:.12}))}boundaryClap(){if(!this.ctx||!this.enabled)return;const t=6,n=60/126;for(let s=0;s<t;s++)this._noiseBurst({freq:1250+(Math.random()-.5)*180,q:2,type:"bandpass",gain:.3,decay:.038,when:.42+s*n}),this._tone({freq:210,gain:.1,decay:.032,when:.42+s*n})}bowlerStride(){!this.ctx||!this.enabled||(this._noiseBurst({freq:220,q:1.2,type:"lowpass",gain:.22,decay:.05}),this._tone({freq:115,endFreq:68,gain:.2,decay:.065}))}bowlerRelease(){!this.ctx||!this.enabled||(this._noiseBurst({freq:620,q:1.6,gain:.16,decay:.07,attack:.02}),this._tone({freq:185,endFreq:125,gain:.14,decay:.09,type:"triangle"}))}ballFlyby(t){if(!this.ctx||!this.enabled||t<105)return;const e=Math.min(1,(t-95)/45);this._noiseBurst({freq:1350+e*650,q:2.2,gain:.15*e,attack:.04,decay:.12})}catchOut(){!this.ctx||!this.enabled||(this._noiseBurst({freq:900,q:1.8,gain:.55,decay:.04}),this._tone({freq:210,endFreq:120,gain:.35,decay:.05}),this.appeal(),this.wicketWhistle(),this.cheer(.75,2.4))}fieldStop(){!this.ctx||!this.enabled||(this._noiseBurst({freq:520,q:1.2,type:"lowpass",gain:.32,decay:.05}),this._tone({freq:165,endFreq:95,gain:.22,decay:.045}))}toggleMute(){return this.enabled=!this.enabled,this.master&&(this.master.gain.value=this.enabled?.9:0),this.enabled}}let ni=null;function Ux(){if(ni)return ni;const i=document.createElement("canvas");i.width=5,i.height=1;const t=i.getContext("2d"),e=[75,130,185,230,255];for(let n=0;n<e.length;n++){const s=e[n];t.fillStyle=`rgb(${s},${s},${s})`,t.fillRect(n,0,1,1)}return ni=new cc(i),ni.colorSpace=Hn,ni.minFilter=Qe,ni.magFilter=Qe,ni.generateMipmaps=!1,ni}function It(i){return new dx({gradientMap:Ux(),...i})}function Fx(i=.008,t=1315859,e=1){return new fn({side:ke,transparent:e<.999,depthWrite:e>=.999,uniforms:{uThickness:{value:i},uColor:{value:new $t(t)},uOpacity:{value:e}},vertexShader:`
      uniform float uThickness;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vec3 mvNormal = normalize(mat3(modelViewMatrix) * normal);
        mvPosition.xyz += mvNormal * uThickness;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      void main() {
        gl_FragColor = vec4(uColor, uOpacity);
      }
    `})}function At(i,t=.008,e=1315859){const n=Fx(t,e),s=new Q(i.geometry,n);return i.add(s),s}function Ae(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const s=new cc(n);return s.colorSpace=Je,s.anisotropy=4,s}function Nx(){const i=new ae,t=It({color:16317180}),e=It({color:1976635}),n=It({color:14254651}),s=It({color:14753096}),r=It({color:1976635}),o=It({color:988970}),a=new Q(new Ln(.32,16),new me({color:1315859,transparent:!0,opacity:.38,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.012,i.add(a);const c=new ae;i.add(c);for(const x of[-.1,.1]){const m=new Q(new Oe(.068,.78,4,10),r);m.position.set(x,.48,0),m.castShadow=!0,At(m,.012,1315859),c.add(m);const p=new Q(new te(.11,.08,.24),o);p.position.set(x,.04,.04),p.castShadow=!0,At(p,.01,1315859),c.add(p)}const l=new Q(new Oe(.18,.4,5,12),s);l.position.y=1.18,l.scale.set(1.14,1,.8),l.castShadow=!0,At(l,.014,1315859),c.add(l);const u=new Q(new oe(.11,.13,.06,12),t);u.position.y=1.48,At(u,.008,1315859),c.add(u);for(const x of[-.23,.23]){const m=new Q(new Oe(.046,.46,4,10),s);m.position.set(x,1.16,-.03),m.rotation.z=x<0?.12:-.12,m.rotation.x=.16,m.castShadow=!0,At(m,.01,1315859),c.add(m);const p=new Q(new be(.046,10,8),n);p.position.set(x*.92,.88,-.08),At(p,.008,1315859),c.add(p)}const d=new Q(new be(.115,14,12),n);d.position.y=1.62,d.castShadow=!0,At(d,.012,1315859),c.add(d);const h=new Q(new oe(.24,.25,.018,18),t);h.position.y=1.68,h.rotation.x=.06,h.castShadow=!0,At(h,.008,1315859),c.add(h);const f=new Q(new oe(.11,.125,.1,14),t);f.position.y=1.73,At(f,.008,1315859),c.add(f);const g=new Q(new oe(.126,.128,.025,14),e);return g.position.y=1.695,c.add(g),i.userData.body=c,i}function Ox(){const i=new ae,t=It({color:1920728}),e=It({color:1981066}),n=It({color:16347926}),s=It({color:1920728}),r=It({color:1981066}),o=It({color:9741240}),a=It({color:14254651}),c=It({color:16317180}),l=It({color:16347926}),u=It({color:16638023}),d=new Q(new Ln(.35,16),new me({color:1315859,transparent:!0,opacity:.4,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.012,i.add(d);const h=new ae;i.add(h);for(const v of[-.11,.11]){const T=new Q(new Oe(.07,.36,4,10),e);T.position.set(v,.72,0),T.castShadow=!0,At(T,.012,1315859),h.add(T);const N=new Q(new te(.145,.5,.14),s);N.position.set(v,.34,.02),N.castShadow=!0,At(N,.012,1315859),h.add(N);const O=new Q(new te(.152,.05,.145),n);O.position.set(v,.56,.02),h.add(O);const V=new Q(new te(.11,.08,.24),c);V.position.set(v,.04,.05),At(V,.01,1315859),h.add(V)}const f=new Q(new Oe(.175,.38,5,12),t);f.position.y=1.18,f.scale.set(1.15,1,.8),f.rotation.x=.12,f.castShadow=!0,At(f,.014,1315859),h.add(f);const g=new Q(new te(.32,.07,.29),n);g.position.set(0,1.24,.01),g.rotation.x=.12,h.add(g);for(const v of[-.19,.19]){const T=new Q(new te(.11,.045,.12),n);T.position.set(v,1.33,.04),T.rotation.z=v<0?.32:-.32,h.add(T)}const x=new Q(new Oe(.048,.44,4,10),t);x.position.set(.21,1.14,.1),x.rotation.x=-.55,x.rotation.z=-.22,x.castShadow=!0,At(x,.01,1315859),h.add(x);const m=new Q(new Oe(.048,.44,4,10),t);m.position.set(-.2,1.12,.1),m.rotation.x=-.5,m.rotation.z=.25,m.castShadow=!0,At(m,.01,1315859),h.add(m);const p=new Q(new oe(.056,.056,.05,10),l);p.position.set(0,.94,.23),p.rotation.x=-.52,h.add(p);const S=new Q(new be(.068,10,8),c);S.position.set(0,.9,.26),At(S,.008,1315859),h.add(S);const y=new ae;y.position.set(0,.9,.26),y.rotation.x=-.26;const M=new Q(new oe(.018,.018,.3,8),r);M.position.y=-.1,At(M,.005,1315859),y.add(M);const L=new Q(new te(.105,.56,.045),u);L.position.y=-.52,L.castShadow=!0,At(L,.008,1315859),y.add(L),h.add(y);const A=new Q(new be(.115,12,10),a);A.position.set(0,1.58,.06),h.add(A);const b=new Q(new be(.132,14,12,0,Math.PI*2,0,Math.PI*.62),r);b.position.set(0,1.6,.05),b.rotation.x=-.15,b.castShadow=!0,At(b,.012,1315859),h.add(b);const P=new Q(new oe(.135,.145,.016,12,1,!1,-Math.PI*.35,Math.PI*.7),r);P.position.set(0,1.61,.11),P.rotation.x=.2,At(P,.006,1315859),h.add(P);const _=new Q(new ms(.105,.009,6,12,Math.PI*.8),o);return _.position.set(0,1.54,.09),_.rotation.x=Math.PI/2,_.rotation.z=-Math.PI*.4,h.add(_),i.userData.body=h,i}function zx(i,t){const e=it.field;i.background=new $t(3718648),i.fog=new oc(8969471,165,395);const n=new R(-28,55,18).normalize(),s=new be(420,32,18),r=new fn({side:ke,depthWrite:!1,fog:!1,uniforms:{uSunDir:{value:n}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vDir;
      uniform vec3 uSunDir;
      void main() {
        float h = vDir.y;
        vec3 topColor = vec3(0.05, 0.42, 0.90);
        vec3 midColor = vec3(0.20, 0.70, 0.98);
        vec3 horColor = vec3(0.88, 0.96, 1.00);
        vec3 col = mix(horColor, midColor, smoothstep(-0.02, 0.28, h));
        col = mix(col, topColor, smoothstep(0.28, 0.85, h));

        // Stylized cel-shaded sun & stepped solar corona
        float sunDot = max(0.0, dot(vDir, normalize(uSunDir)));
        float outerHalo = smoothstep(0.965, 0.978, sunDot);
        float innerHalo = smoothstep(0.986, 0.991, sunDot);
        float sunDisc = smoothstep(0.9945, 0.9960, sunDot);
        col = mix(col, vec3(1.0, 0.96, 0.78), outerHalo * 0.28);
        col = mix(col, vec3(1.0, 0.97, 0.84), innerHalo * 0.55);
        col = mix(col, vec3(1.0, 0.99, 0.93), sunDisc);

        gl_FragColor = vec4(col, 1.0);
      }
    `});i.add(new Q(s,r));const o=new me({color:16777215}),a=new me({color:15857145}),c=new ae,l=[{angle:.2,dist:265,y:135,s:2.5},{angle:.72,dist:300,y:158,s:3},{angle:1.25,dist:255,y:125,s:2.3},{angle:1.78,dist:295,y:150,s:2.8},{angle:2.3,dist:320,y:170,s:3.2},{angle:2.85,dist:270,y:132,s:2.5},{angle:3.4,dist:310,y:164,s:2.9},{angle:3.92,dist:255,y:140,s:2.4},{angle:4.45,dist:295,y:155,s:2.7},{angle:4.98,dist:280,y:145,s:2.6},{angle:5.5,dist:305,y:162,s:2.9},{angle:5.95,dist:260,y:138,s:2.3}],u=[{r:8.5,x:0,y:0,z:0},{r:6.8,x:-7,y:-1.2,z:1},{r:7.2,x:7,y:-.8,z:-1},{r:5.5,x:12,y:-2,z:2},{r:5,x:-12,y:-2.2,z:-1.5},{r:6,x:2,y:3.5,z:0}],d=u.map(D=>new be(D.r,12,10));l.forEach(D=>{const Z=new ae,z=Math.sin(D.angle)*D.dist,Y=e.centerZ+Math.cos(D.angle)*D.dist;Z.position.set(z,D.y,Y),u.forEach((lt,yt)=>{const dt=yt===3||yt===4?a:o,Ut=new Q(d[yt],dt);Ut.position.set(lt.x,lt.y,lt.z),At(Ut,.48,1315859),Z.add(Ut)}),Z.scale.set(D.s*1.38,D.s*.82,D.s*1.15),c.add(Z)}),i.add(c);const h=new fx(14412542,5078079,1.18);i.add(h);const f=new gx(16775146,1.95);f.position.set(-28,55,18),f.castShadow=!0,f.shadow.mapSize.width=2048,f.shadow.mapSize.height=2048,f.shadow.camera.near=10,f.shadow.camera.far=130,f.shadow.camera.left=-22,f.shadow.camera.right=22,f.shadow.camera.top=24,f.shadow.camera.bottom=-32,f.shadow.bias=-6e-4,i.add(f);const g=Ae(1024,1024,(D,Z,z)=>{D.fillStyle="#1f9e3d",D.fillRect(0,0,Z,z);const Y=Z/2,lt=z/2,yt=14;for(let dt=yt;dt>=1;dt--)D.beginPath(),D.arc(Y,lt,dt*Z/(2*yt),0,Math.PI*2),D.fillStyle=dt%2===0?"#2ac04c":"#1f9e3d",D.fill();D.save(),D.globalAlpha=.1,D.fillStyle="#fef08a";for(let dt=-Z;dt<Z*2;dt+=48)D.fillRect(dt,0,24,z);D.restore(),D.strokeStyle="#15803d",D.lineWidth=42,D.beginPath(),D.arc(Y,lt,Z*.44,0,Math.PI*2),D.stroke(),D.fillStyle="rgba(255, 255, 255, 0.08)";for(let dt=0;dt<340;dt++){const Ut=Math.random()*Math.PI*2,Rt=Math.sqrt(Math.random())*(Z*.47);D.fillRect(Y+Math.cos(Ut)*Rt,lt+Math.sin(Ut)*Rt,3,3)}}),x=new Q(new Ln(e.boundaryRadius+16,72),It({map:g}));x.rotation.x=-Math.PI/2,x.position.set(0,0,e.centerZ),x.receiveShadow=!0,i.add(x);const m=new je(.95,.16),p=new me({color:16317180,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),S=72,y=new za(m,p,S),M=new se,L=new qe,A=new R,b=new R(1,1,1),P=new Sn;for(let D=0;D<S;D++){const Z=D/S*Math.PI*2;A.set(Math.sin(Z)*27.4,.012,e.centerZ+Math.cos(Z)*27.4),P.set(-Math.PI/2,Z,0,"YXZ"),L.setFromEuler(P),M.compose(A,L,b),y.setMatrixAt(D,M)}i.add(y);const _=Ae(512,1024,(D,Z,z)=>{D.fillStyle="#ddb67a",D.fillRect(0,0,Z,z);for(let Y=0;Y<8;Y++)D.fillStyle=Y%2===0?"rgba(255,255,255,0.05)":"rgba(120,75,30,0.04)",D.fillRect(Y/8*Z,0,Z/8,z);D.fillStyle="#ce9f60",D.fillRect(Z*.24,0,Z*.52,z);for(let Y=0;Y<42;Y++){const lt=Z*(.34+Math.random()*.32),yt=z*(.2+Math.random()*.24);D.fillStyle="rgba(130, 88, 42, 0.22)",D.beginPath(),D.ellipse(lt,yt,4+Math.random()*6,10+Math.random()*14,0,0,Math.PI*2),D.fill()}for(const Y of[.09,.91]){const lt=D.createRadialGradient(Z/2,z*Y,6,Z/2,z*Y,Z*.44);lt.addColorStop(0,"#aa7e44"),lt.addColorStop(.6,"#c19659"),lt.addColorStop(1,"rgba(221, 182, 122, 0)"),D.fillStyle=lt,D.fillRect(0,Y<.5?0:z*.8,Z,z*.2)}D.strokeStyle="rgba(110, 72, 32, 0.24)",D.lineWidth=2;for(let Y=0;Y<16;Y++){const lt=Z*(.18+Math.random()*.64),yt=z*(.12+Math.random()*.76);D.beginPath(),D.moveTo(lt,yt),D.lineTo(lt+(Math.random()-.5)*18,yt+16+Math.random()*24),D.stroke()}}),v=En+2*2.4,T=new Q(new je(e.pitchHalfWidth*2,v),It({map:_,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));T.rotation.x=-Math.PI/2,T.position.set(0,.005,-En/2),T.receiveShadow=!0,i.add(T);const N=new Dg(new qg(new je(e.pitchHalfWidth*2,v)),new ac({color:1315859}));N.rotation.x=-Math.PI/2,N.position.set(0,.007,-En/2),i.add(N);const O=new me({color:16777215,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),V=(D,Z,z,Y)=>{const lt=new Q(new je(D,Z),O);lt.rotation.x=-Math.PI/2,lt.position.set(z,.01,Y),i.add(lt)};for(const D of[0,-En]){const Z=D===0?-1:1;V(3.66,.07,0,D),V(3.66,.07,0,D+Z*1.22);for(const z of[-1.32,1.32])V(.07,2.44,z,D);for(const z of[-.89,.89])V(.06,.44,z,D+Z*1)}const W=new Q(new ms(e.boundaryRadius,.11,8,140),It({color:16317180}));W.rotation.x=Math.PI/2,W.position.set(0,.1,e.centerZ),At(W,.025,1315859),i.add(W);const tt=((D=3.3,Z=.28,z=.44)=>{const Y=D/2,lt=new Float32Array([Y,0,-Z,-Y,0,-Z,-Y,z,0,Y,0,-Z,-Y,z,0,Y,z,0,-Y,0,Z,Y,0,Z,Y,z,0,-Y,0,Z,Y,z,0,-Y,z,0,-Y,0,-Z,-Y,0,Z,-Y,z,0,Y,0,Z,Y,0,-Z,Y,z,0,-Y,0,-Z,Y,0,-Z,Y,0,Z,-Y,0,-Z,Y,0,Z,-Y,0,Z]),yt=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,.02,.02,.08,.02,.05,.08,.02,.02,.08,.02,.05,.08,.02,.02,.08,.02,.08,.08,.02,.02,.08,.08,.02,.08]),dt=new we;return dt.setAttribute("position",new Ee(lt,3)),dt.setAttribute("uv",new Ee(yt,2)),dt.computeVertexNormals(),dt})(3.3,.28,.44),ot=[{bg:"#2563eb",accent:"#fde047",text:"PHYSICS CRICKET"},{bg:"#e11d48",accent:"#ffffff",text:"POW! ★ SIX!"},{bg:"#f59e0b",accent:"#141413",text:"TITAN PRO"},{bg:"#059669",accent:"#fef08a",text:"DRIVE FOR 4!"},{bg:"#7c3aed",accent:"#ffffff",text:"240HZ ENGINE"}].map(D=>{const Z=Ae(512,128,(z,Y,lt)=>{z.fillStyle=D.bg,z.fillRect(0,0,Y,lt),z.strokeStyle="#141413",z.lineWidth=8,z.strokeRect(4,4,Y-8,lt-8),z.fillStyle=D.accent,z.font="900 44px system-ui, sans-serif",z.textAlign="center",z.textBaseline="middle",z.fillText(D.text,Y/2,lt/2)});return It({map:Z})}),pt=48;for(let D=0;D<pt;D++){const Z=D/pt*Math.PI*2,z=e.boundaryRadius+.48,Y=new Q(tt,ot[D%ot.length]);Y.position.set(Math.sin(Z)*z,0,e.centerZ+Math.cos(Z)*z),Y.rotation.y=Z,Y.castShadow=!0,Y.receiveShadow=!0,At(Y,.016,1315859),i.add(Y)}const xt=Ae(1024,128,(D,Z,z)=>{const Y=["#1d4ed8","#be123c","#d97706","#047857","#6d28d9"],lt=["★ PHYSICS CRICKET ★","POW! ✦ MAXIMUM 6","⚡ SWEET SPOT ⚡","CRACK! ✦ DRIVE FOR 4","✦ PLAY STRAIGHT ✦"],yt=Z/5;for(let dt=0;dt<5;dt++){const Ut=dt*yt;D.fillStyle=Y[dt],D.fillRect(Ut,0,yt,z),D.fillStyle="rgba(255, 255, 255, 0.16)";for(let Rt=Ut+10;Rt<Ut+yt-6;Rt+=14)D.beginPath(),D.arc(Rt,14,3,0,Math.PI*2),D.fill(),D.beginPath(),D.arc(Rt,z-14,3,0,Math.PI*2),D.fill();D.strokeStyle="#141413",D.lineWidth=6,D.strokeRect(Ut+3,3,yt-6,z-6),D.fillStyle="#141413",D.font="900 22px system-ui, sans-serif",D.textAlign="center",D.textBaseline="middle",D.fillText(lt[dt],Ut+yt/2+2,z/2+2),D.fillStyle="#ffffff",D.fillText(lt[dt],Ut+yt/2,z/2)}});xt.wrapS=oi,xt.repeat.set(8,1);const mt=e.boundaryRadius+4.2,Ft=new Q(new oe(mt,mt,1.15,96,1,!0),new me({map:xt,side:ke}));Ft.position.set(0,.575,e.centerZ),i.add(Ft);const j=Ae(512,256,(D,Z,z)=>{D.fillStyle="#1e293b",D.fillRect(0,0,Z,z);for(let lt=0;lt<Z;lt+=128){D.fillStyle="#334155",D.fillRect(lt,0,14,z),D.fillStyle="#94a3b8";for(let yt=4;yt<z;yt+=14)D.fillRect(lt+2,yt,10,2)}const Y=["#2563eb","#e11d48","#f59e0b","#10b981","#8b5cf6","#f8fafc","#38bdf8"];for(let lt=0;lt<z;lt+=14){D.fillStyle="#0f172a",D.fillRect(0,lt,Z,3),D.fillStyle="#334155",D.fillRect(0,lt+3,Z,2);for(let yt=18;yt<Z;yt+=8){if(yt%128<16)continue;const dt=Y[Math.floor(Math.random()*Y.length)];D.fillStyle=dt,D.beginPath(),D.arc(yt+(Math.random()-.5)*2,lt+9,3,0,Math.PI*2),D.fill(),D.fillStyle="#141413",D.beginPath(),D.arc(yt,lt+6,1.5,0,Math.PI*2),D.fill()}}});j.wrapS=oi,j.repeat.set(8,1);const ut=new Q(new oe(mt+18,mt+2,11,64,1,!0),It({map:j,side:Me}));ut.position.set(0,5.5,e.centerZ),i.add(ut);const wt=Ae(512,64,(D,Z,z)=>{D.fillStyle="#0f172a",D.fillRect(0,0,Z,z),D.fillStyle="#fbbf24",D.fillRect(0,0,Z,6),D.fillRect(0,z-6,Z,6);for(let Y=10;Y<Z;Y+=36)D.fillStyle="#fef08a",D.fillRect(Y,14,24,z-28),D.strokeStyle="#38bdf8",D.lineWidth=2,D.strokeRect(Y,14,24,z-28)});wt.wrapS=oi,wt.repeat.set(14,1);const at=new Q(new oe(mt+19,mt+18,2.4,64,1,!0),new me({map:wt,side:Me}));at.position.set(0,12.2,e.centerZ),i.add(at);const Ht=new Q(new oe(mt+36,mt+19,12.6,64,1,!0),It({map:j,side:Me}));Ht.position.set(0,19.7,e.centerZ),i.add(Ht);const qt=Ae(512,64,(D,Z,z)=>{D.fillStyle="#1e293b",D.fillRect(0,0,Z,z),D.fillStyle="#fbbf24",D.fillRect(0,0,Z,8),D.fillStyle="#38bdf8",D.fillRect(0,z-8,Z,8);for(let Y=0;Y<Z;Y+=64)D.fillStyle="#0f172a",D.fillRect(Y+6,14,52,z-28),D.fillStyle="#475569",D.fillRect(Y,8,6,z-16)});qt.wrapS=oi,qt.repeat.set(16,1);const Xt=new Q(new oe(mt+36,mt+36,3.8,64,1,!0),It({map:qt,side:Me}));Xt.position.set(0,27.7,e.centerZ),i.add(Xt);const ee=It({color:3359061});for(const D of[26,29.6]){const Z=new Q(new ms(mt+36,.34,8,64),ee);Z.rotation.x=Math.PI/2,Z.position.set(0,D,e.centerZ),i.add(Z)}const ct=24,vt=new te(.9,6.2,1.2),I=It({color:6583435}),Nt=new za(vt,I,ct);for(let D=0;D<ct;D++){const Z=D/ct*Math.PI*2,z=mt+35.2;A.set(Math.sin(Z)*z,27.7,e.centerZ+Math.cos(Z)*z),P.set(0,Z,0,"YXZ"),L.setFromEuler(P),M.compose(A,L,b),Nt.setMatrixAt(D,M)}i.add(Nt);const st=[2450411,16096779,15680580,1096065,11032055,440020],Pt=It({color:9741240}),Mt=[],Gt=new oe(.12,.14,5.2,6),bt=new we;bt.setAttribute("position",new Ee(new Float32Array([0,2.3,0,2.5,1.35,.3,0,.4,0]),3)),bt.computeVertexNormals();for(let D=0;D<24;D++){const Z=D/24*Math.PI*2,z=mt+36,Y=Math.sin(Z)*z,lt=e.centerZ+Math.cos(Z)*z,yt=new Q(Gt,Pt);yt.position.set(Y,32,lt),At(yt,.03,1315859),i.add(yt);const dt=new me({color:st[D%st.length],side:Me}),Ut=new Q(bt,dt);Ut.position.set(Y,31.8,lt),Ut.rotation.y=Z+Math.PI/4,Ut.userData={baseRotY:Z+Math.PI/4,phase:D*.7},i.add(Ut),Mt.push(Ut)}const C=Ae(256,128,(D,Z,z)=>{D.fillStyle="#0f172a",D.fillRect(0,0,Z,z),D.strokeStyle="#64748b",D.lineWidth=6,D.strokeRect(3,3,Z-6,z-6);const Y=6,lt=3,yt=(Z-24)/Y,dt=(z-20)/lt;for(let Ut=0;Ut<lt;Ut++)for(let Rt=0;Rt<Y;Rt++){const Ot=12+(Rt+.5)*yt,F=10+(Ut+.5)*dt;D.fillStyle="#fef08a",D.beginPath(),D.arc(Ot,F,13,0,Math.PI*2),D.fill(),D.fillStyle="#ffffff",D.beginPath(),D.arc(Ot,F,8,0,Math.PI*2),D.fill()}}),w=It({color:4674921}),q=It({color:1976635}),et=new me({map:C}),ht=[q,q,q,q,et,q];for(let D=0;D<4;D++){const Z=Math.PI/4+D*Math.PI/2,z=mt+36.8,Y=Math.sin(Z)*z,lt=e.centerZ+Math.cos(Z)*z,yt=-Math.sin(Z),dt=-Math.cos(Z),Ut=new Q(new oe(.7,1.35,48,8),w);Ut.position.set(Y,24,lt),At(Ut,.08,1315859),i.add(Ut);const Rt=new Q(new te(2,1,2.8),w);Rt.position.set(Y+yt*.8,48.2,lt+dt*.8),Rt.lookAt(0,48.2,e.centerZ),At(Rt,.07,1315859),i.add(Rt);const Ot=new Q(new te(11,5.4,1.2),ht);Ot.position.set(Y+yt*2.4,50.2,lt+dt*2.4),Ot.lookAt(0,0,e.centerZ),At(Ot,.09,1315859),i.add(Ot);const F=new Q(new te(1.6,1.4,2.2),w);F.position.copy(Ot.position),F.quaternion.copy(Ot.quaternion),F.translateZ(-1.4),At(F,.07,1315859),i.add(F)}const nt=(D,Z)=>{const z=new ae;z.position.set(0,0,D),z.rotation.y=Z;const Y=new me({color:988970}),lt=It({color:14870768}),yt=It({color:3359061}),dt=new Q(new te(18,8.2,.38),Y);dt.position.set(0,5.3,0),z.add(dt);const Ut=new Q(new te(18.88,.44,.46),lt);Ut.position.set(0,9.62,0),At(Ut,.05,1315859),z.add(Ut);const Rt=new Q(new te(18.88,.44,.46),lt);Rt.position.set(0,.98,0),At(Rt,.05,1315859),z.add(Rt);const Ot=new Q(new te(.44,8.2,.46),lt);Ot.position.set(-9.22,5.3,0),At(Ot,.05,1315859),z.add(Ot);const F=new Q(new te(.44,8.2,.46),lt);F.position.set(9.22,5.3,0),At(F,.05,1315859),z.add(F);for(const gt of[-7.5,0,7.5]){const $=new Q(new te(.45,9.4,.45),yt);$.position.set(gt,4.7,-.45),At($,.04,1315859),z.add($)}i.add(z)};nt(e.centerZ-e.boundaryRadius-4.8,0),nt(e.centerZ+e.boundaryRadius+4.8,Math.PI);const Lt=Nx();Lt.position.set(-.55,0,-En-2.5),i.add(Lt);const _t=Ox();return _t.position.set(-1.38,0,-En+.9),_t.rotation.y=.14,i.add(_t),{flags:Mt,clouds:c,setBowlerSide(D="right"){const Z=D==="left";Lt.position.x=Z?.55:-.55,_t.position.x=Z?1.38:-1.38,_t.rotation.y=Z?-.14:.14},update(D){for(let Z=0;Z<Mt.length;Z++){const z=Mt[Z];z.rotation.y=z.userData.baseRotY+Math.sin(D*4.2+z.userData.phase)*.18,z.rotation.z=Math.sin(D*5+z.userData.phase)*.08}c.rotation.y=D*.008,Lt.userData.body&&(Lt.userData.body.position.y=Math.sin(D*2.1)*.012,Lt.userData.body.rotation.z=Math.sin(D*.9)*.018),_t.userData.body&&(_t.userData.body.position.y=Math.sin(D*2.6+1.1)*.016,_t.userData.body.rotation.x=Math.sin(D*1.4)*.022)}}}class Bx{constructor(t){this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=512,this.ctx=this.canvas.getContext("2d"),this.tex=new cc(this.canvas),this.tex.colorSpace=Je;const e=it.field.boundaryRadius+4.2,n=Math.PI+.44,s=e+27,r=25;this.group=new ae,this.group.position.set(Math.sin(n)*s,r,it.field.centerZ+Math.cos(n)*s),this.group.lookAt(0,r,it.field.centerZ);const o=new me({map:this.tex,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=new je(22,11);this.mesh=new Q(a,o),this.mesh.position.set(0,0,.08),this.group.add(this.mesh);const c=new Q(new te(23.4,12.2,1),It({color:1976635}));c.position.set(0,0,-.5),At(c,.12,1315859),this.group.add(c);const l=It({color:3359061}),u=It({color:16096779});for(const g of[-7.5,0,7.5]){const x=new Q(new te(3.2,1.5,.95),l);x.position.set(g,6.85,-.5),At(x,.08,1315859),this.group.add(x);const m=new Q(new te(2.5,.3,1.02),u);m.position.set(g,6.85,-.5),this.group.add(m)}const d=It({color:4674921}),h=new oe(.42,.52,11,8),f=new te(.55,.55,8.5);for(const g of[-8.2,8.2]){const x=new Q(h,d);x.position.set(g,-4.5,-1.55),At(x,.08,1315859),this.group.add(x);for(const m of[3.2,-3.2]){const p=new Q(f,d);p.position.set(g,m,-5.2),At(p,.06,1315859),this.group.add(p)}}t.add(this.group),this.update(0,0,"0.0","MATCH IN PROGRESS")}update(t,e,n,s="",r=null){const o=this.ctx,a=1024,c=512;o.fillStyle="#0f172a",o.fillRect(0,0,a,c);const l=s.includes("SIX")||s.includes("6"),u=s.includes("FOUR")||s.includes("4"),d=s.includes("WICKET"),h=s.includes("VICTORY");if(l||u||d||h){o.save(),o.translate(a/2,c*.44);const g=l||h?"rgba(251, 191, 36, 0.16)":u?"rgba(16, 185, 129, 0.16)":"rgba(239, 68, 68, 0.18)";o.fillStyle=g;const x=16;for(let m=0;m<x;m+=2){const p=m/x*Math.PI*2,S=(m+1)/x*Math.PI*2;o.beginPath(),o.moveTo(0,0),o.lineTo(Math.cos(p)*650,Math.sin(p)*650),o.lineTo(Math.cos(S)*650,Math.sin(S)*650),o.closePath(),o.fill()}o.restore()}o.fillStyle="rgba(56, 189, 248, 0.08)";for(let g=24;g<c;g+=28)for(let x=24;x<a;x+=28)o.beginPath(),o.arc(x,g,4,0,Math.PI*2),o.fill();if(o.strokeStyle=l||h?"#fbbf24":u?"#10b981":d?"#ef4444":"#38bdf8",o.lineWidth=12,o.strokeRect(6,6,a-12,c-12),o.fillStyle="#1e3a8a",o.fillRect(16,16,a-32,84),o.strokeStyle="#fbbf24",o.lineWidth=4,o.strokeRect(16,16,a-32,84),o.fillStyle="#ffffff",o.font="900 42px system-ui, sans-serif",o.textAlign="center",o.fillText("⚡ ARCADE STADIUM SCOREBOARD ⚡",a/2,72),o.fillStyle="#ffffff",o.font="900 138px monospace",o.fillText(`${t}/${e}`,a/2,230),o.fillStyle="#fbbf24",o.font="900 40px system-ui, sans-serif",r&&r.target>0?(o.textAlign="left",o.fillText(`OVERS ${n}/${r.totalOvers}`,48,314),o.textAlign="right",o.fillStyle="#38bdf8",o.fillText(`TARGET ${r.target}`,a-48,314),o.textAlign="center"):o.fillText(`OVERS ${n}`,a/2,314),o.fillStyle=l||h?"#d97706":u?"#059669":d?"#dc2626":"#1e293b",o.fillRect(16,356,a-32,136),o.strokeStyle="#141413",o.lineWidth=8,o.strokeRect(16,356,a-32,136),o.fillStyle="#ffffff",!!(s&&s!=="MATCH IN PROGRESS")||!r||r.target<=0)o.font="900 46px system-ui, sans-serif",o.fillText(s||"✦ TIMING IS KEY · DRIVE HARD ✦",a/2,440);else{o.font="900 42px system-ui, sans-serif";const g=Number(r.reqRR||0).toFixed(1);o.fillText(`NEED ${r.runsNeeded} OFF ${r.ballsRemaining}B · RRR ${g}`,a/2,438)}this.tex.needsUpdate=!0}}class Jh{constructor(t,e){this.group=new ae,this.z=e;const n=it.stumps,s=Ae(128,512,(u,d,h)=>{u.fillStyle="#fbbf24",u.fillRect(0,0,d,h),u.strokeStyle="#d97706",u.lineWidth=2.5;for(let f=1;f<=5;f++){const g=f/6*d;u.beginPath(),u.moveTo(g,0),u.bezierCurveTo(g+4,h*.35,g-4,h*.7,g+2,h),u.stroke()}u.fillStyle="#1e293b",u.fillRect(0,h*.86,d,h*.14),u.fillStyle="#f8fafc",u.fillRect(0,h*.44,d,h*.08),u.fillStyle="#141413",u.fillRect(0,h*.44,d,4),u.fillRect(0,h*.52-4,d,4)});this.mat=It({map:s,color:16777215});const r=new oe(n.radius,n.radius*1.03,n.height,14);r.translate(0,n.height/2,0),this.holeMat=new me({color:2760210,transparent:!0,opacity:.75,depthWrite:!1});const o=new Ln(n.radius*1.65,14);o.rotateX(-Math.PI/2),this.stumps=[],this.outlines=[];for(let u=-1;u<=1;u++){const d=new Q(o,this.holeMat);d.position.set(u*n.spacing,.007,e),this.group.add(d);const h=new Q(r,this.mat);h.position.set(u*n.spacing,0,e),h.castShadow=!0,h.receiveShadow=!0;const f=At(h,.0042,1315859);this.group.add(h),this.stumps.push(h),this.outlines.push(f)}const a=n.spacing*.49,c=[new ft(.004,-a),new ft(.0055,-a*.62),new ft(.0115,-a*.42),new ft(.013,0),new ft(.0115,a*.42),new ft(.0055,a*.62),new ft(.004,a)],l=new eo(c,12);l.rotateZ(Math.PI/2),this.bailMat=It({color:16096779,emissive:0}),this.bails=[];for(const u of[-.5,.5]){const d=new Q(l,this.bailMat);d.position.set(u*n.spacing,n.height+.012,e),d.castShadow=!0;const h=At(d,.0032,1315859);this.group.add(d),this.bails.push(d),this.outlines.push(h)}t.add(this.group),this.reset()}setOpacity(t){const e=Math.max(0,Math.min(1,t)),n=e<.999;this.mat.transparent!==n&&(this.mat.transparent=n,this.mat.needsUpdate=!0),this.mat.opacity=e,this.mat.depthWrite=!n,this.bailMat.transparent!==n&&(this.bailMat.transparent=n,this.bailMat.needsUpdate=!0),this.bailMat.opacity=e,this.bailMat.depthWrite=!n,this.holeMat.opacity=e*.75,this.outlines.forEach(s=>{s.material.uniforms.uOpacity.value=e,s.material.transparent=n,s.material.depthWrite=!n})}reset(){const t=it.stumps;this.anim=null,this.bailMat.color.setHex(16096779),this.bailMat.emissive.setHex(0),this.stumps.forEach((e,n)=>{e.position.set((n-1)*t.spacing,0,this.z),e.rotation.set(0,0,0)}),this.bails.forEach((e,n)=>{e.position.set((n-.5)*t.spacing,t.height+.012,this.z),e.rotation.set(0,0,0)})}shatter(t,e){this.setOpacity(1),this.bailMat.color.setHex(16722517),this.bailMat.emissive.setHex(16719426);const n=e.clone().multiplyScalar(.28);this.anim={t:0,stump:this.stumps[t+1],tiltX:Math.max(.65,Math.min(1.3,n.z*.35)),tiltZ:-n.x*.45,bails:this.bails.map(()=>new R((Math.random()-.5)*3.5+n.x,2.8+Math.random()*2.2,2.2+Math.random()*2.2+n.z)),spins:this.bails.map(()=>new R(Math.random()*22,Math.random()*22,Math.random()*22))}}update(t){const e=this.anim;if(!e||e.t>3)return;e.t+=t;const n=Math.min(1,e.t/.18);e.stump.rotation.x=e.tiltX*n,e.stump.rotation.z=e.tiltZ*n,this.bails.forEach((s,r)=>{const o=e.bails[r];s.position.y>.01?(o.y-=9.81*t,s.position.addScaledVector(o,t),s.rotation.x+=e.spins[r].x*t,s.rotation.y+=e.spins[r].y*t):(s.position.y=.01,o.set(0,0,0))})}}function kx(){const i=it.bat,t=new ae,e=Ae(512,1024,(_,v,T)=>{const N=_.createLinearGradient(0,0,v,0);N.addColorStop(0,"#facc15"),N.addColorStop(.18,"#fef08a"),N.addColorStop(.5,"#fef9c3"),N.addColorStop(.82,"#fef08a"),N.addColorStop(1,"#facc15"),_.fillStyle=N,_.fillRect(0,0,v,T),_.strokeStyle="rgba(202, 138, 4, 0.55)",_.lineWidth=4;const O=8;for(let V=1;V<=O;V++){const W=V/(O+1)*v;_.beginPath(),_.moveTo(W,0),_.bezierCurveTo(W+8,T*.35,W-8,T*.7,W+3,T),_.stroke()}_.fillStyle="#b45309",_.beginPath(),_.moveTo(v*.25,0),_.lineTo(v*.5,T*.14),_.lineTo(v*.75,0),_.closePath(),_.fill(),_.strokeStyle="#141413",_.lineWidth=4,_.stroke(),_.fillStyle="rgba(20, 20, 19, 0.14)",_.fillRect(0,0,14,T),_.fillRect(v-14,0,14,T)}),n=It({map:e,color:16777215}),s=It({color:16347926}),r=i.bladeWidth/2,o=new kh,a=i.bladeFace,c=i.bladeBack;o.moveTo(-r,a),o.lineTo(r,a),o.lineTo(r,a-.015),o.quadraticCurveTo(r*.58,c,0,c-.008),o.quadraticCurveTo(-r*.58,c,-r,a-.015),o.lineTo(-r,a);const l=new uc(o,{depth:i.bladeLength,bevelEnabled:!0,bevelThickness:.004,bevelSize:.003,bevelSegments:2,curveSegments:8});l.rotateX(Math.PI/2),l.translate(0,i.bladeLength,0);const u=l.attributes.position,d=l.attributes.uv;for(let _=0;_<u.count;_++){const v=u.getX(_),T=u.getY(_),N=Math.max(0,Math.min(1,(v+r)/i.bladeWidth)),O=Math.max(0,Math.min(1,T/i.bladeLength));d.setXY(_,N,O)}d.needsUpdate=!0;const h=new Q(l,n);h.castShadow=!0,h.receiveShadow=!0,At(h,.0055,1315859),t.add(h);const f=Ae(256,256,(_,v,T)=>{_.clearRect(0,0,v,T),_.fillStyle="rgba(180, 83, 9, 0.14)",_.beginPath(),_.arc(v/2,T/2,v*.28,0,Math.PI*2),_.fill(),_.strokeStyle="#d97706",_.lineWidth=10,_.beginPath(),_.moveTo(v*.18,T*.56),_.lineTo(v*.5,T*.36),_.lineTo(v*.82,T*.56),_.stroke(),_.strokeStyle="#141413",_.lineWidth=4,_.stroke()}),g=new Q(new je(i.bladeWidth*.84,.1),new me({map:f,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));g.position.set(0,i.sweetSpotFromToe,a+.0055),t.add(g);const x=Ae(256,128,(_,v,T)=>{_.fillStyle="#1e3a8a",_.fillRect(8,12,v-16,T-24),_.strokeStyle="#141413",_.lineWidth=6,_.strokeRect(8,12,v-16,T-24),_.fillStyle="#fbbf24",_.font="900 38px system-ui, sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("⚡ TITAN ⚡",v/2,T/2)}),m=new Q(new je(i.bladeWidth*.68,.044),new me({map:x,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));m.position.set(0,i.bladeLength-.06,a+.0055),t.add(m);const p=Ae(256,512,(_,v,T)=>{_.fillStyle="#1e3a8a",_.fillRect(0,0,v,T),_.fillStyle="#f97316",_.beginPath(),_.moveTo(0,T*.18),_.lineTo(v,T*.05),_.lineTo(v,T*.25),_.lineTo(0,T*.38),_.closePath(),_.fill(),_.strokeStyle="#f97316",_.lineWidth=10,_.strokeRect(8,8,v-16,T-16),_.fillStyle="#fbbf24",_.font="900 44px system-ui, sans-serif",_.textAlign="center",_.fillText("⚡ TITAN ⚡",v/2,T*.32),_.fillStyle="#ffffff",_.font="900 28px system-ui, sans-serif",_.fillText("PRO EDITION",v/2,T*.48),_.fillStyle="#38bdf8",_.font="900 22px system-ui, sans-serif",_.fillText("240HZ PHYSICS",v/2,T*.68)}),S=new Q(new je(i.bladeWidth*.72,.24),new me({map:p,side:Me,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));S.position.set(0,i.bladeLength*.7,c-.0125),S.rotation.y=Math.PI,t.add(S);const y=(a+c)/2,M=new Q(new oe(i.handleRadius*1.38,i.handleRadius*1.52,.026,16),s);M.position.set(0,i.bladeLength+.01,y),At(M,.0035,1315859),t.add(M);const L=i.totalLength-i.bladeLength,A=Ae(128,512,(_,v,T)=>{_.fillStyle="#f8fafc",_.fillRect(0,0,v,T);for(let N=0;N<T;N+=18)_.fillStyle="#1d4ed8",_.fillRect(0,N,v,7),_.fillStyle="#f97316",_.fillRect(0,N+7,v,4),_.fillStyle="#141413",_.fillRect(0,N+11,v,2)});A.wrapS=A.wrapT=oi,A.repeat.set(1,3);const b=new Q(new oe(i.handleRadius,i.handleRadius*1.08,L,16),It({map:A}));b.position.set(0,i.bladeLength+L/2,y),b.castShadow=!0,At(b,.0035,1315859),t.add(b);const P=new Q(new be(i.handleRadius*1.05,12,8),It({color:16347926}));return P.position.set(0,i.totalLength,y),At(P,.003,1315859),t.add(P),t}class Hx{constructor(t){this.group=new ae;const e=Ae(128,128,(r,o,a)=>{const c=o/2,l=a/2;r.clearRect(0,0,o,a),r.strokeStyle="#141413",r.lineWidth=14,r.beginPath(),r.arc(c,l,46,0,Math.PI*2),r.stroke(),r.strokeStyle="#ffffff",r.lineWidth=8;for(let u=0;u<4;u++){const d=u*(Math.PI/2)+.18,h=(u+1)*(Math.PI/2)-.18;r.beginPath(),r.arc(c,l,46,d,h),r.stroke()}});this.ringMat=new me({map:e,color:1096065,side:Me,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),this.dotMat=new me({color:16777215,side:Me,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),this.pulseMat=new me({color:16777215,side:Me,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1});const n=new Q(new je(.52,.52),this.ringMat);n.rotation.x=-Math.PI/2,n.renderOrder=10;const s=new Q(new Ln(.065,24),this.dotMat);s.rotation.x=-Math.PI/2,s.renderOrder=10,this.pulseRing=new Q(new io(.28,.33,32),this.pulseMat),this.pulseRing.rotation.x=-Math.PI/2,this.pulseRing.renderOrder=10,this.group.add(n,s,this.pulseRing),this.group.renderOrder=10,this.group.position.y=.024,this.active=!1,this.fading=!1,this.alpha=0,this.timer=0,t.add(this.group)}show(t,e){const n=this.active&&!this.fading;this.group.position.set(t,.024,it.stumps.z-e);const s=e<1.9?58879:e<4.5?1096065:e<7.8?16096779:15680580;this.ringMat.color.setHex(s),this.pulseMat.color.setHex(s),this.active=!0,this.fading=!1,this.alpha=.95,n||(this.timer=0)}fadeOut(){this.fading=!0}hide(){this.active=!1,this.alpha=0,this.ringMat.opacity=0,this.dotMat.opacity=0,this.pulseMat.opacity=0}update(t,e){if(!this.active)return;this.timer+=t,this.fading&&(this.alpha=Math.max(0,this.alpha-t*2.8),this.alpha<=.01&&this.hide());const n=1+.1*Math.sin(e*14);this.group.scale.setScalar(n),this.group.rotation.y=e*.9,this.ringMat.opacity=this.alpha,this.dotMat.opacity=this.alpha*.85;const s=1+Math.max(0,1-this.timer*2.2%1)*1.3;this.pulseRing.scale.setScalar(s),this.pulseMat.opacity=this.alpha*.6}}function Vx(){const i=Ae(1024,512,(o,a,c)=>{const l=o.createLinearGradient(0,0,0,c);l.addColorStop(0,"#ffffff"),l.addColorStop(.5,"#f8fafc"),l.addColorStop(1,"#e2e8f0"),o.fillStyle=l,o.fillRect(0,0,a,c);const u=c/2;o.strokeStyle="rgba(15, 81, 50, 0.35)",o.lineWidth=3,o.beginPath(),o.moveTo(a*.25,0),o.lineTo(a*.25,c),o.stroke(),o.beginPath(),o.moveTo(a*.75,0),o.lineTo(a*.75,c),o.stroke(),o.fillStyle="#065f46",o.fillRect(0,u-14,a,28),o.strokeStyle="#141413",o.lineWidth=3,o.beginPath(),o.moveTo(0,u-14),o.lineTo(a,u-14),o.stroke(),o.beginPath(),o.moveTo(0,u+14),o.lineTo(a,u+14),o.stroke(),o.strokeStyle="#141413",o.lineWidth=5,o.beginPath(),o.moveTo(0,u),o.lineTo(a,u),o.stroke();const d=48;for(let h=0;h<d;h++){const f=h/d*a;o.strokeStyle="#ffffff",o.lineWidth=4,o.beginPath(),o.moveTo(f,u-10),o.lineTo(f+8,u-3),o.stroke(),o.beginPath(),o.moveTo(f,u+10),o.lineTo(f+8,u+3),o.stroke(),o.strokeStyle="#fde047",o.lineWidth=2,o.beginPath(),o.moveTo(f+5,u-10),o.lineTo(f+12,u-3),o.stroke(),o.beginPath(),o.moveTo(f+5,u+10),o.lineTo(f+12,u+3),o.stroke()}o.fillStyle="#f59e0b",o.beginPath(),o.arc(a*.25,c*.26,22,0,Math.PI*2),o.fill(),o.strokeStyle="#141413",o.lineWidth=4,o.stroke()}),t=new Q(new be(it.ball.radius,28,20),It({map:i,color:16777215,emissive:3684408}));t.castShadow=!0,At(t,.0028,1315859);const e=new ae,n=new Q(new Ln(it.ball.radius*1.55,18),new me({color:1315859,transparent:!0,opacity:.55,depthWrite:!1}));n.rotation.x=-Math.PI/2;const s=Ae(128,128,(o,a,c)=>{const l=a/2,u=c/2;o.clearRect(0,0,a,c),o.strokeStyle="#ffffff",o.lineWidth=10;for(let d=0;d<4;d++)o.beginPath(),o.arc(l,u,48,d*Math.PI/2+.25,(d+1)*Math.PI/2-.25),o.stroke()}),r=new Q(new je(.56,.56),new me({map:s,color:16096779,side:Me,transparent:!0,opacity:0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.005,e.add(n,r),e.userData.disc=n,e.userData.ring=r,{mesh:t,shadow:e}}class Gx{constructor(t,e=90){this.n=e,this.count=0,this.points=Array.from({length:e},()=>new R),this.positions=new Float32Array(e*3),this.geo=new we,this.geo.setAttribute("position",new Ee(this.positions,3)),this.mat=new ac({color:16096779,transparent:!0,opacity:.9,depthWrite:!1}),this.line=new Fh(this.geo,this.mat),this.line.frustumCulled=!1,this.line.renderOrder=8,t.add(this.line),this.ribbonMat=new fn({side:Me,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new $t(16096779)},uOpacity:{value:.85}},vertexShader:`
        attribute float aFade;
        varying float vFade;
        void main() {
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vFade;
        void main() {
          vec3 headTint = mix(uColor, vec3(1.0), smoothstep(0.65, 1.0, vFade) * 0.55);
          gl_FragColor = vec4(headTint, vFade * uOpacity);
        }
      `});const n=[];for(let r=0;r<e-1;r++){const o=2*r,a=2*r+1,c=2*(r+1),l=2*(r+1)+1;n.push(o,a,c,a,l,c)}const s=()=>{const r=new Float32Array(e*2*3),o=new Float32Array(e*2),a=new we;a.setAttribute("position",new Ee(r,3)),a.setAttribute("aFade",new Ee(o,1)),a.setIndex(n);const c=new Q(a,this.ribbonMat);return c.frustumCulled=!1,c.renderOrder=8,t.add(c),{mesh:c,geo:a,posArr:r,fadeArr:o}};this.ribbonA=s(),this.ribbonB=s(),this._tangent=new R,this._up=new R(0,1,0),this._altUp=new R(1,0,0),this._u=new R,this._v=new R,this.clear()}clear(){this.count=0,this.geo.setDrawRange(0,0),this.ribbonA.geo.setDrawRange(0,0),this.ribbonB.geo.setDrawRange(0,0),this.setColor(16096779,.9)}setColor(t,e=.9){this.mat.color.setHex(t),this.mat.opacity=e,this.ribbonMat.uniforms.uColor.value.setHex(t),this.ribbonMat.uniforms.uOpacity.value=e*.72}push(t){if(this.count>0&&t.distanceToSquared(this.points[0])<1e-5)return;this.count<this.n&&this.count++;for(let l=this.count-1;l>0;l--)this.points[l].copy(this.points[l-1]);if(this.points[0].copy(t),this.positions.copyWithin(3,0,(this.n-1)*3),this.positions[0]=t.x,this.positions[1]=t.y,this.positions[2]=t.z,this.geo.attributes.position.needsUpdate=!0,this.geo.setDrawRange(0,this.count),this.count<2){this.ribbonA.geo.setDrawRange(0,0),this.ribbonB.geo.setDrawRange(0,0);return}const e=this.ribbonA.posArr,n=this.ribbonB.posArr,s=this.ribbonA.fadeArr,r=this.ribbonB.fadeArr,o=Math.max(1,this.count-1),a=it.ball.radius*.95;for(let l=0;l<this.count;l++){const u=this.points[l],d=this.points[Math.max(0,l-1)],h=this.points[Math.min(this.count-1,l+1)];this._tangent.subVectors(d,h),this._tangent.lengthSq()<1e-8?this._tangent.set(0,0,-1):this._tangent.normalize();const f=Math.abs(this._tangent.y)>.92?this._altUp:this._up;this._u.crossVectors(this._tangent,f).normalize(),this._v.crossVectors(this._tangent,this._u).normalize();const g=1-l/o,x=a*Math.pow(g,1.35),m=l*6;e[m]=u.x+this._u.x*x,e[m+1]=u.y+this._u.y*x,e[m+2]=u.z+this._u.z*x,e[m+3]=u.x-this._u.x*x,e[m+4]=u.y-this._u.y*x,e[m+5]=u.z-this._u.z*x,n[m]=u.x+this._v.x*x,n[m+1]=u.y+this._v.y*x,n[m+2]=u.z+this._v.z*x,n[m+3]=u.x-this._v.x*x,n[m+4]=u.y-this._v.y*x,n[m+5]=u.z-this._v.z*x;const p=l*2;s[p]=s[p+1]=g,r[p]=r[p+1]=g}const c=(this.count-1)*6;this.ribbonA.geo.attributes.position.needsUpdate=!0,this.ribbonA.geo.attributes.aFade.needsUpdate=!0,this.ribbonA.geo.setDrawRange(0,c),this.ribbonB.geo.attributes.position.needsUpdate=!0,this.ribbonB.geo.attributes.aFade.needsUpdate=!0,this.ribbonB.geo.setDrawRange(0,c)}}const ro=[{name:"Canary Gold",shirtCss:"#facc15",shirtHex:16436245,trimHex:988970,trimCss:"#0f172a",accentCss:"#059669",accentHex:366185,pantsHex:1976635,numFill:"#0f172a",numStroke:"#ffffff"},{name:"Crimson Flame",shirtCss:"#e11d48",shirtHex:14753096,trimHex:988970,trimCss:"#0f172a",accentCss:"#fbbf24",accentHex:16498468,pantsHex:1579035,numFill:"#ffffff",numStroke:"#0f172a"},{name:"Royal Violet",shirtCss:"#9333ea",shirtHex:9647082,trimHex:988970,trimCss:"#0f172a",accentCss:"#f472b6",accentHex:16020150,pantsHex:1973067,numFill:"#fef08a",numStroke:"#0f172a"},{name:"Electric Cyan",shirtCss:"#06b6d4",shirtHex:440020,trimHex:988970,trimCss:"#0f172a",accentCss:"#fde047",accentHex:16638023,pantsHex:988970,numFill:"#0f172a",numStroke:"#ffffff"},{name:"Blaze Coral",shirtCss:"#ea580c",shirtHex:15357964,trimHex:1579035,trimCss:"#18181b",accentCss:"#fef08a",accentHex:16707722,pantsHex:1841431,numFill:"#ffffff",numStroke:"#18181b"}];function Wx(i=-1,t=Math.random){const e=ro.length;if(i<0||i>=e)return Math.floor(t()*e);const n=1+Math.floor(t()*(e-1));return(i+n)%e}function Yl(i){return Ae(512,512,(t,e,n)=>{t.fillStyle=i.shirtCss,t.fillRect(0,0,e,n),t.fillStyle=i.trimCss,t.fillRect(0,0,e*.04,n),t.fillRect(e*.96,0,e*.04,n),t.fillRect(e*.46,0,e*.08,n);const s=e*.75;t.fillStyle=i.trimCss,t.beginPath(),t.moveTo(s-68,n*.25),t.lineTo(s,n*.44),t.lineTo(s+68,n*.25),t.lineTo(s+68,n*.35),t.lineTo(s,n*.54),t.lineTo(s-68,n*.35),t.closePath(),t.fill(),t.fillStyle=i.accentCss,t.beginPath(),t.moveTo(s-54,n*.19),t.lineTo(s,n*.35),t.lineTo(s+54,n*.19),t.lineTo(s+54,n*.25),t.lineTo(s,n*.41),t.lineTo(s-54,n*.25),t.closePath(),t.fill(),t.fillStyle=i.trimCss,t.fillRect(0,0,e,n*.1),t.font="900 96px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.lineWidth=6,t.strokeStyle=i.numStroke,t.strokeText("99",e*.25,n*.44),t.fillStyle=i.numFill,t.fillText("99",e*.25,n*.44)})}class Xx{constructor(t){const e=Jr,n=ro[0],s=Yl(n),r=It({map:s,color:16777215}),o=It({color:n.shirtHex}),a=It({color:n.pantsHex}),c=It({color:n.trimHex}),l=It({color:14254651}),u=It({color:16317180}),d=It({color:n.shirtHex}),h=It({color:988970}),f=It({color:440020,emissive:537412}),g=It({color:n.shirtHex}),x=It({color:n.trimHex}),m=It({color:n.trimHex});this._kitMats={shirt:r,sleeveMat:o,pants:a,beltMat:c,shoeStripeMat:d,capMat:g,capPeakMat:x,wristbandMat:m},this.root=new ae,this.groundShadow=new Q(new Ln(.36,18),new me({color:1315859,transparent:!0,opacity:.44,depthWrite:!1})),this.groundShadow.rotation.x=-Math.PI/2,this.groundShadow.position.y=.012,this.root.add(this.groundShadow),this.hips=new ae,this.hips.position.y=e.hipHeight,this.root.add(this.hips);const p=new Q(new oe(.165,.155,.14,12),a);p.scale.set(1.12,1,.8),p.castShadow=!0,At(p,.012,1315859),this.hips.add(p);const S=new Q(new oe(.17,.17,.04,12),c);S.position.y=.055,S.scale.set(1.13,1,.81),this.hips.add(S),this.torso=new ae,this.hips.add(this.torso);const y=new Oe(.18,e.torsoLength-.18,6,16);y.rotateY(Math.PI/2);const M=new Q(y,r);M.position.y=e.torsoLength/2,M.scale.set(1.16,1,.8),M.castShadow=!0,At(M,.014,1315859),this.torso.add(M);const L=new Q(new oe(.055,.065,.1,10),l);L.position.y=e.torsoLength+.06,At(L,.008,1315859),this.torso.add(L);const A=new Q(new be(.12,16,12),l);A.position.y=e.torsoLength+.19,A.castShadow=!0,At(A,.012,1315859),this.torso.add(A);const b=new Q(new te(.2,.055,.05),c);b.position.set(0,A.position.y+.015,.102),At(b,.004,1315859),this.torso.add(b);const P=new Q(new te(.18,.04,.054),f);P.position.set(0,A.position.y+.015,.105),this.torso.add(P);const _=new Q(new be(.126,14,10,0,Math.PI*2,0,Math.PI*.54),g);_.position.y=A.position.y+.02,At(_,.008,1315859),this.torso.add(_);const v=new Q(new oe(.135,.14,.014,12,1,!1,-Math.PI*.36,Math.PI*.72),x);v.position.set(0,A.position.y+.035,.085),v.rotation.x=.16,At(v,.005,1315859),this.torso.add(v);const T=V=>{const W=new ae;W.position.set(V,e.torsoLength,0);const X=new Q(new Oe(.058,.18,4,10),o);X.position.y=-.11,X.castShadow=!0,At(X,.011,1315859),W.add(X);const tt=new Q(new Oe(.042,e.armLength-.3,4,10),l);tt.position.y=-.7*.6,tt.castShadow=!0,At(tt,.01,1315859),W.add(tt);const G=new Q(new oe(.045,.045,.055,10),m);G.position.y=-.7+.085,At(G,.005,1315859),W.add(G);const ot=new Q(new be(.048,10,8),l);return ot.position.y=-.7,ot.castShadow=!0,At(ot,.008,1315859),W.add(ot),this.torso.add(W),W};this.armR=T(-.2),this.armL=T(e.shoulderHalf);const N=(V,W,X)=>{const tt=new ae,G=new Q(new Oe(W,V-2*W,4,10),X);return G.position.y=-V/2,G.castShadow=!0,At(G,.012,1315859),tt.add(G),tt},O=V=>{const W=N(e.legLength/2,.076,a);W.position.set(V*.105,0,0);const X=N(e.legLength/2,.064,a);X.position.y=-.96/2,W.add(X);const tt=new Q(new be(.068,10,8),a);tt.position.y=0,At(tt,.008,1315859),X.add(tt);const G=new Q(new te(.115,.075,.25),u);G.position.set(0,-.96/2+.025,.06),G.castShadow=!0,At(G,.01,1315859),X.add(G);const ot=new Q(new te(.12,.028,.18),d);ot.position.set(0,-.96/2+.03,.05),X.add(ot);const pt=new Q(new te(.12,.022,.26),h);return pt.position.set(0,-.96/2-.015,.06),X.add(pt),this.hips.add(W),{thigh:W,shin:X}};this.legL=O(1),this.legR=O(-1),t.add(this.root)}applyKit(t){if(!t||!this._kitMats)return;const e=this._kitMats,n=e.shirt.map;e.shirt.map=Yl(t),e.shirt.needsUpdate=!0,n&&n.dispose(),e.sleeveMat.color.setHex(t.shirtHex),e.pants.color.setHex(t.pantsHex),e.beltMat.color.setHex(t.trimHex),e.shoeStripeMat.color.setHex(t.shirtHex),e.capMat.color.setHex(t.shirtHex),e.capPeakMat.color.setHex(t.trimHex),e.wristbandMat.color.setHex(t.trimHex)}apply(t){this.root.position.set(t.x,t.y,t.z),this.groundShadow.position.y=.012-t.y,this.torso.rotation.x=t.lean,this.armR.rotation.x=t.armR,this.armL.rotation.x=t.armL,this.legL.thigh.rotation.x=t.legL,this.legR.thigh.rotation.x=t.legR,this.legL.shin.rotation.x=t.kneeL,this.legR.shin.rotation.x=t.kneeR}}class qx{constructor(t,e=240){this.max=e;const n=Ae(64,64,(a,c,l)=>{const u=c/2,d=l/2;a.beginPath(),a.moveTo(u,3),a.quadraticCurveTo(u,d,c-3,d),a.quadraticCurveTo(u,d,u,l-3),a.quadraticCurveTo(u,d,3,d),a.quadraticCurveTo(u,d,u,3),a.closePath(),a.fillStyle="#ffffff",a.fill(),a.strokeStyle="#141413",a.lineWidth=3,a.stroke()}),s=new je(.068,.068),r=new me({map:n,side:Me,transparent:!0,depthWrite:!1});this.mesh=new za(s,r,e),this.mesh.instanceMatrix.setUsage(Ku),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,t.add(this.mesh),this.particles=[];for(let a=0;a<e;a++)this.particles.push({active:!1,pos:new R,vel:new R,rot:new R,rotV:new R,color:new $t,scale:1,life:0,maxLife:1,gravity:9.8});this.shockwaves=[];const o=new io(.08,.12,28);for(let a=0;a<6;a++){const c=new me({color:16707722,side:Me,transparent:!0,opacity:0,depthWrite:!1}),l=new Q(o,c);l.visible=!1,l.renderOrder=7,t.add(l),this.shockwaves.push({mesh:l,mat:c,active:!1,life:0,maxLife:.28,maxScale:4.5})}this._m=new se,this._q=new qe,this._e=new Sn,this._s=new R,this._zAxis=new R(0,0,1),this._nVec=new R,this._zero=new se().makeScale(0,0,0);for(let a=0;a<e;a++)this.mesh.setMatrixAt(a,this._zero);this.mesh.instanceMatrix.needsUpdate=!0}spawnShockwave(t,e,n,s=4.5,r=.28){let o=this.shockwaves.find(a=>!a.active)||this.shockwaves[0];o.active=!0,o.life=0,o.maxLife=r,o.maxScale=s,o.mat.color.setHex(n),o.mat.opacity=.92,o.mesh.position.copy(t),this._nVec.copy(e).normalize(),o.mesh.quaternion.setFromUnitVectors(this._zAxis,this._nVec),o.mesh.scale.setScalar(.5),o.mesh.visible=!0}spawn(t,e,n,s,r,o,a,c,l,u=9.8){let d=null;for(let h=0;h<this.max;h++)if(!this.particles[h].active){d=this.particles[h];break}d||(d=this.particles[Math.floor(Math.random()*this.max)]),d.active=!0,d.pos.set(t,e,n),d.vel.set(s,r,o),d.rot.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),d.rotV.set((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*14),d.color.setHex(a),d.scale=c,d.life=0,d.maxLife=l,d.gravity=u}pitchDust(t){for(let e=0;e<12;e++){const n=Math.random()*Math.PI*2,s=.5+Math.random()*1.4,r=.6+Math.random()*1.5,o=Math.random()>.4?13935475:13281652;this.spawn(t.x+(Math.random()-.5)*.08,.02,t.z+(Math.random()-.5)*.08,Math.cos(n)*s,r,Math.sin(n)*s,o,.045+Math.random()*.03,.35+Math.random()*.25,3.5)}}pitchBounceRipple(t,e=16707722){this._nVec.set(0,1,0),this._m,this.spawnShockwave(new R(t.x,.026,t.z),this._nVec,e,2.2,.26)}stumpsBurst(t){const e=new R(0,0,1),n=new R(0,1,0);this.spawnShockwave(t,e,16722517,5.2,.3),this.spawnShockwave(new R(t.x,.04,t.z),n,16707722,4,.32);const s=[16722517,16707722,16096779,16777215];for(let r=0;r<32;r++){const o=Math.random()*Math.PI*2,a=2+Math.random()*5.2,c=1.6+Math.random()*4.5,l=s[Math.floor(Math.random()*s.length)];this.spawn(t.x+(Math.random()-.5)*.14,Math.max(.15,t.y),t.z,Math.cos(o)*a,c,Math.sin(o)*a+1.2,l,.052+Math.random()*.036,.38+Math.random()*.28,6.5)}}catchBurst(t){const e=new R(0,0,1),n=new R(0,1,0);this.spawnShockwave(t,e,16722517,4.8,.3),this.spawnShockwave(new R(t.x,.04,t.z),n,16707722,3.6,.32);const s=[16722517,16707722,16096779,16777215];for(let r=0;r<28;r++){const o=Math.random()*Math.PI*2,a=1.8+Math.random()*4.8,c=1.4+Math.random()*4,l=s[Math.floor(Math.random()*s.length)];this.spawn(t.x+(Math.random()-.5)*.16,Math.max(.2,t.y),t.z+(Math.random()-.5)*.16,Math.cos(o)*a,c,Math.sin(o)*a,l,.055+Math.random()*.036,.38+Math.random()*.26,6.2)}}ballFlightEmber(t,e){const n=[16707722,16096779,3718648,16777215],s=n[Math.floor(Math.random()*n.length)];this.spawn(t.x+(Math.random()-.5)*.05,t.y+(Math.random()-.5)*.05,t.z+(Math.random()-.5)*.05,-e.x*.06+(Math.random()-.5)*.9,-e.y*.06+.4+Math.random()*.8,-e.z*.06+(Math.random()-.5)*.9,s,.048+Math.random()*.025,.28+Math.random()*.16,2.2)}boundaryPyro(t=!1){const e=it.field,n=e.boundaryRadius+2.5,s=[Math.PI*.78,Math.PI*.92,Math.PI*1.08,Math.PI*1.22],r=t?[16707722,16096779,16777215,3718648,14362487]:[1096065,3462041,16707722,16777215,3718648],o=t?18:12;for(const a of s){const c=Math.sin(a)*n,l=e.centerZ+Math.cos(a)*n;for(let u=0;u<o;u++){const d=2+Math.random()*4.5,h=Math.random()*Math.PI*2,f=t?11+Math.random()*9:8+Math.random()*6,g=r[Math.floor(Math.random()*r.length)];this.spawn(c+(Math.random()-.5)*1,.6,l+(Math.random()-.5)*1,Math.cos(h)*d,f,Math.sin(h)*d,g,.18+Math.random()*.12,1.4+Math.random()*.8,6.2)}}}impactSparks(t,e){this.spawnShockwave(t,e,3718648,3.2,.22);for(let n=0;n<18;n++){const s=2.5+Math.random()*4.8,r=e.clone().add(new R((Math.random()-.5)*1.2,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2)).normalize(),o=Math.random()>.3?16096779:14427686;this.spawn(t.x,t.y,t.z,r.x*s,r.y*s,r.z*s,o,.038+Math.random()*.03,.26+Math.random()*.18,5.5)}}sweetSpotBurst(t,e){this.spawnShockwave(t,e,16707722,5.4,.28);for(let n=0;n<36;n++){const s=3.5+Math.random()*7.5,r=e.clone().add(new R((Math.random()-.5)*1.8,(Math.random()-.5)*1.8,(Math.random()-.5)*1.8)).normalize(),o=[16096779,3718648,14427686,16777215,366185],a=o[Math.floor(Math.random()*o.length)];this.spawn(t.x,t.y,t.z,r.x*s,r.y*s,r.z*s,a,.058+Math.random()*.045,.42+Math.random()*.25,4.5)}}boundaryFirework(t){const e=[16096779,366185,165063,14427686,16777215,14362487];for(let n=0;n<56;n++){const s=Math.random()*Math.PI*2,r=.4+Math.random()*1.5,o=4.5+Math.random()*9,a=e[Math.floor(Math.random()*e.length)];this.spawn(t.x,Math.max(.5,t.y),t.z,Math.cos(s)*o,r*o,Math.sin(s)*o,a,.08+Math.random()*.05,1.8+Math.random()*.9,3.8)}}confetti(t){const e=[16096779,366185,165063,14427686,16777215,14362487];for(let n=0;n<62;n++){const s=Math.random()*Math.PI*2,r=2+Math.random()*8,o=4.8+Math.random()*6.8,a=e[Math.floor(Math.random()*e.length)];this.spawn(t.x+(Math.random()-.5)*1.8,t.y+.5,t.z+(Math.random()-.5)*1.8,Math.cos(s)*r,o,Math.sin(s)*r,a,.068+Math.random()*.045,2.5+Math.random()*1.2,2.8)}}update(t){for(let e=0;e<this.max;e++){const n=this.particles[e];if(!n.active){this.mesh.setMatrixAt(e,this._zero);continue}if(n.life+=t,n.life>=n.maxLife){n.active=!1,this.mesh.setMatrixAt(e,this._zero);continue}n.vel.y-=n.gravity*t,n.pos.addScaledVector(n.vel,t),n.pos.y<.01&&(n.pos.y=.01,n.vel.multiplyScalar(.4)),n.rot.addScaledVector(n.rotV,t);const s=1-n.life/n.maxLife,r=n.scale*Math.max(.01,s);this._e.set(n.rot.x,n.rot.y,n.rot.z),this._q.setFromEuler(this._e),this._s.set(r,r,r),this._m.compose(n.pos,this._q,this._s),this.mesh.setMatrixAt(e,this._m),this.mesh.setColorAt(e,n.color)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0);for(let e=0;e<this.shockwaves.length;e++){const n=this.shockwaves[e];if(!n.active)continue;if(n.life+=t,n.life>=n.maxLife){n.active=!1,n.mesh.visible=!1;continue}const s=n.life/n.maxLife,r=1-(1-s)*(1-s);n.mesh.scale.setScalar(.5+(n.maxScale-.5)*r),n.mat.opacity=.92*(1-s)}}}class Yx{constructor(t,e=12){this.n=e,this.count=0,this.hasPrev=!1,this.alpha=0,this.flashTime=0,this._baseColor=new $t(3718648),this._flashColor=new $t(16707722),this.toePts=Array.from({length:e},()=>new R),this.topPts=Array.from({length:e},()=>new R),this.posArr=new Float32Array(e*2*3),this.fadeArr=new Float32Array(e*2),this.edgeArr=new Float32Array(e*2);for(let s=0;s<e;s++)this.edgeArr[s*2]=0,this.edgeArr[s*2+1]=1;const n=[];for(let s=0;s<e-1;s++){const r=2*s,o=2*s+1,a=2*(s+1),c=2*(s+1)+1;n.push(r,o,a,o,c,a)}this.geo=new we,this.geo.setAttribute("position",new Ee(this.posArr,3)),this.geo.setAttribute("aFade",new Ee(this.fadeArr,1)),this.geo.setAttribute("aEdge",new Ee(this.edgeArr,1)),this.geo.setIndex(n),this.mat=new fn({side:Me,transparent:!0,depthWrite:!1,blending:Jo,uniforms:{uColor:{value:new $t(3718648)},uOpacity:{value:0}},vertexShader:`
        attribute float aFade;
        attribute float aEdge;
        varying float vFade;
        varying float vEdge;
        void main() {
          vFade = aFade;
          vEdge = aEdge;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vFade;
        varying float vEdge;
        void main() {
          float bladeRim = smoothstep(0.0, 0.55, vEdge);
          float core = smoothstep(0.62, 1.0, vEdge) * 0.6;
          vec3 col = mix(uColor, vec3(1.0), core * vFade);
          float a = vFade * vFade * bladeRim * uOpacity;
          gl_FragColor = vec4(col, a);
        }
      `}),this.mesh=new Q(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=9,this.mesh.visible=!1,t.add(this.mesh),this._toe=new R,this._top=new R,this._prevToe=new R}clear(){this.count=0,this.hasPrev=!1,this.alpha=0,this.flashTime=0,this.mat.uniforms.uOpacity.value=0,this.mat.uniforms.uColor.value.copy(this._baseColor),this.mesh.visible=!1,this.geo.setDrawRange(0,0)}flash(t=16707722){this._flashColor.setHex(t),this.flashTime=.24,this.alpha=Math.max(this.alpha,.72)}update(t,e,n){if(this.flashTime>0&&e>0){this.flashTime=Math.max(0,this.flashTime-e);const l=this.flashTime/.24;this.mat.uniforms.uColor.value.lerpColors(this._baseColor,this._flashColor,l)}else this.mat.uniforms.uColor.value.copy(this._baseColor);if(!n||e<=0){this.alpha=Math.max(0,this.alpha-Math.max(0,e)*10),this.mat.uniforms.uOpacity.value=this.alpha,this.alpha<=.01&&(this.mesh.visible=!1,this.hasPrev=!1,this.count=0);return}if(this._toe.set(0,.03,0).applyQuaternion(t.quaternion).add(t.position),this._top.set(0,it.bat.bladeLength*.94,0).applyQuaternion(t.quaternion).add(t.position),!this.hasPrev){this.hasPrev=!0,this._prevToe.copy(this._toe),this.toePts[0].copy(this._toe),this.topPts[0].copy(this._top),this.count=1;return}const s=this._toe.distanceTo(this._prevToe),r=s/Math.max(1e-4,e),o=$e.clamp((r-4.2)/14,0,1)*.62,a=o>this.alpha?22:10;if(this.alpha+=(o-this.alpha)*(1-Math.exp(-a*e)),this._prevToe.copy(this._toe),s>.004){this.count<this.n&&this.count++;for(let l=this.count-1;l>0;l--)this.toePts[l].copy(this.toePts[l-1]),this.topPts[l].copy(this.topPts[l-1]);this.toePts[0].copy(this._toe),this.topPts[0].copy(this._top)}else this.alpha<=.015&&(this.count=0);if(this.count<2||this.alpha<=.01){this.mesh.visible=!1,this.mat.uniforms.uOpacity.value=0;return}const c=Math.max(1,this.count-1);for(let l=0;l<this.count;l++){const u=this.topPts[l],d=this.toePts[l],h=l*6;this.posArr[h]=u.x,this.posArr[h+1]=u.y,this.posArr[h+2]=u.z,this.posArr[h+3]=d.x,this.posArr[h+4]=d.y,this.posArr[h+5]=d.z;const f=1-l/c;this.fadeArr[l*2]=f,this.fadeArr[l*2+1]=f}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aFade.needsUpdate=!0,this.geo.setDrawRange(0,(this.count-1)*6),this.mat.uniforms.uOpacity.value=this.alpha,this.mesh.visible=!0}}class Zx{constructor(t){const e=(n,s,r,o="#141413")=>Ae(256,128,(a,c,l)=>{a.clearRect(0,0,c,l);const u=c/2,d=l/2,h=14,f=(x,m)=>{a.beginPath();for(let p=0;p<h*2;p++){const S=p/(h*2)*Math.PI*2,y=p%2===0?114:84,M=p%2===0?54:38,L=u+x+Math.cos(S)*y,A=d+m+Math.sin(S)*M;p===0?a.moveTo(L,A):a.lineTo(L,A)}a.closePath()};f(5,5),a.fillStyle="#141413",a.fill(),f(0,0);const g=a.createLinearGradient(0,12,0,l-12);g.addColorStop(0,s),g.addColorStop(1,r),a.fillStyle=g,a.fill(),a.lineWidth=6,a.strokeStyle="#141413",a.stroke(),a.font='900 42px "Bungee", Impact, system-ui, sans-serif',a.textAlign="center",a.textBaseline="middle",o==="#ffffff"?(a.lineWidth=7,a.strokeStyle="#141413",a.strokeText(n,u,d+2)):(a.fillStyle="#ffffff",a.fillText(n,u+2,d+4)),a.fillStyle=o,a.fillText(n,u,d+2)});this.textures={sweet:e("SMASH!","#fef08a","#f59e0b","#141413"),clean:e("CRACK!","#bae6fd","#38bdf8","#141413"),edge:e("NICK!","#fed7aa","#fb923c","#141413"),stumps:e("TIMBER!","#f87171","#dc2626","#ffffff"),catch:e("CAUGHT!","#f87171","#dc2626","#ffffff"),fielded:e("STOP!","#bae6fd","#38bdf8","#141413")},this.mat=new Ih({map:this.textures.clean,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),this.sprite=new Cg(this.mat),this.sprite.visible=!1,this.sprite.renderOrder=12,t.add(this.sprite),this.active=!1,this.life=0,this.maxLife=.62}spawn(t,e){this.mat.map=this.textures[t]||this.textures.clean,this.mat.needsUpdate=!0,this.sprite.position.set(e.x,Math.max(.28,e.y+.24),e.z+.12),this.sprite.scale.set(.1,.05,1),this.mat.opacity=1,this.sprite.visible=!0,this.active=!0,this.life=0}update(t){if(!this.active)return;if(this.life+=t,this.life>=this.maxLife){this.active=!1,this.sprite.visible=!1;return}const e=this.life/this.maxLife,n=e<.2?e/.2*1.2:1.2-.22*((e-.2)/.8);this.sprite.scale.set(.84*n,.42*n,1),this.sprite.position.y+=t*.68,this.mat.opacity=e<.65?1:Math.max(0,1-(e-.65)/.35)}}class $x{constructor(t){const e=Jr,n=ro[0],s=It({color:n.shirtHex}),r=It({color:n.trimHex}),o=It({color:n.trimHex}),a=It({color:n.pantsHex}),c=It({color:n.trimHex}),l=It({color:14254651}),u=It({color:16317180}),d=It({color:n.shirtHex}),h=It({color:988970}),f=It({color:n.shirtHex}),g=It({color:n.trimHex}),x=It({color:440020,emissive:537412}),m=It({color:n.trimHex}),p=It({color:n.shirtHex}),S=It({color:n.trimHex}),y=It({color:9741240}),M=It({color:n.shirtHex});this._kitMats={jerseyMat:s,trimMat:r,collarMat:o,pantsMat:a,beltMat:c,shoeStripeMat:d,capMat:f,capPeakMat:g,wristbandMat:m,padMat:p,helmetMat:S,gloveMat:M};const L=new me({color:1315859,transparent:!0,opacity:.42,depthWrite:!1}),A=new Ln(.34,16),b=new oe(.16,.15,.14,10),P=new oe(.165,.165,.04,10),_=new Oe(.175,e.torsoLength-.18,5,12),v=new te(.32,.07,.28),T=new oe(.105,.125,.05,10),N=new oe(.052,.062,.1,8),O=new be(.115,14,10),V=new te(.19,.052,.05),W=new te(.17,.036,.054),X=new be(.122,12,8,0,Math.PI*2,0,Math.PI*.54),tt=new oe(.132,.138,.014,10,1,!1,-Math.PI*.36,Math.PI*.72),G=new be(.132,14,10,0,Math.PI*2,0,Math.PI*.62),ot=new oe(.135,.145,.016,12,1,!1,-Math.PI*.35,Math.PI*.7),pt=new ms(.105,.009,6,12,Math.PI*.8),xt=new Oe(.054,.17,4,8),mt=new Oe(.04,e.armLength-.3,4,8),Ft=new oe(.043,.043,.05,8),j=new be(.045,8,8),ut=new be(.072,10,8),wt=new Oe(.072,e.legLength/2-.144,4,8),at=new Oe(.06,e.legLength/2-.12,4,8),Ht=new be(.064,8,8),qt=new te(.14,.46,.13),Xt=new te(.146,.045,.136),ee=new te(.11,.072,.24),ct=new te(.116,.026,.17),vt=new te(.116,.02,.25),I=Nt=>{const st=!!Nt.isKeeper,Pt=new ae,Mt=new Q(A,L);Mt.rotation.x=-Math.PI/2,Mt.position.y=.012,Pt.add(Mt);const Gt=new ae;Pt.add(Gt);const bt=new ae;bt.position.y=e.hipHeight,Gt.add(bt);const C=new Q(b,a);C.scale.set(1.1,1,.8),C.castShadow=!0,At(C,.012,1315859),bt.add(C);const w=new Q(P,c);w.position.y=.055,w.scale.set(1.11,1,.81),bt.add(w);const q=new ae;bt.add(q);const et=new Q(_,s);et.position.y=e.torsoLength/2,et.scale.set(1.14,1,.8),et.castShadow=!0,At(et,.014,1315859),q.add(et);const ht=new Q(v,r);ht.position.set(0,e.torsoLength*.56,.01),q.add(ht);const nt=new Q(T,o);nt.position.y=e.torsoLength+.01,At(nt,.007,1315859),q.add(nt);const Lt=new Q(N,l);Lt.position.y=e.torsoLength+.06,At(Lt,.008,1315859),q.add(Lt);const _t=new ae;_t.position.y=e.torsoLength+.185,q.add(_t);const D=new Q(O,l);if(D.position.y=0,D.castShadow=!0,At(D,.012,1315859),_t.add(D),st){const Rt=new Q(G,S);Rt.position.set(0,.015,-.005),Rt.rotation.x=-.14,Rt.castShadow=!0,At(Rt,.012,1315859),_t.add(Rt);const Ot=new Q(ot,S);Ot.position.set(0,.025,.055),Ot.rotation.x=.18,At(Ot,.006,1315859),_t.add(Ot);const F=new Q(pt,y);F.position.set(0,-.04,.035),F.rotation.x=Math.PI/2,F.rotation.z=-Math.PI*.4,_t.add(F)}else{const Rt=new Q(V,c);Rt.position.set(0,.015,.098),At(Rt,.004,1315859),_t.add(Rt);const Ot=new Q(W,x);Ot.position.set(0,.015,.101),_t.add(Ot);const F=new Q(X,f);F.position.y=.02,At(F,.008,1315859),_t.add(F);const gt=new Q(tt,g);gt.position.set(0,.035,.082),gt.rotation.x=.16,At(gt,.005,1315859),_t.add(gt)}const Z=Rt=>{const Ot=new ae;Ot.position.set(Rt,e.torsoLength,0);const F=new Q(xt,s);F.position.y=-.105,F.castShadow=!0,At(F,.011,1315859),Ot.add(F);const gt=-.28,$=new ae;$.position.y=gt;const rt=new Q(mt,l);rt.position.y=-.7*.6-gt,rt.castShadow=!0,At(rt,.01,1315859),$.add(rt);const Et=new Q(Ft,m);Et.position.y=-.7+.085-gt,At(Et,.005,1315859),$.add(Et);const Tt=new Q(st?ut:j,st?M:l);return Tt.position.y=-.7-gt,Tt.castShadow=!0,At(Tt,.008,1315859),$.add(Tt),Ot.add($),q.add(Ot),{upper:Ot,elbow:$}},z=Z(e.shoulderHalf),Y=Z(-.2),lt=Rt=>{const Ot=new ae;Ot.position.set(Rt*.105,0,0);const F=new Q(wt,a);F.position.y=-.96/4,F.castShadow=!0,At(F,.012,1315859),Ot.add(F);const gt=new ae;gt.position.y=-.96/2,Ot.add(gt);const $=new Q(at,a);$.position.y=-.96/4,$.castShadow=!0,At($,.012,1315859),gt.add($);const rt=new Q(Ht,a);if(At(rt,.008,1315859),gt.add(rt),st){const pe=new Q(qt,p);pe.position.set(0,-.96/4,.028),pe.castShadow=!0,At(pe,.011,1315859),gt.add(pe);const Re=new Q(Xt,r);Re.position.set(0,-.06,.028),gt.add(Re)}const Et=new Q(ee,u);Et.position.set(0,-.96/2+.025,.055),Et.castShadow=!0,At(Et,.01,1315859),gt.add(Et);const Tt=new Q(ct,d);Tt.position.set(0,-.96/2+.03,.045),gt.add(Tt);const Yt=new Q(vt,h);return Yt.position.set(0,-.96/2-.015,.055),gt.add(Yt),bt.add(Ot),{thigh:Ot,shin:gt}},yt=lt(1),dt=lt(-1);Pt.position.set(Nt.x,0,Nt.z),t.add(Pt);const Ut={hipsY:st?.66:.94,bodyRotX:0,bodyRotZ:0,torsoRotX:st?.36:.15,torsoRotY:0,headRotX:0,headRotY:0,armLX:st?-.75:-.28,armLZ:st?-.14:.06,elbowLX:st?-.65:-.45,armRX:st?-.75:-.28,armRZ:st?.14:-.06,elbowRX:st?-.65:-.45,thighLX:st?-.85:-.14,thighLZ:st?.18:.08,shinLX:st?1.1:.22,thighRX:st?-.85:-.14,thighRZ:st?-.18:-.08,shinRX:st?1.1:.22};return{root:Pt,body:Gt,groundShadow:Mt,hips:bt,torso:q,headGrp:_t,armL:z,armR:Y,legL:yt,legR:dt,isKeeper:st,specId:Nt.id,pose:Ut}};this.rigs=it.fielding.positions.map(I)}applyKit(t){if(!t||!this._kitMats)return;const e=this._kitMats;e.jerseyMat.color.setHex(t.shirtHex),e.trimMat.color.setHex(t.trimHex),e.collarMat.color.setHex(t.trimHex),e.pantsMat.color.setHex(t.pantsHex),e.beltMat.color.setHex(t.trimHex),e.shoeStripeMat.color.setHex(t.shirtHex),e.capMat.color.setHex(t.shirtHex),e.capPeakMat.color.setHex(t.trimHex),e.wristbandMat.color.setHex(t.trimHex),e.padMat.color.setHex(t.shirtHex),e.helmetMat.color.setHex(t.trimHex),e.gloveMat.color.setHex(t.shirtHex)}update(t,e,n,s=null){if(!t)return;const r=t.fielders,o=Jr,a=$e.clamp,c=s&&s.active&&s.pos?s.pos:t.heldBallPos||(t.ballActive?t.ballPos:null);for(let l=0;l<r.length&&l<this.rigs.length;l++){const u=r[l],d=this.rigs[l],h=d.pose,f=u.jumpY||0;d.root.position.set(u.pos.x,f,u.pos.z),d.root.rotation.y=u.facing,d.groundShadow.position.y=.012-f;const g=u.vel.length(),x=u.actionTimer||0;let m=o.hipHeight,p=0,S=0,y=.15,M=0,L=0,A=0,b=-.28,P=.06,_=-.45,v=-.28,T=-.06,N=-.45,O=-.14,V=.08,W=.22,X=-.14,tt=-.08,G=.22,ot=14,pt=!1;if(u.state==="diving"){ot=24;const mt=u.diveDir||1;if(x<.25)S=-mt*1.15,p=.12,m=.44,y=.1,b=-2.45,v=-2.45,P=-.12,T=.12,_=-.2,N=-.2,O=.28,X=.36,W=.25,G=.3,L=-.22;else if(x<.6){const Ft=(x-.25)/.35;S=-mt*(1.28-.08*Ft),p=.08,m=.3,y=.22,b=-1.45,v=-1.45,P=-.22,T=.22,_=-1.05,N=-1.05,O=.18,X=.42,W=.45,G=.65}else ot=12,S=-mt*.12,m=.64,y=.06,O=-.85,W=1.15,V=.12,X=.22,G=1.1,tt=-.1,v=-2.55,T=-.1,N=-.25,b=-.45,P=.16,_=-.55,L=-.18}else if(u.state==="catching"){ot=22;const mt=u.catchStyle||"chest";x<.34?mt==="overhead"?(m=.86,y=-.1,L=-.45,b=-2.55,v=-2.55,P=-.12,T=.12,_=-.35,N=-.35,O=-.28,W=.45,X=.14,G=.28):mt==="low"?(m=.58,y=.56,L=.12,O=-.95,W=1.1,V=.1,X=-.45,G=.85,tt=-.1,b=-.88,v=-.88,P=-.18,T=.18,_=-.4,N=-.4):(m=.88,y=.12,L=.08,O=-.32,W=.48,V=.1,X=.14,G=.26,tt=-.1,b=-1.25,v=-1.25,P=-.22,T=.22,_=-1.05,N=-1.05):(ot=14,m=o.hipHeight,y=-.06,L=-.16,v=-2.75,T=-.12,N=-.2,b=-.35,P=.14,_=-.45,O=-.12,W=.18,X=.1,G=.16)}else if(u.state==="fielded"){ot=20;const mt=u.stopStyle||"pickup";if(mt==="keeper_take")m=a((u.catchHeight||.85)-.15,.6,.9),y=.34,O=-.8,W=1.05,V=.18,X=-.8,G=1.05,tt=-.18,b=-1.05,v=-1.05,P=-.2,T=.2,_=-.85,N=-.85,pt=!0;else{const Ft=mt==="slide"?.36:.26;if(x<Ft)if(mt==="slide"){const j=u.diveDir||1;m=.36,S=-j*.68,y=.28,O=-.55,W=.15,X=-.25,G=1.15,v=-1.15,T=.12,N=-.3,b=-.45,P=.35,_=-.6}else m=.62,y=.62,L=.22,O=-.95,W=1.15,V=.12,X=-.75,G=.95,tt=-.12,b=-.82,v=-.82,P=-.15,T=.15,_=-.3,N=-.3;else x<Ft+.24?(ot=18,m=.96,M=-.36,y=.04,A=.22,v=-2.1,T=-.24,N=-.95,b=-1.05,P=-.08,_=-.35,O=-.24,W=.32,V=.1,X=.18,G=.22,tt=-.1):(ot=16,m=.95,M=.16,y=.18,v=-1.15,T=-.06,N=-.65,b=-.35,P=.12,_=-.55,O=-.16,W=.22,X=.12,G=.18)}}else if(u.state==="set_catch"){ot=16;const mt=Math.sin(n*7.5+l)*.025;m=.87+Math.abs(mt)*.3,y=.04,b=-1.3,v=-1.3,P=-.18,T=.18,_=-.85,N=-.85,O=-.38+mt,W=.56,V=.13,X=-.24-mt,G=.42,tt=-.13,pt=!0}else if((u.state==="chasing"||u.state==="backup"||u.state==="walk_in")&&g>.2){ot=18;const mt=u.stridePhase,Ft=a(g/6.2,.15,1),j=(.018+.036*Ft)*Math.abs(Math.sin(mt));m=.95-.03*Ft+j,y=.12+.24*Ft,M=-.16*Math.sin(mt)*Ft,O=(.3+.48*Ft)*Math.sin(mt),X=-O,W=(.28+.44*Ft)*Math.max(0,Math.sin(mt+1.15))+.12,G=(.28+.44*Ft)*Math.max(0,Math.sin(mt+1.15+Math.PI))+.12;const wt=.28+.48*Ft;if(b=-wt*Math.sin(mt)-.12*Ft,v=wt*Math.sin(mt)-.12*Ft,P=.08,T=-.08,_=-.7-.45*Ft,N=-.7-.45*Ft,pt=u.state==="backup",u._role==="catcher"&&u.state==="chasing"&&!t.groundedAfterHit&&u._ballDist<3.8){const at=a(1-u._ballDist/3.8,0,1);b=$e.lerp(b,-1.35,at),v=$e.lerp(v,-1.35,at),P=$e.lerp(P,-.14,at),T=$e.lerp(T,.14,at),_=$e.lerp(_,-.8,at),N=$e.lerp(N,-.8,at),pt=!0}else if(u.state==="chasing"&&(t.groundedAfterHit||u._ballY<.5)&&u._ballDist<3.2){const at=a(1-u._ballDist/3.2,0,1);m-=.16*at,y+=.22*at,b=$e.lerp(b,-.75,at),v=$e.lerp(v,-.75,at),P=$e.lerp(P,-.12,at),T=$e.lerp(T,.12,at),_=$e.lerp(_,-.45,at),N=$e.lerp(N,-.45,at),pt=!0}}else if(t.resolved&&t.holder&&(t.holder.state==="catching"||t.holder.state==="diving")&&u!==t.holder)ot=14,m=.96+Math.abs(Math.sin(n*6+l))*.04,y=-.06,b=-2.35,v=-2.35,P=-.14,T=.14,_=-.25,N=-.25,O=-.1,W=.16,X=.1,G=.16,pt=!0;else if(u.isKeeper){ot=14;const mt=Math.sin(n*2.5)*.01,Ft=t.resolved&&t.holder&&t.holder.state==="fielded",j=c&&t.hit&&c.z>-4?a((c.y-.8)*.14,0,.2):0;m=(Ft?.78:.66)+mt+j,y=(Ft?.24:.36)-j*.6,O=-.85+j*1.2,X=O,V=.18,tt=-.18,W=1.1-j*1.2,G=W,Ft?(b=-1.05,v=-1.05,P=-.18,T=.18,_=-.75,N=-.75):(b=-.75,v=-.75,P=-.16,T=.16,_=-.65,N=-.65),pt=!0}else d.specId==="slip"?(ot=14,m=.8+Math.sin(n*2.4+l)*.01,y=.32,O=-.45,X=-.45,V=.14,tt=-.14,W=.55,G=.55,b=-.55,v=-.55,P=-.1,T=.1,_=-.55,N=-.55,pt=!0):!t.hit&&c&&c.z>-9.5&&c.z<-1&&u.ring==="infield"?(ot=16,m=.86,y=.24,O=-.34,X=-.34,V=.14,tt=-.14,W=.46,G=.46,b=-.48,v=-.48,P=-.06,T=.06,_=-.6,N=-.6,pt=!0):(ot=14,m=.94+Math.sin(n*2.4+l)*.012,y=.15,O=-.14,X=-.14,V=.08,tt=-.08,W=.22,G=.22,b=-.28,v=-.28,P=.06,T=-.06,_=-.45,N=-.45,pt=!0);if(pt&&c){const mt=c.x-u.pos.x,Ft=c.z-u.pos.z,j=Math.hypot(mt,Ft);if(j>.25){let ut=(Math.atan2(mt,Ft)-u.facing+Math.PI)%(Math.PI*2)-Math.PI;ut<-Math.PI&&(ut+=Math.PI*2),A=a(ut,-.75,.75);const wt=c.y-(m+o.torsoLength+.18);L=a(-Math.atan2(wt,Math.max(.6,j))-y*.65,-.68,.42)}u.state==="set_catch"&&(L=a(L,-.68,-.24))}const xt=e>0?1-Math.exp(-ot*e):0;xt>0&&(h.hipsY+=(m-h.hipsY)*xt,h.bodyRotX+=(p-h.bodyRotX)*xt,h.bodyRotZ+=(S-h.bodyRotZ)*xt,h.torsoRotX+=(y-h.torsoRotX)*xt,h.torsoRotY+=(M-h.torsoRotY)*xt,h.headRotX+=(L-h.headRotX)*xt,h.headRotY+=(A-h.headRotY)*xt,h.armLX+=(b-h.armLX)*xt,h.armLZ+=(P-h.armLZ)*xt,h.elbowLX+=(_-h.elbowLX)*xt,h.armRX+=(v-h.armRX)*xt,h.armRZ+=(T-h.armRZ)*xt,h.elbowRX+=(N-h.elbowRX)*xt,h.thighLX+=(O-h.thighLX)*xt,h.thighLZ+=(V-h.thighLZ)*xt,h.shinLX+=(W-h.shinLX)*xt,h.thighRX+=(X-h.thighRX)*xt,h.thighRZ+=(tt-h.thighRZ)*xt,h.shinRX+=(G-h.shinRX)*xt),d.hips.position.y=h.hipsY,d.body.rotation.x=h.bodyRotX,d.body.rotation.z=h.bodyRotZ,d.torso.rotation.x=h.torsoRotX,d.torso.rotation.y=h.torsoRotY,d.headGrp.rotation.x=h.headRotX,d.headGrp.rotation.y=h.headRotY,d.armL.upper.rotation.x=h.armLX,d.armL.upper.rotation.z=h.armLZ,d.armL.elbow.rotation.x=h.elbowLX,d.armR.upper.rotation.x=h.armRX,d.armR.upper.rotation.z=h.armRZ,d.armR.elbow.rotation.x=h.elbowRX,d.legL.thigh.rotation.x=h.thighLX,d.legL.thigh.rotation.z=h.thighLZ,d.legL.shin.rotation.x=h.shinLX,d.legR.thigh.rotation.x=h.thighRX,d.legR.thigh.rotation.z=h.thighRZ,d.legR.shin.rotation.x=h.shinRX}}}xx();const B=i=>document.getElementById(i),dc=B("game"),ui=!!(typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0)||typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches);ui?(document.body.classList.add("touch"),document.body.classList.remove("desktop")):(document.body.classList.add("desktop"),document.body.classList.remove("touch"));const Di=new Tg({canvas:dc,antialias:!0,powerPreference:"high-performance"});Di.setPixelRatio(Math.min(devicePixelRatio||1,3));Di.outputColorSpace=Je;Di.shadowMap.enabled=!0;Di.shadowMap.type=eh;const en=new Ag,Ge=new un(it.camera.verticalFov,1,.03,900),oo=zx(en),Zl=new Bx(en),ss=new Jh(en,it.stumps.z),fc=new Jh(en,-En),jh=new Xx(en),Qh=new $x(en),Gn=kx();en.add(Gn);const hi=new Hx(en),{mesh:Ga,shadow:Bs}=Vx();en.add(Ga,Bs);const gs=new Gx(en),We=new qx(en),Ws=new Yx(en),wi=new Zx(en),Qt=new bx,on=new Tx,tu=new Cx,cn=new Dx(dc,B("joystick"),B("knob")),ne=new Ix,U={mode:"menu",matchMode:"exhibition",selectedOvers:5,totalOvers:5,maxBalls:30,maxWickets:10,target:130,startRuns:0,startBalls:0,startWickets:0,matchStatus:null,fieldingKitIdx:0,phase:"idle",phaseTime:0,runupTime:0,runs:0,wickets:0,balls:0,fours:0,sixes:0,delivery:null,runup:null,releasePos:new R,releaseVel:new R,result:null,hitThisBall:!1,flinched:!1,overBalls:[],overRuns:0,overWickets:0,m25:!1,m50:!1,lastStrideStep:-1,hitFreeze:0,hasFlybyPlayed:!1,emberTimer:0,lastBanner:"MATCH IN PROGRESS"};function Rn(i,t){const e=B(i);e&&(e.className="",e.offsetWidth,e.className=t)}const Ti={},Wa=new ft().copy(Qt.bat.target),$l=new ft,Wt={shake:0,kick:0,follow:!1,hitTime:0,zoom:0,dirX:0,dirZ:-1,lookPos:new R(0,.5,-10),zoomPos:new R};function Ks(){const i=window.innerWidth,t=window.innerHeight;Di.setPixelRatio(Math.min(window.devicePixelRatio||1,3)),Di.setSize(i,t,!1),Ge.aspect=i/t;const e=it.camera.verticalFov,n=it.camera.minHorizontalFov*Math.PI/180,s=2*Math.atan(Math.tan(n/2)/Ge.aspect)*180/Math.PI;Ge.fov=Math.min(100,Math.max(e,s)),Ge.updateProjectionMatrix()}window.addEventListener("resize",Ks);window.addEventListener("orientationchange",()=>setTimeout(Ks,200));Ks();let Gr=0;function ii(i,t,e=1.4){const n=B("message");n.className="",n.textContent=i,n.offsetWidth,n.className=`${t} show`,Gr=e}function Kx(i){const t=B("hint");i?(t.textContent=i,t.classList.add("show")):t.classList.remove("show")}function Xa(i){return`${Math.floor(i/it.game.ballsPerOver)}.${i%it.game.ballsPerOver}`}function pc(){const i=so(U);if(B("runs").textContent=U.runs,B("wkts").textContent=U.wickets,B("overs").textContent=`${Xa(U.balls)}/${U.totalOvers}`,B("chaseEquation")&&(B("chaseEquation").textContent=i.outcome==="won"?"TARGET CHASED!":`Need ${i.runsNeeded} off ${i.ballsRemaining}b`),B("reqRrPill")&&(B("reqRrPill").textContent=i.outcome==="won"?"WON!":`RRR ${i.reqRR.toFixed(1)}`),B("overStrip")){const t=U.overBalls.map(e=>`<span class="ball-dot ${e.cls}">${e.txt}</span>`).join("");B("overStrip").innerHTML=t}Zl&&Zl.update(U.runs,U.wickets,Xa(U.balls),U.lastBanner||"",{target:U.target,totalOvers:U.totalOvers,runsNeeded:i.runsNeeded,ballsRemaining:i.ballsRemaining,reqRR:i.reqRR})}function mc(){U.balls%it.game.ballsPerOver===0&&U.balls>0&&U.overBalls.length>=it.game.ballsPerOver&&(U.overBalls=[]),U.balls%it.game.ballsPerOver===0&&U.balls/it.game.ballsPerOver!==on.overIndex&&on.startOver(U.balls/it.game.ballsPerOver);const i=on.next();U.delivery=i,U.runup=$h(i.bowler),Kh(U.runup.tRelease,U.runup,Ti),U.releasePos.copy(Ti.hand),U.releaseVel.copy(Ax(U.releasePos,i)),U.phase="runup",U.phaseTime=0,U.runupTime=0,U.hitThisBall=!1,U.flinched=!1,U.lastStrideStep=-1,U.hasFlybyPlayed=!1,Qt.resetDelivery(),Qt.fielding.setDeliveryContext(i),oo.setBowlerSide(i.bowler.hand),ss.reset(),fc.reset(),gs.clear(),Ws.clear(),hi.hide(),U.emberTimer=0,Wt.follow=!1,Wt.hitTime=0,Wt.zoom=0,Gn.visible=!0,B("bowlerName").textContent=i.bowler.name,B("speed").textContent="",U.lastBanner="MATCH IN PROGRESS",pc()}function Jx(){Qt.ball.launch(U.releasePos,U.releaseVel,U.delivery.spin),tu.start(),hi.show(U.delivery.bounceX??U.delivery.lineX,U.delivery.bounceDist),gs.setColor(3718648,.88),U.phase="live",U.phaseTime=0,ne.bowlerRelease(),B("speed").textContent=`${Math.round(U.delivery.kmh)} km/h`,U.delivery.kmh>=128&&Rn("vfxFlash","flash-fast")}function jx(i){U.result=i,U.phase="result",U.phaseTime=0,U.balls++,U.runs+=i.runs,U.overRuns+=i.runs,i.kind==="wicket"&&U.overWickets++,on.recordOutcome(i.runs);let t="•",e="dot";i.kind==="four"?(t="4",e="four"):i.kind==="six"?(t="6",e="six"):i.kind==="wicket"?(t="W",e="wicket"):i.runs>0&&(t=String(i.runs),e="runs"),U.overBalls.push({txt:t,cls:e}),i.kind==="four"?(U.fours++,ii("FOUR!","four"),ne.cheer(.85,2.5),ne.boundaryFanfare(!1),ne.boundaryClap(),gs.setColor(3718648,.9),We.boundaryPyro(!1),Rn("vfxFlash","flash-four"),Rn("speedLines","active"),U.lastBanner="★ FOUR! ★"):i.kind==="six"?(U.sixes++,ii("SIX!","six"),ne.cheer(1,3.4),ne.boundaryFanfare(!0),ne.boundaryClap(),gs.setColor(16765286,.95),We.confetti(new R(0,1.8,-1.22)),We.boundaryFirework(new R(Qt.ball.pos.x,2.5,Qt.ball.pos.z)),We.boundaryPyro(!0),Rn("vfxFlash","flash-six"),Rn("speedLines","active"),U.lastBanner="★ MAXIMUM SIX! ★"):i.kind==="runs"?(ii(i.text,"runs",1.3),ne.cheer(.35+i.runs*.12,1.4),U.lastBanner=`${i.runs} RUNS`):i.kind==="wicket"?(U.wickets++,ii(i.caught?"CAUGHT!":"WICKET!","wicket",1.8),i.caught||ne.wicketWhistle(),Wt.shake=Math.max(Wt.shake,.6),U.lastBanner=i.caught?"★ CAUGHT OUT! ★":"★ WICKET! ★"):(ii(i.text,"minor",1),U.lastBanner="DOT BALL");const n=so(U);U.matchStatus=n;const s=Math.max(0,U.runs-U.startRuns);n.finished&&n.outcome==="won"?(ii(`🏆 VICTORY! (${i.text})`,"milestone",2.4),ne.cheer(1,3.6),ne.boundaryFanfare(!0),ne.boundaryClap(),We.confetti(new R(0,2,-1.22)),We.boundaryPyro(!0),U.lastBanner="★ VICTORY! TARGET CHASED! ★"):(!U.m25&&s>=25&&(U.m25=!0,setTimeout(()=>{ii("⚡ QUICKFIRE 25! ⚡","milestone",2),ne.cheer(.7,2)},1300)),!U.m50&&s>=50&&(U.m50=!0,setTimeout(()=>{ii("🏆 HALF CENTURY! 50 RUNS 🏆","milestone",2.5),ne.cheer(1,3.2),We.confetti(new R(0,2,-1.22))},1300))),i.kind==="six"&&i.distance&&U.hitThisBall&&B("lastShot").innerHTML&&!B("lastShot").innerHTML.includes("m</span>")&&(B("lastShot").innerHTML+=` · <span class="shot-dist">${i.distance}m</span>`),pc()}function Qx(i,t){if(t.edge)return"Edge";if(t.batNormalSpeed<3.6&&t.exitSpeed<10)return"Defensive Block";const e=Math.atan2(i.x,-i.z)*180/Math.PI,s=i.y/Math.max(1,Math.hypot(i.x,i.z))>.36&&t.exitSpeed>18?"Lofted ":"";return Math.abs(e)<=12?`${s}Straight Drive`:e>12&&e<=52?`${s}Cover Drive`:e>52?"Square Cut":e<-12&&e>=-48?`${s}On Drive`:e<-48&&e>=-85?"Leg Flick":"Pull Shot"}function t_(i){for(const t of i)if(t.type==="bat"){if(t.repeat)continue;hi.fadeOut();const e=Math.min(1,t.impulse/9),n=t.batNormalSpeed<4&&!t.edge;if(ne.batHit(t.quality,e,t.edge,n),t.quality>.82&&!t.edge?(We.sweetSpotBurst(t.pos,t.normal),wi.spawn("sweet",t.pos),Ws.flash(16707722),Rn("vfxFlash","flash-sweet"),Rn("speedLines","active"),U.hitFreeze=.022):t.quality>.52&&!t.edge?(We.impactSparks(t.pos,t.normal),wi.spawn("clean",t.pos),Ws.flash(16498468)):t.edge&&(ne.appeal(),wi.spawn("edge",t.pos),Ws.flash(16281969)),Wt.shake=Math.max(Wt.shake,.15+.55*e*(t.edge?.6:1)),Wt.kick=Math.max(Wt.kick,.4*e),!U.hitThisBall){U.hitThisBall=!0,gs.setColor(16096779,.92),Wt.follow=!0,Wt.hitTime=0;const s=Math.hypot(Qt.ball.vel.x,Qt.ball.vel.z);s>.5?(Wt.dirX=Qt.ball.vel.x/s,Wt.dirZ=Qt.ball.vel.z/s):(Wt.dirX=0,Wt.dirZ=-1),Wt.lookPos.copy(Qt.ball.pos);const r=Qx(Qt.ball.vel,t);let o="";t.edge?o=' · <span class="tag-edge">EDGED</span>':t.quality>.82?o=' · <span class="tag-sweet">SWEET SPOT ⭐</span>':t.quality>.55&&(o=' · <span class="tag-clean">CRISP</span>'),B("lastShot").innerHTML=`${r}${o}`}}else t.type==="bounce"?(hi.fadeOut(),ne.bounce(Math.min(1,t.speed/8)),We.pitchDust(t.pos),We.pitchBounceRipple(t.pos,U.hitThisBall?16498468:3718648)):t.type==="stumps"?(ne.stumps(),We.stumpsBurst(t.pos),wi.spawn("stumps",t.pos),Rn("vfxFlash","flash-wicket"),(t.isNonStriker?fc:ss).shatter(t.stump,Qt.ball.vel.clone().add(t.normal.clone().multiplyScalar(-t.speed*.5)))):t.type==="catch"?(ne.catchOut(),We.catchBurst(t.pos),wi.spawn("catch",t.pos),Rn("vfxFlash","flash-wicket"),Wt.shake=Math.max(Wt.shake,.45),B("lastShot").innerHTML&&!B("lastShot").innerHTML.includes("CAUGHT")&&(B("lastShot").innerHTML+=` · <span class="tag-edge">CAUGHT (${t.fielder.toUpperCase()})</span>`)):t.type==="fielded"&&(U.hitThisBall?(ne.fieldStop(),We.pitchDust(t.pos),t.sliding&&wi.spawn("fielded",t.pos)):ne.batHit(.2,.35,!1,!0))}function e_(i,t){var n;if(U.phaseTime+=i,(U.phase==="runup"||U.phase==="live"||U.phase==="result")&&(U.runupTime+=i),U.phase==="runup"){const s=Math.floor(U.runupTime*5.4);s!==U.lastStrideStep&&U.runupTime<U.runup.tRelease-.08&&(U.lastStrideStep=s,ne.bowlerStride()),!hi.active&&U.runupTime>=U.runup.tRun&&hi.show(U.delivery.bounceX??U.delivery.lineX,U.delivery.bounceDist)}U.phase==="runup"&&U.runupTime>=U.runup.tRelease&&Jx(),Qt.step(i,t);const e=Qt.drainEvents();if(t_(e),U.phase==="live"){!U.hasFlybyPlayed&&Qt.ball.pos.z>-4.5&&Qt.ball.pos.z<-1.2&&(U.hasFlybyPlayed=!0,ne.ballFlyby(U.delivery.kmh)),!U.hitThisBall&&!U.flinched&&Qt.ball.pos.distanceTo(Ge.position)<.65&&(U.flinched=!0,Wt.shake=Math.max(Wt.shake,.35),ne.whoosh(1),Rn("vfxFlash","flash-miss"));const s=tu.update(i,Qt.ball,e);s&&jx(s)}else if(U.phase==="result"){const s=U.result.kind==="wicket"?1.9:it.game.resultPause+(U.result.runs?.7:0);U.phaseTime>s&&((n=U.matchStatus)!=null&&n.finished||U.runs>=U.target||U.wickets>=U.maxWickets||U.balls>=U.maxBalls?o_():U.balls>U.startBalls&&U.balls%it.game.ballsPerOver===0?n_():mc())}}function Yn(){const i=it.control.showJoystick||"auto",t=i==="on"||i==="auto"&&ui;B("joystick").classList.toggle("hidden",!t||U.mode!=="playing")}function qn(i=U.matchMode,t=U.selectedOvers){ne.init(),U.matchMode=i==="scenario"?"scenario":"exhibition",U.matchMode==="exhibition"&&(U.selectedOvers=[2,5,10].includes(t)?t:5),U.fieldingKitIdx=Wx(U.fieldingKitIdx);const e=ro[U.fieldingKitIdx];jh.applyKit(e),Qh.applyKit(e);const n=U.matchMode==="scenario"?Lx():Px(U.selectedOvers);U.totalOvers=n.totalOvers,U.maxBalls=n.maxBalls,U.maxWickets=n.maxWickets,U.target=n.target,U.startRuns=n.startRuns,U.startBalls=n.startBalls,U.startWickets=n.startWickets,U.matchStatus=null,U.runs=n.startRuns,U.wickets=n.startWickets,U.balls=n.startBalls,U.fours=0,U.sixes=0,U.overBalls=[],U.overRuns=0,U.overWickets=0,U.m25=U.m50=!1,U.lastBanner=n.banner,on.reset(),on.startOver(Math.floor(U.balls/it.game.ballsPerOver)),U.runup=$h(on.bowler),U.runupTime=0,Qt.resetDelivery(),Qt.fielding.resetMatch(),oo.setBowlerSide(on.bowler.hand),Qt.bat.reset(),Wa.copy(Qt.bat.target),pc(),B("lastShot").textContent="",B("bowlerName")&&(B("bowlerName").textContent=on.bowler.name),B("speed")&&(B("speed").textContent=""),Wt.follow=!1,Wt.zoom=0,B("briefBadge")&&(B("briefBadge").textContent=U.matchMode==="scenario"?"⚡ SCENARIO CHALLENGE":"EXHIBITION CHASE"),B("briefTitle")&&(B("briefTitle").textContent=U.matchMode==="scenario"?`SCORE: ${n.startRuns}/${n.startWickets} (${n.elapsedOvers}.0/${n.totalOvers} OV)`:`TARGET: ${n.target} RUNS`),B("briefSituation")&&(B("briefSituation").textContent=U.matchMode==="scenario"?`${n.elapsedOvers} overs bowled · Target ${n.target} · ${n.wicketsRemaining} wickets in hand`:`Full ${n.totalOvers}-over innings chase · 10 wickets in hand`),B("briefEquation")&&(B("briefEquation").textContent=`NEED ${n.needRuns} RUNS OFF ${n.ballsRemaining} BALLS`),B("briefBowler")&&(B("briefBowler").textContent=`Opening Bowler: ${on.bowler.name}`),B("briefTarget")&&(B("briefTarget").textContent=`Target: ${n.target}`),B("briefWickets")&&(B("briefWickets").textContent=`Wickets Left: ${n.wicketsRemaining}`),B("briefRrr")&&(B("briefRrr").textContent=`Req RR: ${n.reqRR.toFixed(1)} RPO`),B("startScreen").classList.add("hidden"),B("overScreen").classList.add("hidden"),B("pauseScreen").classList.add("hidden"),B("overBreakScreen")&&B("overBreakScreen").classList.add("hidden"),B("hud").classList.remove("hidden"),B("briefingScreen")&&B("briefingScreen").classList.remove("hidden"),U.mode="briefing",cn.releaseLock(),Yn()}function eu(){U.mode==="briefing"&&(ne.init(),ne.resume(),B("briefingScreen")&&B("briefingScreen").classList.add("hidden"),U.mode="playing",Yn(),ui||cn.requestLock(),mc(),U.runupTime=-.6,ri=0,Js=performance.now())}function n_(){U.mode="over_break",cn.releaseLock(),Yn();const i=so(U),t=Math.floor(U.balls/it.game.ballsPerOver),e=U.balls>0?(U.runs/U.balls*6).toFixed(1):"0.0";on.startOver(t),oo.setBowlerSide(on.bowler.hand),B("breakBadge")&&(B("breakBadge").textContent=`END OF OVER ${t}`),B("breakScore")&&(B("breakScore").innerHTML=`${U.runs}/${U.wickets} <span class="break-overs">(${t}.0/${U.totalOvers} OV)</span>`),B("breakEquation")&&(B("breakEquation").textContent=`Need ${i.runsNeeded} Run${i.runsNeeded===1?"":"s"} off ${i.ballsRemaining} Ball${i.ballsRemaining===1?"":"s"}`),B("breakThisOverSummary")&&(B("breakThisOverSummary").textContent=`THIS OVER: ${U.overRuns} RUN${U.overRuns===1?"":"S"} · ${U.overWickets} WKT${U.overWickets===1?"":"S"}`),B("breakOverStrip")&&(B("breakOverStrip").innerHTML=U.overBalls.map(n=>`<span class="ball-dot ${n.cls}">${n.txt}</span>`).join("")),B("breakNextBowler")&&(B("breakNextBowler").textContent=`Next Over: ${on.bowler.name}`),B("breakRates")&&(B("breakRates").textContent=`CRR ${e} · RRR ${i.reqRR.toFixed(1)}`),B("breakBoundaries")&&(B("breakBoundaries").textContent=`4s: ${U.fours} · 6s: ${U.sixes} · Wkts Left: ${i.wicketsRemaining}`),B("continueOverBtn")&&(B("continueOverBtn").textContent=`🏏 CONTINUE TO OVER ${t+1}`),B("overBreakScreen")&&B("overBreakScreen").classList.remove("hidden")}function nu(){U.mode==="over_break"&&(B("overBreakScreen")&&B("overBreakScreen").classList.add("hidden"),U.overBalls=[],U.overRuns=0,U.overWickets=0,U.mode="playing",ne.init(),ne.resume(),Yn(),ui||cn.requestLock(),mc(),U.runupTime=-.5,ri=0,Js=performance.now())}const i_={home:"menuHomeView",mode:"menuModeView",overs:"menuOversView",howto:"menuHowToView"};function ys(i="home"){for(const[t,e]of Object.entries(i_)){const n=B(e);n&&n.classList.toggle("hidden",t!==i)}}function ao(i="mode"){U.mode="menu",cn.releaseLock(),ne.suspend(),Yn(),ys(i),B("briefingScreen")&&B("briefingScreen").classList.add("hidden"),B("overBreakScreen")&&B("overBreakScreen").classList.add("hidden"),B("pauseScreen").classList.add("hidden"),B("overScreen").classList.add("hidden"),B("hud").classList.add("hidden"),B("startScreen").classList.remove("hidden")}function s_(){ru(),B("pauseBadge")&&(B("pauseBadge").textContent="GAME SETTINGS"),B("pauseMatchActions")&&B("pauseMatchActions").classList.add("hidden"),B("menuSettingsActions")&&B("menuSettingsActions").classList.remove("hidden"),B("startScreen").classList.add("hidden"),B("pauseScreen").classList.remove("hidden")}function r_(){B("pauseScreen").classList.add("hidden"),ys("home"),B("startScreen").classList.remove("hidden")}function Qs(){U.mode==="playing"&&(U.mode="paused",cn.releaseLock(),ne.suspend(),ru(),Yn(),B("pauseBadge")&&(B("pauseBadge").textContent="MATCH PAUSED"),B("pauseMatchActions")&&B("pauseMatchActions").classList.remove("hidden"),B("menuSettingsActions")&&B("menuSettingsActions").classList.add("hidden"),B("pauseScreen").classList.remove("hidden"))}function iu(){U.mode==="paused"&&(B("pauseScreen").classList.add("hidden"),U.mode="playing",ne.init(),ne.resume(),ui||cn.requestLock(),Yn(),ri=0,Js=performance.now())}function o_(){U.mode="over",cn.releaseLock(),Yn();const i=so(U),t=Math.max(0,U.runs-U.startRuns),e=Math.max(0,U.balls-U.startBalls),n=B("overBadge");n&&(n.textContent=i.badge||"INNINGS OVER",n.classList.toggle("victory-badge",i.outcome==="won"),n.classList.toggle("wicket-badge",i.outcome!=="won")),B("overTitle").textContent=i.title||"INNINGS OVER",B("overSummary")&&(B("overSummary").textContent=i.summary||`Target ${U.target}`),B("finalRuns").textContent=`${U.runs}/${U.wickets}`,B("finalBalls").textContent=`${Xa(U.balls)} / ${U.totalOvers} overs · Target ${U.target}`;const s=e?(t/e*6).toFixed(1):"0.0";B("finalStats").textContent=`${U.fours} fours · ${U.sixes} sixes · ${t} off ${e}b (RR ${s})`,B("overScreen").classList.remove("hidden")}B("menuPlayBtn")&&B("menuPlayBtn").addEventListener("click",()=>ys("mode"));B("menuExhibitionBtn")&&B("menuExhibitionBtn").addEventListener("click",()=>ys("overs"));B("menuHowToBtn")&&B("menuHowToBtn").addEventListener("click",()=>ys("howto"));B("menuSettingsBtn")&&B("menuSettingsBtn").addEventListener("click",s_);B("closeSettingsBtn")&&B("closeSettingsBtn").addEventListener("click",r_);document.querySelectorAll("[data-menu-target]").forEach(i=>{i.addEventListener("click",()=>ys(i.getAttribute("data-menu-target")||"home"))});B("ex2Btn")&&B("ex2Btn").addEventListener("click",()=>qn("exhibition",2));B("ex5Btn")&&B("ex5Btn").addEventListener("click",()=>qn("exhibition",5));B("ex10Btn")&&B("ex10Btn").addEventListener("click",()=>qn("exhibition",10));B("scenarioBtn")&&B("scenarioBtn").addEventListener("click",()=>qn("scenario"));B("playBtn")&&B("playBtn").addEventListener("click",()=>qn());B("againBtn").addEventListener("click",()=>qn());B("restartBtn").addEventListener("click",()=>qn());B("changeModePauseBtn")&&B("changeModePauseBtn").addEventListener("click",()=>ao("mode"));B("changeModeOverBtn")&&B("changeModeOverBtn").addEventListener("click",()=>ao("mode"));B("startChaseBtn")&&B("startChaseBtn").addEventListener("click",eu);B("changeModeBriefBtn")&&B("changeModeBriefBtn").addEventListener("click",()=>ao("mode"));B("continueOverBtn")&&B("continueOverBtn").addEventListener("click",nu);B("changeModeBreakBtn")&&B("changeModeBreakBtn").addEventListener("click",()=>ao("mode"));B("resumeBtn").addEventListener("click",iu);B("pauseBtn").addEventListener("click",i=>{i.stopPropagation(),Qs()});B("soundBtn")&&B("soundBtn").addEventListener("click",i=>{i.stopPropagation();const t=ne.toggleMute();B("soundBtn").textContent=t?"🔊":"🔇",B("soundBtn").setAttribute("title",t?"Mute Sound (M)":"Unmute Sound (M)")});const qa=document.documentElement,Ya=qa.requestFullscreen||qa.webkitRequestFullscreen,Kl=document.exitFullscreen||document.webkitExitFullscreen,su=()=>document.fullscreenElement||document.webkitFullscreenElement;function Za(){Ya&&(su()?Kl&&Promise.resolve(Kl.call(document)).catch(()=>{}):Promise.resolve(Ya.call(qa)).catch(()=>{}))}function Jl(){const i=!!su();B("fullscreenBtn")&&B("fullscreenBtn").setAttribute("title",i?"Exit Fullscreen (F)":"Fullscreen (F)"),B("fsSettingBtn")&&(B("fsSettingBtn").textContent=i?"ON":"OFF",B("fsSettingBtn").classList.toggle("on",i))}Ya?(B("fullscreenBtn")&&B("fullscreenBtn").addEventListener("click",i=>{i.stopPropagation(),Za()}),B("fsSettingBtn")&&B("fsSettingBtn").addEventListener("click",i=>{i.stopPropagation(),Za()}),document.addEventListener("fullscreenchange",()=>{Jl(),Ks()}),document.addEventListener("webkitfullscreenchange",()=>{Jl(),Ks()})):(B("fullscreenBtn")&&(B("fullscreenBtn").style.display="none"),B("fsSettingRow")&&(B("fsSettingRow").style.display="none"));dc.addEventListener("click",()=>{U.mode==="playing"&&!ui&&!cn.locked&&cn.requestLock()});cn.onLockChange=i=>{ui||!i&&U.mode==="playing"&&Qs()};window.addEventListener("blur",Qs);document.addEventListener("visibilitychange",()=>{document.hidden&&Qs()});window.addEventListener("keydown",i=>{if((i.key==="p"||i.key==="P")&&(U.mode==="paused"?iu():Qs()),(i.key==="r"||i.key==="R")&&(U.mode==="over"||U.mode==="paused")&&qn(),i.key==="Enter"&&U.mode==="over"&&qn(),(i.key==="Enter"||i.key===" ")&&U.mode==="briefing"&&(i.preventDefault(),eu()),(i.key==="Enter"||i.key===" ")&&U.mode==="over_break"&&(i.preventDefault(),nu()),i.key==="m"||i.key==="M"){const t=ne.toggleMute();B("soundBtn")&&(B("soundBtn").textContent=t?"🔊":"🔇",B("soundBtn").setAttribute("title",t?"Mute Sound (M)":"Unmute Sound (M)"))}(i.key==="f"||i.key==="F")&&Za()});document.addEventListener("touchmove",i=>{U.mode==="playing"&&i.preventDefault()},{passive:!1});document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("contextmenu",i=>i.preventDefault());function ru(){const i=it.control;for(const[t,e]of[["mouseSens","mouseSensitivity"],["joySens","joystickSensitivity"],["resp","responsiveness"]])B(t).value=i[e],B(t+"V").textContent=i[e].toFixed(2);B("joyMode")&&(B("joyMode").value=i.showJoystick||"auto")}for(const[i,t]of[["mouseSens","mouseSensitivity"],["joySens","joystickSensitivity"],["resp","responsiveness"]])B(i).addEventListener("input",()=>{it.control[t]=parseFloat(B(i).value),B(i+"V").textContent=it.control[t].toFixed(2),qh()});B("joyMode")&&B("joyMode").addEventListener("change",()=>{it.control.showJoystick=B("joyMode").value,qh(),Yn()});const Zo=new R(it.camera.position.x,it.camera.position.y,it.camera.position.z),a_=it.camera.pitchDeg*Math.PI/180,Nr=new R,$o=new R,Ko=new qe,jl=new qe,Ql=new se,c_=new R(0,1,0),Be=new R;function l_(i,t){if(U.mode==="menu"){Gn.visible=!1,hi.hide();const n=t*.14,s=26+6*Math.sin(t*.23);Ge.position.set(Math.sin(n)*s,7.5+2.2*Math.cos(t*.19),-10.5+Math.cos(n)*s*.75),Nr.set(0,1.4,-10),Ge.lookAt(Nr);return}Wt.shake*=Math.exp(-9*i),Wt.kick*=Math.exp(-12*i);const e=Wt.shake*.012;if($o.set(Zo.x+e*Math.sin(t*91.3),Zo.y+e*Math.sin(t*77.1+1.3)-Wt.kick*.01,Zo.z+Wt.kick*.015),Ge.rotation.order="YXZ",Ge.rotation.set(a_+e*.6*Math.sin(t*63.7),0,e*.4*Math.sin(t*57.9)),Ko.copy(Ge.quaternion),Wt.follow){Wt.hitTime+=i;const n=Be.x,s=Be.z- -1.22,r=Math.hypot(n,s);if(r>1.2){const d=1-Math.exp(-6*i);Wt.dirX+=(n/r-Wt.dirX)*d,Wt.dirZ+=(s/r-Wt.dirZ)*d;const h=Math.hypot(Wt.dirX,Wt.dirZ)||1;Wt.dirX/=h,Wt.dirZ/=h}const o=Wt.hitTime>.05?Math.min(1,(Wt.hitTime-.05)/.38):0;Wt.zoom+=(o-Wt.zoom)*(1-Math.exp(-9*i));const a=7.2,c=.34,l=5+.14*Math.min(r,50)+.3*Math.max(0,Be.y);Wt.zoomPos.set(-Wt.dirX*a+n*c,l,-1.22-Wt.dirZ*a+s*c),Nr.set(Be.x+Qt.ball.vel.x*.08,Math.max(.25,Be.y*.65),Be.z+Qt.ball.vel.z*.08),Wt.lookPos.lerp(Nr,1-Math.exp(-14*i)),Ge.position.lerpVectors($o,Wt.zoomPos,Wt.zoom),Ql.lookAt(Ge.position,Wt.lookPos,c_),jl.setFromRotationMatrix(Ql),Ge.quaternion.slerpQuaternions(Ko,jl,Wt.zoom);const u=Wt.zoom<.22;Gn.visible=u}else Wt.zoom*=Math.exp(-10*i),Ge.position.copy($o),Ge.quaternion.copy(Ko),Gn.visible=!0}function h_(i,t,e){Qt.bat.poseAt(i,Gn.position,Gn.quaternion),hi.update(t,e);const n=Math.max(0,U.runupTime);U.runup?Kh(n,U.runup,Ti):Object.assign(Ti,{x:.42,y:0,z:-30,lean:0,armR:0,armL:0,legL:0,legR:0,kneeL:0,kneeR:0}),jh.apply(Ti),Qh.update(Qt.fielding,t,e);const s=Qt.ball;Qt.fielding&&Qt.fielding.heldBallPos?Be.copy(Qt.fielding.heldBallPos):s.active?(Be.lerpVectors(s.prevPos,s.pos,i),Ga.quaternion.copy(s.orientation),U.phase!=="runup"&&gs.push(Be)):U.phase==="runup"&&Ti.hand?Be.copy(Ti.hand):Be.set(0,-10,0),Ga.position.copy(Be),Bs.position.set(Be.x,.012,Be.z);const r=Math.max(0,Be.y),o=Bs.userData.disc,a=Bs.userData.ring;if(o&&(o.material.opacity=Math.max(.1,.5-r*.08),o.scale.setScalar(1+r*.25)),a&&(a.material.opacity=U.hitThisBall?.78:0,a.scale.setScalar(1+Math.min(2.5,Wt.zoom*1.6))),Bs.visible=Be.y>-1,ss.anim)ss.setOpacity(1);else{const c=$e.lerp(.35,1,Math.min(1,Wt.zoom*2.5));ss.setOpacity(c)}ss.update(t),fc.update(t),U.hitThisBall&&Qt.ball.active&&Qt.ball.vel.lengthSq()>484&&(U.emberTimer-=t,U.emberTimer<=0&&(We.ballFlightEmber(Be,Qt.ball.vel),U.emberTimer=.028)),Ws.update(Gn,t,Gn.visible&&U.mode==="playing"),wi.update(t),We.update(t),oo.update(e),l_(t,e),Di.render(en,Ge)}let Js=performance.now(),ri=0;const es=it.physics.dt;function ou(i){requestAnimationFrame(ou);let t=(i-Js)/1e3;if(Js=i,t>.1&&(t=.1),Gr>0&&(Gr-=t,Gr<=0&&B("message").classList.remove("show")),U.hitFreeze>0&&(U.hitFreeze-=t,t=0),U.mode==="playing"){cn.applyTo(Qt.bat,U.phase==="result",t),ui||Kx(cn.locked?"":"Click to take guard (locks the mouse)"),ri+=t;let e=Math.floor(ri/es);e>it.physics.maxStepsPerFrame&&(e=it.physics.maxStepsPerFrame,ri=e*es);for(let n=0;n<e;n++)$l.lerpVectors(Wa,Qt.bat.target,(n+1)/e),e_(es,$l);e>0&&Wa.copy(Qt.bat.target),ri-=e*es}else(U.mode==="menu"||U.mode==="briefing")&&Qt.bat.step(es,Qt.bat.target);h_(U.mode==="playing"?ri/es:1,t,i/1e3)}requestAnimationFrame(ou);window.__cricket={world:Qt,G:U,CONFIG:it};
