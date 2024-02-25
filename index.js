var flag = false;
const btnBlock = document.getElementById('block');
const redBlock = document.getElementById('block1');
const yellowBlock = document.getElementById('block2');
const greenBlock = document.getElementById('block3');
btnBlock.onclick = function(){
    btnBlock.innerText = flag ? 'OFF' : 'ON';
    flag = !flag;
    if(!flag){
        redBlock.style.backgroundColor='white';
        yellowBlock.style.backgroundColor='white';
        greenBlock.style.backgroundColor='white';
    }
}
redBlock.onclick = function(){
    if(flag){
        redBlock.style.backgroundColor= 'red';
        yellowBlock.style.backgroundColor='white';
        greenBlock.style.backgroundColor='white';          
    }
}
yellowBlock.onclick = function(){
    if(flag){
        yellowBlock.style.backgroundColor= 'yellow';
        redBlock.style.backgroundColor='white';
        greenBlock.style.backgroundColor='white';          
    }
}
greenBlock.onclick = function(){
    if(flag){
        greenBlock.style.backgroundColor= 'green';
        redBlock.style.backgroundColor='white';
        yellowBlock.style.backgroundColor='white';           
    }
}