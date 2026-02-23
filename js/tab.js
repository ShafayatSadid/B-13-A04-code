// get tab 1
document.getElementById('tab-1').addEventListener('click', function(){

    // show only clicked
    showOnly('job-section');
    // style the tab btn 
    clickedBtn('tab-1')

    // hide the section-total element
    const section = document.getElementById('section-total')
    section.classList.add('hidden')
})

// get tab 2
document.getElementById('tab-2').addEventListener('click', function(){

    const section = document.getElementById('section-total')
    section.classList.remove('hidden')

    // show only clicked
    showOnly('interview-section'); 
    // style the tab btn
    clickedBtn('tab-2')

    // // count job in the section. 1. get element 2. add inner text
    let sectionTotal = document.getElementById('section-total');
    let totalInterview = getTotalInterview()
    sectionTotal.innerHTML = `${totalInterview} of`
})

// get tab 3
document.getElementById('tab-3').addEventListener('click', function(){

    const section = document.getElementById('section-total')
    section.classList.remove('hidden')
    
    // show only clicked
    showOnly('reject-section'); 
    // style the tab btn
    clickedBtn('tab-3')

    // count job in the section 1. get element 2. add inner text
    let sectionTotal = document.getElementById('section-total');
    let totalReject = getTotalReject()
    sectionTotal.innerHTML = `${totalReject} of`
})