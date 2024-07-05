import React from 'react';

const Cards = ({ data }) => {
  return (
    <div className="container mx-auto">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="grid grid-cols-3 gap-4">
              {/* Image */}
              <div className="col-span-1">
                <img 
                  src={item.imgSrc}  
                  alt={item.imgAlt} 
                  className="w-full h-auto rounded-lg object-cover"
                  style={{ maxWidth: '100px', maxHeight: '100px' }} 
                />
              </div>
              {/* Details */}
              <div className="col-span-2">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.name}</div>
                  <p className="text-gray-700 text-base">{item.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
