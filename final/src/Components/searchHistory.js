import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios';

function mapStateToProps(state){
    return{
        user:state.user.user
    };
}

export default connect(mapStateToProps)(function SearchHistory(props) {
    
    const {user} = props
    const [searchList, setSearchList]=useState([]);

    useEffect(()=>{
        getSearchHistory({id:user._id});  
      },)

    async function getSearchHistory(id) {
        console.log(id)
         await axios.post('http://localhost:8080/getAllDrinksByIdOwner',id).then(res => {
            console.log(JSON.stringify(res));
            setSearchList(res.data.drinks)
            console.log(searchList);
        },
            err => {
                console.log('error get drinks ' + err);
            })
    }

    return(
          <>
          <p><Link to='/drinks'> <strong>Back to list drinks</strong></Link></p>
          <p>Your search:</p>
          {searchList ? <table><tbody>
             {searchList.map((item)=>< Item key={item._id} label={item.label } image={item.image} ></Item>)}
        </tbody></table>:<p>No Searches found</p>}
          </>
    )
})

class Item extends React.Component{
    constructor(props){
        super(props);
     } render(){
         return(
             <>
            <tr>
               <td> { this.props.label}  </td>
               <td><img src={this.props.image} alt="history" style={{height:"30px",width:"30px"}}></img> </td> 
            </tr>
             </>
         )
     }
 }