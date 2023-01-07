function managerCard(manager) {
    return `
    <div class="card">
    <h3>${manager.name}</h3>
<h4>Manager</h4>
<ul>
    <li>Employee ID: ${manager.id}</li>
    <li>Email: ${manager.email}</li>
    <li>Office number: ${manager.officeNumber}</li>
</ul>
</div>
    `
}

module.exports = managerCard;