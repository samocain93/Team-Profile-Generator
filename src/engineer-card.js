function engineerCard(engineer) {
    return `
    <div class="card col-3 m-3 mb-5 employee-card shadow-lg">
    <div class="card-header employee-header bg-primary">
      <h3 class="card-title p-1">${engineer.name}</h3>
      <h5 class="card-subtitle">
        <i class="fa-brands fa-github"></i> ${engineer.getRole()}
      </h5>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group list-group-flush bg-white">
        <li class="list-group-item">Employee ID: ${engineer.id}</li>
        <li class="list-group-item">
          Email Address:
          <a href="mailto:${engineer.email}">${engineer.email}</a>
        </li>
        <li class="list-group-item">
          GitHub Username:
          <a href="https://github.com/${engineer.github}" target="_blank"
            >${engineer.github}</a
          >
        </li>
      </ul>
    </div>
  </div>
    `
}

module.exports = engineerCard;