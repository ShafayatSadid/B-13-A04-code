// create two array

let interviewList = []
let rejectList =[];

console.log('interview list:', interviewList.length)



// main function

// 1 get main container
const mainContainer = document.querySelector('main');
console.log(mainContainer);

// target all element
mainContainer.addEventListener('click', function(even){

    // jodi inter btn e click kora hoy taile egula hobe
    if(even.target.classList.contains('inter-btn')){

        // get parent node and gether information.
        const parentNode = even.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const description = parentNode.querySelector('.description').innerText;

        

        // create an object with this information
        const cardInfo = {
            jobName,
            jobTitle,
            jobType,
            status: "INTERVIEW",
            description
        }

        // change the status
        parentNode.querySelector('.status').innerText = "INTERVIEW"

        // find out it is already exist or not.
        const cardExist = interviewList.find(item => item.jobName == cardInfo.jobName);
        if(!cardExist){
            interviewList.push(cardInfo);
        }

        // then removing the card from rejected list if there.
        rejectList = rejectList.filter(item => item.jobName != cardInfo.jobName)
        renderReject()
        renderInterview ()
    } // jodi reject btn e click kora hoy taile egula hobe
    else if(even.target.classList.contains('reject-btn')){

        // get parent node and gether information.
        const parentNode = even.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobTitle = parentNode.querySelector('.job-title').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const description = parentNode.querySelector('.description').innerText;

        

        // create an object with this information
        const cardInfo = {
            jobName,
            jobTitle,
            jobType,
            status: "REJECTED",
            description
        }

        // change the status
        parentNode.querySelector('.status').innerText = "REJECTED"

        // find out it is already exist or not.
        const cardExist = rejectList.find(item => item.jobName == cardInfo.jobName);
        if(!cardExist){
            rejectList.push(cardInfo);
        }

        // then removing the card from interview list if there.
        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName)
        renderInterview()
        renderReject ()
    } // jodi delete btn e click kora hoy taile eigula hobe.
    else if(even.target.closest('.delete-btn')){
        // get parent
        const parent = even.target.parentNode.parentNode.parentNode;
        // get job name
        const jobName = parent.querySelector('.job-name').innerText;

        // delete the card from interview and reject list if there.
        interviewList = interviewList.filter(item => item.jobName != jobName);
        rejectList = rejectList.filter(item => item.jobName != jobName);

        // delete the parent
        parent.remove();

        // job tracker update
        jobUpdate()
        // then re rendering
        renderInterview()
        renderReject();
        console.log(jobName)
    }
})    

// create a function for create the full section for interview.
const interviewSection = document.getElementById('interview-section')

function renderInterview (){

    // interviewSection.innerHTML =  ``
    //  remove old job card
    interviewSection.querySelectorAll('.job-card').forEach(card => card.remove());

    // sob gula item ke dhorbo
    for(let interview of interviewList){

        // create div
        let div = document.createElement('div');
        // adding all css class
        div.className = 'job-card flex justify-between bg-[#ffffff] p-6 rounded-lg hover:-translate-y-0.5';

        // add innerHTML
        div.innerHTML = `
        <!-- part -1 -->
            <div class="space-y-5">

                <!-- part 1.1 -->
                <div>
                    <h3 class="job-name text-[1.125rem] text-[#002c5c] font-semibold">${interview.jobName} </h3>
                    <p class="job-title text-[1rem] font-normal text-[#64748bFF]">${interview.jobTitle} </p>
                </div>
                    
                <!-- part 1.2 -->
                <div>
                    <p class="job-type text-[0.875rem] font-normal text-[#64748bFF]">${interview.jobType}</p>
                </div>

                <!-- part 1.3 -->
                <div>
                    <!-- status -->
                    <p class="status transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5 bg-[#eef4ffFF] text-center text-[0.875rem] font-medium py-[10px] px-3 w-[113px] text-[#002c5c] rounded mb-2">${interview.status}</p>

                    <p class="description text-[0.875rem] font-normal text-[#323b49]">${interview.description} </p>
                </div>

                <!-- 2 btn -->
                <div class="space-x-2">
                    <!-- green btn -->
                     <button class="inter-btn transition-all duration-200 ease-out active:translate-y-0 active:scale-95 hover:shadow-lg hover:-translate-y-0.5 text-[0.875rem] font-semibold text-[#10b981] py-[10px] px-3 border border-[#10b981] rounded">INTERVIEW</button>
                    <!-- red btn -->
                    <button class="reject-btn transition-all duration-200 ease-out active:translate-y-0 active:scale-95 hover:shadow-lg hover:-translate-y-0.5 text-[0.875rem] font-semibold text-[#ef4444] py-[10px] px-3 border border-[#ef4444] rounded">REJECTED</button>
                </div> 

            </div> 

            <!-- part -2 -->
            <div>
                    <button class="delete-btn transition-all duration-200 ease-out active:translate-y-0 active:scale-95 hover:-translate-y-0.5"><img class="w-8" src="./images/delete.png" alt=""></button>
            </div>`

            interviewSection.appendChild(div)
            

        console.log(interview);
    }

    // handling no job card
    const noJob = interviewSection.querySelector('.no-job-card')
    if(interviewList.length === 0){
        noJob.style.display = 'block'
    }
    else{
        noJob.style.display = 'none'
    }


    // update counter
    interviewUpdate()

}



