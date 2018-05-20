import { List } from 'immutable';
import uuidv4 from 'uuid/v4';

import { ACTION_TYPES } from '../constants/action-types';
import Tag from '../records/tag';
import Tags from '../records/tags';

const initialState = new Tags();

const getTags = tags =>
  tags.map(tag =>
    new Tag({
      id: uuidv4(),
      count: tag.count,
      name: tag.name
    })
  );

export default (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.LOAD_TAGS:
        return state.set('loadStatus', 'process');
      case ACTION_TYPES.LOAD_TAGS_SUCCESS:
        return state
                .set('loadStatus', 'finish')
                .set('tags', getTags(action.payload.tags))
      case ACTION_TYPES.LOAD_TAGS_FAILURE:
        return state.set( 'error', action.payload.error);
      default:
        return state;
    }
};
