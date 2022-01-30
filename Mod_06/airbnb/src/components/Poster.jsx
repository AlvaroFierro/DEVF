import collage from "../img/cards-photos.png";
const Poster = () => {
  return (
    <section>
      <img className="poster--collage" src={collage} />
      <h1 className="poster--title">Online Experiences</h1>
      <p className="poster--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint
        nemo aspernatur! Quia, sit nemo, laudantium mollitia ab velit sunt modi
        eveniet doloremque voluptatem minima, quos eos molestiae labore quae.{" "}
      </p>
    </section>
  );
};

export default Poster;
