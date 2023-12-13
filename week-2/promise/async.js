function pro(){
    let p = new Promise((response) =>{
      setTimeout(() =>{
        response("I am a promise and I am resolved")
      }, 1000)
    })
    return p
  }
  
  async function abc(){
    const dd = await pro()
    console.log(dd)
  }
  
  abc()