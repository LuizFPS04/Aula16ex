var numero = document.getElementById("num")
var tabela = document.getElementById("seltab")
var res = document.getElementById("res")
var valores = []

function isN(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isL(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function addnum(){
    if(isN(numero.value)&& !isL(numero.value, valores)){
        valores.push(Number(numero.value))
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        tabela.appendChild(item)
    }else{
        window.alert('Número inválido ou já presente na lista!')
    }
    numero.value = ''
    numero.focus()
}

function fim(){
    if (valores.length == 0){
        window.alert('Adicione valores')
    }else{
        var tot =  valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }else{
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números adicionados.</p>`
        res.innerHTML += `<p>O maior valor foi: ${maior}.`
        res.innerHTML += `<p>O menor valor foi: ${menor}.`
        res.innerHTML += `<p>A soma dos valores foi: ${soma}`
        res.innerHTML += `<p>A média dos valores foi: ${media}`
    }

}