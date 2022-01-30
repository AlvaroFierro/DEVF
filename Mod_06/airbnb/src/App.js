import NavBar from "./components/NavBar";
import Poster from "./components/Poster";
import Card from "./components/Poster";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        title={item.title}
        country={item.country}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <NavBar />
      {/*<Poster />*/}
      {/*<Card />*/}
      {cards}
    </div>
  );
}

export default App;
