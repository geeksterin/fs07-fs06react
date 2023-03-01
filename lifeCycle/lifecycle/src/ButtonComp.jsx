// import React from "react";

// const ButtonComp = ({Start, name}) => {

//   return (
//     <>
//       <div>
//         <button onClick={()=>{
//             Start()

//         }}>{name}

//         </button>
//       </div>
//     </>
//   );
// };

// export default ButtonComp;

import React, { Component } from "react";

export default class ButtonComp extends Component {
  render() {
    return (
      <>
        <div>
          <button
            onClick={() => {
              this.props.Start();
            }}
          >
            {this.props.name}
          </button>
        </div>
      </>
    );
  }
}
