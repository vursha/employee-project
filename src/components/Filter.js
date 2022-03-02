import { Form } from "react-bootstrap"
import { useContext } from "react"
import {  Emp} from "../context/Context";

const Filters=()=>{
    // const {
    //     empstate:{ascending,search,sort},empdispatch,} = EmpState();
    
    // console.log(EmpState);
    const {ascending,descending,setAscending,setDescending
    }=useContext(Emp)
    return(
        <div className="filters">
            <span className="title">Filter Employees</span>
            <span>
                <Form.Check
                inline
                label='Ascending'
                name="group1"
                type='radio'
                id={`inline-1`}
                 onChange={()=>{
                    setAscending(!ascending)
                    setDescending(false)
                 }}/>
                    
                </span>
            <span>
                <Form.Check
                inline
                label='Descending'
                name="group1"
                type='radio'
                id={`inline-2`}
                onChange={()=>{
                    setDescending(!descending)
                    setAscending(false)
                 }}
                // onChange={()=>
                //     empdispatch({
                //         type:'ascending',
                //         payload:'dec',

                //     })
                //     }
                //     checked={sort==='dec' ? true:false} 
                />
            </span>
            {/* <Button variant='light'>Clear Filter</Button> */}
        </div>
    )
}
export default Filters;