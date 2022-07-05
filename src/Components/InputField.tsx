import React from 'react'

import { Todo } from './model'

// interface TodoData{
//   todo:string;

// }

type InputFieldProps = {
  data: Todo[];
  handleDelete: (id: number) => void;
  handleDone: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}



const InputField: React.FC<InputFieldProps> = ({ data, handleDelete, handleDone }) => {

  // console.log(data)

  return (

    <div>  <div className="todos">


      {
        data.map((obj) => {

          return (
            <div className="todo">
              <div className="left">

                {/* to check the checkbox if a task is complted */}

                <input onChange={(e) => {
                  { handleDone(e, obj.id) }

                }}
                  value=''
                  type="checkbox"
                  name="" id="" />

                {/* to display the tasks based on the todo isdone */}
                {obj.isDone ?
                  <s>{obj.todo}</s> :
                  <p>
                    {obj.todo}
                  </p>
                }

              </div>
              <div className="right">
                <i className="fas fa-times" onClick={() => {
                  handleDelete(obj.id)
                }}></i>
              </div>
            </div>
          )
        })
      }

    </div>
    </div>
  )
}

export default InputField