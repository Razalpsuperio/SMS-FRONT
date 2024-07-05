import { Button, Tooltip } from "@nextui-org/react";
import React from "react";
import AddStudent from "./AddStudent/AddStudent";

import Cards from "../../components/Cards/Cards";
import {motion} from 'framer-motion'






const Student = () => {

    const dummyData = [
        {
          id: 1,
          name: "John McCulling",
          role: "Founder / CEO",
          imgSrc: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&q=75&fit=crop&w=256",
          imgAlt: "Photo by Radu Florin",
        },
        {
          id: 2,
          name: "Jane Doe",
          role: "Chief Marketing Officer",
          imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=75&fit=crop&w=256",
          imgAlt: "Photo by Jane Doe",
        },
        {
          id: 3,
          name: "Michael Smith",
          role: "Lead Developer",
          imgSrc: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&q=75&fit=crop&w=256",
          imgAlt: "Photo by Michael Smith",
        },
        {
          id: 4,
          name: "Emily Johnson",
          role: "Product Manager",
          imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=75&fit=crop&w=256",
          imgAlt: "Photo by Emily Johnson",
        },
        {
          id: 1,
          name: "John McCulling",
          role: "Founder / CEO",
          imgSrc: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&q=75&fit=crop&w=256",
          imgAlt: "Photo by Radu Florin",
        },

      ];

  return (
    <div className="">

    <motion.div 
      className="flex justify-end mt-6 mr-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
  
    </motion.div>
    <br />
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >

      <Cards data={dummyData}/>
    </motion.div>
  </div>
  );
};

export default Student;
