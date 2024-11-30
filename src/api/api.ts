const BASE_URL = 'http://localhost:3000';

export const fetchNotes = async () => {
    const response = await fetch(`${BASE_URL}/api/note`);
    return response.json();
};