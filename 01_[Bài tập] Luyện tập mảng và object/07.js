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
            let inputNumberArray = inputNumber.trim();
            inputNumberArray = inputNumber.trim().split(/\s+/).map(Number);
            if(inputNumberArray.length!==10){
                alert('Hãy nhập đúng 10 phần tử số nguyên!!!');
            }
            else{
                let intengerCheck = inputNumberArray.every(item=>Number.isInteger(item));
                if(!intengerCheck){
                    alert('Hãy nhập chỉ gồm số nguyên!!!');
                }
                else{
                    inputNumberArray.sort((a, b) => b - a);
                    console.log(inputNumberArray);
                    alert(`Mảng sau khi sắp xếp là ${inputNumberArray}`);
                    break;
            
                }
            }
           
        }
    }
}

