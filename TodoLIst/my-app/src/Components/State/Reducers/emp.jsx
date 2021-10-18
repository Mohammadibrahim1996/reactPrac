const initialState={
    emp:[
        {empName: "Sahil",empAge:"25",empAdd:"Dubai"},
        {empName: "Khawja Sir",empAge:"30",empAdd:"Usa"},
        {empName: "Afroz Air",empAge:"27",empAdd:"Newyork"}
    ],
};

const empReducer=(state,action)=>{
    switch(action.type){
        case " ADD-EMP":
            return{

                ...state,
                emp:[action.emp,...state.emp],
            };
            default: return state;
     }
};