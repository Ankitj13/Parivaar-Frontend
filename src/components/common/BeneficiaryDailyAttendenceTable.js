import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllChilds } from "../../actions/publicActions";

function BeneficiaryDailyAttendenceTable() {
  let dispatch = useDispatch();
  //const [employee, setUsers] = useState([]);
  const { employees } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadAllChilds());
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      
    console.log(name);
      let tempUser = employees.map((employee) => {
        return { ...employee, isChecked: checked };
      });
      console.log(tempUser)
      dispatch(loadAllChilds(tempUser));
    } else {
      let tempUser = employees.map((employee) =>
        employee.name === name ? { ...employee, isChecked: checked } : employee
      );
      dispatch(loadAllChilds(tempUser));
    }
  };
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
              src="dist/img/icon/meal.png"
              alt="Vaccine"
              className="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Meals</p>
            <div className="form-check" style={{ paddingBottom: 15 }}>
              <input
                className="form-check-input"
                type="checkbox"
                name="allSelect"
                checked={employees.filter((employee) => employee?.isChecked !== true).length < 1}
                onChange={handleChange}
              />
            </div>
          </th>
          <th className="text-center">
            <img
              src="dist/img/icon/milk.png"
              alt="Vaccine"
              className="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Milk</p>
            <div className="form-check" style={{ paddingBottom: 15 }}>
              <input className="form-check-input" type="checkbox" />
            </div>
          </th>
          <th className="text-center">
            <img
              src="dist/img/icon/protein.png"
              alt="Vaccine"
              className="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Fruits</p>
            <div className="form-check" style={{ paddingBottom: 15 }}>
              <input className="form-check-input" type="checkbox" checked />
            </div>
          </th>
          <th className="text-center">
            <img
              src="dist/img/icon/vitamin.png"
              alt="Vaccine"
              className="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Vitamin</p>
            <div className="form-check" style={{ paddingBottom: 15 }}>
              <input className="form-check-input" type="checkbox" />
            </div>
          </th>
          <th className="text-center">
            <img
              src="dist/img/icon/calcium.png"
              alt="Vaccine"
              className="img-size-32"
            />
            <p style={{ fontSize: 12 }}>Calcium</p>
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
              <td>{i + 1}</td>
              <td
                style={{
                  position: "sticky",
                  left: 0,
                  backgroundColor: "#ffffff",
                  zIndex: 1,
                }}
              >
                {employee.childName} {employee.parents_name}
              </td>
              <td className="text-center">
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={employee.name}
                      checked={employee?.isChecked || false}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </td>
              <td className="text-center">
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </div>
              </td>
              <td className="text-center">
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </div>
              </td>
              <td className="text-center">
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </div>
              </td>
              <td className="text-center">
                <div className="form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default BeneficiaryDailyAttendenceTable;
