import React, {useState, useRef, useEffect} from 'react'
import allData from '../data/userData'

const Checkin = () => {
const [checkinData, getGetcheckinData] = useState({username: ""})
const [toggle, changeToggle] = useState(false)

const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const toggleHandler = () => {
    changeToggle(!toggle);
  }

  const changeHandler = (e) => {
    getGetcheckinData({ ...checkinData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    checkLoginInfo();
  };
 
  const checkLoginInfo = () => {
    const isTheLoginCorrect = allData.reduce((acc, user)=>{
      if(checkinData.username===user.username){
        acc = "success"
        console.log("right")
      }
      return acc
    },"")
   
   if (isTheLoginCorrect==="success"){
      toggleHandler()
    } else {
      console.log("sucker")
    }
  };
    return (
        <div className="checkin-container">
          <div className="checkin-header">
          <div className={toggle ? `${"toggle-active"}` : `${"toggle-inactive"}`}>
                <p>Hi</p>
            </div>
          </div>
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


  // const createLogin = () => {
  //     let d = new Date()
  //     const today = `${d.getDate()}${d.getMonth() + 1}${d.getFullYear()}`

  //   checkins.forEach(date => {
  //       if(today in date){
  //           console.log("found!!");
  //       }
  //   })
  //}