// create a function for create the full section for reject.
const rejectSection = document.getElementById('reject-section')

function renderReject (){

    // rejectSection.innerHTML =  ``
    //  remove old job card
    rejectSection.querySelectorAll('.job-card').forEach(card => card.remove());

    // sob gula item ke dhorbo
    for(let rejected of rejectList){

        // create div
        let div = document.createElement('div');
        // adding all css class
        div.className = 'job-card flex justify-between bg-[#ffffff] p-6 rounded-lg hover:-translate-y-0.5';

        // add innerHTML
        div.innerHTML = `
        <!-- part -1 -->
            <div class="space-y-5">

                <!-- part 1.1 -->
                <div>
                    <h3 class="job-name text-[1.125rem] text-[#002c5c] font-semibold">${rejected.jobName} </h3>
                    <p class="job-title text-[1rem] font-normal text-[#64748bFF]">${rejected.jobTitle} </p>
                </div>
                    
                <!-- part 1.2 -->
                <div>
                    <p class="job-type text-[0.875rem] font-normal text-[#64748bFF]">${rejected.jobType}</p>
                </div>

                <!-- part 1.3 -->
                <div>
                    <!-- status -->
                    <p class="status transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5 bg-[#eef4ffFF] text-center text-[0.875rem] font-medium py-[10px] px-3 w-[113px] text-[#002c5c] rounded mb-2">${rejected.status}</p>

                    <p class="description text-[0.875rem] font-normal text-[#323b49]">${rejected.description} </p>
                </div>

                <!-- 2 btn -->
                <div class="space-x-2">
                    <!-- green btn -->
                     <button class="inter-btn transition-all duration-200 ease-out active:translate-y-0 active:scale-95 hover:shadow-lg hover:-translate-y-0.5 text-[0.875rem] font-semibold text-[#10b981] py-[10px] px-3 border border-[#10b981] rounded">INTERVIEW</button>
                    <!-- red btn -->
                    <button class="reject-btn transition-all duration-200 ease-out active:translate-y-0 active:scale-95 hover:shadow-lg hover:-translate-y-0.5 text-[0.875rem] font-semibold text-[#ef4444] py-[10px] px-3 border border-[#ef4444] rounded">REJECTED</button>
                </div> 

            </div> 

            <!-- part -2 -->
            <div>
                    <button class="delete-btn transition-all duration-200 ease-out active:translate-y-0 active:scale-95 hover:-translate-y-0.5"><img class="w-8" src="./images/delete.png" alt=""></button>
            </div>`

            rejectSection.appendChild(div)
            

        console.log(rejected);
    }

    // handling no job card
    const noJob = rejectSection.querySelector('.no-job-card')
    if(rejectList.length === 0){
        noJob.style.display = 'block'
    }
    else{
        noJob.style.display = 'none'
    }
    // update counter
    rejectedUpdate()


}
