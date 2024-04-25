/*Função para exibir o menu em mobile, ela usa queryselector para chamar classes presentes no css, usa container para verificar se a class 'open' existe, usa tambem o remove na qual verifica se a classe open estiver presente ele remove ela da tela (fechando o menu). */

function mostrarMenu() {
    let menuMobile = document.querySelector(".mobile-menu");

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./Imagens/icons8-menu-button.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./Imagens/icons8-close.svg";
    }

}
function closeMobileMenu() {
    document.getElementById("mobileMenu").classList.remove('open');
}

/*Funcao para retornar os valores inseridos pelo usuario.*/

function dadosCliente() {
    let produto = document.getElementById('produto').value;
    let bolo = document.getElementById('bolo').value;
    let recheio = document.getElementById('recheio').value;
    let tamanho = document.getElementById('tamanho').value;
    let pagamento = document.getElementById('pagamento').value;
    let observacoes = document.getElementById('observacoes').value;

    /*Variavel formatada em html para exibir os dados das variaveis anteriores.*/

    let pedidoText = `
        <p class="pedido-text">Pedido Realizado,<br>
            <span class="Cris"> Delícias da Cris  <br> Agradece!</span><br><hr>
            <span class="pedido">Produto:</span> ${produto}<br>
            <span class="pedido">Bolo:</span> ${bolo}<br>
            <span class="pedido">Recheio:</span> ${recheio}<br>
            <span class="pedido">Tamanho:</span> ${tamanho}<br>
            <span class="pedido">Pagamento:</span> ${pagamento}<br>
            <span class="pedido">Observações:</span> ${observacoes}
        </p>
    `;

    /*Cria uma tag <div></div> pelo Js para e insere os dados da variavel anterior "pedidoText" dentro dela.*/

    let ordemPedido = document.createElement('div');
    ordemPedido.innerHTML = pedidoText;
    ordemPedido.classList.add('pedido-confirmacao');

    let formsElement = document.getElementById('pedidoCliente');
    formsElement.innerHTML = '';
    formsElement.appendChild(ordemPedido);
}

function inscricaoCliente() {
    let emailCliente = document.getElementById("emailCliente").value;
    let btn_footer = document.getElementById("btn_footer");
    btn_footer.innerText = "Inscrito";
}
