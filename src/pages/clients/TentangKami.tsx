import React from 'react';
import {
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  SearchComponent,
} from '../../components';

const TentangKami = () => {
  return (
    <div className='wrapper kode-header-class-3'>
      <HeaderComponent />
      <BannerComponent />
      <SearchComponent />
      <div className='kode-content'>
        {/* BOOK GUIDE SECTION START */}
        <section className='kode-about-us-section'>
          <div className='container'>
            {/* SECTION CONTENT START */}
            <div className='heading-1'>
              <h2>Androcenta Publisher</h2>
              <p>Dua galaksi yang mampu menampung beragam bintang</p>
            </div>
            {/* SECTION CONTENT END */}
            <div className='row'>
              <div className='col-md-6'>
                <h2>Apa itu Androcenta Publisher</h2>
                <p>
                  Sebelumnya penerbit ini bernama Medaca Aurora Publisher yang
                  didirikan pada tanggal 1 Januari 2020. Dulu Medaca Aurora
                  Publisher merupakan penerbit Lini. Sekarang Medaca telah
                  mengganti brand menjadi Androcenta Publisher pada tanggal 11
                  November 2020 dan berdiri sendiri. Androcenta Publisher
                  memiliki filosofi yaitu sebagai penerbit yang berambisi
                  menjadi wadah para calon-calon penulis hebat, yakni dua
                  galaksi yang mampu menampung beragam bintang, yakni para
                  penulis-penulis hebat.
                </p>
                {/* <ul className="kd-list3">
                          <li><a href="#">Consetetur sadipscing elitr sed diam nonumy eirmod</a></li>
                          <li><a href="#">Sadipscing elitr sed diam nonumy eirmod</a></li>
                          <li><a href="#">Consetetur elitr sed diam nonumy eirmod</a></li>
                          <li><a href="#">Nonumy elitr sed diam nonumy eirmod</a></li>
                      </ul> */}
              </div>
              <div className='col-md-6'>
                <div className='about-thumb'>
                  <img src='/images/about-img3.png' alt='tentang thumbnail' />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BOOK GUIDE SECTION END */}
        {/* BOOKS SECTION START */}
        <section className='about-lib-theme'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <h2>Tim Kami</h2>
                <div className='row'>
                  <div className='col-md-6 col-sm-6'>
                    <div className='kode-team-listing'>
                      <div className='kode-thumb'>
                        <a href={'/'}>
                          <img
                            src='/images/tim-androcenta1.jpg'
                            alt='team androcenta'
                          />
                        </a>
                      </div>
                      <div className='kode-text'>
                        <h3>Kris P Azzalea</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy
                        </p>
                        <div className='social-icon'>
                          <ul>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-facebook'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-twitter'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-google-plus'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-linkedin'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                    <div className='kode-team-listing'>
                      <div className='kode-thumb'>
                        <a href={'/'}>
                          <img
                            src='/images/tim-androcenta2.jpg'
                            alt='team androcenta'
                          />
                        </a>
                      </div>
                      <div className='kode-text'>
                        <h3>Poppy P Macrophylla</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy
                        </p>
                        <div className='social-icon'>
                          <ul>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-facebook'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-twitter'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-google-plus'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-linkedin'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                    <div className='kode-team-listing'>
                      <div className='kode-thumb'>
                        <a href={'/'}>
                          <img src='images/team-3.png' alt='team androcenta' />
                        </a>
                      </div>
                      <div className='kode-text'>
                        <h3>San</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy
                        </p>
                        <div className='social-icon'>
                          <ul>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-facebook'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-twitter'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-google-plus'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-linkedin'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                    <div className='kode-team-listing'>
                      <div className='kode-thumb'>
                        <a href={'/'}>
                          <img src='/images/team-4.png' alt='team androcenta' />
                        </a>
                      </div>
                      <div className='kode-text'>
                        <h3>Nina Williams</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy
                        </p>
                        <div className='social-icon'>
                          <ul>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-facebook'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-twitter'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-google-plus'></i>
                              </a>
                            </li>
                            <li>
                              <a href={'/'}>
                                <i className='fa fa-linkedin'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <h2>Detail Project Kami</h2>
                <div className='lib-qualities'>
                  <ul>
                    {/* LIST ITEM START */}
                    <li>
                      <i className='fa fa-star'></i>
                      <h2>100% Client Puas</h2>
                      <p>
                        Kami memiliki tim profesional agar mendapatkan hasil
                        yang memuaskan untuk klien kami.
                      </p>
                    </li>
                    {/* LIST ITEM END */}
                    {/* LIST ITEM START */}
                    <li>
                      <i className='fa fa-leaf'></i>
                      <h2>Design Buku yang Berkualitas</h2>
                      <p>
                        Desain buku dari kami sangat user friendly mudah
                        dipandang dan menyesuaikan tema yang diberikan.
                      </p>
                    </li>
                    {/* LIST ITEM END */}
                    {/* LIST ITEM START */}
                    <li>
                      <i className='fa fa-users'></i>
                      <h2>Kepercayaan Pelanggan</h2>
                      <p>
                        Sudah banyak penulis yang percaya pada kami, buku yang
                        terbit juga mulai banyak, silahkan cek beberapa buku
                        pilihan pada menu buku
                      </p>
                    </li>
                    {/* LIST ITEM END */}
                    {/* LIST ITEM START */}
                    <li>
                      <i className='fa fa-life-ring'></i>
                      <h2>Dukungan Cepat 24 Jam </h2>
                      <p>
                        Kami menyediakan dukungan khusus 24 jam kepada pelanggan
                        kami karena kami tidak pernah meninggalkan pelanggan
                        kami sendiri.
                      </p>
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
        <section className='our-libraries'>
          <div className='container'>
            <h2>Partner Kami</h2>
            <div className='our-libraries-cover'>
              <div className='owl-library'>
                <div className='item'>
                  <div className='kode-thumb'>
                    <a href={'/'}>
                      <img src='/images/library-1.png' alt='Library' />
                    </a>
                  </div>
                </div>
                <div className='item'>
                  <div className='kode-thumb'>
                    <a href={'/'}>
                      <img src='/images/library-2.png' alt='Library' />
                    </a>
                  </div>
                </div>
                <div className='item'>
                  <div className='kode-thumb'>
                    <a href={'/'}>
                      <img src='/images/library-3.png' alt='Library' />
                    </a>
                  </div>
                </div>
                <div className='item'>
                  <div className='kode-thumb'>
                    <a href={'/'}>
                      <img src='/images/library-4.png' alt='Library' />
                    </a>
                  </div>
                </div>
                <div className='item'>
                  <div className='kode-thumb'>
                    <a href={'/'}>
                      <img src='/images/library-1.png' alt='Library' />
                    </a>
                  </div>
                </div>
                <div className='item'>
                  <div className='kode-thumb'>
                    <a href={'/'}>
                      <img src='/images/library-2.png' alt='Library' />
                    </a>
                  </div>
                </div>
                <div className='item'>
                  <div className='kode-thumb'>
                    <a href={'/'}>
                      <img src='/images/library-3.png' alt='Library' />
                    </a>
                  </div>
                </div>
                <div className='item'>
                  <div className='kode-thumb'>
                    <a href={'/'}>
                      <img src='/images/library-4.png' alt='Library' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* LIBRARY GALLERY SECTION END */}
        {/* FACTS SECTION START */}
        <section className='kode-interesting-facts'>
          <div className='container'>
            <h2>Fakta Tentang Kami</h2>
            <div className='kode-facts'>
              {/* Nav tabs */}
              <ul className='nav nav-tabs' role='tablist'>
                <li role='presentation' className='active'>
                  <a
                    href='#work'
                    aria-controls='work'
                    role='tab'
                    data-toggle='tab'
                  >
                    Kenapa Memilih Kami
                  </a>
                </li>
                <li role='presentation'>
                  <a
                    href='#Benifits'
                    aria-controls='Benifits'
                    role='tab'
                    data-toggle='tab'
                  >
                    Keuntungan
                  </a>
                </li>
                <li role='presentation'>
                  <a
                    href='#located'
                    aria-controls='located'
                    role='tab'
                    data-toggle='tab'
                  >
                    Lokasi
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className='tab-content'>
                <div
                  role='tabpanel'
                  className='tab-pane fade in active'
                  id='work'
                >
                  <h4>Kenapa Memilih Kami</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div role='tabpanel' className='tab-pane fade' id='Benifits'>
                  <h4>Keuntungan </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    {' '}
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div role='tabpanel' className='tab-pane fade' id='located'>
                  <h4>Lokasi</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterComponent />
    </div>
  );
};

export default TentangKami;
