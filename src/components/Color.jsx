import Circle from 'react-feather';

export default function Color ()
{
  const colorMap = ["#A63578", "teal", "#000000", "orange", "red", "green"];
  return (
    <div className="">
      { colorMap.map( ( color, index ) => (
        <Circle color={ color } fill={ color } key={ index } size={ 128 } />
      ) ) }
    </div>
  );
}
