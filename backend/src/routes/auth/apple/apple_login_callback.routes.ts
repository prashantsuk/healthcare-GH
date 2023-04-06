import {Router} from '../../../common/exportsApp'
const passport = require("passport");
const CLIENT_URL = "https://35.83.75.79:3000";
//import { allusers_Get,user_delete} from '../../../controller/admin/allusers.Ctrl'
//const {requireAuth} = require("../../../middleware/auth");
Router.route('/facebook/callback')
.get(passport.authenticate("facebook",{
    successRedirect:'https://35.83.75.79:3000/kk',
    failureRedirect: "https://35.83.75.79:3000/ll",
  }))

module.exports=Router

