<script setup>

</script>

<template>
  <head>
    <header>
        <nav>
        <img src="../src/components/Logo.png" alt="Logo IFBooks">
        <div class="search">
            <input type="text" placeholder="Pesquisar">
            <img src="../src/components/lupa.svg" alt="lupa">
        </div>
        <ul>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Envio</a></li>
            <li><a href="#">Devoluções</a></li>
            <li><button><span class="fa-solid fa-cart-shopping" style="color: #33d17a;"></span></button></li>
            <li><button><span class="fa-solid fa-heart" style="color: #33d17a;"></span></button></li>
            <li><button><span class="fa-solid fa-user" style="color: #33d17a;"></span></button></li>
        </ul>
        </nav>
        <hr>
    </header>
    </head>
<body>
<main>

<section class="carrinho">
    <h2>Carrinho</h2>
    <div>
      <ul>
        <li>Titulo</li>
        <li>Quantidade</li>
        <li>Subtotal</li>
      </ul>
      <hr>
  
  
      <hr>
  
  
    </div>
  </section>
  <section>
    <button>Voltar para a loja</button>
    <div>
      <input type="text" placeholder="Codigo de cupom">
      <button>Inserir cupom</button>
    </div>
    <div>
      <h4>Total da Compra</h4>
      <ul>
        <li>Produtos</li>
        <hr>
        <li>Frete</li>
        <hr>
        <li>Total</li>
      </ul>
      <button>Ir para o pagamento</button>
    </div>
  </section>
      </main>
  </body>
</template>

<style>

</style>