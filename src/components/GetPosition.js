export const GetPosition = ({ mousePosition }) => {
  return (
    <>
      <p className="mb-4">Click Anywhere in this Container to Log Current Mouse Position</p>
      <p>X : {mousePosition[0]}, Y: {mousePosition[1]}</p>
    </>
  );
}