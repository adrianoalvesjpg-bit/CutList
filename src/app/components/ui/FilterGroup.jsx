import React, { useState } from 'react'
import StFilterGroup from '../../style/ui/FilterGroup.module.css'

export default function FilterGroup({ data }) {
  const listCheckboxes = data.filter.map((filter, index) => ({
    id: index,
    value: filter,
  }));

  const [selected, setSelected] = useState([]);

  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleCheckboxChange = (e) => {
    const { checked, value, id } = e.target;

    if (id === "all") {
      if (checked) {
        setSelected(data.filter);
      } else {
        setSelected([]);
      }
    } else {
      if (checked) {
        setSelected((prev) => [...prev, value]);
      } else {
        setSelected((prev) => prev.filter((v) => v !== value));
      }
    }
  };

  return (
    <div className={StFilterGroup.main}>
      <button className={StFilterGroup.category}>{capitalize(data.name)}</button>
        <div className={StFilterGroup.flex_div}>
          <input
            type="checkbox"
            id="all"
            name="all"
            checked={selected.length === data.filter.length}
            onChange={handleCheckboxChange}
            className={StFilterGroup.checkbox_all}
          />
          <label htmlFor="all" className={StFilterGroup.checkbox_label}>
            Selecionar Todos
          </label>
        </div>

        {listCheckboxes.map((item) => (
          <div key={item.id} className={StFilterGroup.flex_div}>
            <input
              type="checkbox"
              id={item.id}
              name="options"
              value={item.value}
              checked={selected.includes(item.value)}
              onChange={handleCheckboxChange}
              className={StFilterGroup.checkbox}
            />
            <label htmlFor={item.id} className={StFilterGroup.checkbox_label}>
              {capitalize(item.value)}
            </label>
          </div>
        ))}
    </div>
  );
}
