//recuperando altura e largura da window
	var altura = 0
	var largura = 0
	var vidas = 1 //representando as vidas do jogo
	var tempo = 15 //representando 10 segundos

	var criaMosquitoTempo = 1500

	//Recuperando a tela selecionada no inicio do jogo
	var nivel = window.location.search
	alert(nivel.replace('?', ''))//Substituindo caractere ? para vazio

	if(nivel === 'noraml') {
		//1500
		criaMosquitoTempo = 1500
	} else if(nivel === 'dificil') {
		//1000
		criaMosquitoTempo = 1000
	}else if (nivel === 'chucknorris') {
		//750
		criaMosquitoTempo = 750
	}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

	ajustaTamanhoPalcoJogo()

	//Criando variável cronometro
	var cronometro = setInterval(function() {
		tempo -= 1

		//testar se o tempo -e menor que zero
		if(tempo < 0) {
			clearInterval(cronometro)
			clearInterval(criaMosquito)
			window.location.href = 'vitoria.html'
		} else {
		document.getElementById('cronometro').innerHTML = tempo
		}
	}, 1000)

function posicaoRandomica() {

	//remover o mosquito nterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//Selecionar os corações e substituir
		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 3) {
			//Redirecionando página para fim_de_jogo.html
			window.location.href = 'fim_de_jogo.html'
		} else {
		document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			//Incrementando a variável vida
			vidas++
		}
	}

	//Criando random
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//Criar elemento HTML
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove() //Removendo mosquito ao clicar
	}

	document.body.appendChild(mosquito)

	ladoAleatorio()

}

//Crinando uma função aleatória
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3) // Resultado entre zero e próximo de 3

	//Tomada de decisão
	switch(classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:	
			return 'mosquito3'
	}
}

// Criando uma função lado aleatório
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2) // Resultado entre zero e próximo de 2

	//Tomada de decisão
	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'

	}
}