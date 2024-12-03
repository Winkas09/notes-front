import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./utils/Navbar";
import NotesPage from "./Pages/NotesPage";
import CategoriesPage from "./Pages/CategoriesPage";
import FavoritePage from "./Pages/FavoritePage";
import HomePage from "./Pages/HomePage";
import NotePage from "./Pages/NotePage";
import CategoryPage from "./Pages/CategoryPage";
import NoteForm from "./components/notes/NoteForm";
import CategoryForm from "./components/categories/CategoryForm";
import EditNoteForm from "./components/notes/EditNoteForm";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ThemeProvider } from "./theme/ThemeContext";
import SearchResultsPage from "./Pages/SearchResultsPage";

const queryClient = new QueryClient({});

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/note/:id" element={<NotePage />} />
          <Route path="/create-note" element={<NoteForm />} />
          <Route path="/edit-note/:id" element={<EditNoteForm />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/create-category" element={<CategoryForm />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
