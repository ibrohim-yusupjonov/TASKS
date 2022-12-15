const input =document.querySelector('#input');
const btn =document.querySelector('#btn');
const result =document.querySelector('#result');



// add event

btn.addEventListener('click', (e)=>{
    if(input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})


function createDeleteElements(value){
    console.log(value)

    const li = document.createElement('li')
    li.className = 'li';
    li.textContent = value

    result.appendChild(li)
}