export const addNewEmp=(empName,empAge,empAdd)=>({
    type:"ADD-EMP",
    emp:{
        empName,
        empAge,
        empAdd,
    },
});