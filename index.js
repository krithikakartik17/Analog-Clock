setInterval(() => {
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    let hrotation=30*h+m/2;
    let mrotation=6*m+s/10;
    let srotation=6*s;

    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
}, 1000);

function Dark(){
    
    if(document.body.style.backgroundColor!="black"){
        document.body.style.backgroundColor="black";
        document.getElementById("btn").innerText="Light Mode";
    }
    else if(document.body.style.backgroundColor=="black"){
        document.body.style.backgroundColor="white";
document.getElementById("btn").innerText="Dark Mode";
        
    }
}