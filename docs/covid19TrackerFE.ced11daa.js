parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(){t(o)}function t(e){data=$.get({url:"https://enigmatic-retreat-23877.herokuapp.com/register",success:function(t){e(t),r()},statusCode:{500:function(){i()}}})}function o(e){$(".register__userID").val(e.id),$(".register__deletecode").val(e.deletecode)}function s(){deleteCode=$(".delete__deletecode").val(),d(deleteCode)}function d(e){$.get({url:"https://enigmatic-retreat-23877.herokuapp.com/delete?deleteCode="+encodeURIComponent(e),statusCode:{400:function(){u()},404:function(){u()},204:function(){_()}}})}function l(e){navigator.geolocation.getCurrentPosition(n)}function c(e,t,o){$.get({url:"https://enigmatic-retreat-23877.herokuapp.com/sighting?userID="+encodeURIComponent(e)+"&latitude="+encodeURIComponent(t)+"&longitude="+encodeURIComponent(o),statusCode:{400:function(){a()},204:function(){g()}}})}function n(e){userID=$(".location__userID").val(),alert("userID: "+userID+", latitude: "+e.coords.latitude+", longitude: "+e.coords.longitude),c(userID,e.coords.latitude,e.coords.longitude)}function i(){$(".register__userID").addClass("register__userID--invalid"),$(".register__deletecode").addClass("register__deletecode--invalid"),setTimeout(function(){$(".register__userID").removeClass("register__userID--invalid"),$(".register__deletecode").removeClass("register__deletecode--success")},2500)}function r(){$(".register__userID").addClass("register__userID--success"),$(".register__deletecode").addClass("register__deletecode--success"),setTimeout(function(){$(".register__userID").removeClass("register__userID--success"),$(".register__deletecode").removeClass("register__deletecode--success")},2500)}function u(){$(".delete__deletecode").addClass("delete__deletecode--invalid"),$(".delete__deletecode").val("wrong deleteCode"),setTimeout(function(){$(".delete__deletecode").removeClass("delete__deletecode--invalid"),$(".delete__deletecode").val("")},2500)}function _(){$(".delete__deletecode").addClass("delete__deletecode--success"),$(".delete__deletecode").val("deletion successfull!"),setTimeout(function(){$(".delete__deletecode").removeClass("delete__deletecode--success"),$(".delete__deletecode").val("")},2500)}function a(){$(".location__userID").addClass("location__userID--invalid"),$(".location__userID").val("wrong userID"),setTimeout(function(){$(".location__userID").removeClass("location__userID--invalid"),$(".location__userID").val("")},2500)}function g(){$(".location__userID").addClass("location__userID--success"),$(".location__userID").val("location has been saved!"),setTimeout(function(){$(".location__userID").removeClass("location__userID--success"),$(".location__userID").val("")},2500)}$(document).ready(function(){$(".register__userButton").click(e),$(".delete__userButton").click(s),$(".location__registerButton").click(l)});
},{}]},{},["Focm"], null)
//# sourceMappingURL=covid19TrackerFE.ced11daa.js.map