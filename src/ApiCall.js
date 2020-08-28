
async function ApiCall (payload) {
   try {
     console.log("API call requested with below paylod:");
     console.log(payload);
     const resp = await fetch('http://api.zacharyjklein.com/api/v1.0/', {
         method: 'POST',
         body: JSON.stringify(payload),
         headers:{
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         }
     });
     return resp.json()
   } catch (err) {
        console.log(err)
     }
};

export default ApiCall;
