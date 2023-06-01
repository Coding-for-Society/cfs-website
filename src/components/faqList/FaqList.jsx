import { useState } from 'react';
import ExpandIcon from "./icons/ExpandIcon";
import './style.css';

const FaqList = ({ faqConfig }) => {
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const handleQuestionClick = (id) => {
    setExpandedQuestions((prev) => {
      if (prev.includes(id)) {
        return prev.filter((questionId) => questionId !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <div className="faqList">
      {faqConfig.map((faq) => (
        <div key={faq.id}>
          <h3>
            <a href={`#${faq.id}`} onClick={() => handleQuestionClick(faq.id)}>
              <ExpandIcon expanded={expandedQuestions.includes(faq.id)} className="expandIcon" />
              {faq.question}
            </a>
          </h3>
          {expandedQuestions.includes(faq.id) && (
            <div>
              <p>{faq.answer}</p>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FaqList;
