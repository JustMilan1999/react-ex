import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Crud = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [inputData, setInputData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });
  // layout

  //array define  = name
  // object
  // bool
  // function

  // submit button submit
  //edit button edit
  // delete button delete
  // retutn table show array name

  const onSubmit = async (e) => {
    e.preventDefault();
    if (editing === true) {
      setData(
        data.map((user, index) => {
          return index === inputData?.id ? inputData : user;
        })
      );
      setEditing(false);
      setInputData({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
      });
    } else {
      if (
        inputData &&
        inputData.firstName &&
        inputData.lastName &&
        inputData.gender &&
        inputData.email
      ) {
        setData([...data, inputData]);
        // await changeRoute();
        setInputData({
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
        });
      }
    }
  };
  // const changeRoute = () => {
  //   setTimeout(() => {

  //     navigate("/");
  //   }, 5000);
  // };

  const editRow = (index) => {
    setEditing(true);
    setInputData({
      id: index,
      firstName: data[index].firstName,
      lastName: data[index].lastName,
      email: data[index].email,
      gender: data[index].gender,
    });
  };
  const deleteRow = (id) => {
    const deleteData = data.filter((item, index) => {
      return index != id;
    });
    setData(deleteData);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  return (
    <>
      <div>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>firstName</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={inputData?.firstName}
            onChange={onChange}
          ></input>
          <label>lastName</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={inputData?.lastName}
            onChange={onChange}
          ></input>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={inputData?.email}
            onChange={onChange}
          ></input>
          <label>Gender</label>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            id="male"
            checked={inputData?.gender === "male"}
            value="male"
            onChange={onChange}
          ></input>
          <label>feMale</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={inputData?.gender === "female"}
            onChange={onChange}
          ></input>
        </form>

        <button onClick={(e) => onSubmit(e)}>submit</button>
        <table>
          <tr>
            <th>no</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
            <th>gender</th>
          </tr>
          {data?.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item?.firstName}</td>
                  <td>{item?.lastName}</td>
                  <td>{item?.email}</td>
                  <td>{item?.gender}</td>
                  <button onClick={() => editRow(index)}>edit</button>
                  <button onClick={() => deleteRow(index)}>delete</button>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Crud;
