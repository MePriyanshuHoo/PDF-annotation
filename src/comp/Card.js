function Card(props) {
    const Cardinfo = props.info;
    return (
        <div>
            <h1>{Cardinfo.task_name}</h1>
            <div style={{ color: "red" }}>{Cardinfo.task_status}</div>
            <button
                value={props.index}
                name={Cardinfo.task_uuid}
                onClick={props.PageHandler}>open</button>
        </div>
    )
}
export default Card;