export const Navbar = ({ onCourseChange, onSearch, onSort }) => {
    const handleCourseClick = (selectedCourse) => {
        if (selectedCourse === "HOME") {
            window.location.reload();
        } else {
            onCourseChange(selectedCourse);
        }
    };

    return (
        <header className="navbar">
            <div className="filters">
                {["HOME", "TALLER", "TICS", "TECNOLOGÍA"].map(courseName => (
                    <button
                        key={courseName}
                        onClick={() => handleCourseClick(courseName)}
                        className="filter-button"
                    >
                        {courseName}
                    </button>
                ))}
            </div>
            <div className="filters">
                <input
                    type="text"
                    placeholder="Buscar publicación..."
                    onChange={(event) => onSearch(event.target.value)}
                    className="search-input"
                />
                <select
                    onChange={(event) => onSort(event.target.value)}
                    className="sort-select"
                >
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
            </div>
        </header>
    );
};