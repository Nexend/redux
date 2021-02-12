import { connect } from 'react-redux';

import { availableOptionsSelector } from './options.selectors';
import { toggleOption } from './options.actions';

import Options from './Options';

const mapState = state => {
  return {
    options: availableOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
