function internCard(intern) {
    return `
    <div class="card">
    <h3>${intern.name}</h3>
<h4>Intern</h4>
<ul>
    <li>Employee ID: ${intern.id}</li>
    <li>Email: ${intern.email}</li>
    <li>School: ${intern.school}</li>
</ul>
</div>
    `
}

module.exports = internCard;