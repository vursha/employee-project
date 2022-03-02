import React,{useState, useContext, useEffect} from "react";
import { EmpState, Emp } from "../context/Context";
import './style.css';
import {FormCheck,Button,Navbar,Row,Col,Container,Stack} from 'react-bootstrap';
import {  useNavigate } from "react-router-dom";




const Card = () => {
    let navigate = useNavigate()
    const { state:{emp} }=EmpState();
    console.log(emp)
    // const[enable,setEnable]=useState(false);
    console.log(new Date())
    const{employee,setEmployee,email }=useContext(Emp)
    const[localEmp,setlocalEmp]=useState([])
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

    },[])
    
   
    const handleChange=(id)=>{
        
        const update=employee.map((obj)=>{
            
            if(obj.id===id){
                console.log(obj.enable)
                let msg = !(obj.enable) ? `Checked In` : `Checked Out`
                alert(msg)
               obj={...obj,
                enable: !obj.enable,
            } 
             }
             return obj;
        })
        setEmployee(update)

         console.log(update)
}
    const handlelogout=()=>{
        navigate("/")
    }
    return(
        <div >
        <Navbar.Brand><h1 style={{textAlign:"center"}}>Employee Page <Button onClick={() => handlelogout()} 
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


