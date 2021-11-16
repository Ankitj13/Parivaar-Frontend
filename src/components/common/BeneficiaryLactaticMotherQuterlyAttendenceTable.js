import React from "react";
import { useSelector } from "react-redux";

function BeneficiaryLactaticMotherQuterlyAttendenceTable() {
  const { employees } = useSelector((state) => state.data);
  return (
    <table class="table table-hover text-nowrap">
      <thead>
        <tr>
        <th style={{width:0}}>S.No.</th>
          <th
            style={{
              position: "sticky",
              left: 0,
              backgroundColor: "#ffffff",
              zIndex: 1,
            }}
          >
            Name
          </th>
          <th class="text-center">
            <img
              src="dist/img/icon/vaccine.png"
              alt="Vaccine"
              class="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Vaccine</p>
            <div class="form-check" style={{ paddingBottom: 15 }}>
              <input class="form-check-input" type="checkbox" />
            </div>
          </th>
          <th class="text-center">
            <img
              src="dist/img/icon/blood-pressure.png"
              alt="Blood-Pressure"
              class="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Blood Pressure</p>
            <div class="form-check" style={{ paddingBottom: 15 }}>
              <input class="form-check-input" type="checkbox" />
            </div>
          </th>
          <th class="text-center">
            <img
              src="dist/img/icon/Weight.png"
              alt="Weight"
              class="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Weight</p>
            <div class="form-check" style={{ paddingBottom: 15 }}>
              <input class="form-check-input" type="checkbox" />
            </div>
          </th>
          <th class="text-center">
            <img
              src="dist/img/icon/hemoglobin.png"
              alt="Tablet"
              class="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Hemoglobin</p>
            <div class="form-check" style={{ paddingBottom: 15 }}>
              <input class="form-check-input" type="checkbox" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {employees &&
          employees.map((employee, i) => (
            <tr key={employee.id}>
              <td>{i+1}</td>
              <td
                style={{
                  position: "sticky",
                  left: 0,
                  backgroundColor: "#ffffff",
                  zIndex: 1,
                }}
              >
                {employee.name} {employee.husbandname}
              </td>
              <td>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="DCP" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="0.00" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="0.00" />
                </div>
              </td>
              <td>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="0.00" />
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default BeneficiaryLactaticMotherQuterlyAttendenceTable;
