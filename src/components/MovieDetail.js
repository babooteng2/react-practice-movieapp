import PropTypes from "prop-types";

function MoiveDetail({
  medium_cover_image,
  title,
  rating,
  genres,
  year,
  runtime,
  description_full,
}) {
  return (
    <>
      <img src={medium_cover_image} alt={title} />
      <h1>{title}</h1>
      <div>rating : {rating}</div>
      <div>
        genres :
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
      <div>year : {year}</div>
      <div>runtime : {runtime}</div>
      <div>{description_full}</div>
    </>
  );
}

MoiveDetail.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  description_full: PropTypes.string.isRequired,
};

export default MoiveDetail;
