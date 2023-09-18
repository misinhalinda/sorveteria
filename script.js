botao.addEventListener("click", function () {
    
    var nomecliente = nome.value;
    var quantidadeSorvete = quantidade.value;
    var saborSorvete = sabores.value;
    
    
   /* alert( "Nome:" + nomecliente + 
   "Qnt:" + quantidadeSorvete + 
   "Sabor:" + saborSorvete); */
     

pedido.innerHTML = nomeCliente;
pedidoQuantia.innerHTML = quantiaSorvete; 
pedidoSabor.innerHTML = saborSorvete;

});