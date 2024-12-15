import React, { useState } from "react";
import QuestionCard from "../QuestionCard";

const RecentQuestions = () => {
  const recentQuestions = [
    {
      title: "This is my First Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },
    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },
    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },
    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },
    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },
    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },
    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    {
      title: "This Is My Second Poll Question",
      date: "Feb 22, 2014",
      description:
        "Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis.Curabitur vitae velit in neque dictum blandit.",
    },

    // ...more questions
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 8;

  // Calculate indices
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = recentQuestions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  // Change page
  const totalPages = Math.ceil(recentQuestions.length / questionsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
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
              padding: "5px",
              borderRadius: "5px",
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

export default RecentQuestions;
