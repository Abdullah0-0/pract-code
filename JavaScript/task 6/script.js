//                               Home Task 6

//Add new elements to the DOM using createElement()

// let newEm = document.createElement('p');

// newEm.textContent = 'This is a para';

// let content = document.querySelector('.content');
// content.appendChild(newEm);



// 2. Remove an element from the DOM


// const content = document.querySelector('.content')

// const elemt = document.getElementsByTagName('p')[0]

// btn.addEventListener('click', () =>{
  // content.removeChild(elemt)
  // })
  
  
  // 3. Create a button that changes its color when clicked.
  
  // const btn = document.querySelector('.btn')
  // btn.addEventListener('click', ()=>{
  //   btn.style.backgroundColor = 'red'
  //   btn.style.color = 'green'
  // })




  // 4. Create a list where each item can be marked as completed.

//   document.querySelectorAll('li').forEach(item => {
//     item.addEventListener('click', () => {
//         item.classList.toggle('completed');
//     });
// });



// 5. Create a form with input fields and validate that all fields are filled.

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let errorMessage = document.getElementById("errorMessage");

  if (name === "" || email === "" || password === "") {
      errorMessage.textContent = "All fields are required!";
  } else {
      errorMessage.textContent = "";
      alert("Form submitted successfully!");
      this.reset(); 
  }
});