
const texts=["Imad Khan","Software Engineering Student","Frontend Developer","Beginner Data Analyst"];
let i=0,j=0,del=false;

function type(){
    const el=document.getElementById("typing-text");
    el.textContent=del?texts[i].slice(0,--j):texts[i].slice(0,++j);
    if(!del && j===texts[i].length){del=true;setTimeout(type,1500);return;}
    if(del && j===0){del=false;i=(i+1)%texts.length;}
    setTimeout(type,del?60:120);
}

function toggleTheme(){document.body.classList.toggle("light-mode");}

function showCV(){
    const box=document.getElementById("cvContainer");
    const frame=document.getElementById("cvFrame");
    box.style.display=box.style.display==="block"?"none":"block";
    frame.src="Assets/cv.pdf";
}

function filterTable(){
    const v=document.getElementById("search").value.toLowerCase();
    document.querySelectorAll("#eduTable tbody tr").forEach(r=>{
        r.style.display=r.innerText.toLowerCase().includes(v)?"":"none";
    });
}

function filterSkills(){
    const v=document.querySelector(".skill-search").value.toLowerCase();
    document.querySelectorAll(".skill-item").forEach(s=>{
        s.style.display=s.innerText.toLowerCase().includes(v)?"block":"none";
    });
}

function validateForm(){
    document.getElementById("formMessage").textContent="✅ Message sent successfully!";
    return false;
}

window.onload=type;

