import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllDistricts } from "../../actions/publicActions";

function DistrictFilter() {
  let dispatch = useDispatch();
  const { districts } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadAllDistricts());
  }, []);
  return (
    <>
      <div class="row">
        <div class="col-lg-4 col-12">
          <form class="search-form">
            <div class="input-group">
              <input
                type="text"
                name="search"
                class="form-control"
                placeholder="Search"
              />

              <div class="input-group-append">
                <button type="submit" name="submit" class="btn btn-primary">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-2 col-12">
          <div class="form-group"></div>
        </div>
        <div class="col-lg-2 col-6">
          <div class="form-group">
            <select class="form-control">
              <option>Select District</option>
              {districts &&
                districts.map((district) => (
                  <option name="" key={district.id}>
                    {district.districtname}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div class="col-lg-2 col-6">
          <div class="form-group">
            <select class="form-control">
              <option>Cluster</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
        </div>
        <div class="col-lg-2 col-12">
          <div class="form-group">
            <select class="form-control">
              <option>Kutir</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
              <option>option 5</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default DistrictFilter;
