parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(){t(o)}function t(e){data=$.get({url:"https://enigmatic-retreat-23877.herokuapp.com/register",success:function(t){e(t)},statusCode:{500:function(){console.log("error")}}})}function o(e){$(".register__userID").val(e.id),$(".register__deletecode").val(e.deletecode)}function r(){deleteCode=$(".delete_deleteCode").val(),n(deleteCode)}function n(e){data=$.get({url:"https://enigmatic-retreat-23877.herokuapp.com/delete?deleteCode="+e,statusCode:{400:function(){console.log("error")},404:function(){console.log("error")},204:function(){console.log("error")}}})}$(document).ready(function(){$(".register__userButton").click(e),$(".delete__userButton").click(r)});
},{}]},{},["Focm"], null)
//# sourceMappingURL=covid19TrackerFE.b573ebfa.js.map