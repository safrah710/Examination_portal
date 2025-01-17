import express from 'express';
import Loginservice from '../Service/Loginservice.js';
const logincontroller=express.Router();
logincontroller.post('/user',Loginservice.login);
logincontroller.post('/create_user',Loginservice.create_login);
logincontroller.get('/get_user',Loginservice.get_user);
logincontroller.post('/edit_user',Loginservice.edit_user);
logincontroller.post('/officials_log',Loginservice.offl_login);
logincontroller.post('/officials_create',Loginservice.create_offllogin);
logincontroller.post('/email1',Loginservice.email_verify1);
logincontroller.post('/email2',Loginservice.email_verify2);
logincontroller.post('/foruser',Loginservice.for_user_pass);
logincontroller.post('/forofficial',Loginservice.for_official_pass);
export default logincontroller;