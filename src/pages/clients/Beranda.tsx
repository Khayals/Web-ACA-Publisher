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
                <h5>Are you searching a book...?</h5>
                <h2>Biggest Library</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolor emque laudantium, totam rem aperiam.ipsam
                  voluptatem.
                </p>
                <div className="caption-btns">
                  <a href="#">See More</a>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </li>
            <li>
              <img src="/images/banner-2.png" alt="" />
              <div className="kode-caption-2">
                <h5>Are you searching a book...?</h5>
                <h2>Biggest Library</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolor emque laudantium, totam rem aperiam.ipsam
                  voluptatem.
                </p>
                <div className="caption-btns">
                  <a href="#">See More</a>
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </li>
            <li>
              <img src="/images/banner-3.png" alt="" />
              <div className="kode-caption-2">
                <h5>Are you searching a book...?</h5>
                <h2>Biggest Library</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium dolor emque laudantium, totam rem aperiam.ipsam
                  voluptatem.
                </p>
                <div className="caption-btns">
                  <a href="#">See More</a>
                  <a href="#">Buy Now</a>
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
        {/* <!--BUT NOW END--> */}
        {/* <!--CONTENT START--> */}
        <div className="kode-content">
          {/* <!--BOOK GUIDE SECTION START--> */}
          <section>
            <div className="container">
              {/* <!--SECTION CONTENT START--> */}
              <div className="section-heading-1">
                <h2>Welcome to the library</h2>
                <p>Welcome to the Most Popular Library Today</p>
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
                      <a href="#">Ebooks</a>
                    </h3>
                    <p>
                      an electronic version of a printed book that can be read
                      on a computer.
                    </p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="kode-service-3">
                    <i className="fa fa-book"></i>
                    <h3>
                      <a href="#">audiobooks</a>
                    </h3>
                    <p>
                      an audiocassette or CD recording of a reading of a book,
                      typically a novel.
                    </p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="kode-service-3">
                    <i className="fa fa-clone"></i>
                    <h3>
                      <a href="#">Magazine</a>
                    </h3>
                    <p>
                      a periodical publication containing articles and
                      illustrations information.
                    </p>
                    <a href="#" className="read-more">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="kode-service-3">
                    <i className="fa fa-calculator"></i>
                    <h3>
                      <a href="#">Teans &amp; Kids</a>
                    </h3>
                    <p>
                      the years of a person's age from 13 to 19 and are the kids
                      and teens.
                    </p>
                    <a href="#" className="read-more">
                      Read More
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
                <h2>Our Top Categories</h2>
                <p>
                  Here are some of the Top Categories of the Books Available.
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                            <a href="#">Bridget Jones</a>
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                          <p className="price">$334.50</p>
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                            <a href="#">Chrysalis</a>
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                          <p className="price">$447.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Dead Water</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$770.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$996.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Fableheaven</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$821.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">City Of Bones</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Annette Blair</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                            <a href="#">Bridget Jones</a>
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                          <p className="price">$334.50</p>
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                            <a href="#">Chrysalis</a>
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                          <p className="price">$447.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Dead Water</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$770.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$996.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Fableheaven</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$821.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">City Of Bones</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Annette Blair</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                            <a href="#">Bridget Jones</a>
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                          <p className="price">$334.50</p>
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                            <a href="#">Chrysalis</a>
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                          <p className="price">$447.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Dead Water</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$770.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$996.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Fableheaven</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$821.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">City Of Bones</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Annette Blair</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                            <a href="#">Bridget Jones</a>
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                          <p className="price">$334.50</p>
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                            <a href="#">Chrysalis</a>
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
                          <a href="#" className="add-to-cart">
                            Add To Cart
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
                          <p className="price">$447.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Dead Water</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$770.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$996.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Fableheaven</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                          <p className="price">$821.75</p>
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">City Of Bones</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
                            <a href="#">Annette Blair</a>
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
                          <a className="add-to-cart" href="#">
                            Add To Cart
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
              <h2>Checkout Huge Feature lists</h2>
              <p>Here are some of the Exciting Book Guide Features.</p>
              <a href="#" className="more">
                Learn more
              </a>
            </div>
          </section>
          {/* <!--VIDEO SECTION END--> */}
          {/* <!--BEST SELLER SLIDER SECTION START--> */}
          <section className="lib-papular-books">
            <div className="container">
              {/* <!--SECTION CONTENT START--> */}
              <div className="section-heading-1">
                <h2>Most Popular Books</h2>
                <p>
                  The Most Popular Books Today are available in Book Library
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
                          <a href="#">See More</a>
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
                          <a href="#">See More</a>
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
                          <a href="#">See More</a>
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
                          <a href="#">See More</a>
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
                          <a href="#">See More</a>
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
                          <a href="#">See More</a>
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
                    <p>Working Year</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="count-up">
                    <span className="counter circle">8589</span>
                    <p>Books Sold</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="count-up">
                    <span className="counter circle">458</span>
                    <p>Top Author</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="count-up">
                    <span className="counter circle">750</span>
                    <p>Book Published</p>
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
                <h2>Our Testimonials</h2>
                <p>What our clients say about the books reviews and comments</p>
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
                <h2>Our Top Authors</h2>
                <p>
                  Here are some of the Top Authors that are available in Books
                  Library
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
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <img src="/images/lib-author.png" alt="" />
                <div className="kode-caption">
                  <h4>Nina Soriya</h4>
                  <p>Author</p>
                </div>
              </div>
              <div className="lib-authors">
                <div className="social-icons">
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
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <img src="/images/lib-author2.png" alt="" />
                <div className="kode-caption">
                  <h4>Martin</h4>
                  <p>Author</p>
                </div>
              </div>
              <div className="lib-authors">
                <div className="social-icons">
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
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <img src="/images/lib-author3.png" alt="" />
                <div className="kode-caption">
                  <h4>Alexder</h4>
                  <p>Author</p>
                </div>
              </div>
              <div className="lib-authors">
                <div className="social-icons">
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
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <img src="/images/lib-author4.png" alt="" />
                <div className="kode-caption">
                  <h4>Jullia</h4>
                  <p>Author</p>
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
                <h2>Become a member</h2>
                <p>Submit your books idea and you can become an Author.</p>
                <div className="kode-icon">
                  <i className="fa fa-book"></i>
                </div>
              </div>
              {/* <!--SECTION HEADING END--> */}
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <div className="input-container">
                    <i className="fa fa-user"></i>
                    <input type="text" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="input-container">
                    <i className="fa fa-envelope-o"></i>
                    <input type="text" placeholder="Your Email" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="input-container">
                    <i className="fa fa-home"></i>
                    <input type="text" placeholder="Your Address" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="input-container">
                    <i className="fa fa-phone"></i>
                    <input type="text" placeholder="Your Phone" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="input-container">
                    <i className="fa fa-calendar"></i>
                    <input type="text" placeholder="Your Age" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="input-container">
                    <i className="fa fa-check-square-o"></i>
                    <select>
                      <option>Select Package</option>
                      <option>Package One</option>
                      <option>Package Two</option>
                      <option>Package Three</option>
                      <option>Package Four</option>
                      <option>Package Five</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12">
                  <a href="#" className="reg-btn">
                    Register
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
                <h2>Subscribe Our Newsletter</h2>
                <p>Subscribe here with your email us and get up to date.</p>
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
                      <input type="text" placeholder="Subscribe us" />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button>
                      Subscribe<i className="fa fa-paper-plane"></i>
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
                Lorem ipsum
                <br />
                Sed ut perspiciatis
              </h2>
              <h4>200 capacity</h4>
              <p>Esse cillum dolore eu fugiat nulla USA</p>
              <span>
                <i className="fa fa-phone"></i>80.828247.89
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
