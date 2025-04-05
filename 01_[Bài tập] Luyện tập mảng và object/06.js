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
                    let findX = parseFloat(prompt('Nhập 1 số để tìm kiếm'));
                    let flag=false;
                    for (i of inputNumberArray){
                      if(i===findX){
                        flag=true;
                      }  
                    }
                    if(flag===true){
                        alert(`Số ${findX} cần tìm thuộc mảng số nguyên ${inputNumberArray.join(', ')}`);
                        break;
                    }
                    else{
                        alert(`Số ${findX} cần tìm không nằm trong mảng số nguyên ${inputNumberArray.join(', ')}`);
                        break;
                    }
                }
            }
           
        }
    }
}

