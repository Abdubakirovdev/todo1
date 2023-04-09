import React from 'react';

const TodoList = ({todo}) => {
    return (
        <li className='mx-auto s:w-[90%] bg-green-700 py-[50px] rounder-2xl my-20 flex items-center justify-around m:w-[90%]'>
            <input type="checkbox"/>
            <h3>{todo.title}</h3>
            <button
                className=" text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove
            </button>
        </li>
    );
};

export default TodoList;