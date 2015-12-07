if(Meteor.isServer){
Meteor.methods({
    'epwRecharge' : function(params){

        var response='hello';

        var data_me = {
            store_id: params.merchant.store_id,
            tran_id: params.merchant.tran_id,
            success_url: params.merchant.success_url,
            fail_url:params.merchant.fail_url,
            cancel_url:params.merchant.cancel_url,
            amount:params.amount,
            currency:params.merchant.currency,
            signature_key:params.merchant.signature_key,
            desc: params.user.description,
            cus_name:params.user.name,
            cus_email:params.user.email,
            cus_add1:params.user.address,
            cus_city:params.user.city,
            cust_state:params.user.states,
            cus_postcode:params.user.post,
            cus_country:params.user.country,
            cus_phone:params.user.phone,
            opt_a: params.options[0],
            opt_b: params.options[1],
            opt_c: params.options[2],
            opt_d: params.options[3]


        };


        var result =  HTTP.post(params.url,{params:data_me});

        response = result.content.replace(/\\/g, "");
        return response;

    }
});

}