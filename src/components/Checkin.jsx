import React, {useState} from 'react'

import checkins from '../data/timeStamp'

const Checkin = () => {
// let today = new Date;
// console.log(today)
// let timestamp = today.valueOf()
// console.log(timestamp)

const [date, getDate] = useState({})

const changeHandler = (e) => {
    getDate({ ...date, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    createLogin();
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
          id="checkin"
          name="checkin"
          placeholder="Enter you login here"
          onChange={changeHandler}
        />
         <button className="checkin-btn" onClick={submitHandler}>Login</button>
        </div>
    )
}

export default Checkin
