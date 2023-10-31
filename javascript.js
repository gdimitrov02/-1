  const editUniversityListButton = document.getElementById('editUniversityListButton');
    const saveUniversityButton = document.getElementById('saveUniversityButton');
    const closePopupButton = document.getElementById('closePopupButton');
    const newUniversityName = document.getElementById('newUniversityName');

    editUniversityListButton.addEventListener('click', () => {
      
      document.getElementById('addUniversityPopup').style.display = 'block';
    });
    closePopupButton.addEventListener('click', () => {
      document.getElementById('addUniversityPopup').style.display = 'none';
    });
    saveUniversityButton.addEventListener('click', () => {
      const universityName = newUniversityName.value;
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'saveUniversity.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const universitySelect = document.getElementById('Университет');
          universitySelect.innerHTML = xhr.responseText;
          document.getElementById('addUniversityPopup').style.display = 'none';
        }
      };
      xhr.send('universityName=' + universityName);
    });