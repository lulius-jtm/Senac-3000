let continuar = true
const dados = []

function cadastrar() {
    console.log("Função para cadastro")

    const abrigoNome = prompt("Qual o nome do seu abrigo?")
    const abrigoEndereco = prompt("Qual o endereço do seu abrigo?")
    const abrigoTelefone = prompt("Qual o telefone do seu abrigo?")
    const abrigoCapacidade = prompt("Qual a capacidade máxima de pessoas no seu abrigo?")
    const abrigoCidade = prompt("Qual a cidade do seu abrigo?")

    const abrigo = {
        nome: abrigoNome,
        endereco: abrigoEndereco,
        telefone: abrigoTelefone,
        capacidade: abrigoCapacidade,
        cidade: abrigoCidade,
    }

    dados.push(abrigo)

    console.log(`Dados cadastrados com sucesso!`)
    console.log(`Nome: ${abrigoNome} | Endereço: ${abrigoEndereco} | Telefone: ${abrigoTelefone} | Capacidade: ${abrigoCapacidade} | Cidade: ${abrigoCidade}`)
}

function listar() {
    console.log("Função para listar")

    console.log("# | NOME | ENDEREÇO | TELEFONE | CAPACIDADE | CIDADE")
    console.log("Casa do Caminho | Rua do Amanhecer, 123, Centro | (11) 1234-5678 | Capacidade: 20  | Canoas") 
    console.log("Abrigo Esperança | Rua da Solidariedade, 321, Bairro | (11) 9876-5432 | Capacidade: 30 | São Leopoldo") 
    console.log("Casa dos Amigos | Av. da Fraternidade, 456, Centro | (11)5555-4444 | Capacidade: 25 | Novo Hamburgo") 
    console.log("Abrigo do Bem | Rua da Esperança, 789, Bairro | (11) 7777-8888 | Capacidade: 35 | Canoas") 
    console.log("Casa dos Anjos | Av. da Paz, 159, Centro | (11) 3333-2222 | Capacidade: 15 | Porto Alegre")

    for (const [ indice, objeto ] of dados.entries()) {
        console.log(`${indice + 1} | ${objeto.abrigoNome} | ${objeto.abrigoEndereco} | ${objeto.abrigoTelefone} | ${objeto.abrigoCapacidade} | ${objeto.abrigoCidade}`)
    }

    console.log(`Dados listados com sucesso! ${dados.length} abrigos encontrados.`)
    console.log("---------------")
}

function buscar() {
    console.log("Função de busca")

    const busca = prompt("Qual o abrigo desejado?")

    for (let i = 0; i < dados.length; i++) {
        const item = dados[i]

        if (item.abrigoNome === busca) {

            console.log(`${i + 1} | ${item.abrigoNome} | ${item.abrigoEndereco} | ${item.abrigoTelefone} | ${item.abrigoCapacidade} | ${item.abrigoCidade}`)
        }
    }

    console.log(`Resultados listados com sucesso!`)
    console.log("---------------")
}

function sair() {
    continuar = false
    console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}

while (continuar) {
    let pergunta  = "ABRIGOS TEMPORÁRIOS\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar abrigo\n"
		pergunta += "2. Listar abrigos\n"
		pergunta += "3. Procurar abrigo\n"
		pergunta += "0. Sair"

let resposta = Number(prompt(pergunta))

switch (resposta) {
    case 1:
        cadastrar()
        break
    case 2:
        listar()
        break
    case 3:
        buscar()
        break
    case 0:
        sair()
        break
    }

}