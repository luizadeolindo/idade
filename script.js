function verificar() { 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("#txtano")
    var res = document.querySelector("#res")
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = "Homem"
            if(idade >= 0 && idade < 3){
                //bebe
                img.setAttribute('src', 'bebeh.png')
            } else if(idade < 14 ) {
                //crianca
                img.setAttribute('src', 'criancah.png')
            } else if (idade < 32) {
                // jovem
                img.setAttribute('src', 'jovemh.png')
            } else if(idade < 55) {
                //mulher
                img.setAttribute('src', 'homem.png')
            } else { 
                //idosa
                img.setAttribute('src', 'senhor.png')
            }
        } else if(fsex[1].checked) {
            genero = "Mulher"
            if(idade >= 0 && idade < 3){
                //bebe
                img.setAttribute('src', 'bebe.png')
            } else if(idade < 14 ) {
                //crianca
                img.setAttribute('src', 'crianca.png')
            } else if (idade < 32) {
                // jovem
                img.setAttribute('src', 'jovem.png')
            } else if(idade < 55) {
                //mulher
                img.setAttribute('src', 'mulher.png')
            } else { 
                //idosa
                img.setAttribute('src', 'senhora.png')
            }
        }
        img.style.width = '50%'
        img.style.height = '50%'
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}