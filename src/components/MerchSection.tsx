import React from 'react';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'No Cap Street Art Design With This Grandma Slaps',
    price: '$21.00',
    image: 'https://images.printify.com/mockup/671c78755e58a85fe20efb1c/65135/101414/graphic-tee-no-cap-street-art-design-with-this-grandma-slaps.jpg?camera_label=flatlay&revision=1729919314524&s=2048',
    url: 'https://my-generations.printify.me/product/14708671/graphic-tee-no-cap-street-art-design-with-this-grandma-slaps'
  },
  {
    id: 2,
    name: 'Beach Sunset Low Key Vibin Unisex T-shirt',
    price: '$25.00',
    image: 'https://images.printify.com/mockup/671c5fefb7e61501b702a5f5/79169/98447/beach-sunset-low-key-vibin-unisex-t-shirt.jpg?camera_label=person-1&revision=1729913054351&s=2048',
    url: 'https://my-generations.printify.me/product/14707072/beach-sunset-low-key-vibin-unisex-t-shirt'
  },
  {
    id: 3,
    name: 'Grandma Squad Sweatshirt Chillin with the Squad',
    price: '$32.00',
    image: 'https://images.printify.com/mockup/671c4e0e48fa14e38706fbc5/104772/102281/grandma-squad-sweatshirt-chillin-with-the-squad.jpg?camera_label=front&revision=1729909133240&s=2048',
    url: 'https://my-generations.printify.me/product/14705601/grandma-squad-sweatshirt-chillin-with-the-squad'
  },
];

export default function MerchSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop Our Merch</h2>
          <p className="text-lg text-gray-600">Express yourself with our exclusive GenZ collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <ShoppingBag size={20} />
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://my-generations.printify.me/products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
          >
            <ShoppingBag size={24} />
            Shop All Products
          </a>
        </div>
      </div>
    </section>
  );
}