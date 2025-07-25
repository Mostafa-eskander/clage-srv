// header
let lists = document.querySelectorAll('.list a');

lists.forEach(element => {
    element.onclick = function () {
        lists.forEach(function (ele) {
            ele.classList.remove('active');
        });
        this.classList.add('active');
    };
});

let list = document.querySelector('.list');

function openList() {
    list.classList.add('active');
}
function closeList() {
    list.classList.remove('active');
}

// footer
let toTop = document.querySelector('.to_top');

window.onscroll = function () {
    let value = scrollY;
    if(value >= 112) {
        toTop.style.display = "flex";
    }else {
        toTop.style.display = "none";
    }
};

toTop.onclick = function () {
    window.scrollTo(0,0)
}