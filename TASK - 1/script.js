// #1-task
function func() {
    var result = document.getElementById('javob')
    var a = document.getElementById("job").value;
    if( a == 'Ishchi' || a == 'ishchi' || a == 'ISHCHI'){
        result.innerHTML = 'hello'
    } else if(a == 'director' || a == 'Director' || a == 'DIRECTOR'){
        result.innerHTML = 'Greetings'
    } else if ( a == undefined || a == null || a == ''){
        result.innerHTML = 'NO LOGIN'
    } else if ( a ){
        result.innerHTML = 'Bunday lavozim mavjud emas'
    }
}
btn.addEventListener("click", () => 
func() )  ;