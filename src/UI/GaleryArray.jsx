import Modal from "./Modal";
const GaleryArray = (props) => {
  const { arrayState, array, showModal, selectedImageIndex, closeModal } =
    props;
  return (
    <div className="image-gallery">
      {arrayState
        ? array.map((el, index) => (
            <img
              key={el.id}
              src={process.env.REACT_APP_API_URL + el.img}
              alt={el.name}
              onClick={() => showModal(index)}
            />
          ))
        : ""}
      {selectedImageIndex !== null && (
        <Modal
          images={array.map((el) => el.img)}
          selectedIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};
export default GaleryArray;
