// Entrar no site (hub inicial)
function entrarSite() {
    document.getElementById("hub").style.display = "none";
    document.getElementById("site").style.display = "block";
}

// Rolagem suave menu
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carregar projetos do JSON
fetch('projetos.json')
    .then(response => response.json())
    .then(data => {
        const projectList = document.getElementById('project-list');

        data.projetos.forEach(projeto => {
          const card = `
    <div class="col-md-4">
        <div class="card project-card">
            <div class="card-body">
                <h5 class="card-title">${projeto.nome}</h5>
                <p class="card-text">${projeto.descricao}</p>
                <a href="${projeto.github}" target="_blank" rel="noopener noreferrer" class="btn btn-custom">GitHub</a>
                <a href="${projeto.drive}" target="_blank" rel="noopener noreferrer" class="btn btn-custom">Google Drive</a>
            </div>
        </div>
    </div>
`;

            projectList.innerHTML += card;
        });
    });