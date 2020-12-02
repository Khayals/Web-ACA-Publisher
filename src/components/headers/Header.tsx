import React from 'react'

function Header() {
    return (
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
    )
}

export default Header