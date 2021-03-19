const Drink= require('../models/Drink')
const User= require('../models/User')

/******createDrink**********/
const createDrink = async (req, res) => {
    let newDrink = new Drink(req.body);
    try{
      let drink=await newDrink.save();
      let user= await User.findById(req.body.owner);
      user.drinks.push(drink._id)
      await user.save();
      res.status(200).json({drink:drink,user:user});
    }
    catch(error){
      res.status(500).send("error in createDrink: ", error.message)
    }
  }

  /*******getAllDrinks*******/
  const getAllDrinksByIdOwner= async(req,res)=>{
    console.log("get all drinks");
    try {
      let drinks = await Drink.find({owner:req.body.id});
      console.log(drinks)
      if (drinks == null) {
        res.send("you dont have drink");
      }
      return res.json({ status: 200, drinks: drinks })
    } catch (error) {
      res.status(500).send("cant found drinks" ,error.message )
    }
  }

  module.exports = { getAllDrinksByIdOwner, createDrink};