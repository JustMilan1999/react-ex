import React, { useState } from "react";

const Crud1 = () => {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    firstname: "",
    lastName: "",
    gender: "",
  });
  const onChange = (e) => {
    // const { name, value } = e.target;
    console.log("e", e.target.name);
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    setData([...data, inputData]);
    await console.log(data);
  };
  const onDelete = () => {};
  const onEdit = (index) => {
    console.log("index", index);
  };
  return (
    <>
      <form>
        <label>FirstName</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          onChange={onChange}
        />
        <label>lastNAme</label>
        <input type="text" name="lastName" id="lastName" onChange={onChange} />
      </form>
      <button onClick={onSubmit}>submit</button>
      <table>
        <tr>
          <th>firstname</th>
          <th>lastname</th>
        </tr>
        <tbody>
          <tr>
            {data?.map((item, index) => {
              return (
                <>
                  <td>{item?.firstname}</td>
                  <td>{item?.lastName}</td>
                  <button onClick={() => onEdit(index)}>edit</button>
                  <button onClick={() => onDelete(index)}>delete</button>
                </>
              );
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Crud1;
