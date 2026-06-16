

document.addEventListener('DOMContentLoaded', function () {
    const botaoMenu = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('#menu-principal');


    if (botaoMenu && menuPrincipal) {
        botaoMenu.addEventListener('click', function () {
            const abriu = menuPrincipal.classList.toggle('aberto');
            botaoMenu.setAttribute('aria-expanded', abriu ? 'true' : 'false');
            botaoMenu.textContent = abriu ? '✕ Fechar menu' : '☰ Menu';
        });


        const linksMenu = menuPrincipal.querySelectorAll('a');
        linksMenu.forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 700) {
                    menuPrincipal.classList.remove('aberto');
                    botaoMenu.setAttribute('aria-expanded', 'false');
                    botaoMenu.textContent = '☰ Menu';
                }
            });
        });
    }

  
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav a');

    links.forEach(function (link) {
        const destino = link.getAttribute('href');
        if (destino === paginaAtual) {
            link.classList.add('ativo');
        }
    });

   
    document.querySelectorAll('main a[href^="http"]').forEach(function (link) {
        link.classList.add('link-externo');
        link.setAttribute('rel', 'noopener noreferrer');
    });

  
    const botaoTopo = document.createElement('button');
    botaoTopo.textContent = '↑ Topo';
    botaoTopo.className = 'botao-topo';
    botaoTopo.setAttribute('type', 'button');
    botaoTopo.setAttribute('aria-label', 'Voltar ao topo da página');
    document.body.appendChild(botaoTopo);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 250) {
            botaoTopo.classList.add('mostrar');
        } else {
            botaoTopo.classList.remove('mostrar');
        }
    });

    botaoTopo.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

   
    const barra = document.createElement('div');
    barra.className = 'barra-progresso';
    document.body.appendChild(barra);

    window.addEventListener('scroll', function () {
        const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
        const progresso = alturaTotal > 0 ? (window.scrollY / alturaTotal) * 100 : 0;
        barra.style.width = progresso + '%';
    });

  
    const formulario = document.querySelector('form');
    if (formulario) {
        const aviso = document.createElement('p');
        aviso.className = 'aviso-formulario';
        aviso.textContent = 'Preencha os campos e clique em enviar para testar a interação do formulário.';
        formulario.appendChild(aviso);

        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();
            aviso.textContent = 'Mensagem registrada apenas como teste do projeto acadêmico.';
        });
    }

 
    const galeria = document.querySelector('.galeria');
    if (galeria) {
        const modal = document.createElement('div');
        modal.className = 'modal-galeria';
        modal.innerHTML = '<div class="modal-conteudo"><button class="fechar-modal" type="button">Fechar</button><img src="" alt=""><p class="modal-legenda"></p></div>';
        document.body.appendChild(modal);

        const imgModal = modal.querySelector('img');
        const legendaModal = modal.querySelector('.modal-legenda');
        const fecharModal = modal.querySelector('.fechar-modal');

        galeria.querySelectorAll('img').forEach(function (imagem) {
            imagem.addEventListener('click', function () {
                imgModal.src = imagem.currentSrc || imagem.src;
                imgModal.alt = imagem.alt;
                const legenda = imagem.closest('figure').querySelector('figcaption');
                legendaModal.textContent = legenda ? legenda.textContent : imagem.alt;
                modal.classList.add('aberto');
            });
        });

        fecharModal.addEventListener('click', function () {
            modal.classList.remove('aberto');
        });

        modal.addEventListener('click', function (evento) {
            if (evento.target === modal) {
                modal.classList.remove('aberto');
            }
        });

        document.addEventListener('keydown', function (evento) {
            if (evento.key === 'Escape') {
                modal.classList.remove('aberto');
            }
        });
    }
});
