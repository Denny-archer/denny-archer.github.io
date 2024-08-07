<script>
    function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
          setTimeout(() => elemento.innerHTML += letra, 100 * i)

                 
        } );
    } 
    
    const titulo = document.querySelector('h1');
    typeWrite(titulo);

    
    window.sr = ScrollReveal({ reset: true });

sr.reveal('.apresentacao', { duration: 2000 });

sr.reveal('.outro-inicio', { duration: 2000});

sr.reveal('.titulo', { duration: 2000});



    </script>