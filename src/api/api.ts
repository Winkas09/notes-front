const BASE_URL = 'http://localhost:3000';

export const fetchNotes = async () => {
    const response = await fetch(`${BASE_URL}/api/note`);
    return response.json();
};

export const fetchNoteById = async (id:string) => {
    const response = await fetch(`${BASE_URL}/api/note/${id}`);
    const data = await response.json();
    console.log("Fetched note data:", data); 
    return data;
};

export const fetchCategories = async () => {
    const response = await fetch(`${BASE_URL}/api/category`);
    return response.json();
};

export const fetchNotesByCategoryId = async (categoryId:string) => {
    const response = await fetch(`${BASE_URL}/api/category/${categoryId}`);
    const data = await response.json();
    console.log("Fetched notes by category data:", data);
    return data;
};

export const addNote = async (note) => {
    const response = await fetch(`${BASE_URL}/api/note`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: note.title, body: note.content }),
    });
    return response.json();
}

export const addCategory = async (category) => {
    const response = await fetch(`${BASE_URL}/api/category`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: category.title }),
    });
    return response.json();
}
export const deleteNote = async (id:string) => {
    const response = await fetch(`${BASE_URL}/api/note/${id}`, {
        method: 'DELETE',
    });
    return response.json();
}


