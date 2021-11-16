function verificar(){
   var data = new Date()//ele pega o dia //
   var ano = data.getUTCFullYear()//ele pega o ano atual//
   var fano = window.document.getElementById('txtano')//fano = formulario ano
    var res = window.document.getElementById('res')//variavel resposta
    if (fano.value.length == 0 || fano.value > ano){//length = comprimento//
        window.alert('Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radisex')
        var idade = ano  - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//criando uma tag img//
        img.setAttribute('id','foto')//criando um id 
        if(fsex[0].checked){
            genero = 'homem'
            document.body.style.background='#22353C'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','bebe-homem.png')
                res.innerHTML=`Detectamos uma criança com ${idade} anos`
            }else if(idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-homem.png')
                res.innerHTML=`Detectamos um ${genero} jovem com ${idade} anos`
            }else if( idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src','adulto-homem.png')
                res.innerHTML=`Detectamos um ${genero} adulto com ${idade} anos`
            }else{
                //idoso
                img.setAttribute('src','idoso-homem.png')
                res.innerHTML=`Detectamos um ${genero} mais velho com ${idade} anos`
            }
        }else{
            genero ='mulher'
            document.body.style.background='#F9CCA8'//mudar a cor do fundo de acordo com o sexo
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','bebe-mulher.png')
                res.innerHTML=`Detectamos uma criança com ${idade} anos`
            }else if(idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-mulher.png')
                res.innerHTML=`Detectamos uma ${genero} jovem com ${idade} anos`
            }else if( idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src','adulta-mulher.png')
                res.innerHTML=`Detectamos uma ${genero} adulta com ${idade} anos`
            }else{
                //idoso
                img.setAttribute('src','idosa-mulher.png')
                res.innerHTML=`Detectamos uma ${genero} mais velha com ${idade} anos`
            }

        }
       //res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)//chamando o atributo imagem img
    }
}