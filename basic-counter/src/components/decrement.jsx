function Decrement(props){

  //This decreases the value
const decrement = () => {
    
    // alert("It's has decremented!")
    props.setCounter(props.counter -1)

}
;
    return(
        <button style={{backgroundColor:"green",
                        color:"white",
                        padding:"10px",
                        borderRadius:"10px",
                        margin:"10px"


        }} onClick={decrement}  >Decrement</button>
    )
}
export default Decrement;