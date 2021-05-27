import React, { useState } from 'react';





export default function Contact(){
const[data,setData]= useState({

    fullname:"",
    phoneno:"",
    email:"",
    msg:""


});

const InputEvent = (e)=>{
    const {name,value}= e.target;

    setData ((preVal) =>{
        return {
            ...preVal, [name]:value
        };
    });

}
const formSubmit = (e) =>{
    e.preventDefault();



};



    {
    return (
        <>
            <div className ="my-5">
                <h1 className ="text-center">Contact US</h1>
            </div>
            <div className ="container contact_div">
                <div className="row">
                    <div className ="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
               <div class="mb-3">
               <label for="exampleFormControlInput1"
                class="form-label"> Full Name</label>
               <input type="text" 
               class="form-control" 
              id="exampleFormControlInput1" 
               name="fullname"
               value={data.fullname}
               onChange={InputEvent}


              placeholder="Type Here....."/>
               </div>
               <div class="mb-3">
               <label for="exampleFormControlInput1"
                class="form-label">Phone </label>
               <input type="number" 
               class="form-control" 
              id="exampleFormControlInput1" 
              name="phone"
               value={data.phone}
               onChange={InputEvent}

              placeholder="Type Here....."/>
               </div>               <div class="mb-3">
               <label for="exampleFormControlInput1"
                class="form-label">Email address</label>
               <input type="email" 
               class="form-control" 
              id="exampleFormControlInput1" 
              name="email"
               value={data.email}
               onChange={InputEvent}

              placeholder="name@example.com"/>
               </div>

            <div class="mb-3">
           <label for="exampleFormControlTextarea1" class="form-label">Message</label>
             <textarea class="form-control" id="exampleFormControlTextarea1"
             name="msg"
               value={data.msg}
               onChange={InputEvent}

              rows="3"></textarea>
            </div>
          <div class="col-12">
           <button class="btn btn-outline-primary" type="submit">Submit form</button>
          </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
}