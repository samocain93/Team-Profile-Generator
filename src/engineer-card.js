function engineerCard(engineer) {
    return `
    <div class="card col-3 m-3 mb-5 employee-card shadow-lg">
    <div class="card-header employee-header bg-primary">
      <h3 class="card-title p-1">Kevin Flanagan</h3>
      <h5 class="card-subtitle">
        <i class="fa-brands fa-github"></i> Engineer
      </h5>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group list-group-flush bg-white">
        <li class="list-group-item">Employee ID: 200</li>
        <li class="list-group-item">
          Email Address:
          <a href="mailto:kevin@fakemail.com">kevin@fakemail.com</a>
        </li>
        <li class="list-group-item">
          GitHub Username:
          <a href="https://github.com/kevinaok25" target="_blank"
            >kevinaok25</a
          >
        </li>
      </ul>
    </div>
  </div>
    `
}

module.exports = engineerCard;