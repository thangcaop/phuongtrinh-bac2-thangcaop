// index.js

// Hàm giải phương trình bậc 2
function solveQuadraticEquation(a, b, c) {
  // Tính delta
  const delta = b * b - 4 * a * c;

  if (delta < 0) {
    return 'Phương trình không có nghiệm thực.';
  } else if (delta === 0) {
    const x = -b / (2 * a);
    return `Phương trình có nghiệm kép: x = ${x}`;
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `Phương trình có hai nghiệm: x1 = ${x1}, x2 = ${x2}`;
  }
}

// Nhận giá trị từ dòng lệnh
const args = process.argv.slice(2);
const a = parseFloat(args[0]);
const b = parseFloat(args[1]);
const c = parseFloat(args[2]);

// Kiểm tra xem đầu vào có hợp lệ không
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log('Vui lòng nhập hệ số a, b và c là các số hợp lệ.');
} else {
  // Giải phương trình và hiển thị kết quả
  const result = solveQuadraticEquation(a, b, c);
  console.log(result);
}
