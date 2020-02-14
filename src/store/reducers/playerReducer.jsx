const playerReducer = (state={}, action) => {
    switch(action.type) {
        case "CREATE_PLAYER":
            console.log("created player", action.player);
            return state;
        default:
    }
    
    return state;
  };
  
  export default playerReducer;
  