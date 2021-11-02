import './Border.css';

function Border(props){
    return (
        <div className="frame">
            {props.children}
        </div>
    )
}

export default Border;