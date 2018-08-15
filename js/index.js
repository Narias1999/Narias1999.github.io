const goTo = id => {
    let top = document.getElementById(id).offsetTop - 20
    window.scroll({
        top,
        left: 0,
        behavior: 'smooth'
    })
}
const addListener = (handler, el) => document.getElementById(handler).addEventListener('click', () => goTo(el))

addListener('goHome', 'home')
addListener('goDescription', 'description')
addListener('goSkills', 'skills')
addListener('goWork', 'work')
addListener('goContact', 'contact')