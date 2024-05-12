class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div
      class="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <h4 class="text-white mb-4">Get In Touch</h4>
            <h2 class="text-primary mb-4">
              <img
                class="logo-vietsing"
                src="./img/logokhongslogan.png"
                alt=""
              />
            </h2>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt me-3"></i>D2A toà nhà Topaz Elite,
              Tạ Quang Bửu, phường 4, quận 8, Ho Chi Minh City, Vietnam
            </p>
            <p class="mb-2">
              <i class="fa fa-phone-alt me-3"></i>+84 79899 9123
            </p>
            <p class="mb-2">
              <i class="fa fa-envelope me-3"></i>vietsing.education@gmail.com
            </p>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Quick Links</h4>
            <a class="btn btn-link" href="">About Us</a>
            <a class="btn btn-link" href="">Contact Us</a>
            <a class="btn btn-link" href="">Our Services</a>
            <a class="btn btn-link" href="">Terms & Condition</a>
            <a class="btn btn-link" href="">Support</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Popular Links</h4>
            <a class="btn btn-link" href="">About Us</a>
            <a class="btn btn-link" href="">Contact Us</a>
            <a class="btn btn-link" href="">Our Services</a>
            <a class="btn btn-link" href="">Terms & Condition</a>
            <a class="btn btn-link" href="">Support</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-light mb-4">Newsletter</h4>
            <form action="">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control p-3 border-0"
                  placeholder="Your Email Address"
                />
                <button class="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <h6 class="text-white mt-4 mb-3">Follow Us</h6>
            <div class="d-flex pt-2">
              <a class="btn btn-square btn-outline-light me-1" href=""
                ><i class="fab fa-twitter"></i
              ></a>
              <a class="btn btn-square btn-outline-light me-1" href=""
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a class="btn btn-square btn-outline-light me-1" href=""
                ><i class="fab fa-youtube"></i
              ></a>
              <a class="btn btn-square btn-outline-light me-0" href=""
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("footer-component", Footer);
