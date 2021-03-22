import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createDrink } from '../service'
import Select from 'react-select'
import {actions} from '../Redux/Actions/action'

function mapStateToProps(state) {
    return {
        drinks: state.drinks.drinks,
        user: state.user.user
    };
}
const mapDispatchToProps = (dispatch) => ({
    
    getData: () => dispatch(actions.getAllDrinks()),
    
})
export default connect(mapStateToProps, mapDispatchToProps)(function Drinks(props) {

    const { drinks, user, getData } = props
    const [selectedOption, setSelectedOption] = useState();

    useEffect(() => {
          getData('')
    },)

    function handleChange(e) {
        setSelectedOption(e);
        createDrink({ label: e.label, value: e.value, image: e.image, owner: user._id })
    }

    return (
        <>
            <br></br>
            <div style={{ width: "80%", margin: "auto" }}> 
            <h1><p style={{ textAlign: "left" }}>Hello {user.name},</p></h1>
                <div className="row">  
                <div className="column" style={{width:"50%"}}>
                            <h4><p style={{ textAlign: "left" }}>Welcome to our website. Here you can see all our drink and choose your one.</p></h4>
                      </div>
                     <div className="column" style={{width:"50%"}}>
                      <p style={{ textAlign: "right" }}><Link to='/search'> <strong>Search History</strong></Link></p>   
                      </div>
                    
              

                </div>
                <Select
                    placeholder="Select Option"
                    value={selectedOption} // set selected value
                    options={drinks}// set list of the data
                    onChange={handleChange} />

                {selectedOption && <div style={{ marginTop: 20, lineHeight: '25px' }} >
                    <b>Selected Option:</b><br />
                    <div><img src={selectedOption.image} alt="drink page" style={{ height: "300px", width: "300px" }}></img> </div>
                    <div style={{ marginTop: 10 }}>{selectedOption.label}</div></div>}

                <div className="row">
                    {drinks.map((item) => <div className="column">< Item key={item.id} label={item.label} image={item.image} ></Item></div>)}
                </div>
            </div>

        </>
    )
})
class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="card" style={{ width: "190px" }}>
                    <img src={this.props.image} alt="drink page" style={{ height: "150px", width: "150px" }}></img>
                    <p >{this.props.label} </p>
                </div>

            </>
        )
    }
}

