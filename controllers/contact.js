const Contact = require("../models/Contact.js");

exports.createContact = (req, res) => {
    const newContact = new Contact(req.body);

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).json({ 
            message: 'Please provide all required field' 
        }); 
    }
    else{
        Contact.create(newContact, (err, contact) => {
            if (err)
                res.status(400).json({
                    err : "Error occured at creation"
                });
            res.status(200).json({
                message:"Employee added successfully!",
                data:contact
            });
        });
    }
};



exports.getContact = (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if(err){
            res.status(400).json({
                err : "error occured"
            });
        }
        else{
            res.status(200).json({
                msg : "successfully get",
                data : contact
            });
        }
    });
};

exports.updateContact = (req, res) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).json({
            error:true, 
            message: 'Please provide all required field' 
        });
    }else{
        Contact.update(req.params.id, new Contact(req.body), (err, contact) => {
            if (err)
                res.status(400).json({
                    err : "Error occured during update"
                });
            res.status(200).json({ 
                error:false, 
                data: contact 
            });
        });
    }
};

exports.deleteContact = (req, res) => {
    Contact.delete( req.params.id, (err, contact) => {
        if (err)
            res.status(404).json({
                err : "Delete error"
            });
        res.status(200).json({ 
            error:false, 
            message: 'Employee successfully deleted' 
        });
    });
}