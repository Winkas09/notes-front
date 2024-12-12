import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./theme/ThemeContext";
import SearchResultsPage from "./Pages/SearchResultsPage";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { useContext } from "react";

const queryClient = new QueryClient({});

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/notes"
              element={
                <PrivateRoute>
                  <NotesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/note/:id"
              element={
                <PrivateRoute>
                  <NotePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/create-note"
              element={
                <PrivateRoute>
                  <NoteForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit-note/:id"
              element={
                <PrivateRoute>
                  <EditNoteForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/categories"
              element={
                <PrivateRoute>
                  <CategoriesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/create-category"
              element={
                <PrivateRoute>
                  <CategoryForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <PrivateRoute>
                  <CategoryPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/favorites"
              element={
                <PrivateRoute>
                  <FavoritePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/search"
              element={
                <PrivateRoute>
                  <SearchResultsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
