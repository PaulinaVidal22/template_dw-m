import React, { useState } from 'react';
import CardsSection from '../../components/cardsSection/cardsSection.jsx';
import AddButton from '../../components/addButton/addButton.jsx';
import AddModal from '../../components/addModal/addModal.jsx';
import useFetchItems from '../../hooks/useFetchItems.jsx';
import useDeleteItem from '../../hooks/useDeleteItem';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const { items, loading, error } = useFetchItems();
  const { removeItem, error: deleteError} = useDeleteItem();
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleShowDetails = (id) => {
    navigate(`/home/${id}`);
  };

  const handleDelete = async (id) => {
    await removeItem(id);
  };


    const handleAdd = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


  return (
    <>
      
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <h1 className='app-title'><strong>Title</strong></h1>
      </nav>

      <div className="main-content">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && (
          <>
            <AddButton handleAdd={handleAdd}></AddButton>
            <CardsSection items={items} onDelete={handleDelete} onShowDetails={handleShowDetails} />
            <AddModal isOpen={isModalOpen} onClose={closeModal} />
          </>
        )}
      </div>

    </>
  );
};

export default Home;
