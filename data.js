const users = [
    {
        id: '1',
        firstName: 'Ashikul',
        lastName: 'Islam',
        gender: 'male',
        phone: '023902',
        email: 'ashik@gg.com',
        posts: ['1', '2']
    },
    {
        id: '2',
        firstName: 'Oyasiul',
        lastName: 'Islam',
        gender: 'male',
        phone: '023902',
        email: 'oya@gg.com',
        posts: ['3']
    }
];

const posts = [
    {
        id: '1',
        title: 'JS',
        description: 'fifa tournament all ',
        user: '1'
    },
    {
        id: '2',
        title: 'Python',
        description: 'fifa tournament all ',
        user: '1'
    },
    {
        id: '3',
        title: 'Java',
        description: 'fifa tournament all ',
        user: '2'
    }
];

module.exports = {
    users,
    posts
};
