//selectors
export const getTables = (state) => {return state.tables};
export const getTableById = ( {tables}, id) => tables.find(table => table.id === id);

const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const MODIFY_TABLES = createActionName('MODIFY_TABLES');

export const updateTables = payload => ({ type: UPDATE_TABLES, payload});
export const modifyTables = payload => ({ type: MODIFY_TABLES, payload});

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)))
  }
};
export const changeTable = payload => {
  return (dispatch) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: payload.id,
      status: payload.status,
      peopleAmount: parseInt(payload.peopleAmount),
      maxPeopleAmount: parseInt(payload.maxPeopleAmount),
      bill: parseInt(payload.bill)
    }),
  };
  
  fetch(`http://localhost:3131/tables/${payload.id}`, options)
    .then(() => dispatch(modifyTables(payload)))
  }
}

const tablesReducer = (statePart = [], action) => {
  switch(action.type){
    case UPDATE_TABLES:
      return action.payload
    case MODIFY_TABLES:
      return statePart.map(table => (table.id === action.payload.id ? {...action.payload} : table)); 
    default:
      return statePart;
  }
};
export default tablesReducer;