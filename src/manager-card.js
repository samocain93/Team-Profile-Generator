function managerCard(manager) {
  return `
    <div class="row">
    <div class="container d-flex flex-wrap col-12 justify-content-around">
      <div class="card col-3 m-3 mb-5 employee-card shadow-lg">
        <div class="card-header employee-header bg-primary">
          <h3 class="card-title p-1">Michael Scott</h3>
          <h5 class="card-subtitle">
            <i class="fa-solid fa-mug-saucer"></i> Manager
          </h5>
        </div>
        <div class="card-body bg-light">
          <ul class="list-group list-group-flush bg-white">
            <li class="list-group-item">Employee ID: 100</li>
            <li class="list-group-item">
              Email Address:
              <a href="mailto:michael@scott.com">michael@scott.com</a>
            </li>
            <li class="list-group-item">Office number: 1</li>
          </ul>
        </div>
      </div>
    `;
}

module.exports = managerCard;
