const input = document.querySelector(".input")
const wrapper = document.querySelector('.root')


const arr = [23 , 56 , 4 , 78 , 5 , 63 , 45 , 210 , 56]

input.addEventListener('change', event => {

   for (let i = 0; i < arr.length; i++) {
     if (arr[i] == event.target.value) {
       arr.splice(arr[i], 1);
       i--;
     }
     console.log(arr[i]);
   }
})