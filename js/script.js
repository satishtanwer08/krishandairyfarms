
const WA_NUMBER="918920539421";
const WA_MESSAGE="Hello Krishan Dairy Farms, I want to order fresh milk. Please share today's milk availability, price and delivery details.";
const WA_URL=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
document.querySelectorAll("[data-whatsapp]").forEach(a=>{a.href=WA_URL;a.target="_blank";a.rel="noopener"});
const menu=document.querySelector(".menu-toggle"),links=document.querySelector(".nav-links");
if(menu&&links){menu.addEventListener("click",()=>{const open=links.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{links.classList.remove("open");menu.setAttribute("aria-expanded","false")}))}
const current=location.pathname.split("/").pop()||"index.html";
document.querySelectorAll(".nav-links a").forEach(a=>{if(a.getAttribute("href")===current)a.classList.add("active")});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
document.querySelectorAll(".faq-btn").forEach(btn=>btn.addEventListener("click",()=>{const item=btn.parentElement,ans=item.querySelector(".faq-answer"),open=item.classList.toggle("open");btn.setAttribute("aria-expanded",String(open));ans.style.maxHeight=open?ans.scrollHeight+"px":"0"}));
const form=document.querySelector("#contactForm");
if(form)form.addEventListener("submit",e=>{e.preventDefault();const name=document.querySelector("#name"),phone=document.querySelector("#phone"),msg=document.querySelector("#message"),out=document.querySelector("#formMessage");if(!name.value.trim()||!phone.value.trim()||!msg.value.trim()){out.style.display="block";out.textContent="Please fill in all fields.";return}if(!/^[0-9+\\-\\s]{10,15}$/.test(phone.value.trim())){out.style.display="block";out.textContent="Please enter a valid phone number.";return}out.style.display="block";out.textContent="Thank you! This frontend-only form does not send data to a server yet. Please use WhatsApp or Call Now for a live enquiry.";form.reset()});
document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
