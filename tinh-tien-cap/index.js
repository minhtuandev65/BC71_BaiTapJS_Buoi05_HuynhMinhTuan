document.addEventListener("DOMContentLoaded", function() {
    var customerIdInput = document.getElementById("customerId");
    var customerTypeSelect = document.getElementById("customerType");
    var numberConnectionInput = document.getElementById("numberConnection");
    var premiumChannelInput = document.getElementById("premiumChannel");
    var submitButton = document.getElementById("submit");

    // Nhà Dân
    // Input: customerIdInput, customerTypeSelect, premiumChannelInput
    // Process: baseCost: 4.5 + 20.5 => bao gồm phí xử lý hóa đơn và dịch vụ cơ bản,  premiumCost = premiumChannel * 7.5 => kênh cao cấp mỗi kênh = 7.5$, return baseCost + premiumCost => trả về tổng chi phí
    // Output: return baseCost + premiumCost => trả về tổng chi phí

    // Doanh Nghiệp
    // Input: customerIdInput, customerTypeSelect, numberConnectionInput, premiumChannelInput
    // Process: baseCost = 15 + 75 bao gồm phí xử lý hóa đơn và dịch vụ cơ bản, 75$ cho 10 đầu nối đầu và thêm 5$ cho mỗi đầu nối tiếp theo của phí dịch vụ cơ bản; premiumCost = premiumChannel * 50 => kênh cao cấp mỗi 50$ cho một kênh
    // Output: return baseCost + connectionCost + premiumCost => tổng chi phí
    
    // Cập nhật trạng thái của ô nhập số kết nối khi thay đổi loại khách hàng
    customerTypeSelect.addEventListener("change", function() {
        updateNumberConnectionInputState();
    });

    // Cập nhật trạng thái của ô nhập số kết nối khi trang tải
    updateNumberConnectionInputState();

    // Xử lý khi nhấn nút submit
    submitButton.addEventListener("click", function() {
        var customerIdValue = customerIdInput.value.trim();
        var customerTypeValue = customerTypeSelect.value.trim();
        var numberConnectionValue = parseInt(numberConnectionInput.value.trim(), 10) || 0;
        var premiumChannelValue = parseInt(premiumChannelInput.value.trim(), 10) || 0;

        var totalCost = calculateTotalCost(customerTypeValue, numberConnectionValue, premiumChannelValue);
        alert("Mã khách hàng: " + customerIdValue + "\n" +
              "Loại khách hàng: " + (customerTypeValue === "nhaDan" ? "Nhà Dân" : "Doanh Nghiệp") + "\n" +
              "Tổng chi phí: $" + totalCost.toFixed(2));
    });

    function updateNumberConnectionInputState() {
        if (customerTypeSelect.value === "doanhNghiep") {
            numberConnectionInput.disabled = false;
        } else {
            numberConnectionInput.disabled = true;
            numberConnectionInput.value = ""; // Xóa giá trị khi ẩn
        }
    }

    function calculateTotalCost(customerType, numberConnection, premiumChannel) {
        var baseCost, connectionCost, premiumCost;

        if (customerType === "nhaDan") {
            baseCost = 4.5 + 20.5;
            premiumCost = premiumChannel * 7.5;
            return baseCost + premiumCost;
        } else if (customerType === "doanhNghiep") {
            baseCost = 15 + 75;
            connectionCost = (numberConnection > 10) ? (numberConnection - 10) * 5 : 0;
            premiumCost = premiumChannel * 50;
            return baseCost + connectionCost + premiumCost;
        }
        return 0;
    }
});
