const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    criaElemento(evento.target.elements('nome.').value, evento.target.elements('quantidade').value)
})

function criaElemento(nome, quantidade) {
    console.log(nome)
    console.log(quantidade)

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    //<li class="item"><strong>3</strong>Meia</li>
    const numeroItem = document.createElement('strong')
    numeroItem.inn = quantidade

    novoItem.appendChild(novoItem)
    novoItem.innerHTML += nome

    const lista = document.getElementById("lista")

    lista.appendChild(novoItem)

    console.log(novoItem)
}