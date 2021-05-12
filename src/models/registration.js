function passwordValidation(password){
    if(password.length < 4 || password.length > 72){
        return {valid:false, text:"Password must contain between 4 and 72 characters"}
    }
    return {valid:true, text:""};
}

export {passwordValidation}
