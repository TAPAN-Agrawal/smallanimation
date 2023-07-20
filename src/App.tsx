import React, { useEffect, useRef } from 'react';
import img1 from '../src/Assets/Images/beautiful-view-greenery-bridge-forest-perfect-background.jpg';
import img2 from '../src/Assets/Images/digital-painting-mountain-with-colorful-tree-foreground.jpg';
import img3 from '../src/Assets/Images/forest-landscape.jpg';
import img4 from '../src/Assets/Images/old-rusty-fishing-boat-slope-along-shore-lake.jpg';
import classes from './App.module.scss';
import {gsap} from 'gsap'

function App() {
  const ref1 = useRef<any>()
  const ref2 = useRef<any>()
  const ref3 = useRef<any>()
  const ref4 = useRef<any>()

  const ref5 = useRef<any>()
  const ref6 = useRef<any>()
  const ref7 = useRef<any>()
  const ref8 = useRef<any>()



  useEffect(() => {
    const t1 = gsap.timeline();

    t1.fromTo(ref1.current, {
      x: 300,
      y:-400,
    }, {
      // x:100,
      y: 50,
      duration: 2,
      ease: "power1.inOut"
    })
    t1.fromTo(ref2.current, {
      x:700,
      y:-400,
    }, {
      // x:100,
      y: 50,
      duration: 2,
      ease: "power1.inOut"
    })
    t1.fromTo(ref3.current, {
      x:300,
      y:-400,
    }, {
      // x:100,
      y: 150,
      duration: 2,
      ease: "power1.inOut"
    })
    t1.fromTo(ref4.current, {
      x:700,
      y:-400,
    }, {
      // x:100,
      y: 150,
      duration: 2,
      ease: "power1.inOut"
    })

    t1.to(ref1.current, {
      rotation: 360,
      duration:1,
    })
    t1.to(ref2.current, {
      rotation: -360,
      duration:1,
    })
    t1.to(ref3.current, {
      rotation: 360,
      duration:1,
    })
    t1.to(ref4.current, {
      rotation: -360,
      duration:1,
    })

    t1.to(ref1.current, {
      x: 500,
      y: 100,
      
      duration: 2,
    })
    t1.to(ref1.current, {
      scale: 3,
      duration: 2,
    })
    t1.to(ref1.current, {
      scale: 1,
      duration: 2,
    })
    t1.to(ref1.current, {
      x: 300,
      y: 50,
      duration: 2,
    })

    t1.to(ref2.current, {
      x: 500,
      y:100,
      duration: 2,
    })
    t1.to(ref2.current, {
      scale: 3,
      duration: 2,
    })
    t1.to(ref2.current, {
      scale: 1,
      duration: 2,
    })
    t1.to(ref2.current, {
      x: 700,
      y: 50,
      duration: 2,
    })

    t1.to(ref3.current, {
      x: 500,
      y:100,
      duration: 2,
    })
    t1.to(ref3.current, {
      scale: 3,
      duration: 2,
    })
    t1.to(ref3.current, {
      scale: 1,
      duration: 2,
    })
    t1.to(ref3.current, {
      x: 300,
      y: 150,
      duration: 2,
    })

    t1.to(ref4.current, {
      x: 500,
      y:100,
      duration: 2,
    })
    t1.to(ref4.current, {
      scale: 3,
      duration: 2,
    })
    t1.to(ref4.current, {
      scale: 1,
      duration: 2,
    })
    t1.to(ref4.current, {
      x: 700,
      y: 150,
      duration: 2,
    })

    t1.fromTo(ref5.current, {
         x:-100,
    }, {
      x:50,
      rotation: 360,
      duration:2,
    })
    t1.fromTo(ref6.current, {
      x:-100,
 }, {
   x:80,
   rotation: 360,
   duration:2,
    })
    t1.fromTo(ref7.current, {
      x:-100,
 }, {
   x:110,
   rotation: 360,
   duration:2,
    })
    t1.fromTo(ref8.current, {
      x:-100,
 }, {
   x:150,
   rotation: 360,
   duration:2,
     })



  },[])
  return (
    <div className={classes.parent}>
      <div>
        <img src={img1} className={classes.img} ref={ ref1} />
    </div>
      <div>
      <img src={ img2} className={classes.img} ref={ref2}/>
    </div>
      <div>
      <img src={ img3} className={classes.img} ref={ref3} />
    </div>
      <div>
      <img src={ img4}  className={classes.img} ref={ref4}/>
      </div>
      <div ref={ref5}>H</div>
      <div ref={ref6}>O</div>
      <div ref={ref7}>M</div>
      <div ref={ref8}>E</div>
    </div>
  );
}

export default App;
