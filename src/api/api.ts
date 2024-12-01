const BASE_URL = 'http://localhost:3000';

export const fetchNotes = async () => {
    const response = await fetch(`${BASE_URL}/api/note`);
    return response.json();
};

export const fetchNoteById = async (id) => {
    const response = await fetch(`${BASE_URL}/api/note/${id}`);
    const data = await response.json();
    console.log("Fetched note data:", data); // Ensure this logs the correct structure
    return data;
};