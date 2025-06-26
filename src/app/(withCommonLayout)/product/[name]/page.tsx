import { FlashSaleItem } from "@/components/Home/FlashSale/FlashSale";
import VegetableCard from "@/components/VegetableCard/VegetableCard";

const ProductPage = async ({
  params: { name },
}: {
  params: { name: string };
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products`, {
    next: {
      revalidate: 30,
    },
  });
  const data: FlashSaleItem[] = await res.json();
  // Filter products based on the category
  const filteredProducts = data.filter(
    (product) => product.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <>
      <div className="container pt-40">
        <h2>Products in Category </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-16">
          {filteredProducts.map((item: FlashSaleItem) => (
            <VegetableCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
