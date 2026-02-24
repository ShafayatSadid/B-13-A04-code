// get tab 1
document.getElementById('tab-1').addEventListener('click', function(){

    // show only clicked
    showOnly('job-section');
    // style the tab btn 
    clickedBtn('tab-1')

    // hide the section-total element
    const sectionTotalTab2 = document.getElementById('section-total-tab2');
    const sectionTotalTab3 = document.getElementById('section-total-tab3');
    sectionTotalTab2.classList.add('hidden')
    sectionTotalTab3.classList.add('hidden')
})

// get tab 2
document.getElementById('tab-2').addEventListener('click', function(){

    // hide the section-total-tab3 and show only tab2
    const sectionTotalTab3 = document.getElementById('section-total-tab3');
    sectionTotalTab3.classList.add('hidden')
    const sectionTotalTab2 = document.getElementById('section-total-tab2');
    sectionTotalTab2.classList.remove('hidden')

    // show only clicked
    showOnly('interview-section'); 
    // style the tab btn
    clickedBtn('tab-2')

    trackerTab2()
    
})

// get tab 3
document.getElementById('tab-3').addEventListener('click', function(){

    // hide the section-total-tab2 and show only tab3
    const sectionTotalTab2 = document.getElementById('section-total-tab2');
    sectionTotalTab2.classList.add('hidden')
    const sectionTotalTab3 = document.getElementById('section-total-tab3');
    sectionTotalTab3.classList.remove('hidden')
    
    // show only clicked
    showOnly('reject-section'); 
    // style the tab btn
    clickedBtn('tab-3')

    trackerTab3()
})


// section total niye jei somossa oitar solving.
// step 1 section total 2 taber jonne alada kore felbo.
// duita section er jonne alada alada span tag diye element rakhbo section e tab korlei shudhu oitar hidden class uthe jabe.