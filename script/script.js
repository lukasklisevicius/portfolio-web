const navslide = () => {
    const burger = document.querySelector(".burger")
    const links = document.querySelector(".nav-links")
    const navlinks = document.querySelectorAll(".nav-links li")
    burger.addEventListener("click", ()=>{
        links.classList.toggle("active")
        navlinks.forEach((link,idx)=>{
            if(link.style.animation){
                link.style.animation = ""
            }else{
            link.style.animation = `navlinkfade 0.5s ease forwards ${idx / 7 + 0.4}s`
            }
        })
        burger.classList.toggle("toggle")
    })
}

navslide()