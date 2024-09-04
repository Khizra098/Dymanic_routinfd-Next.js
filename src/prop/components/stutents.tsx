import Narbar from "../components/Narbar";

export default function Student(props){
    console.log(props)
    return(
        <div>
            <h1> name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Salary: "{props.Salary}</h1>
        </div>
    );
}