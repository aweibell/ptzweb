import { useState } from 'react';

const Preset = ({preset}) => {
  return (
      <div className={'preset-number'}><span>{preset}</span></div>
  )
}

const Position = ({position, selectedPreset, selectPreset}) => {

  const [pressed, setPressed] = useState(false);
  const isSelected = selectedPreset === position.preset;
  const handleClick = (e, preset) => {
      e.preventDefault();
    setPressed(true);
    setTimeout(() => setPressed(false), 1000);
    selectPreset(preset)
  }

  return (
    <div
      className={`${pressed ? 'position pressed' : isSelected ? 'position selected' : 'position'}`}
      key={position.preset}
      onClick={(e) => handleClick(e, position.preset)}
    >
      <h2>{position.name || position.preset}</h2>
      <Preset preset={position.preset} />
    </div>
  );
}

export default Position;
