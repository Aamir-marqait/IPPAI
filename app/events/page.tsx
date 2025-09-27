export default function Events() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-50rem mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl text-blue-100">
            Join our conferences, workshops, and networking events to connect with fellow professionals and stay at the forefront of public policy.
          </p>
        </div>
      </div>

      <div className="max-w-50rem mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <div className="text-2xl font-bold">Mar 15-17</div>
                <div className="text-blue-100">2025</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Global Policy Summit 2025</h3>
                <p className="text-gray-600 mb-4">
                  Annual conference bringing together policy makers, researchers, and practitioners from around the world.
                </p>
                <div className="flex items-center mb-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Washington, D.C.
                </div>
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  3 Days
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Register Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-4">
                <div className="text-2xl font-bold">Apr 8</div>
                <div className="text-green-100">2025</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Digital Governance Workshop</h3>
                <p className="text-gray-600 mb-4">
                  Hands-on workshop exploring digital transformation in public administration and e-governance initiatives.
                </p>
                <div className="flex items-center mb-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  Online Event
                </div>
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Half Day
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Register Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-purple-600 text-white p-4">
                <div className="text-2xl font-bold">May 22</div>
                <div className="text-purple-100">2025</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Policy Innovation Challenge</h3>
                <p className="text-gray-600 mb-4">
                  Collaborative event where teams develop innovative solutions to pressing policy challenges.
                </p>
                <div className="flex items-center mb-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  London, UK
                </div>
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Full Day
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Register Now
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-orange-600 text-white p-4">
                <div className="text-2xl font-bold">Jun 10-12</div>
                <div className="text-orange-100">2025</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Youth Leadership Forum</h3>
                <p className="text-gray-600 mb-4">
                  Empowering the next generation of policy leaders through mentorship and skill development.
                </p>
                <div className="flex items-center mb-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Singapore
                </div>
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  3 Days
                </div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Event Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Conferences</h3>
              <p className="text-gray-600">
                Large-scale events featuring keynote speakers, panel discussions, and networking opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-7H18V2h-2v2H8V2H6v2H4.5C3.67 4 3 4.67 3 5.5v13c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-13C20 4.67 19.33 4 18.5 4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Workshops</h3>
              <p className="text-gray-600">
                Hands-on, interactive sessions focused on specific skills and practical applications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-3 20H9v-2h4v2zm0-4H9v-2h4v2zm0-4H9V9h4v4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Webinars</h3>
              <p className="text-gray-600">
                Online sessions providing convenient access to expert insights and educational content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}