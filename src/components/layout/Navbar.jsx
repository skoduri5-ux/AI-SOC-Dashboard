import { useEffect, useRef, useState } from "react";
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  const notificationRef = useRef(null);
  const messageRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }

      if (
        messageRef.current &&
        !messageRef.current.contains(event.target)
      ) {
        setShowMessages(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);
  function handleLogout() {

    localStorage.removeItem("token");

    navigate("/");

  }
  const today = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const time = currentTime.toLocaleTimeString();

  return (
    <header className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 flex items-center justify-between">

      {/* Search */}

      <div className="flex items-center bg-slate-800 rounded-xl px-4 py-3 w-[420px]">

        <FaSearch className="text-gray-400" />

        <input
          type="text"
          placeholder="Search threats, IPs, users..."
          className="bg-transparent outline-none text-white ml-3 w-full"
        />

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-6">

        {/* Date */}

        <div className="text-right">

          <p className="text-sm text-gray-400">
            {today}
          </p>

          <p className="text-cyan-400 font-semibold">
            {time}
          </p>

        </div>

        {/* Notifications */}

        <div
          className="relative"
          ref={notificationRef}
        >

          <button
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
            className="relative text-xl text-gray-300 hover:text-cyan-400"
          >
            <FaBell />

            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              4
            </span>

          </button>

          {showNotifications && (

            <div className="absolute right-0 mt-4 w-80 bg-slate-800 rounded-xl shadow-xl border border-slate-700 z-50">

              <div className="p-4 border-b border-slate-700 font-bold">
                🔔 Notifications
              </div>

              <div className="p-4 space-y-4 text-sm">

                <div>
                  🔴 SQL Injection detected
                  <p className="text-gray-400 text-xs">
                    2 mins ago
                  </p>
                </div>

                <div>
                  🟠 Brute Force blocked
                  <p className="text-gray-400 text-xs">
                    8 mins ago
                  </p>
                </div>

                <div>
                  🟢 Firewall Updated
                  <p className="text-gray-400 text-xs">
                    15 mins ago
                  </p>
                </div>

                <div>
                  🔵 User admin logged in
                  <p className="text-gray-400 text-xs">
                    20 mins ago
                  </p>
                </div>

              </div>

            </div>

          )}

        </div>

        {/* Messages */}

        <div
          className="relative"
          ref={messageRef}
        >

          <button
            onClick={() =>
              setShowMessages(!showMessages)
            }
            className="text-xl text-gray-300 hover:text-cyan-400"
          >
            <FaEnvelope />
          </button>

          {showMessages && (

            <div className="absolute right-0 mt-4 w-80 bg-slate-800 rounded-xl shadow-xl border border-slate-700 z-50">

              <div className="p-4 border-b border-slate-700 font-bold">
                ✉ Messages
              </div>

              <div className="p-4 space-y-4 text-sm">

                <div>

                  <strong>SOC Manager</strong>

                  <p className="text-gray-400">
                    Review Alert #1001
                  </p>

                </div>

                <div>

                  <strong>AI Assistant</strong>

                  <p className="text-gray-400">
                    Daily report completed.
                  </p>

                </div>

                <div>

                  <strong>Admin</strong>

                  <p className="text-gray-400">
                    Firewall updated.
                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

        {/* Theme */}

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className="text-xl text-gray-300 hover:text-yellow-400"
        >

          {darkMode ? <FaSun /> : <FaMoon />}

        </button>

        {/* Profile */}

        <div
          className="relative"
          ref={profileRef}
        >

          <button
            onClick={() =>
              setShowProfile(!showProfile)
            }
            className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-2"
          >

            <FaUserCircle className="text-3xl text-cyan-400" />

            <div className="text-left">

              <h3 className="font-semibold">
                Shashank
              </h3>

              <p className="text-xs text-gray-400">
                SOC Analyst
              </p>

            </div>

          </button>

          {showProfile && (

            <div className="absolute right-0 mt-4 w-56 bg-slate-800 rounded-xl border border-slate-700 shadow-xl z-50">

              <button
                onClick={() => {
                  setShowProfile(false);
                  setShowProfileModal(true);
                }}
                className="w-full text-left px-5 py-3 hover:bg-slate-700"
              >
                👤 My Profile
              </button>

              <Link
                to="/settings"
                className="block px-5 py-3 hover:bg-slate-700"
              >
                ⚙ Settings
              </Link>

              <button
                onClick={() => {
                  setShowProfile(false);
                  setShowActivityModal(true);
                }}
                className="w-full text-left px-5 py-3 hover:bg-slate-700"
              >
                📈 Activity
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-5 py-3 text-red-400 hover:bg-red-600 hover:text-white"
              >
                🚪 Logout
              </button>

            </div>

            )}

        </div>

      </div>
      {/* Profile Modal */}

        {showProfileModal && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]">

          <div className="bg-slate-900 rounded-2xl p-8 w-[420px]">

            <h2 className="text-2xl font-bold mb-6">
              👤 My Profile
            </h2>

            <p className="mb-3">
              <strong>Name:</strong> Shashank
            </p>

            <p className="mb-3">
              <strong>Role:</strong> SOC Analyst
            </p>

            <p className="mb-3">
              <strong>Email:</strong> shashank@example.com
            </p>

            <p className="mb-6">
              <strong>Status:</strong> Active
            </p>

            <button
              onClick={() => setShowProfileModal(false)}
              className="bg-cyan-600 px-6 py-3 rounded-xl"
            >
              Close
            </button>

          </div>

        </div>

        )}

        {/* Activity Modal */}

        {showActivityModal && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]">

          <div className="bg-slate-900 rounded-2xl p-8 w-[450px]">

            <h2 className="text-2xl font-bold mb-6">
              📈 Recent Activity
            </h2>

            <ul className="space-y-3">

              <li>✅ Opened Dashboard</li>

              <li>🚨 Viewed Alert #1001</li>

              <li>📜 Exported Logs</li>

              <li>🤖 Asked AI about SQL Injection</li>

              <li>🛡 Investigated Brute Force attack</li>

            </ul>

            <button
              onClick={() => setShowActivityModal(false)}
              className="mt-8 bg-cyan-600 px-6 py-3 rounded-xl"
            >
              Close
            </button>

          </div>

        </div>

        )}
    </header>
  );
}

export default Navbar;