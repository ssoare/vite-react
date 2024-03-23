export default function(name) {
    return(
        <li className='px-4 py-2'>
            <Link className='after:w-0 after:bg-black after:h-px after:block hover:after:w-full after:transition-all' 
                    to="" onClick={toggleMenu}>{name}
            </Link> 
        </li>
    )
}