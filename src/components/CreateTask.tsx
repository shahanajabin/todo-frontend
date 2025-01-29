import { useState } from "react";

interface SetListprop { setListprop: React.Dispatch<React.SetStateAction<{ id: number; task: string }[]>> }
export const CreateField = ({ setListprop }: SetListprop) => {

    const [textValue, setTextValue] = useState('');

    // Input Fetch Tasks
    function fetchValue(event: React.ChangeEvent<HTMLInputElement>) {
        setTextValue(event.target.value)
    }

    // Add Task
    function addBtn() {
        if (textValue) {
            setListprop(previous => [...previous, { id: Date.now(), task: textValue }])
            setTextValue("")
        } else {
            alert('Enter the Task in Text Field.')
        }
    }

    return (
        <>
            <div className="createTask">
                <input
                    type="text"
                    value={textValue}
                    className="input"
                    onChange={fetchValue}
                    placeholder="Create a Task." />
                <button
                    onClick={addBtn}
                    className="add-btn">ADD TASK</button>
            </div >
        </>
    )
}