export const categories = [
    {
        id: 1,
        name: "Ruth",
    },
    {
        id: 2,
        name: "Teshome", 
    },
    {
        id: 3,
        name: "Brian", 
    }, 
    {
        id: 4,
        name: "Amy",
    }, 
    {
        id: 5,
        name: "Mia",
    },
];

let nextId = categories.length;

export function getNextId() {
  nextId++;
  return nextId;
}

export function resetDb() {
  categories.length = 0;
  nextId = 0;
}