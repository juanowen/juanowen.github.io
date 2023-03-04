System.register("chunks:///_virtual/AnimationSwitcher.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,i,e,o,s;return{setters:[function(t){n=t.inheritsLoose},function(t){i=t.cclegacy,e=t._decorator,o=t.sp,s=t.Component}],execute:function(){var a;i._RF.push({},"04046DePWxOHqXsKU+2G6S6","AnimationSwitcher",void 0);var r=e.ccclass;e.property,t("AnimationSwitcher",r("AnimationSwitcher")(a=function(t){function i(){for(var n,i=arguments.length,e=new Array(i),o=0;o<i;o++)e[o]=arguments[o];return(n=t.call.apply(t,[this].concat(e))||this)._skeleton=null,n._animations=[],n}n(i,t);var e=i.prototype;return e.start=function(){if(this._skeleton=this.getComponent(o.Skeleton),this._skeleton){var t=["hit","death"];this._animations=Object.keys(this._skeleton._skeletonData._skeletonJson.animations),this._animations=this._animations.filter((function(n){return t.indexOf(n)<0})),this._startNewAnimation()}},e._startNewAnimation=function(){var t=this,n=Math.floor(Math.random()*this._animations.length);this._skeleton.setAnimation(0,this._animations[n],!0),this.scheduleOnce((function(){t._startNewAnimation()}),5)},i}(s))||a);i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AnimationSwitcher.ts","./SpineClothesEffectBuilder.ts","./SpineClothesManager.ts","./SwitchButton.ts"],(function(){"use strict";return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SpineClothesEffectBuilder.ts",["cc"],(function(e){"use strict";var n,i;return{setters:[function(e){n=e.cclegacy,i=e._decorator}],execute:function(){var t;n._RF.push({},"ec8ea9Lej9C1LoVQbG4IlpM","SpineClothesEffectBuilder",void 0);var o=i.ccclass;i.property,e("SpineClothesEffectBuilder",o("SpineClothesEffectBuilder")(t=function(){function e(){}return e.buildEffectAsset=function(e,n){},e._getFilePlot=function(e){for(var n="\nCCEffect %{\n  techniques:\n  - passes:\n    - vert: sprite-vs:vert\n      frag: sprite-fs:frag\n      depthStencilState:\n        depthTest: false\n        depthWrite: false\n      blendState:\n        targets:\n        - blend: true\n          blendSrc: src_alpha\n          blendDst: one_minus_src_alpha\n          blendDstAlpha: one_minus_src_alpha\n      rasterizerState:\n        cullMode: none\n      properties:\n        alphaThreshold: { value: 0.5 }\n        resolution: { value: [0., 0.], editor: { visible: false } }\n\n        ##properties##\n}%\n\nCCProgram sprite-vs %{\n  precision highp float;\n  #include <builtin/uniforms/cc-global>\n  #include <builtin/uniforms/cc-local>\n\n  in vec3 a_position;\n  in vec2 a_texCoord;\n  in vec4 a_color;\n\n  out vec4 v_light;\n  out vec2 uv0;\n\n  vec4 vert () {\n    vec4 pos = vec4(a_position, 1);\n    pos = cc_matWorld * pos;\n    pos = cc_matViewProj * pos;\n    uv0 = a_texCoord;\n    v_light = a_color;\n    return pos;\n  }\n}%\n\nCCProgram sprite-fs %{\n  precision highp float;\n  #include <builtin/internal/alpha-test>\n\n  in vec4 v_light;\n  in vec2 uv0;\n  #pragma builtin(local)\n  layout(set = 2, binding = 11) uniform sampler2D cc_spriteTexture;\n\n  ##samplers##\n\n  uniform Settings {\n    ##uniforms##\n  };\n    \n  vec4 frag () {\n    vec4 o = vec4(1, 1, 1, 1);\n    o *= texture(cc_spriteTexture, uv0);\n    o *= v_light;\n    \n    vec2 absUV = uv0 * resolution;\n    vec2 position;\n    vec2 size;\n    float angle;\n\n    ##processors##\n\n    ALPHA_TEST(o);\n    return o;\n  }\n}%",i="",t="",o={tint:"",position:"    vec2 resolution;\n",size:"",flipHorizontal:"",flipVertical:"",angle:""},s="",r=0;r<e;r++)i+="\n        position_"+r+": { value: [0., 0.], editor: { visible: false } }\n        size_"+r+": { value: [0., 0.], editor: { visible: false } }\n        angle_"+r+": { value: 0., editor: { visible: false } }\n        flipHorizontal_"+r+": { value: 0., editor: { visible: false } }\n        flipVertical_"+r+": { value: 0., editor: { visible: false } }\n        tint_"+r+": { value: [1., 1., 1., 1.], editor: { type: color, visible: false} }\n        texture_"+r+": { value: white, editor: { visible: false } }\n\t\t\t\t",t+="\n  uniform sampler2D texture_"+r+";",o.tint+="\n    vec4 tint_"+r+";",o.position+="\n    vec2 position_"+r+";",o.size+="\n    vec2 size_"+r+";",o.flipHorizontal+="\n    float flipHorizontal_"+r+";",o.flipVertical+="\n    float flipVertical_"+r+";",o.angle+="\n    float angle_"+r+";",s+="\n    position = position_"+r+";\n    size = size_"+r+";\n    angle = angle_"+r+";\n\n    if (size.x > 0. && size.y > 0.) {\n      vec2 rotSize = size;\n      if (angle == 90.) { rotSize = vec2(size.y, size.x); }\n      vec4 limits = vec4(position.x - 1., position.x + rotSize.x + 1., position.y - 1., position.y + rotSize.y + 1.);\n\n      if (absUV.x >= limits.r && absUV.x <= limits.g && absUV.y >= limits.b && absUV.y <= limits.a) {\n        vec2 uv = vec2((absUV.x - position.x) / rotSize.x, (absUV.y - position.y) / rotSize.y);\n        if (angle == 90.) {\n          uv = vec2(1. - (absUV.y - position.y) / rotSize.y, (absUV.x - position.x) / rotSize.x);\n        }\n\n        if (flipHorizontal_"+r+" == 1.) uv = vec2(1. - uv.x, uv.y);\n        if (flipVertical_"+r+" == 1.) uv = vec2(uv.x, 1. - uv.y);\n\n        vec4 wearColor = texture(texture_"+r+", uv) * tint_"+r+";\n        if (o.a == 0. || wearColor.a == 1.) {\n          o = wearColor;\n        } else if (wearColor.a != 0.) {\n          o = mix(o, wearColor, wearColor.a);\n        }\n      }\n    }\n";return n=(n=(n=(n=n.replace("##properties##",i)).replace("##processors##",s)).replace("##samplers##",t)).replace("##uniforms##",Object.values(o).join("\n"))},e._createEffectFile=function(e,n){Editor.Message.request("asset-db","create-asset","db://assets/effects/clothesManager.effect",e,{overwrite:!0}).then((function(e){Editor.Message.request("asset-db","query-uuid","db://assets/effects/clothesManager.effect").then((function(e){n instanceof Function&&n(e)}))}))},e._createEffectFolderAndFile=function(e,n){var i=this;Editor.Message.request("asset-db","create-asset","db://assets/effects",null,{overwrite:!0}).then((function(t){i._createEffectFile(e,n)}))},e}())||t);n._RF.pop()}}}));

System.register("chunks:///_virtual/SpineClothesManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SpineClothesEffectBuilder.ts"],(function(t){"use strict";var e,i,r,n,o,l,a,s,p,u,c,f,h,_,m,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,n=t.assertThisInitialized,o=t.createClass},function(t){l=t.cclegacy,a=t._decorator,s=t.Enum,p=t.SpriteFrame,u=t.sp,c=t.EffectAsset,f=t.color,h=t.Material,_=t.v2,m=t.Component},function(t){d=t.SpineClothesEffectBuilder}],execute:function(){var g,y,E,v,S,b,C,w,P,T,z,k,L,A,F,H,U,D,V,M,x,O,B;l._RF.push({},"f2c47PN6BdP7Lm+Jp5F8jA7","SpineClothesManager",void 0);var N=a.ccclass,R=a.property,I=a.requireComponent,j=a.executeInEditMode,G=a.executionOrder,q={EmptySlot:0},J=(g=N("SpineClothesHelper"),y=R({type:s(q)}),E=R({type:p}),v=R({visible:function(){return this.isValid()}}),S=R({visible:function(){return this.isValid()}}),b=R({visible:function(){return this.isValid()}}),g((P=e((w=function(){function t(){r(this,"slotName",P,this),r(this,"spriteFrame",T,this),r(this,"flipHorizontal",z,this),r(this,"flipVertical",k,this),r(this,"tint",L,this)}return t.prototype.isValid=function(){return null!==this.spriteFrame&&0!==this.slotName},t}()).prototype,"slotName",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return q.EmptySlot}}),T=e(w.prototype,"spriteFrame",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=e(w.prototype,"flipHorizontal",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),k=e(w.prototype,"flipVertical",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),L=e(w.prototype,"tint",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return f(255,255,255)}}),C=w))||C);t("SpineClothesManager",(A=N("SpineClothesManager"),F=I(u.Skeleton),H=G(0),U=R({type:c,tooltip:'Effect asset which will be used for skeleton material. Generated automatically when changing the "Clothes" property.'}),D=R({tooltip:'Click here if you change skeleton data to update slot list in "Clothes" property.'}),V=R({type:[J],tooltip:"Clothes settings"}),A(M=F(M=j(M=H((O=e((x=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return e=t.call.apply(t,[this].concat(o))||this,r(e,"spineEffect",O,n(e)),r(e,"_clothes",B,n(e)),e._material=null,e._skeleton=null,e._slots=null,e._updateSlotList=!1,e}i(e,t);var l=e.prototype;return l.onLoad=function(){this._skeleton=this.getComponent(u.Skeleton),this._slots=this._skeleton.attachUtil._skeleton.slots,this._UPDATE_SLOT_LIST(),this._CREATE_EFFECT_ASSET()},l.start=function(){this.wearClothes()},l.wearClothes=function(){var t=this;if(this._skeleton&&this.spineEffect){var e=0;this._material=new h,this._material.initialize({effectAsset:this.spineEffect,defines:{USE_RGBE_CUBEMAP:!0}});var i=this._material.passes[0];if(void 0!==this._material.getProperty("resolution")){var r=this._skeleton.skeletonData.textures[0],n=_(r.width,r.height);i.setUniform(i.getHandle("resolution"),n)}this.clothes.filter((function(t){return t.isValid()})).forEach((function(r){var n=t._slots.find((function(t){return t.data.attachmentName===r.slotName}));if(n&&r.spriteFrame){var o=n.attachment.region;if(void 0!==t._material.getProperty("position_"+e)){var l=_(o.x,o.y);i.setUniform(i.getHandle("position_"+e),l)}if(void 0!==t._material.getProperty("size_"+e)){var a=_(o.width,o.height);i.setUniform(i.getHandle("size_"+e),a)}if(void 0!==t._material.getProperty("angle_"+e)){var s=o.degrees;i.setUniform(i.getHandle("angle_"+e),s)}if(void 0!==t._material.getProperty("flipHorizontal_"+e)){var p=r.flipHorizontal;i.setUniform(i.getHandle("flipHorizontal_"+e),+p)}if(void 0!==t._material.getProperty("flipVertical_"+e)){var u=r.flipVertical;i.setUniform(i.getHandle("flipVertical_"+e),+u)}if(void 0!==t._material.getProperty("tint_"+e)){var c=r.tint;i.setUniform(i.getHandle("tint_"+e),c)}if(void 0!==t._material.getProperty("texture_"+e)){var f=r.spriteFrame.texture;t._material.setProperty("texture_"+e,f)}e++}})),this._skeleton.customMaterial=this._material}},l._UPDATE_SLOT_LIST=function(){},l._CREATE_EFFECT_ASSET=function(){var t=this;d.buildEffectAsset(this.clothes.length,(function(e){if(""!==e){var i=new c;i.initDefault(e),t.spineEffect=i}}))},o(e,[{key:"updateSlotList",get:function(){return this._updateSlotList},set:function(t){this._updateSlotList=!1,this._UPDATE_SLOT_LIST()}},{key:"clothes",get:function(){return this._clothes},set:function(t){this._clothes=t,this._CREATE_EFFECT_ASSET()}}]),e}(m)).prototype,"spineEffect",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),e(x.prototype,"updateSlotList",[D],Object.getOwnPropertyDescriptor(x.prototype,"updateSlotList"),x.prototype),e(x.prototype,"clothes",[V],Object.getOwnPropertyDescriptor(x.prototype,"clothes"),x.prototype),B=e(x.prototype,"_clothes",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),M=x))||M)||M)||M)||M));l._RF.pop()}}}));

