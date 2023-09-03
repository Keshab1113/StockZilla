import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./AskQuestion.css";
import { askQuestion } from "../../actions/question";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
              userId: User?.result?._id,
            },
            navigate
          )
        );
      } else alert("Please enter all the fields");
    } else alert("Login to ask question");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>CONTACT US</h1>
        <h2>Have You Any Question ?</h2>
        <h3>WE ARE AT YOUR SERVICES</h3>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Your Name</h4>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="Please Enter Your Full Name."
              />
            </label>
            <label htmlFor="ask-ques-title">
              <h4>Your Email</h4>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="Please Enter Your Email."
              />
            </label>
            
            <label htmlFor="ask-ques-tags">
              <h4>Mobile Number</h4>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="Enter Your Mobile Number"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Ask Your Question</h4>
              <input
                type="text"
                id="ask-ques-body"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                placeholder="Ask Your Question Here."
                onKeyPress={handleEnter}
              ></input>
            </label>
          </div>
          <input
            type="submit"
            value="Ask Question"
            className="review-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;