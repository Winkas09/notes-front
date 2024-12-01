import imageUrl from "../utils/utils";
const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div style={{ paddingTop: "15vh" }}>
        <h1 className="text-4xl font-bold text-black text-center">
          Welcome to the Home Page
        </h1>
        <p className="text-lg font-semibold p-2 m-4 text-gray-700">
          You can create your own notes for all your tasks and categorize them
          as you like.
          <br />
          You can also mark your favorite notes and access them easily.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
