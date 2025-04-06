while(true){
    let inputNumber = prompt('Nhập mảng gồm chữ và số bất kỳ,:');
    if (inputNumber===null){
        break;
    }
    if(inputNumber.trim()===''){
        alert('Hãy nhập gì đó!!!');
        continue;
    }
    let inputNumberArray = inputNumber.trim().split('');
    let outputNumberArray =[];
    let outputTextArray = [];
    for(let i of inputNumberArray){
        if(!isNaN(i)){
            outputNumberArray.push(i);
        }
        else{
            outputTextArray.push(i);
        }
    }
    alert(`${outputNumberArray.join(', ')}, ${outputTextArray.join(', ')}`);
    break;
}

