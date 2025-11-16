import Navbar from "./components/Navbar";

export default function App({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-20 px-4">
        {children}
      </main>
    </div>
    
  );
}