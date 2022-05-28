export const getResources = () => {
  return fetch('/api/resource', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};


export const createProject=(projectData)=>{
  return fetch('/api/project', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),

    
  });
}

