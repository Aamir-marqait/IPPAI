export default function PressRelease() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-50rem mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Press Releases</h1>
          <p className="text-xl text-blue-100">
            Stay updated with our latest announcements, research findings, and institutional developments.
          </p>
        </div>
      </div>

      <div className="max-w-50rem mx-auto px-6 py-20">
        <div className="space-y-8">
          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">March 10, 2025</span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Major Announcement</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">IPPAI Launches Global Policy Innovation Challenge 2025</h2>
            <p className="text-gray-600 mb-4">
              The International Public Policy and Administration Institute announces the launch of its annual Global Policy Innovation Challenge, 
              inviting teams worldwide to develop innovative solutions to pressing policy challenges affecting communities globally.
            </p>
            <p className="text-gray-600 mb-6">
              This year&apos;s challenge focuses on three key areas: climate adaptation strategies, digital governance frameworks, 
              and inclusive economic development policies. The winning teams will receive funding support and implementation assistance...
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Read Full Release →</button>
          </article>

          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">February 28, 2025</span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Research</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">New Research Reveals Impact of Digital Transformation on Public Services</h2>
            <p className="text-gray-600 mb-4">
              IPPAI researchers have published groundbreaking findings on how digital transformation initiatives are reshaping 
              public service delivery across 25 countries, showing significant improvements in citizen satisfaction and operational efficiency.
            </p>
            <p className="text-gray-600 mb-6">
              The comprehensive study, conducted over two years, analyzed digital governance implementations and their outcomes, 
              providing valuable insights for policymakers and public administrators...
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Read Full Release →</button>
          </article>

          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">February 15, 2025</span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">Partnership</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">IPPAI Partners with Leading Universities for Executive Education Program</h2>
            <p className="text-gray-600 mb-4">
              Strategic partnership with top-tier universities worldwide expands IPPAI&apos;s reach in executive education, 
              offering specialized programs for senior government officials and policy leaders.
            </p>
            <p className="text-gray-600 mb-6">
              The collaboration brings together academic excellence and practical experience, creating unique learning opportunities 
              for experienced professionals seeking to advance their impact in public service...
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Read Full Release →</button>
          </article>

          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">January 30, 2025</span>
              <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">Awards</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">IPPAI Receives Excellence in Public Policy Education Award</h2>
            <p className="text-gray-600 mb-4">
              The Institute has been recognized by the International Association of Public Policy Schools for its innovative 
              approach to online learning and professional development in public administration.
            </p>
            <p className="text-gray-600 mb-6">
              This prestigious award acknowledges IPPAI&apos;s commitment to advancing the field through cutting-edge educational 
              methodologies and its significant contribution to professional development worldwide...
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Read Full Release →</button>
          </article>

          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">January 18, 2025</span>
              <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">Event</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Annual Global Policy Summit Dates Announced</h2>
            <p className="text-gray-600 mb-4">
              IPPAI announces the dates and theme for its flagship annual conference, bringing together policy makers, 
              researchers, and practitioners from around the world.
            </p>
            <p className="text-gray-600 mb-6">
              The 2025 Global Policy Summit will focus on &ldquo;Building Resilient Societies: Policy Innovation in Times of Change&rdquo; 
              and will feature keynote speakers from leading international organizations...
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Read Full Release →</button>
          </article>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Media Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Press Inquiries</h3>
              <p className="text-gray-600 mb-2">For media inquiries and interview requests:</p>
              <p className="text-blue-600 font-medium">media@ippai.org</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Research Communications</h3>
              <p className="text-gray-600 mb-2">For research-related press inquiries:</p>
              <p className="text-blue-600 font-medium">research@ippai.org</p>
              <p className="text-gray-600">+1 (555) 123-4568</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}