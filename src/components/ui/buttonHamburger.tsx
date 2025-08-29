'use client'
import classNames from 'classnames'
import { useState } from 'react'

export default function ButtonHamburger() {
  const [opened, setOpened] = useState(false)

  return (
    <div
      onClick={() => setOpened(!opened)}
      className={classNames(`tham mt-5 tham-e-squeeze tham-w-8`, {
        'tham-active': opened
      })}
    >
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  )
}
