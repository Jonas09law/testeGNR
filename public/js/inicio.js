document.addEventListener('DOMContentLoaded', () => {
    const userRank = parseInt(localStorage.getItem('userRank'), 10);
    console.log('Rank do usuário:', userRank); // Depuração

    const optionsElement = document.getElementById('options');

    if (userRank >= 8) {
        optionsElement.innerHTML = `
            <a href="logs.html" class="button">Logs Discord</a>
            <a href="relatorios.html" class="button">Relatórios</a>
            <a href="database.html" class="button">Historico De Relatórios</a>
        `;
    } else {
        optionsElement.innerHTML = `
            <a href="relatorios.html" class="button">Relatórios</a>
            <a href="logs.html" class="button">Logs Discord</a>
            <a href="database.html" class="button">Historico De Relatórios</a>
        `;
    }
});
