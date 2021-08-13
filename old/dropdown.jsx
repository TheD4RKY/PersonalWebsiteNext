import { defaultConfig } from 'next/dist/next-server/server/config-shared';
import Link from next/link;
import React, { useState } from 'react';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
 return (
   <>
  <ul onlick={handleClick}
  className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
  >
{MenuItems.map((item, index) =>  {
  return(
    <li key={index}>
      <Link
      className={item.cName}
      to={item.path}
      onClick={() => setClick(false)}
      >
        {item.title}
        </Link>
        </li>
  );
})}

</ul>
</> 
);

}

export default Dropdown;