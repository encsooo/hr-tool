import React, {useState, useRef, useEffect} from 'react'
import allData from '../data/userData'

import checkins from '../data/timeStamp'

const Checkin = () => {
// let today = new Date;
// console.log(today)
// let timestamp = today.valueOf()
// console.log(timestamp)

const [checkinData, getGetcheckinData] = useState({username: ""})
const [time, getTime] = useState("")

const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    getGetcheckinData({ ...checkinData, [e.target.name]: e.target.value });
  };


  const submitHandler = (e) => {
    e.preventDefault();
    createLogin();
  };

   
  const checkLoginInfo = () => {
    const isTheLoginCorrect = allData.reduce((acc, user)=>{
      if(checkinData.username===user.username){
        acc = "success"
        console.log("right")
      } else {
          acc = "wrong"
          console.log("wrong")
      }
      return acc
    },"")
   
   if (isTheLoginCorrect==="success"){
      return createLogin
    }
  };

  const createLogin = () => {
      let d = new Date()
      const today = `${d.getDate()}${d.getMonth() + 1}${d.getFullYear()}`

    checkins.forEach(date => {
        if(today in date){
            console.log("found!!");
        }
    })
   
  }

    return (
        <div className="checkin-container">
            <input
          className="ckeckin-input"
          type="text"
          name="username"
          value={checkinData.username}
          ref={inputRef}
          id="checkin"
          placeholder="Enter you login here"
          onChange={changeHandler}
        />
         <button className="checkin-btn" onClick={submitHandler}>Login</button>
        </div>
    )
}

export default Checkin
