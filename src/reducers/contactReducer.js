import * as actionTypes from '../actions/actionType';
const initstate=[
    {id: "1", name: "prajwal", number: "23473846237"},
    {id: "2",name: "Aman", number: "34783743"}
]
export default (state = initstate, action) => {
    console.log(action);
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:{
        let contact={ name: action.name,
                     number: action.number,
                    id: action.id}
                    return [...state, 
                        Object.assign({}, contact)];
    }
   
      
   
    case actionTypes.REMOVE_CONTACT:
    return state.filter((data,i)=>i!==action.id);

    default:
      return state;
  }
};
