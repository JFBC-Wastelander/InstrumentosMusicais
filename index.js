console.log("Você toca algum instrumento?")

process.stdin.on("data", function(data){
    entrada = data.toString().trim()
    if (entrada == "sim" || entrada == "s") {
        console.log("Você deve tocar bem")
        process.exit()
    } else if (entrada == "não" || entrada == "n") {
        console.log("Hmm... que pena!")
        process.exit()
    } else {
        console.log("Digite uma resposta válida (sim / não)")
    }
})