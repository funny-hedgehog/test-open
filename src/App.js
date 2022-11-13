import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import './App.css';

const columns = [
  {
    field: 'title',
    headerName: 'Title',
    type: 'string',
    width: 160,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'string',
    width: 160,
  },
];

const rows = [
  { id: 1, title: 'Jon', age: 35, date: '2022-01-05' },
  { id: 2, title: 'Cersei', age: 42, date: '2022-01-04' },
  { id: 3, title: 'Jaime', age: 45, date: '2021-01-03' },
  { id: 4, title: 'Arya', age: 16, date: '2021-01-06' },
  { id: 5, title: 'Solomon', age: 18, date: '2020-01-05' },
  { id: 6, title: 'Robert', age: 20, date: '2022-04-05' },
  { id: 7, title: 'Antony', age: 16, date: '2022-01-05' },
];

function App() {
  const [state, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div className="App">
      <Box
          mt={2}
          sx={{ minWidth: 120 }}
      >
        <Button variant="contained">some button</Button>
      </Box>
      <Box
          mt={2}
          sx={{ minWidth: 120 }}
      >
        <Checkbox color="default"  label="some checkbox"/>
      </Box>
      <Box
          mt={2}
          component="form"
          noValidate
          autoComplete="off"
      >
        <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            placeholder="Placeholder"
        />
      </Box>
      <Box
          sx={{
            width: 300,
            margin: '20px auto'
          }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              label="Some state"
              onChange={handleChange}
          >
            <MenuItem value={10}>state1</MenuItem>
            <MenuItem value={20}>state2</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
          mt={2}
          sx={{
            height: 378,
            width: '100%'
          }}
      >
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
      </Box>
    </div>
  );
}

export default App;
