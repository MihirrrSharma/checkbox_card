import React, { useState } from 'react';
import './checkbox.css'; 

const CheckboxComponent = () => {
  const [checked, setChecked] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
    page6: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setChecked((prevChecked) => ({
      ...prevChecked,
      [name]: checked,
    }));
  };

  const handleAllPagesChange = (event) => {
    const { checked } = event.target;
    setChecked({
      allPages: checked,
      page1: checked,
      page2: checked,
      page3: checked,
      page4: checked,
      page5: checked,
      page6: checked,
    });
  };

  const handleSubmit = () => {
    console.log('Checked items:', checked);
  };

  return (
    <div className="checkbox-container">
      <div className="checkbox-item all-pages">
        <label htmlFor="all-pages">All pages</label>
        <input
          type="checkbox"
          id="all-pages"
          name="allPages"
          checked={checked.allPages}
          onChange={handleAllPagesChange}
        />
      </div>
      <hr />
      <div className="scrollable-checkbox-list">
        <div className="checkbox-item">
          <label htmlFor="page1">Page 1</label>
          <input
            type="checkbox"
            id="page1"
            name="page1"
            checked={checked.page1}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="checkbox-item">
          <label htmlFor="page2">Page 2</label>
          <input
            type="checkbox"
            id="page2"
            name="page2"
            checked={checked.page2}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="checkbox-item">
          <label htmlFor="page3">Page 3</label>
          <input
            type="checkbox"
            id="page3"
            name="page3"
            checked={checked.page3}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="checkbox-item">
          <label htmlFor="page4">Page 4</label>
          <input
            type="checkbox"
            id="page4"
            name="page4"
            checked={checked.page4}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="checkbox-item">
          <label htmlFor="page5">Page 5</label>
          <input
            type="checkbox"
            id="page5"
            name="page5"
            checked={checked.page5}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="checkbox-item">
          <label htmlFor="page6">Page 6</label>
          <input
            type="checkbox"
            id="page6"
            name="page6"
            checked={checked.page6}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
      <hr />
      <button className="done-button" onClick={handleSubmit}>
        Done
      </button>
    </div>
  );
};

export default CheckboxComponent;
