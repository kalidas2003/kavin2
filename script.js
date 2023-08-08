const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

const blast=document.querySelector("#blast");




function kav(){

const currentYear=new Date().getFullYear();

const newYEar=new Date(`july29 ${currentYear+1} 00:00:00`);

const currentDate=new Date();

const diff= newYEar-currentDate;

const d=Math.floor((diff/1000/60/60/24));

const h=Math.floor((diff/1000/60/60)%24);

const m=Math.floor((diff/1000/60)%60);

const s=Math.floor((diff/1000)%60);

days.innerHTML=d;d<10?"0"+d:d;
hours.innerHTML=h;h<10?"0"+h:h;
minutes.innerHTML=m;m<10?"0"+m:m;
seconds.innerHTML=s;s<10?"0"+s:s;

if(s===0 && d===0 && h===0 && m===0 ){
    
    
    confetti()
}
}
setInterval(kav,1000);

