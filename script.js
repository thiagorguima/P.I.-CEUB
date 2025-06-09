// Função para alternar telas
function showScreen(screenId) {
    // Esconde todas as telas
    const screens = document.querySelectorAll('div[id$="-screen"]');
    screens.forEach((screen) => (screen.style.display = 'none'));

    // Mostra a tela desejada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.style.display = 'block';
    }
}

// Evento para o botão "Entrar" na tela de login
document.getElementById('login-submit').addEventListener('click', function () {
    // Verifica se os campos de login foram preenchidos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Redireciona para a tela de criação de perfil
    showScreen('profile-screen');
});

// Função para entrar no menu (caso seja necessário)
function enterMenu() {
    showScreen('menu-screen');
}

// Função para retornar ao menu principal
function returnToMenu() {
    showScreen('menu-screen');
}

// Função para alternar telas
function showScreen(screenId) {
    // Esconde todas as telas
    const screens = document.querySelectorAll('div[id$="-screen"]');
    screens.forEach((screen) => (screen.style.display = 'none'));

    // Mostra a tela desejada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.style.display = 'block';
    }
}

// Dados do conteúdo
const content = {
    oracoes: [
        "Pai Nosso: Pai nosso, que estais no céu, santificado seja o vosso nome...",
        "Ave Maria: Ave Maria, cheia de graça, o Senhor é convosco...",
        "Credo: Creio em Deus Pai todo-poderoso, criador do céu e da terra...",
        "Glória ao Pai: Glória ao Pai, ao Filho e ao Espírito Santo...",
        "Salve Rainha: Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa...",
    ],
    meditacoes: [
        "A importância de reservar um momento para contemplar o silêncio e ouvir a voz de Deus.",
        "Reflexão sobre como a gratidão transforma o coração e aproxima da espiritualidade.",
        "Meditar na natureza como um reflexo da obra divina e do amor de Deus.",
        "A prática de respirar profundamente e confiar em Deus em momentos de angústia.",
        "Como meditar na Palavra de Deus pode trazer paz e clareza espiritual.",
    ],
    devocionario: [
        "Reflexão sobre a bondade infinita de Deus em nossas vidas.",
        "Oração para agradecer pelas pequenas vitórias do dia a dia.",
        "Meditação sobre o sacrifício de Cristo e seu impacto em nossa salvação.",
        "Exercício devocional para fortalecer a fé em tempos de incerteza.",
        "Texto sobre a importância de caminhar com Deus diariamente.",
    ],
    liturgia: [
        "Leitura do Evangelho segundo Mateus 5:13-16: 'Vós sois a luz do mundo...'",
        "Reflexão litúrgica sobre o Salmo 23: 'O Senhor é meu pastor, nada me faltará.'",
        "Meditação sobre a importância do perdão na caminhada cristã.",
        "Mensagem da liturgia do domingo: O amor ao próximo como base da fé.",
        "Texto sobre a relevância da liturgia para a união da comunidade cristã.",
    ],
    playlist: [
        { name: "Oceans (Where Feet May Fail)", link: "https://www.youtube.com/watch?v=dy9nwe9_xzw" },
        { name: "Amazing Grace", link: "https://www.youtube.com/watch?v=u6MqUqtTlLI" },
        { name: "Teu Amor Não Falha", link: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
        { name: "Quão Grande É o Meu Deus", link: "https://www.youtube.com/watch?v=3WBvYl_ovS4" },
        { name: "Sonda-me, Usa-me", link: "https://www.youtube.com/watch?v=XOiV8G3_dfg" },
        { name: "Aclame ao Senhor", link: "https://www.youtube.com/watch?v=4F6Ew7hdZG4" },
        { name: "Tu És Fiel, Senhor", link: "https://www.youtube.com/watch?v=yhwOK5YfBvU" },
        { name: "Grandes Coisas", link: "https://www.youtube.com/watch?v=8F4ZjKFtBSc" },
        { name: "Não Há Outro Igual", link: "https://www.youtube.com/watch?v=WUb6LQlCFQU" },
        { name: "Agnus Dei", link: "https://www.youtube.com/watch?v=HPBmFwBSGb0" },
    ],
    filmes: [
        "A Paixão de Cristo",
        "Os Dez Mandamentos",
        "Quarto de Guerra",
        "Deus Não Está Morto",
        "Milagres do Paraíso",
        "O Príncipe do Egito",
        "O Apóstolo Paulo",
        "Uma Prova de Fé",
        "A História de Ruth",
        "José, Rei dos Sonhos",
    ],
};

// Função para carregar conteúdo dinâmico
function loadContent(topic) {
    const contentScreen = document.getElementById('content-screen');
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = ''; // Limpa o conteúdo anterior

    // Adiciona o conteúdo baseado no tópico selecionado
    if (content[topic]) {
        content[topic].forEach((item) => {
            const element = document.createElement('p');
            if (typeof item === 'object' && item.link) {
                // Para itens com link (playlist)
                const linkElement = document.createElement('a');
                linkElement.href = item.link;
                linkElement.target = '_blank';
                linkElement.textContent = item.name;
                element.appendChild(linkElement);
            } else {
                // Para texto normal
                element.textContent = item;
            }
            contentContainer.appendChild(element);
        });
    } else {
        contentContainer.textContent = 'Conteúdo não encontrado.';
    }

    showScreen('content-screen');
}

// Evento para os botões do menu
document.querySelectorAll('.menu button').forEach((button) => {
    button.addEventListener('click', () => {
        const topic = button.getAttribute('data-topic'); // Define o atributo 'data-topic' nos botões
        loadContent(topic);
    });
});

// Função para salvar o perfil
function saveProfile() {
    const username = document.getElementById('username-input').value;
    const avatar = document.getElementById('avatar').src;

    if (!username || avatar === 'perfil.png') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Exibe o botão "Entrar"
    document.getElementById('enter-button').style.display = 'block';
    document.getElementById('save-button').style.display = 'none';
}

// Função para verificar se o perfil foi completado
function checkProfileCompletion() {
    const username = document.getElementById('username-input').value;
    const avatar = document.getElementById('avatar').src;
    const saveButton = document.getElementById('save-button');

    if (username && avatar !== 'perfil.png') {
        saveButton.disabled = false;
    } else {
        saveButton.disabled = true;
    }
}

// Função para escolher um avatar ou emoji
function chooseAvatar() {
    const emoji = prompt('Escolha um emoji para seu avatar: 😊 😎 🐱');
    const avatarImage = document.getElementById('avatar');

    if (emoji) {
        avatarImage.src = 'data:image/svg+xml;base64,' + btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><text x="10" y="40" font-size="40">${emoji}</text></svg>`);
        checkProfileCompletion();
    }
}

// Função para entrar no menu
function enterMenu() {
    showScreen('menu-screen');
}
