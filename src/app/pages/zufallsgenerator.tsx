import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BigMovieCard from "../components/BigMovieCard/BigMovieCard";
import ShowMoreLink from "../components/ShowMoreLink/ShowMoreLink";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

function ZufallsgeneratorPage(): JSX.Element {
  return (
    <div>
      <main>
        <div>
          <NavBar />
        </div>
        <div>
          <BigMovieCard imgSrc={"./cruella"} movieName={"Cruella"} />
          <ShowMoreLink link={"#"} />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default ZufallsgeneratorPage;
