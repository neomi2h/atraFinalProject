const router=require("express").Router();
var user=require("../controllers/user");
var drink=require("../controllers/drink")

router.get('/hello',user.hello);
router.post('/register',user.register);
router.post('/login',user.login);

router.post('/createDrink', drink.createDrink);
router.post('/getAllDrinksByIdOwner', drink.getAllDrinksByIdOwner);

module.exports=router;