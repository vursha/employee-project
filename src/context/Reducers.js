// import Card from './components/Card';
const initial={
  emp:{}
}


export const empReducer=(state=initial,action)=>{
    switch(action.type){
      // case 'view more':
      //   {
      //     return{...state,emp:[...state.emp,{...action.payload,qty:1}]}
      //   }
          
      case 'viewed':
          {
            console.log(typeof(state.emp))
            return {emp: action.payload}
          }
          
      
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