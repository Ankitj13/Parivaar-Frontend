import React from 'react'

export const GlobelFilter = ({filter, setFilter}) => {
    return (
        <div className="form-group">
        <form className="search-form">
          <div className="input-group">
            <input
              type="text"
              name="search"
              class="form-control"
              placeholder="Search"
              value={filter || ''}
              onChange={(e) => setFilter(e.target.value)}
            />
            <div className="input-group-append">
              <button type="button" className="btn btn-default">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}
