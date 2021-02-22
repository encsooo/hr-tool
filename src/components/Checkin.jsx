import React, {useState, useRef, useEffect} from 'react'
import allData from '../data/userData'
import Login from './Login'

const Checkin = (props) => {
const [checkinData, getGetcheckinData] = useState({username: ""})
const [toggle, changeToggle] = useState(false)
const [redirect, setRedirect] = useState("");
console.log(checkinData)

const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    getGetcheckinData({ ...checkinData, [e.target.name]: e.target.value });
  };

  
  const submitHandler = (e) => {
    e.preventDefault();
    setRedirect(checkLoginInfo()) ;
  };
 
  const checkLoginInfo = () => {
    const isTheLoginCorrect = allData.reduce((acc, user) => {
      if(checkinData.username === user.username){
        acc = "success"
      }
      return acc
    },"")

   
   if (isTheLoginCorrect==="success"){
    changeToggle(!toggle);
    return "correct"
    } else {
      return "incorrect"
    }
  };


    return (
        <div className="checkin-container">

          <div className="checkin-header">
              <h1 className="checkin-hero">Please enter your login</h1>
          </div>

          <div className={toggle ? `${"checkin-in"}` : `${"checkout-out"}`}>

          </div>

          <div className="login-container">
            <input
            className="checkin-input"
            type="text"
            name="username"
            value={checkinData.username}
            ref={inputRef}
            id="checkin"
            placeholder="Enter you login here"
            onChange={changeHandler}
            />

          <button className="checkin-btn" onClick={submitHandler}>Log in</button>

         </div>
         {redirect === "correct" && <p className="correct">Logged in</p>}
         {redirect === "incorrect" && <p className="warning">Wrong Name or Password</p>}
        </div>
    )
}

export default Checkin


  // const createLogin = () => {
  //     let d = new Date()
  //     const today = `${d.getDate()}${d.getMonth() + 1}${d.getFullYear()}`

  //   checkins.forEach(date => {
  //       if(today in date){
  //           console.log("found!!");
  //       }
  //   })
  //}