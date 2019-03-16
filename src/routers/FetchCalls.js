function saveTask(user,password,tasks) {
    var url = 'http://localhost:3000/users/'+user;
    console.log("tasks", tasks);
    
    var data = {
      "id": user,
      "password": password,
      "notes": tasks
    };
    
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
    }
    
    export default (saveTask);