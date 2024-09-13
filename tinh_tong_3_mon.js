function kiem_tra() {
    let diem_toan = +document.getElementById("diem_toan").value;
    let diem_van = +document.getElementById("diem_van").value;
    let diem_anh = +document.getElementById("diem_anh").value;
    let diemTrungBinh = diem_toan + diem_van + diem_anh / 3;
    let content = `ĐTB của bạn là ${diemTrungBinh}`;

    if (diemTrungBinh < 5) {
        content += "Không đạt"
    } else if (diemTrungBinh <= 7) {
        content += "Đạt";
    } else if (diemTrungBinh < 8) {
        content += "Khá"
    } else if (diemTrungBinh >= 8) {
        content += "Tốt"
    } else {
        content += "Xuất sắc"
    }
    document.getElementById("result").innerHTML = content;
}