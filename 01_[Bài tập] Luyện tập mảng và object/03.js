while(true){
    let inputNumber = prompt('Nhập mảng số nguyên, cách nhau bằng dấu cách');
    if(inputNumber===null){
        break;
    }
    else{
        if(inputNumber.trim()===''){
            alert('Hãy nhập mảng số nguyên!!!')
        }
        else{
            let inputNumberArray=inputNumber.trim().split(/\s+/).map(Number);
            console.log(inputNumberArray);
            
            let intengerCheck = inputNumberArray.every(item =>Number.isInteger(item));
            if (intengerCheck===false){
                alert('Hãy nhập mảng chỉ gồm số nguyên!!!');
            }
            else{
                let max =inputNumberArray[0];
                let sum=0;
                for(let i of inputNumberArray ){
                    if(i > max){
                        max = i;
                    }
                    sum+= i;
                }
                sum = sum / inputNumberArray.length;
                alert(`Với mảng: ${inputNumberArray.join(', ')}: \nGiá trị lớn nhất là ${max}\n Giá trị trung bình là ${sum.toFixed(2)}`);
                break;
            }
        }
    }
}
