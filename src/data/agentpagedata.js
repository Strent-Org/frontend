import img1 from "../assets/images/agent1.png";
import img2 from "../assets/images/agent2.png";
import img3 from "../assets/images/agent3.png";
import img4 from "../assets/images/agent4.png";
import img5 from "../assets/images/agent5.png";
import img6 from "../assets/images/agent6.png";
import img7 from "../assets/images/main-agent1.png";
import img8 from "../assets/images/image 8.png";
import img9 from "../assets/images/prop-pic.png";



const agents = [
    {id:1, name: 'Kemi Adeyinka', email: 'kemiadeyinka @gmail.com', phoneNumber: '+234 9124244241', imageUrl: img1, imageUrl2: img7, numberOfProperties: 51, listings: 'View my Listings'},
    {id:2, name: 'Peter James', email: 'peterjames @gmail.com', phoneNumber: '+234 9124244241' , imageUrl: img2, imageUrl2: img2, numberOfProperties: 51, listings: 'View my Listings'},
    {id:3, name: 'Samuel Dodo', email: 'samueldodo @gmail.com', phoneNumber: '+234 9124244241' , imageUrl: img3, imageUrl2: img3, numberOfProperties: 51, listings: 'View my Listings'},
    {id:4, name: 'Nana Mettle', email: 'nanamettle @gmail.com', phoneNumber: '+234 9124244241' , imageUrl: img4, imageUrl2: img4, numberOfProperties: 51, listings: 'View my Listings'},
    {id:5, name: 'Chioma Madueke', email: 'chiomamadueke @gmail.com', phoneNumber: '+234 9124244241' , imageUrl: img5, imageUrl2: img5, numberOfProperties: 51, listings: 'View my Listings'},
    {id:6, name: 'Kemi Adeyinka', email: 'kemiadeyinka @gmail.com', phoneNumber: '+234 9124244241' , imageUrl: img6, imageUrl2: img6, numberOfProperties: 51, listings: 'View my Listings'}
]
let duplicateAgents = [...agents]

for (let i = 0; i < 4; i++) {
   duplicateAgents = [...duplicateAgents, ...agents];
  
}

export const newAgentsList = duplicateAgents

const myObject =     {id:1, imageUrl: img8, profPic: img9, name: 'Studio Pentfloor', location: 'Ikate, Lekki Ikate Lekki Lagos', content: 'Studio Pentfloor / Flat / Apartment for shortlet', agent: 'Kemi Adeyinka', price: '₦ 65,000/day', content2: '1 Bed 1 Bath'} 

export const properties = Array.from({ length: 40 }, (_, index) => ({
  ...myObject,
  id: index,
}));