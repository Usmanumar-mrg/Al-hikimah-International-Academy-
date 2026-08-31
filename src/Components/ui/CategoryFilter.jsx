function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="category-filter" role="group" aria-label="Filter by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            category === active
              ? 'category-filter__btn category-filter__btn--active'
              : 'category-filter__btn'
          }
          aria-pressed={category === active}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter