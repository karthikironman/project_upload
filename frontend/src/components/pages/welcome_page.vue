<template>
  <div class="welcome_page">
    <div class="bbody">
      <section id="header">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <a class="navbar-brand" href="#">Upload</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#header">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#features">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#footer">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="container-fluid">
          <div class="container row">
            <div class="col-md-6 intro-div">
              <h1 class="intro-heading">Introduction</h1>
              <p
                class="intro-para"
              >We are upcoming Digital Signage organisation aimed for make in India movement. Very cost affordable asset management and Content Display Screen Signage setup. Getting a Pi and AWS cloud based Iot System for benefiting social communication in eco friendly way, by using our products you can able to reduce paper use. And most effective way is Content management with dedicated database. Hoo.. isn't it cool!!</p>
              <button class="btn btn-lg btn-light" type="button" name="button">Know more..</button>
            </div>
            <div class="col-md-6 login-div">
              <div class="login-form" action="index.html" method="post">
                <h3>Access Your Account</h3>
                <input type="email" name="username" v-model="username" placeholder="Email" />
                <br />
                <input type="password" name="password" v-model="password" placeholder="Password" />
                <br />
                <button class="login-btn" @click="gotoportal()" name="button">Login</button>
                <br />
                <a class="register-link" href="#">Register here</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <h1>Features</h1>
        <div class="container-fluid">
          <div class="container row">
            <div class="col-lg-3 col-md-4 feature-div">
              <h2 class="feature-icon">
                <i class="fas fa-user-cog"></i>
              </h2>
              <h2 class="feature-title">Manage Content</h2>
              <p>Assign administration members to manage content such as admins and moderators.</p>
            </div>
            <div class="col-lg-3 col-md-4 feature-div">
              <h2 class="feature-icon">
                <i class="fas fa-desktop"></i>
              </h2>
              <h2 class="feature-title">Multiple Screens</h2>
              <p>Add many screens from single login.</p>
            </div>
            <div class="col-lg-3 col-md-4 feature-div">
              <h2 class="feature-icon">
                <i class="fas fa-shield-alt"></i>
              </h2>
              <h2 class="feature-title">Safe Database</h2>
              <p>We are using a Secure Database, so you can access a same login environment for controlling your screens.</p>
            </div>
            <div class="col-lg-3 col-md-4 feature-div">
              <h2 class="feature-icon">
                <i class="fas fa-tasks"></i>
              </h2>
              <h2 class="feature-title">Much More</h2>
              <p>We are currently working on other features, Stay tunned!!</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div class="container-fluid row">
          <!-- <div class="container row"> -->
          <div class="col-md-6 image-div">
            <img src="@/assets/team.jpg" alt="team-img" />
          </div>
          <div class="col-md-6 about-div">
            <h2>About Us</h2>
            <p>
              We are Team UPLOAD, budding entrepreneurs from Cambridge Institute of Technology, Bangalore.
              Our Project is aired by IEEE Hac Fundings, we lanuched our Upload 1.o on Oct 9th, 2020. 
            </p>
            <button class="btn btn-lg" type="button" name="button">Know more...</button>
          </div>
          <!-- </div> -->
        </div>
      </section>
      <section id="testimonials">
        <h1 style="margin-top:0" class="pt-4">Testimonials</h1>
        <!-- <div class="container-fluid">
      <div class="container">
      </div>
        </div>-->
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container testimonial-info">
                <img class="profile-img" src="@/assets/profile.png" alt="profile-img" />
                <p>"I wondered this team could change the way of Digital Signage made in India."</p>
                <p class="nameBy">-Dr.Basavaraju C</p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container testimonial-info">
                <img class="profile-img" src="@/assets/profile.png" alt="profile-img" />
                <p>"Team with sheer determination to progress."</p>
                <p class="nameBy">-Mukesh Ambani</p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container testimonial-info">
                <img class="profile-img" src="@/assets/profile.png" alt="profile-img" />
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                <p class="nameBy">-Mukesh Ambani</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section id="footer">
        <div class="container-fluid">
          <div class="container row">
            <div class="col-md-6">
              <h2>Upload</h2>
              <p>Team with sheer determination to progress</p>
              <button
                class="btn btn-sm btn-light footer-btn"
                type="button"
                name="login"
                @click="gotoportal()"
              >Login</button>
              <button class="btn btn-sm btn-light footer-btn" type="button" name="Register">Register</button>
            </div>
            <div class="col-md-6">
              <h2>Contact</h2>
              <span class="contact-icon">
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </span>
              <span class="contact-icon">
                <a href="#">
                  <i class="fas fa-envelope"></i>
                </a>
              </span>
              <span class="contact-icon">
                <a href="#">
                  <i class="fab fa-github"></i>
                </a>
              </span>
              <span class="contact-icon">
                <a href="#">
                  <i class="fab fa-instagram-square"></i>
                </a>
              </span>
              <span class="contact-icon">
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
              </span>
            </div>

            <div class="copyright">
              <hr />
              <small>All Copyright Reserved ©Upload_2020.</small>
              <!-- <p>hello</p> -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    gotoportal() {
      if (
        this.username === "admin@upload.com" &&
        this.password == "superadmin@123"
      ) {
        this.$router.push("/portal/dashboard");
      } else {
        alert("WRONG USERNAME OF PASSWORD");
      }
    }
  }
};
</script>
<style scoped>
.get_start {
  position: absolute;
  right: 1rem;
  border: none;
  border-radius: 6px;
  padding: 3px 10px 3px 10px;
  font-weight: 600;
}
.welcome_page {
  background: white;
  height: calc(100vh);
  width: 100vw;
  position: relative;
  z-index: 10000;
}
.bbody {
  text-align: left;
}
#header {
  background: url("../../assets/background_image.jpg");
  background-repeat: no-repeat;
  background-position: right top;
}
section {
  margin: 0;
}
.navbar {
  padding-left: 2rem;
  padding-right: 2rem;
}
.navbar-brand {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  line-height: inherit;
  white-space: nowrap;
  font-size: 2.5rem !important;
}
.nav-link {
  font-size: 1.3rem;
}
.collapse ul {
  margin: 0.2rem 2rem;
}
.collapse li {
  margin: auto 0.8rem;
}

