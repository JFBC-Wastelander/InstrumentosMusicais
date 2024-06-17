console.log("Você toca algum instrumento?")

process.stdin.on("data", function(data){
    entrada = data.toString().trim().toLowerCase()
    if (entrada == "sim" || entrada == "s") {
        console.log("Que instrumento você toca?")
        process.stdin.on("data", function(data){
            instrumento = data.toString().trim()
            switch (instrumento){
                case "violão":
                case "violao":
                    console.log("Você gosta de sertanejo.")
                    process.exit()
                break
                case "guitarra":
                    console.log("Você é do rock!")
                    process.exit()
                break
                default:
                    console.log("Não conheço esse instrumento.")
            }
        })
    } else if (entrada == "não" || entrada == "n") {
        console.log("Hmm... que pena!")
        process.exit()
    }
})
