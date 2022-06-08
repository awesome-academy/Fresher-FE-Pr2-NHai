import { AppBar } from '@mui/material';
import { ToolbarMenu, ToolbarUser } from '../../../Toolbar';

function NavBar() {
  return (
    <AppBar position='static' sx={{ bgcolor: '#fff' }}>
      <ToolbarUser />
      <ToolbarMenu />
    </AppBar>
  );
}

export default NavBar;
