interface Medicine {
  id: string;
  name: string;
  price: number;
  image?: string;
}

interface Props {
  medicine: Medicine;
}

const MedicineCard = ({ medicine }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6 flex flex-col items-center">
      <div className="h-32 w-32 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-400">
        {medicine.image ? <img src={medicine.image} alt={medicine.name} className="h-full w-full object-cover rounded-xl" /> : "Image"}
      </div>
      <h3 className="font-semibold text-lg mb-2 text-gray-800">{medicine.name}</h3>
      <p className="text-blue-600 font-bold mb-4">{medicine.price} BDT</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  )
}

export default MedicineCard;
