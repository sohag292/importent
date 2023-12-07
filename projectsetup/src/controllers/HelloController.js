exports.Helloget=(req,res)=>{
    res.status(200).json({status:"success",data:"This is my first express api"})
}

//request params
exports.demoget=(req,res)=>{
    let nameValue = req.params.name;
    let cityname = req.params.city

    res.status(200).json({
        name:nameValue,
        city: cityname
    })
}

//request body
exports.demoget2=(req,res)=>{
    let nameValue = req.body.name;
    let ageValue = req.body.age;
    let cityname = req.body.city

    res.status(200).json({
        name:nameValue,
        age:ageValue,
        city: cityname
    })
}

//request header
exports.demoget3=(req,res)=>{
    let tokenValue = req.headers.token;

    res.status(200).json({
        tokenValue:tokenValue
    })
}

//request cookis
exports.demoget4=(req,res)=>{
    let tokenValue =  req.cookies.Cookie_1

    res.status(200).json({
        tokenValue:tokenValue
    })
}





exports.Hellopost=(req,res)=>{
    res.status(201).json({status:"success",data:"This is my first express second api"})
}


