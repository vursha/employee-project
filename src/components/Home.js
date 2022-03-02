import { EmpState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from './Filter';
import './style.css';
import Header from './Header'
//import Table from 'react-bootstrap'

const Home=()=>{

    const { state:{employees}}  = EmpState();

   console.log(employees);
    return(
        <div>
        <div className='App'>
        <Header/>
        </div>
        <div className="home">
          
        <Filters/>
        <div className="productContainer">

        <SingleProduct/>
            </div>
            
        </div>
        </div>
        
    );
};
export default Home;

        