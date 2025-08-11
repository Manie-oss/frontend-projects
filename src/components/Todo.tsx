import { useEffect, useState } from "react";
// import "./App.css";

interface ItemI {
  id: number;
  item: string;
  isChecked: boolean;
}

function Todo() {
  const lsTodo = localStorage.getItem("todo");
  const allTodos = lsTodo ? JSON.parse(lsTodo): [] ;
  // const allTodos = [];
  const [item, setItem] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);
  const [todoItems, setTodoItems] = useState<ItemI[]>(allTodos);


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setItem(e.target.value);
  }

  function handleAddItem() {
    setTodoItems((todo) => [...todo, { id: counter, item, isChecked: false }])  ;
    setCounter(counter + 1);
    setItem("");
  }

  function handleDelItem(it: number) {
    setTodoItems((todo) => todo.filter((item) => item.id != it));
  }

  function handleCheck(e){
    setTodoItems((todo) => todo.map((it) => {
      if(it.id == e.target.name){
        return {...it, isChecked: !it.isChecked};
      }
      return it;
    }));
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <input type="text" name="item" value={item} onChange={handleChange} />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <div>
        {todoItems.map((it) => (
          <div style={{display:"flex", gap:"1rem", marginTop: "5px"}} key={it.id}>
            <input type="checkbox" name={`${it.id}`} onChange={handleCheck}/>
            <span style={{textDecoration: it.isChecked ? "line-through" : "none"}}>
              {it.item}
            </span>
            <button onClick={() => handleDelItem(it.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

// function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm();

//   console.log(errors);

//   const submit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(submit)}>
//         <input
//           {...register("fname", {
//             required: { value: true, message: "field is required" },
//             maxLength: {value: 5, message: "name is too long"}
//           })}
//         />
//         <h6>{errors?.fname && errors.fname?.message}</h6>
//         <input {...register("lname")} />
//         <button>submit</button>
//       </form>
//       <button type="button" onClick={()=>{setValue("fname", "mansi")}}>click me</button>
//     </div>
//   );
// }

// function App() {
//   const [name, setName] = useState({
//     fName: "",
//     lName: "",
//   });

//   console.log(name);

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log("submitted");
//   }

//   const handleChange = (event) => {
//     setName((n) => ({ ...n, [event.target.name]: event.target.value }));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <p>
//           <input
//             name="fName"
//             type="text"
//             value={name.fName}
//             onChange={handleChange}
//           />
//         </p>
//         <p>
//           <input
//             name="lName"
//             type="text"
//             value={name.lName}
//             onChange={handleChange}
//           />
//         </p>
//         <p>
//           <button type="button">Submit</button>
//         </p>
//       </form>
//     </div>
//   );
// }

export default Todo;
