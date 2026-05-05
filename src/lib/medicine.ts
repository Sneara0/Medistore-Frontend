import { apiRequest } from "./api";

export type Medicine = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  company: string; 
  category: { id: string; name: string };
  seller: { id: string; name: string };
  reviews: { id: string; rating: number; comment?: string }[];
};

// --- ৪টি ডেমো প্রোডাক্ট ডেটা এখানে যোগ করা হলো ---
export const DEMO_MEDICINES: Medicine[] = [
  {
    id: "m1",
    name: "Napa Extend",
    description: "Paracetamol BP 665 mg. Effective for long-lasting pain relief and fever management.",
    price: 15,
    stock: 120,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop",
    company: "Beximco Pharmaceuticals",
    category: { id: "cat1", name: "Pain Relief" },
    seller: { id: "sel1", name: "MediStore Central" },
    reviews: [
      { id: "rev1", rating: 5, comment: "Works great for long hours!" },
      { id: "rev2", rating: 4, comment: "Effective but takes time to start." }
    ]
  },
  {
    id: "m2",
    name: "Seclo 20mg",
    description: "Omeprazole BP 20 mg. Widely used for treating acid reflux, heartburn, and gastric ulcers.",
    price: 7,
    stock: 450,
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069&auto=format&fit=crop",
    company: "Square Pharmaceuticals",
    category: { id: "cat2", name: "Gastric" },
    seller: { id: "sel1", name: "MediStore Central" },
    reviews: [
      { id: "rev3", rating: 5, comment: "Essential for my daily gastric issues." }
    ]
  },
  {
    id: "m3",
    name: "Fenadin 120",
    description: "Fexofenadine Hydrochloride. Provides non-drowsy relief from seasonal allergy symptoms.",
    price: 10,
    stock: 85,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2140&auto=format&fit=crop",
    company: "Renata Limited",
    category: { id: "cat3", name: "Allergy" },
    seller: { id: "sel2", name: "City Care Pharmacy" },
    reviews: []
  },
  {
    id: "m4",
    name: "Monas 10",
    description: "Montelukast Sodium. A trusted solution for the prevention and chronic treatment of asthma.",
    price: 18,
    stock: 0, 
    image: "https://images.unsplash.com/photo-1471864190281-ad5f9f33d70e?q=80&w=2070&auto=format&fit=crop",
    company: "Acme Laboratories",
    category: { id: "cat4", name: "Respiratory" },
    seller: { id: "sel1", name: "MediStore Central" },
    reviews: [
      { id: "rev4", rating: 4.5, comment: "Highly recommended for asthma patients." }
    ]
  }
];

export const getAllMedicines = async (filters?: any): Promise<Medicine[]> => {
  const params = new URLSearchParams(filters).toString();
  try {
    const data = await apiRequest<Medicine[]>(`/api/medicines?${params}`, { method: "GET" });
    // যদি এপিআই থেকে ডাটা না আসে বা এম্প্টি আসে, তবে ডেমো ডাটা রিটার্ন করবে
    return data && data.length > 0 ? data : DEMO_MEDICINES;
  } catch (err) {
    // এরর হলেও ডেমো ডাটা রিটার্ন করবে যাতে পেজ ভেঙে না যায়
    return DEMO_MEDICINES;
  }
};

export const getMedicineById = async (id: string): Promise<Medicine> => {
  try {
    return await apiRequest<Medicine>(`/api/medicines/${id}`, { method: "GET" });
  } catch (err) {
    // আইডি দিয়ে ডেমো ডাটা থেকে খুঁজে বের করবে
    const fallback = DEMO_MEDICINES.find(m => m.id === id);
    if (fallback) return fallback;
    throw err;
  }
};