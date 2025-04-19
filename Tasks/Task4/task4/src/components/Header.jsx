function Header({ onSearch }) {
    return (
        <header className="bg-green-300 text-white p-4">
            <h1 className="text-2xl">Notes App</h1>
            <input
                type="text"
                className="mt-2 p-2 rounded text-gray-700"
                placeholder="Search notes"
                onChange={(e) => onSearch(e.target.value)}
            />
        </header>
    );
}

export default Header;
