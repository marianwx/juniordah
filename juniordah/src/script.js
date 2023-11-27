const scriptURL = 'https://script.google.com/macros/s/AKfycbx50P5NSkIssN6pZ7jOpACxAe2d98w5AZ-2EwpS30d8yksAidUg6Wu3bB93iXGqizP6Fw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})