
import { useEffect} from 'react'
import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin";
import SplitType from 'split-type'


gsap.registerPlugin(TextPlugin);


const AnimatedText = () => {
    
useEffect(() => {
    const titles = document.querySelectorAll('.myText');
        titles.forEach((title) => {
            (title as HTMLElement).style.opacity = '1';
        });
        const myTitles = gsap.utils.toArray(".myText");
        const tl = gsap.timeline({repeat: -1, repeatDelay: 1});

        if (myTitles) {
            myTitles.forEach((title:any) => {
                
                const split = new SplitType(title);
                tl.to(split.chars, {
                    duration: 2,
                    opacity: 1,
                    stagger: 0.12,
                    visibility: 'visible',
                    animationDuration: 0.5,
                    repeat: 1,
                    yoyo: true,
                });
            })
        }

},[])


  return (
    <div  className="py-8 relative h-full w-full flex justify-center items-center backdrop-blur">
        <h1  className="myText text-[4rem] text-slate-100 font-bold abhaya-libre-bold ">Hello people</h1>
        <h1 className="myText text-[4rem] text-slate-100 font-bold abhaya-libre-bold ">Hello Humans</h1>
        <h1 className="myText text-[4rem] text-slate-100 font-bold abhaya-libre-bold ">Hello Laura</h1>
        <h1 className="myText text-[4rem] text-slate-100 font-bold abhaya-libre-bold ">Hello Uganda</h1>
    </div>
  )
}

export default AnimatedText