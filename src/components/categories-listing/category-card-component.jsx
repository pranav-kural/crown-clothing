const CategoryCard = ({ title, imageUrl }) => {
  return (
    <div className="category-card">
      <div
        className="category-card-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-card-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryCard;
