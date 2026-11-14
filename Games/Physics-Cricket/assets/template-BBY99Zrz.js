(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="170",Bh=0,il=1,zh=2,Ic=1,Uc=2,An=3,Kn=0,Le=1,_e=2,$n=0,qi=1,Io=2,sl=3,rl=4,kh=5,li=100,Vh=101,Hh=102,Gh=103,Wh=104,Xh=200,qh=201,Yh=202,Zh=203,Uo=204,No=205,$h=206,Jh=207,Kh=208,jh=209,Qh=210,tu=211,eu=212,nu=213,iu=214,Fo=0,Oo=1,Bo=2,Ji=3,zo=4,ko=5,Vo=6,Ho=7,Nc=0,su=1,ru=2,Jn=0,ou=1,au=2,lu=3,cu=4,hu=5,uu=6,fu=7,Fc=300,Ki=301,ji=302,Go=303,Wo=304,Or=306,Yn=1e3,ui=1001,Xo=1002,Ge=1003,du=1004,Ws=1005,gn=1006,Wr=1007,fi=1008,In=1009,Oc=1010,Bc=1011,Ds=1012,Ca=1013,di=1014,_n=1015,zs=1016,Pa=1017,La=1018,Qi=1020,zc=35902,kc=1021,Vc=1022,un=1023,Hc=1024,Gc=1025,Yi=1026,ts=1027,Da=1028,Ia=1029,Wc=1030,Ua=1031,Na=1033,Er=33776,wr=33777,Tr=33778,Ar=33779,qo=35840,Yo=35841,Zo=35842,$o=35843,Jo=36196,Ko=37492,jo=37496,Qo=37808,ta=37809,ea=37810,na=37811,ia=37812,sa=37813,ra=37814,oa=37815,aa=37816,la=37817,ca=37818,ha=37819,ua=37820,fa=37821,Rr=36492,da=36494,pa=36495,Xc=36283,ma=36284,ga=36285,_a=36286,pu=3200,mu=3201,qc=0,gu=1,Cn="",ke="srgb",is="srgb-linear",Br="linear",he="srgb",Si=7680,ol=519,_u=512,vu=513,xu=514,Yc=515,Mu=516,yu=517,Su=518,bu=519,va=35044,Eu=35048,al="300 es",Pn=2e3,Lr=2001;class ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const Zi=Math.PI/180,Is=180/Math.PI;function vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function Fa(i,t){return(i%t+t)%t}function wu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Tu(i,t,e){return i!==t?(e-i)/(t-i):0}function Ts(i,t,e){return(1-e)*i+e*t}function Au(i,t,e,n){return Ts(i,t,1-Math.exp(-e*n))}function Ru(i,t=1){return t-Math.abs(Fa(i,t*2)-t)}function Cu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Lu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Du(i,t){return i+Math.random()*(t-i)}function Iu(i){return i*(.5-Math.random())}function Uu(i){i!==void 0&&(ll=i);let t=ll+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nu(i){return i*Zi}function Fu(i){return i*Is}function Ou(i){return(i&i-1)===0&&i!==0}function Bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ku(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zc={DEG2RAD:Zi,RAD2DEG:Is,generateUUID:vn,clamp:Pe,euclideanModulo:Fa,mapLinear:wu,inverseLerp:Tu,lerp:Ts,damp:Au,pingpong:Ru,smoothstep:Cu,smootherstep:Pu,randInt:Lu,randFloat:Du,randFloatSpread:Iu,seededRandom:Uu,degToRad:Nu,radToDeg:Fu,isPowerOfTwo:Ou,ceilPowerOfTwo:Bu,floorPowerOfTwo:zu,setQuaternionFromProperEuler:ku,normalize:ce,denormalize:hn};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,s,r,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],S=s[4],M=s[7],D=s[2],A=s[5],C=s[8];return r[0]=o*_+a*E+l*D,r[3]=o*m+a*S+l*A,r[6]=o*p+a*M+l*C,r[1]=c*_+h*E+u*D,r[4]=c*m+h*S+u*A,r[7]=c*p+h*M+u*C,r[2]=f*_+d*E+g*D,r[5]=f*m+d*S+g*A,r[8]=f*p+d*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new $t;function $c(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vu(){const i=Dr("canvas");return i.style.display="block",i}const cl={};function ys(i){i in cl||(cl[i]=!0,console.warn(i))}function Hu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:is,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Dn(i.r),i.g=Dn(i.g),i.b=Dn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?Br:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const hl=[.64,.33,.3,.6,.15,.06],ul=[.2126,.7152,.0722],fl=[.3127,.329],dl=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[is]:{primaries:hl,whitePoint:fl,transfer:Br,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:ul,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:hl,whitePoint:fl,transfer:he,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:ul,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let bi;class Xu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=Dr("canvas")),bi.width=t.width,bi.height=t.height;const n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Dn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qu=0;class Jc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qr(s[o].image)):r.push(qr(s[o]))}else r=qr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yu=0;class Fe extends ss{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=ui,s=ui,r=gn,o=fi,a=un,l=In,c=Fe.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=vn(),this.name="",this.source=new Jc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yn:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yn:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Fc;Fe.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,M=(d+1)/2,D=(p+1)/2,A=(h+f)/4,C=(u+_)/4,I=(g+m)/4;return S>M&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=C/n):M>D?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=C/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zu extends ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Zu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kc extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $u extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const D=Math.sqrt(S),A=Math.atan2(D,p*E);m=Math.sin(m*A)/D,a=Math.sin(a*A)/D}const M=a*E;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yr.copy(this).projectOnVector(t),this.sub(Yr)}reflect(t){return this.sub(Yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new T,ml=new Oe;class vi{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),qs.subVectors(this.max,cs),Ei.subVectors(t.a,cs),wi.subVectors(t.b,cs),Ti.subVectors(t.c,cs),Bn.subVectors(wi,Ei),zn.subVectors(Ti,wi),Qn.subVectors(Ei,Ti);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Qn.z,Qn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Qn.z,0,-Qn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Qn.y,Qn.x,0];return!Zr(e,Ei,wi,Ti,qs)||(e=[1,0,0,0,1,0,0,0,1],!Zr(e,Ei,wi,Ti,qs))?!1:(Ys.crossVectors(Bn,zn),e=[Ys.x,Ys.y,Ys.z],Zr(e,Ei,wi,Ti,qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new T,new T,new T,new T,new T,new T,new T,new T],an=new T,Xs=new vi,Ei=new T,wi=new T,Ti=new T,Bn=new T,zn=new T,Qn=new T,cs=new T,qs=new T,Ys=new T,ti=new T;function Zr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);const a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ju=new vi,hs=new T,$r=new T;class rs{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ju.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add($r)),this.expandByPoint(hs.copy(t.center).sub($r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new T,Jr=new T,Zs=new T,kn=new T,Kr=new T,$s=new T,jr=new T;class jc{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jr.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(Jr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zs),a=kn.dot(this.direction),l=-kn.dot(Zs),c=kn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jr).addScaledVector(Zs,f),d}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),$s.subVectors(n,t),jr.crossVectors(Kr,$s);let o=this.direction.dot(jr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const l=a*this.direction.dot($s.crossVectors(kn,$s));if(l<0)return null;const c=a*this.direction.dot(Kr.cross(kn));if(c<0||l+c>o)return null;const h=-a*kn.dot(jr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),o=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ku,t,ju)}lookAt(t,e,n){const s=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Vn.crossVectors(n,Ye),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Vn.crossVectors(n,Ye)),Vn.normalize(),Js.crossVectors(Ye,Vn),s[0]=Vn.x,s[4]=Js.x,s[8]=Ye.x,s[1]=Vn.y,s[5]=Js.y,s[9]=Ye.y,s[2]=Vn.z,s[6]=Js.z,s[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],S=n[7],M=n[11],D=n[15],A=s[0],C=s[4],I=s[8],v=s[12],x=s[1],R=s[5],H=s[9],N=s[13],k=s[2],G=s[6],X=s[10],K=s[14],Z=s[3],pt=s[7],Mt=s[11],Tt=s[15];return r[0]=o*A+a*x+l*k+c*Z,r[4]=o*C+a*R+l*G+c*pt,r[8]=o*I+a*H+l*X+c*Mt,r[12]=o*v+a*N+l*K+c*Tt,r[1]=h*A+u*x+f*k+d*Z,r[5]=h*C+u*R+f*G+d*pt,r[9]=h*I+u*H+f*X+d*Mt,r[13]=h*v+u*N+f*K+d*Tt,r[2]=g*A+_*x+m*k+p*Z,r[6]=g*C+_*R+m*G+p*pt,r[10]=g*I+_*H+m*X+p*Mt,r[14]=g*v+_*N+m*K+p*Tt,r[3]=E*A+S*x+M*k+D*Z,r[7]=E*C+S*R+M*G+D*pt,r[11]=E*I+S*H+M*X+D*Mt,r[15]=E*v+S*N+M*K+D*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,S=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,M=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,D=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,A=e*E+n*S+s*M+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=E*C,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*C,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*C,t[4]=S*C,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*C,t[8]=M*C,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*C,t[12]=D*C,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,E=l*c,S=l*h,M=l*u,D=n.x,A=n.y,C=n.z;return s[0]=(1-(_+p))*D,s[1]=(d+M)*D,s[2]=(g-S)*D,s[3]=0,s[4]=(d-M)*A,s[5]=(1-(f+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+S)*C,s[9]=(m-E)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ai.set(s[0],s[1],s[2]).length();const o=Ai.set(s[4],s[5],s[6]).length(),a=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const c=1/r,h=1/o,u=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Pn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===Pn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h;let g,_;if(a===Pn)g=(o+r)*u,_=-2*u;else if(a===Lr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ai=new T,ln=new ne,Ku=new T(0,0,0),ju=new T(1,1,1),Vn=new T,Js=new T,Ye=new T,gl=new ne,_l=new Oe;class fn{constructor(t=0,e=0,n=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _l.setFromEuler(this),this.setFromQuaternion(_l,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qu=0;const vl=new T,Ri=new Oe,En=new ne,Ks=new T,us=new T,tf=new T,ef=new Oe,xl=new T(1,0,0),Ml=new T(0,1,0),yl=new T(0,0,1),Sl={type:"added"},nf={type:"removed"},Ci={type:"childadded",child:null},Qr={type:"childremoved",child:null};class Te extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new T,e=new fn,n=new Oe,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new $t}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(xl,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return vl.copy(t).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xl,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ks.copy(t):Ks.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(us,Ks,this.up):En.lookAt(Ks,us,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(En),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nf),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new T(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new T,wn=new T,to=new T,Tn=new T,Pi=new T,Li=new T,bl=new T,eo=new T,no=new T,io=new T,so=new Me,ro=new Me,oo=new Me;class $e{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),wn.subVectors(n,e),to.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(wn),l=cn.dot(to),c=wn.dot(wn),h=wn.dot(to),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return so.setScalar(0),ro.setScalar(0),oo.setScalar(0),so.fromBufferAttribute(t,e),ro.fromBufferAttribute(t,n),oo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(so,r.x),o.addScaledVector(ro,r.y),o.addScaledVector(oo,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),wn.subVectors(t,e),cn.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),cn.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Pi.subVectors(s,n),Li.subVectors(r,n),eo.subVectors(t,n);const l=Pi.dot(eo),c=Li.dot(eo);if(l<=0&&c<=0)return e.copy(n);no.subVectors(t,s);const h=Pi.dot(no),u=Li.dot(no);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Pi,o);io.subVectors(t,r);const d=Pi.dot(io),g=Li.dot(io);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Li,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return bl.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(bl,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Pi,o).addScaledVector(Li,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},js={h:0,s:0,l:0};function ao(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Fa(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ao(o,r,t+1/3),this.g=ao(o,r,t),this.b=ao(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=th[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return te.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Pe(Ue.r*255,0,255))*65536+Math.round(Pe(Ue.g*255,0,255))*256+Math.round(Pe(Ue.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ue.copy(this),e);const n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=ke){te.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,s=Ue.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(js);const n=Ts(Hn.h,js.h,e),s=Ts(Hn.s,js.s,e),r=Ts(Hn.l,js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new qt;qt.NAMES=th;let sf=0;class xi extends ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=vn(),this.name="",this.blending=qi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=No,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ol,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ol&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fe extends xi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new T,Qs=new lt;class be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=va,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==va&&(t.usage=this.usage),t}}class eh extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nh extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rf=0;const Qe=new ne,lo=new Te,Di=new T,Ze=new vi,fs=new vi,Ce=new T;class Se extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($c(t)?nh:eh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return lo.lookAt(t),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(Ze.min,fs.min),Ze.expandByPoint(Ce),Ce.addVectors(Ze.max,fs.max),Ze.expandByPoint(Ce)):(Ze.expandByPoint(fs.min),Ze.expandByPoint(fs.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(Di.fromBufferAttribute(t,c),Ce.add(Di)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new T,l[I]=new T;const c=new T,h=new T,u=new T,f=new lt,d=new lt,g=new lt,_=new T,m=new T;function p(I,v,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),a[I].add(_),a[v].add(_),a[x].add(_),l[I].add(m),l[v].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,v=E.length;I<v;++I){const x=E[I],R=x.start,H=x.count;for(let N=R,k=R+H;N<k;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const S=new T,M=new T,D=new T,A=new T;function C(I){D.fromBufferAttribute(s,I),A.copy(D);const v=a[I];S.copy(v),S.sub(D.multiplyScalar(D.dot(v))).normalize(),M.crossVectors(A,v);const R=M.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,R)}for(let I=0,v=E.length;I<v;++I){const x=E[I],R=x.start,H=x.count;for(let N=R,k=R+H;N<k;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new be(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new ne,ei=new jc,tr=new rs,wl=new T,er=new T,nr=new T,ir=new T,co=new T,sr=new T,Tl=new T,rr=new T;class nt extends Te{constructor(t=new Se,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(co.fromBufferAttribute(u,t),o?sr.addScaledVector(co,h):sr.addScaledVector(co.sub(e),h))}e.add(sr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(tr.containsPoint(ei.origin)===!1&&(ei.intersectSphere(tr,wl)===null||ei.origin.distanceToSquared(wl)>(t.far-t.near)**2))&&(El.copy(r).invert(),ei.copy(t.ray).applyMatrix4(El),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,D=S;M<D;M+=3){const A=a.getX(M),C=a.getX(M+1),I=a.getX(M+2);s=or(this,p,t,n,c,h,u,A,C,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);s=or(this,o,t,n,c,h,u,E,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,D=S;M<D;M+=3){const A=M,C=M+1,I=M+2;s=or(this,p,t,n,c,h,u,A,C,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,S=m+1,M=m+2;s=or(this,o,t,n,c,h,u,E,S,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function of(i,t,e,n,s,r,o,a){let l;if(t.side===Le?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Kn,a),l===null)return null;rr.copy(a),rr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(rr);return c<e.near||c>e.far?null:{distance:c,point:rr.clone(),object:i}}function or(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,er),i.getVertexPosition(l,nr),i.getVertexPosition(c,ir);const h=of(i,t,e,n,er,nr,ir,Tl);if(h){const u=new T;$e.getBarycoord(Tl,er,nr,ir,u),s&&(h.uv=$e.getInterpolatedAttribute(s,a,l,c,u,new lt)),r&&(h.uv1=$e.getInterpolatedAttribute(r,a,l,c,u,new lt)),o&&(h.normal=$e.getInterpolatedAttribute(o,a,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new T,materialIndex:0};$e.getNormal(er,nr,ir,f.normal),h.face=f,h.barycoord=u}return h}class oe extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(_,m,p,E,S,M,D,A,C,I,v){const x=M/C,R=D/I,H=M/2,N=D/2,k=A/2,G=C+1,X=I+1;let K=0,Z=0;const pt=new T;for(let Mt=0;Mt<X;Mt++){const Tt=Mt*R-N;for(let Pt=0;Pt<G;Pt++){const jt=Pt*x-H;pt[_]=jt*E,pt[m]=Tt*S,pt[p]=k,c.push(pt.x,pt.y,pt.z),pt[_]=0,pt[m]=0,pt[p]=A>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(Pt/C),u.push(1-Mt/I),K+=1}}for(let Mt=0;Mt<I;Mt++)for(let Tt=0;Tt<C;Tt++){const Pt=f+Tt+G*Mt,jt=f+Tt+G*(Mt+1),j=f+(Tt+1)+G*(Mt+1),at=f+(Tt+1)+G*Mt;l.push(Pt,jt,at),l.push(jt,j,at),Z+=6}a.addGroup(d,Z,v),d+=Z,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=es(i[e]);for(const s in n)t[s]=n[s]}return t}function af(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ih(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const lf={clone:es,merge:ze};var cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends xi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class sh extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new T,Al=new lt,Rl=new lt;class tn extends sh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Al,Rl),e.subVectors(Rl,Al)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=-90,Ui=1;class uf extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Ii,Ui,t,e);s.layers=this.layers,this.add(s);const r=new tn(Ii,Ui,t,e);r.layers=this.layers,this.add(r);const o=new tn(Ii,Ui,t,e);o.layers=this.layers,this.add(o);const a=new tn(Ii,Ui,t,e);a.layers=this.layers,this.add(a);const l=new tn(Ii,Ui,t,e);l.layers=this.layers,this.add(l);const c=new tn(Ii,Ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rh extends Fe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ff extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new rh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oe(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:$n});r.uniforms.tEquirect.value=e;const o=new nt(s,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=gn),new uf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ho=new T,df=new T,pf=new $t;class oi{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ho.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ho),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pf.getNormalMatrix(t),s=this.coplanarPoint(ho).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new rs,ar=new T;class Oa{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,o=new oi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],S=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,m-d,M-p).normalize(),n[1].setComponents(l+r,f+c,m+d,M+p).normalize(),n[2].setComponents(l+o,f+h,m+g,M+E).normalize(),n[3].setComponents(l-o,f-h,m-g,M-E).normalize(),n[4].setComponents(l-a,f-u,m-_,M-S).normalize(),e===Pn)n[5].setComponents(l+a,f+u,m+_,M+S).normalize();else if(e===Lr)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ar.x=s.normal.x>0?t.max.x:t.min.x,ar.y=s.normal.y>0?t.max.y:t.min.y,ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function mf(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ve extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*f-o;for(let S=0;S<c;S++){const M=S*u-r;g.push(M,-E,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const S=E+c*p,M=E+c*(p+1),D=E+1+c*(p+1),A=E+1+c*p;d.push(S,M,A),d.push(M,D,A)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.width,t.height,t.widthSegments,t.heightSegments)}}var gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
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
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zf=`#define PI 3.141592653589793
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
} // validated`,kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
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
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
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
#endif`,pd=`struct PhysicalMaterial {
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
}`,md=`
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wd=`#if defined( USE_POINTS_UV )
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
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
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
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
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
#endif`,zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tp=`float getShadowMask() {
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
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`#include <common>
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
}`,Sp=`#if DEPTH_PACKING == 3200
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
}`,bp=`#define DISTANCE
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
}`,Ep=`#define DISTANCE
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Lp=`#define LAMBERT
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
}`,Dp=`#define LAMBERT
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
}`,Ip=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,Np=`#define NORMAL
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
}`,Fp=`#define NORMAL
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
}`,Op=`#define PHONG
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
}`,Bp=`#define PHONG
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
}`,zp=`#define STANDARD
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
}`,kp=`#define STANDARD
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
}`,Vp=`#define TOON
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
}`,Hp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 color;
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
}`,Yp=`uniform float rotation;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:gf,alphahash_pars_fragment:_f,alphamap_fragment:vf,alphamap_pars_fragment:xf,alphatest_fragment:Mf,alphatest_pars_fragment:yf,aomap_fragment:Sf,aomap_pars_fragment:bf,batching_pars_vertex:Ef,batching_vertex:wf,begin_vertex:Tf,beginnormal_vertex:Af,bsdfs:Rf,iridescence_fragment:Cf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:If,clipping_planes_vertex:Uf,color_fragment:Nf,color_pars_fragment:Ff,color_pars_vertex:Of,color_vertex:Bf,common:zf,cube_uv_reflection_fragment:kf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Gf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:qf,colorspace_pars_fragment:Yf,envmap_fragment:Zf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Jf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:ld,envmap_vertex:jf,fog_vertex:Qf,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:od,lights_pars_begin:ad,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:dd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:_d,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:xd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:yd,map_fragment:Sd,map_pars_fragment:bd,map_particle_fragment:Ed,map_particle_pars_fragment:wd,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ad,morphinstance_vertex:Rd,morphcolor_vertex:Cd,morphnormal_vertex:Pd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Dd,normal_fragment_begin:Id,normal_fragment_maps:Ud,normal_pars_fragment:Nd,normal_pars_vertex:Fd,normal_vertex:Od,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Vd,iridescence_pars_fragment:Hd,opaque_fragment:Gd,packing:Wd,premultiplied_alpha_fragment:Xd,project_vertex:qd,dithering_fragment:Yd,dithering_pars_fragment:Zd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:Jd,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tp,skinbase_vertex:ep,skinning_pars_vertex:np,skinning_vertex:ip,skinnormal_vertex:sp,specularmap_fragment:rp,specularmap_pars_fragment:op,tonemapping_fragment:ap,tonemapping_pars_fragment:lp,transmission_fragment:cp,transmission_pars_fragment:hp,uv_pars_fragment:up,uv_pars_vertex:fp,uv_vertex:dp,worldpos_vertex:pp,background_vert:mp,background_frag:gp,backgroundCube_vert:_p,backgroundCube_frag:vp,cube_vert:xp,cube_frag:Mp,depth_vert:yp,depth_frag:Sp,distanceRGBA_vert:bp,distanceRGBA_frag:Ep,equirect_vert:wp,equirect_frag:Tp,linedashed_vert:Ap,linedashed_frag:Rp,meshbasic_vert:Cp,meshbasic_frag:Pp,meshlambert_vert:Lp,meshlambert_frag:Dp,meshmatcap_vert:Ip,meshmatcap_frag:Up,meshnormal_vert:Np,meshnormal_frag:Fp,meshphong_vert:Op,meshphong_frag:Bp,meshphysical_vert:zp,meshphysical_frag:kp,meshtoon_vert:Vp,meshtoon_frag:Hp,points_vert:Gp,points_frag:Wp,shadow_vert:Xp,shadow_frag:qp,sprite_vert:Yp,sprite_frag:Zp},vt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},pn={basic:{uniforms:ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:ze([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:ze([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:ze([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:ze([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:ze([vt.points,vt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:ze([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:ze([vt.common,vt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:ze([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:ze([vt.sprite,vt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:ze([vt.common,vt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:ze([vt.lights,vt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};pn.physical={uniforms:ze([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const lr={r:0,b:0,g:0},ii=new fn,$p=new ne;function Jp(i,t,e,n,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function _(E){let S=!1;const M=g(E);M===null?p(a,l):M&&M.isColor&&(p(M,1),S=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const M=g(S);M&&(M.isCubeTexture||M.mapping===Or)?(h===void 0&&(h=new nt(new oe(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:es(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(S.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(ii)),h.material.toneMapped=te.getTransfer(M.colorSpace)!==he,(u!==M||f!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new nt(new Ve(2,2),new sn({name:"BackgroundMaterial",uniforms:es(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=te.getTransfer(M.colorSpace)!==he,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,S){E.getRGB(lr,ih(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m}}function Kp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(x,R,H,N,k){let G=!1;const X=u(N,H,R);r!==X&&(r=X,c(r.object)),G=d(x,N,H,k),G&&g(x,N,H,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(x,R,H,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,R,H){const N=H.wireframe===!0;let k=n[x.id];k===void 0&&(k={},n[x.id]=k);let G=k[R.id];G===void 0&&(G={},k[R.id]=G);let X=G[N];return X===void 0&&(X=f(l()),G[N]=X),X}function f(x){const R=[],H=[],N=[];for(let k=0;k<e;k++)R[k]=0,H[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:N,object:x,attributes:{},index:null}}function d(x,R,H,N){const k=r.attributes,G=R.attributes;let X=0;const K=H.getAttributes();for(const Z in K)if(K[Z].location>=0){const Mt=k[Z];let Tt=G[Z];if(Tt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(Tt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(Tt=x.instanceColor)),Mt===void 0||Mt.attribute!==Tt||Tt&&Mt.data!==Tt.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function g(x,R,H,N){const k={},G=R.attributes;let X=0;const K=H.getAttributes();for(const Z in K)if(K[Z].location>=0){let Mt=G[Z];Mt===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor));const Tt={};Tt.attribute=Mt,Mt&&Mt.data&&(Tt.data=Mt.data),k[Z]=Tt,X++}r.attributes=k,r.attributesNum=X,r.index=N}function _(){const x=r.newAttributes;for(let R=0,H=x.length;R<H;R++)x[R]=0}function m(x){p(x,0)}function p(x,R){const H=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;H[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),k[x]!==R&&(i.vertexAttribDivisor(x,R),k[x]=R)}function E(){const x=r.newAttributes,R=r.enabledAttributes;for(let H=0,N=R.length;H<N;H++)R[H]!==x[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function S(x,R,H,N,k,G,X){X===!0?i.vertexAttribIPointer(x,R,H,k,G):i.vertexAttribPointer(x,R,H,N,k,G)}function M(x,R,H,N){_();const k=N.attributes,G=H.getAttributes(),X=R.defaultAttributeValues;for(const K in G){const Z=G[K];if(Z.location>=0){let pt=k[K];if(pt===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),pt!==void 0){const Mt=pt.normalized,Tt=pt.itemSize,Pt=t.get(pt);if(Pt===void 0)continue;const jt=Pt.buffer,j=Pt.type,at=Pt.bytesPerElement,yt=j===i.INT||j===i.UNSIGNED_INT||pt.gpuType===Ca;if(pt.isInterleavedBufferAttribute){const ht=pt.data,zt=ht.stride,Wt=pt.offset;if(ht.isInstancedInterleavedBuffer){for(let Vt=0;Vt<Z.locationSize;Vt++)p(Z.location+Vt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Vt=0;Vt<Z.locationSize;Vt++)m(Z.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Vt=0;Vt<Z.locationSize;Vt++)S(Z.location+Vt,Tt/Z.locationSize,j,Mt,zt*at,(Wt+Tt/Z.locationSize*Vt)*at,yt)}else{if(pt.isInstancedBufferAttribute){for(let ht=0;ht<Z.locationSize;ht++)p(Z.location+ht,pt.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ht=0;ht<Z.locationSize;ht++)m(Z.location+ht);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let ht=0;ht<Z.locationSize;ht++)S(Z.location+ht,Tt/Z.locationSize,j,Mt,Tt*at,Tt/Z.locationSize*ht*at,yt)}}else if(X!==void 0){const Mt=X[K];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(Z.location,Mt);break;case 3:i.vertexAttrib3fv(Z.location,Mt);break;case 4:i.vertexAttrib4fv(Z.location,Mt);break;default:i.vertexAttrib1fv(Z.location,Mt)}}}}E()}function D(){I();for(const x in n){const R=n[x];for(const H in R){const N=R[H];for(const k in N)h(N[k].object),delete N[k];delete R[H]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const H in R){const N=R[H];for(const k in N)h(N[k].object),delete N[k];delete R[H]}delete n[x.id]}function C(x){for(const R in n){const H=n[R];if(H[x.id]===void 0)continue;const N=H[x.id];for(const k in N)h(N[k].object),delete N[k];delete H[x.id]}}function I(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:v,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function jp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==un&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==In&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_n&&!I)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:M,vertexTextures:D,maxSamples:A}}function tm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new oi,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,S=E*4;let M=p.clippingState||null;l.value=M,M=h(g,f,S,d);for(let D=0;D!==S;++D)M[D]=e[D];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=d;S!==_;++S,M+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function em(i){let t=new WeakMap;function e(o,a){return a===Go?o.mapping=Ki:a===Wo&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Go||a===Wo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ff(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ah extends sh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,Cl=[.125,.215,.35,.446,.526,.582],ci=20,uo=new ah,Pl=new qt;let fo=null,po=0,mo=0,go=!1;const ai=(1+Math.sqrt(5))/2,Ni=1/ai,Ll=[new T(-ai,Ni,0),new T(ai,Ni,0),new T(-Ni,0,ai),new T(Ni,0,ai),new T(0,ai,-Ni),new T(0,ai,Ni),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Dl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fo,po,mo),this._renderer.xr.enabled=go,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:zs,format:un,colorSpace:is,depthBuffer:!1},s=Il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nm(r)),this._blurMaterial=im(r,t,e)}return s}_compileMaterial(t){const e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,uo)}_sceneToCubeUV(t,e,n,s){const a=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Pl),h.toneMapping=Jn,h.autoClear=!1;const d=new fe({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new nt(new oe,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Pl),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;cr(s,E*S,p>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ki||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ll[(s-r-1)%Ll.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new nt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ci-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ci;m>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const p=[];let E=0;for(let C=0;C<ci;++C){const I=C/_,v=Math.exp(-I*I/2);p.push(v),C===0?E+=v:C<m&&(E+=2*v)}for(let C=0;C<p.length;C++)p[C]=p[C]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const M=this._sizeLods[s],D=3*M*(s>S-Gi?s-S+Gi:0),A=4*(this._cubeSize-M);cr(e,D,A,3*M,2*M),l.setRenderTarget(e),l.render(u,uo)}}function nm(i){const t=[],e=[],n=[];let s=i;const r=i-Gi+1+Cl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Gi?l=Cl[o-i+Gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),S=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,I=A>2?0:-1,v=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];E.set(v,_*g*A),S.set(f,m*g*A);const x=[A,A,A,A,A,A];M.set(x,p*g*A)}const D=new Se;D.setAttribute("position",new be(E,_)),D.setAttribute("uv",new be(S,m)),D.setAttribute("faceIndex",new be(M,p)),t.push(D),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Il(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function im(i,t,e){const n=new Float32Array(ci),s=new T(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ul(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Nl(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}function sm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Go||l===Wo,h=l===Ki||l===ji;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Dl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Dl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function rm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function om(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let S=0,M=E.length;S<M;S+=3){const D=E[S+0],A=E[S+1],C=E[S+2];f.push(D,A,A,C,C,D)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,M=E.length/3-1;S<M;S+=3){const D=S+0,A=S+1,C=S+2;f.push(D,A,A,C,C,D)}}else return;const m=new($c(f)?nh:eh)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function am(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cm(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let D=a.attributes.position.count*M,A=1;D>t.maxTextureSize&&(A=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const C=new Float32Array(D*A*4*u),I=new Kc(C,D,A,u);I.type=_n,I.needsUpdate=!0;const v=M*4;for(let R=0;R<u;R++){const H=p[R],N=E[R],k=S[R],G=D*A*4*R;for(let X=0;X<H.count;X++){const K=X*v;g===!0&&(s.fromBufferAttribute(H,X),C[G+K+0]=s.x,C[G+K+1]=s.y,C[G+K+2]=s.z,C[G+K+3]=0),_===!0&&(s.fromBufferAttribute(N,X),C[G+K+4]=s.x,C[G+K+5]=s.y,C[G+K+6]=s.z,C[G+K+7]=0),m===!0&&(s.fromBufferAttribute(k,X),C[G+K+8]=s.x,C[G+K+9]=s.y,C[G+K+10]=s.z,C[G+K+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new lt(D,A)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function hm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class lh extends Fe{constructor(t,e,n,s,r,o,a,l,c,h=Yi){if(h!==Yi&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=di),n===void 0&&h===ts&&(n=Qi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ch=new Fe,Fl=new lh(1,1),hh=new Kc,uh=new $u,fh=new rh,Ol=[],Bl=[],zl=new Float32Array(16),kl=new Float32Array(9),Vl=new Float32Array(4);function os(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zr(i,t){let e=Bl[t];e===void 0&&(e=new Int32Array(t),Bl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),Re(e,n)}}function gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;kl.set(n),i.uniformMatrix3fv(this.addr,!1,kl),Re(e,n)}}function _m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;zl.set(n),i.uniformMatrix4fv(this.addr,!1,zl),Re(e,n)}}function vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function Sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fl.compareFunction=Yc,r=Fl):r=ch,e.setTexture2D(t||r,s)}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uh,s)}function Rm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fh,s)}function Cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hh,s)}function Pm(i){switch(i){case 5126:return um;case 35664:return fm;case 35665:return dm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return vm;case 35667:case 35671:return xm;case 35668:case 35672:return Mm;case 35669:case 35673:return ym;case 5125:return Sm;case 36294:return bm;case 36295:return Em;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Lm(i,t){i.uniform1fv(this.addr,t)}function Dm(i,t){const e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function Im(i,t){const e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function Um(i,t){const e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function Nm(i,t){const e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fm(i,t){const e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Om(i,t){const e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bm(i,t){i.uniform1iv(this.addr,t)}function zm(i,t){i.uniform2iv(this.addr,t)}function km(i,t){i.uniform3iv(this.addr,t)}function Vm(i,t){i.uniform4iv(this.addr,t)}function Hm(i,t){i.uniform1uiv(this.addr,t)}function Gm(i,t){i.uniform2uiv(this.addr,t)}function Wm(i,t){i.uniform3uiv(this.addr,t)}function Xm(i,t){i.uniform4uiv(this.addr,t)}function qm(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ch,r[o])}function Ym(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uh,r[o])}function Zm(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fh,r[o])}function $m(i,t,e){const n=this.cache,s=t.length,r=zr(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hh,r[o])}function Jm(i){switch(i){case 5126:return Lm;case 35664:return Dm;case 35665:return Im;case 35666:return Um;case 35674:return Nm;case 35675:return Fm;case 35676:return Om;case 5124:case 35670:return Bm;case 35667:case 35671:return zm;case 35668:case 35672:return km;case 35669:case 35673:return Vm;case 5125:return Hm;case 36294:return Gm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return $m}}class Km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pm(e.type)}}class jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jm(e.type)}}class Qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function Hl(i,t){i.seq.push(t),i.map[t.id]=t}function t0(i,t,e){const n=i.name,s=n.length;for(_o.lastIndex=0;;){const r=_o.exec(n),o=_o.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hl(e,c===void 0?new Km(a,i,t):new jm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Qm(a),Hl(e,u)),e=u}}}class Cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);t0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Gl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const e0=37297;let n0=0;function i0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Wl=new $t;function s0(i){te._getMatrix(Wl,te.workingColorSpace,i);const t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+i0(i.getShaderSource(t),o)}else return s}function r0(i,t){const e=s0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function o0(i,t){let e;switch(t){case ou:e="Linear";break;case au:e="Reinhard";break;case lu:e="Cineon";break;case cu:e="ACESFilmic";break;case uu:e="AgX";break;case fu:e="Neutral";break;case hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new T;function a0(){te.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function c0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function h0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ss(i){return i!==""}function ql(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const u0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(i){return i.replace(u0,d0)}const f0=new Map;function d0(i,t){let e=Kt[t];if(e===void 0){const n=f0.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xa(e)}const p0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zl(i){return i.replace(p0,m0)}function m0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $l(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function g0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ic?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function _0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case ji:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function x0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nc:t="ENVMAP_BLENDING_MULTIPLY";break;case su:t="ENVMAP_BLENDING_MIX";break;case ru:t="ENVMAP_BLENDING_ADD";break}return t}function M0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function y0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=g0(e),c=_0(e),h=v0(e),u=x0(e),f=M0(e),d=l0(e),g=c0(r),_=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(m=[$l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[$l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?o0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,r0("linearToOutputTexel",e.outputColorSpace),a0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),o=xa(o),o=ql(o,e),o=Yl(o,e),a=xa(a),a=ql(a,e),a=Yl(a,e),o=Zl(o),a=Zl(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+m+o,M=E+p+a,D=Gl(s,s.VERTEX_SHADER,S),A=Gl(s,s.FRAGMENT_SHADER,M);s.attachShader(_,D),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(R){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(D).trim(),k=s.getShaderInfoLog(A).trim();let G=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,A);else{const K=Xl(s,D,"vertex"),Z=Xl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+K+`
`+Z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||k==="")&&(X=!1);X&&(R.diagnostics={runnable:G,programLog:H,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(D),s.deleteShader(A),I=new Cr(s,_),v=h0(s,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,e0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=n0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let S0=0;class b0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new E0(t),e.set(t,n)),n}}class E0{constructor(t){this.id=S0++,this.code=t,this.usedTimes=0}}function w0(i,t,e,n,s,r,o){const a=new Qc,l=new b0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,R,H,N){const k=H.fog,G=N.geometry,X=v.isMeshStandardMaterial?H.environment:null,K=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),Z=K&&K.mapping===Or?K.image.height:null,pt=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const Mt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Tt=Mt!==void 0?Mt.length:0;let Pt=0;G.morphAttributes.position!==void 0&&(Pt=1),G.morphAttributes.normal!==void 0&&(Pt=2),G.morphAttributes.color!==void 0&&(Pt=3);let jt,j,at,yt;if(pt){const le=pn[pt];jt=le.vertexShader,j=le.fragmentShader}else jt=v.vertexShader,j=v.fragmentShader,l.update(v),at=l.getVertexShaderID(v),yt=l.getFragmentShaderID(v);const ht=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Wt=N.isInstancedMesh===!0,Vt=N.isBatchedMesh===!0,Qt=!!v.map,et=!!v.matcap,ut=!!K,L=!!v.aoMap,Dt=!!v.lightMap,ct=!!v.bumpMap,At=!!v.normalMap,gt=!!v.displacementMap,Ht=!!v.emissiveMap,St=!!v.metalnessMap,w=!!v.roughnessMap,y=v.anisotropy>0,V=v.clearcoat>0,Q=v.dispersion>0,rt=v.iridescence>0,tt=v.sheen>0,Ct=v.transmission>0,_t=y&&!!v.anisotropyMap,P=V&&!!v.clearcoatMap,$=V&&!!v.clearcoatNormalMap,F=V&&!!v.clearcoatRoughnessMap,W=rt&&!!v.iridescenceMap,it=rt&&!!v.iridescenceThicknessMap,dt=tt&&!!v.sheenColorMap,ot=tt&&!!v.sheenRoughnessMap,Rt=!!v.specularMap,Lt=!!v.specularColorMap,Jt=!!v.specularIntensityMap,U=Ct&&!!v.transmissionMap,xt=Ct&&!!v.thicknessMap,J=!!v.gradientMap,st=!!v.alphaMap,wt=v.alphaTest>0,bt=!!v.alphaHash,Yt=!!v.extensions;let xe=Jn;v.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(xe=i.toneMapping);const De={shaderID:pt,shaderType:v.type,shaderName:v.name,vertexShader:jt,fragmentShader:j,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:yt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Vt,batchingColor:Vt&&N._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&N.instanceColor!==null,instancingMorph:Wt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:is,alphaToCoverage:!!v.alphaToCoverage,map:Qt,matcap:et,envMap:ut,envMapMode:ut&&K.mapping,envMapCubeUVHeight:Z,aoMap:L,lightMap:Dt,bumpMap:ct,normalMap:At,displacementMap:f&&gt,emissiveMap:Ht,normalMapObjectSpace:At&&v.normalMapType===gu,normalMapTangentSpace:At&&v.normalMapType===qc,metalnessMap:St,roughnessMap:w,anisotropy:y,anisotropyMap:_t,clearcoat:V,clearcoatMap:P,clearcoatNormalMap:$,clearcoatRoughnessMap:F,dispersion:Q,iridescence:rt,iridescenceMap:W,iridescenceThicknessMap:it,sheen:tt,sheenColorMap:dt,sheenRoughnessMap:ot,specularMap:Rt,specularColorMap:Lt,specularIntensityMap:Jt,transmission:Ct,transmissionMap:U,thicknessMap:xt,gradientMap:J,opaque:v.transparent===!1&&v.blending===qi&&v.alphaToCoverage===!1,alphaMap:st,alphaTest:wt,alphaHash:bt,combine:v.combine,mapUv:Qt&&_(v.map.channel),aoMapUv:L&&_(v.aoMap.channel),lightMapUv:Dt&&_(v.lightMap.channel),bumpMapUv:ct&&_(v.bumpMap.channel),normalMapUv:At&&_(v.normalMap.channel),displacementMapUv:gt&&_(v.displacementMap.channel),emissiveMapUv:Ht&&_(v.emissiveMap.channel),metalnessMapUv:St&&_(v.metalnessMap.channel),roughnessMapUv:w&&_(v.roughnessMap.channel),anisotropyMapUv:_t&&_(v.anisotropyMap.channel),clearcoatMapUv:P&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:$&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ot&&_(v.sheenRoughnessMap.channel),specularMapUv:Rt&&_(v.specularMap.channel),specularColorMapUv:Lt&&_(v.specularColorMap.channel),specularIntensityMapUv:Jt&&_(v.specularIntensityMap.channel),transmissionMapUv:U&&_(v.transmissionMap.channel),thicknessMapUv:xt&&_(v.thicknessMap.channel),alphaMapUv:st&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(At||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Qt||st),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Pt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Qt&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===he,decodeVideoTextureEmissive:Ht&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_e,flipSided:v.side===Le,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Yt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&v.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function p(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)x.push(R),x.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(E(x,v),S(x,v),x.push(i.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function E(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function S(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const x=g[v.type];let R;if(x){const H=pn[x];R=lf.clone(H.uniforms)}else R=v.uniforms;return R}function D(v,x){let R;for(let H=0,N=h.length;H<N;H++){const k=h[H];if(k.cacheKey===x){R=k,++R.usedTimes;break}}return R===void 0&&(R=new y0(i,x,v,r),h.push(R)),R}function A(v){if(--v.usedTimes===0){const x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function C(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:I}}function T0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function A0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||A0),n.length>1&&n.sort(f||Jl),s.length>1&&s.sort(f||Jl)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function R0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Kl,i.set(n,[o])):s>=r.length?(o=new Kl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function C0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new qt};break;case"SpotLight":e={position:new T,direction:new T,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function P0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let L0=0;function D0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function I0(i){const t=new C0,e=P0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new ne,o=new ne;function a(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,S=0,M=0,D=0,A=0,C=0;c.sort(D0);for(let v=0,x=c.length;v<x;v++){const R=c[v],H=R.color,N=R.intensity,k=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=H.r*N,u+=H.g*N,f+=H.b*N;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],N);C++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,Z=e.get(R);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=R.shadow.matrix,E++}n.directional[d]=X,d++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(H).multiplyScalar(N),X.distance=k,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[_]=X;const K=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,K.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=K.matrix,R.castShadow){const Z=e.get(R);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=G,M++}_++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(H).multiplyScalar(N),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=X,m++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const K=R.shadow,Z=e.get(R);Z.shadowIntensity=K.intensity,Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=X,g++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(N),X.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==S||I.numSpotShadows!==M||I.numSpotMaps!==D||I.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=S,I.numSpotShadows=M,I.numSpotMaps=D,I.numLightProbes=C,n.version=L0++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const S=c[p];if(S.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(S.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function jl(i){const t=new I0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function U0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new jl(i),t.set(s,[a])):r>=o.length?(a=new jl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class N0 extends xi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class F0 extends xi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const O0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B0=`uniform sampler2D shadow_pass;
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
}`;function z0(i,t,e){let n=new Oa;const s=new lt,r=new lt,o=new Me,a=new N0({depthPacking:mu}),l=new F0,c={},h=e.maxTextureSize,u={[Kn]:Le,[Le]:Kn,[_e]:_e},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:O0,fragmentShader:B0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let p=this.type;this.render=function(A,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending($n),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const N=p!==An&&this.type===An,k=p===An&&this.type!==An;for(let G=0,X=A.length;G<X;G++){const K=A[G],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const pt=Z.getFrameExtents();if(s.multiply(pt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,Z.mapSize.y=r.y)),Z.map===null||N===!0||k===!0){const Tt=this.type!==An?{minFilter:Ge,magFilter:Ge}:{};Z.map!==null&&Z.map.dispose(),Z.map=new pi(s.x,s.y,Tt),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const Mt=Z.getViewportCount();for(let Tt=0;Tt<Mt;Tt++){const Pt=Z.getViewport(Tt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),H.viewport(o),Z.updateMatrices(K,Tt),n=Z.getFrustum(),M(C,I,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===An&&E(Z,I),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,x,R)};function E(A,C){const I=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,I,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,I,d,_,null)}function S(A,C,I,v){let x=null;const R=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)x=R;else if(x=I.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=x.uuid,N=C.uuid;let k=c[H];k===void 0&&(k={},c[H]=k);let G=k[N];G===void 0&&(G=x.clone(),k[N]=G,C.addEventListener("dispose",D)),x=G}if(x.visible=C.visible,x.wireframe=C.wireframe,v===An?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=i.properties.get(x);H.light=I}return x}function M(A,C,I,v,x){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===An)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const N=t.update(A),k=A.material;if(Array.isArray(k)){const G=N.groups;for(let X=0,K=G.length;X<K;X++){const Z=G[X],pt=k[Z.materialIndex];if(pt&&pt.visible){const Mt=S(A,pt,v,x);A.onBeforeShadow(i,A,C,I,N,Mt,Z),i.renderBufferDirect(I,null,N,Mt,A,Z),A.onAfterShadow(i,A,C,I,N,Mt,Z)}}}else if(k.visible){const G=S(A,k,v,x);A.onBeforeShadow(i,A,C,I,N,G,null),i.renderBufferDirect(I,null,N,G,A,null),A.onAfterShadow(i,A,C,I,N,G,null)}}const H=A.children;for(let N=0,k=H.length;N<k;N++)M(H[N],C,I,v,x)}function D(A){A.target.removeEventListener("dispose",D);for(const I in c){const v=c[I],x=A.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const k0={[Fo]:Oo,[Bo]:Vo,[zo]:Ho,[Ji]:ko,[Oo]:Fo,[Vo]:Bo,[Ho]:zo,[ko]:Ji};function V0(i,t){function e(){let U=!1;const xt=new Me;let J=null;const st=new Me(0,0,0,0);return{setMask:function(wt){J!==wt&&!U&&(i.colorMask(wt,wt,wt,wt),J=wt)},setLocked:function(wt){U=wt},setClear:function(wt,bt,Yt,xe,De){De===!0&&(wt*=xe,bt*=xe,Yt*=xe),xt.set(wt,bt,Yt,xe),st.equals(xt)===!1&&(i.clearColor(wt,bt,Yt,xe),st.copy(xt))},reset:function(){U=!1,J=null,st.set(-1,0,0,0)}}}function n(){let U=!1,xt=!1,J=null,st=null,wt=null;return{setReversed:function(bt){if(xt!==bt){const Yt=t.get("EXT_clip_control");xt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const xe=wt;wt=null,this.setClear(xe)}xt=bt},getReversed:function(){return xt},setTest:function(bt){bt?ht(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(bt){J!==bt&&!U&&(i.depthMask(bt),J=bt)},setFunc:function(bt){if(xt&&(bt=k0[bt]),st!==bt){switch(bt){case Fo:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case zo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=bt}},setLocked:function(bt){U=bt},setClear:function(bt){wt!==bt&&(xt&&(bt=1-bt),i.clearDepth(bt),wt=bt)},reset:function(){U=!1,J=null,st=null,wt=null,xt=!1}}}function s(){let U=!1,xt=null,J=null,st=null,wt=null,bt=null,Yt=null,xe=null,De=null;return{setTest:function(le){U||(le?ht(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(le){xt!==le&&!U&&(i.stencilMask(le),xt=le)},setFunc:function(le,rn,Mn){(J!==le||st!==rn||wt!==Mn)&&(i.stencilFunc(le,rn,Mn),J=le,st=rn,wt=Mn)},setOp:function(le,rn,Mn){(bt!==le||Yt!==rn||xe!==Mn)&&(i.stencilOp(le,rn,Mn),bt=le,Yt=rn,xe=Mn)},setLocked:function(le){U=le},setClear:function(le){De!==le&&(i.clearStencil(le),De=le)},reset:function(){U=!1,xt=null,J=null,st=null,wt=null,bt=null,Yt=null,xe=null,De=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,S=null,M=null,D=null,A=null,C=new qt(0,0,0),I=0,v=!1,x=null,R=null,H=null,N=null,k=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=K>=2);let pt=null,Mt={};const Tt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),jt=new Me().fromArray(Tt),j=new Me().fromArray(Pt);function at(U,xt,J,st){const wt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(U,bt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<J;Yt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(xt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return bt}const yt={};yt[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(Ji),ct(!1),At(il),ht(i.CULL_FACE),L($n);function ht(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function zt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Wt(U,xt){return u[U]!==xt?(i.bindFramebuffer(U,xt),u[U]=xt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Vt(U,xt){let J=d,st=!1;if(U){J=f.get(xt),J===void 0&&(J=[],f.set(xt,J));const wt=U.textures;if(J.length!==wt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Yt=wt.length;bt<Yt;bt++)J[bt]=i.COLOR_ATTACHMENT0+bt;J.length=wt.length,st=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,st=!0);st&&i.drawBuffers(J)}function Qt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const et={[li]:i.FUNC_ADD,[Vh]:i.FUNC_SUBTRACT,[Hh]:i.FUNC_REVERSE_SUBTRACT};et[Gh]=i.MIN,et[Wh]=i.MAX;const ut={[Xh]:i.ZERO,[qh]:i.ONE,[Yh]:i.SRC_COLOR,[Uo]:i.SRC_ALPHA,[Qh]:i.SRC_ALPHA_SATURATE,[Kh]:i.DST_COLOR,[$h]:i.DST_ALPHA,[Zh]:i.ONE_MINUS_SRC_COLOR,[No]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[Jh]:i.ONE_MINUS_DST_ALPHA,[tu]:i.CONSTANT_COLOR,[eu]:i.ONE_MINUS_CONSTANT_COLOR,[nu]:i.CONSTANT_ALPHA,[iu]:i.ONE_MINUS_CONSTANT_ALPHA};function L(U,xt,J,st,wt,bt,Yt,xe,De,le){if(U===$n){_===!0&&(zt(i.BLEND),_=!1);return}if(_===!1&&(ht(i.BLEND),_=!0),U!==kh){if(U!==m||le!==v){if((p!==li||M!==li)&&(i.blendEquation(i.FUNC_ADD),p=li,M=li),le)switch(U){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,S=null,D=null,A=null,C.set(0,0,0),I=0,m=U,v=le}return}wt=wt||xt,bt=bt||J,Yt=Yt||st,(xt!==p||wt!==M)&&(i.blendEquationSeparate(et[xt],et[wt]),p=xt,M=wt),(J!==E||st!==S||bt!==D||Yt!==A)&&(i.blendFuncSeparate(ut[J],ut[st],ut[bt],ut[Yt]),E=J,S=st,D=bt,A=Yt),(xe.equals(C)===!1||De!==I)&&(i.blendColor(xe.r,xe.g,xe.b,De),C.copy(xe),I=De),m=U,v=!1}function Dt(U,xt){U.side===_e?zt(i.CULL_FACE):ht(i.CULL_FACE);let J=U.side===Le;xt&&(J=!J),ct(J),U.blending===qi&&U.transparent===!1?L($n):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const st=U.stencilWrite;a.setTest(st),st&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ht(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(U){x!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),x=U)}function At(U){U!==Bh?(ht(i.CULL_FACE),U!==R&&(U===il?i.cullFace(i.BACK):U===zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),R=U}function gt(U){U!==H&&(X&&i.lineWidth(U),H=U)}function Ht(U,xt,J){U?(ht(i.POLYGON_OFFSET_FILL),(N!==xt||k!==J)&&(i.polygonOffset(xt,J),N=xt,k=J)):zt(i.POLYGON_OFFSET_FILL)}function St(U){U?ht(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function w(U){U===void 0&&(U=i.TEXTURE0+G-1),pt!==U&&(i.activeTexture(U),pt=U)}function y(U,xt,J){J===void 0&&(pt===null?J=i.TEXTURE0+G-1:J=pt);let st=Mt[J];st===void 0&&(st={type:void 0,texture:void 0},Mt[J]=st),(st.type!==U||st.texture!==xt)&&(pt!==J&&(i.activeTexture(J),pt=J),i.bindTexture(U,xt||yt[U]),st.type=U,st.texture=xt)}function V(){const U=Mt[pt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function P(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(U){jt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),jt.copy(U))}function ot(U){j.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function Rt(U,xt){let J=c.get(xt);J===void 0&&(J=new WeakMap,c.set(xt,J));let st=J.get(U);st===void 0&&(st=i.getUniformBlockIndex(xt,U.name),J.set(U,st))}function Lt(U,xt){const st=c.get(xt).get(U);l.get(xt)!==st&&(i.uniformBlockBinding(xt,st,U.__bindingPointIndex),l.set(xt,st))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,Mt={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,S=null,M=null,D=null,A=null,C=new qt(0,0,0),I=0,v=!1,x=null,R=null,H=null,N=null,k=null,jt.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:zt,bindFramebuffer:Wt,drawBuffers:Vt,useProgram:Qt,setBlending:L,setMaterial:Dt,setFlipSided:ct,setCullFace:At,setLineWidth:gt,setPolygonOffset:Ht,setScissorTest:St,activeTexture:w,bindTexture:y,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:rt,texImage2D:W,texImage3D:it,updateUBOMapping:Rt,uniformBlockBinding:Lt,texStorage2D:$,texStorage3D:F,texSubImage2D:tt,texSubImage3D:Ct,compressedTexSubImage2D:_t,compressedTexSubImage3D:P,scissor:dt,viewport:ot,reset:Jt}}function Ql(i,t,e,n){const s=H0(n);switch(e){case kc:return i*t;case Hc:return i*t;case Gc:return i*t*2;case Da:return i*t/s.components*s.byteLength;case Ia:return i*t/s.components*s.byteLength;case Wc:return i*t*2/s.components*s.byteLength;case Ua:return i*t*2/s.components*s.byteLength;case Vc:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Na:return i*t*4/s.components*s.byteLength;case Er:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:case $o:return Math.max(i,16)*Math.max(t,8)/4;case qo:case Zo:return Math.max(i,8)*Math.max(t,8)/2;case Jo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rr:case da:case pa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xc:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ga:case _a:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function H0(i){switch(i){case In:case Oc:return{byteLength:1,components:1};case Ds:case Bc:case zs:return{byteLength:2,components:1};case Pa:case La:return{byteLength:2,components:4};case di:case Ca:case _n:return{byteLength:4,components:1};case zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function G0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return d?new OffscreenCanvas(w,y):Dr("canvas")}function _(w,y,V){let Q=1;const rt=St(w);if((rt.width>V||rt.height>V)&&(Q=V/Math.max(rt.width,rt.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const tt=Math.floor(Q*rt.width),Ct=Math.floor(Q*rt.height);u===void 0&&(u=g(tt,Ct));const _t=y?g(tt,Ct):u;return _t.width=tt,_t.height=Ct,_t.getContext("2d").drawImage(w,0,0,tt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+Ct+")."),_t}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,y,V,Q,rt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=y;if(y===i.RED&&(V===i.FLOAT&&(tt=i.R32F),V===i.HALF_FLOAT&&(tt=i.R16F),V===i.UNSIGNED_BYTE&&(tt=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.R8UI),V===i.UNSIGNED_SHORT&&(tt=i.R16UI),V===i.UNSIGNED_INT&&(tt=i.R32UI),V===i.BYTE&&(tt=i.R8I),V===i.SHORT&&(tt=i.R16I),V===i.INT&&(tt=i.R32I)),y===i.RG&&(V===i.FLOAT&&(tt=i.RG32F),V===i.HALF_FLOAT&&(tt=i.RG16F),V===i.UNSIGNED_BYTE&&(tt=i.RG8)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RG8UI),V===i.UNSIGNED_SHORT&&(tt=i.RG16UI),V===i.UNSIGNED_INT&&(tt=i.RG32UI),V===i.BYTE&&(tt=i.RG8I),V===i.SHORT&&(tt=i.RG16I),V===i.INT&&(tt=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),V===i.UNSIGNED_INT&&(tt=i.RGB32UI),V===i.BYTE&&(tt=i.RGB8I),V===i.SHORT&&(tt=i.RGB16I),V===i.INT&&(tt=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),V===i.UNSIGNED_INT&&(tt=i.RGBA32UI),V===i.BYTE&&(tt=i.RGBA8I),V===i.SHORT&&(tt=i.RGBA16I),V===i.INT&&(tt=i.RGBA32I)),y===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),y===i.RGBA){const Ct=rt?Br:te.getTransfer(Q);V===i.FLOAT&&(tt=i.RGBA32F),V===i.HALF_FLOAT&&(tt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(tt=Ct===he?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(w,y){let V;return w?y===null||y===di||y===Qi?V=i.DEPTH24_STENCIL8:y===_n?V=i.DEPTH32F_STENCIL8:y===Ds&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===di||y===Qi?V=i.DEPTH_COMPONENT24:y===_n?V=i.DEPTH_COMPONENT32F:y===Ds&&(V=i.DEPTH_COMPONENT16),V}function D(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ge&&w.minFilter!==gn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function A(w){const y=w.target;y.removeEventListener("dispose",A),I(y),y.isVideoTexture&&h.delete(y)}function C(w){const y=w.target;y.removeEventListener("dispose",C),x(y)}function I(w){const y=n.get(w);if(y.__webglInit===void 0)return;const V=w.source,Q=f.get(V);if(Q){const rt=Q[y.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&v(w),Object.keys(Q).length===0&&f.delete(V)}n.remove(w)}function v(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const V=w.source,Q=f.get(V);delete Q[y.__cacheKey],o.memory.textures--}function x(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let rt=0;rt<y.__webglFramebuffer[Q].length;rt++)i.deleteFramebuffer(y.__webglFramebuffer[Q][rt]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=w.textures;for(let Q=0,rt=V.length;Q<rt;Q++){const tt=n.get(V[Q]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(V[Q])}n.remove(w)}let R=0;function H(){R=0}function N(){const w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function k(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function G(w,y){const V=n.get(w);if(w.isVideoTexture&&gt(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,w,y);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function X(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){j(V,w,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function K(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){j(V,w,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function Z(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){at(V,w,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}const pt={[Yn]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},Mt={[Ge]:i.NEAREST,[du]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},Tt={[_u]:i.NEVER,[bu]:i.ALWAYS,[vu]:i.LESS,[Yc]:i.LEQUAL,[xu]:i.EQUAL,[Su]:i.GEQUAL,[Mu]:i.GREATER,[yu]:i.NOTEQUAL};function Pt(w,y){if(y.type===_n&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===gn||y.magFilter===Wr||y.magFilter===Ws||y.magFilter===fi||y.minFilter===gn||y.minFilter===Wr||y.minFilter===Ws||y.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,pt[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,pt[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,pt[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Mt[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Mt[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Tt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ge||y.minFilter!==Ws&&y.minFilter!==fi||y.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function jt(w,y){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",A));const Q=y.source;let rt=f.get(Q);rt===void 0&&(rt={},f.set(Q,rt));const tt=k(y);if(tt!==w.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),rt[tt].usedTimes++;const Ct=rt[w.__cacheKey];Ct!==void 0&&(rt[w.__cacheKey].usedTimes--,Ct.usedTimes===0&&v(y)),w.__cacheKey=tt,w.__webglTexture=rt[tt].texture}return V}function j(w,y,V){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);const rt=jt(w,y),tt=y.source;e.bindTexture(Q,w.__webglTexture,i.TEXTURE0+V);const Ct=n.get(tt);if(tt.version!==Ct.__version||rt===!0){e.activeTexture(i.TEXTURE0+V);const _t=te.getPrimaries(te.workingColorSpace),P=y.colorSpace===Cn?null:te.getPrimaries(y.colorSpace),$=y.colorSpace===Cn||_t===P?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let F=_(y.image,!1,s.maxTextureSize);F=Ht(y,F);const W=r.convert(y.format,y.colorSpace),it=r.convert(y.type);let dt=S(y.internalFormat,W,it,y.colorSpace,y.isVideoTexture);Pt(Q,y);let ot;const Rt=y.mipmaps,Lt=y.isVideoTexture!==!0,Jt=Ct.__version===void 0||rt===!0,U=tt.dataReady,xt=D(y,F);if(y.isDepthTexture)dt=M(y.format===ts,y.type),Jt&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,dt,F.width,F.height):e.texImage2D(i.TEXTURE_2D,0,dt,F.width,F.height,0,W,it,null));else if(y.isDataTexture)if(Rt.length>0){Lt&&Jt&&e.texStorage2D(i.TEXTURE_2D,xt,dt,Rt[0].width,Rt[0].height);for(let J=0,st=Rt.length;J<st;J++)ot=Rt[J],Lt?U&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,W,it,ot.data):e.texImage2D(i.TEXTURE_2D,J,dt,ot.width,ot.height,0,W,it,ot.data);y.generateMipmaps=!1}else Lt?(Jt&&e.texStorage2D(i.TEXTURE_2D,xt,dt,F.width,F.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,W,it,F.data)):e.texImage2D(i.TEXTURE_2D,0,dt,F.width,F.height,0,W,it,F.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Lt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,dt,Rt[0].width,Rt[0].height,F.depth);for(let J=0,st=Rt.length;J<st;J++)if(ot=Rt[J],y.format!==un)if(W!==null)if(Lt){if(U)if(y.layerUpdates.size>0){const wt=Ql(ot.width,ot.height,y.format,y.type);for(const bt of y.layerUpdates){const Yt=ot.data.subarray(bt*wt/ot.data.BYTES_PER_ELEMENT,(bt+1)*wt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,bt,ot.width,ot.height,1,W,Yt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,F.depth,W,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,dt,ot.width,ot.height,F.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,F.depth,W,it,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,dt,ot.width,ot.height,F.depth,0,W,it,ot.data)}else{Lt&&Jt&&e.texStorage2D(i.TEXTURE_2D,xt,dt,Rt[0].width,Rt[0].height);for(let J=0,st=Rt.length;J<st;J++)ot=Rt[J],y.format!==un?W!==null?Lt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,W,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,J,dt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?U&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,W,it,ot.data):e.texImage2D(i.TEXTURE_2D,J,dt,ot.width,ot.height,0,W,it,ot.data)}else if(y.isDataArrayTexture)if(Lt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,dt,F.width,F.height,F.depth),U)if(y.layerUpdates.size>0){const J=Ql(F.width,F.height,y.format,y.type);for(const st of y.layerUpdates){const wt=F.data.subarray(st*J/F.data.BYTES_PER_ELEMENT,(st+1)*J/F.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,F.width,F.height,1,W,it,wt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,W,it,F.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,F.width,F.height,F.depth,0,W,it,F.data);else if(y.isData3DTexture)Lt?(Jt&&e.texStorage3D(i.TEXTURE_3D,xt,dt,F.width,F.height,F.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,W,it,F.data)):e.texImage3D(i.TEXTURE_3D,0,dt,F.width,F.height,F.depth,0,W,it,F.data);else if(y.isFramebufferTexture){if(Jt)if(Lt)e.texStorage2D(i.TEXTURE_2D,xt,dt,F.width,F.height);else{let J=F.width,st=F.height;for(let wt=0;wt<xt;wt++)e.texImage2D(i.TEXTURE_2D,wt,dt,J,st,0,W,it,null),J>>=1,st>>=1}}else if(Rt.length>0){if(Lt&&Jt){const J=St(Rt[0]);e.texStorage2D(i.TEXTURE_2D,xt,dt,J.width,J.height)}for(let J=0,st=Rt.length;J<st;J++)ot=Rt[J],Lt?U&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,W,it,ot):e.texImage2D(i.TEXTURE_2D,J,dt,W,it,ot);y.generateMipmaps=!1}else if(Lt){if(Jt){const J=St(F);e.texStorage2D(i.TEXTURE_2D,xt,dt,J.width,J.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,W,it,F)}else e.texImage2D(i.TEXTURE_2D,0,dt,W,it,F);m(y)&&p(Q),Ct.__version=tt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function at(w,y,V){if(y.image.length!==6)return;const Q=jt(w,y),rt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);const tt=n.get(rt);if(rt.version!==tt.__version||Q===!0){e.activeTexture(i.TEXTURE0+V);const Ct=te.getPrimaries(te.workingColorSpace),_t=y.colorSpace===Cn?null:te.getPrimaries(y.colorSpace),P=y.colorSpace===Cn||Ct===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const $=y.isCompressedTexture||y.image[0].isCompressedTexture,F=y.image[0]&&y.image[0].isDataTexture,W=[];for(let st=0;st<6;st++)!$&&!F?W[st]=_(y.image[st],!0,s.maxCubemapSize):W[st]=F?y.image[st].image:y.image[st],W[st]=Ht(y,W[st]);const it=W[0],dt=r.convert(y.format,y.colorSpace),ot=r.convert(y.type),Rt=S(y.internalFormat,dt,ot,y.colorSpace),Lt=y.isVideoTexture!==!0,Jt=tt.__version===void 0||Q===!0,U=rt.dataReady;let xt=D(y,it);Pt(i.TEXTURE_CUBE_MAP,y);let J;if($){Lt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Rt,it.width,it.height);for(let st=0;st<6;st++){J=W[st].mipmaps;for(let wt=0;wt<J.length;wt++){const bt=J[wt];y.format!==un?dt!==null?Lt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,bt.width,bt.height,dt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,Rt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,0,0,bt.width,bt.height,dt,ot,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt,Rt,bt.width,bt.height,0,dt,ot,bt.data)}}}else{if(J=y.mipmaps,Lt&&Jt){J.length>0&&xt++;const st=St(W[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Rt,st.width,st.height)}for(let st=0;st<6;st++)if(F){Lt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,W[st].width,W[st].height,dt,ot,W[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Rt,W[st].width,W[st].height,0,dt,ot,W[st].data);for(let wt=0;wt<J.length;wt++){const Yt=J[wt].image[st].image;Lt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,Yt.width,Yt.height,dt,ot,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,Rt,Yt.width,Yt.height,0,dt,ot,Yt.data)}}else{Lt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,dt,ot,W[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Rt,dt,ot,W[st]);for(let wt=0;wt<J.length;wt++){const bt=J[wt];Lt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,0,0,dt,ot,bt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt+1,Rt,dt,ot,bt.image[st])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),tt.__version=rt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function yt(w,y,V,Q,rt,tt){const Ct=r.convert(V.format,V.colorSpace),_t=r.convert(V.type),P=S(V.internalFormat,Ct,_t,V.colorSpace),$=n.get(y),F=n.get(V);if(F.__renderTarget=y,!$.__hasExternalTextures){const W=Math.max(1,y.width>>tt),it=Math.max(1,y.height>>tt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,P,W,it,y.depth,0,Ct,_t,null):e.texImage2D(rt,tt,P,W,it,0,Ct,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),At(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,rt,F.__webglTexture,0,ct(y)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,rt,F.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(w,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const Q=y.depthTexture,rt=Q&&Q.isDepthTexture?Q.type:null,tt=M(y.stencilBuffer,rt),Ct=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=ct(y);At(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,tt,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,tt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,tt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,w)}else{const Q=y.textures;for(let rt=0;rt<Q.length;rt++){const tt=Q[rt],Ct=r.convert(tt.format,tt.colorSpace),_t=r.convert(tt.type),P=S(tt.internalFormat,Ct,_t,tt.colorSpace),$=ct(y);V&&At(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,P,y.width,y.height):At(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,P,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,P,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const rt=Q.__webglTexture,tt=ct(y);if(y.depthTexture.format===Yi)At(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(y.depthTexture.format===ts)At(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Wt(w){const y=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const rt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",rt)};Q.addEventListener("dispose",rt),y.__depthDisposeCallback=rt}y.__boundDepthTexture=Q}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");zt(y.__webglFramebuffer,w)}else if(V){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),ht(y.__webglDepthbuffer[Q],w,!1);else{const rt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ht(y.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(w,y,V){const Q=n.get(w);y!==void 0&&yt(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Wt(w)}function Qt(w){const y=w.texture,V=n.get(w),Q=n.get(y);w.addEventListener("dispose",C);const rt=w.textures,tt=w.isWebGLCubeRenderTarget===!0,Ct=rt.length>1;if(Ct||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++),tt){V.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[_t]=[];for(let P=0;P<y.mipmaps.length;P++)V.__webglFramebuffer[_t][P]=i.createFramebuffer()}else V.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)V.__webglFramebuffer[_t]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let _t=0,P=rt.length;_t<P;_t++){const $=n.get(rt[_t]);$.__webglTexture===void 0&&($.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&At(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let _t=0;_t<rt.length;_t++){const P=rt[_t];V.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[_t]);const $=r.convert(P.format,P.colorSpace),F=r.convert(P.type),W=S(P.internalFormat,$,F,P.colorSpace,w.isXRRenderTarget===!0),it=ct(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,it,W,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,V.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let P=0;P<y.mipmaps.length;P++)yt(V.__webglFramebuffer[_t][P],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,P);else yt(V.__webglFramebuffer[_t],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let _t=0,P=rt.length;_t<P;_t++){const $=rt[_t],F=n.get($);e.bindTexture(i.TEXTURE_2D,F.__webglTexture),Pt(i.TEXTURE_2D,$),yt(V.__webglFramebuffer,w,$,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m($)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_t=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Q.__webglTexture),Pt(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let P=0;P<y.mipmaps.length;P++)yt(V.__webglFramebuffer[P],w,y,i.COLOR_ATTACHMENT0,_t,P);else yt(V.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,_t,0);m(y)&&p(_t),e.unbindTexture()}w.depthBuffer&&Wt(w)}function et(w){const y=w.textures;for(let V=0,Q=y.length;V<Q;V++){const rt=y[V];if(m(rt)){const tt=E(w),Ct=n.get(rt).__webglTexture;e.bindTexture(tt,Ct),p(tt),e.unbindTexture()}}}const ut=[],L=[];function Dt(w){if(w.samples>0){if(At(w)===!1){const y=w.textures,V=w.width,Q=w.height;let rt=i.COLOR_BUFFER_BIT;const tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(w),_t=y.length>1;if(_t)for(let P=0;P<y.length;P++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let P=0;P<y.length;P++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[P]);const $=n.get(y[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,rt,i.NEAREST),l===!0&&(ut.length=0,L.length=0,ut.push(i.COLOR_ATTACHMENT0+P),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ut.push(tt),L.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let P=0;P<y.length;P++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[P]);const $=n.get(y[P]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,$,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ct(w){return Math.min(s.maxSamples,w.samples)}function At(w){const y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function gt(w){const y=o.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Ht(w,y){const V=w.colorSpace,Q=w.format,rt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==is&&V!==Cn&&(te.getTransfer(V)===he?(Q!==un||rt!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function St(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=Vt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=At}function W0(i,t){function e(n,s=Cn){let r;const o=te.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oc)return i.BYTE;if(n===Bc)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===zs)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Vc)return i.RGB;if(n===un)return i.RGBA;if(n===Hc)return i.LUMINANCE;if(n===Gc)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Da)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===Wc)return i.RG;if(n===Ua)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Er||n===wr||n===Tr||n===Ar)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Yo||n===Zo||n===$o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===Ko||n===jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jo||n===Ko)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ta)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ea)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ra)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===aa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===la)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ca)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ha)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===da||n===pa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rr)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xc||n===ma||n===ga||n===_a)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class X0 extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ye extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q0={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`;class $0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:Y0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new Ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J0 extends ss{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new $0,m=e.getContextAttributes();let p=null,E=null;const S=[],M=[],D=new lt;let A=null;const C=new tn;C.viewport=new Me;const I=new tn;I.viewport=new Me;const v=[C,I],x=new X0;let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let at=S[j];return at===void 0&&(at=new vo,S[j]=at),at.getTargetRaySpace()},this.getControllerGrip=function(j){let at=S[j];return at===void 0&&(at=new vo,S[j]=at),at.getGripSpace()},this.getHand=function(j){let at=S[j];return at===void 0&&(at=new vo,S[j]=at),at.getHandSpace()};function N(j){const at=M.indexOf(j.inputSource);if(at===-1)return;const yt=S[at];yt!==void 0&&(yt.update(j.inputSource,j.frame,c||o),yt.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let j=0;j<S.length;j++){const at=M[j];at!==null&&(M[j]=null,S[j].disconnect(at))}R=null,H=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,E=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new pi(d.framebufferWidth,d.framebufferHeight,{format:un,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,yt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?ts:Yi,yt=m.stencil?Qi:di);const zt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new pi(f.textureWidth,f.textureHeight,{format:un,type:In,depthTexture:new lh(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(j){for(let at=0;at<j.removed.length;at++){const yt=j.removed[at],ht=M.indexOf(yt);ht>=0&&(M[ht]=null,S[ht].disconnect(yt))}for(let at=0;at<j.added.length;at++){const yt=j.added[at];let ht=M.indexOf(yt);if(ht===-1){for(let Wt=0;Wt<S.length;Wt++)if(Wt>=M.length){M.push(yt),ht=Wt;break}else if(M[Wt]===null){M[Wt]=yt,ht=Wt;break}if(ht===-1)break}const zt=S[ht];zt&&zt.connect(yt)}}const X=new T,K=new T;function Z(j,at,yt){X.setFromMatrixPosition(at.matrixWorld),K.setFromMatrixPosition(yt.matrixWorld);const ht=X.distanceTo(K),zt=at.projectionMatrix.elements,Wt=yt.projectionMatrix.elements,Vt=zt[14]/(zt[10]-1),Qt=zt[14]/(zt[10]+1),et=(zt[9]+1)/zt[5],ut=(zt[9]-1)/zt[5],L=(zt[8]-1)/zt[0],Dt=(Wt[8]+1)/Wt[0],ct=Vt*L,At=Vt*Dt,gt=ht/(-L+Dt),Ht=gt*-L;if(at.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ht),j.translateZ(gt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),zt[10]===-1)j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const St=Vt+gt,w=Qt+gt,y=ct-Ht,V=At+(ht-Ht),Q=et*Qt/w*St,rt=ut*Qt/w*St;j.projectionMatrix.makePerspective(y,V,Q,rt,St,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function pt(j,at){at===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(at.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let at=j.near,yt=j.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),x.near=I.near=C.near=at,x.far=I.far=C.far=yt,(R!==x.near||H!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,H=x.far),C.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,x.layers.mask=C.layers.mask|I.layers.mask;const ht=j.parent,zt=x.cameras;pt(x,ht);for(let Wt=0;Wt<zt.length;Wt++)pt(zt[Wt],ht);zt.length===2?Z(x,C,I):x.projectionMatrix.copy(C.projectionMatrix),Mt(j,x,ht)};function Mt(j,at,yt){yt===null?j.matrix.copy(at.matrixWorld):(j.matrix.copy(yt.matrixWorld),j.matrix.invert(),j.matrix.multiply(at.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Is*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Tt=null;function Pt(j,at){if(h=at.getViewerPose(c||o),g=at,h!==null){const yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let ht=!1;yt.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let Wt=0;Wt<yt.length;Wt++){const Vt=yt[Wt];let Qt=null;if(d!==null)Qt=d.getViewport(Vt);else{const ut=u.getViewSubImage(f,Vt);Qt=ut.viewport,Wt===0&&(t.setRenderTargetTextures(E,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(E))}let et=v[Wt];et===void 0&&(et=new tn,et.layers.enable(Wt),et.viewport=new Me,v[Wt]=et),et.matrix.fromArray(Vt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Vt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Wt===0&&(x.matrix.copy(et.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(et)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Wt=u.getDepthInformation(yt[0]);Wt&&Wt.isValid&&Wt.texture&&_.init(t,Wt,s.renderState)}}for(let yt=0;yt<S.length;yt++){const ht=M[yt],zt=S[yt];ht!==null&&zt!==void 0&&zt.update(ht,at,c||o)}Tt&&Tt(j,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const jt=new oh;jt.setAnimationLoop(Pt),this.setAnimationLoop=function(j){Tt=j},this.dispose=function(){}}}const si=new fn,K0=new ne;function j0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ih(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),S=E.envMap,M=E.envMapRotation;S&&(m.envMap.value=S,si.copy(M),si.x*=-1,si.y*=-1,si.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(si)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const M=S.program;n.uniformBlockBinding(E,M)}function c(E,S){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));const D=S.program;n.updateUBOMapping(E,D);const A=t.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){const S=u();E.__bindingPointIndex=S;const M=i.createBuffer(),D=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,D,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=s[E.id],M=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,C=M.length;A<C;A++){const I=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,x=I.length;v<x;v++){const R=I[v];if(d(R,A,v,D)===!0){const H=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let G=0;G<N.length;G++){const X=N[G],K=_(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,H+k,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,S,M,D){const A=E.value,C=S+"_"+M;if(D[C]===void 0)return typeof A=="number"||typeof A=="boolean"?D[C]=A:D[C]=A.clone(),!0;{const I=D[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return D[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(E){const S=E.uniforms;let M=0;const D=16;for(let C=0,I=S.length;C<I;C++){const v=Array.isArray(S[C])?S[C]:[S[C]];for(let x=0,R=v.length;x<R;x++){const H=v[x],N=Array.isArray(H.value)?H.value:[H.value];for(let k=0,G=N.length;k<G;k++){const X=N[k],K=_(X),Z=M%D,pt=Z%K.boundary,Mt=Z+pt;M+=pt,Mt!==0&&D-Mt<K.storage&&(M+=D-Mt),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=K.storage}}}const A=M%D;return A>0&&(M+=D-A),E.__size=M,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class tg{constructor(t={}){const{canvas:e=Vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Jn,this.toneMappingExposure=1;const M=this;let D=!1,A=0,C=0,I=null,v=-1,x=null;const R=new Me,H=new Me;let N=null;const k=new qt(0);let G=0,X=e.width,K=e.height,Z=1,pt=null,Mt=null;const Tt=new Me(0,0,X,K),Pt=new Me(0,0,X,K);let jt=!1;const j=new Oa;let at=!1,yt=!1;const ht=new ne,zt=new ne,Wt=new T,Vt=new Me,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function ut(){return I===null?Z:1}let L=n;function Dt(b,O){return e.getContext(b,O)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ra}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),L===null){const O="webgl2";if(L=Dt(O,b),L===null)throw Dt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ct,At,gt,Ht,St,w,y,V,Q,rt,tt,Ct,_t,P,$,F,W,it,dt,ot,Rt,Lt,Jt,U;function xt(){ct=new rm(L),ct.init(),Lt=new W0(L,ct),At=new Qp(L,ct,t,Lt),gt=new V0(L,ct),At.reverseDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),Ht=new lm(L),St=new T0,w=new G0(L,ct,gt,St,At,Lt,Ht),y=new em(M),V=new sm(M),Q=new mf(L),Jt=new Kp(L,Q),rt=new om(L,Q,Ht,Jt),tt=new hm(L,rt,Q,Ht),dt=new cm(L,At,w),F=new tm(St),Ct=new w0(M,y,V,ct,At,Jt,F),_t=new j0(M,St),P=new R0,$=new U0(ct),it=new Jp(M,y,V,gt,tt,d,l),W=new z0(M,tt,At),U=new Q0(L,Ht,At,gt),ot=new jp(L,ct,Ht),Rt=new am(L,ct,Ht),Ht.programs=Ct.programs,M.capabilities=At,M.extensions=ct,M.properties=St,M.renderLists=P,M.shadowMap=W,M.state=gt,M.info=Ht}xt();const J=new J0(M,L);this.xr=J,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(X,K,!1))},this.getSize=function(b){return b.set(X,K)},this.setSize=function(b,O,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,K=O,e.width=Math.floor(b*Z),e.height=Math.floor(O*Z),q===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(X*Z,K*Z).floor()},this.setDrawingBufferSize=function(b,O,q){X=b,K=O,Z=q,e.width=Math.floor(b*q),e.height=Math.floor(O*q),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(Tt)},this.setViewport=function(b,O,q,Y){b.isVector4?Tt.set(b.x,b.y,b.z,b.w):Tt.set(b,O,q,Y),gt.viewport(R.copy(Tt).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(Pt)},this.setScissor=function(b,O,q,Y){b.isVector4?Pt.set(b.x,b.y,b.z,b.w):Pt.set(b,O,q,Y),gt.scissor(H.copy(Pt).multiplyScalar(Z).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(b){gt.setScissorTest(jt=b)},this.setOpaqueSort=function(b){pt=b},this.setTransparentSort=function(b){Mt=b},this.getClearColor=function(b){return b.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(b=!0,O=!0,q=!0){let Y=0;if(b){let B=!1;if(I!==null){const mt=I.texture.format;B=mt===Na||mt===Ua||mt===Ia}if(B){const mt=I.texture.type,Et=mt===In||mt===di||mt===Ds||mt===Qi||mt===Pa||mt===La,Ut=it.getClearColor(),Nt=it.getClearAlpha(),Xt=Ut.r,Zt=Ut.g,Ft=Ut.b;Et?(g[0]=Xt,g[1]=Zt,g[2]=Ft,g[3]=Nt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Xt,_[1]=Zt,_[2]=Ft,_[3]=Nt,L.clearBufferiv(L.COLOR,0,_))}else Y|=L.COLOR_BUFFER_BIT}O&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),P.dispose(),$.dispose(),St.dispose(),y.dispose(),V.dispose(),tt.dispose(),Jt.dispose(),U.dispose(),Ct.dispose(),J.dispose(),J.removeEventListener("sessionstart",$a),J.removeEventListener("sessionend",Ja),jn.stop()};function st(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=Ht.autoReset,O=W.enabled,q=W.autoUpdate,Y=W.needsUpdate,B=W.type;xt(),Ht.autoReset=b,W.enabled=O,W.autoUpdate=q,W.needsUpdate=Y,W.type=B}function bt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Yt(b){const O=b.target;O.removeEventListener("dispose",Yt),xe(O)}function xe(b){De(b),St.remove(b)}function De(b){const O=St.get(b).programs;O!==void 0&&(O.forEach(function(q){Ct.releaseProgram(q)}),b.isShaderMaterial&&Ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,q,Y,B,mt){O===null&&(O=Qt);const Et=B.isMesh&&B.matrixWorld.determinant()<0,Ut=Nh(b,O,q,Y,B);gt.setMaterial(Y,Et);let Nt=q.index,Xt=1;if(Y.wireframe===!0){if(Nt=rt.getWireframeAttribute(q),Nt===void 0)return;Xt=2}const Zt=q.drawRange,Ft=q.attributes.position;let ie=Zt.start*Xt,ue=(Zt.start+Zt.count)*Xt;mt!==null&&(ie=Math.max(ie,mt.start*Xt),ue=Math.min(ue,(mt.start+mt.count)*Xt)),Nt!==null?(ie=Math.max(ie,0),ue=Math.min(ue,Nt.count)):Ft!=null&&(ie=Math.max(ie,0),ue=Math.min(ue,Ft.count));const de=ue-ie;if(de<0||de===1/0)return;Jt.setup(B,Y,Ut,q,Nt);let We,se=ot;if(Nt!==null&&(We=Q.get(Nt),se=Rt,se.setIndex(We)),B.isMesh)Y.wireframe===!0?(gt.setLineWidth(Y.wireframeLinewidth*ut()),se.setMode(L.LINES)):se.setMode(L.TRIANGLES);else if(B.isLine){let Bt=Y.linewidth;Bt===void 0&&(Bt=1),gt.setLineWidth(Bt*ut()),B.isLineSegments?se.setMode(L.LINES):B.isLineLoop?se.setMode(L.LINE_LOOP):se.setMode(L.LINE_STRIP)}else B.isPoints?se.setMode(L.POINTS):B.isSprite&&se.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)se.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))se.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Bt=B._multiDrawStarts,yn=B._multiDrawCounts,re=B._multiDrawCount,on=Nt?Q.get(Nt).bytesPerElement:1,yi=St.get(Y).currentProgram.getUniforms();for(let qe=0;qe<re;qe++)yi.setValue(L,"_gl_DrawID",qe),se.render(Bt[qe]/on,yn[qe])}else if(B.isInstancedMesh)se.renderInstances(ie,de,B.count);else if(q.isInstancedBufferGeometry){const Bt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yn=Math.min(q.instanceCount,Bt);se.renderInstances(ie,de,yn)}else se.render(ie,de)};function le(b,O,q){b.transparent===!0&&b.side===_e&&b.forceSinglePass===!1?(b.side=Le,b.needsUpdate=!0,Gs(b,O,q),b.side=Kn,b.needsUpdate=!0,Gs(b,O,q),b.side=_e):Gs(b,O,q)}this.compile=function(b,O,q=null){q===null&&(q=b),p=$.get(q),p.init(O),S.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==q&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const Y=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const mt=B.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){const Ut=mt[Et];le(Ut,q,B),Y.add(Ut)}else le(mt,q,B),Y.add(mt)}),S.pop(),p=null,Y},this.compileAsync=function(b,O,q=null){const Y=this.compile(b,O,q);return new Promise(B=>{function mt(){if(Y.forEach(function(Et){St.get(Et).currentProgram.isReady()&&Y.delete(Et)}),Y.size===0){B(b);return}setTimeout(mt,10)}ct.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let rn=null;function Mn(b){rn&&rn(b)}function $a(){jn.stop()}function Ja(){jn.start()}const jn=new oh;jn.setAnimationLoop(Mn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(b){rn=b,J.setAnimationLoop(b),b===null?jn.stop():jn.start()},J.addEventListener("sessionstart",$a),J.addEventListener("sessionend",Ja),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,O,I),p=$.get(b,S.length),p.init(O),S.push(p),zt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(zt),yt=this.localClippingEnabled,at=F.init(this.clippingPlanes,yt),m=P.get(b,E.length),m.init(),E.push(m),J.enabled===!0&&J.isPresenting===!0){const mt=M.xr.getDepthSensingMesh();mt!==null&&Gr(mt,O,-1/0,M.sortObjects)}Gr(b,O,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(pt,Mt),et=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,et&&it.addToRenderList(m,b),this.info.render.frame++,at===!0&&F.beginShadows();const q=p.state.shadowsArray;W.render(q,b,O),at===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){const mt=O.cameras;if(B.length>0)for(let Et=0,Ut=mt.length;Et<Ut;Et++){const Nt=mt[Et];ja(Y,B,b,Nt)}et&&it.render(b);for(let Et=0,Ut=mt.length;Et<Ut;Et++){const Nt=mt[Et];Ka(m,b,Nt,Nt.viewport)}}else B.length>0&&ja(Y,B,b,O),et&&it.render(b),Ka(m,b,O);I!==null&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(M,b,O),Jt.resetDefaultState(),v=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],at===!0&&F.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Gr(b,O,q,Y){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){Y&&Vt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(zt);const Et=tt.update(b),Ut=b.material;Ut.visible&&m.push(b,Et,Ut,q,Vt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const Et=tt.update(b),Ut=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Vt.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Vt.copy(Et.boundingSphere.center)),Vt.applyMatrix4(b.matrixWorld).applyMatrix4(zt)),Array.isArray(Ut)){const Nt=Et.groups;for(let Xt=0,Zt=Nt.length;Xt<Zt;Xt++){const Ft=Nt[Xt],ie=Ut[Ft.materialIndex];ie&&ie.visible&&m.push(b,Et,ie,q,Vt.z,Ft)}}else Ut.visible&&m.push(b,Et,Ut,q,Vt.z,null)}}const mt=b.children;for(let Et=0,Ut=mt.length;Et<Ut;Et++)Gr(mt[Et],O,q,Y)}function Ka(b,O,q,Y){const B=b.opaque,mt=b.transmissive,Et=b.transparent;p.setupLightsView(q),at===!0&&F.setGlobalState(M.clippingPlanes,q),Y&&gt.viewport(R.copy(Y)),B.length>0&&Hs(B,O,q),mt.length>0&&Hs(mt,O,q),Et.length>0&&Hs(Et,O,q),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function ja(b,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new pi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?zs:In,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const mt=p.state.transmissionRenderTarget[Y.id],Et=Y.viewport||R;mt.setSize(Et.z,Et.w);const Ut=M.getRenderTarget();M.setRenderTarget(mt),M.getClearColor(k),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear(),et&&it.render(q);const Nt=M.toneMapping;M.toneMapping=Jn;const Xt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),at===!0&&F.setGlobalState(M.clippingPlanes,Y),Hs(b,q,Y),w.updateMultisampleRenderTarget(mt),w.updateRenderTargetMipmap(mt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ft=0,ie=O.length;Ft<ie;Ft++){const ue=O[Ft],de=ue.object,We=ue.geometry,se=ue.material,Bt=ue.group;if(se.side===_e&&de.layers.test(Y.layers)){const yn=se.side;se.side=Le,se.needsUpdate=!0,Qa(de,q,Y,We,se,Bt),se.side=yn,se.needsUpdate=!0,Zt=!0}}Zt===!0&&(w.updateMultisampleRenderTarget(mt),w.updateRenderTargetMipmap(mt))}M.setRenderTarget(Ut),M.setClearColor(k,G),Xt!==void 0&&(Y.viewport=Xt),M.toneMapping=Nt}function Hs(b,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,mt=b.length;B<mt;B++){const Et=b[B],Ut=Et.object,Nt=Et.geometry,Xt=Y===null?Et.material:Y,Zt=Et.group;Ut.layers.test(q.layers)&&Qa(Ut,O,q,Nt,Xt,Zt)}}function Qa(b,O,q,Y,B,mt){b.onBeforeRender(M,O,q,Y,B,mt),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(M,O,q,Y,b,mt),B.transparent===!0&&B.side===_e&&B.forceSinglePass===!1?(B.side=Le,B.needsUpdate=!0,M.renderBufferDirect(q,O,Y,B,b,mt),B.side=Kn,B.needsUpdate=!0,M.renderBufferDirect(q,O,Y,B,b,mt),B.side=_e):M.renderBufferDirect(q,O,Y,B,b,mt),b.onAfterRender(M,O,q,Y,B,mt)}function Gs(b,O,q){O.isScene!==!0&&(O=Qt);const Y=St.get(b),B=p.state.lights,mt=p.state.shadowsArray,Et=B.state.version,Ut=Ct.getParameters(b,B.state,mt,O,q),Nt=Ct.getProgramCacheKey(Ut);let Xt=Y.programs;Y.environment=b.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(b.isMeshStandardMaterial?V:y).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Xt===void 0&&(b.addEventListener("dispose",Yt),Xt=new Map,Y.programs=Xt);let Zt=Xt.get(Nt);if(Zt!==void 0){if(Y.currentProgram===Zt&&Y.lightsStateVersion===Et)return el(b,Ut),Zt}else Ut.uniforms=Ct.getUniforms(b),b.onBeforeCompile(Ut,M),Zt=Ct.acquireProgram(Ut,Nt),Xt.set(Nt,Zt),Y.uniforms=Ut.uniforms;const Ft=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ft.clippingPlanes=F.uniform),el(b,Ut),Y.needsLights=Oh(b),Y.lightsStateVersion=Et,Y.needsLights&&(Ft.ambientLightColor.value=B.state.ambient,Ft.lightProbe.value=B.state.probe,Ft.directionalLights.value=B.state.directional,Ft.directionalLightShadows.value=B.state.directionalShadow,Ft.spotLights.value=B.state.spot,Ft.spotLightShadows.value=B.state.spotShadow,Ft.rectAreaLights.value=B.state.rectArea,Ft.ltc_1.value=B.state.rectAreaLTC1,Ft.ltc_2.value=B.state.rectAreaLTC2,Ft.pointLights.value=B.state.point,Ft.pointLightShadows.value=B.state.pointShadow,Ft.hemisphereLights.value=B.state.hemi,Ft.directionalShadowMap.value=B.state.directionalShadowMap,Ft.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ft.spotShadowMap.value=B.state.spotShadowMap,Ft.spotLightMatrix.value=B.state.spotLightMatrix,Ft.spotLightMap.value=B.state.spotLightMap,Ft.pointShadowMap.value=B.state.pointShadowMap,Ft.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Zt,Y.uniformsList=null,Zt}function tl(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Cr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function el(b,O){const q=St.get(b);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Nh(b,O,q,Y,B){O.isScene!==!0&&(O=Qt),w.resetTextureUnits();const mt=O.fog,Et=Y.isMeshStandardMaterial?O.environment:null,Ut=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:is,Nt=(Y.isMeshStandardMaterial?V:y).get(Y.envMap||Et),Xt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Zt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ft=!!q.morphAttributes.position,ie=!!q.morphAttributes.normal,ue=!!q.morphAttributes.color;let de=Jn;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(de=M.toneMapping);const We=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=We!==void 0?We.length:0,Bt=St.get(Y),yn=p.state.lights;if(at===!0&&(yt===!0||b!==x)){const je=b===x&&Y.id===v;F.setState(Y,b,je)}let re=!1;Y.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==yn.state.version||Bt.outputColorSpace!==Ut||B.isBatchedMesh&&Bt.batching===!1||!B.isBatchedMesh&&Bt.batching===!0||B.isBatchedMesh&&Bt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Bt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Bt.instancing===!1||!B.isInstancedMesh&&Bt.instancing===!0||B.isSkinnedMesh&&Bt.skinning===!1||!B.isSkinnedMesh&&Bt.skinning===!0||B.isInstancedMesh&&Bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Bt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Bt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Bt.instancingMorph===!1&&B.morphTexture!==null||Bt.envMap!==Nt||Y.fog===!0&&Bt.fog!==mt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==F.numPlanes||Bt.numIntersection!==F.numIntersection)||Bt.vertexAlphas!==Xt||Bt.vertexTangents!==Zt||Bt.morphTargets!==Ft||Bt.morphNormals!==ie||Bt.morphColors!==ue||Bt.toneMapping!==de||Bt.morphTargetsCount!==se)&&(re=!0):(re=!0,Bt.__version=Y.version);let on=Bt.currentProgram;re===!0&&(on=Gs(Y,O,B));let yi=!1,qe=!1,as=!1;const pe=on.getUniforms(),dn=Bt.uniforms;if(gt.useProgram(on.program)&&(yi=!0,qe=!0,as=!0),Y.id!==v&&(v=Y.id,qe=!0),yi||x!==b){gt.buffers.depth.getReversed()?(ht.copy(b.projectionMatrix),Gu(ht),Wu(ht),pe.setValue(L,"projectionMatrix",ht)):pe.setValue(L,"projectionMatrix",b.projectionMatrix),pe.setValue(L,"viewMatrix",b.matrixWorldInverse);const Fn=pe.map.cameraPosition;Fn!==void 0&&Fn.setValue(L,Wt.setFromMatrixPosition(b.matrixWorld)),At.logarithmicDepthBuffer&&pe.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pe.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,qe=!0,as=!0)}if(B.isSkinnedMesh){pe.setOptional(L,B,"bindMatrix"),pe.setOptional(L,B,"bindMatrixInverse");const je=B.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),pe.setValue(L,"boneTexture",je.boneTexture,w))}B.isBatchedMesh&&(pe.setOptional(L,B,"batchingTexture"),pe.setValue(L,"batchingTexture",B._matricesTexture,w),pe.setOptional(L,B,"batchingIdTexture"),pe.setValue(L,"batchingIdTexture",B._indirectTexture,w),pe.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&pe.setValue(L,"batchingColorTexture",B._colorsTexture,w));const ls=q.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&dt.update(B,q,on),(qe||Bt.receiveShadow!==B.receiveShadow)&&(Bt.receiveShadow=B.receiveShadow,pe.setValue(L,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(dn.envMap.value=Nt,dn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(dn.envMapIntensity.value=O.environmentIntensity),qe&&(pe.setValue(L,"toneMappingExposure",M.toneMappingExposure),Bt.needsLights&&Fh(dn,as),mt&&Y.fog===!0&&_t.refreshFogUniforms(dn,mt),_t.refreshMaterialUniforms(dn,Y,Z,K,p.state.transmissionRenderTarget[b.id]),Cr.upload(L,tl(Bt),dn,w)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Cr.upload(L,tl(Bt),dn,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pe.setValue(L,"center",B.center),pe.setValue(L,"modelViewMatrix",B.modelViewMatrix),pe.setValue(L,"normalMatrix",B.normalMatrix),pe.setValue(L,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const je=Y.uniformsGroups;for(let Fn=0,On=je.length;Fn<On;Fn++){const nl=je[Fn];U.update(nl,on),U.bind(nl,on)}}return on}function Fh(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Oh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,O,q){St.get(b.texture).__webglTexture=O,St.get(b.depthTexture).__webglTexture=q;const Y=St.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const q=St.get(b);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,q=0){I=b,A=O,C=q;let Y=!0,B=null,mt=!1,Et=!1;if(b){const Nt=St.get(b);if(Nt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Nt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Nt.__hasExternalTextures)w.rebindTextures(b,St.get(b.texture).__webglTexture,St.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ft=b.depthTexture;if(Nt.__boundDepthTexture!==Ft){if(Ft!==null&&St.has(Ft)&&(b.width!==Ft.image.width||b.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Xt=b.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Et=!0);const Zt=St.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Zt[O])?B=Zt[O][q]:B=Zt[O],mt=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?B=St.get(b).__webglMultisampledFramebuffer:Array.isArray(Zt)?B=Zt[q]:B=Zt,R.copy(b.viewport),H.copy(b.scissor),N=b.scissorTest}else R.copy(Tt).multiplyScalar(Z).floor(),H.copy(Pt).multiplyScalar(Z).floor(),N=jt;if(gt.bindFramebuffer(L.FRAMEBUFFER,B)&&Y&&gt.drawBuffers(b,B),gt.viewport(R),gt.scissor(H),gt.setScissorTest(N),mt){const Nt=St.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Nt.__webglTexture,q)}else if(Et){const Nt=St.get(b.texture),Xt=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Nt.__webglTexture,q||0,Xt)}v=-1},this.readRenderTargetPixels=function(b,O,q,Y,B,mt,Et){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut){gt.bindFramebuffer(L.FRAMEBUFFER,Ut);try{const Nt=b.texture,Xt=Nt.format,Zt=Nt.type;if(!At.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-Y&&q>=0&&q<=b.height-B&&L.readPixels(O,q,Y,B,Lt.convert(Xt),Lt.convert(Zt),mt)}finally{const Nt=I!==null?St.get(I).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,O,q,Y,B,mt,Et){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Ut=Ut[Et]),Ut){const Nt=b.texture,Xt=Nt.format,Zt=Nt.type;if(!At.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-Y&&q>=0&&q<=b.height-B){gt.bindFramebuffer(L.FRAMEBUFFER,Ut);const Ft=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ft),L.bufferData(L.PIXEL_PACK_BUFFER,mt.byteLength,L.STREAM_READ),L.readPixels(O,q,Y,B,Lt.convert(Xt),Lt.convert(Zt),0);const ie=I!==null?St.get(I).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,ie);const ue=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Hu(L,ue,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ft),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,mt),L.deleteBuffer(Ft),L.deleteSync(ue),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,q=0){b.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const Y=Math.pow(2,-q),B=Math.floor(b.image.width*Y),mt=Math.floor(b.image.height*Y),Et=O!==null?O.x:0,Ut=O!==null?O.y:0;w.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Et,Ut,B,mt),gt.unbindTexture()},this.copyTextureToTexture=function(b,O,q=null,Y=null,B=0){b.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],O=arguments[2],B=arguments[3]||0,q=null);let mt,Et,Ut,Nt,Xt,Zt,Ft,ie,ue;const de=b.isCompressedTexture?b.mipmaps[B]:b.image;q!==null?(mt=q.max.x-q.min.x,Et=q.max.y-q.min.y,Ut=q.isBox3?q.max.z-q.min.z:1,Nt=q.min.x,Xt=q.min.y,Zt=q.isBox3?q.min.z:0):(mt=de.width,Et=de.height,Ut=de.depth||1,Nt=0,Xt=0,Zt=0),Y!==null?(Ft=Y.x,ie=Y.y,ue=Y.z):(Ft=0,ie=0,ue=0);const We=Lt.convert(O.format),se=Lt.convert(O.type);let Bt;O.isData3DTexture?(w.setTexture3D(O,0),Bt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),Bt=L.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),Bt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const yn=L.getParameter(L.UNPACK_ROW_LENGTH),re=L.getParameter(L.UNPACK_IMAGE_HEIGHT),on=L.getParameter(L.UNPACK_SKIP_PIXELS),yi=L.getParameter(L.UNPACK_SKIP_ROWS),qe=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,de.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Zt);const as=b.isDataArrayTexture||b.isData3DTexture,pe=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const dn=St.get(b),ls=St.get(O),je=St.get(dn.__renderTarget),Fn=St.get(ls.__renderTarget);gt.bindFramebuffer(L.READ_FRAMEBUFFER,je.__webglFramebuffer),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<Ut;On++)as&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(b).__webglTexture,B,Zt+On),b.isDepthTexture?(pe&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(O).__webglTexture,B,ue+On),L.blitFramebuffer(Nt,Xt,mt,Et,Ft,ie,mt,Et,L.DEPTH_BUFFER_BIT,L.NEAREST)):pe?L.copyTexSubImage3D(Bt,B,Ft,ie,ue+On,Nt,Xt,mt,Et):L.copyTexSubImage2D(Bt,B,Ft,ie,ue+On,Nt,Xt,mt,Et);gt.bindFramebuffer(L.READ_FRAMEBUFFER,null),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pe?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Bt,B,Ft,ie,ue,mt,Et,Ut,We,se,de.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Bt,B,Ft,ie,ue,mt,Et,Ut,We,de.data):L.texSubImage3D(Bt,B,Ft,ie,ue,mt,Et,Ut,We,se,de):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,Ft,ie,mt,Et,We,se,de.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,Ft,ie,de.width,de.height,We,de.data):L.texSubImage2D(L.TEXTURE_2D,B,Ft,ie,mt,Et,We,se,de);L.pixelStorei(L.UNPACK_ROW_LENGTH,yn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re),L.pixelStorei(L.UNPACK_SKIP_PIXELS,on),L.pixelStorei(L.UNPACK_SKIP_ROWS,yi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qe),B===0&&O.generateMipmaps&&L.generateMipmap(Bt),gt.unbindTexture()},this.copyTextureToTexture3D=function(b,O,q=null,Y=null,B=0){return b.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],O=arguments[3],B=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,q,Y,B)},this.initRenderTarget=function(b){St.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),gt.unbindTexture()},this.resetState=function(){A=0,C=0,I=null,gt.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class za{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new za(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class eg extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ng{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=va,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new T;class Ir{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ir(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class dh extends xi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fi;const ds=new T,Oi=new T,Bi=new T,zi=new lt,ps=new lt,ph=new ne,ur=new T,ms=new T,fr=new T,tc=new lt,xo=new lt,ec=new lt;class ig extends Te{constructor(t=new dh){if(super(),this.isSprite=!0,this.type="Sprite",Fi===void 0){Fi=new Se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ng(e,5);Fi.setIndex([0,1,2,0,2,3]),Fi.setAttribute("position",new Ir(n,3,0,!1)),Fi.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=Fi,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),ph.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-Bi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;dr(ur.set(-.5,-.5,0),Bi,o,Oi,s,r),dr(ms.set(.5,-.5,0),Bi,o,Oi,s,r),dr(fr.set(.5,.5,0),Bi,o,Oi,s,r),tc.set(0,0),xo.set(1,0),ec.set(1,1);let a=t.ray.intersectTriangle(ur,ms,fr,!1,ds);if(a===null&&(dr(ms.set(-.5,.5,0),Bi,o,Oi,s,r),xo.set(0,1),a=t.ray.intersectTriangle(ur,fr,ms,!1,ds),a===null))return;const l=t.ray.origin.distanceTo(ds);l<t.near||l>t.far||e.push({distance:l,point:ds.clone(),uv:$e.getInterpolation(ds,ur,ms,fr,tc,xo,ec,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function dr(i,t,e,n,s,r){zi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ps.x=r*zi.x-s*zi.y,ps.y=s*zi.x+r*zi.y):ps.copy(zi),i.copy(t),i.x+=ps.x,i.y+=ps.y,i.applyMatrix4(ph)}class sg extends Fe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,h=Ge,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nc extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ki=new ne,ic=new ne,pr=[],sc=new vi,rg=new ne,gs=new nt,_s=new rs;class Ma extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),sc.copy(t.boundingBox).applyMatrix4(ki),this.boundingBox.union(sc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),_s.copy(t.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),t.ray.intersectsSphere(_s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),ic.multiplyMatrices(n,ki),gs.matrixWorld=ic,gs.raycast(t,pr);for(let o=0,a=pr.length;o<a;o++){const l=pr[o];l.instanceId=r,l.object=this,e.push(l)}pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new sg(new Float32Array(s*this.count),s,this.count,Da,_n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ka extends xi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ur=new T,Nr=new T,rc=new ne,vs=new jc,mr=new rs,Mo=new T,oc=new T;class mh extends Te{constructor(t=new Se,e=new ka){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ur.fromBufferAttribute(e,s-1),Nr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Nr);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;rc.copy(s).invert(),vs.copy(t.ray).applyMatrix4(rc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=h.getX(_),E=h.getX(_+1),S=gr(this,t,vs,l,p,E);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=gr(this,t,vs,l,_,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=gr(this,t,vs,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=gr(this,t,vs,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ur.fromBufferAttribute(o,s),Nr.fromBufferAttribute(o,r),e.distanceSqToSegment(Ur,Nr,Mo,oc)>n)return;Mo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Mo);if(!(l<t.near||l>t.far))return{distance:l,point:oc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ac=new T,lc=new T;class og extends mh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ac.fromBufferAttribute(e,s),lc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ac.distanceTo(lc);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Va extends Fe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new lt:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,s=[],r=[],o=[],a=new T,l=new ne;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Pe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ha extends xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ag extends Ha{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ga(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const _r=new T,yo=new Ga,So=new Ga,bo=new Ga;class lg extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(_r.subVectors(s[0],s[1]).add(s[0]),c=_r);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_r.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_r),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),yo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),So.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),bo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(yo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),So.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),bo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(yo.calc(l),So.calc(l),bo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function cg(i,t){const e=1-i;return e*e*t}function hg(i,t){return 2*(1-i)*i*t}function ug(i,t){return i*i*t}function As(i,t,e,n){return cg(i,t)+hg(i,e)+ug(i,n)}function fg(i,t){const e=1-i;return e*e*e*t}function dg(i,t){const e=1-i;return 3*e*e*i*t}function pg(i,t){return 3*(1-i)*i*i*t}function mg(i,t){return i*i*i*t}function Rs(i,t,e,n,s){return fg(i,t)+dg(i,e)+pg(i,n)+mg(i,s)}class gh extends xn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rs(t,s.x,r.x,o.x,a.x),Rs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gg extends xn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Rs(t,s.x,r.x,o.x,a.x),Rs(t,s.y,r.y,o.y,a.y),Rs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _h extends xn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _g extends xn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vh extends xn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vg extends xn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y),As(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xh extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(cc(a,l.x,c.x,h.x,u.x),cc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var ya=Object.freeze({__proto__:null,ArcCurve:ag,CatmullRomCurve3:lg,CubicBezierCurve:gh,CubicBezierCurve3:gg,EllipseCurve:Ha,LineCurve:_h,LineCurve3:_g,QuadraticBezierCurve:vh,QuadraticBezierCurve3:vg,SplineCurve:xh});class xg extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ya[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ya[s.type]().fromJSON(s))}return this}}class Sa extends xg{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _h(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new vh(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new gh(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ha(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class kr extends Se{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new T,f=new lt,d=new T,g=new T,_=new T;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let E=0;E<=e;E++){const S=n+E*h*s,M=Math.sin(S),D=Math.cos(S);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*M,u.y=t[A].y,u.z=t[A].x*D,o.push(u.x,u.y,u.z),f.x=E/e,f.y=A/(t.length-1),a.push(f.x,f.y);const C=l[3*A+0]*M,I=l[3*A+1],v=l[3*A+0]*D;c.push(C,I,v)}}for(let E=0;E<e;E++)for(let S=0;S<t.length-1;S++){const M=S+E*t.length,D=M,A=M+t.length,C=M+t.length+1,I=M+1;r.push(D,A,I),r.push(C,I,A)}this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.points,t.segments,t.phiStart,t.phiLength)}}class Je extends kr{constructor(t=1,e=1,n=4,s=8){const r=new Sa;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Je(t.radius,t.length,t.capSegments,t.radialSegments)}}class Nn extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new T,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ge extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(f,3)),this.setAttribute("uv",new ae(d,2));function E(){const M=new T,D=new T;let A=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const v=[],x=I/r,R=x*(e-t)+t;for(let H=0;H<=s;H++){const N=H/s,k=N*l+a,G=Math.sin(k),X=Math.cos(k);D.x=R*G,D.y=-x*n+m,D.z=R*X,u.push(D.x,D.y,D.z),M.set(G,C,X).normalize(),f.push(M.x,M.y,M.z),d.push(N,1-x),v.push(g++)}_.push(v)}for(let I=0;I<s;I++)for(let v=0;v<r;v++){const x=_[v][I],R=_[v+1][I],H=_[v+1][I+1],N=_[v][I+1];(t>0||v!==0)&&(h.push(x,R,N),A+=3),(e>0||v!==r-1)&&(h.push(R,H,N),A+=3)}c.addGroup(p,A,0),p+=A}function S(M){const D=g,A=new lt,C=new T;let I=0;const v=M===!0?t:e,x=M===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const R=g;for(let H=0;H<=s;H++){const k=H/s*l+a,G=Math.cos(k),X=Math.sin(k);C.x=v*X,C.y=m*x,C.z=v*G,u.push(C.x,C.y,C.z),f.push(0,x,0),A.x=G*.5+.5,A.y=X*.5*x+.5,d.push(A.x,A.y),g++}for(let H=0;H<s;H++){const N=D+H,k=R+H;M===!0?h.push(k,k+1,N):h.push(k+1,k,N),I+=3}c.addGroup(p,I,M===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const vr=new T,xr=new T,Eo=new T,Mr=new $e;class Mg extends Se{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Zi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Mr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Mr.getNormal(Eo),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const S=(E+1)%3,M=u[E],D=u[S],A=Mr[h[E]],C=Mr[h[S]],I=`${M}_${D}`,v=`${D}_${M}`;v in f&&f[v]?(Eo.dot(f[v].normal)<=r&&(d.push(A.x,A.y,A.z),d.push(C.x,C.y,C.z)),f[v]=null):I in f||(f[I]={index0:c[E],index1:c[S],normal:Eo.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];vr.fromBufferAttribute(a,_),xr.fromBufferAttribute(a,m),d.push(vr.x,vr.y,vr.z),d.push(xr.x,xr.y,xr.z)}this.setAttribute("position",new ae(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Mh extends Sa{constructor(t){super(t),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Sa().fromJSON(s))}return this}}const yg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=yh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Tg(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Us(r,o,e,a,l,d,0),o}};function yh(i,t,e,n,s){let r,o;if(s===Og(i,t,e,n)>0)for(r=t;r<e;r+=n)o=hc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=hc(r,i[r],i[r+1],o);return o&&Vr(o,o.next)&&(Fs(o),o=o.next),o}function mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vr(e,e.next)||ve(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Lg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?bg(i,n,s,r):Sg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Fs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Eg(mi(i),t,e),Us(i,t,e,n,s,r,2)):o===2&&wg(i,t,e,n,s,r):Us(mi(i),t,e,n,s,r,1);break}}}function Sg(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Wi(s,a,r,l,o,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=ba(d,g,t,e,n),E=ba(_,m,t,e,n);let S=i.prevZ,M=i.nextZ;for(;S&&S.z>=p&&M&&M.z<=E;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Wi(a,h,l,u,c,f,S.x,S.y)&&ve(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Wi(a,h,l,u,c,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Wi(a,h,l,u,c,f,S.x,S.y)&&ve(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=E;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Wi(a,h,l,u,c,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Eg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Vr(s,r)&&Sh(s,n,n.next,r)&&Ns(s,r)&&Ns(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fs(n),Fs(n.next),n=i=r),n=n.next}while(n!==i);return mi(n)}function wg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ug(o,a)){let l=bh(o,a);o=mi(o,o.next),l=mi(l,l.next),Us(o,t,e,n,s,r,0),Us(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Tg(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=yh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ig(c));for(s.sort(Ag),r=0;r<s.length;r++)e=Rg(s[r],e);return e}function Ag(i,t){return i.x-t.x}function Rg(i,t){const e=Cg(i,t);if(!e)return t;const n=bh(e,i);return mi(n,n.next),mi(e,e.next)}function Cg(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Wi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ns(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Pg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Pg(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function Lg(i,t,e,n){let s=i;do s.z===0&&(s.z=ba(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dg(s)}function Dg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function ba(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ig(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ug(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ng(i,t)&&(Ns(i,t)&&Ns(t,i)&&Fg(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||Vr(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vr(i,t){return i.x===t.x&&i.y===t.y}function Sh(i,t,e,n){const s=Sr(ve(i,t,e)),r=Sr(ve(i,t,n)),o=Sr(ve(e,n,i)),a=Sr(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&yr(i,e,t)||r===0&&yr(i,n,t)||o===0&&yr(e,i,n)||a===0&&yr(e,t,n))}function yr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Sr(i){return i>0?1:i<0?-1:0}function Ng(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ns(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Fg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bh(i,t){const e=new Ea(i.i,i.x,i.y),n=new Ea(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hc(i,t,e,n){const s=new Ea(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ea(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Og(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Cs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Cs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];uc(t),fc(n,t);let o=t.length;e.forEach(uc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,fc(n,e[l]);const a=yg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function uc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Wa extends Se{constructor(t=new Mh([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Bg;let S,M=!1,D,A,C,I;p&&(S=p.getSpacedPoints(h),M=!0,f=!1,D=p.computeFrenetFrames(h,!1),A=new T,C=new T,I=new T),f||(m=0,d=0,g=0,_=0);const v=a.extractPoints(c);let x=v.shape;const R=v.holes;if(!Cs.isClockWise(x)){x=x.reverse();for(let et=0,ut=R.length;et<ut;et++){const L=R[et];Cs.isClockWise(L)&&(R[et]=L.reverse())}}const N=Cs.triangulateShape(x,R),k=x;for(let et=0,ut=R.length;et<ut;et++){const L=R[et];x=x.concat(L)}function G(et,ut,L){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ut,L)}const X=x.length,K=N.length;function Z(et,ut,L){let Dt,ct,At;const gt=et.x-ut.x,Ht=et.y-ut.y,St=L.x-et.x,w=L.y-et.y,y=gt*gt+Ht*Ht,V=gt*w-Ht*St;if(Math.abs(V)>Number.EPSILON){const Q=Math.sqrt(y),rt=Math.sqrt(St*St+w*w),tt=ut.x-Ht/Q,Ct=ut.y+gt/Q,_t=L.x-w/rt,P=L.y+St/rt,$=((_t-tt)*w-(P-Ct)*St)/(gt*w-Ht*St);Dt=tt+gt*$-et.x,ct=Ct+Ht*$-et.y;const F=Dt*Dt+ct*ct;if(F<=2)return new lt(Dt,ct);At=Math.sqrt(F/2)}else{let Q=!1;gt>Number.EPSILON?St>Number.EPSILON&&(Q=!0):gt<-Number.EPSILON?St<-Number.EPSILON&&(Q=!0):Math.sign(Ht)===Math.sign(w)&&(Q=!0),Q?(Dt=-Ht,ct=gt,At=Math.sqrt(y)):(Dt=gt,ct=Ht,At=Math.sqrt(y/2))}return new lt(Dt/At,ct/At)}const pt=[];for(let et=0,ut=k.length,L=ut-1,Dt=et+1;et<ut;et++,L++,Dt++)L===ut&&(L=0),Dt===ut&&(Dt=0),pt[et]=Z(k[et],k[L],k[Dt]);const Mt=[];let Tt,Pt=pt.concat();for(let et=0,ut=R.length;et<ut;et++){const L=R[et];Tt=[];for(let Dt=0,ct=L.length,At=ct-1,gt=Dt+1;Dt<ct;Dt++,At++,gt++)At===ct&&(At=0),gt===ct&&(gt=0),Tt[Dt]=Z(L[Dt],L[At],L[gt]);Mt.push(Tt),Pt=Pt.concat(Tt)}for(let et=0;et<m;et++){const ut=et/m,L=d*Math.cos(ut*Math.PI/2),Dt=g*Math.sin(ut*Math.PI/2)+_;for(let ct=0,At=k.length;ct<At;ct++){const gt=G(k[ct],pt[ct],Dt);ht(gt.x,gt.y,-L)}for(let ct=0,At=R.length;ct<At;ct++){const gt=R[ct];Tt=Mt[ct];for(let Ht=0,St=gt.length;Ht<St;Ht++){const w=G(gt[Ht],Tt[Ht],Dt);ht(w.x,w.y,-L)}}}const jt=g+_;for(let et=0;et<X;et++){const ut=f?G(x[et],Pt[et],jt):x[et];M?(C.copy(D.normals[0]).multiplyScalar(ut.x),A.copy(D.binormals[0]).multiplyScalar(ut.y),I.copy(S[0]).add(C).add(A),ht(I.x,I.y,I.z)):ht(ut.x,ut.y,0)}for(let et=1;et<=h;et++)for(let ut=0;ut<X;ut++){const L=f?G(x[ut],Pt[ut],jt):x[ut];M?(C.copy(D.normals[et]).multiplyScalar(L.x),A.copy(D.binormals[et]).multiplyScalar(L.y),I.copy(S[et]).add(C).add(A),ht(I.x,I.y,I.z)):ht(L.x,L.y,u/h*et)}for(let et=m-1;et>=0;et--){const ut=et/m,L=d*Math.cos(ut*Math.PI/2),Dt=g*Math.sin(ut*Math.PI/2)+_;for(let ct=0,At=k.length;ct<At;ct++){const gt=G(k[ct],pt[ct],Dt);ht(gt.x,gt.y,u+L)}for(let ct=0,At=R.length;ct<At;ct++){const gt=R[ct];Tt=Mt[ct];for(let Ht=0,St=gt.length;Ht<St;Ht++){const w=G(gt[Ht],Tt[Ht],Dt);M?ht(w.x,w.y+S[h-1].y,S[h-1].x+L):ht(w.x,w.y,u+L)}}}j(),at();function j(){const et=s.length/3;if(f){let ut=0,L=X*ut;for(let Dt=0;Dt<K;Dt++){const ct=N[Dt];zt(ct[2]+L,ct[1]+L,ct[0]+L)}ut=h+m*2,L=X*ut;for(let Dt=0;Dt<K;Dt++){const ct=N[Dt];zt(ct[0]+L,ct[1]+L,ct[2]+L)}}else{for(let ut=0;ut<K;ut++){const L=N[ut];zt(L[2],L[1],L[0])}for(let ut=0;ut<K;ut++){const L=N[ut];zt(L[0]+X*h,L[1]+X*h,L[2]+X*h)}}n.addGroup(et,s.length/3-et,0)}function at(){const et=s.length/3;let ut=0;yt(k,ut),ut+=k.length;for(let L=0,Dt=R.length;L<Dt;L++){const ct=R[L];yt(ct,ut),ut+=ct.length}n.addGroup(et,s.length/3-et,1)}function yt(et,ut){let L=et.length;for(;--L>=0;){const Dt=L;let ct=L-1;ct<0&&(ct=et.length-1);for(let At=0,gt=h+m*2;At<gt;At++){const Ht=X*At,St=X*(At+1),w=ut+Dt+Ht,y=ut+ct+Ht,V=ut+ct+St,Q=ut+Dt+St;Wt(w,y,V,Q)}}}function ht(et,ut,L){l.push(et),l.push(ut),l.push(L)}function zt(et,ut,L){Vt(et),Vt(ut),Vt(L);const Dt=s.length/3,ct=E.generateTopUV(n,s,Dt-3,Dt-2,Dt-1);Qt(ct[0]),Qt(ct[1]),Qt(ct[2])}function Wt(et,ut,L,Dt){Vt(et),Vt(ut),Vt(Dt),Vt(ut),Vt(L),Vt(Dt);const ct=s.length/3,At=E.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);Qt(At[0]),Qt(At[1]),Qt(At[3]),Qt(At[1]),Qt(At[2]),Qt(At[3])}function Vt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function Qt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return zg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ya[s.type]().fromJSON(s)),new Wa(n,t.options)}}const Bg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-u),new lt(f,1-g),new lt(_,1-p)]:[new lt(a,1-l),new lt(h,1-u),new lt(d,1-g),new lt(m,1-p)]}};function zg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Hr extends Se{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new T,g=new lt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const E=p+m,S=E,M=E+n+1,D=E+n+2,A=E+1;a.push(S,M,A),a.push(M,D,A)}}this.setIndex(a),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class He extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new T,f=new T,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],S=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let D=0;D<=e;D++){const A=D/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+M,1-S),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const S=h[p][E+1],M=h[p][E],D=h[p+1][E],A=h[p+1][E+1];(p!==0||o>0)&&d.push(S,M,A),(p!==n-1||l<Math.PI)&&d.push(M,D,A)}this.setIndex(d),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Os extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new T,u=new T,f=new T;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,E=(s+1)*d+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kg extends xi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new qt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Eh extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Vg extends Eh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wo=new ne,dc=new T,pc=new T;class Hg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pc),e.updateMatrixWorld(),wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gg extends Hg{constructor(){super(new ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wg extends Eh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Gg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);const mn=20.12,ft={physics:{dt:1/240,maxStepsPerFrame:24,gravity:9.81,airDensity:1.2,maxMicroSteps:64,microStepDistance:.006},ball:{radius:.036,mass:.16,dragCoefficient:.28,magnusCoefficient:16e-5,spinDecay:.2,maxMagnusAccel:3.4},ground:{pitchRestitution:.58,pitchFriction:.24,outfieldRestitution:.48,outfieldFriction:.2,rollingResistance:.12,rollThreshold:.85},bat:{mass:1.28,totalLength:.965,bladeLength:.56,bladeWidth:.108,collisionWidth:.145,bladeFace:.02,bladeBack:-.032,handleRadius:.018,gripFromToe:.8,comFromToe:.39,inertiaTransverse:.09,inertiaLong:.0022,sweetSpotFromToe:.19,sweetSpotWidth:.18,restitution:.84,restitutionFloor:.65,handCouplingMass:1.4,edgeRestitutionLoss:.25,friction:.26,softHandsMin:.4,softHandsSpeed:4.5,swingPowerMultiplier:1.25,maxExitSpeed:56},control:{mouseSensitivity:1,joystickSensitivity:1,responsiveness:1,showJoystick:"auto",mouseRadPerPixel:.0068,joystickRangeA:1.75,joystickRangeB:1.85,springFrequency:46,damping:.92,maxTiltSpeed:62,maxTiltAccel:2600,faceFollowRate:30,faceVelocityRef:7,restTilt:{a:0,b:.25},tiltMin:{a:-1.45,b:-1.35},tiltMax:{a:1.45,b:3},recenterRate:0,handsRest:{x:.04,y:.81,z:-1.12},swingMemoryTau:.08},body:{x:-.1,z:-.8,radius:.21,height:1.5},camera:{position:{x:0,y:1.58,z:.82},pitchDeg:-14.5,verticalFov:66,minHorizontalFov:74},stumps:{z:0,spacing:.1143,height:.711,radius:.0175},field:{boundaryRadius:55,centerZ:-mn/2,pitchHalfWidth:1.52},bowling:{speeds:{slow:[78,95],medium:[105,120],fast:[128,144]},releaseHeight:2.15,lines:{outsideOff:[.18,.32],off:[.07,.14],middle:[-.03,.03],leg:[-.13,-.07],outsideLeg:[-.26,-.17]},lengths:{yorker:[1.1,1.8],full:[2.4,4.2],good:[4.4,6.2],short:[5,6.5]}},game:{ballsPerOver:6,wickets:3,deadBallTimeout:8.5,resultPause:1.25}},wh="physics-cricket-settings-v1";function Xg(){try{const i=localStorage.getItem(wh);if(!i)return;const t=JSON.parse(i);for(const e of["mouseSensitivity","joystickSensitivity","responsiveness"])typeof t[e]=="number"&&isFinite(t[e])&&(ft.control[e]=t[e]);typeof t.showJoystick=="string"&&(ft.control.showJoystick=t.showJoystick)}catch{}}function Th(){try{const i=ft.control;localStorage.setItem(wh,JSON.stringify({mouseSensitivity:i.mouseSensitivity,joystickSensitivity:i.joystickSensitivity,responsiveness:i.responsiveness,showJoystick:i.showJoystick}))}catch{}}const mc=new T,To=new T,Ao=new T,gc=new ne;function qn(i,t,e){return i<t?t:i>e?e:i}function bs(i,t,e){const n=qn((e-i)/(t-i),0,1);return n*n*(3-2*n)}function Ah(i){return i-.45*bs(-.2,1.1,i)}function qg(i,t,e){const n=qn(i,-1.5,1.5),s=Ah(t),r=Math.cos(n);return e.set(Math.sin(n),-r*Math.cos(s),-r*Math.sin(s))}class Yg{constructor(){const t=ft.control;this.tilt=new lt(t.restTilt.a,t.restTilt.b),this.tiltVel=new lt,this.target=this.tilt.clone(),this.stepTarget=this.tilt.clone(),this.position=new T,this.quaternion=new Oe,this.prevPosition=new T,this.prevQuaternion=new Oe,this.hands=new T,this.dir=new T(0,-1,0),this.face=new T(0,0,-1),this.sweetLocal=new T(0,ft.bat.sweetSpotFromToe,ft.bat.bladeFace),this.sweetPos=new T,this.prevSweetPos=new T,this.sweetVel=new T,this.intentVel=new T,this.swingMemoryVel=new T,this.push=new T,this.prevFreeSweet=new T,this.lastDt=ft.physics.dt,this.reset()}reset(){const t=ft.control;this.tilt.set(t.restTilt.a,t.restTilt.b),this.tiltVel.set(0,0),this.target.copy(this.tilt),this.stepTarget.copy(this.tilt),this.sweetVel.set(0,0,0),this.intentVel.set(0,0,0),this.swingMemoryVel.set(0,0,0),this._computePose(0,!0),this.prevFreeSweet.subVectors(this.sweetPos,this.push),this.prevPosition.copy(this.position),this.prevQuaternion.copy(this.quaternion),this.prevSweetPos.copy(this.sweetPos)}clampTarget(t){const e=ft.control;return t.x=qn(t.x,e.tiltMin.a,e.tiltMax.a),t.y=qn(t.y,e.tiltMin.b,e.tiltMax.b),t}addTargetDelta(t,e){this.target.x+=t,this.target.y+=e,this.clampTarget(this.target)}setTargetAbsolute(t,e){this.target.set(t,e),this.clampTarget(this.target)}recenter(t,e){if(e<=0)return;const n=ft.control.restTilt,s=1-Math.exp(-e*t);this.target.x+=(n.a-this.target.x)*s,this.target.y+=(n.b-this.target.y)*s}step(t,e){const n=ft.control,s=n.responsiveness,r=n.springFrequency*Math.sqrt(s),o=n.damping;this.stepTarget.copy(e),this.prevPosition.copy(this.position),this.prevQuaternion.copy(this.quaternion),this.prevSweetPos.copy(this.sweetPos);let a=r*r*(e.x-this.tilt.x)-2*o*r*this.tiltVel.x,l=r*r*(e.y-this.tilt.y)-2*o*r*this.tiltVel.y;const c=n.maxTiltAccel*s,h=Math.hypot(a,l);h>c&&(a*=c/h,l*=c/h),this.tiltVel.x+=a*t,this.tiltVel.y+=l*t;const u=this.tiltVel.length();if(u>n.maxTiltSpeed&&this.tiltVel.multiplyScalar(n.maxTiltSpeed/u),this.tilt.x+=this.tiltVel.x*t,this.tilt.y+=this.tiltVel.y*t,this.tilt.x=qn(this.tilt.x,n.tiltMin.a-.05,n.tiltMax.a+.05),this.tilt.y=qn(this.tilt.y,n.tiltMin.b-.1,n.tiltMax.b+.1),this._computePose(t,!1),this.lastDt=t,t>0){this.sweetVel.subVectors(this.sweetPos,this.prevSweetPos).divideScalar(t),this.intentVel.subVectors(this.sweetPos,this.push).sub(this.prevFreeSweet).divideScalar(t);const f=Math.exp(-t/(n.swingMemoryTau||.075));if(this.swingMemoryVel.multiplyScalar(f),this.intentVel.lengthSq()>this.swingMemoryVel.lengthSq()){this.swingMemoryVel.copy(this.intentVel);const d=this.swingMemoryVel.length();d>28&&this.swingMemoryVel.multiplyScalar(28/d)}}this.prevFreeSweet.subVectors(this.sweetPos,this.push)}_computePose(t,e){const n=ft.control,s=ft.bat,r=this.tilt.x,o=this.tilt.y,a=n.handsRest,l=bs(-.2,1.1,o);this.hands.set(a.x+.16*Math.tanh(r*.9),a.y+.36*bs(.9,2.6,o)+.06*Math.min(Math.abs(r),1.4)*bs(.4,1.4,o),a.z-.3*l+.12*bs(1.8,2.9,o)),qg(r,o,this.dir),this.position.copy(this.hands).addScaledVector(this.dir,s.gripFromToe);const c=Ah(o),h=Ao.set(0,Math.sin(c),-Math.cos(c));h.addScaledVector(this.dir,-h.dot(this.dir)).normalize();const u=this.intentVel,f=u.dot(h),d=Math.abs(f)-f,g=1/n.faceVelocityRef,_=mc.set(h.x+(u.x+d*h.x)*g,h.y+(u.y+d*h.y)*g,h.z+(u.z+d*h.z)*g);_.addScaledVector(this.dir,-_.dot(this.dir)),_.lengthSq()<1e-8&&_.copy(h),_.normalize(),e?this.face.copy(_):this.face.lerp(_,1-Math.exp(-n.faceFollowRate*Math.sqrt(n.responsiveness)*t)),this.face.addScaledVector(this.dir,-this.face.dot(this.dir)),this.face.lengthSq()<1e-8&&this.face.copy(_),this.face.normalize(),this._applyConstraints();const m=To.copy(this.dir).negate(),p=Ao.crossVectors(m,this.face).normalize();gc.makeBasis(p,m,this.face),this.quaternion.setFromRotationMatrix(gc),this.sweetPos.copy(this.sweetLocal).applyQuaternion(this.quaternion).add(this.position)}_applyConstraints(){const t=ft.bat,e=t.bladeWidth*.5,n=To.copy(this.dir).negate(),s=Ao.crossVectors(n,this.face).normalize(),r=[[0,0,0],[-e,0,t.bladeFace],[e,0,t.bladeFace],[-e,0,t.bladeBack],[e,0,t.bladeBack],[-e,t.bladeLength,t.bladeFace],[e,t.bladeLength,t.bladeFace]];let o=0;for(let a=0;a<r.length;a++){const l=r[a],c=this.position.y+o+l[0]*s.y+l[1]*n.y+l[2]*this.face.y;c<.003&&(o+=.003-c)}this.push.set(0,o,0),o&&(this.position.y+=o,this.hands.y+=o)}poseAt(t,e,n){e.lerpVectors(this.prevPosition,this.position,t),n.slerpQuaternions(this.prevQuaternion,this.quaternion,t)}pointVelocity(t,e){const n=mc.copy(t).applyQuaternion(this.quaternion).add(this.position),s=To.copy(t).applyQuaternion(this.prevQuaternion).add(this.prevPosition);e.subVectors(n,s).divideScalar(this.lastDt||ft.physics.dt);const r=ft.bat,o=r.gripFromToe-r.sweetSpotFromToe,a=qn(Math.abs(r.gripFromToe-t.y),.18,r.gripFromToe),l=qn(a/o,.35,1.25),c=this.swingMemoryVel.length()*l;return c>e.length()&&c>2&&e.copy(this.swingMemoryVel).multiplyScalar(l),e}get sweetSpeed(){return Math.max(this.sweetVel.length(),this.swingMemoryVel.length())}}const br=new T,xs=new T,Zg=new Oe;function _c(i,t){return Math.abs(i)<ft.field.pitchHalfWidth&&t<1.3&&t>-mn-1.3}class $g{constructor(){this.pos=new T,this.vel=new T,this.spin=new T,this.prevPos=new T,this.orientation=new Oe,this.prevOrientation=new Oe,this.active=!1,this.rolling=!1,this.events=[];const t=ft.ball;this.dragK=.5*ft.physics.airDensity*t.dragCoefficient*Math.PI*t.radius*t.radius/t.mass}launch(t,e){this.pos.copy(t),this.prevPos.copy(t),this.vel.copy(e),this.spin.set(-e.length()*2,0,0),this.active=!0,this.rolling=!1}step(t){if(this.prevPos.copy(this.pos),this.prevOrientation.copy(this.orientation),!this.active)return;const e=ft.ball,n=ft.physics.gravity,s=e.radius,r=this.vel,o=r.length();if(this.rolling){const l=Math.hypot(r.x,r.z),c=ft.ground.rollingResistance*n*(_c(this.pos.x,this.pos.z)?.6:1)+this.dragK*l*l,h=Math.max(0,l-c*t);l>1e-6?(r.x*=h/l,r.z*=h/l):(r.x=0,r.z=0),r.y=0,this.pos.x+=r.x*t,this.pos.z+=r.z*t,this.pos.y=s,this.spin.set(r.z/s,0,-r.x/s)}else{br.set(0,-n,0),br.addScaledVector(r,-this.dragK*o),xs.crossVectors(this.spin,r).multiplyScalar(e.magnusCoefficient);const l=xs.length();l>e.maxMagnusAccel&&xs.multiplyScalar(e.maxMagnusAccel/l),br.add(xs),r.addScaledVector(br,t),this.pos.addScaledVector(r,t),this.spin.multiplyScalar(Math.exp(-e.spinDecay*t)),this.pos.y<s&&r.y<0&&this._bounce(s)}const a=this.spin.length();if(a>1e-4){const l=Zg.setFromAxisAngle(xs.copy(this.spin).divideScalar(a),a*t);this.orientation.premultiply(l)}}_bounce(t){const e=ft.ground,n=this.vel,s=_c(this.pos.x,this.pos.z),r=s?e.pitchRestitution:e.outfieldRestitution,o=s?e.pitchFriction:e.outfieldFriction,a=-n.y;this.pos.y=t+(t-this.pos.y)*r,n.y=a*r;const l=this.spin,c=n.x+l.z*t,h=n.z-l.x*t,u=Math.hypot(c,h);if(u>1e-6){const f=Math.min(o*(1+r)*a,u*.2857142857142857),d=-c/u*f,g=-h/u*f;n.x+=d,n.z+=g;const _=5/(2*t);l.x+=-g*_,l.z+=d*_}this.events.push({type:"bounce",onPitch:s,speed:a,pos:this.pos.clone()}),n.y<e.rollThreshold&&(n.y=0,this.pos.y=t,this.rolling=!0)}}const Rn=new T,vc=new T,xc=new T,Ro=new Oe,Mc=new Oe,yc=new T;function nn(i,t,e){return i<t?t:i>e?e:i}function Ms(i,t,e){const n=nn((e-i)/(t-i),0,1);return n*n*(3-2*n)}function Fr(i,t,e){const n=ft.bat,s=(n.collisionWidth||n.bladeWidth)/2,r=-s,o=s,a=0,l=n.bladeLength,c=n.bladeBack,h=n.bladeFace;let u,f;if(!(i.x>r&&i.x<o&&i.y>a&&i.y<l&&i.z>c&&i.z<h))t.set(nn(i.x,r,o),nn(i.y,a,l),nn(i.z,c,h)),e.subVectors(i,t),u=e.length(),e.divideScalar(u||1);else{const D=[i.x-r,o-i.x,i.y-a,l-i.y,i.z-c,h-i.z];let A=0;for(let C=1;C<6;C++)D[C]<D[A]&&(A=C);t.copy(i),e.set(0,0,0),A===0&&(t.x=r,e.x=-1),A===1&&(t.x=o,e.x=1),A===2&&(t.y=a,e.y=-1),A===3&&(t.y=l,e.y=1),A===4&&(t.z=c,e.z=-1),A===5&&(t.z=h,e.z=1),u=-D[A]}f="blade";const g=(c+h)/2,_=nn(i.y,l,n.totalLength),m=i.x,p=i.y-_,E=i.z-g,S=Math.hypot(m,p,E),M=S-n.handleRadius;return M<u&&(u=M,f="handle",S>1e-7?e.set(m/S,p/S,E/S):e.set(0,0,1),t.set(0,_,g).addScaledVector(e,n.handleRadius)),Fr.region=f,u}Fr.region="blade";function Jg(i,t,e){const n=ft.ball.radius,s=t.prevPos,r=t.pos,o=ft.bat.totalLength/2,a=yc.set(0,o,0).applyQuaternion(i.prevQuaternion).add(i.prevPosition),l=a.x,c=a.y,h=a.z,u=yc.set(0,o,0).applyQuaternion(i.quaternion).add(i.position),f=i.position.distanceTo(i.prevPosition)+2*o*i.quaternion.angleTo(i.prevQuaternion),d=s.distanceTo(r),g=o+.08+n+f+d,_=Math.hypot(s.x-l,s.y-c,s.z-h),m=r.distanceTo(u);if(Math.min(_,m)>g)return null;const p=ft.physics,E=nn(Math.ceil((f+d)/p.microStepDistance),1,p.maxMicroSteps),S=new T;for(let M=1;M<=E;M++){const D=M/E;if(i.poseAt(D,S,Ro),Mc.copy(Ro).invert(),Rn.lerpVectors(s,r,D).sub(S).applyQuaternion(Mc),Fr(Rn,xc,vc)<n){const C=Kg(i,t,xc.clone(),vc.clone(),Fr.region,S,Ro,D,e);if(C)return C}}return null}function Kg(i,t,e,n,s,r,o,a,l){const c=ft.bat,h=ft.ball,u=h.radius,f=(c.collisionWidth||c.bladeWidth)/2,d=n.clone();if(s==="blade"&&e.z>=-.005&&e.y>.012){const at=nn(e.x/f,-1,1),yt=Math.abs(at);if(yt<.88)d.set(at*.3,.05,1).normalize();else{const ht=Ms(.85,1,yt);d.set(Math.sign(at)*(.3+.58*ht),.06,1-.55*ht).normalize()}}const g=d.clone().applyQuaternion(o).normalize(),_=e.clone().applyQuaternion(o).add(r),m=i.pointVelocity(e,new T),p=m.length();if(p>3.5){const yt=1+((c.swingPowerMultiplier||1.25)-1)*Ms(3.5,11,p);if(m.multiplyScalar(yt),s==="blade"&&g.z<-.5&&(m.y>1.5||i.tilt.y>.35)){const ht=.24*Ms(5,16,p)*Ms(.1,.9,i.tilt.y);g.y=nn(g.y+ht,-.35,.62),g.normalize()}}const E=g.clone().multiplyScalar(-u),M=t.vel.clone().add(new T().crossVectors(t.spin,E)).sub(m),D=M.dot(g);if(D>=-.05)return null;const A=e.clone().sub(new T(0,c.comFromToe,0)),C=new T().crossVectors(A,d),v=1/(1/(c.mass+c.handCouplingMass)+C.x*C.x/c.inertiaTransverse+C.y*C.y/c.inertiaLong+C.z*C.z/c.inertiaTransverse);let x,R,H;if(s==="blade"){x=c.restitutionFloor+(1-c.restitutionFloor)*Math.exp(-Math.pow((e.y-c.sweetSpotFromToe)/c.sweetSpotWidth,2));const at=nn(Math.abs(e.x)/f,0,1);R=1-c.edgeRestitutionLoss*Math.pow(at,3),H=Math.max(.25,d.z)}else x=.45,R=.7,H=.3;const N=Math.max(0,m.dot(g)),k=c.softHandsMin+(1-c.softHandsMin)*Ms(0,c.softHandsSpeed,N),G=c.restitution*x*R*(.75+.25*H)*k,X=-(1+G)*D/(1/h.mass+1/v),K=g.clone().multiplyScalar(X/h.mass),Z=M.clone().addScaledVector(g,-D),pt=Z.length(),Mt=.4*h.mass*u*u;if(pt>1e-5){const at=pt/(3.5/h.mass+1/v),yt=Math.min(c.friction*X,at),ht=Z.multiplyScalar(-yt/pt);K.addScaledVector(ht,1/h.mass),t.spin.add(new T().crossVectors(E,ht).divideScalar(Mt))}const Tt=t.vel.length();t.vel.add(K);let Pt=t.vel.length();Pt>c.maxExitSpeed&&(t.vel.multiplyScalar(c.maxExitSpeed/Pt),Pt=c.maxExitSpeed),t.pos.copy(_).addScaledVector(g,u+.002).addScaledVector(t.vel,(1-a)*l),t.rolling=!1,typeof i.onBallImpact=="function"&&i.onBallImpact(N);const jt=nn(x*R*H,0,1),j=s==="handle"||H<.72||Math.abs(e.x)>f*.86;return{type:"bat",region:s,quality:jt,edge:j,restitution:G,effectiveMass:v,contactLocal:e,normal:g,batSpeed:m.length(),batNormalSpeed:N,incomingSpeed:Tt,exitSpeed:Pt,impulse:X,pos:_}}function Sc(i,t,e){const n=ft.stumps,s=ft.ball.radius,r=i.prevPos,o=i.pos,a=Math.min(r.z,o.z);if(Math.max(r.z,o.z)<e-.3||a>e+.3||Math.min(r.y,o.y)>n.height+.06)return null;const c=nn(Math.ceil(r.distanceTo(o)/.008),1,64);for(let h=1;h<=c;h++){Rn.lerpVectors(r,o,h/c);for(let u=-1;u<=1;u++){const f=u*n.spacing,d=nn(Rn.y,0,n.height+.015),g=Rn.x-f,_=Rn.y-d,m=Rn.z-e,p=Math.hypot(g,_,m);if(p<s+n.radius){const E=new T(g,_,m).divideScalar(p||1),S=i.vel.dot(E),M=i.vel.length();return S<0&&i.vel.addScaledVector(E,-1.25*S),i.vel.multiplyScalar(.7),i.pos.copy(Rn).addScaledVector(E,s+n.radius-p+.002),i.rolling=!1,{type:"stumps",stump:u,speed:M,normal:E,pos:Rn.clone()}}}}return null}class jg{constructor(){this.bat=new Yg,this.ball=new $g,this.events=[],this.stumpsBroken=!1,this.nonStrikerBroken=!1,this.time=0,this.lastBatContactTime=-1,this._target=new lt}resetDelivery(){this.ball.active=!1,this.ball.rolling=!1,this.stumpsBroken=!1,this.nonStrikerBroken=!1,this.lastBatContactTime=-1,this.events.length=0}step(t,e){this.time+=t,this.bat.step(t,e);const n=this.ball;if(n.step(t),n.active){const s=Jg(this.bat,n,t);if(s&&(s.repeat=this.lastBatContactTime>=0&&this.time-this.lastBatContactTime<.12,s.time=this.time,this.lastBatContactTime=this.time,this.events.push(s)),!this.stumpsBroken){const r=Sc(n,t,ft.stumps.z);r&&(this.stumpsBroken=!0,r.time=this.time,this.events.push(r))}if(!this.nonStrikerBroken){const r=Sc(n,t,-ft.stumps.z-20.12);r&&(this.nonStrikerBroken=!0,r.isNonStriker=!0,r.time=this.time,this.events.push(r))}}if(n.events.length){for(const s of n.events)s.time=this.time,this.events.push(s);n.events.length=0}}drainEvents(){const t=this.events.slice();return this.events.length=0,t}}const Co=(i,t)=>i+Math.random()*(t-i),bc=i=>i[Math.floor(Math.random()*i.length)],Ec=[{name:"Half-volley outside off",line:"outsideOff",length:"full",cat:"easy"},{name:"Slot ball on middle",line:"middle",length:"full",cat:"easy"},{name:"Overpitched on the pads",line:"leg",length:"full",cat:"easy"},{name:"Full and wide outside off",line:"outsideOff",length:"full",cat:"easy"},{name:"Half-volley on off stump",line:"off",length:"full",cat:"easy"},{name:"Good length, off stump",line:"off",length:"good",cat:"stock"},{name:"Good length, middle",line:"middle",length:"good",cat:"stock"},{name:"Good length outside off",line:"outsideOff",length:"good",cat:"stock"},{name:"Full on off stump",line:"off",length:"full",cat:"stock"},{name:"Good length on leg stump",line:"leg",length:"good",cat:"stock"},{name:"Yorker on middle",line:"middle",length:"yorker",cat:"hard"},{name:"Yorker on off",line:"off",length:"yorker",cat:"hard"},{name:"Full inswinger on middle",line:"middle",length:"full",cat:"hard"},{name:"Good length, nipping at off",line:"off",length:"good",cat:"hard"},{name:"Yorker on leg stump",line:"leg",length:"yorker",cat:"hard"}],wc=[{name:"Fast",pace:"fast",runSpeed:6.8,runDistance:13},{name:"Medium pace",pace:"medium",runSpeed:5.6,runDistance:10},{name:"Slow",pace:"slow",runSpeed:3.6,runDistance:5}];class Qg{constructor(){this.reset()}reset(){this.consecutiveHard=0,this.ballsSinceEasy=0,this.lastTemplate=null,this.recentRuns=[],this.overIndex=-1,this.bowler=null,this.lastBowlerType=null}startOver(t){this.overIndex=t;let e=wc.filter(n=>n!==this.lastBowlerType);t===0&&(e=[wc[1]]),this.bowler=bc(e),this.lastBowlerType=this.bowler}recordOutcome(t){this.recentRuns.push(t),this.recentRuns.length>4&&this.recentRuns.shift()}next(){const t=this.recentRuns.reduce((_,m)=>_+m,0);let e=.18+.1*this.consecutiveHard+.05*Math.max(0,this.ballsSinceEasy-3),n=.22+(t>=8?.18:0)-.08*this.consecutiveHard;e=Math.min(e,.6),n=Math.max(n,.05);const s=Math.random(),r=s<e?"easy":s<e+n?"hard":"stock";let o=Ec.filter(_=>_.cat===r&&_!==this.lastTemplate);const a=this.bowler;a.pace==="slow"&&(o=o.filter(_=>!(_.length==="short"&&_.cat==="hard"))),o.length||(o=Ec.filter(_=>_.cat==="stock"));const l=bc(o);this.lastTemplate=l,this.consecutiveHard=r==="hard"?this.consecutiveHard+1:0,this.ballsSinceEasy=r==="easy"?0:this.ballsSinceEasy+1;let c=a.pace;c==="fast"&&Math.random()<.12&&(c="medium");const[h,u]=ft.bowling.speeds[c],f=Co(h,u),d=ft.bowling.lines[l.line],g=ft.bowling.lengths[l.length];return{name:l.name,category:r,bowler:a,pace:c,kmh:f,speed:f/3.6,lineX:Co(d[0],d[1]),bounceDist:Co(g[0],g[1])}}}function t_(i,t){const e=ft.ball.radius,n=ft.physics.gravity,s=ft.ball,r=.5*ft.physics.airDensity*s.dragCoefficient*Math.PI*s.radius*s.radius/s.mass,o=ft.physics.dt,a=new T(t.lineX,e,ft.stumps.z),l=ft.stumps.z-t.bounceDist,c=new T(a.x-i.x,0,a.z-i.z).normalize(),h=_=>{const m=t.speed*Math.cos(_);let p=c.x*m,E=c.z*m,S=t.speed*Math.sin(_);i.x;let M=i.y,D=i.z;for(let A=0;A<2e3;A++){const C=Math.hypot(p,S,E);if(p+=-r*C*p*o,S+=(-n-r*C*S)*o,E+=-r*C*E*o,M+=S*o,D+=E*o,M<=e)return D;if(D>5)return 10}return 10};let u=-.6,f=.35;for(let _=0;_<40;_++){const m=(u+f)/2;h(m)<l?u=m:f=m}const d=(u+f)/2,g=t.speed*Math.cos(d);return new T(c.x*g,t.speed*Math.sin(d),c.z*g)}const e_=-mn+1.22,Rh={hipHeight:.98,torsoLength:.56,shoulderHalf:.2,armLength:.7,legLength:.96,bodyX:.42};function n_(i){const e=i.runSpeed,n=i.pace==="slow"?.55:.42,s=i.runDistance/e+.35,r=e*n*.6,o=e_-.35,a=o-r,l=e*(s-.35*(1-Math.exp(-s/.35)));return{v:e,tau:.35,tGather:n,tRun:s,gatherDist:r,zRelease:o,zGather:a,zStart:a-l,tRelease:s+n,stride:i.pace==="slow"?1.2:1.9,releaseAngle:Math.PI-.05}}const ri=new T,Tc=new T;function Ch(i,t,e={}){const n=Rh;let s,r=n.bodyX,o=0,a,l,c,h,u,f=0,d=0,g;const _=.2*t.v;if(i<=t.tRun){const D=Math.max(0,i);g=t.v*(D-t.tau*(1-Math.exp(-D/t.tau))),s=t.zStart+g;const A=g/t.stride*Math.PI*2;h=.75*Math.sin(A),u=-h,f=.6*Math.max(0,Math.sin(A+1.2))+.2,d=.6*Math.max(0,Math.sin(A+1.2+Math.PI))+.2,o=.05*Math.abs(Math.sin(A)),a=.18,l=.25-.45*Math.sin(A),c=.25+.45*Math.sin(A)}else if(i<=t.tRelease){const D=(i-t.tRun)/t.tGather;s=t.zGather+t.v*t.tGather*(D-.4*D*D),o=.16*Math.sin(Math.PI*Math.min(1,D*1.25)),a=.18-.42*Math.sin(Math.PI*Math.min(1,D*1.3))+.12*D*D,l=.2+(t.releaseAngle-.2)*Math.pow(D,2.2),c=D<.6?.25+(Math.PI-.1-.25)*(D/.6):Math.PI-.1-2.2*((D-.6)/.4),h=-.55*Math.min(1,D*1.6),u=.45*D,f=.5*(1-D),d=.6*Math.sin(Math.PI*D)}else{const D=i-t.tRelease,A=.7;s=t.zRelease+_*A*(1-Math.exp(-D/A))+.9*(1-Math.exp(-D/.25)),r=n.bodyX+.9*(1-Math.exp(-D/.8)),a=.3+.35*(1-Math.exp(-D/.2)),l=t.releaseAngle+(2*Math.PI+.35-t.releaseAngle)*(1-Math.exp(-D/.11)),c=.9+.2*Math.exp(-D/.2),h=-.5*Math.exp(-D/.5),u=.5*Math.exp(-D/.4)+.2*Math.sin(D*6)*Math.exp(-D),f=.3,d=.4,o=0}e.x=r,e.z=s,e.y=o,e.lean=a,e.armR=l,e.armL=c,e.legL=h,e.legR=u,e.kneeL=f,e.kneeR=d;const m=n.hipHeight+o;ri.set(-.2,n.torsoLength,0),Tc.set(0,-Math.cos(l),-Math.sin(l)).multiplyScalar(n.armLength),ri.add(Tc);const p=Math.cos(a),E=Math.sin(a),S=ri.y*p-ri.z*E,M=ri.y*E+ri.z*p;return e.hand=(e.hand||new T).set(r+ri.x,m+S,s+M),e}class i_{start(){this.hit=!1,this.firstContact=null,this.groundedAfterHit=!1,this.result=null,this.t=0,this.tHit=0,this.maxHeight=0,this.closestToHead=1/0}update(t,e,n){if(this.result)return this.result;this.t+=t;for(const s of n)if(s.type==="bat"&&!this.hit)this.hit=!0,this.firstContact=s,this.tHit=this.t;else if(s.type==="bounce"&&this.hit)(this.t-this.tHit>.06||e.vel.y<2.5)&&(this.groundedAfterHit=!0);else if(s.type==="stumps"){if(s.isNonStriker)continue;return this.result={kind:"wicket",runs:0,text:this.hit?"Played on!":"Bowled!"},this.result}if(!e.active)return null;if(this.hit){e.rolling&&this.t-this.tHit>.08&&(this.groundedAfterHit=!0),this.maxHeight=Math.max(this.maxHeight,e.pos.y);const s=ft.field,r=e.pos.x,o=e.pos.z-s.centerZ,a=Math.hypot(r,o),l=Math.hypot(e.pos.x,e.pos.z+1.22);if(a>=s.boundaryRadius){const d=!this.groundedAfterHit&&this.maxHeight>1.2;return this.result=d?{kind:"six",runs:6,text:"SIX!",distance:Math.round(l)}:{kind:"four",runs:4,text:"FOUR!",distance:Math.round(l)},this.result}const c=e.vel.length(),h=ft.ground.rollingResistance*ft.physics.gravity,u=e.rolling?c*c/(2*h):0,f=a+u>=s.boundaryRadius-1.5;if(e.rolling&&c<1.35&&!f||e.rolling&&c<.35||this.t-this.tHit>ft.game.deadBallTimeout)return this.result=this.scoreInfieldOrOutfield(l+u*.7),this.result}else if(e.pos.z>ft.stumps.z+1||e.pos.y<-1||e.rolling&&e.vel.length()<.5||this.t>4)return this.result={kind:"dot",runs:0,text:"Dot ball",distance:0},this.result;return null}scoreInfieldOrOutfield(t){const e=Math.round(t);return t>=41?{kind:"runs",runs:3,text:"3 RUNS!",distance:e}:t>=25?{kind:"runs",runs:2,text:"2 RUNS!",distance:e}:t>=11.5?{kind:"runs",runs:1,text:"1 RUN!",distance:e}:t<6.5?{kind:"dot",runs:0,text:"Defended",distance:e}:{kind:"dot",runs:0,text:"No run",distance:e}}}class s_{constructor(t,e,n){this.canvas=t,this.isTouchDevice=!!(typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0)||typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches),this.locked=!1,this.mouseDX=0,this.mouseDY=0,this.mouseIdleTime=0,this.stick={x:0,y:0,active:!1,id:null},this.originX=0,this.originY=0,this.usingJoystick=this.isTouchDevice,this.joyEl=e,this.knobEl=n,this.onLockChange=null,document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("pointerlockerror",()=>{this.locked=!1}),document.addEventListener("mousemove",s=>{this.locked&&(Math.abs(s.movementX)>400||Math.abs(s.movementY)>400||(this.mouseDX+=s.movementX,this.mouseDY+=s.movementY))}),this._setupJoystick()}requestLock(){if(!this.locked)try{const t=this.canvas.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{try{this.canvas.requestPointerLock()}catch{}})}catch{try{this.canvas.requestPointerLock()}catch{}}}releaseLock(){if(document.pointerLockElement)try{document.exitPointerLock()}catch{}}_setupJoystick(){const t=this.joyEl,e=this.knobEl,n=()=>t&&t.clientWidth>20?t.clientWidth*.5:70,s=l=>!l||!l.closest?!1:!!(l.closest("#topControls")||l.closest(".icon-btn")||l.closest("button")||l.closest("a")||l.closest("input")||l.closest("select")||l.closest(".overlay:not(.hidden)")),r=l=>{const c=n();let h=(l.clientX-this.originX)/c,u=(l.clientY-this.originY)/c;const f=Math.hypot(h,u);f>1&&(h/=f,u/=f),this.stick.x=h,this.stick.y=u,e&&(e.style.transform=`translate(${h*c*.75}px, ${u*c*.75}px)`)};window.addEventListener("touchstart",l=>{if(s(l.target)||document.querySelector(".overlay:not(.hidden)")||this.stick.active)return;const c=l.changedTouches[0];c&&(l.preventDefault(),this.stick.id=c.identifier,this.stick.active=!0,this.usingJoystick=!0,this.originX=c.clientX,this.originY=c.clientY,this.stick.x=0,this.stick.y=0,t&&(t.style.left=`${c.clientX}px`,t.style.top=`${c.clientY}px`,t.style.right="auto",t.style.bottom="auto",t.classList.add("active")),e&&(e.style.transform="translate(0px, 0px)"))},{passive:!1}),window.addEventListener("touchmove",l=>{if(this.stick.active){for(const c of l.changedTouches)if(c.identifier===this.stick.id){l.preventDefault(),r(c);break}}},{passive:!1});const o=l=>{if(this.stick.active){for(const c of l.changedTouches)if(c.identifier===this.stick.id){this.stick.active=!1,this.stick.id=null,this.stick.x=0,this.stick.y=0,t&&t.classList.remove("active"),e&&(e.style.transform="translate(0px, 0px)");break}}};window.addEventListener("touchend",o),window.addEventListener("touchcancel",o),window.addEventListener("blur",()=>{this.stick.active&&(this.stick.active=!1,this.stick.id=null,this.stick.x=0,this.stick.y=0,t&&t.classList.remove("active"),e&&(e.style.transform="translate(0px, 0px)"))});let a=!1;t&&(t.addEventListener("mousedown",l=>{this.locked||(a=!0,this.stick.active=!0,this.usingJoystick=!0,this.originX=l.clientX,this.originY=l.clientY,t.style.left=`${l.clientX}px`,t.style.top=`${l.clientY}px`,t.classList.add("active"),l.stopPropagation())}),window.addEventListener("mousemove",l=>{if(a&&!this.locked){const c=n();let h=(l.clientX-this.originX)/c,u=(l.clientY-this.originY)/c;const f=Math.hypot(h,u);f>1&&(h/=f,u/=f),this.stick.x=h,this.stick.y=u,e&&(e.style.transform=`translate(${h*c*.75}px, ${u*c*.75}px)`)}}),window.addEventListener("mouseup",()=>{a&&(a=!1,this.stick.active=!1,this.stick.x=0,this.stick.y=0,t.classList.remove("active"),e&&(e.style.transform="translate(0px, 0px)"))}))}applyTo(t,e,n){const s=ft.control;if(this.mouseDX||this.mouseDY){this.usingJoystick=!1;const r=s.mouseRadPerPixel*s.mouseSensitivity;t.addTargetDelta(this.mouseDX*r,-this.mouseDY*r),this.mouseDX=0,this.mouseDY=0}if(this.stick.active){this.usingJoystick=!0;const r=s.joystickSensitivity,o=s.restTilt,a=u=>Math.sign(u)*Math.pow(Math.abs(u),1.25),l=a(this.stick.x),c=a(-this.stick.y),h=c>=0?s.tiltMax.b-o.b:o.b-s.tiltMin.b;t.setTargetAbsolute(o.a+l*s.joystickRangeA*r,o.b+c*h*r)}else this.usingJoystick&&t.recenter(n,6)}}class r_{constructor(){this.ctx=null,this.master=null,this.crowdGain=null,this.enabled=!0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9,this.master.connect(this.ctx.destination),this.noise=this._makeNoise(2),this._startCrowd())}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_makeNoise(t){const e=this.ctx.sampleRate*t,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let r=0;r<e;r++)s[r]=Math.random()*2-1;return n}_noiseBurst({freq:t,q:e=1,type:n="bandpass",gain:s=.5,attack:r=.001,decay:o=.08,when:a=0}){if(s<=1e-4)return;const l=this.ctx,c=l.currentTime+a,h=l.createBufferSource();h.buffer=this.noise;const u=l.createBiquadFilter();u.type=n,u.frequency.value=t,u.Q.value=e;const f=l.createGain();f.gain.setValueAtTime(1e-4,c),f.gain.linearRampToValueAtTime(s,c+r),f.gain.exponentialRampToValueAtTime(1e-4,c+r+o),h.connect(u).connect(f).connect(this.master),h.start(c,Math.random()),h.stop(c+r+o+.05)}_tone({freq:t,endFreq:e,gain:n=.3,decay:s=.1,type:r="sine",when:o=0}){if(n<=1e-4)return;const a=this.ctx,l=a.currentTime+o,c=a.createOscillator();c.type=r,c.frequency.setValueAtTime(t,l),e&&c.frequency.exponentialRampToValueAtTime(e,l+s);const h=a.createGain();h.gain.setValueAtTime(n,l),h.gain.exponentialRampToValueAtTime(1e-4,l+s),c.connect(h).connect(this.master),c.start(l),c.stop(l+s+.05)}batHit(t,e,n,s){if(!this.ctx)return;const r=.25+.75*e;if(n)this._noiseBurst({freq:3600,q:7,gain:.55*r,decay:.028}),this._tone({freq:2200,endFreq:1500,gain:.15*r,decay:.045,type:"triangle"});else if(s)this._noiseBurst({freq:650,q:1.4,type:"lowpass",gain:.55*r,decay:.045}),this._tone({freq:240,endFreq:160,gain:.3*r,decay:.055});else{const o=Math.max(0,Math.min(1,t)),a=.05+.12*o;this._noiseBurst({freq:2200+800*o,q:3.5,gain:.95*r*(.8+.4*o),decay:.025+.02*o}),this._tone({freq:560+140*o,endFreq:380,gain:.42*r*(.6+.5*o),decay:a,type:"triangle"}),this._tone({freq:175,endFreq:110,gain:.45*r*(.7+.3*o),decay:a*1.3,type:"sine"}),o>.7&&this._tone({freq:880,endFreq:720,gain:.18*r,decay:a*.7,type:"sine",when:.002})}}bounce(t){if(!this.ctx)return;const e=Math.min(1,t);this._noiseBurst({freq:320,q:1.2,type:"lowpass",gain:.32*e,decay:.045}),this._noiseBurst({freq:1100,q:2,type:"bandpass",gain:.15*e,decay:.025}),this._tone({freq:140,endFreq:85,gain:.2*e,decay:.04})}stumps(){this.ctx&&(this._noiseBurst({freq:2400,q:3.2,gain:.75,decay:.05}),this._tone({freq:920,endFreq:520,gain:.35,decay:.14,type:"triangle"}),this._noiseBurst({freq:1700,q:4.5,gain:.45,decay:.04,when:.04}),this._tone({freq:1250,endFreq:700,gain:.22,decay:.08,type:"square",when:.06}),this._noiseBurst({freq:1300,q:3,gain:.35,decay:.06,when:.09}),this.cheer(.65,2.2))}whoosh(t){this.ctx&&(this._noiseBurst({freq:1100,q:1,gain:.18*t,attack:.03,decay:.14}),this.gasp())}gasp(){if(!this.ctx||!this.crowdGain)return;const t=this.crowdGain.gain,e=this.ctx.currentTime;t.cancelScheduledValues(e),t.setValueAtTime(t.value,e),t.linearRampToValueAtTime(.08,e+.12),t.linearRampToValueAtTime(.035,e+1.2)}_startCrowd(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.noise,e.loop=!0;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=850,n.Q.value=.55,this.crowdGain=t.createGain(),this.crowdGain.gain.value=.035,e.connect(n).connect(this.crowdGain).connect(this.master),e.start()}cheer(t=1,e=2.5){if(!this.ctx||!this.crowdGain)return;const n=this.crowdGain.gain,s=this.ctx.currentTime;n.cancelScheduledValues(s),n.setValueAtTime(n.value,s),n.linearRampToValueAtTime(.035+.28*t,s+.18),n.exponentialRampToValueAtTime(.035,s+e)}boundaryFanfare(t=!1){if(!this.ctx||!this.enabled)return;const e=t?[523.25,659.25,783.99,1046.5]:[523.25,659.25,783.99],n=t?.13:.11;e.forEach((s,r)=>{this._tone({freq:s,gain:.18,decay:.24,type:"triangle",when:r*n}),this._tone({freq:s*2,gain:.08,decay:.16,type:"sine",when:r*n})})}appeal(){!this.ctx||!this.enabled||(this._tone({freq:280,endFreq:420,gain:.24,decay:.28,type:"triangle"}),this._tone({freq:440,endFreq:620,gain:.16,decay:.22,type:"sine"}),this._noiseBurst({freq:1400,q:2.2,gain:.22,decay:.18,attack:.02}))}wicketWhistle(){!this.ctx||!this.enabled||(this._tone({freq:2800,gain:.22,decay:.38,type:"sine",when:.12}),this._tone({freq:2980,gain:.2,decay:.38,type:"sine",when:.12}))}boundaryClap(){if(!this.ctx||!this.enabled)return;const t=6,n=60/126;for(let s=0;s<t;s++)this._noiseBurst({freq:1250+(Math.random()-.5)*180,q:2,type:"bandpass",gain:.3,decay:.038,when:.42+s*n}),this._tone({freq:210,gain:.1,decay:.032,when:.42+s*n})}bowlerStride(){!this.ctx||!this.enabled||(this._noiseBurst({freq:220,q:1.2,type:"lowpass",gain:.22,decay:.05}),this._tone({freq:115,endFreq:68,gain:.2,decay:.065}))}bowlerRelease(){!this.ctx||!this.enabled||(this._noiseBurst({freq:620,q:1.6,gain:.16,decay:.07,attack:.02}),this._tone({freq:185,endFreq:125,gain:.14,decay:.09,type:"triangle"}))}ballFlyby(t){if(!this.ctx||!this.enabled||t<105)return;const e=Math.min(1,(t-95)/45);this._noiseBurst({freq:1350+e*650,q:2.2,gain:.15*e,attack:.04,decay:.12})}toggleMute(){return this.enabled=!this.enabled,this.master&&(this.master.gain.value=this.enabled?.9:0),this.enabled}}let Wn=null;function o_(){if(Wn)return Wn;const i=document.createElement("canvas");i.width=5,i.height=1;const t=i.getContext("2d"),e=[75,130,185,230,255];for(let n=0;n<e.length;n++){const s=e[n];t.fillStyle=`rgb(${s},${s},${s})`,t.fillRect(n,0,1,1)}return Wn=new Va(i),Wn.colorSpace=Cn,Wn.minFilter=Ge,Wn.magFilter=Ge,Wn.generateMipmaps=!1,Wn}function kt(i){return new kg({gradientMap:o_(),...i})}function a_(i=.008,t=1315859,e=1){return new sn({side:Le,transparent:e<.999,depthWrite:e>=.999,uniforms:{uThickness:{value:i},uColor:{value:new qt(t)},uOpacity:{value:e}},vertexShader:`
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
    `})}function Ot(i,t=.008,e=1315859){const n=a_(t,e),s=new nt(i.geometry,n);return i.add(s),s}function we(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const s=new Va(n);return s.colorSpace=ke,s.anisotropy=4,s}function l_(){const i=new ye,t=kt({color:16317180}),e=kt({color:1976635}),n=kt({color:14254651}),s=kt({color:14753096}),r=kt({color:1976635}),o=kt({color:988970}),a=new nt(new Nn(.32,16),new fe({color:1315859,transparent:!0,opacity:.38,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.012,i.add(a);const l=new ye;i.add(l);for(const _ of[-.1,.1]){const m=new nt(new Je(.068,.78,4,10),r);m.position.set(_,.48,0),m.castShadow=!0,Ot(m,.012,1315859),l.add(m);const p=new nt(new oe(.11,.08,.24),o);p.position.set(_,.04,.04),p.castShadow=!0,Ot(p,.01,1315859),l.add(p)}const c=new nt(new Je(.18,.4,5,12),s);c.position.y=1.18,c.scale.set(1.14,1,.8),c.castShadow=!0,Ot(c,.014,1315859),l.add(c);const h=new nt(new ge(.11,.13,.06,12),t);h.position.y=1.48,Ot(h,.008,1315859),l.add(h);for(const _ of[-.23,.23]){const m=new nt(new Je(.046,.46,4,10),s);m.position.set(_,1.16,-.03),m.rotation.z=_<0?.12:-.12,m.rotation.x=.16,m.castShadow=!0,Ot(m,.01,1315859),l.add(m);const p=new nt(new He(.046,10,8),n);p.position.set(_*.92,.88,-.08),Ot(p,.008,1315859),l.add(p)}const u=new nt(new He(.115,14,12),n);u.position.y=1.62,u.castShadow=!0,Ot(u,.012,1315859),l.add(u);const f=new nt(new ge(.24,.25,.018,18),t);f.position.y=1.68,f.rotation.x=.06,f.castShadow=!0,Ot(f,.008,1315859),l.add(f);const d=new nt(new ge(.11,.125,.1,14),t);d.position.y=1.73,Ot(d,.008,1315859),l.add(d);const g=new nt(new ge(.126,.128,.025,14),e);return g.position.y=1.695,l.add(g),i.userData.body=l,i}function c_(){const i=new ye,t=kt({color:1920728}),e=kt({color:16096779}),n=kt({color:16317180}),s=kt({color:988970}),r=kt({color:9741240}),o=kt({color:14254651}),a=kt({color:15857145}),l=kt({color:16638023}),c=new nt(new Nn(.35,16),new fe({color:1315859,transparent:!0,opacity:.4,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.012,i.add(c);const h=new ye;i.add(h);for(const C of[-.11,.11]){const I=new nt(new Je(.07,.36,4,10),t);I.position.set(C,.72,0),I.castShadow=!0,Ot(I,.012,1315859),h.add(I);const v=new nt(new oe(.145,.5,.14),n);v.position.set(C,.34,.02),v.castShadow=!0,Ot(v,.012,1315859),h.add(v);const x=new nt(new oe(.152,.05,.145),e);x.position.set(C,.56,.02),h.add(x);const R=new nt(new oe(.11,.08,.24),n);R.position.set(C,.04,.05),Ot(R,.01,1315859),h.add(R)}const u=new nt(new Je(.175,.38,5,12),t);u.position.y=1.18,u.scale.set(1.15,1,.8),u.rotation.x=.12,u.castShadow=!0,Ot(u,.014,1315859),h.add(u);const f=new nt(new oe(.32,.07,.29),e);f.position.set(0,1.24,.01),f.rotation.x=.12,h.add(f);const d=new nt(new Je(.048,.44,4,10),t);d.position.set(.21,1.14,.1),d.rotation.x=-.55,d.rotation.z=-.22,d.castShadow=!0,Ot(d,.01,1315859),h.add(d);const g=new nt(new Je(.048,.44,4,10),t);g.position.set(-.2,1.12,.1),g.rotation.x=-.5,g.rotation.z=.25,g.castShadow=!0,Ot(g,.01,1315859),h.add(g);const _=new nt(new He(.068,10,8),a);_.position.set(0,.9,.26),Ot(_,.008,1315859),h.add(_);const m=new ye;m.position.set(0,.9,.26),m.rotation.x=-.26;const p=new nt(new ge(.018,.018,.3,8),s);p.position.y=-.1,Ot(p,.005,1315859),m.add(p);const E=new nt(new oe(.105,.56,.045),l);E.position.y=-.52,E.castShadow=!0,Ot(E,.008,1315859),m.add(E),h.add(m);const S=new nt(new He(.115,12,10),o);S.position.set(0,1.58,.06),h.add(S);const M=new nt(new He(.132,14,12,0,Math.PI*2,0,Math.PI*.62),s);M.position.set(0,1.6,.05),M.rotation.x=-.15,M.castShadow=!0,Ot(M,.012,1315859),h.add(M);const D=new nt(new ge(.135,.145,.016,12,1,!1,-Math.PI*.35,Math.PI*.7),s);D.position.set(0,1.61,.11),D.rotation.x=.2,Ot(D,.006,1315859),h.add(D);const A=new nt(new Os(.105,.009,6,12,Math.PI*.8),r);return A.position.set(0,1.54,.09),A.rotation.x=Math.PI/2,A.rotation.z=-Math.PI*.4,h.add(A),i.userData.body=h,i}function h_(i,t){const e=ft.field;i.background=new qt(3718648),i.fog=new za(8969471,165,395);const n=new T(-28,55,18).normalize(),s=new He(420,32,18),r=new sn({side:Le,depthWrite:!1,fog:!1,uniforms:{uSunDir:{value:n}},vertexShader:`
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
    `});i.add(new nt(s,r));const o=new fe({color:16777215}),a=new fe({color:15857145}),l=new ye,c=[{angle:.2,dist:265,y:135,s:2.5},{angle:.72,dist:300,y:158,s:3},{angle:1.25,dist:255,y:125,s:2.3},{angle:1.78,dist:295,y:150,s:2.8},{angle:2.3,dist:320,y:170,s:3.2},{angle:2.85,dist:270,y:132,s:2.5},{angle:3.4,dist:310,y:164,s:2.9},{angle:3.92,dist:255,y:140,s:2.4},{angle:4.45,dist:295,y:155,s:2.7},{angle:4.98,dist:280,y:145,s:2.6},{angle:5.5,dist:305,y:162,s:2.9},{angle:5.95,dist:260,y:138,s:2.3}],h=[{r:8.5,x:0,y:0,z:0},{r:6.8,x:-7,y:-1.2,z:1},{r:7.2,x:7,y:-.8,z:-1},{r:5.5,x:12,y:-2,z:2},{r:5,x:-12,y:-2.2,z:-1.5},{r:6,x:2,y:3.5,z:0}],u=h.map(P=>new He(P.r,12,10));c.forEach(P=>{const $=new ye,F=Math.sin(P.angle)*P.dist,W=e.centerZ+Math.cos(P.angle)*P.dist;$.position.set(F,P.y,W),h.forEach((it,dt)=>{const ot=dt===3||dt===4?a:o,Rt=new nt(u[dt],ot);Rt.position.set(it.x,it.y,it.z),Ot(Rt,.48,1315859),$.add(Rt)}),$.scale.set(P.s*1.38,P.s*.82,P.s*1.15),l.add($)}),i.add(l);const f=new Vg(14412542,5078079,1.18);i.add(f);const d=new Wg(16775146,1.95);d.position.set(-28,55,18),d.castShadow=!0,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,d.shadow.camera.near=10,d.shadow.camera.far=130,d.shadow.camera.left=-22,d.shadow.camera.right=22,d.shadow.camera.top=24,d.shadow.camera.bottom=-32,d.shadow.bias=-6e-4,i.add(d);const g=we(1024,1024,(P,$,F)=>{P.fillStyle="#1f9e3d",P.fillRect(0,0,$,F);const W=$/2,it=F/2,dt=14;for(let ot=dt;ot>=1;ot--)P.beginPath(),P.arc(W,it,ot*$/(2*dt),0,Math.PI*2),P.fillStyle=ot%2===0?"#2ac04c":"#1f9e3d",P.fill();P.save(),P.globalAlpha=.1,P.fillStyle="#fef08a";for(let ot=-$;ot<$*2;ot+=48)P.fillRect(ot,0,24,F);P.restore(),P.strokeStyle="#15803d",P.lineWidth=42,P.beginPath(),P.arc(W,it,$*.44,0,Math.PI*2),P.stroke(),P.fillStyle="rgba(255, 255, 255, 0.08)";for(let ot=0;ot<340;ot++){const Rt=Math.random()*Math.PI*2,Lt=Math.sqrt(Math.random())*($*.47);P.fillRect(W+Math.cos(Rt)*Lt,it+Math.sin(Rt)*Lt,3,3)}}),_=new nt(new Nn(e.boundaryRadius+16,72),kt({map:g}));_.rotation.x=-Math.PI/2,_.position.set(0,0,e.centerZ),_.receiveShadow=!0,i.add(_);const m=new Ve(.95,.16),p=new fe({color:16317180,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),E=72,S=new Ma(m,p,E),M=new ne,D=new Oe,A=new T,C=new T(1,1,1),I=new fn;for(let P=0;P<E;P++){const $=P/E*Math.PI*2;A.set(Math.sin($)*27.4,.012,e.centerZ+Math.cos($)*27.4),I.set(-Math.PI/2,$,0,"YXZ"),D.setFromEuler(I),M.compose(A,D,C),S.setMatrixAt(P,M)}i.add(S);const v=we(512,1024,(P,$,F)=>{P.fillStyle="#ddb67a",P.fillRect(0,0,$,F);for(let W=0;W<8;W++)P.fillStyle=W%2===0?"rgba(255,255,255,0.05)":"rgba(120,75,30,0.04)",P.fillRect(W/8*$,0,$/8,F);P.fillStyle="#ce9f60",P.fillRect($*.24,0,$*.52,F);for(let W=0;W<42;W++){const it=$*(.34+Math.random()*.32),dt=F*(.2+Math.random()*.24);P.fillStyle="rgba(130, 88, 42, 0.22)",P.beginPath(),P.ellipse(it,dt,4+Math.random()*6,10+Math.random()*14,0,0,Math.PI*2),P.fill()}for(const W of[.09,.91]){const it=P.createRadialGradient($/2,F*W,6,$/2,F*W,$*.44);it.addColorStop(0,"#aa7e44"),it.addColorStop(.6,"#c19659"),it.addColorStop(1,"rgba(221, 182, 122, 0)"),P.fillStyle=it,P.fillRect(0,W<.5?0:F*.8,$,F*.2)}P.strokeStyle="rgba(110, 72, 32, 0.24)",P.lineWidth=2;for(let W=0;W<16;W++){const it=$*(.18+Math.random()*.64),dt=F*(.12+Math.random()*.76);P.beginPath(),P.moveTo(it,dt),P.lineTo(it+(Math.random()-.5)*18,dt+16+Math.random()*24),P.stroke()}}),x=mn+2*2.4,R=new nt(new Ve(e.pitchHalfWidth*2,x),kt({map:v,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));R.rotation.x=-Math.PI/2,R.position.set(0,.005,-mn/2),R.receiveShadow=!0,i.add(R);const H=new og(new Mg(new Ve(e.pitchHalfWidth*2,x)),new ka({color:1315859}));H.rotation.x=-Math.PI/2,H.position.set(0,.007,-mn/2),i.add(H);const N=new fe({color:16777215,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),k=(P,$,F,W)=>{const it=new nt(new Ve(P,$),N);it.rotation.x=-Math.PI/2,it.position.set(F,.01,W),i.add(it)};for(const P of[0,-mn]){const $=P===0?-1:1;k(3.66,.07,0,P),k(3.66,.07,0,P+$*1.22);for(const F of[-1.32,1.32])k(.07,2.44,F,P);for(const F of[-.89,.89])k(.06,.44,F,P+$*1)}const G=new nt(new Os(e.boundaryRadius,.11,8,140),kt({color:16317180}));G.rotation.x=Math.PI/2,G.position.set(0,.1,e.centerZ),Ot(G,.025,1315859),i.add(G);const K=((P=3.3,$=.28,F=.44)=>{const W=P/2,it=new Float32Array([W,0,-$,-W,0,-$,-W,F,0,W,0,-$,-W,F,0,W,F,0,-W,0,$,W,0,$,W,F,0,-W,0,$,W,F,0,-W,F,0,-W,0,-$,-W,0,$,-W,F,0,W,0,$,W,0,-$,W,F,0,-W,0,-$,W,0,-$,W,0,$,-W,0,-$,W,0,$,-W,0,$]),dt=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,.02,.02,.08,.02,.05,.08,.02,.02,.08,.02,.05,.08,.02,.02,.08,.02,.08,.08,.02,.02,.08,.08,.02,.08]),ot=new Se;return ot.setAttribute("position",new be(it,3)),ot.setAttribute("uv",new be(dt,2)),ot.computeVertexNormals(),ot})(3.3,.28,.44),pt=[{bg:"#2563eb",accent:"#fde047",text:"PHYSICS CRICKET"},{bg:"#e11d48",accent:"#ffffff",text:"POW! ★ SIX!"},{bg:"#f59e0b",accent:"#141413",text:"TITAN PRO"},{bg:"#059669",accent:"#fef08a",text:"DRIVE FOR 4!"},{bg:"#7c3aed",accent:"#ffffff",text:"240HZ ENGINE"}].map(P=>{const $=we(512,128,(F,W,it)=>{F.fillStyle=P.bg,F.fillRect(0,0,W,it),F.strokeStyle="#141413",F.lineWidth=8,F.strokeRect(4,4,W-8,it-8),F.fillStyle=P.accent,F.font="900 44px system-ui, sans-serif",F.textAlign="center",F.textBaseline="middle",F.fillText(P.text,W/2,it/2)});return kt({map:$})}),Mt=48;for(let P=0;P<Mt;P++){const $=P/Mt*Math.PI*2,F=e.boundaryRadius+.48,W=new nt(K,pt[P%pt.length]);W.position.set(Math.sin($)*F,0,e.centerZ+Math.cos($)*F),W.rotation.y=$,W.castShadow=!0,W.receiveShadow=!0,Ot(W,.016,1315859),i.add(W)}const Tt=we(1024,128,(P,$,F)=>{const W=["#1d4ed8","#be123c","#d97706","#047857","#6d28d9"],it=["★ PHYSICS CRICKET ★","POW! ✦ MAXIMUM 6","⚡ SWEET SPOT ⚡","CRACK! ✦ DRIVE FOR 4","✦ PLAY STRAIGHT ✦"],dt=$/5;for(let ot=0;ot<5;ot++){const Rt=ot*dt;P.fillStyle=W[ot],P.fillRect(Rt,0,dt,F),P.fillStyle="rgba(255, 255, 255, 0.16)";for(let Lt=Rt+10;Lt<Rt+dt-6;Lt+=14)P.beginPath(),P.arc(Lt,14,3,0,Math.PI*2),P.fill(),P.beginPath(),P.arc(Lt,F-14,3,0,Math.PI*2),P.fill();P.strokeStyle="#141413",P.lineWidth=6,P.strokeRect(Rt+3,3,dt-6,F-6),P.fillStyle="#141413",P.font="900 22px system-ui, sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillText(it[ot],Rt+dt/2+2,F/2+2),P.fillStyle="#ffffff",P.fillText(it[ot],Rt+dt/2,F/2)}});Tt.wrapS=Yn,Tt.repeat.set(8,1);const Pt=e.boundaryRadius+4.2,jt=new nt(new ge(Pt,Pt,1.15,96,1,!0),new fe({map:Tt,side:Le}));jt.position.set(0,.575,e.centerZ),i.add(jt);const j=we(512,256,(P,$,F)=>{P.fillStyle="#1e293b",P.fillRect(0,0,$,F);for(let it=0;it<$;it+=128){P.fillStyle="#334155",P.fillRect(it,0,14,F),P.fillStyle="#94a3b8";for(let dt=4;dt<F;dt+=14)P.fillRect(it+2,dt,10,2)}const W=["#2563eb","#e11d48","#f59e0b","#10b981","#8b5cf6","#f8fafc","#38bdf8"];for(let it=0;it<F;it+=14){P.fillStyle="#0f172a",P.fillRect(0,it,$,3),P.fillStyle="#334155",P.fillRect(0,it+3,$,2);for(let dt=18;dt<$;dt+=8){if(dt%128<16)continue;const ot=W[Math.floor(Math.random()*W.length)];P.fillStyle=ot,P.beginPath(),P.arc(dt+(Math.random()-.5)*2,it+9,3,0,Math.PI*2),P.fill(),P.fillStyle="#141413",P.beginPath(),P.arc(dt,it+6,1.5,0,Math.PI*2),P.fill()}}});j.wrapS=Yn,j.repeat.set(8,1);const at=new nt(new ge(Pt+18,Pt+2,11,64,1,!0),kt({map:j,side:_e}));at.position.set(0,5.5,e.centerZ),i.add(at);const yt=we(512,64,(P,$,F)=>{P.fillStyle="#0f172a",P.fillRect(0,0,$,F),P.fillStyle="#fbbf24",P.fillRect(0,0,$,6),P.fillRect(0,F-6,$,6);for(let W=10;W<$;W+=36)P.fillStyle="#fef08a",P.fillRect(W,14,24,F-28),P.strokeStyle="#38bdf8",P.lineWidth=2,P.strokeRect(W,14,24,F-28)});yt.wrapS=Yn,yt.repeat.set(14,1);const ht=new nt(new ge(Pt+19,Pt+18,2.4,64,1,!0),new fe({map:yt,side:_e}));ht.position.set(0,12.2,e.centerZ),i.add(ht);const zt=new nt(new ge(Pt+36,Pt+19,12.6,64,1,!0),kt({map:j,side:_e}));zt.position.set(0,19.7,e.centerZ),i.add(zt);const Wt=we(512,64,(P,$,F)=>{P.fillStyle="#1e293b",P.fillRect(0,0,$,F),P.fillStyle="#fbbf24",P.fillRect(0,0,$,8),P.fillStyle="#38bdf8",P.fillRect(0,F-8,$,8);for(let W=0;W<$;W+=64)P.fillStyle="#0f172a",P.fillRect(W+6,14,52,F-28),P.fillStyle="#475569",P.fillRect(W,8,6,F-16)});Wt.wrapS=Yn,Wt.repeat.set(16,1);const Vt=new nt(new ge(Pt+36,Pt+36,3.8,64,1,!0),kt({map:Wt,side:_e}));Vt.position.set(0,27.7,e.centerZ),i.add(Vt);const Qt=kt({color:3359061});for(const P of[26,29.6]){const $=new nt(new Os(Pt+36,.34,8,64),Qt);$.rotation.x=Math.PI/2,$.position.set(0,P,e.centerZ),i.add($)}const et=24,ut=new oe(.9,6.2,1.2),L=kt({color:6583435}),Dt=new Ma(ut,L,et);for(let P=0;P<et;P++){const $=P/et*Math.PI*2,F=Pt+35.2;A.set(Math.sin($)*F,27.7,e.centerZ+Math.cos($)*F),I.set(0,$,0,"YXZ"),D.setFromEuler(I),M.compose(A,D,C),Dt.setMatrixAt(P,M)}i.add(Dt);const ct=[2450411,16096779,15680580,1096065,11032055,440020],At=kt({color:9741240}),gt=[],Ht=new ge(.12,.14,5.2,6),St=new Se;St.setAttribute("position",new be(new Float32Array([0,2.3,0,2.5,1.35,.3,0,.4,0]),3)),St.computeVertexNormals();for(let P=0;P<24;P++){const $=P/24*Math.PI*2,F=Pt+36,W=Math.sin($)*F,it=e.centerZ+Math.cos($)*F,dt=new nt(Ht,At);dt.position.set(W,32,it),Ot(dt,.03,1315859),i.add(dt);const ot=new fe({color:ct[P%ct.length],side:_e}),Rt=new nt(St,ot);Rt.position.set(W,31.8,it),Rt.rotation.y=$+Math.PI/4,Rt.userData={baseRotY:$+Math.PI/4,phase:P*.7},i.add(Rt),gt.push(Rt)}const w=we(256,128,(P,$,F)=>{P.fillStyle="#0f172a",P.fillRect(0,0,$,F),P.strokeStyle="#64748b",P.lineWidth=6,P.strokeRect(3,3,$-6,F-6);const W=6,it=3,dt=($-24)/W,ot=(F-20)/it;for(let Rt=0;Rt<it;Rt++)for(let Lt=0;Lt<W;Lt++){const Jt=12+(Lt+.5)*dt,U=10+(Rt+.5)*ot;P.fillStyle="#fef08a",P.beginPath(),P.arc(Jt,U,13,0,Math.PI*2),P.fill(),P.fillStyle="#ffffff",P.beginPath(),P.arc(Jt,U,8,0,Math.PI*2),P.fill()}}),y=kt({color:4674921}),V=kt({color:1976635}),Q=new fe({map:w}),rt=[V,V,V,V,Q,V];for(let P=0;P<4;P++){const $=Math.PI/4+P*Math.PI/2,F=Pt+36.8,W=Math.sin($)*F,it=e.centerZ+Math.cos($)*F,dt=-Math.sin($),ot=-Math.cos($),Rt=new nt(new ge(.7,1.35,48,8),y);Rt.position.set(W,24,it),Ot(Rt,.08,1315859),i.add(Rt);const Lt=new nt(new oe(2,1,2.8),y);Lt.position.set(W+dt*.8,48.2,it+ot*.8),Lt.lookAt(0,48.2,e.centerZ),Ot(Lt,.07,1315859),i.add(Lt);const Jt=new nt(new oe(11,5.4,1.2),rt);Jt.position.set(W+dt*2.4,50.2,it+ot*2.4),Jt.lookAt(0,0,e.centerZ),Ot(Jt,.09,1315859),i.add(Jt);const U=new nt(new oe(1.6,1.4,2.2),y);U.position.copy(Jt.position),U.quaternion.copy(Jt.quaternion),U.translateZ(-1.4),Ot(U,.07,1315859),i.add(U)}const tt=(P,$)=>{const F=new ye;F.position.set(0,0,P),F.rotation.y=$;const W=new fe({color:988970}),it=kt({color:14870768}),dt=kt({color:3359061}),ot=new nt(new oe(18,8.2,.38),W);ot.position.set(0,5.3,0),F.add(ot);const Rt=new nt(new oe(18.88,.44,.46),it);Rt.position.set(0,9.62,0),Ot(Rt,.05,1315859),F.add(Rt);const Lt=new nt(new oe(18.88,.44,.46),it);Lt.position.set(0,.98,0),Ot(Lt,.05,1315859),F.add(Lt);const Jt=new nt(new oe(.44,8.2,.46),it);Jt.position.set(-9.22,5.3,0),Ot(Jt,.05,1315859),F.add(Jt);const U=new nt(new oe(.44,8.2,.46),it);U.position.set(9.22,5.3,0),Ot(U,.05,1315859),F.add(U);for(const xt of[-7.5,0,7.5]){const J=new nt(new oe(.45,9.4,.45),dt);J.position.set(xt,4.7,-.45),Ot(J,.04,1315859),F.add(J)}i.add(F)};tt(e.centerZ-e.boundaryRadius-4.8,0),tt(e.centerZ+e.boundaryRadius+4.8,Math.PI);const Ct=l_();Ct.position.set(-.55,0,-mn-2.5),i.add(Ct);const _t=c_();return _t.position.set(-1.38,0,-mn+.9),_t.rotation.y=.14,i.add(_t),{flags:gt,clouds:l,update(P){for(let $=0;$<gt.length;$++){const F=gt[$];F.rotation.y=F.userData.baseRotY+Math.sin(P*4.2+F.userData.phase)*.18,F.rotation.z=Math.sin(P*5+F.userData.phase)*.08}l.rotation.y=P*.008,Ct.userData.body&&(Ct.userData.body.position.y=Math.sin(P*2.1)*.012,Ct.userData.body.rotation.z=Math.sin(P*.9)*.018),_t.userData.body&&(_t.userData.body.position.y=Math.sin(P*2.6+1.1)*.016,_t.userData.body.rotation.x=Math.sin(P*1.4)*.022)}}}class u_{constructor(t){this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=512,this.ctx=this.canvas.getContext("2d"),this.tex=new Va(this.canvas),this.tex.colorSpace=ke;const e=ft.field.boundaryRadius+4.2,n=Math.PI+.44,s=e+27,r=25;this.group=new ye,this.group.position.set(Math.sin(n)*s,r,ft.field.centerZ+Math.cos(n)*s),this.group.lookAt(0,r,ft.field.centerZ);const o=new fe({map:this.tex,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=new Ve(22,11);this.mesh=new nt(a,o),this.mesh.position.set(0,0,.08),this.group.add(this.mesh);const l=new nt(new oe(23.4,12.2,1),kt({color:1976635}));l.position.set(0,0,-.5),Ot(l,.12,1315859),this.group.add(l);const c=kt({color:3359061}),h=kt({color:16096779});for(const g of[-7.5,0,7.5]){const _=new nt(new oe(3.2,1.5,.95),c);_.position.set(g,6.85,-.5),Ot(_,.08,1315859),this.group.add(_);const m=new nt(new oe(2.5,.3,1.02),h);m.position.set(g,6.85,-.5),this.group.add(m)}const u=kt({color:4674921}),f=new ge(.42,.52,11,8),d=new oe(.55,.55,8.5);for(const g of[-8.2,8.2]){const _=new nt(f,u);_.position.set(g,-4.5,-1.55),Ot(_,.08,1315859),this.group.add(_);for(const m of[3.2,-3.2]){const p=new nt(d,u);p.position.set(g,m,-5.2),Ot(p,.06,1315859),this.group.add(p)}}t.add(this.group),this.update(0,0,"0.0","MATCH IN PROGRESS")}update(t,e,n,s=""){const r=this.ctx,o=1024,a=512;r.fillStyle="#0f172a",r.fillRect(0,0,o,a);const l=s.includes("SIX")||s.includes("6"),c=s.includes("FOUR")||s.includes("4"),h=s.includes("WICKET");if(l||c||h){r.save(),r.translate(o/2,a*.44);const u=l?"rgba(251, 191, 36, 0.16)":c?"rgba(16, 185, 129, 0.16)":"rgba(239, 68, 68, 0.18)";r.fillStyle=u;const f=16;for(let d=0;d<f;d+=2){const g=d/f*Math.PI*2,_=(d+1)/f*Math.PI*2;r.beginPath(),r.moveTo(0,0),r.lineTo(Math.cos(g)*650,Math.sin(g)*650),r.lineTo(Math.cos(_)*650,Math.sin(_)*650),r.closePath(),r.fill()}r.restore()}r.fillStyle="rgba(56, 189, 248, 0.08)";for(let u=24;u<a;u+=28)for(let f=24;f<o;f+=28)r.beginPath(),r.arc(f,u,4,0,Math.PI*2),r.fill();r.strokeStyle=l?"#fbbf24":c?"#10b981":h?"#ef4444":"#38bdf8",r.lineWidth=12,r.strokeRect(6,6,o-12,a-12),r.fillStyle="#1e3a8a",r.fillRect(16,16,o-32,84),r.strokeStyle="#fbbf24",r.lineWidth=4,r.strokeRect(16,16,o-32,84),r.fillStyle="#ffffff",r.font="900 42px system-ui, sans-serif",r.textAlign="center",r.fillText("⚡ ARCADE STADIUM SCOREBOARD ⚡",o/2,72),r.fillStyle="#ffffff",r.font="900 144px monospace",r.fillText(`${t}/${e}`,o/2,236),r.fillStyle="#fbbf24",r.font="900 46px system-ui, sans-serif",r.fillText(`OVERS ${n}`,o/2,316),r.fillStyle=l?"#d97706":c?"#059669":h?"#dc2626":"#1e293b",r.fillRect(16,356,o-32,136),r.strokeStyle="#141413",r.lineWidth=8,r.strokeRect(16,356,o-32,136),r.fillStyle="#ffffff",r.font="900 48px system-ui, sans-serif",r.fillText(s||"✦ TIMING IS KEY · DRIVE HARD ✦",o/2,440),this.tex.needsUpdate=!0}}class Ph{constructor(t,e){this.group=new ye,this.z=e;const n=ft.stumps,s=we(128,512,(h,u,f)=>{h.fillStyle="#fbbf24",h.fillRect(0,0,u,f),h.strokeStyle="#d97706",h.lineWidth=2.5;for(let d=1;d<=5;d++){const g=d/6*u;h.beginPath(),h.moveTo(g,0),h.bezierCurveTo(g+4,f*.35,g-4,f*.7,g+2,f),h.stroke()}h.fillStyle="#1e293b",h.fillRect(0,f*.86,u,f*.14),h.fillStyle="#f8fafc",h.fillRect(0,f*.44,u,f*.08),h.fillStyle="#141413",h.fillRect(0,f*.44,u,4),h.fillRect(0,f*.52-4,u,4)});this.mat=kt({map:s,color:16777215});const r=new ge(n.radius,n.radius*1.03,n.height,14);r.translate(0,n.height/2,0),this.holeMat=new fe({color:2760210,transparent:!0,opacity:.75,depthWrite:!1});const o=new Nn(n.radius*1.65,14);o.rotateX(-Math.PI/2),this.stumps=[],this.outlines=[];for(let h=-1;h<=1;h++){const u=new nt(o,this.holeMat);u.position.set(h*n.spacing,.007,e),this.group.add(u);const f=new nt(r,this.mat);f.position.set(h*n.spacing,0,e),f.castShadow=!0,f.receiveShadow=!0;const d=Ot(f,.0042,1315859);this.group.add(f),this.stumps.push(f),this.outlines.push(d)}const a=n.spacing*.49,l=[new lt(.004,-a),new lt(.0055,-a*.62),new lt(.0115,-a*.42),new lt(.013,0),new lt(.0115,a*.42),new lt(.0055,a*.62),new lt(.004,a)],c=new kr(l,12);c.rotateZ(Math.PI/2),this.bailMat=kt({color:16096779,emissive:0}),this.bails=[];for(const h of[-.5,.5]){const u=new nt(c,this.bailMat);u.position.set(h*n.spacing,n.height+.012,e),u.castShadow=!0;const f=Ot(u,.0032,1315859);this.group.add(u),this.bails.push(u),this.outlines.push(f)}t.add(this.group),this.reset()}setOpacity(t){const e=Math.max(0,Math.min(1,t)),n=e<.999;this.mat.transparent!==n&&(this.mat.transparent=n,this.mat.needsUpdate=!0),this.mat.opacity=e,this.mat.depthWrite=!n,this.bailMat.transparent!==n&&(this.bailMat.transparent=n,this.bailMat.needsUpdate=!0),this.bailMat.opacity=e,this.bailMat.depthWrite=!n,this.holeMat.opacity=e*.75,this.outlines.forEach(s=>{s.material.uniforms.uOpacity.value=e,s.material.transparent=n,s.material.depthWrite=!n})}reset(){const t=ft.stumps;this.anim=null,this.bailMat.color.setHex(16096779),this.bailMat.emissive.setHex(0),this.stumps.forEach((e,n)=>{e.position.set((n-1)*t.spacing,0,this.z),e.rotation.set(0,0,0)}),this.bails.forEach((e,n)=>{e.position.set((n-.5)*t.spacing,t.height+.012,this.z),e.rotation.set(0,0,0)})}shatter(t,e){this.setOpacity(1),this.bailMat.color.setHex(16722517),this.bailMat.emissive.setHex(16719426);const n=e.clone().multiplyScalar(.28);this.anim={t:0,stump:this.stumps[t+1],tiltX:Math.max(.65,Math.min(1.3,n.z*.35)),tiltZ:-n.x*.45,bails:this.bails.map(()=>new T((Math.random()-.5)*3.5+n.x,2.8+Math.random()*2.2,2.2+Math.random()*2.2+n.z)),spins:this.bails.map(()=>new T(Math.random()*22,Math.random()*22,Math.random()*22))}}update(t){const e=this.anim;if(!e||e.t>3)return;e.t+=t;const n=Math.min(1,e.t/.18);e.stump.rotation.x=e.tiltX*n,e.stump.rotation.z=e.tiltZ*n,this.bails.forEach((s,r)=>{const o=e.bails[r];s.position.y>.01?(o.y-=9.81*t,s.position.addScaledVector(o,t),s.rotation.x+=e.spins[r].x*t,s.rotation.y+=e.spins[r].y*t):(s.position.y=.01,o.set(0,0,0))})}}function f_(){const i=ft.bat,t=new ye,e=we(512,1024,(v,x,R)=>{const H=v.createLinearGradient(0,0,x,0);H.addColorStop(0,"#facc15"),H.addColorStop(.18,"#fef08a"),H.addColorStop(.5,"#fef9c3"),H.addColorStop(.82,"#fef08a"),H.addColorStop(1,"#facc15"),v.fillStyle=H,v.fillRect(0,0,x,R),v.strokeStyle="rgba(202, 138, 4, 0.55)",v.lineWidth=4;const N=8;for(let k=1;k<=N;k++){const G=k/(N+1)*x;v.beginPath(),v.moveTo(G,0),v.bezierCurveTo(G+8,R*.35,G-8,R*.7,G+3,R),v.stroke()}v.fillStyle="#b45309",v.beginPath(),v.moveTo(x*.25,0),v.lineTo(x*.5,R*.14),v.lineTo(x*.75,0),v.closePath(),v.fill(),v.strokeStyle="#141413",v.lineWidth=4,v.stroke(),v.fillStyle="rgba(20, 20, 19, 0.14)",v.fillRect(0,0,14,R),v.fillRect(x-14,0,14,R)}),n=kt({map:e,color:16777215}),s=kt({color:1981066}),r=i.bladeWidth/2,o=new Mh,a=i.bladeFace,l=i.bladeBack;o.moveTo(-r,a),o.lineTo(r,a),o.lineTo(r,a-.015),o.quadraticCurveTo(r*.58,l,0,l-.008),o.quadraticCurveTo(-r*.58,l,-r,a-.015),o.lineTo(-r,a);const c=new Wa(o,{depth:i.bladeLength,bevelEnabled:!0,bevelThickness:.004,bevelSize:.003,bevelSegments:2,curveSegments:8});c.rotateX(Math.PI/2),c.translate(0,i.bladeLength,0);const h=c.attributes.position,u=c.attributes.uv;for(let v=0;v<h.count;v++){const x=h.getX(v),R=h.getY(v),H=Math.max(0,Math.min(1,(x+r)/i.bladeWidth)),N=Math.max(0,Math.min(1,R/i.bladeLength));u.setXY(v,H,N)}u.needsUpdate=!0;const f=new nt(c,n);f.castShadow=!0,f.receiveShadow=!0,Ot(f,.0055,1315859),t.add(f);const d=we(256,256,(v,x,R)=>{v.clearRect(0,0,x,R),v.fillStyle="rgba(180, 83, 9, 0.14)",v.beginPath(),v.arc(x/2,R/2,x*.28,0,Math.PI*2),v.fill(),v.strokeStyle="#d97706",v.lineWidth=10,v.beginPath(),v.moveTo(x*.18,R*.56),v.lineTo(x*.5,R*.36),v.lineTo(x*.82,R*.56),v.stroke(),v.strokeStyle="#141413",v.lineWidth=4,v.stroke()}),g=new nt(new Ve(i.bladeWidth*.84,.1),new fe({map:d,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));g.position.set(0,i.sweetSpotFromToe,a+.0055),t.add(g);const _=we(256,128,(v,x,R)=>{v.fillStyle="#1e3a8a",v.fillRect(8,12,x-16,R-24),v.strokeStyle="#141413",v.lineWidth=6,v.strokeRect(8,12,x-16,R-24),v.fillStyle="#fbbf24",v.font="900 38px system-ui, sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillText("⚡ TITAN ⚡",x/2,R/2)}),m=new nt(new Ve(i.bladeWidth*.68,.044),new fe({map:_,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));m.position.set(0,i.bladeLength-.06,a+.0055),t.add(m);const p=we(256,512,(v,x,R)=>{v.fillStyle="#1e3a8a",v.fillRect(0,0,x,R),v.fillStyle="#2563eb",v.beginPath(),v.moveTo(0,R*.18),v.lineTo(x,R*.05),v.lineTo(x,R*.25),v.lineTo(0,R*.38),v.closePath(),v.fill(),v.strokeStyle="#f59e0b",v.lineWidth=10,v.strokeRect(8,8,x-16,R-16),v.fillStyle="#fbbf24",v.font="900 44px system-ui, sans-serif",v.textAlign="center",v.fillText("⚡ TITAN ⚡",x/2,R*.32),v.fillStyle="#ffffff",v.font="900 28px system-ui, sans-serif",v.fillText("PRO EDITION",x/2,R*.48),v.fillStyle="#38bdf8",v.font="900 22px system-ui, sans-serif",v.fillText("240HZ PHYSICS",x/2,R*.68)}),E=new nt(new Ve(i.bladeWidth*.72,.24),new fe({map:p,side:_e,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));E.position.set(0,i.bladeLength*.7,l-.0125),E.rotation.y=Math.PI,t.add(E);const S=(a+l)/2,M=new nt(new ge(i.handleRadius*1.38,i.handleRadius*1.52,.026,16),s);M.position.set(0,i.bladeLength+.01,S),Ot(M,.0035,1315859),t.add(M);const D=i.totalLength-i.bladeLength,A=we(128,512,(v,x,R)=>{v.fillStyle="#f8fafc",v.fillRect(0,0,x,R);for(let H=0;H<R;H+=18)v.fillStyle="#1e3a8a",v.fillRect(0,H,x,7),v.fillStyle="#fbbf24",v.fillRect(0,H+7,x,3),v.fillStyle="#141413",v.fillRect(0,H+10,x,2)});A.wrapS=A.wrapT=Yn,A.repeat.set(1,3);const C=new nt(new ge(i.handleRadius,i.handleRadius*1.08,D,16),kt({map:A}));C.position.set(0,i.bladeLength+D/2,S),C.castShadow=!0,Ot(C,.0035,1315859),t.add(C);const I=new nt(new He(i.handleRadius*1.05,12,8),kt({color:16096779}));return I.position.set(0,i.totalLength,S),Ot(I,.003,1315859),t.add(I),t}class d_{constructor(t){this.group=new ye;const e=we(128,128,(r,o,a)=>{const l=o/2,c=a/2;r.clearRect(0,0,o,a),r.strokeStyle="#141413",r.lineWidth=14,r.beginPath(),r.arc(l,c,46,0,Math.PI*2),r.stroke(),r.strokeStyle="#ffffff",r.lineWidth=8;for(let h=0;h<4;h++){const u=h*(Math.PI/2)+.18,f=(h+1)*(Math.PI/2)-.18;r.beginPath(),r.arc(l,c,46,u,f),r.stroke()}});this.ringMat=new fe({map:e,color:1096065,side:_e,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),this.dotMat=new fe({color:16777215,side:_e,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),this.pulseMat=new fe({color:16777215,side:_e,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1});const n=new nt(new Ve(.52,.52),this.ringMat);n.rotation.x=-Math.PI/2,n.renderOrder=10;const s=new nt(new Nn(.065,24),this.dotMat);s.rotation.x=-Math.PI/2,s.renderOrder=10,this.pulseRing=new nt(new Hr(.28,.33,32),this.pulseMat),this.pulseRing.rotation.x=-Math.PI/2,this.pulseRing.renderOrder=10,this.group.add(n,s,this.pulseRing),this.group.renderOrder=10,this.group.position.y=.024,this.active=!1,this.fading=!1,this.alpha=0,this.timer=0,t.add(this.group)}show(t,e){const n=this.active&&!this.fading;this.group.position.set(t,.024,ft.stumps.z-e);const s=e<1.9?58879:e<4.5?1096065:e<7.8?16096779:15680580;this.ringMat.color.setHex(s),this.pulseMat.color.setHex(s),this.active=!0,this.fading=!1,this.alpha=.95,n||(this.timer=0)}fadeOut(){this.fading=!0}hide(){this.active=!1,this.alpha=0,this.ringMat.opacity=0,this.dotMat.opacity=0,this.pulseMat.opacity=0}update(t,e){if(!this.active)return;this.timer+=t,this.fading&&(this.alpha=Math.max(0,this.alpha-t*2.8),this.alpha<=.01&&this.hide());const n=1+.1*Math.sin(e*14);this.group.scale.setScalar(n),this.group.rotation.y=e*.9,this.ringMat.opacity=this.alpha,this.dotMat.opacity=this.alpha*.85;const s=1+Math.max(0,1-this.timer*2.2%1)*1.3;this.pulseRing.scale.setScalar(s),this.pulseMat.opacity=this.alpha*.6}}function p_(){const i=we(1024,512,(o,a,l)=>{const c=o.createLinearGradient(0,0,0,l);c.addColorStop(0,"#ffffff"),c.addColorStop(.5,"#f8fafc"),c.addColorStop(1,"#e2e8f0"),o.fillStyle=c,o.fillRect(0,0,a,l);const h=l/2;o.strokeStyle="rgba(15, 81, 50, 0.35)",o.lineWidth=3,o.beginPath(),o.moveTo(a*.25,0),o.lineTo(a*.25,l),o.stroke(),o.beginPath(),o.moveTo(a*.75,0),o.lineTo(a*.75,l),o.stroke(),o.fillStyle="#065f46",o.fillRect(0,h-14,a,28),o.strokeStyle="#141413",o.lineWidth=3,o.beginPath(),o.moveTo(0,h-14),o.lineTo(a,h-14),o.stroke(),o.beginPath(),o.moveTo(0,h+14),o.lineTo(a,h+14),o.stroke(),o.strokeStyle="#141413",o.lineWidth=5,o.beginPath(),o.moveTo(0,h),o.lineTo(a,h),o.stroke();const u=48;for(let f=0;f<u;f++){const d=f/u*a;o.strokeStyle="#ffffff",o.lineWidth=4,o.beginPath(),o.moveTo(d,h-10),o.lineTo(d+8,h-3),o.stroke(),o.beginPath(),o.moveTo(d,h+10),o.lineTo(d+8,h+3),o.stroke(),o.strokeStyle="#fde047",o.lineWidth=2,o.beginPath(),o.moveTo(d+5,h-10),o.lineTo(d+12,h-3),o.stroke(),o.beginPath(),o.moveTo(d+5,h+10),o.lineTo(d+12,h+3),o.stroke()}o.fillStyle="#f59e0b",o.beginPath(),o.arc(a*.25,l*.26,22,0,Math.PI*2),o.fill(),o.strokeStyle="#141413",o.lineWidth=4,o.stroke()}),t=new nt(new He(ft.ball.radius,28,20),kt({map:i,color:16777215,emissive:3684408}));t.castShadow=!0,Ot(t,.0028,1315859);const e=new ye,n=new nt(new Nn(ft.ball.radius*1.55,18),new fe({color:1315859,transparent:!0,opacity:.55,depthWrite:!1}));n.rotation.x=-Math.PI/2;const s=we(128,128,(o,a,l)=>{const c=a/2,h=l/2;o.clearRect(0,0,a,l),o.strokeStyle="#ffffff",o.lineWidth=10;for(let u=0;u<4;u++)o.beginPath(),o.arc(c,h,48,u*Math.PI/2+.25,(u+1)*Math.PI/2-.25),o.stroke()}),r=new nt(new Ve(.56,.56),new fe({map:s,color:16096779,side:_e,transparent:!0,opacity:0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.005,e.add(n,r),e.userData.disc=n,e.userData.ring=r,{mesh:t,shadow:e}}class m_{constructor(t,e=90){this.n=e,this.count=0,this.points=Array.from({length:e},()=>new T),this.positions=new Float32Array(e*3),this.geo=new Se,this.geo.setAttribute("position",new be(this.positions,3)),this.mat=new ka({color:16096779,transparent:!0,opacity:.9,depthWrite:!1}),this.line=new mh(this.geo,this.mat),this.line.frustumCulled=!1,this.line.renderOrder=8,t.add(this.line),this.ribbonMat=new sn({side:_e,transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new qt(16096779)},uOpacity:{value:.85}},vertexShader:`
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
      `});const n=[];for(let r=0;r<e-1;r++){const o=2*r,a=2*r+1,l=2*(r+1),c=2*(r+1)+1;n.push(o,a,l,a,c,l)}const s=()=>{const r=new Float32Array(e*2*3),o=new Float32Array(e*2),a=new Se;a.setAttribute("position",new be(r,3)),a.setAttribute("aFade",new be(o,1)),a.setIndex(n);const l=new nt(a,this.ribbonMat);return l.frustumCulled=!1,l.renderOrder=8,t.add(l),{mesh:l,geo:a,posArr:r,fadeArr:o}};this.ribbonA=s(),this.ribbonB=s(),this._tangent=new T,this._up=new T(0,1,0),this._altUp=new T(1,0,0),this._u=new T,this._v=new T,this.clear()}clear(){this.count=0,this.geo.setDrawRange(0,0),this.ribbonA.geo.setDrawRange(0,0),this.ribbonB.geo.setDrawRange(0,0),this.setColor(16096779,.9)}setColor(t,e=.9){this.mat.color.setHex(t),this.mat.opacity=e,this.ribbonMat.uniforms.uColor.value.setHex(t),this.ribbonMat.uniforms.uOpacity.value=e*.72}push(t){if(this.count>0&&t.distanceToSquared(this.points[0])<1e-5)return;this.count<this.n&&this.count++;for(let c=this.count-1;c>0;c--)this.points[c].copy(this.points[c-1]);if(this.points[0].copy(t),this.positions.copyWithin(3,0,(this.n-1)*3),this.positions[0]=t.x,this.positions[1]=t.y,this.positions[2]=t.z,this.geo.attributes.position.needsUpdate=!0,this.geo.setDrawRange(0,this.count),this.count<2){this.ribbonA.geo.setDrawRange(0,0),this.ribbonB.geo.setDrawRange(0,0);return}const e=this.ribbonA.posArr,n=this.ribbonB.posArr,s=this.ribbonA.fadeArr,r=this.ribbonB.fadeArr,o=Math.max(1,this.count-1),a=ft.ball.radius*.95;for(let c=0;c<this.count;c++){const h=this.points[c],u=this.points[Math.max(0,c-1)],f=this.points[Math.min(this.count-1,c+1)];this._tangent.subVectors(u,f),this._tangent.lengthSq()<1e-8?this._tangent.set(0,0,-1):this._tangent.normalize();const d=Math.abs(this._tangent.y)>.92?this._altUp:this._up;this._u.crossVectors(this._tangent,d).normalize(),this._v.crossVectors(this._tangent,this._u).normalize();const g=1-c/o,_=a*Math.pow(g,1.35),m=c*6;e[m]=h.x+this._u.x*_,e[m+1]=h.y+this._u.y*_,e[m+2]=h.z+this._u.z*_,e[m+3]=h.x-this._u.x*_,e[m+4]=h.y-this._u.y*_,e[m+5]=h.z-this._u.z*_,n[m]=h.x+this._v.x*_,n[m+1]=h.y+this._v.y*_,n[m+2]=h.z+this._v.z*_,n[m+3]=h.x-this._v.x*_,n[m+4]=h.y-this._v.y*_,n[m+5]=h.z-this._v.z*_;const p=c*2;s[p]=s[p+1]=g,r[p]=r[p+1]=g}const l=(this.count-1)*6;this.ribbonA.geo.attributes.position.needsUpdate=!0,this.ribbonA.geo.attributes.aFade.needsUpdate=!0,this.ribbonA.geo.setDrawRange(0,l),this.ribbonB.geo.attributes.position.needsUpdate=!0,this.ribbonB.geo.attributes.aFade.needsUpdate=!0,this.ribbonB.geo.setDrawRange(0,l)}}class g_{constructor(t){const e=Rh,n=we(512,512,(N,k,G)=>{N.fillStyle="#1d4ed8",N.fillRect(0,0,k,G),N.fillStyle="#38bdf8",N.fillRect(0,0,k*.04,G),N.fillRect(k*.96,0,k*.04,G),N.fillRect(k*.46,0,k*.08,G);const X=k*.75;N.fillStyle="#f59e0b",N.beginPath(),N.moveTo(X-68,G*.25),N.lineTo(X,G*.44),N.lineTo(X+68,G*.25),N.lineTo(X+68,G*.35),N.lineTo(X,G*.54),N.lineTo(X-68,G*.35),N.closePath(),N.fill(),N.fillStyle="#f8fafc",N.fillRect(0,0,k,G*.1),N.fillStyle="#f8fafc",N.font="900 96px system-ui, sans-serif",N.textAlign="center",N.textBaseline="middle",N.fillText("99",k*.25,G*.44)}),s=kt({map:n,color:16777215}),r=kt({color:1920728}),o=kt({color:16317180}),a=kt({color:988970}),l=kt({color:14254651}),c=kt({color:16317180}),h=kt({color:1920728}),u=kt({color:988970}),f=kt({color:440020,emissive:537412}),d=kt({color:1981066}),g=kt({color:16096779}),_=kt({color:16498468});this.root=new ye,this.groundShadow=new nt(new Nn(.36,18),new fe({color:1315859,transparent:!0,opacity:.44,depthWrite:!1})),this.groundShadow.rotation.x=-Math.PI/2,this.groundShadow.position.y=.012,this.root.add(this.groundShadow),this.hips=new ye,this.hips.position.y=e.hipHeight,this.root.add(this.hips);const m=new nt(new ge(.165,.155,.14,12),o);m.scale.set(1.12,1,.8),m.castShadow=!0,Ot(m,.012,1315859),this.hips.add(m);const p=new nt(new ge(.17,.17,.04,12),a);p.position.y=.055,p.scale.set(1.13,1,.81),this.hips.add(p),this.torso=new ye,this.hips.add(this.torso);const E=new Je(.18,e.torsoLength-.18,6,16);E.rotateY(Math.PI/2);const S=new nt(E,s);S.position.y=e.torsoLength/2,S.scale.set(1.16,1,.8),S.castShadow=!0,Ot(S,.014,1315859),this.torso.add(S);const M=new nt(new ge(.055,.065,.1,10),l);M.position.y=e.torsoLength+.06,Ot(M,.008,1315859),this.torso.add(M);const D=new nt(new He(.12,16,12),l);D.position.y=e.torsoLength+.19,D.castShadow=!0,Ot(D,.012,1315859),this.torso.add(D);const A=new nt(new oe(.2,.055,.05),a);A.position.set(0,D.position.y+.015,.102),Ot(A,.004,1315859),this.torso.add(A);const C=new nt(new oe(.18,.04,.054),f);C.position.set(0,D.position.y+.015,.105),this.torso.add(C);const I=new nt(new He(.126,14,10,0,Math.PI*2,0,Math.PI*.54),d);I.position.y=D.position.y+.02,Ot(I,.008,1315859),this.torso.add(I);const v=new nt(new ge(.135,.14,.014,12,1,!1,-Math.PI*.36,Math.PI*.72),g);v.position.set(0,D.position.y+.035,.085),v.rotation.x=.16,Ot(v,.005,1315859),this.torso.add(v);const x=N=>{const k=new ye;k.position.set(N,e.torsoLength,0);const G=new nt(new Je(.058,.18,4,10),r);G.position.y=-.11,G.castShadow=!0,Ot(G,.011,1315859),k.add(G);const X=new nt(new Je(.042,e.armLength-.3,4,10),l);X.position.y=-.7*.6,X.castShadow=!0,Ot(X,.01,1315859),k.add(X);const K=new nt(new ge(.045,.045,.055,10),_);K.position.y=-.7+.085,Ot(K,.005,1315859),k.add(K);const Z=new nt(new He(.048,10,8),l);return Z.position.y=-.7,Z.castShadow=!0,Ot(Z,.008,1315859),k.add(Z),this.torso.add(k),k};this.armR=x(-.2),this.armL=x(e.shoulderHalf);const R=(N,k,G)=>{const X=new ye,K=new nt(new Je(k,N-2*k,4,10),G);return K.position.y=-N/2,K.castShadow=!0,Ot(K,.012,1315859),X.add(K),X},H=N=>{const k=R(e.legLength/2,.076,o);k.position.set(N*.105,0,0);const G=R(e.legLength/2,.064,o);G.position.y=-.96/2,k.add(G);const X=new nt(new He(.068,10,8),o);X.position.y=0,Ot(X,.008,1315859),G.add(X);const K=new nt(new oe(.115,.075,.25),c);K.position.set(0,-.96/2+.025,.06),K.castShadow=!0,Ot(K,.01,1315859),G.add(K);const Z=new nt(new oe(.12,.028,.18),h);Z.position.set(0,-.96/2+.03,.05),G.add(Z);const pt=new nt(new oe(.12,.022,.26),u);return pt.position.set(0,-.96/2-.015,.06),G.add(pt),this.hips.add(k),{thigh:k,shin:G}};this.legL=H(1),this.legR=H(-1),t.add(this.root)}apply(t){this.root.position.set(t.x,t.y,t.z),this.groundShadow.position.y=.012-t.y,this.torso.rotation.x=t.lean,this.armR.rotation.x=t.armR,this.armL.rotation.x=t.armL,this.legL.thigh.rotation.x=t.legL,this.legR.thigh.rotation.x=t.legR,this.legL.shin.rotation.x=t.kneeL,this.legR.shin.rotation.x=t.kneeR}}class __{constructor(t,e=240){this.max=e;const n=we(64,64,(a,l,c)=>{const h=l/2,u=c/2;a.beginPath(),a.moveTo(h,3),a.quadraticCurveTo(h,u,l-3,u),a.quadraticCurveTo(h,u,h,c-3),a.quadraticCurveTo(h,u,3,u),a.quadraticCurveTo(h,u,h,3),a.closePath(),a.fillStyle="#ffffff",a.fill(),a.strokeStyle="#141413",a.lineWidth=3,a.stroke()}),s=new Ve(.068,.068),r=new fe({map:n,side:_e,transparent:!0,depthWrite:!1});this.mesh=new Ma(s,r,e),this.mesh.instanceMatrix.setUsage(Eu),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,t.add(this.mesh),this.particles=[];for(let a=0;a<e;a++)this.particles.push({active:!1,pos:new T,vel:new T,rot:new T,rotV:new T,color:new qt,scale:1,life:0,maxLife:1,gravity:9.8});this.shockwaves=[];const o=new Hr(.08,.12,28);for(let a=0;a<6;a++){const l=new fe({color:16707722,side:_e,transparent:!0,opacity:0,depthWrite:!1}),c=new nt(o,l);c.visible=!1,c.renderOrder=7,t.add(c),this.shockwaves.push({mesh:c,mat:l,active:!1,life:0,maxLife:.28,maxScale:4.5})}this._m=new ne,this._q=new Oe,this._e=new fn,this._s=new T,this._zAxis=new T(0,0,1),this._nVec=new T,this._zero=new ne().makeScale(0,0,0);for(let a=0;a<e;a++)this.mesh.setMatrixAt(a,this._zero);this.mesh.instanceMatrix.needsUpdate=!0}spawnShockwave(t,e,n,s=4.5,r=.28){let o=this.shockwaves.find(a=>!a.active)||this.shockwaves[0];o.active=!0,o.life=0,o.maxLife=r,o.maxScale=s,o.mat.color.setHex(n),o.mat.opacity=.92,o.mesh.position.copy(t),this._nVec.copy(e).normalize(),o.mesh.quaternion.setFromUnitVectors(this._zAxis,this._nVec),o.mesh.scale.setScalar(.5),o.mesh.visible=!0}spawn(t,e,n,s,r,o,a,l,c,h=9.8){let u=null;for(let f=0;f<this.max;f++)if(!this.particles[f].active){u=this.particles[f];break}u||(u=this.particles[Math.floor(Math.random()*this.max)]),u.active=!0,u.pos.set(t,e,n),u.vel.set(s,r,o),u.rot.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),u.rotV.set((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*14),u.color.setHex(a),u.scale=l,u.life=0,u.maxLife=c,u.gravity=h}pitchDust(t){for(let e=0;e<12;e++){const n=Math.random()*Math.PI*2,s=.5+Math.random()*1.4,r=.6+Math.random()*1.5,o=Math.random()>.4?13935475:13281652;this.spawn(t.x+(Math.random()-.5)*.08,.02,t.z+(Math.random()-.5)*.08,Math.cos(n)*s,r,Math.sin(n)*s,o,.045+Math.random()*.03,.35+Math.random()*.25,3.5)}}pitchBounceRipple(t,e=16707722){this._nVec.set(0,1,0),this._m,this.spawnShockwave(new T(t.x,.026,t.z),this._nVec,e,2.2,.26)}stumpsBurst(t){const e=new T(0,0,1),n=new T(0,1,0);this.spawnShockwave(t,e,16722517,5.2,.3),this.spawnShockwave(new T(t.x,.04,t.z),n,16707722,4,.32);const s=[16722517,16707722,16096779,16777215];for(let r=0;r<32;r++){const o=Math.random()*Math.PI*2,a=2+Math.random()*5.2,l=1.6+Math.random()*4.5,c=s[Math.floor(Math.random()*s.length)];this.spawn(t.x+(Math.random()-.5)*.14,Math.max(.15,t.y),t.z,Math.cos(o)*a,l,Math.sin(o)*a+1.2,c,.052+Math.random()*.036,.38+Math.random()*.28,6.5)}}ballFlightEmber(t,e){const n=[16707722,16096779,3718648,16777215],s=n[Math.floor(Math.random()*n.length)];this.spawn(t.x+(Math.random()-.5)*.05,t.y+(Math.random()-.5)*.05,t.z+(Math.random()-.5)*.05,-e.x*.06+(Math.random()-.5)*.9,-e.y*.06+.4+Math.random()*.8,-e.z*.06+(Math.random()-.5)*.9,s,.048+Math.random()*.025,.28+Math.random()*.16,2.2)}boundaryPyro(t=!1){const e=ft.field,n=e.boundaryRadius+2.5,s=[Math.PI*.78,Math.PI*.92,Math.PI*1.08,Math.PI*1.22],r=t?[16707722,16096779,16777215,3718648,14362487]:[1096065,3462041,16707722,16777215,3718648],o=t?18:12;for(const a of s){const l=Math.sin(a)*n,c=e.centerZ+Math.cos(a)*n;for(let h=0;h<o;h++){const u=2+Math.random()*4.5,f=Math.random()*Math.PI*2,d=t?11+Math.random()*9:8+Math.random()*6,g=r[Math.floor(Math.random()*r.length)];this.spawn(l+(Math.random()-.5)*1,.6,c+(Math.random()-.5)*1,Math.cos(f)*u,d,Math.sin(f)*u,g,.18+Math.random()*.12,1.4+Math.random()*.8,6.2)}}}impactSparks(t,e){this.spawnShockwave(t,e,3718648,3.2,.22);for(let n=0;n<18;n++){const s=2.5+Math.random()*4.8,r=e.clone().add(new T((Math.random()-.5)*1.2,(Math.random()-.5)*1.2,(Math.random()-.5)*1.2)).normalize(),o=Math.random()>.3?16096779:14427686;this.spawn(t.x,t.y,t.z,r.x*s,r.y*s,r.z*s,o,.038+Math.random()*.03,.26+Math.random()*.18,5.5)}}sweetSpotBurst(t,e){this.spawnShockwave(t,e,16707722,5.4,.28);for(let n=0;n<36;n++){const s=3.5+Math.random()*7.5,r=e.clone().add(new T((Math.random()-.5)*1.8,(Math.random()-.5)*1.8,(Math.random()-.5)*1.8)).normalize(),o=[16096779,3718648,14427686,16777215,366185],a=o[Math.floor(Math.random()*o.length)];this.spawn(t.x,t.y,t.z,r.x*s,r.y*s,r.z*s,a,.058+Math.random()*.045,.42+Math.random()*.25,4.5)}}boundaryFirework(t){const e=[16096779,366185,165063,14427686,16777215,14362487];for(let n=0;n<56;n++){const s=Math.random()*Math.PI*2,r=.4+Math.random()*1.5,o=4.5+Math.random()*9,a=e[Math.floor(Math.random()*e.length)];this.spawn(t.x,Math.max(.5,t.y),t.z,Math.cos(s)*o,r*o,Math.sin(s)*o,a,.08+Math.random()*.05,1.8+Math.random()*.9,3.8)}}confetti(t){const e=[16096779,366185,165063,14427686,16777215,14362487];for(let n=0;n<62;n++){const s=Math.random()*Math.PI*2,r=2+Math.random()*8,o=4.8+Math.random()*6.8,a=e[Math.floor(Math.random()*e.length)];this.spawn(t.x+(Math.random()-.5)*1.8,t.y+.5,t.z+(Math.random()-.5)*1.8,Math.cos(s)*r,o,Math.sin(s)*r,a,.068+Math.random()*.045,2.5+Math.random()*1.2,2.8)}}update(t){for(let e=0;e<this.max;e++){const n=this.particles[e];if(!n.active){this.mesh.setMatrixAt(e,this._zero);continue}if(n.life+=t,n.life>=n.maxLife){n.active=!1,this.mesh.setMatrixAt(e,this._zero);continue}n.vel.y-=n.gravity*t,n.pos.addScaledVector(n.vel,t),n.pos.y<.01&&(n.pos.y=.01,n.vel.multiplyScalar(.4)),n.rot.addScaledVector(n.rotV,t);const s=1-n.life/n.maxLife,r=n.scale*Math.max(.01,s);this._e.set(n.rot.x,n.rot.y,n.rot.z),this._q.setFromEuler(this._e),this._s.set(r,r,r),this._m.compose(n.pos,this._q,this._s),this.mesh.setMatrixAt(e,this._m),this.mesh.setColorAt(e,n.color)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0);for(let e=0;e<this.shockwaves.length;e++){const n=this.shockwaves[e];if(!n.active)continue;if(n.life+=t,n.life>=n.maxLife){n.active=!1,n.mesh.visible=!1;continue}const s=n.life/n.maxLife,r=1-(1-s)*(1-s);n.mesh.scale.setScalar(.5+(n.maxScale-.5)*r),n.mat.opacity=.92*(1-s)}}}class v_{constructor(t,e=12){this.n=e,this.count=0,this.hasPrev=!1,this.alpha=0,this.flashTime=0,this._baseColor=new qt(3718648),this._flashColor=new qt(16707722),this.toePts=Array.from({length:e},()=>new T),this.topPts=Array.from({length:e},()=>new T),this.posArr=new Float32Array(e*2*3),this.fadeArr=new Float32Array(e*2),this.edgeArr=new Float32Array(e*2);for(let s=0;s<e;s++)this.edgeArr[s*2]=0,this.edgeArr[s*2+1]=1;const n=[];for(let s=0;s<e-1;s++){const r=2*s,o=2*s+1,a=2*(s+1),l=2*(s+1)+1;n.push(r,o,a,o,l,a)}this.geo=new Se,this.geo.setAttribute("position",new be(this.posArr,3)),this.geo.setAttribute("aFade",new be(this.fadeArr,1)),this.geo.setAttribute("aEdge",new be(this.edgeArr,1)),this.geo.setIndex(n),this.mat=new sn({side:_e,transparent:!0,depthWrite:!1,blending:Io,uniforms:{uColor:{value:new qt(3718648)},uOpacity:{value:0}},vertexShader:`
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
      `}),this.mesh=new nt(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=9,this.mesh.visible=!1,t.add(this.mesh),this._toe=new T,this._top=new T,this._prevToe=new T}clear(){this.count=0,this.hasPrev=!1,this.alpha=0,this.flashTime=0,this.mat.uniforms.uOpacity.value=0,this.mat.uniforms.uColor.value.copy(this._baseColor),this.mesh.visible=!1,this.geo.setDrawRange(0,0)}flash(t=16707722){this._flashColor.setHex(t),this.flashTime=.24,this.alpha=Math.max(this.alpha,.72)}update(t,e,n){if(this.flashTime>0&&e>0){this.flashTime=Math.max(0,this.flashTime-e);const c=this.flashTime/.24;this.mat.uniforms.uColor.value.lerpColors(this._baseColor,this._flashColor,c)}else this.mat.uniforms.uColor.value.copy(this._baseColor);if(!n||e<=0){this.alpha=Math.max(0,this.alpha-Math.max(0,e)*10),this.mat.uniforms.uOpacity.value=this.alpha,this.alpha<=.01&&(this.mesh.visible=!1,this.hasPrev=!1,this.count=0);return}if(this._toe.set(0,.03,0).applyQuaternion(t.quaternion).add(t.position),this._top.set(0,ft.bat.bladeLength*.94,0).applyQuaternion(t.quaternion).add(t.position),!this.hasPrev){this.hasPrev=!0,this._prevToe.copy(this._toe),this.toePts[0].copy(this._toe),this.topPts[0].copy(this._top),this.count=1;return}const s=this._toe.distanceTo(this._prevToe),r=s/Math.max(1e-4,e),o=Zc.clamp((r-4.2)/14,0,1)*.62,a=o>this.alpha?22:10;if(this.alpha+=(o-this.alpha)*(1-Math.exp(-a*e)),this._prevToe.copy(this._toe),s>.004){this.count<this.n&&this.count++;for(let c=this.count-1;c>0;c--)this.toePts[c].copy(this.toePts[c-1]),this.topPts[c].copy(this.topPts[c-1]);this.toePts[0].copy(this._toe),this.topPts[0].copy(this._top)}else this.alpha<=.015&&(this.count=0);if(this.count<2||this.alpha<=.01){this.mesh.visible=!1,this.mat.uniforms.uOpacity.value=0;return}const l=Math.max(1,this.count-1);for(let c=0;c<this.count;c++){const h=this.topPts[c],u=this.toePts[c],f=c*6;this.posArr[f]=h.x,this.posArr[f+1]=h.y,this.posArr[f+2]=h.z,this.posArr[f+3]=u.x,this.posArr[f+4]=u.y,this.posArr[f+5]=u.z;const d=1-c/l;this.fadeArr[c*2]=d,this.fadeArr[c*2+1]=d}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aFade.needsUpdate=!0,this.geo.setDrawRange(0,(this.count-1)*6),this.mat.uniforms.uOpacity.value=this.alpha,this.mesh.visible=!0}}class x_{constructor(t){const e=(n,s,r,o="#141413")=>we(256,128,(a,l,c)=>{a.clearRect(0,0,l,c);const h=l/2,u=c/2,f=14,d=(_,m)=>{a.beginPath();for(let p=0;p<f*2;p++){const E=p/(f*2)*Math.PI*2,S=p%2===0?114:84,M=p%2===0?54:38,D=h+_+Math.cos(E)*S,A=u+m+Math.sin(E)*M;p===0?a.moveTo(D,A):a.lineTo(D,A)}a.closePath()};d(5,5),a.fillStyle="#141413",a.fill(),d(0,0);const g=a.createLinearGradient(0,12,0,c-12);g.addColorStop(0,s),g.addColorStop(1,r),a.fillStyle=g,a.fill(),a.lineWidth=6,a.strokeStyle="#141413",a.stroke(),a.font='900 42px "Bungee", Impact, system-ui, sans-serif',a.textAlign="center",a.textBaseline="middle",o==="#ffffff"?(a.lineWidth=7,a.strokeStyle="#141413",a.strokeText(n,h,u+2)):(a.fillStyle="#ffffff",a.fillText(n,h+2,u+4)),a.fillStyle=o,a.fillText(n,h,u+2)});this.textures={sweet:e("SMASH!","#fef08a","#f59e0b","#141413"),clean:e("CRACK!","#bae6fd","#38bdf8","#141413"),edge:e("NICK!","#fed7aa","#fb923c","#141413"),stumps:e("TIMBER!","#f87171","#dc2626","#ffffff")},this.mat=new dh({map:this.textures.clean,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),this.sprite=new ig(this.mat),this.sprite.visible=!1,this.sprite.renderOrder=12,t.add(this.sprite),this.active=!1,this.life=0,this.maxLife=.62}spawn(t,e){this.mat.map=this.textures[t]||this.textures.clean,this.mat.needsUpdate=!0,this.sprite.position.set(e.x,Math.max(.28,e.y+.24),e.z+.12),this.sprite.scale.set(.1,.05,1),this.mat.opacity=1,this.sprite.visible=!0,this.active=!0,this.life=0}update(t){if(!this.active)return;if(this.life+=t,this.life>=this.maxLife){this.active=!1,this.sprite.visible=!1;return}const e=this.life/this.maxLife,n=e<.2?e/.2*1.2:1.2-.22*((e-.2)/.8);this.sprite.scale.set(.84*n,.42*n,1),this.sprite.position.y+=t*.68,this.mat.opacity=e<.65?1:Math.max(0,1-(e-.65)/.35)}}Xg();const It=i=>document.getElementById(i),Xa=It("game"),Mi=!!(typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0)||typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches);Mi?(document.body.classList.add("touch"),document.body.classList.remove("desktop")):(document.body.classList.add("desktop"),document.body.classList.remove("touch"));const gi=new tg({canvas:Xa,antialias:!0,powerPreference:"high-performance"});gi.setPixelRatio(Math.min(devicePixelRatio||1,3));gi.outputColorSpace=ke;gi.shadowMap.enabled=!0;gi.shadowMap.type=Uc;const Ke=new eg,Xe=new tn(ft.camera.verticalFov,1,.03,900),M_=h_(Ke),Ac=new u_(Ke),Xi=new Ph(Ke,ft.stumps.z),qa=new Ph(Ke,-mn),y_=new g_(Ke),Zn=f_();Ke.add(Zn);const _i=new d_(Ke),{mesh:wa,shadow:Es}=p_();Ke.add(wa,Es);const ns=new m_(Ke),en=new __(Ke),Ps=new v_(Ke),ws=new x_(Ke),ee=new jg,Ls=new Qg,Lh=new i_,Un=new s_(Xa,It("joystick"),It("knob")),me=new r_,z={mode:"menu",phase:"idle",phaseTime:0,runupTime:0,runs:0,wickets:0,balls:0,fours:0,sixes:0,delivery:null,runup:null,releasePos:new T,releaseVel:new T,result:null,hitThisBall:!1,flinched:!1,best:+(localStorage.getItem("physics-cricket-best")||0),overBalls:[],m25:!1,m50:!1,newBestAnnounced:!1,lastStrideStep:-1,hitFreeze:0,hasFlybyPlayed:!1,emberTimer:0,lastBanner:"MATCH IN PROGRESS"};function Ln(i,t){const e=It(i);e&&(e.className="",e.offsetWidth,e.className=t)}const hi={},Ta=new lt().copy(ee.bat.target),Rc=new lt,Gt={shake:0,kick:0,follow:!1,hitTime:0,zoom:0,dirX:0,dirZ:-1,lookPos:new T(0,.5,-10),zoomPos:new T};function Ya(){const i=window.innerWidth,t=window.innerHeight;gi.setPixelRatio(Math.min(window.devicePixelRatio||1,3)),gi.setSize(i,t,!1),Xe.aspect=i/t;const e=ft.camera.verticalFov,n=ft.camera.minHorizontalFov*Math.PI/180,s=2*Math.atan(Math.tan(n/2)/Xe.aspect)*180/Math.PI;Xe.fov=Math.min(100,Math.max(e,s)),Xe.updateProjectionMatrix()}window.addEventListener("resize",Ya);window.addEventListener("orientationchange",()=>setTimeout(Ya,200));Ya();let Pr=0;function Xn(i,t,e=1.4){const n=It("message");n.className="",n.textContent=i,n.offsetWidth,n.className=`${t} show`,Pr=e}function S_(i){const t=It("hint");i?(t.textContent=i,t.classList.add("show")):t.classList.remove("show")}function Cc(i){return`${Math.floor(i/ft.game.ballsPerOver)}.${i%ft.game.ballsPerOver}`}function Za(){if(It("runs").textContent=z.runs,It("wkts").textContent=z.wickets,It("overs").textContent=Cc(z.balls),It("boundaries")&&(It("boundaries").textContent=`4s: ${z.fours} · 6s: ${z.sixes}`),It("strikeRate")){const i=z.balls?Math.round(z.runs/z.balls*100):0;It("strikeRate").textContent=`SR ${i}`}if(It("overStrip")){const i=z.overBalls.map(t=>`<span class="ball-dot ${t.cls}">${t.txt}</span>`).join("");It("overStrip").innerHTML=i}Ac&&Ac.update(z.runs,z.wickets,Cc(z.balls),z.lastBanner||"")}function Dh(){z.balls%ft.game.ballsPerOver===0&&z.balls>0&&z.overBalls.length>=ft.game.ballsPerOver&&(z.overBalls=[]),z.balls%ft.game.ballsPerOver===0&&z.balls/ft.game.ballsPerOver!==Ls.overIndex&&Ls.startOver(z.balls/ft.game.ballsPerOver);const i=Ls.next();z.delivery=i,z.runup=n_(i.bowler),Ch(z.runup.tRelease,z.runup,hi),z.releasePos.copy(hi.hand),z.releaseVel.copy(t_(z.releasePos,i)),z.phase="runup",z.phaseTime=0,z.runupTime=0,z.hitThisBall=!1,z.flinched=!1,z.lastStrideStep=-1,z.hasFlybyPlayed=!1,ee.resetDelivery(),Xi.reset(),qa.reset(),ns.clear(),Ps.clear(),_i.hide(),z.emberTimer=0,Gt.follow=!1,Gt.hitTime=0,Gt.zoom=0,Zn.visible=!0,It("bowlerName").textContent=`${i.bowler.name} bowler`,It("speed").textContent="",z.lastBanner="MATCH IN PROGRESS",Za()}function b_(){ee.ball.launch(z.releasePos,z.releaseVel),Lh.start(),_i.show(z.delivery.lineX,z.delivery.bounceDist),ns.setColor(3718648,.88),z.phase="live",z.phaseTime=0,me.bowlerRelease(),It("speed").textContent=`${Math.round(z.delivery.kmh)} km/h`,z.delivery.kmh>=128&&Ln("vfxFlash","flash-fast")}function E_(i){z.result=i,z.phase="result",z.phaseTime=0,z.balls++,z.runs+=i.runs,Ls.recordOutcome(i.runs);let t="•",e="dot";i.kind==="four"?(t="4",e="four"):i.kind==="six"?(t="6",e="six"):i.kind==="wicket"?(t="W",e="wicket"):i.runs>0&&(t=String(i.runs),e="runs"),z.overBalls.push({txt:t,cls:e}),i.kind==="four"?(z.fours++,Xn("FOUR!","four"),me.cheer(.85,2.5),me.boundaryFanfare(!1),me.boundaryClap(),ns.setColor(3718648,.9),en.boundaryPyro(!1),Ln("vfxFlash","flash-four"),Ln("speedLines","active"),z.lastBanner="★ FOUR! ★"):i.kind==="six"?(z.sixes++,Xn("SIX!","six"),me.cheer(1,3.4),me.boundaryFanfare(!0),me.boundaryClap(),ns.setColor(16765286,.95),en.confetti(new T(0,1.8,-1.22)),en.boundaryFirework(new T(ee.ball.pos.x,2.5,ee.ball.pos.z)),en.boundaryPyro(!0),Ln("vfxFlash","flash-six"),Ln("speedLines","active"),z.lastBanner="★ MAXIMUM SIX! ★"):i.kind==="runs"?(Xn(i.text,"runs",1.3),me.cheer(.35+i.runs*.12,1.4),z.lastBanner=`${i.runs} RUNS`):i.kind==="wicket"?(z.wickets++,Xn("WICKET!","wicket",1.8),me.wicketWhistle(),Gt.shake=Math.max(Gt.shake,.6),z.lastBanner="★ WICKET! ★"):(Xn(i.text,"minor",1),z.lastBanner="DOT BALL"),!z.m25&&z.runs>=25&&(z.m25=!0,setTimeout(()=>{Xn("⚡ QUICKFIRE 25! ⚡","milestone",2),me.cheer(.7,2)},1300)),!z.m50&&z.runs>=50&&(z.m50=!0,setTimeout(()=>{Xn("🏆 HALF CENTURY! 50 RUNS 🏆","milestone",2.5),me.cheer(1,3.2),en.confetti(new T(0,2,-1.22))},1300)),z.runs>z.best&&z.best>0&&!z.newBestAnnounced&&(z.newBestAnnounced=!0,setTimeout(()=>{Xn("⭐ NEW HIGH SCORE! ⭐","milestone",2.2),me.cheer(.85,2.5)},1400)),i.distance&&z.hitThisBall&&It("lastShot").innerHTML&&!It("lastShot").innerHTML.includes("m ·")&&(It("lastShot").innerHTML+=` · <span class="shot-dist">${i.distance}m</span>`),Za()}function w_(i,t){if(t.edge)return"Edge";if(t.batNormalSpeed<3.6&&t.exitSpeed<10)return"Defensive Block";const e=Math.atan2(i.x,-i.z)*180/Math.PI,s=i.y/Math.max(1,Math.hypot(i.x,i.z))>.36&&t.exitSpeed>18?"Lofted ":"";return Math.abs(e)<=12?`${s}Straight Drive`:e>12&&e<=52?`${s}Cover Drive`:e>52?"Square Cut":e<-12&&e>=-48?`${s}On Drive`:e<-48&&e>=-85?"Leg Flick":"Pull Shot"}function T_(i){for(const t of i)if(t.type==="bat"){if(t.repeat)continue;_i.fadeOut();const e=Math.min(1,t.impulse/9),n=t.batNormalSpeed<4&&!t.edge;if(me.batHit(t.quality,e,t.edge,n),t.quality>.82&&!t.edge?(en.sweetSpotBurst(t.pos,t.normal),ws.spawn("sweet",t.pos),Ps.flash(16707722),Ln("vfxFlash","flash-sweet"),Ln("speedLines","active"),z.hitFreeze=.022):t.quality>.52&&!t.edge?(en.impactSparks(t.pos,t.normal),ws.spawn("clean",t.pos),Ps.flash(16498468)):t.edge&&(me.appeal(),ws.spawn("edge",t.pos),Ps.flash(16281969)),Gt.shake=Math.max(Gt.shake,.15+.55*e*(t.edge?.6:1)),Gt.kick=Math.max(Gt.kick,.4*e),!z.hitThisBall){z.hitThisBall=!0,ns.setColor(16096779,.92),Gt.follow=!0,Gt.hitTime=0;const s=Math.hypot(ee.ball.vel.x,ee.ball.vel.z);s>.5?(Gt.dirX=ee.ball.vel.x/s,Gt.dirZ=ee.ball.vel.z/s):(Gt.dirX=0,Gt.dirZ=-1),Gt.lookPos.copy(ee.ball.pos);const r=w_(ee.ball.vel,t);let o="";t.edge?o=' · <span class="tag-edge">EDGED</span>':t.quality>.82?o=' · <span class="tag-sweet">SWEET SPOT ⭐</span>':t.quality>.55&&(o=' · <span class="tag-clean">CRISP</span>'),It("lastShot").innerHTML=`${r} · ${Math.round(t.exitSpeed*3.6)} km/h${o}`}}else t.type==="bounce"?(_i.fadeOut(),me.bounce(Math.min(1,t.speed/8)),en.pitchDust(t.pos),en.pitchBounceRipple(t.pos,z.hitThisBall?16498468:3718648)):t.type==="stumps"&&(me.stumps(),en.stumpsBurst(t.pos),ws.spawn("stumps",t.pos),Ln("vfxFlash","flash-wicket"),(t.isNonStriker?qa:Xi).shatter(t.stump,ee.ball.vel.clone().add(t.normal.clone().multiplyScalar(-t.speed*.5))))}function A_(i,t){if(z.phaseTime+=i,(z.phase==="runup"||z.phase==="live"||z.phase==="result")&&(z.runupTime+=i),z.phase==="runup"){const n=Math.floor(z.runupTime*5.4);n!==z.lastStrideStep&&z.runupTime<z.runup.tRelease-.08&&(z.lastStrideStep=n,me.bowlerStride()),!_i.active&&z.runupTime>=z.runup.tRun&&_i.show(z.delivery.lineX,z.delivery.bounceDist)}z.phase==="runup"&&z.runupTime>=z.runup.tRelease&&b_(),ee.step(i,t);const e=ee.drainEvents();if(T_(e),z.phase==="live"){!z.hasFlybyPlayed&&ee.ball.pos.z>-4.5&&ee.ball.pos.z<-1.2&&(z.hasFlybyPlayed=!0,me.ballFlyby(z.delivery.kmh)),!z.hitThisBall&&!z.flinched&&ee.ball.pos.distanceTo(Xe.position)<.65&&(z.flinched=!0,Gt.shake=Math.max(Gt.shake,.35),me.whoosh(1),Ln("vfxFlash","flash-miss"));const n=Lh.update(i,ee.ball,e);n&&E_(n)}else if(z.phase==="result"){const n=z.result.kind==="wicket"?1.9:ft.game.resultPause+(z.result.runs?.7:0);z.phaseTime>n&&(z.wickets>=ft.game.wickets?R_():Dh())}}function ks(){const i=ft.control.showJoystick||"auto",t=i==="on"||i==="auto"&&Mi;It("joystick").classList.toggle("hidden",!t||z.mode!=="playing")}function Bs(){me.init(),z.runs=z.wickets=z.balls=z.fours=z.sixes=0,z.overBalls=[],z.m25=z.m50=z.newBestAnnounced=!1,z.lastBanner="MATCH IN PROGRESS",Ls.reset(),ee.bat.reset(),Ta.copy(ee.bat.target),Za(),It("lastShot").textContent="",It("startScreen").classList.add("hidden"),It("overScreen").classList.add("hidden"),It("pauseScreen").classList.add("hidden"),It("hud").classList.remove("hidden"),z.mode="playing",ks(),Mi||Un.requestLock(),Dh(),z.runupTime=-.6}function Vs(){z.mode==="playing"&&(z.mode="paused",Un.releaseLock(),me.suspend(),C_(),ks(),It("pauseScreen").classList.remove("hidden"))}function Ih(){z.mode==="paused"&&(It("pauseScreen").classList.add("hidden"),z.mode="playing",me.init(),me.resume(),Mi||Un.requestLock(),ks(),Hi=0,Aa=performance.now())}function R_(){z.mode="over",Un.releaseLock(),ks(),z.runs>z.best&&(z.best=z.runs,localStorage.setItem("physics-cricket-best",String(z.best))),It("overTitle").textContent=z.result&&z.result.text?z.result.text.replace("!","").toUpperCase()+"!":"OUT!",It("finalRuns").textContent=z.runs,It("finalBalls").textContent=z.balls,It("finalStats").textContent=`${z.fours} fours · ${z.sixes} sixes · strike rate ${z.balls?Math.round(z.runs/z.balls*100):0}`,It("best").textContent=`Best: ${z.best}`,It("overScreen").classList.remove("hidden")}It("playBtn").addEventListener("click",Bs);It("againBtn").addEventListener("click",Bs);It("restartBtn").addEventListener("click",Bs);It("resumeBtn").addEventListener("click",Ih);It("pauseBtn").addEventListener("click",i=>{i.stopPropagation(),Vs()});It("soundBtn")&&It("soundBtn").addEventListener("click",i=>{i.stopPropagation();const t=me.toggleMute();It("soundBtn").textContent=t?"🔊":"🔇",It("soundBtn").setAttribute("title",t?"Mute Sound (M)":"Unmute Sound (M)")});Xa.addEventListener("click",()=>{z.mode==="playing"&&!Mi&&!Un.locked&&Un.requestLock()});Un.onLockChange=i=>{Mi||!i&&z.mode==="playing"&&Vs()};window.addEventListener("blur",Vs);document.addEventListener("visibilitychange",()=>{document.hidden&&Vs()});window.addEventListener("keydown",i=>{if((i.key==="p"||i.key==="P")&&(z.mode==="paused"?Ih():Vs()),(i.key==="r"||i.key==="R")&&(z.mode==="over"||z.mode==="paused")&&Bs(),i.key==="Enter"&&(z.mode==="menu"||z.mode==="over")&&Bs(),i.key==="m"||i.key==="M"){const t=me.toggleMute();It("soundBtn")&&(It("soundBtn").textContent=t?"🔊":"🔇",It("soundBtn").setAttribute("title",t?"Mute Sound (M)":"Unmute Sound (M)"))}});document.addEventListener("touchmove",i=>{z.mode==="playing"&&i.preventDefault()},{passive:!1});document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("contextmenu",i=>i.preventDefault());function C_(){const i=ft.control;for(const[t,e]of[["mouseSens","mouseSensitivity"],["joySens","joystickSensitivity"],["resp","responsiveness"]])It(t).value=i[e],It(t+"V").textContent=i[e].toFixed(2);It("joyMode")&&(It("joyMode").value=i.showJoystick||"auto")}for(const[i,t]of[["mouseSens","mouseSensitivity"],["joySens","joystickSensitivity"],["resp","responsiveness"]])It(i).addEventListener("input",()=>{ft.control[t]=parseFloat(It(i).value),It(i+"V").textContent=ft.control[t].toFixed(2),Th()});It("joyMode")&&It("joyMode").addEventListener("change",()=>{ft.control.showJoystick=It("joyMode").value,Th(),ks()});const Po=new T(ft.camera.position.x,ft.camera.position.y,ft.camera.position.z),P_=ft.camera.pitchDeg*Math.PI/180,Pc=new T,Lo=new T,Do=new Oe,Lc=new Oe,Dc=new ne,L_=new T(0,1,0),Ne=new T;function D_(i,t){Gt.shake*=Math.exp(-9*i),Gt.kick*=Math.exp(-12*i);const e=Gt.shake*.012;if(Lo.set(Po.x+e*Math.sin(t*91.3),Po.y+e*Math.sin(t*77.1+1.3)-Gt.kick*.01,Po.z+Gt.kick*.015),Xe.rotation.order="YXZ",Xe.rotation.set(P_+e*.6*Math.sin(t*63.7),0,e*.4*Math.sin(t*57.9)),Do.copy(Xe.quaternion),Gt.follow){Gt.hitTime+=i;const n=Ne.x,s=Ne.z- -1.22,r=Math.hypot(n,s);if(r>1.2){const u=1-Math.exp(-6*i);Gt.dirX+=(n/r-Gt.dirX)*u,Gt.dirZ+=(s/r-Gt.dirZ)*u;const f=Math.hypot(Gt.dirX,Gt.dirZ)||1;Gt.dirX/=f,Gt.dirZ/=f}const o=Gt.hitTime>.05?Math.min(1,(Gt.hitTime-.05)/.38):0;Gt.zoom+=(o-Gt.zoom)*(1-Math.exp(-9*i));const a=7.2,l=.34,c=5+.14*Math.min(r,50)+.3*Math.max(0,Ne.y);Gt.zoomPos.set(-Gt.dirX*a+n*l,c,-1.22-Gt.dirZ*a+s*l),Pc.set(Ne.x+ee.ball.vel.x*.08,Math.max(.25,Ne.y*.65),Ne.z+ee.ball.vel.z*.08),Gt.lookPos.lerp(Pc,1-Math.exp(-14*i)),Xe.position.lerpVectors(Lo,Gt.zoomPos,Gt.zoom),Dc.lookAt(Xe.position,Gt.lookPos,L_),Lc.setFromRotationMatrix(Dc),Xe.quaternion.slerpQuaternions(Do,Lc,Gt.zoom);const h=Gt.zoom<.22;Zn.visible=h}else Gt.zoom*=Math.exp(-10*i),Xe.position.copy(Lo),Xe.quaternion.copy(Do),Zn.visible=!0}function I_(i,t,e){ee.bat.poseAt(i,Zn.position,Zn.quaternion),_i.update(t,e);const n=Math.max(0,z.runupTime);z.runup?Ch(n,z.runup,hi):Object.assign(hi,{x:.42,y:0,z:-30,lean:0,armR:0,armL:0,legL:0,legR:0,kneeL:0,kneeR:0}),y_.apply(hi);const s=ee.ball;s.active?(Ne.lerpVectors(s.prevPos,s.pos,i),wa.quaternion.copy(s.orientation),z.phase!=="runup"&&ns.push(Ne)):z.phase==="runup"&&hi.hand?Ne.copy(hi.hand):Ne.set(0,-10,0),wa.position.copy(Ne),Es.position.set(Ne.x,.012,Ne.z);const r=Math.max(0,Ne.y),o=Es.userData.disc,a=Es.userData.ring;if(o&&(o.material.opacity=Math.max(.1,.5-r*.08),o.scale.setScalar(1+r*.25)),a&&(a.material.opacity=z.hitThisBall?.78:0,a.scale.setScalar(1+Math.min(2.5,Gt.zoom*1.6))),Es.visible=Ne.y>-1,Xi.anim)Xi.setOpacity(1);else{const l=Zc.lerp(.35,1,Math.min(1,Gt.zoom*2.5));Xi.setOpacity(l)}Xi.update(t),qa.update(t),z.hitThisBall&&ee.ball.active&&ee.ball.vel.lengthSq()>484&&(z.emberTimer-=t,z.emberTimer<=0&&(en.ballFlightEmber(Ne,ee.ball.vel),z.emberTimer=.028)),Ps.update(Zn,t,Zn.visible&&z.mode==="playing"),ws.update(t),en.update(t),M_.update(e),D_(t,e),gi.render(Ke,Xe)}let Aa=performance.now(),Hi=0;const Vi=ft.physics.dt;function Uh(i){requestAnimationFrame(Uh);let t=(i-Aa)/1e3;if(Aa=i,t>.1&&(t=.1),Pr>0&&(Pr-=t,Pr<=0&&It("message").classList.remove("show")),z.hitFreeze>0&&(z.hitFreeze-=t,t=0),z.mode==="playing"){Un.applyTo(ee.bat,z.phase==="result",t),Mi||S_(Un.locked?"":"Click to take guard (locks the mouse)"),Hi+=t;let e=Math.floor(Hi/Vi);e>ft.physics.maxStepsPerFrame&&(e=ft.physics.maxStepsPerFrame,Hi=e*Vi);for(let n=0;n<e;n++)Rc.lerpVectors(Ta,ee.bat.target,(n+1)/e),A_(Vi,Rc);e>0&&Ta.copy(ee.bat.target),Hi-=e*Vi}else z.mode==="menu"&&ee.bat.step(Vi,ee.bat.target);I_(z.mode==="playing"?Hi/Vi:1,t,i/1e3)}requestAnimationFrame(Uh);window.__cricket={world:ee,G:z,CONFIG:ft};
