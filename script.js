
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MENU DE NAVEGAÇÃO
    // ==========================================

    const menu = document.getElementById('menu');
    const botao = document.getElementById('botao-menu');

    if (botao && menu) {
        botao.addEventListener('click', () => {
            const aberto = menu.classList.toggle('aberto');

            document.body.classList.toggle('menu-aberto', aberto);
            botao.setAttribute('aria-expanded', String(aberto));
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('aberto');
                document.body.classList.remove('menu-aberto');
                botao.setAttribute('aria-expanded', 'false');
            });
        });
    }


    // ==========================================
    // 2. ANO ATUAL DO RODAPÉ
    // ==========================================

    const ano = document.getElementById('ano-atual');

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }


    // ==========================================
    // 3. BOTÃO VOLTAR AO TOPO
    // ==========================================

    const topo = document.getElementById('voltar-topo');

    if (topo) {
        topo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', () => {
            topo.classList.toggle('visivel', window.scrollY > 500);
        });
    }


    // ==========================================
    // 4. FORMULÁRIO DE CONTATO
    // ==========================================

    const formulario = document.getElementById('formulario-contato');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const obterValor = (id) => {
                return (document.getElementById(id)?.value || '').trim();
            };

            const nome = obterValor('nome');
            const email = obterValor('email');
            const assunto = obterValor('assunto') || 'Contato pelo portfólio';
            const mensagem = obterValor('mensagem');

            const destinatario = 'fuzioncodl@gmail.com';

            const corpo = `
Nome: ${nome}
E-mail: ${email}

Mensagem:
${mensagem}
            `.trim();

            const linkEmail = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

            window.location.href = linkEmail;

            const aviso = document.getElementById('mensagem-formulario');

            if (aviso) {
                aviso.textContent =
                    'Seu aplicativo de e-mail será aberto para revisar e enviar a mensagem.';
            }
        });
    }

});
