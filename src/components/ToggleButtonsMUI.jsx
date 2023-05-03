import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonsMUI() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      onChange={handleAlignment}
      exclusive
      aria-label="text alignment"
      sx={{'display':'flex', 'flexDirection':'column'}}
    >
      <ToggleButton value="F" aria-label="left aligned">
        F
      </ToggleButton>
      <ToggleButton value="C" aria-label="centered">
        C
        </ToggleButton>
    </ToggleButtonGroup>
  );
}