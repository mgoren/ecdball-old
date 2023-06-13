import { Typography, Box, Divider } from '@mui/material';
import { StyledPaper } from 'components/Layout/SharedStyles';

export default function Fragrance() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">
      <Typography variant="h4" gutterBottom>
        <p>
          Portland English Country Dance Ball<br />
          A Fragrance-Free Event
        </p>
      </Typography>

      <Divider component="hr" sx={{borderBottomWidth: 4, mt: 4, mb: 4}}/>

      <Box align="left">
      
        <Typography variant="h6" gutterBottom>
          A Healthy Environment for All
        </Typography>

        <Box gutterBottom>
        To provide a safe, healthy and pleasurable evening of dance for all, 
        we ask you not to wear scented products to any of the dance events 
        during the weekend. If you are chemically sensitive, please understand 
        that we strive to facilitate a fragrance-free event.
        </Box>

        <Typography variant="h6" mt={3} gutterBottom>
          Why Fragrance-Free?
        </Typography>

        <Box gutterBottom>
        Chemical sensitivity is a health issue for some members of the dance 
        community, not a personal preference.  Some people simply cannot 
        tolerate even small amounts of chemicals in perfumes, after shave 
        lotion, fabric softeners, hand lotions, dry cleaning fluids and many 
        other personal products such as dandruff shampoo, hair spray, and 
        other products containing fragrances or various petrochemical products. 
        These chemicals can act as respiratory irritants, as cardiac stimulants 
        (skyrocketing blood pressure, palpitations), and as neurotoxins 
        (blurred vision, loss of equilibrium). The effects can be cumulative 
        and each exposure can lower the sensitivity threshold so that people 
        react to more substances at lower doses and with more severe symptoms. 
        Exposure to even small amounts can cause these symptoms and it can be 
        especially dangerous while dancing if dancers collapse or become 
        unconscious.
        </Box>

        <Typography variant="h6" mt={3} gutterBottom>
          How to be Fragrance-Free?
        </Typography>

        <Box gutterBottom>
          The ball provides a special challenge as many of us are used to 
          "sprucing up" with colognes, perfumes, hair spray, and after shave. 
          Fancy clothes come out of storage smelling of mothballs or perfume. 
          Ball costumes are sent to the dry cleaners.  Please be aware of the 
          issue and check your products for fragrance.  Please do your best 
          to be Fragrance-Free. If you suffer from chemical sensitivity, 
          please come prepared to protect yourself against exposure.

          <p>
          For the ball weekend, please:
          </p>

          <ul>
            <li>Save perfumes, colognes and aftershave for another occasion</li>
            <li>Forego using dandruff shampoo or hair spray - even unscented varieties</li>
            <li>Plan ahead so that you can thoroughly air any clothing that has been 
              stored in mothballs, that has recently returned from the dry cleaners, 
              or that has been worn previously with perfume</li>
          </ul>
        </Box>

        <Typography variant="h6" mt={3} gutterBottom>
        A list of fragrance-free personal products
        </Typography>

        <Box gutterBottom>
        Please consider bringing other fragrance-free personal products to use 
        for the weekend.  This will really make a difference. They can easily 
        be found at any natural food store or specialty stores like Trader 
        Joe's or New Seasons, as well as local stores like Fred Meyer.

        <p>
        Here are some sample brands and products we've used:
        </p>

        <ul>
          <li><strong>Deodorant:</strong> Tom's of Maine Unscented, 
          The Crystal, Le Stick, Liken, Almay Fragrance-Free, Arm & Hammer 
          Unscented</li>
          <li><strong>Shampoo and Conditioner:</strong> Pure Essentials, 
          Organic Essence, KMS Fragrance-Free</li>
          <li><strong>Hair Gel:</strong> KMS, Aloe Vera 80</li>
          <li><strong>Shaving Cream:</strong> Noxzema Fragrance-Free, 
          Kiss My Face, English Leather Fragrance-Free</li>
          <li><strong>Bar Soap:</strong> Pure & Natural Unscented Glycerin Soap</li>
          <li><strong>Laundry Soap:</strong> Arm & Hammer Fragrance-Free, All 
          Free & Clear, Country Save, Ecover</li>
          <li><strong>Lip Balm:</strong> Look for beeswax-based (non-petroleum), 
          unscented varieties</li>
          <li><strong>Body Powder:</strong> Use baking soda &/or cornstarch</li>
          <li><strong>Insect Repellent:</strong> Look for DEET-free products, 
          such as Shoo! or Bite Blocker</li>
        </ul>
        <p>
        Thanks for your continuing efforts to make our Portland ball weekend 
        safe, healthy and great fun for all.
        </p>
        </Box>

      </Box>
    </StyledPaper>
  );
}
