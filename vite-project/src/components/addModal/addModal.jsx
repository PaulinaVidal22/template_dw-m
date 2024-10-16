import React, { useState } from 'react';
import useAddItem from '../../hooks/useAddItem';
import SubmitButton from '../submitButton/submitButton';
import CancelButton from '../cancelButton/cancelButton';
import './addModal.css';

const AddModal = ({ isOpen, onClose }) => {
  const { createItem, error } = useAddItem();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    number: '',
    categories: '',
    date: '',
    option: '',
    multiselect: [],  
    range: 5,  
    trueOrFalse: '',  
    textarea: '', 
  });
  


  const handleChange = (e) => {
    const { title, value, type, checked } = e.target;
  
    if (type === 'checkbox') {

      setFormData(prevState => ({
        ...prevState,
        multiselect: checked
          ? [...prevState.multiselect, value]
          : prevState.multiselect.filter(select => select !== value)
      }));

    } else if (type === 'radio') {
      setFormData({
        ...formData,
        [title]: value
      });

    } else {
      setFormData({
        ...formData,
        [title]: value
      });
    }
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      number: parseInt(formData.number),
      categories: formData.categories,
      date: formData.date,
      option: formData.option,
      multiselect: formData.multiselect,  
      range: formData.range,  
      trueOrFalse: formData.trueOrFalse, 
      textarea: formData.textarea,  
    };
    await createItem(newItem);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='modal-title'>Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" title="title" value={formData.title} onChange={handleChange} required />
          </div>

          <div>
            <label>Description</label>
            <input title="description" value={formData.description} onChange={handleChange} required />
          </div>

          <div>
            <label>Quantity</label>
            <input type="number" title="number" value={formData.number} onChange={handleChange} required />
          </div>

          <div>
            <label>Categories (separated by '/')</label>
            <input type="text" title="categories" value={formData.categories} onChange={handleChange} required />
          </div>

            <div>
                <label>Date</label>
                <input type="date" title="date" value={formData.date} onChange={handleChange} required />
            </div>
        
            <div>
                <label>Option</label>
                <select title="option" value={formData.option} onChange={handleChange} required>
                <option value="" disabled>Select an option</option>
                <option value="option1">option 1</option>
                <option value="option2">option 2</option>
                <option value="option3">option 3</option>
                </select>
            </div>

            <div className="checkbox-group">
                <label>Multi-select (choose all that apply)</label>
                <div>
                <label>
                    <input type="checkbox" title="multiselect" value="a" onChange={handleChange} /> A
                </label>
                <label>
                    <input type="checkbox" title="multiselect" value="b" onChange={handleChange} /> B
                </label>
                <label>
                    <input type="checkbox" title="multiselect" value="c" onChange={handleChange} /> C
                </label>
                </div>
            </div>

            <div  className="radio-group">
                <label>Select</label>
                
                <div>
                <label>
                    <input type="radio" title="trueOrFalse" value="Option 1" onChange={handleChange} /> Option 1
                </label>
                <label>
                    <input type="radio" title="trueOrFalse" value="Option 2" onChange={handleChange} /> Option 2
                </label>
                </div>
            </div>

            <div>
                <label>Comments</label>
                <textarea 
                title="textarea" 
                value={formData.textarea} 
                onChange={handleChange}
                className="textarea" />
            </div>

            <div>
                <label>Range</label>
                <input type="range" title="range" min="1" max="10" value={formData.range} onChange={handleChange} className="range-input" />
                <span className="range-value" >{formData.range}</span>
            </div>

          <SubmitButton handleSubmit={handleSubmit}></SubmitButton>
          <CancelButton onClose={onClose}></CancelButton>
        </form>

        {error && <p className="error-message">{error.message}</p>}

      </div>
    </div>
  );
};

export default AddModal;
