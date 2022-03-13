import React from "react";
import { useSelector } from "react-redux";

function BeneficiaryMotherQuterlyAttendenceTable() {
  const { employees } = useSelector((state) => state.data);
  return (
    <table className="table table-hover text-nowrap">
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
          <th className="text-center">
            <img
              src="dist/img/icon/vaccine.png"
              alt="Vaccine"
              className="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Vaccine</p>
            <div className="form-check" style={{ paddingBottom: 15 }}>
              <input className="form-check-input" type="checkbox" />
            </div>
          </th>
          <th className="text-center">
            <img
              src="dist/img/icon/blood-pressure.png"
              alt="Blood-Pressure"
              className="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Blood Pressure</p>
            <div className="form-check" style={{ paddingBottom: 15 }}>
              <input className="form-check-input" type="checkbox" />
            </div>
          </th>
          <th className="text-center">
            <img
              src="dist/img/icon/Weight.png"
              alt="Weight"
              className="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Weight</p>
            <div className="form-check" style={{ paddingBottom: 15 }}>
              <input className="form-check-input" type="checkbox" />
            </div>
          </th>
          <th className="text-center">
            <img
              src="dist/img/icon/hemoglobin.png"
              alt="Tablet"
              className="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Hemoglobin</p>
            <div className="form-check" style={{ paddingBottom: 15 }}>
              <input className="form-check-input" type="checkbox" />
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
                {employee.motherName} W/O {employee.husband_name}
              </td>
              <td>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="DCP" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="0.00" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="0.00" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="0.00" />
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default BeneficiaryMotherQuterlyAttendenceTable;
