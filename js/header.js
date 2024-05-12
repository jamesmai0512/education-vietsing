class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
     <!-- Topbar Start -->
    <div class="container-fluid bg-dark text-light p-0">
      <div class="row gx-0 d-none d-lg-flex">
        <div class="col-lg-7 px-5 text-start">
          <div class="h-100 d-inline-flex align-items-center me-4">
            <small class="fa fa-map-marker-alt text-primary me-2"></small>
            <small
              >D2A toà nhà Topaz Elite, quận 8, Ho Chi Minh City, Vietnam</small
            >
          </div>
        </div>
        <div
          class="col-lg-5 px-5 text-end"
          style="padding-right: 2rem !important"
        >
          <div class="h-100 d-inline-flex align-items-center me-4">
            <small class="fa fa-phone-alt text-primary me-2"></small>
            <small>+84 79899 9123</small>
          </div>
          <div class="h-100 d-inline-flex align-items-center mx-n2">
            <a
              class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
              href="https://www.facebook.com/profile.php?id=100089690693691"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a
              class="btn btn-square btn-link rounded-0 border-0 border-secondary"
              href="https://www.tiktok.com/@duhoccungvietsing"
              ><i class="fab fa-tiktok"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
      <a
        href="index.html"
        class="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
      >
        <h2 class="m-0">
          <img class="logo-vietsing" src="./img/logokhongslogan.png" alt="" />
        </h2>
      </a>
      <button
        type="button"
        class="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <a href="index.html" class="nav-item nav-link">Home</a>
          <a href="about.html" class="nav-item nav-link">About</a>
          <a href="courses.html" class="nav-item nav-link">Courses</a>
          <a href="feature.html" class="nav-item nav-link">Features</a>
          
        <a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >Get Started<i class="fa fa-arrow-right ms-3"></i
        ></a>
      </div>
    </nav>
    <!-- Navbar End -->
    `;
  }
}

customElements.define("header-component", Header);
