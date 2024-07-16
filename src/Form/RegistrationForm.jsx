import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        organizationName: '',
        organizationSize: '',
        industry: ''
    });

    const [students, setStudents] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStudents([...students, formData]);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            organizationName: '',
            organizationSize: '',
            industry: ''
        });
    };

    return (
        <div className="container mt-5" >
            <form onSubmit={handleSubmit} className={styles.registrationform}>
                <h2>Try Sign free for 14 days</h2>
                <div className={styles.formgroup}>
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formgroup}>
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formgroup}>
                    <label>Work Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formgroup}>
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formgroup}>
                    <label>Organization Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formgroup}>
                    <label>Organization Size</label>
                    <select
                        className="form-control"
                        name="organizationSize"
                        value={formData.organizationSize}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>-- Select --</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>
                <div className={styles.formgroup}>
                    <label>Industry</label>
                    <select
                        className="form-control"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>-- Select --</option>
                        <option value="Technology">Technology</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Finance">Finance</option>
                    </select>
                </div>
                <div className={`form-group ${styles.formcheck}`}>
                    <input type="checkbox" className={styles.formcheckinput} required />
                    <label className="form-check-label">
                        I understand and agree to the Formstack Privacy Policy, Software Services Agreement, and Acceptable Use Policy.
                    </label>
                </div>
                <button type="submit" className="btn btn-primary mb-5" >Start free trial</button>
            </form>

            <div className="mt-5">
                <h3>Registered Students</h3>
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>
                            {student.firstName} {student.lastName} - {student.email} - {student.password} - {student.organizationName} - {student.organizationSize} - {student.industry}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RegistrationForm;
