import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import React from 'react';
import './SaveIcon.css';

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Add to watchlist
  </Tooltip>
);

const SaveIcon = ({ onToggle, isInWatchList }) => (
  <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
    <div className={isInWatchList}>
      <i onClick={onToggle} className="fas fa-heart save-icon"></i>
    </div>
  </OverlayTrigger>
);

export default SaveIcon;
