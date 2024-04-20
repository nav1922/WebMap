const { Router } = require("express")
const router = Router();
const Model = require("../models/userModel")

router.post("/add", (req,res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
        console.log(err);
    });
});

router.post("/authenticate", (req,res) => {
    Model.findOne(req.body)
    .then((result) => {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(401).json({message: "Invalide creadential"})
        }
    }).catch((err) => {
        res.status(500).json(err)
    });
});


module.exports = router

