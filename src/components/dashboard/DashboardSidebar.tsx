import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiCreditCard,
  FiDollarSign,
  FiPieChart,
  FiSettings,
  FiUser,
  FiHelpCircle,
  FiUsers,
} from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

export function DashboardSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { user } = useAuth();

  const navItems = [
    {
      name: "Dashboard",
      icon: <FiHome className="h-5 w-5" />,
      path: "/dashboard",
    },
    {
      name: "Accounts",
      icon: <FiCreditCard className="h-5 w-5" />,
      path: "/accounts",
    },
    {
      name: "Transactions",
      icon: <FiDollarSign className="h-5 w-5" />,
      path: "/transactions",
    },
    {
      name: "Analytics",
      icon: <FiPieChart className="h-5 w-5" />,
      path: "/analytics",
    },
    {
      name: "Profile",
      icon: <FiUser className="h-5 w-5" />,
      path: "/profile",
    },
    {
      name: "Settings",
      icon: <FiSettings className="h-5 w-5" />,
      path: "/settings",
    },
    // Admin link - only shown to admin users
    ...(user?.isAdmin
      ? [
          {
            name: "User Management",
            icon: <FiUsers className="h-5 w-5" />,
            path: "/admin",
          },
        ]
      : []),
    {
      name: "Help",
      icon: <FiHelpCircle className="h-5 w-5" />,
      path: "/help",
    },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <Link to="/dashboard" className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-blue-600">C</span>
            <span className="text-gray-900 dark:text-white">Bank</span>
          </h1>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              currentPath === item.path
                ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">
            Need Help?
          </h3>
          <p className="mt-1 text-xs text-blue-700 dark:text-blue-400">
            Contact our support team for assistance with your account.
          </p>
          <button className="mt-3 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
