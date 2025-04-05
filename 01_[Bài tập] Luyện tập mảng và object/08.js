while (true) {
    let inputNumberA = prompt('Nhập vào mảng số nguyên A ngăn cách nhau bằng dấu cách');
    let inputNumberB = prompt('Nhập vào mảng số nguyên B ngăn cách nhau bằng dấu cách');
    if (inputNumberA === null || inputNumberB === null) break;
    if (inputNumberA.trim() === '' || inputNumberB.trim() === '') {
        alert('Hãy nhập đầy đủ cả hai mảng số nguyên!');
        continue;
    }
    inputNumberA.trim();
    inputNumberB.trim();
    let inputNumberArrayA = inputNumberA.trim().split(/\s+/).map(Number);
    let inputNumberArrayB = inputNumberB.trim().split(/\s+/).map(Number);

    if (inputNumberArrayA.length !== 10 || inputNumberArrayB.length !== 10) {
        alert('Mỗi mảng phải có đúng 10 phần tử số nguyên!');
        continue;
    }

    let isIntegerA = inputNumberArrayA.every(item => Number.isInteger(item));
    let isIntegerB = inputNumberArrayB.every(item => Number.isInteger(item));

    if (!isIntegerA || !isIntegerB) {
        alert('Cả hai mảng phải chỉ chứa số nguyên!');
        continue;
    }
    
    console.log(inputNumberArrayA);
    console.log(inputNumberArrayB);
    let inputNumberArrayC = inputNumberArrayA +','+ inputNumberArrayB;
    console.log(inputNumberArrayC);
    alert(` Mảng C là: ${inputNumberArrayC}`);
    break;
}
