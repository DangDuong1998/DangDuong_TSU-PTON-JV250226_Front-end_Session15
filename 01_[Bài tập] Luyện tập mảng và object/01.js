while(true){
    let inputNumber = prompt('Nhập vào 1 mảng số nguyên 10 phần tử, cách nhau bằng dấu cách:');
    if(inputNumber===null){
        break;
    }
    else if(inputNumber===''){
        alert('Hãy nhập đủ 10 phần tử!!!');
    }
    else{
        let inputNumberAray = inputNumber.split(/\s+/).map(item => Number(item.trim()));
        console.log(inputNumberAray);
        if(inputNumberAray.length<10 || inputNumberAray.length>10){
            alert('Hãy nhập đủ 10 phần tử!!!');
        }
        else{
            let flag=true;
            for(let i of inputNumberAray){
                if(i % 1 !== 0){
                    alert('Hãy chỉ nhập số nguyên!!!');
                    flag=false;
                    break;
                }
            }
            if (flag===true){
                let filterArray=[];
                let string='';
                for(let i in inputNumberAray){
                    if (inputNumberAray[i]>=10){
                        filterArray.push(inputNumberAray[i]);
                    }
                }
                string=filterArray.join(', ');
                alert(`Có tất cả ${filterArray.length} số nguyên lớn hơn hoặc bằng 10 bao gồm các số sau: ${string}`);
                break;
            }
        }
    }
    
}
