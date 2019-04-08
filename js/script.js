const filterNav = document.querySelectorAll('.filtering');
const sections = document.querySelectorAll('.sections');

filterNav.forEach(btn=>{
    btn.addEventListener('click', e=>{
        const value = e.target.dataset.filter;
        sections.forEach(section=>{
            if(section.classList.contains(value)){
                section.style.display = "block";
            }else{
                section.style.display = "none";
            }
        })
    })
})