import { useMutation, useQuery } from "@tanstack/react-query";
import { ChangeEventHandler, FormEvent, useState } from "react";
import { addNote, fetchCategories } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Category } from "../../types/types";

type FormType = {
  title: string;
  content: string;
  categoryId?: string;
};

const NoteForm = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: addNote,
    mutationKey: ["createNote"],
  });

  const [formData, setFormData] = useState<FormType>({
    title: "",
    content: "",
    categoryId: "",
  });

  const [validationErrors, setValidationErrors] = useState<Partial<FormType>>(
    {}
  );

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const errors: Partial<FormType> = {};
    if (!formData?.title?.trim() || formData.title.length <= 3) {
      errors.title = "Title must be longer than 3 characters.";
    }
    if (!formData?.content?.trim() || formData.content.length <= 3) {
      errors.content = "Content must be longer than 3 characters.";
    }
    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    mutate(formData, {
      onSuccess: () => {
        navigate("/notes");
      },
    });
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-300 dark:bg-gray-600 transition duration-500">
      <form
        className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Create Note
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
          />
          {validationErrors.title && (
            <p className="text-red-500 text-sm mt-1">
              {validationErrors.title}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
          />
          {validationErrors.content && (
            <p className="text-red-500 text-sm mt-1">
              {validationErrors.content}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 mb-2"
            htmlFor="categoryId"
          >
            Category
          </label>
          <select
            id="categoryId"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
          >
            <option value="">Select a category</option>
            {isCategoriesLoading ? (
              <option>Loading...</option>
            ) : (
              categories?.categories.map((category: Category) => (
                <option key={category._id} value={category._id}>
                  {category.title}
                </option>
              ))
            )}
          </select>
          {validationErrors.categoryId && (
            <p className="text-red-500 text-sm mt-1">
              {validationErrors.categoryId}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default NoteForm;
