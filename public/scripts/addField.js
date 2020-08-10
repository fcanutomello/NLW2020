// procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//quando clicar no botao

//executar a acao
function cloneField(){
    //duplicar os campos. Que campos?
   const  newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // duplicar campos 

   //Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
   
    
    //para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa
        fields.value = ""
    })

//colocar na pagina: onde?
document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

