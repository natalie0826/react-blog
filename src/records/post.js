import { Record } from 'immutable';

const Post = Record({
    id: null,
    title: null,
    subtitle: null,
    text: null,
    excerpt: null,
    imageUrl: null,
    comments: null,
    tags: null,
    category: null,
    author: null,
    authorId: null,
    authorImg: null,
    dateCreate: null,
    dateUpdate: null,
});

export default Post;
