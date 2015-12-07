
This Package is not affiliated by EasyPayWay and has not been tested with testing tools. Thus use it on your own risk. You are welcomed to fork as of your requirement.

EasyPayWay requires few parameters to generate an unique URL , that generated URL does all the transaction related tasks and responds back to you in a specified url ( chosen by you) with some data.
Then it's upto you what do you want to do with the response data.

USAGE:

The required parameters are broken into 5 chunk.
merchant,user, url, amount and options.

An example of using this package.

      var merchant = {
        store_id: 'xxx',
        tran_id: 'unique tran id,
        success_url: 'yourdomain.com/success',
        fail_url:'yourdomain.com/fail',
        cancel_url:'yourdomain.com/cancel',
        currency:'BDT',
        signature_key:'Provided signature key'

      };
      
      var user = {
        name:'name',
        email:'user@yahoo.com',
        address:'xxx',
        city:'zzzz',
        states:'qqq',
        post:111,
        country:'BD',
        phone:123

      };
      
       var amount = 100;
      var url = 'url will be provided';
      var options = ['1','2','3','4']; // maximum 4 options are allowed, to use this package you need to provide all of them even if you dont need all 
      

    var parameters ={
      merchant: merchant,
      user: user,
      url: url,
      amount: amount,
      options : options
    };
    
after you're all set with the parameters you need to call `epwRecharge` method in client asynchronously.

    Meteor.call('epwRecharge',parameters,function(err,result){
        if(!err)
        {
          var trim = result.substr(1,result.length-2);
          window.location = trim;
        }
        else{

        }
      });
      
      
if everything is fine you will be redirected. any error should be visible either client or server.
