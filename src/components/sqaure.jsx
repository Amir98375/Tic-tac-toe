import './square.css'
export const SquareComponet=(props)=>{
    return(
        <span className={`square ${props.className}`} onClick={props.onClick}>
       { props.state}
        </span>
    )
}