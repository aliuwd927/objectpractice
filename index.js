const main = document.querySelector('.root')

//Input Container For Header

const inputHeaderContainer = document.createElement('form')
inputHeaderContainer.classList.add('inputHeaderContainer')
main.appendChild(inputHeaderContainer)

const inputFirstName = document.createElement('input')
inputFirstName.classList.add('inputFirstName')
inputHeaderContainer.appendChild(inputFirstName)

const inputLastName = document.createElement('input')
inputLastName.classList.add('inputLastName')
inputHeaderContainer.appendChild(inputLastName)

const inputAddress = document.createElement('input')
inputAddress.classList.add('inputAddress')
inputHeaderContainer.appendChild(inputAddress)

const inputCity = document.createElement('input')
inputCity.classList.add('inputCity')
inputHeaderContainer.appendChild(inputCity)

const inputState = document.createElement('input')
inputState.classList.add('inputState')
inputHeaderContainer.appendChild(inputState)

const inputZipCode = document.createElement('input')
inputZipCode.classList.add('inputZipCode')
inputHeaderContainer.appendChild(inputZipCode)

const inputEmail = document.createElement('input')
inputEmail.classList.add('inputEmail')
inputHeaderContainer.appendChild(inputEmail)

const inputPhoneNumber = document.createElement('input')
inputPhoneNumber.classList.add('inputPhoneNumber')
inputHeaderContainer.appendChild(inputPhoneNumber)

const submitHeaderForm = document.createElement('button')
submitHeaderForm.classList.add('submitHeaderForm')
submitHeaderForm.innerText = 'Add'
inputHeaderContainer.appendChild(submitHeaderForm)

//Input Container for Work Experience
const inputWorkExpContainer = document.createElement('form')
inputWorkExpContainer.classList.add('inputWorkExpContainer')
main.appendChild(inputWorkExpContainer)

const inputCompanyName = document.createElement('input')
inputCompanyName.classList.add('inputCompanyName')
inputWorkExpContainer.appendChild(inputCompanyName)

const inputJobTitle = document.createElement('input')
inputJobTitle.classList.add('inputJobTitle')
inputWorkExpContainer.appendChild(inputJobTitle)

const inputCompanyCity = document.createElement('input')
inputCompanyCity.classList.add('inputCompanyCity')
inputWorkExpContainer.appendChild(inputCompanyCity)

const inputCompanyState = document.createElement('input')
inputCompanyState.classList.add('inputCompanyState')
inputWorkExpContainer.appendChild(inputCompanyState)

const inputDateBeing = document.createElement('input')
inputDateBeing.classList.add('inputDateBeing')
inputWorkExpContainer.appendChild(inputDateBeing)

const inputDateEnded = document.createElement('input')
inputDateEnded.classList.add('inputDateEnded')
inputWorkExpContainer.appendChild(inputDateEnded)

const submitWorkExpForm = document.createElement('button')
submitWorkExpForm.classList.add('submitWorkExpForm')
submitWorkExpForm.innerText = 'Add'
inputHeaderContainer.appendChild(submitWorkExpForm)



const headingObj = []
const workExpObj = []

//logic

submitHeaderForm.addEventListener('click',(e)=>{
    e.preventDefault()
    //console.log('trigger')

    headingObj.push({
        FirstName: inputFirstName.value,
        LastName: inputLastName.value,
        Address: inputAddress.value,
        City: inputCity.value,
        State: inputState.value,
        ZipCode: inputZipCode.value,
        Email: inputEmail.value,
        Phone: inputPhoneNumber.value,
    })


})

submitWorkExpForm.addEventListener('click', (e)=>{
    e.preventDefault()
    //console.log('trigger')

    workExpObj.push({
        CompanyName: inputCompanyName.value,
        JobTitle: inputJobTitle.value,
        CompanyCity: inputCompanyCity.value,
        CompanyState: inputCompanyState.value,
        DateBegin: inputDateBeing.value,
        DateEnd: inputDateEnded.value,
    })
})