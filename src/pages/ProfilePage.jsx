// import React from 'react';

// const ProfilePage = () => {
//   return (
//     <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
//       <div className="flex items-center space-x-6 mb-8">
//         {/* Profile Picture */}
//         <div className="w-1/3 bg-gray-200 aspect-square flex items-center justify-center">
//           <img 
//             src="/profile.jpg" // Correctly referencing the image in the public folder
//             alt="Profile" 
//             style={{ width: '150px', borderRadius: '50%' }} 
//           />
//         </div>

//         {/* User Details */}
//         <div className="w-2/3">
//           <h1 className="text-3xl font-bold mb-2">Rohit Yadav</h1>
//           <div className="space-y-2 text-gray-700">
//             <p><strong>Email:</strong> rohityadav22348@aitpune.edu.in</p>
//             <p><strong>Mobile:</strong> 7903697273</p>
//             <p>
//               <strong>GitHub:</strong> 
//               <a href="https://github.com/yrrohityadav" className="text-blue-600 hover:underline">
//                 yrrohityadav
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Rest of the page content */}
//       {/* Add your education, experience, projects, and skills sections here */}
//     </div>
//   );
// };

// export default ProfilePage;
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mb-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img 
            src="/profile.jpg" 
            alt="Profile" 
            className="w-40 h-40 rounded-full shadow-md object-cover" 
          />
        </div>

        {/* Personal Info */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">Rohit Yadav</h1>
          <p className="text-gray-600">Email: <a href="mailto:rohityadav22348@aitpune.edu.in" className="text-blue-600 hover:underline">rohityadav22348@aitpune.edu.in</a></p>
          <p className="text-gray-600">Mobile: <a href="tel:7903697273" className="text-blue-600 hover:underline">7903697273</a></p>
          <p className="text-gray-600">GitHub: <a href="https://github.com/yrrohityadav" className="text-blue-600 hover:underline">yrrohityadav</a></p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Army Institute of Technology, Pune</h3>
              <p>Bachelor of Engineering (2022 - 2026)</p>
            </div>
            <div>
              <h3 className="font-bold">Army Public School, Chandimandir</h3>
              <p>CBSE | Result: 8.9 CGPA (2019 - 2021)</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">Website Contributor, AITMUN</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Developed a user-friendly, accessible website with React.js and Tailwind CSS.</li>
                <li>Integrated MongoDB and Express for efficient data handling and smooth user interaction.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Joint Secretary, Drama, Debate, and Quiz (DDQ) Club</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Organized the first Model United Nations (MUN) event at the college.</li>
                <li>Led a volunteer team to ensure success of debate and quiz events.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Joint Secretary, Sports Club</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Organized PACE2k23, the annual sports fest.</li>
                <li>Coordinated between students, faculty, and sponsors to promote sports culture.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">AI Chatbot with Gemini API</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Developed an AI-powered chatbot with Gemini API for real-time intelligent responses.</li>
                <li>Created a responsive UI using React.js and Tailwind CSS.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">ML-based Story Generator (Hugging Face API Integration)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Created a story generator utilizing Hugging Face API for natural language processing.</li>
                <li>Developed an interactive UI using React.js and Tailwind CSS.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Blog App with Firebase Authentication and MongoDB Backend</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implemented Firebase authentication for secure login.</li>
                <li>Integrated MongoDB backend for managing blog data.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Spotify Clone (MERN Stack with API Integration)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Built a Spotify Clone using the MERN stack with song streaming APIs.</li>
                <li>Implemented user authentication and designed a responsive UI.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Prescripto - Doctor Appointment Booking System (MERN Stack)</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Developed a dynamic UI with React.js and Tailwind CSS for patients, doctors, and admins.</li>
                <li>Integrated user authentication for secure access.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
          <div>
            <h3 className="font-bold">Programming Languages</h3>
            <p className="text-gray-700">Scala, Python, JavaScript, C++, SQL, Java</p>

            <h3 className="font-bold mt-4">Technologies</h3>
            <p className="text-gray-700">
              MERN Stack (MongoDB, Express.js, React.js, Node.js), Firebase Authentication, Tailwind CSS, 
              Mongoose, Machine Learning, API Integration (Gemini, ChatGPT, Hugging Face).
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;
