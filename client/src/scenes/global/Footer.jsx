import { Box, Typography, useTheme } from '@mui/material';
import { shades } from '../../theme';

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box
      width='80%'
      margin='auto'
      display='flex'
      justifyContent='space-between'
      flexWrap='wrap'
      rowGap='30px'
      columnGap='clamp(20px, 30px, 40px)'
    >
      <Box width='clamp(20%, 30%, 40%)'>
        <Typography
          variant='h4'
          fontWeight='bold'
          mb='30px'
          color={shades.secondary[500]}
        >
          ECOMMER
        </Typography>
        <div>
          Morbi sociosqu phasellus mauris senectus dui dis aptent leo orci nisl.
          Cubilia cursus vehicula primis mollis eu porttitor.
          Mollis ex vivamus blandit proin natoque si quam tincidunt neque.
          Et morbi lectus luctus maximus nisl.
        </div>
      </Box>
      <Box>
        <Typography variant='h4' fontWeight='bold' mb='30px'>
          About Us
        </Typography>
        <Typography mb='30px'>Careers</Typography>
        <Typography mb='30px'>Our Stores</Typography>
        <Typography mb='30px'>Terms & Conditions</Typography>
        <Typography mb='30px'>Privacy Policy</Typography>
      </Box>
      <Box>
        <Typography variant='h4' fontWeight='bold' mb='30px'>
          Customer Care
        </Typography>
        <Typography mb='30px'>Help Center</Typography>
        <Typography mb='30px'>Track Your Order</Typography>
        <Typography mb='30px'>Corporate & Bulk Purchasing</Typography>
        <Typography mb='30px'>Returns & Refunds</Typography>
      </Box>
      <Box width='clamp(20%, 25%, 30%)'>
        <Typography variant='h4' fontWeight='bold' mb='30px'>
          Contact Us
        </Typography>
        <Typography mb='30px'>50 north Whatever Blvd, Washington, DC 10501</Typography>
        <Typography mb='30px'>Email: somethinglike@gmail.com</Typography>
        <Typography mb='30px'>+7 (928) 333-48-58</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
