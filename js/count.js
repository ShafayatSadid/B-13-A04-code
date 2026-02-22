// get parent section and get card length then set to tracker card

// job section
const jobSectionCards = document.querySelectorAll('#job-section .job-card')
console.log('job:', jobSectionCards.length)
// total job in all tab
const totalJob = document.getElementById('total-job');
// get total job length
function getTotalJob (){
    let length = jobSectionCards.length;
    return length;
}

// set to tracker
let jobTracker = document.getElementById('tracker-1');
jobTracker.innerText = jobSectionCards.length;
totalJob.innerText = jobSectionCards.length;

// interview section
const interviewSectionCards = document.querySelectorAll('#interview-section .job-card');
console.log('interview:',interviewSectionCards.length)
// set to tracker
let interviewTracker = document.getElementById('tracker-2');
interviewTracker.innerText = interviewSectionCards.length;
// get interview length
function getTotalInterview (){
    let length = interviewSectionCards.length;
    return length;
}

// reject section
const rejectSectionCards = document.querySelectorAll('#reject-section .job-card')
console.log('reject:',rejectSectionCards.length)
// set to tracker
let rejectTracker = document.getElementById('tracker-3');
rejectTracker.innerText = rejectSectionCards.length;
// get rejected length
function getTotalReject (){
    let length = rejectSectionCards.length;
    return length;
}

