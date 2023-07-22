import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const CategoryCard = ({ title, url }: { title: string; url: string }) => {
  return (
    <Link href={url} className="category-card shadown-sm flex min-h-[80px] w-full rounded-[20px] border border-slate-200 bg-white p-4 dark:border-slate-900 dark:bg-[#343739] dark:text-slate-200 lg:min-h-[100px]">
      <div className="m-auto w-full">
        <div className="flex justify-between">
          <h3>{title}</h3>
          <ChevronRightIcon className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export const FeaturedCard = ({ title, url }: { title: string; url: string }) => {
  return (
    <Link href={url} className="featured-card shadown-sm flex min-h-[200px] w-full rounded-[20px] border border-slate-200 bg-white p-4 dark:border-slate-900 dark:bg-[#343739] dark:text-slate-200 lg:min-h-[300px]">
      <div className="m-auto w-full">
        <div className="flex justify-between">
          <h3>{title}</h3>
          <ChevronRightIcon className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

type ItemCardProps = {
  name: string;
  description?: string;
  price: string;
  options?: string;
};

export const ItemCard = ({ name, description, price, options }: ItemCardProps) => {
  return (
    <div className="item-card shadown-sm flex min-h-[80px] w-full rounded-[20px] border border-slate-200 bg-white p-4 dark:border-slate-900 dark:bg-[#343739] dark:text-slate-200 lg:min-h-[100px]">
      <div className="w-full">
        <h3 className="mb-2 text-lg">{name}</h3>
        {description && <p className="mt-3 min-h-[56px] whitespace-break-spaces text-sm">{description}</p>}
        {options && <p className="mt-1 text-sm">{options}</p>}
        {price && (
          <div className="mt-4 w-full">
            <p>{price}</p>
          </div>
        )}
      </div>
    </div>
  );
};
