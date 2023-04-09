import React, {useState} from 'react';
import TodoList from "../TodoList";

const Todo = () => {

    const [todoTitle, setTodoTitle] = useState('')
    const handleChange = (e) =>{
        setTodoTitle(e.target.value)
    }

    const [todo,setTodo] = useState({
        title: '',
        id: 1,
        isCompleted: false
    })


    const handleClick = (e) =>{
        e.preventDefault()
        setTodo({
            title: todoTitle
        })
        setValue(value.length ? [...value, value.push(todo)] : todo)
        setTodoTitle('')
    }

    const [value, setValue] = useState([])





    return (
        <div className=''>
            <div className='mx-auto s:w-[90%] bg-green-700 py-10  rounder-2xl my-20 m:w-[90%]'>
                <form className='flex items-center flex-col md:flex-row md:items-center md:justify-center'>
                    <div className='m:w-[300px] sm:w-[80%] sm:ml-12 md:w-1/2'>
                        <fieldset className='border w1/4 my-10 m:my-5 m:w-[90%]'>
                            <legend className='text-gray-400 ml-14 m:ml-8'>Your todos:</legend>
                            <input
                                onChange={(e) => handleChange(e)}
                                type="text"
                                className='outline-0 py-2 px-4 bg-transparent text-amber-50'/>
                        </fieldset>
                    </div>
                    <button onClick={(e) => handleClick(e)} type="submit"
                            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br
                             dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
                             md:my-10
                             ">Add</button>
                </form>
            </div>
            <div>
                <ul>
                    <TodoList todo={todo}/>
                </ul>
            </div>
        </div>
    );
};

export default Todo;