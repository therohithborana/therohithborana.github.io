/*import gsap from 'https://cdn.skypack.dev/gsap@3.12.0'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger'

if (!CSS.supports('animation-timeline: scroll()')) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.set('section', { '--base': 0 })
  gsap.to('section', {
    '--base': 320,
    ease: 'none',
    scrollTrigger: {
      horizontal: true,
      scrub: true,
      scroller: 'ul',
    },
  })
  const ITEMS = document.querySelectorAll('li')
  ITEMS.forEach((ITEM) => {
    gsap
      .timeline()
      .set(ITEM, { '--sat': 0 })
      .to(ITEM, {
        '--sat': 100,
        scrollTrigger: {
          trigger: ITEM,
          start: 'right 75%',
          end: 'center center',
          horizontal: true,
          scrub: true,
          scroller: 'ul',
        },
      })
      .fromTo(
        ITEM,
        { '--sat': 100 },
        {
          '--sat': 0,
          scrollTrigger: {
            trigger: ITEM,
            end: 'left 25%',
            start: 'center center',
            horizontal: true,
            scrub: true,
            scroller: 'ul',
          },
        }
      )
  })
}


document.body.addEventListener('click', () => {
  pc.uniforms.uColor.value.set(Math.random() * 0xffffff)
  pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2
  pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001
  pc.uniforms.uPointSize.value = 1 + Math.random() * 10
})

*/

function toggleMode(){
  document.body.classList.toggle('dark-mode');
}
