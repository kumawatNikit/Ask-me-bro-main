import React, { useState } from "react";
import QuestionCard from "../QuestionCard";
import useFetch from "@/lib/useQuestion";

const RecentlyAnswered = () => {

  const { data: recentlyAnsweredQuestions, error, loading } = useFetch(
    "/home/public/top-questions"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 8;

  // Calculate indices for slicing
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = recentlyAnsweredQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  // Calculate total pages
  const totalPages = Math.ceil(
    recentlyAnsweredQuestions.length / questionsPerPage
  );

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }
  return (
    <div>
      {/* Display current questions */}
      {currentQuestions.map((question, index) => (
        <QuestionCard
        key={index}
        title={question.title}
        date={question.createdAt}
        description={question.description}
        status={question.status}
        views={question.views}
        answers={question.answers.length}
        favorites={question.favorites}
        />
      ))}

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            style={{
              margin: "0 5px",
              backgroundColor: currentPage === i + 1 ? "#ff7361" : "#FFF",
              color: currentPage === i + 1 ? "#FFF" : "#000",
              border: "1px solid #CCC",
              padding:'5px',
              borderRadius:'5px',
            }}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentlyAnswered;
