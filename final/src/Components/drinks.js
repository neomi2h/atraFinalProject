
import React,{useEffect, useState,useRef} from 'react'
import {connect} from 'react-redux'
import {getData}from '../Redux/Actions/drinkAction'
import {Link} from 'react-router-dom'
import{createDrink} from '../service'
import Select from 'react-select'


function mapStateToProps(state){
    return{
        drinks: state.drinks.drinks,
        user: state.user.user
    };
}

export default connect(mapStateToProps)(function Drinks(props) {

    const {drinks,user,dispatch} = props
    const [selectedOption, setSelectedOption] = useState();
    const owner=user._id
 

    useEffect(()=>{
      dispatch(getData()) 
    },[])
    
    // handle onChange event of the dropdown
      function handleChange(e){
      setSelectedOption(e);
      createDrink({label: e.label, value: e.value,  image: e.image,  owner:user._id})
     }

    return(
        <> 
        <br></br>
        <h1><p>Hello {user.name}!</p></h1>

        <h1><p>Our Drinks</p></h1>

     
        <p><Link to='/search'> <strong>Search History</strong></Link></p>
        
        <Select 
        placeholder="Select Option"
        value={selectedOption} // set selected value
        options={drinks}// set list of the data
        onChange={handleChange}/>
       
      {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }} >
                          <b>Selected Option:</b><br />
                          <div><img src={selectedOption.image} style={{height:"300px",width:"300px"}}></img> </div>
                          <div style={{ marginTop: 10 }}>{selectedOption.label}</div></div>}
                          
       <div className="row">
        {drinks.map((item)=><div className="column">< Item key={item.id} label={item.label } image={item.image} ></Item></div>)}
        </div>
        </>
    )
})

class Item extends React.Component{
    constructor(props){
        super(props);
     } render(){
         return(
             <>
              <div className="card" style={{width:"190px"}}>
                <img src={this.props.image} style={{height:"150px",width:"150px"}}></img>
                <p >{ this.props.label} </p>
              </div>

             </>
         )
     }
 }

