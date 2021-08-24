
let showFrmIIITA = document.getElementsByClassName('mentors-frm-iiita')[0];
let showFrmIIITAtxt = document.getElementsByClassName('mentors-frm-iiita-txt')[0];
let showOtsIIITA = document.getElementsByClassName('mentors-outside-iiita')[0];
let showOtsIIITAtxt = document.getElementsByClassName('mentors-outside-iiita-txt')[0];
const selectedtab = document.getElementById('mentor-type-select-tab')

const frmIIITAList = document.getElementsByClassName('mentor-list-frm-iiita')[0];
const otsIIITAList = document.getElementsByClassName('mentor-list-ots-iiita')[0];

showFrmIIITA.addEventListener('click',()=>{
    selectedtab.style.marginLeft = '0';
    showFrmIIITAtxt.style.color = '#ffffff';
    showOtsIIITAtxt.style.color = '#5d5e8d';
    frmIIITAList.style.display = 'grid';
    otsIIITAList.style.display = 'none';
})

showOtsIIITA.addEventListener('click',()=>{
    selectedtab.style.marginLeft = '176px';
    showFrmIIITAtxt.style.color = '#5d5e8d';
    showOtsIIITAtxt.style.color = '#ffffff';
    frmIIITAList.style.display = 'none';
    otsIIITAList.style.display = 'grid';
})

