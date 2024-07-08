function Increment(props){
    
 //This increases the value    
const increment = () => {
    // alert("It's has incremented!")
    props.setCounter(props.counter + 1)
};
    return(
        <button style={{
            backgroundColor: "blueviolet",
            color: "white",
            padding:"10px",
            borderRadius: "10px",
            margin:"10px"
            
        }} onClick={increment}>Increment</button>
    )
}

export default Increment;