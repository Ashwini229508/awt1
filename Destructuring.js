const user = {
    id: 1,
    profile: {
      name: 'Alice',
      age: 25,
    },
  };
  
  const {
    profile: { name, age },
  } = user;
  console.log(name); 
  console.log(age);  
  