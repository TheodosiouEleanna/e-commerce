import { Counter } from "./Counter";

const CartItem = ({ item, key }) => {
  return (
    <div
      key={key}
      className='flex flex-col items-start justify-between py-8 px-4 border-y'
    >
      <div className='flex'>
        <img src={item.image} alt={item.name} className='w-32 mr-4' />
        <div>
          <h3 className='text-lg  hover:text-[#228B22] '>{item.name}</h3>
          <p className='text-sm text-gray-500'>
            Price:
            <span className='font-bold text-[#0071BD]'> {item.price}</span>
          </p>
        </div>
      </div>
      <Counter item={item} />
    </div>
  );
};

export default CartItem;
