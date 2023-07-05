
import { useState } from "react";

function App() {

  
  const [name, setName] = useState("") ;
  const [email, setEmail] = useState("") ;
  const [phone, setPhone] = useState(null) ;
  const [rate, setRate] = useState(null) ;
  const [feedback, setFeedback] = useState("");
  const [platform,setPlatform] = useState("") ;
  const [q1,setQ1] = useState("") ;
  const [q2,setQ2] = useState("") ;
  const [q3,setQ3] = useState("") ;


  const [showButton, setShowButton] = useState(false);


  const resetForm = ()=>{
    setName("") ;
    setEmail("") ;
    setPhone(0) ;
    setRate(null) ;
    setFeedback("") ;
    setPlatform("") ;
    setQ1("") ;
    setQ2("") ;
    setQ3("") ;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    handleClick();

    const arr = [name, email, phone, rate, feedback, platform, q1, q2, q3] ;

    console.log(arr)

    resetForm() ;
  };
  
  const handleClick = (e) => {
    setShowButton(true);
    setTimeout(() => {
      setShowButton(false);
    }, 2000);
  };


  return (
    <>



      <div className="flex bg-gradient-to-b from-purple-900 to-black w-full text-white justify-center p-5">


        <form className="flex flex-col gap-2">




          <div className="fixed top-2 left-1 flex items-center justify-center">
            {showButton && (
              <>
                <div className="bg-green-500 w-56 bg-opacity-50 border-t border-b border-green-500 text-white px-4 py-3" role="alert">
                  <p className="font-bold">Thank You !!</p>
                  <p className="text-sm">Your feedback is recorded.</p>
                </div>
              </>
            )}


          </div>





          <h1 className="py-3 text-center text-3xl font-bold">Feedback Form</h1>

          <input value={name} type="text" onChange={(e)=> setName(e.target.value)} className="border rounded-lg text-black outline-none border-black px-2 py-1" placeholder="Enter name" />

          <input value={email} type="email" onChange={(e)=> setEmail(e.target.value)} className="border rounded-lg text-black outline-none border-black px-2 py-1" placeholder="Enter email" />

          <input value={phone} type="tel" onChange={(e)=>setPhone(e.target.value)} className="border rounded-lg text-black outline-none border-black px-2 py-1" placeholder="Enter phone" />



          <div>

            <h3 className="text-center text-xl font-semibold">Rate our Product</h3>

            <div className="flex justify-center">
              <label className="px-2 " htmlFor=""> 1 <input  type="radio" name="rate" value={1} onChange={(e)=>setRate(e.target.value)}  /></label>
              <label className="px-2 " htmlFor=""> 2 <input type="radio" name="rate" value={2} onChange={(e)=>setRate(e.target.value)}  /></label>
              <label className="px-2 " htmlFor=""> 3 <input type="radio" name="rate" value={3} onChange={(e)=>setRate(e.target.value)}  /></label>
              <label className="px-2 " htmlFor=""> 4 <input type="radio" name="rate" value={4} onChange={(e)=>setRate(e.target.value)}  /></label>
              <label className="px-2 " htmlFor=""> 5 <input  type="radio" name="rate" value={5} onChange={(e)=>setRate(e.target.value)}  /></label>
            </div>

          </div>



          <h3 className="text-center text-xl font-semibold">Share your feedback</h3>
          
          <textarea value={feedback} name="" id="" cols="30" rows="4" className="border rounded-lg text-black  border-black px-2 py-2 outline-none" onChange={(e)=>setFeedback(e.target.value)} />



          <div className="flex flex-col justify-center items-center" >

            <label htmlFor="platform"> <p className="text-xl pb-1 text-center font-semibold" > Which Platform you are using  </p></label>

            <select value={platform} onChange={(e)=>setPlatform(e.target.value)} className="flex px-2 py-1 text-black text-center border border-gray-600 w-1/2 flex-col justify-center rounded-lg" id="platform" name="platform">
              <option value="web">Web</option>
              <option value="ios">iOS</option>
              <option value="android">Android</option>
              <option className="rounded-e-lg" value="other">Other</option>
            </select>

          </div>



          <h3 className="text-medium text-center font-semibold">What features do you like the most?</h3>

          <textarea value={q1} onChange={(e)=>setQ1(e.target.value)} className=" rounded-lg border  text-black border-black px-2 py-2 outline-none" name="" id="" cols="30" rows="2"/> 


          <h3 className="text-medium text-center font-semibold">What features do you think need improvement?</h3>

          <textarea value={q2} onChange={(e)=>setQ2(e.target.value)} className=" rounded-lg border  text-black border-black px-2 py-2 outline-none" name="" id="" cols="30" rows="2"/>


          <h3 className="text-medium text-center font-semibold">Any additional comments or suggestions?</h3>

          <textarea value={q3} onChange={(e)=>setQ3(e.target.value)} className=" rounded-lg border text-black border-black px-2 py-2 outline-none" name="" id="" cols="30" rows="2"/> 

         
     
          <button type="submit" onClick={handleSubmit} className="my-3 rounded-lg bg-blue-500 py-2 font-semibold text-white"  >Submit</button>

        </form>


      </div>
                          

    </>
  );
}

export default App;
