let botao = document.querySelector(".botao-gerar")
let endereco = "/api/gerar"

async function gerarCodigo() {
    try {
        let textoUsuario = document.querySelector(".caixa-texto").value

        // Verifica se o campo está vazio
        if (!textoUsuario || textoUsuario.trim() === "") {
            alert("Por favor, digite algo para gerar o código!")
            return
        }

        let blocoCodigo = document.querySelector(".bloco-codigo")
        let resultadoCodigo = document.querySelector(".resultado-codigo")
        let mostrarTextos = document.querySelectorAll(".texto-codigo")
        let containerCodigo = document.querySelector(".container-codigo-preview")

        let resposta = await fetch(endereco, {
            // Configurações da requisição
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Corpo da requisição - o que estamos pedindo para a IA
            body: JSON.stringify({textoUsuario: textoUsuario})
        })

        // Verifica se a resposta da API foi bem-sucedida
        if (!resposta.ok) {
            throw new Error(`Erro na API: ${resposta.status}`)
        }

        let dados = await resposta.json()
        let resultado = dados.choices[0].message.content

        blocoCodigo.textContent = resultado
        resultadoCodigo.srcdoc = resultado

        blocoCodigo.classList.add("mostrar")
        resultadoCodigo.classList.add("mostrar")
        containerCodigo.classList.add("mostrar")
        mostrarTextos.forEach(texto => texto.classList.add("mostrar"))

    } catch (error) {
        console.error("Erro ao gerar código:", error)

        // Exibe mensagem de erro amigável para o usuário
        if (error.message.includes("Failed to fetch") || error.name === "TypeError") {
            alert("Erro de conexão. Verifique sua internet e tente novamente.")
        } else if (error.message.includes("Erro na API")) {
            alert("Erro no servidor. Tente novamente em alguns minutos.")
        } else {
            alert("Ocorreu um erro inesperado. Tente novamente.")
        }
    }
}

botao.addEventListener("click", gerarCodigo)





