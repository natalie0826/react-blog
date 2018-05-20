import { Record, List } from 'immutable';
import Tag from './tag';

const Tags = Record({
  loadStatus: null,
  tags: List(Tag),
  error: null,
});

export default Tags;
