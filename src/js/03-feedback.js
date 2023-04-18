const throttle = require('lodash.throttle');

const formRef = document.querySelector('form.feedback-form');
const messageTextarea = formRef.elements.message;
const emailTextarea = formRef.elements.email;
const STORAGE_KEY = 'feedback-form-state';

updateTextarea();

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));


function onFormSubmit(evt) {
  evt.preventDefault();

  const feedback = {
    email: emailTextarea.value,
    message: messageTextarea.value,
  };
  
if (emailTextarea.value.trim() !== '' && messageTextarea.value.trim() !== '') {
  console.log(feedback);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
} else {
  window.alert('Усі поля мають бути заповнені!');
 }
};

// ---- перший варіант onFormInput()

function onFormInput(evt) {
  const message = messageTextarea.value;
  const email = emailTextarea.value;

  localStorage.setItem(STORAGE_KEY,  JSON.stringify({'message': message, 'email': email}));
};

// ---- другий варіант onFormInput()
// const formData = {};

// function onFormInput(evt) {
//   formData[evt.target.name] = evt.target.value;

//   localStorage.setItem(STORAGE_KEY,  JSON.stringify(formData));
// }; 


function updateTextarea() {
  const savedFeedback = localStorage.getItem(STORAGE_KEY);
  const feedbackOutput = JSON.parse(savedFeedback);

  if (savedFeedback) {
    messageTextarea.value = feedbackOutput.message;
    emailTextarea.value = feedbackOutput.email;
  };
};
