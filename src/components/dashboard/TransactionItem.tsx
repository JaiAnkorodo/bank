import {
  FiShoppingBag,
  FiCoffee,
  FiDollarSign,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";

interface TransactionItemProps {
  name: string;
  category: string;
  amount: string;
  isExpense: boolean;
}

export function TransactionItem({
  name,
  category,
  amount,
  isExpense,
}: TransactionItemProps) {
  const getIcon = () => {
    switch (category) {
      case "Food & Drink":
        return <FiCoffee />;
      case "Shopping":
        return <FiShoppingBag />;
      case "Income":
        return <FiDollarSign />;
      case "Transfer":
        return isExpense ? <FiArrowUp /> : <FiArrowDown />;
      default:
        return <FiDollarSign />;
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div
          className={`h-10 w-10 rounded-full flex items-center justify-center ${
            isExpense
              ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
              : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
          }`}
        >
          {getIcon()}
        </div>
        <div className="ml-3">
          <p className="font-medium text-gray-800 dark:text-white">{name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{category}</p>
        </div>
      </div>
      <span
        className={`font-medium ${
          isExpense
            ? "text-red-600 dark:text-red-400"
            : "text-green-600 dark:text-green-400"
        }`}
      >
        {amount}
      </span>
    </div>
  );
}
