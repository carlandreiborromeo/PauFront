import { useState } from 'react';
import './CSS/vote.css';

const VotingSystem = () => {
  const [formData, setFormData] = useState({
    name: '',
    preferredLanguage: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://vote-cxfzeegzg0cnhkgj.southeastasia-01.azurewebsites.net/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log(result.msg);
      setSubmitted(true);
    } catch {
      alert('An error occurred while submitting your vote. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h1>Programming Language Voting System</h1>
      <h2>What is your preferred programming language?</h2>
      {submitted ? (
        <div className="thank-you">
          <h3>Thank you for voting!</h3>
          <p>Your preference has been recorded.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>

            <label>
              <input
                type="radio"
                name="preferredLanguage"
                value="Python"
                checked={formData.preferredLanguage === 'Python'}
                onChange={handleChange}
                required
              />
              Python
            </label>
            <label>
              <input
                type="radio"
                name="preferredLanguage"
                value="JavaScript"
                checked={formData.preferredLanguage === 'JavaScript'}
                onChange={handleChange}
                required
              />
              JavaScript
            </label>
            <label>
              <input
                type="radio"
                name="preferredLanguage"
                value="Java"
                checked={formData.preferredLanguage === 'Java'}
                onChange={handleChange}
                required
              />
              Java
            </label>
            <label>
              <input
                type="radio"
                name="preferredLanguage"
                value="C++"
                checked={formData.preferredLanguage === 'C++'}
                onChange={handleChange}
                required
              />
              C++
            </label>
            <label>
              <input
                type="radio"
                name="preferredLanguage"
                value="C#"
                checked={formData.preferredLanguage === 'C#'}
                onChange={handleChange}
                required
              />
              C#
            </label>
          </div>
          <button type="submit">Submit Vote</button>
        </form>
      )}
    </div>
  );
};

export default VotingSystem;
