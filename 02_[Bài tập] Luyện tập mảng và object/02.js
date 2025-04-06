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
    for(let i of inputNumberArray){
        if(!isNaN(i)&& i.trim()!==''){
            outputNumberArray.push(i);
        }
    }
    alert(`${outputNumberArray.join(', ')}`);
    break;
}

