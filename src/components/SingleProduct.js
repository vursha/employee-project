import React, { useContext,useState,useEffect ,}  from 'react';
import axios from 'axios';
import {Emp, EmpState} from '../context/Context';
import {Table,Button} from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import {Link}from 'react-router-dom';
import {useDispatch} from 'react-redux'


const SingleProduct=(empl)=>{
    let dispatch=useDispatch()
     const{
         state:{emp},
        // empstate:{sort,ascending,search,descending},
         //dispatch,
     }=EmpState();
     //console.log(emp);
     //let navigate=useNavigate()
   
     
    
    const {employee,Search,ascending,descending}=useContext(Emp)
    const [posts,setPosts]=useState([])
    // console.log(Search)
    
    useEffect(()=>{
                const loadPosts=async()=>{
                 
                  const response =await axios.post(
                   'https://jsonplaceholder.typicode.com/users',{employee}
                  );
                  console.log(response.data.employee)
                  setPosts(response.data.employee);
                 
                };
                loadPosts();
                posts.sort((a,b)=>{
                    let fa = a.fullName.toLowerCase() ,
                        fb = b.fullName.toLowerCase();
                    if(fa < fb){
                        return -1;
                    }
                    if(fa >fb){
                        return 1;
                    }
                    return 0;
                })
              },[])
              
//AScending
useEffect(()=>{

    console.log(ascending,descending, "sueffect");
     if(ascending === false){
          posts.sort((a,b)=>{
        let fa = a.fullName.toLowerCase() ,
            fb = b.fullName.toLowerCase();
        if(fa < fb){
            return -1;
        }
        if(fa >fb){
            return 1;
        }
        return 0;
    })
     }
     else if (descending === false){

         posts.sort((a,b)=>{
            let fa = a.fullName.toLowerCase() ,
                fb = b.fullName.toLowerCase();
            if(fa > fb){
                return -1;
            }
            if(fa <fb){
                return 1;
            }
            return 0;
        })}
        else return posts
        console.log(posts)
    },[ascending,descending])

    // const handleClick=()=>{
    //     navigate("/card1")
    // }
         
    
    
    return <div className="productContainer">
      <Table striped bordered hover variant="dark">
            <thead>
                <tr>
              
                    <th>Emp Id</th>
                    <th>Emp Name</th>
                    <th>Position</th>
                    <th>Gender</th>
                    <th>View</th>
                    
                </tr>
            </thead>
            <tbody>
           
                { 
                posts.filter((value)=>{
                // console.log(value.fullName)
                  if(Search===''){
                      return value;
                  }else if(value.fullName.toLowerCase().includes(Search.toLowerCase()))
                  {
                      return value;
                  }
                  }).map((empl)=>(
                    <tr>
                       
                       <td>{empl.id}</td> 
                       <td>{empl.fullName}</td> 
                       <td>{empl.Position}</td>
                       <td>{empl.Gender}</td>
                       
                       <td>
                           
                          {emp.some((e)=>e.id===empl.id)}<Link to = '/card1'> <Button
                          onClick={()=>{
                            dispatch({
                                type:'viewed',
                                payload:empl,
                            });
                        }}
                           type='submit' className="btn btn-primary" >View</Button></Link>
                          {/* {emp.some((e)=>e.id===empl.id)?<Link to='/card1'>(<Button 
                          onClick={()=>{
                              dispatch({
                                  type:'viewed',
                                  payload:empl,
                              });
                            }}variant='danger'>Viewed</Button>):
                          (<Button onClick={()=>{
                              dispatch({
                                  type:'view more',
                                  payload:empl,
                              })
                          }}>View More</Button>)</Link>} */}

                          {/* <Button onClick={handleClick()}>View More</Button> */}
                           
                       </td>
                    </tr>
                   
                ))}
                
                    
                
            </tbody>
        </Table>
    </div>
}
export default SingleProduct;

