(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.getElementById("vcard-button").addEventListener("click",()=>{var a="Sanyam",t="Arya",i="Entrepreneur",o="+491703380307",e="er.sanyam.arya@gmail.com",r="https://www.sanyamarya.com",n="https://www.sanyamarya.com/profile.png";c(a,t,i,o,e,r,n)});function c(a,t,i,o,e,r,n){var s=`BEGIN:VCARD\r
VERSION:3.0\r
N:${t};${a}\r
FN:${a} ${t}\r
TITLE:${i}\r
TEL;TYPE=WORK,VOICE:${o}\r
EMAIL;TYPE=PREF,INTERNET:${e}\r
URL:${r}\r
PHOTO;VALUE=URL;TYPE=JPEG:${n}\r
END:VCARD`;window.open("data:text/x-vcard,"+encodeURIComponent(s))}
