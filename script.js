let buttonNumbers = document.getElementById('num').value;

function display(){
    for(let buttonNumber of buttonNumbers){
        document.getElementById('love').innerHTML=`${buttonNumber}`
        
    }
}

console.log(buttonNumbers)