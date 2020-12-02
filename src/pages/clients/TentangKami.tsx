import React from 'react';

const TentangKami = () => {
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
                      <p>Selamat Datang</p>
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
                        <a href="#">Beranda</a>
                      </li>
                      <li>
                        <a href="#">Buku</a>
                      </li>
                      <li>
                        <a href="/">Tentang Kami</a>
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
            <h2>Tentang Kami</h2>
            <ol className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#" className="active">
                  Tentang Kami
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
        <div className="kode-content">
        {/* BOOK GUIDE SECTION START */}
        <section className="kode-about-us-section">
        	<div className="container">
            	{/* SECTION CONTENT START */}
            	<div className="heading-1">
                	<h2>Androcenta Publisher</h2>
                    <p>Dua galaksi yang mampu menampung beragam bintang</p>
                </div>
                {/* SECTION CONTENT END */}
                <div className="row">
                	<div className="col-md-6">
                    	<h2>Apa itu Androcenta Publisher</h2>
                        <p>Sebelumnya penerbit ini bernama Medaca Aurora Publisher yang didirikan pada tanggal 1 Januari 2020. Dulu Medaca Aurora Publisher merupakan penerbit Lini. Sekarang Medaca telah mengganti brand menjadi Androcenta Publisher pada tanggal 11 November 2020 dan berdiri sendiri.
                        Androcenta Publisher memiliki filosofi yaitu sebagai penerbit yang berambisi menjadi wadah para calon-calon penulis hebat, yakni dua galaksi yang mampu menampung beragam bintang, yakni para penulis-penulis hebat.</p>
                        {/* <ul className="kd-list3">
                            <li><a href="#">Consetetur sadipscing elitr sed diam nonumy eirmod</a></li>
                            <li><a href="#">Sadipscing elitr sed diam nonumy eirmod</a></li>
                            <li><a href="#">Consetetur elitr sed diam nonumy eirmod</a></li>
                            <li><a href="#">Nonumy elitr sed diam nonumy eirmod</a></li>
                        </ul> */}
                    </div>
                    <div className="col-md-6">
                    	<div className="about-thumb">
                        	<img src="/images/about-img3.png" alt="tentang thumbnail" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* BOOK GUIDE SECTION END */}
        {/* BOOKS SECTION START */}
        <section className="about-lib-theme">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Tim Kami</h2>
                        <div className="row">
                        	<div className="col-md-6 col-sm-6">
                            	<div className="kode-team-listing">
                                	<div className="kode-thumb">
                                    	<a href="#"><img src="/images/tim-androcenta1.jpg" alt="team androcenta" /></a>
                                    </div>
                                    <div className="kode-text">
                                    	<h3>Kris P Azzalea</h3>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                                        <div className="social-icon">
                                        	<ul>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>                      
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                            	<div className="kode-team-listing">
                                	<div className="kode-thumb">
                                    	<a href="#"><img src="/images/tim-androcenta2.jpg" alt="team androcenta" /></a>
                                    </div>
                                    <div className="kode-text">
                                    	<h3>Poppy P Macrophylla</h3>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                                        <div className="social-icon">
                                        	<ul>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>                      
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                            	<div className="kode-team-listing">
                                	<div className="kode-thumb">
                                    	<a href="#"><img src="images/team-3.png" alt="team androcenta" /></a>
                                    </div>
                                    <div className="kode-text">
                                    	<h3>San</h3>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                                        <div className="social-icon">
                                        	<ul>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>                      
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                            	<div className="kode-team-listing">
                                	<div className="kode-thumb">
                                    	<a href="#"><img src="/images/team-4.png" alt="team androcenta" /></a>
                                    </div>
                                    <div className="kode-text">
                                    	<h3>Nina Williams</h3>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                                        <div className="social-icon">
                                        	<ul>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>                      
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    	<h2>Detail Project Kami</h2>
                        <div className="lib-qualities">
                             <ul>   
                                {/* LIST ITEM START */}
                                <li>
                                    <i className="fa fa-star"></i>
                                    <h2>100% Client Puas</h2>
                                    <p>Kami memiliki tim profesional agar mendapatkan hasil yang memuaskan untuk klien kami.</p>
                                </li>
                                {/* LIST ITEM END */}
                                {/* LIST ITEM START */}
                                <li>
                                    <i className="fa fa-leaf"></i>
                                    <h2>Design Buku yang Berkualitas</h2>
                                    <p>Desain buku dari kami sangat user friendly mudah dipandang dan menyesuaikan tema yang diberikan.</p>
                                </li>
                                {/* LIST ITEM END */}
                                {/* LIST ITEM START */}
                                <li>
                                    <i className="fa fa-users"></i>
                                    <h2>Kepercayaan Pelanggan</h2>
                                    <p>Sudah banyak penulis yang percaya pada kami, buku yang terbit juga mulai banyak, silahkan cek beberapa buku pilihan pada menu buku</p>
                                </li>
                                {/* LIST ITEM END */}
                                {/* LIST ITEM START */}
                                <li>
                                    <i className="fa fa-life-ring"></i>
                                    <h2>Dukungan Cepat 24 Jam </h2>
                                    <p>Kami menyediakan dukungan khusus 24 jam kepada pelanggan kami karena kami tidak pernah meninggalkan pelanggan kami sendiri.</p>
                                </li>
                                {/* LIST ITEM END */}
                            </ul>
                        </div>                        
                    </div>                    
                </div>                
            </div>
        </section>
        {/* BOOKS SECTION END */}
        {/* LIBRARY GALLERY SECTION START */}
        <section className="our-libraries">
        	<div className="container">
            	<h2>Partner Kami</h2>
                <div className="our-libraries-cover">
                	<div className="owl-library">
                    <div className="item">
                    	<div className="kode-thumb">
                        	<a href="#"><img src="/images/library-1.png" alt="Library" /></a>
                    	</div>
                    </div>
                    <div className="item">
                    	<div className="kode-thumb">
                        	<a href="#"><img src="/images/library-2.png" alt="Library" /></a>
                    	</div>
                    </div>
                    <div className="item">
                    	<div className="kode-thumb">
                        	<a href="#"><img src="/images/library-3.png" alt="Library" /></a>
                    	</div>
                    </div>
                    <div className="item">
                    	<div className="kode-thumb">
                        	<a href="#"><img src="/images/library-4.png" alt="Library" /></a>
                    	</div>
                    </div>
                    <div className="item">
                    	<div className="kode-thumb">
                        	<a href="#"><img src="/images/library-1.png" alt="Library" /></a>
                    	</div>
                    </div>
                    <div className="item">
                    	<div className="kode-thumb">
                        	<a href="#"><img src="/images/library-2.png" alt="Library" /></a>
                    	</div>
                    </div>
                    <div className="item">
                    	<div className="kode-thumb">
                        	<a href="#"><img src="/images/library-3.png" alt="Library" /></a>
                    	</div>
                    </div>
                    <div className="item">
                    	<div className="kode-thumb">
                        	<a href="#"><img src="/images/library-4.png" alt="Library" /></a>
                    	</div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        {/* LIBRARY GALLERY SECTION END */}
      
        {/* FACTS SECTION START */}
        <section className="kode-interesting-facts">
            <div className="container">
				<h2>Fakta Tentang Kami</h2>
                <div className="kode-facts">
                	{/* Nav tabs */}
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#work" aria-controls="work" role="tab" data-toggle="tab">Kenapa Memilih Kami</a></li>
                        <li role="presentation"><a href="#Benifits" aria-controls="Benifits" role="tab" data-toggle="tab">Keuntungan</a></li>
                        <li role="presentation"><a href="#located" aria-controls="located" role="tab" data-toggle="tab">Lokasi</a></li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active" id="work">
                        	<h4>Kenapa Memilih Kami</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="Benifits">
                        	<h4>Keuntungan </h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="located">
                        	<h4>Lokasi</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
                          />{' '}
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
                          elit, sed do eiusmod tempor.{' '}
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

export default TentangKami;
