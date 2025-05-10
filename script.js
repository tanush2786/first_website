function display(data){
    let disp = document.getElementById("disp").innerHTML
    if(disp == '0'){
        document.getElementById("disp").innerHTML = data 
    }else{
        document.getElementById("disp").innerHTML += data
    }
}

function u_clear(){
    document.getElementById("disp").innerHTML = 0
}

function calculate(){
    let data = document.getElementById("disp")
    let expression = data.innerHTML
    let result = eval(expression)
    console.log(result)
    data.innerHTML = result
}

