import { Box, Link } from '@mui/material';
import { random } from 'lodash';
import { menuData, color } from '../../../utils/constants';

function getBgcolor(url) {
  return url === '/FAQ' ? color.black : color.orange;
}

function MenuItems() {
  return menuData.menuUser.map(({ text, url }) => {
    return (
      <Box
        component='li'
        key={random(true)}
        sx={{
          alignSelf: 'stretch',
          listStyle: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Link
          href={url}
          sx={{
            textDecoration: 'none',
            color: color.white,
            bgcolor: getBgcolor(url),
            fontWeight: 200,
            borderRadius: 1,
            p: 0.5,
            fontSize: '18px'
          }}
        >
          {text}
        </Link>
      </Box>
    );
  });
}

function NavUser() {
  return (
    <Box
      component='nav'
      sx={{
        display: 'flex',
        alignSelf: 'stretch',
        pr: 2
      }}
    >
      <Box
        component='ul'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
          columnGap: 2,
          p: 0
        }}
      >
        <MenuItems />
      </Box>
    </Box>
  );
}

export default NavUser;
