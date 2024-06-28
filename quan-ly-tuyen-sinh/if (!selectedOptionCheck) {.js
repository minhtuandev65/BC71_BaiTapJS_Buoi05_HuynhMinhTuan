if (!selectedOptionCheck) {
    document.getElementById('modal-tb').innerText = "Vui lòng chọn tổ hợp môn.";
    document.getElementById('modal-tb').style.color = 'red';
  } else if (selectedOptionCheck == selectedOption || emailValueCheck == emailValue || phoneNumberValueCheck == phoneNumberValue) {
    subjectCombinationForm.addEventListener("click", () => {
      admissionApplicationForm.style.display = "block";
      formModal.style.display = 'none';
      formCheckAdmission.style.display = 'none';
      selectFormAppCheck = selectedOption.value;
      selectedOptionCheckValue = selectFormAppCheck;
     
    });

  } else {
    document.getElementById('modal-tb').innerText = "Không đúng";
    document.getElementById('modal-tb').style.color = 'red';
  }