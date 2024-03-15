function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light'); // Forma mais reduzida e menos trabalhosa

    // Pegar a tag img
    const img = document.querySelector("#profile img");

    // Substituir a imagem
    if (html.classList.contains('light')) {
        // Se estiver em light mode, adicionar a imagem para light mode
        img.setAttribute('src', './assets/assets/avatar-light.png');
        img.setAttribute('alt', 'Foto de Eduardo Ananias, usando a camisa azul escura, barba e fundo de quintal');
    } else {
        // Se estiver em modo normal, manter a imagem normal
        img.setAttribute('src', './assets/assets/avatar.png');
        img.setAttribute('alt', 'Foto de Eduardo Ananias, usando a camisa preta e branca, barba e fundo de quintal');
    }
}
