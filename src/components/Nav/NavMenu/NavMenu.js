import { Box, Link } from '@mui/material';
import { menuData, color } from '../../../utils/constants';
import {random} from 'lodash';

function MenuItems() {
  return menuData.menuNav.map(({ text, url }) => {
    return (
      <Box component='li' key={ random(true) }  sx={{ alignSelf: 'stretch', listStyle: 'none' }}>
        <Link
          href={url}
          sx={{
            textDecoration: 'none',
            color: color.black,
            fontWeight: 700,
            px: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            '&:hover': {
              bgcolor: color.orange,
              color: color.white,
              borderBottom: `4px solid ${color.orange2}`
            }
          }}
        >
          {text}
        </Link>
      </Box>
    );
  });
}

function NavMenu() {
  return (
    <Box
      component='nav'
      sx={{
        display: 'flex',
        alignSelf: 'stretch'
      }}
    >
      <Box
        component='ul'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
          columnGap: 1,
          m: 0
        }}
      >
        <MenuItems />
      </Box>
    </Box>
  );
}

export default NavMenu;
