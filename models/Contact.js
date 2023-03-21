'user strict';
var dbConn = require("../config/db.js");

//Contact object create
var Contact = function(contact){
    this.first_name     = contact.first_name;
    this.last_name      = contact.last_name;
    this.email          = contact.email;
    this.phone          = contact.phone;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};

Contact.create = (contact, result) => {    
    dbConn.query("INSERT INTO contact set ?", contact,(err, con) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(con.insertId);
            result(null, con.insertId);
        }
    });           
};


Contact.findById = (id, result) => {
    dbConn.query("Select * from contact where id = ? ", id, (err, res) => {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Contact.update = (id, contact, result) => {
    var ID = parseInt(id);
    dbConn.query("UPDATE contact SET email=?,phone=? WHERE id = ?", [contact.email, contact.phone, ID], (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Contact.delete = (id, result) => {
     dbConn.query("DELETE FROM contact WHERE id = ?", [id], (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Contact;