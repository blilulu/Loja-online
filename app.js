


 function calcularTotal(itens) {

   let total = 0

   for (let i = 0; i < itens.length; i++) {

       total += itens[i].preco

   }

       // Aplicar desconto fidelidade
       // Antes de retornar o valor final
       
   return total
}