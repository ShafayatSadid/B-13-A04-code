// only clicked section
function showOnly (id){

    // get all section
    const jobSection = document.getElementById('job-section')
    const interviewSection = document.getElementById('interview-section')
    const rejectSection = document.getElementById('reject-section')

    // hide all
    jobSection.classList.add('hidden');
    interviewSection.classList.add('hidden');
    rejectSection.classList.add('hidden');

    // show only clicked section
    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
}

// clicked btn different style and others same style.
function clickedBtn (id){

    // get all tab btn
    const tabBtn1 = document.getElementById('tab-1')
    const tabBtn2 = document.getElementById('tab-2')
    const tabBtn3 = document.getElementById('tab-3')

    // remove from all that style.
    tabBtn1.classList.remove('bg-[#3b82f6FF]', 'text-[#ffffff]')
    tabBtn2.classList.remove('bg-[#3b82f6FF]', 'text-[#ffffff]')    
    tabBtn3.classList.remove('bg-[#3b82f6FF]', 'text-[#ffffff]')

    // add to all one style.
    tabBtn1.classList.add('bg-[#ffffff]', 'text-[#64748bFF]')
    tabBtn2.classList.add('bg-[#ffffff]', 'text-[#64748bFF]')    
    tabBtn3.classList.add('bg-[#ffffff]', 'text-[#64748bFF]')

    // get the select btn and style with that bg and color.
    const selectBtn = document.getElementById(id);

    // remove previous style
    selectBtn.classList.remove('bg-[#ffffff]', 'text-[#64748bFF]')
    
    // then add that style
    selectBtn.classList.add('bg-[#3b82f6FF]','text-[#ffffff]')
}



// interview tracker Updater
function interviewUpdate(){

    const interviewSectionCards = document.querySelectorAll('#interview-section .job-card');
    console.log('interview:',interviewSectionCards.length)
    // set to tracker
    let interviewTracker = document.getElementById('tracker-2');
    interviewTracker.innerText = interviewSectionCards.length;
    
}

// get interview length
function getTotalInterview() {
    const interviewSectionCards = document.querySelectorAll('#interview-section .job-card');
    let length = interviewSectionCards.length;
    return length;
}



// reject tracker Updater
function rejectedUpdate(){
    // reject section
    const rejectSectionCards = document.querySelectorAll('#reject-section .job-card')
    console.log('reject:',rejectSectionCards.length)
    // set to tracker
    let rejectTracker = document.getElementById('tracker-3');
    rejectTracker.innerText = rejectSectionCards.length;
    
}

// get rejected length
function getTotalReject() {
    const rejectSectionCards = document.querySelectorAll('#reject-section .job-card')
    let length = rejectSectionCards.length;
    return length;
}


// Job tracker Updater
function jobUpdate(){

    // job section
    const jobSectionCards = document.querySelectorAll('#job-section .job-card')
    console.log('job:', jobSectionCards.length)
    // total job in all tab
    const totalJob = document.getElementById('total-job');
    

    // set to tracker
    let jobTracker = document.getElementById('tracker-1');
    jobTracker.innerText = jobSectionCards.length;
    totalJob.innerText = jobSectionCards.length;
}

// get total job length
function getTotalJob() {
    const jobSectionCards = document.querySelectorAll('#job-section .job-card')
    let length = jobSectionCards.length;
    return length;
}


// count total in a section

function trackerTab2(){
    // // count job in the section. 1. get element 2. add inner text
    let sectionTotal = document.getElementById('section-total');
    let totalInterview = getTotalInterview()
    sectionTotal.innerHTML = `${totalInterview} of`
}

function trackerTab3(){

    // count job in the section. step 1 get element step 2 add inner text
    let sectionTotal = document.getElementById('section-total');
    let totalReject = getTotalReject()
    sectionTotal.innerHTML = `${totalReject} of`
}