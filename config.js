// config.js — Firebase for Shandar VIP
const firebaseConfig = {
  apiKey: "AIzaSyCsbAdGKmEDA5R31dPuZXCq43332ZpE05A",
  authDomain: "shandar-vip.firebaseapp.com",
  projectId: "shandar-vip",
  storageBucket: "shandar-vip.firebasestorage.app",
  messagingSenderId: "217113477423",
  appId: "1:217113477423:web:f64fd0ff63c06d504961da",
  measurementId: "G-76MD8XKJR0"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
try { firebase.analytics(); } catch (e) {}
window.auth = auth; window.db = db;

const CART_KEY = 'shandarCart';
function getCart(){try{return JSON.parse(localStorage.getItem(CART_KEY)||'[]')}catch{return[]}}
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartBadge();}
function updateCartBadge(){const t=getCart().reduce((s,i)=>s+i.qty,0);document.querySelectorAll('#cartBadge,.cart-badge').forEach(el=>{el.textContent=t;el.style.display=t?'flex':'none';});}
function addToCart(p){const c=getCart();const e=c.find(i=>i.id===p.id);if(e)e.qty++;else c.push({id:p.id,name:p.name,price:p.price,image:p.image,qty:1});saveCart(c);}
function removeFromCart(id){saveCart(getCart().filter(i=>i.id!==id));}
function updateCartQty(id,d){const c=getCart();const it=c.find(i=>i.id===id);if(!it)return;it.qty+=d;if(it.qty<=0)return removeFromCart(id);saveCart(c);}
function cartTotal(){return getCart().reduce((s,i)=>s+i.price*i.qty,0);}
function fireToast(msg,icon='success'){Swal.fire({toast:true,position:'top-end',icon,title:msg,showConfirmButton:false,timer:2600,timerProgressBar:true,background:'#0f172a',color:'#e2e8f0'});}
document.addEventListener('DOMContentLoaded',updateCartBadge);
console.log("✅ Shandar VIP ready");
