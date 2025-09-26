export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-50rem mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About IPPAI</h1>
          <p className="text-xl text-blue-100">
            Empowering the next generation of public policy professionals through education, research, and collaboration.
          </p>
        </div>
      </div>

      <div className="max-w-50rem mx-auto px-6 py-20">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            The International Public Policy and Administration Institute (IPPAI) is dedicated to advancing the field of public policy and administration through innovative education, cutting-edge research, and fostering collaboration among professionals worldwide.
          </p>
          <p className="text-lg text-gray-700">
            We believe that effective public policy is the cornerstone of a just and prosperous society. Our mission is to equip current and future leaders with the knowledge, skills, and networks needed to create positive change in their communities and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
            <p className="text-gray-700">
              To be the leading global institution for public policy education and research, fostering a community of ethical, innovative, and effective public servants who shape policies that benefit society as a whole.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Values</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Integrity and transparency in all our endeavors
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Excellence in education and research
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Inclusivity and diversity
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Innovation and continuous improvement
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Global collaboration and knowledge sharing
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15,000+</div>
              <p className="text-gray-600">Members Worldwide</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Research Publications</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-600">Partner Organizations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Countries Represented</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 mb-2">Executive Director</p>
              <p className="text-sm text-gray-600">PhD in Public Administration, 20+ years in policy research and implementation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Prof. Michael Chen</h3>
              <p className="text-blue-600 mb-2">Academic Director</p>
              <p className="text-sm text-gray-600">Former policy advisor to international organizations, expert in comparative public policy.</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Dr. Maria Rodriguez</h3>
              <p className="text-blue-600 mb-2">Research Director</p>
              <p className="text-sm text-gray-600">Leading expert in evidence-based policy making and public sector innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}