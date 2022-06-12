export default function WorkBar(props) {
    const colors = ['white', 'red', 'green', 'blue', 'black', 'gray'];
    
    const colorsBtns = colors.map(data => (<button onClick={() => props.setCurrentColor(data)}>{data}</button>))

    return (
        <div className="App">
            <p>currentColor</p>
            <span><div style={{backgroundColor: `${props.currentColor}`, width:'100px', height:'100px', borderStyle:'solid' ,borderColor:"black", borderWidth:'1px'}}>{props.currentColor}</div></span>
            <br></br>
            <div>
                {colorsBtns}
                {/* <input placeholder="another color" style={{width:'100px'}}></input> */}
            </div>
            {/* <br></br>
            <div>size : <input style={{width:'15px'}} value={9}></input>x<input style={{width:'15px'}} value={9}></input></div>
            <br></br> */}
            <br></br>
        </div>
    )
}