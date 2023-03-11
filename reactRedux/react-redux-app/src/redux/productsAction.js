export const productAction = () =>{
    const data ="hello"
    return {
        type: "Product_Action_Type",
        data : data
    }
}

export const setProductAction = (data) =>{
    console.log("set product data", data);
    return {
        type: "Set_Product_Action",
        data : data
    }
}

