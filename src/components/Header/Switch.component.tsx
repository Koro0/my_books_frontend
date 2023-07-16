import React from 'react'

export default function Switch() {
  return (
    <>
        <label className='themeSwitch_switch'>
            <input type="checkbox" />
            <span className='themeSwitch_slider round'></span>
        </label>
    </>
  )
}
