import "./portfolio.scss";

export default function Portfolio() {
  
  const data = [
    {
      id: 1,
      title: " E-commerce App",
      img: "https://www3.0zz0.com/2022/11/06/13/583732742.png",
      link:"https://github.com/emanshraf/E-commerce-Full-Stack-App",
      
    },
    {
      id: 2,
      title: " Food Ordering App",
      img: "https://www3.0zz0.com/2022/11/06/13/398627513.jpg",
      link:"https://github.com/emanshraf/Food-Ordering-Full-Stack-App",
      
    },
    {
      id: 3,
      title: " Trips Booking",
      img: "https://www5.0zz0.com/2023/03/07/16/273477236.jpg",
      link:"https://github.com/emanshraf/Egypt_Trips",
      
    },
    {
      id: 4,
      title: " Projects Management App",
      img: "https://www3.0zz0.com/2022/11/06/13/735976477.jpg",
      link:"https://github.com/emanshraf/Project-Management-App",
      
    },
    
    {
      id: 5,
      title: "Products Management System",
      img: "https://www3.0zz0.com/2022/11/06/13/213603960.png",
      link:"https://github.com/emanshraf/Product-Management-System",
      link2:"https://emanshraf.github.io/Product-Management-System/",
    },
    {
      id: 6,
      title: "Admin Dashboard",
      img: "https://www10.0zz0.com/2022/11/13/05/467148656.jpg",
      link:"https://github.com/emanshraf/Admin-Front-End-App",
      link2:"https://admin-front-end-app.vercel.app/",
    },
    
  ];

  

  return (
    <div className="portfolio" id="works">
      <h1>My Works</h1>
      <div className="container">
        {data.map((d) => (
          <div className="item"  >
             <a href={d.link} >
              <img src={d.img} alt=""/>
            <h3>{d.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
