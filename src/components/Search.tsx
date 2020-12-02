import React from 'react'

function Search() {
    return (
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
    )
}

export default Search