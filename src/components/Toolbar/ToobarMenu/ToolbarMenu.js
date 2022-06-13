import { Toolbar, Link, Box } from '@mui/material';
import { image, color } from '../../../utils/constants';
import { NavMenu } from '../../Nav';

function ToolbarMenu() {
  return (
    <Toolbar
      variant='dense'
      sx={{
        display: 'flex',
        bgcolor: color.white,
        justifyContent: 'space-between'
      }}
    >
      <Link href='/'>
        <Box component='img' src={image.url} alt={image.alt} />
      </Link>
      <NavMenu />
    </Toolbar>
  );
}

export default ToolbarMenu;
