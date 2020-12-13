import React from 'react';
import {
  HeaderComponent,
} from '../../components';

const Beranda = () => {
  return (
    <div className="wapper kode-header-class-3">
      <HeaderComponent />
      {/* <!--BANNER START--> */}
      <div className="kode-banner">
        <ul className="bxslider">
          <li>
            <img src="/images/banner-1.png" alt="" />
            <div className="kode-caption-2">
              <h5>Anda Ingin Menjadi Penulis?</h5>
              <h4 style={{ color: '#fff' }}>ANDROCENTA PUBLISHER</h4>
              <p>
                Buku adalah sihir portabel yang unik dan mungkin satu - satunya sihir sejati yang tidak langsung melepaskan semua rahasianya.
                </p>
              <div className="caption-btns">
                <a href="/tentang-kami">Tentang Kami</a>
                <a href="/masuk">Upload Karya</a>
              </div>
            </div>
          </li>
          <li>
            <img src="/images/banner-3.png" alt="" />
            <div className="kode-caption-2">
              <h5>Kami Menjadi Solusinya...</h5>
              <h4 style={{ color: '#fff' }}>ANDROCENTA PUBLISHER</h4>
              <p>
                Androcenta Publisher memiliki filosofi yaitu sebagai penerbit yang berambisi menjadi wadah para calon-calon penulis hebat, yakni dua galaksi yang mampu menampung beragam bintang, yakni para penulis-penulis hebat.
                </p>
              <div className="caption-btns">
                <a href="/tentang-kami">Tentang Kami</a>
                <a href="/masuk">Upload Karya</a>
              </div>
            </div>
          </li>
          <li>
            <img src="/images/banner-2.png" alt="" />
            <div className="kode-caption-2">
              <h5>Upload Karya Sekarang!</h5>
              <h4 style={{ color: '#fff' }}>ANDROCENTA PUBLISHER</h4>
              <p>
                Buat Anda yang ingin menjadi penulis dan karyanya diterbitkan dengan fasilitas yang lengkap. Yuk upload karya sekarang!
                </p>
              <div className="caption-btns">
                <a href="/tentang-kami">Tentang Kami</a>
                <a href="/masuk">Upload Karya</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* <!--BANNER END--> */}
      {/* <!--BUT NOW START--> */}
      <div className="search-section">
        <div className="container">
          {/* <!-- Nav tabs --> */}
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation">
              <a href="#Basic" role="tab" data-toggle="tab">
                Basic
                </a>
            </li>
            <li role="presentation" className="active">
              <a href="#Author" role="tab" data-toggle="tab">
                Author
                </a>
            </li>
            <li role="presentation">
              <a href="#Publications" role="tab" data-toggle="tab">
                Publications
                </a>
            </li>
          </ul>

          {/* <!-- Tab panes --> */}
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane active" id="Basic">
              <div className="form-container">
                <div className="row">
                  <div className="col-md-3 col-sm-4">
                    <input type="text" placeholder="Nama Depan" />
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <input type="text" placeholder="Nama Tengah" />
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <input type="text" placeholder="Nama Akhir" />
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <button>Cari Penulis</button>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="Author">
              <div className="form-container">
                <div className="row">
                  <div className="col-md-3 col-sm-4">
                    <input type="text" placeholder="Nama Depan" />
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <input type="text" placeholder="Nama Tengah" />
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <input type="text" placeholder="Nama Akhir" />
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <button>Cari Penulis</button>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane" id="Publications">
              <div className="form-container">
                <div className="row">
                  <div className="col-md-3 col-sm-4">
                    <input type="text" placeholder="Nama Depan" />
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <input type="text" placeholder="Nama Tengah" />
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <input type="text" placeholder="Nama Akhir" />
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <button>Cari Penulis</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--BUT NOW END--> */}
      {/* <!--CONTENT START--> */}
      <div className="kode-content">
        {/* <!--BOOK GUIDE SECTION START--> */}
        <section>
          <div className="container">
            {/* <!--SECTION CONTENT START--> */}
            <div className="section-heading-1">
              <h2>Selamat Datang di Androcenta Publisher</h2>
              <p>"Dua galaksi yang mampu menampung beragam bintang"</p>
              <div className="kode-icon">
                <i className="fa fa-book"></i>
              </div>
            </div>
            {/* <!--SECTION CONTENT END--> */}
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="kode-service-3">
                  <i className="fa fa-gift"></i>
                  <h3>
                    <a href="/">Ebook</a>
                  </h3>
                  <p>
                    Ebook dari buku cetak yang dapat dibaca
                    di komputer.
                    </p>
                  <a href="/" className="read-more">
                    Cari Tahu
                    </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="kode-service-3">
                  <i className="fa fa-book"></i>
                  <h3>
                    <a href="/">Cetak Buku</a>
                  </h3>
                  <p>
                    Mencetak buku dengan cover berkualitas, dan provesional
                    </p>
                  <a href="/" className="read-more">
                    Cari Tahu
                    </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="kode-service-3">
                  <i className="fa fa-clone"></i>
                  <h3>
                    <a href="/">Promosi</a>
                  </h3>
                  <p>
                    Buku anda akan kami promosikan ke seluruh media shopping kami
                    </p>
                  <a href="/" className="read-more">
                    Cari Tahu
                    </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="kode-service-3">
                  <i className="fa fa-truck"></i>
                  <h3>
                    <a href="/">Pengiriman Buku</a>
                  </h3>
                  <p>
                    Kami pastikan buku anda sampai dengan cepat dan sesuai.
                    </p>
                  <a href="/" className="read-more">
                    Cari Tahu
                    </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--BOOK GUIDE SECTION END--> */}
        {/* <!--TOP SELLERS SECTION START--> */}
        <section className="lib-categories-section">
          <div className="container">
            {/* <!--SECTION CONTENT START--> */}
            <div className="section-heading-1 dark-sec">
              <h2>Kategori Buku Terbaru</h2>
              <p>
                Berikut adalah beberapa Kategori Terbaru dari Buku yang Tersedia
                </p>
              <div className="kode-icon">
                <i className="fa fa-book"></i>
              </div>
            </div>
            {/* <!--SECTION CONTENT END--> */}
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a href="#Photography" role="tab" data-toggle="tab">
                  Arts &amp; Photography
                  </a>
              </li>
              <li role="presentation">
                <a href="#Biographies" role="tab" data-toggle="tab">
                  Biographies &amp; Memoirsa
                  </a>
              </li>
              <li role="presentation">
                <a href="#Business" role="tab" data-toggle="tab">
                  Business
                  </a>
              </li>
              <li role="presentation">
                <a href="#Computers" role="tab" data-toggle="tab">
                  Computers &amp; Internet
                  </a>
              </li>
            </ul>

            {/* <!-- Tab panes --> */}
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane fade in active"
                id="Photography"
              >
                <ul className="bxslider">
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book.png" alt="" />
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
                        <p className="price">$224.20</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book2.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Bridget Jones</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Mad About the Boy</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Helen Fielding</p>
                        <p className="price">$77.70</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book3.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Burnt Siena</a>
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
                        <p className="price">$334.50</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book4.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Chrysalis</a>
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
                        <p className="price">$24.75</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book5.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Winning</a>
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
                        <p className="price">$447.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book10.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Dead Water</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Dead Water in the Sea</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Ann Grannger</p>
                        <p className="price">$777.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book7.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Fault In our Stars</a>
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
                        <p className="price">$770.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book8.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Ruby Of Egypt</a>
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
                        <p className="price">$996.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book9.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Fableheaven</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Fableheaven The Master</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Brandon Hall</p>
                        <p className="price">$542.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Star Trek</a>
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
                        <p className="price">$821.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book10.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">City Of Bones</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>City Of Bones Lies here</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Cassandra Clare</p>
                        <p className="price">$362.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book2.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Annette Blair</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Annette Blair The Maker</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Vampire Dragon</p>
                        <p className="price">$599.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                </ul>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="Biographies">
                <ul className="bxslider-1">
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book3.png" alt="" />
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
                        <p className="price">$224.20</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book4.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Bridget Jones</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Mad About the Boy</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Helen Fielding</p>
                        <p className="price">$77.70</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book7.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Burnt Siena</a>
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
                        <p className="price">$334.50</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book5.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Chrysalis</a>
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
                        <p className="price">$24.75</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book8.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Winning</a>
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
                        <p className="price">$447.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book9.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Dead Water</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Dead Water in the Sea</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Ann Grannger</p>
                        <p className="price">$777.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="images/book13.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Fault In our Stars</a>
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
                        <p className="price">$770.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Ruby Of Egypt</a>
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
                        <p className="price">$996.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book4.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Fableheaven</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Fableheaven The Master</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Brandon Hall</p>
                        <p className="price">$542.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book2.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Star Trek</a>
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
                        <p className="price">$821.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book3.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">City Of Bones</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>City Of Bones Lies here</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Cassandra Clare</p>
                        <p className="price">$362.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="images/book4.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Annette Blair</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Annette Blair The Maker</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Vampire Dragon</p>
                        <p className="price">$599.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                </ul>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="Business">
                <ul className="bxslider-3">
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book4.png" alt="" />
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
                        <p className="price">$224.20</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="images/book5.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Bridget Jones</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Mad About the Boy</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Helen Fielding</p>
                        <p className="price">$77.70</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book7.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Burnt Siena</a>
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
                        <p className="price">$334.50</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="images/book8.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Chrysalis</a>
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
                        <p className="price">$24.75</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book6.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Winning</a>
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
                        <p className="price">$447.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book9.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Dead Water</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Dead Water in the Sea</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Ann Grannger</p>
                        <p className="price">$777.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Fault In our Stars</a>
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
                        <p className="price">$770.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book2.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Ruby Of Egypt</a>
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
                        <p className="price">$996.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book3.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Fableheaven</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Fableheaven The Master</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Brandon Hall</p>
                        <p className="price">$542.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book4.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Star Trek</a>
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
                        <p className="price">$821.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book5.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">City Of Bones</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>City Of Bones Lies here</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Cassandra Clare</p>
                        <p className="price">$362.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book6.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Annette Blair</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Annette Blair The Maker</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Vampire Dragon</p>
                        <p className="price">$599.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                </ul>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="Computers">
                <ul className="bxslider-4">
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book5.png" alt="" />
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
                        <p className="price">$224.20</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book6.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Bridget Jones</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Mad About the Boy</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Helen Fielding</p>
                        <p className="price">$77.70</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book7.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Burnt Siena</a>
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
                        <p className="price">$334.50</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img src="/images/book8.png" alt="" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Chrysalis</a>
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
                        <p className="price">$24.75</p>
                        <a href="/" className="add-to-cart">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book9.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Winning</a>
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
                        <p className="price">$447.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book10.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Dead Water</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Dead Water in the Sea</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Ann Grannger</p>
                        <p className="price">$777.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book2.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Fault In our Stars</a>
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
                        <p className="price">$770.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book6.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">The Ruby Of Egypt</a>
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
                        <p className="price">$996.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                  <li>
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book7.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Fableheaven</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Fableheaven The Master</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Brandon Hall</p>
                        <p className="price">$542.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book10.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Star Trek</a>
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
                        <p className="price">$821.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book2.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">City Of Bones</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>City Of Bones Lies here</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Cassandra Clare</p>
                        <p className="price">$362.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                    {/* <!--PRODUCT GRID START--> */}
                    <div className="col-md-3 col-sm-6 best-seller-pro">
                      <figure>
                        <img alt="" src="/images/book3.png" />
                      </figure>
                      <div className="kode-text">
                        <h3>
                          <a href="/">Annette Blair</a>
                        </h3>
                      </div>
                      <div className="kode-caption">
                        <h3>Annette Blair The Maker</h3>
                        <div className="rating">
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                          <span>☆</span>
                        </div>
                        <p>Vampire Dragon</p>
                        <p className="price">$599.75</p>
                        <a className="add-to-cart" href="/">
                          Beli Buku
                          </a>
                      </div>
                    </div>
                    {/* <!--PRODUCT GRID END--> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!--VIDEO SECTION START--> */}
        <section className="lib-call-to-action">
          <div className="container">
            <h2>Daftar Buku yang Terpublish</h2>
            <p>Berikut adalah Fitur List Buku yang perlu Anda lihat</p>
            <a href="/buku" className="more">
              Cari Tahu
              </a>
          </div>
        </section>
        {/* <!--VIDEO SECTION END--> */}
        {/* <!--BEST SELLER SLIDER SECTION START--> */}
        <section className="lib-papular-books">
          <div className="container">
            {/* <!--SECTION CONTENT START--> */}
            <div className="section-heading-1">
              <h2>Buku Paling Populer</h2>
              <p>
                Buku terpopuler yang masih tersedia di toko kami.
                </p>
              <div className="kode-icon">
                <i className="fa fa-book"></i>
              </div>
            </div>
            <div className="row">
              {/* <!--SECTION CONTENT END--> */}
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active col-md-4 col-sm-3">
                  <a href="#book1" role="tab" data-toggle="tab">
                    <div className="lib-papular-thumb">
                      <img src="/images/papular-books2.png" alt="" />
                    </div>
                  </a>
                </li>
                <li role="presentation" className="col-md-4 col-sm-3">
                  <a href="#book2" role="tab" data-toggle="tab">
                    <div className="lib-papular-thumb">
                      <img src="/images/papular-books3.png" alt="" />
                    </div>
                  </a>
                </li>
                <li role="presentation" className="col-md-4 col-sm-3">
                  <a href="#book3" role="tab" data-toggle="tab">
                    <div className="lib-papular-thumb">
                      <img src="/images/papular-books4.png" alt="" />
                    </div>
                  </a>
                </li>
                <li role="presentation" className="col-md-4 col-sm-3">
                  <a href="#book4" role="tab" data-toggle="tab">
                    <div className="lib-papular-thumb">
                      <img src="/images/papular-books5.png" alt="" />
                    </div>
                  </a>
                </li>
                <li
                  role="presentation"
                  className="col-md-4 col-sm-3 visible-lg visible-md"
                >
                  <a href="#book5" role="tab" data-toggle="tab">
                    <div className="lib-papular-thumb">
                      <img src="/images/papular-books6.png" alt="" />
                    </div>
                  </a>
                </li>
                <li
                  role="presentation"
                  className="col-md-4 col-sm-3 visible-lg visible-md"
                >
                  <a href="#book6" role="tab" data-toggle="tab">
                    <div className="lib-papular-thumb">
                      <img src="/images/papular-books7.png" alt="" />
                    </div>
                  </a>
                </li>
              </ul>
              {/* <!-- Tab panes --> */}
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane fade in active"
                  id="book1"
                >
                  <div className="lib-papular">
                    <div className="kode-thumb">
                      <img src="/images/papular-books.png" alt="" />
                    </div>
                    <div className="kode-text">
                      <h2>Engaging Imagination</h2>
                      <h4>Gillian Judson</h4>
                      <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                      <p>
                        When asked what they want colleges to emphasize most,
                        employers didn’t put science, computing, math, or
                        business management first. According to 2013 employer
                        survey, 95% of employers give hiring preference to
                        college graduates with skills that will enable them to
                        contribute to innovation in the workplace. that will
                        enable them to contribute to innovation in the
                        workplace in the city town of the lost vallies.
                        </p>
                      <div className="lib-price">
                        <h3>$245</h3>
                        <a href="/">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="book2">
                  <div className="lib-papular">
                    <div className="kode-thumb">
                      <img src="/images/papular-books11.png" alt="" />
                    </div>
                    <div className="kode-text">
                      <h2>Deception</h2>
                      <h4>John M Fluid</h4>
                      <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                      <p>
                        The world's most infamous hacker offers an insider's
                        view of the low-tech threats to high-tech security.
                        Kevin Mitnick's exploits as a cyber-desperado and
                        fugitive form one of the most exhaustive FBI manhunts
                        in history and have spawned dozens of articles, books,
                        films, and documentaries. Since his release from
                        federal prison, in 1998 that will enable them to
                        contribute to innovation in the workplace
                        </p>
                      <div className="lib-price">
                        <h3>$245</h3>
                        <a href="/">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="book3">
                  <div className="lib-papular">
                    <div className="kode-thumb">
                      <img src="/images/papular-books22.png" alt="" />
                    </div>
                    <div className="kode-text">
                      <h2>Last Days</h2>
                      <h4>Adam Nevill</h4>
                      <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                      <p>
                        Last Days (winner of the British Fantasy Award for
                        Best Horror Novel of the Year) by Adam Nevill is a
                        Blair Witch style novel in which a documentary
                        film-maker undertakes the investigation of a
                        dangerous. When guerrilla documentary maker, Kyle
                        Freeman, is asked to shoot a film on the notorious
                        cult known as the Temple of the Last Days that will
                        enable them to contribute to innovation in the
                        workplace
                        </p>
                      <div className="lib-price">
                        <h3>$555</h3>
                        <a href="/">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="book4">
                  <div className="lib-papular">
                    <div className="kode-thumb">
                      <img src="/images/papular-books33.png" alt="" />
                    </div>
                    <div className="kode-text">
                      <h2>Catching Fire</h2>
                      <h4>Suzanne Collin</h4>
                      <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                      <p>
                        Against all odds, Katniss Everdeen has won the annual
                        Hunger Games with fellow district tribute Peeta
                        Mellark. But it was a victory won by defiance of the
                        Capitol and their harsh rules. Katniss and Peeta
                        should be happy. After all, they have just won for
                        themselves and their families a life of safety and
                        plenty that will enable them to contribute to
                        innovation in the workplace families a life of safety.
                        </p>
                      <div className="lib-price">
                        <h3>$751</h3>
                        <a href="/">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="book5">
                  <div className="lib-papular">
                    <div className="kode-thumb">
                      <img src="/images/papular-books44.png" alt="" />
                    </div>
                    <div className="kode-text">
                      <h2>The Fire of Life</h2>
                      <h4>Runshide </h4>
                      <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                      <p>
                        “You’ve reached the age at which people in this family
                        cross the border into the magical world. It’s your
                        turn for an adventure—yes, it’s finally here!” So says
                        Haroun to his younger brother, twelve-year-old Luka.
                        The adventure begins one beautiful starry night in the
                        land of Alifbay, when Luka’s father, Rashid that will
                        enable them to contribute to innovation in the
                        workplace families a life of safety.
                        </p>
                      <div className="lib-price">
                        <h3>$852</h3>
                        <a href="/">See More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="book6">
                  <div className="lib-papular">
                    <div className="kode-thumb">
                      <img src="/images/papular-books55.png" alt="" />
                    </div>
                    <div className="kode-text">
                      <h2>New Moon</h2>
                      <h4>Stephenie Meyer</h4>
                      <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                      <p>
                        Legions of readers entranced by Twilight are hungry
                        for more and they won't be disappointed. In New Moon,
                        Stephenie Meyer delivers another irresistible
                        combination of romance and suspense with a
                        supernatural twist. The "star-crossed" lovers theme
                        continues as Bella and Edward find themselves facing
                        new obstacles that will enable them to contribute to
                        innovation in the workplace families a life of safety.
                        </p>
                      <div className="lib-price">
                        <h3>$630</h3>
                        <a href="/">Cari Tahu</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--BEST SELLER SLIDER SECTION END--> */}
        {/* <!--COUNT UP SECTION START--> */}
        <div className="lib-count-up-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="count-up">
                  <span className="counter circle">21</span>
                  <p>Submit Karya</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="count-up">
                  <span className="counter circle">8589</span>
                  <p>Buku Terjual</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="count-up">
                  <span className="counter circle">458</span>
                  <p>Total Penulis</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="count-up">
                  <span className="counter circle">750</span>
                  <p>Buku Cetak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--COUNT UP SECTION END--> */}
        {/* <!--GIFT CARD SECTION START--> */}
        <section className="lib-textimonials">
          <div className="container">
            {/* <!--SECTION HEADING START--> */}
            <div className="section-heading-1 dark-sec">
              <h2>Testimoni Kami</h2>
              <p>Apa yang klien kami katakan tentang ulasan dan komentar publisher kami</p>
              <div className="kode-icon">
                <i className="fa fa-book"></i>
              </div>
            </div>
            {/* <!--SECTION HEADING END--> */}
            <div className="owl-testimonials owl-theme">
              {/* <!--BLOG ITEM START--> */}
              <div className="item">
                <div className="lib-testimonial-content">
                  <div className="kode-text">
                    <p>
                      I loved thrift books! It's refreshing to buy discounted
                      books and have them shipped quickly. I could afford to
                      buy 3 copies to hand out to friends also interested in
                      the topic. Thank you!! Read more
                      </p>
                  </div>
                  <div className="kode-thumb">
                    <img src="/images/testimonials1.png" alt="" />
                  </div>
                  <h4>Jenifer Robbert</h4>
                  <p className="title">Author</p>
                </div>
              </div>
              {/* <!--BLOG ITEM END--> */}
              {/* <!--BLOG ITEM START--> */}
              <div className="item">
                <div className="lib-testimonial-content">
                  <div className="kode-text">
                    <p>
                      You have great prices and the books are in the shape as
                      stated. Although it takes so long for them to get to
                      their destination. I have been ordering for years and
                      get great books in the shape said.
                      </p>
                  </div>
                  <div className="kode-thumb">
                    <img src="/images/testimonials-img4.png" alt="" />
                  </div>
                  <h4>Jenifer Robbert</h4>
                  <p className="title">Author</p>
                </div>
              </div>
              {/* <!--BLOG ITEM END--> */}
              {/* <!--BLOG ITEM START--> */}
              <div className="item">
                <div className="lib-testimonial-content">
                  <div className="kode-text">
                    <p>
                      I have made many orders with Thrift Books. I always get
                      exactly what I order in a timely manner at a great
                      price. I have had to contact the customer service team
                      once.
                      </p>
                  </div>
                  <div className="kode-thumb">
                    <img src="/images/testimonials-img3.png" alt="" />
                  </div>
                  <h4>Jenifer Robbert</h4>
                  <p className="title">Author</p>
                </div>
              </div>
              {/* <!--BLOG ITEM END--> */}
              {/* <!--BLOG ITEM START--> */}
              <div className="item">
                <div className="lib-testimonial-content">
                  <div className="kode-text">
                    <p>
                      I couldn't believe the prices for such great books, at
                      no shipping! I am going to be a good customer at your
                      store! And, I am telling my Facebook friends about.
                      </p>
                  </div>
                  <div className="kode-thumb">
                    <img src="/images/testimonials-img2.png" alt="" />
                  </div>
                  <h4>Jenifer Robbert</h4>
                  <p className="title">Author</p>
                </div>
              </div>
              {/* <!--BLOG ITEM END--> */}
              {/* <!--BLOG ITEM START--> */}
              <div className="item">
                <div className="lib-testimonial-content">
                  <div className="kode-text">
                    <p>
                      ordered 14 books, received 14 books within a week. very
                      happy with customer support and with the receipt of
                      books. Keep It Up Good Guide we love you the best books
                      library available today.
                      </p>
                  </div>
                  <div className="kode-thumb">
                    <img src="/images/writer2.png" alt="" />
                  </div>
                  <h4>Jenifer Robbert</h4>
                  <p className="title">Author</p>
                </div>
              </div>
              {/* <!--BLOG ITEM END--> */}
              {/* <!--BLOG ITEM START--> */}
              <div className="item">
                <div className="lib-testimonial-content">
                  <div className="kode-text">
                    <p>
                      Thrift Books is the absolute best book seller on the
                      Internet!! Their selection is marvelous, price/shipping
                      unbeatable and timely service is outstanding.
                      </p>
                  </div>
                  <div className="kode-thumb">
                    <img src="/images/writer3.png" alt="" />
                  </div>
                  <h4>Jenifer Robbert</h4>
                  <p className="title">Author</p>
                </div>
              </div>
              {/* <!--BLOG ITEM END--> */}
            </div>
          </div>
        </section>
        {/* <!--GIFT CARD SECTION END--> */}
        {/* <!--TOP AUTHOR START--> */}
        <section className="kode-lib-team-member">
          <div className="container">
            {/* <!--SECTION CONTENT START--> */}
            <div className="section-heading-1">
              <h2>Penulis Terpopuler Kami</h2>
              <p>
                Berikut adalah beberapa Penulis Terpopuler di Androcenta Publisher
                </p>
              <div className="kode-icon">
                <i className="fa fa-book"></i>
              </div>
            </div>
            {/* <!--SECTION CONTENT END--> */}
            <div className="lib-authors">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-skype"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <img src="/images/lib-author.png" alt="" />
              <div className="kode-caption">
                <h4>Kris Azzalea</h4>
                <p>Penulis</p>
              </div>
            </div>
            <div className="lib-authors">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-skype"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <img src="/images/lib-author2.png" alt="" />
              <div className="kode-caption">
                <h4>San</h4>
                <p>Penulis</p>
              </div>
            </div>
            <div className="lib-authors">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-skype"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <img src="/images/lib-author3.png" alt="" />
              <div className="kode-caption">
                <h4>San</h4>
                <p>Penulis</p>
              </div>
            </div>
            <div className="lib-authors">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-skype"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <img src="/images/lib-author4.png" alt="" />
              <div className="kode-caption">
                <h4>Kris Azzalea</h4>
                <p>Penulis</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!--TOP AUTHOR END--> */}

        {/* <!--BECOME A MEMBER START--> */}
        <section className="kode-membership">
          <div className="container">
            {/* <!--SECTION HEADING START--> */}
            <div className="section-heading-1 dark-sec">
              <h2>Menjadi anggota</h2>
              <p>Kirimkan ide buku Anda dan Anda bisa menjadi seorang Penulis.</p>
              <div className="kode-icon">
                <i className="fa fa-book"></i>
              </div>
            </div>
            {/* <!--SECTION HEADING END--> */}
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="input-container">
                  <i className="fa fa-user"></i>
                  <input type="text" placeholder="Nama Anda" />
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="input-container">
                  <i className="fa fa-envelope-o"></i>
                  <input type="text" placeholder="Email Anda" />
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="input-container">
                  <i className="fa fa-home"></i>
                  <input type="text" placeholder="Alamat Anda" />
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="input-container">
                  <i className="fa fa-phone"></i>
                  <input type="text" placeholder="Nomor Telephon" />
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="input-container">
                  <i className="fa fa-key"></i>
                  <input type="password" placeholder="Password Anda" />
                </div>
              </div>
              <div className="col-md-12 col-sm-12">
                <a href="/" className="reg-btn">
                  Daftar
                  </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!--BECOME A MEMBER END--> */}
        {/* <!--NEWSLETTERS SECTION START--> */}
        <section className="kode-newsletters-2">
          <div className="container">
            {/* <!--SECTION CONTENT START--> */}
            <div className="section-heading-1">
              <h2>Ikuti Kami</h2>
              <p>Jadilah yang pertama tahu event dan penawaran spesial kami.</p>
              <div className="kode-icon">
                <i className="fa fa-book"></i>
              </div>
            </div>
            {/* <!--SECTION CONTENT END--> */}
            <div className="newsletters-container">
              <div className="row">
                <div className="col-md-9 col-sm-8">
                  <div className="input-container">
                    <i className="fa fa-envelope-o"></i>
                    <input type="text" placeholder="Masukkan gmail anda di sini." />
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <button>
                    Suscribe<i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--NEWSLETTERS SECTION END--> */}
        <section className="lib-contact-section">
          <div className="location-text">
            <i className="fa fa-map-marker"></i>
            <h2>
              Androcenta Publisher
              </h2>
            <p>"Dua galaksi yang mampu menampung beragam bintang"</p>
            <span>
              <i className="fa fa-envelope-o"></i>androcenta.publisher@gmail.com
              </span>
          </div>
          <div className="kode-thumb"></div>
          <div className="map-canvas" id="map-canvas"></div>
        </section>
      </div>
      {/* <!--CONTENT END--> */}
    </div>
  );
};

export default Beranda;
