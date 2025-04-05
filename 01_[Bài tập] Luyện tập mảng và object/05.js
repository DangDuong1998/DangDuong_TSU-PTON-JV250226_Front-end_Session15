while(true){
    let inputNumber = prompt('Nhập một chuỗi số ');
    if(inputNumber===null){
        break;
    }
    else{
        if(inputNumber.trim()===''){
            alert('Hãy nhập gì đó!!!');
        }
        else{
            let negativeArray = [];
            let inputNumberArray=inputNumber.trim().split(/\s+/).map(Number);
            if(inputNumberArray.some(item => isNaN(item))===true){
                alert('Hãy chỉ nhập số!!!');
            }
            else{
                for(let i of inputNumberArray){
                    if(i<0 && i%1===0){
                        negativeArray.push(i);    
                    }
                }
                alert(`Trong dã số đã nhập ${inputNumberArray.join(', ')}\nCó ${negativeArray.length} số nguyên âm gồm: ${negativeArray.join(', ')} !!!`);
                break;
            }
            
        }
    }
}

 