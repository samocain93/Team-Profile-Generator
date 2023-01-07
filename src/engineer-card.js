function engineerCard(engineer) {
    return `
    <div class="card">
    <h3>${engineer.name}</h3>
<h4>Engineer</h4>
<ul>
    <li>Employee ID: ${engineer.id}</li>
    <li>Email: ${engineer.email}</li>
    <li>GitHub Username: ${engineer.github}</li>
</ul>
</div>
    `
}

module.exports = engineerCard;