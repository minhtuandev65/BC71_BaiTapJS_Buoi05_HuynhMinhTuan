function tinhTienThue() {
    var totalYearValue = parseInt(document.getElementById('totalYearInput').value.trim());
    var nguoiPhuThuocValue = parseInt(document.getElementById('nguoiPhuThuocInput').value.trim());
    var totalTienThueInput = document.getElementById('totalTienThue');
    var rate = null;
    var totalThuNhapChiuThue = totalYearValue - 4000000 - (nguoiPhuThuocValue * 1600000);

    if(totalThuNhapChiuThue <= 60000000){
        rate = 0.05;
        totalTienThueInput.value = totalThuNhapChiuThue * rate;
    }else if (totalThuNhapChiuThue > 60000000 && totalThuNhapChiuThue <= 120000000){
        rate = 0.1;
        totalTienThueInput.value = totalThuNhapChiuThue * rate;
    }else if (totalThuNhapChiuThue > 120000000 && totalThuNhapChiuThue <= 210000000){
        rate = 0.15;
        totalTienThueInput.value = totalThuNhapChiuThue * rate;
    }
    else if (totalThuNhapChiuThue > 210000000 && totalThuNhapChiuThue <= 384000000){
        rate = 0.20;
        totalTienThueInput.value = totalThuNhapChiuThue * rate;
    }
    else if (totalThuNhapChiuThue > 384000000 && totalThuNhapChiuThue <= 624000000){
        rate = 0.25;
        totalTienThueInput.value = totalThuNhapChiuThue * rate;
    }else if (totalThuNhapChiuThue > 624000000 && totalThuNhapChiuThue <= 960000000){
        rate = 0.30;
        totalTienThueInput.value = totalThuNhapChiuThue * rate;
    }else{
        rate = 0.35;
        totalTienThueInput.value = totalThuNhapChiuThue * rate;
    }
}
document.getElementById('submit').addEventListener("click", tinhTienThue);