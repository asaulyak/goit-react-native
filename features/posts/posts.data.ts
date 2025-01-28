import { TPost } from '@/features/posts/types';
import { nanoid } from 'nanoid/non-secure';

export const user = {
  id: nanoid(),
  avatar: `https://www.gravatar.com/avatar/example@example.com?d=identicon`,
  name: 'Natali Romanova',
  email: 'example@example.com'
};

export const posts: TPost[] = [
  {
    id: nanoid(),
    author: user,
    title: 'Forest',
    location: 'Odesa, Ukraine',
    image: 'https://www.sciencefriday.com/wp-content/uploads/2021/12/Forest-trees.jpg?resize=400,243',
    comments: [
      {
        id: nanoid(),
        author: {
          id: nanoid(),
          name: 'Eugene',
          email: 'eugene@example.com',
          avatar: 'https://www.gravatar.com/avatar/eugene@example.com?d=identicon'
        },
        text: 'I was there',
        date: new Date().toString()
      },
      {
        id: nanoid(),
        author: user,
        text: 'Dune was filmed near this place',
        date: new Date().toString()
      }
    ],
    likesNumber: 0
  },
  {
    id: nanoid(),
    author: user,
    title: 'Sea',
    location: 'Kyiv, Ukraine',
    image: 'https://siwi.org/wp-content/uploads/2023/06/s2s_world-oceans-day_qa.jpg.webp',
    comments: [
      {
        id: nanoid(),
        author: user,
        text: 'Nice view',
        date: new Date().toString()
      }
    ],
    likesNumber: 0
  },
  {
    id: nanoid(),
    author: user,
    title: 'Desert',
    location: 'Mexico, Mexico',
    image: 'https://i.natgeofe.com/n/ea531fad-a6e1-41e1-b3fb-fab828243865/309.jpg?w=1280&h=961',
    comments: [
      {
        id: nanoid(),
        author: {
          id: nanoid(),
          name: 'Eugene',
          email: 'eugene@example.com',
          avatar: 'https://www.gravatar.com/avatar/eugene@example.com?d=identicon'
        },
        text: 'I was there',
        date: new Date().toString()
      },
      {
        id: nanoid(),
        author: user,
        text: 'Dune was filmed near this place',
        date: new Date().toString()
      }
    ],
    likesNumber: 10
  }
];
