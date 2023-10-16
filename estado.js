let estado = function (a) {
    if (a === "São Paulo" || a === "Rio de Janeiro") {
        return "Acesso permitido"
    } else {
        return "Acesso negado"
    }
} 

module.exports = estado