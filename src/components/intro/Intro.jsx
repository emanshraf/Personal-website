import "./intro.scss";
import AnimatedText from 'react-animated-text-content';

export default function Intro() {
  
  return (
    <div className="intro" id="intro">
        <div className="content">
          <h2>Hi There, I'm</h2>
          <h1>Eman Aahraf</h1>
          <AnimatedText
  type="words" 
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="bounce"
  interval={0.06}
  duration={0.8}
  tag="h3"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
 Full Stack Web Developer 
</AnimatedText>
<a href="#works" className="link">
    view my work
    </a>
         </div>

        <div className="social">
            <a href="https://wa.me/01090793007" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="mailto:emanashraf19951992@gmail.com"><i className="fa fa-envelope" ></i></a>
            <a href="https://www.facebook.com/profile.php?id=100070473144604"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/eman-ashraf-419339230/"><i className="fa-brands fa-linkedin"></i></a> 
            <a href="https://github.com/emanshraf"><i class="fa-brands fa-github"></i></a> 
        </div>
  

    </div>
  );
}
