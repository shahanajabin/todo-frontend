import { CreateField } from "./components/CreateTask"
import { TaskList } from "./components/TaskList"
import { useState } from "react"
import "./styles/app.css"

export const App = () => {

    // State Management for Creating Task
    const [list, setList] = useState<{ id: number, task: string }[]>([])

    return (
        <>
            <div className="todo">
                <CreateField setListprop={setList} />
                <TaskList
                    listProp={list}
                    setListprop={setList}
                />
            </div>
        </>
    )
}