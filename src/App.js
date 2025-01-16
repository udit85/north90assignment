import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Settings, Bell, Search, MessageSquare } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let scale = 1;

      if (width >= 992 && width <= 1600) {
        scale = 0.9;
      } else if (width >= 700 && width <= 767) {
        scale = 0.8;
      } else if (width >= 600 && width < 700) {
        scale = 0.75;
      } else if (width <= 600) {
        scale = 0.5;
      }

      document.documentElement.style.transform = `scale(${scale})`;
      document.documentElement.style.transformOrigin = 'top left';
      // Adjust the body height to account for scaling
      document.body.style.height = `${100 / scale}vh`;
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Rest of your component remains the same */}
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <span className="ml-4 text-xl font-semibold">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="text-gray-600" size={20} />
              <Bell className="text-gray-600" size={20} />
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 pt-16">
        {/* Left Sidebar */}
        <aside
          className={`${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
        >
          <nav className="p-4 space-y-2">
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Home size={20} />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Users size={20} />
              <span>Team</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <MessageSquare size={20} />
              <span>Messages</span>
            </a>
            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700">
              <Settings size={20} />
              <span>Settings</span>
            </a>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-100 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Welcome Back</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-600">
                This is your main content area. Start adding your content here.
              </p>
            </div>
          </div>
        </main>

        {/* Right Panel */}
        <aside className="hidden lg:block w-64 bg-white p-4 border-l border-gray-200">
          <h2 className="font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start space-x-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="text-sm">New update available</p>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 Your Company. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;