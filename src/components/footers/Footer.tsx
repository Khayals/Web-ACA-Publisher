import React from 'react';

function Footer () {
  const creditYear = new Date();
  const footerUpdateYear = creditYear.getFullYear();
  return (
    <div>
      <section className='kode-uptodate'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <h2>stay up-to-dated</h2>
            </div>
            <div className='col-md-8'>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='social-icons'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fa fa-facebook'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-google-plus'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-twitter'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa fa-pinterest-p'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-9'>
                  <div className='input-container'>
                    <input
                      type='text'
                      placeholder='Your E-mail Address'
                      id='sub-2'
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
      <footer className='footer-3'>
        <div className='container'>
          <div className='row'>
            {/* CATEGORY WIDGET START */}
            <div className='col-md-3 col-sm-6'>
              <div className='widget widget-categories'>
                <h2>Information</h2>
                <ul>
                  <li>
                    <a href='#'>Specials</a>
                  </li>
                  <li>
                    <a href='#'>New products</a>
                  </li>
                  <li>
                    <a href='#'>Best sellers</a>
                  </li>
                  <li>
                    <a href='#'>Contact us</a>
                  </li>
                  <li>
                    <a href='#'>Terms of use</a>
                  </li>
                  <li>
                    <a href='#'>Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* CATEGORY WIDGET END */}
            {/* LATEST NEWS WIDGET START */}
            <div className='col-md-3 col-sm-6'>
              <div className='widget widget-latest-news'>
                <h2>Lates News</h2>
                <ul>
                  <li>
                    <div className='kode-thumb'>
                      <a href='#'>
                        <img src='/images/latest-news.png' alt='' />
                      </a>
                    </div>
                    <div className='kode-text'>
                      <p>Phasellus risusa Aliowm</p>
                      <p>14 December 2015</p>
                    </div>
                  </li>
                  <li>
                    <div className='kode-thumb'>
                      <a href='#'>
                        <img src='/images/latest-news.png' alt='Latest News' />
                      </a>
                    </div>
                    <div className='kode-text'>
                      <p>Phasellus risusa Aliowm</p>
                      <p>14 December 2015</p>
                    </div>
                  </li>
                  <li>
                    <div className='kode-thumb'>
                      <a href='#'>
                        <img src='/images/latest-news.png' alt='Latest News' />{' '}
                      </a>
                    </div>
                    <div className='kode-text'>
                      <p>Phasellus risusa Aliowm</p>
                      <p>14 December 2015</p>
                    </div>
                  </li>
                  <li>
                    <div className='kode-thumb'>
                      <a href='#'>
                        <img src='/images/latest-news.png' alt='Latest News' />
                      </a>
                    </div>
                    <div className='kode-text'>
                      <p>Phasellus risusa Aliowm</p>
                      <p>14 December 2015</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* LATEST NEWS WIDGET END */}
            {/* TWITTER WIDGET START */}
            <div className='col-md-3 col-sm-6'>
              <div className='widget widget-flickr'>
                <h2>Flickr Gallery </h2>
                <ul>
                  <li>
                    <a href='#'>
                      <img src='/images/gallery1.png' alt='Galeri' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/gallery2.png' alt='Galeri' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/gallery3.png' alt='Galeri' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/gallery4.png' alt='Galeri' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/gallery5.png' alt='Galeri' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/gallery6.png' alt='Galeri' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/gallery4.png' alt='Galeri' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/gallery5.png' alt='Galeri' />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='/images/gallery6.png' alt='Galeri' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* TWITTER WIDGET END */}

            {/* NEWSLETTER START */}
            <div className='col-md-3 col-sm-6'>
              <div className='widget widget-contact-info'>
                <h2>get in touch</h2>
                <ul>
                  <li>
                    <i className='fa fa-paper-plane'></i>
                    <div className='kode-text'>
                      <h4>Address</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.{' '}
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className='fa fa-phone'></i>
                    <div className='kode-text'>
                      <h4>phone Number</h4>
                      <p>+55(62) 55258-4570</p>
                      <p>+55(62) 55258-4570</p>
                    </div>
                  </li>
                  <li>
                    <i className='fa fa-envelope-o'></i>
                    <div className='kode-text'>
                      <h4>Email Address</h4>
                      <a href='#'>Info@androcenta.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* NEWSLETTER START END */}
          </div>
        </div>
      </footer>
      <div className='copyrights'>
        <div className='container'>
          <p>
            Copyrights © {footerUpdateYear} Androcenta Publisher. All rights
            reserved
          </p>
          <div className='cards'>
            <img src='/images/cards.png' alt='cards' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
