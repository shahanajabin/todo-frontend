import { useState, useEffect } from "react"

export const CreateTask = () => {

    const [list, setList] = useState<string[]>([])
    useEffect(() => {
        console.log(list);
    }, [list]);

    // Input Field
    const [textValue, setTextValue] = useState('')
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTextValue(event.target.value);
    }

    // Add Button Activation
    function addList() {
        setList((previous) => {
            return [...previous, textValue]
        })
    }

    return (
        <>
            <div className="container">
                <input type="text"
                    placeholder="Enter The Task"
                    className=" addField"
                    value={textValue}
                    onChange={handleChange}
                />
                < button className="addButton"
                    onClick={addList}>ADD</button>
            </div>
        </>
    )
}


