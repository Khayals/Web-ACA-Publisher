import React from "react";

const Buku = () => {
  const creditYear = new Date();
  const footerUpdateYear = creditYear.getFullYear();
  return (
    <div>
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      {/* wrapper start */}
      <div className="wrapper kode-header-class-3">
        {/* header start */}
        <header className="header-3">
          <div className="container">
            <div className="logo-container">
              <div className="row">
                <div className="col-md-3">
                  {/* logo start */}
                  <div className="logo">
                    <a href="#">
                      <img src="/images/logo-2.png" alt="logo" />
                    </a>
                  </div>
                  {/* logo end */}
                </div>
                <div className="col-md-9">
                  <div className="top-strip">
                    <div className="pull-left">
                      <p>Selamat Datang di Toko Buku Kami</p>
                    </div>
                    <div className="social-icon">
                      <a
                        href="mailto:naufalyukafi09@gmail.com"
                        className="pull-left"
                      >
                        info@androcenta.com
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="kode-navigation">
                    <ul>
                      <li>
                        <a href="/">Beranda</a>
                      </li>
                      <li>
                        <a href="#">Buku</a>
                      </li>
                      <li>
                        <a href="#">Tentang Kami</a>
                      </li>
                      <li>
                        <a href="#">Daftar</a>
                      </li>
                      <li>
                        <a href="#">Masuk</a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="kode-responsive-navigation"
                    className="dl-menuwrapper"
                  >
                    <button className="dl-trigger">Open Menu</button>
                    <ul className="dl-menu">
                      <li className="menu-item">
                        <a href="/">Beranda</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Buku</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Tentang Kami</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Daftar</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Masuk</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header end */}

        {/* banner start */}
        <div className="kode-inner-banner">
          <div className="kode-page-heading">
            <h2>Toko Buku</h2>
            <ol className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#" className="active">
                  Buku
                </a>
              </li>
            </ol>
          </div>
        </div>
        {/* banner end */}
        <div className="search-section">
          <div className="container">
            {/* Nav tabs */}
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation">
                <a
                  href="#Basic"
                  aria-controls="Basic"
                  role="tab"
                  data-toggle="tab"
                >
                  Basic
                </a>
              </li>
              <li role="presentation" className="active">
                <a
                  href="#Author"
                  aria-controls="Author"
                  role="tab"
                  data-toggle="tab"
                >
                  Author
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#Publications"
                  aria-controls="Publications"
                  role="tab"
                  data-toggle="tab"
                >
                  Publications
                </a>
              </li>
            </ul>

            {/* Tab panes  */}
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="Basic">
                <div className="form-container">
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-md-3 col-sm-4">
                      <input type="text" placeholder="Middle Name" />
                    </div>
                    <div className="col-md-3 col-sm-4">
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <button>Search Author</button>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="Author">
                <div className="form-container">
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-md-3 col-sm-4">
                      <input type="text" placeholder="Middle Name" />
                    </div>
                    <div className="col-md-3 col-sm-4">
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <button>Search Author</button>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane" id="Publications">
                <div className="form-container">
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-md-3 col-sm-4">
                      <input type="text" placeholder="Middle Name" />
                    </div>
                    <div className="col-md-3 col-sm-4">
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <button>Search Author</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content start */}
        {/* content end */}
        <div className="kode-content padding-tb-50">
          {/* top author start */}
          <div className="container">
            <div className="kode-product-filter"></div>
            <div className="row">
              {/* product grid start */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book5.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>PENDRAGON</h3>
                  </div>
                  <div className="kode-caption">
                    <h3>PENDRAGON Dr.Machale</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>Dr.Machale</p>
                    <p className="price">Rp 20.000</p>
                    <a href="#" className="add-to-cart">
                      Beli Buku
                    </a>
                  </div>
                </div>
              </div>
              {/* PRODUCT GRID END */}
              {/* product grid start */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book7.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>
                      <a href="#">Burnt Siena</a>
                    </h3>
                  </div>
                  <div className="kode-caption">
                    <h3>Art History Mystery</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>Sara Wisseman</p>
                    <p className="price">Rp.20.000</p>
                    <a href="#" className="add-to-cart">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              {/* product grid end */}
              {/* product grid start */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book8.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>
                      <a href="#">Androcenta</a>
                    </h3>
                  </div>
                  <div className="kode-caption">
                    <h3>The Brave Girl</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>William S.</p>
                    <p className="price">Rp. 20.000</p>
                    <a href="#" className="add-to-cart">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              {/* product grid end */}
              {/* product grid start */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book10.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>
                      <a href="#">The Winning</a>
                    </h3>
                  </div>
                  <div className="kode-caption">
                    <h3>The Winning Story</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>Mind Set</p>
                    <p className="price">Rp 20.000</p>
                    <a className="add-to-cart" href="#">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              {/* product grid end */}
              {/* product grid start */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book8.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>
                      <a href="#">Dead Water</a>
                    </h3>
                  </div>
                  <div className="kode-caption">
                    <h3>Dead Water in Sea</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>Ann Grannger</p>
                    <p className="price">Rp 20.000</p>
                    <a className="add-to-cart" href="#">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              {/* PRODUCT GRID END */}
              {/* PRODUCT GRID START */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book4.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>
                      <a href="#">The Fault In our Stars</a>
                    </h3>
                  </div>
                  <div className="kode-caption">
                    <h3>Paper Towns</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>Daniel Abraham</p>
                    <p className="price">Rp 20.000</p>
                    <a className="add-to-cart" href="#">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              {/* PRODUCT GRID END */}
              {/* PRODUCT GRID START */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book10.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>
                      <a href="#">The Ruby Of Egypt</a>
                    </h3>
                  </div>
                  <div className="kode-caption">
                    <h3>The Ruby Of Egypt</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>Cat Howard</p>
                    <p className="price">Rp 20.000</p>
                    <a className="add-to-cart" href="#">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              {/* PRODUCT GRID END */}
              {/* PRODUCT GRID START */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book4.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>
                      <a href="#">Fableheaven</a>
                    </h3>
                  </div>
                  <div className="kode-caption">
                    <h3>Fableheaven Master</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>Brandon Hall</p>
                    <p className="price">Rp 20.000</p>
                    <a className="add-to-cart" href="#">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              {/* PRODUCT GRID END */}
              {/* PRODUCT GRID START */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book4.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>
                      <a href="#">Fableheaven</a>
                    </h3>
                  </div>
                  <div className="kode-caption">
                    <h3>Fableheaven Master</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>Brandon Hall</p>
                    <p className="price">Rp 20.000</p>
                    <a className="add-to-cart" href="#">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              {/* PRODUCT GRID END */}
              {/* PRODUCT GRID START */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book7.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>
                      <a href="#">Star Trek</a>
                    </h3>
                  </div>
                  <div className="kode-caption">
                    <h3>Star Trek Course</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>DisAvowed</p>
                    <p className="price">Rp 20.000</p>
                    <a className="add-to-cart" href="#">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              {/* PRODUCT GRID END */}
              {/* PRODUCT GRID START */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book4.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>
                      <a href="#">City Of Bones</a>
                    </h3>
                  </div>
                  <div className="kode-caption">
                    <h3>City Of Bones Lies</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>Cassandra Clare</p>
                    <p className="price">Rp 20.000</p>
                    <a className="add-to-cart" href="#">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              {/* PRODUCT GRID END */}
              {/* PRODUCT GRID START */}
              <div className="col-md-3 col-sm-6">
                <div className="best-seller-pro">
                  <figure>
                    <img src="/images/book6.png" alt="Buku Androcenta" />
                  </figure>
                  <div className="kode-text">
                    <h3>
                      <a href="#">Annette Blair</a>
                    </h3>
                  </div>
                  <div className="kode-caption">
                    <h3>Annette Blair Maker</h3>
                    <div className="rating">
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                      <span>☆</span>
                    </div>
                    <p>Vampire Dragon</p>
                    <p className="price">Rp 20.000</p>
                    <a className="add-to-cart" href="#">
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              {/* PRODUCT GRID END */}
            </div>

            {/* PAGINATION START */}
            <nav>
              <ul className="pagination">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* PAGINATION END */}
          </div>
          {/* TOP AUTHERS END */}
        </div>
        <section className="kode-uptodate">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>stay up-to-dated</h2>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-3">
                    <div className="social-icons">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest-p"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="input-container">
                      <input
                        type="text"
                        placeholder="Your E-mail Address"
                        id="sub-2"
                      />
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CONTENT END */}
        <footer className="footer-3">
          <div className="container">
            <div className="row">
              {/* CATEGORY WIDGET START */}
              <div className="col-md-3 col-sm-6">
                <div className="widget widget-categories">
                  <h2>Information</h2>
                  <ul>
                    <li>
                      <a href="#">Specials</a>
                    </li>
                    <li>
                      <a href="#">New products</a>
                    </li>
                    <li>
                      <a href="#">Best sellers</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Terms of use</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* CATEGORY WIDGET END */}
              {/* LATEST NEWS WIDGET START */}
              <div className="col-md-3 col-sm-6">
                <div className="widget widget-latest-news">
                  <h2>Lates News</h2>
                  <ul>
                    <li>
                      <div className="kode-thumb">
                        <a href="#">
                          <img src="/images/latest-news.png" alt="" />
                        </a>
                      </div>
                      <div className="kode-text">
                        <p>Phasellus risusa Aliowm</p>
                        <p>14 December 2015</p>
                      </div>
                    </li>
                    <li>
                      <div className="kode-thumb">
                        <a href="#">
                          <img
                            src="/images/latest-news.png"
                            alt="Latest News"
                          />
                        </a>
                      </div>
                      <div className="kode-text">
                        <p>Phasellus risusa Aliowm</p>
                        <p>14 December 2015</p>
                      </div>
                    </li>
                    <li>
                      <div className="kode-thumb">
                        <a href="#">
                          <img
                            src="/images/latest-news.png"
                            alt="Latest News"
                          />{" "}
                        </a>
                      </div>
                      <div className="kode-text">
                        <p>Phasellus risusa Aliowm</p>
                        <p>14 December 2015</p>
                      </div>
                    </li>
                    <li>
                      <div className="kode-thumb">
                        <a href="#">
                          <img
                            src="/images/latest-news.png"
                            alt="Latest News"
                          />
                        </a>
                      </div>
                      <div className="kode-text">
                        <p>Phasellus risusa Aliowm</p>
                        <p>14 December 2015</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* LATEST NEWS WIDGET END */}
              {/* TWITTER WIDGET START */}
              <div className="col-md-3 col-sm-6">
                <div className="widget widget-flickr">
                  <h2>Flickr Gallery </h2>
                  <ul>
                    <li>
                      <a href="#">
                        <img src="/images/gallery1.png" alt="Galeri" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery2.png" alt="Galeri" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery3.png" alt="Galeri" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery4.png" alt="Galeri" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery5.png" alt="Galeri" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery6.png" alt="Galeri" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery4.png" alt="Galeri" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery5.png" alt="Galeri" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="/images/gallery6.png" alt="Galeri" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* TWITTER WIDGET END */}

              {/* NEWSLETTER START */}
              <div className="col-md-3 col-sm-6">
                <div className="widget widget-contact-info">
                  <h2>get in touch</h2>
                  <ul>
                    <li>
                      <i className="fa fa-paper-plane"></i>
                      <div className="kode-text">
                        <h4>Address</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>
                      <div className="kode-text">
                        <h4>phone Number</h4>
                        <p>+55(62) 55258-4570</p>
                        <p>+55(62) 55258-4570</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i>
                      <div className="kode-text">
                        <h4>Email Address</h4>
                        <a href="#">Info@androcenta.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* NEWSLETTER START END */}
            </div>
          </div>
        </footer>
        <div className="copyrights">
          <div className="container">
            <p>
              Copyrights © {footerUpdateYear} Androcenta Publisher. All rights
              reserved
            </p>
            <div className="cards">
              <img src="/images/cards.png" alt="cards" />
            </div>
          </div>
        </div>
      </div>

      {/* wrapper end */}
    </div>
  );
};

export default Buku;
