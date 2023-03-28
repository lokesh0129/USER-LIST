

const Button=(props)=>{
    return(
        <button onClick={props.onClick} className={`btn btn-${props.type}`}>{props.children}</button>
    )
}

export default Button