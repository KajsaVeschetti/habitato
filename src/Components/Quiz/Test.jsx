import React from "react";
import { quizData } from "./questions";

export const Quiz = () => {
  return (
    <>
      <div className="stock-container">
        {quizData.map((data, key) => {
          return (
            <div key={key}>
                {data.question +
                " , " +
                data.correct_answer +
                " ," +
                data.incorrect_answer}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Quiz;