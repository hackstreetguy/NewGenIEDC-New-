
let showFrmIIITA = document.getElementsByClassName('mentors-frm-iiita')[0];
let showFrmIIITAtxt = document.getElementsByClassName('mentors-frm-iiita-txt')[0];
let showOtsIIITA = document.getElementsByClassName('mentors-outside-iiita')[0];
let showOtsIIITAtxt = document.getElementsByClassName('mentors-outside-iiita-txt')[0];
const selectedtab = document.getElementById('mentor-type-select-tab')

showFrmIIITA.addEventListener('click',()=>{
    selectedtab.style.marginLeft = '0';
    showFrmIIITAtxt.style.color = '#ffffff';
    showOtsIIITAtxt.style.color = '#5d5e8d';

})

showOtsIIITA.addEventListener('click',()=>{
    selectedtab.style.marginLeft = '176px';
    showFrmIIITAtxt.style.color = '#5d5e8d';
    showOtsIIITAtxt.style.color = '#ffffff';
})

