const companyController = require('../controllers').company;

module.exports = (app) =>{
    app.get('/api',(req,res)=> res.status(200).send({
        message:'welcome to the todos API!',
    }));

    //Company creates routes for creating new records
    app.post('/api/company',companyController.create);
}