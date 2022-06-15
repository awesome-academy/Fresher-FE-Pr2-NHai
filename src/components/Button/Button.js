import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

function ButtonApp({ children, cssConfig }) {
  const { cssListItemButton, cssListItemIcon, cssListItemText } = cssConfig;

  return (
    <ListItemButton {...cssListItemButton}>
      <ListItemIcon {...cssListItemIcon}>{children}</ListItemIcon>
      <ListItemText {...cssListItemText} />
    </ListItemButton>
  );
}

ButtonApp.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  cssConfig: PropTypes.oneOfType([PropTypes.any])
};

export default ButtonApp;
