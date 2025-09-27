export default function Publication() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-50rem mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Publications</h1>
          <p className="text-xl text-blue-100">
            Explore our comprehensive collection of research papers, policy briefs, and academic publications.
          </p>
        </div>
      </div>

      <div className="max-w-50rem mx-auto px-6 py-20">
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">All Publications</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full font-medium">Research Papers</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full font-medium">Policy Briefs</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full font-medium">Working Papers</button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full font-medium">Case Studies</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Research Paper</span>
                <span className="text-sm text-gray-500">March 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Digital Transformation in Public Administration: A Comparative Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                This comprehensive study examines digital transformation initiatives across 25 countries, analyzing their impact 
                on public service delivery, citizen engagement, and administrative efficiency.
              </p>
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <span>Dr. Sarah Johnson, Prof. Michael Chen</span>
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                  Download PDF
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  Citation
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Policy Brief</span>
                <span className="text-sm text-gray-500">February 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Climate Adaptation Strategies for Urban Governance
              </h3>
              <p className="text-gray-600 mb-4">
                Policy recommendations for urban planners and local governments to develop effective climate adaptation 
                strategies that build resilience and protect vulnerable communities.
              </p>
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <span>Dr. Maria Rodriguez, Dr. James Wilson</span>
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                  Download PDF
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  Citation
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">Working Paper</span>
                <span className="text-sm text-gray-500">February 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Inclusive Economic Development: Lessons from Emerging Economies
              </h3>
              <p className="text-gray-600 mb-4">
                An analysis of policy frameworks that promote inclusive economic growth, examining successful models 
                from emerging economies and their applicability to different contexts.
              </p>
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <span>Prof. Lisa Chang, Dr. Ahmed Hassan</span>
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                  Download PDF
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  Citation
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">Case Study</span>
                <span className="text-sm text-gray-500">January 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Estonia&apos;s Digital Government: A Model for Public Sector Innovation
              </h3>
              <p className="text-gray-600 mb-4">
                Detailed case study examining Estonia&apos;s digital government initiatives, analyzing implementation strategies, 
                challenges overcome, and lessons learned for other nations.
              </p>
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <span>Dr. Anna Petrov, Dr. Mark Thompson</span>
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                  Download PDF
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  Citation
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">Research Paper</span>
                <span className="text-sm text-gray-500">January 2025</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Ethical Frameworks in Artificial Intelligence for Public Services
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive analysis of ethical considerations in AI implementation within public services, 
                proposing frameworks for responsible AI adoption in government operations.
              </p>
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <span>Dr. Robert Kim, Dr. Elena Volkova</span>
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                  Download PDF
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  Citation
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">Policy Brief</span>
                <span className="text-sm text-gray-500">December 2024</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Post-Pandemic Recovery: Policy Innovations for Economic Resilience
              </h3>
              <p className="text-gray-600 mb-4">
                Analysis of policy innovations implemented during pandemic recovery, identifying successful strategies 
                for building economic resilience and supporting vulnerable populations.
              </p>
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <span>Dr. Patricia Davis, Prof. Carlos Martinez</span>
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                  Download PDF
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  Citation
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Publication Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Total Publications</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <p className="text-gray-600">Research Papers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <p className="text-gray-600">Policy Briefs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-gray-600">Case Studies</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Publications</h3>
            <p className="text-gray-600 mb-6">Get notified when we publish new research and policy insights.</p>
            <div className="flex justify-center">
              <div className="flex max-w-md">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}