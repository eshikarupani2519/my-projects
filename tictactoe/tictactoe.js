let box1 = document.querySelector('#box-1')
let box2 = document.querySelector('#box-2')
let box3 = document.querySelector('#box-3')
let box4 = document.querySelector('#box-4')
let box5 = document.querySelector('#box-5')
let box6 = document.querySelector('#box-6')
let box7 = document.querySelector('#box-7')
let box8 = document.querySelector('#box-8')
let box9 = document.querySelector('#box-9')
let play = document.querySelector('.play')
let restart = document.querySelector('.restart')
let count = 0
let visited = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
box1.addEventListener('click', () => {
    if (count % 2 == 0) {
        box1.innerHTML = '<i class="fa-solid fa-xmark fa-5x" style="color: #B197FC;"></i>'
        visited[1] = 'x'
    }
    else {
        box1.innerHTML = '<i class="fa-solid fa-o fa-4x" style="color: #B197FC;"></i>'
        visited[1] = 'o'
    }
    count++
    if ((visited[1] == 'x' && visited[2] == 'x' && visited[3] == 'x') || (visited[1] == 'x' && visited[4] == 'x' && visited[7] == 'x') || (visited[1] == 'x' && visited[5] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[6] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[5] == 'x' && visited[7] == 'x') || (visited[7] == 'x' && visited[8] == 'x' && visited[9] == 'x') || (visited[4] == 'x' && visited[5] == 'x' && visited[6] == 'x') || (visited[2] == 'x' && visited[5] == 'x' && visited[8] == 'x')) {
        play.textContent = 'Player 1 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if ((visited[1] == 'o' && visited[2] == 'o' && visited[3] == 'o') || (visited[1] == 'o' && visited[4] == 'o' && visited[7] == 'o') || (visited[1] == 'o' && visited[5] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[6] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[5] == 'o' && visited[7] == 'o') || (visited[7] == 'o' && visited[8] == 'o' && visited[9] == 'o') || (visited[4] == 'o' && visited[5] == 'o' && visited[6] == 'o') || (visited[2] == 'o' && visited[5] == 'o' && visited[8] == 'o')) {
        play.textContent = 'Player 2 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if (count >= 9) {
        play.textContent = 'Tie!'
        restart.setAttribute('class', 'd-block'); count = 0
    }
})
box2.addEventListener('click', () => {
    if (count % 2 == 0) {
        box2.innerHTML = '<i class="fa-solid fa-xmark fa-5x" style="color: #B197FC;"></i>'
        visited[2] = 'x'
    }
    else {
        box2.innerHTML = '<i class="fa-solid fa-o fa-4x" style="color: #B197FC;"></i>'
        visited[2] = 'o'
    }
    count++
    if ((visited[1] == 'x' && visited[2] == 'x' && visited[3] == 'x') || (visited[1] == 'x' && visited[4] == 'x' && visited[7] == 'x') || (visited[1] == 'x' && visited[5] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[6] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[5] == 'x' && visited[7] == 'x') || (visited[7] == 'x' && visited[8] == 'x' && visited[9] == 'x') || (visited[4] == 'x' && visited[5] == 'x' && visited[6] == 'x') || (visited[2] == 'x' && visited[5] == 'x' && visited[8] == 'x')) {
        play.textContent = 'Player 1 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if ((visited[1] == 'o' && visited[2] == 'o' && visited[3] == 'o') || (visited[1] == 'o' && visited[4] == 'o' && visited[7] == 'o') || (visited[1] == 'o' && visited[5] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[6] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[5] == 'o' && visited[7] == 'o') || (visited[7] == 'o' && visited[8] == 'o' && visited[9] == 'o') || (visited[4] == 'o' && visited[5] == 'o' && visited[6] == 'o') || (visited[2] == 'o' && visited[5] == 'o' && visited[8] == 'o')) {
        play.textContent = 'Player 2 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if (count >= 9) {
        play.textContent = 'Tie!'
        restart.setAttribute('class', 'd-block'); count = 0
    }
})
box3.addEventListener('click', () => {
    if (count % 2 == 0) {
        box3.innerHTML = '<i class="fa-solid fa-xmark fa-5x" style="color: #B197FC;"></i>'
        visited[3] = 'x'
    }
    else {
        box3.innerHTML = '<i class="fa-solid fa-o fa-4x" style="color: #B197FC;"></i>'
        visited[3] = 'o'
    }
    count++
    if ((visited[1] == 'x' && visited[2] == 'x' && visited[3] == 'x') || (visited[1] == 'x' && visited[4] == 'x' && visited[7] == 'x') || (visited[1] == 'x' && visited[5] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[6] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[5] == 'x' && visited[7] == 'x') || (visited[7] == 'x' && visited[8] == 'x' && visited[9] == 'x') || (visited[4] == 'x' && visited[5] == 'x' && visited[6] == 'x') || (visited[2] == 'x' && visited[5] == 'x' && visited[8] == 'x')) {
        play.textContent = 'Player 1 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if ((visited[1] == 'o' && visited[2] == 'o' && visited[3] == 'o') || (visited[1] == 'o' && visited[4] == 'o' && visited[7] == 'o') || (visited[1] == 'o' && visited[5] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[6] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[5] == 'o' && visited[7] == 'o') || (visited[7] == 'o' && visited[8] == 'o' && visited[9] == 'o') || (visited[4] == 'o' && visited[5] == 'o' && visited[6] == 'o') || (visited[2] == 'o' && visited[5] == 'o' && visited[8] == 'o')) {
        play.textContent = 'Player 2 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if (count >= 9) {
        play.textContent = 'Tie!'
        restart.setAttribute('class', 'd-block'); count = 0
    }
})
box4.addEventListener('click', () => {
    if (count % 2 == 0) {
        box4.innerHTML = '<i class="fa-solid fa-xmark fa-5x" style="color: #B197FC;"></i>'
        visited[4] = 'x'
    }
    else {
        box4.innerHTML = '<i class="fa-solid fa-o fa-4x" style="color: #B197FC;"></i>'
        visited[4] = 'o'
    }
    count++
    if ((visited[1] == 'x' && visited[2] == 'x' && visited[3] == 'x') || (visited[1] == 'x' && visited[4] == 'x' && visited[7] == 'x') || (visited[1] == 'x' && visited[5] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[6] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[5] == 'x' && visited[7] == 'x') || (visited[7] == 'x' && visited[8] == 'x' && visited[9] == 'x') || (visited[4] == 'x' && visited[5] == 'x' && visited[6] == 'x') || (visited[2] == 'x' && visited[5] == 'x' && visited[8] == 'x')) {
        play.textContent = 'Player 1 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if ((visited[1] == 'o' && visited[2] == 'o' && visited[3] == 'o') || (visited[1] == 'o' && visited[4] == 'o' && visited[7] == 'o') || (visited[1] == 'o' && visited[5] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[6] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[5] == 'o' && visited[7] == 'o') || (visited[7] == 'o' && visited[8] == 'o' && visited[9] == 'o') || (visited[4] == 'o' && visited[5] == 'o' && visited[6] == 'o') || (visited[2] == 'o' && visited[5] == 'o' && visited[8] == 'o')) {
        play.textContent = 'Player 2 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if (count >= 9) {
        play.textContent = 'Tie!'
        restart.setAttribute('class', 'd-block'); count = 0
    }
})
box5.addEventListener('click', () => {
    if (count % 2 == 0) {
        visited[5] = 'x'
        box5.innerHTML = '<i class="fa-solid fa-xmark fa-5x" style="color: #B197FC;"></i>'
    }
    else {
        box5.innerHTML = '<i class="fa-solid fa-o fa-4x" style="color: #B197FC;"></i>'
        visited[5] = 'o'
    }
    count++
    if ((visited[1] == 'x' && visited[2] == 'x' && visited[3] == 'x') || (visited[1] == 'x' && visited[4] == 'x' && visited[7] == 'x') || (visited[1] == 'x' && visited[5] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[6] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[5] == 'x' && visited[7] == 'x') || (visited[7] == 'x' && visited[8] == 'x' && visited[9] == 'x') || (visited[4] == 'x' && visited[5] == 'x' && visited[6] == 'x') || (visited[2] == 'x' && visited[5] == 'x' && visited[8] == 'x')) {
        play.textContent = 'Player 1 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if ((visited[1] == 'o' && visited[2] == 'o' && visited[3] == 'o') || (visited[1] == 'o' && visited[4] == 'o' && visited[7] == 'o') || (visited[1] == 'o' && visited[5] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[6] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[5] == 'o' && visited[7] == 'o') || (visited[7] == 'o' && visited[8] == 'o' && visited[9] == 'o') || (visited[4] == 'o' && visited[5] == 'o' && visited[6] == 'o') || (visited[2] == 'o' && visited[5] == 'o' && visited[8] == 'o')) {
        play.textContent = 'Player 2 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if (count >= 9) {
        play.textContent = 'Tie!'
        restart.setAttribute('class', 'd-block'); count = 0
    }
})
box6.addEventListener('click', () => {
    if (count % 2 == 0) {
        visited[6] = 'x'
        box6.innerHTML = '<i class="fa-solid fa-xmark fa-5x" style="color: #B197FC;"></i>'
    }
    else {
        box6.innerHTML = '<i class="fa-solid fa-o fa-4x" style="color: #B197FC;"></i>'
        visited[6] = 'o'
    }
    count++
    if ((visited[1] == 'x' && visited[2] == 'x' && visited[3] == 'x') || (visited[1] == 'x' && visited[4] == 'x' && visited[7] == 'x') || (visited[1] == 'x' && visited[5] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[6] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[5] == 'x' && visited[7] == 'x') || (visited[7] == 'x' && visited[8] == 'x' && visited[9] == 'x') || (visited[4] == 'x' && visited[5] == 'x' && visited[6] == 'x') || (visited[2] == 'x' && visited[5] == 'x' && visited[8] == 'x')) {
        play.textContent = 'Player 1 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if ((visited[1] == 'o' && visited[2] == 'o' && visited[3] == 'o') || (visited[1] == 'o' && visited[4] == 'o' && visited[7] == 'o') || (visited[1] == 'o' && visited[5] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[6] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[5] == 'o' && visited[7] == 'o') || (visited[7] == 'o' && visited[8] == 'o' && visited[9] == 'o') || (visited[4] == 'o' && visited[5] == 'o' && visited[6] == 'o') || (visited[2] == 'o' && visited[5] == 'o' && visited[8] == 'o')) {
        play.textContent = 'Player 2 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if (count >= 9) {
        play.textContent = 'Tie!'
        restart.setAttribute('class', 'd-block'); count = 0
    }
})
box7.addEventListener('click', () => {
    if (count % 2 == 0) {
        visited[7] = 'x'
        box7.innerHTML = '<i class="fa-solid fa-xmark fa-5x" style="color: #B197FC;"></i>'
    }
    else {
        box7.innerHTML = '<i class="fa-solid fa-o fa-4x" style="color: #B197FC;"></i>'
        visited[7] = 'o'
    }
    count++
    if ((visited[1] == 'x' && visited[2] == 'x' && visited[3] == 'x') || (visited[1] == 'x' && visited[4] == 'x' && visited[7] == 'x') || (visited[1] == 'x' && visited[5] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[6] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[5] == 'x' && visited[7] == 'x') || (visited[7] == 'x' && visited[8] == 'x' && visited[9] == 'x') || (visited[4] == 'x' && visited[5] == 'x' && visited[6] == 'x') || (visited[2] == 'x' && visited[5] == 'x' && visited[8] == 'x')) {
        play.textContent = 'Player 1 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if ((visited[1] == 'o' && visited[2] == 'o' && visited[3] == 'o') || (visited[1] == 'o' && visited[4] == 'o' && visited[7] == 'o') || (visited[1] == 'o' && visited[5] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[6] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[5] == 'o' && visited[7] == 'o') || (visited[7] == 'o' && visited[8] == 'o' && visited[9] == 'o') || (visited[4] == 'o' && visited[5] == 'o' && visited[6] == 'o') || (visited[2] == 'o' && visited[5] == 'o' && visited[8] == 'o')) {
        play.textContent = 'Player 2 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if (count >= 9) {
        play.textContent = 'Tie!'
        restart.setAttribute('class', 'd-block'); count = 0
    }
})
box8.addEventListener('click', () => {
    if (count % 2 == 0) {
        visited[8] = 'x'
        box8.innerHTML = '<i class="fa-solid fa-xmark fa-5x" style="color: #B197FC;"></i>'
    }
    else {
        box8.innerHTML = '<i class="fa-solid fa-o fa-4x" style="color: #B197FC;"></i>'
        visited[8] = 'o'
    }
    count++
    if ((visited[1] == 'x' && visited[2] == 'x' && visited[3] == 'x') || (visited[1] == 'x' && visited[4] == 'x' && visited[7] == 'x') || (visited[1] == 'x' && visited[5] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[6] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[5] == 'x' && visited[7] == 'x') || (visited[7] == 'x' && visited[8] == 'x' && visited[9] == 'x') || (visited[4] == 'x' && visited[5] == 'x' && visited[6] == 'x') || (visited[2] == 'x' && visited[5] == 'x' && visited[8] == 'x')) {
        play.textContent = 'Player 1 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if ((visited[1] == 'o' && visited[2] == 'o' && visited[3] == 'o') || (visited[1] == 'o' && visited[4] == 'o' && visited[7] == 'o') || (visited[1] == 'o' && visited[5] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[6] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[5] == 'o' && visited[7] == 'o') || (visited[7] == 'o' && visited[8] == 'o' && visited[9] == 'o') || (visited[4] == 'o' && visited[5] == 'o' && visited[6] == 'o') || (visited[2] == 'o' && visited[5] == 'o' && visited[8] == 'o')) {
        play.textContent = 'Player 2 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if (count >= 9) {
        play.textContent = 'Tie!'
        restart.setAttribute('class', 'd-block'); count = 0
    }
})
box9.addEventListener('click', () => {
    if (count % 2 == 0) {
        visited[9] = 'x'
        box9.innerHTML = '<i class="fa-solid fa-xmark fa-5x" style="color: #B197FC;"></i>'
    }
    else {
        box9.innerHTML = '<i class="fa-solid fa-o fa-4x" style="color: #B197FC;"></i>'
        visited[9] = 'o'
    }
    count++
    if ((visited[1] == 'x' && visited[2] == 'x' && visited[3] == 'x') || (visited[1] == 'x' && visited[4] == 'x' && visited[7] == 'x') || (visited[1] == 'x' && visited[5] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[6] == 'x' && visited[9] == 'x') || (visited[3] == 'x' && visited[5] == 'x' && visited[7] == 'x') || (visited[7] == 'x' && visited[8] == 'x' && visited[9] == 'x') || (visited[4] == 'x' && visited[5] == 'x' && visited[6] == 'x') || (visited[2] == 'x' && visited[5] == 'x' && visited[8] == 'x')) {
        play.textContent = 'Player 1 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if ((visited[1] == 'o' && visited[2] == 'o' && visited[3] == 'o') || (visited[1] == 'o' && visited[4] == 'o' && visited[7] == 'o') || (visited[1] == 'o' && visited[5] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[6] == 'o' && visited[9] == 'o') || (visited[3] == 'o' && visited[5] == 'o' && visited[7] == 'o') || (visited[7] == 'o' && visited[8] == 'o' && visited[9] == 'o') || (visited[4] == 'o' && visited[5] == 'o' && visited[6] == 'o') || (visited[2] == 'o' && visited[5] == 'o' && visited[8] == 'o')) {
        play.textContent = 'Player 2 won!!'
        restart.setAttribute('class', 'd-block')
    }
    if (count >= 9) {
        play.textContent = 'Tie!'
        restart.setAttribute('class', 'd-block')
        count = 0
    }
})
restart.addEventListener('click', () => {
    box1.innerHTML = ''; box2.innerHTML = ''; box3.innerHTML = ''; box4.innerHTML = ''; box5.innerHTML = ''; box6.innerHTML = '';
    box7.innerHTML = ''; box8.innerHTML = ''; box9.innerHTML = '';
    play.textContent = ''
    count=0
    for(let elem of visited){elem=0}
    restart.setAttribute('class', 'd-none')
    
})