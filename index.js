document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 This fetches the values from the html file 
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage') ;
      const courseNameInput = document.getElementById('courseNameInput'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      console.log(courseNameInput)
      // Element courseNameInput checks if the value of the course name exists if it does it shows the value if it doesnt its displays a course
      const courseName = courseNameInput.value ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content 
      certificateContent.innerHTML = `
      <h1>Certificate of Achievement!</h1>
      <br><p>This is to certify that</p>
      <h3>${studentName}</h3>
      <br><p>has almost completed</p>
      <h3>${courseName}</h3>
      <br>
      <p>Congratulations on your hard work and dedication! 🎉;</p>
       <img src="logo.png" alt="Logo" style="width: 300px; display: block; margin: 0 auto;">
     <h3>${personalMessage}</h3>
    `;


      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () { // The AddEventListener listen for any event like a click in this case
      
    });
  });