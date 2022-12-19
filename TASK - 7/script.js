
    let ism = document.getElementById('ism').value;
    let yosh =  document.getElementById('yosh').value;
    let result = document.getElementById('result');
    function func(evt){
        if(ism.length<= 32 && ism.length >= 3)  {
            result.textcontent = ism.target.value[ 0 ] 
        }
        if(yosh>= 0 && yosh <=150){
            result.textcontent =  yosh.target.value[ 1 ] 
        }
    }

btn.addEventListener("click", (evt) => 
func(evt) )  ;