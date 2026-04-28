"use strict";

const elem = document.querySelector('.dark')

elem.scrollIntoView({
    behavior: 'smooth',
    block:"center",
    inline: "nearest"
})