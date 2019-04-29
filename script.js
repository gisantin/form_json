window.onload =  requestAsync()

function requestAsync(){ 
  fetch('http://localhost:8080/fields.json')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    dataHandler(data)
  })
 .catch(function(error){
  })
}


function dataHandler(data){

  for(const item of data._embedded.request_fields){
        renderRequestFields(item)
    }  

  for(const userItem of data._embedded.user_fields){
      renderUserFields(userItem)
  }


}



function renderRequestFields(data) {


  
  if(data.name == 'Informações Adicionais') {
    const requestFields = document.getElementById('requestFields');
    const div = document.createElement('div')
    div.innerHTML = `<label>${data.label}</label>`
    const textarea = document.createElement('textarea')
    textarea.placeholder = data.placeholder
    div.appendChild(textarea)
    requestFields.appendChild(div)
    return
  }

  const requestFields = document.getElementById('requestFields');

  const div = document.createElement('div')
  div.innerHTML = `<label>${data.label}</label>`
  
  const select =  document.createElement('select')


  
    for( const item in data.values) {
  
      const option = document.createElement('option')
      option.setAttribute('value', item)
      option.textContent = item
      select.appendChild(option)

  } 
                    
  div.appendChild(select)
  requestFields.appendChild(div)

}


function renderUserFields(data) {

  const div = document.createElement('div')
  const label =  document.createElement('label')
  label.textContent =  data.label
  const input = document.createElement('input')
  input.name = data.name 
  input.placeholder = data.placeholder 
  input.type = data.type
  input.required = data.required
  
  div.appendChild(label)
  div.appendChild(input)
  
  const userFields = document.getElementById('userFields')
  userFields.appendChild(div)

}