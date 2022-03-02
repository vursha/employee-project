 import { useContext } from 'react';
import {Container,FormControl,Navbar,Nav,Dropdown,Badge,Button} from 'react-bootstrap';
 import {BsFillPeopleFill} from 'react-icons/bs';
 import {Link} from 'react-router-dom';
 import { EmpState, Emp } from '../context/Context';
//  import {useTranslation} from 'react-i18next'
//import App from '../App';
import './style.css';
// import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
 
 const Header =()=>{
     const {i18n, t}=useTranslation("Language");
     const changeLanguage=lng=>{
         i18n.changeLanguage(lng);
     }

    const{
        state:{employees,emp}
    }=EmpState();
    console.log(employees)
    const {setSearch}=useContext(Emp);

    return(
        <Navbar bg="dark" variant='dark'style={{height:80}}>
        <Container>
        <Navbar.Brand>
            <Button onClick={()=>changeLanguage('hi')}>Hindi</Button>&nbsp;&nbsp;
            <Button onClick={()=>changeLanguage('en')}>English</Button>&nbsp;&nbsp;
            <Link to ='/'>{t("Attendance")} </Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl 
            style={{width:500}}
            placeholder="Search"
            onChange={(e)=>{
                // empdispatch({
                //     type:'search',
                //     payload:e.target.value
                // })
                setSearch(e.target.value)
                // {emp.length>0 ? (
                //     {emp.map((empl)=>())}
                // )}
            }}
            className='m-auto'
            >
               

            </FormControl>
           
                 
        </Navbar.Text>
        <Nav>
            <Dropdown alignRight>
            <Dropdown.Toggle variant='primary'>
            <BsFillPeopleFill color='white' fontSize='25px'/>
                <Badge>{employees.length}</Badge>   
            </Dropdown.Toggle> 

            {/* <Dropdown.Menu style={{minWidth:370}}>
                {emp.length>0 ? (
                    <div>
                        {emp.map((empl)=>(
                            <span className='box' key={empl.id}>
                                <div className='detail'>
                                    <span>{empl.id}</span>
                                    <span>{empl.fullName}</span>
                                </div>
                            </span>
                        ))}
                        <Link to='/card'><Button >Click</Button></Link>
                    </div>
                ):(
                    <span style={{padding:10}}>Nill</span>
                )}
 
            </Dropdown.Menu>    */}
            </Dropdown>
        </Nav>
        </Container>
        </Navbar>
    )
}
export default Header;