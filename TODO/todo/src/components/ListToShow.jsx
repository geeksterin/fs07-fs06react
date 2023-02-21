import React from "react";
import './list.css'
const ListToShow = ({currentList, setCurrentList}) => {

    const deleteFunc = (id) =>{
        console.log(id);
        const newList = currentList.filter((ele)=>{
            return ele.id !== id
        })
        setCurrentList(newList)
    }


  return (
    <>
      <div className="ListToShow">
        {currentList.map((ele) => {
          return (
            <>
              <div>
                <h3>{ele.currentValue}</h3>
                <button onClick={()=>{
                    deleteFunc(ele.id)
                }}>X</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ListToShow;
