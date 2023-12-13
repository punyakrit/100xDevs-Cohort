function pro(){
    let p = new Promise((response) =>{
      setTimeout(() =>{
        response("I am a promise and I am resolved")
      }, 1000)
    })
    return p
  }
  
  let dd = pro()
  dd.then((value) =>{
    console.log(value)
  })