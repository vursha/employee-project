// import Card from './components/Card';



export const empReducer=(state,action)=>{
    switch(action.type){
      case 'view more':
        {
          return{...state,emp:[...state.emp,{...action.payload,qty:1}]}
        }
          
      case 'viewed':
          return {...state,emp:state.emp.filter((c)=> c.id !== action.payload.id)};
      case 'clear Filter':
        return{}    

        default:
            return state;
    }  
}

export const employeeReducer=(state,action)=>{
  switch(action.type){
    case 'asc/des':
      return {...state,sort:action.payload};
    case 'search':
      return{...state,search:action.payload};
    case 'clear filter':
      return{
        ascending:false,
        search:'',
      } ; 
      
      default:
      return state;
  }
}