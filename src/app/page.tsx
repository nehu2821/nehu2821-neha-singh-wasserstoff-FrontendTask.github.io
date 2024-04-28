import HomePage from "./pages/HomePage";
import PartyPage from "./pages/PartyPage";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HomePage />
      <PartyPage />
    </div>
  );
}
