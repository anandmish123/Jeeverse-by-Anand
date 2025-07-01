import React, { useState } from 'react';

const questions = [
  {
    question: "What is the dimensional formula of force?",
    options: ["MLT^-2", "ML^2T^-2", "ML^-1T^2", "M^-1LT^2"],
    answer: 0,
    explanation: "Force = mass × acceleration ⇒ [M][LT^-2] = MLT^-2"
  },
  {
    question: "Which of these is a vector quantity?",
    options: ["Speed", "Distance", "Velocity", "Work"],
    answer: 2,
    explanation: "Velocity has both magnitude and direction, so it's a vector."
  }
];

function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selected === questions[step].answer) {
      setScore(score + 1);
    }
    if (step + 1 < questions.length) {
      setStep(step + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', minHeight: '100vh' }}>
        <h1>Test Completed ✅</h1>
        <p>Score: {score} / {questions.length}</p>
        <p>Performance: {Math.round((score / questions.length) * 100)}%</p>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '2rem', minHeight: '100vh' }}>
      <h1 style={{ color: '#9f7aea' }}>JEEverse 🚀</h1>
      <p><strong>Q{step + 1}:</strong> {q.question}</p>
      <ul>
        {q.options.map((opt, idx) => (
          <li key={idx} style={{ marginBottom: '0.5rem' }}>
            <label>
              <input
                type="radio"
                checked={selected === idx}
                onChange={() => setSelected(idx)}
                style={{ marginRight: '0.5rem' }}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      {selected !== null && (
        <div style={{ marginTop: '1rem', color: '#aaa' }}>
          <p><strong>Explanation:</strong> {q.explanation}</p>
        </div>
      )}
      <button
        onClick={handleSubmit}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#9f7aea', color: '#000' }}
      >
        {step + 1 === questions.length ? 'Submit Test' : 'Next'}
      </button>
    </div>
  );
}

export default App;