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
        <section class="banner">
            <div class="ladoEsquerdo">
                <p>Autor de Abril</p>
                <h1>Eric-Emanuel Schmitt</h1>
                <p>Eric-Emmanuel Schmitt recebeu mais de 20 prêmios e distinções literárias e, em 2001, o título de Chevalier des Arts et des Lettres. 
                    Seus livros foram traduzidos para mais de 40 idiomas.</p>
                <a href="https://pt.wikipedia.org/wiki/%C3%89ric-Emmanuel_Schmitt">Acessar página do livro</a>
            </div>
            <div>
                <img src="../src/components/livroEric.svg" alt="">
            </div>
        </section>
        <section class="fileira">
            <hr>
            <ul>
                <li>
                    <span class="fa-solid fa-truck-fast" style="color: #241f31;"></span>
                    <p>Frete grátis para SC</p>
                </li>
                <li>
                    <span class="fa-solid fa-star" style="color: #241f31;"></span>
                    <p>Livros recomendados</p>
                </li>
            </ul>
        </section>
    </main>
    </body>
    <footer>
  <div>
  IFBooks
</div>
<div>
  Contato
  <ul>
    <li>+55 47 40045263</li>
    <li>8h às 23h - Seg a Sex</li>
    <li>Contato@ifbooks.com</li>
  </ul>
</div>
<hr>
<p>&copy; Alguns direitos reservados. IFbooks 2025.</p>
</footer>
</template>

<style>
</style>