import './ItemDate.css'

function ItemDate(props)
{


    const day=props.day;
    const month=props.month;
    const year=props.year;
    return(
        <div className="dob">

            <span>{day}</span>
            <br></br>
            <span>{month}</span>
            <br></br>
            <span>{year}</span>
        </div>

    )
}
export default ItemDate