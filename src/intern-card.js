function internCard(intern) {
    return `
    <div class="card col-3 m-3 mb-5 employee-card shadow-lg">
            <div class="card-header employee-header bg-primary">
              <h3 class="card-title p-1">${intern.name}</h3>
              <h5 class="card-subtitle">
                <i class="fa-solid fa-user"></i> ${intern.getRole()}
              </h5>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group list-group-flush bg-white">
                <li class="list-group-item">Employee ID: ${intern.id}</li>
                <li class="list-group-item">
                  Email Address: <a href="mailto:${intern.email}">${intern.email}</a>
                </li>
                <li class="list-group-item">
                  School: ${intern.school}
                </li>
              </ul>
            </div>
          </div>
    `
}

module.exports = internCard;