import React from 'react'

const ProductFilter = () => {
    return (
<div className='product-filter'>
<form method='GET' >

<input name='min-price' placeholder='Min-price' type='number' style={{ width: '100' }} />
&nbsp;&nbsp;
<input name='max-price' placeholder='Max-price' type='number' style={{ width: '100' }} />
&nbsp;&nbsp;
<input name='search' placeholder='search' type='search' style={{ width: '100' }} />
&nbsp;&nbsp;
<button type='submit'>search</button>
</form>
</div>
    )
}

export default ProductFilter