import React, { useState } from 'react';
import {Box, Container} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import GenderFilter from './GenderFilter';
import ColorFilter from './ColorFilter';
import PriceFilter from './PriceFilter';
import TypeFilter from './TypeFilter';
import { Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useFilter } from '../../contexts/filter-context';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import './Filter.css';

const Filter = () => {
  const { clearAllFilters } = useFilter();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleClearAll = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const radios = document.querySelectorAll('input[type="radio"]');

  
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  
    radios.forEach((radio) => {
      radio.checked = false;
    });
  
    clearAllFilters();
};

  return (
    <Container>
      {isMobile ? (
        <div>
          <Button
            onClick={toggleDrawer}
            endIcon={isDrawerOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            style={{ width: '100%', textTransform: 'none', justifyContent: 'flex-start' }}
          >
            <FilterAltIcon /> Filter
          </Button>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer}
            variant="temporary"
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Box sx={{width: '50vw'}} p={2}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">Filters</Typography>
                <Button variant="outlined" color="secondary" onClick={handleClearAll}>
                  Clear all
                </Button>
              </div>
              <GenderFilter />
              <ColorFilter />
              <TypeFilter />
              <PriceFilter />
            </Box>
          </Drawer>
        </div>
      ) : (
        <div style={{width:"240px"}}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Filters</Typography>
          <Button variant="outlined" color="secondary" onClick={handleClearAll}>
            Clear all
          </Button>
        </div>
          <GenderFilter />
          <ColorFilter />
          <TypeFilter />
          <PriceFilter />
          </div>

      )}
    </Container>
  );
};

export default Filter;
