import { useState } from 'react';
import './style.css';

function FAQList(props) {
  const { faqs } = props;
  // state to store the active index of the clicked question
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    // update activeIndex state based on the clicked index
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={faq.id}>
          <div className="faq-question" role="button" onClick={() => handleClick(index)} onKeyUp={() => handleClick(index)} tabIndex={0}>
            <div className="faq-icon">
              {activeIndex === index ? (
                <span>&#x25BC;</span>
              ) : (
                <span>&#x25B6;</span>
              )}
            </div>
            <div className="faq-text">{faq.question}</div>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQList;
