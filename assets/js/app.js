
let cl=console.log;

let sideBarToggle=document.getElementById('sideBarToggle');
let sideBar=document.getElementById('sideBar');
let sideBarClose=document.getElementById('sideBarClose');
let backDrop=document.getElementById('backDrop');



const onsideBarToggle=()=>{
    sideBar.classList.toggle('show')
    backDrop.classList.toggle('d-none')
    sideBarToggle.classList.toggle('fa-xmark')
    sideBarToggle.classList.toggle('fa-bars')
}


sideBarToggle.addEventListener('click', onsideBarToggle)
// sideBarClose.addEventListener('click', onsideBarToggle)
backDrop.addEventListener('click', onsideBarToggle)


















