import React, { useEffect } from "react";
import { useState } from "react";

export default function To_do() {
  const [task, setTask] = useState("");
  const [name, setName] = useState("");

  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const [complete, isComplete] = useState(false);

  useEffect(() => {}, []);

  const addTask = () => {
    if (task !== "") {
      // data.push(task);
      setData([...data, { task: task, name: name }]);
      setTask("");
      setName("");
    }
    console.log(data);
  };
  const showTask = () => {
    if (data.length > 0) {
      setShow(!show);
    }
    console.log(data);
  };

  const deleteTask = (index) => {
    let newData = [...data];
    const filterdata = newData.filter((ele, index1) => index1 != index);
    setData(filterdata);
    filterdata.length === 0 && setShow(false);
  };

  const deleteAll = () => {
    if (data.length > 0) {
      setData([]);
      setShow(false);
    }
  };
  const completeTask = () => {
    if (data.length > 0) {
      isComplete(!complete);
    }
  };
  return (
    <div className="container">
      <div className="form">
        <input
          onChange={(e) => setTask(e.target.value)}
          type="text"
          className="input"
          placeholder="Enter your task"
          value={task}
          required
        />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="input"
          placeholder="Enter your Name"
          value={name}
          required
        />
        <button onClick={addTask} type="button" className="add">
          Add Task
        </button>
        <button onClick={showTask} type="button" className="add">
          {show ? "Hide Task" : "Show Task"}
        </button>
      </div>

      {show &&
        data?.map((ele, index) => {
          return (
            <>
              <div key={index}>
                <div className="tasks">
                  {ele.task}, {ele.name}
                  <button
                    className="add"
                    onClick={() => {
                      deleteTask(index);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="add"
                    onClick={() => {
                      completeTask(index);
                    }}
                  >
                    {complete ? "InComplete" : "Complete"}
                    {}
                  </button>
                  <div className={`${complete ? "text-white border-1 bg-success p-1 rounded-2" : "text-white border-1 bg-warning p-1 rounded-2"}`}>
                    {complete ? "Complete" : "InComplete"}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      {/* try to commit */}
      <div onClick={deleteAll} className="delete-all">
        Delete all
      </div>
    </div>
  );
}
