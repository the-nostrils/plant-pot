const initialState = {
  currentUsername: 'Alex Boyd',
  userList: [
    {
      id: 1,
      name: 'Will',
      surname: 'Collins',
      email: 'wiilco@gmail.com',
      username: 'Will Collins',
      password: '111222',
      bio: '21 || Nature Lover'
    },
    {
      id: 2,
      name: 'Alex',
      surname: 'Boyd',
      email: 'AlexBoyd@gmail.com',
      username: 'Alex Boyd',
      password: '444555',
      bio: 'If you truly love nature, you will find beauty everywhere.'
    },
    {
      id: 3,
      name: 'Lori',
      surname: 'Elliot',
      email: 'elliotLori@gmail.com',
      username: 'Lori Elliot',
      password: '222333',
      bio: 'Colors are the smiles of nature.'
    },
    {
      id: 4,
      name: 'Nancy',
      surname: 'Murphy',
      email: 'NMurphy@gmail.com',
      username: 'Nancy Murphy',
      password: '333444',
      bio: '40 || Nature is the art of God'
    },
    {
      id: 5,
      name: 'Benjamin',
      surname: 'Watkins',
      email: 'BenjaWatk@gmail.com',
      username: 'Benjamin Watkins',
      password: '555666',
      bio: 'University of Pennsylvania || Art & Nature lover'
    },
    {
      id: 6,
      name: 'Joan',
      surname: 'Mendoza',
      email: 'JoanMendoza@gmail.com',
      username: 'Joan Mendoza',
      password: '666777',
      bio: 'Growing for healtier life! || Husband || Father'
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
