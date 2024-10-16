import React, {useState} from 'react';
import useFetchItem from '../../hooks/useFetchItem';
import GoBackButton from '../../components/goBackButton/goBackButton';
import EditionButton from '../../components/editionButton/editionButton';
import './ItemDetails.css'

const ItemDetails = () => {
  const { item, loading, error } = useFetchItem();

  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleEdit = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };
  

  return (
    <>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!item && <div>Item not found</div>}
       {!loading && !error && item && (
          <div className='item-details'>

            <div className='buttons'>
              <GoBackButton></GoBackButton>
              <EditionButton handleEdit={handleEdit}></EditionButton>
            </div>
                

            {/* revisar los item. properties que se cargan ... */}

            <div className="item-info">
              <h2 className='item-name title-is-4'>{item.title}</h2>
              <p className='item-description'>
                <strong className='description-field title-is-6'>Description: </strong>
                {item.description}
              </p>

              <p className='item-fieldA'>
                <strong className='A-field title-is-6'>Number:</strong> 
                {item.number}
              </p>

              <p className='item-fieldB'>
                <strong className='B-field title-is-6'>Categories: </strong>
                {item.categories}
              </p>

              <p className='item-date'>
                <strong className='date-field title-is-6'>Date: </strong>
                {item.date}
              </p> 

              <p className='item-option'>
                <strong className='option-field title-is-6'>Option: </strong>
                {item.option}
              </p> 

              <p className='item-multi'>
                <strong className='multi-field title-is-6'>Multiselect: </strong>
                {item.multiselect}
              </p> 

              <p className='item-range'>
                <strong className='range-field title-is-6'>Range: </strong>
                {item.range}
              </p> 

              <p className='item-tof'>
                <strong className='tof-field title-is-6'>Select: </strong>
                {item.trueOrFalse}
              </p> 

              <p className='item-textarea'>
                <strong className='textarea-field title-is-6'>Comments: </strong>
                {item.textarea}
              </p> 

            </div>
              <EditModal
                isOpen={isEditModalOpen}
                onClose={closeEditModal}
                item={item}
              />
          </div>
         )} 
    </>
  );
};

export default ItemDetails;
