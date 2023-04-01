function Intro1() {
      const getRandomNum = () => Math.floor(Math.random() * 10) + 1
      return (
          <div className="blog-post-intro">
              <h2>I've become a React developer!</h2>
              <div>
                  <p>Here is a random number from 0 to 10: {getRandomNum()}</p>
                  <p className="link">Read more...</p>
              </div>
          </div>
      );
  };

  export default Intro1;
