import React from "react";


function OptionSelection({ options, selectOption }) {
    
    return (
        <>
            <div className="grid-main">
                {options.map((option) => {
                    {/* console.log(option.name); */}
                    return (
                        <div className="grid-child" key={option.id} onClick={() => { selectOption(option.option) }}>
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