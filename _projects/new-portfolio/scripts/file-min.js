var toggle=document.querySelector("#switch");const $formBox=document.querySelector(".form-box"),$form=document.querySelector("form"),$feedback=document.querySelector(".feedback"),$calculate=document.querySelector("#calculate");var header=document.querySelector("header");const numberFormatter=Intl.NumberFormat("en-US");function capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}window.addEventListener("click",(function(e){e.target.matches('[rel="hamburger"]')&&(e.preventDefault(),header.classList.toggle("display-menu")),e.target.matches("#switch")&&(validateform(),$formBox.scrollIntoView({behavior:"smooth"})),header.classList.contains("display-menu")&&(e.target.matches("header *")||header.classList.remove("display-menu"))}));const formFunctions={hello:promptHello,count:promptString,quote:promptQuote,madlib:promptMadlib,retire:promptRetire,math:promptMath,driving:promptDrivingAge,interest:promptInterest,password:promptPassword,paint:promptPaint,area:calculateArea,checkout:promptCheck};validateForm=function(){toggle.checked?($form.classList.add("none"),formFunctions[formType]()):$form.classList.remove("none")};const $helloForm=document.querySelector("#hello"),$areaForm=document.querySelector("#area"),$countForm=document.querySelector("#count-characters"),$quoteForm=document.querySelector("#quote"),$madlibForm=document.querySelector("#madlib"),$retireForm=document.querySelector("#retire"),$mathForm=document.querySelector("#math"),$drivingForm=document.querySelector("#driving"),$interestForm=document.querySelector("#interest"),$passwordForm=document.querySelector("#password"),$paintForm=document.querySelector("#paint"),$checkoutForm=document.querySelector("#checkout");function promptCheck(){const e=$checkoutForm.querySelector("#appleAmount"),t=$checkoutForm.querySelector("#applePrice"),r=$checkoutForm.querySelector("#orangeAmount"),o=$checkoutForm.querySelector("#orangePrice");$checkoutForm.addEventListener("input",(function(n){var a=parseInt(e.value,10),i=parseInt(t.value,10),s=parseInt(r.value,10),l=parseInt(o.value,10),p=numberFormatter.format(a*i),c=numberFormatter.format(s*l),u=numberFormatter.format(parseInt(p,10)+parseInt(c,10)),m=numberFormatter.format(.055*u),d=numberFormatter.format(u+m);isNaN(parseInt(p),10)&&(p="X"),isNaN(parseInt(c),10)&&(c="X",console.log("er")),isNaN(parseInt(u),10)&&(u="X"),isNaN(parseInt(m),10)&&(m="X"),isNaN(parseInt(d),10)&&(d="X"),template=` <p>The subtotal of Apples is: ${p}</p>\n        <p>The subtotal of Oranges is: ${c}</p>\n        <p>The subtotal of all items is: ${u}</p>\n        <p>The tax on this purchase is:  ${m}</p>\n        <strong>\n        <p>The total is: ${d}</p>\n        </strong>`,$feedback.innerHTML=`${template}`}))}function promptPaint(){const e=$paintForm.querySelector("field:nth-of-type(1) input"),t=$paintForm.querySelector("field:nth-of-type(2) input");$paintForm.addEventListener("input",(function(r){var o=parseInt(e.value,10)*parseInt(t.value,10),n=Math.ceil(o/350),a=numberFormatter.format(o);isNaN(n)&&(n="X"),isNaN(parseInt(a),10)&&(a="X"),console.log(a),template=`<p>The ceiling of the room is: <strong>${a}</strong><br>\n        You'll need: <strong>${n}</strong> gallons to cover the entire ceiling </p>`,$feedback.innerHTML=`${template}`}))}function promptPassword(){const e=$passwordForm.querySelector("field:nth-of-type(1) input"),t=$passwordForm.querySelector("field:nth-of-type(2) input");$passwordForm.addEventListener("input",(function(r){let o=e.value,n=t.value,a="";o&&(a=`Typing...<br>\n            Username: ${o} <br>\n            Password: ${n} `),"JohnDoe"==o&&"1020World"==n&&(a="You're logged in! Welcome!"),$feedback.innerHTML=`<p>${a}</p>`}))}function calculateArea(){const e=$paintForm.querySelector("field:nth-of-type(1) input"),t=$paintForm.querySelector("field:nth-of-type(2) input");$areaForm.addEventListener("input",(function(r){var o=parseInt(e.value,10),n=parseInt(t.value,10);$feedback.querySelector("p:first-of-type").textContent=`The length is: ${o}`,$feedback.querySelector("p:nth-of-type(2)").textContent=`The length is: ${n}`;var a=parseInt(o)*parseInt(n),i=numberFormatter.format(a);isNaN(parseInt(i),10)&&(i="X");let s=.09290304*a;s=numberFormatter.format(s.toFixed(2));let l=`You entered a dimensions of ${o} feet by ${n} feet. The area is ${i} square feet. That is ${s} square meters`;""==o&""==n?l="Can't calculate...":""==o?l="Missing a length..":""==n&&(l="Missing a width.."),$feedback.querySelector("p:last-of-type strong").textContent=`${l}`}))}function promptInterest(){const e=$interestForm.querySelector("field:nth-of-type(1) input"),t=$interestForm.querySelector("field:nth-of-type(2) input"),r=$interestForm.querySelector("field:nth-of-type(3) input");$interestForm.addEventListener("input",(function(o){let n=e.value,a=t.value,i=a/100,s=r.value;0==s.length&&(s=5);var l=parseFloat(n).toFixed(2).replace(/[.,]00$/,"")*(1+parseFloat(i).toFixed(2).replace(/[.,]00$/,"")*parseFloat(s).toFixed(2).replace(/[.,]00$/,""));isNaN(l)&&(l=0);var p=`<p>After ${s} years at ${a}% interest, the investment will be worth <strong>${l}</strong>.</p> `;$feedback.innerHTML=`${p}`}))}function promptHello(){const e=document.querySelector("#name");$helloForm.addEventListener("input",(function(t){var r=e.value;let o="";r?o=`<p>Hello, <strong>${r}</strong>. Nice to meet you!</p>`:""==r&&(o="<p>Oh wait.. we're missing something..</p>"),$feedback.innerHTML=`${o}`}))}function promptDrivingAge(){const e=$drivingForm.querySelector("field input");$drivingForm.addEventListener("input",(function(t){let r=e.value>=16?"<p>You <strong>are</strong> old enough to legally drive.</p>":"<p>You <strong>can not</strong> legally drive.</p>";$feedback.innerHTML=`${r}`}))}function promptString(){const e=document.querySelector("#phrase");$countForm.addEventListener("input",(function(t){let r=e.value,o=0;for(""==r&&(n="nothing"),i=0;i<r.length;i++)character=r[i]," "!=character&&o++;var n="That phrase has: ";$feedback.innerHTML=`\n        <p> You entered:  <strong> ${r} </strong> </p>\n        <p> ${n} <strong> ${o} </strong> characters. </p>\n\n        `}))}function promptQuote(){const e=$quoteForm.querySelector("field:nth-of-type(2) input"),t=$quoteForm.querySelector("field:nth-of-type(1) input");$quoteForm.addEventListener("input",(function(r){let o=e.value,n=t.value;n=capitalizeFirstLetter(n),$feedback.innerHTML=`\n        <p><strong>${n}</strong> said <strong>“${o}”</strong> </p>\n        `}))}function promptMadlib(){const e=$madlibForm.querySelector("field:nth-of-type(1) input"),t=$madlibForm.querySelector("field:nth-of-type(2) input"),r=$madlibForm.querySelector("field:nth-of-type(3) input"),o=$madlibForm.querySelector("field:nth-of-type(4) input");$madlibForm.addEventListener("input",(function(n){let a=e.value,i=t.value,s=r.value,l=o.value;0==a.length&&(a="X"),0==i.length&&(i="X"),0==s.length&&(s="X"),0==l.length&&(l="X"),$feedback.innerHTML=`<p><strong>${a}</strong> is <strong>${i}</strong> <strong>${l}</strong>  while maintaining <strong>${s}</strong> poise! </p>`}))}function promptRetire(){var e=(new Date).getFullYear();const t=$retireForm.querySelector("field:nth-of-type(1) input"),r=$retireForm.querySelector("field:nth-of-type(2) input");$retireForm.addEventListener("input",(function(o){var n=t.value,a=r.value,i=parseFloat(a)-parseFloat(n);let s=`<p>\n        <strong>${i}</strong> years left until you can retire.<br> It's <strong>${e}</strong>, so you can retire in <strong>${e+i}</strong>.\n        </p>\n        `;""==n?s="<p>No age. No retirement.</p>":""==a&&(s="<p>We need to plan...</p>"),$feedback.innerHTML=s}))}function promptMath(){const e=$mathForm.querySelector("field:nth-of-type(1) input"),t=$mathForm.querySelector("field:nth-of-type(2) input");$mathForm.addEventListener("input",(function(r){let o=e.value,n=t.value;o=parseFloat(o).toFixed(2).replace(/[.,]00$/,""),n=parseFloat(n).toFixed(2).replace(/[.,]00$/,""),isNaN(o)&&(o=0),isNaN(n)&&(n=0);var a=parseFloat(o)*parseFloat(n),i=parseFloat(o)/parseFloat(n),s=parseFloat(o)+parseFloat(n),l=parseFloat(o)-parseFloat(n);a=parseFloat(a).toFixed(2).replace(/[.,]00$/,"");var p=`\n        <p>${o} + ${n} = <strong>${s=parseFloat(s).toFixed(2).replace(/[.,]00$/,"")}</strong></p>\n        <p>${o} - ${n} = <strong>${l=parseFloat(l).toFixed(2).replace(/[.,]00$/,"")}</strong></p>\n        <p>${o} x ${n} = <strong>${a}</strong></p>\n        <p>${o} / ${n} = <strong>${i=parseFloat(i).toFixed(2).replace(/[.,]00$/,"")}</strong></p>\n        `;$feedback.innerHTML=p}))}const showAnim=gsap.from(".main-tool-bar",{yPercent:-100,paused:!0,duration:.2}).progress(1);function animateFrom(e,t){var r=0,o=100*(t=t||1);e.classList.contains("gs_reveal_fromLeft")?(r=-100,o=0):e.classList.contains("gs_reveal_fromRight")&&(r=100,o=0),e.style.transform="translate("+r+"px, "+o+"px)",e.style.opacity="0",gsap.fromTo(e,{x:r,y:o,autoAlpha:0},{duration:2,x:0,y:0,autoAlpha:1,ease:"expo",overwrite:"auto"})}function hide(e){gsap.set(e,{autoAlpha:0})}ScrollTrigger.create({start:"top top",end:99999,onUpdate:e=>{-1===e.direction?showAnim.play():showAnim.reverse()}}),document.addEventListener("DOMContentLoaded",(function(){gsap.registerPlugin(ScrollTrigger),gsap.utils.toArray(".gs_reveal").forEach((function(e){hide(e),ScrollTrigger.create({trigger:e,onEnter:function(){animateFrom(e)},onEnterBack:function(){animateFrom(e,-1)},onLeave:function(){hide(e)}})}))}));