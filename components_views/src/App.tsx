import React, { useState } from 'react';
import './App.css';
import DashboardLayout from '../../components_views/src/components/DashboardLayout';
import Carousel from '../../components_views/src/components/Carousel';
import Table, { Column } from './components/Table';
import GridContainer from '../../components_views/src/components/GridContainer';
import ExpandableItemContainer from '../../components_views/src/components/ExpandableItemContainer';
import Button from '../../components_views/src/components/Buttons/Button';
import Button2 from './components/Buttons/Buttons2';
import Input from '../../components_views/src/components/Input';
import Dropdown from './components/Dropdown';
import Checkbox from '../../components_views/src/components/InputControls/Checkbox';
import File from '../../components_views/src/components/InputControls/File';
import Radio from './components/InputControls/Radio';
import Text from '../../components_views/src/components/InputControls/Text';
import Image from '../../components_views/src/components/Image';
import CircularProgress from '../../components_views/src/components/Loading/CircularProgress';
import Modal from '../../components_views/src/components/Modal';
import ModalComponent from '../../components_views/src/components/Modals/Modal2';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeComponent, setActiveComponent] = useState('Home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleNavigation = (componentName: string) => {
    setActiveComponent(componentName);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  // Data for components
  const cardItems = [
    { title: 'Mountain View', description: 'Scenic mountain landscape', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', link: '#' },
    { title: 'Beach Sunset', description: 'Beautiful sunset on the beach', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80', link: '#' },
    { title: 'City Skyline', description: 'Urban cityscape at night', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2144&q=80', link: '#' },
  ];

  const tableColumns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'City', accessor: 'city' },
  ];

  const tableData = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'London' },
    { name: 'Bob Johnson', age: 35, city: 'Paris' },
  ];

  const gridItems = [
    { title: 'Grid Item 1', content: <p>Content for grid item 1</p> },
    { title: 'Grid Item 2', content: <p>Content for grid item 2</p> },
    { title: 'Grid Item 3', content: <p>Content for grid item 3</p> },
  ];

  const expandableItems = [
    { title: 'Expandable Item 1', content: <p>Content for expandable item 1</p> },
    { title: 'Expandable Item 2', content: <p>Content for expandable item 2</p> },
    { title: 'Expandable Item 3', content: <p>Content for expandable item 3</p> },
  ];

  return (
    <DashboardLayout
      isSidebarCollapsed={isSidebarCollapsed}
      setIsSidebarCollapsed={setIsSidebarCollapsed}
      activeComponent={activeComponent}
      handleNavigation={handleNavigation}
      userProfile={null}
      navigate={() => {}}
    >
      <div className="App">
        <h1>Component Showcase</h1>

        {/* Layout Components */}
        <section className="component-section">
          <h2 className="section-header">Carousel</h2>
          <Carousel items={cardItems} />
        </section>

        <section className="component-section">
          <h2 className="section-header">Table</h2>
          <Table columns={tableColumns as Column<{ name: string; age: number; city: string; }>[]} data={tableData} />
        </section>

        <section className="component-section">
          <h2 className="section-header">Grid Container</h2>
          <GridContainer items={gridItems} containerTitle="Grid Example" />
        </section>

        <section className="component-section">
          <h2 className="section-header">Expandable Item Container</h2>
          <ExpandableItemContainer items={expandableItems} containerTitle="Expandable Items" />
        </section>

        {/* Input Components */}
        <section className="component-section">
          <h2 className="section-header">Input Controls</h2>
          <h3>Text Input</h3>
          <Input label="Example Input" placeholder="Type something..." />
          <Text
            id="example-text"
            name="example-text"
            placeholder="Enter some text"
            onChange={(e) => console.log('Text input:', e.target.value)}
          />
          
          <h3>Dropdown</h3>
          <Dropdown 
            arrayOfData={[
              { id: 'us', name: 'United States' },
              { id: 'ca', name: 'Canada' },
              { id: 'uk', name: 'United Kingdom' }
            ]}
            onSelectChange={(value: any) => console.log(`Selected country: ${value}`)}
            name="country-select"
          />
          
          <h3>Checkbox</h3>
          <Checkbox
            id="example-checkbox"
            name="example-checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="example-checkbox">Example Checkbox</label>
          <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
          
          <h3>Radio Button</h3>
          <Radio
            id="example-radio"
            name="example-radio"
            value="option1"
            onChange={(e) => console.log('Radio selected:', e.target.value)}
          />
          <label htmlFor="example-radio">Option 1</label>
          
          <h3>File Input</h3>
          <File
            id="example-file"
            name="example-file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => console.log('File selected:', e.target.files)}
          />
        </section>

        {/* Button Components */}
        <section className="component-section">
          <h2 className="section-header">Buttons</h2>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="tertiary">Tertiary Button</Button>
          <h3>Button 2</h3>
          <Button2>Button 2</Button2>
        </section>

        {/* Media Components */}
        <section className="component-section">
          <h2 className="section-header">Image</h2>
          <Image 
            src="https://example.com/image.jpg" 
            alt="Example image" 
            className="example-image"
          />
        </section>

        {/* Feedback Components */}
        <section className="component-section">
          <h2 className="section-header">Circular Progress</h2>
          <CircularProgress />
        </section>

        {/* Modal Components */}
        <section className="component-section">
          <h2 className="section-header">Modals</h2>
          <h3>Modal 1</h3>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Example Modal">
            <p>This is the content of the modal.</p>
          </Modal>
          
          <h3>Modal 2</h3>
          <ModalComponent 
            heading="Example Modal" 
            body="This is the body of the modal. You can put any content here."
          />
        </section>
      </div>
    </DashboardLayout>
  );
}

export default App;
