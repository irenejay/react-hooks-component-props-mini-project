function About({ image, about }) {
    const imgSrc = "https://via.placeholder.com/215" + image;
  
    return (
      <aside>
        <img src={imgSrc} alt="blog logo" />
        <p>{about}</p>
      </aside>
    );
  }
  
  export default About;
  