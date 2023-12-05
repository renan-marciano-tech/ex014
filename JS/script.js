function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML += `Agora são ${hora}horas.</br>`
    if(hora >= 0 && hora < 12){
        msg.innerHTML += 'Bom Dia!'
        img.src = '/manhã.png'
        document.body.style.background = '#F2E3D5'
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML += 'Boa Tarde!'
        img.src = '/Tarde.png'
        document.body.style.background = '#B3DAF2'
    }else{
        msg.innerHTML += 'Boa Noite!'
        img.src='/Noite.png'
        document.body.style.background = '#5F4C73'
    }
}