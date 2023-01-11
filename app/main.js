const contos = [
   {
       titulo: "o ufo",
       agente: "paul",
       local: "casa sp",
       data: "1998",
       conto: " This article is about the general framework of distance and direction. For the space beyond Earth's atmosphere, see Outer space. For the writing separator, see Space (punctuation). For other uses, see Space (disambiguation).A right-handed three-dimensional Cartesian coordinate system used to indicate positions in space.Space is the boundless three-dimensional extent in which objects and events have relative position and direction.[1] In classical physics, physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework. "
       },
       {
        titulo: "mariola",
        agente: "dave doidao",
        local: "san lorrant",
        data: "1998",
        conto: "Debates concerning the nature, essence and the mode of existence of space date back to antiquity; namely, to treatises like the Timaeus of Plato, or Socrates in his reflections on what the Greeks called khôra (i.e. space), or in the Physics of Aristotle (Book IV, Delta) in the definition of topos (i.e. place), or in the later geometrical conception of place as space qua extension in the Discourse on Place (Qawl fi al-Makan) of the 11th-century Arab polymath Alhazen.[2] Many of these classical philosophical questions were discussed in the Renaissance and then reformulated in the 17th century, particularly during the early development of classical mechanics. In Isaac Newton's view, space was absolute—in the sense that it existed permanently and independently of whether there was any matter in the space.[3] Other natural philosophers, notably Gottfried Leibniz, thought instead that space was in fact a collection of relations between objects, given by their distance and direction from one another. In the 18th century, the philosopher and theologian George Berkeley attempted to refute the visibility of spatial depth in his Essay Towards a New Theory of Vision. Later, the metaphysician Immanuel Kant said that the concepts of space and time are not empirical ones derived from experiences of the outside world—they are elements of an already given systematic framework that humans possess and use to structure all experiences. Kant referred to the experience of space in his Critique of Pure Reason as being a subjective pure a priori form of intuition.In the 19th and 20th centuries mathematicians began to examine geometries that are non-Euclidean, in which space is conceived as curved, rather than flat. According to Albert Einstein's theory of general relativity, space around gravitational fields deviates from Euclidean space.[4] Experimental tests of general relativity have confirmed that non-Euclidean geometries provide a better model for the shape of space."

        
       },
       {
           titulo:"o cagado e a festa no ceu",
           agente:"rebeca ",
           local:"sergipe ",
           data:" 1950",
           conto:"Uma vez houve três dias de festa no céu; todos os bichos lá foram; mas nos dois primeiros dias o cágado não pôde ir, por andar muito devagar. Quando os outros vinham de volta, ele ia no meio do caminho. No último dia, mostrando ele grande vontade de ir, a garça se ofereceu para levá-los nas costas. O cágado aceitou, e montou-se; mas a malvada ia sempre perguntando se ele ainda via a terra, e quando o cágado disse que não avistava mais a terra, ela o largou no ar e o pobre veio rolando e dizendo:“Léu, léu, léu, Se eu desta escapar, Nunca mais bodas ao céu...”E também: “Arredem-se, pedras, paus, senão vos quebrareis.” As pedras e paus se afastaram, e ele caiu; porém todo arrebentado. Deus teve pena e juntou os pedacinhos e deu-lhe de novo a vida em paga da grande vontade que ele teve de ir ao céu. Por isso é que o cágado tem o casco em forma de remendos."
       },
       {
           
            titulo: "o macaco e a cotia",
            agente: "geoge",
            local: "amapa",
            data:"1898",
            conto: "O macaco foi dançar na casa da cotia; a cotia, de sabida, mandou o macaco tocar, dando-lhe uma rabeca. A cotia começou a dançar, e, no virar à roda, deu uma embigada na parede e partiu o rabo. Todos os que tinham rabo ficaram vendo isto, com medo de dançar. Então o preá disse: “Ora, vocês estão com medo de dançar! Mandem tocar, e vão ver obra!”O macaco ficou logo desconfiado, e trepou-se num banco e pôs-se a tocar para o preá dançar. O preá deu umas voltas e foi dar sua embigada no mestre macaco, que não teve outro jeito senão entrar também na dança das cotias e dos outros animais, e todos lhe pisaram no rabo.Então ele disse: “Não danço mais, porque compadre preá e compadre sapo não devem dançar pisando no rabo dos outros, porque eles não têm rabo pra nele se pisar.” Pulou para cima da janela e de lá tocava sem ser incomodado."

       },
       {
        titulo:"a raposa e o tucano",
        agente: "cancer jack",
        local: "hard sand sant",
        data:"1999",
        conto: "A raposa entendeu que devia andar debicando o tucano. Uma vez o convidou para jantar na casa dela. O tucano foi. A raposa fez mingau para o jantar e espalhou em cima de uma pedra, e o pobre tucano nada pôde comer, e até machucou muito o seu grande bico. O tucano procurou um meio de vingar-se.Daí a tempos foi à casa da raposa e lhe disse: “Comadre, você outro dia me obsequiou tanto, dando-me aquele jantar; agora é chegada a minha vez de lhe pagar na mesma moeda: venho convidá-la para ir jantar comigo. Vamo-nos embora, que o petisco está bom.” A raposa aceitou o convite e foram-se ambos.Ora, o tucano preparou também mingau e botou dentro de um jarro de pescoço estreito. O tucano metia o bico e quando tirava vinha-se regalando. A raposa nada comeu, lambendo apenas algum pingo que caía fora do jarro. Acabado o jantar disse: “Isto, comadre, é para você não querer-se fazer mais sabida do que os outros”."
       }

]

 var texto = document.querySelector('.texto')
    var conto = document.querySelector('.conto')
    var agente = document.querySelector('.agente')
    var local = document.querySelector('.local')
    var data = document.querySelector('.data')
   var boas = document.querySelector('.boas')
   var text = document.querySelector('#livros')
   var papel = document.querySelector(".conteudo-container")

function leConto(i){
   
    
    conto.innerHTML = contos[i].titulo
    agente.innerHTML = contos[i].agente
    local.innerHTML = contos[i].local
    data.innerHTML = contos[i].data
    texto.innerHTML =  contos[i].conto
    boas.innerHTML = ''
    text.innerHTML = ''
     
}
function lista(listaContos){
  
    listaContos.forEach((cont, i) => {
       text.innerHTML += `
       <div class="livro" onclick="leConto(${i} )">
     
       <h2 class="livro__titulo">
         ${cont.titulo}
       </h2>
       <p class="livro__descricao">${cont.agente}</p>
       <p class="livro__preco" id="preco"></p>
       <div class="tags">
         <span class="tag"></span>
       </div>
     </div>
       ` 
    });
    conto.innerHTML = ''
    agente.innerHTML = ''
    local.innerHTML = ''
    data.innerHTML =''
    texto.innerHTML =''  
    boas.innerHTML = ''
    
    
    
   
}

console.table(contos)