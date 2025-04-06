while(true){
    let inputStringA = prompt('Nhập chuỗi A:');
    let inputStringB = prompt('Nhập chuỗi B:');
    if(inputStringA === null && inputStringB === null){
        break;
    }
    if(inputStringA.trim()=== '' && inputStringB === ''){
        alert('Hãy nhập gì đó!!!');
        continue;
    }
    if(inputStringA===inputStringB){
        alert('Hai chuỗi đã nhập là hai chuỗi giống nhau!!!');
        break;
    }
    else{
        alert('Hai chuỗi đã nhập là hai chuỗi khác nhau!!!');
        break;
    }
}
