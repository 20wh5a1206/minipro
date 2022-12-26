const config = require('../config');
const dataModal = require('../db/testData')

module.exports.postData =async function(req,res) {
    try{
        const myobj = req.body;
        console.log(myobj)
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
        let year = req.query.year || ""
        let nation = req.query.nationality || ""
        let scl = req.query.scl || ""
        let author = req.query.author_no || ""
        let page = req.query.page || 1
        let limit = req.query.limit || 5
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
            query["cjb"] = { $regex: '.*' + cjb + '.*', "$options" : "i"}
            // console.log(query)
        }
        if(year!=""){
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
        // console.log("WHERE",query)
        dataModal.paginate(query,{page:page,limit:limit},function(err,result) {
            if (err) res.status(500).send(err);
            else{
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