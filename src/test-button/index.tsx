'use client';

const TestButton = () => {
  const onClick = async () => {
    const { addressFromHexOrBech32 } = await import('@lucid-evolution/lucid');
    const address = addressFromHexOrBech32(
      'addr1qx2vnfzpeuvdcym8y7v5qnz2mc289ue6tfr0xynyaqnm0rhuanngtqdu53qy0c0zxxed8hdnmkl66l0uvw68q8elp4nsxyap30'
    ).to_bech32(undefined);
    console.log({ address });
  };

  return (
    <button className='p-3 bg-red-500 text-white' onClick={onClick}>
      Here
    </button>
  );
};

export default TestButton;
