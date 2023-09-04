const form = document.getElementById('form-exercise')
let formEValido = false


function validaNumero(numeroA, numeroB) {
    if (numeroB > numeroA) {
        return true
    } else {
        return false
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    const numeroA =  Number(document.getElementById('numeroA').value);
    const numeroB =  Number(document.getElementById('numeroB').value);
    const mensagemSucesso = `Parabéns! ${numeroB} é maior que ${numeroA}`
    const mensagemFracasso = `Tente de novo! ${numeroB} não é maior que ${numeroA}`

    formEValido = validaNumero (numeroA, numeroB)
    if (formEValido) {
        const containermensagemSucesso = document.querySelector('.answer-message')
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.backgroundColor = "#7300f7"
        containermensagemSucesso.style.display = 'block'
    } else {
        const containermensagemFracasso = document.querySelector('.answer-message')
        containermensagemFracasso.innerHTML = mensagemFracasso;
        containermensagemFracasso.style.backgroundColor = "red"
        containermensagemFracasso.style.display = 'block'
        
    }
})
