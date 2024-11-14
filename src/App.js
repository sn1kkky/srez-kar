import React, { useState } from "react";
import Header from "./Header";
import AccordionMenu from "./AccordionMenu";
import Catalog from "./Catalog";
import OrderModal from "./OrderModal";
import { carpets } from "./data"; 

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCarpet, setSelectedCarpet] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredCarpets = carpets.filter(
    (carpet) =>
      (carpet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        carpet.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory ? carpet.category === selectedCategory : true)
  );

  const handleSearch = (term) => setSearchTerm(term);

  const handleCategoryChange = (category) => setSelectedCategory(category);

  const handleDetailsClick = (id) => {
    const carpet = carpets.find((carpet) => carpet.id === id);
    setSelectedCarpet(carpet);
  };

  const handleOrderClick = (carpet) => {
    setSelectedCarpet(carpet);
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <AccordionMenu
        categories={[
          "Ковры с рисунком",
          "Гостиные ковры",
          "Шерстяные ковры",
          "Детские ковры",
          "Длинноворсовые ковры",
        ]}
        onCategoryChange={handleCategoryChange}
      />
      <Catalog
        carpets={filteredCarpets}
        onDetailsClick={handleDetailsClick}
        onOrderClick={handleOrderClick}
      />
      {selectedCarpet && (
        <OrderModal
          open={modalOpen}
          onClose={handleCloseModal}
          carpet={selectedCarpet}
        />
      )}
    </div>
  );
};

export default App;
