import { useState } from 'react';
import ExpandIcon from "./icons/ExpandIcon";
import './style.css';

const FaqList = ({ faqConfig }) => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleQuestionClick = (id) => {
    setExpandedQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faqList">
      {faqConfig.map((faq, index) => (
        <div key={faq.id}>
          <h3>{faq.question}</h3>
          <ExpandIcon expanded={expandedQuestion === faq.id} className="expandIcon" onClick={() => handleQuestionClick(faq.id)} />
          {expandedQuestion === faq.id && (
            <div>
              <p>{faq.answer}</p>
            </div>
          )}
          {index !== faqConfig.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
};

export default FaqList;