#header .container-fluid {
  display: flex;
  justify-content: center;
  color: #fff;
}
.intro-div {
  padding: 2rem;
}
.intro-para {
  line-height: 2;
  font-size: 1.3rem;
  margin-top: 1.3rem;
}
.login-div {
  padding: 2rem;
  display: flex;
  justify-content: center;
}
.login-form {
  background-color: #fff;
  color: #000;
  padding: 2rem;
}
.login-btn {
  border: thin;
  border-radius: 5px;
  background-color: #cfcece;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
}
.login-form input {
  font-size: 1.5rem;
  margin-top: 1rem;
  border-radius: 0;
  border: solid #000 thin;
  padding-left: 1rem;
}
.login-btn {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
.login-btn:hover {
  color: #fff;
  background: #000;
}
.register-link {
  font-size: 1rem;
}
#features .container-fluid {
  display: flex;
  justify-content: center;
  background: white;
}
#features h1,
#about h1,
#testimonials h1 {
  margin-top: 2rem;
  text-align: center;
}
#testimonials {
  width: 100vw !important;
  background-color: white;
}
#features .container {
  margin-top: 2rem;
}
.feature-div {
  text-align: center;
  margin-bottom: 2rem;
}
.feature-icon {
  font-size: 2.6rem;
  margin-bottom: 1.5rem;
}
.feature-div p {
  line-height: 1.5;
  margin-bottom: 1.5rem;
}
.feature-title {
  font-size: 1.6rem;
}
#about {
  background: url("../../assets/background_image.jpg");
  background-repeat: no-repeat;
  background-position: right top;
  color: #fff;
}
#about .container-fluid {
  padding: 0;
}
.image-div {
  display: flex;
  justify-content: center;
  padding: 0;
}
.image-div img {
  height: 100%;
  width: 100%;
}
.about-div {
  padding: 2rem;
}
.about-div h2 {
  margin-top: 4rem;
}
.about-div p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 2rem auto;
}
.testimonial-info {
  background: white;
  padding: 1rem 2rem;
  text-align: center;
}
.profile-img {
  margin: 1rem auto;
  border: thin grey;
  border-radius: 100%;
  height: 100px;
  width: 100px;
}
#footer {
  background: url("../../assets/background_image.jpg");
  background-repeat: no-repeat;
  background-position: right top;
  color: #fff;
  padding: 2rem;
}
#footer .container-fluid {
  display: flex;
  justify-content: center;
}
.footer-btn {
  margin: 1rem 1rem 1rem 0;
}
.contact-icon a {
  color: #fff;
  font-size: 2rem;
  margin-right: 1rem;
}

.contact-icon a:hover {
  color: #cbeaed;
}
#footer hr {
  background-color: #fff;
  width: 50%;
  display: block;
}
/* #footer .col-md-6{
  text-align: center;
} */
.copyright {
  width: 100%;
  text-align: center;
}
</style>