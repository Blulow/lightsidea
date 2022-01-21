const input = document.getElementById('input');
const output = document.getElementById('output');
const go = document.getElementById('go');

go.onclick = () => {
    let inputArr = input.value.split(',');
    let outputArr = [];

    for(let i = 1; i < inputArr.length; i++) {
        outputArr.push(parseInt(inputArr[i])-parseInt(inputArr[0]));
    }
    
    output.innerText = outputArr.join(',');
}