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
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
          setformData(prev=>({
            ...prev,
            image: reader.result
          }));
        };
        reader.readAsDataURL(file);
      }
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const donation={
            ...formData,
          };
    const existingDonation = JSON.parse(localStorage.getItem('donations') || '[]');    
    localStorage.setItem('donations', JSON.stringify([...existingDonation, donation]));  

    
    const prevPoints = parseInt(localStorage.getItem('points') || '0', 10);
    localStorage.setItem('points', prevPoints + 1);
   
    setformData({
        category: '',
        description: '',
        location: '',
        image: null
      });
      setImage('');
    };
    
    return (<>
      <div className='donation-form'>
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
      </form>
      </div>
      <section className="impact-section">
        <h2 className="section-title">Impact Stories</h2>
        <div className="impact-cards">
          <div className="impact-card">
            <div className="impact-img impact-img-1"></div>
            <div className="impact-content">
              <h4>From Closet to Classroom</h4>
              <p>A single bag of donated clothes helped keep 15 children warm last winter. Their smiles say it all!</p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-img impact-img-2"></div>
            <div className="impact-content">
              <h4>Food for Hope</h4>
              <p>Donors like you provided over 100 meals to families in need during the holidays. Thank you for making a difference!</p>
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-img impact-img-3"></div>
            <div className="impact-content">
              <h4>Books that Inspire</h4>
              <p>Donated books created a mini-library in a local shelter, sparking curiosity and learning for dozens of kids.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default DonationForm;

    
