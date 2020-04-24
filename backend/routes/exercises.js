const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/').post((req,res)=>{
    var mem= ""
    Exercise.find({lastname:req.body.lastname,firstname:req.body.firstname})
    .then((exercises )=>{
        
         res.status(200).json(exercises)
    }).catch((e)=>{
        console.log(e)
    })
})
router.route('/add').post((req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const nickname = req.body.nickname; 
    const gender = req.body.gender;   
    const homeaddress = req.body.homeaddress;  
    const contactnumber = req.body.contactnumber;  
    const birthdate = Date.parse(req.body.date);
    const newExercise = new Exercise({
        firstname,
        lastname,
        nickname,
        gender,
        homeaddress,
        contactnumber,
        birthdate,

    });
    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(exercises => res.json(' Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercises => {
            exercises.firstname = req.body.firstname;
            exercises.lastname = req.body.lastname;
            exercises.nickname = req.body.nickname; 
            exercises.gender = req.body.gender;   
            exercises.homeaddress = req.body.homeaddress;  
            exercises.contactnumber = req.body.contactnumber;  
            exercises.birthdate = Date.parse(req.body.date);
            exercises.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err))
});
router.route('/py/p').get((req,res)=>{
    var rr=-1;
    const { spawn } = require('child_process');
    const bat = spawn('python', ['./routes/pdfextract.py']);
    
    bat.stdout.on('data', (data) => {
      console.log(data.toString());
       rr=data.toString();
       rr=rr.split("\n")
      res.json(rr)
    });
    
    bat.stderr.on('data', (data) => {
      console.error(data.toString());
      rr=data.toString();
    });
    
    bat.on('exit', (code) => {
      console.log(`Child exited with code ${code}`);
    });



})


router.route('/py/pdfget').post((req,res)=>{

    const { spawn } = require('child_process');
    py    = spawn('python', ['./routes/allcamps.py']);
    data = {"firstname": req.body.firstname, "lastname": req.body.lastname};
    dataString = '';
    console.log(data);
    
    console.log(JSON.stringify(data));
    py.stdout.on('data', (data) => {
    dataString += data.toString();
    // console.log('output==',data.toString());
    });
    py.stdout.on('end', function(){
    console.log('first name is ',dataString);
    });
    py.stdin.write(JSON.stringify(data));
    py.stdin.end();

    py.stderr.on('data', (data) => {
        console.error(data.toString());
        rr=data.toString();
      });
      
      py.on('exit', (code) => {
        console.log(`Child exited with code ${code}`);
      });
})


router.route('/').post((req,res)=>{
    var mem= ""
    Exercise.find({lastname:req.body.lastname,firstname:req.body.firstname})
    .then((exercises )=>{
        
         res.status(200).json(exercises)
    }).catch((e)=>{
        console.log(e)
    })
})


module.exports = router;


