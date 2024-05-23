let next = document.querySelector('.n')
let prev = document.querySelector('.p')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.items')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.items')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})