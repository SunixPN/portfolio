const listItems = document.querySelectorAll(".main__item--desktop")

export const toggleClasses = (dataArgument) => {
    listItems.forEach(item => {
        if (item.dataset.anchor !== dataArgument) {
            item.classList.remove("main__item--active")
        }

        else {
            item.classList.add("main__item--active")
        }
    })
}