document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitAdmissionApplication');
    const checkButton = document.getElementById('checkAdmissionResults');
    const formModal = document.getElementById('myModal');
    const formCheckAdmission = document.getElementById("formContainercheckAdmission");
    const subjectCombinationForm = document.getElementById("subjectCombinationForm");
    const admissionApplicationForm = document.getElementById('formContaineradmissionApplication');
    const closeFormModal = document.getElementById("closeFormModal");
    const closeModalButton = formModal.querySelector('.close');
    const closeAppButtonForm = document.getElementById('closeAppForm');
    const closeCheckButtonForm = document.getElementById("closeCheckForm");
    // Lấy danh sách các fullName đã lưu từ Session Storage (nếu có)
    let storedFullNames = JSON.parse(sessionStorage.getItem('submittedFullNames')) || [];
    // Lấy danh sách điểm môn 1 đã lưu từ Session Storage (nếu có)
    let storedSubjectScores1 = JSON.parse(sessionStorage.getItem('submittedSubjectScores1')) || [];
    // Lấy danh sách điểm môn 2 đã lưu từ Session Storage (nếu có)
    let storedSubjectScores2 = JSON.parse(sessionStorage.getItem('submittedSubjectScores2')) || [];
    // Lấy danh sách điểm môn 3 đã lưu từ Session Storage (nếu có)
    let storedSubjectScores3 = JSON.parse(sessionStorage.getItem('submittedSubjectScores3')) || [];
    // Lấy danh sách điểm khu vực ưu tiên đã lưu từ Session Storage (nếu có)
    let storedPriorityArea = JSON.parse(sessionStorage.getItem('submittedPriorityArea')) || [];
    // Lấy danh sách điểm đối tượng ưu tiên đã lưu từ Session Storage (nếu có)
    let storedPriorityGroup = JSON.parse(sessionStorage.getItem('submittedPriorityGroup')) || [];
    // Lấy danh sách địa chỉ nhà đã lưu từ Session Storage (nếu có)
    let storedHomeAddress = JSON.parse(sessionStorage.getItem('submittedHomeAddress')) || [];
    // Lấy danh sách địa chỉ Email đã lưu từ Session Storage (nếu có)
    let storedEmail = JSON.parse(sessionStorage.getItem('submittedEmail')) || [];
    // Lấy danh sách số điện thoại đã lưu từ Session Storage (nếu có)
    let storedPhoneNumber = JSON.parse(sessionStorage.getItem('submittedPhoneNumber')) || [];
  
  
    // Form nộp hồ sơ
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      formModal.style.display = 'block';
      formCheckAdmission.style.display = 'none';
    });
  
    closeFormModal.addEventListener("click", () => {
      formModal.style.display = 'none';
    });
  
    closeModalButton.addEventListener('click', () => {
      formModal.style.display = 'none';
    });
  
    closeAppButtonForm.addEventListener('click', () => {
      admissionApplicationForm.style.display = "none";
    });
  
  
    let selectedOption;
    let selectedOptionValue;
    let storedSelectedOption = JSON.parse(sessionStorage.getItem('submittedSelectedOption')) || [];
  
    // Hàm kiểm tra đã chọn tổ hợp môn hay chưa
    subjectCombinationForm.addEventListener("click", (e) => {
      e.preventDefault();
      selectedOption = document.querySelector('input[type="radio"]:checked');
  
      if (!selectedOption) {
        document.getElementById('modal-tb').innerText = "Vui lòng chọn tổ hợp môn.";
        document.getElementById('modal-tb').style.color = 'red';
      } else {
        admissionApplicationForm.style.display = "block";
        formModal.style.display = 'none';
        formCheckAdmission.style.display = 'none';
  
        var selectFormApp = selectedOption.value;
        selectedOptionValue = selectFormApp;
        var tbPoint1 = '<span id="point1-tb">*</span>';
        var tbPoint2 = '<span id="point2-tb">*</span>';
        var tbPoint3 = '<span id="point3-tb">*</span>';
        switch (selectFormApp) {
          case "A00": {
            document.getElementById("point1").innerHTML = "Điểm Môn Toán " + tbPoint1;
            document.getElementById("point2").innerHTML = "Điểm Môn Vật Lý " + tbPoint2;
            document.getElementById("point3").innerHTML = "Điểm Môn Hóa Học " + tbPoint3;
            break;
          }
          case "B00": {
            document.getElementById("point1").innerHTML = "Điểm Môn Toán " + tbPoint1;
            document.getElementById("point2").innerHTML = "Điểm Môn Sinh Học " + tbPoint2;
            document.getElementById("point3").innerHTML = "Điểm Môn Hóa Học " + tbPoint3;
            break;
          }
          case "C00": {
            document.getElementById("point1").innerHTML = "Điểm Môn Ngữ Văn " + tbPoint1;
            document.getElementById("point2").innerHTML = "Điểm Môn Lịch Sử " + tbPoint2;
            document.getElementById("point3").innerHTML = "Điểm Môn Địa Lý " + tbPoint3;
            break;
          }
          default: {
            document.getElementById("point1").innerHTML = "Điểm Môn Ngữ Văn " + tbPoint1;
            document.getElementById("point2").innerHTML = "Điểm Môn Toán Học " + tbPoint2;
            document.getElementById("point3").innerHTML = "Điểm Môn Anh Văn " + tbPoint3;
            break;
          }
        }
      }
    });
  
  
    // Các biến người dùng nhập vào từ form nộp hồ sơ Full Name
    const fullNameInput = document.getElementById("fullName");
    const fullNameError = document.getElementById("fullName-tb");
    // Điểm môn 1
    const subjectScores1Input = document.getElementById("subjectScores1");
    const subjectScores1Error = document.getElementById("point1-tb");
    // Điểm môn 2
    const subjectScores2Input = document.getElementById("subjectScores2");
    const subjectScores2Error = document.getElementById("point2-tb");
    // Điểm môn 3
    const subjectScores3Input = document.getElementById("subjectScores3");
    const subjectScores3Error = document.getElementById("point3-tb");
    // Điểm khu vực ưu tiên
    const priorityAreaInput = document.getElementById("priorityArea");
    const priorityAreaError = document.getElementById("priorityArea-tb");
    // Điểm đối tượng ưu tiên
    const priorityGroupInput = document.getElementById("priorityGroup");
    const priorityGroupError = document.getElementById("priorityGroup-tb");
    // Địa chỉ nhà
    const homeAddressInput = document.getElementById("homeAddress");
    const homeAddressError = document.getElementById("homeAddress-tb");
    // Địa chỉ Email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-tb");
    // Số điện thoại
    const phoneNumberInput = document.getElementById("phoneNumber");
    const phoneNumberError = document.getElementById("phoneNumber-tb");
    // Giá trị Full Name
    const fullNameValue = fullNameInput.value.trim();
    // Giá trị môn 1
    const subjectScores1Value = parseFloat(subjectScores1Input.value.trim());
    // Giá trị môn 2
    const subjectScores2Value = parseFloat(subjectScores2Input.value.trim());
    // Giá trị môn 3
    const subjectScores3Value = parseFloat(subjectScores3Input.value.trim());
    // Giá trị khu vực ưu tiên
    const priorityAreaValue = priorityAreaInput.value.trim();
    // Giá trị đối tượng ưu tiên
    const priorityGroupValue = parseInt(priorityGroupInput.value.trim());
    // Giá trị địa chỉ nhà
    const homeAddressValue = homeAddressInput.value.trim();
    // Giá trị địa chỉ email
    const emailValue = emailInput.value.trim();
    // Giá trị số điện thoại
    const phoneNumberValue = phoneNumberInput.value.trim();
    const formApplication = document.getElementById('submitApplication');
    formApplication.addEventListener('submit', (e) => {
      e.preventDefault();
  
  
      storedSelectedOption.push(selectedOptionValue);
      sessionStorage.setItem("submittedSelectedOption", JSON.stringify(storedSelectedOption));
  
      if (checkFullName(fullNameValue)) {
        // Lưu giá trị fullName vào mảng storedFullNames
        storedFullNames.push(fullNameValue);
        // Lưu lại mảng storedFullNames vào Session Storage
        sessionStorage.setItem('submittedFullNames', JSON.stringify(storedFullNames));
      }
      if (checkSubjectScores1(subjectScores1Value)) {
        storedSubjectScores1.push(subjectScores1Value);
        sessionStorage.setItem('submittedSubjectScores1', JSON.stringify(storedSubjectScores1));
      }
      if (checkSubjectScores2(subjectScores2Value)) {
        storedSubjectScores2.push(subjectScores2Value);
        sessionStorage.setItem('submittedSubjectScores2', JSON.stringify(storedSubjectScores2));
      }
      if (checkSubjectScores3(subjectScores3Value)) {
        storedSubjectScores3.push(subjectScores3Value);
        sessionStorage.setItem('submittedSubjectScores3', JSON.stringify(storedSubjectScores3));
      }
      if (checkpriorityArea(priorityAreaValue)) {
        storedPriorityArea.push(priorityAreaValue);
        sessionStorage.setItem("submittedPriorityArea", JSON.stringify(storedPriorityArea));
      }
      if (checkpriorityGroup(priorityGroupValue)) {
        storedPriorityGroup.push(priorityGroupValue);
        sessionStorage.setItem("submittedPriorityGroup", JSON.stringify(storedPriorityGroup));
      }
      if (checkEmail(emailValue)) {
        storedEmail.push(emailValue);
        sessionStorage.setItem("submittedEmail", JSON.stringify(storedEmail));
      }
      if (checkAddress(homeAddressValue)) {
        storedHomeAddress.push(homeAddressValue);
        sessionStorage.setItem("submittedHomeAddress", JSON.stringify(storedHomeAddress));
      }
      if (checkPhoneNumber(phoneNumberValue)) {
        storedPhoneNumber.push(phoneNumberValue);
        sessionStorage.setItem("submittedPhoneNumber", JSON.stringify(storedPhoneNumber));
      }
  
      if (checkFullName(fullNameValue) || checkSubjectScores1(subjectScores1Value) || checkSubjectScores2(subjectScores2Value) || checkSubjectScores3(subjectScores3Value) || checkpriorityArea(priorityAreaValue) || checkpriorityGroup(priorityGroupValue) || checkEmail(emailValue) || checkAddress(homeAddressValue) || checkPhoneNumber(phoneNumberValue)) {
        admissionApplicationForm.style.display = "none";
        formApplication.reset();
      }
    });
    // Kiểm tra Full Name khi người dùng nhập liệu
    fullNameInput.addEventListener('input', () => {
      const fullNameValue = fullNameInput.value.trim();
  
      if (!checkFullName(fullNameValue)) {
        fullNameError.innerHTML = "* Họ Tên Phải là Chữ cái đầu viết hoa và có khoảng trắng!";
        fullNameError.style.color = "red";
      } else {
        fullNameError.innerHTML = ""; // Xóa thông báo lỗi
      }
    });
    // Kiểm tra Full Name khi người dùng click ra khỏi ô nhập liệu
    fullNameInput.addEventListener('blur', () => {
      const fullNameValue = fullNameInput.value.trim();
  
      if (!checkFullName(fullNameValue)) {
        fullNameError.innerHTML = "* Họ Tên Phải là Chữ cái đầu viết hoa và có khoảng trắng!";
        fullNameError.style.color = "red";
      }
    });
    // Làm mới giá trị Full Name khi người dùng click vào ô nhập liệu
    fullNameInput.addEventListener('focus', () => {
      const fullNameValue = fullNameInput.value.trim();
      if (!checkFullName(fullNameValue)) {
        fullNameInput.value = ""; // Làm mới giá trị
        fullNameError.innerHTML = " *"; // Xóa thông báo lỗi
        fullNameError.style.color = "black"
      }
    });
    // Hàm kiểm tra họ tên
    function checkFullName(fullNameValue) {
      const fullNamePattern = /^[A-ZĐÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?: [A-ZĐÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/;
      return fullNamePattern.test(fullNameValue);
    }
  
    // Kiểm tra điểm môn 1 khi người dùng nhập liệu
    subjectScores1Input.addEventListener('input', () => {
      const subjectScores1Value = parseFloat(subjectScores1Input.value.trim());
  
      if (isNaN(subjectScores1Value) || !checkSubjectScores1(subjectScores1Value)) {
        subjectScores1Error.innerHTML = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
        subjectScores1Error.style.color = "red";
      } else {
        subjectScores1Error.innerHTML = ""; // Xóa thông báo lỗi
      }
    });
    // Kiểm tra điểm môn 1 khi người dùng click ra khỏi ô nhập liệu
    subjectScores1Input.addEventListener('blur', () => {
      const subjectScores1Value = parseFloat(subjectScores1Input.value.trim());
  
      if (isNaN(subjectScores1Value) || !checkSubjectScores1(subjectScores1Value)) {
        subjectScores1Error.innerHTML = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
        subjectScores1Error.style.color = "red";
      }
    });
    // Làm mới giá trị điểm môn 1 khi người dùng click vào ô nhập liệu
    subjectScores1Input.addEventListener('focus', () => {
      const subjectScores1Value = parseFloat(subjectScores1Input.value.trim());
      if (isNaN(subjectScores1Value) || !checkSubjectScores1(subjectScores1Value)) {
        subjectScores1Input.value = ""; // Làm mới giá trị
        subjectScores1Error.innerHTML = " *"; // Xóa thông báo lỗi
        subjectScores1Error.style.color = "black"
      }
    });
  
    // Hàm kiểm tra điểm môn 1
    function checkSubjectScores1(subjectScores1Value) {
      const score = parseFloat(subjectScores1Value);
      if (isNaN(score) || score < 0 || score > 10) {
        return false;
      }
      return true;
    };
  
    // Kiểm tra điểm môn 2 khi người dùng nhập liệu
    subjectScores2Input.addEventListener('input', () => {
      const subjectScores2Value = parseFloat(subjectScores2Input.value.trim());
  
      if (isNaN(subjectScores2Value) || !checkSubjectScores2(subjectScores2Value)) {
        subjectScores2Error.innerHTML = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
        subjectScores2Error.style.color = "red";
      } else {
        subjectScores2Error.innerHTML = ""; // Xóa thông báo lỗi
      }
    });
    // Kiểm tra điểm môn 2 khi người dùng click ra khỏi ô nhập liệu
    subjectScores2Input.addEventListener('blur', () => {
      const subjectScores2Value = parseFloat(subjectScores2Input.value.trim());
  
      if (isNaN(subjectScores2Value) || !checkSubjectScores2(subjectScores2Value)) {
        subjectScores2Error.innerHTML = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
        subjectScores2Error.style.color = "red";
      }
    });
    // Làm mới giá trị điểm môn 2 khi người dùng click vào ô nhập liệu
    subjectScores2Input.addEventListener('focus', () => {
      const subjectScores2Value = parseFloat(subjectScores2Input.value.trim());
      if (isNaN(subjectScores2Value) || !checkSubjectScores2(subjectScores2Value)) {
        subjectScores2Input.value = ""; // Làm mới giá trị
        subjectScores2Error.innerHTML = " *"; // Xóa thông báo lỗi
        subjectScores2Error.style.color = "black"
      }
    });
  
    // Hàm kiểm tra điểm môn 2
    function checkSubjectScores2(subjectScores2Value) {
      const score2 = parseFloat(subjectScores2Value);
      if (isNaN(score2) || score2 < 0 || score2 > 10) {
        return false;
      }
      return true;
    };
  
    // Kiểm tra điểm môn 3 khi người dùng nhập liệu
    subjectScores3Input.addEventListener('input', () => {
      const subjectScores3Value = parseFloat(subjectScores3Input.value.trim());
  
      if (isNaN(subjectScores3Value) || !checkSubjectScores3(subjectScores3Value)) {
        subjectScores3Error.innerHTML = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
        subjectScores3Error.style.color = "red";
      } else {
        subjectScores3Error.innerHTML = ""; // Xóa thông báo lỗi
      }
    });
    // Kiểm tra điểm môn 3 khi người dùng click ra khỏi ô nhập liệu
    subjectScores3Input.addEventListener('blur', () => {
      const subjectScores3Value = parseFloat(subjectScores3Input.value.trim());
  
      if (isNaN(subjectScores3Value) || !checkSubjectScores3(subjectScores3Value)) {
        subjectScores3Error.innerHTML = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
        subjectScores3Error.style.color = "red";
      }
    });
    // Làm mới giá trị điểm môn 3 khi người dùng click vào ô nhập liệu
    subjectScores3Input.addEventListener('focus', () => {
      const subjectScores3Value = parseFloat(subjectScores3Input.value.trim());
      if (isNaN(subjectScores3Value) || !checkSubjectScores3(subjectScores3Value)) {
        subjectScores3Input.value = ""; // Làm mới giá trị
        subjectScores3Error.innerHTML = " *"; // Xóa thông báo lỗi
        subjectScores3Error.style.color = "black"
      }
    });
  
    // Hàm kiểm tra điểm môn 3
    function checkSubjectScores3(subjectScores3Value) {
      const score3 = parseFloat(subjectScores3Value);
      if (isNaN(score3) || score3 < 0 || score3 > 10) {
        return false;
      }
      return true;
    };
  
  
    // Kiểm tra khu vực ưu tiên khi người dùng nhập liệu
    let priorityAreaScore = 0;
    priorityAreaInput.addEventListener('input', () => {
      const priorityAreaValue = priorityAreaInput.value.trim();
  
      if (!checkpriorityArea(priorityAreaValue)) {
        priorityAreaError.innerHTML = "* Khu vực ưu tiên phải là A, B, C và X !";
        priorityAreaError.style.color = "red";
        priorityAreaScore = 0;
      } else {
        priorityAreaError.innerHTML = ""; // Xóa thông báo lỗi
      }
    });
    // Kiểm tra khu vực ưu tiên khi người dùng click ra khỏi ô nhập liệu
    priorityAreaInput.addEventListener('blur', () => {
      const priorityAreaValue = priorityAreaInput.value.trim();
  
      if (!checkpriorityArea(priorityAreaValue)) {
        priorityAreaError.innerHTML = "* Khu vực ưu tiên phải là A, B, C và X !";
        priorityAreaError.style.color = "red";
        priorityAreaScore = 0;
      }
    });
    // Làm mới giá trị khu vực ưu tiên khi người dùng click vào ô nhập liệu
    priorityAreaInput.addEventListener('focus', () => {
      const priorityAreaValue = priorityAreaInput.value.trim();
      if (!checkpriorityArea(priorityAreaValue)) {
        priorityAreaInput.value = ""; // Làm mới giá trị
        priorityAreaInput.innerHTML = " *"; // Xóa thông báo lỗi
        priorityAreaInput.style.color = "black"
        priorityAreaScore = 0;
      }
    });
    // Hàm Kiểm Tra ký tự khu vực ưu tiên
    function checkpriorityArea(priorityAreaValue) {
      const validCharacters = /^[ABCX]$/
      return validCharacters.test(priorityAreaValue);
    };
    // Hàm chuyển đổi khu vực ưu tiên thành điểm
    function convertPriorityAreaToScore(priorityAreaValue) {
      switch (priorityAreaValue) {
        case 'A':
          return 2;
          break;
        case 'B':
          return 1;
          break;
        case 'C':
          return 0.5;
          break;
        case 'X':
          return 0;
          break;
        default:
          return 0;
          break;
      }
    }
    // Hàm kiểm tra  đối tưởng ưu tiên
    // Kiểm tra đối tưởng ưu tiên khi người dùng nhập liệu
    let priorityGroupScore = 0;
    priorityGroupInput.addEventListener('input', () => {
      const priorityGroupValue = priorityGroupInput.value.trim();
  
      if (!checkpriorityGroup(priorityGroupValue)) {
        priorityGroupError.innerHTML = "* Đối tượng ưu tiên phải là 0, 1, 2 và 3 !";
        priorityGroupError.style.color = "red";
        priorityGroupScore = 0;
      } else {
        priorityGroupError.innerHTML = ""; // Xóa thông báo lỗi
      }
    });
    // Kiểm tra đối tưởng ưu tiên khi người dùng click ra khỏi ô nhập liệu
    priorityGroupInput.addEventListener('blur', () => {
      const priorityGroupValue = priorityGroupInput.value.trim();
  
      if (!checkpriorityGroup(priorityGroupValue)) {
        priorityGroupError.innerHTML = "* Đối tượng ưu tiên phải là 0, 1, 2 và 3 !";
        priorityGroupError.style.color = "red";
        priorityGroupScore = 0;
      }
    });
    // Làm mới giá trị đối tưởng ưu tiên khi người dùng click vào ô nhập liệu
    priorityGroupInput.addEventListener('focus', () => {
      const priorityGroupValue = priorityGroupInput.value.trim();
      if (!checkpriorityGroup(priorityGroupValue)) {
        priorityGroupInput.value = ""; // Làm mới giá trị
        priorityGroupInput.innerHTML = " *"; // Xóa thông báo lỗi
        priorityGroupInput.style.color = "black"
        priorityGroupScore = 0;
      }
    });
    // Hàm Kiểm Tra ký tự đối tưởng ưu tiên
    function checkpriorityGroup(priorityGroupValue) {
      const validCharacters = /^[0123]$/
      return validCharacters.test(priorityGroupValue);
    };
    // Hàm chuyển đổi đối tưởng ưu tiên thành điểm
    function convertPriorityGroupToScore(priorityGroupValue) {
      switch (priorityGroupValue) {
        case '1':
          return 2.5;
          break;
        case '2':
          return 1.5;
          break;
        case '3':
          return 1;
          break;
        case '0':
          return 0;
          break;
        default:
          return 0;
          break;
      }
    }
  
    // Kiểm tra email khi người dùng nhập liệu
    emailInput.addEventListener('input', () => {
      const emailValue = emailInput.value.trim();
  
      if (!checkEmail(emailValue)) {
        emailError.innerHTML = "* email phải là nguyenvana@gmail.com !";
        emailError.style.color = "red";
      } else {
        emailError.innerHTML = ""; // Xóa thông báo lỗi
      }
    });
    // Kiểm tra email khi người dùng click ra khỏi ô nhập liệu
    emailInput.addEventListener('blur', () => {
      const emailValue = emailInput.value.trim();
  
      if (!checkEmail(emailValue)) {
        emailError.innerHTML = "* email phải là nguyenvana@gmail.com !";
        emailError.style.color = "red";
      }
    });
    // Làm mới giá trị email khi người dùng click vào ô nhập liệu
    emailInput.addEventListener('focus', () => {
      const emailValue = emailInput.value.trim();
      if (!checkEmail(emailValue)) {
        emailInput.value = ""; // Làm mới giá trị
        emailInput.innerHTML = " *"; // Xóa thông báo lỗi
        emailInput.style.color = "black";
      }
    });
    // Hàm kiểm tra email
    function checkEmail(emailValue) {
      const emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return emailPattern.test(emailValue);
    };
  
  
  
    // Kiểm tra địa chỉ nhà khi người dùng nhập liệu
    homeAddressInput.addEventListener('input', () => {
      const homeAddressValue = homeAddressInput.value.trim();
  
      if (!checkAddress(homeAddressValue)) {
        homeAddressError.innerHTML = "* Địa chỉ nhà không được có ký tự đặc biệt !";
        homeAddressError.style.color = "red";
      } else {
        homeAddressError.innerHTML = ""; // Xóa thông báo lỗi
      }
    });
    // Kiểm tra địa chỉ nhà khi người dùng click ra khỏi ô nhập liệu
    homeAddressInput.addEventListener('blur', () => {
      const homeAddressValue = homeAddressInput.value.trim();
  
      if (!checkAddress(homeAddressValue)) {
        homeAddressError.innerHTML = "* Địa chỉ nhà không được có ký tự đặc biệt !";
        homeAddressError.style.color = "red";
      }
    });
    // Làm mới giá trị địa chỉ nhà khi người dùng click vào ô nhập liệu
    homeAddressInput.addEventListener('focus', () => {
      const homeAddressValue = homeAddressInput.value.trim();
      if (!checkAddress(homeAddressValue)) {
        homeAddressInput.value = ""; // Làm mới giá trị
        homeAddressInput.innerHTML = " *"; // Xóa thông báo lỗi
        homeAddressInput.style.color = "black";
      }
    });
    // Hàm kiểm tra địa chỉ nhà
    function checkAddress(homeAddressValue) {
      const addressPattern = /^[A-ZĐÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?: [A-ZĐÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/;
      return addressPattern.test(homeAddressValue);
    }
  
  
  
    // Kiểm tra số điện thoại khi người dùng nhập liệu
    phoneNumberInput.addEventListener('input', () => {
      const phoneNumberValue = phoneNumberInput.value.trim();
  
      if (!checkPhoneNumber(phoneNumberValue)) {
        phoneNumberError.innerHTML = "* Số điện thoại phải là 0 đầu và độ dài là 10 số !";
        phoneNumberError.style.color = "red";
      } else {
        phoneNumberError.innerHTML = ""; // Xóa thông báo lỗi
      }
    });
    // Kiểm tra số điện thoại khi người dùng click ra khỏi ô nhập liệu
    phoneNumberInput.addEventListener('blur', () => {
      const phoneNumberValue = phoneNumberInput.value.trim();
  
      if (!checkPhoneNumber(phoneNumberValue)) {
        phoneNumberError.innerHTML = "* Số điện thoại phải là 0 đầu và độ dài là 10 số !";
        phoneNumberError.style.color = "red";
      }
    });
    // Làm mới giá trị số điện thoại khi người dùng click vào ô nhập liệu
    phoneNumberInput.addEventListener('focus', () => {
      const phoneNumberValue = phoneNumberInput.value.trim();
      if (!checkPhoneNumber(phoneNumberValue)) {
        phoneNumberInput.value = ""; // Làm mới giá trị
        phoneNumberInput.innerHTML = " *"; // Xóa thông báo lỗi
        phoneNumberInput.style.color = "black";
      }
    });
    // Hàm kiểm tra số điện thoại
    function checkPhoneNumber(phoneNumberValue) {
      const phonePattern = /^[0]{1}[0-9]{9}$/;
      return phonePattern.test(phoneNumberValue);
    }
  
  
  
  
    // Form Kiểm tra kết quả tuyển sinh
    const emailValueCheck = document.getElementById("checkEmailAdmissionApplicationForm");
    const phoneNumberValueCheck = document.getElementById("checkPhoneNumberAdmissionApplicationForm");
    const subjectCombinationFormCheck = document.getElementById("subjectCombinationFormCheck");
    let selectedOptionCheck;
  
  
    const formModalCheck = document.getElementById("myModalCheck");
    checkButton.addEventListener('click', () => {
      formModalCheck.style.display = "block";
      formCheckAdmission.style.display = 'none';
      formModal.style.display = 'none';
      admissionApplicationForm.style.display = "none";
  
    });
    subjectCombinationFormCheck.addEventListener("click", () => {
      formModalCheck.style.display = "none";
      formModal.style.display = 'none';
      admissionApplicationForm.style.display = "none";
      selectedOptionCheck = document.querySelector('input[type="radio"]:checked');
      // Kiểm tra xem đã nhập đầy đủ thông tin chưa
      if (!selectedOptionCheck || emailValueCheck === "" || phoneNumberValueCheck === "") {
        document.getElementById('modal-tb-check').innerText = "Vui lòng nhập đầy đủ thông tin.";
        document.getElementById('modal-tb-check').style.color = 'red';
        return;
      }
  
      // Lấy giá trị tổ hợp môn đã chọn
      const selectFormAppCheck = selectedOptionCheck.value;
  
      // Lấy các giá trị đã lưu trong sessionStorage
      const storedSelectedOption = JSON.parse(sessionStorage.getItem('submittedSelectedOption')) || [];
      const storedEmail = JSON.parse(sessionStorage.getItem('submittedEmail')) || [];
      const storedPhoneNumber = JSON.parse(sessionStorage.getItem('submittedPhoneNumber')) || [];
  
      // Kiểm tra xem các giá trị nhập vào có trùng khớp với dữ liệu đã lưu không
      const matchFound = storedSelectedOption.includes(selectFormAppCheck) &&
        storedEmail.includes(emailValueCheck) &&
        storedPhoneNumber.includes(phoneNumberValueCheck);
  
      if (matchFound) {
        // Hiển thị formCheckAdmission
        formCheckAdmission.style.display = 'block';
        formModalCheck.style.display = 'none';
        document.getElementById('modal-tb').innerText = ""; // Xóa thông báo lỗi nếu có
        let selectFormAppCheck;
        var tbPoint1 = '<span id="point1-tb">*</span>';
        var tbPoint2 = '<span id="point2-tb">*</span>';
        var tbPoint3 = '<span id="point3-tb">*</span>';
        switch (selectFormAppCheck) {
          case "A00": {
            document.getElementById("point1-check").innerHTML = "Điểm Môn Toán " + tbPoint1;
            document.getElementById("point2-check").innerHTML = "Điểm Môn Vật Lý " + tbPoint2;
            document.getElementById("point3-check").innerHTML = "Điểm Môn Hóa Học " + tbPoint3;
            break;
          }
          case "B00": {
            document.getElementById("point1-check").innerHTML = "Điểm Môn Toán " + tbPoint1;
            document.getElementById("point2-check").innerHTML = "Điểm Môn Sinh Học " + tbPoint2;
            document.getElementById("point3-check").innerHTML = "Điểm Môn Hóa Học " + tbPoint3;
            break;
          }
          case "C00": {
            document.getElementById("point1-check").innerHTML = "Điểm Môn Ngữ Văn " + tbPoint1;
            document.getElementById("point2-check").innerHTML = "Điểm Môn Lịch Sử " + tbPoint2;
            document.getElementById("point3-check").innerHTML = "Điểm Môn Địa Lý " + tbPoint3;
            break;
          }
          default: {
            document.getElementById("point1-check").innerHTML = "Điểm Môn Ngữ Văn " + tbPoint1;
            document.getElementById("point2-check").innerHTML = "Điểm Môn Toán Học " + tbPoint2;
            document.getElementById("point3-check").innerHTML = "Điểm Môn Anh Văn " + tbPoint3;
            break;
          }
        }
      } else {
        document.getElementById('modal-tb').innerText = "Thông tin không đúng.";
        document.getElementById('modal-tb').style.color = 'red';
      }
    });
  
  
  
    closeCheckButtonForm.addEventListener("click", () => {
      formCheckAdmission.style.display = 'none';
    });
  
    const formCheck = document.getElementById('checkadmissionForm');
    formCheck.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  });
  