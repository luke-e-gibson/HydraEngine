var k=Object.defineProperty;var V=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var c=(e,t,r)=>V(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function T(e){return e*Math.PI/180}var S=1e-6,v=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});function j(){var e=new v(9);return v!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function A(){var e=new v(16);return v!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function q(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function X(e,t,r){var n=r[0],i=r[1],s=r[2],o,a,h,f,l,d,p,u,x,w,m,y;return t===e?(e[12]=t[0]*n+t[4]*i+t[8]*s+t[12],e[13]=t[1]*n+t[5]*i+t[9]*s+t[13],e[14]=t[2]*n+t[6]*i+t[10]*s+t[14],e[15]=t[3]*n+t[7]*i+t[11]*s+t[15]):(o=t[0],a=t[1],h=t[2],f=t[3],l=t[4],d=t[5],p=t[6],u=t[7],x=t[8],w=t[9],m=t[10],y=t[11],e[0]=o,e[1]=a,e[2]=h,e[3]=f,e[4]=l,e[5]=d,e[6]=p,e[7]=u,e[8]=x,e[9]=w,e[10]=m,e[11]=y,e[12]=o*n+l*i+x*s+t[12],e[13]=a*n+d*i+w*s+t[13],e[14]=h*n+p*i+m*s+t[14],e[15]=f*n+u*i+y*s+t[15]),e}function H(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function W(e,t,r,n,i){var s=1/Math.tan(t/2),o;return e[0]=s/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0?(o=1/(n-i),e[10]=(i+n)*o,e[14]=2*i*n*o):(e[10]=-1,e[14]=-2*n),e}var K=W;function J(e,t,r,n){var i,s,o,a,h,f,l,d,p,u,x=t[0],w=t[1],m=t[2],y=n[0],O=n[1],P=n[2],I=r[0],z=r[1],$=r[2];return Math.abs(x-I)<S&&Math.abs(w-z)<S&&Math.abs(m-$)<S?q(e):(l=x-I,d=w-z,p=m-$,u=1/Math.hypot(l,d,p),l*=u,d*=u,p*=u,i=O*p-P*d,s=P*l-y*p,o=y*d-O*l,u=Math.hypot(i,s,o),u?(u=1/u,i*=u,s*=u,o*=u):(i=0,s=0,o=0),a=d*o-p*s,h=p*i-l*o,f=l*s-d*i,u=Math.hypot(a,h,f),u?(u=1/u,a*=u,h*=u,f*=u):(a=0,h=0,f=0),e[0]=i,e[1]=a,e[2]=l,e[3]=0,e[4]=s,e[5]=h,e[6]=d,e[7]=0,e[8]=o,e[9]=f,e[10]=p,e[11]=0,e[12]=-(i*x+s*w+o*m),e[13]=-(a*x+h*w+f*m),e[14]=-(l*x+d*w+p*m),e[15]=1,e)}function D(){var e=new v(3);return v!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function Q(e){var t=new v(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Z(e){var t=e[0],r=e[1],n=e[2];return Math.hypot(t,r,n)}function _(e,t,r){var n=new v(3);return n[0]=e,n[1]=t,n[2]=r,n}function tt(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function C(e,t,r,n){return e[0]=t,e[1]=r,e[2]=n,e}function N(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e}function R(e,t){var r=t[0],n=t[1],i=t[2],s=r*r+n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s,e}function et(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function B(e,t,r){var n=t[0],i=t[1],s=t[2],o=r[0],a=r[1],h=r[2];return e[0]=i*h-s*a,e[1]=s*o-n*h,e[2]=n*a-i*o,e}function U(e,t,r){var n=r[0],i=r[1],s=r[2],o=r[3],a=t[0],h=t[1],f=t[2],l=i*f-s*h,d=s*a-n*f,p=n*h-i*a,u=i*p-s*d,x=s*l-n*p,w=n*d-i*l,m=o*2;return l*=m,d*=m,p*=m,u*=2,x*=2,w*=2,e[0]=a+l+u,e[1]=h+d+x,e[2]=f+p+w,e}var rt=Z;(function(){var e=D();return function(t,r,n,i,s,o){var a,h;for(r||(r=3),n||(n=0),i?h=Math.min(i*r+n,t.length):h=t.length,a=n;a<h;a+=r)e[0]=t[a],e[1]=t[a+1],e[2]=t[a+2],s(e,e,o),t[a]=e[0],t[a+1]=e[1],t[a+2]=e[2];return t}})();function nt(){var e=new v(4);return v!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function it(e,t){var r=t[0],n=t[1],i=t[2],s=t[3],o=r*r+n*n+i*i+s*s;return o>0&&(o=1/Math.sqrt(o)),e[0]=r*o,e[1]=n*o,e[2]=i*o,e[3]=s*o,e}(function(){var e=nt();return function(t,r,n,i,s,o){var a,h;for(r||(r=4),n||(n=0),i?h=Math.min(i*r+n,t.length):h=t.length,a=n;a<h;a+=r)e[0]=t[a],e[1]=t[a+1],e[2]=t[a+2],e[3]=t[a+3],s(e,e,o),t[a]=e[0],t[a+1]=e[1],t[a+2]=e[2],t[a+3]=e[3];return t}})();function F(){var e=new v(4);return v!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function st(e,t,r){r=r*.5;var n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function L(e,t,r,n){var i=t[0],s=t[1],o=t[2],a=t[3],h=r[0],f=r[1],l=r[2],d=r[3],p,u,x,w,m;return u=i*h+s*f+o*l+a*d,u<0&&(u=-u,h=-h,f=-f,l=-l,d=-d),1-u>S?(p=Math.acos(u),x=Math.sin(p),w=Math.sin((1-n)*p)/x,m=Math.sin(n*p)/x):(w=1-n,m=n),e[0]=w*i+m*h,e[1]=w*s+m*f,e[2]=w*o+m*l,e[3]=w*a+m*d,e}function ot(e,t){var r=t[0]+t[4]+t[8],n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var s=(i+1)%3,o=(i+2)%3;n=Math.sqrt(t[i*3+i]-t[s*3+s]-t[o*3+o]+1),e[i]=.5*n,n=.5/n,e[3]=(t[s*3+o]-t[o*3+s])*n,e[s]=(t[s*3+i]+t[i*3+s])*n,e[o]=(t[o*3+i]+t[i*3+o])*n}return e}function at(e,t,r,n){var i=.5*Math.PI/180;t*=i,r*=i,n*=i;var s=Math.sin(t),o=Math.cos(t),a=Math.sin(r),h=Math.cos(r),f=Math.sin(n),l=Math.cos(n);return e[0]=s*h*l-o*a*f,e[1]=o*a*l+s*h*f,e[2]=o*h*f-s*a*l,e[3]=o*h*l+s*a*f,e}var G=it;(function(){var e=D(),t=_(1,0,0),r=_(0,1,0);return function(n,i,s){var o=et(i,s);return o<-.999999?(B(e,t,i),rt(e)<1e-6&&B(e,r,i),R(e,e),st(n,e,Math.PI),n):o>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(B(e,i,s),n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=1+o,G(n,n))}})();(function(){var e=F(),t=F();return function(r,n,i,s,o,a){return L(e,n,o,a),L(t,i,s,a),L(r,e,t,2*a*(1-a)),r}})();(function(){var e=j();return function(t,r,n,i){return e[0]=n[0],e[3]=n[1],e[6]=n[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],G(t,ot(t,e))}})();class ct{constructor(t){c(this,"config");c(this,"_projectionMatrix");c(this,"_viewMatrix");c(this,"position");c(this,"rotation");c(this,"up");c(this,"forward");c(this,"right");this.config=t,this._projectionMatrix=A(),this._viewMatrix=A(),this.position=_(0,0,5),this.rotation=F(),this.up=_(0,1,0),this.forward=_(0,0,-1),this.right=_(1,0,0),this.updateProjectionMatrix(),this.updateViewMatrix()}updateProjectionMatrix(){const t=this.config.size.width/this.config.size.height;K(this._projectionMatrix,this.config.fov,t,.1,1e3)}updateViewMatrix(){const t=D();N(t,this.position,this.forward),J(this._viewMatrix,this.position,t,this.up)}setPosition(t){tt(this.position,t),this.updateViewMatrix()}getPosition(){return Q(this.position)}setRotation(t){const r=T(t[0]),n=T(t[1]),i=T(t[2]);at(this.rotation,r,n,i),C(this.forward,0,0,-1),U(this.forward,this.forward,this.rotation),R(this.forward,this.forward),C(this.right,1,0,0),U(this.right,this.right,this.rotation),R(this.right,this.right),C(this.up,0,1,0),U(this.up,this.up,this.rotation),R(this.up,this.up),this.updateViewMatrix()}translate(t){N(this.position,this.position,t),this.updateViewMatrix()}get projectionMatrix(){return this._projectionMatrix}get viewMatrix(){return this._viewMatrix}}const g=class g{constructor(t,r,n){c(this,"gl");c(this,"program");this.gl=t,this.program=this.createProgram(r,n)}createShader(t,r){const n=this.gl.createShader(t);if(!n)throw new Error("Shader creation failed");if(this.gl.shaderSource(n,r),this.gl.compileShader(n),!this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)){const s=this.gl.getShaderInfoLog(n);throw this.gl.deleteShader(n),new Error(`Shader compilation failed: ${s}`)}return n}createProgram(t,r){const n=this.createShader(this.gl.VERTEX_SHADER,t),i=this.createShader(this.gl.FRAGMENT_SHADER,r),s=this.gl.createProgram();if(!s)throw new Error("Program creation failed");if(this.gl.attachShader(s,n),this.gl.attachShader(s,i),this.gl.linkProgram(s),!this.gl.getProgramParameter(s,this.gl.LINK_STATUS)){const a=this.gl.getProgramInfoLog(s);throw new Error(`Program linking failed: ${a}`)}return s}use(){this.gl.useProgram(this.program)}setMatrix(t,r,n){this.gl.uniformMatrix4fv(this.getUniformLocation(g.VOCABULARY.uniform.projectionMatrix),!1,t),this.gl.uniformMatrix4fv(this.getUniformLocation(g.VOCABULARY.uniform.viewMatrix),!1,r),this.gl.uniformMatrix4fv(this.getUniformLocation(g.VOCABULARY.uniform.modelMatrix),!1,n)}setTexture(t){this.gl.uniform1i(this.getUniformLocation(g.VOCABULARY.uniform.useTexture),1),this.gl.bindTexture(this.gl.TEXTURE_2D,t.getTexture())}setColor(t){this.gl.uniform1i(this.getUniformLocation(g.VOCABULARY.uniform.useTexture),0),this.gl.uniform4f(this.getUniformLocation(g.VOCABULARY.uniform.color),t[0],t[1],t[2],t[3])}getAttribLocation(t){const r=this.gl.getAttribLocation(this.program,t);if(r===-1)throw new Error(`Attribute ${t} not found`);return r}getUniformLocation(t){return this.gl.getUniformLocation(this.program,t)}};c(g,"VOCABULARY",{attribute:{position:"a_position",texture:"a_texCoord"},uniform:{projectionMatrix:"u_projectionMatrix",viewMatrix:"u_viewMatrix",modelMatrix:"u_modelMatrix",color:"u_color",texture:"u_texture",useTexture:"u_useTexture"}});let E=g;const ht=`#version 300 es
precision mediump float;

// Vertex attributes
in vec4 a_position;
in vec2 a_texCoord;

// Matrices
uniform mat4 u_projectionMatrix;
uniform mat4 u_viewMatrix;
uniform mat4 u_modelMatrix;

out vec2 v_texCoord;

void main() {
  gl_Position = u_projectionMatrix * u_viewMatrix * u_modelMatrix * a_position;
  v_texCoord = a_texCoord;
}`,ut=`#version 300 es
precision mediump float;

uniform vec4 u_color;
uniform bool u_useTexture;
uniform sampler2D u_texture;

in vec2 v_texCoord;

out vec4 outColor;

void main() {
    if (u_useTexture) {
      outColor = texture(u_texture, v_texCoord) * u_color;
    }
    else {
      outColor = u_color;
    }
}`;function ft(e){const t=new E(e,ht,ut);if(!t)throw new Error("Shader creation failed");return t}class lt{constructor(t){c(this,"canvas");c(this,"gl");c(this,"state");c(this,"shader",new Map);c(this,"renderList",new Map);c(this,"camera");if(this.state=this.getDefaultState(),this.updateState("starting","Triton is starting..."),this.canvas=t.canvas||document.createElement("canvas"),t.size?(this.canvas.width=t.size.width,this.canvas.height=t.size.height):(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,window.onresize=()=>this.handleResize()),document.body.contains(this.canvas)||document.body.appendChild(this.canvas),this.gl=this.canvas.getContext("webgl2"),!this.gl)throw this.updateState("error","WebGL2 not supported"),new Error("WebGL2 not supported");this.glConfig(),this.camera=new ct({fov:45,size:{width:this.canvas.width,height:this.canvas.height}}),this.updateState("running","Triton started successfully")}get State(){return this.state}get Canvas(){return this.canvas}getDefaultState(){return{state:"idle",log:[]}}updateState(t,r){this.state.state=t,this.state.log.push(r)}handleResize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.gl.viewport(0,0,this.canvas.width,this.canvas.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT)}glConfig(){this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.enable(this.gl.DEPTH_TEST),this.gl.depthFunc(this.gl.LEQUAL),this.gl.viewport(0,0,this.canvas.width,this.canvas.height),this.compileShaders()}compileShaders(){this.shader.set("unlit",ft(this.gl))}addSprite(t,r){this.renderList.has(t)&&console.warn(`Sprite with name ${t} already exists. Overwriting.`),this.renderList.set(t,r),r.init(this.gl,this.shader.get("unlit"))}removeSprite(t){var r;this.renderList.has(t)?((r=this.renderList.get(t))==null||r.destroy(this.gl),this.renderList.delete(t)):console.warn(`Sprite with name ${t} does not exist.`)}getSprite(t){return this.renderList.get(t)}setClearColor(t,r,n,i=1){this.gl.clearColor(t,r,n,i),this.renderFrame()}clearRenderList(){this.renderList.forEach(t=>{t.destroy(this.gl)}),this.renderList.clear()}renderFrame(){this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.renderList.forEach(t=>{t.render(this.camera.projectionMatrix,this.camera.viewMatrix,this.gl)})}clear(){this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT)}}let dt=0;const pt=new Map;class mt{constructor(t){c(this,"imagePath");c(this,"texture",null);c(this,"textureUnit",dt);this.imagePath=t}init(t){if(this.texture=t.createTexture(),!this.texture)throw new Error("[ X ] Texture creation failed");t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([255,0,255,255]));const r=new Image;r.src=this.imagePath,r.onload=()=>{t.bindTexture(t.TEXTURE_2D,this.texture),t.activeTexture(this.textureUnit),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r),t.generateMipmap(t.TEXTURE_2D),pt.set(this.imagePath,this.texture)}}getTexture(){return this.texture}destroy(t){this.texture&&(t.deleteTexture(this.texture),this.texture=null)}}const M={shapes:{Square:{vertices:[-.5,-.5,0,1,.5,-.5,0,1,.5,.5,0,1,-.5,.5,0,1],indices:[0,1,2,2,3,0],texCords:[0,1,1,1,1,0,0,0]}}};class wt{constructor(t){c(this,"texture",null);c(this,"color",[0,0,0]);this.color=t}init(t){if(this.texture=t.createTexture(),!this.texture)throw new Error("[ X ] Texture creation failed");t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([this.color[0],this.color[2],this.color[2],255]))}getTexture(){return this.texture}destroy(t){this.texture&&(t.deleteTexture(this.texture),this.texture=null)}}class Y{constructor(t,r=[1,1,1]){c(this,"vertexBuffer",null);c(this,"indexBuffer",null);c(this,"textureCoordBuffer",null);c(this,"modelMatrix",null);c(this,"shader",null);c(this,"texture",null);c(this,"color",[1,1,1]);c(this,"position",[0,0]);t===null||t===""?this.texture=new mt(t):this.texture=new wt(r)}move(t,r){this.modelMatrix&&(this.modelMatrix=X(this.modelMatrix,A(),[t,r,0]))}init(t,r){if(this.vertexBuffer=t.createBuffer(),!this.vertexBuffer)throw new Error("Vertex buffer creation failed");if(t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(M.shapes.Square.vertices),t.STATIC_DRAW),this.indexBuffer=t.createBuffer(),!this.indexBuffer)throw new Error("Index buffer creation failed");if(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(M.shapes.Square.indices),t.STATIC_DRAW),this.textureCoordBuffer=t.createBuffer(),!this.textureCoordBuffer)throw new Error("Texture coordinate buffer creation failed");if(t.bindBuffer(t.ARRAY_BUFFER,this.textureCoordBuffer),t.bufferData(t.ARRAY_BUFFER,new Float32Array(M.shapes.Square.texCords),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),this.shader=r,!this.shader)throw new Error("Shader creation failed");if(!this.texture)throw new Error("Texture creation failed");this.texture.init(t),this.modelMatrix=H(A(),_(this.position[0],this.position[1],0))}destroy(t){t.deleteBuffer(this.vertexBuffer),t.deleteBuffer(this.indexBuffer),this.vertexBuffer=null,this.indexBuffer=null,this.modelMatrix=null,this.shader=null}setPosition(t,r){this.position=[t,r]}render(t,r,n){if(!this.vertexBuffer||!this.indexBuffer||!this.modelMatrix||!this.texture||!this.shader)return;this.shader.use(),n.bindBuffer(n.ARRAY_BUFFER,this.vertexBuffer);const i=this.shader.getAttribLocation(E.VOCABULARY.attribute.position);n.enableVertexAttribArray(i),n.vertexAttribPointer(i,4,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,this.textureCoordBuffer);const s=this.shader.getAttribLocation(E.VOCABULARY.attribute.texture);n.enableVertexAttribArray(s),n.vertexAttribPointer(s,2,n.FLOAT,!1,0,0),this.shader.setMatrix(t,r,this.modelMatrix),this.shader.setTexture(this.texture),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,this.indexBuffer),n.drawElements(n.TRIANGLES,M.shapes.Square.indices.length,n.UNSIGNED_SHORT,0),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null)}}function xt(e,t){return t instanceof Map?{dataType:"Map",value:Array.from(t.entries())}:t}function vt(e,t){return typeof t=="object"&&t!==null&&t.dataType==="Map"?new Map(t.value):t}function gt(e,t=0){return JSON.stringify(e,xt,t)}function _t(e){return JSON.parse(e,vt)}function yt(e){const t=_t(e);if(!t)throw new Error("Failed to load game data");if(!t.metadata)throw new Error("Game data does not contain metadata");return t}class Et{constructor(t=[]){c(this,"_components",[]);this._components=t}getComponent(t){const r=this._components.find(n=>n.type===t);return r?r.data:null}contains(t){return this._components.some(r=>r.type===t)}getComponents(t){return this._components.filter(r=>r.type===t)}addComponent(t){if(this._components.find(r=>r.type===t.type))throw new Error(`Component of type ${t.type} already exists`);this._components.push(t)}removeComponent(t){const r=this._components.findIndex(n=>n.type===t);if(r===-1)throw new Error(`Component of type ${t} does not exist`);this._components.splice(r,1)}}class Mt{constructor(t){c(this,"_scripts",new Map);t.forEach(r=>{this._scripts.set(r.name,r)})}attachScript(t){if(this._scripts.has(t.name))throw new Error(`Script with ID ${t.name} is already attached`);this._scripts.set(t.name,t)}detachScript(t){if(!this._scripts.has(t))throw new Error(`Script with ID ${t} is not attached`);this._scripts.delete(t)}getScripts(){return Array.from(this._scripts.values())}get scripts(){return this._scripts}}class St{constructor(t){c(this,"_id");c(this,"_name");c(this,"_components");c(this,"_attachedScripts");c(this,"_localScriptContext",{});c(this,"flags",new Map);this._id=t.id,this._name=t.name,this._components=new Et(t.components),this._attachedScripts=new Mt([]),this.flags.set("hasSprite",this._components.contains("sprite")),this.flags.set("hasTransform",this._components.contains("transform"))}Start(t){let r=t;return this._attachedScripts.scripts.forEach(n=>{const i=n.Start({gameObject:this,components:this._components,script:this._localScriptContext,global:r,input:{keyboard:null,mouse:null}});i&&(this._components=i.components,this._localScriptContext=i.script,r=i.global)}),{scriptContext:r}}Update(t,r){let n=r;return this._attachedScripts.scripts.forEach(i=>{var o,a,h,f;const s=i.Update({gameObject:this,components:this._components,script:this._localScriptContext,global:n,input:{keyboard:t.keyboard,mouse:t.mouse}});s&&(this._components=s.components,this._localScriptContext=s.script,n=s.global),this.flags.get("hasSprite")&&((f=(o=this._components.getComponent("sprite"))==null?void 0:o.sprite)==null||f.move(((a=this._components.getComponent("transform"))==null?void 0:a.position[0])??0,((h=this._components.getComponent("transform"))==null?void 0:h.position[1])??0))}),{scriptContext:n}}getComponent(t){const r=this._components.getComponent(t);return r||(console.warn(`Component of type ${t} not found`),null)}updateComponent(t,r){if(!this._components.getComponent(t)){console.warn(`Component of type ${t} not found`);return}this._components.removeComponent(t),this._components.addComponent({type:t,data:r})}get scripts(){return this._attachedScripts}get id(){return this._id}get name(){return this._name}}class Rt{constructor(t,r){c(this,"_name");c(this,"_scriptFunctions",new Map);c(this,"_scriptContext",null);c(this,"_flags",new Map);if(this._name=t,r.scriptURL)throw new Error("Script URL is not supported yet.");if(r.scriptData){const n=this.loadScriptFunctions(r.scriptData);if(!n)throw new Error("Failed to load script functions.");this._scriptFunctions=n}else throw new Error("No script data provided.")}loadScriptFunctions(t){try{const r=`
        with(this) {
          ${t}
          return exports;  
        }
      `,i=new Function(r)(),s=new Map;for(const o in i)typeof i[o]=="function"?(s.has(o)&&console.warn(`Function ${o} is already defined. Overwriting.`),s.set(o,i[o])):console.warn(`Exported value ${o} is not a function.`);return s}catch(r){console.error("Error loading script functions:",r)}}updateGameContext(t){this._scriptContext=t,console.log("Script context updated:",this._scriptContext)}Start(t){var n;const r=(n=this._scriptFunctions.get("Start"))==null?void 0:n.call({...t});if(r)return r;console.warn("Start function not found or did not return a context.")}Update(t){var n;const r=(n=this._scriptFunctions.get("Update"))==null?void 0:n.call({...t});if(r)return r;if(this._flags.get("UpdateWarn"))return;console.warn("Update function not found or did not return a context."),this._flags.set("UpdateWarn",!0)}get name(){return this._name}}class At{constructor(){c(this,"keys",new Map);c(this,"keyDown",new Map);c(this,"keyUp",new Map);window.addEventListener("keydown",t=>{this.keys.set(t.code,!0),this.keyDown.set(t.code,!0)}),window.addEventListener("keyup",t=>{this.keys.set(t.code,!1),this.keyUp.set(t.code,!0)})}isKeyDown(t){return this.keys.get(t)||!1}isKeyUp(t){return this.keyUp.get(t)||!1}isKeyPressed(t){const r=this.keyDown.get(t)||!1;return r&&this.keyDown.set(t,!1),r}}class Tt{constructor(t){c(this,"mouseDown");c(this,"mouseUp");c(this,"mouseMove");c(this,"mouseWheel");c(this,"wheelDelta");c(this,"position");this.position={x:0,y:0,delta:{x:0,y:0}},this.mouseDown=!1,this.mouseUp=!1,this.mouseMove=!1,this.mouseWheel=!1,this.wheelDelta=0,window.addEventListener("mousedown",r=>{this.mouseDown=!0,this.mouseUp=!1}),window.addEventListener("mouseup",r=>{this.mouseUp=!0,this.mouseDown=!1}),window.addEventListener("mousemove",r=>{const n=t.getBoundingClientRect(),i=r.clientX-n.left,s=r.clientY-n.top;this.mouseMove=!0,this.position.delta.x=i-this.position.x,this.position.delta.y=s-this.position.y,this.position.x=i,this.position.y=s}),window.addEventListener("wheel",r=>{this.mouseWheel=!0,this.wheelDelta=r.deltaY})}isMouseDown(){return this.mouseDown}isMouseUp(){return this.mouseUp}getMousePosition(){return this.position}}class Ct{constructor(t){c(this,"triton");c(this,"running",!1);c(this,"game",null);c(this,"scene",null);c(this,"objects",new Map);c(this,"keyboard");c(this,"mouse");c(this,"scriptContext",null);t.render.render?this.triton=t.render.render:this.triton=new lt({canvas:t.render.canvas}),this.keyboard=new At,this.mouse=new Tt(this.triton.Canvas)}update(){if(!this.running){this.triton.clear();return}if(!this.scene){console.warn("No scene loaded. Cannot update.");return}this.objects.forEach(t=>{this.scriptContext=t.Update({keyboard:this.keyboard,mouse:this.mouse},{})}),this.triton.renderFrame(),requestAnimationFrame(this.update.bind(this))}start(){this.running=!0,this.update()}stop(){this.running=!1}loadScene(){if(!this.scene)throw new Error("No scene loaded");this.triton.clearRenderList(),this.triton.setClearColor(this.scene.world.renderer.background[0],this.scene.world.renderer.background[1],this.scene.world.renderer.background[2]),this.objects=new Map,this.scene.objects.forEach(t=>{const r=new St(t);if(this.objects.set(t.name,r),!t.components){console.warn(`Object ${t.name} has no components`);return}t.components.forEach(n=>{switch(n.type){case"sprite":const i=n.data;let s=null;if(!i.textureLocation)s=new Y(i.textureLocation,[0,0,0]);else if(i.color)s=new Y(null,i.color);else{console.error(`Sprite component for object ${t.name} is missing textureLocation or color.`);return}const o=r.getComponent("transform");if(!o){console.error(`Transform component for object ${t.name} is missing or wrong.`);return}const a=r.getComponent("sprite");if(!a)return console.error(`Sprite component for object ${t.name} is missing or wrong.`);a.sprite=s,s.setPosition(o.position[0],o.position[1]),this.triton.addSprite(t.name,s);break;case"script":const h=r.getComponent("script");if(!h){console.error(`Script component for object ${t.name} is missing or wrong.`);return}const f=new Rt(t.name,h);r.scripts.attachScript(f);break}this.scriptContext=r.Start({})})})}saveGame(){if(!this.game)throw new Error("No game loaded");const t=this.game,r=gt(t,2),n=new Blob([r],{type:"application/json"}),i=URL.createObjectURL(n),s=document.createElement("a");s.href=i,s.download="game.json",s.click(),URL.revokeObjectURL(i),console.log("Game saved to game.json")}loadGame(t){if(this.triton.clearRenderList(),window.document.title=`${t.metadata.name}: ${t.metadata.version}`,t.currentScene||(console.warn("No current scene set in game data. Defaulting to first scene."),t.currentScene=Array.from(t.scenes.keys())[0]),this.scene=t.scenes.get(t.currentScene),!this.scene)throw new Error(`Scene ${t.currentScene} not found`);this.loadScene(),this.game=t}async loadGameFromFile(t){const n=await(await fetch(t)).text(),i=yt(n);if(this.triton.clearRenderList(),window.document.title=`${i.metadata.name}: ${i.metadata.version}`,i.currentScene||(console.warn("No current scene set in game data. Defaulting to first scene."),i.currentScene=Array.from(i.scenes.keys())[0]),this.scene=i.scenes.get(i.currentScene),!this.scene)throw new Error(`Scene ${i.currentScene} not found`);this.loadScene(),this.game=i}}const b=new Ct({render:{}});b.loadGameFromFile("games/keyboardTest.json").then(()=>{b.start()});window.Hydra=b;
