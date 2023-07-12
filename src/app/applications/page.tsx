async function getData() {
  const res = await fetch("http://localhost:3000/api/applications");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ExamplePage = async () => {
  // Render the data on the page
  const data = await getData();
  return (
    <div>
      <h1>API Response:</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default ExamplePage;
