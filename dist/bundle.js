(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{!1 in window&&(document.getElementById("unavailable").checked=!0);const e=document.getElementById("textForm"),t=document.getElementById("text");e.addEventListener("submit",(e=>{if(!t.value)return;e.preventDefault();const n=new SpeechSynthesisUtterance(t.value);speechSynthesis.speak(n),t.value=null,t.focus()}))}))})();