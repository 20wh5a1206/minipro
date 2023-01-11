const config = require('../config');
const dataModal = require('../db/testData')

module.exports.postData =async function(req,res) {
    try{
        const myobj = req.body;
        console.log(myobj)
        myobj.year = new Date(myobj.year)
        dataModal.create(myobj, function(err, res) {  
            if (err) throw err;
            console.log("success")
        }
        )
    }
    catch(error){
        return res.status(500).json(error)
    }
}

module.exports.getData = async function (req, res) {
    try{
        console.log("IN GETDATA1",req.query);
        let title = req.query.title || ""
        let branch = req.query.branch || ""
        let user = req.query.username || ""
        let cjb = req.query.cjb || ""
        let year = parseInt(req.query.year) || 0
        let nation = req.query.nationality || ""
        let scl = req.query.scl || ""
        let author = req.query.author_no || ""
        let page = req.query.page || 1
        let limit = req.query.limit || 10
        let startDate = req.query.startDate?new Date(req.query.startDate):0
        let endDate = req.query.endDate?new Date(req.query.endDate):0
        // let startYear = parseInt(req.query.startYear) || 0
        // let endYear = parseInt(req.query.endYear) || 0
        // let startMonth = parseInt(req.query.startMonth) || 0
        // let endMonth = parseInt(req.query.endMonth) || 0

        // console.log(cjb)
        let query = {};
        if (title!=""){
            query["title"]= { $regex: '.*' + title + '.*', "$options" : "i" }
        }
        if (branch!=""){
            console.log("IN BRANCH")
            query["branch"] = { $regex: '.*' + branch + '.*', "$options" : "i" }
        }
        if (user!=""){
            query["username"] = { $regex: '.*' + user + '.*', "$options" : "i" }
        }
        if (cjb!=""){
            // console.log(cjb)
            query["cjb"] = cjb
            // console.log(query)
        }
        if(year!=0){
            query["year"] = year
        }
        if(nation!=""){
            query["nationality"] ={ $regex: '.*' + nation + '.*', "$options" : "i"}
        }
        if(scl!=""){
            query["scl"] = { $regex: '.*' + scl + '.*', "$options" : "i"}
        }
        if(author!=""){
            query["author_no"] = author
        }
        if(startDate !=0 && endDate!=0){
            query["year"] = {$lte: endDate, $gte: startDate}
            // query["month"] = {$lte: endMonth+1, $gte: startMonth}
        }
        console.log("WHERE",query)
        if(limit==='0'){
            dataModal.paginate(query,{page:page,limit:0},function(err,result) {
                if (err) res.status(500).send(err);
                else{
                    limit=result.total
                    console.log("Result",result)
                // ...
                // res.json(result)
                // console.log("RESULT", result)
                }
              });

        }
        dataModal.paginate(query,{page:page,limit:limit},function(err,result) {
            if (err) {console.log(err);res.status(500).send(err)}
            else{
                console.log("Result",result)
            // ...
            res.json(result)
            // console.log("RESULT", result)
            }
          });
        // console.log("DATA",data)
        // return res.status(200).json(data);
    }
    catch(error){
        return res.status(500).json(error)
    }

}