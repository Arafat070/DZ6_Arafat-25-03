const input = document.querySelector("input")
const plusBtn = document.querySelector(".plusBtn")
const minusBtn = document.querySelector(".minusBtn")

plusBtn.addEventListener('click', function () {
    input.value++
})
minusBtn.addEventListener('click',function () {
    input.value--
} )

