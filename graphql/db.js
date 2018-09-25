export const people = [
  {
    id: "0",
    name: "fullyalive",
    age: 28,
    gender: "male"
  },
  {
    id: "1",
    name: "alwaysawake",
    age: 23,
    gender: "female"
  },
  {
    id: "2",
    name: "user1",
    age: 28,
    gender: "male"
  },
  {
    id: "3",
    name: "user2",
    age: 28,
    gender: "male"
  },
  {
    id: "4",
    name: "user3",
    age: 28,
    gender: "male"
  },
  {
    id: "5",
    name: "user4",
    age: 28,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => people.id === id);
  return filteredPeople[0];
};
