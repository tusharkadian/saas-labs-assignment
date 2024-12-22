export const fetchProjects = async () => {
  try {
    const response = await fetch('/data/frontend-assignment.json');
    if (!response.status === 200) {
      throw new Error('Failed to fetch projects!');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
