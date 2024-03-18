import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import axios from 'axios';

const QuestionPage = () => {
  const [page, setPage] = useState(1);
  const [questionsData, setQuestionsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState(() => {
    // Retrieve answers from local storage
    const storedAnswers = localStorage.getItem('answers');
    return storedAnswers ? JSON.parse(storedAnswers) : [];
  });
  
  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:4000/v1/getQuestions?page=${page}&limit=10`);
      setQuestionsData(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [page]);

  useEffect(() => {
    // Store answers in local storage whenever it changes
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [answers]);

  const handleAnswerSelect = (index, answer) => {
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = answer;
      return updatedAnswers;
    });
  };

  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = () => {
    console.log("Answers:", answers);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {questionsData.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question.text}
              selectedOption={(option) => handleAnswerSelect(index, option)}
            />
          ))}
          <div>
            {page === 5 && (
              <button onClick={()=>{
                console.log(answers);
              }} className="bg-red-500 text-white p-4 rounded-md m-4">
                Submit
              </button>
            )}
          </div>
          <div className="flex gap-10 m-4">
            {page !== 1 && (
              <button onClick={handlePrevPage} className="bg-red-500 text-white p-4 rounded-md">
                Prev
              </button>
            )}
            {page !== 5 && (
              <button onClick={handleNextPage} className="bg-red-500 text-white p-4 rounded-md">
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionPage;
