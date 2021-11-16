import React from 'react'

export const GlobelFilter = ({filter, setFilter}) => {
    return (
        <div class="form-group">
        <form class="search-form">
          <div class="input-group">
            <input
              type="text"
              name="search"
              class="form-control"
              placeholder="Search"
              value={filter || ''}
              onChange={(e) => setFilter(e.target.value)}
            />
            <div class="input-group-append">
              <button type="button" class="btn btn-default">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}
