document.addEventListener('DOMContentLoaded', () => {
    const submitbutton = document.querySelector('.submit');
    const container = document.querySelector('.container');
    submitbutton.addEventListener('click', (event) =>{
        event.preventDefault();
        getPhoneNumber();
    });
    const phonebook = [
        { name : 'Chris', number : '1549' },
        { name : 'Li Kang', number : '9634' },
        { name : 'Anne', number : '9065' },
        { name : 'Francesca', number : '3001' },
        { name : 'Mustafa', number : '6888' },
        { name : 'Tina', number : '4312' },
        { name : 'Bert', number : '7780' },
        { name : 'Jada', number : '2282' },
      ]
      nameInput.value = '';
      let foundMatch = false;
      function getPhoneNumber(){
        let nameInput = document.getElementById('nameInput');
        let enteredName = nameInput.value;
        let para = document.createElement("p")
        for (let i = 0; i<phonebook.length; i++){
            if(phonebook[i].name === enteredName){
                foundMatch = true;
                para.textContent = `Hello, the number to ${phonebook[i].name} is ${phonebook[i].number}`;

            }else if(!foundMatch){
                para.textContent = "Name not found in the phonebook";
            }
        }

        container.appendChild(para);
      }



});