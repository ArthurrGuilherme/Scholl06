
function abrirPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function enviarFeedback() {
    let feedback = document.getElementById("feedbackText").value.trim();
    if (feedback === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Por favor, escreva algo antes de enviar!',
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Exemplo de resposta <br><br>',
            html: 'A flexibilidade é essencial para o equilíbrio emocional, pois permite que as pessoas enfrentem mudanças sem sofrer impactos negativos excessivos. Segundo o texto, esta habilidade está associada à resiliência e ao otimismo, que ajudam na superação de adversidades. Ao aprender a ajustar comportamentos e pensamentos sem renunciar a valores essenciais, os indivíduos conseguem lidar melhor com desafios e evitar padrões rígidos de pensamento, o que fortalece tanto o desenvolvimento pessoal quanto relações interpessoais.<br><br>',
        });
        fecharPopup();
    }
}


function abrirPopup2() {
    document.getElementById("popup2").style.display = "block";
    document.getElementById("overlay2").style.display = "block";
}

function fecharPopup2() {
    document.getElementById("popup2").style.display = "none";
    document.getElementById("overlay2").style.display = "none";
}

function enviarFeedback2() {
    let feedback = document.getElementById("feedbackText2").value.trim();
    if (feedback === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Por favor, escreva algo antes de enviar!',
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Exemplo de resposta <br><br>',
            html: 'A flexibilidade facilita a adaptação a situações inesperadas, permitindo que as pessoas reorganizem seus planos sem comprometer seus objetivos. Seja ao mudar a rota no trânsito ou ao adotar novas tecnologias para otimizar tarefas, esta habilidade ajuda a enfrentar desafios de forma prática e eficiente.<br><br>',
        });
        fecharPopup2();
    }
}


function abrirPopup3() {
    document.getElementById("popup3").style.display = "block";
    document.getElementById("overlay3").style.display = "block";
}

function fecharPopup3() {
    document.getElementById("popup3").style.display = "none";
    document.getElementById("overlay3").style.display = "none";
}

function enviarFeedback3() {
    let feedback = document.getElementById("feedbackText3").value.trim();
    if (feedback === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Por favor, escreva algo antes de enviar!',
        });
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Exemplo de resposta <br><br>',
            html: 'Pessoas que desenvolvem a flexibilidade como um valor essencial conseguem ajustar-se rapidamente às mudanças e novas tendências, buscando conhecimentos inéditos e obtendo um portfólio adaptável. No exemplo da faculdade que ofereceu cursos de conteúdos que estão em alta no mercado, a capacidade de adaptação permite que o estudante desenvolva novos conhecimentos e esteja à frente de concorrentes na busca do primeiro emprego. Como pudemos ver, a flexibilidade é uma importante característica de pessoas adaptáveis e resilientes. Ser flexível não significa abdicar de princípios, mas sim encontrar soluções éticas e adaptativas para situações inesperadas ou desafiadoras. No cotidiano, ou no trabalho, manifesta-se em decisões práticas, como replanejar rotas ou ajustar prioridades, evitando rigidez e promovendo soluções eficazes, principalmente frente às mudanças. A experiência reforça que a flexibilidade é uma habilidade indispensável para enfrentar adversidades, manter a qualidade das nossas atividades acadêmicas ou laborais a fim de fortalecer as relações pessoais, sendo uma ponte entre ética, adaptabilidade e sucesso.<br><br>',
        });
        fecharPopup2();
    }
}