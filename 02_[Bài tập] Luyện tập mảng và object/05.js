while(true){
    let inputChar=prompt('Nhập một mảng ký tự, các ký tự cách nhau bằng dấu cách:');
    if(inputChar===null){
        break;
    }
    if(inputChar.trim()===''){
        alert('Hãy nhập gì đó!!!');
        continue;
    }
    let charArray =inputChar.trim().split('/\s+/');
    let output=[];
    for(let i of charArray){
        if(i === '-'){
            output.push('_');
        }
        else{
            output.push(i);
        }
    }
    console.log(output);
    alert(`${output.join('')}`);
    break;
}