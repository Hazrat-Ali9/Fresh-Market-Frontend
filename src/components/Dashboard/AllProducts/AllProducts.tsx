import { FlashSaleItem } from "@/components/Home/FlashSale/FlashSale";
import Image from "next/image";
// All product
const AllProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data: FlashSaleItem[] = await res.json();

  return (
    <>
      <div className="pt-10 px-5">
        <h2>All Product List</h2>
        <div className="pt-3">
          <table className="table-auto border-collapse border border-gray-300 w-full ">
            <thead className="overflow-x-scroll">
              <tr className="border border-gray-300 ">
                <th className="border border-gray-300 ">index</th>
                <th className="border border-gray-300 ">Image</th>
                <th className="border border-gray-300 ">Name</th>
                <th className="border border-gray-300 ">Category</th>
                <th className="border border-gray-300">Price</th>
                <th className="border border-gray-300">Review</th>
              </tr>
            </thead>
            <tbody className="overflow-x-scroll">
              {/* Check if products is an array before mapping */}
              {Array.isArray(data) &&
                data?.map((item: FlashSaleItem, index: number) => (
                  <tr key={item._id} className="border border-gray-300">
                    <td className="border border-gray-300 text-center px-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-2">
                      <Image
                        height={50}
                        width={50}
                        alt="image"
                        src={item?.image}
                      />
                    </td>
                    <td className="border border-gray-300 px-2">
                      {item?.name}
                    </td>

                    <td className="border text-center border-gray-300 p-2">
                      {item?.category}
                    </td>
                    <td className="border text-center border-gray-300 p-2">
                      {item?.price}
                    </td>
                    <td className="border text-center border-gray-300 p-2">
                      {item?.review}
                    </td>
                    {/* Buttons for editing and deleting an event item */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
