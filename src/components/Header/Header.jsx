// ------------------------------------------MUI------------------------
// Header
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// search 
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import React, {useEffect} from 'react'
import * as omdbService from './../../services/omdbapi.js'

// ------------------------------------------MUI Variables------------------------
// search
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
}));



function Header({handleSubmit, handleChange, apiSearch, setSearch}){

    useEffect(() => {
        if(apiSearch.searchUrl) {
            omdbService.search(apiSearch.searchUrl)
            setSearch({...apiSearch, searchUrl: ''})
            // reset searchurl after fetching for conditional
        }
    },[apiSearch])
    // 2nd parameter is to prevent an infite chain of updates when using useState/setSearch in useEffect with useEffect dependancy list

    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            MovieMoose
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='searchTitle' 
                placeholder='search movie' 
                value={apiSearch.searchTitle}
                onChange={handleChange}>
            </input>
            <button type='submit'>Submit</button>
        </form>
        </Toolbar>
      </AppBar>
    </Box>
    );
}

export default Header