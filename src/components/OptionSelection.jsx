import React from "react";


function OptionSelection({ options }) {
    
    return (
        <>
            <div className="grid-main">
                {options.map((option) => {
                    {/* console.log(option.name); */}
                    return (
                        <div className="grid-child">
                        <h3>{ option.name }</h3>
                        <h3>{ option.description }</h3>
                        </div>
                    ) 
                })}
            </div>
            
        </>
    )
}

export default OptionSelection;