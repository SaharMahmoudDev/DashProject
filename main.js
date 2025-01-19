"use strict"

document.addEventListener('DOMContentLoaded', () => {
    // header
    increaseWidthOfSrearchInput();
    // sidebar
    addActiveClassInSidebar();
    // settings page
    addActiveClassInMackupSettings();
})

// increase width of input element when focus
function increaseWidthOfSrearchInput() {
    let searchInput = document.querySelector('.section .head form [type="search"]');
    searchInput.addEventListener('input', () => {
        searchInput.classList.add('increaseWidth');
        if (searchInput.value == 0) {
            searchInput.classList.remove('increaseWidth');
        }
    })
}

// add class active on element in sidebar
function addActiveClassInSidebar() {
    let allElementInSide = document.querySelectorAll('.section .sidebar a');
    allElementInSide.forEach(element => {
        if (element.href == window.location.href) {
            element.classList.add('active');
        }
    })
}

// add class active on element in settings page in section mackup manager
function addActiveClassInMackupSettings() {
    let allElementInMackupSettings = document.querySelectorAll('.container .mackup .box .cont-box');
    allElementInMackupSettings.forEach(element => {
        element.addEventListener('click', () => {
            allElementInMackupSettings.forEach(element => {
                element.classList.remove('active');
            })
            element.classList.add('active');
        })
    })
}