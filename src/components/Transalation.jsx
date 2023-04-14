function Translation({ doStuff, setInput, result }) {
    return (
        <div>
            <textarea 
                className="text-area" 
                cols={50} 
                rows={10} 
                onChange={(e) => setInput(e.target.value)}>
            </textarea>
            <br />
            <button className="submit-btn" onClick={doStuff} >Submit</button> 
            <h3 className="result-text">{ result.length > 0 ? result: "" }</h3>
        </div>
    )
}

export default Translation;