function Rainbow() {
  const rainbowStyle = {
    background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
    color: 'white',
  };

  return (
    <div style={rainbowStyle}>
      <h1>Rainbow</h1>
    </div>
  );
}

export default Rainbow;