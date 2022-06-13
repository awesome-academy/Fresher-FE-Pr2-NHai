import { Toolbar } from '@mui/material';
import SocialMedia from '../../SocialMedia/SocialMedia';
import { NavUser } from '../../Nav';
import { color } from '../../../utils/constants';

function ToolbarUser() {
  return (
    <Toolbar
      variant='dense'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        bgcolor: color.black,
        pr: 4
      }}
    >
      <SocialMedia />
      <NavUser />
    </Toolbar>
  );
}

export default ToolbarUser;
