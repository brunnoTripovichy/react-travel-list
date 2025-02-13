import { useMemo } from 'react';
import type { Item } from './data.';

export interface ItemsSummaryProps {
  items: Item[];
}

interface Summary {
  totalItems: number;
  totalPacked: number;
  percentagePacked: number;
}

const ItemsSummary: React.FC<ItemsSummaryProps> = ({ items }) => {
  // Compute total packed items, percentage of total packed and total items
  const itemsSummary = useMemo<Summary>(() => {
    // Count packed items and percentage of total
    const packedItems = items.filter((item) => item.packed);

    // Count total items
    const totalItems = items.length;

    return {
      totalItems,
      totalPacked: packedItems.length,
      percentagePacked:
        totalItems > 0 ? (packedItems.length / totalItems) * 100 : 0,
    };
  }, [items]);

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
        Packing Summary
      </h2>

      <div className="text-sm sm:text-base text-gray-600">
        <p className="flex justify-between border-b pb-2">
          <span>Total Items:</span>
          <span className="font-medium text-gray-900">
            {itemsSummary.totalItems}
          </span>
        </p>
        <p className="flex justify-between mt-2">
          <span>Total Packed:</span>
          <span className="font-medium text-gray-900">
            {itemsSummary.totalPacked}
            <span className="font-medium text-gray-900 ml-1">
              ({itemsSummary.percentagePacked.toFixed(0)} %)
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ItemsSummary;
