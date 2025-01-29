interface List {
    listProp: { id: number, task: string }[],
    setListprop: React.Dispatch<React.SetStateAction<{ id: number; task: string }[]>>
}
export const TaskList = ({ listProp, setListprop }: List) => {
    // function remove(list: { id: number, task: string }) {
    //     setListprop((prev) => {
    //         prev.map((element, index) => {
    //             if (element.id === list.id) {
    //                 prev.splice(index, 1)
    //             }
    //         })
    //         return prev
    //     })
    // }
    function remove(id: number) {
        setListprop(prev => prev.filter(task => task.id !== id));
    }



    return (
        <>
            {
                listProp.map((items) => (
                    <div className="list-items" key={items.id}>
                        <p className="textName"  >
                            {items.task}
                            <button
                                onClick={() => { remove(items.id) }}
                                className="delete-btn">DELETE</button>
                        </p>
                    </div >
                ))
            }
        </>
    )
}