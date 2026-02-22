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
