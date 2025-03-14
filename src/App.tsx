import AppRouter from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
      <Navbar />
      <main className="flex-grow pt-6">
        <AppRouter />
      </main>
      <Footer />
      <ToastContainer /> {/* Tambahkan agar toast bisa muncul */}
    </div>
  );
}

export default App;
