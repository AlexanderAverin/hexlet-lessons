import yup from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];

const getInvalidBooks = (books) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number(),
    link: yup.string().min(1).url(),
    genre: yup.string().oneOf(genres),
  });

  return books.flatMap((book) => (!schema.isValidSync(book) ? book : []));
};

console.log(getInvalidBooks([
  { name: 'book', author: 'author' },
  { author: 'author 2' },
]));
