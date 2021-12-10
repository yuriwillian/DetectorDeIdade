function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || fano.value > ano){ //se o valor de "fano" for igual a 0 ou se o valor de "fano" for maior que "ano", escreva:
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement("img") 
        img.setAttribute("id", "foto")
        if (fsex[0].checked) { // se o gênero marcado foi [0] ou seja masculino, faça:
            gênero = "Homem"
            if (idade >= 0 && idade < 15) {
                //Criança
                img.setAttribute("src", "menino.png")
            } else if (idade >= 15 && idade < 30) {
                //Jovem
                img.setAttribute("src", "jovemhomem.png")
            } else if (idade >= 30 && idade < 60) {
                //Adulto
                img.setAttribute("src", "homemadulto.png")
            } else if (idade >= 60 && idade < 120) {
                //Idoso
                img.setAttribute("src", "homemidoso.png")
            } else {
                window.alert("[ERRO] Verifique o ano de nascimento!")
            }

        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 15) {
                //Criança
                img.setAttribute("src", "menina.png")
            } else if (idade >= 15 && idade < 30) {
                //Jovem
                img.setAttribute("src", "jovemmulher.png")
            }
            else if (idade >= 30 && idade < 60) {
                //Adulta
                img.setAttribute("src", "mulheradulta.png")
            }
            else if (idade >= 60 && idade < 120) {
                //Idosa
                img.setAttribute("src", "mulheridosa.png")
            } else {
                window.alert("[ERRO] Verifique o ano de nascimento!")
            }
        }
        res.style.textAlign = "center" // centralizando o texto
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // adicionar um elemento, que no caso é o elemento "img"
    }
}