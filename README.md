🎓 Secure & Cheating-Resistant Online Quiz Web Application
This is a full-stack web application developed during a college-organized Hackathon. It allows Teachers to create secure quizzes and Students to attempt them while detecting any cheating activity (like tab switch or blur). If cheating is detected, the quiz is auto-submitted, and marks are set to 0 with the reason shown in the final result and exported as a PDF.

🔥 Key Features

Role-based login (Teacher & Student)

Teachers can create quizzes

Students can attempt quizzes securely

Cheating detection (tab switch / blur events)

Auto-submit quiz on cheating with 0 marks

Result screen includes violation reason

PDF export of result

Responsive UI with Bootstrap

👨‍💻 My Role: Backend Developer & Team Lead

Designed and implemented REST APIs using Flask

Built logic for cheating detection, auto-submit, and result calculation

Integrated PDF result generation

Managed team coordination and frontend-backend integration

🤝 Team Members & Roles

Shree Radhika Khandelwal – Designing of the UI using Figma

Yashaswini Sharma – Responsive layout and styled pages

Nishka Goyal – JavaScript logic for quiz flow

Harsh Pareek (Me) – Backend, APIs, violation logic, team coordination

🧠 Tech Stack

Frontend: HTML, CSS, Figma, JavaScript, 
Backend: Python Flask
Database: MySQL
PDF Generation: ReportLab

🗂️ Database Schema (Main Tables)

teacher (teacher_id, name, email, password)

student (student_id, name, email, password)

quiz (quiz_id, teacher_id, title, duration)

question (question_id, quiz_id, question_text, options, correct_option)

student_response (response_id, student_id, quiz_id, question_id, selected_option)

violation (violation_id, student_id, quiz_id, reason, timestamp)

result (result_id, student_id, quiz_id, score, cheated, reason)

⚙️ How to Run the Project

Set up virtual environment:
python -m venv venv
venv\Scripts\activate (Windows)
source venv/bin/activate (Linux/Mac)

Install packages:
pip install -r requirements.txt

Create MySQL database quiz_app and import schema

Run the Flask app:
set FLASK_APP=app.py
flask run

🎯 Future Improvements

Add webcam-based cheating detection

Email alerts to teachers

JWT-based secure login

Resume quiz feature

Docker-based deployment

📄 License

Open-source under MIT License.

🙏 Acknowledgement
Thanks to my amazing team (Radhika, Yashaswini, Nishka) and our college for organizing the Hackathon. This project gave me a great experience in backend development and team leadership.

