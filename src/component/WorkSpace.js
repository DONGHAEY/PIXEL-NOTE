import { useState } from "react";

export default function WorkSpace(props) {

    const [ title, setTitle ] = useState(props.tbdt.title);
    console.log(title)

    function changeTitle(e) {
        setTitle(e.target.value);
        props.changeTitle(e.target.value);
    }


    const tb = props.tbdt.data.map(d1 => {
        return <tr>{
            d1.map(d2 => {
                return (
                    <td onClick={() => props.setColor(d2.i, d2.j)} onDoubleClick={()=> props.clickForDrag()} 
                    onMouseEnter={() => props.setDragColor(d2.i, d2.j)} 
                    style={{width:'25px', height:'25px',backgroundColor: d2.color}}
                    >   
                    </td>
                )
            })
        }</tr>
    })

    return (
        <div>
            <input 
            onChange={changeTitle} 
            value={props.tbdt.title}
        >
                
            </input>
            <table ondragstart="return true">
                {tb}
            </table>
        </div>
    )
}