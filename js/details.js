const LINK=`https://striveschool-api.herokuapp.com/api/product`;
const KEY=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNjBmNjE4N2U1YzAwMTgxNGM3MzciLCJpYXQiOjE3MDU2NjQ3NTgsImV4cCI6MTcwNjg3NDM1OH0.vzJPr4HBsSqd0dkq16k3e6y2f6yLUBj4gS2xYgLIt_4`;

let url = new URLSearchParams(location.search);
let selectedID=url.get("id");
let admin=document.querySelector(`#admin`);

getSelected(selectedID);

admin.addEventListener(`change`, function(){
   if(admin.checked)
       loginRequest();
   else{
      hideElements();
      sessionStorage.setItem(`loggedIn`, ``);
   }
})

function controlIfLoggedIn(){
   if(sessionStorage.getItem(`loggedIn`)==`true`){  
       admin.checked=true;
       hideElements();
   }else{
       admin.checked=false;
   }
}

function getSelected(selectedID) {
   fetch(`${LINK}/${selectedID}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: KEY
      }
   })
   .then(res => res.json())
   .then(selectedItem => {
      setVariables(selectedItem);
      controlIfLoggedIn()
   })
}

function setVariables(item) {
   let nameInput=document.querySelector(`#model`);
   let priceInput=document.querySelector(`#price`);
   let imageInput=document.querySelector(`#image`);
   let descriptionInput=document.querySelector(`#description`);
   
   nameInput.innerText=item.name;
   priceInput.innerText=item.price;
   imageInput.src=item.imageUrl;
   descriptionInput.innerText=item.description;
}

function loginRequest() {
   Swal.fire({
      title: 'Login',
      html: document.querySelector(`#loginTemplate`).innerHTML,
      showCancelButton: true,
      confirmButtonText: 'Login',
      confirmButtonColor: '#bf9f63',
      cancelButtonText: 'Annulla',
      preConfirm: () => {
         const email = Swal.getPopup().querySelector('#email').value;
         const password = Swal.getPopup().querySelector('#password').value;
         return rightData(email, password);
      }
   }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
         hideElements();
         sessionStorage.setItem(`loggedIn`, true);
      } else {
         admin.checked = false;
      }
   });
}

function rightData (email, password){
   email=email.toLowerCase();
   let rightEmail=`adriano@wineway.com`; 
   let rightPassword=`AmaroneDelVattelappescaDOCG1999`;    
   if(email==rightEmail && password==rightPassword)
       return {email, password};
   else{
       Swal.showValidationMessage('Invalid email or password');
       return false;
   }
}

function hideElements(){
   let linkEdit=document.querySelector(`#link-edit`);
   linkEdit.href= `edit.html?id=${selectedID}`;
   let linkAddProduct=document.querySelector(`.link-add-product`);
   
   linkAddProduct.classList.toggle(`hidden`);
   linkEdit.classList.toggle(`hidden`);
}