let md5 = require("md5");

var router = require('express').Router();
var multer = require('multer');
var express = require('express');
var app = express();
var cors = require('cors');
let User = require('../models/user.model');
const storage = multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,__dirname+'/up');
        },
        filename:(req,file,cb)=>{
            cb(null,"blank_table.pdf");
        }
    })

const upload = multer({storage:storage})
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.post('/up',upload.single('upl'),(req,res)=>{
        res.statusCode=200;
        res.redirect('http://localhost:3000/create')
        console.log("receivedusers");
    })
router.route('/registersuccess').post((req,res)=>{
    // res.redirect('http://localhost:3000/info')
    const username= req.body.email;
    const password = md5(req.body.password1);
    const newUser = new User({
            username,
            password,

})
                newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' +err));})
    // res.statusCode=200
    // res.redirect('http://localhost:3000/info')})



router.route('/confirm').get((req,res)=>{
    // res.redirect('http://localhost:3000/info')
    User.find({username:req.body.username})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})



router.route('/confirm').post((req,res)=>{
    var mem= ""
    User.find({username:req.body.username})
    .then((users)=>{
        
         res.status(200).json(users)
    }).catch((e)=>{
        console.log(e)
    })
})



    // upload(req, res
//         , function (err) {
//         console.log(err)
//         if (err instanceof multer.MulterError) {
//             return res.status(500).json(err)
//         } else if (err) {
//             return res.status(500).json(err)
//         }
//    return res.status(200).send(req.file)

//  }
        // .then(() => res.json('file uploaded!'))
        // .catch(err => res.status(400).json('Error: ' +err));
module.exports = router;