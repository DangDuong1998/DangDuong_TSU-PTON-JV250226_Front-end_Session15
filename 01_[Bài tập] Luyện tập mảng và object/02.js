while(true){
    let inputNumber=prompt('Nhập mảng số nguyên gồm 10 phần tử khác nhau, mỗi phần tử cách nhau dấu cách:');
    if(inputNumber===null){
        break;
    }
    else if(inputNumber==='' ){
        alert('Hãy nhập đủ 10 phần tử!!!');
    }
    else{
        let inputNumberArray= inputNumber.trim().split(/\s+/).map(Number);
        if(inputNumberArray.length!== 10){
            alert('Hãy nhập đúng 10 phần tử!!!')
        }
        else{
            let intengerCheck = inputNumberArray.every(item=>Number.isInteger(item));
            if(!intengerCheck){
                alert('Hãy chỉ nhập số nguyên!!!');
            }
            else{
                let duplicateArray = new Set(inputNumberArray);
                if(duplicateArray.size<inputNumberArray.length){
                    console.log(duplicateArray);
                    console.log(inputNumberArray);
                    alert('Các phần tử không được trùng nhau!!!');
                }
                else{
                    let max=inputNumberArray[0];
                    let position=0;
                    for( let i in inputNumberArray){
                        if (inputNumberArray[i] > max){
                            position=i;
                            max = inputNumberArray[i];
                        }
                    }
                    alert(`Phần tử ${max} nằm tại vị trí ${Number(position)+1} của mảng ${ inputNumberArray.join(', ')}  là phần tử có giá trị lớn nhất`);
                    break;
                }
            }
            

        }
        
    }
}