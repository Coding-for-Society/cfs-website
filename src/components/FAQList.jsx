import {useState} from 'react';
import './styles.css'; //import css file for styling

function FAQList(faqs) {
  const [activeIndex, setActiveIndex] = useState(null); // state to store the active index of the clicked question

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // update activeIndex state based on the clicked index
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => handleClick(index)}>
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

export function FAQTSWebsite() {
  const faqs = [
    {
      question: 'Frontend Developer',
      answer: 'Help us implement the Talente Spenden website concept using HTML and Javascript.',
    },
    {
      question: 'Backend Developer',
      answer:
        'Create and maintain the databases that power the Talente Spenden website.',
    },
  ];
  return FAQList(faqs);
}

export function FAQProjectEdu() {
  const faqs = [
    {
      question: 'Frontend Developer',
      answer: 'Help us implement the Talente Spenden website concept using HTML and Javascript.',
    },
    {
      question: 'Backend Developer',
      answer:
        'Create and maintain the databases that power the Talente Spenden website.',
    },
  ];
  return FAQList(faqs);
}

export function FAQs() {
  const faqs = [
    {
      question: 'What are the next steps in the application process?',
      answer: 'We will invite you to a personal interview where we will talk about what you can do and what you can expect from us.',
    },
    {
      question: 'Do I have to study computer science?',
      answer:
        'No, all study areas are welcome. We are also looking for members in the areas: design, ...',
    },
    {
      question: 'What is the minimum time requirement for participating?',
      answer:
        'Most of our members do 5 hours a week. Of course this can be adapted in the exam phase etc.',
    },
    {
      question: 'Do I have to be a current scholarship owner of the Deutschlandstipendium?',
      answer: 'This is not a strict requirement.'
    }
  ];
  return FAQList(faqs);
}

export default FAQList;
