document.addEventListener("DOMContentLoaded", function () {

  // Nút button chọn nộp hồ sơ
  const submitButton = document.getElementById('submitAdmissionApplication');

  // form modal chọn tổ hợp môn
  const formModal = document.getElementById('myModal');
  // Form Nộp hồ sơ
  const admissionApplicationForm = document.getElementById('formContaineradmissionApplication');
  // Nút submit modal chọn tổ hợp môn nộp hồ sơ
  const subjectCombinationForm = document.getElementById("subjectCombinationForm");
  // Nút close modal chọn tổ hợp môn nộp hồ sơ
  const closeFormModal = document.getElementById("closeFormModal");
  const closeModalButton = formModal.querySelector('.closeApp');
  // Nút close form nộp hồ sơ
  const closeAppButtonForm = document.getElementById('closeAppForm');



  // Form nộp hồ sơ
  // Mở form modal để chọn tổ hợp môn
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    formModal.style.display = 'block';
    // formCheckAdmission.style.display = 'none';
    admissionApplicationForm.style.display = "none";
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
    selectedOption = document.querySelector('input[name="subjectCombination-app"]:checked');

    if (!selectedOption) {
      document.getElementById('modal-tb').innerText = "Vui lòng chọn tổ hợp môn.";
      document.getElementById('modal-tb').style.color = 'red';
    } else {
      admissionApplicationForm.style.display = "block";
      formModal.style.display = 'none';
      formCheckAdmission.style.display = 'none';

      var selectFormApp = selectedOption.value;
      selectedOptionValue = selectFormApp;
      var tbPoint1 = '<span id="point1tb">*</span>';
      var tbPoint2 = '<span id="point2tb">*</span>';
      var tbPoint3 = '<span id="point3tb">*</span>';
      switch (selectFormApp) {
        case "A00": {
          document.getElementById("point1App").innerHTML = "Điểm Môn Toán " + tbPoint1;
          document.getElementById("point2App").innerHTML = "Điểm Môn Vật Lý " + tbPoint2;
          document.getElementById("point3App").innerHTML = "Điểm Môn Hóa Học " + tbPoint3;
          // Lưu tổ hợp môn
          storedSelectedOption.push(selectedOptionValue);
          sessionStorage.setItem("submittedSelectedOption", JSON.stringify(storedSelectedOption));
          break;
        }
        case "B00": {
          document.getElementById("point1App").innerHTML = "Điểm Môn Toán " + tbPoint1;
          document.getElementById("point2App").innerHTML = "Điểm Môn Sinh Học " + tbPoint2;
          document.getElementById("point3App").innerHTML = "Điểm Môn Hóa Học " + tbPoint3;
          // Lưu tổ hợp môn
          storedSelectedOption.push(selectedOptionValue);
          sessionStorage.setItem("submittedSelectedOption", JSON.stringify(storedSelectedOption));
          break;
        }
        case "C00": {
          document.getElementById("point1App").innerHTML = "Điểm Môn Ngữ Văn " + tbPoint1;
          document.getElementById("point2App").innerHTML = "Điểm Môn Lịch Sử " + tbPoint2;
          document.getElementById("point3App").innerHTML = "Điểm Môn Địa Lý " + tbPoint3;
          // Lưu tổ hợp môn
          storedSelectedOption.push(selectedOptionValue);
          sessionStorage.setItem("submittedSelectedOption", JSON.stringify(storedSelectedOption));
          break;
        }
        default: {
          document.getElementById("point1App").innerHTML = "Điểm Môn Ngữ Văn " + tbPoint1;
          document.getElementById("point2App").innerHTML = "Điểm Môn Toán Học " + tbPoint2;
          document.getElementById("point3App").innerHTML = "Điểm Môn Anh Văn " + tbPoint3;
          // Lưu tổ hợp môn
          storedSelectedOption.push(selectedOptionValue);
          sessionStorage.setItem("submittedSelectedOption", JSON.stringify(storedSelectedOption));
          break;
        }

      }
    }
  });

  // Các biến người dùng nhập vào từ form nộp hồ sơ Full Name
  const fullNameInput = document.getElementById("fullNameApp");
  const fullNameError = document.getElementById("fullName-tb");
  // Điểm môn 1
  const subjectScores1Input = document.getElementById("subjectScores1App");
  const subjectScores1Error = document.getElementById("point1tb");
  // Điểm môn 2
  const subjectScores2Input = document.getElementById("subjectScores2App");
  const subjectScores2Error = document.getElementById("point2tb");
  // Điểm môn 3
  const subjectScores3Input = document.getElementById("subjectScores3App");
  const subjectScores3Error = document.getElementById("point3tb");
  // Điểm khu vực ưu tiên
  const priorityAreaInput = document.getElementById("priorityAreaApp");
  const priorityAreaError = document.getElementById("priorityArea-tb");
  // Điểm đối tượng ưu tiên
  const priorityGroupInput = document.getElementById("priorityGroupApp");
  const priorityGroupError = document.getElementById("priorityGroup-tb");
  // Địa chỉ nhà
  const homeAddressInput = document.getElementById("homeAddressApp");
  const homeAddressError = document.getElementById("homeAddress-tb");
  // Địa chỉ Email
  const emailInput = document.getElementById("emailApp");
  const emailError = document.getElementById("email-tb");
  // Số điện thoại
  const phoneNumberInput = document.getElementById("phoneNumberApp");
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
  let userId = 1;
  const userData = JSON.parse(sessionStorage.getItem('usersData'));
  const formApplication = document.getElementById('submitApplication');
  let usersData = JSON.parse(sessionStorage.getItem('usersData')) || [];
  formApplication.addEventListener('click', (e) => {
    e.preventDefault();
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


    admissionApplicationForm.style.display = "none";
    if (checkFullName(fullNameValue) && checkSubjectScores1(subjectScores1Value) && checkSubjectScores2(subjectScores2Value) && checkSubjectScores3(subjectScores3Value) && checkpriorityArea(priorityAreaValue) && checkpriorityGroup(priorityGroupValue) && checkEmail(emailValue) && checkPhoneNumber(phoneNumberValue) && checkAddress(homeAddressValue)) {
      const userData = {
        selectedOption: selectedOptionValue,
        fullName: fullNameValue,
        subjectScores1: subjectScores1Value,
        subjectScores2: subjectScores2Value,
        subjectScores3: subjectScores3Value,
        priorityArea: priorityAreaValue,
        priorityGroup: priorityGroupValue,
        email: emailValue,
        homeAddress: homeAddressValue,
        phoneNumber: phoneNumberValue
      };

      usersData.push(userData);
      sessionStorage.setItem('usersData', JSON.stringify(usersData));
      userId++;
      alert('Đã lưu thông tin thành công!');
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
    const subjectScores1Value = subjectScores1Input.value.trim();

    if (isNaN(subjectScores1Value) || !checkSubjectScores1(subjectScores1Value)) {
      subjectScores1Error.innerHTML = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
      subjectScores1Error.style.color = "red";
    } else {
      subjectScores1Error.innerHTML = ""; // Xóa thông báo lỗi
    }
  });
  // Kiểm tra điểm môn 1 khi người dùng click ra khỏi ô nhập liệu
  subjectScores1Input.addEventListener('blur', () => {
    const subjectScores1Value = subjectScores1Input.value.trim();

    if (isNaN(subjectScores1Value) || !checkSubjectScores1(subjectScores1Value)) {
      subjectScores1Error.innerText = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
      subjectScores1Error.style.color = "red";
    }
  });
  // Làm mới giá trị điểm môn 1 khi người dùng click vào ô nhập liệu
  subjectScores1Input.addEventListener('focus', () => {
    const subjectScores1Value = subjectScores1Input.value.trim();
    if (isNaN(subjectScores1Value) || !checkSubjectScores1(subjectScores1Value)) {
      subjectScores1Input.value = ""; // Làm mới giá trị
      subjectScores1Error.innerText = " *"; // Xóa thông báo lỗi
      subjectScores1Error.style.color = "black"
    }

  });
  // Hàm kiểm tra điểm môn 1
  function checkSubjectScores1(subjectScores1Value) {
    return !isNaN(subjectScores1Value) && subjectScores1Value >= 0 && subjectScores1Value <= 10;
  };

  // Kiểm tra điểm môn 2 khi người dùng nhập liệu
  subjectScores2Input.addEventListener('input', () => {
    const subjectScores2Value = subjectScores2Input.value.trim();

    if (isNaN(subjectScores2Value) || !checkSubjectScores2(subjectScores2Value)) {
      subjectScores2Error.innerHTML = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
      subjectScores2Error.style.color = "red";
    } else {
      subjectScores2Error.innerHTML = ""; // Xóa thông báo lỗi
    }
  });
  // Kiểm tra điểm môn 2 khi người dùng click ra khỏi ô nhập liệu
  subjectScores2Input.addEventListener('blur', () => {
    const subjectScores2Value = subjectScores2Input.value.trim();

    if (isNaN(subjectScores2Value) || !checkSubjectScores2(subjectScores2Value)) {
      subjectScores2Error.innerHTML = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
      subjectScores2Error.style.color = "red";
    }
  });
  // Làm mới giá trị điểm môn 2 khi người dùng click vào ô nhập liệu
  subjectScores2Input.addEventListener('focus', () => {
    const subjectScores2Value = subjectScores2Input.value.trim();
    if (isNaN(subjectScores2Value) || !checkSubjectScores2(subjectScores2Value)) {
      subjectScores2Input.value = ""; // Làm mới giá trị
      subjectScores2Error.innerHTML = " *"; // Xóa thông báo lỗi
      subjectScores2Error.style.color = "black"
    }
  });

  // Hàm kiểm tra điểm môn 2
  function checkSubjectScores2(subjectScores2Value) {
    return !isNaN(subjectScores2Value) && subjectScores2Value >= 0 && subjectScores2Value <= 10;
  };

  // Kiểm tra điểm môn 3 khi người dùng nhập liệu
  subjectScores3Input.addEventListener('input', () => {
    const subjectScores3Value = subjectScores3Input.value.trim() * 1;

    if (!checkSubjectScores3(subjectScores3Value)) {
      subjectScores3Error.innerHTML = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
      subjectScores3Error.style.color = "red";
    } else {
      subjectScores3Error.innerHTML = ""; // Xóa thông báo lỗi
    }
  });
  // Kiểm tra điểm môn 3 khi người dùng click ra khỏi ô nhập liệu
  subjectScores3Input.addEventListener('blur', () => {
    const subjectScores3Value = subjectScores3Input.value.trim() * 1;

    if (!checkSubjectScores3(subjectScores3Value)) {
      subjectScores3Error.innerHTML = "* Phải nhập số lớn hơn 0 và bé hơn 10!";
      subjectScores3Error.style.color = "red";
    }
  });
  // Làm mới giá trị điểm môn 3 khi người dùng click vào ô nhập liệu
  subjectScores3Input.addEventListener('focus', () => {
    const subjectScores3Value = subjectScores3Input.value.trim() * 1;
    if (!checkSubjectScores3(subjectScores3Value)) {
      subjectScores3Input.value = ""; // Làm mới giá trị
      subjectScores3Error.innerHTML = " *"; // Xóa thông báo lỗi
      subjectScores3Error.style.color = "black"
    }
  });

  // Hàm kiểm tra điểm môn 3
  function checkSubjectScores3(subjectScores3Value) {
    return !isNaN(subjectScores3Value) && subjectScores3Value >= 0 && subjectScores3Value <= 10;
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
      case 'B':
        return 1;
      case 'C':
        return 0.5;
      case 'X':
        return 0;
      default:
        return 0;
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
      case 1:
        return 2.5;
      case 2:
        return 1.5;
      case 3:
        return 1;
      case 0:
        return 0;
      default:
        return 0;
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



  // Nút mở modal check
  const checkButton = document.getElementById('checkAdmissionResults');
  checkButton.addEventListener("click", () => {
    modalCheck.style.display = "block";
  })

  // Modal của Kiểm tra tuyển sinh
  const modalCheck = document.getElementById("myModalCheck");
  const submitModalCheck = document.getElementById("submitModalFormCheck");
  submitModalCheck.addEventListener("click", () => {
    const checkEmailInput = document.getElementById('checkEmailAdmissionApplicationForm').value;
    const checkPhoneNumberInput = document.getElementById('checkPhoneNumberAdmissionApplicationForm').value;
    const checkSubjectCombination = document.querySelector('input[name="subjectCombination-check"]:checked').value;
    const usersData = JSON.parse(sessionStorage.getItem('usersData')) || [];
    let foundUser = null;
    modalCheck.style.display = "block";
    admissionApplicationForm.style.display = "none";
    var selectedOptionCheck = document.querySelector('input[name="subjectCombination-check"]:checked');

    if (!selectedOptionCheck) {
      document.getElementById('modal-tb').innerText = "Vui lòng chọn tổ hợp môn.";
      document.getElementById('modal-tb').style.color = 'red';
    } else {
      var selectFormCheck = selectedOptionCheck.value;
      switch (selectFormCheck) {
        case "A00": {
          document.getElementById("point1Check").innerHTML = "Điểm Môn Toán ";
          document.getElementById("point2Check").innerHTML = "Điểm Môn Vật Lý ";
          document.getElementById("point3Check").innerHTML = "Điểm Môn Hóa Học ";
          break;
        }
        case "B00": {
          document.getElementById("point1Check").innerHTML = "Điểm Môn Toán ";
          document.getElementById("point2Check").innerHTML = "Điểm Môn Sinh Học ";
          document.getElementById("point3Check").innerHTML = "Điểm Môn Hóa Học ";
          break;
        }
        case "C00": {
          document.getElementById("point1Check").innerHTML = "Điểm Môn Ngữ Văn ";
          document.getElementById("point2Check").innerHTML = "Điểm Môn Lịch Sử ";
          document.getElementById("point3Check").innerHTML = "Điểm Môn Địa Lý ";
          break;
        }
        default: {
          document.getElementById("point1Check").innerHTML = "Điểm Môn Ngữ Văn ";
          document.getElementById("point2Check").innerHTML = "Điểm Môn Toán Học ";
          document.getElementById("point3Check").innerHTML = "Điểm Môn Anh Văn ";
          break;
        }

      }
    }
    for (let i = 0; i < usersData.length; i++) {
      let userData = usersData[i];
      if (userData.email === checkEmailInput && userData.phoneNumber === checkPhoneNumberInput && userData.selectedOption === checkSubjectCombination) {
        foundUser = userData;
        break;
      }
    }
    if (foundUser) {
      var priorityAreaScore = parseFloat(convertPriorityAreaToScore(foundUser.priorityArea));
      var priorityGroupScore = convertPriorityGroupToScore(foundUser.priorityGroup);
      var totalScores = parseFloat(foundUser.subjectScores1) + parseFloat(foundUser.subjectScores2) + parseFloat(foundUser.subjectScores3) + priorityAreaScore + priorityGroupScore;


      document.getElementById('admissionDepartment-check').value = foundUser.selectedOption;
      document.getElementById('fullName-check').value = foundUser.fullName;
      document.getElementById('subjectScores1-check').value = foundUser.subjectScores1;
      document.getElementById('subjectScores2-check').value = foundUser.subjectScores2;
      document.getElementById('subjectScores3-check').value = foundUser.subjectScores3;
      document.getElementById('subjectScores-check').value = totalScores;
      document.getElementById('priorityArea-check').value = foundUser.priorityArea;
      document.getElementById('priorityGroup-check').value = foundUser.priorityGroup;
      document.getElementById('homeAddress-check').value = foundUser.homeAddress;
      document.getElementById('email-check').value = foundUser.email;
      document.getElementById('phoneNumber-check').value = foundUser.phoneNumber;
      if(totalScores >= 27){
        document.getElementById('result').value = "Bạn Đã Đậu";
      }else{
        document.getElementById('result').value = "Bạn Đã Trượt";
      }
      formCheckAdmission.style.display = "block";
      modalCheck.style.display = "none";
    }
  });
  // Form kiểm tra
  const formCheckAdmission = document.getElementById("formContainercheckAdmission");

  // Nút close form kiểm tra
  const closeCheckButtonForm = document.getElementById("closeCheckForm");
  closeCheckButtonForm.addEventListener("click", () => {
    formCheckAdmission.style.display = "none";
  });
  const closeModalCheck = document.getElementById("closeFormModalCheck");
  closeModalCheck.addEventListener("click", () => {
    modalCheck.style.display = "none";
  })
  const closeModalButtonCheck = formModal.querySelector('.closeCheck');
  closeModalButtonCheck.addEventListener('click', () => {
    modalCheck.style.display = 'none';
  });
});