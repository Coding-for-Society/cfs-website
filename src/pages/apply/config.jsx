import FAQList from '../../components/faqList/FAQList';

export function FAQTSWebsite() {
  const faqs = [
    {
      question: 'Frontend Developer',
      answer: 'Help us implement the Talente Spenden website concept using HTML and Javascript.',
      id: 1,
    },
    {
      question: 'Backend Developer',
      answer:
        'Create and maintain the databases that power the Talente Spenden website.',
      id: 2,
    },
  ];
  return <FAQList faqs={faqs} />;
}

export function FAQProjectEdu() {
  const faqs = [
    {
      question: 'Education Consultant',
      answer: 'Support us with conducting coding projects at schools. [TBD]',
      id: 1,
    },
  ];
  return <FAQList faqs={faqs} />;
}

export function FAQCFSWebsite() {
  const faqs = [
    {
      question: 'Full Stack Developer',
      answer: 'Can you see yourself extending and maintaining this website? Do you have basic knowledge in Javascript, HTML and SQL and are a quick learner? Then this one is for you!',
      id: 1,
    },
    {
      question: 'Frontend Developer',
      answer: 'Help us implement our website prototype using HTML and Javascript. [TBD, just copy over some To-Dos from the Kanban board]',
      id: 2,
    },
    {
      question: 'Backend Developer',
      answer: 'Develop the SQL pipeline for this website and get practical experience with building a website.',
      id: 3,
    },
    {
      question: 'Designer',
      answer: 'Help us design the website and create a great user experience.',
      id: 4,
    },
    {
      question: 'HR Manager',
      answer: 'You like socializing with people and discovering people’s talents? In this position, you help us look out for people that would be a great addition to our team.',
      id: 5,
    },
  ];
  return <FAQList faqs={faqs} />;
}

export function FAQs() {
  const faqs = [
    {
      question: 'What are the next steps in the application process?',
      answer: 'We will invite you to a personal interview where we will talk about what you can do and what you can expect from us.',
      id: 1,
    },
    {
      question: 'Do I have to study computer science?',
      answer:
        'No, all study areas are welcome. We are also looking for members in the areas: design, ...',
      id: 2,
    },
    {
      question: 'What is the minimum time requirement for participating?',
      answer:
        'Most of our members do 5 hours a week. Of course this can be adapted in the exam phase etc.',
      id: 3,
    },
    {
      question: 'Do I have to be a current scholarship owner of the Deutschlandstipendium?',
      answer: 'This is not a strict requirement.',
      id: 4,
    },
  ];
  return <FAQList faqs={faqs} />;
}
