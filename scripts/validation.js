const form = document.getElementById("myForm");
const input = document.querySelectorAll(".contact__input");
const button = document.querySelectorAll(".contact__button");

form.addEventListener("submit",  function(event) {
   event.preventDefault();
   for (let i = 0; i < input.length; i++) {
      const inputValue = input[i].value.trim();
      if (inputValue === "") {
         alert("Please enter your name.");
         return;
       }
   }

   // Если все проверки прошли успешно, отправляем форму
   form.submit();
 });
