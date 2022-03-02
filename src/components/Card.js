import React,{useState, useContext, useEffect} from "react";
import { EmpState, Emp } from "../context/Context";
import './style.css';
import {FormCheck,Button,Navbar,Row,Col,Container,Stack} from 'react-bootstrap';
import {  useNavigate } from "react-router-dom";
import moment from "moment";




const Card = () => {
    let navigate = useNavigate()
    const { state:{emp} }=EmpState();
    console.log(emp)
    // const[enable,setEnable]=useState(false);
    console.log(new Date())
    const{employee,setEmployee,email,Attendance,setAttendance }=useContext(Emp)
    const[localEmp,setlocalEmp]=useState([])
    const[localAttend,setLocalAttend]=useState([])
    const[name,setName]=useState('');
    const[Id,setId]=useState();
    useEffect(()=>{
        
        let temp=employee.filter((obj)=> obj.fullName.toLowerCase() === email.toLowerCase())
        setlocalEmp(temp)
        console.log(localEmp)
        employee.map((obj)=>{
            if( obj.fullName.toLowerCase() === email.toLowerCase()){
                return(
                    setName(obj.fullName),
                    setId(obj.id)
                )
            }
        })
        Attendance.map((obj)=>{
            if( obj.fullName.toLowerCase() === email.toLowerCase()){
                return(
                    setLocalAttend([obj])
                   
                )
            }
        })

    },[])
    console.log(localAttend)
   
    const handleChange=(id)=>{
         let login
        const update=employee.map((obj)=>{
            
            if(obj.id===id){
                console.log(obj.enable)
                let msg = !(obj.enable) ? `Checked In` : `Checked Out`
                alert(msg)
                login=obj.enable
               obj={...obj,
                enable: !obj.enable,
            } 
             }
             return obj;
        })
        setEmployee(update)
        if(login===false){
            const check=localAttend.map((obj)=>{
            
                if(obj.id===id){
                    console.log(obj)
                    obj={...obj,
                        // CheckIn : moment().format("h:mm a"),
                        CheckIn :'12:00 am',

                    } 
                 }
                 return obj;
            })
            setLocalAttend(check)
        }
        else  if(login===true){
            let Total
            const check=localAttend.map((obj)=>{
            
                if(obj.id===id){
                    console.log(obj)
                    let Time= moment().format("h:mm a")
                    let start=moment((obj.CheckIn),'h:mm a');
                    let end=moment(Time,"h:mm a");
                    let Diff=end.diff(start,'hour');
                    console.log(Diff,'Diff')
                    console.log(start,'start')
                    console.log(end,'end')
                    obj={...obj,
                        CheckOut: moment().format("h:mm a"),
                        TotalTime:Diff,
                    } 
                 }
                 return obj;
            })
            setLocalAttend(check)
        }
        console.log(update)
}
    const handlelogout=()=>{
        navigate("/")
    }
    console.log(localAttend)
    return(
        <div >
        <Navbar.Brand><h1 style={{textAlign:"center"}}>Employee Page 
        <Button onClick={() => handlelogout()} 
       style={{float:'right', marginRight:'30px', marginTop:'10px'}}>Logout</Button>
       
       </h1></Navbar.Brand>
       <br/>
            <hr/>
            <Row as='h4'style={{textAlign:'center', width:'100%', paddingLeft:'10px'}}>
                <Col>{("Name")} : <pre style={{color:'dodgerblue', display:'inline'}}>{name}</pre></Col>
                <Col>{("Employee ID")} : <pre style={{color:'tomato', display:'inline'}}>{Id}</pre></Col>
            </Row>
            <hr/>
            <div >
            <Container className="container p-5 my-5 border" style={{width:'40%', backgroundColor:'#e6e6e6', borderRadius: "10px", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <Stack gap={2} >
                {localEmp.map((empl)=>(
                        <div>
                        
                        <p> Position:{empl.Position}</p>
                        <p> Gender:{empl.Gender}</p>
                        <p> Mail:{empl.email}</p>
                         <span>
                           Check In/Out:<FormCheck 
                           type="switch"
                           id="custom-switch"
                           //enable={enable}
                           onChange={()=>handleChange(empl.id)}
                           />
                         </span>
                        </div>
                     
                    ))}
                    <br/>
                </Stack>
            </Container>
               
            </div>
           
        </div>
    )
}
export default Card;


