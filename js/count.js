// get parent section and get card length then set to tracker card

// job section
const jobSectionCards = document.querySelectorAll('#job-section .job-card')
console.log('job:', jobSectionCards.length)

// set to tracker
let jobTracker = document.getElementById('tracker-1');
jobTracker.innerText = jobSectionCards.length;

// interview section
const interviewSectionCards = document.querySelectorAll('#interview-section .job-card');
console.log('interview:',interviewSectionCards.length)
// set to tracker
let interviewTracker = document.getElementById('tracker-2');
interviewTracker.innerText = interviewSectionCards.length;

// reject section
const rejectSectionCards = document.querySelectorAll('#reject-section .job-card')
console.log('reject:',rejectSectionCards.length)
// set to tracker
let rejectTracker = document.getElementById('tracker-3');
rejectTracker.innerText = rejectSectionCards.length;