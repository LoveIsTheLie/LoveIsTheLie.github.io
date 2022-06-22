// 延遲消失毫秒
let delay = 1000;

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        let target = document.querySelector('.loading');
        setTimeout(() => {
            target.classList.add('d-none')
        }, delay);
    }
}