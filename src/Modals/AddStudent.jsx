import React, { useState } from 'react';
import axios from 'axios';
import './AddStudent.css';

const AddStudent = ({ isOpen, onClose, onStudentAdded }) => {
  const [studentID, setStudentID] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [status, setStatus] = useState('Active'); // Default status
  const [password, setPassword] = useState('hashed_default_password'); // Default hashed password
  const [timeLeft, setTimeLeft] = useState(60); // Default time_left
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    const studentIDRegex = /^\d{2}-\d{4}-\d{3}$/;

    if (!studentID || !name || !course) {
      setError('Please fill in all fields');
      return;
    }

    if (!studentIDRegex.test(studentID)) {
      setError('Student ID must be in the format XX-XXXX-XXX');
      return;
    }

    const newStudent = {
      studentID,
      name,
      course,
      time_left: timeLeft,  // Use the fetched or default value
      status,  // Use the fetched or default value
      password // Password will be handled in backend, not sent from here
    };

    try {
      const response = await axios.post('http://localhost:8000/api/students/', newStudent);
      console.log('Student added successfully:', response.data);
      onStudentAdded(); // Notify parent to refresh student list
      onClose(); // Close modal
      alert('Student added successfully!');
    } catch (error) {
      console.error('Error adding student:', error.response ? error.response.data : error.message);
      if (error.response && error.response.data) {
        setError(`Error: ${error.response.data}`);
      } else {
        setError('Failed to add student. Please try again.');
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Add Student</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="studentID">Student ID</label>
            <input
              type="text"
              id="studentID"
              name="studentID"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
              placeholder="XX-XXXX-XXX"
              required
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="course">Course</label>
            <input
              type="text"
              id="course"
              name="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </div>
          {/* Non-editable fields */}
          <div>
            <label htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              name="status"
              value={status}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="password">Password (Hashed)</label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="timeLeft">Time Left</label>
            <input
              type="text"
              id="timeLeft"
              name="timeLeft"
              value={timeLeft}
              readOnly
            />
          </div>
          <button type="submit">Add Student</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
