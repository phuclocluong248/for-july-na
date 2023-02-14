import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import ursinho_pandinha_ok from "./assets/ursinho_pandinha_ok.gif";
import ursinho_estudando from "./assets/ursinho_estudando.gif";
import pandinha_brava from "./assets/pandinha_fofa_cara_de_brava.gif";
import pandinha from "./assets/pandinha.gif";
import ursinho_S2_pandinha from "./assets/ursinho_S2_pandinha.gif";
import ursinha_chorando from "./assets/ursinha_chorando.gif";
import ursinho_chorando from "./assets/ursinho_chorando.gif";
import pandinha_martelo from "./assets/pandinha_martelo.png";
import ursinho_catucando_pandinha from "./assets/ursinho_catucando_pandinha.gif";
import pandinha_coracao from "./assets/pandinha_coracao.gif";
import ursinhos_apaixonados from "./assets/ursinhos_apaixonados.gif";
import ursinhos_caminhada from "./assets/ursinhos_caminhada.jpg";
import ursinhos_fotinha from "./assets/ursinhos_fotinha.jpg";
import ursinhos_bebida from "./assets/ursinhos_bebida.gif";
import ursinha_mordidas from "./assets/ursinha_mordidas.gif";
import ursinho_pegando_no_sono from "./assets/ursinho_pegando_no_sono.gif";
import ursinhos_dormindo from "./assets/ursinhos_dormindo.gif";
import ericS2julyna from "./assets/ericS2julyna.jpg";

const App = () => {

  return (
    <div className="main">
      <Screen
        imageUrl={ursinho_pandinha_ok}
        bgColor={colors.red}
        textColor={colors.white}
        title="These are Teddy Bear and Pandinha"
        text="They've just known each recently, but they've started dating as soon as they second meet."
        btnText="Next"
        sequency="1"
      />
      <Screen
        imageUrl={ursinho_estudando}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Little Bear"
        text="Teddy bear is very studious and funny, he always makes Pandinha laugh, but he is sometimes slow and doesn't understand what the Pandinha wants."
        btnBack="Back"
        btnText="Continue"
        sequency="2"
      />
      <Screen
        imageUrl={pandinha}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Pandinha"
        text="Pandinha is very cute, she is always worried about her study. And she has a different way of showing what she feels..."
        btnBack="Back"
        btnText="Continue"
        sequency="3"
      />
      <Screen
        imageUrl={ursinho_S2_pandinha}
        bgColor={colors.red}
        textColor={colors.white}
        title="Teddy Bear <3 Pandinha"
        text="As I said, these two are now lovers, they are not perfect... but they always help each other and overcome problems together."
        btnText="Continue"
        btnBack="Back"
        sequency="4"
      />
      <Screen
        imageUrl={ursinha_chorando}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Pandinha's Sadness"
        text="Sometimes pandinha is sad about some things, and is crying and sad... :( But the teddy bear always comes to try to cheer her up and almost always manages to make her laugh"
        btnText="Continue"
        btnBack="Back"
        sequency="5"
      />
      <Screen
        imageUrl={ursinho_chorando}
        bgColor={colors.green}
        textColor={colors.white}
        title="Teddy Bear's Sadness"
        text="Sometimes it's Teddy Bear that gets sad with some problems, and then Pandinha comes with her love and cuteness and helps Teddy Bear when he's sad. :)"
        btnText="Continue"
        btnBack="Back"
        sequency="6"
      />
      <Screen
        imageUrl={pandinha_martelo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Teddy Bear"
        text="Recently, Teddy Bear and Pandinha got into a conflict. Pandinha was sad about what Teddy Bear had done"
        btnText="Continue"
        btnBack="Back"
        sequency="7"
      />
      <Screen
        imageUrl={pandinha_brava}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="Pandinha and her patience"
        text="Pandinha is VERY LOVELY, but she was a little bit angry at that moment"
        btnText="Continue"
        btnBack="Back"
        sequency="8"
      />
      <Screen
        imageUrl={ursinho_catucando_pandinha}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Teddy Bear's insistence"
        text="Teddy Bear tries to cheer Pandinha up and show his love to her"
        btnText="Continue"
        btnBack="Back"
        sequency="9"
      />
      <Screen
        imageUrl={pandinha_coracao}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="Pandinha's love"
        text="Pandinha also loves Teddy bear, and ends up saying that she loves him too."
        btnText="Owwwwn <3"
        btnBack="Back"
        sequency="10"
      />
      <Screen
        imageUrl={ursinhos_apaixonados}
        bgColor={colors.red}
        textColor={colors.white}
        title="After that..."
        text="After everything is resolved, the two are fine and happy... and do many things together like what they do before."
        btnText="Continue"
        btnBack="Back"
        sequency="11"
      />
      <Screen
        imageUrl={ursinhos_caminhada}
        bgColor={colors.pink}
        textColor={colors.white}
        title="They walk together"
        text="The two love to walk together, they laugh a lot"
        btnText="Walking..."
        btnBack="Back"
        sequency="12"
      />
      <Screen
        imageUrl={ursinhos_fotinha}
        bgColor={colors.green}
        textColor={colors.white}
        title="Today they take pictures together"
        text="The pandinha wants to look perfect in the photos, she always asks the bear to take it again ~ laughs"
        btnText="More pics..."
        btnBack="Back"
        sequency="13"
      />
      <Screen
        imageUrl={ursinhos_bebida}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Play together"
        text="Teddy bear and pandinha love to play together, and enjoy the good times with some songs"
        btnText="Continue"
        btnBack="Back"
        sequency="14"
      />
      <Screen
        imageUrl={ursinha_mordidas}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Teddy bear is playing with Pandinha"
        text="So funny ... look at the poor teddy bear, look at the little bear face!"
        btnText="A few time after..."
        btnBack="Back"
        sequency="15"
      />
      <Screen
        imageUrl={ursinho_pegando_no_sono}
        bgColor={colors.purple}
        textColor={colors.white}
        title="At night"
        text="But every day, when the Teddy Bear can't stand to stay up talking to Pandinha any longer, they say goodbye and sleep together."
        btnText="Sleeps later..."
        btnBack="Back"
        sequency="16"
      />
      <Screen
        imageUrl={ursinhos_dormindo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="And finally sleep"
        text="See, they have a hard time sometimes, and they cry, and they get angry... but when everything falls into place, they love each other a lot and laugh."
        btnText="They sleep"
        btnBack="Back"
        sequency="17"
      />
      <Screen
        imageUrl={ericS2julyna}
        bgColor={colors.red}
        textColor={colors.white}
        title="Happy Valentine's Day"
        text="Finally ... I hope you like my stupid story, as I want our love will always cute like the one of Teddy & Pandinha."
        quote="I love you, July Na like I never loved anyone... ~Eric"
        btnText="End"
        btnBack="Back"
        sequency="18"
      />
    </div>
  );
};

export default App;
