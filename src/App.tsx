import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import NotesPage from "./Pages/NotesPage";
import CategoryPage from "./Pages/CategoryPage";
import FavoritePage from "./Pages/FavoritePage";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
