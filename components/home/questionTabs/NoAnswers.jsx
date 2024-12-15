import { useState } from 'react';
import React from 'react';
import QuestionCard from '../QuestionCard';

const NoAnswers = () => {
  
  const questionsWithNoAnswers = [
    {
      title: 'How do I connect a MySQL database to my Node.js application?',
      date: 'Feb 10, 2023',
   description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
    {
      title: 'What is the best way to optimize website performance?',
      date: 'Apr 20, 2023',
  description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
  {
    title: 'What is the best way to optimize website performance?',
    date: 'Apr 20, 2023',
description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
{
  title: 'What is the best way to optimize website performance?',
  date: 'Apr 20, 2023',
description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
{
  title: 'What is the best way to optimize website performance?',
  date: 'Apr 20, 2023',
description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
{
  title: 'What is the best way to optimize website performance?',
  date: 'Apr 20, 2023',
description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
{
  title: 'What is the best way to optimize website performance?',
  date: 'Apr 20, 2023',
description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
{
  title: 'What is the best way to optimize website performance?',
  date: 'Apr 20, 2023',
description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
{
  title: 'What is the best way to optimize website performance?',
  date: 'Apr 20, 2023',
description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
{
  title: 'What is the best way to optimize website performance?',
  date: 'Apr 20, 2023',
description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
{
  title: 'What is the best way to optimize website performance?',
  date: 'Apr 20, 2023',
description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
{
  title: 'What is the best way to optimize website performance?',
  date: 'Apr 20, 2023',
description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
{
  title: 'What is the best way to optimize website performance?',
  date: 'Apr 20, 2023',
description:'Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.' },
   
  ];

  
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 8;

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questionsWithNoAnswers.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  // Calculate total pages
  const totalPages = Math.ceil(
    questionsWithNoAnswers.length / questionsPerPage
  );

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      {/* Display current questions */}
      {currentQuestions.map((question, index) => (
        <QuestionCard
          key={index}
          title={question.title}
          date={question.date}
          description={question.description}
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
              backgroundColor: currentPage === i + 1 ? "#1c3a40" : "#FFF",
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

export default NoAnswers;