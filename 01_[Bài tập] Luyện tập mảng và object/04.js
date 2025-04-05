while(true){
    let inputNumber = prompt('Nhập vào mảng số nguyên ngăn cách nhau bằng dấu cách');
    if(inputNumber===null){
        break;
    }
    else{
        if(inputNumber.trim()===''){
            alert('Hãy nhập gì đó!!!');
        }
        else{
            let inputNumberArray = inputNumber.trim().split(/\s+/).map(Number);
            let intengerCheck = inputNumberArray.every(item=>Number.isInteger(item));
            if(!intengerCheck){
                alert('Hãy nhập chỉ gồm số nguyên!!!');
            }
            else{
                let reverseNumberArray = inputNumberArray.reverse().join(', ');
                alert(`Dãy sau khi đảo ngược là ${reverseNumberArray}`);
                break;
            }
        }
    }
}

