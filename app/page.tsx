import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 min-h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-50rem mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to <span className="text-blue-300">IPPAI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            International Public Policy and Administration Institute
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto text-blue-50">
            Advancing public policy through education, research, and professional development. 
            Join us in shaping the future of public administration and policy-making worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/membership"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300"
            >
              Become a Member
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-full transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-50rem mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional Development</h3>
              <p className="text-gray-600">Enhance your skills with our comprehensive courses and training programs.</p>
              <Link href="/courses" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                View Courses →
              </Link>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Research & Publications</h3>
              <p className="text-gray-600">Access cutting-edge research and publications in public policy and administration.</p>
              <Link href="/publication" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Read Publications →
              </Link>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Events & Networking</h3>
              <p className="text-gray-600">Connect with professionals through our conferences, workshops, and networking events.</p>
              <Link href="/events" className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">
                View Events →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-50rem mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Stay Connected</h2>
          <p className="text-xl text-gray-700 mb-12">
            Join our community of public policy professionals and stay updated with the latest news and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/articles"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Read Articles
            </Link>
            <Link 
              href="/press-release"
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Press Releases
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
