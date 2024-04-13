import { toggleClasses } from './utils/toggleClasses';

export const anchor = () => {
    const main = document.querySelector(".main")
    const about = document.querySelector(".about")
    const skill = document.querySelector(".skill")
    const works = document.querySelector(".works")
    const feedBack = document.querySelector(".feedback")

    const mainNav = document.querySelector(".main__nav")

    const button = document.querySelector(".burger__button")
    const navContainer = document.querySelector(".burger__nav")
    const burgerLines = document.querySelectorAll(".burger__line")

    const mainButton = document.querySelector(".main__button")
    const aboutButton = document.querySelector(".about__button")
    const skillButtons = document.querySelectorAll(".skill__button")

    mainButton.addEventListener("click", () => {
        about.scrollIntoView({ behavior: "smooth" })
        toggleClasses("about")
    })

    aboutButton.addEventListener("click", () => {
        skill.scrollIntoView({ behavior: "smooth" })
        toggleClasses("skill")
    })

    skillButtons.forEach(skillButton => {
        skillButton.addEventListener("click", () => {
            works.scrollIntoView({ behavior: "smooth" })
            toggleClasses("works")
        })
    })
    
    navContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("main__item")) {
            const currentItem = event.target.dataset.anchor

            switch (currentItem) {
                case "main": {
                    main.scrollIntoView({ behavior: "smooth" })
                    break
                }
          
                case "about":  {
                    about.scrollIntoView({ behavior: "smooth" })
                    break
                }

                case "skill": {
                    skill.scrollIntoView({ behavior: "smooth" })
                    break
                }

                case "works": {
                    works.scrollIntoView({ behavior: "smooth" })
                    break
                }
    
                case "feedback": {
                    feedBack.scrollIntoView({ behavior: "smooth" })
                    break
                }
            }
        }

        navContainer.classList.remove("burger__nav--active")
        document.body.style.overflow = "visible"
        button.style.top = "0"

        burgerLines.forEach(elem => {
            elem.style = ""
        })

        window.isOpen = !window.isOpen
    })

    mainNav.addEventListener("click", (event) => {
        if (event.target.classList.contains("main__item")) {
            const currentItem = event.target.dataset.anchor

            switch (currentItem) {
                case "main": {
                    main.scrollIntoView({ behavior: "smooth" })
                    toggleClasses("main")
                    break
                }
          
                case "about":  {
                    about.scrollIntoView({ behavior: "smooth" })
                    toggleClasses("about")
                    break
                }

                case "skill": {
                    skill.scrollIntoView({ behavior: "smooth" })
                    toggleClasses("skill")
                    break
                }

                case "works": {
                    works.scrollIntoView({ behavior: "smooth" })
                    toggleClasses("works")
                    break
                }
    
                case "feedback": {
                    feedBack.scrollIntoView({ behavior: "smooth" })
                    toggleClasses("feedback")
                    break
                }
            }
        }
    })
}