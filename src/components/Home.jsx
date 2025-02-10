import img from '../img/image-logo.png';
import Login from '../components/Login';


const HomePage = () => {
  return (
    <>
    <center>
    <main>
      <section>
      <h1>Web Developers</h1>
      <p>Welcome Web Developers</p>
      <img src={img} alt="logo cyber image art" width={400} height={400} />
      </section>
      <section>
      <Login />
      </section>
    
      </main>
    </center> 
      
    </>
  );
};

export default HomePage;
