import { random } from 'lodash';
import { Box, Link } from '@mui/material';
import { Google, Twitter, Pinterest, LinkedIn, Facebook } from '@mui/icons-material';
import { color } from '../../utils/constants';

function IconItems() {
  const icons = [Facebook, Google, Twitter, Pinterest, LinkedIn];

  return icons.map((Icon) => {
    return (
      <Box key={random(true)} component='li'>
        <Link href='/'>
          <Icon
            sx={{
              color: color.black,
              bgcolor: color.white,
              borderRadius: 1,
              fontSize: 'inherit'
            }}
          />
        </Link>
      </Box>
    );
  });
}

function SocialMedia() {
  return (
    <Box>
      <Box
        component='ul'
        sx={{
          listStyle: 'none',
          display: 'flex',
          columnGap: 1.5,
          fontSize: 'inherit',
          p: 0
        }}
      >
        <IconItems />
      </Box>
    </Box>
  );
}

export default SocialMedia;
