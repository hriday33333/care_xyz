const servicesDetelesPage = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);

  return (
    <div>
      <h2>servicesDetelesPage : {slug}</h2>
    </div>
  );
};

export default servicesDetelesPage;
