import React, { Component } from "react";

interface DropdownProps {
  arrayOfData: Array<{ id: string | number; name: string }>;
  onSelectChange: (value: string) => void;
  name?: string;
  className?: string;
}

class Dropdown extends Component<DropdownProps> {
  constructor(props: DropdownProps) {
    super(props);
  }

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
  };

  render() {
    const { arrayOfData, name, className } = this.props;
    
    const options = arrayOfData.map((data) => (
      <option key={data.id} value={data.id}>
        {data.name}
      </option>
    ));

    return (
      <select
        name={name}
        className={className}
        onChange={this.handleChange}
      >
        <option value="">Select Item</option>
        {options}
      </select>
    );
  }
}

// Remove the propTypes definition
// Dropdown.propTypes = {
//   arrayOfData: PropTypes.array,
//   onSelectChange: PropTypes.func,
//   handleChange: PropTypes.func,
// };

export default Dropdown;
