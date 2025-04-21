import React,{useState} from 'react';
import '../Styles/DonationForm.css';

function DonationForm(){
    const[formData,setformData]=useState({
        category: '',
        description: '',
        location: '',
        image: null
})
const[image,setImage]=useState('');

const handleChange=(e)=>{
    const{name,value}=e.target;
    setformData(prev=>({
        ...prev,
        [name]:value
    }));
};
const handleImage=(e)=>{
    const file=e.target.files[0];
    if(file){
        setformData(prev=>({
            ...prev,
            image:file
        }))
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const donation={
            ...formData,
            date: new Date().toISOString(),
            id: Date.now()
          };
    const existingDonation = JSON.parse(localStorage.getItem('donations') || '[]');    
    localStorage.setItem('donations', JSON.stringify([...existingDonation, donation]));  
   
    setformData({
        category: '',
        description: '',
        location: '',
        image: null
      });
      setImage('');
    };
    
    return (<div className='donation-form'>
        <h2>Donate an Item</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group"> 
            <label>Category:</label>
            <select 
            name="category" 
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="clothes">Clothes</option>
            <option value="toys">Toys</option>
            <option value="food">Food</option>
            <option value="other">Other</option>
            
          </select>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
            <label>Location:</label>
            <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Item Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            required
          />
          {image&&(
            <div className="image-preview">
                <img src={image} alt="Preview" />
                </div>
          )}
        </div>
        <button type="submit">Submit</button>
        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
}

export default DonationForm;

    