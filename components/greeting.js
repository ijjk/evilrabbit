import React from 'react'
import css from 'next/css'

export default () => (
  <div className={container}>
    <h1 className={title}>
      Hi, I'm<br />
      <span>Evil Rabbit</span>
    </h1>
    <h2 className={subtitle}>Designer from Buenos Aires</h2>
  </div>
)

let container = css({
  position: 'absolute',
  textAlign: 'center',
  top: '45%',
  transform: 'translateY(-50%)',
  width: '100%'
})

let title = css.merge(
  {
    fontSize: '100px',
    fontWeight: 100,
    margin: '0 0 20px 0',
  },
  css.media('(max-width: 500px)', {
    fontSize: '64px'
  }),
  css.$(' span', {
    fontWeight: 500
  })
)

let subtitle = css({
  fontSize: '18px',
  fontWeight: 100,
  margin: 0
})
