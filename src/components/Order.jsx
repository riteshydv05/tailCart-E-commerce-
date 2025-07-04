import React from 'react'

function Order() {
  return (
    <div className='mx-auto'>
        
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Order</legend>

  <label className="label">Address</label>
  <input type="text" className="input" placeholder="Address" />

  <label className="label">Mobile No:</label>
  <input type="text" className="input" placeholder="Mobile No" />

  <button className="btn btn-neutral mt-4">Order Now</button>
</fieldset>
    </div>
  )
}

export default Order
