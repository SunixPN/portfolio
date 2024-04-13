export const burgerLogic = () => {
    const button = document.querySelector(".burger__button")
    const navContainer = document.querySelector(".burger__nav")
    const burgerLines = document.querySelectorAll(".burger__line")

    button.addEventListener("click", () => {
        window.isOpen = !window.isOpen
        navContainer.classList.toggle("burger__nav--active")
        if (window.isOpen) {
            document.body.style.overflow = "hidden"
            button.style.zIndex = 30
            button.style.top = "7px"

            burgerLines.forEach((elem, index) => {
                if (index === 0 || index === 2) {
                    elem.style.top = "50%"   
                }

                if (index === 0) {
                    elem.style.transform = "rotate(45deg)"
                }

                if (index === 2) {
                    elem.style.transform = "rotate(-45deg)"
                }

                if (index === 1) {
                    elem.style.opacity = "0"
                }
            })
        }

        else {
            document.body.style.overflow = "visible"
            button.style.top = "0"

            burgerLines.forEach(elem => {
                elem.style = ""
            })
        }
    })
}