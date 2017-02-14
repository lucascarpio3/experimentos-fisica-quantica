var dados = []
for (i = 0; i < 100; i++) {
    Math.floor(Math.random() * 10)
    dados[i] = Math.floor(Math.random() * 10) < 5 ? 0 : 1
}
var numero_de_zeros = 0
var numero_de_ums = 0
function contabilizar() {
    for (i = 0; i < dados.length; i++) {
        if (dados[i] == 0) {
            numero_de_zeros++
        } else {
            numero_de_ums++
        }
    }
    console.log('numero_de_zeros', numero_de_zeros)
    console.log('numero_de_ums', numero_de_ums)
}
// chamar contabilizar() para obter o resultado esperado.
