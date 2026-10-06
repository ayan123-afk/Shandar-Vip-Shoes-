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
const db = firebase.firestore();
window.db = db;

const CART_KEY = 'shandarCart';
function getCart(){try{return JSON.parse(localStorage.getItem(CART_KEY)||'[]')}catch{return[]}}
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c));}
function addToCart(p){const c=getCart();const e=c.find(i=>i.id===p.id);if(e)e.qty++;else c.push({id:p.id,name:p.name,price:p.price,image:p.image,qty:1});saveCart(c);}
function cartTotal(){return getCart().reduce((s,i)=>s+i.price*i.qty,0);}
console.log("✅ Firebase ready");
