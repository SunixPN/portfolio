import { toggleClasses } from "./utils/toggleClasses"

export const tracking = () => {
    const main = document.querySelector(".main__box")
    const about = document.querySelector(".about__box")
    const skill = document.querySelector(".skill__box")
    const works = document.querySelector(".works__box")
    const feedBack = document.querySelector(".feedback__box")

    const isElementVisible = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    let scrollTimer

    window.addEventListener("scroll", () => {
        clearTimeout(scrollTimer)

        scrollTimer = setTimeout(() => {
            const visibles = {
                isMainVisible: isElementVisible(main),
                isAboutVisible: isElementVisible(about),
                isSkillVisible: isElementVisible(skill),
                isWorksVisible: isElementVisible(works),
                isFeedBackVisible: isElementVisible(feedBack)
            }
    
            if (visibles.isMainVisible) {
                toggleClasses("main")
            }
    
            else if (visibles.isAboutVisible) {
                toggleClasses("about")
            }
    
            else if (visibles.isSkillVisible) {
                toggleClasses("skill")
            }
    
            else if (visibles.isWorksVisible) {
                toggleClasses("works")
            }
    
            else if (visibles.isFeedBackVisible) {
                toggleClasses("feedback")
            }
        }, 30)
    })
}