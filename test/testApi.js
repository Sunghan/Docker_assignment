var Client = require('node-rest-client').Client;
var client = new Client();
var url = process.argv.slice(2);
console.log(`IP address: ${url}`)

console.log("Generating 10 tasks")
var i;
for(i=0; i<10; i++){
    var args = {
        data: { 
            "title": "test_title_"+i,
            "description": "test_description_"+i,
            "startdate": "2019-07-20",
            "enddate": "2019-07-21",
            "category": "test",
            "priority": ["low"],
            "status": ["pending"]
        },
        headers: { "Content-Type": "application/json" }
    };

    client.post(`http://${url}:3000/tasks`, args, function(data, response){
        //console.log(data);
        //console.log(response.status);
    });
}

console.log("Get all the tasks")
client.get(`http://${url}:3000/tasks`, function(data, response){
    console.log(data);
});
