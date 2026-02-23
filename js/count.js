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



interviewUpdate()

rejectedUpdate()