System.register("chunks:///_virtual/SwitchButton.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SpineClothesManager.ts"],(function(e){"use strict";var t,i,r,n,o,s,a,c,l,h,p,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,a=e.SpriteFrame,c=e.Sprite,l=e.Node,h=e.Color,p=e.Component},function(e){u=e.SpineClothesManager}],execute:function(){var d,S,f,v,_,b,g,y;o._RF.push({},"a682eSnb69Di6DvX4O8w8vf","SwitchButton",void 0);var m=s.ccclass,w=s.property;e("SwitchButton",(d=m("SwitchButton"),S=w({type:u}),f=w({type:a}),d((b=t((_=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,r(t,"clothesManager",b,n(t)),r(t,"clothesIndex",g,n(t)),r(t,"spriteFrame",y,n(t)),t._isActive=!1,t._backRenderSprite=null,t}i(t,e);var o=t.prototype;return o.start=function(){this._backRenderSprite=this.getComponentInChildren(c),this.clothesManager&&this.spriteFrame?this.node.on(l.EventType.TOUCH_START,this.onTouchStart,this):this.node.active=!1},o.onTouchStart=function(){this._isActive=!this._isActive,this.clothesManager.clothes[this.clothesIndex].spriteFrame=this._isActive?this.spriteFrame:null,this.clothesManager.wearClothes(),this._backRenderSprite&&(this._backRenderSprite.color=this._isActive?new h(7,255,47):new h(163,9,126),this._backRenderSprite.node.setPosition(0,this._isActive?1:-1),this._backRenderSprite.node.children[0].setPosition(0,this._isActive?19:-19))},t}(p)).prototype,"clothesManager",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=t(_.prototype,"clothesIndex",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),y=t(_.prototype,"spriteFrame",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=_))||v));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});