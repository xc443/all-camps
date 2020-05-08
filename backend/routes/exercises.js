const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
//     Exercise.find()
Exercise.find({username:req.body.username})
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

router.route('/username').get((req, res) => {
    //     Exercise.find()
    Exercise.find({username:req.body.username})
            .then(exercises => res.json(exercises))
            .catch(err => res.status(400).json('Error: ' + err));
    });
    router.route('/username').post((req,res)=>{
        var mem= ""
        Exercise.find({username:req.body.username})
        .then((exercises )=>{
            
             res.status(200).json(exercises)
        }).catch((e)=>{
            console.log(e)
        })
    })
router.route('/add').post((req,res) => {
    const username = req.body.username
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const childname = req.body.firstname + " " + req.body.lastname;

    const nickname = req.body.nickname; 
    const gender = req.body.gender;   
    const homeaddress = req.body.homeaddress;  
    const contactnumber = req.body.contactnumber;  
    const birthdate = Date.parse(req.body.birthdate);
    const age = req.body.age;
    const homephone= req.body.homephone;
    const workphone= req.body.workphone;  
    const parent1name = req.body.parent1name;
    const parent1relationship = req.body.parent1relationship;
    const parent1phone = req.body.parent1phone;
    const parent1work = req.body.parent1work;
    const parent2name = req.body.parent2name;
    const parent2relationship = req.body.parent2relationship;
    const parent2phone = req.body.parent2phone;
    const parent2work = req.body.parent2work;
    const email = req.body.email;
    const doctorname = req.body.doctorname;
    const doctorphone = req.body.doctorphone;
    const allergies = req.body.allergies;
    const newExercise = new Exercise({
        username,
        firstname,
        lastname,
        childname,
        nickname,
        gender,
        homeaddress,
        contactnumber,
        birthdate,
        age,
        homephone,
        workphone,
        parent1name,
        parent1relationship,
        parent1phone,
        parent1work,
        parent2name,
        parent2relationship,
        parent2phone,
        parent2work,
        email,
        doctorname,
        doctorphone,
        allergies    

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
    data = {"firstname": req.body.firstname, "page": req.body.page};
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


