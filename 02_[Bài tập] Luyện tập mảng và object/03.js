while(true){
    let inputString = prompt('Nhập bất kỳ cái gì!');
    if (inputString===null){
        break;
    }
    alert(` Chuỗi "${inputString}" có tất cả ${inputString.length} ký tự bao gồm cả khoảng trống!`);
    break;
}