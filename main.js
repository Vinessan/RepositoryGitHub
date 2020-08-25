//API GITHUB
// NOME NO REPOSITORY "full_name"
//LINK PARA ACESSAR O REPOSITORY "html_url"
//ACESSAR LINGUAGEM USADA "language"
//LINK PARA CLONAR O REPOSITORY "clone_url"
let repository = new XMLHttpRequest()

repository.open("GET", "https://api.github.com/users/GabrielOAzevedo/repos", false)

repository.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const language = JSON.parse(this.responseText)
        const clone = JSON.parse(this.responseText)
        const link_url = JSON.parse(this.responseText)
        const repositorio = JSON.parse(this.responseText)
        for (let i = 0; i < repositorio.length; i++) {
            document.getElementById('table').innerHTML += "<td><tr>" + repositorio[i].full_name + "</tr></td>"
            document.getElementById('table').innerHTML += "<tr><a id='link1' target='_blank' href='" + link_url[i].html_url + "'>Link</a></tr>"
            document.getElementById('table').innerHTML += "<tr><img src='./imagens/" + language[i].language + ".PNG'</tr>"
            document.getElementById('table').innerHTML += "<tr><a id='link2' target='_blank' href='" + clone[i].clone_url + "'>Clonar</a></tr>"

        }
    }
}
repository.send()


//DARK-MODE TESTE
let documento = document.querySelector("body")

function mudaFundo() {
    if (documento.className == "claro") {
        documento.className = "escuro"
    } else {
        documento.className = "claro"
    }


}


